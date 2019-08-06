from upload2Qcloud import uploadFile
import numpy as np
import SimpleITK as sitk
import matplotlib.pyplot as plt
from scipy import ndimage
import qrcode
import pymysql
import urllib.request
import urllib.parse
import json

appid = ''
appsecret=''
sqlsecret = ''
#获取TOKEN
def getToken(appid,appsecret):
	url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={appid}&secret={appsecret}'.format(appid=appid,appsecret=appsecret)
	headers = {
		'User-Agent': 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
	}
	request = urllib.request.Request(url,headers=headers)
	response = urllib.request.urlopen(request)
	readData = response.read()
	readData = readData.decode('utf-8')
	obj = json.loads(readData)
	print(obj)
	print(obj['access_token'])
	return obj['access_token']

"""
    生成小程序二维码
"""
def getACodeImage(token,file,id):
	#这个是微信获取小程序码的接口
	url = 'https://api.weixin.qq.com/wxa/getwxacode?access_token={token}'.format(token=token)
	#准备一下头
	headers = {
		'User-Agent': 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
	}
	#用Post传值，这里值用JSON的形式
	values = {"path": "?id={}".format(id)}
	#将字典格式化成能用的形式,urlencode不能用
	#data = urllib.parse.urlencode(values).encode('utf-8')
	#使用json.dumps的方式序列化为字符串，然后bytes进行编码
	data = json.dumps(values)
	data=bytes(data,'utf8')
	#创建一个request,放入我们的地址、数据、头
	request = urllib.request.Request(url, data, headers)
	#将获取的数据存在本地文件
	readData = urllib.request.urlopen(request).read()
	f=open(file,"wb")
	f.write(readData)
	f.close()

"""
    获得病例ID
"""
def getRandomID():
    return str(np.random.randint(100000,999999))

"""
    判断图片是否合适
"""
def isOKImage(image):
    if((image > 0).sum() > 16500):
        return True
    else:
        return False


"""
    将id, detail插入数据库中
"""
def SqlInsert(db, cursor, id, detail):
    try:
        #执行sql
        cursor.execute('INSERT INTO `sliceImage` (`id`, `detail`) VALUES (%s, %s)', (str(id), detail))
        db.commit()
    except:
        #发生异常
        print("Wrong")
        db.rollback()

if __name__ == "__main__":
    db = pymysql.connect(host = 'cdb-7vadkr3g.bj.tencentcdb.com', port = 10011, user = 'root', 
                            passwd = sqlsecret, db = 'slice', charset="utf8") #与云数据库链接
    cursor = db.cursor()
    # detail 为病情简介
    detail = "今年“六一”是我在小学过的第四个儿童节，虽然离节日还有几天，但是我已经感受到了节日的喜庆。为了过好这个六一，我精心策划了丰富多彩的节目：有唱歌、画画、变魔术等等。策划这么多节目，就是为了让我的六一儿童节过的更难忘，更有意义。"
    root = 	"https://slice-1257919653.cos.ap-beijing.myqcloud.com/" # 腾讯云对象存储地址

    t1 = sitk.GetArrayFromImage(sitk.ReadImage("t1.nii.gz")) # 相应的nii.gz例子
    t1 = t1.transpose(2, 1, 0)
    t1 = ((t1/t1.max())*255)
    id = getRandomID() # 随机获得病例ID
    flag = 0
    slice = 0
    nameList = []
    while(True):
        image = t1[:,:,slice]
        if (image.max() > 0 and isOKImage(image)):
            name = id + "_" + str(flag) + ".jpg"
            nameList.append(name)
            image = ndimage.rotate(image,90)
            plt.imsave(name, image, cmap='gray') # 可能需要彩色的Segmentation
            flag = flag + 1
        slice += 3
        if (flag == 10):
            break

    # 生成特定病例id下的小程序二维码
    token = getToken(appid,appsecret)
    getACodeImage(token,'wxCode.jpg',id)

    # 将名字课表里的图片上传到腾讯云对象存储中
    uploadFile(nameList)

    # 将id与病情简介传入数据库中
    SqlInsert(db,cursor,id, detail)
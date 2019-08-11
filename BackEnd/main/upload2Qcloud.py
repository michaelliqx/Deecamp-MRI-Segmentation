from qcloud_cos import CosConfig
from qcloud_cos import CosS3Client
import sys
import logging
import os
import shutil

logging.basicConfig(level=logging.INFO, stream=sys.stdout)

secret_id = 'AKIDwqggXBGgWR315DDCfWEqJj2HzZHwxsgR'      # 替换为用户的 secretId
secret_key = 'xz2wgKozndM0VuibQ6nU4Wo150MtNOQT'      # 替换为用户的 secretKey
region = 'ap-beijing'     # 替换为用户的 Region
token = None                # 使用临时密钥需要传入 Token，默认为空，可不填
scheme = 'https'            # 指定使用 http/https 协议来访问 COS，默认为 https，可不填
config = CosConfig(Region=region, SecretId=secret_id, SecretKey=secret_key, Token=token, Scheme=scheme)
# 2. 获取客户端对象
client = CosS3Client(config)
# 参照下文的描述。或者参照 Demo 程序，详见 https://github.com/tencentyun/cos-python-sdk-v5/blob/master/qcloud_cos/demo.py

response = client.list_buckets()

def uploadFile(nameList):
    for name in nameList:
        with open(name, 'rb') as fp:
            response = client.put_object(
                Bucket='slice-1257919653',
                Body=fp,
                Key=name,
                StorageClass='STANDARD',
                EnableMD5=False
            )
        # os.remove(name)
        shutil.move(name,'BackEnd/static/build/'+name)
        print('here')
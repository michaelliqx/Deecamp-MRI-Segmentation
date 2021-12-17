import SimpleITK as sitk
import numpy as np
import cv2
import matplotlib.pyplot as plt
import os
import h5py

def preprocess_image(path,way='box'):

    image = sitk.ReadImage(path)
    image_array = sitk.GetArrayViewFromImage(image)

    image_array_nozero = image_array[image_array!=0]
    if way=='box':
        array_len = len(image_array_nozero)
        image_array_nozero=sorted(image_array_nozero)
        q1 = image_array_nozero[int(array_len / 4)]
        q2 = image_array_nozero[int(3 * array_len / 4)]
        iq = q2 - q1
        q1 = int(q1 - 1.5 * iq)
        q2 = int(q2 + 1.5 * iq)
        # q1=298
        # q2=594
        # print(q1,q2)
        image_array_clip=np.clip(image_array, q1, q2)
        # print(np.max(image_array))
        output = ((image_array_clip-q1)/(q2-q1)*255.0).astype(int)
    else:
        mean = np.mean(image_array_nozero)
        std = np.std(image_array_nozero)
        image_array_norm = (image_array-mean)/std
        min = np.min(image_array_norm)
        max = np.max(image_array_norm)
        output = ((image_array_norm -min)/(max-min)*255.0).astype(int)

    return output

def slice_nii(image_path):
    #将三维图像切片并保存
    image_dir_path = os.path.split(image_path)[-1]
    print(image_dir_path+'=========')
    if not os.path.exists('./test/'+image_dir_path):
        os.makedirs('./test/'+image_dir_path)

    image_list = [preprocess_image(os.path.join(image_path, image_dir_path + '_'+i+'.nii.gz'))
         for i in ['t1','t1ce','t2','flair']]

    image_seg = sitk.ReadImage(os.path.join(image_path,image_dir_path+'_seg.nii.gz'))
    label = sitk.GetArrayViewFromImage(image_seg)

    for i in range(1,image_list[0].shape[0]-1):

        if np.sum(label[i]) ==0:#如果该层全为0，跳过
            continue
        else:
            # print('save '+str(i))
            slice_fuction = lambda x:x[i-1:i+2].transpose(1,2,0) #前后三层保存为一张图像
            image_slice_list = [slice_fuction(image) for image in image_list]
            label_slice_list = [(label[i] == pix).astype(int) for pix in [1, 2, 4]]
            image_array=np.concatenate(image_slice_list,axis=-1)
            label_2=label_slice_list[1][:, :, np.newaxis]
            label2_array=np.concatenate([label_2,(label_2==0).astype(int)],axis=-1)
            data_list.append(image_array)
            label_list.append(label2_array)
    print(len(data_list))
    print(len(label_list))

            # 将处理后的数据保存为h5py文件
            # hf = h5py.File('./test/{}_{}.h5'.format(image_dir_path,str(i)), 'w')
            # hf['data'] = image_slice_list  # 将数据写入文件的主键data下面
            # hf['labels'] = label_slice_list
            # hf.close()
            for n, m in enumerate(['t1', 't1ce', 't2', 'flair']):
                cv2.imwrite('./test/{}/{}_{}_{}.png'.format(image_dir_path,image_dir_path,m,str(i)),image_slice_list[n])
            for n,pix in enumerate([1,2,4]):
                cv2.imwrite('./test/{}/{}_label{}_{}.png'.format(image_dir_path,image_dir_path,str(pix),str(i)), label_slice_list[n])

hgg_path_list = os.listdir('./MICCAI_BraTS_2019_Data_Training/HGG')
data_list=[]
label_list=[]
for path in hgg_path_list:
    slice_nii(os.path.join('./MICCAI_BraTS_2019_Data_Training/HGG',path))

# hf = h5py.File('./test/BraTS19_2013_11_1_96.h5', 'r')
# print(np.array(hf['data']).shape)

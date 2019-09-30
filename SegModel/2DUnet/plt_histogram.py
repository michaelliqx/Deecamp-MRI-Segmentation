import SimpleITK as sitk
import numpy as np

import matplotlib.pyplot as plt

image_flair = sitk.ReadImage('./BraTS19_2013_2_1/BraTS19_2013_2_1_flair.nii.gz')
image_t1 = sitk.ReadImage('./BraTS19_2013_2_1/BraTS19_2013_2_1_t1.nii.gz')
image_t1ce = sitk.ReadImage('./BraTS19_2013_2_1/BraTS19_2013_2_1_t1ce.nii.gz')
image_t2 = sitk.ReadImage('./BraTS19_2013_2_1/BraTS19_2013_2_1_t2.nii.gz')
image_seg = sitk.ReadImage('./BraTS19_2013_2_1/BraTS19_2013_2_1_seg.nii.gz')
image_array_flair = sitk.GetArrayViewFromImage(image_flair)
image_array_t1 = sitk.GetArrayViewFromImage(image_t1)
image_array_t1ce = sitk.GetArrayViewFromImage(image_t1ce)
image_array_t2 = sitk.GetArrayViewFromImage(image_t2)
image_array_seg = sitk.GetArrayViewFromImage(image_seg)

out = sitk.GetImageFromArray((image_array_seg==4).astype(np.int8))
sitk.WriteImage(out,'seg_4.nii.gz')


def preprocess_image(path,way='box'):
    '''
    数据预处理
    box为设定窗宽窗位，clip到一定范围，对mri图象这样处理不科学
    另外为zscore方法，将其归到0-1
    '''

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
        q2 = int(q2 + 3 * iq)
        # q1=298
        # q2=594
        print(q1,q2)
        image_array_clip=np.clip(image_array, q1, q2)
        print(np.min(image_array_clip),np.max(image_array_clip))
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



def histor(image_array,seg_array,mode_name):
    '''
    画出原图像与roi区域的灰度直方图
    '''

    image_array_nozero = image_array[image_array!=0]
    image_array_roi = image_array[seg_array!=0]
    image_array_nozero = sorted(image_array_nozero)

    array_len=len(image_array_nozero)

    q1 = image_array_nozero[int(array_len/4)]
    q2 = image_array_nozero[int(3*array_len/4)]
    iq = q2-q1
    q1 = int(q1-1.5*iq)
    q2 = int(q2+1.5*iq)
    # print(q1,q2)

    # plt.hist(image_array_nozero, rwidth=0.9,bins=100)
    plt.hist(image_array_roi, rwidth=0.9,bins=100,color='red')
    plt.hist(np.array([q1,q1]*1000),color='green',bins=100)
    plt.hist(np.array([q2,q2]*1000),color='green',bins=100)
    plt.title(mode_name)
    plt.show()


# image_norm_flair = preprocess_image('./BraTS19_2013_2_1/BraTS19_2013_2_1_flair.nii.gz',way='box')
# image_norm_t1 = preprocess_image('./BraTS19_2013_2_1/BraTS19_2013_2_1_t1.nii.gz',way='box')
# image_norm_t2 = preprocess_image('./BraTS19_2013_2_1/BraTS19_2013_2_1_t2.nii.gz',way='box')
# image_norm_t1ce = preprocess_image('./BraTS19_2013_2_1/BraTS19_2013_2_1_t1ce.nii.gz',way='box')
#
mode = 't1ce'
histor(eval('image_array_'+mode),image_array_seg,mode)
# -*- coding: utf-8 -*-
# Implementation of Wang et al 2017: Automatic Brain Tumor Segmentation using Cascaded Anisotropic Convolutional Neural Networks. https://arxiv.org/abs/1709.00382

# Author: Guotai Wang
# Copyright (c) 2017-2018 University College London, United Kingdom. All rights reserved.
# http://cmictig.cs.ucl.ac.uk
#
# Distributed under the BSD-3 licence. Please see the file licence.txt
# This software is not certified for clinical use.
#
from __future__ import absolute_import, print_function
import os
import sys


sys.path.append('./')
import numpy as np
import nibabel
import SimpleITK as sitk
# from util.data_process import load_3d_volume_as_array, binary_dice3d

def load_3d_volume_as_array(filename):
    if('.nii' in filename):
        return load_nifty_volume_as_array(filename)
    elif('.mha' in filename):
        return load_mha_volume_as_array(filename)
    raise ValueError('{0:} unspported file format'.format(filename))



def load_mha_volume_as_array(filename):
    img = sitk.ReadImage(filename)
    nda = sitk.GetArrayFromImage(img)
    return nda

def load_nifty_volume_as_array(filename, with_header = False):
    """
    load nifty image into numpy array, and transpose it based on the [z,y,x] axis order
    The output array shape is like [Depth, Height, Width]
    inputs:
        filename: the input file name, should be *.nii or *.nii.gz
        with_header: return affine and hearder infomation
    outputs:
        data: a numpy data array
    """
    img = nibabel.load(filename)
    data = img.get_data()
    data = np.transpose(data, [2,1,0])
    if(with_header):
        return data, img.affine, img.header
    else:
        return data

def binary_dice3d(s,g):
    """
    dice score of 3d binary volumes
    inputs:
        s: segmentation volume
        g: ground truth volume
    outputs:
        dice: the dice score
    """
    assert(len(s.shape)==3)
    [Ds, Hs, Ws] = s.shape
    [Dg, Hg, Wg] = g.shape
    assert(Ds==Dg and Hs==Hg and Ws==Wg)
    prod = np.multiply(s, g)
    s0 = prod.sum()
    s1 = s.sum()
    s2 = g.sum()
    dice = (2.0*s0 + 1e-10)/(s1 + s2 + 1e-10)
    return dice


def get_ground_truth_names(g_folder, patient_names_file):
   
    with open(patient_names_file) as f:
        content = f.readlines()
        patient_names = [x.strip() for x in content]
    full_gt_names = []
    for patient_name in patient_names:
        patient_dir = os.path.join(g_folder, patient_name)
        img_names = os.listdir(patient_dir)
        gt_name = None
        for img_name in img_names:
           
            if 'seg.' in img_name:
                gt_name = img_name
                break
        gt_name = os.path.join(patient_dir, gt_name)
        full_gt_names.append(gt_name)
    return full_gt_names


def get_segmentation_names(seg_folder, patient_names_file):
    with open(patient_names_file) as f:
        content = f.readlines()
        patient_names = [x.strip() for x in content]
    full_seg_names = []
    for patient_name in patient_names:
        seg_name = os.path.join(seg_folder, patient_name + '.nii.gz')
        full_seg_names.append(seg_name)
    return full_seg_names


def dice_of_brats_data_set(gt_names, seg_names, type_idx):
    assert (len(gt_names) == len(seg_names))
    dice_all_data = []
    for i in range(len(gt_names)):
        g_volume = load_3d_volume_as_array(gt_names[i])
        s_volume = load_3d_volume_as_array(seg_names[i])
        dice_one_volume = []
        if (type_idx == 0):  # whole tumor
            temp_dice = binary_dice3d(s_volume > 0, g_volume > 0)
            dice_one_volume = [temp_dice]
        elif (type_idx == 1):  # tumor core
            s_volume[s_volume == 2] = 0
            g_volume[g_volume == 2] = 0
            temp_dice = binary_dice3d(s_volume > 0, g_volume > 0)
            dice_one_volume = [temp_dice]
        else:
            for label in [1, 2, 3, 4]:  # dice of each class
                temp_dice = binary_dice3d(s_volume == label, g_volume == label)
                dice_one_volume.append(temp_dice)
        dice_all_data.append(dice_one_volume)
    return dice_all_data


if __name__ == '__main__':
   

   
    s_folder = 'result19'#模型预测的图片路径
    
    g_folder = '/data/data/data_2019/MICCAI_BraTS_2019_Data_Training'#真实label路径
    patient_names_file = 'config19/data19-test.txt'#测试集文件

        

    test_types = ['whole', 'core', 'all']
    gt_names = get_ground_truth_names(g_folder, patient_names_file)
    seg_names = get_segmentation_names(s_folder, patient_names_file)
    for type_idx in range(3):
        dice = dice_of_brats_data_set(gt_names, seg_names, type_idx)
        dice = np.asarray(dice)
        dice_mean = dice.mean(axis=0)
        dice_std = dice.std(axis=0)
        test_type = test_types[type_idx]
#         np.savetxt(s_folder + '/dice_{0:}.txt'.format(test_type), dice)
#         np.savetxt(s_folder + '/dice_{0:}_mean.txt'.format(test_type), dice_mean)
#         np.savetxt(s_folder + '/dice_{0:}_std.txt'.format(test_type), dice_std)
        print('tissue type', test_type)
        if (test_type == 'all'):
            print('tissue label', [1, 2, 3, 4])
        print('dice mean  ', dice_mean)
        print('dice std   ', dice_std)


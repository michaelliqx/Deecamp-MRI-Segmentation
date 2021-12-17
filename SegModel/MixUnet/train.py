from __future__ import absolute_import, print_function
from  Code.Model.MixUnet import *
import tensorflow as tf
import Code.Config.Config
from Code.Model.load_data import *
import nibabel as nib
import matplotlib.pyplot as plt
import numpy as np
import random
from scipy import ndimage
import time
import os
import sys


import nibabel as nib
from Code.Model.train_test_func import *
from Code.Model.parse_config import parse_config


# def main():
#     img_path  = "../Data/BraTS19_2013_2_1/BraTS19_2013_2_1_flair.nii.gz"
#
#     train_imgs = nib.load(img_path).get_data()
#
#     # plt.imshow(train_imgs[:, :, 85], cmap='gray')  # channel_last
#     # plt.show()
#
#
#     # model = MixModel()
#     #
#     #
#     # model.fit(train_imgs, train_labels, epochs=EPOCHS)
#
#     # model.evaluate(test_imgs,test_label)
#
#
# if __name__ == '__main__':
#     main()


import os
import SimpleITK as sitk
import numpy as np
import nibabel as nib


def train(config_file):
    # model
    model = MixModel()

    '''
    load data
    '''
    # img_dir_hgg = '/data/data/data_2019/MICCAI_BraTS_2019_Data_Training/HGG'
    # img_dir_lgg = '/data/data/data_2019/MICCAI_BraTS_2019_Data_Training/LGG'
    # img_path_hgg = os.listdir(img_dir_hgg)
    # img_path_lgg = os.listdir(img_dir_lgg)
    # # print("test1:",img_path_hgg)
    #
    # img_list = []
    # seg_list = []
    # train_data_list = []
    # train_label_list = []
    #
    # for i, path in enumerate(img_path_hgg):
    #     new_path = os.path.join(img_dir_hgg, path)
    #     print(i)
    #     file_loader(new_path, train_data_list, train_label_list)
    #     train_data_norm = preprocess_image(train_data_list)
    #
    # '''
    # store data
    # '''
    # del img_list, seg_list, train_data_list
    # file = open('train_data.txt', 'w')
    # file.write(str(train_data_norm));
    # file.close()
    #
    # file = open('test_data.txt', 'w')
    # file.write(str(train_label_list));
    # file.close()




if __name__ == '__main__':
    # if (len(sys.argv) != 2):
    #     print('Number of arguments should be 2. e.g.')
    #     print('    python train.py config17/train_wt_ax.txt')
    #     exit()
    # config_file = str(sys.argv[1])
    # assert (os.path.isfile(config_file))
    # train(config_file)
    train()
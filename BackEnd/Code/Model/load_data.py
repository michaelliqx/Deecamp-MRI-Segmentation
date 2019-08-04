# load data
import os
import nibabel as nib
import numpy as np

def file_loader(img_dir, img_slice_list, seg_slice_list):
    # 包含4个模态中的所有数据矩阵
    data_matrix = []
    seg_matrix = []

    # 4个不同的模态，还有seg作为label
    for img_path in os.listdir(img_dir):

        # 1张图像中的所有数据
        img_data = nib.load(os.path.join(img_dir + "/" + img_path))
        if "seg" in img_path:
            seg_list.append(img_path)

            seg_matrix.append(img_data.get_data())
        else:
            img_list.append(img_path)
            # 一张图像中的数据矩阵
            data_matrix.append(img_data.get_data())
    # 把一张图像中的矩阵分成3个一组的slice
    for i in range(0, len(data_matrix), 4):
        data_slicer(data_matrix[i:i + 4], img_slice_list)
    for seg in seg_matrix:
        seg_slicer(seg, seg_slice_list)
    del data_matrix, seg_matrix
    return (img_slice_list, seg_slice_list)


def data_slicer(data_matrix, img_slice_list):
    tmp = np.array(data_matrix)

    for j in range(0, tmp.shape[3], 3):
        if j + 3 > tmp.shape[3]:
            continue
        else:
            tmp2 = np.concatenate([tmp[i, :, :, j:j + 3] for i in range(4)], axis=2)
            img_slice_list.append(tmp2)


def seg_slicer(data, img_slice_list):
    for i in np.arange(0, data.shape[2], 3):
        if i + 3 >= data.shape[2]:
            continue
        else:
            new_data = data[:, :, i:i + 3]
            img_slice_list.append(new_data)


def preprocess_image(train_data_list):
    train_data_norm = []
    for data in train_data_list:
        mean = np.mean(data)
        std = np.std(data)
        if mean != 0:
            image_array_norm = (data - mean) / std
        else:
            image_array_norm = data
        train_data_norm.append((image_array_norm))
    return train_data_norm


# 路径
# img_dir_hgg = '/data/data/data_2019/MICCAI_BraTS_2019_Data_Training/HGG'
# img_dir_lgg = '/data/data/data_2019/MICCAI_BraTS_2019_Data_Training/LGG'
# img_path_hgg = os.listdir(img_dir_hgg)
# img_path_lgg = os.listdir(img_dir_lgg)
#
img_list = []
seg_list = []
# test_data_list = []
# test_label_list = []
#
# for i, path in enumerate(img_path_hgg[70:71]):
#     new_path = os.path.join(img_dir_hgg, path)
#
#     print(i)
#     file_loader(new_path, test_data_list, test_label_list)
#     test_data_norm = preprocess_image(test_data_list)
#
# del img_list, seg_list, test_data_list

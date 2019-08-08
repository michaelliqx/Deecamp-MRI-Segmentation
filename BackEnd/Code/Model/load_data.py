# load data
import os
import numpy as np
import SimpleITK as sitk


def preprocess_image(path,mode):
    mean_dic = {'t1': 571.9797950642566,
                't2': 652.5108311159906,
                'flair': 411.40469948331236,
                't1ce': 637.504972868884}
    std_dic = {'t1': 153.44956973338495,
               't2': 260.8960795594689,
               'flair': 129.84188235759058,
               't1ce': 178.3635998048739}
    # print(path)
    image = sitk.ReadImage(path)
    image_array = sitk.GetArrayViewFromImage(image)
    if 't1' in mode:
        image_array_norm = (image_array - mean_dic['t1']) / std_dic['t1']
    elif 't2' in mode:
        image_array_norm = (image_array - mean_dic['t2']) / std_dic['t2']
    elif 't1ce' in mode:
        image_array_norm = (image_array - mean_dic['t1ce']) / std_dic['t1ce']
    else:
        image_array_norm = (image_array - mean_dic['flair']) / std_dic['flair']

    return image_array_norm


def predict_slice_nii(image_dir_path):

    image_path = os.listdir(image_dir_path)
    filename = []
    for imgs in image_path:
        types = ['nii', 'gz']
        if imgs.split('.')[-1] in types:
            filename.append(imgs)

    image_list = [preprocess_image(os.path.join(image_dir_path +'/'+ img),img) for img in filename]
    # image_seg = sitk.ReadImage(os.path.join(image_path, image_dir_path + '_seg.nii.gz'))
    data_list = []
    for i in range(1, image_list[0].shape[0] - 1):
        slice_fuction = lambda x: x[i - 1:i + 2].transpose(1, 2, 0)
        image_slice_list = [slice_fuction(image) for image in image_list]
        image_array = np.concatenate(image_slice_list, axis=-1).astype(np.float16)
        data_list.append(image_array)
    # print('slice done')
    return data_list


def predict(image_dir_path, model):

    data_list = predict_slice_nii(image_dir_path)
    # print('prediction')
    pedict = model.predict(np.array(data_list))
    pred = np.argmax(pedict[:, :, :, :], axis=-1).astype(np.int8)
    # label = sitk.GetArrayViewFromImage(image_seg)
    pred_out = sitk.GetImageFromArray(pred)
    # pred_out.SetSpacing(image_seg.GetSpacing())
    # pred_out.SetOrigin(image_seg.GetOrigin())
    sitk.WriteImage(pred_out, os.path.join(image_dir_path+'/pred.nii.gz'))

    pred_list = [(pred == i).astype(np.int8) for i in [1, 2, 3]]
    # label_list = [(label == i).astype(np.int8) for i in [1, 2, 4]]
    for i, pred_ in enumerate(pred_list):
        out = sitk.GetImageFromArray(pred_)
        # out.SetSpacing(image_seg.GetSpacing())
        # out.SetOrigin(image_seg.GetOrigin())
        sitk.WriteImage(out, 'pred_{}.nii.gz'.format(str(i)))
    # for i, pred_ in enumerate(label_list):
    #     out = sitk.GetImageFromArray(pred_)
    #     out.SetSpacing(image_seg.GetSpacing())
    #     out.SetOrigin(image_seg.GetOrigin())
    #     sitk.WriteImage(out, 'label_{}.nii.gz'.format(str(i)))




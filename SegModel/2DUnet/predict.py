import SimpleITK as sitk
import numpy as np
import os
from tensorflow import keras
mean_dic = {'t1': 571.9797950642566,
            't2': 652.5108311159906,
            'flair': 411.40469948331236,
            't1ce': 637.504972868884}
std_dic = {'t1': 153.44956973338495,
           't2': 260.8960795594689,
           'flair': 129.84188235759058,
           't1ce': 178.3635998048739}
def preprocess_image(path, mode):
    image = sitk.ReadImage(path)
    image_array = sitk.GetArrayViewFromImage(image)
    image_array_norm = (image_array - mean_dic[mode]) / std_dic[mode]
    return image_array_norm


def predict_slice_nii(image_dir_path):
    image_path = os.path.join(image_dir_path)
    image_list = [preprocess_image(os.path.join(image_path, image_dir_path + '_' + mode + '.nii.gz'), mode)
                  for mode in ['t1', 't1ce', 't2', 'flair']]
    image_seg = sitk.ReadImage(os.path.join(image_path, image_dir_path + '_seg.nii.gz'))
    data_list = []
    for i in range(1, image_list[0].shape[0] - 1):
        slice_fuction = lambda x: x[i - 1:i + 2].transpose(1, 2, 0)
        image_slice_list = [slice_fuction(image) for image in image_list]
        image_array = np.concatenate(image_slice_list, axis=-1).astype(np.float16)
        data_list.append(image_array)
    print('slice done')
    return data_list, image_seg


def predict(image_dir_path, model):
    data_list, image_seg = predict_slice_nii(image_dir_path)
    pedict = model.predict(np.array(data_list))
    pred = np.argmax(pedict[:, :, :, :], axis=-1).astype(np.int8)
    label = sitk.GetArrayViewFromImage(image_seg)
    pred_out = sitk.GetImageFromArray(pred)
    pred_out.SetSpacing(image_seg.GetSpacing())
    pred_out.SetOrigin(image_seg.GetOrigin())
    sitk.WriteImage(pred_out, 'pred.nii.gz')

    pred_list = [(pred == i).astype(np.int8) for i in [1, 2, 3]]
    label_list = [(label == i).astype(np.int8) for i in [1, 2, 4]]
    for i, pred_ in enumerate(pred_list):
        out = sitk.GetImageFromArray(pred_)
        out.SetSpacing(image_seg.GetSpacing())
        out.SetOrigin(image_seg.GetOrigin())
        sitk.WriteImage(out, 'pred_{}.nii.gz'.format(str(i)))
    for i, pred_ in enumerate(label_list):
        out = sitk.GetImageFromArray(pred_)
        out.SetSpacing(image_seg.GetSpacing())
        out.SetOrigin(image_seg.GetOrigin())
        sitk.WriteImage(out, 'label_{}.nii.gz'.format(str(i)))


Unet = keras.models.load_model('model_18.h5')

predict('BraTS19_2013_2_1', Unet)




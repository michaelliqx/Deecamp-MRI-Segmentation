import os, glob, sys
import numpy as np

import SimpleITK as sitk

import math
from radiomics import firstorder, glcm, shape, glrlm


import joblib



def read_seg(path, is_train):
    # print('path', path)
    if is_train:
        label = sitk.GetArrayFromImage(sitk.ReadImage(glob.glob(os.path.join(path, 'pred2.nii.gz'))[0]))
        # print('label:',sum(sum(label)))
    else:
        label = sitk.GetArrayFromImage(sitk.ReadImage(path))
    label = label.astype(np.uint8)
    return label


def read_seg_path(path, is_train):
    if is_train:
        name = glob.glob(os.path.join(path, 'pred2.nii.gz'))[0]
        name = sitk.ReadImage(name)
        name_array = sitk.GetArrayFromImage(name)
        name_array[name_array == 2] = 1
        name_array[name_array == 3] = 1
        label = sitk.GetImageFromArray(name_array)
    else:
        name = sitk.ReadImage(path)
        name_array = sitk.GetArrayFromImage(name)
        name_array[name_array == 2] = 1
        name_array[name_array == 3] = 1
        label = sitk.GetImageFromArray(name_array)

    return label


def read_origin_image(path):
    files = []
    print('path:',path)
    all_file_list = glob.glob(os.path.join(path, '*.nii.gz'))
    print('all_file_list',all_file_list)
    for fn in all_file_list:
        if not os.path.basename(fn).endswith('pred2.nii.gz'):
            image = sitk.GetArrayFromImage(sitk.ReadImage(fn))
            image = image.astype(np.float32)
            files.append(image)
    files = np.array(files)

    return files


def read_origin_image_path(path):
    print('test_path:',path)
    files = []
    all_file_list = glob.glob(os.path.join(path, '*.nii.gz'))

    for fn in all_file_list:
        if not os.path.basename(fn).endswith('pred2.nii.gz'):
            image = sitk.ReadImage(fn)
            files.append(image)

    return files


def get_size_length(label):
    size = np.sum(label)
    b = np.gradient(label)
    length = np.sum(np.sqrt(b[0] * b[0] + b[1] * b[1] + b[2] * b[2]))
    return size, length


def get_array_nozero_number(array):
    b = np.nonzero(array)
    b = np.transpose(b)
    number = b.shape[0]
    return number


def get_brain_radius(original_image):
    list = []
    for i in range(original_image.shape[0]):
        brain_v = get_array_nozero_number(original_image)
        list.append(brain_v)

    brain_v_mean = np.array(list)

    brain_v_mean = np.mean(brain_v_mean, axis=0)

    brain_radius = pow(3 / 4 * brain_v_mean / math.pi, 1 / 3)

    return brain_radius


def get_centroid(array):
    assert (array.ndim == 3)
    b = np.nonzero(array)
    b = np.transpose(b)
    list = []
    # print("b: ",b)
    for i in range(array.ndim):
        b_axis = np.mean(b[:, i])
        # print("b[:,i]: ",b[:,i])
        # print("b_axis: ",b_axis)
        list.append(b_axis)
    return list


def get_brain_centroid(array):
    list = []
    for i in range(array.shape[0]):
        centroid = get_centroid(array[i, :, :, :])
        list.append(centroid)
    brain_array = np.array(list)

    brain_centroid = np.mean(brain_array, axis=0)
    return brain_centroid


def get_mapping_relations(original_image, label):
    brain_radius = get_brain_radius(original_image)
    brain_centroid = get_brain_centroid(original_image)
    tumor_centroid = get_centroid(label)
    # print("brain_radius: ",brain_radius)
    # print("brain_centroid: ",brain_centroid)
    # print("tumor_centroid: ",tumor_centroid)
    result = (tumor_centroid - brain_centroid) / brain_radius

    return result


def get_width(array):  # array为3维数组
    b = np.nonzero(array)
    b = np.transpose(b)
    result = []
    print(b)
    if b.size == 0:
        result = [0, 0, 0]
    else:
        for i in range(b.shape[1]):
            max = np.max(b[i])
            min = np.min(b[i])
            width = max - min
            result.append(width)
    return result


def get_label_mapping(label, label_name):
    label_list = [0, 1, 2, 4]
    label_name_list = ["whole tumor", "tumor core", "enhancing core"]
    if label_name == label_name_list[0]:
        label_code = [0, 1, 1, 1]
    elif label_name == label_name_list[1]:
        label_code = [0, 1, 0, 1]
    elif label_name == label_name_list[2]:
        label_code = [0, 0, 0, 1]
    result = convert_label(label, label_list, label_code)
    return result


def convert_label(in_volume, label_convert_source, label_convert_target):
    """
    convert the label value in a volume
    inputs:
        in_volume: input nd volume with label set label_convert_source
        label_convert_source: a list of integers denoting input labels, e.g., [0, 1, 2, 4]
        label_convert_target: a list of integers denoting output labels, e.g.,[0, 1, 2, 3]
    outputs:
        out_volume: the output nd volume with label set label_convert_target
    """
    mask_volume = np.zeros_like(in_volume)
    convert_volume = np.zeros_like(in_volume)
    for i in range(len(label_convert_source)):
        source_lab = label_convert_source[i]
        target_lab = label_convert_target[i]
        if (source_lab != target_lab):
            temp_source = np.asarray(in_volume == source_lab)
            temp_target = target_lab * temp_source
            mask_volume = mask_volume + temp_source
            convert_volume = convert_volume + temp_target
    out_volume = in_volume * 1
    out_volume[mask_volume > 0] = convert_volume[mask_volume > 0]
    return out_volume


def get_polar_coordinates(mapping_relation):
    assert (len(mapping_relation) == 3)
    x = mapping_relation[0]
    y = mapping_relation[1]
    z = mapping_relation[2]

    r = math.pow((math.pow(x, 2) + math.pow(y, 2) + math.pow(z, 2)), 1 / 2)

    phi = math.atan(y / x) / math.pi * 180

    theta = math.atan(math.pow(math.pow(x, 2) + math.pow(y, 2), 1 / 2) / z) / math.pi * 180

    list = [r, phi, theta]

    return list


def get_cityblock_distance(mapping_relation):
    assert (len(mapping_relation) == 3)
    x = mapping_relation[0]
    y = mapping_relation[1]
    z = mapping_relation[2]

    cityblock = abs(x) + abs(y) + abs(z)

    return cityblock


def get_chebyshev_distance(mapping_relation):
    assert (len(mapping_relation) == 3)
    x = mapping_relation[0]
    y = mapping_relation[1]
    z = mapping_relation[2]

    chebyshev = max(abs(x), abs(y), abs(z))

    return chebyshev


def get_first_order_statistics(original_image, origin_label):
    # print("original_image.shape",original_image.shape)
    list = []
    print('original_img:',original_image)
    print('origin_label:',origin_label)
    for item in range(len(original_image)):
        firstOrderFeatures = firstorder.RadiomicsFirstOrder(original_image[item], origin_label)
        firstOrderFeatures.enableAllFeatures()
        firstOrderFeatures.calculateFeatures()

        energy = firstOrderFeatures.getEnergyFeatureValue()
        list.append(energy)

        entropy = firstOrderFeatures.getEntropyFeatureValue()
        list.append(entropy)

        kurtosis = firstOrderFeatures.getKurtosisFeatureValue()
        list.append(kurtosis)

        maximum = firstOrderFeatures.getMaximumFeatureValue()
        list.append(maximum)

        mean = firstOrderFeatures.getMeanFeatureValue()
        list.append(mean)

        median = firstOrderFeatures.getMedianFeatureValue()
        list.append(median)

        minimum = firstOrderFeatures.getMinimumFeatureValue()
        list.append(minimum)

        firstOrderFeatures_range = firstOrderFeatures.getRangeFeatureValue()
        list.append(firstOrderFeatures_range)

        rms = firstOrderFeatures.getRootMeanSquaredFeatureValue()
        list.append(rms)

        skewness = firstOrderFeatures.getSkewnessFeatureValue()
        list.append(skewness)

        std = firstOrderFeatures.getStandardDeviationFeatureValue()
        list.append(std)

        uniformity = firstOrderFeatures.getUniformityFeatureValue()
        list.append(uniformity)

        variance = firstOrderFeatures.getVarianceFeatureValue()
        list.append(variance)

    return list


def get_shape_and_size(original_image, origin_label):
    list = []
    for i in range(len(original_image)):
        radiomicsshapeFeatures = shape.RadiomicsShape(original_image[i], origin_label)
        radiomicsshapeFeatures.enableAllFeatures()
        radiomicsshapeFeatures.calculateFeatures()

        compactness1 = radiomicsshapeFeatures.getCompactness1FeatureValue()
        list.append(compactness1)

        compactness2 = radiomicsshapeFeatures.getCompactness2FeatureValue()
        list.append(compactness2)

        spherical_disproportion = radiomicsshapeFeatures.getSphericalDisproportionFeatureValue()
        list.append(spherical_disproportion)

        sphericity = radiomicsshapeFeatures.getSphericityFeatureValue()
        list.append(sphericity)

        surface_area = radiomicsshapeFeatures.getSurfaceAreaFeatureValue()
        list.append(surface_area)

        svr = radiomicsshapeFeatures.getSurfaceVolumeRatioFeatureValue()
        list.append(svr)

        volume = radiomicsshapeFeatures.getVoxelVolumeFeatureValue()
        list.append(volume)
    return list


def get_glcm_features(original_image, origin_label):
    list = []
    for i in range(len(original_image)):
        radiomicsGLCMFeatures = glcm.RadiomicsGLCM(original_image[i], origin_label)
        radiomicsGLCMFeatures.enableAllFeatures()
        radiomicsGLCMFeatures.calculateFeatures()

        glcm_energy = radiomicsGLCMFeatures.getJointEnergyFeatureValue()
        list.append(glcm_energy)

        glcm_entropy = radiomicsGLCMFeatures.getJointEntropyFeatureValue()
        list.append(glcm_entropy)

        glcm_correlation = radiomicsGLCMFeatures.getImc1FeatureValue()
        list.append(glcm_correlation)

        glcm_contrast = radiomicsGLCMFeatures.getContrastFeatureValue()
        list.append(glcm_contrast)

        glcm_sum_average = radiomicsGLCMFeatures.getSumAverageFeatureValue()
        list.append(glcm_sum_average)

        glcm_autocorrelation = radiomicsGLCMFeatures.getAutocorrelationFeatureValue()
        list.append(glcm_autocorrelation)

        glcm_cluster_shade = radiomicsGLCMFeatures.getClusterShadeFeatureValue()
        list.append(glcm_cluster_shade)

        glcm_cluster_tendency = radiomicsGLCMFeatures.getClusterTendencyFeatureValue()
        list.append(glcm_cluster_tendency)

        glcm_maximum_probability = radiomicsGLCMFeatures.getMaximumProbabilityFeatureValue()
        list.append(glcm_maximum_probability)

        glcm_inverse_varience = radiomicsGLCMFeatures.getInverseVarianceFeatureValue()
        list.append(glcm_inverse_varience)
    return list


def get_glrl_features(original_image, origin_label):
    list = []
    for i in range(len(original_image)):
        radiomicsGLRLFeatures = glrlm.RadiomicsGLRLM(original_image[i], origin_label)
        radiomicsGLRLFeatures.enableAllFeatures()
        radiomicsGLRLFeatures.calculateFeatures()

        glrl_sre = radiomicsGLRLFeatures.getShortRunEmphasisFeatureValue()
        list.append(glrl_sre)

        glrl_lre = radiomicsGLRLFeatures.getLongRunEmphasisFeatureValue()
        list.append(glrl_lre)

        glrl_gln = radiomicsGLRLFeatures.getGrayLevelNonUniformityFeatureValue()
        list.append(glrl_gln)

        glrl_rln = radiomicsGLRLFeatures.getRunLengthNonUniformityFeatureValue()
        list.append(glrl_rln)

        glrl_rp = radiomicsGLRLFeatures.getRunPercentageFeatureValue()
        list.append(glrl_rp)

        glrl_lglre = radiomicsGLRLFeatures.getLowGrayLevelRunEmphasisFeatureValue()
        list.append(glrl_lglre)

        glrl_hglre = radiomicsGLRLFeatures.getHighGrayLevelRunEmphasisFeatureValue()
        list.append(glrl_hglre)

        glrl_srlgle = radiomicsGLRLFeatures.getShortRunLowGrayLevelEmphasisFeatureValue()
        list.append(glrl_srlgle)

        glrl_srhgle = radiomicsGLRLFeatures.getShortRunHighGrayLevelEmphasisFeatureValue()
        list.append(glrl_srhgle)

        glrl_lrhgl = radiomicsGLRLFeatures.getLongRunHighGrayLevelEmphasisFeatureValue()
        list.append(glrl_lrhgl)

        glrl_lrlgle = radiomicsGLRLFeatures.getLongRunLowGrayLevelEmphasisFeatureValue()
        list.append(glrl_lrlgle)
    return list


def get_features_change(features):
    features_result = []
    feature_list_src = [4, 6, 8, 9, 13, 14, 16, 25, 26, 27, 28, 38, 44, 51, 61, 70, 77, 138, 152, 162, 167, 169, 191]
    feature_list_des = [51, 9, 138, 4, 77, 162, 169, 152, 44, 26, 14, 70, 6, 27, 25, 16, 61, 13, 191, 167, 28, 8, 38]
    for value in feature_list_des:
        src_index = feature_list_src.index(value)
        features_result.append(features[src_index])
    return features_result


def get_features(path_image, path_seg, original_image, origin_label, age, status):
    features = []
    # print("len(features): ", len(features))#---------0
    label_name_list = ["whole tumor", "tumor core", "enhancing core"]

    # print("len(features): ", len(features))#----------9
    label_tc = get_label_mapping(origin_label, label_name_list[1])
    s_tc, l_tc = get_size_length(label_tc.astype(np.float32))

    features.append(l_tc)  #####4

    label_ec = get_label_mapping(origin_label, label_name_list[2])
    s_ec, l_ec = get_size_length(label_ec.astype(np.float32))
    features.append(s_ec)  ############6
    features.append(l_ec / s_ec)  ###########8

    features.append(float(age)) ###########9

    label_wt = get_label_mapping(origin_label, label_name_list[0])
    mapping_relation = get_mapping_relations(original_image.astype(np.float32), label_wt.astype(np.float32))

    features.append(mapping_relation[1])  ###############13
    features.append(mapping_relation[2])  ###############14

    label = get_label_mapping(origin_label, label_name_list[0])
    width_list = get_width(label.astype(np.float32))
    features.append(width_list[1])  #################16

    polar_coordinates = get_polar_coordinates(mapping_relation)
    features.append(polar_coordinates[1])  #################25
    features.append(polar_coordinates[2])  #################26

    cityblock_distance = get_cityblock_distance(mapping_relation)
    features.append(cityblock_distance)  ##################27

    chebyshev_distance = get_chebyshev_distance(mapping_relation)
    features.append(chebyshev_distance)  ##################28

    image = read_origin_image_path(path_image)
    mask = read_seg_path(path_seg, True)

    first_order_statistics = get_first_order_statistics(image, mask)
    print('first_order_statics:',first_order_statistics)
    features.append(first_order_statistics[9][0])  ###########38
    features.append(first_order_statistics[15][0])  ###########44
    features.append(first_order_statistics[22][0])  ###########51
    features.append(first_order_statistics[32][0])  ###########61
    features.append(first_order_statistics[41][0])  ###########70
    features.append(first_order_statistics[48][0])  ###########77

    glcm_features = get_glcm_features(image, mask)
    features.append(glcm_features[29][0])  ################138

    glrl_features = get_glrl_features(image, mask)
    features.append(glrl_features[3][0])  ############152
    features.append(glrl_features[13][0])  ############162
    features.append(glrl_features[18][0])  ############167
    features.append(glrl_features[20][0])  ############169
    features.append(glrl_features[42][0])  ############191

    final_features = get_features_change(features)

    return final_features


def survival_prediction(age1,resection_status1):

    data_name = ['BraTS19_2013_2_1']
    age = [age1]
    resection_status = [resection_status1]

    path = os.getcwd() + '/BackEnd/main/static/imgs'
    img_list = os.listdir(path)
    # os.mkdir(path,'BraTS19_2013_2_1')
    # os.mkdir(path,'result')
    data_path = os.getcwd() + '/BackEnd/main/static/imgs/BraTS19_2013_2_1'
    data_seg_path = os.getcwd() + '/BackEnd/main/static/imgs/result'

    training_survival_model_file = os.path.join(os.getcwd()+'/BackEnd/main',
                                                "training003_survival_model_regular_select_f23_LassoCV" + "_" + '3' + ".pkl")

    X_mean = [0.6875638162307464, 60.47348499690478, 0.4153005131893603, 6948.6227799404805, 0.5508299700651967,
              5547.901153313296, 835.8498431286117, 34846.324580458655, 4.42414926782937, 2.4343038008268465,
              0.04050839795116908, 4.451075368005521, 21411.654761904763, 0.5603003075566753, -0.05733968323387347,
              96.7202380952381, 116.5297619047619, -0.02315110640484644, 882.420826095023, 0.01065437531109393,
              0.3035732417612436, 0.6214792356547615, 0.51284910015523]
    X_std = [0.8462732589112787, 12.146650925992526, 0.06274134737733163, 4181.321195618699, 0.8440571621120598,
             3683.0335364178873, 1072.3069741776742, 26141.62952550733, 2.851714762883275, 45.61423515709301,
             0.27273003235871934, 3.0250334695881693, 18814.420149116402, 0.12864015276615612, 55.076981815266286,
             32.10009004497793, 141.13620260463856, 0.202179519717731, 1351.33970232011, 0.011581885055234248,
             0.07100154020996641, 0.23826733884510293, 0.874866372449312]

    test_survival_data = {}

    for idex in range(len(data_name)):
        value = data_name[idex]
        test_survival_data[value] = (age[idex], resection_status[idex])

    #######提取特征
    X = []
    y_validation_list = []

    linear_reg_model = joblib.load(training_survival_model_file)

    for item in test_survival_data:

        feature_list = []

        path_image = data_path

        path_seg = data_seg_path

        features = get_features(path_image, path_seg, read_origin_image(path_image), read_seg(path_seg, True),
                                float(age1), resection_status1)

        features = np.asarray(features, dtype=np.float32)

        features_regular = (features - X_mean) / X_std

        X.append(features_regular)

        y_validation = linear_reg_model.predict(X)
        y_validation_list.append(y_validation[0])

        if y_validation[0] < 10 * 30:
            y_pre = "短（10个月以下）"
        elif y_validation[0] > 15 * 30:
            y_pre = "长（15个月以上）"
        else:
            y_pre = "中（10-15个月）"


        return y_pre






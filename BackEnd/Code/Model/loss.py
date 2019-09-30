from functools import partial
import tensorflow.keras.backend as K
import tensorflow as tf
from tensorflow.python.keras.losses import binary_crossentropy
from tensorflow.python.keras.backend import flatten,cast,sum,greater,log,abs,exp,clip,ones_like,pool2d,mean


def dice_coefficient(y_true, y_pred, smooth=1.):
    y_true_f = flatten(y_true)
    y_pred_f = flatten(y_pred)
    intersection = sum(y_true_f * y_pred_f)
    return (2. * intersection + smooth) / (sum(y_true_f) + sum(y_pred_f) + smooth)


def dice_coefficient_loss(y_true, y_pred):
    return -dice_coefficient(y_true, y_pred)


def weighted_dice_coefficient(y_true, y_pred, axis=(-3, -2, -1), smooth=0.00001):
    """
    Weighted dice coefficient. Default axis assumes a "channels first" data structure
    :param smooth:
    :param y_true:
    :param y_pred:
    :param axis:
    :return:
    """
    return mean(2. * (sum(y_true * y_pred,
                              axis=axis) + smooth/2)/(sum(y_true,
                                                            axis=axis) + sum(y_pred,
                                                                               axis=axis) + smooth))


def weighted_dice_coefficient_loss(y_true, y_pred):
    return -weighted_dice_coefficient(y_true, y_pred)


def label_wise_dice_coefficient(y_true, y_pred, label_index):
    return dice_coefficient(y_true[:, label_index], y_pred[:, label_index])


def get_label_dice_coefficient_function(label_index):
    f = partial(label_wise_dice_coefficient, label_index=label_index)
    f.__setattr__('__name__', 'label_{0}_dice_coef'.format(label_index))
    return f


def dice_loss(y_true, y_pred):
    return 1-dice(y_true, y_pred)

def dice(y_true, y_pred):
    y_true_f = K.flatten(y_true[:,:,:,1:])
    y_pred_f = K.flatten(y_pred[:,:,:,1:])
    intersection = K.sum(K.abs(y_true_f * y_pred_f))
    return (2. * intersection) / (K.sum(K.square(y_true_f)) + K.sum(K.square(y_pred_f)) + 1e-5)

dice_coef = dice_coefficient
dice_coef_loss = dice_coefficient_loss

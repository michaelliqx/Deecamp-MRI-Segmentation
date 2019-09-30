# -*- coding: utf-8 -*-
"""
Created on Mon Oct 30 19:44:02 2017

@author: user
"""
from model import unet
import tensorflow as tf
from model import Model
from keras.optimizers import *
import keras.backend as K

def dice_coef(y_true, y_pred):
    y_true_f = K.flatten(y_true)
    y_pred_f = K.flatten(y_pred)
    intersection = K.sum(y_true_f * y_pred_f)
    return 1- (2. * intersection + 1e-5) / (K.sum(y_true_f) + K.sum(y_pred_f) + 1e-5)

train_dataset = tf.data.Dataset.from_tensor_slices((data, labels))
train_dataset = train_dataset.batch(16)
val_dataset = tf.data.Dataset.from_tensor_slices((data, labels))
val_dataset = val_dataset.batch(32)

Unet = unet((240, 240, 12))
Unet.compile(optimizer=Adam(lr=1e-4), loss=dice_coef, metrics=['accuracy'])
Unet.fit(train_dataset,epochs=10)
Unet.evaluate(val_dataset)

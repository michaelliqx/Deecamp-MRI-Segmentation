import tensorflow as tf
from BackEnd.Code.Config.Config import *

from tensorflow.keras.layers import *
from tensorflow.python.keras.layers.convolutional import Conv2D, MaxPooling2D, UpSampling2D
from tensorflow.python.keras.layers.normalization import BatchNormalization
from tensorflow.python.keras.optimizers import Adam
from tensorflow.python.keras.models import Model
from BackEnd.Code.Model.loss import *


def MixModel(input_size=INPUT_SIZE, kernel_size=KERNEL_SIZE,
             activation=ACTIVATION,
             padding=PADDING,
             strides=STRIDES,
             kernel_initializer=KERNEL_INITIALIZER,
             pool_size=POOL_SIZE,
             model_depth=3,
             metrics=dice):
    inputs = tf.keras.Input(input_size, name="inputs")
    layer_list = list()
    conv2 = None
    current_filters = 32
    # down sampling
    for depth in range(model_depth):
        if depth == 0:
            inputs2 = Conv2D(64, 3, padding="same", activation="relu", kernel_initializer="he_normal")(inputs)
            continue
        # resnet block
        if depth > 1:
            #     cut = pol1
            current_filters = current_filters * (2 * depth)
        # if depth >1 and depth%2 == 0:
        #     cut2 = pol1

        #         print("depth and num_filters:",(depth,current_filters))

        if conv2 != None:
            conv1 = ConvBlock(pol1,
                              num_filters=current_filters,
                              kernel_size=kernel_size,
                              activation=activation,
                              padding=padding,
                              strides=strides,
                              kernel_initializer=kernel_initializer,
                              BN=True)
        else:
            conv1 = ConvBlock(inputs2,
                              num_filters=current_filters,
                              kernel_size=kernel_size,
                              activation=activation,
                              padding=padding,
                              strides=strides,
                              kernel_initializer=kernel_initializer,
                              BN=True)

        #         pol1 = MaxPooling2D(pool_size=POOL_SIZE)(conv1)

        # current_filters = current_filters * (depth**2)
        conv2 = ConvBlock(conv1,
                          num_filters=current_filters * 2,
                          kernel_size=kernel_size,
                          activation=activation,
                          padding=padding,
                          strides=strides,
                          kernel_initializer=kernel_initializer,
                          BN=True)

        #         print("conv1:",conv1.shape)
        #         print("conv2:", conv2.shape)

        if depth == model_depth - 1:
            conv2 = tf.keras.layers.Dropout(0.5)(conv2)

        pol1 = MaxPooling2D(pool_size=POOL_SIZE)(conv2)

        #         print("polshape:",pol1.shape)

        layer_list.append([conv1, conv2, pol1])
    #         print(layer_list)

    current_filters = pol1.shape[3]

    conv3 = Conv2D(1024, 3, padding="same", kernel_initializer="he_normal", activation="relu")(pol1)
    pol2 = MaxPooling2D(pool_size=POOL_SIZE)(conv3)
    conv4 = Conv2D(1024, 3, padding="same", kernel_initializer="he_normal", activation="relu")(pol2)
    up1 = UpSampling2D(size=POOL_SIZE)(conv4)
    conv5 = Conv2D(512, 3, padding="same", kernel_initializer="he_normal", activation="relu")(up1)

    # upsampling
    for depth in range(model_depth):
        if depth == 0:
            continue
        if depth == 1:
            up1 = UpSampling2D(size=POOL_SIZE)(conv5)

        if depth > 1:
            current_filters = int(current_filters / (2 * depth))
            up1 = UpSampling2D(size=POOL_SIZE)(up_conv2)
        #         print("up1shape:",up1.shape)
        #         print("num_filters:",(current_filters,depth))

        up_conv1 = upConvBlock(up1,
                               num_filters=current_filters,
                               kernel_size=kernel_size,
                               activation=activation,
                               padding=padding,
                               strides=strides,
                               kernel_initializer=kernel_initializer,
                               BN=True)
        #         print(layer_list)
        #         print("compare:",(up_conv1.shape,layer_list[model_depth-depth-1][1].shape))
        merge = tf.keras.layers.concatenate([up_conv1, layer_list[model_depth - depth - 1][0]], axis=3)

        up_conv2 = upConvBlock(merge,
                               num_filters=current_filters,
                               kernel_size=kernel_size,
                               activation=activation,
                               padding=padding,
                               strides=strides,
                               kernel_initializer=kernel_initializer,
                               BN=True)
        # if depth>1:
        #     up_conv2 += cut
        # if depth>1 and cut2 != None:
        #     conv2 += cut2
        #     cut2 = None
    up_conv2 = Conv2D(64, 3, padding="same", kernel_initializer="he_normal", activation="relu")(up_conv2)
    up_conv2 = Conv2D(3, 3, padding="same", kernel_initializer="he_normal", activation="relu")(up_conv2)

    model = Model(inputs, up_conv2)

    if not isinstance(metrics, list):
        metrics = [metrics]

    #     label_wise_dice_metrics = [get_label_dice_coefficient_function(index) for index in range(BATCH_SIZE)]
    #     if metrics:
    #         metrics = metrics + label_wise_dice_metrics
    #     else:
    #         metrics = label_wise_dice_metrics

    #     with tf.device('/cpu:0'):
    #         parallel_model = multi_gpu_model(model, gpus=2)
    #     model.compile(optimizer="adam",loss=dice_coefficient_loss, metrics=metrics)
    model.compile(optimizer="adam", loss=dice_loss, metrics=[dice])
    # model.summary()
    return model


def upConvBlock(inputs, num_filters, kernel_size=3, activation="relu", padding="same",
                strides=(1, 1), kernel_initializer="he_normal", BN=False):
    layer1 = InceptionBlock_v1(inputs, num_filters, kernel_size, activation, padding, strides, kernel_initializer)

    if BN:
        conc = BatchNormalization()(layer1)
    #     print("afterconc:", conc.shape)
    return conc


def ConvBlock(inputs, num_filters, kernel_size=3, activation="relu", padding="same",
              strides=(1, 1), kernel_initializer="he_normal", BN=False):
    #     print("inputs1:",inputs.shape)
    layer1 = InceptionBlock_v1(inputs, num_filters, kernel_size, activation, padding, strides, kernel_initializer)
    #     print("after1:",layer1.shape)
    layer2 = InceptionBlock_v1(inputs, num_filters, kernel_size, activation, padding, strides, kernel_initializer)
    #     print("after2:",layer2.shape)

    conc = tf.keras.layers.concatenate([layer1, layer2], axis=3)

    if BN:
        conc = BatchNormalization()(conc)
    #     print("afterconc:",conc.shape)
    return conc


def InceptionBlock_v1(inputs, num_filters, kernel_size, activation, padding,
                      strides, kernel_initializer="he_normal"):
    #     print("testline1:",(inputs.shape,num_filters))
    if inputs.shape[3] == num_filters:
        cut = inputs

    layer = Conv2D(num_filters, kernel_size,
                   padding=padding,
                   activation=activation,
                   kernel_initializer=kernel_initializer)(inputs)
    #     print("v1layer1:",layer.shape)
    layer = Conv2D(num_filters, kernel_size,
                   padding=padding,
                   activation=activation,
                   kernel_initializer=kernel_initializer)(layer)
    #     print("v1layer2:",layer.shape)
    if inputs.shape[3] == num_filters:
        layer += cut

    #     print("testline12:",layer.shape)
    return layer


def InceptionBlock_v2(inputs, num_filters, kernel_size, activation, padding,
                      strides, kernel_initializer="he_normal"):
    #     print("testline2:",inputs.shape)

    cut = inputs
    layer = Conv2D(int(num_filters / 4), 1,
                   padding=padding,
                   strides=strides,
                   activation=activation,
                   kernel_initializer=kernel_initializer)(inputs)

    layer = Conv2D(int(num_filters / 4), kernel_size,
                   padding=padding,
                   activation=activation,
                   strides=strides,
                   kernel_initializer=kernel_initializer)(layer)
    layer = Conv2D(num_filters, 1,
                   padding=padding,
                   strides=strides,
                   activation=activation,
                   kernel_initializer=kernel_initializer)(layer)

    layer += cut

    #     print("testline22:", layer.shape)
    return layer


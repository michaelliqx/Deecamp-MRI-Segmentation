#!/usr/bin/env python
# -*- coding:utf-8 -*-
# Author   :   LKX
# Uses    :    Data augmentation for 3D image( MRI data )
# Reference :   https://github.com/hiram64/3D-VoxelDataGenerator
#           https://github.com/MIC-DKFZ/batchgenerators

import random
import math

from scipy.ndimage.interpolation import shift, zoom
from scipy.ndimage import rotate
import numpy as np

class Multi3DModalsGenerator(object):
    """
    Data generator of 3D MRI Data(4 modals).
    This generator is for data augmentation(flip, shift, zoom, rotate).
    Note:
        Only one type of augmentation can be applied for one generator.
    """

    def __init__(self,
             flip_prob=0.5,
             flip_axis=-1,
             shift_axis=-1,
             shift_range=0.2,
             zoom_axis=-1,
             zoom_range=0.8,
             rotate_axis=-1,
             rotate_angle=30,
             noise_variance=(0, 0.1),
             noise_kind='gaussian'
             ):
        """
        Arguments:(-1 presents random)
         flip_prob: float between 0.0 to 1.0
                Probability of flipping
         flip_axis: int(0, 1 or 2) or 'random'
                Integers 1, 2 and 3 mean x axis, y axis and z axis for each.
                Axis along which data is flipped.
         shift_axis: int(0, 1 or 2) or 'random'
                Integers 1, 2 and 3 mean x axis, y axis and z axis for each.
                Axis along which data is shifted.
         shift_range: float([-1, 1]) or 'random'
                Rate with which data is shifted along the specified axis.
                Positive value means data is shifted towards the positive direction.
                Negative value means the negative direction as well.
         zoom_axis: int(0, 1 or 2), 'random' or 'same'.
                Integers 1, 2 and 3 mean x axis, y axis and z axis for each.
                Axis along which data is zoomed. 'same' means the same zoom_range is applied for all axis
         zoom_range: float(>= 0) or 'random'
                Magnification with which data is zoomed along the specified axis.
                Value more than 1 means data is expanded and value less than means data is shrunk.
         rotate_axis: int(0, 1 or 2) or 'random'
                Integers 1, 2 and 3 mean x axis, y axis and z axis for each.
                Axis along which data is rotated.
         rotate_angle: int or 'random'
                Angle by which data is rotated along the specified axis.
         noise_variance: tuple of float between 0.0 to 1.0
         noise_kind: str, value options:'gaussian' or 'rician'

        """
        self.flip_prob = flip_prob
        self.flip_axis = flip_axis
        self.shift_axis = shift_axis
        self.shift_range = shift_range
        self.zoom_axis = zoom_axis
        self.zoom_range = zoom_range
        self.rotate_axis = rotate_axis
        self.rotate_angle = rotate_angle
        self.noise_kind = noise_kind
        self.noise_variance = noise_variance

    def __call__(self,
             data,
             label,
             weight):
        """
        Arguments:
        build generator to augment input data according to initialization
        data: array
            Input data to be augmented.
            The shape of input data should have 4 dimension(batch, x, y, z).
        label:
        weight:
        Return:
            generator
        """

        assert  data.ndim    == 4,         'Input data should have 4 dimension'
        assert  label.shape   == data[0].shape, 'Input data and label size do not much.'
        assert  weight.shape  == data[0].shape, 'Input data and weight size do not much.'

        return self._augment(data, label, weight)

    def _augment(self, data, label, weight):
        flip_axis = random.randint(0, 2) if self.flip_axis == -1 else self.flip_axis

        shift_axis = random.randint(0, 2) if self.shift_axis == -1 else self.shift_axis

        if np.random.rand() <= self.flip_prob:
            data, label, weight = self._flip(data, label, weight, flip_axis)
        data, label, weight = self._shift(data, label, weight, shift_axis, self.shift_range)

        if self.noise_kind == 'gaussian':
            data = self._gaussian_noise(data)
        elif self.noise_kind == 'rician':
            data = self._rician_noise(data)

        return data, label, weight

    def _flip(self, data, label, weight, flip_axis):
        """flip array along specified axis(x, y or z)
        """
        data = np.array([np.flip(modal, flip_axis)
                         for modal in data])
        label = np.flip(label, flip_axis)
        weight = np.flip(weight, flip_axis)

        return data, label, weight

    def _shift(self, data, label, weight, shift_axis, shift_range):
        """shift array by specified range along specified axis(x, y or z)
        """
        shift_range = (2 * np.random.rand() - 1) * shift_range
        shift_lst = [0, 0, 0]
        shift_lst[shift_axis] = math.floor(
                shift_range * (data[0].shape)[shift_axis])
        
        def func(img):
            return shift(img, shift=shift_lst, cval=0)

        return np.array([func(modal) for modal in data]), func(label), func(weight)

    def _zoom(self, data, label, weight, zoom_axis, zoom_range):
        """zoom array by specified range along specified axis(x, y or z). After zoomed, the voxel size is the same as
        before"""
        # functions to calculate target range of arrays(outside of the target range is not used to zoom)
        # - d/2 <= zoom_range * (x - d/2) <= d/2
        
        f1 = lambda d: math.floor((d / 2) * (1 + 1 / zoom_range))
        f2 = lambda d: math.ceil((d / 2) * (1 - 1 / zoom_range))

        if zoom_range > 1.0:
            # expand
            z_win1 = list(map(f1, data[0].shape))
            z_win2 = list(map(f2, data[0].shape))
            
        if zoom_axis is None:
            zoom_lst = [1] + [zoom_range] * 3
        else:
            zoom_lst = [1] * 3
            zoom_lst[zoom_axis] = zoom_range
            
        def func(img):

            if zoom_range > 1.:
                if zoom_axis == -1:
                    # same for all axis
                    target_img = img[:, z_win2[0]:z_win1[0], z_win2[1]:z_win1[1], z_win2[2]:z_win1[2]]
                else:
                    # only one axis
                    if zoom_axis == 0:
                        target_img = img[:, z_win2[0]:z_win1[0], :, :]
                    elif zoom_axis == 1:
                        target_img = img[:, :, z_win2[1]:z_win1[1], :]
                    elif zoom_axis == 2:
                        target_img = img[:, :, :, z_win2[2]:z_win1[2]]
            else:
                # shrink
                target_img = img

            zoomed = zoom(target_img, zoom=zoom_lst, cval=0)
            temp = [[math.floor((i - j) / 2), math.ceil((i - j) / 2)] for i, j in zip(img.shape, zoomed.shape)]

            cast_zoomed = np.zeros(img.shape)
            cast_zoomed[temp[0][0]:img.shape[0] - temp[0][1],
                    temp[1][0]:img.shape[1] - temp[1][1],
                    temp[2][0]:img.shape[2] - temp[2][1]] = zoomed
            return cast_zoomed

        return np.array([func(modal) for modal in data]), func(label), func(weight)

    def _rotate(self, data, label, weight, rotate_axis, rotate_angle):
        """rotate array by specified range along specified axis(x, y or z)"""
        
        rotate_angle = (2 * np.random.rand() - 1) * rotate_angle
        axis_tuple = (0, 1) if rotate_axis == 2 else ((0, 2) if rotate_axis == 1 else (1, 2))
#         print(f'rotate_angle {rotate_angle}')
        
        def func(img):
            return rotate(img,
                      axes=axis_tuple,
                      angle=rotate_angle,
                      cval=0.0,
                      reshape=False)


        return np.array([func(modal) for modal in data]), func(label), func(weight)

    def _gaussian_noise(self, data):
        '''add gaussian_noise

        '''
        if self.noise_variance[0] == self.noise_variance[1]:
            variance = self.noise_variance[0]
        else:
            variance = random.uniform(self.noise_variance[0], self.noise_variance[1])
        data = data + np.random.normal(0.0, variance, size=data.shape)
        return data

    def _rician_noise(self, data):
        ''' add rician noise
        '''
        variance = random.uniform(self.noise_variance[0], self.noise_variance[1])
        data = np.sqrt(
                (data + np.random.normal(0.0, variance, size=data.shape)) ** 2 +
                np.random.normal(0.0, variance, size=data.shape) ** 2)
        return data
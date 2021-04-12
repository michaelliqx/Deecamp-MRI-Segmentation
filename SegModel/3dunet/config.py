#!/usr/bin/env python
# -*- coding: utf-8 -*-
# File: config.py

import numpy as np

# unet model
DATA_SAMPLING = 'random' # all_positive, random, one_positive
###
# random: complete random sampling within entire volume.
# one_positive: at least one batch contain tumor label (label > 0)
# all_positive: all batch must contain tumor label (label > 0)
###
RESIDUAL = True
DEPTH = 6
DEEP_SUPERVISION = True
FILTER_GROW = True
INSTANCE_NORM = True
# Use multi-view fusion 3 models for 3 view must be trained
DIRECTION = 'axial' # axial, sagittal, coronal

MULTI_VIEW = True

# training config
BASE_LR = 0.001

CROSS_VALIDATION = True
CROSS_VALIDATION_PATH = "./5fold.pkl"
FOLD = 4
###
# Use when 5 fold cross validation
# 1. First run generate_5fold.py to save 5fold.pkl
# 2. Set CROSS_VALIDATION to True
# 3. CROSS_VALIDATION_PATH to /path/to/5fold.pkl
# 4. Set FOLD to {0~4}
###
NO_CACHE = False
###
# if NO_CACHE = False, we load pre-processed volume into memory to accelerate training.
# set True when system memory loading is too high
###
MultiModalsGenerator = False

TEST_FLIP = True
# Test time augmentation
DYNAMIC_SHAPE_PRED = False
# change PATCH_SIZE in inference if cropped brain region > PATCH_SIZE
ADVANCE_POSTPROCESSING = False
ADVANCED_POST_PROCESSING = True
BATCH_SIZE = 2
PATCH_SIZE = [128, 128, 128]
INFERENCE_PATCH_SIZE = [128, 128, 128]
INTENSITY_NORM = 'modality' # different norm method
STEP_PER_EPOCH = 500
EVAL_EPOCH = 10

# data path
BASEDIR = "/data/data/data_2019/" #'/data/dataset/BRATS2018/'
TRAIN_DATASET = 'MICCAI_BraTS_2019_Data_Training'
VAL_DATASET = 'MICCAI_BraTS_2019_Data_Validation'   # val or val17 
TEST_DATASET = 'MICCAI_BraTS_2019_Data_Validation'
NUM_CLASS = 4

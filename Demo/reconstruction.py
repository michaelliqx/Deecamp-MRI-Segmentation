from mayavi.mlab import *
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import glob
import SimpleITK as sitk
import re
import nibabel as nib
import math
from collections import Counter
import seaborn as sns  
from mayavi import mlab
from tvtk.api import tvtk
from tvtk.pipeline.browser import PipelineBrowser

def show_brain(data):
	sorted_data = np.sort(data.ravel())
	l = len(sorted_data)
	lower_thr = sorted_data[int(0.2*l)]
	upper_thr = sorted_data[int(0.8*l)]
	hist, bins = np.histogram(data[data > np.mean(data)], bins=50)
	brain_thr_idx = np.argmax(hist)
	brain_thr =  bins[brain_thr_idx + 4]
	
	del hist, bins, brain_thr_idx
	
	fig = mlab.figure(bgcolor=(0, 0, 0), size=(400, 500))

	fig.scene.disable_render = True
	
	src = mlab.pipeline.scalar_field(data)

	src.spacing = [1, 1, 1.5]
	src.update_image_data = True

	thresh_filter = tvtk.ImageThreshold()
	thresh_filter.threshold_between(lower_thr, upper_thr)
	thresh = mlab.pipeline.user_defined(src, filter=thresh_filter)
	
	median_filter = tvtk.ImageMedian3D()
	median_filter.kernel_size = [3, 3, 3]
	median = mlab.pipeline.user_defined(thresh, filter=median_filter)
	
	diffuse_filter = tvtk.ImageAnisotropicDiffusion3D(
	                                    diffusion_factor=1.0,
	                                    diffusion_threshold=100.0,
	                                    number_of_iterations=5, )
	
	diffuse = mlab.pipeline.user_defined(median, filter=diffuse_filter)
	
	contour = mlab.pipeline.contour(diffuse, )
	contour.filter.contours = [brain_thr, ]
	
	dec = mlab.pipeline.decimate_pro(contour)
	dec.filter.feature_angle = 60.
	dec.filter.target_reduction = 0.7
	
	smooth_ = tvtk.SmoothPolyDataFilter(
	                    number_of_iterations=10,
	                    relaxation_factor=0.1,
	                    feature_angle=60,
	                    feature_edge_smoothing=False,
	                    boundary_smoothing=False,
	                    convergence=0.,
	                )
	smooth = mlab.pipeline.user_defined(dec, filter=smooth_)
	
	connect_ = tvtk.PolyDataConnectivityFilter(extraction_mode=4)
	connect = mlab.pipeline.user_defined(smooth, filter=connect_)
	
	compute_normals = mlab.pipeline.poly_data_normals(connect)
	compute_normals.filter.feature_angle = 80
	
	surf = mlab.pipeline.surface(compute_normals,color=(0.9, 0.72, 0.62), opacity=0.05)

	mlab.view(-165, 32, 350, [143, 133, 73])
	mlab.roll(180)
	
	fig.scene.disable_render = False
	
	mlab.show_pipeline(rich_view=False)
	mlab.savefig("brain.obj")
	print("brain save complete~")
	mlab.clf()

def show_seg(data, label):
	"""
	label : 1 -> WT 整个肿瘤
			2 -> ED 水肿
			4 -> ET 增强肿瘤
	"""
	fig = mlab.figure(bgcolor=(0, 0, 0), size=(400, 500))

	fig.scene.disable_render = True
	
	src = mlab.pipeline.scalar_field(data)

	src.spacing = [1, 1, 1.5]
	src.update_image_data = True

	blur = mlab.pipeline.user_defined(src, filter='ImageGaussianSmooth')
	voi = mlab.pipeline.extract_grid(blur)

	mlab.pipeline.iso_surface(voi, contours=[label * 10000], opacity=0.3)

	mlab.view(-165, 32, 350, [143, 133, 73])
	mlab.roll(180)
	
	fig.scene.disable_render = False

	mlab.show_pipeline(rich_view=False)
	mlab.savefig("segmentation_{}.obj".format(label))
	print("segmentation{} save complete~".format(label))
	mlab.clf()

t1 = sitk.GetArrayFromImage(sitk.ReadImage("t1.nii.gz"))
seg = sitk.GetArrayFromImage(sitk.ReadImage("seg.nii.gz"))
t1 = t1.transpose(2,1,0)
#t1 = (t1/t1.max())*255
#seg = preprocess_label(seg)
seg = seg.transpose(2,1,0)
mask = (seg > 0)
mask_ = (seg == 0)
brain = mask * seg + mask_ * t1
segmentation = mask * seg * 10000 + mask_ * t1
show_brain(brain)
show_seg(segmentation,1)
show_seg(segmentation,2)
show_seg(segmentation,4)

import shutil

from flask import render_template, request,jsonify,make_response, Response,Request
from flask import Blueprint, send_from_directory,send_file
# for model prediction
import tensorflow as tf
from tensorflow import keras
import flask
from tensorflow.python.keras.models import load_model
import os
from BackEnd.Code.Model.loss import dice,dice_loss
from BackEnd.Code.Model.MixUnet import MixModel
from BackEnd.Code.Model.load_data import preprocess_image,predict_slice_nii,predict
# from BackEnd.main import main
import nibabel as nib
import numpy as np
import SimpleITK as sitk
# for 3D display
import argparse
import vtk
from vtk.qt.QVTKRenderWindowInteractor import QVTKRenderWindowInteractor
import PyQt5.QtWidgets as QtWidgets
import PyQt5.QtCore as Qt
import sys
from BackEnd.main.display3D import *


from werkzeug.utils import secure_filename

main = Blueprint('main', __name__, template_folder='templates', static_folder='static', static_url_path="/static")



#3D
###########################################

BRAIN_SMOOTHNESS = 500
BRAIN_OPACITY = 0.2
BRAIN_COLORS = [(1.0, 0.9, 0.9)]  # RGB percentages



@main.route('/', defaults={'path': ''})
@main.route('/<path:path>')
def index(path):
  return render_template('index.html',greetings = "hello world test")


basedir = os.path.abspath(os.path.dirname(__file__))

@main.route('/filesname', methods=['GET'])
def test2():
    response = jsonify(filename="testfilename")
    return response

@main.route('/filesname', methods=['POST','GET'])
def test():

    imgs = request.files.getlist('filessss')
    print(imgs)
    path = basedir + "/static/imgs"
    if not os.path.exists(path):
        os.makedirs(path)
    # load uploaded file and store it
    filename = []
    for img in imgs:
        types = ['nii','gz']
        if img.filename.split('.')[-1] in types:
            filename.append(img.filename)
            uploadpath = os.path.join(path, img.filename)
            img.save(uploadpath)


    # response = jsonify(filename=filename)
    #
    # return response
    if 'pred2.nii.gz' not in os.listdir(path):
        # 预测模型
        print('loading models')
        Unet = keras.models.load_model(os.path.join(os.getcwd()+'/BackEnd/main/model_18.h5'))
        print('model was loaded\nstart predict')
        predict(path,Unet)

        print('done')

        # 3D还原
        cur_path = os.getcwd()
        os.chdir(cur_path + '/BackEnd/main/static/imgs')
        redirect_vtk_messages()
        app = QtWidgets.QApplication(sys.argv)
        preprocess()
        display()
        remove()
        os.chdir(cur_path)

        # 移动文件到指定目录
        for item in os.listdir(os.getcwd()+'/BackEnd/main/static/imgs'):
            types = ['mtl', 'obj']
            if item.split('.')[-1] in types:
                shutil.copy(os.path.join(os.getcwd()+'/BackEnd/main/static/imgs',item), os.path.join(os.getcwd()+'/BackEnd/static/build/3D/lib/assets/model',item))

        pred = sitk.GetArrayFromImage(sitk.ReadImage(os.path.join(path,'pred.nii.gz')))
        t1 = sitk.GetArrayFromImage(sitk.ReadImage(os.path.join(path,'BraTS19_2013_2_1_t1.nii.gz')))
        print("1:",sum(sum(pred)))
        pred2 = np.concatenate([pred,pred[0:2,:,:]],axis=0)
        pred2 = pred2*t1+t1
        print("2:",sum(sum(pred)))
        # print(pred[50,:,:])
        pred2 = sitk.GetImageFromArray(pred2)
        print("3:",sum(sum(pred)))
        sitk.WriteImage(pred2, os.path.join(path, 'pred2.nii.gz'))
    #

    #拼接

    return send_file(path+'/pred2.nii.gz', as_attachment=True)





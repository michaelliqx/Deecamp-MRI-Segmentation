import shutil

from flask import render_template, request,jsonify,make_response, Response,Request
from flask import Blueprint, send_from_directory,send_file
# for model prediction
import tensorflow as tf
from tensorflow import keras
import flask
from tensorflow.python.keras.models import load_model
import os

from BackEnd.Code.Model.load_data import preprocess_image,predict_slice_nii,predict
# from BackEnd.main import main
import nibabel as nib
import numpy as np
import SimpleITK as sitk

from BackEnd.main.display3D import *
from BackEnd.main.generateQR import start

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

@main.route('/t1name', methods=['GET'])
def t1name():
    path = basedir + "/static/imgs";
    files = os.listdir(path)
    types = ['nii', 'gz']
    for file in files:
        if file.split('.')[-1] in types:
            if 't1' in file:
                return send_file(os.path.join(path,file),as_attachment=True)

    for file in files:
        if file.split('.')[-1] in types:

            return send_file(os.path.join(path,file),as_attachment=True)
    # return send_file(path + '/BraTS19_2013_2_1_t1.nii.gz', as_attachment=True)

path = basedir + "/static/imgs"


@main.route('/wxcode',methods=['POST'])
def wxcode():
    num = request.form.get('case_num')
    print(num)
    detail = start(str(num))
    return jsonify(detail)


@main.route('/livepred',methods=['POST'])
def livepred():
    age = request.form.get('age')
    state = request.form.get('state')

    print(age,state)

    return ''

@main.route('/filesname', methods=['POST','GET'])
def test():
    # #
    # imgs = request.files.getlist('filessss')
    # # print(imgs)
    #
    # if not os.path.exists(path):
    #     os.makedirs(path)
    # # load uploaded file and store it
    # filename = []
    # for img in imgs:
    #     types = ['nii','gz']
    #     if img.filename.split('.')[-1] in types:
    #         filename.append(img.filename)
    #         uploadpath = os.path.join(path, img.filename)
    #         img.save(uploadpath)
    #
    #
    # if 'pred2.nii.gz' not in os.listdir(path):
    #     # 预测模型
    #     print('loading models')
    #     Unet = keras.models.load_model(os.path.join(os.getcwd()+'/BackEnd/main/model_18.h5'))
    #     print('model was loaded\nstart predict')
    #     predict(path,Unet)
    #     print('prediction done')
    #
    #     # 3D还原
    # print('start generate 3D files')
    # cur_path = os.getcwd()
    # os.chdir(cur_path + '/BackEnd/main/static/imgs')
    # print("cur_path:",cur_path)
    # print("new_patj:",os.getcwd())
    # redirect_vtk_messages()
    # app = QtWidgets.QApplication(sys.argv)
    # preprocess()
    # display()
    # remove()
    # os.chdir(cur_path)
    #
    # print('move files')
    # # 移动文件到指定目录
    # for item in os.listdir(os.getcwd()+'/BackEnd/main/static/imgs'):
    #     # print(item)
    #     types = ['mtl', 'obj','nii','gz']
    #     # if 'brain.nii.gz' or 'pred2.nii.gz' in item:
    #     #     continue
    #     if item.split('.')[-1] in types:
    #         print(os.path.join(os.getcwd()+'/BackEnd/static/build/3D/lib/assets/model'))
    #         shutil.copy(os.path.join(os.getcwd()+'/BackEnd/main/static/imgs',item), os.path.join(os.getcwd()+'/BackEnd/static/build/3D/lib/assets/model',item))
    #             # shutil.copy(os.path.join(os.getcwd()+'/BackEnd/main/static/imgs',item), os.path.join(os.getcwd()+'/FrontEnd/public',item))
    # # shutil.copy(os.path.join(os.getcwd()+'/FrontEnd/public/3D/lib/assets/model'),)
    # print('3D process done')
    #
    # print('all done')
    # pred = sitk.GetArrayFromImage(sitk.ReadImage(os.path.join(path, 'pred.nii.gz')))
    # pred = np.concatenate([pred, pred[0:2, :, :]], axis=0)
    # pred = sitk.GetImageFromArray(pred)
    #
    # sitk.WriteImage(pred, os.path.join(path, 'pred2.nii.gz'))

    return send_file(path+'/pred2.nii.gz', as_attachment=True)






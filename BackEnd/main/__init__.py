from flask import render_template, request,jsonify,make_response, Response,Request
from flask import Blueprint, send_from_directory,send_file

import tensorflow as tf
import keras
import flask
from tensorflow.python.keras.models import load_model
import os
from BackEnd.Code.Model.loss import dice,dice_loss
from BackEnd.Code.Model.MixUnet import MixModel
from BackEnd.Code.Model.load_data import data_slicer, preprocess_image
# from BackEnd.main import main
import nibabel as nib
import numpy as np
import SimpleITK as sitk


from werkzeug.utils import secure_filename

main = Blueprint('main', __name__, template_folder='templates', static_folder='static', static_url_path="/static")



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
        types = ['jpg', 'png', 'tif','nii','gz']
        if img.filename.split('.')[-1] in types:
            filename.append(img.filename)
            uploadpath = os.path.join(path, img.filename)
            img.save(uploadpath)

    # response = jsonify(filename=filename)
    #
    # return response

    return send_file(path+'/flair.nii.gz', as_attachment=True)





    '''
    # load model
    print("loading model")
    model = MixModel()
    # print(os.getcwd())
    model.load_weights(os.path.join(os.getcwd()+'/BackEnd/main/best_weights_4.h5'))
    print("loading model done")
    
    # load data
    data_matrix = []
    img_slice_list = []
    for file in os.listdir(path):
        img_data = nib.load(os.path.join(path + "/" + file))
        data_matrix.append(img_data.get_data())
    for i in range(0, len(data_matrix), 4):
        data_slicer(data_matrix[i:i + 4], img_slice_list)
    img_data_norm = preprocess_image(img_slice_list)

    # predict
    res = []
    i=0
    print("prediction")
    for pic in img_data_norm:
        i+=1
        res.append(model.predict(pic.reshape(-1, 240, 240, 12)))
        print("process:", i / len(img_data_norm))
    print("prediction done")
    import SimpleITK as sitk

    # store result as a nii.gz file
    pre_img = np.concatenate([res[i] for i in range(len(res))], axis=3)
    new_img = pre_img.reshape(pre_img.shape[1], pre_img.shape[2], pre_img.shape[3])
    new_img = sitk.GetImageFromArray((new_img > 0).astype(np.int8))
    sitk.WriteImage(new_img, 'res.nii.gz')

    '''

    # return jsonify(filename=filename)




# @main.route("/predict", methods=['GET',"POST"])
# def predict():
#     # if request.method == 'POST':
#     data_matrix = []
#     img_slice_list = []
#
#     path = os.getcwd()
#     model = MixModel()
#     model.load_weights(os.path.join(path + '/BackEnd/main/best_weights_4.h5'))
#     uploaded_files = flask.request.files.getlist("file[]")
#     for files in uploaded_files:
#         data = nib.load(files)
#         data_matrix.append(data.get_data())
#
#     for i in range(0, len(data_matrix), 4):
#         data_slicer(data_matrix[i:i + 4], img_slice_list)
#
#     test_data_norm = preprocess_image(img_slice_list)
#     # test_data = np.array(test_data_norm)
#
#     res = []
#     for pic in test_data_norm:
#         res.append(model.predict(pic))
#     pre_img = np.concatenate([res[i] for i in range(len(res))], axis=3)
#     new_img = pre_img.reshape(pre_img.shape[1], pre_img.shape[2], pre_img.shape[3])
#
#     new_img = sitk.GetImageFromArray((new_img > 0).astype(np.int8))
#     sitk.WriteImage(new_img, 'result.nii.gz')

    # return new_img






# from BackEnd.main.api import predict



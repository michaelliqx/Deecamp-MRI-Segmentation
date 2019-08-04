from flask import render_template, request

import tensorflow
import keras

from tensorflow.python.keras.models import load_model
import os
from BackEnd.Code.Model.loss import dice,dice_loss
from BackEnd.Code.Model.MixUnet import MixModel
from BackEnd.main import main
import nibabel as nib



@main.route("/test", methods=["POST"])
def predict():
    if request.methods == 'POST':
        path = os.getcwd()
        model = MixModel()
        model.load_weights(os.path.join(path + '/BackEnd/main/best_weights_4.h5'))

        data = {'success': False}
        print('request')
        if request.method == 'POST':
            data = nib.load(request.files)
            print("hello")



# def predict():
  # model.predict()
  # return render_template('index.html')
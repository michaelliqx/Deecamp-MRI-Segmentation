

# import tensorflow as tf
# import keras
# from keras.models import load_model
#
#
# def main():
#     model = load_model('mymodel_8.h5')
#
# if __name__  == "__main__":
#     main()

import flask
from flask import Flask
from flask import request
from flask import render_template, send_from_directory
import os

# path = os.getcwd()
# # new_path = os.path.pardir(os.path.join(path))
# new_path = os.path.abspath(os.path.join(os.path.dirname('test.py'),os.path.pardir))
#
# ins_path = new_path + '/Web/public/templates'
# print(ins_path)
# app = Flask(__name__,instance_path=ins_path,instance_relative_config=True)
app = Flask(__name__)


# @app.route('/')
# def load():
#     # 将数据传给模版 hello.html
#     return send_from_directory(ins_path,"index.html")

@app.route('/')
def hello():
    return render_template('index.html', greetings = "hello world test!")


# app.run(host='127.0.0.1', port=3000, debug = True)
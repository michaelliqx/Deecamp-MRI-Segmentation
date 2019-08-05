from flask import render_template, request,jsonify,make_response, Response,Request
from flask import Blueprint, send_from_directory,send_file
# for model prediction
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
# for 3D display
import argparse
import vtk
from vtk.qt.QVTKRenderWindowInteractor import QVTKRenderWindowInteractor
import PyQt5.QtWidgets as QtWidgets
import PyQt5.QtCore as Qt
import sys


from werkzeug.utils import secure_filename

main = Blueprint('main', __name__, template_folder='templates', static_folder='static', static_url_path="/static")


#3D
###########################################

BRAIN_SMOOTHNESS = 500
BRAIN_OPACITY = 0.2
BRAIN_COLORS = [(1.0, 0.9, 0.9)]  # RGB percentages

def verify_type(file):
    ext = os.path.basename(file).split(os.extsep, 1)
    if ext[1] != 'nii.gz':
        parser.error("File doesn't end with 'nii.gz'. Found: {}".format(ext[1]))
    return file

def redirect_vtk_messages():
    """ Redirect VTK related error messages to a file."""
    import tempfile
    tempfile.template = 'vtk-err'
    f = tempfile.mktemp('.log')
    log = vtk.vtkFileOutputWindow()
    log.SetFlush(1)
    log.SetFileName(f)
    log.SetInstance(log)

class NiiObject:
    def __init__(self):
        self.file = None
        self.reader = None
        self.extent = ()
        self.labels = []
        self.image_mapper = None
        self.scalar_range = None

class NiiLabel:
    def __init__(self, color, opacity, smoothness):
        self.actor = None
        self.property = None
        self.smoother = None
        self.color = color
        self.opacity = opacity
        self.smoothness = smoothness

class ErrorObserver:
    def __init__(self):
        self.__ErrorOccurred = False
        self.__ErrorMessage = None
        self.CallDataType = 'string0'

    def __call__(self, obj, event, message):
        self.__ErrorOccurred = True
        self.__ErrorMessage = message

    def ErrorOccurred(self):
        occ = self.__ErrorOccurred
        self.__ErrorOccurred = False
        return occ

    def ErrorMessage(self):
        return self.__ErrorMessage

error_observer = ErrorObserver()

def read_volume(file_name):
    """
    :param file_name: The filename of type 'nii.gz'
    :return: vtkNIFTIImageReader (https://www.vtk.org/doc/nightly/html/classvtkNIFTIImageReader.html)
    """
    reader = vtk.vtkNIFTIImageReader()
    reader.SetFileNameSliceOffset(1)
    reader.SetDataByteOrderToBigEndian()
    reader.SetFileName(file_name)
    reader.Update()
    return reader

def create_brain_extractor(brain):
    """
    Given the output from brain (vtkNIFTIImageReader) extract it into 3D using
    vtkFlyingEdges3D algorithm (https://www.vtk.org/doc/nightly/html/classvtkFlyingEdges3D.html)
    :param brain: a vtkNIFTIImageReader volume containing the brain
    :return: the extracted volume from vtkFlyingEdges3D
    """
    brain_extractor = vtk.vtkFlyingEdges3D()
    brain_extractor.SetInputConnection(brain.reader.GetOutputPort())
    # brain_extractor.SetValue(0, sum(brain.scalar_range)/2)
    return brain_extractor

def create_actor(mapper, prop):
    actor = vtk.vtkActor()
    actor.SetMapper(mapper)
    actor.SetProperty(prop)
    return actor

def create_property(opacity, color):
    prop = vtk.vtkProperty()
    prop.SetColor(color[0], color[1], color[2])
    prop.SetOpacity(opacity)
    return prop

def create_mapper(stripper):
    brain_mapper = vtk.vtkPolyDataMapper()
    brain_mapper.SetInputConnection(stripper.GetOutputPort())
    brain_mapper.ScalarVisibilityOff()
    brain_mapper.Update()
    return brain_mapper

def create_normals(smoother):
    """
    The filter can reorder polygons to insure consistent orientation across polygon neighbors. Sharp edges can be split
    and points duplicated with separate normals to give crisp (rendered) surface definition.
    (https://www.vtk.org/doc/nightly/html/classvtkPolyDataNormals.html)
    :param smoother:
    :return:
    """
    brain_normals = vtk.vtkPolyDataNormals()
    brain_normals.SetInputConnection(smoother.GetOutputPort())
    brain_normals.SetFeatureAngle(60.0)  #
    return brain_normals

def create_smoother(reducer, smoothness):
    """
    Reorients some points in the volume to smooth the render edges.
    (https://www.vtk.org/doc/nightly/html/classvtkSmoothPolyDataFilter.html)
    :param reducer:
    :param smoothness:
    :return:
    """
    smoother = vtk.vtkSmoothPolyDataFilter()
    smoother.SetInputConnection(reducer.GetOutputPort())
    smoother.SetNumberOfIterations(smoothness)
    return smoother

def create_polygon_reducer(extractor):
    """
    Reduces the number of polygons (triangles) in the volume. This is used to speed up rendering.
    (https://www.vtk.org/doc/nightly/html/classvtkDecimatePro.html)
    :param extractor: an extractor (vtkPolyDataAlgorithm), will be either vtkFlyingEdges3D or vtkDiscreteMarchingCubes
    :return: the decimated volume
    """
    reducer = vtk.vtkDecimatePro()
    reducer.AddObserver('ErrorEvent', error_observer)  # throws an error event if there is no data to decimate
    reducer.SetInputConnection(extractor.GetOutputPort())
    reducer.SetTargetReduction(0.5)  # magic number
    reducer.PreserveTopologyOn()
    return reducer

def add_surface_rendering(nii_object, label_idx, label_value):
    nii_object.labels[label_idx].extractor.SetValue(0, label_value)
    nii_object.labels[label_idx].extractor.Update()

    # if the cell size is 0 then there is no label_idx data
    if nii_object.labels[label_idx].extractor.GetOutput().GetMaxCellSize():
        reducer = create_polygon_reducer(nii_object.labels[label_idx].extractor)
        smoother = create_smoother(reducer, nii_object.labels[label_idx].smoothness)
        normals = create_normals(smoother)
        actor_mapper = create_mapper(normals)
        actor_property = create_property(nii_object.labels[label_idx].opacity, nii_object.labels[label_idx].color)
        actor = create_actor(actor_mapper, actor_property)
        nii_object.labels[label_idx].actor = actor
        nii_object.labels[label_idx].smoother = smoother
        nii_object.labels[label_idx].property = actor_property

def setup_brain(render_window,renderer, name):
    file = name + ".nii.gz"
    brain = NiiObject()
    brain.file = file
    brain.reader = read_volume(brain.file)
    brain.labels.append(NiiLabel(BRAIN_COLORS[0], BRAIN_OPACITY, BRAIN_SMOOTHNESS))
    brain.labels[0].extractor = create_brain_extractor(brain)
    brain.extent = brain.reader.GetDataExtent()
    scalar_range = brain.reader.GetOutput().GetScalarRange()
    bw_lut = vtk.vtkLookupTable()
    bw_lut.SetTableRange(scalar_range)
    bw_lut.SetSaturationRange(0, 0)
    bw_lut.SetHueRange(0, 0)
    bw_lut.SetValueRange(0, 2)
    bw_lut.Build()

    view_colors = vtk.vtkImageMapToColors()
    view_colors.SetInputConnection(brain.reader.GetOutputPort())
    view_colors.SetLookupTable(bw_lut)
    view_colors.Update()
    brain.image_mapper = view_colors
    brain.scalar_range = scalar_range

    add_surface_rendering(brain, 0, sum(scalar_range)/2)  # render index, default extractor value
    renderer.AddActor(brain.labels[0].actor)
    objWriter = vtk.vtkOBJExporter()
    objWriter.SetFilePrefix(name)
    objWriter.SetInput(render_window)
    objWriter.Write()

class display(QtWidgets.QMainWindow, QtWidgets.QApplication):
    def __init__(self):
        QtWidgets.QMainWindow.__init__(self, None)
        self.show(0)
        self.show(1)
        self.show(2)
        self.show(4)

    def show(self,classType):
        renderer, frame, vtk_widget, interactor, render_window = self.setup()
        if (classType == 0):
            setup_brain(render_window,renderer, "brain")
        elif (classType == 1):
            setup_brain(render_window,renderer, "seg_1")
        elif (classType == 2):
            setup_brain(render_window,renderer, "seg_2")
        elif (classType == 4):
            setup_brain(render_window,renderer, "seg_4")

    @staticmethod        
    def setup():
        """
        Create and setup the base vtk and Qt objects for the application
        """
        renderer = vtk.vtkRenderer()
        frame = QtWidgets.QFrame()
        vtk_widget = QVTKRenderWindowInteractor()
        interactor = vtk_widget.GetRenderWindow().GetInteractor()
        render_window = vtk_widget.GetRenderWindow()

        frame.setAutoFillBackground(True)
        vtk_widget.GetRenderWindow().AddRenderer(renderer)
        render_window.AddRenderer(renderer)
        interactor.SetRenderWindow(render_window)
        interactor.SetInteractorStyle(vtk.vtkInteractorStyleTrackballCamera())

        return renderer, frame, vtk_widget, interactor, render_window

def preprocess():
    # 搜索图片读取图片
    t1 = sitk.GetArrayFromImage(sitk.ReadImage(os.path.join(os.getcwd()+'/BackEnd/main/static/imgs/'+"t1.nii.gz")))
    seg = sitk.GetArrayFromImage(sitk.ReadImage(os.path.join(os.getcwd()+'/BackEnd/main/static/imgs/'+"seg.nii.gz")))
    
    
    t1 = sitk.GetImageFromArray((t1 > 0).astype(np.int8))
    seg_1 = sitk.GetImageFromArray((seg == 1).astype(np.int8))
    seg_2 = sitk.GetImageFromArray((seg == 2).astype(np.int8))
    seg_4 = sitk.GetImageFromArray((seg == 4).astype(np.int8))

    dir = os.getcwd()+'/FrontEnd/src/component/3D/lib/assets/model/'
    sitk.WriteImage(t1,dir+'brain.nii.gz')
    sitk.WriteImage(seg_1,dir+'seg_1.nii.gz')
    sitk.WriteImage(seg_2,dir+'seg_2.nii.gz')
    sitk.WriteImage(seg_4,dir+'seg_4.nii.gz')

def remove():
    dir = os.getcwd() + '/FrontEnd/src/component/3D/lib/assets/model/'
    os.remove(dir+"brain.nii.gz")
    os.remove(dir+"seg_1.nii.gz")
    os.remove(dir+"seg_2.nii.gz")
    os.remove(dir+"seg_4.nii.gz")

################################################


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

    # redirect_vtk_messages()
    # app = QtWidgets.QApplication(sys.argv)
    # preprocess()
    # display()
    # remove()

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




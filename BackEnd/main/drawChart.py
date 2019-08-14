import codecs

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import glob
import SimpleITK as sitk
import re
import nibabel as nib
import math
import plotly.graph_objects as go
from collections import Counter
import seaborn as sns  
import plotly
import json


from scipy.ndimage.interpolation import rotate
import plotly.graph_objects as go

from plotly.subplots import make_subplots
import os
plt.style.use("seaborn")
plt.rcParams['font.family'] = ['Adobe Fangsong Std']



def generateBriefIntro4Label(part, label, value):
    partName = ['至少有40%分布于', '至少有10%分布于', '其余分布于脑部其他区域。\n']
    partFlag = 0
    total = 100.0
    intro = '对于{}'.format(part)
    values = [round(float(value[i])/np.sum(value)*100,2) for i in range(len(value))]
    print('value:',values,len(values))
    valueDict = {label[i]:values[i] for i in range(len(label))}
    values = sorted(valueDict.items(), key = lambda x: x[1], reverse=True)
    if (values[0][1] < 40):
        partFlag = 1
    for item in values:
        name = item[0]
        value = str(item[1]) + '%'
        text = ''
        if (item[1] >= 40 and partFlag == 0):
            text = text + '，' + partName[partFlag]
            partFlag = 1
        elif (item[1] < 40 and item[1] >= 10 and partFlag == 1):
            if(intro[-1] == '、'):
                intro = intro[:-1]
            text +=  '，'+ partName[partFlag]
            partFlag = 2
        if (item[1] < 8):
            if(intro[-1] == '、'):
                intro = intro[:-1]
            intro = intro + '，' + partName[partFlag]
            break
        #text = text + name + "(" + value +")、"
        text = text + name + "、"
        intro = intro + text
        total = round(total - item[1],2)
    return intro

def generateBriefIntro4Brain(label, percent_all):
    intro = '在脑部各区域中'
    text = ''
    temp = []
    flag = False
    list50 = []
    list20 = []
    listAll = []
    for i in range(len(percent_all)):
        if(percent_all[i] >= 50):
            list50.append(label[i])
        elif(percent_all[i] >= 20):
            list20.append(label[i])
    string50 = "、".join(list50)
    string20 = "、".join(list20)
    if(string50):
        intro = intro + '，' + string50 + '有50%以上的区域被肿瘤占领'
    if(string20):
        intro = intro + '，' + string20 + '有20%以上的区域被肿瘤占领'
    intro = intro + '。'
    return intro

def GetCount(labelSeg):
    temp = Counter(labelSeg.reshape((-1)))
    temp = dict(temp)
    temp.pop(0)
    number = np.sum([temp[key] for key in temp.keys()])
    return temp, number

def getLabelAndValue(labelDict, labelSeg):
    labelSeg, segNum = GetCount(labelSeg)
    label = labelSeg.keys()
    print('label:',label)
    print('labelDict:',labelDict)
    label = [labelDict[key] for key in label]
    item = [labelSeg[key] for key in labelSeg.keys()]
    return label, item

def drawPieChart(id, label, value, title, filename):
    fig = go.Figure(data=[go.Pie(labels=label, values=value, showlegend=False, 
                         textinfo = 'label+percent', textposition='inside', 
                         textfont = {'size':20,'color':'#FFFFFF'},
                         title={'text':title,'font':{'size':35}},hole=.4, )])
    fig['layout'].update(margin=dict(l=0,r=0,b=0,t=0))
    fig.write_image(id + "_" + filename + '.jpg', scale = 3)
    # write_json(fig,filename)


def drawBarChart(id, area4Seg):
    temp = sorted(area4Seg.items(), key = lambda x: x[1]['label_percent_all'], reverse=True)
    label_percent_1 = [temp[key][1]['label_percent_1'] for key in range(len(temp))]
    label_percent_2 = [temp[key][1]['label_percent_2'] for key in range(len(temp))]
    label_percent_4 = [temp[key][1]['label_percent_4'] for key in range(len(temp))]
    label_percent_all = [temp[key][1]['label_percent_all'] for key in range(len(temp))]
    for i in range(len(temp)):
        if(label_percent_1[i] < 0.2):
            label_percent_1[i] = 0
        if(label_percent_2[i] < 0.2):
            label_percent_2[i] = 0
        if(label_percent_4[i] < 0.2):
            label_percent_4[i] = 0
        if(label_percent_all[i] < 0.2):
            label_percent_all[i] = 0
    label_name = [temp[key][1]['name'] for key in range(len(temp))]
    fig = go.Figure(data=[
        go.Bar(name='坏死/非增强肿瘤核心', x=label_name, y = label_percent_1,
            text=[str(item) + '%' for item in label_percent_1], textposition='auto',
            textfont={'size':17,'color':'#FFFFFF'},
            outsidetextfont={'size':17,'color':'#000000'}),
        go.Bar(name='肿瘤周围水肿', x=label_name, y = label_percent_2,
            text=[str(item) + '%' for item in label_percent_2], textposition='auto',
            textfont={'size':17,'color':'#FFFFFF'},
            outsidetextfont={'size':17,'color':'#000000'}),
        go.Bar(name='增强肿瘤', x=label_name, y = label_percent_4, 
            text=[str(item) + '%' for item in label_percent_4], textposition='auto',
            textfont={'size':17,'color':'#FFFFFF'},
            outsidetextfont={'size':17,'color':'#000000'}),
    ])
    # Change the bar mode
    fig.update_layout(barmode='stack',
                    legend=dict(
                        x=0.61,
                        y=1.0,
                        bgcolor='rgba(255, 255, 255, 0)',
                        bordercolor='rgba(255, 255, 255, 0)',
                        font={'size':20}
                    ),
                    margin=dict(l=0,r=0,b=0,t=0))
    fig.layout.template = 'plotly_white'
    fig.write_image(id + '_barChart.jpg', scale = 3)
    # write_json(fig,'barChart')
    return label_name, label_percent_all

def write_json(fig, filename):
    fig_json = fig.to_json()
    with open(filename + ".json","w") as f:
        fig_json =  filename + ' = \'' + fig_json + '\''
        f.write(fig_json)

def getAreaSegmentation(label, segmentation, labelDict):
    area4Seg = {}
    for key in labelDict.keys():
        if(key):
            area4Seg[key] = {'area' : (label == key) * segmentation, 'name' : labelDict[key]}
            area4Seg[key]['label_1'] = (area4Seg[key]['area'] == 1)
            area4Seg[key]['label_2'] = (area4Seg[key]['area'] == 2)
            area4Seg[key]['label_4'] = (area4Seg[key]['area'] == 3)
            area4Seg[key]['label_percent_all'] = round(float(np.sum((area4Seg[key]['area'] > 0))/np.sum((label == key))) * 100,2)
            area4Seg[key]['label_percent_1'] = round(float(np.sum((area4Seg[key]['label_1'] > 0))/np.sum((label == key))) * 100,2)
            area4Seg[key]['label_percent_2'] = round(float(np.sum((area4Seg[key]['label_2'] > 0))/np.sum((label == key))) * 100,2)
            area4Seg[key]['label_percent_4'] = round(float(np.sum((area4Seg[key]['label_4'] > 0))/np.sum((label == key))) * 100,2)
    tempDict = area4Seg.copy()
    for key in area4Seg.keys():
        if(area4Seg[key]['label_percent_all'] < 0.5):
            tempDict.pop(key)
    return tempDict.copy()


def readLabel():
    labelDict = {}
    f = open(os.path.join(os.getcwd()+'/BackEnd/main',"labels_cn.txt"),encoding='utf-8')
    line = f.readline()


    while line:
        if(len(line) > 0):
            line = line.replace('\n','')
            line = line.replace('\t','')
            left = line.find('\"')
            right = line.rfind('\"')
            labelDict[int(line[:left])] = line[left+1:right]
        line = f.readline()
    return labelDict


def drawChart(id, seg):
    # seg = sitk.GetArrayFromImage(sitk.ReadImage('BraTS19_2013_4_1_seg.nii.gz'))
    # print(os.getcwd())
    label = sitk.GetArrayFromImage(sitk.ReadImage(os.path.join(os.getcwd()+'/BackEnd/main','labels.nii')))

    labelDict = readLabel()

    seg1 = (seg == 1) # 坏死肿瘤核心(NCR) + 非增强肿瘤核心(NET)
    seg2 = (seg == 2) # 肿瘤周围水肿(ED)
    seg4 = (seg == 3) # 增强肿瘤(ET)
    segAll = (seg > 0)

    label1Seg = seg1 * label
    label2Seg = seg2 * label
    label4Seg = seg4 * label
    labelAllSeg = segAll * label

    label1,value1 = getLabelAndValue(labelDict, label1Seg)
    label2,value2 = getLabelAndValue(labelDict, label2Seg)
    label4,value4 = getLabelAndValue(labelDict, label4Seg)
    labelAll, valueAll = getLabelAndValue(labelDict, labelAllSeg)

    drawPieChart(id, labelAll, valueAll, '整个肿瘤', 'pieChart1')
    drawPieChart(id, label1, value1, '坏死/非增强肿瘤核心', 'pieChart2')
    drawPieChart(id, label2, value2, '肿瘤周围水肿', 'pieChart3')
    drawPieChart(id, label4, value4, '增强肿瘤', 'pieChart4')

    area4Seg = getAreaSegmentation(label, seg, labelDict)
        
    label_name, label_percent_all = drawBarChart(id, area4Seg)

    text = generateBriefIntro4Label('整个肿瘤',labelAll, valueAll) +'\n'+ generateBriefIntro4Label('坏死及非增强肿瘤核心',label1, value1) +'\n'+ \
            generateBriefIntro4Label('肿瘤周围水肿',label2, value2) +'\n'+ generateBriefIntro4Label('增强肿瘤',label4, value4) +'\n'+ \
                    generateBriefIntro4Brain(label_name,label_percent_all)
    return text
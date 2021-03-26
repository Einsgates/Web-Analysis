# -*- coding:utf-8 -*-
# Author: Icebag
import Crawl
import DataProcess
import ML2
import json
import numpy
import kkp

class MyEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, numpy.integer):
            return int(obj)
        elif isinstance(obj, numpy.floating):
            return float(obj)
        elif isinstance(obj, numpy.ndarray):
            return obj.tolist()
        else:
            return super(MyEncoder, self).default(obj)

def learning(url):
    DataProcess.get_csv()#首次运行时获取数据
    yq=ML2.SVM()
    yq.testurl=url
    yq.Train()
    yq_res= yq.predict_single()[0]

    ML.textClassifier()#首次运行时训练分类器
    t=ML2.textPredictor()
    t.urlpre=testurl
    t.crawl()
    t.predict()
    text_res=t.get_result()
    return res={'porn_site':text_res[0],'gaming_site':text_res[1],'phishing_site':yq_res}
    



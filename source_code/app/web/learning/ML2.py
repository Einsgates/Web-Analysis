# -*- coding:utf-8 -*-
# Author: Icebag
import os
import pandas as pd
import numpy as np
import pickle
import time
import jieba
import random
import requests
import re
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn import svm
from textblob.classifiers import *
from textblob import TextBlob
from bs4 import BeautifulSoup
from Crawl import crawl_single
good = 'csv/good.csv'

bad = 'csv/bad.csv'

pre ='csv/pre.csv'
def save(data,name):
    with open(name,'wb') as f:
        pickle.dump(data,f) 

def extractChinese(txt):
    pattern = re.compile("[\u4e00-\u9fa5]")
    return "".join(pattern.findall(txt))

class textClassifier(object):
    ghs_train = []
    norm_train = []
    zp_train = []
    train = []
    
    def __init__(self):      
        self.get_word()
        self.train_save()

    def get_word(self):
        with open('model/ghs.pickle','rb')as f1:
            ghs = pickle.load(f1)
        with open('model/norm.pickle','rb')as f2:
            norm = pickle.load(f2)
        with open('model/zp.pickle','rb')as f3:
            zp = pickle.load(f3)
        
        for str in ghs:
            seg_list = jieba.cut(str, cut_all=False)
            str = ' '.join(seg_list)
            self.ghs_train.append((str,'ghs'))
            
        for str in norm:
            seg_list = jieba.cut(str, cut_all=False)
            str = ' '.join(seg_list)
            self.norm_train.append((str,'norm'))

        for str in zp:
            seg_list = jieba.cut(str, cut_all=False)
            str = ' '.join(seg_list)
            self.zp_train.append((str,'zp'))
        

    def train_save(self):
        N = min(len(self.ghs_train),len(self.norm_train),len(self.zp_train))
        print(N)
        ghs_train = random.sample(self.ghs_train,N)
        norm_train = random.sample(self.norm_train,N)
        zp_train = random.sample(self.zp_train,N)
        
        GHSCL = NaiveBayesClassifier(ghs_train + norm_train)
        ZPCL = NaiveBayesClassifier(norm_train + zp_train)
        print(GHSCL.show_informative_features(75))
        print(ZPCL.show_informative_features(75))
        save(GHSCL,'model/GHSCL.pickle')
        save(ZPCL,'model/ZPCL.pickle')
    
class textPredictor(object):
    GHSCL=0
    ZPCL=0
    urlpre=''
    txt=''
    result=[]
    def __init__(self):
        self.loadCL()
        
        
        
    def set_url(url):
        self.urlpre=url
    def geturl(self):
        self.urlpre=input('?????????url:\n')
    def loadCL(self):
        with open('model/GHSCL.pickle','rb')as f:
            self.GHSCL = pickle.load(f)
        with open('model/ZPCL.pickle','rb')as f:
            self.ZPCL = pickle.load(f)
    def crawl(self):
        headers = { 'content-type': 'application/json','User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36'}   

        try:  
            response = requests.get(url = self.urlpre , headers = headers,timeout = (3,10))
            response.raise_for_status()
            response.encoding = response.apparent_encoding
        except Exception as e:
            print('??????{}??????:{}'.format(self.urlpre,e))
        soup = BeautifulSoup(response.content,'html.parser')
        for string in soup.stripped_strings:
            string = string.replace('???','')#????????????????????????????????????????????????????????????
            string = string.replace('???','')
            string = string.replace('???','')
            string = string.replace('???','')
            string = string.replace('???','')
            string = string.replace('???','')
            string = string.replace('???','')
            string = extractChinese(string.replace('???',''))
            self.txt = self.txt + string

    def predict(self):
        seg_list = jieba.cut(self.txt, cut_all=False)
        seg_str = ' '.join(seg_list)
        if self.GHSCL.classify(seg_str)=='ghs':
            ghsJudge=1
        else:
            ghsJudge=0

            
        
        if self.ZPCL.classify(seg_str)=='zp':
            zpJudge=1
        else:
            zpJudge=0
        

        print("????????????????????????{}\n\n".format(ghsJudge))
        print("???????????????????????????{}\n\n".format(zpJudge))
        self.result=[ghsJudge,zpJudge]
    def get_result(self):
        return self.result
        





def printT(word):
    a = time.strftime('%Y-%m-%d %H:%M:%S: ', time.localtime(time.time()))
    print(a+str(word))

def getdata():
    bad_x=[]
    good_x=[]
    
    bad_df=pd.read_csv(bad)
    good_df=pd.read_csv(good)
    
    for i in range(bad_df.shape[0]):
        bad_x.append(bad_df.iloc[i].tolist()[1:9])
    for i in range(good_df.shape[0]):
        good_x.append(good_df.iloc[i].tolist()[1:9])
    
    return [good_x, bad_x]

def getpre():
    pre_x=[]
    pre_df=pd.read_csv(pre)
    for i in range(pre_df.shape[0]):
        pre_x.append(pre_df.iloc[i].tolist()[1:9])
    return pre_x

class Baseframe(object):
    testurl=''

    def __init__(self):
        pass

    def getname(self):
        return 'baseframe'
    
    def Train(self):
        printT('???????????????good???'+good+' bad:'+bad)
        data = getdata()
        printT('done, good numbers:'+str(len(data[0]))+' bad numbers:'+str(len(data[1])))
        # ?????????
        good_y = [0 for i in range(len(data[0]))]
        bad_y = [1 for i in range(len(data[1]))]
        
        y = good_y + bad_y

        
        # ?????????????????????????????? lgs
        X = data[0]+data[1]
        printT('???????????????'+str(len(X[0])))
        # ??????kmeans?????? ????????????????????????

        printT('????????????????????????')
        # ?????? train_test_split ?????? X y ?????? testsize???????????????????????? random?????????
        # X_train????????????????????? y_train???????????????(????????????)  -->> ??????????????????
        # X_test????????????????????? 	 (????????????) -->> ??????????????????????????????
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        printT('????????????????????????????????????')
        printT(self.classifier)
        self.classifier.fit(X_train, y_train)

        # ??????????????? ??? ??????????????????????????????
        printT(self.getname()+'??????????????????:{}'.format(self.classifier.score(X_test, y_test)))
        
        #         ??????????????????
        with open('model/'+self.getname()+'.pickle', 'wb') as output:
            pickle.dump(self, output)

    # ?????????????????????????????????
    def predict_single(self):
        test=crawl_single(self.testurl)
        try:
            with open('model/'+self.getname()+'.pickle', 'rb') as input:
                self = pickle.load(input)
            printT('loading '+self.getname()+'model success')
        except FileNotFoundError:
            printT('start to train the '+self.getname()+' model')
            self.Train()
        res = self.classifier.predict([test])
        return res

    def predict(self):
        try:
            with open('model/'+self.getname()+'.pickle', 'rb') as input:
                self = pickle.load(input)
            printT('loading '+self.getname()+'model success')
        except FileNotFoundError:
            printT('start to train the '+self.getname()+' model')
            self.Train()
        
        printT('???????????????pre: '+pre)
        pre_x=getpre()
        printT('done, pre numbers:'+str(len(pre_x)))
        printT('start predict:')
        res = self.classifier.predict(pre_x)
        printT('????????????,?????????' + str(len(res)))
        result = {}

        result[0] = []
        result[1] = []

        for p, r in zip(pre_x, res):
            result[r].append(p)
        printT('good url: '+str(len(result[0])))
        printT('bad url: '+str(len(result[1])))

        return result


class SVM(Baseframe):

    def getname(self):
        return 'SVM'

    def __init__(self):      
        self.classifier = svm.SVC()

class LG(Baseframe):
    def getname(self):
        return 'LG'

    def __init__(self):
        self.classifier = LogisticRegression()
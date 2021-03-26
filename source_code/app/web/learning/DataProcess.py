# -*- coding:utf-8 -*-
# Author: Icebag
from textblob import TextBlob
from textblob.classifiers import NaiveBayesClassifier
import jieba
import pandas as pd
import numpy as np
import os
import Crawl
import pickle
import random



def get_list(filename):
    directory=str(os.getcwd())
    filepath=directory+'/url/'+filename
    list=open(filepath,'r').readlines()
    return list

def get_csv():
    Columns=['numOfImgs','numOfIframe','numOfInput','numOfForm','numOfScript','numOfCss','curN','endN']
    good_df=pd.DataFrame(columns=Columns)
    bad_df=pd.DataFrame(columns=Columns)
    pre_df=pd.DataFrame(columns=Columns)
    good_list=get_list('goodurl.txt')
    bad_list=get_list('badurl.txt')
    pre_list=get_list('preurl.txt')

    for url in bad_list:
        bad_df=bad_df.append(Crawl.crawl('http://'+url))
    for url in good_list:
        good_df=good_df.append(Crawl.crawl('http://'+url))
    for url in pre_list:
        pre_df=pre_df.append(Crawl.crawl('http://'+url))

    good_df.to_csv('/csv/good.csv')
    bad_df.to_csv('/csv/bad.csv')
    test_df.to_csv('/csv/pre.csv')

if __name__ == '__main__':
    get_csv()

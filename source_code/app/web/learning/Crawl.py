# -*- coding:utf-8 -*-
# Author: L1m_
# Edit: Icebag
import requests
import time
import whois
import os
import re
from queue import *
import types
import pickle
import pandas as pd
import numpy as np

from bs4 import BeautifulSoup

ghsLs = []
normLs = []
zpLs = []

def extractChinese(txt):
    pattern = re.compile("[\u4e00-\u9fa5]")
    return "".join(pattern.findall(txt))
def save_pk(data,name):
    with open('model/'+name,'wb') as f:
        pickle.dump(data,f) 
def crawlFromPornhubCn():
    Url = 'https://cn.pornhub.com/video?page='
    headers = { 'content-type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36'}   
    i = 1
    while i <= 30:
        try:
            curUrl = Url + str(i)       
            response = requests.get(url = curUrl , headers = headers,timeout = (3,7))
            response.raise_for_status()
            response.encoding = response.apparent_encoding
            content = response.content
        except Exception as e:
            print('爬取{}失败:{}'.format(curUrl,e))
            continue
        soup = BeautifulSoup(response.content,'html.parser')
        span = soup.find_all(name='span', attrs={"class":"title"})
        for s in span:
            ghsstr0 = extractChinese(str(s))
            if ghsstr0 != "": 
                ghsstr = ghsstr0[0:int(len(ghsstr0)/2)]  #因为重复，取前一半
                ghsLs.append((ghsstr))
        print("已经爬取第{}页".format(i))
        i = i + 1
    
    UrlLs = ['http://69.197.146.178/pc/','http://1299n.com/','http://www.ufokan.com/ufokan2020517.html','http://x77832.com/bbs','http://x77709.net/bbs/read.php?tid=1968701&ordertype=desc','http://www.ufokan.com/ufokan/Delicate/list_3_15.html','http://www.ufokan.com/ufokan/Making/list_2_28.html']
    for curUrl in UrlLs:
        headers = { 'content-type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36'}   
        try:  
            response = requests.get(url = curUrl , headers = headers,timeout = (3,7))
            response.raise_for_status()
            response.encoding = response.apparent_encoding
            content = response.content
        except Exception as e:
            print('爬取{}失败:{}'.format(curUrl,e))
        soup = BeautifulSoup(response.content,'html.parser')
        for string in soup.stripped_strings:
            string = extractChinese(string)
            if string != "":
                if 5 < len(string) < 25:
                    ghsLs.append(string)
                elif len(string) >25:
                    ghsLs.append(string[0:25])
        print("{} is done!".format(curUrl))
    save_pk(ghsLs,'ghs.pickle')


def crawlFromZp():
    UrlLs = ['http://www.acdtoys.com/','http://www.fmtfxx.net/','http://jn947.cn/','https://www.91zcp.com/','http://www.newniuren.com/','http://www.glspeizi.com/'
    'http://pz3230.site','http://www.fikm.cn/','http://jn947.cn/','http://www.mexmarkets.asia/','https://aaakk.org/','https://www.wgi8.com/ent/index.html','http://bbs.tyutjjglxyxsh.com/',
    'https://browser.qq.com/safe/safeurl.html?url=http%3A%2F%2Fwww.sqb08.com%2F&urltype=2&evilclass=2&eviltype=5&isforbid=0','http://www.4rxx.com/','https://www.asiabet8888.com/%E4%B8%AD%E5%9B%BD%E6%8A%95%E6%B3%A8%E7%BD%91%E7%AB%99/'
    'http://www.fujian-window.com/749053/202814.html','http://www.miaoqb.cn/index.php']
    for curUrl in UrlLs:
        headers = { 'content-type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36'}   
        try:  
            response = requests.get(url = curUrl , headers = headers,timeout = (3,7))
            response.raise_for_status()
            response.encoding = response.apparent_encoding
            content = response.content
        except Exception as e:
            print('爬取{}失败:{}'.format(curUrl,e))
        soup = BeautifulSoup(response.content,'html.parser')
        for string in soup.stripped_strings:
            string = extractChinese(string)
            if string != "":
                if 5 < len(string) < 25:
                    zpLs.append(string)
                elif len(string) >25:
                    zpLs.append(string[0:25])
        print("{} is done!".format(curUrl))
    save_pk(zpLs,'zp.pickle')

#爬取正常网站并保存数据，各类百科、新闻、丁香医生、哔哩哔哩
def crawlFromNorm():
    UrlLs = ['https://www.readnovel.com/chapter/15790216505250404/42386595047259792','https://www.acfun.cn/','http://www.conglin.cc/pt/','https://www.178yr.com/'
    'https://www.bilibili.com/','https://dxy.com/','http://baike.baidu.com/jingji',
    'http://baike.baidu.com/lishi','http://baike.baidu.com/tiyu','https://www.bilibili.com/','https://www.icourse163.org/',
    'https://www.youku.com/','https://www.iqiyi.com','https://www.sina.com.cn/','https://www.taobao.com/','https://www.jd.com/','http://www.icbc.com.cn/icbc/','http://www.abchina.com/cn/','https://www.pinduoduo.com/']
    for curUrl in UrlLs:
        headers = { 'content-type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36'}   
        try:  
            response = requests.get(url = curUrl , headers = headers,timeout = (3,7))
            response.raise_for_status()
            response.encoding = response.apparent_encoding
            content = response.content
        except Exception as e:
            print('爬取{}失败:{}'.format(curUrl,e))
        soup = BeautifulSoup(response.content,'html.parser')
        for string in soup.stripped_strings:
            string = extractChinese(string)
            if string != "":
                if 5 < len(string) < 25:
                    normLs.append(string)
                elif len(string) >25:
                    normLs.append(string[0:25])
        print("{} is done!".format(curUrl))
    save_pk(normLs,'norm.pickle')

class crawlData():
    urlMother = ""  #储存url
    curN = 0        
    maxN = 25       #######################################################爬几个
    
    endN = 0
    urlQ = Queue()  #队列保存页面url，包括iframe src， a标签href， form action等
    urlSet = set()  #集合保存url，一遍用于检查新url是否有重复
    curN = 0        #储存正在遍历的进度
    numOfLinks = 0  #站内可点击链接非重复的数目，外加form用action跳转的数目,外加iframe
    numOfImgs = 0   #imgs数目
    numOfIframe = 0 #iframe数目
    numOfInput = 0  #input数目
    numOfForm = 0   #form数目
    numOfScript = 0 #js数目
    numOfCss = 0    #css数目
    numOfInputPassword = 0#密码输入框数目
    numOfAction = 0       #通过form中<action>进行跳转的数目
    RateOfActionInLinks = 0 #numOfAction/numOfLinks

def setUrlMother(crawl,str):
    crawl.urlMother = str.strip()
    crawl.urlQ.put(crawl.urlMother)
    crawl.urlSet.add(str.strip())

def scanQ(crawl):
    headers = { 'content-type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36'}   
    try:
        if crawl.urlQ.empty() == False:
            curUrl = crawl.urlQ.get()
            response = requests.get(url = curUrl , headers = headers,timeout = (3,7))
            response.raise_for_status()
            response.encoding = response.apparent_encoding
            content = response.content
        else:
            #save(crawl)
            return 0
    except Exception as e:
        print('爬取{}失败:{}'.format(curUrl,e))
        return 0
    soup = BeautifulSoup(content,'html.parser')

    aList = soup.find_all('a')
    urTemp = ""
    for a in aList:
        urlTemp = a.get('href')
        if type(urlTemp) == type('abc'):
            if urlTemp.startswith('http'): #包括了https
                if urlTemp not in crawl.urlSet:
                    crawl.urlQ.put(urlTemp)
                    crawl.urlSet.add(urlTemp)
                    crawl.numOfLinks += 1
    #crawl.numOfLinks += len(soup.find_all('a')) #站内可点击链接数目，外加form用action跳转的数目,外加iframe的src,link的src
        
    crawl.numOfImgs += len(soup.find_all('img'))
    crawl.numOfImgs += len(soup.find_all('i')) #i标签标识的小图标也算进去

    iframeList = soup.find_all('iframe')
    crawl.numOfIframe += len(soup.find_all('iframe'))
    for iframe in iframeList:
        if type(iframe.get('src')) == type('abc'):
            if iframe.get('src').startswith('http') and iframe.get('src') not in crawl.urlSet:
                if iframe.get('src') not in crawl.urlSet:
                    crawl.urlQ.put(iframe.get('src'))
                    crawl.urlSet.add(iframe.get('src'))
                    crawl.numOfLinks += 1

    crawl.numOfInput += len(soup.find_all('input'))

    crawl.numOfForm += len(soup.find_all('form'))

    crawl.numOfScript += len(soup.find_all('script'))

    linkList = soup.find_all('link')
    for link in linkList:
        if link.get("rel") == ["stylesheet"] or link.get("rel") == 'stylesheet':
            crawl.numOfCss +=1
        if type(link.get('href')) == type('abc'):
            if link.get('href').startswith('http'):
                if link.get('href') not in crawl.urlSet:
                    crawl.urlQ.put(link.get('href'))
                    crawl.urlSet.add(link.get('href'))
                    crawl.numOfLinks += 1

    inputList = soup.find_all('input')
    for input in inputList:
        if input.get("type") == 'password' or input.get('type') == ["password"]:
            crawl.numOfInputPassword += 1

    formList = soup.find_all('form')
    for form in formList:
        if type(form.get("action")) == type('abc') : #如果action存在且为字符串类型
            crawl.numOfAction += 1
            crawl.numOfLinks += 1  
            if form.get("action") not in crawl.urlSet:
                crawl.urlQ.put(form.get("action")) 
                crawl.urlSet.add(form.get("action"))

  #  crawl.RateOfActionInLinks = crawl.numOfAction/crawl.numOfLinks
    
    crawl.curN += 1 #遍历数++ 
    crawl.endN = crawl.curN
    print("{}，{} is done...".format(crawl.curN,curUrl))





def save(crawlData,DF):
    Columns=['numOfImgs','numOfIframe','numOfInput','numOfForm','numOfScript','numOfCss','curN','endN']
    Data=np.array([[crawlData.numOfImgs,crawlData.numOfIframe,crawlData.numOfInput,crawlData.numOfForm,crawlData.numOfScript,crawlData.numOfCss,crawlData.curN,crawlData.endN]])
    df=pd.DataFrame(data=Data,columns=Columns)
    DF=DF.append(df)
    return DF
    #with open(''.join(e for e in crawlData.urlMother if e.isalnum()) + '.data','wb') as f:
     #   #f.write( pickle.dumps(list) )
      #  pickle.dump(crawlData,f)  #上面注释的意义完全一样



#####################################################################
#单个网页遍历爬取，用main函数即可
def main():
    Columns=['numOfImgs','numOfIframe','numOfInput','numOfForm','numOfScript','numOfCss','curN','endN']
    df=pd.DataFrame(columns=Columns)

    crawl = crawlData()
    urlMother = input("请输入域名或url。如：http://www.baidu.com")
    setUrlMother(crawl, urlMother)
    while(crawl.urlQ.empty() == False):
        scanQ(crawl)
        if crawl.curN >= crawl.maxN:
            break
    print(crawl.__dict__)
    df=save(crawl,df)
    df.to_csv("data1.csv")

def crawl_single(urlMother):

    crawl = crawlData()
    
    setUrlMother(crawl, urlMother)
    while(crawl.urlQ.empty() == False):
        scanQ(crawl)
        if crawl.curN >= crawl.maxN:
            break
    print(crawl.__dict__)
    Data=[crawl.numOfImgs,crawl.numOfIframe,crawl.numOfInput,crawl.numOfForm,crawl.numOfScript,crawl.numOfCss,crawl.curN,crawl.endN]

    return Data
    
    
#需要批处理爬取大量网页时，用crawl。
def crawl(URL):
    crawl = crawlData()
    urlMother = URL
    setUrlMother(crawl, urlMother)
    while(crawl.urlQ.empty() == False):
        scanQ(crawl)
        if crawl.curN >= crawl.maxN:
            break
    print(crawl.__dict__)
    Columns=['numOfImgs','numOfIframe','numOfInput','numOfForm','numOfScript','numOfCss','curN','endN']
    Data=np.array([[crawl.numOfImgs,crawl.numOfIframe,crawl.numOfInput,crawl.numOfForm,crawl.numOfScript,crawl.numOfCss,crawl.curN,crawl.endN]])
    df=pd.DataFrame(data=Data,columns=Columns)
    return df
def p():
    crawlFromPornhubCn()  #爬取黄网并保存
    crawlFromNorm() #爬取正常网站并保存
    crawlFromZp() #爬取非法集资等诈骗网站
    
    print('--已经保存完成--')
    
    

if __name__ == '__main__':
    p()
    
    
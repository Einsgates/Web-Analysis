# Ciscn_Product 
## V1.0
### 概况
1.完成了机器学习基本框架，接下来就是收集尽可能多的样本。

2.还有就是提高模型的准确性（改进算法）
### 使用方式
在badurl.txt里面放恶意网址，goodurl.txt里放安全的网址，preurl.txt里放需要预测的网址。

$ python main.py
## V2.0
### 概况
1.加入了Lim的自然语言文本分类模块，可以识别ghs、金融风险网站

2.优化程序结构，可以输入单个网址分析，也可写入preurl.txt批量分析

3.结果返回在result.json中
### 使用方法
首次使用时，本身不包含分类器，去掉main.py中的注释，运行训练分类器的函数，生成分类器。在badurl.txt里面放恶意网址，goodurl.txt里放安全的网址，preurl.txt里放需要预测的网址。或者直接在main函数中输入。得到的结果以json的形式保存在result.json中：形如 {"ghs":0,"zp":0,"yq":0}


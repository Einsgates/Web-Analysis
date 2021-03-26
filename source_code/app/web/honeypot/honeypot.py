# coding=utf-8
#! /usr/bin/env python

import time
import threading
import os
import sys
import Queue
from time import gmtime, strftime
from itertools import groupby
from operator import itemgetter
import os.path
import logging
import redirection
import honeypotconfig
import executemechanize
import normalize
import unquote
import argparse
import extraction
import scan
import updateantivirus

# 这是一个提升并发服务器性能的方法
try:
    import signal
    from signal import SIGPIPE, SIG_IGN
    signal.signal(signal.SIGPIPE, signal.SIG_IGN)
except ImportError:
    pass

# 创建队列对象
queue = Queue.Queue()

# 创建日志对象
logger = logging.getLogger()


def worker():

    urldict = queue.get()
# this is for the normal visitor output (no error)
    logger.info(str(urldict["counter"]) + ",\t" +
                urldict["url"]+",\t" + "Visiting")
    executemechanize.executemechanize(urldict)
    queue.task_done()

# 这应该是线程部分


def threadmaker():

    while True:
        threadstomake = honeypotconfig.threadnum - threading.active_count()

        for i in range(threadstomake):
            thread = threading.Thread(target=worker)
            thread.setDaemon(True)
            thread.start()

        time.sleep(5)

def main(url):
    # Create the threads
    thread = threading.Thread(target=threadmaker)
    thread.setDaemon(True)
    thread.start()
    script_path = os.path.dirname(os.path.abspath(__file__))
    path = script_path+"/tmp"
    # print path



# create the tmp folder(创建文件夹,这个文件夹是来存放下载的文件的)
    if not os.path.isdir(path):
        os.makedirs("tmp")


# Crawler
    executemechanize.crawler = True

# Logging(创建dubug文件夹)
    """Initialize logger."""
    command = "mkdir -p debug/"  # create a temporary folder in your working space folder
    os.system(command)
    sys.stdin = open(
        "debug/" + time.asctime(time.localtime(time.time())) + ".log", "a")
    logger = logging.getLogger()

    sh = logging.StreamHandler()
    sh.setFormatter(SpecialFormatter())

    sh2 = logging.StreamHandler(sys.stdin)
    sh2.setFormatter(SpecialFormatter())

    logger.addHandler(sh)
    logger.addHandler(sh2)
    logger.setLevel(logging.INFO)

# URL(这个部分是核心部分)
    url = normalize.normalizeurl(url)
    dict = {}
    counter = 1
    if not (url.startswith("http://")) and not (url.startswith("https://")):
        url = "http://"+url
    dict["url"] = url
    dict["counter"] = counter
    queue.put(dict)
    queue.join()
    scan.scanning(path)

class SpecialFormatter(logging.Formatter):
    FORMATS = {logging.INFO: "%(name)s,\t%(levelname)s,\t%(message)s",
               'DEFAULT':  "%(name)s,\t%(levelname)s,\t%(message)s"}

    def formatTime(self, record, datefmt=None):
        self._datefmt = time.strftime("%Y-%m-%d %H:%M:%S")
        return logging.Formatter.formatTime(self, record, self._datefmt)

    def format(self, record):
        self._fmt = self.FORMATS.get(record.levelno, self.FORMATS['DEFAULT'])
        return logging.Formatter.format(self, record)


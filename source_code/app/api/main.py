import os
import random
import threading

import requests
from flask import Blueprint, jsonify, request, g, render_template

from app.libs.Thread import MyThread
from app.libs.error_code import UrlException
from app.models.base import db
from app.models.sum import Sum
from app.models.url import Url
from app.models.user import User
from app.web.func import validate_url, change_to_ip, get_tude, local_list_check,honeypot
from app.web.learning.main import
from app.libs.token_auth import auth

Check = Blueprint('check', __name__)



@Check.route('/url/', methods=['GET', 'POST'])
def test():
    check_url = request.args.get('url')
    check_url = check_url.strip()
    if validate_url(check_url):
        x = local_list_check(check_url)
        if x:
            return x
        r = requests.get(check_url)
        if r.status_code != 200:
            raise UrlException()
        ip = change_to_ip(check_url)
        thd1 = MyThread(learning,args=(check_url,))
        thd2 = MyThread(get_tude,args=(ip,))
        thd3 = MyThread(honeypot,args=(check_url,))
        thd1.start()
        thd2.start()
        thd3.start()
        thd1.join()
        thd2.join()
        thd3.join()
        result = {**thd1.get_result(),**thd2.get_result(),**thd2.get_result()}
        return jsonify(result)
    else:
        raise UrlException()


@Check.route('/all_data')
def get_sum():
    data = Url.query.all()
    result = {}
    num = 0
    for flag in data:
        num = num+1
        key = 'data'+str(num)
        Dict = {'url': flag.url, 'ip': flag.ip, 'malicious': flag.malicious, 'black_list1': flag.black_list1,
                'black_list2': flag.black_list2,
                'black_list3': flag.black_list3, 'malicious_software': flag.malicious_software,
                'porn_site': flag.porn_site, 'phishing_site': flag.phishing_site,
                'gaming_site': flag.gaming_site, 'country': flag.country, 'province': flag.province,
                'city': flag.city,
                'tude': flag.tude}
        result[key]=Dict
    return jsonify(result)





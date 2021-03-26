import json
import re
import socket
import requests
from urllib.request import urlopen
from app.models.url import Url
import os


def change_to_ip(domain):
    if domain.startswith('http://') or domain.startswith('https://'):
        domain = re.sub('https?://', '', domain)
    domain = re.sub(':.*', '', domain)
    domain = re.sub('/.*', '', domain)
    p = re.compile('^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$')
    if p.match(domain):
        return domain
    domain = socket.getaddrinfo(domain, 'http')[0][4][0]
    return domain


def URLhaus_check(domain):
    result = {}
    website = "https://urlhaus.abuse.ch/browse.php?search=" + domain
    try:
        r = requests.get(website, timeout=7)
        if "Get more information about this malware URL" in r.text:
            result['black_list1'] = True
        else:
            result['black_list1'] = False
    except Exception as e:
        result['black_list1'] = False
    return result


def auth0_check(url):
    result = {}
    website = 'https://openphish.com/feed.txt'
    try:
        r = requests.get(website, timeout=7)
        if url in r.text:
            result['black_list2'] = True
        else:
            result['black_list2'] = False
    except Exception as e:
        result['black_list2'] = False
    return result


def local_list_check(url):
    flag = Url.query.filter_by(url=url).first()
    if flag:
        return {'url': url, 'ip': flag.ip, 'malicious': flag.malicious, 'black_list1': flag.black_list1,
                'black_list2': flag.black_list2,
                'black_list3': flag.black_list3, 'malicious_software': flag.malicious_software,
                'porn_site': flag.porn_site, 'phishing_site': flag.phishing_site,
                'gaming_site': flag.gaming_site, 'country': flag.country, 'province': flag.province,
                'city': flag.city,
                'tude': flag.tude}
    else:
        return ''


def validate_url(url):
    url = re.sub(r'^(?:http|ftp)s?://', '', url)
    regex = re.compile(
        #        r'^(?:http|ftp)s?://'  # http:// or https://
        r'(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+(?:[A-Z]{2,6}\.?|[A-Z0-9-]{2,}\.?)|'  # domain...
        r'localhost|'  # localhost...
        r'\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})'  # ...or ip
        r'(?::\d+)?'  # optional port
        r'(?:/?|[/?]\S+)$', re.IGNORECASE)
    result = re.match(regex, url)
    if result is not None:
        return True
    else:
        return False


def get_tude(ip):
    result = {}
    url = "http://api.ipstack.com/{}?access_key=6000eef5a49681002750d7529e6f6702".format(ip)
    response = urlopen(url).read().decode('utf-8')
    response_json = json.loads(response)
    result['country'] = response_json['country_name']
    result['province'] = response_json['region_name']
    result['city'] = response_json['city']
    result['tude'] = str(response_json['latitude']) + ',' + str(response_json['longitude'])
    return result



def honeypot(url):
    os.system('cd app/web/honeypot && python2 honeypot.py')
    with open('app/web/honeypot/scanlogs/Clam-report.log') as r:
        if "Infected files: 0" in r.text:
            return {"malicious_software":False}
        else:
            return {"malicious_software":True}


#coding=utf-8
#! /usr/bin/env python

import honeypotconfig
import re
import os, errno, logging
import threading, normalize
import mechanize
import cookielib
import urlparse, urllib, urllib2
import lxml.html
import magic, mimetypes
import jsbeautifier
import redirection
import tldextract, httplib
import extraction

# 这里是用了signal模块,这个操作可以提升并发服务器的性能
try:
    import signal
    from signal import SIGPIPE, SIG_IGN
    signal.signal(signal.SIGPIPE, signal.SIG_IGN)
except ImportError:
    pass

# 创建一个日志来监视mechanize模块
logger = logging.getLogger("mechanize")
# 设置日志level
logger.setLevel(logging.INFO)
# 创建针对各个线程的一个全局对象
threadlocal = threading.local()
crawler = False
# jsbeautifier的设置
opts = jsbeautifier.default_options()
opts.eval_code = True

# 创建重定向列表
def set_redirection_list(list):
	# threadlocal.redirection=list
	threadlocal.__setattr__('redirection_list', list)

# 设置日志level
def set_logging_level(arg):
	logger.setLevel(arg)

# 创建字典
def create_directory(directory_name):
 	try:
		os.makedirs(directory_name)
	except OSError as exc:
		if exc.errno == errno.EEXIST:
			pass
		else:	
			raise
# 得到绝对路径
script_path = os.path.dirname(os.path.abspath( __file__ ))

# 传入urldict处理
def executemechanize(urldict):
	
	url = urldict["url"]
	url_no = urldict["counter"]  # counter是计数器

	#Array of redirections threadlocal.redirection_list=[]
	threadlocal.__setattr__('redirection_list', [])	
	
	# Mechanize Settings
	# 这里是对mechanize对象的一些设置
	br = mechanize.Browser()
	cj = cookielib.LWPCookieJar()
	br.set_cookiejar(cj)
	br.set_handle_equiv(True)
	br.set_handle_gzip(True)
	br.set_handle_redirect(True)
	br.set_handle_referer(False)
	br.set_handle_robots(False)
	br.set_debug_responses(False)
	br.set_debug_redirects(True)
	br.set_handle_refresh(mechanize._http.HTTPRefreshProcessor(), max_time=0)
	br.encoding = "UTF-8"
	br.addheaders = [('User-Agent', honeypotconfig.useragent),('Accept', 'text/html,application/xhtml+xml,application/xml,text/javascript;q=0.9,*/*;q=0.8'),('Accept-Language', honeypotconfig.acceptlang),('Accept-Encoding', 'gzip,deflate')]
	

	cj.add_cookie_header(br)

	try:
		# 打开url,对象为r
		r = br.open(url, timeout=12.0)

		scheme, host, path, params, query, fragment = urlparse.urlparse(r.geturl())

		# Print redirection route if exist
		# 这里注意这个mechanize库和系统自带的并不一样,我自己写了个_redirection.py
		threadlocal.__setattr__('redirect', redirection.redirection())

		# 分离域名的相关内容
		extracted = tldextract.extract(url)
		formatted = "{}.{}.{}".format(extracted.subdomain, extracted.domain, extracted.suffix)
		
		# 提取重定向列表中的每个链接，并将其与格式化的URL匹配
		for eachredirect in threadlocal.redirection_list:
			list_extract = tldextract.extract(eachredirect)
			list_format = "{}.{}.{}".format(list_extract.subdomain, list_extract.domain, list_extract.suffix)
#			print list_format
			if list_format == formatted:
				pass
			if not list_format == formatted:
				if threadlocal.redirection_list:
					logger.info(str(url_no) + ",\t" + url + ",\t" + '"'+"Redirection Route" + '"'+ ",\t" +str(threadlocal.redirection_list))
					break
		
		if threadlocal.redirection_list:
			logger.info(str(url_no) + ",\t" + url + ",\t" + "Redirection Route" + ",\t" +str(threadlocal.redirection_list))

		# 进行url编码
		fdirname = urllib.quote_plus(url)
		if (len(fdirname) > 250):
			fdirname = fdirname[:247]
			
# Folder Generation
# 生成文件夹

		# Gets first character of website to store alphabetically(获取网站的第一个字符)
		first_char = re.sub(r"(http://|https://)?(www.)?", "", url)[:1]
		second_char = re.sub(r"(http://|https://)?(www.)?", "", url)[1:3]

		directory_name = os.path.join("tmp/", first_char,  second_char, fdirname)

		# If using proxy, names directory in the format ip_address:port
		'''
		if honeypotconfig.proxy:
			proxy_name = re.search(r":\s?['\"](.*)\s?['\"]", str(honeypotconfig.proxy)).group(1)
			directory_name = os.path.join(proxy_name, first_char, second_char, fdirname)
		'''
		# 到这里创建了文件夹
 		create_directory(directory_name)

		jsurl_list_old, jsurl_list, url_list = extraction.js_extraction(br.response().read(), scheme, host)

		# Remove duplicates
		jsurl_list_unique = set(jsurl_list)
		del jsurl_list[:]

		fp = open(os.path.join(directory_name, fdirname), "wb")
		new_js_path = br.response().read()
		for link in jsurl_list_old:
			if not link.lower().startswith(("www.","http://","https://")):
				js_name=link[link.rfind("/") + 1:]
				new_js_path = re.sub(re.escape(link), "./javascripts/" + js_name, new_js_path)
			
		fp.write(new_js_path)
		fp.close()

		del jsurl_list_old[:]
		current_ext = os.path.splitext(os.path.join(directory_name, fdirname))[1]
		guess_ext = mimetypes.guess_extension(magic.from_file(os.path.join(directory_name, fdirname), mime=True))
		if (guess_ext is not current_ext and guess_ext is not None):
			os.rename((os.path.join(directory_name, fdirname)), (os.path.join(directory_name, fdirname)) + str(guess_ext))
							
#Fetching .js Files(提取js文件)
			
		if len(jsurl_list_unique) != 0:
			create_directory(os.path.join(directory_name,  "javascripts"))
		
				
		for link in jsurl_list_unique:
			link=normalize.normalizeurl2(link)
			if len(link)>250:
				continue
			if link.lower().startswith(("js/", "catalog/", "script/", "scripts/", "katalog/","template/","templates/","includes/","static/","mod/","files/","data/","css/","components/","component/","sites/","default/","./javascripts/")):
				link = scheme + "://" + host + "/" + link
#			print "****"+link
			try:			
				r = br.open(normalize.normalizeurl2(link.strip()), timeout=12.0)
				logger.info(str(url_no) + ",\t" + url + ",\tJS retrieve,\t" + link)	
				js_name = link[link.rfind("/") + 1:]
				response = br.response().read()
#				print "***"+js_name+"***"

				if not js_name.endswith(".js"):
					js_name = js_name[0:js_name.rfind("?")]

				js_file_path = os.path.join("tmp/", first_char, second_char, fdirname, "javascripts", js_name)
				if honeypotconfig.proxy:
					proxyname = re.search(r":\s?['\"](.*)\s?['\"]", str(honeypotconfig.proxy)).group(1)
					js_file_path = os.path.join(proxyname, first_char, second_char, fdirname, "javascripts", js_name)
				jswrite = open(js_file_path, 'w')
				jswrite.write(response)

				if honeypotconfig.jsbeautifier:
					jswrite.write("\n====================================================\n")
					jswrite.write("====================Beautified Below================\n")
					with open(js_file_path , 'a') as f:
						beautify_script_string = jsbeautifier.beautify(response, opts)
						f.write(str(beautify_script_string))				
				jswrite.close()

			except Exception, e:
				logger.error(str(url_no) + ",\t" + url.strip() + ",\t" + '"'+ str(e) + '"'+",\t" + link)



			r.close()
				


		jsurl_list_unique.clear()

		exe_list = []

		if crawler:
			exe_list = extraction.exe_extraction(url_list)

		if len(exe_list) != 0:
			create_directory(os.path.join(directory_name,  "exe"))

		for link in exe_list:
			try:
				r = urllib2.urlopen(link, timeout=12)
				size = int(r.headers["Content-Length"]) / 1024
				exename = link[link.rfind("/") + 1:]
				if size < honeypotconfig.exe_max_size:
					logger.info(str(url_no) + ",\t" + url + ",\t" + "EXE retrieve,\t" + link)
					exe_file_path = os.path.join("tmp/".tmpfolder, first_char, second_char, fdirname, "exe", exename)
					'''
					if honeypotconfig.proxy:
						proxyname = re.search(r":\s?['\"](.*)\s?['\"]", str(honeypotconfig.proxy)).group(1)
						exe_file_path = os.path.join(proxyname, first_char, second_char, fdirname, "exe", js_name)
					'''
					r.close()
					r2=br.open(link, timeout=12)
					exewrite = open(exe_file_path, 'wb')
					exewrite.write(br.response().read())
					exewrite.close()
				else:
					logger.error(str(url_no) + ",\t" + url + ",\t" + "EXE " + str(size) + "KB above exe_max_size" + ",\t" + link)
			except Exception, e:
				try:
					logger.error(str(url_no) + ",\t" + url.strip() + ",\t" + str(e) + ",\t" + link,  extra = {'error_code' : str(e.code)})
				except AttributeError:
					logger.error(str(url_no) + ",\t" + url.strip() + ",\t" + str(e) + ",\t" + link,  extra = {'error_code' : ""})

		del exe_list[:]
		del url_list[:]



	except Exception, e:
		logger.error(str(url_no) + ",\t" + url.strip() + ",\t" + '"'+str(e)+'"' + "\t")	

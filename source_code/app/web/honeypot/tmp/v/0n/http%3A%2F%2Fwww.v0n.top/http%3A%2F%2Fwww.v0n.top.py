<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="google-site-verification" content="xBT4GhYoi5qRD5tr338pgPM5OWHHIDR6mNg1a3euekI" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Quis custodiet ipsos custodes?">
    <meta name="keywords"  content="Von, Von Blog, Von的博客, luyanchen, 卢彦臣, CTF, security, CS">
    <meta name="theme-color" content="#000000">
    
    <title>Von的博客 | Von Blog</title>

    <!-- Web App Manifest -->
    <link rel="manifest" href="/pwa/manifest.json">
	
	<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {
      skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
      inlineMath: [['$','$']]
    }
  });
</script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML' async></script>

    <!-- Favicon -->
    <link rel="shortcut icon" href="/img/favicon.ico">

    <!-- Safari Webpage Icon    by-BY -->
    <link rel="apple-touch-icon" href="/img/apple-touch-icon.png">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://VonLYC.github.io/">

    <!-- Bootstrap Core CSS -->
    <!--<link rel="stylesheet" href="/css/bootstrap.min.css">-->
    <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css">

    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="/css/hux-blog.min.css">

    <!-- Pygments Github CSS -->
    <link rel="stylesheet" href="/css/syntax.css">

    <!-- Custom Fonts -->
    <!-- <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css"> -->
    <!-- Hux change font-awesome CDN to qiniu -->
    <link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" type="text/css">


    <!-- Hux Delete, sad but pending in China
    <link href='http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/
    css'>
    -->
    
     <style>
  table{
    border-left:1px solid #000000;border-top:1px solid #000000;
    width: 100%;
    word-wrap:break-word; word-break:break-all;
  }
  table th{
  text-align:center;
  }
  table th,td{
    border-right:1px solid #000000;border-bottom:1px solid #000000;
  }
</style>


    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- ga & ba script hoook -->
    <script></script>
</head>


<!-- hack iOS CSS :active style -->
<body ontouchstart="">

    <!-- Navigation -->
<nav class="navbar navbar-default navbar-custom navbar-fixed-top">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header page-scroll">
            <button type="button" class="navbar-toggle">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Von's Blog</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div id="huxblog_navbar">
            <div class="navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    
                    <li>
                        <a href="/about/">About</a>
                    </li>
                    
                    <li>
                        <a href="/tags/">Tags</a>
                    </li>
                    
                </ul>
            </div>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
</nav>
<script>
    // Drop Bootstarp low-performance Navbar
    // Use customize navbar with high-quality material design animation
    // in high-perf jank-free CSS3 implementation
    var $body   = document.body;
    var $toggle = document.querySelector('.navbar-toggle');
    var $navbar = document.querySelector('#huxblog_navbar');
    var $collapse = document.querySelector('.navbar-collapse');

    var __HuxNav__ = {
        close: function(){
            $navbar.className = " ";
            // wait until animation end.
            setTimeout(function(){
                // prevent frequently toggle
                if($navbar.className.indexOf('in') < 0) {
                    $collapse.style.height = "0px"
                }
            },400)
        },
        open: function(){
            $collapse.style.height = "auto"
            $navbar.className += " in";
        }
    }

    // Bind Event
    $toggle.addEventListener('click', function(e){
        if ($navbar.className.indexOf('in') > 0) {
            __HuxNav__.close()
        }else{
            __HuxNav__.open()
        }
    })

    /**
     * Since Fastclick is used to delegate 'touchstart' globally
     * to hack 300ms delay in iOS by performing a fake 'click',
     * Using 'e.stopPropagation' to stop 'touchstart' event from 
     * $toggle/$collapse will break global delegation.
     * 
     * Instead, we use a 'e.target' filter to prevent handler
     * added to document close HuxNav.  
     *
     * Also, we use 'click' instead of 'touchstart' as compromise
     */
    document.addEventListener('click', function(e){
        if(e.target == $toggle) return;
        if(e.target.className == 'icon-bar') return;
        __HuxNav__.close();
    })
</script>


    <!-- Page Header -->
<header class="intro-header" style="background-image: url('/img/post-bg-desk.jpg')">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 ">
                <div class="site-heading">
                    <h1>Von's Blog</h1>
                    <!--<hr class="small">-->
                    <span class="subheading">Thinking will not overcome fear but action will.</span>
                </div>
            </div>
        </div>
    </div>
</header>

<!-- Main Content -->
<div class="container">
	<div class="row">
        

<!-- USE SIDEBAR -->
    <!-- PostList Container -->
    		<div class="
                col-lg-8 col-lg-offset-1
                col-md-8 col-md-offset-1
                col-sm-12
                col-xs-12
                postlist-container
            ">
    			
<div class="post-preview">
    <a href="/2020/03/29/Python%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96%E6%BC%8F%E6%B4%9E/">
        <h2 class="post-title">
            Python反序列化漏洞学习
        </h2>
        
        <div class="post-content-preview">
            Python序列化和反序列化
和PHP反序列化类似，Python序列化和反序列化的过程就是把对象转化成字符串和把字符串转化成对象的过程。
我们主要运用的是pickle这个库来实现序列化和反序列化的过程。下面，我们举一个例子来说明其工作方式：
import pickle

class name():
    def __init__(self):
        self.name = 'Vo...
        </div>
    </a>
    <p class="post-meta">
        Posted by Von on March 29, 2020
    </p>
</div>
<hr>

<div class="post-preview">
    <a href="/2020/03/28/%E5%9B%9B%E5%A4%A9%E5%AD%A6%E4%B9%A0Flask/">
        <h2 class="post-title">
            四天学习Flask(入门篇)
        </h2>
        
        <div class="post-content-preview">
            写在前面
从今天起开始学习Flask，主要参考书籍是米格尔·格林贝格的《Flask Web开发》，打算用四天的时间看完这本书的入门部分，把学习的过程每天更新在这篇文章里面，记录自己的学习过程，也给看到的人做一个参考吧。
用的是Python3的环境,主机系统为Windows10
第一天
环境的安装和虚拟环境的搭建
Windows10下使用virtualenv来创建虚拟环境
pip3 insta...
        </div>
    </a>
    <p class="post-meta">
        Posted by Von on March 28, 2020
    </p>
</div>
<hr>

<div class="post-preview">
    <a href="/2020/03/04/XXE%E5%AD%A6%E4%B9%A0/">
        <h2 class="post-title">
            XXE学习
        </h2>
        
        <div class="post-content-preview">
            什么是XXE?
XXE全称是——XML External Entity,也就是XML外部实体注入攻击.漏洞是在对不安全的外部实体数据进行处理时引发的安全问题。

XML学习
既然和XML相关，那我们就先来学习下XML的相关知识。XML 指可扩展标记语言（eXtensible Markup Language）.XML被设计用来传输和存储数据。(划重点，存储!html是显示数据,两者设计的目的不...
        </div>
    </a>
    <p class="post-meta">
        Posted by Von on March 4, 2020
    </p>
</div>
<hr>

<div class="post-preview">
    <a href="/2020/03/03/SSRF%E4%B8%AD%E4%B8%A4%E4%B8%AA%E5%87%BD%E6%95%B0%E7%9A%84%E7%BB%95%E8%BF%87/">
        <h2 class="post-title">
            SSRF中两个函数的绕过
        </h2>
        
        <div class="post-content-preview">
            前言
在SSRF中我们经常遇到这两个函数filter_var()和parse_url(),今天来学习一下这两个函数相关的绕过方法.
parse_url()
函数介绍
parse_url用来解析 URL，返回其组成部分(返回一个关联数组)
语法如下:
 parse_url (url,commpent) : mixed

其中,url为需要解析的url(必需),commpent为指定 PHP_U...
        </div>
    </a>
    <p class="post-meta">
        Posted by Von on March 3, 2020
    </p>
</div>
<hr>

<div class="post-preview">
    <a href="/2020/03/01/SSRF%E5%AD%A6%E4%B9%A0/">
        <h2 class="post-title">
            SSRF学习
        </h2>
        
        <div class="post-content-preview">
            什么是SSRF?
SSRF(Server-Side Request Forgery:服务器端请求伪造)是一种由攻击者构造形成由服务端发起请求的一个安全漏洞。一般情况下，SSRF攻击的目标是从外网无法访问的内部系统.(正是因为它是由服务端发起的，所以它能够请求到与它相连而与外网隔离的内部系统)
下面这张图很好的展示了SSRF的流程:

通俗点来说，就是用户无法访问内网的某些数据，通过访问服务端...
        </div>
    </a>
    <p class="post-meta">
        Posted by Von on March 1, 2020
    </p>
</div>
<hr>

<div class="post-preview">
    <a href="/2020/01/29/CRLF%E6%B3%A8%E5%85%A5/">
        <h2 class="post-title">
            CRLF注入
        </h2>
        
        <div class="post-content-preview">
            什么是CRLF注入?
CRLF是”回车+换行”(\r\n)(编码后是%0D%0A)的简称,在HTTP中,HTTP Header和HTTP Body是用两个CRLF来分割的。浏览器就是根据这两个CRLF来取出HTTP 内容并显示出来。所以，一旦我们能够控制HTTP 消息头中的字符，注入一些恶意的换行，这样我们就能注入一些会话Cookie或者HTML代码，所以CRLF Injection又叫HT...
        </div>
    </a>
    <p class="post-meta">
        Posted by Von on January 29, 2020
    </p>
</div>
<hr>

<div class="post-preview">
    <a href="/2020/01/28/%E8%AE%B0%E5%BD%95%E4%B8%80%E4%B8%AA%E6%9C%89%E8%B6%A3%E7%9A%84%E6%95%B0%E5%AD%A6%E9%97%AE%E9%A2%98/">
        <h2 class="post-title">
            记录一个有趣的数学问题
        </h2>
        
        <h3 class="post-subtitle">
            用三角函数嵌套得到任意一个正整数
        </h3>
        
        <div class="post-content-preview">
            前言
之前看到了一个有趣的数学问题————Broken calculator.就是给你一个损坏的计算器，只能操控$\tan()$,$\cos()$,$\sin()$,$\arctan()$,$\arcsin()$,$\arccos()$这六个函数进行嵌套，并且给定初始值1，如何得到任意正整数?(嵌套形式如下)



前置知识
我们首先需要知道两个前置公式:

推理
假如我们需要得到的正整数为...
        </div>
    </a>
    <p class="post-meta">
        Posted by Von on January 28, 2020
    </p>
</div>
<hr>

<div class="post-preview">
    <a href="/2020/01/12/%E8%AE%B0%E5%BD%95%E4%B8%80%E4%BA%9B%E5%8F%8D%E5%BC%B9shell%E7%9A%84%E6%8C%87%E4%BB%A4/">
        <h2 class="post-title">
            记录一些反弹shell的指令
        </h2>
        
        <h3 class="post-subtitle">
            一篇水文
        </h3>
        
        <div class="post-content-preview">
            什么是反弹shell
反弹shell在我看来就是攻击者输入命令，命令在被攻击端执行，并将执行后得到的结果回显到攻击端的过程。
在目前看来似乎主要用在命令执行上，当网页没有直接回显时我们可以使用反弹shell在我们自己服务端对被攻击端执行代码。
关于反弹shell的主要原理我就不在这细讲了。具体的可以看这几篇文章:

panda1g师兄的文章1
panda1g师兄的文章2
K0rz3n师兄的文...
        </div>
    </a>
    <p class="post-meta">
        Posted by Von on January 12, 2020
    </p>
</div>
<hr>

<div class="post-preview">
    <a href="/2020/01/09/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%AF%B9%E7%9B%97%E5%8F%B7%E7%BD%91%E7%AB%99%E7%9A%84%E5%85%A5%E4%BE%B5/">
        <h2 class="post-title">
            记一次对盗号网站的入侵
        </h2>
        
        <div class="post-content-preview">
            前言
这几天看到有人在群里发一个盗号网站，很典型的盗号网站样子，外观长这样。

于是想到对这个网站进行入侵。也算是我的第一次实战吧。
因为这是我的第一次实战，所以内容可能会讲的偏小白，还请大佬勿喷。

getshell
网站扫描
开始看到网站，首先还是决定扫描器走一波。一扫发现居然有9个高危漏洞，那看来很容易入手很多。

看了一下主要是IIS6开启了WebDav功能造成的漏洞。主要利用点有两...
        </div>
    </a>
    <p class="post-meta">
        Posted by Von on January 9, 2020
    </p>
</div>
<hr>

<div class="post-preview">
    <a href="/2020/01/07/create_function()%E6%B3%A8%E5%85%A5/">
        <h2 class="post-title">
            create_function()注入
        </h2>
        
        <div class="post-content-preview">
            create_function()介绍
php中使用create_function()来创建匿名函数。具体用法举例如下:
create_function('$fname','echo $fname."Zhang"')

其等价于
function fT($fname) {
  echo $fname."Zhang";
}


create_function()的利用

1
先来看一段有问题的...
        </div>
    </a>
    <p class="post-meta">
        Posted by Von on January 7, 2020
    </p>
</div>
<hr>


<!-- Pager -->

<ul class="pager">
    
    
    <li class="next">
        <a href="/page2">Older Posts &rarr;</a>
    </li>
    
</ul>


    		</div>
    <!-- Sidebar Container -->
            <div class="
                col-lg-3 col-lg-offset-0
                col-md-3 col-md-offset-0
                col-sm-12
                col-xs-12
                sidebar-container
            ">
                <!-- Featured Tags -->
                
                <section>
                    <hr class="hidden-sm hidden-xs">
                    <h5><a href="/tags/">FEATURED TAGS</a></h5>
                    <div class="tags">
                        
                            
                                <a href="/tags/#Practice" title="Practice" rel="3">
                                    Practice
                                </a>
                            
                        
                            
                                <a href="/tags/#SQL" title="SQL" rel="9">
                                    SQL
                                </a>
                            
                        
                            
                                <a href="/tags/#Web" title="Web" rel="20">
                                    Web
                                </a>
                            
                        
                            
                                <a href="/tags/#CTF" title="CTF" rel="5">
                                    CTF
                                </a>
                            
                        
                            
                                <a href="/tags/#Crypto" title="Crypto" rel="3">
                                    Crypto
                                </a>
                            
                        
                            
                                <a href="/tags/#Docker" title="Docker" rel="1">
                                    Docker
                                </a>
                            
                        
                            
                                <a href="/tags/#PHP" title="PHP" rel="4">
                                    PHP
                                </a>
                            
                        
                            
                                <a href="/tags/#杂谈" title="杂谈" rel="1">
                                    杂谈
                                </a>
                            
                        
                            
                                <a href="/tags/#编码" title="编码" rel="1">
                                    编码
                                </a>
                            
                        
                            
                                <a href="/tags/#Python" title="Python" rel="3">
                                    Python
                                </a>
                            
                        
                            
                                <a href="/tags/#爬虫" title="爬虫" rel="1">
                                    爬虫
                                </a>
                            
                        
                            
                                <a href="/tags/#问题修复" title="问题修复" rel="1">
                                    问题修复
                                </a>
                            
                        
                            
                                <a href="/tags/#Linux" title="Linux" rel="1">
                                    Linux
                                </a>
                            
                        
                            
                                <a href="/tags/#Math" title="Math" rel="1">
                                    Math
                                </a>
                            
                        
                            
                                <a href="/tags/#SSRF" title="SSRF" rel="2">
                                    SSRF
                                </a>
                            
                        
                            
                                <a href="/tags/#XXE" title="XXE" rel="1">
                                    XXE
                                </a>
                            
                        
                            
                                <a href="/tags/#Flask" title="Flask" rel="1">
                                    Flask
                                </a>
                            
                        
                            
                                <a href="/tags/#反序列化" title="反序列化" rel="1">
                                    反序列化
                                </a>
                            
                        
                    </div>
                </section>
                

                <!-- Short About -->
                <section class="visible-md visible-lg">
                    <hr><h5><a href="/about/">ABOUT ME</a></h5>
                    <div class="short-about">
                        
                        
                            <p>Goals determine what you going to be!</p>
                        
                        <!-- SNS Link -->
                        <ul class="list-inline">
                            
                            <!-- add jianshu add target = "_blank" to <a> by BY -->
                            
                            
                            
                            
                            
                            
                            <li>
                                <a target="_blank" href="https://github.com/VonLYC">
                                    <span class="fa-stack fa-lg">
                                        <i class="fa fa-circle fa-stack-2x"></i>
                                        <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            
                            
                        </ul>
                        
                            <p>✉️ lyc824342218@gmail.com</p>
                        
                    </div>
                </section>
                <!-- Friends Blog -->
                
                <hr>
                <h5>FRIENDS</h5>
                <ul class="list-inline">
                    
                        <li><a href="https://www.xdsec.org/">XDSEC</a></li>
                    
                        <li><a href="http://hed9eh0g.top">Hed9eh0g</a></li>
                    
                        <li><a href="https://wsbfdzz.github.io/">小雨时宁</a></li>
                    
                        <li><a href="http://www.xdusund.com">sund</a></li>
                    
                        <li><a href="https://icebagw.github.io">icebag</a></li>
                    
                        <li><a href="http://39.105.105.208">Wal1et</a></li>
                    
                        <li><a href="https://nopech.cn/">nopech</a></li>
                    
                </ul>
                
    		</div>
        
	</div>
</div>


    <!-- Footer -->
<!-- jQuery -->
<!--<script src="/js/jquery.min.js "></script>-->
<script src="./javascripts/jquery.min.js"></script>


<!-- Bootstrap Core JavaScript -->
<!--<script src="/js/bootstrap.min.js "></script>-->
<script src="./javascripts/bootstrap.min.js"></script>
<script src="./javascripts/canvas-nest.min.js"></script>


<footer>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <ul class="list-inline text-center">
                    
                    <!-- add jianshu add target = "_blank" to <a> by BY -->
                    
                    

                    <!-- add Weibo, Zhihu by Hux, add target = "_blank" to <a> by Hux -->
                    
                    


                    
                    
                    <li>
                        <a target="_blank" href="https://github.com/VonLYC">
                            <span class="fa-stack fa-lg">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </li>
                    
                    
                </ul>
                <p class="copyright text-muted">
                    Copyright &copy; Von's Blog 2020
                    <br>
                    Theme on <a href="https://github.com/VonLYC/VonLYC.github.io.git">GitHub</a> |
                    <iframe
                        style="margin-left: 2px; margin-bottom:-5px;"
                        frameborder="0" scrolling="0" width="100px" height="20px"
                        src="https://ghbtns.com/github-btn.html?user=VonLYC&repo=VonLYC.github.io&type=star&count=true" >
                    </iframe>
                    <br>
                    本站访客量为<span id="busuanzi_value_site_pv"></span>
                    <br>
                    <p class="copyright text-muted" id="count">
                </p>
            </div>
        </div>
    </div>
    
    <div class="cb-search-tool" style="position: fixed; top: 0px ; bottom: 0px; left: 0px; right:  0px;
      opacity: 0.95; background-color: #111111; z-index: 9999; display: none;">
        <input type="text" class="form-control cb-search-content" id="cb-search-content" style="position: fixed; top: 60px" placeholder="文章标题 日期 标签" >

        <div style="position: fixed; top: 16px; right: 16px;">
        <img src="/search/img/cb-close.png"  id="cb-close-btn"/>
        </div>
    </div>

    <div style="position: fixed; right: 16px; bottom: 20px;">
        <img src="/search/img/cb-search.png"  id="cb-search-btn"  title="双击ctrl试一下"/>
    </div>

    <link rel="stylesheet" href="/search/css/cb-search.css">

    <script src="./javascripts/bootstrap3-typeahead.min.js"></script>
    <script src="./javascripts/cb-search.js"></script>

</footer>

<script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>

<script>
  
  window.setInterval('counter()',1000);
  function counter(){
    var date=new Date();
    var startDate=new Date(2019,5,19,0,0,0);
    var time=(date-startDate)/1000;
    var day=Math.floor(time/(24*60*60));
    var hour=Math.floor(time%(24*60*60)/(60*60));
    var minute=Math.floor(time%(24*60*60)%(60*60)/60);
    var second=Math.floor(time%(24*60*60)%(60*60)%60);
    var str="我的博客已默默运行了" + day + "天" + hour +"时" + minute + "分" + second + "秒";
    document.getElementById('count').innerHTML=str;
  }
</script>

<!-- jQuery -->
<!--<script src="/js/jquery.min.js "></script>-->
<!--<script src="./javascripts/jquery.min.js"></script>-->


<!-- Bootstrap Core JavaScript -->
<!--<script src="/js/bootstrap.min.js "></script>-->
<!--<script src="./javascripts/bootstrap.min.js"></script>-->


<!-- Custom Theme JavaScript -->
<script src="./javascripts/hux-blog.min.js "></script>

<!-- Service Worker -->

<script type="text/javascript">
    if(navigator.serviceWorker){
        // For security reasons, a service worker can only control the pages that are in the same directory level or below it. That's why we put sw.js at ROOT level.
        navigator.serviceWorker
            .register('/sw.js')
            .then((registration) => {console.log('Service Worker Registered. ', registration)})
            .catch((error) => {console.log('ServiceWorker registration failed: ', error)})
    }
</script>



<!-- async load function -->
<script>
    function async(u, c) {
      var d = document, t = 'script',
          o = d.createElement(t),
          s = d.getElementsByTagName(t)[0];
      o.src = u;
      if (c) { o.addEventListener('load', function (e) { c(null, e); }, false); }
      s.parentNode.insertBefore(o, s);
    }
</script>

<!-- 
     Because of the native support for backtick-style fenced code blocks 
     right within the Markdown is landed in Github Pages, 
     From V1.6, There is no need for Highlight.js, 
     so Huxblog drops it officially.

     - https://github.com/blog/2100-github-pages-now-faster-and-simpler-with-jekyll-3-0  
     - https://help.github.com/articles/creating-and-highlighting-code-blocks/ 
     - https://github.com/jneen/rouge/wiki/list-of-supported-languages-and-lexers   
-->
<!--
    <script>
        async("http://cdn.bootcss.com/highlight.js/8.6/highlight.min.js", function(){
            hljs.initHighlightingOnLoad();
        })
    </script>
    <link href="http://cdn.bootcss.com/highlight.js/8.6/styles/github.min.css" rel="stylesheet">
-->


<!-- jquery.tagcloud.js -->
<script>
    // only load tagcloud.js in tag.html
    if($('#tag_cloud').length !== 0){
        async('/js/jquery.tagcloud.js',function(){
            $.fn.tagcloud.defaults = {
                //size: {start: 1, end: 1, unit: 'em'},
                color: {start: '#bbbbee', end: '#0085a1'},
            };
            $('#tag_cloud a').tagcloud();
        })
    }
</script>

<!--fastClick.js -->
<script>
    async("//cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.min.js", function(){
        var $nav = document.querySelector("nav");
        if($nav) FastClick.attach($nav);
    })
</script>


<!-- Google Analytics -->



<!-- Baidu Tongji -->




<!-- Side Catalog -->





<!-- Image to hack wechat -->
<img src="/img/apple-touch-icon.png" width="0" height="0" />
<!-- Migrate from head to bottom, no longer block render and still work -->

</body>

</html>

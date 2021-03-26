F.module("common/result_page",function(require,exports,ctx){exports.createResulPageLink=function(option){if(!option||!option.wd){return""}if(!option.tn){option.tn="baidutop10"}return"//www.baidu.com/s?wd="+encodeURIComponent(option.wd)+"&ie=utf-8&tn="+option.tn+"&rsv_idx=2"}});
F.module("superman:common/image_lazy_load",function(require,exports,ctx){var S=ctx.base;var _intervalId=0;var _timeoutId=0;var _dataSrcImgStack=[];var _intervaling=false;exports.isVisible=function(elm,noOffset){if(!_isVisible(elm)){return false}var hOffset=noOffset?0:60;var vOffset=noOffset?0:60;var elmPos={};try{elmPos=$(elm).offset()}catch(e){elmPos={left:0,top:0}}var scrollTop=$(document).scrollTop();var scrollLeft=$(document).scrollLeft();var viewWidth=$(window).width();var viewHeight=$(
window).height();var xa=elmPos.left-hOffset,ya=elmPos.top-vOffset,xc=elmPos.left+elm.offsetWidth+hOffset,yc=elmPos.top+elm.offsetHeight+vOffset,xa1=scrollLeft,ya1=scrollTop,xc1=scrollLeft+viewWidth,yc1=scrollTop+viewHeight;return xa<=xc1&&ya<=yc1&&xc>=xa1&&yc>=ya1};var _isImageLoadCompleted=function(elm){if($(elm).attr("data-loaded")=="1"){return true}return false};var _renderImage=function(init){var _render=function(){if(_dataSrcImgStack.length===0){window.clearInterval(_intervalId)
;_intervaling=false;return}for(var i=0;i<_dataSrcImgStack.length;i++){var elm=_dataSrcImgStack[i];if(!_isImageLoadCompleted(elm)&&exports.isVisible(elm)){if($(elm).attr("data-loadfunc")!="1"){$(elm).attr("data-loadfunc","1");$(elm).bind("load",function(evt){var $self=this;$(this).attr("data-loaded",1);for(var idx=0;idx<_dataSrcImgStack.length;idx++){var item=_dataSrcImgStack[idx];if($self===item){_dataSrcImgStack.splice(idx,1)}}})}var src=$(elm).attr("data-src")+"";if(src.indexOf("http"
)>-1||src.indexOf("https")>-1){$(elm).attr("src",src);elm.removeAttribute("data-src")}}}};if(init){_render();return}if(!_intervaling){_intervaling=true;_intervalId=window.setInterval(function(){_render()},300)}};exports.scanAndDoRender=function(newDom,init){var isScanAll=false;if(!newDom){newDom=document.body;isScanAll=true}var imgList=[];$.each(newDom.getElementsByTagName("img"),function(i,elm){if($(elm).attr("data-src")&&!_isImageLoadCompleted(elm)){imgList.push(elm)}});if(isScanAll){
_dataSrcImgStack=imgList}else{_dataSrcImgStack=_dataSrcImgStack.concat(imgList)}_renderImage(init)};var _bindScrollEvent=function(){$.each(["resize","scroll","load","cardrender"],function(index,evtName){$(window).bind(evtName,function(e){if(s_session.index_off==true){return}if(_timeoutId){window.clearTimeout(_timeoutId)}_timeoutId=window.setTimeout(function(){_timeoutId=0;exports.scanAndDoRender()},20);e.stopPropagation()})})};function _isVisible(element){var rect=element.getBoundingClientRect()
;return!!(rect.bottom-rect.top)}exports.init=function(){exports.scanAndDoRender(null,true);_bindScrollEvent()}});
try{!function(e,t){e.webb2=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){
return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(e,t,n){"use strict";function o(e,t){var n=new Image,o=i();window[o]=n,n.onload=function(){t&&t(),delete window[o]},n.onerror=function(e){t&&t(e),delete window[o]},n.src=e}function i(){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}function r(e,t){if(!t||"object"!==(void 0===t?"undefined":v(t)))return e;for(var n=Object.keys(t
),o=n.length;o--;)e[n[o]]=t[n[o]];return e}function s(e){return Object.keys(e).map(function(t){var n=e[t];return void 0===n?n="":"string"!=typeof n&&(n=JSON.stringify(n)),encodeURIComponent(t)+"="+encodeURIComponent(n)}).join("&")}function a(e,t){var n=["webkit","moz","ms","o"];if(t in e)return t;for(var o=0;o<n.length;o++){var i=""+n[o]+t;if(i in e)return i}return""}function u(){return{x:document.body.scrollLeft||document.documentElement.scrollLeft,
y:document.body.scrollTop||document.documentElement.scrollTop}}function c(e){b&&(document.addEventListener(g,e),document.addEventListener(w,e))}function d(e){document.removeEventListener(g,e),document.removeEventListener(w,e)}function l(e){return e&&"hidden"in e?e.hidden:document[b]}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).forEach(function(n){e[n]=t[n]}),e}function f(){if(
Element&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}}function m(e){var t=window.getComputedStyle(e)["background-image"];return t&&"none"!==t&&/^url\(/i.test(t)?t.replace(/^url\(['"]?([^'"]+)['"]?\)/i,"$1"):""}function h(e){return e&&"string"==typeof e&&/^\s?(http:|https:)?\/\//.test(e)}function y(e,t){/complete|loaded|interactive/.test(document.readyState
)&&document.body?e():document.addEventListener("DOMContentLoaded",function(){if(t)return void e();setTimeout(function(){e()},0)})}Object.defineProperty(t,"__esModule",{value:!0});var v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.sendLog=o,t.guid=i,t.extend=r,t.stringify=s,t.getProp=a,t.getScrollInfo=u,t.bindVisibilityChangeEvent=c,
t.disposeVisibilityChangeEvent=d,t.getPageHiddenValue=l,t.assign=p,t.matchesPolyfill=f,t.getUrlFromStyle=m,t.isUrl=h,t.afterReady=y;var b=a(document,"hidden"),g=b.replace(/hidden/i,"visibilitychange"),w="baiduboxappvisibilitychange"},function(e,t,n){"use strict";function o(e){var t=this,n=e.colno||window.event&&window.event.errorCharacter||0,o=e.error||{},r=(0,i.assign)({msg:e.message,ln:e.lineno,file:e.filename,col:n,stack:o.stack},this.exceptionInfo);setTimeout(function(){t.send("et_js",r,
t.exceptionDim)},0)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);t["default"]={initException:function(){this.exceptionDim=null,this.exceptionInfo={},this.onerrorCb=o.bind(this)},startJsExceptionLog:function(e,t){this.exceptionInfo=(0,i.assign)({},e),this.exceptionDim=(0,i.assign)({},t),window.removeEventListener("error",this.onerrorCb),window.addEventListener("error",this.onerrorCb)},startResExceptionLog:function(e,t){},stopJsExceptionLog:function(){window.removeEventListener(
"error",this.onerrorCb)},stopResExceptionLog:function(){},sendExceptionLog:function(e,t){this.send("et_comm",e,t)},destroyJsException:function(){this.stopJsExceptionLog(),this.exceptionDim=null,this.exceptionInfo=null,this.onerrorCb=null}},e.exports=t["default"]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t["default"]={sendBaseDispLog:function(e,t,n){var i=document.documentElement,r={size:{doc:{w:i.scrollWidth,h:i.scrollHeight},wind:{w:i.clientWidth,
h:i.clientHeight},scr:{w:screen.width,h:screen.height}},dpr:window.devicePixelRatio||1};e&&(r=(0,o.assign)(r,e)),this.send("disp_comm",r,t,null,n)},sendDispLog:function(e,t,n){var i=void 0;i=e instanceof Array?e:(0,o.assign)({},e),this.send("disp_content",i,t,null,n)}},e.exports=t["default"]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t["default"]={sendBasePfLog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1]
,n=arguments[2],i=window.performance&&performance.timing||{},r=i.navigationStart,s=i.requestStart,a=i.responseStart,u=i.responseEnd,c=i.domComplete,d=i.domLoading,l=i.domainLookupStart,p=i.domainLookupEnd,f=i.connectStart,m=i.connectEnd,h=i.loadEventStart,y=i.loadEventEnd,v={dns:p-l,tcp:m-f,req:a-s,res:u-a,dct:c-d,ld:y-h},b=window.__webbbrige__||{},g=b.whiteScreenTime,w=b.firstScreenTime;g&&(v=(0,o.assign)(v,{wst:g-r})),w&&(v=(0,o.assign)(v,{fst:w-r})),v=(0,o.assign)(v,e),this.send("pf_comm",v,t
,null,n)},sendPfLog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],n=arguments[2],i=(0,o.assign)({},e);this.send("pf_comm",i,t,null,n)}},e.exports=t["default"]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={sendCountLog:function(e,t){this.send("count_comm",e,t)}},e.exports=t["default"]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={sendDistributeLog:function(e,t
){this.send("dist_comm",e,t)}},e.exports=t["default"]},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){
var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(0),a="https://sp1.baidu.com/5b1ZeDe5KgQFm2e88IuM_a/webb.gif";"http:"===location.protocol&&(a="http://sestat.baidu.com/webb.gif");var u="https://sp1.baidu.com/5b1ZeDe5KgQFm2e88IuM_a/mwb2.gif";"http:"===location.protocol&&(u="http://sestat.baidu.com/mwb2.gif");var c={time:1,ia:1,disp_comm:1,disp_content:1,
et_js:2,et_comm:2,et_resource:2,et_httpres:2,count_comm:2,dist_comm:2,pf_comm:2},d=function(){function e(t){o(this,e);var n={sample:0};this.validateOptions(t),this.options=(0,s.extend)(n,t),this.random=Math.random(),this.options.sample&&(this.options.curSample=Math.random()<this.options.sample?1:0),this.updateCurSample(),this.initException(),this.options.ia&&this.initIa&&this.initIa()}return r(e,[{key:"updateCurSample",value:function(){var e=this;Object.keys(this.options).forEach(function(t){
var n=e.options[t];n&&n.sample&&!n.curSample&&(e.options[t].curSample=Math.random()<n.sample?1:0)})}},{key:"validateOptions",value:function(e){var t=["pid","lid"];if("object"!==(void 0===e?"undefined":i(e)))throw new Error("Options must be an object!");if(!t.every(function(t){return t in e}))throw new Error("Options "+t.join(", ")+" required")}},{key:"updateOption",value:function(e){this.options=(0,s.extend)(this.options,e),this.updateCurSample()}},{key:"wrapCommonParam",value:function(e,t,n){
var o={pid:this.options.pid,lid:this.options.lid,ts:Date.now(),type:e,info:t,ext:this.options.ext?this.options.ext:{}};return n&&(o.dim=n),o}},{key:"hitSample",value:function(e){var t=this.options[e];if(!t)return 0;return"sample"in t?"eachreq"===t.sampleType?t.sample&&Math.random()<=t.sample?1:0:t.curSample:"eachreq"===this.options.sampleType?this.options.sample&&Math.random()<=this.options.sample?1:0:this.options.curSample}},{key:"getLogHost",value:function(e){var t=this.options
;return t[e]&&t[e].logHost||t.logHost?t[e]&&t[e].logHost?t[e].logHost:t.logHost:2===c[e]?u:a}},{key:"send",value:function(e,t,n,o,i){if(this.hitSample(e)){"function"==typeof n&&(i=o,o=n,n=null);var r=this.wrapCommonParam(e,t,n);(0,s.extend)(r,i),r&&r.ext?r.ext.path=location.pathname:r&&!r.ext&&(r.ext={path:location.pathname});var a=(0,s.guid)(),u=window[a]=new Image;u.onload=function(e){o&&("function"==typeof o?o(e):o.successCb&&"function"==typeof o.successCb&&o.successCb(e)),delete window[a]},
u.onerror=function(e){o&&o.errorCb&&"function"==typeof o.errorCb&&o.errorCb(e),delete window[a]},u.src=this.getLogHost(e)+"?"+(0,s.stringify)(r)}}},{key:"sendBeacon",value:function(e,t,n,o){if(this.hitSample(e)){var i=this.wrapCommonParam(e,t,n);if((0,s.extend)(i,o),i&&i.ext?i.ext.path=location.pathname:i&&!i.ext&&(i.ext={path:location.pathname}),navigator.sendBeacon){navigator.sendBeacon(this.getLogHost(e)+"?"+(0,s.stringify)(i))||this.send(e,t,n)}else this.send(e,t,n)}}},{key:"destroy",
value:function(){this.destroyJsException(),this.destroyIaMonitor(),this.destroyMediaTime()}}]),e}();t["default"]=d,e.exports=t["default"]},,,,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=o(i),s=n(2),a=o(s),u=n(3),c=o(u),d=n(4),l=o(d),p=n(5),f=o(p),m=n(6),h=o(m),y=n(0);(0,y.extend)(h["default"].prototype,r["default"]),(0,y.extend)(h["default"].prototype,a["default"]),(0,y.extend)(
h["default"].prototype,c["default"]),(0,y.extend)(h["default"].prototype,l["default"]),(0,y.extend)(h["default"].prototype,f["default"]),t["default"]=h["default"],e.exports=t["default"]}])})}catch(error){}
F.addLog("superman:skeleton",{});F.addLog("mancard:skeleton",{modShow:"1100000000",modClick:"1100000001",loadMoreClick:"1100000005",categoryClick:"1200100001",gotoTopClick:"1100000006",qrcodehover:"1100000007"});F.addLog("superman:guide",{xguideShow:"1000000000",xguide:"1000000001",xmanGuideShow:"1100100000",xmanGuideClick:"1100200001",tripEntranceClick:"1100300001",tutorialClick:"1100400001",zeroOpacityClick:"1100500001",wenjuanClick:"1100700002"});F.addLog("mancard:setting",{
modOperate:"0900100001",webOperate:"0900200001",modConfirmOperate:"0900300001"});F.addLog("superman:weather",{weatherShow:"5000000000",settingShow:"5000100000",settingClick:"5000100001",settingOperate:"5000100002",layerOperate:"5000000002"});F.addLog("superman:mt",{msgShow:"0400000000",msgItemClick:"0400100001",msgItemDelClick:"0400400001",msgBtnClick:"0400500001",msgHide:"0400600002",msgItemShow:"0400700000"});F.addLog("superman:ps",{categoryClick:"1200100001",queryChange:"1200200001",
searchBtnClick:"1200200001",psLogoClick:"1200300001",psWorkLnkClick:"1200400001",stayLog:"1200400002"});F.addLog("superman:mngr",{categoryClick:"1200100001",userQuitClick:"1200100002",treasureClick:"1300000000"});F.addLog("superman:skin",{skinShow:"5100000000",skinClick:"5100000001",skinHover:"5100000002",skinOperate:"5100000003",skinInfo:"5100000004"});F.addLog("superman:skeleton",{tabTimeClick:"7000000000",tabTimeClickInBucket:"7000100000"});F.addLog("superui:component",{skinClick:"5100000001"
});
F.addLog("superman:lib/carditem_log",["cardItemLog"]);F.module("superman:lib/carditem_log",function(require,exports,ctx){var thunder=window.Thunder.get();var logactid="page-card-tpl-item";var logDom=["s_ctner_contents"];var pathLogTimer={};var sendItemLog=function(logParm,type,tlog){pathLogTimer[type]&&clearTimeout(pathLogTimer[type]);pathLogTimer[type]=setTimeout(function(){if(logParm.rid!=undefined){ctx.fire("cardItemLog",logParm);if(tlog&&logParm.func!=="dustbin"&&+s_session.curmod===2){
thunder.send(tlog)}}},300)};var buildLogParam=function(node){var curNode=$(node),flag=false,cType="",nodeName="",func="",title="",url="",isItemClick=false;extra="";while(curNode.attr("data-rid")==undefined&&curNode.attr("id")!="s_ctner_contents"){if(curNode.attr("data-click")!=undefined){isItemClick=true;cType=curNode.attr("data-click").toLowerCase();nodeName=node.nodeName.toLowerCase();if(cType=="log_link"){if(curNode[0]&&curNode[0].nodeName&&curNode[0].nodeName.toLowerCase()=="a"){
title=$.trim(curNode.attr("data-title"))||$.trim(curNode.attr("title"))||$.trim(curNode.text());var tmpurl=$.trim(curNode.attr("href"));if(!tmpurl.indexOf("#")==0&&!tmpurl.indexOf("javascript")==0){url=tmpurl}}if(nodeName!="img"){nodeName="a"}cType="outlink"}else if(cType.indexOf("log_btn")!=1){func=cType.replace("log_btn_","");cType="btn";url="";title=$.trim(curNode.attr("data-title"))||$.trim(curNode.attr("title"))||$.trim(curNode.text())}}curNode=curNode.parent();if(curNode.attr("data-extra")
){extra=curNode.attr("data-extra")}}var logParam={logactid:logactid,logtype:"click",clicktype:cType,nodename:nodeName,func:func,title:title,url:url,strategyHit:s_session.strategy_hit,xx:$(node).offset().left,xy:$(node).offset().top,extra:extra};logParam["rid"]=isItemClick?curNode.attr("data-rid"):undefined;var thunderlog={cst:2,tid:30,logExtra:{rid:isItemClick?curNode.attr("data-rid"):undefined,url:isItemClick?curNode.attr("data-url"):undefined,clicktype:cType,title:title,flow:2,extra:extra}}
;var logCustom=curNode.attr("data-log"),logArr=[];if(logCustom){logCustom=logCustom.replace(/\;$/g,"");logArr=logCustom.split(";");var keyvalue=[];var key="";var value="";for(var i=0;i<logArr.length;i++){keyvalue=logArr[i].split(":");key=keyvalue[0];value=keyvalue[1];thunderlog.logExtra[key]=value;if(!/-1$/g.test(key)){if(/-0$/g.test(key)){key=key.replace(/-0$/g,"")}logParam[key]=value}}}thunderlog.logExtra=$.stringify(thunderlog.logExtra);sendItemLog(logParam,"click",thunderlog)}
;var bindEvent=function(item){$("#"+item).on("mousedown",function(e){var t=e.target;buildLogParam(t)})};exports.init=function(){$.each(logDom,function(i,e){bindEvent(e)})}});
F.module("ps/log",function(require,exports,ctx){var keyMap={"旧版":"tjold","使用百度前必读":"tjread","我的相册":"tjxiangce","首页设置":"tjmsgsetting","登录":"tjlogin","退出":"tjlogout","空间":"tjhi","我的主页":"tjgongzhu","我的成就":"tjchengjiu","加入百度推广":"tjadjoin","搜索风云榜":"tjadtop","关于百度":"tjadaboutch",AboutBaidu:"tjadabouten","加入开放首页":"tjadopen","个人中心":"tjucent","帐号设置":"tjuser","切换帐号":"tjswitchuser","退出登录":"tjlogout","新闻":"tjnews",hao123:"tjhao123","地图":"tjmap","视频":"tjvideo","贴吧":"tjtieba","学术":"tjxueshu","更多":"tjmore",
"网盘":"tjwangpan","知道":"tjzhidao","百科":"tjbaike","图片":"tjimg","宝宝知道":"tjbaobaozhidao","文库":"tjwenku","经验":"tjjingyan","音乐":"tjmp3","查看全部百度产品>":"tjquanbu","搜索设置":"tjsetting","高级搜索":"tjadvsetting","隐私设置":"tjhistorysetting","我的收藏":"tjucentcol","我的日历":"tjucentcal","搜索记录":"tjucenthis","完整版":"tjtoxman","极简版":"tjtolite","设为首页":"setpage","好看":"tjhaokan","抗击肺炎":"tjyunying"};var _getTagTxt=function(tag){return $(tag).text().replace(/[\s\t\xa0\u3000]/g,"")};var _MouseDown=function(e){
var obj=e.srcElement?e.srcElement:e.target;if(obj.tagName==="A"){var txt=_getTagTxt(obj);var url=obj.href;if(txt in keyMap){ctx.fire("categoryClick",{category:keyMap[txt],url:url})}else if(txt===s_session.username){ctx.fire("categoryClick",{category:"username"})}}return false};function _bind(id){$("#"+id).bind("mousedown",_MouseDown)}function _fire(category,ext){var param={category:category};if(ext){$.extend(param,ext)}ctx.fire("categoryClick",param)}exports.bindBox=_bind;exports.fireLog=_fire
;exports.keyMap=keyMap});
F.addLog("superman:ps/sindex",{hwInput:"1100000900"});F.module("superman:ps/sindex",function(require,exports,ctx){var S=ctx.base;exports.init=function(){var w=window,d=document,n=navigator,k=$("#kw"),isIE=n.userAgent.indexOf("MSIE")!=-1&&!window.opera;s_session.searchLogSend=0;$("#su").on("mouseout",function(){$(this).removeClass("btn_h")}).on("mousedown",function(){$(this).addClass("btn_h")});var kw=document.getElementById("kw");$(kw.parentNode).addClass("bg s_ipt_wr iptfocus");$(window).on(
"swap_end",function(){if(s_session.searchLogSend==0){s_session.searchLogSend=1;ctx.fire("searchBtnClick",{opType:"click",openMode:"current",wd:encodeURIComponent($("#kw").val())})}});$(window).on("s-skinon",function(){$('<style id="s_skin_bdpfmenu">.bdpfmenu{border:0 none !important;}.bdpfmenu a{line-height:24px !important;border:1px solid #fff !important;}</style>').appendTo($("head"))}).on("s-skinoff",function(){$("#s_skin_bdpfmenu").remove()});function G(id){return d.getElementById(id)}
var noskinMan=_noskinbind(k);if(w.s_session.userIsNewSkined=="off"){noskinMan(k)}ctx.listen("superman:skin/skin_rewrite","skin_change",function(e){noskinMan(k,true)});try{if(typeof window._sp_async=="undefined"){G("kw")&&G("kw").focus()}else{if(pageState==0){G("kw")&&G("kw").focus()}}}catch(e){}$("#s_username_top").bind("mouseover",function(){F.use("ps/log",function(psLog){psLog.fireLog("tj_ucent_mouseover")})});var _menuShowing=[false,false];var _logLock=false;function regUserCenterMenu(dId,
menuId,target,pos,index){var $d=$("#"+dId),$target=$("#"+target),$menu=$("#"+menuId);$d.bind("mouseenter",function(e){_menuShowing[index]=true;$menu.show();var right=pos=="right"?$(document.body).width()-$menu[0].offsetWidth/2-$target.offset().left-$target.width()/2:$(document.body).width()-$menu[0].offsetWidth/2-$target.offset().left-$target.width()/2;$menu.css({right:right})}).bind("mouseleave",function(e){_menuShowing[index]=false;w.setTimeout(function(){if(!_menuShowing[index]){$menu.hide()
;ctx.fire("userMenuHide")}},200)})}regUserCenterMenu("s_username_top","s_user_name_menu","s_username_top","left",1);regUserCenterMenu("s_user_name_menu","s_user_name_menu","s_username_top","left",1);if(!window._sp_async){regUserCenterMenu("s_usersetting_top","s_user_setting_menu","s_usersetting_top","right",2);regUserCenterMenu("s_user_setting_menu","s_user_setting_menu","s_usersetting_top","right",2)}function loadJS(url,cs){if(url){var s=d.createElement("script");s.charset=cs?cs:"gbk";s.src=url
;d.getElementsByTagName("head")[0].appendChild(s)}}addEV(w,"load",function(){try{G("kw").focus()}catch(e){}});w.onunload=function(){};var mapDom=G("s_mp");var logoArea;if(mapDom){logoArea=mapDom.getElementsByTagName("area")[0]}var wordLink=G("lm")&&G("lm").getElementsByTagName("a")[0];logoArea&&$(logoArea).bind("click",function(e){ctx.fire("psLogoClick",{isFesBg:s_session.userTips.skinLogoHasSkined?"true":"false"})});wordLink&&$(wordLink).bind("click",function(e){ctx.fire("psWorkLnkClick")})}
;exports.fire=function(){ctx.fire("hwInput",{clickType:"handWriteInput"})};function countStay(){var times=0;var logInterval=setInterval(function(){if(window.s_session.index_off){clearInterval(logInterval);return}ctx.fire("stayLog",{times:10})},1e4)}var psforie6resize=function(){$("#s_pss_guide").css("width",document.body.clientWidth<=958?"958px":"100%")};function _noskinbind($k){function emitFo(){$(this).addClass("nobg_s_fm_focus")}function emitBl(){$(this).removeClass("nobg_s_fm_focus")}
function emitMv(){$(this).addClass("nobg_s_fm_hover")}function emitMu(){$(this).removeClass("nobg_s_fm_hover")}function suMd(){$(this).parent().addClass("s_btn_wr_h")}function suMu(){$(this).parent().removeClass("s_btn_wr_h")}return function($k,bind){if(!bind){$k.on("focus",emitFo).on("blur",emitBl).on("mouseover",emitMv).on("mouseout",emitMu);$("#su").on("mousedown",suMd).on("mouseout",suMu)}else{$k.unbind("focus",emitFo).unbind("blur",emitBl).unbind("mouseover",emitMv).unbind("mouseout",emitMu
);$("#su").unbind("mousedown",suMd).unbind("mouseout",suMu)}}}});var isIE=navigator.userAgent.indexOf("MSIE")!=-1&&!window.opera;function G(id){return document.getElementById(id)}function addEV(o,e,f){if(window.attachEvent){o.attachEvent("on"+e,f)}else if(window.addEventListener){o.addEventListener(e,f,false)}}if($.browser.ie<=8){$("#head").addClass("s-ie8-hack")}
var bds=bds||{};bds.se=bds.se||{};bds.se.store=function(){var l={},h=window,k=h.document,c="localStorage",o="globalStorage",d="__storejs__",g;l.disabled=false;l.set=function(e,p){};l.get=function(e){};l.remove=function(e){};l.clear=function(){};l.transact=function(e,r,p){var q=l.get(e);if(p==null){p=r;r=null}if(typeof q=="undefined"){q=r||{}}p(q);l.set(e,q)};l.getAll=function(){};l.serialize=function(e){return String(e)};l.deserialize=function(e){if(typeof e!="string"){return undefined}return e}
;function b(){try{return c in h&&h[c]}catch(e){return false}}function n(){try{return o in h&&h[o]&&h[o][h.location.hostname]}catch(e){return false}}if(b()){g=h[c];l.set=function(e,p){if(p===undefined){return l.remove(e)}g.setItem(e,l.serialize(p))};l.get=function(e){return l.deserialize(g.getItem(e))};l.remove=function(e){g.removeItem(e)};l.clear=function(){g.clear()};l.getAll=function(){var e={};for(var q=0;q<g.length;++q){var p=g.key(q);e[p]=l.get(p)}return e}}else{if(n()){
g=h[o][h.location.hostname];l.set=function(e,p){if(p===undefined){return l.remove(e)}g[e]=l.serialize(p)};l.get=function(e){return l.deserialize(g[e]&&g[e].value)};l.remove=function(e){delete g[e]};l.clear=function(){for(var e in g){delete g[e]}};l.getAll=function(){var e={};for(var q=0;q<g.length;++q){var p=g.key(q);e[p]=l.get(p)}return e}}else{if(k.documentElement.addBehavior){var j,f;try{f=new ActiveXObject("htmlfile");f.open();f.write(
'<script>document.w=window<\/script><iframe src="/favicon.ico"></iframe>');f.close();j=f.w.frames[0].document;g=j.createElement("div")}catch(i){g=k.createElement("div");j=k.body}function a(e){return function(){var q=Array.prototype.slice.call(arguments,0);q.unshift(g);j.appendChild(g);g.addBehavior("#default#userData");g.load(c);var p=e.apply(l,q);j.removeChild(g);return p}}function m(e){return"_"+e}l.set=a(function(q,e,p){e=m(e);if(p===undefined){return l.remove(e)}q.setAttribute(e,l.serialize(
p));q.save(c)});l.get=a(function(p,e){e=m(e);return l.deserialize(p.getAttribute(e))});l.remove=a(function(p,e){e=m(e);p.removeAttribute(e);p.save(c)});l.clear=a(function(r){var p=r.XMLDocument.documentElement.attributes;r.load(c);for(var q=0,e;e=p[q];q++){r.removeAttribute(e.name)}r.save(c)});l.getAll=a(function(s){var p=s.XMLDocument.documentElement.attributes;s.load(c);var q={};for(var r=0,e;e=p[r];++r){q[e]=l.get(e)}return q})}}}try{l.set(d,d);if(l.get(d)!=d){l.disabled=true}l.remove(d)
}catch(i){l.disabled=true}return l}();bds.se.sugStorage=function(){var suggestions,temp_sugs,options,SUGGESTION="BDSUGSTORED",OPTIONS="__OPTIONS__";var escapeData=function(){var reg=/['"\\\/\<\>\n\r]/g,escapeMap={"'":"\\x27",'"':"\\x22","\\":"\\\\","/":"\\/","\n":"\\\\n","\r":"\\\\r","<":"&lt;",">":"&gt;"};var replacer=function(str){return escapeMap[str]||str};return function(str){return str.replace(reg,replacer)}}();var sug2Str=function(){return'{"q": "'+this.q+'", "p": "'+(this.p?this.p:""
)+'"}'};var opt2Str=function(option){var arr=[];for(var k in option){arr.push('"'+k+'": "'+option[k]+'"')}return"{"+arr.join(",")+"}"};var option=function(key,value){if(value!==undefined){options[key]=value;bds.se.store.set(OPTIONS,opt2Str(options));return value}return options[key]||""};var isSupport=function(){return bds.se.store&&!bds.se.store.disabled};var set=function(suggestion){if(suggestion&&suggestion.q&&suggestion.p){suggestion.toString=sug2Str;if(!(
temp_sugs[suggestion.q]&&temp_sugs[suggestion.p])){suggestions.push(suggestion)}else{for(var i=0,f=0;i<suggestions.length;i++){if(suggestion.q==suggestions[i].q&&suggestion.p==suggestions[i].p){f=1;break}}if(f===0)suggestions.push(suggestion)}if(temp_sugs[suggestion.q]==undefined){temp_sugs[suggestion.q]=[suggestion]}else{for(var j=0,f=0,len=temp_sugs[suggestion.q].length;j<len;j++){if(temp_sugs[suggestion.q][j].p==suggestion.p||temp_sugs[suggestion.q][j].q==suggestion.q){f=1;break}}if(f===0
)temp_sugs[suggestion.q].push(suggestion)}if(temp_sugs[suggestion.p]==undefined){temp_sugs[suggestion.p]=[suggestion]}else{for(var j=0,f=0,len=temp_sugs[suggestion.p].length;j<len;j++){if(temp_sugs[suggestion.p][j].q==suggestion.q){f=1;break}}if(f===0)temp_sugs[suggestion.p].push(suggestion)}bds.se.store.set(SUGGESTION,"["+suggestions.join(",")+"]");return suggestions.length}return false};var get=function(str){var arr=[];for(var k in temp_sugs){if(new RegExp("^"+str,"img").test(k)){
arr=arr.concat(temp_sugs[k])}}return arr};var getAll=function(str){return suggestions};var reset=function(){suggestions=[];temp_sugs={};bds.se.store.set(SUGGESTION,"");return suggestions.length};var getCount=function(){return suggestions.length};var remove=function(sug){if(!sug||!sug.q||!sug.p)return false;var suggestion;for(i=0;i<suggestions.length;i++){if(sug.q==suggestions[i].q&&sug.p==suggestions[i].p){suggestion=suggestions[i];suggestions.splice(i,1);break}}if(suggestion===undefined){
return false}else{bds.se.store.set(SUGGESTION,"["+suggestions.join(",")+"]");init();return suggestion}};var edit=function(sug){if(remove(sug)){return set({q:sug.q,p:sug.p})}return false};var pop=function(){var sug=suggestions[0];if(sug){return remove({q:sug.q,p:sug.p})}return false};var init=function(){temp_sugs={};var optionData=bds.se.store.get(OPTIONS);if(optionData){options=new Function("return ("+optionData+")")()}else{options={}}var suggestionData=bds.se.store.get(SUGGESTION);if(
!suggestionData){suggestions=[]}else{suggestions=new Function("return ("+suggestionData+")")();for(var i=0,l=suggestions.length;i<l;i++){var suggestion=suggestions[i];suggestion.toString=sug2Str;if(temp_sugs[suggestion.q]==undefined){temp_sugs[suggestion.q]=[suggestion]}else{for(var j=0,f=0,len=temp_sugs[suggestion.q].length;j<len;j++){if(temp_sugs[suggestion.q][j].p==suggestion.p||temp_sugs[suggestion.q][j].q==suggestion.q){f=1;break}}if(f===0)temp_sugs[suggestion.q].push(suggestion)}if(
temp_sugs[suggestion.p]==undefined){temp_sugs[suggestion.p]=[suggestion]}else{for(var j=0,f=0,len=temp_sugs[suggestion.p].length;j<len;j++){if(temp_sugs[suggestion.p][j].q==suggestion.q){f=1;break}}if(f===0)temp_sugs[suggestion.p].push(suggestion)}}}};init();return{escapeData:escapeData,isSupport:isSupport,reset:reset,getCount:getCount,set:set,get:get,getAll:getAll,edit:edit,remove:remove,pop:pop,option:option}}();bds.se.sugsync=function(){var lenStorage;var rsv_sug1=0,rsv_sug3=0,rsv_sug4=0,
rsv_temp_time=0,rsv_temp_flag=false,rsv_timer=null;var isIE=/msie (\d+)/i.test(navigator.userAgent)&&!window.opera?parseInt(RegExp.$1):0;var isQuirk=document.compatMode=="BackCompat";function G(id){return document.getElementById(id)}function C(tg){return document.createElement(tg)}function trim(str){return String(str).replace(new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)","g"),"")}function trimAS(str){return String(str).replace(new RegExp("[\\s\\t\\xa0\\u3000]","g"),"")}
function addEvent(elem,type,handler){if(isIE){elem.attachEvent("on"+type,function(elm){return function(){handler.call(elm)}}(elem))}else{elem.addEventListener(type,handler,false)}}function stopDefault(e){if(isIE){e.returnValue=false}else{e.preventDefault()}}function addStyle(styleStr){if(isIE){var styleSheet=document.createStyleSheet();styleSheet.cssText=styleStr}else{var style=document.createElement("style");style.type="text/css";style.appendChild(document.createTextNode(styleStr))
;document.getElementsByTagName("HEAD")[0].appendChild(style)}}function addTj(o){var fm=document.forms[0];for(var i in o){if(o[i]==undefined){if(G("bdsug_ipt_"+i))fm.removeChild(G("bdsug_ipt_"+i))}else{if(!_hasi(i)){fm.appendChild(CHI(i,o[i]))}else{_hasi(i).value=o[i]}}}function CHI(n,v){var elem=C("INPUT");elem.type="hidden";elem.name=n;elem.id="bdsug_ipt_"+n;elem.value=v;return elem}}function _hasi(s){var fm=document.forms[0];var _i=false;var _iarr=fm.getElementsByTagName("INPUT");for(
var i=0;i<_iarr.length;i++){if(s==_iarr[i].getAttribute("name")){_i=_iarr[i];return _i}else{_i=false}}}function rmTj(o){var fm=document.forms[0];for(var i in o){if(i=="f"){if(_hasi("f")){if(_hasi("f").id=="bdsug_ipt_f"){fm.removeChild(G("bdsug_ipt_f"))}else{_hasi("f").value="8"}}}else{if(G("bdsug_ipt_"+i))fm.removeChild(G("bdsug_ipt_"+i))}}}var sugT=0;if(typeof window.bdsug!="object"||window.bdsug==null){window.bdsug={}}bdsug.sug={};bdsug.sugkeywatcher={};var MessageDispatcher=function(){
function addReceiver(msgType){var queues=this.__MSG_QS__;if(!queues[msgType]){queues[msgType]=[]}for(var i=1,n=arguments.length,r;i<n;i++){queues[msgType].push(arguments[i])}}function dispatchMsg(msg){var q=this.__MSG_QS__[msg.type];if(q==null){return}for(var i=0,n=q.length;i<n;i++){q[i].rm(msg)}}return{ini:function(obj){obj.__MSG_QS__={};obj.on=addReceiver;obj.dm=dispatchMsg;return obj}}}();var Inpt=function(){var ipt=G("kw");var div;var circleTimer=0;var requestTimer=0;var oldValue=""
;var keyValue="";var mouseOverValue;var isClkSdiv=false;var beforeStart=true;var rsv_sug;var btn=G("su");addEvent(btn,"mousedown",addInputTime);addEvent(btn,"keydown",addInputTime);addEvent(G("kw"),"paste",function(){addTj({rsv_n:2});if(sugT==0){sugT=(new Date).getTime()}});function addInputTime(){addTj({inputT:sugT>0?(new Date).getTime()-sugT:0})}function mousedown(){if(beforeStart){Inpt.dm({type:"start"});beforeStart=false}}function keydown(e){if(sugT==0){sugT=(new Date).getTime()}if(
beforeStart){Inpt.dm({type:"start"});beforeStart=false}e=e||window.event;if(e.keyCode==9||e.keyCode==27){Inpt.dm({type:"hide_div"})}if(e.keyCode==13&&window.opera){stopDefault(e);Inpt.dm({type:"key_enter"})}if(e.keyCode==86&&e.ctrlKey){addTj({rsv_n:2})}if(div.style.display!="none"){if(e.keyCode==38){stopDefault(e);Inpt.dm({type:"key_up"})}if(e.keyCode==40){Inpt.dm({type:"key_down"})}}else{if(e.keyCode==38||e.keyCode==40){Inpt.dm({type:"need_data",wd:ipt.value})}}}function circle(){
var nowValue=ipt.value;if(nowValue==oldValue&&nowValue!=""&&nowValue!=keyValue&&nowValue!=mouseOverValue){if(requestTimer==0){requestTimer=setTimeout(function(){Inpt.dm({type:"need_data",wd:nowValue})},100)}}else{clearTimeout(requestTimer);requestTimer=0;oldValue=nowValue;if(nowValue==""){Inpt.dm({type:"hide_div"})}if(keyValue!=ipt.value){keyValue=""}}}function circleStart(){if(!circleTimer){circleTimer=setInterval(circle,30)}}function circleStop(){clearInterval(circleTimer);circleTimer=0}
function stopMSinput(){if(isClkSdiv){window.event.cancelBubble=true;window.event.returnValue=false;isClkSdiv=false}}function setAutocomplete(c){ipt.blur();ipt.setAttribute("autocomplete",c);ipt.focus()}function stopSubmit(e){var e=e||window.event;if(e.keyCode==13){stopDefault(e)}}ipt.setAttribute("autocomplete","off");var keywatched=false;bdsug.sugkeywatcher.on=function(){if(!keywatched){if(isIE){ipt.attachEvent("onkeydown",keydown)}else{ipt.addEventListener("keydown",keydown,false)}
keywatched=true}};bdsug.sugkeywatcher.off=function(){if(keywatched){if(isIE){ipt.detachEvent("onkeydown",keydown)}else{ipt.removeEventListener("keydown",keydown,false)}keywatched=false}};bdsug.sugkeywatcher.on();addEvent(ipt,"blur",circleStop);addEvent(ipt,"focus",circleStart);addEvent(ipt,"mousedown",mousedown);addEvent(ipt,"beforedeactivate",stopMSinput);if(window.opera){addEvent(ipt,"keypress",stopSubmit)}return MessageDispatcher.ini({rm:function(evtObj){switch(evtObj.type){case"div_ready":
div=evtObj.sdiv;keyValue=ipt.value;circleStart();break;case"clk_submit":ipt.blur();ipt.value=evtObj.wd;break;case"ent_submit":circleStop();ipt.blur();break;case"key_select":mouseOverValue=evtObj.selected;break;case"close":circleStop();setAutocomplete("on");break;case"mousedown_tr":if(navigator.userAgent.toLowerCase().indexOf("webkit")!=-1){circleStop();setTimeout(circleStart,2e3)}isClkSdiv=true;break}}})}();var Sdiv=function(){var div;var ipt=G("kw");var tb;var selected=-1;var dataArray
;var dataObj;var oq;var ie6frm;function ct(){var trs=tb.rows;for(var i=0;i<trs.length;i++){trs[i].className="ml"}}function getSelected(){if(typeof tb!="undefined"&&tb!=null&&div.style.display!="none"){var trs=tb.rows;for(var i=0;i<trs.length;i++){if(trs[i].className=="mo")return[i,trs[i].cells[0].innerHTML]}}return[-1,""]}function hide(){if(isIE&&isIE<=6){ie6frm&&(ie6frm.style.display="none")}div&&(div.style.display="none")}function mouseover(){ct();this.className="mo"}function mousedown(e){
Sdiv.dm({type:"mousedown_tr"});if(!isIE){e.stopPropagation();e.preventDefault();return false}}function click(i){var j=i;return function(){var word=dataArray[j].value;hide();var id=0;if(typeof dataArray[j].ala!="undefined"){id=dataObj[dataArray[j].ala].id}Sdiv.dm({type:"clk_submit",oq:G("kw").value,wd:word,rsp:j,rsv_sug5:id})}}function close(e){e=e||window.event;stopDefault(e);Sdiv.dm({type:"close"});hide();(new Image).src=$.url.escapeSSL(
"http://sclick.baidu.com/w.gif?fm=suggestion&title=%B9%D8%B1%D5&t=")+(new Date).getTime()}function resize(){var iptwh=[ipt.offsetWidth,ipt.offsetHeight];div.style.width=(isIE&&isQuirk?iptwh[0]:iptwh[0]-2)+"px";div.style.top=(isIE&&isQuirk?iptwh[1]:iptwh[1]-1)+"px";div.style.display="block";if(isIE&&isIE<=6){ie6frm.style.top=(isIE&&isQuirk?iptwh[1]:iptwh[1]-1)+"px";ie6frm.style.width=(isIE&&isQuirk?iptwh[0]:iptwh[0]-2)+"px"}}function setBold(q,str){if(q&&str){var query=trim(q);if(str.indexOf(
query)==0){str=boldSugText(str,query)}else if(str.indexOf(trimAS(q))==0){query=trimAS(q);str=boldSugText(str,query)}else{str=str.replace(/&/g,"&amp;");str=str.replace(/</g,"&lt;");str=str.replace(/>/g,"&gt;")}}return str}function boldSugText(text,key){text=text.replace(/&/g,"&amp;");text=text.replace(/</g,"&lt;");text=text.replace(/>/g,"&gt;");key=key.replace(/&/g,"&amp;");key=key.replace(/</g,"&lt;");key=key.replace(/>/g,"&gt;");var str_begin="<span>"+key+"</span>";var len=key.length
;var str_end="<b>"+text.substring(len)+"</b>";return str_begin+str_end}function changeData(data){var word=G("kw").value,reg=/[^\x00-\xff]/g,dataArray=[],tempArray=[];lenStorage=0;for(var i=0;i<data.length;i++){var temp={};temp.value=data[i];temp.from=0;dataArray.push(temp)}if(!bds.se.sugStorage.isSupport()||!navigator.cookieEnabled||!!/\bsugstore=(\d)/.exec(document.cookie)&&/\bsugstore=(\d)/.exec(document.cookie)[1]==0){return dataArray}else{if(word.replace(reg,"mm").length<=3){return dataArray
}else{for(var i=0;i<data.length;i++){var temp={};temp.value=data[i];temp.from=0;dataArray.push(temp)}var localData=bds.se.sugStorage.get(encodeURIComponent(word));localData.sort(function(a,b){if(typeof a.date=="undefined"||typeof b.date=="undefined"){return true}else{return a.date-b.date}});for(i=0;i<localData.length;i++){for(var j=i+1;j<localData.length;j++){if(localData[i].q==localData[j].q){localData.splice(j,1);j--}}}for(i=localData.length-1;i>=0;i--){var temp={}
;temp.value=decodeURIComponent(localData[i].q);temp.from=1;temp.p=localData[i].p;tempArray.push(temp);lenStorage++;if(i==localData.length-2)break}data=tempArray.concat(dataArray);for(i=0;i<data.length;i++){for(j=i+1;j<data.length;j++){if(data[i].value==data[j].value){data.splice(j,1);j--}}}var alaData=[];for(var i=0;i<dataObj.length;i++){for(var j=0;j<data.length;j++){if(dataObj[i].key==data[j].value){if(data[j].from==1){lenStorage--}data.splice(j,1)}}var temp={};temp.value=dataObj[i].key
;temp.from=0;temp.ala=i;alaData.unshift(temp)}data=alaData.concat(data);while(data.length>10){data.pop()}return data}}}function draw(){function setTitle(obj){if(!obj||!obj.title)return;setTimeout(function(){obj.title=""},2e3)}dataArray=changeData(dataArray);if(dataArray.length<=0){hide();return}tb=C("TABLE");tb.id="st";tb.cellSpacing=0;tb.cellPadding=2;var tbd=C("tbody");tb.appendChild(tbd);for(var i=0,l=dataArray.length;i<l;i++){var tr=tbd.insertRow(-1);addEvent(tr,"mouseover",mouseover)
;addEvent(tr,"mouseout",ct);addEvent(tr,"mousedown",mousedown);addEvent(tr,"click",click(i));var td=tr.insertCell(-1);var str=setBold(oq,dataArray[i].value);if(dataArray[i].from==1){str='<u class="sug_del" title="如您不需要此搜索历史提示，&#13;可在右上角搜索设置中关闭">删除</u>'+str;td.className="sug_storage"}if(typeof dataArray[i].ala!="undefined"){td.innerHTML=strAla(str,dataArray[i].ala);td.className="sug_ala"}else{td.innerHTML=str}}div.innerHTML="";div.appendChild(tb);resize();if(isIE&&isIE<=6){
ie6frm.style.display="block";ie6frm.style.left=0+"px";ie6frm.style.top=ipt.offsetHeight+"px";ie6frm.style.width=ipt.offsetWidth+"px";ie6frm.style.height=div.offsetHeight-1+"px"}var u=div.getElementsByTagName("u");for(var i=0;i<u.length;i++){u[i].onclick=function(e){var selected=getSelected()[0];var e=e||window.event;var target=e.target||e.srcElement;target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);if(isIE&&isIE<=6){ie6frm.style.height=div.offsetHeight-1+"px"}
var img=window["BD_PS_C"+(new Date).getTime()]=new Image;img.src=$.url.escapeSSL("http://sclick.baidu.com/w.gif?q=")+encodeURIComponent(dataArray[selected].value)+"&fm=beha&rsv_sug=del&rsv_sid=11&t="+(new Date).getTime()+"&path=http://www.baidu.com";bds.se.sugStorage.remove({q:encodeURIComponent(dataArray[selected].value),p:dataArray[selected].p});dataArray.splice(selected,1);Sdiv.dm({type:"update_data",word:G("kw").value,data:dataArray});if(lenStorage>0)lenStorage--;if(
lenStorage<=0&&dataArray.length==0){hide();div.innerHTML=""}if(window.event){e.cancelBubble=true}else{e.stopPropagation()}}}addTj({rsv_sug:lenStorage})}function strAla(str,n){var html=[];switch(dataObj[n].type){case"1":html.push("<h3>"+dataObj[n].key+"</h3>");html.push("<p>"+dataObj[n].word);if(dataObj[n].word_add){html.push(" <span>（"+dataObj[n].word_add+"）</span>")}html.push("</p>");break;case"2":html.push("<h3>"+dataObj[n].key+" - 百度安全认证</h3>");html.push("<p>"+dataObj[n].word);if(
dataObj[n].word_add){html.push(" <span>（"+dataObj[n].word_add+"）</span>")}html.push("</p>");break;default:html.push(str)}return html.join("")}function enter(){selected=getSelected()[0];if(selected==-1){Sdiv.dm({type:"submit"})}else{Sdiv.dm({type:"ent_submit",oq:oq,wd:getSelected()[1],rsp:selected})}}function keyup(){selected=getSelected()[0];ct();if(selected==0){Sdiv.dm({type:"key_select",selected:""});G("kw").value=oq;selected--;rmTj({oq:oq,sug:dataArray[selected],rsv_n:1,rsp:selected,f:3,
rsv_sug:rsv_sug,rsv_sug5:0})}else{if(selected==-1)selected=dataArray.length;selected--;var tr=tb.rows[selected];tr.className="mo";Sdiv.dm({type:"key_select",selected:dataArray[selected].value});G("kw").value=dataArray[selected].value;var id=0;if(typeof dataArray[selected].ala!="undefined"){id=dataObj[dataArray[selected].ala].id}addTj({oq:oq,sug:dataArray[selected].value,rsv_n:1,rsp:selected,f:3,rsv_sug:rsv_sug})}}function keydown(){selected=getSelected()[0];ct();if(selected==dataArray.length-1){
Sdiv.dm({type:"key_select",selected:""});G("kw").value=oq;selected=-1;rmTj({oq:oq,sug:dataArray[selected],rsv_n:1,rsp:selected,f:3,rsv_sug:rsv_sug,rsv_sug5:0})}else{selected++;var tr=tb.rows[selected];tr.className="mo";Sdiv.dm({type:"key_select",selected:dataArray[selected].value});G("kw").value=dataArray[selected].value;var id=0;if(typeof dataArray[selected].ala!="undefined"){id=dataObj[dataArray[selected].ala].id}addTj({oq:oq,sug:dataArray[selected].value,rsv_n:1,rsp:selected,f:3,
rsv_sug:rsv_sug,rsv_sug5:id})}}return MessageDispatcher.ini({rm:function(evtObj){switch(evtObj.type){case"div_ready":div=evtObj.sdiv;ie6frm=evtObj.frm;break;case"give_data":oq=evtObj.data.q;dataArray=evtObj.data.s;var dataObjTemp=evtObj.data.z||[];dataObj=[];for(var i=0;i<dataObjTemp.length;i++){var d=dataObjTemp[i];if(d["type"]==1||d["type"]==2){dataObj.push(dataObjTemp[i])}}rsv_sug=evtObj.data.t;if(div){draw()};break;case"key_enter":enter();break;case"key_up":keyup();break;case"key_down":
keydown();break;case"hide_div":hide();break;case"mousedown_other":hide();break;case"window_blur":hide();break;case"need_resize":resize();break}}})}();var Form0=function(){var fm=document.forms[0];function resetform(){if(G("bdsug_ipt_sug")){if(G("bdsug_ipt_sug").value==trim(G("kw").value)){rmTj({rsv_n:1,sug:1})}else{rmTj({f:1})}}}addEvent(fm,"submit",resetform);function submit(){resetform();addTj({inputT:sugT>0?(new Date).getTime()-sugT:0});fm.onsubmit();fm.submit()}function submitTj(o){addTj(o)
;addTj({inputT:sugT>0?(new Date).getTime()-sugT:0});rmTj({sug:1,rsv_n:1});fm.onsubmit();fm.submit()}return MessageDispatcher.ini({rm:function(evtObj){switch(evtObj.type){case"clk_submit":submitTj({oq:evtObj.oq,rsp:evtObj.rsp,f:3,rsv_sug:lenStorage,rsv_sug2:1,rsv_sug5:evtObj.rsv_sug5});break;case"ent_submit":submitTj({oq:evtObj.oq,rsp:evtObj.rsp,f:3,rsv_sug:lenStorage,rsv_sug2:0});break;case"submit":submit();break}}})}();var Data=function(){var dataObj={};function processData(word){if(
typeof dataObj[word]=="undefined"){Data.dm({type:"request_data",wd:word})}else{Data.dm({type:"give_data",data:dataObj[word]})}}function addData(d){dataObj[d.q]=d;Data.dm({type:"give_data",data:dataObj[d.q]})}function updateData(word,data){if(typeof dataObj[word]!="undefined"){if(data.length>0){var temp=[];for(var i=0;i<data.length;i++){temp.push(data[i].value)}dataObj[word].s=temp;Data.dm({type:"give_data",data:dataObj[word]})}}}return MessageDispatcher.ini({rm:function(eventObj){switch(
eventObj.type){case"response_data":addData(eventObj.data);break;case"need_data":processData(eventObj.wd);break;case"update_data":updateData(eventObj.word,eventObj.data);break}}})}();var Request=function(){var dataElm;var cookieSwitch;function getDataScript(wd){var requestUrl=$.url.escapeSSL("http://suggestion.baidu.com/su");Request.dm({type:"need_cookie"});if(dataElm)document.body.removeChild(dataElm);dataElm=C("SCRIPT");dataElm.src=requestUrl+"?wd="+encodeURIComponent(wd
)+"&p="+cookieSwitch+"&cb=window.bdsug.sug&from=superpage"+"&t="+(new Date).getTime();dataElm.charset="gb2312";document.body.appendChild(dataElm);addTj({rsv_sug3:++rsv_sug3});rsv_temp_time=(new Date).getTime();rsv_temp_flag=false;rsv_timer=setTimeout(function(){addTj({rsv_sug4:rsv_sug4+=5e3});rsv_temp_flag=true},5e3);if(!window._LogSearchBoxChanged){F.use("ps/sug",function(s){s.searchLog()});window._LogSearchBoxChanged=true}}return MessageDispatcher.ini({rm:function(evtObj){switch(evtObj.type){
case"request_data":getDataScript(evtObj.wd);break;case"give_cookie":var _sug=evtObj.sug;if(_sug>0){_sug=3};cookieSwitch=_sug;break}}})}();bdsug.sug=function(dataObj){bdsug.dm({type:"response_data",data:dataObj});if(!rsv_temp_flag){var ipt=G("kw");if(ipt.value.toLowerCase()==dataObj.q){addTj({rsv_sug1:++rsv_sug1})}clearTimeout(rsv_timer);addTj({rsv_sug4:rsv_sug4+=(new Date).getTime()-rsv_temp_time})}};bdsug.initSug=function(){bdsug.dm({type:"init"})};MessageDispatcher.ini(bdsug)
;var Cookie=function(){function close(){if(navigator.cookieEnabled){document.cookie="su=0; domain=www.baidu.com"}}function getSug(){var p=navigator.cookieEnabled&&/sug=(\d)/.test(document.cookie)?RegExp.$1:3;Cookie.dm({type:"give_cookie",sug:p})}return MessageDispatcher.ini({rm:function(evtObj){switch(evtObj.type){case"close":close();break;case"need_cookie":getSug();break}}})}();var GlobalCtrl=function(){var ipt=G("kw");var div;var fm=document.forms[0];var ie6iframe;function listenZoom(){if(
div.offsetWidth!=0&&ipt.offsetWidth!=div.offsetWidth){GlobalCtrl.dm({type:"need_resize"})}}function createDiv(){div=C("DIV");div.id="sd_"+(new Date).getTime();div.className="s-ps-sug";div.style.display="none";fm.appendChild(div);if(isIE&&isIE<=6){ie6iframe=C("IFRAME");ie6iframe.style.display="none";ie6iframe.style.position="absolute";div.parentNode.insertBefore(ie6iframe,div)}}function docMouseDown(e){e=e||window.event;var elm=e.target||e.srcElement;if(elm==ipt)return;while(elm=elm.parentNode){
if(elm==div){return}}GlobalCtrl.dm({type:"mousedown_other"})}function windowBlur(){GlobalCtrl.dm({type:"window_blur"})}function initi(){var dI="#"+div.id;var cssBuf=[];GlobalCtrl.dm({type:"div_ready",sdiv:div,frm:ie6iframe});setInterval(listenZoom,100);addEvent(document,"mousedown",docMouseDown);addEvent(window,"blur",windowBlur);cssBuf.push(dI+"{border:1px solid #817F82;position:absolute;top:32px;left:0}");cssBuf.push(dI+" table{width:100%;background:#fff;cursor:default}");cssBuf.push(
dI+" td{color:#000;font:14px arial;height:25px;line-height:25px;padding:0 8px}");cssBuf.push(dI+" td b{color:#000}");cssBuf.push(dI+" .mo{background:#ebebeb}");cssBuf.push(dI+" .ml{background:#fff}");cssBuf.push(dI+" td.sug_storage{color:#7A77C8}");cssBuf.push(dI+" td.sug_storage b{color:#7A77C8}");cssBuf.push(dI+" .sug_del{font-size:12px;color:#666;text-decoration:underline;float:right;cursor:pointer;display:none}");cssBuf.push(
dI+" .sug_del{font-size:12px;color:#666;text-decoration:underline;float:right;cursor:pointer;display:none}");cssBuf.push(dI+" .mo .sug_del{display:block}");cssBuf.push(dI+" .sug_ala{border-bottom:1px solid #e6e6e6}");cssBuf.push(dI+" td h3{line-height:14px;margin:6px 0 4px 0;font-size:12px;font-weight:normal;color:#7B7B7B;padding-left:20px;background:url(img/sug_bd.png) no-repeat left center}");cssBuf.push(dI+" td p{font-size:14px;font-weight:bold;padding-left:20px}");cssBuf.push(
dI+" td p span{font-size:12px;font-weight:normal;color:#7B7B7B}");addStyle(cssBuf.join(""))}bdsug.sug.initial=initi;return MessageDispatcher.ini({rm:function(evtObj){switch(evtObj.type){case"start":initi();break;case"init":createDiv();break}}})}();Inpt.on("need_data",Data);Inpt.on("close_div",Sdiv);Inpt.on("key_enter",Sdiv);Inpt.on("key_up",Sdiv);Inpt.on("key_down",Sdiv);Inpt.on("hide_div",Sdiv);Inpt.on("start",GlobalCtrl);Data.on("request_data",Request);Data.on("give_data",Sdiv);bdsug.on(
"response_data",Data);bdsug.on("init",GlobalCtrl);Sdiv.on("update_data",Data);Sdiv.on("clk_submit",Inpt,Form0);Sdiv.on("ent_submit",Inpt,Form0);Sdiv.on("submit",Form0);Sdiv.on("key_select",Inpt);Sdiv.on("close",Inpt,Cookie);Sdiv.on("mousedown_tr",Inpt);GlobalCtrl.on("mousedown_other",Sdiv);GlobalCtrl.on("need_resize",Sdiv);GlobalCtrl.on("div_ready",Inpt,Sdiv);GlobalCtrl.on("window_blur",Sdiv);Request.on("need_cookie",Cookie);Cookie.on("give_cookie",Request)};F.module("ps/sug",function(require,
exports,ctx){exports.init=function(){bds.se.sugsync();window.bdsug.initSug()};exports.pssubmit=function(){var S=ctx.base;var satag=s_session.userTips["isNewTabSearch"];if(!satag){var _player=window.baidu&&baidu.packPlayer;if(_player&&s_session.yuce&&s_session.yuce!="1"){if(_player.getState()=="play"){satag=true;$("#form")[0].target="_blank"}else{satag=false;$("#form")[0].target="_self"}}}if(satag&&$("#kw")[0]&&(s_session.searchLogSend==0||$("#form").attr("target")=="_blank")){setTimeout(
function(){if(s_session.sid.indexOf("12783")>-1){$("#kw").attr("data-bfocus",1).val("")}else{$("#kw").triggerHandler("focus");$("#kw").select()}},1);if(s_session.sid.indexOf("12783")>-1){}else if($.browser.firefox){$("#kw").select()}setTimeout(function(){ctx.use("page/info",function(page){var info=page.getInfo(),mode="focus";if(info&&info.isFocus){mode="blur"}s_session.searchLogSend=1;ctx.fire("searchBtnClick",{opType:"click",openMode:"new"+mode,wd:encodeURIComponent($("#kw").val())})})},100)
}else if(s_session.searchLogSend==0||$("#form").attr("target")=="_blank"){s_session.searchLogSend=1;ctx.fire("searchBtnClick",{opType:"click",openMode:"current",wd:encodeURIComponent($("#kw").val())})}$("#bd_fm_search_tip").hide()};exports.searchLog=function(){ctx.fire("queryChange",{opType:"querychange",wd:encodeURIComponent($("#kw").val())})}});
$(window).on("load",function(){if($.browser.chrome>=39){return}var divDom='<div id="_FP_userDataDiv" style="behavior:url(#default#userdata);width:0px;height:0px;position:absolute;top:-10000px;left:-10000px"></div><div id="_FP_comDiv" style="behavior:url(#default#clientCaps);width:0px;height:0px;position:absolute;top:-10000px;left:-10000px"></div>';$("body").append(divDom);var libjsUrl="//www.baidu.com/cache/fpid/lib_1_0.js";var ieLibUrl="//www.baidu.com/cache/fpid/ielib_1_1.js"
;var otherLibUrl="//www.baidu.com/cache/fpid/chromelib_1_1.js";var curTitle=document.title;var config={flashDomId:"_FP_userDataDiv",flashUrl:"",comDomId:"_FP_comDiv",IEStoreDomId:"_FP_userDataDiv"};var ua=navigator.userAgent.toLowerCase();var isIE=false;if(ua.indexOf("msie")>=0||new RegExp("trident(.*)rv.(\\d+)\\.(\\d+)").test(ua)){isIE=true}var callback=function(arr){if(isIE){window.setTimeout(function(){document.title=curTitle},0)}window._FPID_CACHE=arr;$("#_FP_userDataDiv").remove();$(
"#_FP_comDiv").remove();var qid=s_session.seqId;var img_key="_WWW_BR_API_"+(new Date).getTime();var send_img=window[img_key]=new Image;send_img.onload=function(){window[img_key]=null};var baiduId=$.cookie.get("BAIDUID");var baseUrl=$.url.escapeSSL("http://eclick.baidu.com/ps_fp.htm?");var sendUrl=baseUrl+"pid=superman&fp="+arr.data.fp+"&im="+arr.data.im+"&wf="+arr.data.wf+"&br="+arr.data.br+"&qid="+qid+"&bi="+baiduId;send_img.src=sendUrl};if(isIE){$.getScript(libjsUrl,function(){fpLib.getFp(
callback,config)})}else{$.getScript(otherLibUrl,function(){fpLib.getFp(callback,config)})}});
$(document).ready(function(){var isNewTopMenu=bds.comm&&bds.comm.newTopMenu===1;window._load_status="dom_ready";(function(){if(Math.random()*100<1&&$.browser.edge){window.testedge=function(fn){var health;if(/testedge=1/i.test(fn.toString())){try{window.localStorage.setItem("_super_edgehealth","good")}catch(e){}health="1"}else{health="0"}var imgLog=function(src){var n="imglog__"+(new Date).getTime();var c=window[n]=new Image;c.onload=c.onerror=function(){window[n]=null};c.src=src;c=null}
;var src="http://dj0.baidu.com/v.gif?pid=315&type=2011&portrait="+s_session.portrait+"&logactid=9000500000&health="+health+"&t="+ +new Date;imgLog($.url.escapeSSL(src))};$.loadJs($.url.escapeSSL("http://ss.bdimg.com/cdn/testedge.js"))}})();if($.browser.chrome&&$.browser.chrome===37){if(window.navigator.appVersion.indexOf("Windows NT 6.1")>-1){$("#kw").css({"font-family":"Microsoft Yahei,STHeiti"})}}F.use("superman:ps/sindex",function(s){s.init();var opt={};opt.baseParams={ct:2,
logFrom:"feed_index",logInfo:"item",qid:s_session.seqId,sid:s_session.sid,ssid:s_session.portrait,logid:s_session.logId||"0",_r:Math.random()};window.Thunder.get(opt)});if(typeof window._sp_async==="undefined"){F.use("superman:ps/sug",function(s){s.init()})}F.use("superman:ps/log",function(psLog){if(isNewTopMenu){psLog.bindBox("s-top-left");psLog.bindBox("s-user-name-menu");psLog.bindBox("virus-2020")}else{psLog.bindBox("nv");psLog.bindBox("u_sp");psLog.bindBox("s_user_name_menu")}psLog.bindBox(
"bottom_container");$("#s_pss_exit")[0]&&psLog.bindBox("s_pss_exit")});if($("#toipad")[0]){F.use("superman:page/toipad",function(s){s.init()})}F.call("superman:common/image_lazy_load","init");F.call("superman:lib/carditem_log","init");(function(){var LEAST="maybe";var supportedTypes=[];var testAudio=function(){var elem=document.createElement("audio");var bool=false;try{bool=!!elem.canPlayType;if(bool){bool.ogg=elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"")
;bool.mp3=elem.canPlayType("audio/mpeg;").replace(/^no$/,"");bool.wav=elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"");bool.m4a=(elem.canPlayType("audio/x-m4a;")||elem.canPlayType("audio/aac;")).replace(/^no$/,"")}}catch(e){}return bool};var supportedTypesHandle=function(){var audio=testAudio();if(!audio){return}for(var k in audio){if(audio.hasOwnProperty(k)&&audio[k]>=LEAST){supportedTypes.push(k)}}};try{supportedTypesHandle();window.s_session.audioModernizr=!!supportedTypes.length
}catch(e){window.s_session.audioModernizr=false}})();if(_manCard.asynJs.length>0){$.each(_manCard.asynJs,function(i,e){setTimeout(function(){$.loadJs($("#"+e).attr("data-src"))},1)})}_manCard.asynLoad=function(id){$.loadJs($("#"+id).attr("data-src"))};$(window).bind("load",function(){window._load_status="window_load";if(s_session.index_off){return}F.call("superman:page/scroll","init");window._load_status="fully_load";_initTopMenu();if(!s_session.isLogin){if(bds.comm.newNav===1){F.call(
"superman:components/nav","init")}return}F.call("superman:mt/mt_show","init");F.call("superman:page/page_exp","init");_initLoadModel();_initSkin();_initIndexGuide();setTimeout(function(){var elem=$("script[data-onload],#tipsplus-js");elem.each(function(){var that=$(this);var src=that.attr("data-src");if(src){that.attr("src",src)}})},1)});if(!s_session.isLogin){return}function _initSkin(){F.call("superman:start/skin_start","init",false)}function _initTopMenu(){if(bds.comm&&bds.comm.newTopMenu===1
){F.call("superman:mngr/menu_user","init");F.call("superman:mngr/menu_common","init");F.call("superman:mngr/top_menunav_new","init");F.call("superman:components/qrcode","init")}else{F.call("superman:mngr/top_menu","init");F.call("superman:mngr/top_menunav","init")}}function _initLoadModel(){var _dom=$("#s_mod_weather");var willShow=false;var isLoading=false;var lastResult;_dom.on("mouseenter",mouseEnterHandler);_dom.on("mouseleave",mouseLeaveHander);function mouseLeaveHander(){if(willShow){
willShow=false}}function mouseEnterHandler(){if(isLoading){return}willShow=true;isLoading=true;var cityName=$(".city-wather .show-city-name").attr("data-key");if(lastResult){handleResult(lastResult)}else{$.ajaxget(s_domain.baseuri+"/other/data/weatherInfo?city="+encodeURI(cityName),handleResult)}}function handleResult(result){if(!willShow){isLoading=false;lastResult=result;return}_dom.off("mouseenter",mouseEnterHandler);_dom.off("mouseleave",mouseLeaveHander);if(+result.errNo===0&&result.data){
if(result.data.weather){F.use("superman:weather/weather_tpl",function(w_tpl){w_tpl.init(result.data.weather)});F.use("weather/weather_ctrl",function(ww){ww.bindEvents(result.data.weather)})}}}}if($.isIE6){$(window).bind("resize load",function(e){$("#bottom_container").toggleClass("xxx4ielw");$(document.body).toggleClass("rs4ie")})}if($.browser.opera){$(document.body).css("minHeight","100px")}if(+$.browser.ie===6||+$.browser.ie===7){$("span[data-tid=7999]").remove()}F.fire("superman:page",
"runCssDetect");if(location.href.indexOf("frm=resultPage")>-1&&location.href.indexOf("showType=showSkin")>-1){window.location.hash="#";F.use("skin/skin_init",function(skin_init){skin_init.init()})}function _initIndexGuide(){$("#s_menu_mine").on("click",function(){$("#s_xmancard_nav .s-nav-wrapper .nav-tips").remove();F.use("superman:common/user_attr",function(userAttr){userAttr.setAttr("supermanNavGuide","off")})})}if(s_session.isFesLogo){$("#s_mp area").on("mousedown",function(e){ns_c({
fm:"tab",tab:"felogo",rsv_platform:"newhome",rsv_skin:$("#head").hasClass("s-skin-hasbg")?"1":"0"})})}if(s_session.isHaveWrodLink){$("#lm a").on("mousedown",function(e){var $this=$(this);ns_c&&ns_c({fm:"behs",tab:"bdlink",p1:$this.index()+1,title:$this.text(),url:$this.attr("href"),rsv_platform:"newhome",rsv_skin:$("#head").hasClass("s-skin-hasbg")?"1":"0"})})}});
F.module("page/info",function(require,exports,ctx){var S=ctx.base,_info={isFocus:true};$(window).on("focus",function(){_info.isFocus=true});$(window).on("blur",function(){_info.isFocus=false});exports.getInfo=function(){return _info}});
F.module("superman:page/scroll",function(require,exports,ctx){var tWrap=$("#s_top_wrap");var hWrap=$("#head_wrapper");var tabWrap=$("#s_ctner_menus");var kwWrap=s_session.isLogin?$("#s_kw_wrap"):$("#kw");var sFormWrapper=$("#s_form_wrapper");var u1=$("#u1");var sWrap=$("#s_wrap");var upMenu=$("#u_sp");var s_fm=document.getElementById("s_fm");var isIE7=$.isIE===7?true:false;var isIE6=$.isIE===6?true:false;var newSearchBox=bds.comm.newSearchBox;function init(){_bindEvent()
;bds.comm.ubsurl=$.url.escapeSSL("http://sclick.baidu.com/w.gif");if($.isIE==6){document.execCommand("BackgroundImageCache",false,true)}}function handleSDown(){sWrap.css({"padding-top":hWrap.outerHeight(true)});tWrap.addClass("s-down");sWrap.addClass("s-down");hWrap.addClass("s-down");u1.addClass("s-down");if(newSearchBox){sFormWrapper.addClass("c-wrapper c-wrapper-l")}}function handleUnSDown(){sWrap.css({"padding-top":0});tWrap.removeClass("s-down");sWrap.removeClass("s-down")
;hWrap.removeClass("s-down");u1.removeClass("s-down");if(newSearchBox){sFormWrapper.removeClass("c-wrapper c-wrapper-l")}tabWrap.css({left:0})}var _roller={overBound:false,topFy:function(left,top){if(isIE6){return}var _ctx=this;if(!_ctx.overBound){_ctx.overBound=true;handleSDown();ctx.fire("outMenu",{out:true});if(isIE7){s_fm.style.zoom=0}$(window).bind("resize",_ctx.follow)}if(left>=0){tabWrap.css({left:-1*left})}_ctx.follow(true)},unTopFy:function(left,top){if(isIE6){return}var _ctx=this;if(
_ctx.overBound){_ctx.overBound=false;handleUnSDown();ctx.fire("outMenu",{out:false});if(isIE7){setTimeout(function(){s_fm.style.zoom=1},30)}_ctx.follow();$(window).unbind("resize",_ctx.follow)}tWrap.css({left:0})},ieFix:function(top){var skinLayer=$("#s_skin_layer");if(parseInt(skinLayer.css("top"),10)>=0){skinLayer.css({top:top})}},follow:function(start){if(newSearchBox){return}if(start){hWrap.css({left:tWrap.width()/2-$(window).scrollLeft()})}else{hWrap.css({left:""})}},upMenuFollow:function(
){upMenu.css({position:"fixed",right:$(window).width()-tWrap.width()+$(window).scrollLeft()})},miniFy:function(free){var miniBound=1280;if($(window).width()>miniBound||free===true){$(s_fm).removeClass("minisize")}else{$(s_fm).addClass("minisize")}},initAdjust:function(){$(window).on("beforeunload",function(){_roller.unTopFy(0,0);window.scrollTo(0,0)})}};function _bindEvent(){var kwTop=kwWrap.offset().top;_roller.initAdjust();$(window).on("scroll",function(e){var top=$(this).scrollTop()
;var left=$(this).scrollLeft();if(hWrap.hasClass("s-ps-islite")){return}if(!s_session.isLogin){return}if(top>=kwTop-18){_roller.topFy(left,top)}else{_roller.unTopFy(left,top)}if(isIE7){if(top==0){setTimeout(function(){upMenu[0].style.zoom=1},200)}else{upMenu[0].style.zoom=0}}});if($.isIE!==6){$(window).on("resize",function(){tWrap.css({left:-1*$(window).scrollLeft()})})}}exports.init=init});
====================================================
====================Beautified Below================
.attr("data-src") && !_isImageLoadCompleted(elm)) {
                imgList.push(elm)
            }
        });
        if (isScanAll) {
            _dataSrcImgStack = imgList
        } else {
            _dataSrcImgStack = _dataSrcImgStack.concat(imgList)
        }
        _renderImage(init)
    };
    var _bindScrollEvent = function() {
        $.each(["resize", "scroll", "load", "cardrender"], function(index, evtName) {
            $(window).bind(evtName, function(e) {
                if (s_session.index_off == true) {
                    return
                }
                if (_timeoutId) {
                    window.clearTimeout(_timeoutId)
                }
                _timeoutId = window.setTimeout(function() {
                    _timeoutId = 0;
                    exports.scanAndDoRender()
                }, 20);
                e.stopPropagation()
            })
        })
    };

    function _isVisible(element) {
        var rect = element.getBoundingClientRect();
        return !!(rect.bottom - rect.top)
    }
    exports.init = function() {
        exports.scanAndDoRender(null, true);
        _bindScrollEvent()
    }
});
try {
    ! function(e, t) {
        e.webb2 = t()
    }("undefined" != typeof self ? self : this, function() {
        return function(e) {
            function t(o) {
                if (n[o]) return n[o].exports;
                var i = n[o] = {
                    i: o,
                    l: !1,
                    exports: {}
                };
                return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.d = function(e, n, o) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: o
                })
            }, t.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e["default"]
                } : function() {
                    return e
                };
                return t.d(n, "a", n), n
            }, t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "", t(t.s = 10)
        }([function(e, t, n) {
            "use strict";

            function o(e, t) {
                var n = new Image,
                    o = i();
                window[o] = n, n.onload = function() {
                    t && t(), delete window[o]
                }, n.onerror = function(e) {
                    t && t(e), delete window[o]
                }, n.src = e
            }

            function i() {
                var e = function() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                };
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            }

            function r(e, t) {
                if (!t || "object" !== (void 0 === t ? "undefined" : v(t))) return e;
                for (var n = Object.keys(t), o = n.length; o--;) e[n[o]] = t[n[o]];
                return e
            }

            function s(e) {
                return Object.keys(e).map(function(t) {
                    var n = e[t];
                    return void 0 === n ? n = "" : "string" != typeof n && (n = JSON.stringify(n)), encodeURIComponent(t) + "=" + encodeURIComponent(n)
                }).join("&")
            }

            function a(e, t) {
                var n = ["webkit", "moz", "ms", "o"];
                if (t in e) return t;
                for (var o = 0; o < n.length; o++) {
                    var i = "" + n[o] + t;
                    if (i in e) return i
                }
                return ""
            }

            function u() {
                return {
                    x: document.body.scrollLeft || document.documentElement.scrollLeft,
                    y: document.body.scrollTop || document.documentElement.scrollTop
                }
            }

            function c(e) {
                b && (document.addEventListener(g, e), document.addEventListener(w, e))
            }

            function d(e) {
                document.removeEventListener(g, e), document.removeEventListener(w, e)
            }

            function l(e) {
                return e && "hidden" in e ? e.hidden : document[b]
            }

            function p() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return Object.keys(t).forEach(function(n) {
                    e[n] = t[n]
                }), e
            }

            function f() {
                if (
                    Element && !Element.prototype.matches) {
                    var e = Element.prototype;
                    e.matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector
                }
            }

            function m(e) {
                var t = window.getComputedStyle(e)["background-image"];
                return t && "none" !== t && /^url\(/i.test(t) ? t.replace(/^url\(['"]?([^'"]+)['"]?\)/i, "$1") : ""
            }

            function h(e) {
                return e && "string" == typeof e && /^\s?(http:|https:)?\/\//.test(e)
            }

            function y(e, t) {
                /complete|loaded|interactive/.test(document.readyState) && document.body ? e() : document.addEventListener("DOMContentLoaded", function() {
                    if (t) return void e();
                    setTimeout(function() {
                        e()
                    }, 0)
                })
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            t.sendLog = o, t.guid = i, t.extend = r, t.stringify = s, t.getProp = a, t.getScrollInfo = u, t.bindVisibilityChangeEvent = c,
                t.disposeVisibilityChangeEvent = d, t.getPageHiddenValue = l, t.assign = p, t.matchesPolyfill = f, t.getUrlFromStyle = m, t.isUrl = h, t.afterReady = y;
            var b = a(document, "hidden"),
                g = b.replace(/hidden/i, "visibilitychange"),
                w = "baiduboxappvisibilitychange"
        }, function(e, t, n) {
            "use strict";

            function o(e) {
                var t = this,
                    n = e.colno || window.event && window.event.errorCharacter || 0,
                    o = e.error || {},
                    r = (0, i.assign)({
                        msg: e.message,
                        ln: e.lineno,
                        file: e.filename,
                        col: n,
                        stack: o.stack
                    }, this.exceptionInfo);
                setTimeout(function() {
                    t.send("et_js", r,
                        t.exceptionDim)
                }, 0)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(0);
            t["default"] = {
                initException: function() {
                    this.exceptionDim = null, this.exceptionInfo = {}, this.onerrorCb = o.bind(this)
                },
                startJsExceptionLog: function(e, t) {
                    this.exceptionInfo = (0, i.assign)({}, e), this.exceptionDim = (0, i.assign)({}, t), window.removeEventListener("error", this.onerrorCb), window.addEventListener("error", this.onerrorCb)
                },
                startResExceptionLog: function(e, t) {},
                stopJsExceptionLog: function() {
                    window.removeEventListener(
                        "error", this.onerrorCb)
                },
                stopResExceptionLog: function() {},
                sendExceptionLog: function(e, t) {
                    this.send("et_comm", e, t)
                },
                destroyJsException: function() {
                    this.stopJsExceptionLog(), this.exceptionDim = null, this.exceptionInfo = null, this.onerrorCb = null
                }
            }, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(0);
            t["default"] = {
                sendBaseDispLog: function(e, t, n) {
                    var i = document.documentElement,
                        r = {
                            size: {
                                doc: {
                                    w: i.scrollWidth,
                                    h: i.scrollHeight
                                },
                                wind: {
                                    w: i.clientWidth,
                                    h: i.clientHeight
                                },
                                scr: {
                                    w: screen.width,
                                    h: screen.height
                                }
                            },
                            dpr: window.devicePixelRatio || 1
                        };
                    e && (r = (0, o.assign)(r, e)), this.send("disp_comm", r, t, null, n)
                },
                sendDispLog: function(e, t, n) {
                    var i = void 0;
                    i = e instanceof Array ? e : (0, o.assign)({}, e), this.send("disp_content", i, t, null, n)
                }
            }, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(0);
            t["default"] = {
                sendBasePfLog: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments[1],
                        n = arguments[2],
                        i = window.performance && performance.timing || {},
                        r = i.navigationStart,
                        s = i.requestStart,
                        a = i.responseStart,
                        u = i.responseEnd,
                        c = i.domComplete,
                        d = i.domLoading,
                        l = i.domainLookupStart,
                        p = i.domainLookupEnd,
                        f = i.connectStart,
                        m = i.connectEnd,
                        h = i.loadEventStart,
                        y = i.loadEventEnd,
                        v = {
                            dns: p - l,
                            tcp: m - f,
                            req: a - s,
                            res: u - a,
                            dct: c - d,
                            ld: y - h
                        },
                        b = window.__webbbrige__ || {},
                        g = b.whiteScreenTime,
                        w = b.firstScreenTime;
                    g && (v = (0, o.assign)(v, {
                        wst: g - r
                    })), w && (v = (0, o.assign)(v, {
                        fst: w - r
                    })), v = (0, o.assign)(v, e), this.send("pf_comm", v, t, null, n)
                },
                sendPfLog: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments[1],
                        n = arguments[2],
                        i = (0, o.assign)({}, e);
                    this.send("pf_comm", i, t, null, n)
                }
            }, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = {
                sendCountLog: function(e, t) {
                    this.send("count_comm", e, t)
                }
            }, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = {
                sendDistributeLog: function(e, t) {
                    this.send("dist_comm", e, t)
                }
            }, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t
                    }
                }(),
                s = n(0),
                a = "https://sp1.baidu.com/5b1ZeDe5KgQFm2e88IuM_a/webb.gif";
            "http:" === location.protocol && (a = "http://sestat.baidu.com/webb.gif");
            var u = "https://sp1.baidu.com/5b1ZeDe5KgQFm2e88IuM_a/mwb2.gif";
            "http:" === location.protocol && (u = "http://sestat.baidu.com/mwb2.gif");
            var c = {
                    time: 1,
                    ia: 1,
                    disp_comm: 1,
                    disp_content: 1,
                    et_js: 2,
                    et_comm: 2,
                    et_resource: 2,
                    et_httpres: 2,
                    count_comm: 2,
                    dist_comm: 2,
                    pf_comm: 2
                },
                d = function() {
                    function e(t) {
                        o(this, e);
                        var n = {
                            sample: 0
                        };
                        this.validateOptions(t), this.options = (0, s.extend)(n, t), this.random = Math.random(), this.options.sample && (this.options.curSample = Math.random() < this.options.sample ? 1 : 0), this.updateCurSample(), this.initException(), this.options.ia && this.initIa && this.initIa()
                    }
                    return r(e, [{
                        key: "updateCurSample",
                        value: function() {
                            var e = this;
                            Object.keys(this.options).forEach(function(t) {
                                var n = e.options[t];
                                n && n.sample && !n.curSample && (e.options[t].curSample = Math.random() < n.sample ? 1 : 0)
                            })
                        }
                    }, {
                        key: "validateOptions",
                        value: function(e) {
                            var t = ["pid", "lid"];
                            if ("object" !== (void 0 === e ? "undefined" : i(e))) throw new Error("Options must be an object!");
                            if (!t.every(function(t) {
                                    return t in e
                                })) throw new Error("Options " + t.join(", ") + " required")
                        }
                    }, {
                        key: "updateOption",
                        value: function(e) {
                            this.options = (0, s.extend)(this.options, e), this.updateCurSample()
                        }
                    }, {
                        key: "wrapCommonParam",
                        value: function(e, t, n) {
                            var o = {
                                pid: this.options.pid,
                                lid: this.options.lid,
                                ts: Date.now(),
                                type: e,
                                info: t,
                                ext: this.options.ext ? this.options.ext : {}
                            };
                            return n && (o.dim = n), o
                        }
                    }, {
                        key: "hitSample",
                        value: function(e) {
                            var t = this.options[e];
                            if (!t) return 0;
                            return "sample" in t ? "eachreq" === t.sampleType ? t.sample && Math.random() <= t.sample ? 1 : 0 : t.curSample : "eachreq" === this.options.sampleType ? this.options.sample && Math.random() <= this.options.sample ? 1 : 0 : this.options.curSample
                        }
                    }, {
                        key: "getLogHost",
                        value: function(e) {
                            var t = this.options;
                            return t[e] && t[e].logHost || t.logHost ? t[e] && t[e].logHost ? t[e].logHost : t.logHost : 2 === c[e] ? u : a
                        }
                    }, {
                        key: "send",
                        value: function(e, t, n, o, i) {
                            if (this.hitSample(e)) {
                                "function" == typeof n && (i = o, o = n, n = null);
                                var r = this.wrapCommonParam(e, t, n);
                                (0, s.extend)(r, i), r && r.ext ? r.ext.path = location.pathname : r && !r.ext && (r.ext = {
                                    path: location.pathname
                                });
                                var a = (0, s.guid)(),
                                    u = window[a] = new Image;
                                u.onload = function(e) {
                                        o && ("function" == typeof o ? o(e) : o.successCb && "function" == typeof o.successCb && o.successCb(e)), delete window[a]
                                    },
                                    u.onerror = function(e) {
                                        o && o.errorCb && "function" == typeof o.errorCb && o.errorCb(e), delete window[a]
                                    }, u.src = this.getLogHost(e) + "?" + (0, s.stringify)(r)
                            }
                        }
                    }, {
                        key: "sendBeacon",
                        value: function(e, t, n, o) {
                            if (this.hitSample(e)) {
                                var i = this.wrapCommonParam(e, t, n);
                                if ((0, s.extend)(i, o), i && i.ext ? i.ext.path = location.pathname : i && !i.ext && (i.ext = {
                                        path: location.pathname
                                    }), navigator.sendBeacon) {
                                    navigator.sendBeacon(this.getLogHost(e) + "?" + (0, s.stringify)(i)) || this.send(e, t, n)
                                } else this.send(e, t, n)
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.destroyJsException(), this.destroyIaMonitor(), this.destroyMediaTime()
                        }
                    }]), e
                }();
            t["default"] = d, e.exports = t["default"]
        }, , , , function(e, t, n) {
            "use strict";

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(1),
                r = o(i),
                s = n(2),
                a = o(s),
                u = n(3),
                c = o(u),
                d = n(4),
                l = o(d),
                p = n(5),
                f = o(p),
                m = n(6),
                h = o(m),
                y = n(0);
            (0, y.extend)(h["default"].prototype, r["default"]), (0, y.extend)(h["default"].prototype, a["default"]), (0, y.extend)(
                h["default"].prototype, c["default"]), (0, y.extend)(h["default"].prototype, l["default"]), (0, y.extend)(h["default"].prototype, f["default"]), t["default"] = h["default"], e.exports = t["default"]
        }])
    })
} catch (error) {}
F.addLog("superman:skeleton", {});
F.addLog("mancard:skeleton", {
    modShow: "1100000000",
    modClick: "1100000001",
    loadMoreClick: "1100000005",
    categoryClick: "1200100001",
    gotoTopClick: "1100000006",
    qrcodehover: "1100000007"
});
F.addLog("superman:guide", {
    xguideShow: "1000000000",
    xguide: "1000000001",
    xmanGuideShow: "1100100000",
    xmanGuideClick: "1100200001",
    tripEntranceClick: "1100300001",
    tutorialClick: "1100400001",
    zeroOpacityClick: "1100500001",
    wenjuanClick: "1100700002"
});
F.addLog("mancard:setting", {
    modOperate: "0900100001",
    webOperate: "0900200001",
    modConfirmOperate: "0900300001"
});
F.addLog("superman:weather", {
    weatherShow: "5000000000",
    settingShow: "5000100000",
    settingClick: "5000100001",
    settingOperate: "5000100002",
    layerOperate: "5000000002"
});
F.addLog("superman:mt", {
    msgShow: "0400000000",
    msgItemClick: "0400100001",
    msgItemDelClick: "0400400001",
    msgBtnClick: "0400500001",
    msgHide: "0400600002",
    msgItemShow: "0400700000"
});
F.addLog("superman:ps", {
    categoryClick: "1200100001",
    queryChange: "1200200001",
    searchBtnClick: "1200200001",
    psLogoClick: "1200300001",
    psWorkLnkClick: "1200400001",
    stayLog: "1200400002"
});
F.addLog("superman:mngr", {
    categoryClick: "1200100001",
    userQuitClick: "1200100002",
    treasureClick: "1300000000"
});
F.addLog("superman:skin", {
    skinShow: "5100000000",
    skinClick: "5100000001",
    skinHover: "5100000002",
    skinOperate: "5100000003",
    skinInfo: "5100000004"
});
F.addLog("superman:skeleton", {
    tabTimeClick: "7000000000",
    tabTimeClickInBucket: "7000100000"
});
F.addLog("superui:component", {
    skinClick: "5100000001"
});
F.addLog("superman:lib/carditem_log", ["cardItemLog"]);
F.module("superman:lib/carditem_log", function(require, exports, ctx) {
    var thunder = window.Thunder.get();
    var logactid = "page-card-tpl-item";
    var logDom = ["s_ctner_contents"];
    var pathLogTimer = {};
    var sendItemLog = function(logParm, type, tlog) {
        pathLogTimer[type] && clearTimeout(pathLogTimer[type]);
        pathLogTimer[type] = setTimeout(function() {
            if (logParm.rid != undefined) {
                ctx.fire("cardItemLog", logParm);
                if (tlog && logParm.func !== "dustbin" && +s_session.curmod === 2) {
                    thunder.send(tlog)
                }
            }
        }, 300)
    };
    var buildLogParam = function(node) {
        var curNode = $(node),
            flag = false,
            cType = "",
            nodeName = "",
            func = "",
            title = "",
            url = "",
            isItemClick = false;
        extra = "";
        while (curNode.attr("data-rid") == undefined && curNode.attr("id") != "s_ctner_contents") {
            if (curNode.attr("data-click") != undefined) {
                isItemClick = true;
                cType = curNode.attr("data-click").toLowerCase();
                nodeName = node.nodeName.toLowerCase();
                if (cType == "log_link") {
                    if (curNode[0] && curNode[0].nodeName && curNode[0].nodeName.toLowerCase() == "a") {
                        title = $.trim(curNode.attr("data-title")) || $.trim(curNode.attr("title")) || $.trim(curNode.text());
                        var tmpurl = $.trim(curNode.attr("href"));
                        if (!tmpurl.indexOf("#") == 0 && !tmpurl.indexOf("javascript") == 0) {
                            url = tmpurl
                        }
                    }
                    if (nodeName != "img") {
                        nodeName = "a"
                    }
                    cType = "outlink"
                } else if (cType.indexOf("log_btn") != 1) {
                    func = cType.replace("log_btn_", "");
                    cType = "btn";
                    url = "";
                    title = $.trim(curNode.attr("data-title")) || $.trim(curNode.attr("title")) || $.trim(curNode.text())
                }
            }
            curNode = curNode.parent();
            if (curNode.attr("data-extra")) {
                extra = curNode.attr("data-extra")
            }
        }
        var logParam = {
            logactid: logactid,
            logtype: "click",
            clicktype: cType,
            nodename: nodeName,
            func: func,
            title: title,
            url: url,
            strategyHit: s_session.strategy_hit,
            xx: $(node).offset().left,
            xy: $(node).offset().top,
            extra: extra
        };
        logParam["rid"] = isItemClick ? curNode.attr("data-rid") : undefined;
        var thunderlog = {
            cst: 2,
            tid: 30,
            logExtra: {
                rid: isItemClick ? curNode.attr("data-rid") : undefined,
                url: isItemClick ? curNode.attr("data-url") : undefined,
                clicktype: cType,
                title: title,
                flow: 2,
                extra: extra
            }
        };
        var logCustom = curNode.attr("data-log"),
            logArr = [];
        if (logCustom) {
            logCustom = logCustom.replace(/\;$/g, "");
            logArr = logCustom.split(";");
            var keyvalue = [];
            var key = "";
            var value = "";
            for (var i = 0; i < logArr.length; i++) {
                keyvalue = logArr[i].split(":");
                key = keyvalue[0];
                value = keyvalue[1];
                thunderlog.logExtra[key] = value;
                if (!/-1$/g.test(key)) {
                    if (/-0$/g.test(key)) {
                        key = key.replace(/-0$/g, "")
                    }
                    logParam[key] = value
                }
            }
        }
        thunderlog.logExtra = $.stringify(thunderlog.logExtra);
        sendItemLog(logParam, "click", thunderlog)
    };
    var bindEvent = function(item) {
        $("#" + item).on("mousedown", function(e) {
            var t = e.target;
            buildLogParam(t)
        })
    };
    exports.init = function() {
        $.each(logDom, function(i, e) {
            bindEvent(e)
        })
    }
});
F.module("ps/log", function(require, exports, ctx) {
    var keyMap = {
        "旧版": "tjold",
        "使用百度前必读": "tjread",
        "我的相册": "tjxiangce",
        "首页设置": "tjmsgsetting",
        "登录": "tjlogin",
        "退出": "tjlogout",
        "空间": "tjhi",
        "我的主页": "tjgongzhu",
        "我的成就": "tjchengjiu",
        "加入百度推广": "tjadjoin",
        "搜索风云榜": "tjadtop",
        "关于百度": "tjadaboutch",
        AboutBaidu: "tjadabouten",
        "加入开放首页": "tjadopen",
        "个人中心": "tjucent",
        "帐号设置": "tjuser",
        "切换帐号": "tjswitchuser",
        "退出登录": "tjlogout",
        "新闻": "tjnews",
        hao123: "tjhao123",
        "地图": "tjmap",
        "视频": "tjvideo",
        "贴吧": "tjtieba",
        "学术": "tjxueshu",
        "更多": "tjmore",
        "网盘": "tjwangpan",
        "知道": "tjzhidao",
        "百科": "tjbaike",
        "图片": "tjimg",
        "宝宝知道": "tjbaobaozhidao",
        "文库": "tjwenku",
        "经验": "tjjingyan",
        "音乐": "tjmp3",
        "查看全部百度产品>": "tjquanbu",
        "搜索设置": "tjsetting",
        "高级搜索": "tjadvsetting",
        "隐私设置": "tjhistorysetting",
        "我的收藏": "tjucentcol",
        "我的日历": "tjucentcal",
        "搜索记录": "tjucenthis",
        "完整版": "tjtoxman",
        "极简版": "tjtolite",
        "设为首页": "setpage",
        "好看": "tjhaokan",
        "抗击肺炎": "tjyunying"
    };
    var _getTagTxt = function(tag) {
        return $(tag).text().replace(/[\s\t\xa0\u3000]/g, "")
    };
    var _MouseDown = function(e) {
        var obj = e.srcElement ? e.srcElement : e.target;
        if (obj.tagName === "A") {
            var txt = _getTagTxt(obj);
            var url = obj.href;
            if (txt in keyMap) {
                ctx.fire("categoryClick", {
                    category: keyMap[txt],
                    url: url
                })
            } else if (txt === s_session.username) {
                ctx.fire("categoryClick", {
                    category: "username"
                })
            }
        }
        return false
    };

    function _bind(id) {
        $("#" + id).bind("mousedown", _MouseDown)
    }

    function _fire(category, ext) {
        var param = {
            category: category
        };
        if (ext) {
            $.extend(param, ext)
        }
        ctx.fire("categoryClick", param)
    }
    exports.bindBox = _bind;
    exports.fireLog = _fire;
    exports.keyMap = keyMap
});
F.addLog("superman:ps/sindex", {
    hwInput: "1100000900"
});
F.module("superman:ps/sindex", function(require, exports, ctx) {
    var S = ctx.base;
    exports.init = function() {
        var w = window,
            d = document,
            n = navigator,
            k = $("#kw"),
            isIE = n.userAgent.indexOf("MSIE") != -1 && !window.opera;
        s_session.searchLogSend = 0;
        $("#su").on("mouseout", function() {
            $(this).removeClass("btn_h")
        }).on("mousedown", function() {
            $(this).addClass("btn_h")
        });
        var kw = document.getElementById("kw");
        $(kw.parentNode).addClass("bg s_ipt_wr iptfocus");
        $(window).on(
            "swap_end",
            function() {
                if (s_session.searchLogSend == 0) {
                    s_session.searchLogSend = 1;
                    ctx.fire("searchBtnClick", {
                        opType: "click",
                        openMode: "current",
                        wd: encodeURIComponent($("#kw").val())
                    })
                }
            });
        $(window).on("s-skinon", function() {
            $('<style id="s_skin_bdpfmenu">.bdpfmenu{border:0 none !important;}.bdpfmenu a{line-height:24px !important;border:1px solid #fff !important;}</style>').appendTo($("head"))
        }).on("s-skinoff", function() {
            $("#s_skin_bdpfmenu").remove()
        });

        function G(id) {
            return d.getElementById(id)
        }
        var noskinMan = _noskinbind(k);
        if (w.s_session.userIsNewSkined == "off") {
            noskinMan(k)
        }
        ctx.listen("superman:skin/skin_rewrite", "skin_change", function(e) {
            noskinMan(k, true)
        });
        try {
            if (typeof window._sp_async == "undefined") {
                G("kw") && G("kw").focus()
            } else {
                if (pageState == 0) {
                    G("kw") && G("kw").focus()
                }
            }
        } catch (e) {}
        $("#s_username_top").bind("mouseover", function() {
            F.use("ps/log", function(psLog) {
                psLog.fireLog("tj_ucent_mouseover")
            })
        });
        var _menuShowing = [false, false];
        var _logLock = false;

        function regUserCenterMenu(dId,
            menuId, target, pos, index) {
            var $d = $("#" + dId),
                $target = $("#" + target),
                $menu = $("#" + menuId);
            $d.bind("mouseenter", function(e) {
                _menuShowing[index] = true;
                $menu.show();
                var right = pos == "right" ? $(document.body).width() - $menu[0].offsetWidth / 2 - $target.offset().left - $target.width() / 2 : $(document.body).width() - $menu[0].offsetWidth / 2 - $target.offset().left - $target.width() / 2;
                $menu.css({
                    right: right
                })
            }).bind("mouseleave", function(e) {
                _menuShowing[index] = false;
                w.setTimeout(function() {
                    if (!_menuShowing[index]) {
                        $menu.hide();
                        ctx.fire("userMenuHide")
                    }
                }, 200)
            })
        }
        regUserCenterMenu("s_username_top", "s_user_name_menu", "s_username_top", "left", 1);
        regUserCenterMenu("s_user_name_menu", "s_user_name_menu", "s_username_top", "left", 1);
        if (!window._sp_async) {
            regUserCenterMenu("s_usersetting_top", "s_user_setting_menu", "s_usersetting_top", "right", 2);
            regUserCenterMenu("s_user_setting_menu", "s_user_setting_menu", "s_usersetting_top", "right", 2)
        }

        function loadJS(url, cs) {
            if (url) {
                var s = d.createElement("script");
                s.charset = cs ? cs : "gbk";
                s.src = url;
                d.getElementsByTagName("head")[0].appendChild(s)
            }
        }
        addEV(w, "load", function() {
            try {
                G("kw").focus()
            } catch (e) {}
        });
        w.onunload = function() {};
        var mapDom = G("s_mp");
        var logoArea;
        if (mapDom) {
            logoArea = mapDom.getElementsByTagName("area")[0]
        }
        var wordLink = G("lm") && G("lm").getElementsByTagName("a")[0];
        logoArea && $(logoArea).bind("click", function(e) {
            ctx.fire("psLogoClick", {
                isFesBg: s_session.userTips.skinLogoHasSkined ? "true" : "false"
            })
        });
        wordLink && $(wordLink).bind("click", function(e) {
            ctx.fire("psWorkLnkClick")
        })
    };
    exports.fire = function() {
        ctx.fire("hwInput", {
            clickType: "handWriteInput"
        })
    };

    function countStay() {
        var times = 0;
        var logInterval = setInterval(function() {
            if (window.s_session.index_off) {
                clearInterval(logInterval);
                return
            }
            ctx.fire("stayLog", {
                times: 10
            })
        }, 1e4)
    }
    var psforie6resize = function() {
        $("#s_pss_guide").css("width", document.body.clientWidth <= 958 ? "958px" : "100%")
    };

    function _noskinbind($k) {
        function emitFo() {
            $(this).addClass("nobg_s_fm_focus")
        }

        function emitBl() {
            $(this).removeClass("nobg_s_fm_focus")
        }

        function emitMv() {
            $(this).addClass("nobg_s_fm_hover")
        }

        function emitMu() {
            $(this).removeClass("nobg_s_fm_hover")
        }

        function suMd() {
            $(this).parent().addClass("s_btn_wr_h")
        }

        function suMu() {
            $(this).parent().removeClass("s_btn_wr_h")
        }
        return function($k, bind) {
            if (!bind) {
                $k.on("focus", emitFo).on("blur", emitBl).on("mouseover", emitMv).on("mouseout", emitMu);
                $("#su").on("mousedown", suMd).on("mouseout", suMu)
            } else {
                $k.unbind("focus", emitFo).unbind("blur", emitBl).unbind("mouseover", emitMv).unbind("mouseout", emitMu);
                $("#su").unbind("mousedown", suMd).unbind("mouseout", suMu)
            }
        }
    }
});
var isIE = navigator.userAgent.indexOf("MSIE") != -1 && !window.opera;

function G(id) {
    return document.getElementById(id)
}

function addEV(o, e, f) {
    if (window.attachEvent) {
        o.attachEvent("on" + e, f)
    } else if (window.addEventListener) {
        o.addEventListener(e, f, false)
    }
}
if ($.browser.ie <= 8) {
    $("#head").addClass("s-ie8-hack")
}
var bds = bds || {};
bds.se = bds.se || {};
bds.se.store = function() {
    var l = {},
        h = window,
        k = h.document,
        c = "localStorage",
        o = "globalStorage",
        d = "__storejs__",
        g;
    l.disabled = false;
    l.set = function(e, p) {};
    l.get = function(e) {};
    l.remove = function(e) {};
    l.clear = function() {};
    l.transact = function(e, r, p) {
        var q = l.get(e);
        if (p == null) {
            p = r;
            r = null
        }
        if (typeof q == "undefined") {
            q = r || {}
        }
        p(q);
        l.set(e, q)
    };
    l.getAll = function() {};
    l.serialize = function(e) {
        return String(e)
    };
    l.deserialize = function(e) {
        if (typeof e != "string") {
            return undefined
        }
        return e
    };

    function b() {
        try {
            return c in h && h[c]
        } catch (e) {
            return false
        }
    }

    function n() {
        try {
            return o in h && h[o] && h[o][h.location.hostname]
        } catch (e) {
            return false
        }
    }
    if (b()) {
        g = h[c];
        l.set = function(e, p) {
            if (p === undefined) {
                return l.remove(e)
            }
            g.setItem(e, l.serialize(p))
        };
        l.get = function(e) {
            return l.deserialize(g.getItem(e))
        };
        l.remove = function(e) {
            g.removeItem(e)
        };
        l.clear = function() {
            g.clear()
        };
        l.getAll = function() {
            var e = {};
            for (var q = 0; q < g.length; ++q) {
                var p = g.key(q);
                e[p] = l.get(p)
            }
            return e
        }
    } else {
        if (n()) {
            g = h[o][h.location.hostname];
            l.set = function(e, p) {
                if (p === undefined) {
                    return l.remove(e)
                }
                g[e] = l.serialize(p)
            };
            l.get = function(e) {
                return l.deserialize(g[e] && g[e].value)
            };
            l.remove = function(e) {
                delete g[e]
            };
            l.clear = function() {
                for (var e in g) {
                    delete g[e]
                }
            };
            l.getAll = function() {
                var e = {};
                for (var q = 0; q < g.length; ++q) {
                    var p = g.key(q);
                    e[p] = l.get(p)
                }
                return e
            }
        } else {
            if (k.documentElement.addBehavior) {
                var j, f;
                try {
                    f = new ActiveXObject("htmlfile");
                    f.open();
                    f.write(
                        '<script>document.w=window<\/script><iframe src="/favicon.ico"></iframe>');
                    f.close();
                    j = f.w.frames[0].document;
                    g = j.createElement("div")
                } catch (i) {
                    g = k.createElement("div");
                    j = k.body
                }

                function a(e) {
                    return function() {
                        var q = Array.prototype.slice.call(arguments, 0);
                        q.unshift(g);
                        j.appendChild(g);
                        g.addBehavior("#default#userData");
                        g.load(c);
                        var p = e.apply(l, q);
                        j.removeChild(g);
                        return p
                    }
                }

                function m(e) {
                    return "_" + e
                }
                l.set = a(function(q, e, p) {
                    e = m(e);
                    if (p === undefined) {
                        return l.remove(e)
                    }
                    q.setAttribute(e, l.serialize(
                        p));
                    q.save(c)
                });
                l.get = a(function(p, e) {
                    e = m(e);
                    return l.deserialize(p.getAttribute(e))
                });
                l.remove = a(function(p, e) {
                    e = m(e);
                    p.removeAttribute(e);
                    p.save(c)
                });
                l.clear = a(function(r) {
                    var p = r.XMLDocument.documentElement.attributes;
                    r.load(c);
                    for (var q = 0, e; e = p[q]; q++) {
                        r.removeAttribute(e.name)
                    }
                    r.save(c)
                });
                l.getAll = a(function(s) {
                    var p = s.XMLDocument.documentElement.attributes;
                    s.load(c);
                    var q = {};
                    for (var r = 0, e; e = p[r]; ++r) {
                        q[e] = l.get(e)
                    }
                    return q
                })
            }
        }
    }
    try {
        l.set(d, d);
        if (l.get(d) != d) {
            l.disabled = true
        }
        l.remove(d)
    } catch (i) {
        l.disabled = true
    }
    return l
}();
bds.se.sugStorage = function() {
    var suggestions, temp_sugs, options, SUGGESTION = "BDSUGSTORED",
        OPTIONS = "__OPTIONS__";
    var escapeData = function() {
        var reg = /['"\\\/\<\>\n\r]/g,
            escapeMap = {
                "'": "\\x27",
                '"': "\\x22",
                "\\": "\\\\",
                "/": "\\/",
                "\n": "\\\\n",
                "\r": "\\\\r",
                "<": "&lt;",
                ">": "&gt;"
            };
        var replacer = function(str) {
            return escapeMap[str] || str
        };
        return function(str) {
            return str.replace(reg, replacer)
        }
    }();
    var sug2Str = function() {
        return '{"q": "' + this.q + '", "p": "' + (this.p ? this.p : "") + '"}'
    };
    var opt2Str = function(option) {
        var arr = [];
        for (var k in option) {
            arr.push('"' + k + '": "' + option[k] + '"')
        }
        return "{" + arr.join(",") + "}"
    };
    var option = function(key, value) {
        if (value !== undefined) {
            options[key] = value;
            bds.se.store.set(OPTIONS, opt2Str(options));
            return value
        }
        return options[key] || ""
    };
    var isSupport = function() {
        return bds.se.store && !bds.se.store.disabled
    };
    var set = function(suggestion) {
        if (suggestion && suggestion.q && suggestion.p) {
            suggestion.toString = sug2Str;
            if (!(
                    temp_sugs[suggestion.q] && temp_sugs[suggestion.p])) {
                suggestions.push(suggestion)
            } else {
                for (var i = 0, f = 0; i < suggestions.length; i++) {
                    if (suggestion.q == suggestions[i].q && suggestion.p == suggestions[i].p) {
                        f = 1;
                        break
                    }
                }
                if (f === 0) suggestions.push(suggestion)
            }
            if (temp_sugs[suggestion.q] == undefined) {
                temp_sugs[suggestion.q] = [suggestion]
            } else {
                for (var j = 0, f = 0, len = temp_sugs[suggestion.q].length; j < len; j++) {
                    if (temp_sugs[suggestion.q][j].p == suggestion.p || temp_sugs[suggestion.q][j].q == suggestion.q) {
                        f = 1;
                        break
                    }
                }
                if (f === 0) temp_sugs[suggestion.q].push(suggestion)
            }
            if (temp_sugs[suggestion.p] == undefined) {
                temp_sugs[suggestion.p] = [suggestion]
            } else {
                for (var j = 0, f = 0, len = temp_sugs[suggestion.p].length; j < len; j++) {
                    if (temp_sugs[suggestion.p][j].q == suggestion.q) {
                        f = 1;
                        break
                    }
                }
                if (f === 0) temp_sugs[suggestion.p].push(suggestion)
            }
            bds.se.store.set(SUGGESTION, "[" + suggestions.join(",") + "]");
            return suggestions.length
        }
        return false
    };
    var get = function(str) {
        var arr = [];
        for (var k in temp_sugs) {
            if (new RegExp("^" + str, "img").test(k)) {
                arr = arr.concat(temp_sugs[k])
            }
        }
        return arr
    };
    var getAll = function(str) {
        return suggestions
    };
    var reset = function() {
        suggestions = [];
        temp_sugs = {};
        bds.se.store.set(SUGGESTION, "");
        return suggestions.length
    };
    var getCount = function() {
        return suggestions.length
    };
    var remove = function(sug) {
        if (!sug || !sug.q || !sug.p) return false;
        var suggestion;
        for (i = 0; i < suggestions.length; i++) {
            if (sug.q == suggestions[i].q && sug.p == suggestions[i].p) {
                suggestion = suggestions[i];
                suggestions.splice(i, 1);
                break
            }
        }
        if (suggestion === undefined) {
            return false
        } else {
            bds.se.store.set(SUGGESTION, "[" + suggestions.join(",") + "]");
            init();
            return suggestion
        }
    };
    var edit = function(sug) {
        if (remove(sug)) {
            return set({
                q: sug.q,
                p: sug.p
            })
        }
        return false
    };
    var pop = function() {
        var sug = suggestions[0];
        if (sug) {
            return remove({
                q: sug.q,
                p: sug.p
            })
        }
        return false
    };
    var init = function() {
        temp_sugs = {};
        var optionData = bds.se.store.get(OPTIONS);
        if (optionData) {
            options = new Function("return (" + optionData + ")")()
        } else {
            options = {}
        }
        var suggestionData = bds.se.store.get(SUGGESTION);
        if (
            !suggestionData) {
            suggestions = []
        } else {
            suggestions = new Function("return (" + suggestionData + ")")();
            for (var i = 0, l = suggestions.length; i < l; i++) {
                var suggestion = suggestions[i];
                suggestion.toString = sug2Str;
                if (temp_sugs[suggestion.q] == undefined) {
                    temp_sugs[suggestion.q] = [suggestion]
                } else {
                    for (var j = 0, f = 0, len = temp_sugs[suggestion.q].length; j < len; j++) {
                        if (temp_sugs[suggestion.q][j].p == suggestion.p || temp_sugs[suggestion.q][j].q == suggestion.q) {
                            f = 1;
                            break
                        }
                    }
                    if (f === 0) temp_sugs[suggestion.q].push(suggestion)
                }
                if (
                    temp_sugs[suggestion.p] == undefined) {
                    temp_sugs[suggestion.p] = [suggestion]
                } else {
                    for (var j = 0, f = 0, len = temp_sugs[suggestion.p].length; j < len; j++) {
                        if (temp_sugs[suggestion.p][j].q == suggestion.q) {
                            f = 1;
                            break
                        }
                    }
                    if (f === 0) temp_sugs[suggestion.p].push(suggestion)
                }
            }
        }
    };
    init();
    return {
        escapeData: escapeData,
        isSupport: isSupport,
        reset: reset,
        getCount: getCount,
        set: set,
        get: get,
        getAll: getAll,
        edit: edit,
        remove: remove,
        pop: pop,
        option: option
    }
}();
bds.se.sugsync = function() {
    var lenStorage;
    var rsv_sug1 = 0,
        rsv_sug3 = 0,
        rsv_sug4 = 0,
        rsv_temp_time = 0,
        rsv_temp_flag = false,
        rsv_timer = null;
    var isIE = /msie (\d+)/i.test(navigator.userAgent) && !window.opera ? parseInt(RegExp.$1) : 0;
    var isQuirk = document.compatMode == "BackCompat";

    function G(id) {
        return document.getElementById(id)
    }

    function C(tg) {
        return document.createElement(tg)
    }

    function trim(str) {
        return String(str).replace(new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g"), "")
    }

    function trimAS(str) {
        return String(str).replace(new RegExp("[\\s\\t\\xa0\\u3000]", "g"), "")
    }

    function addEvent(elem, type, handler) {
        if (isIE) {
            elem.attachEvent("on" + type, function(elm) {
                return function() {
                    handler.call(elm)
                }
            }(elem))
        } else {
            elem.addEventListener(type, handler, false)
        }
    }

    function stopDefault(e) {
        if (isIE) {
            e.returnValue = false
        } else {
            e.preventDefault()
        }
    }

    function addStyle(styleStr) {
        if (isIE) {
            var styleSheet = document.createStyleSheet();
            styleSheet.cssText = styleStr
        } else {
            var style = document.createElement("style");
            style.type = "text/css";
            style.appendChild(document.createTextNode(styleStr));
            document.getElementsByTagName("HEAD")[0].appendChild(style)
        }
    }

    function addTj(o) {
        var fm = document.forms[0];
        for (var i in o) {
            if (o[i] == undefined) {
                if (G("bdsug_ipt_" + i)) fm.removeChild(G("bdsug_ipt_" + i))
            } else {
                if (!_hasi(i)) {
                    fm.appendChild(CHI(i, o[i]))
                } else {
                    _hasi(i).value = o[i]
                }
            }
        }

        function CHI(n, v) {
            var elem = C("INPUT");
            elem.type = "hidden";
            elem.name = n;
            elem.id = "bdsug_ipt_" + n;
            elem.value = v;
            return elem
        }
    }

    function _hasi(s) {
        var fm = document.forms[0];
        var _i = false;
        var _iarr = fm.getElementsByTagName("INPUT");
        for (
            var i = 0; i < _iarr.length; i++) {
            if (s == _iarr[i].getAttribute("name")) {
                _i = _iarr[i];
                return _i
            } else {
                _i = false
            }
        }
    }

    function rmTj(o) {
        var fm = document.forms[0];
        for (var i in o) {
            if (i == "f") {
                if (_hasi("f")) {
                    if (_hasi("f").id == "bdsug_ipt_f") {
                        fm.removeChild(G("bdsug_ipt_f"))
                    } else {
                        _hasi("f").value = "8"
                    }
                }
            } else {
                if (G("bdsug_ipt_" + i)) fm.removeChild(G("bdsug_ipt_" + i))
            }
        }
    }
    var sugT = 0;
    if (typeof window.bdsug != "object" || window.bdsug == null) {
        window.bdsug = {}
    }
    bdsug.sug = {};
    bdsug.sugkeywatcher = {};
    var MessageDispatcher = function() {
        function addReceiver(msgType) {
            var queues = this.__MSG_QS__;
            if (!queues[msgType]) {
                queues[msgType] = []
            }
            for (var i = 1, n = arguments.length, r; i < n; i++) {
                queues[msgType].push(arguments[i])
            }
        }

        function dispatchMsg(msg) {
            var q = this.__MSG_QS__[msg.type];
            if (q == null) {
                return
            }
            for (var i = 0, n = q.length; i < n; i++) {
                q[i].rm(msg)
            }
        }
        return {
            ini: function(obj) {
                obj.__MSG_QS__ = {};
                obj.on = addReceiver;
                obj.dm = dispatchMsg;
                return obj
            }
        }
    }();
    var Inpt = function() {
        var ipt = G("kw");
        var div;
        var circleTimer = 0;
        var requestTimer = 0;
        var oldValue = "";
        var keyValue = "";
        var mouseOverValue;
        var isClkSdiv = false;
        var beforeStart = true;
        var rsv_sug;
        var btn = G("su");
        addEvent(btn, "mousedown", addInputTime);
        addEvent(btn, "keydown", addInputTime);
        addEvent(G("kw"), "paste", function() {
            addTj({
                rsv_n: 2
            });
            if (sugT == 0) {
                sugT = (new Date).getTime()
            }
        });

        function addInputTime() {
            addTj({
                inputT: sugT > 0 ? (new Date).getTime() - sugT : 0
            })
        }

        function mousedown() {
            if (beforeStart) {
                Inpt.dm({
                    type: "start"
                });
                beforeStart = false
            }
        }

        function keydown(e) {
            if (sugT == 0) {
                sugT = (new Date).getTime()
            }
            if (
                beforeStart) {
                Inpt.dm({
                    type: "start"
                });
                beforeStart = false
            }
            e = e || window.event;
            if (e.keyCode == 9 || e.keyCode == 27) {
                Inpt.dm({
                    type: "hide_div"
                })
            }
            if (e.keyCode == 13 && window.opera) {
                stopDefault(e);
                Inpt.dm({
                    type: "key_enter"
                })
            }
            if (e.keyCode == 86 && e.ctrlKey) {
                addTj({
                    rsv_n: 2
                })
            }
            if (div.style.display != "none") {
                if (e.keyCode == 38) {
                    stopDefault(e);
                    Inpt.dm({
                        type: "key_up"
                    })
                }
                if (e.keyCode == 40) {
                    Inpt.dm({
                        type: "key_down"
                    })
                }
            } else {
                if (e.keyCode == 38 || e.keyCode == 40) {
                    Inpt.dm({
                        type: "need_data",
                        wd: ipt.value
                    })
                }
            }
        }

        function circle() {
            var nowValue = ipt.value;
            if (nowValue == oldValue && nowValue != "" && nowValue != keyValue && nowValue != mouseOverValue) {
                if (requestTimer == 0) {
                    requestTimer = setTimeout(function() {
                        Inpt.dm({
                            type: "need_data",
                            wd: nowValue
                        })
                    }, 100)
                }
            } else {
                clearTimeout(requestTimer);
                requestTimer = 0;
                oldValue = nowValue;
                if (nowValue == "") {
                    Inpt.dm({
                        type: "hide_div"
                    })
                }
                if (keyValue != ipt.value) {
                    keyValue = ""
                }
            }
        }

        function circleStart() {
            if (!circleTimer) {
                circleTimer = setInterval(circle, 30)
            }
        }

        function circleStop() {
            clearInterval(circleTimer);
            circleTimer = 0
        }

        function stopMSinput() {
            if (isClkSdiv) {
                window.event.cancelBubble = true;
                window.event.returnValue = false;
                isClkSdiv = false
            }
        }

        function setAutocomplete(c) {
            ipt.blur();
            ipt.setAttribute("autocomplete", c);
            ipt.focus()
        }

        function stopSubmit(e) {
            var e = e || window.event;
            if (e.keyCode == 13) {
                stopDefault(e)
            }
        }
        ipt.setAttribute("autocomplete", "off");
        var keywatched = false;
        bdsug.sugkeywatcher.on = function() {
            if (!keywatched) {
                if (isIE) {
                    ipt.attachEvent("onkeydown", keydown)
                } else {
                    ipt.addEventListener("keydown", keydown, false)
                }
                keywatched = true
            }
        };
        bdsug.sugkeywatcher.off = function() {
            if (keywatched) {
                if (isIE) {
                    ipt.detachEvent("onkeydown", keydown)
                } else {
                    ipt.removeEventListener("keydown", keydown, false)
                }
                keywatched = false
            }
        };
        bdsug.sugkeywatcher.on();
        addEvent(ipt, "blur", circleStop);
        addEvent(ipt, "focus", circleStart);
        addEvent(ipt, "mousedown", mousedown);
        addEvent(ipt, "beforedeactivate", stopMSinput);
        if (window.opera) {
            addEvent(ipt, "keypress", stopSubmit)
        }
        return MessageDispatcher.ini({
            rm: function(evtObj) {
                switch (evtObj.type) {
                    case "div_ready":
                        div = evtObj.sdiv;
                        keyValue = ipt.value;
                        circleStart();
                        break;
                    case "clk_submit":
                        ipt.blur();
                        ipt.value = evtObj.wd;
                        break;
                    case "ent_submit":
                        circleStop();
                        ipt.blur();
                        break;
                    case "key_select":
                        mouseOverValue = evtObj.selected;
                        break;
                    case "close":
                        circleStop();
                        setAutocomplete("on");
                        break;
                    case "mousedown_tr":
                        if (navigator.userAgent.toLowerCase().indexOf("webkit") != -1) {
                            circleStop();
                            setTimeout(circleStart, 2e3)
                        }
                        isClkSdiv = true;
                        break
                }
            }
        })
    }();
    var Sdiv = function() {
        var div;
        var ipt = G("kw");
        var tb;
        var selected = -1;
        var dataArray;
        var dataObj;
        var oq;
        var ie6frm;

        function ct() {
            var trs = tb.rows;
            for (var i = 0; i < trs.length; i++) {
                trs[i].className = "ml"
            }
        }

        function getSelected() {
            if (typeof tb != "undefined" && tb != null && div.style.display != "none") {
                var trs = tb.rows;
                for (var i = 0; i < trs.length; i++) {
                    if (trs[i].className == "mo") return [i, trs[i].cells[0].innerHTML]
                }
            }
            return [-1, ""]
        }

        function hide() {
            if (isIE && isIE <= 6) {
                ie6frm && (ie6frm.style.display = "none")
            }
            div && (div.style.display = "none")
        }

        function mouseover() {
            ct();
            this.className = "mo"
        }

        function mousedown(e) {
            Sdiv.dm({
                type: "mousedown_tr"
            });
            if (!isIE) {
                e.stopPropagation();
                e.preventDefault();
                return false
            }
        }

        function click(i) {
            var j = i;
            return function() {
                var word = dataArray[j].value;
                hide();
                var id = 0;
                if (typeof dataArray[j].ala != "undefined") {
                    id = dataObj[dataArray[j].ala].id
                }
                Sdiv.dm({
                    type: "clk_submit",
                    oq: G("kw").value,
                    wd: word,
                    rsp: j,
                    rsv_sug5: id
                })
            }
        }

        function close(e) {
            e = e || window.event;
            stopDefault(e);
            Sdiv.dm({
                type: "close"
            });
            hide();
            (new Image).src = $.url.escapeSSL(
                "http://sclick.baidu.com/w.gif?fm=suggestion&title=%B9%D8%B1%D5&t=") + (new Date).getTime()
        }

        function resize() {
            var iptwh = [ipt.offsetWidth, ipt.offsetHeight];
            div.style.width = (isIE && isQuirk ? iptwh[0] : iptwh[0] - 2) + "px";
            div.style.top = (isIE && isQuirk ? iptwh[1] : iptwh[1] - 1) + "px";
            div.style.display = "block";
            if (isIE && isIE <= 6) {
                ie6frm.style.top = (isIE && isQuirk ? iptwh[1] : iptwh[1] - 1) + "px";
                ie6frm.style.width = (isIE && isQuirk ? iptwh[0] : iptwh[0] - 2) + "px"
            }
        }

        function setBold(q, str) {
            if (q && str) {
                var query = trim(q);
                if (str.indexOf(
                        query) == 0) {
                    str = boldSugText(str, query)
                } else if (str.indexOf(trimAS(q)) == 0) {
                    query = trimAS(q);
                    str = boldSugText(str, query)
                } else {
                    str = str.replace(/&/g, "&amp;");
                    str = str.replace(/</g, "&lt;");
                    str = str.replace(/>/g, "&gt;")
                }
            }
            return str
        }

        function boldSugText(text, key) {
            text = text.replace(/&/g, "&amp;");
            text = text.replace(/</g, "&lt;");
            text = text.replace(/>/g, "&gt;");
            key = key.replace(/&/g, "&amp;");
            key = key.replace(/</g, "&lt;");
            key = key.replace(/>/g, "&gt;");
            var str_begin = "<span>" + key + "</span>";
            var len = key.length;
            var str_end = "<b>" + text.substring(len) + "</b>";
            return str_begin + str_end
        }

        function changeData(data) {
            var word = G("kw").value,
                reg = /[^\x00-\xff]/g,
                dataArray = [],
                tempArray = [];
            lenStorage = 0;
            for (var i = 0; i < data.length; i++) {
                var temp = {};
                temp.value = data[i];
                temp.from = 0;
                dataArray.push(temp)
            }
            if (!bds.se.sugStorage.isSupport() || !navigator.cookieEnabled || !!/\bsugstore=(\d)/.exec(document.cookie) && /\bsugstore=(\d)/.exec(document.cookie)[1] == 0) {
                return dataArray
            } else {
                if (word.replace(reg, "mm").length <= 3) {
                    return dataArray
                } else {
                    for (var i = 0; i < data.length; i++) {
                        var temp = {};
                        temp.value = data[i];
                        temp.from = 0;
                        dataArray.push(temp)
                    }
                    var localData = bds.se.sugStorage.get(encodeURIComponent(word));
                    localData.sort(function(a, b) {
                        if (typeof a.date == "undefined" || typeof b.date == "undefined") {
                            return true
                        } else {
                            return a.date - b.date
                        }
                    });
                    for (i = 0; i < localData.length; i++) {
                        for (var j = i + 1; j < localData.length; j++) {
                            if (localData[i].q == localData[j].q) {
                                localData.splice(j, 1);
                                j--
                            }
                        }
                    }
                    for (i = localData.length - 1; i >= 0; i--) {
                        var temp = {};
                        temp.value = decodeURIComponent(localData[i].q);
                        temp.from = 1;
                        temp.p = localData[i].p;
                        tempArray.push(temp);
                        lenStorage++;
                        if (i == localData.length - 2) break
                    }
                    data = tempArray.concat(dataArray);
                    for (i = 0; i < data.length; i++) {
                        for (j = i + 1; j < data.length; j++) {
                            if (data[i].value == data[j].value) {
                                data.splice(j, 1);
                                j--
                            }
                        }
                    }
                    var alaData = [];
                    for (var i = 0; i < dataObj.length; i++) {
                        for (var j = 0; j < data.length; j++) {
                            if (dataObj[i].key == data[j].value) {
                                if (data[j].from == 1) {
                                    lenStorage--
                                }
                                data.splice(j, 1)
                            }
                        }
                        var temp = {};
                        temp.value = dataObj[i].key;
                        temp.from = 0;
                        temp.ala = i;
                        alaData.unshift(temp)
                    }
                    data = alaData.concat(data);
                    while (data.length > 10) {
                        data.pop()
                    }
                    return data
                }
            }
        }

        function draw() {
            function setTitle(obj) {
                if (!obj || !obj.title) return;
                setTimeout(function() {
                    obj.title = ""
                }, 2e3)
            }
            dataArray = changeData(dataArray);
            if (dataArray.length <= 0) {
                hide();
                return
            }
            tb = C("TABLE");
            tb.id = "st";
            tb.cellSpacing = 0;
            tb.cellPadding = 2;
            var tbd = C("tbody");
            tb.appendChild(tbd);
            for (var i = 0, l = dataArray.length; i < l; i++) {
                var tr = tbd.insertRow(-1);
                addEvent(tr, "mouseover", mouseover);
                addEvent(tr, "mouseout", ct);
                addEvent(tr, "mousedown", mousedown);
                addEvent(tr, "click", click(i));
                var td = tr.insertCell(-1);
                var str = setBold(oq, dataArray[i].value);
                if (dataArray[i].from == 1) {
                    str = '<u class="sug_del" title="如您不需要此搜索历史提示，&#13;可在右上角搜索设置中关闭">删除</u>' + str;
                    td.className = "sug_storage"
                }
                if (typeof dataArray[i].ala != "undefined") {
                    td.innerHTML = strAla(str, dataArray[i].ala);
                    td.className = "sug_ala"
                } else {
                    td.innerHTML = str
                }
            }
            div.innerHTML = "";
            div.appendChild(tb);
            resize();
            if (isIE && isIE <= 6) {
                ie6frm.style.display = "block";
                ie6frm.style.left = 0 + "px";
                ie6frm.style.top = ipt.offsetHeight + "px";
                ie6frm.style.width = ipt.offsetWidth + "px";
                ie6frm.style.height = div.offsetHeight - 1 + "px"
            }
            var u = div.getElementsByTagName("u");
            for (var i = 0; i < u.length; i++) {
                u[i].onclick = function(e) {
                    var selected = getSelected()[0];
                    var e = e || window.event;
                    var target = e.target || e.srcElement;
                    target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
                    if (isIE && isIE <= 6) {
                        ie6frm.style.height = div.offsetHeight - 1 + "px"
                    }
                    var img = window["BD_PS_C" + (new Date).getTime()] = new Image;
                    img.src = $.url.escapeSSL("http://sclick.baidu.com/w.gif?q=") + encodeURIComponent(dataArray[selected].value) + "&fm=beha&rsv_sug=del&rsv_sid=11&t=" + (new Date).getTime() + "&path=http://www.baidu.com";
                    bds.se.sugStorage.remove({
                        q: encodeURIComponent(dataArray[selected].value),
                        p: dataArray[selected].p
                    });
                    dataArray.splice(selected, 1);
                    Sdiv.dm({
                        type: "update_data",
                        word: G("kw").value,
                        data: dataArray
                    });
                    if (lenStorage > 0) lenStorage--;
                    if (
                        lenStorage <= 0 && dataArray.length == 0) {
                        hide();
                        div.innerHTML = ""
                    }
                    if (window.event) {
                        e.cancelBubble = true
                    } else {
                        e.stopPropagation()
                    }
                }
            }
            addTj({
                rsv_sug: lenStorage
            })
        }

        function strAla(str, n) {
            var html = [];
            switch (dataObj[n].type) {
                case "1":
                    html.push("<h3>" + dataObj[n].key + "</h3>");
                    html.push("<p>" + dataObj[n].word);
                    if (dataObj[n].word_add) {
                        html.push(" <span>（" + dataObj[n].word_add + "）</span>")
                    }
                    html.push("</p>");
                    break;
                case "2":
                    html.push("<h3>" + dataObj[n].key + " - 百度安全认证</h3>");
                    html.push("<p>" + dataObj[n].word);
                    if (
                        dataObj[n].word_add) {
                        html.push(" <span>（" + dataObj[n].word_add + "）</span>")
                    }
                    html.push("</p>");
                    break;
                default:
                    html.push(str)
            }
            return html.join("")
        }

        function enter() {
            selected = getSelected()[0];
            if (selected == -1) {
                Sdiv.dm({
                    type: "submit"
                })
            } else {
                Sdiv.dm({
                    type: "ent_submit",
                    oq: oq,
                    wd: getSelected()[1],
                    rsp: selected
                })
            }
        }

        function keyup() {
            selected = getSelected()[0];
            ct();
            if (selected == 0) {
                Sdiv.dm({
                    type: "key_select",
                    selected: ""
                });
                G("kw").value = oq;
                selected--;
                rmTj({
                    oq: oq,
                    sug: dataArray[selected],
                    rsv_n: 1,
                    rsp: selected,
                    f: 3,
                    rsv_sug: rsv_sug,
                    rsv_sug5: 0
                })
            } else {
                if (selected == -1) selected = dataArray.length;
                selected--;
                var tr = tb.rows[selected];
                tr.className = "mo";
                Sdiv.dm({
                    type: "key_select",
                    selected: dataArray[selected].value
                });
                G("kw").value = dataArray[selected].value;
                var id = 0;
                if (typeof dataArray[selected].ala != "undefined") {
                    id = dataObj[dataArray[selected].ala].id
                }
                addTj({
                    oq: oq,
                    sug: dataArray[selected].value,
                    rsv_n: 1,
                    rsp: selected,
                    f: 3,
                    rsv_sug: rsv_sug
                })
            }
        }

        function keydown() {
            selected = getSelected()[0];
            ct();
            if (selected == dataArray.length - 1) {
                Sdiv.dm({
                    type: "key_select",
                    selected: ""
                });
                G("kw").value = oq;
                selected = -1;
                rmTj({
                    oq: oq,
                    sug: dataArray[selected],
                    rsv_n: 1,
                    rsp: selected,
                    f: 3,
                    rsv_sug: rsv_sug,
                    rsv_sug5: 0
                })
            } else {
                selected++;
                var tr = tb.rows[selected];
                tr.className = "mo";
                Sdiv.dm({
                    type: "key_select",
                    selected: dataArray[selected].value
                });
                G("kw").value = dataArray[selected].value;
                var id = 0;
                if (typeof dataArray[selected].ala != "undefined") {
                    id = dataObj[dataArray[selected].ala].id
                }
                addTj({
                    oq: oq,
                    sug: dataArray[selected].value,
                    rsv_n: 1,
                    rsp: selected,
                    f: 3,
                    rsv_sug: rsv_sug,
                    rsv_sug5: id
                })
            }
        }
        return MessageDispatcher.ini({
            rm: function(evtObj) {
                switch (evtObj.type) {
                    case "div_ready":
                        div = evtObj.sdiv;
                        ie6frm = evtObj.frm;
                        break;
                    case "give_data":
                        oq = evtObj.data.q;
                        dataArray = evtObj.data.s;
                        var dataObjTemp = evtObj.data.z || [];
                        dataObj = [];
                        for (var i = 0; i < dataObjTemp.length; i++) {
                            var d = dataObjTemp[i];
                            if (d["type"] == 1 || d["type"] == 2) {
                                dataObj.push(dataObjTemp[i])
                            }
                        }
                        rsv_sug = evtObj.data.t;
                        if (div) {
                            draw()
                        };
                        break;
                    case "key_enter":
                        enter();
                        break;
                    case "key_up":
                        keyup();
                        break;
                    case "key_down":
                        keydown();
                        break;
                    case "hide_div":
                        hide();
                        break;
                    case "mousedown_other":
                        hide();
                        break;
                    case "window_blur":
                        hide();
                        break;
                    case "need_resize":
                        resize();
                        break
                }
            }
        })
    }();
    var Form0 = function() {
        var fm = document.forms[0];

        function resetform() {
            if (G("bdsug_ipt_sug")) {
                if (G("bdsug_ipt_sug").value == trim(G("kw").value)) {
                    rmTj({
                        rsv_n: 1,
                        sug: 1
                    })
                } else {
                    rmTj({
                        f: 1
                    })
                }
            }
        }
        addEvent(fm, "submit", resetform);

        function submit() {
            resetform();
            addTj({
                inputT: sugT > 0 ? (new Date).getTime() - sugT : 0
            });
            fm.onsubmit();
            fm.submit()
        }

        function submitTj(o) {
            addTj(o);
            addTj({
                inputT: sugT > 0 ? (new Date).getTime() - sugT : 0
            });
            rmTj({
                sug: 1,
                rsv_n: 1
            });
            fm.onsubmit();
            fm.submit()
        }
        return MessageDispatcher.ini({
            rm: function(evtObj) {
                switch (evtObj.type) {
                    case "clk_submit":
                        submitTj({
                            oq: evtObj.oq,
                            rsp: evtObj.rsp,
                            f: 3,
                            rsv_sug: lenStorage,
                            rsv_sug2: 1,
                            rsv_sug5: evtObj.rsv_sug5
                        });
                        break;
                    case "ent_submit":
                        submitTj({
                            oq: evtObj.oq,
                            rsp: evtObj.rsp,
                            f: 3,
                            rsv_sug: lenStorage,
                            rsv_sug2: 0
                        });
                        break;
                    case "submit":
                        submit();
                        break
                }
            }
        })
    }();
    var Data = function() {
        var dataObj = {};

        function processData(word) {
            if (
                typeof dataObj[word] == "undefined") {
                Data.dm({
                    type: "request_data",
                    wd: word
                })
            } else {
                Data.dm({
                    type: "give_data",
                    data: dataObj[word]
                })
            }
        }

        function addData(d) {
            dataObj[d.q] = d;
            Data.dm({
                type: "give_data",
                data: dataObj[d.q]
            })
        }

        function updateData(word, data) {
            if (typeof dataObj[word] != "undefined") {
                if (data.length > 0) {
                    var temp = [];
                    for (var i = 0; i < data.length; i++) {
                        temp.push(data[i].value)
                    }
                    dataObj[word].s = temp;
                    Data.dm({
                        type: "give_data",
                        data: dataObj[word]
                    })
                }
            }
        }
        return MessageDispatcher.ini({
            rm: function(eventObj) {
                switch (
                    eventObj.type) {
                    case "response_data":
                        addData(eventObj.data);
                        break;
                    case "need_data":
                        processData(eventObj.wd);
                        break;
                    case "update_data":
                        updateData(eventObj.word, eventObj.data);
                        break
                }
            }
        })
    }();
    var Request = function() {
        var dataElm;
        var cookieSwitch;

        function getDataScript(wd) {
            var requestUrl = $.url.escapeSSL("http://suggestion.baidu.com/su");
            Request.dm({
                type: "need_cookie"
            });
            if (dataElm) document.body.removeChild(dataElm);
            dataElm = C("SCRIPT");
            dataElm.src = requestUrl + "?wd=" + encodeURIComponent(wd) + "&p=" + cookieSwitch + "&cb=window.bdsug.sug&from=superpage" + "&t=" + (new Date).getTime();
            dataElm.charset = "gb2312";
            document.body.appendChild(dataElm);
            addTj({
                rsv_sug3: ++rsv_sug3
            });
            rsv_temp_time = (new Date).getTime();
            rsv_temp_flag = false;
            rsv_timer = setTimeout(function() {
                addTj({
                    rsv_sug4: rsv_sug4 += 5e3
                });
                rsv_temp_flag = true
            }, 5e3);
            if (!window._LogSearchBoxChanged) {
                F.use("ps/sug", function(s) {
                    s.searchLog()
                });
                window._LogSearchBoxChanged = true
            }
        }
        return MessageDispatcher.ini({
            rm: function(evtObj) {
                switch (evtObj.type) {
                    case "request_data":
                        getDataScript(evtObj.wd);
                        break;
                    case "give_cookie":
                        var _sug = evtObj.sug;
                        if (_sug > 0) {
                            _sug = 3
                        };
                        cookieSwitch = _sug;
                        break
                }
            }
        })
    }();
    bdsug.sug = function(dataObj) {
        bdsug.dm({
            type: "response_data",
            data: dataObj
        });
        if (!rsv_temp_flag) {
            var ipt = G("kw");
            if (ipt.value.toLowerCase() == dataObj.q) {
                addTj({
                    rsv_sug1: ++rsv_sug1
                })
            }
            clearTimeout(rsv_timer);
            addTj({
                rsv_sug4: rsv_sug4 += (new Date).getTime() - rsv_temp_time
            })
        }
    };
    bdsug.initSug = function() {
        bdsug.dm({
            type: "init"
        })
    };
    MessageDispatcher.ini(bdsug);
    var Cookie = function() {
        function close() {
            if (navigator.cookieEnabled) {
                document.cookie = "su=0; domain=www.baidu.com"
            }
        }

        function getSug() {
            var p = navigator.cookieEnabled && /sug=(\d)/.test(document.cookie) ? RegExp.$1 : 3;
            Cookie.dm({
                type: "give_cookie",
                sug: p
            })
        }
        return MessageDispatcher.ini({
            rm: function(evtObj) {
                switch (evtObj.type) {
                    case "close":
                        close();
                        break;
                    case "need_cookie":
                        getSug();
                        break
                }
            }
        })
    }();
    var GlobalCtrl = function() {
        var ipt = G("kw");
        var div;
        var fm = document.forms[0];
        var ie6iframe;

        function listenZoom() {
            if (
                div.offsetWidth != 0 && ipt.offsetWidth != div.offsetWidth) {
                GlobalCtrl.dm({
                    type: "need_resize"
                })
            }
        }

        function createDiv() {
            div = C("DIV");
            div.id = "sd_" + (new Date).getTime();
            div.className = "s-ps-sug";
            div.style.display = "none";
            fm.appendChild(div);
            if (isIE && isIE <= 6) {
                ie6iframe = C("IFRAME");
                ie6iframe.style.display = "none";
                ie6iframe.style.position = "absolute";
                div.parentNode.insertBefore(ie6iframe, div)
            }
        }

        function docMouseDown(e) {
            e = e || window.event;
            var elm = e.target || e.srcElement;
            if (elm == ipt) return;
            while (elm = elm.parentNode) {
                if (elm == div) {
                    return
                }
            }
            GlobalCtrl.dm({
                type: "mousedown_other"
            })
        }

        function windowBlur() {
            GlobalCtrl.dm({
                type: "window_blur"
            })
        }

        function initi() {
            var dI = "#" + div.id;
            var cssBuf = [];
            GlobalCtrl.dm({
                type: "div_ready",
                sdiv: div,
                frm: ie6iframe
            });
            setInterval(listenZoom, 100);
            addEvent(document, "mousedown", docMouseDown);
            addEvent(window, "blur", windowBlur);
            cssBuf.push(dI + "{border:1px solid #817F82;position:absolute;top:32px;left:0}");
            cssBuf.push(dI + " table{width:100%;background:#fff;cursor:default}");
            cssBuf.push(
                dI + " td{color:#000;font:14px arial;height:25px;line-height:25px;padding:0 8px}");
            cssBuf.push(dI + " td b{color:#000}");
            cssBuf.push(dI + " .mo{background:#ebebeb}");
            cssBuf.push(dI + " .ml{background:#fff}");
            cssBuf.push(dI + " td.sug_storage{color:#7A77C8}");
            cssBuf.push(dI + " td.sug_storage b{color:#7A77C8}");
            cssBuf.push(dI + " .sug_del{font-size:12px;color:#666;text-decoration:underline;float:right;cursor:pointer;display:none}");
            cssBuf.push(
                dI + " .sug_del{font-size:12px;color:#666;text-decoration:underline;float:right;cursor:pointer;display:none}");
            cssBuf.push(dI + " .mo .sug_del{display:block}");
            cssBuf.push(dI + " .sug_ala{border-bottom:1px solid #e6e6e6}");
            cssBuf.push(dI + " td h3{line-height:14px;margin:6px 0 4px 0;font-size:12px;font-weight:normal;color:#7B7B7B;padding-left:20px;background:url(img/sug_bd.png) no-repeat left center}");
            cssBuf.push(dI + " td p{font-size:14px;font-weight:bold;padding-left:20px}");
            cssBuf.push(
                dI + " td p span{font-size:12px;font-weight:normal;color:#7B7B7B}");
            addStyle(cssBuf.join(""))
        }
        bdsug.sug.initial = initi;
        return MessageDispatcher.ini({
            rm: function(evtObj) {
                switch (evtObj.type) {
                    case "start":
                        initi();
                        break;
                    case "init":
                        createDiv();
                        break
                }
            }
        })
    }();
    Inpt.on("need_data", Data);
    Inpt.on("close_div", Sdiv);
    Inpt.on("key_enter", Sdiv);
    Inpt.on("key_up", Sdiv);
    Inpt.on("key_down", Sdiv);
    Inpt.on("hide_div", Sdiv);
    Inpt.on("start", GlobalCtrl);
    Data.on("request_data", Request);
    Data.on("give_data", Sdiv);
    bdsug.on(
        "response_data", Data);
    bdsug.on("init", GlobalCtrl);
    Sdiv.on("update_data", Data);
    Sdiv.on("clk_submit", Inpt, Form0);
    Sdiv.on("ent_submit", Inpt, Form0);
    Sdiv.on("submit", Form0);
    Sdiv.on("key_select", Inpt);
    Sdiv.on("close", Inpt, Cookie);
    Sdiv.on("mousedown_tr", Inpt);
    GlobalCtrl.on("mousedown_other", Sdiv);
    GlobalCtrl.on("need_resize", Sdiv);
    GlobalCtrl.on("div_ready", Inpt, Sdiv);
    GlobalCtrl.on("window_blur", Sdiv);
    Request.on("need_cookie", Cookie);
    Cookie.on("give_cookie", Request)
};
F.module("ps/sug", function(require,
    exports, ctx) {
    exports.init = function() {
        bds.se.sugsync();
        window.bdsug.initSug()
    };
    exports.pssubmit = function() {
        var S = ctx.base;
        var satag = s_session.userTips["isNewTabSearch"];
        if (!satag) {
            var _player = window.baidu && baidu.packPlayer;
            if (_player && s_session.yuce && s_session.yuce != "1") {
                if (_player.getState() == "play") {
                    satag = true;
                    $("#form")[0].target = "_blank"
                } else {
                    satag = false;
                    $("#form")[0].target = "_self"
                }
            }
        }
        if (satag && $("#kw")[0] && (s_session.searchLogSend == 0 || $("#form").attr("target") == "_blank")) {
            setTimeout(
                function() {
                    if (s_session.sid.indexOf("12783") > -1) {
                        $("#kw").attr("data-bfocus", 1).val("")
                    } else {
                        $("#kw").triggerHandler("focus");
                        $("#kw").select()
                    }
                }, 1);
            if (s_session.sid.indexOf("12783") > -1) {} else if ($.browser.firefox) {
                $("#kw").select()
            }
            setTimeout(function() {
                ctx.use("page/info", function(page) {
                    var info = page.getInfo(),
                        mode = "focus";
                    if (info && info.isFocus) {
                        mode = "blur"
                    }
                    s_session.searchLogSend = 1;
                    ctx.fire("searchBtnClick", {
                        opType: "click",
                        openMode: "new" + mode,
                        wd: encodeURIComponent($("#kw").val())
                    })
                })
            }, 100)
        } else if (s_session.searchLogSend == 0 || $("#form").attr("target") == "_blank") {
            s_session.searchLogSend = 1;
            ctx.fire("searchBtnClick", {
                opType: "click",
                openMode: "current",
                wd: encodeURIComponent($("#kw").val())
            })
        }
        $("#bd_fm_search_tip").hide()
    };
    exports.searchLog = function() {
        ctx.fire("queryChange", {
            opType: "querychange",
            wd: encodeURIComponent($("#kw").val())
        })
    }
});
$(window).on("load", function() {
    if ($.browser.chrome >= 39) {
        return
    }
    var divDom = '<div id="_FP_userDataDiv" style="behavior:url(#default#userdata);width:0px;height:0px;position:absolute;top:-10000px;left:-10000px"></div><div id="_FP_comDiv" style="behavior:url(#default#clientCaps);width:0px;height:0px;position:absolute;top:-10000px;left:-10000px"></div>';
    $("body").append(divDom);
    var libjsUrl = "//www.baidu.com/cache/fpid/lib_1_0.js";
    var ieLibUrl = "//www.baidu.com/cache/fpid/ielib_1_1.js";
    var otherLibUrl = "//www.baidu.com/cache/fpid/chromelib_1_1.js";
    var curTitle = document.title;
    var config = {
        flashDomId: "_FP_userDataDiv",
        flashUrl: "",
        comDomId: "_FP_comDiv",
        IEStoreDomId: "_FP_userDataDiv"
    };
    var ua = navigator.userAgent.toLowerCase();
    var isIE = false;
    if (ua.indexOf("msie") >= 0 || new RegExp("trident(.*)rv.(\\d+)\\.(\\d+)").test(ua)) {
        isIE = true
    }
    var callback = function(arr) {
        if (isIE) {
            window.setTimeout(function() {
                document.title = curTitle
            }, 0)
        }
        window._FPID_CACHE = arr;
        $("#_FP_userDataDiv").remove();
        $(
            "#_FP_comDiv").remove();
        var qid = s_session.seqId;
        var img_key = "_WWW_BR_API_" + (new Date).getTime();
        var send_img = window[img_key] = new Image;
        send_img.onload = function() {
            window[img_key] = null
        };
        var baiduId = $.cookie.get("BAIDUID");
        var baseUrl = $.url.escapeSSL("http://eclick.baidu.com/ps_fp.htm?");
        var sendUrl = baseUrl + "pid=superman&fp=" + arr.data.fp + "&im=" + arr.data.im + "&wf=" + arr.data.wf + "&br=" + arr.data.br + "&qid=" + qid + "&bi=" + baiduId;
        send_img.src = sendUrl
    };
    if (isIE) {
        $.getScript(libjsUrl, function() {
            fpLib.getFp(
                callback, config)
        })
    } else {
        $.getScript(otherLibUrl, function() {
            fpLib.getFp(callback, config)
        })
    }
});
$(document).ready(function() {
    var isNewTopMenu = bds.comm && bds.comm.newTopMenu === 1;
    window._load_status = "dom_ready";
    (function() {
        if (Math.random() * 100 < 1 && $.browser.edge) {
            window.testedge = function(fn) {
                var health;
                if (/testedge=1/i.test(fn.toString())) {
                    try {
                        window.localStorage.setItem("_super_edgehealth", "good")
                    } catch (e) {}
                    health = "1"
                } else {
                    health = "0"
                }
                var imgLog = function(src) {
                    var n = "imglog__" + (new Date).getTime();
                    var c = window[n] = new Image;
                    c.onload = c.onerror = function() {
                        window[n] = null
                    };
                    c.src = src;
                    c = null
                };
                var src = "http://dj0.baidu.com/v.gif?pid=315&type=2011&portrait=" + s_session.portrait + "&logactid=9000500000&health=" + health + "&t=" + +new Date;
                imgLog($.url.escapeSSL(src))
            };
            $.loadJs($.url.escapeSSL("http://ss.bdimg.com/cdn/testedge.js"))
        }
    })();
    if ($.browser.chrome && $.browser.chrome === 37) {
        if (window.navigator.appVersion.indexOf("Windows NT 6.1") > -1) {
            $("#kw").css({
                "font-family": "Microsoft Yahei,STHeiti"
            })
        }
    }
    F.use("superman:ps/sindex", function(s) {
        s.init();
        var opt = {};
        opt.baseParams = {
            ct: 2,
            logFrom: "feed_index",
            logInfo: "item",
            qid: s_session.seqId,
            sid: s_session.sid,
            ssid: s_session.portrait,
            logid: s_session.logId || "0",
            _r: Math.random()
        };
        window.Thunder.get(opt)
    });
    if (typeof window._sp_async === "undefined") {
        F.use("superman:ps/sug", function(s) {
            s.init()
        })
    }
    F.use("superman:ps/log", function(psLog) {
        if (isNewTopMenu) {
            psLog.bindBox("s-top-left");
            psLog.bindBox("s-user-name-menu");
            psLog.bindBox("virus-2020")
        } else {
            psLog.bindBox("nv");
            psLog.bindBox("u_sp");
            psLog.bindBox("s_user_name_menu")
        }
        psLog.bindBox(
            "bottom_container");
        $("#s_pss_exit")[0] && psLog.bindBox("s_pss_exit")
    });
    if ($("#toipad")[0]) {
        F.use("superman:page/toipad", function(s) {
            s.init()
        })
    }
    F.call("superman:common/image_lazy_load", "init");
    F.call("superman:lib/carditem_log", "init");
    (function() {
        var LEAST = "maybe";
        var supportedTypes = [];
        var testAudio = function() {
            var elem = document.createElement("audio");
            var bool = false;
            try {
                bool = !!elem.canPlayType;
                if (bool) {
                    bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "");
                    bool.mp3 = elem.canPlayType("audio/mpeg;").replace(/^no$/, "");
                    bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "");
                    bool.m4a = (elem.canPlayType("audio/x-m4a;") || elem.canPlayType("audio/aac;")).replace(/^no$/, "")
                }
            } catch (e) {}
            return bool
        };
        var supportedTypesHandle = function() {
            var audio = testAudio();
            if (!audio) {
                return
            }
            for (var k in audio) {
                if (audio.hasOwnProperty(k) && audio[k] >= LEAST) {
                    supportedTypes.push(k)
                }
            }
        };
        try {
            supportedTypesHandle();
            window.s_session.audioModernizr = !!supportedTypes.length
        } catch (e) {
            window.s_session.audioModernizr = false
        }
    })();
    if (_manCard.asynJs.length > 0) {
        $.each(_manCard.asynJs, function(i, e) {
            setTimeout(function() {
                $.loadJs($("#" + e).attr("data-src"))
            }, 1)
        })
    }
    _manCard.asynLoad = function(id) {
        $.loadJs($("#" + id).attr("data-src"))
    };
    $(window).bind("load", function() {
        window._load_status = "window_load";
        if (s_session.index_off) {
            return
        }
        F.call("superman:page/scroll", "init");
        window._load_status = "fully_load";
        _initTopMenu();
        if (!s_session.isLogin) {
            if (bds.comm.newNav === 1) {
                F.call(
                    "superman:components/nav", "init")
            }
            return
        }
        F.call("superman:mt/mt_show", "init");
        F.call("superman:page/page_exp", "init");
        _initLoadModel();
        _initSkin();
        _initIndexGuide();
        setTimeout(function() {
            var elem = $("script[data-onload],#tipsplus-js");
            elem.each(function() {
                var that = $(this);
                var src = that.attr("data-src");
                if (src) {
                    that.attr("src", src)
                }
            })
        }, 1)
    });
    if (!s_session.isLogin) {
        return
    }

    function _initSkin() {
        F.call("superman:start/skin_start", "init", false)
    }

    function _initTopMenu() {
        if (bds.comm && bds.comm.newTopMenu === 1) {
            F.call("superman:mngr/menu_user", "init");
            F.call("superman:mngr/menu_common", "init");
            F.call("superman:mngr/top_menunav_new", "init");
            F.call("superman:components/qrcode", "init")
        } else {
            F.call("superman:mngr/top_menu", "init");
            F.call("superman:mngr/top_menunav", "init")
        }
    }

    function _initLoadModel() {
        var _dom = $("#s_mod_weather");
        var willShow = false;
        var isLoading = false;
        var lastResult;
        _dom.on("mouseenter", mouseEnterHandler);
        _dom.on("mouseleave", mouseLeaveHander);

        function mouseLeaveHander() {
            if (willShow) {
                willShow = false
            }
        }

        function mouseEnterHandler() {
            if (isLoading) {
                return
            }
            willShow = true;
            isLoading = true;
            var cityName = $(".city-wather .show-city-name").attr("data-key");
            if (lastResult) {
                handleResult(lastResult)
            } else {
                $.ajaxget(s_domain.baseuri + "/other/data/weatherInfo?city=" + encodeURI(cityName), handleResult)
            }
        }

        function handleResult(result) {
            if (!willShow) {
                isLoading = false;
                lastResult = result;
                return
            }
            _dom.off("mouseenter", mouseEnterHandler);
            _dom.off("mouseleave", mouseLeaveHander);
            if (+result.errNo === 0 && result.data) {
                if (result.data.weather) {
                    F.use("superman:weather/weather_tpl", function(w_tpl) {
                        w_tpl.init(result.data.weather)
                    });
                    F.use("weather/weather_ctrl", function(ww) {
                        ww.bindEvents(result.data.weather)
                    })
                }
            }
        }
    }
    if ($.isIE6) {
        $(window).bind("resize load", function(e) {
            $("#bottom_container").toggleClass("xxx4ielw");
            $(document.body).toggleClass("rs4ie")
        })
    }
    if ($.browser.opera) {
        $(document.body).css("minHeight", "100px")
    }
    if (+$.browser.ie === 6 || +$.browser.ie === 7) {
        $("span[data-tid=7999]").remove()
    }
    F.fire("superman:page",
        "runCssDetect");
    if (location.href.indexOf("frm=resultPage") > -1 && location.href.indexOf("showType=showSkin") > -1) {
        window.location.hash = "#";
        F.use("skin/skin_init", function(skin_init) {
            skin_init.init()
        })
    }

    function _initIndexGuide() {
        $("#s_menu_mine").on("click", function() {
            $("#s_xmancard_nav .s-nav-wrapper .nav-tips").remove();
            F.use("superman:common/user_attr", function(userAttr) {
                userAttr.setAttr("supermanNavGuide", "off")
            })
        })
    }
    if (s_session.isFesLogo) {
        $("#s_mp area").on("mousedown", function(e) {
            ns_c({
                fm: "tab",
                tab: "felogo",
                rsv_platform: "newhome",
                rsv_skin: $("#head").hasClass("s-skin-hasbg") ? "1" : "0"
            })
        })
    }
    if (s_session.isHaveWrodLink) {
        $("#lm a").on("mousedown", function(e) {
            var $this = $(this);
            ns_c && ns_c({
                fm: "behs",
                tab: "bdlink",
                p1: $this.index() + 1,
                title: $this.text(),
                url: $this.attr("href"),
                rsv_platform: "newhome",
                rsv_skin: $("#head").hasClass("s-skin-hasbg") ? "1" : "0"
            })
        })
    }
});
F.module("page/info", function(require, exports, ctx) {
    var S = ctx.base,
        _info = {
            isFocus: true
        };
    $(window).on("focus", function() {
        _info.isFocus = true
    });
    $(window).on("blur", function() {
        _info.isFocus = false
    });
    exports.getInfo = function() {
        return _info
    }
});
F.module("superman:page/scroll", function(require, exports, ctx) {
    var tWrap = $("#s_top_wrap");
    var hWrap = $("#head_wrapper");
    var tabWrap = $("#s_ctner_menus");
    var kwWrap = s_session.isLogin ? $("#s_kw_wrap") : $("#kw");
    var sFormWrapper = $("#s_form_wrapper");
    var u1 = $("#u1");
    var sWrap = $("#s_wrap");
    var upMenu = $("#u_sp");
    var s_fm = document.getElementById("s_fm");
    var isIE7 = $.isIE === 7 ? true : false;
    var isIE6 = $.isIE === 6 ? true : false;
    var newSearchBox = bds.comm.newSearchBox;

    function init() {
        _bindEvent();
        bds.comm.ubsurl = $.url.escapeSSL("http://sclick.baidu.com/w.gif");
        if ($.isIE == 6) {
            document.execCommand("BackgroundImageCache", false, true)
        }
    }

    function handleSDown() {
        sWrap.css({
            "padding-top": hWrap.outerHeight(true)
        });
        tWrap.addClass("s-down");
        sWrap.addClass("s-down");
        hWrap.addClass("s-down");
        u1.addClass("s-down");
        if (newSearchBox) {
            sFormWrapper.addClass("c-wrapper c-wrapper-l")
        }
    }

    function handleUnSDown() {
        sWrap.css({
            "padding-top": 0
        });
        tWrap.removeClass("s-down");
        sWrap.removeClass("s-down");
        hWrap.removeClass("s-down");
        u1.removeClass("s-down");
        if (newSearchBox) {
            sFormWrapper.removeClass("c-wrapper c-wrapper-l")
        }
        tabWrap.css({
            left: 0
        })
    }
    var _roller = {
        overBound: false,
        topFy: function(left, top) {
            if (isIE6) {
                return
            }
            var _ctx = this;
            if (!_ctx.overBound) {
                _ctx.overBound = true;
                handleSDown();
                ctx.fire("outMenu", {
                    out: true
                });
                if (isIE7) {
                    s_fm.style.zoom = 0
                }
                $(window).bind("resize", _ctx.follow)
            }
            if (left >= 0) {
                tabWrap.css({
                    left: -1 * left
                })
            }
            _ctx.follow(true)
        },
        unTopFy: function(left, top) {
            if (isIE6) {
                return
            }
            var _ctx = this;
            if (
                _ctx.overBound) {
                _ctx.overBound = false;
                handleUnSDown();
                ctx.fire("outMenu", {
                    out: false
                });
                if (isIE7) {
                    setTimeout(function() {
                        s_fm.style.zoom = 1
                    }, 30)
                }
                _ctx.follow();
                $(window).unbind("resize", _ctx.follow)
            }
            tWrap.css({
                left: 0
            })
        },
        ieFix: function(top) {
            var skinLayer = $("#s_skin_layer");
            if (parseInt(skinLayer.css("top"), 10) >= 0) {
                skinLayer.css({
                    top: top
                })
            }
        },
        follow: function(start) {
            if (newSearchBox) {
                return
            }
            if (start) {
                hWrap.css({
                    left: tWrap.width() / 2 - $(window).scrollLeft()
                })
            } else {
                hWrap.css({
                    left: ""
                })
            }
        },
        upMenuFollow: function() {
            upMenu.css({
                position: "fixed",
                right: $(window).width() - tWrap.width() + $(window).scrollLeft()
            })
        },
        miniFy: function(free) {
            var miniBound = 1280;
            if ($(window).width() > miniBound || free === true) {
                $(s_fm).removeClass("minisize")
            } else {
                $(s_fm).addClass("minisize")
            }
        },
        initAdjust: function() {
            $(window).on("beforeunload", function() {
                _roller.unTopFy(0, 0);
                window.scrollTo(0, 0)
            })
        }
    };

    function _bindEvent() {
        var kwTop = kwWrap.offset().top;
        _roller.initAdjust();
        $(window).on("scroll", function(e) {
            var top = $(this).scrollTop();
            var left = $(this).scrollLeft();
            if (hWrap.hasClass("s-ps-islite")) {
                return
            }
            if (!s_session.isLogin) {
                return
            }
            if (top >= kwTop - 18) {
                _roller.topFy(left, top)
            } else {
                _roller.unTopFy(left, top)
            }
            if (isIE7) {
                if (top == 0) {
                    setTimeout(function() {
                        upMenu[0].style.zoom = 1
                    }, 200)
                } else {
                    upMenu[0].style.zoom = 0
                }
            }
        });
        if ($.isIE !== 6) {
            $(window).on("resize", function() {
                tWrap.css({
                    left: -1 * $(window).scrollLeft()
                })
            })
        }
    }
    exports.init = init
});
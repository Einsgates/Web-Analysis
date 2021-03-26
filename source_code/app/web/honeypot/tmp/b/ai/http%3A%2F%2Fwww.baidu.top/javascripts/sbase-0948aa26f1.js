define("superman/lib/event",["require","exports"],function(require,_exports){"use strict";Object.defineProperty(_exports,"__esModule",{value:true});_exports.fire=fire;_exports.on=on;_exports.un=un;function fire(modName,evtName,evtArgs){F.use("superman:lib/mod_evt",function(evt){evt.fire(modName,evtName,evtArgs)})}function on(modName,evtName,handler){F.use("superman:lib/mod_evt",function(evt){evt.on(modName,evtName,handler)})}function un(modName,evtName,handler){F.use("superman:lib/mod_evt",
function(evt){evt.un(modName,evtName,handler)})}});
$.extend({browser:{chrome:/chrome\/(\d+\.\d+)/i.test(navigator.userAgent)?+RegExp["$1"]:undefined,firefox:/firefox\/(\d+\.\d+)/i.test(navigator.userAgent)?+RegExp["$1"]:undefined,ie:/msie (\d+\.\d+)|Trident/i.test(navigator.userAgent)?document.documentMode||+RegExp["$1"]:undefined,isGecko:/gecko/i.test(navigator.userAgent)&&!/like gecko/i.test(navigator.userAgent),isWebkit:/webkit/i.test(navigator.userAgent),opera:/opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent
)?+(RegExp["$6"]||RegExp["$2"]):undefined,safari:/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(navigator.userAgent)&&!/chrome/i.test(navigator.userAgent)?+(RegExp["$1"]||RegExp["$2"]):undefined,isSogouIE:navigator.userAgent.toLowerCase().indexOf("msie")>0&&navigator.userAgent.toLowerCase().indexOf("se")>0&&navigator.userAgent.toLowerCase().indexOf("360se")==-1,isBaidu:/BIDUBrowser/i.test(navigator.userAgent),edge:/edge\/(\d+)/i.test(navigator.userAgent)?+RegExp["$1"]:undefined}});$.extend({
isIE:$.browser.ie,isIE6:$.browser.ie==6,isBaidu:$.browser.isBaidu});
$.extend({Strpx:function(style){var num=0,cnChar="中",_fixStyle="visibility:hidden;position:absolute;bottom:0;left:0;",_entity="s_strpx_span";return function(style){num++;var cnLength=0,_lengthMap={},_spanTpl='<span id="'+_entity+num+'" style="'+_fixStyle+(style||"")+'"></span>',_span=$(_spanTpl)[0];document.getElementsByTagName("body")[0].appendChild(_span);_span.innerHTML=cnChar;cnLength=_span.offsetWidth;var getLengthPx=function(str){var lengthPx=0;for(var i=0,len=str.length;i<len;i++){
var charCode=str.charCodeAt(i);lengthPx+=charCode>255?cnLength:getCharLength.call(this,str.charAt(i))}return lengthPx};var getCharLength=function(aChar){if(_lengthMap[aChar]){return _lengthMap[aChar]}else{_span.innerHTML=aChar==" "?"&nbsp;":aChar;var len=_span.offsetWidth;_lengthMap[aChar]=len;return len}};var substringByPx=function(str,px,overflow){if(!str)return str;if(str.length*cnLength<px)return str;if(getLengthPx(str)<=px)return str;if(overflow){px=px-getLengthPx(overflow)}if(px<0)px=0
;var lengthPx=0;for(var i=0,len=str.length;i<len;i++){var charCode=str.charCodeAt(i),charLen=charCode>255?cnLength:getCharLength.call(this,str.charAt(i));if(lengthPx<=px&&lengthPx+charLen>px){return str.substring(0,i)+(overflow||"")}else{lengthPx+=charLen}}return str};return{substringByPx:substringByPx,getLengthPx:getLengthPx}}}()});
$.extend({url:{escapeReg:function(url){return String(url).replace(new RegExp("([.*+?^=!:${}()|[\\]/\\\\])","g"),"\\$1")},escapeSSL:function(url){if(s_domain.protocol==="http:"||url.indexOf("https:")==0){return url}var list=s_domain.ssllist||{},reg=/^(http[s]?:\/\/)?([^\/]+)(.*)/,matches=url.match(reg);var sslurl=list.hasOwnProperty(matches[2])&&list[matches[2]]+matches[3];if(!sslurl){(new Image).src="/home/page/data/pageserver?errno=7008&errurl="+encodeURIComponent(url)+"&_t="+new Date*1;if(
$.browser.chrome){return url}return url.replace(/http:/,"https:")}return"https://"+sslurl},getQueryValue:function(url,key){var reg=new RegExp("(^|&|\\?|#)"+$.url.escapeReg(key)+"=([^&#]*)(&|$|#)","");var match=url.match(reg);if(match){return match[2]}return null},escapeSymbol:function(source){return String(source).replace(/[#%&+=\/\\\ \　\f\r\n\t]/g,function(all){return"%"+(256+all.charCodeAt()).toString(16).substring(1).toUpperCase()})},jsonToQuery:function(json,replacer_opt){var result=[],
itemLen,replacer=replacer_opt||function(value){return $.url.escapeSymbol(value)};$.each(json,function(key,item){if($.isArray(item)){itemLen=item.length;while(itemLen--){result.push(key+"="+encodeURIComponent(item[itemLen]))}}else{result.push(key+"="+encodeURIComponent(item))}});return result.join("&")},queryToJson:function(url){var query=url.substr(url.lastIndexOf("?")+1),params=query.split("&"),len=params.length,result={},i=0,key,value,item,param;for(;i<len;i++){if(!params[i]){continue}
param=params[i].split("=");key=param[0];value=param[1];item=result[key];if("undefined"==typeof item){result[key]=value}else if($.isArray(item)){item.push(value)}else{result[key]=[item,value]}}return result}}});
$.extend({ajaxget:function(url,callback,istab){var addJson={};addJson["indextype"]="manht";if(!$.url.getQueryValue(url,"_req_seqid")){addJson["_req_seqid"]=s_session.seqId}if(s_session.debug){addJson["debug"]="on"}if(!$.url.getQueryValue(url,"asyn")||$.url.getQueryValue(url,"asyn")!=1){addJson["asyn"]=1}if(!$.url.getQueryValue(url,"t")&&!$.url.getQueryValue(url,"r")){addJson["t"]=(new Date).valueOf()}if(!$.url.getQueryValue(url,"sid")&&!$.url.getQueryValue(url,"sid")){
addJson["sid"]=s_session.sid}if(!$.url.getQueryValue(url,"super_frm")&&$.url.getQueryValue(location.href,"super_frm")){addJson["super_frm"]=$.url.getQueryValue(location.href,"super_frm")}if(!$.url.getQueryValue(url,"from_login")&&$.url.getQueryValue(location.href,"from_login")){addJson["from_login"]=$.url.getQueryValue(location.href,"from_login")}if(!$.url.getQueryValue(url,"from_reg")&&$.url.getQueryValue(location.href,"from_reg")){addJson["from_reg"]=$.url.getQueryValue(location.href,
"from_reg")}if(url&&url.indexOf("?")>0){url+="&"+$.url.jsonToQuery(addJson)}else{url+="?"+$.url.jsonToQuery(addJson)}var _jsonParse=function(data){return new Function("return ("+data+")")()};return $.ajax({url:url,type:"GET",dataType:"text",success:function(res,textStatus){if(res){var data={};try{data=_jsonParse(res)}catch(ex){(new Image).src=s_domain.baseuri+"/page/data/pageserver?errno=2013&url="+encodeURIComponent(url)+"&ldq="+encodeURIComponent(res.slice(0,200));if(res.indexOf("script")>=0){
$.ajax({type:"POST",url:"/home/page/data/pageserver",data:{errno:7006,isData:encodeURIComponent(res)}})}}if(data.errNo===undefined){callback&&callback({errNo:-1e3});window._xman_exception&&_xman_exception.api("get",url,"-1000",url.split("?")[1])}if(data.errNo&&data.errNo!=0){callback&&callback({errNo:data.errNo});window._xman_exception&&_xman_exception.api("get",url,data.errNo,url.split("?")[1])}if(data.errNo&&data.errNo=="403"){(new Image
).src=s_domain.baseuri+"/page/data/pageserver?errno=403&url="+encodeURIComponent(url)}else{if(!istab||istab&&data.errNo==0){callback&&callback(data)}}}}})},ajaxpost:function(url,data,callback){if(typeof data!="string"){data["indextype"]="manht";data["bsToken"]=$("#bsToken")&&$("#bsToken").val()||"";data["_req_seqid"]=s_session.seqId;data["sid"]=s_session.sid;if(!$.url.getQueryValue(url,"super_frm")&&$.url.getQueryValue(location.href,"super_frm")){data["super_frm"]=$.url.getQueryValue(
location.href,"super_frm")}if(!$.url.getQueryValue(url,"from_login")&&$.url.getQueryValue(location.href,"from_login")){data["from_login"]=$.url.getQueryValue(location.href,"from_login")}if(!$.url.getQueryValue(url,"from_reg")&&$.url.getQueryValue(location.href,"from_reg")){data["from_reg"]=$.url.getQueryValue(location.href,"from_reg")}if(s_session.debug){data["debug"]="on"}data=$.url.jsonToQuery(data)}else{data+="&_req_seqid="+s_session.seqId+"&bsToken="+($("#bsToken")&&$("$bsToken").val()||""
)+"&sid="+s_session.sid;if(s_session.debug){data+="&debug=on"}}var _jsonParse=function(data){return new Function("return ("+data+")")()};var pdata=data;return $.ajax({url:url,type:"POST",data:data,dataType:"text",success:function(res,textStatus){if(res){if(typeof pdata!="string"){pdata=$.url.jsonToQuery(pdata)}var data={};data=_jsonParse(res);if(data.errNo===undefined){window._xman_exception&&_xman_exception.api("post",url,"-1000",pdata)}if(data.errNo&&data.errNo!=0){
window._xman_exception&&_xman_exception.api("post",url,data.errNo,pdata)}if(data.errNo=="7007"){pdata+="&retryno="+data.errNo;if(url&&url.indexOf("?")>0){url+="&"+pdata}else{url+="?"+pdata}$.ajax({url:url,type:"get",dataType:"text",success:function(res,textStatus){if(res){var gdata=_jsonParse(res);callback&&callback(gdata)}}})}else{callback&&callback(data)}}}})}});$.extend({ajaxsyncget:function(url,callback){if(s_session.issync&&s_session.isdev!="1"){s_session.issync=null;var data={};try{
data=new Function("return ("+$.trim($("#s_sync_data").html())+")")()}catch(e){data.errNo=9999}callback&&callback(data)}else{return $.ajaxget(url,callback,true)}}});
$.extend({loadCss:function(path){var element=document.createElement("link");element.setAttribute("rel","stylesheet");element.setAttribute("type","text/css");element.setAttribute("href",path);document.getElementsByTagName("head")[0].appendChild(element)},loadJs:function(path,ignoreedge){var element=document.createElement("script");element.setAttribute("type","text/javascript");element.setAttribute("src",path);element.setAttribute("defer","defer");document.getElementsByTagName("head"
)[0].appendChild(element)}});
$.extend({formatString:function(source,opts){source=String(source);var data=Array.prototype.slice.call(arguments,1),toString=Object.prototype.toString;if(data.length){data=data.length==1?opts!==null&&/\[object Array\]|\[object Object\]/.test(toString.call(opts))?opts:data:data;return source.replace(/#\{(.+?)\}/g,function(match,key){var replacer=data[key];if("[object Function]"==toString.call(replacer)){replacer=replacer(key)}return"undefined"==typeof replacer?"":replacer})}return source},
encodeHTML:function(source){return String(source).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},decodeHTML:function(source){var str=String(source).replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");return str.replace(/&#([\d]+);/g,function(_0,_1){return String.fromCharCode(parseInt(_1,10))})},isString:function(source){return"[object String]"==Object.prototype.toString.call(source)},
trimAll:function(str){return str.replace(/\s+/g,"")}});
$.extend({stringify:function stringify(obj){if("JSON"in window){return JSON.stringify(obj)}var t=typeof obj;if(t!="object"||obj===null){if(t=="string"){obj='"'+obj+'"'}return String(obj)}else{var escapeMap={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function encodeString(source){if(/["\\\x00-\x1f]/.test(source)){source=source.replace(/["\\\x00-\x1f]/g,function(match){var c=escapeMap[match];if(c){return c}c=match.charCodeAt();return"\\u00"+Math.floor(c/16
).toString(16)+(c%16).toString(16)})}return'"'+source+'"'}function encodeArray(source){var result=["["],l=source.length,preComma,i,item;for(i=0;i<l;i++){item=source[i];switch(typeof item){case"undefined":case"function":case"unknown":break;default:if(preComma){result.push(",")}result.push($.stringify(item));preComma=1}}result.push("]");return result.join("")}switch(typeof obj){case"undefined":return"undefined";case"number":return isFinite(obj)?String(obj):"null";case"string":return encodeString(
obj);case"boolean":return String(obj);default:if(obj===null){return"null"}else if(obj instanceof Array){return encodeArray(obj)}else{var result=["{"],encode=$.stringify,preComma,item;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){item=obj[key];switch(typeof item){case"undefined":case"unknown":case"function":break;default:if(preComma){result.push(",")}preComma=1;result.push(encode(key)+":"+encode(item))}}}result.push("}");return result.join("")}}}}});
$.extend({localstorage:function(){var isDate=function(o){return{}.toString.call(o)==="[object Date]"&&o.toString()!=="Invalid Date"&&!isNaN(o)};var _guid="SUPER_LS_PLUGIN_1",_status={SUCCESS:0,FAILURE:1,OVERFLOW:2};function _getKey(key){return"_super_"+key.replace(/[_\s]/g,function(matcher){return matcher=="_"?"__":"_s"})}function _getElement(){return document.getElementById(_guid+"-storage")}function _getInstance(){var _storage;if(window.ActiveXObject&&$.browser.ie<9){_storage=_createUserData()
}else if(window.localStorage){_storage=_createLocalStorage()}else{_storage=_createCookie()}return _storage}function _createUserData(){$(document.body).append($.formatString('<div id="#{id}" style="display:none;"></div>',{id:_guid+"-storage"}));_getElement().addBehavior("#default#userData");return{set:function(key,value,callback,options){var status=_status.SUCCESS,ele=_getElement(),newKey=_getKey(key),time=options&&options.expires?options.expires:(new Date).getTime()+365*24*60*60*1e3;if(isDate(
time)){time=time.getTime()}else{time=(new Date).getTime()+(time-0)}ele.expires=new Date(time).toUTCString();try{ele.setAttribute(newKey,value);ele.save(newKey)}catch(e){status=_status.OVERFLOW}ele=null;callback&&callback.call(this,status,value)},get:function(key){var status=_status.SUCCESS,ele=_getElement(),newKey=_getKey(key),val=null;try{ele.load(newKey);val=ele.getAttribute(newKey)}catch(e){return{status:_status.FAILURE,value:null}}return{status:status,value:val}},del:function(key,callback){
var status=_status.SUCCESS,ele=_getElement(),newKey=_getKey(key),val;try{ele.load(newKey);val=ele.getAttribute(newKey);if(val){ele.removeAttribute(newKey);ele.expires=new Date(315532799e3).toUTCString();ele.save(newKey)}else{status=_status.FAILURE}}catch(e){status=_status.FAILURE}callback&&callback.call(this,status,val)}}}function _createLocalStorage(){return{set:function(key,value,callback,options){var status=_status.SUCCESS,storage=window.localStorage,newKey=_getKey(key),
time=options&&options.expires?options.expires:0;if(isDate(time)){time=time.getTime()}else if(time>0){time=(new Date).getTime()+(time-0)}try{storage.setItem(newKey,time+"|"+value)}catch(e){status=_status.OVERFLOW}callback&&callback.call(this,status,value)},get:function(key){var status=_status.SUCCESS,storage=window.localStorage,newKey=_getKey(key),val=null,index,time;try{val=storage.getItem(newKey)}catch(e){return{status:_status.FAILURE,value:null}}if(val){index=val.indexOf("|");time=parseInt(
val.substring(0,index),10);if(new Date(time).getTime()>(new Date).getTime()||time==0){val=val.substring(index+1,val.length)}else{val=null;status=_status.FAILURE;this.del(key)}}else{status=_status.FAILURE}return{status:status,value:val}},del:function(key,callback){var status=_status.SUCCESS,storage=window.localStorage,newKey=_getKey(key),val=null;try{val=storage.getItem(newKey)}catch(e){status=_status.FAILURE}if(val){val=val.substring(val.indexOf("|")+1,val.length)
;status=_status[val?"SUCCESS":"FAILURE"];val&&storage.removeItem(newKey)}else{status=_status.FAILURE}callback&&callback.call(this,status,val)}}}function _createCookie(){return{set:function(key,value,callback,options){S.cookie.set(_getKey(key),value,options);callback&&callback.call(me,_status.SUCCESS,value)},get:function(key){var val=S.cookie.get(_getKey(key));return{status:_status[val?"SUCCESS":"FAILURE"],value:val}},del:function(key,callback){var newKey=_getKey(key),val=S.cookie.get(newKey)
;S.cookie.remove(newKey);callback&&callback.call(me,_status[val?"SUCCESS":"FAILURE"],val)}}}return{set:function(key,value,callback,options){var me=this;!me._storage&&(me._storage=_getInstance());me._storage.set.apply(me._storage,arguments)},get:function(key){var me=this;!me._storage&&(me._storage=_getInstance());return me._storage.get(key)},remove:function(key,callback){var me=this;!me._storage&&(me._storage=_getInstance());me._storage.del.apply(me._storage,arguments)}}}()});$.extend({
ls:$.localstorage});
$.extend({Bind:function(scope,func){var xargs=arguments.length>2?[].slice.call(arguments,2):null;return function(){var fn=$.isString(func)?scope[func]:func,args=xargs?xargs.concat([].slice.call(arguments,0)):arguments;return fn.apply(scope||fn,args)}}});
$.easing["jswing"]=$.easing["swing"];$.extend($.easing,{def:"easeOutQuad",swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*(--t*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,
b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b
;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return t==0?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return t==d?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1
)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(
2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c
;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=1.525)+1
)*t-s))+b;return c/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<1/2.75){return c*(7.5625*t*t)+b}else if(t<2/2.75){return c*(7.5625*(t-=1.5/2.75)*t+.75)+b}else if(t<2.5/2.75){return c*(7.5625*(t-=2.25/2.75)*t+.9375)+b}else{return c*(7.5625*(t-=2.625/2.75)*t+.984375)+b}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b
;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b}});
(function(){var toFix=["mousewheel","DOMMouseScroll"],toBind=["mousewheel","DOMMouseScroll"],slice=Array.prototype.slice,nullLowestDeltaTimeout,lowestDelta;if($.event.fixHooks){for(var i=toFix.length;i;){$.event.fixHooks[toFix[--i]]=$.event.mouseHooks}}var special=$.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener){for(var i=toBind.length;i;){this.addEventListener(toBind[--i],handler,false)}}else{this.onmousewheel=handler}$.data(this,"mousewheel-line-height",
special.getLineHeight(this));$.data(this,"mousewheel-page-height",special.getPageHeight(this))},teardown:function(){if(this.removeEventListener){for(var i=toBind.length;i;){this.removeEventListener(toBind[--i],handler,false)}}else{this.onmousewheel=null}},getLineHeight:function(elem){return parseInt($(elem)["offsetParent"in $.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(elem){return $(elem).height()},settings:{adjustOldDeltas:true}};$.fn.extend({mousewheel:function(
fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel")},unmousewheel:function(fn){return this.unbind("mousewheel",fn)}});function handler(event){var orgEvent=event||window.event,args=slice.call(arguments,1),delta=0,deltaX=0,deltaY=0,absDelta=0;event=$.event.fix(orgEvent);event.type="mousewheel";if("detail"in orgEvent){deltaY=orgEvent.detail*-1}if("wheelDelta"in orgEvent){deltaY=orgEvent.wheelDelta}if("wheelDeltaY"in orgEvent){deltaY=orgEvent.wheelDeltaY}if("wheelDeltaX"in orgEvent){
deltaX=orgEvent.wheelDeltaX*-1}if("axis"in orgEvent&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS){deltaX=deltaY*-1;deltaY=0}delta=deltaY===0?deltaX:deltaY;if("deltaY"in orgEvent){deltaY=orgEvent.deltaY*-1;delta=deltaY}if("deltaX"in orgEvent){deltaX=orgEvent.deltaX;if(deltaY===0){delta=deltaX*-1}}if(deltaY===0&&deltaX===0){return}if(orgEvent.deltaMode===1){var lineHeight=$.data(this,"mousewheel-line-height");delta*=lineHeight;deltaY*=lineHeight;deltaX*=lineHeight}else if(orgEvent.deltaMode===2){
var pageHeight=$.data(this,"mousewheel-page-height");delta*=pageHeight;deltaY*=pageHeight;deltaX*=pageHeight}absDelta=Math.max(Math.abs(deltaY),Math.abs(deltaX));if(!lowestDelta||absDelta<lowestDelta){lowestDelta=absDelta;if(shouldAdjustOldDeltas(orgEvent,absDelta)){lowestDelta/=40}}if(shouldAdjustOldDeltas(orgEvent,absDelta)){delta/=40;deltaX/=40;deltaY/=40}delta=Math[delta>=1?"floor":"ceil"](delta/lowestDelta);deltaX=Math[deltaX>=1?"floor":"ceil"](deltaX/lowestDelta)
;deltaY=Math[deltaY>=1?"floor":"ceil"](deltaY/lowestDelta);event.deltaX=deltaX;event.deltaY=deltaY;event.deltaFactor=lowestDelta;event.deltaMode=0;args.unshift(event,delta,deltaX,deltaY);if(nullLowestDeltaTimeout){clearTimeout(nullLowestDeltaTimeout)}nullLowestDeltaTimeout=setTimeout(nullLowestDelta,200);return($.event.dispatch||$.event.handle).apply(this,args)}function nullLowestDelta(){lowestDelta=null}function shouldAdjustOldDeltas(orgEvent,absDelta){
return special.settings.adjustOldDeltas&&orgEvent.type==="mousewheel"&&absDelta%120===0}})();
$.extend({cookie:{_isValidKey:function(key){return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(key)},getRaw:function(key){if(this._isValidKey(key)){var reg=new RegExp("(^| )"+key+"=([^;]*)(;|$)"),result=reg.exec(document.cookie);if(result){return result[2]||null}}return null},get:function(key){var value=this.getRaw(key);if("string"==typeof value){value=decodeURIComponent(value);return value}return null},setRaw:function(key,value,options){if(
!this._isValidKey(key)){return}options=options||{};var expires=options.expires;if("number"==typeof options.expires){expires=new Date;expires.setTime(expires.getTime()+options.expires)}document.cookie=key+"="+value+(options.path?"; path="+options.path:"")+(expires?"; expires="+expires.toGMTString():"")+(options.domain?"; domain="+options.domain:"")+(options.secure?"; secure":"")},remove:function(key,options){options=options||{};options.expires=new Date(0);this.setRaw(key,"",options)},
set:function(key,value,options){this.setRaw(key,encodeURIComponent(value),options)}}});
(function(F,baseUrl){function forEach(o,fn){if(o instanceof Array){for(var i=0,l=o.length;i<l;i++){if(fn.call(o[i],o[i],i)===false){return}}}else{for(var i in o){if(o.hasOwnProperty(i)){if(fn.call(o[i],o[i],i)===false){return}}}}}F.each=forEach;function Module(path,name){this.svnMod="";this.name=null;this.path=path;this.fn=null;this.exports={};this._loaded=false;this._requiredStack=[];this._readyStack=[];Module.cache[this.path]=this;if(name){if(name.charAt(0)!=="."){var segs=name.split(":");if(
segs.length>1){this.svnMod=segs[0];this.name=segs[1]}else{this.name=name}}}if(!this.svnMod){this.svnMod=this.path.split("/js/")[0].substr(1)}this.type="js";this.getKey=function(){return this.svnMod+":"+this.name};this._info={}}Module.currentPath="";Module.loadedPaths={};Module.loadingPaths={};Module.cache={};Module.paths={};Module.handlers=[];Module.moduleFileMap={};Module.requiredPaths={};Module.lazyLoadPaths={};Module.services={};Module.isPathsLoaded=function(paths){var r=true;forEach(paths,
function(path){if(!(path in Module.loadedPaths)){return r=false}});return r};Module.require=function(name,svnMod){if(name.search(":")<0){if(!svnMod){svnMod="superman";if(Module.currentPath){svnMod=Module.currentPath.split("/js/")[0].substr(1)}}name=svnMod+":"+name}var mod=Module.get(name,Module.currentPath);if(mod.type=="css")return;if(mod){if(!mod._inited){mod._inited=true;var result,modSvnMod=mod.svnMod;if(result=mod.fn.call(null,function(n){return Module.require(n,modSvnMod)},mod.exports,
new Context(mod.name,modSvnMod))){mod.exports=result}}return mod.exports}else{throw new Error('Module "'+name+'" not found!')}};Module.baseUrl=baseUrl?baseUrl[baseUrl.length-1]=="/"?baseUrl:baseUrl+"/":"/";Module.getBasePath=function(name){var prefix,i;if((i=name.indexOf("/"))!==-1){prefix=name.slice(0,i)}if(prefix&&prefix in Module.paths){return Module.paths[prefix]}return Module.baseUrl};Module.getJsPath=function(name,basePath){if(name.charAt(0)==="."){basePath=basePath.replace(
/\/[^\/]+\/[^\/]+$/,"");if(name.search("./")===0){name=name.substr(2)}var depth=0;name=name.replace(/^(\.\.\/)+/g,function(x){depth=x.length/3;return""});while(depth>0){basePath=basePath.substr(0,basePath.lastIndexOf("/"));depth--}return basePath+"/"+name+"/"+name.substr(name.lastIndexOf("/")+1)+".js"}else{var svnMod,prefix,i1,i2,fileName,path;if(name.search(":")>=0){var arr=name.split(":");svnMod=arr[0];name=arr[1]}else if(basePath){svnMod=basePath.split("/")[1]}svnMod=svnMod||"superman"
;var isCSS=/\.css(?:\?|$)/i.test(name);if(isCSS){if(Module.moduleFileMap[svnMod][name]){F._useConfig&&(name=Module.moduleFileMap[svnMod][name])}else{!F._useConfig&&alert(name+"没有配置在config.js中")}}var name=fileName=name;var libPath=Module.getBasePath(name);if((i1=name.indexOf("/"))!==-1){prefix=name.slice(0,i1);i2=name.lastIndexOf("/");fileName=name.slice(i2+1)}if(prefix&&prefix in Module.paths){name=name.slice(i1+1)}path=libPath+svnMod+"/js/"+name+".js";return path}};Module.get=function(name,
basePath){var path=Module.getJsPath(name,basePath);if(Module.cache[path]){return Module.cache[path]}return new Module(path,name)};Module.prototype={load:function(){Module.loadingPaths[this.path]=true;var svnMod=this.svnMod||"superman",path=s_domain.staticUrl+"static/"+svnMod+"/";var _this=this;var isCSS=/\.css(?:\?|$)/i.test(this.name);this.type=isCSS?"css":"js";var modname="/"+this.type+"/"+Module.moduleFileMap[svnMod][this.name];if(F._useConfig&&Module.moduleFileMap[svnMod][this.name]){
path+=this.type+"/"+Module.moduleFileMap[svnMod][this.name]}else{path+=this.type+"/"+this.name+(isCSS?"":".js")}if($.inArray(modname,F._firstScreenCSS)>=0||F._useConfig&&$.inArray(modname,F._firstScreenJS)>=0){if(isCSS){setTimeout(function(){_this._loaded=true;_this.ready()},1)}else{_this._loaded=true;_this.ready()}}else{var startTime=(new Date).getTime();Script.create({src:path,type:this.type,loaded:function(){_this._info.loadedTime=(new Date).getTime()-startTime;if(_this.type=="css"){
_this._loaded=true;_this.ready()}}})}},lazyLoad:function(){var name=this.name;if(Module.lazyLoadPaths[this.getKey()]){this.define();delete Module.lazyLoadPaths[this.getKey()]}else{if(this.exist()){return}Module.requiredPaths[this.getKey()]=true;this.load()}},ready:function(fn,isRequired){var stack=isRequired?this._requiredStack:this._readyStack;if(fn){if(this._loaded){fn()}else{stack.push(fn)}}else{Module.loadedPaths[this.path]=true;delete Module.loadingPaths[this.path];this._loaded=true
;Module.currentPath=this.path;if(this._readyStack&&this._readyStack.length>0){this._inited=true;var result,modSvnMod=this.svnMod;if(result=this.fn.call(null,function(n){return Module.require(n,modSvnMod)},this.exports,new Context(this.name,modSvnMod))){this.exports=result}forEach(this._readyStack,function(func){func()});delete this._readyStack}if(this._requiredStack&&this._requiredStack.length>0){forEach(this._requiredStack,function(func){func()});delete this._requiredStack}}},define:function(){
var _this=this,deps=this.deps,path=this.path,depPaths=[];if(!deps){deps=this.getDependents()}if(deps.length){forEach(deps,function(d){depPaths.push(Module.getJsPath(d,_this.path))});forEach(deps,function(d){var mod=Module.get(d,_this.path);mod.ready(function(){if(Module.isPathsLoaded(depPaths)){_this.ready()}},true);mod.lazyLoad()})}else{this.ready()}},exist:function(){var path=this.path;return path in Module.loadedPaths||path in Module.loadingPaths},getDependents:function(){var _this=this
;var str=this.fn.toString();var req=str.match(/function\s*\(([^,]*),/i);var reg=new RegExp("[^.]\\b"+req[1]+"\\(\\s*('|\")([^()\"']*)('|\")\\s*\\)","g");var deps=str.match(reg);var depsr=[];if(deps){forEach(deps,function(d,i){depsr[i]=d.substr(req[1].length+3).slice(0,-2)})}return depsr}};var Script={create:function(opt){var src=opt.src;if(src in this._paths){return}this._paths[src]=true;forEach(this._rules,function(modify){src=modify.call(null,src)});assetOnload(src,opt.type,opt.loaded)},
_paths:{},_rules:[],addPathRule:function(modify){this._rules.push(modify)}};function createNode(src,type){var isCSS=type=="css";var node=document.createElement(isCSS?"link":"script");return node}function assetOnload(src,type,callback,reload){var node=createNode(src,type);if(node.nodeName==="SCRIPT"){scriptOnload(node,cb)}else{styleOnload(node,cb)}var timer=setTimeout(function(){throw new Error("load "+type+" timeout : "+src);!reload&&assetOnload(src+"?v="+(new Date).valueOf(),type,cb,true)},
F._loadScriptTimeout||1e4);function cb(){if(!cb.isCalled){cb.isCalled=true;clearTimeout(timer);callback&&callback()}}var head=document.getElementsByTagName("head")[0];if(type=="css"){node.rel="stylesheet";node.href=src;head.appendChild(node)}else{node.type="text/javascript";node.charset="utf-8";node.src=src;head.insertBefore(node,head.firstChild)}}function scriptOnload(node,callback){node.onload=node.onerror=node.onreadystatechange=function(){if(/loaded|complete|undefined/.test(node.readyState)
){node.onload=node.onerror=node.onreadystatechange=null;if(node.parentNode){node.parentNode.removeChild(node);try{if(node.clearAttributes){node.clearAttributes()}else{for(var p in node)delete node[p]}}catch(x){}}node=undefined;callback&&callback()}}}function styleOnload(node,callback){if(node.attachEvent){node.attachEvent("onload",callback)}else{setTimeout(function(){poll(node,callback)},0)}}function poll(node,callback){if(callback&&callback.isCalled){return}var isLoaded
;var UA=navigator.userAgent;var isWebKit=~UA.indexOf("AppleWebKit");var isOpera=~UA.indexOf("Opera");if(isWebKit||isOpera){if(node["sheet"]){isLoaded=true}}else if(node["sheet"]){try{if(node["sheet"].cssRules){isLoaded=true}}catch(ex){if(ex.name==="SecurityError"||ex.name==="NS_ERROR_DOM_SECURITY_ERR"){isLoaded=true}}}setTimeout(function(){if(isLoaded){callback&&callback()}else{poll(node,callback)}},1)}F.version="1.0";F.use=function(names,fn){if(typeof names==="string"){names=[names]}var args=[]
;var flags=[];forEach(names,function(name,i){flags[i]=false});forEach(names,function(name,i){var mod=Module.get(name),modLoaded=mod._loaded;mod.ready(function(){var modArg=mod.exports||{};modArg._INFO=mod._info;if(modArg._INFO){modArg._INFO.isNew=!modLoaded}args[i]=modArg;flags[i]=true;var done=true;forEach(flags,function(f){if(f===false){return done=false}});if(fn&&done){fn.apply(null,args)}});mod.lazyLoad()})};F.module=function(name,fn,deps){var mod=Module.get(name);mod.fn=fn;mod.deps=deps;if(
Module.requiredPaths[mod.getKey()]){mod.define()}else{Module.lazyLoadPaths[mod.getKey()]=true}};F.pathRule=function(modify){Script.addPathRule(modify)};F._addPath=function(prefix,path){if(path.slice(-1)!=="/"){path+="/"}if(prefix in Module.paths){throw new Error(prefix+" has already in Module.paths")}else{Module.paths[prefix]=path}};var _curSvnMod="superman";F._setMod=function(svnMod){_curSvnMod=svnMod||"superman"};F._fileMap=function(path,names){if(typeof path==="object"){forEach(path,function(
ns,p){F._fileMap(p,ns)})}else{var svnMod=_curSvnMod;if(typeof names==="string"){names=[names]}path=path.indexOf("js/")==1?path.substr(4):path;path=path.indexOf("css/")==1?path.substr(5):path;var modMap=Module.moduleFileMap[svnMod];if(!modMap){modMap={}}forEach(names,function(name){if(!modMap[name])modMap[name]=path});Module.moduleFileMap[svnMod]=modMap}};F._eventMap={};F.call=function(mod,fn,params){var realArgs=[];for(var i=2,len=arguments.length;i<len;i++){realArgs.push(arguments[i])}F.use(mod
,function(m){var fns=fn.split(".");for(var i=0,l=fns.length;i<l;i++){m=m[fns[i]]}if(m){m.apply(this,realArgs)}})};F._setContext=function(context){if(typeof context==="object"){forEach(context,function(a,b){Context.prototype[b]=Module.require(a)})}};F._setContextMethod=function(methodName,method){Context.prototype[methodName]=method};var Context=function(modName,svnMod){this.modName=modName;this.svnMod=svnMod};Context.prototype={domain:s_domain,session:s_session,use:function(names,fn){if(
typeof names==="string"){names=[names]}for(var i=names.length-1;i>=0;i--){names[i]=this.svnMod+":"+names[i]}F.use(names,fn)}};F._Context=Context;F.addLog=function(modName,logCfg){F.use("superman:lib/log",function(log){log.defaultLog(modName,logCfg)})};F.fire=function(modName,evtName,evtArgs){F.use("superman:lib/mod_evt",function(evt){evt.fire(modName,evtName,evtArgs)})};F._defService=function(svnMod,srvObj){if(svnMod){var srvPool=Module.services[svnMod];srvPool=srvPool||{};forEach(srvObj,
function(obj,key){srvPool[key]=obj});Module.services[svnMod]=srvPool}};F.getService=function(svnMod,srvKey,fn){var srvPool=Module.services[svnMod];if(srvPool){var srvMod=srvPool[srvKey];if(srvMod){F.use(svnMod+":"+srvMod,fn)}else{throw new Error(svnMod+" mod didn't provide service "+srvKey)}}else{throw new Error(svnMod+" mod didn't define any services")}}})(function(){return window.F={}}());
F.module("superman:lib/sbase",function(require,exports,ctx){var S=exports});
F.use("superman:lib/sbase",function(S){S.BaseClass=function(){var me=this,_events={};me.on=function(eventName,handler){var arr=_events[eventName];if(!arr){arr=_events[eventName]=[]}arr.push(handler)};me.un=function(eventName,handler){if(!eventName){_events={};return}var arr=_events[eventName];if(arr){if(handler){$.each(arr,function(i,h){if(h==handler){arr.splice(i,1);return false}})}else{_events[eventName]=[]}}};me.fire=function(eventName,args){var arr=_events[eventName];if(arr){args=args||{}
;$.each(arr,function(idx,handler){args._result=handler.call(me,$.extend({_ctx:{src:me}},args))})}}};var Class={};Class.create=function(cls,superClass){superClass=superClass||S.BaseClass;return function Class(){superClass.apply(this,arguments);var bs=$.extend({},this);cls.apply(this,arguments);this._super=bs}};S.Class=Class});
F.module("lib/mod_evt",function(require,exports,ctx){var handlers={};var fire=function(modName,eventName,eventArgs){var tmpArr=modName.split("/"),mod=tmpArr[0],submod=tmpArr[1],key=mod+"-"+eventName,eventResult={handlerCount:0,returnValue:true};if(handlers[key]){eventArgs=eventArgs||{};var hs=handlers[key];for(var i=0,len=hs.length;i<len;i++){var h=hs[i];if(submod&&h.submod&&submod!=h.submod)continue;var evtArgs={_MOD:mod,_EVENT_NAME:eventName,_SUBMOD:submod||""};for(var k in eventArgs){
evtArgs[k]=eventArgs[k]}var rValue=h.hnd(evtArgs);if(rValue===false){eventResult.returnValue=false}}eventResult.handlerCount=hs.length}return eventResult};var addEvent=function(modName,eventName,handler){var tmpArr=modName.split("/"),mod=tmpArr[0],submod=tmpArr[1],key=mod+"-"+eventName;h={hnd:handler,mod:mod,submod:submod};if(handlers[key]){handlers[key].push(h)}else{handlers[key]=[h]}};var on=function(modName,evtNames,handler){var mType=Object.prototype.toString.call(modName);if(
mType=="[object String]"){var eType=Object.prototype.toString.call(evtNames);if(eType=="[object String]"){addEvent(modName,evtNames,handler)}else if(eType=="[object Array]"){for(var i=0,len=evtNames.length;i<len;i++){addEvent(modName,evtNames[i],handler)}}}else if(mType=="[object Array]"){for(var i=0,len=modName.length;i<len;i++){on(modName[i],evtNames,handler)}}};var un=function(modName,eventName,handler){var tmpArr=modName.split("/"),mod=tmpArr[0],submod=tmpArr[1],key=mod+"-"+eventName;if(
handlers[key]){var hs=handlers[key],newHs=[];for(var i=0,len=hs.length;i<len;i++){var h=hs[i];if(h.hnd!=handler)newHs.push(h)}handlers[key]=newHs}};exports.fire=fire;exports.on=on;exports.un=un;exports.handlers=handlers});
F.module("lib/log",function(require,exports,ctx){var S=ctx.base;var buildInKeys={m:1,mod:1,submod:1,evttype:1,mouse:1,initiator:1,portrait:1,glogid:1,slogid:1,type:1,pid:1,logactid:1},femods={sys:1,base:1,page:2,feed:2,nav:2,hot:2,app:2,msg:2,res:2},bUtype=s_session.usertype,bSuperVer="supernewplus",bPortrait=s_session.portrait,bGlogId=s_session.logId||"0",logSrcDomain=0,ubslogactids={};var getBuildInValues=function(mod,submod){var values={mod:mod,submod:submod||"",utype:bUtype,
superver:bSuperVer,portrait:bPortrait,glogid:bGlogId,type:2011,pid:315,isLogin:s_session.username?1:0,version:"PCHome",terminal:"PC",qid:s_session.seqId,sid:s_session.sid,super_frm:$.url.getQueryValue(location.href,"super_frm")||"",from_login:$.url.getQueryValue(location.href,"from_login")||"",from_reg:$.url.getQueryValue(location.href,"from_reg")||"",query:$("#kw").val(),curcard:s_session.curmod,curcardtab:$("#s_content_"+s_session.curmod+" "+".s-xmancard").attr("data-curtab")||"",
_r:Math.random()};return values};var imgLogSrc=function(){return $.url.escapeSSL("http://dj"+ ++logSrcDomain%3+".baidu.com/v.gif?")};var imgLog=function(src){var n="imglog__"+(new Date).getTime();var c=window[n]=new Image;c.onload=c.onerror=function(){window[n]=null};c.src=src;c=null};var logEventListener=function(evt){var params=getBuildInValues(evt._MOD,evt._SUBMOD);var m=evt._MOD+"_"+evt._EVENT_NAME;params.m=m;if(ubslogactids[m]){params.logactid=ubslogactids[m]}for(var k in evt){if(k.indexOf(
"_")===0){continue}if(params[k]){ctx.warn("logParamConflicted",k+" is conflicted in "+params.m);continue}var value=evt[k];var vType=typeof value;if(vType==="string"||vType==="number"||vType==="boolean"){params[k]=value}}var src=imgLogSrc()+$.url.jsonToQuery(params);if(params.logactid==="0200100000"||params.logactid==="0200100001"&&params.clickType==="wordTopic"){imgLog("//www.baidu.com/home/hit/v.gif?"+$.url.jsonToQuery(params))}ctx.use("lib/mod_evt",function(evt){var evtResult=evt.fire(
"lib/log","beforeSendLog",{modEvt:evt,logParams:params});if(evtResult.returnValue){imgLog(src)}})};var defaultLog=function(modName,logCfg){var cfgType=Object.prototype.toString.call(logCfg);switch(cfgType){case"[object Array]":ctx.listen(modName,logCfg,logEventListener);break;case"[object Object]":var mod=modName.split("/")[0];for(var evtName in logCfg){if(logCfg.hasOwnProperty(evtName)){ctx.listen(modName,evtName,logEventListener);ubslogactids[mod+"_"+evtName]=logCfg[evtName]}}break}}
;var modReg=/home\/\w+\/(data|submit)\/\w+/;ctx.listen("lib/sbase","ajaxSuccess",function(evt){if(!evt.logId){return}var ms=evt.url&&evt.url.match(modReg);var m=ms&&ms[0]||"";var paths=m.split("/");var mod=paths&&paths[1]});var imgLogPC=function(){var params=getBuildInValues("superman:lib","index");var optLog={logactid:"1234567890",showTab:"10000",opType:"showpv"};var megeredParams=$.extend({},optLog,params);var src=imgLogSrc()+$.url.jsonToQuery(megeredParams);imgLog(src)};var imgLogTC=function(
){var rnd="imglogtc__"+(new Date).getTime();var img=window[rnd]=new Image;img.onload=img.onerror=function(){window[rnd]=null};img.src="//m.baidu.com/tc?tcreq4log=1"+"&ssid="+window.s_session.portrait+"&from=0&pu=sz%401320_2001%2Cta%40iphone_1_9.1_3_601"+"&qid="+window.s_session.logId+"pc"+"&ct=10&cst=1&clk_from=exception&clk_info=pclog";img=null};function randTool(probability){return!!(Math.random()*100<probability)}imgLogPC();if(!!window.s_session.sid.match("20277")){imgLogTC()}
exports.log=logEventListener;exports.defaultLog=defaultLog});
(function(global){var EXT_TYPE={PROTOTYPE:"prototype",INSTANCE:"instance",SINGLETON:"singleton",STATICTYPE:"static"};var extensions={};function Thunder(opt){var self=this;self.opt=opt||{};self.baseParams=self.opt.baseParams||{};self.config(opt,true);if(opt.autoBind){self.bindLogHook()}simpleMerge(self,extensions)}Thunder.prototype={config:function(opt){var self=this;simpleMerge(self.opt,opt);self.baseURL=self.opt.baseURL||"//hpd.baidu.com/v.gif";self.domHook=self.opt.domHook||"data-stats"
;self.mainDom=self.opt.mainDom;self.skipPrevent=!!self.opt.skipPrevent;self.logRegx=self.opt.logRegx||"(.*?):(.*?);";self.baseParams=simpleMerge(self.baseParams,opt.baseParams);return self},send:function(pobj,callback,url){var self=this;self.__sendPreHook&&self.__sendPreHook(pobj);var id="l"+Date.now();var req=window[id]=new Image;var params="";var timer=null;url=url||self.baseURL;req.onload=req.onerror=req.onabort=function(){window[id]=null;if(timer){clearTimeout(timer);timer=null
;callback&&callback();self.__sendAfrHook&&self.__sendAfrHook(pobj,false)}};pobj=pobj||{};pobj.r=id;pobj._r=Math.random();pobj.isLogin=s_session.username?1:0;var baseParams=self.baseParams;pobj=simpleMerge(simpleMerge({},baseParams),pobj);for(var i in pobj){if(pobj.hasOwnProperty(i)){params+="&"+i+"="+encodeURIComponent(pobj[i])}}req.src=url+"?"+params.slice(1);if(typeof callback==="function"){timer=setTimeout(function(){timer=null;callback()},500)}self.__sendAfrHook&&self.__sendAfrHook(pobj,true
);return self},bindLogHook:function(mainDom,domHook){var self=this;mainDom=mainDom?$(mainDom):$(self.mainDom);mainDom&&mainDom.on("click",domHook||"["+self.domHook+"]",function(e){self.hookClick.call(self,this,e)})},hookClick:function(dom,e){var self=this;var dataLogStr=dom.getAttribute(self.domHook);var isSkip=dom.getAttribute("data-stopskip");var targetHref=dom.getAttribute("href");var callback=null;var logObj={};var regx=new RegExp(self.logRegx,"g");var output=null;while(output=regx.exec(
dataLogStr)){logObj[output[1]]=output[2]}if(dom.tagName.toLowerCase()==="a"&&targetHref&&isSkip){e.preventDefault();callback=function(){global.location.href=targetHref}}self.send(logObj,callback)}};function simpleMerge(obj1,obj2){if(!obj2||!obj1){return obj1}for(var i in obj2){if(obj2.hasOwnProperty(i)){obj1[i]=obj2[i]}}return obj1}var thunderInstance=null;var exportThunder={create:function(opt,cb){return new Thunder(opt)},extend:function(ext,methodType){switch(methodType){
case EXT_TYPE.PROTOTYPE:simpleMerge(Thunder.prototype,ext);break;case EXT_TYPE.STATICTYPE:simpleMerge(Thunder,ext);break;case EXT_TYPE.INSTANCE:case EXT_TYPE.SINGLETON:default:simpleMerge(extensions,ext)}},get:function(opt){return thunderInstance||(thunderInstance=this.create(opt))}};global.Thunder=exportThunder})(this);
F.module("superman:lib/utils",function(require,exports,ctx){function throttle(func,wait,options){var context,args,result;var timeout=null;var previous=0;if(!options)options={};var later=function(){previous=options.leading===false?0:+new Date;timeout=null;result=func.apply(context,args);if(!timeout)context=args=null};return function(){var now=+new Date;if(!previous&&options.leading===false)previous=now;var remaining=wait-(now-previous);context=this;args=arguments;if(remaining<=0||remaining>wait){
clearTimeout(timeout);timeout=null;previous=now;result=func.apply(context,args);if(!timeout)context=args=null}else if(!timeout&&options.trailing!==false){timeout=setTimeout(later,remaining)}return result}}exports.throttle=throttle});
F.module("superman:common/user_attr",function(require,exports,ctx){var URLS={SUBMIT_STATUS:["/page/submit/userattr","/pcweb/submit/manusertips"]};var userProp=[s_session.userProp||0,s_session.userTips||0],PropOrTips={};var getAttr=function(name){var propValue=userProp[0][name],tipsValue=userProp[1][name];if(propValue!=undefined){PropOrTips.name=0;return propValue}else if(tipsValue!=undefined){PropOrTips.name=1;return tipsValue}else return};var setAttr=function(name,value){var oldValue=getAttr(
name);if(typeof oldValue!="undefined"&&oldValue!=value){$.ajaxpost(s_domain.baseuri+URLS.SUBMIT_STATUS[PropOrTips.name],{prop:name,value:parseValue(value)},function(data){if(data.errNo==0){userProp[PropOrTips.name][name]=value;ctx.fire("setUserAttr",{attr:name,state:"setSucc"})}else{ctx.fire("setUserAttr",{attr:name,state:"setFail"})}})}};var setMultiAttr=function(names,values){var _leng=names.length,_names=[],_values=[];for(var i=0;i<_leng;i++){var oldValue=getAttr(names[i]);if(
typeof oldValue!="undefined"&&oldValue!=values[i]){_names.push(names[i]);_values.push(parseValue(values[i]))}}var _nLeng=_names.length;if(_nLeng>0){if(isFromSameInterface){$.ajaxpost(s_domain.baseuri+URLS.SUBMIT_STATUS[PropOrTips.name],{prop:_names.join(","),value:_values.join(",")},function(data){if(data.errNo==0){for(var j=0;j<_nLeng;j++){userProp[PropOrTips.name][_names[j]]=_values[j]=="on"?true:false;ctx.fire("setUserAttr",{attr:_names[j],state:"setSucc"})}}else{for(var k=0;k<_nLeng;k++){
userProp[PropOrTips.name][_names[k]]=_values[k];ctx.fire("setUserAttr",{attr:_names[k],state:"setFail"})}}})}else{}}};var parseValue=function(value){if(value===true){return"on"}else if(value===false){return"off"}else{return value}};var isFromSameInterface=function(names){if(names&&names.length>0){var _namesL=names.length,initvalue=PropOrTips[_names[0]];for(var i=_namesL-1;i>=0;i--){if(PropOrTips[_names[0]]!=initvalue){return false}}return true}};exports.getAttr=getAttr;exports.setAttr=setAttr
;exports.setMultiAttr=setMultiAttr});
F.module("superman:common/select",function(require,exports,ctx){require("select.css");var S=ctx.base;var Select=S.Class.create(function(cfg){var me=this,time=(new Date).getTime();me.value=null;me.words=null;me.selectId="s_select_"+time;me.inputId="s_select_input_"+time;me.inputMaskId="s_select_input_mask_"+time;me.arrowId="s_select_arrow_"+time;me.hiddenId="s_select_hidden_"+time;me.layerId="s_select_layer_"+time;me.selected=0;me.isshow=false;me.maxCount=cfg.showCount||10;me.optHeight=20
;me.mouseoverOpt=null;me.mouseoverIdx=null;me.timer=null;me.scroll=false;me.scrollTimer=null;var setOption=function(value,words,selected,pos){if(pos!=undefined){var option=me.layer.find(".s-select-layer-option")[pos];if(option){$(option).val(value).html(words);if(selected){option.className="s-select-layer-option current";setValue(value,words,pos)}else{option.className="s-select-layer-option"}}}};var addOption=function(value,words,selected,pos){if(pos!=undefined){var options=me.layer.find(
".s-select-layer-option"),option=options[pos];if(option){$(option).before('<div value="'+value+'" class="s-select-layer-option'+(selected?" current":"")+'">'+words+"</div>")}else{if(options.length){$(options.last()).after('<div value="'+value+'" class="s-select-layer-option'+(selected?" current":"")+'">'+words+"</div>")}else{me.layer.prepend('<div value="'+value+'" class="s-select-layer-option'+(selected?" current":"")+'">'+words+"</div>")}}}else{me.layer.append(
'<div value="'+value+'" class="s-select-layer-option'+(selected?" current":"")+'">'+words+"</div>")}if(selected){setValue(value,words,pos);updateCurrent()}setLayerHeight()};var updateCurrent=function(){eachOption(function(opt,idx){if(idx==me.selected){$(opt).addClass("current")}else{$(opt).removeClass("current")}})};var setValue=function(value,words,idx){me.hidden.val(value);me.input.val(words);me.inputMask.html(words);me.selected=idx;me.mouseoverIdx=idx;me.fire("valueChange")}
;var getVlaue=function(){return me.hidden.val()};var bindEvent=function(){me.inputMask.bind("mousedown",function(e){me.fire("clickSelect");me.input.focus();if(me.isshow){hideLayer()}else{showLayer()}e.preventDefault();e.stopPropagation()});me.inputMask.bind("click",function(e){e.preventDefault();e.stopPropagation()});me.arrow.bind("mousedown",function(e){me.fire("clickSelect");me.input.focus();if(me.isshow){hideLayer()}else{showLayer()}e.preventDefault();e.stopPropagation()});me.arrow.bind(
"click",function(e){e.preventDefault();e.stopPropagation()})};var setLayerPos=function(){var pos=me.select.offset(),left=0,top=26;if($.isIE==8){left=-1;top=25}else if($.isIE==7){left=-1}else if($.isIE6){left=-1;top=25}me.layer.css({left:pos.left+left+"px",top:pos.top+top+"px"})};var showLayer=function(){me.input.focus();if(me.isshow)return;setLayerPos();me.layer.addClass("show");setLayerHeight();updateCurrent();me.isshow=true;setScrollTop();bindLayer();me.fire("layerShow")}
;var setLayerHeight=function(){var options=me.layer.find(".s-select-layer-option");if(options.length>me.maxCount){me.layer.css("height",me.optHeight*me.maxCount+"px")}};var hideLayer=function(){if(!me.isshow)return;me.layer.removeClass("show");me.isshow=false;unbindLayer();me.mouseoverOpt=null;me.fire("layerHide")};var bindLayer=function(){me.timer=setInterval(function(){setLayerPos()},300);me.input.bind("keydown",function(e){if(e.keyCode&&me.isshow){switch(e.keyCode){case 38:up()
;e.preventDefault();e.stopPropagation();break;case 40:down();e.preventDefault();e.stopPropagation();break;case 13:enterFunc();hideLayer();e.preventDefault();e.stopPropagation();break}}});$(document.body).bind("click",hideLayer);var options=me.layer.find(".s-select-layer-option");me.layer.bind("mouseenter",function(e){$(options[me.selected]).removeClass("current");e.preventDefault();e.stopPropagation()});me.layer.bind("mouseleave",function(e){
me.mouseoverOpt&&me.mouseoverOpt[0]&&me.mouseoverOpt.remove("current");e.preventDefault();e.stopPropagation()});$.each(options,function(idx,o){var option=$(o);option.bind("mousedown",function(e){setValue(option.attr("value"),option.html(),idx);hideLayer();e.preventDefault();e.stopPropagation()});option.bind("mouseover",function(e){if(me.scroll)return;eachOption(function(obj){$(obj).removeClass("current")});option.addClass("current");me.mouseoverOpt=option;me.mouseoverIdx=idx;e.preventDefault()
;e.stopPropagation()});option.bind("mouseout",function(e){if(me.scroll)return;option.removeClass("current");me.mouseoverIdx=idx;e.preventDefault();e.stopPropagation()})})};var enterFunc=function(){var options=me.layer.find(".s-select-layer-option");for(i=0,len=options.length;i<len;i++){if($(options[i]).hasClass("current")){setValue($(options[i]).attr("value"),$(options[i]).html(),i);break}}};var eachOption=function(callback){var options=me.layer.find(".s-select-layer-option");$.each(options,
function(idx,opt){callback&&callback($(opt),idx)})};var unbindLayer=function(){me.timer&&clearInterval(me.timer);me.timer=null;me.input.unbind("keydown");me.input.unbind("blur");eachOption(function(option){$(option).unbind("mousedown");$(option).unbind("mouseover");$(option).unbind("mouseout")});me.layer.unbind("mouseenter");me.layer.unbind("mouseleave")};var up=function(){var idx=me.mouseoverIdx||me.selected;if(idx&&idx>0){var options=me.layer.find(".s-select-layer-option");$(options[idx]
).removeClass("current");$(options[idx-1]).addClass("current");setValue($(options[idx-1]).attr("value"),$(options[idx-1]).html(),idx-1);setScrollTop()}};var down=function(){var options=me.layer.find(".s-select-layer-option");var idx=me.mouseoverIdx||me.selected;if(idx<options.length-1){$(options[idx]).removeClass("current");$(options[idx+1]).addClass("current");setValue($(options[idx+1]).attr("value"),$(options[idx+1]).html(),idx+1);setScrollTop()}};var setScrollTop=function(){me.scroll=true
;var c=me.selected+1-me.maxCount;if(c>0){me.layer.scrollTop(c*me.optHeight)}else{me.layer.scrollTop(0)}if(me.scrollTimer){clearTimeout(me.scrollTimer);me.scrollTimer=null;me.scrollTimer=setTimeout(function(){me.scroll=false},500)}else{me.scrollTimer=setTimeout(function(){me.scroll=false},500)}};me.getResult=function(){return{value:me.hidden.val(),words:me.inputMask.html()}};me.hide=function(){me.select.hide();hideLayer()};me.show=function(){me.select.css("display","inline-block")}
;me.addOption=addOption;me.setOption=setOption;me.getLayer=function(){return $("#"+me.layerId)};me.hideLayer=hideLayer;(function(){var html=['<span id="'+me.selectId+'" class="s-select '+cfg.customClass+'">','<div id="'+me.inputMaskId+'" class="s-select-input-mask s-opacity-blank1 '+cfg.customClass+'"></div><input type="input" class="s-select-input '+cfg.customClass+'" value="'+me.words+'" id="'+me.inputId+'">',
'<a class="s-select-arrow s-opacity-border3-left '+cfg.customClass+'" id="'+me.arrowId+'" href="#" onclick="return false;" hidefocus></a></span>','<input type="hidden" value="'+me.value+'" id="'+me.hiddenId+'">'].join("");$(cfg.dom)[cfg.type](html);$("#head").append('<div id="'+me.layerId+'" class="s-select-layer  s-isindex-wrap '+cfg.customClass+'"></div>');me.select=$("#"+me.selectId);me.input=$("#"+me.inputId);me.inputMask=$("#"+me.inputMaskId);me.arrow=$("#"+me.arrowId);me.hidden=$(
"#"+me.hiddenId);me.layer=$("#"+me.layerId);$.each(cfg.options,function(idx,opt){addOption(opt.value,opt.words,opt.selected,idx)});bindEvent()})()});exports.Select=Select});
F.module("superman:common/bottom_layer",function(require,exports,ctx){function init(){$("#bottom_layer .s-bottom-show").click(function(){if(s_session.isLogin){window.location.href=location.protocol+"//"+location.host+"/home/xman/show/liteoff";return}$.cookie.remove("hide_feed");location.reload()});$("#bottom_layer .s-bottom-hide").click(function(){ctx.fire("hideMain");if(!s_session.isLogin){$.cookie.set("hide_feed",1);$("#qrcodeCon").removeClass("hide");$("#bottom_space").hide()}})}
exports.init=init});F.call("superman:common/bottom_layer","init");
====================================================
====================Beautified Below================
chrome\/(\d+\.\d+)/i.test(navigator.userAgent) ? +RegExp["$1"] : undefined,
        firefox: /firefox\/(\d+\.\d+)/i.test(navigator.userAgent) ? +RegExp["$1"] : undefined,
        ie: /msie (\d+\.\d+)|Trident/i.test(navigator.userAgent) ? document.documentMode || +RegExp["$1"] : undefined,
        isGecko: /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent),
        isWebkit: /webkit/i.test(navigator.userAgent),
        opera: /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ? +(RegExp["$6"] || RegExp["$2"]) : undefined,
        safari: /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent) ? +(RegExp["$1"] || RegExp["$2"]) : undefined,
        isSogouIE: navigator.userAgent.toLowerCase().indexOf("msie") > 0 && navigator.userAgent.toLowerCase().indexOf("se") > 0 && navigator.userAgent.toLowerCase().indexOf("360se") == -1,
        isBaidu: /BIDUBrowser/i.test(navigator.userAgent),
        edge: /edge\/(\d+)/i.test(navigator.userAgent) ? +RegExp["$1"] : undefined
    }
});
$.extend({
    isIE: $.browser.ie,
    isIE6: $.browser.ie == 6,
    isBaidu: $.browser.isBaidu
});
$.extend({
    Strpx: function(style) {
        var num = 0,
            cnChar = "中",
            _fixStyle = "visibility:hidden;position:absolute;bottom:0;left:0;",
            _entity = "s_strpx_span";
        return function(style) {
            num++;
            var cnLength = 0,
                _lengthMap = {},
                _spanTpl = '<span id="' + _entity + num + '" style="' + _fixStyle + (style || "") + '"></span>',
                _span = $(_spanTpl)[0];
            document.getElementsByTagName("body")[0].appendChild(_span);
            _span.innerHTML = cnChar;
            cnLength = _span.offsetWidth;
            var getLengthPx = function(str) {
                var lengthPx = 0;
                for (var i = 0, len = str.length; i < len; i++) {
                    var charCode = str.charCodeAt(i);
                    lengthPx += charCode > 255 ? cnLength : getCharLength.call(this, str.charAt(i))
                }
                return lengthPx
            };
            var getCharLength = function(aChar) {
                if (_lengthMap[aChar]) {
                    return _lengthMap[aChar]
                } else {
                    _span.innerHTML = aChar == " " ? "&nbsp;" : aChar;
                    var len = _span.offsetWidth;
                    _lengthMap[aChar] = len;
                    return len
                }
            };
            var substringByPx = function(str, px, overflow) {
                if (!str) return str;
                if (str.length * cnLength < px) return str;
                if (getLengthPx(str) <= px) return str;
                if (overflow) {
                    px = px - getLengthPx(overflow)
                }
                if (px < 0) px = 0;
                var lengthPx = 0;
                for (var i = 0, len = str.length; i < len; i++) {
                    var charCode = str.charCodeAt(i),
                        charLen = charCode > 255 ? cnLength : getCharLength.call(this, str.charAt(i));
                    if (lengthPx <= px && lengthPx + charLen > px) {
                        return str.substring(0, i) + (overflow || "")
                    } else {
                        lengthPx += charLen
                    }
                }
                return str
            };
            return {
                substringByPx: substringByPx,
                getLengthPx: getLengthPx
            }
        }
    }()
});
$.extend({
    url: {
        escapeReg: function(url) {
            return String(url).replace(new RegExp("([.*+?^=!:${}()|[\\]/\\\\])", "g"), "\\$1")
        },
        escapeSSL: function(url) {
            if (s_domain.protocol === "http:" || url.indexOf("https:") == 0) {
                return url
            }
            var list = s_domain.ssllist || {},
                reg = /^(http[s]?:\/\/)?([^\/]+)(.*)/,
                matches = url.match(reg);
            var sslurl = list.hasOwnProperty(matches[2]) && list[matches[2]] + matches[3];
            if (!sslurl) {
                (new Image).src = "/home/page/data/pageserver?errno=7008&errurl=" + encodeURIComponent(url) + "&_t=" + new Date * 1;
                if (
                    $.browser.chrome) {
                    return url
                }
                return url.replace(/http:/, "https:")
            }
            return "https://" + sslurl
        },
        getQueryValue: function(url, key) {
            var reg = new RegExp("(^|&|\\?|#)" + $.url.escapeReg(key) + "=([^&#]*)(&|$|#)", "");
            var match = url.match(reg);
            if (match) {
                return match[2]
            }
            return null
        },
        escapeSymbol: function(source) {
            return String(source).replace(/[#%&+=\/\\\ \　\f\r\n\t]/g, function(all) {
                return "%" + (256 + all.charCodeAt()).toString(16).substring(1).toUpperCase()
            })
        },
        jsonToQuery: function(json, replacer_opt) {
            var result = [],
                itemLen, replacer = replacer_opt || function(value) {
                    return $.url.escapeSymbol(value)
                };
            $.each(json, function(key, item) {
                if ($.isArray(item)) {
                    itemLen = item.length;
                    while (itemLen--) {
                        result.push(key + "=" + encodeURIComponent(item[itemLen]))
                    }
                } else {
                    result.push(key + "=" + encodeURIComponent(item))
                }
            });
            return result.join("&")
        },
        queryToJson: function(url) {
            var query = url.substr(url.lastIndexOf("?") + 1),
                params = query.split("&"),
                len = params.length,
                result = {},
                i = 0,
                key, value, item, param;
            for (; i < len; i++) {
                if (!params[i]) {
                    continue
                }
                param = params[i].split("=");
                key = param[0];
                value = param[1];
                item = result[key];
                if ("undefined" == typeof item) {
                    result[key] = value
                } else if ($.isArray(item)) {
                    item.push(value)
                } else {
                    result[key] = [item, value]
                }
            }
            return result
        }
    }
});
$.extend({
    ajaxget: function(url, callback, istab) {
        var addJson = {};
        addJson["indextype"] = "manht";
        if (!$.url.getQueryValue(url, "_req_seqid")) {
            addJson["_req_seqid"] = s_session.seqId
        }
        if (s_session.debug) {
            addJson["debug"] = "on"
        }
        if (!$.url.getQueryValue(url, "asyn") || $.url.getQueryValue(url, "asyn") != 1) {
            addJson["asyn"] = 1
        }
        if (!$.url.getQueryValue(url, "t") && !$.url.getQueryValue(url, "r")) {
            addJson["t"] = (new Date).valueOf()
        }
        if (!$.url.getQueryValue(url, "sid") && !$.url.getQueryValue(url, "sid")) {
            addJson["sid"] = s_session.sid
        }
        if (!$.url.getQueryValue(url, "super_frm") && $.url.getQueryValue(location.href, "super_frm")) {
            addJson["super_frm"] = $.url.getQueryValue(location.href, "super_frm")
        }
        if (!$.url.getQueryValue(url, "from_login") && $.url.getQueryValue(location.href, "from_login")) {
            addJson["from_login"] = $.url.getQueryValue(location.href, "from_login")
        }
        if (!$.url.getQueryValue(url, "from_reg") && $.url.getQueryValue(location.href, "from_reg")) {
            addJson["from_reg"] = $.url.getQueryValue(location.href,
                "from_reg")
        }
        if (url && url.indexOf("?") > 0) {
            url += "&" + $.url.jsonToQuery(addJson)
        } else {
            url += "?" + $.url.jsonToQuery(addJson)
        }
        var _jsonParse = function(data) {
            return new Function("return (" + data + ")")()
        };
        return $.ajax({
            url: url,
            type: "GET",
            dataType: "text",
            success: function(res, textStatus) {
                if (res) {
                    var data = {};
                    try {
                        data = _jsonParse(res)
                    } catch (ex) {
                        (new Image).src = s_domain.baseuri + "/page/data/pageserver?errno=2013&url=" + encodeURIComponent(url) + "&ldq=" + encodeURIComponent(res.slice(0, 200));
                        if (res.indexOf("script") >= 0) {
                            $.ajax({
                                type: "POST",
                                url: "/home/page/data/pageserver",
                                data: {
                                    errno: 7006,
                                    isData: encodeURIComponent(res)
                                }
                            })
                        }
                    }
                    if (data.errNo === undefined) {
                        callback && callback({
                            errNo: -1e3
                        });
                        window._xman_exception && _xman_exception.api("get", url, "-1000", url.split("?")[1])
                    }
                    if (data.errNo && data.errNo != 0) {
                        callback && callback({
                            errNo: data.errNo
                        });
                        window._xman_exception && _xman_exception.api("get", url, data.errNo, url.split("?")[1])
                    }
                    if (data.errNo && data.errNo == "403") {
                        (new Image).src = s_domain.baseuri + "/page/data/pageserver?errno=403&url=" + encodeURIComponent(url)
                    } else {
                        if (!istab || istab && data.errNo == 0) {
                            callback && callback(data)
                        }
                    }
                }
            }
        })
    },
    ajaxpost: function(url, data, callback) {
        if (typeof data != "string") {
            data["indextype"] = "manht";
            data["bsToken"] = $("#bsToken") && $("#bsToken").val() || "";
            data["_req_seqid"] = s_session.seqId;
            data["sid"] = s_session.sid;
            if (!$.url.getQueryValue(url, "super_frm") && $.url.getQueryValue(location.href, "super_frm")) {
                data["super_frm"] = $.url.getQueryValue(
                    location.href, "super_frm")
            }
            if (!$.url.getQueryValue(url, "from_login") && $.url.getQueryValue(location.href, "from_login")) {
                data["from_login"] = $.url.getQueryValue(location.href, "from_login")
            }
            if (!$.url.getQueryValue(url, "from_reg") && $.url.getQueryValue(location.href, "from_reg")) {
                data["from_reg"] = $.url.getQueryValue(location.href, "from_reg")
            }
            if (s_session.debug) {
                data["debug"] = "on"
            }
            data = $.url.jsonToQuery(data)
        } else {
            data += "&_req_seqid=" + s_session.seqId + "&bsToken=" + ($("#bsToken") && $("$bsToken").val() || "") + "&sid=" + s_session.sid;
            if (s_session.debug) {
                data += "&debug=on"
            }
        }
        var _jsonParse = function(data) {
            return new Function("return (" + data + ")")()
        };
        var pdata = data;
        return $.ajax({
            url: url,
            type: "POST",
            data: data,
            dataType: "text",
            success: function(res, textStatus) {
                if (res) {
                    if (typeof pdata != "string") {
                        pdata = $.url.jsonToQuery(pdata)
                    }
                    var data = {};
                    data = _jsonParse(res);
                    if (data.errNo === undefined) {
                        window._xman_exception && _xman_exception.api("post", url, "-1000", pdata)
                    }
                    if (data.errNo && data.errNo != 0) {
                        window._xman_exception && _xman_exception.api("post", url, data.errNo, pdata)
                    }
                    if (data.errNo == "7007") {
                        pdata += "&retryno=" + data.errNo;
                        if (url && url.indexOf("?") > 0) {
                            url += "&" + pdata
                        } else {
                            url += "?" + pdata
                        }
                        $.ajax({
                            url: url,
                            type: "get",
                            dataType: "text",
                            success: function(res, textStatus) {
                                if (res) {
                                    var gdata = _jsonParse(res);
                                    callback && callback(gdata)
                                }
                            }
                        })
                    } else {
                        callback && callback(data)
                    }
                }
            }
        })
    }
});
$.extend({
    ajaxsyncget: function(url, callback) {
        if (s_session.issync && s_session.isdev != "1") {
            s_session.issync = null;
            var data = {};
            try {
                data = new Function("return (" + $.trim($("#s_sync_data").html()) + ")")()
            } catch (e) {
                data.errNo = 9999
            }
            callback && callback(data)
        } else {
            return $.ajaxget(url, callback, true)
        }
    }
});
$.extend({
    loadCss: function(path) {
        var element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", path);
        document.getElementsByTagName("head")[0].appendChild(element)
    },
    loadJs: function(path, ignoreedge) {
        var element = document.createElement("script");
        element.setAttribute("type", "text/javascript");
        element.setAttribute("src", path);
        element.setAttribute("defer", "defer");
        document.getElementsByTagName("head")[0].appendChild(element)
    }
});
$.extend({
    formatString: function(source, opts) {
        source = String(source);
        var data = Array.prototype.slice.call(arguments, 1),
            toString = Object.prototype.toString;
        if (data.length) {
            data = data.length == 1 ? opts !== null && /\[object Array\]|\[object Object\]/.test(toString.call(opts)) ? opts : data : data;
            return source.replace(/#\{(.+?)\}/g, function(match, key) {
                var replacer = data[key];
                if ("[object Function]" == toString.call(replacer)) {
                    replacer = replacer(key)
                }
                return "undefined" == typeof replacer ? "" : replacer
            })
        }
        return source
    },
    encodeHTML: function(source) {
        return String(source).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    },
    decodeHTML: function(source) {
        var str = String(source).replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
        return str.replace(/&#([\d]+);/g, function(_0, _1) {
            return String.fromCharCode(parseInt(_1, 10))
        })
    },
    isString: function(source) {
        return "[object String]" == Object.prototype.toString.call(source)
    },
    trimAll: function(str) {
        return str.replace(/\s+/g, "")
    }
});
$.extend({
    stringify: function stringify(obj) {
        if ("JSON" in window) {
            return JSON.stringify(obj)
        }
        var t = typeof obj;
        if (t != "object" || obj === null) {
            if (t == "string") {
                obj = '"' + obj + '"'
            }
            return String(obj)
        } else {
            var escapeMap = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            };

            function encodeString(source) {
                if (/["\\\x00-\x1f]/.test(source)) {
                    source = source.replace(/["\\\x00-\x1f]/g, function(match) {
                        var c = escapeMap[match];
                        if (c) {
                            return c
                        }
                        c = match.charCodeAt();
                        return "\\u00" + Math.floor(c / 16).toString(16) + (c % 16).toString(16)
                    })
                }
                return '"' + source + '"'
            }

            function encodeArray(source) {
                var result = ["["],
                    l = source.length,
                    preComma, i, item;
                for (i = 0; i < l; i++) {
                    item = source[i];
                    switch (typeof item) {
                        case "undefined":
                        case "function":
                        case "unknown":
                            break;
                        default:
                            if (preComma) {
                                result.push(",")
                            }
                            result.push($.stringify(item));
                            preComma = 1
                    }
                }
                result.push("]");
                return result.join("")
            }
            switch (typeof obj) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(obj) ? String(obj) : "null";
                case "string":
                    return encodeString(
                        obj);
                case "boolean":
                    return String(obj);
                default:
                    if (obj === null) {
                        return "null"
                    } else if (obj instanceof Array) {
                        return encodeArray(obj)
                    } else {
                        var result = ["{"],
                            encode = $.stringify,
                            preComma, item;
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                                item = obj[key];
                                switch (typeof item) {
                                    case "undefined":
                                    case "unknown":
                                    case "function":
                                        break;
                                    default:
                                        if (preComma) {
                                            result.push(",")
                                        }
                                        preComma = 1;
                                        result.push(encode(key) + ":" + encode(item))
                                }
                            }
                        }
                        result.push("}");
                        return result.join("")
                    }
            }
        }
    }
});
$.extend({
    localstorage: function() {
        var isDate = function(o) {
            return {}.toString.call(o) === "[object Date]" && o.toString() !== "Invalid Date" && !isNaN(o)
        };
        var _guid = "SUPER_LS_PLUGIN_1",
            _status = {
                SUCCESS: 0,
                FAILURE: 1,
                OVERFLOW: 2
            };

        function _getKey(key) {
            return "_super_" + key.replace(/[_\s]/g, function(matcher) {
                return matcher == "_" ? "__" : "_s"
            })
        }

        function _getElement() {
            return document.getElementById(_guid + "-storage")
        }

        function _getInstance() {
            var _storage;
            if (window.ActiveXObject && $.browser.ie < 9) {
                _storage = _createUserData()
            } else if (window.localStorage) {
                _storage = _createLocalStorage()
            } else {
                _storage = _createCookie()
            }
            return _storage
        }

        function _createUserData() {
            $(document.body).append($.formatString('<div id="#{id}" style="display:none;"></div>', {
                id: _guid + "-storage"
            }));
            _getElement().addBehavior("#default#userData");
            return {
                set: function(key, value, callback, options) {
                    var status = _status.SUCCESS,
                        ele = _getElement(),
                        newKey = _getKey(key),
                        time = options && options.expires ? options.expires : (new Date).getTime() + 365 * 24 * 60 * 60 * 1e3;
                    if (isDate(
                            time)) {
                        time = time.getTime()
                    } else {
                        time = (new Date).getTime() + (time - 0)
                    }
                    ele.expires = new Date(time).toUTCString();
                    try {
                        ele.setAttribute(newKey, value);
                        ele.save(newKey)
                    } catch (e) {
                        status = _status.OVERFLOW
                    }
                    ele = null;
                    callback && callback.call(this, status, value)
                },
                get: function(key) {
                    var status = _status.SUCCESS,
                        ele = _getElement(),
                        newKey = _getKey(key),
                        val = null;
                    try {
                        ele.load(newKey);
                        val = ele.getAttribute(newKey)
                    } catch (e) {
                        return {
                            status: _status.FAILURE,
                            value: null
                        }
                    }
                    return {
                        status: status,
                        value: val
                    }
                },
                del: function(key, callback) {
                    var status = _status.SUCCESS,
                        ele = _getElement(),
                        newKey = _getKey(key),
                        val;
                    try {
                        ele.load(newKey);
                        val = ele.getAttribute(newKey);
                        if (val) {
                            ele.removeAttribute(newKey);
                            ele.expires = new Date(315532799e3).toUTCString();
                            ele.save(newKey)
                        } else {
                            status = _status.FAILURE
                        }
                    } catch (e) {
                        status = _status.FAILURE
                    }
                    callback && callback.call(this, status, val)
                }
            }
        }

        function _createLocalStorage() {
            return {
                set: function(key, value, callback, options) {
                    var status = _status.SUCCESS,
                        storage = window.localStorage,
                        newKey = _getKey(key),
                        time = options && options.expires ? options.expires : 0;
                    if (isDate(time)) {
                        time = time.getTime()
                    } else if (time > 0) {
                        time = (new Date).getTime() + (time - 0)
                    }
                    try {
                        storage.setItem(newKey, time + "|" + value)
                    } catch (e) {
                        status = _status.OVERFLOW
                    }
                    callback && callback.call(this, status, value)
                },
                get: function(key) {
                    var status = _status.SUCCESS,
                        storage = window.localStorage,
                        newKey = _getKey(key),
                        val = null,
                        index, time;
                    try {
                        val = storage.getItem(newKey)
                    } catch (e) {
                        return {
                            status: _status.FAILURE,
                            value: null
                        }
                    }
                    if (val) {
                        index = val.indexOf("|");
                        time = parseInt(
                            val.substring(0, index), 10);
                        if (new Date(time).getTime() > (new Date).getTime() || time == 0) {
                            val = val.substring(index + 1, val.length)
                        } else {
                            val = null;
                            status = _status.FAILURE;
                            this.del(key)
                        }
                    } else {
                        status = _status.FAILURE
                    }
                    return {
                        status: status,
                        value: val
                    }
                },
                del: function(key, callback) {
                    var status = _status.SUCCESS,
                        storage = window.localStorage,
                        newKey = _getKey(key),
                        val = null;
                    try {
                        val = storage.getItem(newKey)
                    } catch (e) {
                        status = _status.FAILURE
                    }
                    if (val) {
                        val = val.substring(val.indexOf("|") + 1, val.length);
                        status = _status[val ? "SUCCESS" : "FAILURE"];
                        val && storage.removeItem(newKey)
                    } else {
                        status = _status.FAILURE
                    }
                    callback && callback.call(this, status, val)
                }
            }
        }

        function _createCookie() {
            return {
                set: function(key, value, callback, options) {
                    S.cookie.set(_getKey(key), value, options);
                    callback && callback.call(me, _status.SUCCESS, value)
                },
                get: function(key) {
                    var val = S.cookie.get(_getKey(key));
                    return {
                        status: _status[val ? "SUCCESS" : "FAILURE"],
                        value: val
                    }
                },
                del: function(key, callback) {
                    var newKey = _getKey(key),
                        val = S.cookie.get(newKey);
                    S.cookie.remove(newKey);
                    callback && callback.call(me, _status[val ? "SUCCESS" : "FAILURE"], val)
                }
            }
        }
        return {
            set: function(key, value, callback, options) {
                var me = this;
                !me._storage && (me._storage = _getInstance());
                me._storage.set.apply(me._storage, arguments)
            },
            get: function(key) {
                var me = this;
                !me._storage && (me._storage = _getInstance());
                return me._storage.get(key)
            },
            remove: function(key, callback) {
                var me = this;
                !me._storage && (me._storage = _getInstance());
                me._storage.del.apply(me._storage, arguments)
            }
        }
    }()
});
$.extend({
    ls: $.localstorage
});
$.extend({
    Bind: function(scope, func) {
        var xargs = arguments.length > 2 ? [].slice.call(arguments, 2) : null;
        return function() {
            var fn = $.isString(func) ? scope[func] : func,
                args = xargs ? xargs.concat([].slice.call(arguments, 0)) : arguments;
            return fn.apply(scope || fn, args)
        }
    }
});
$.easing["jswing"] = $.easing["swing"];
$.extend($.easing, {
    def: "easeOutQuad",
    swing: function(x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * (--t * (t - 2) - 1) + b
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
    },
    easeInOutCubic: function(x, t,
        b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
    },
    easeInExpo: function(x, t, b, c, d) {
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
    },
    easeOutExpo: function(x, t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (
            2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b
        } else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b
        } else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b
        } else {
            return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b
    }
});
(function() {
    var toFix = ["mousewheel", "DOMMouseScroll"],
        toBind = ["mousewheel", "DOMMouseScroll"],
        slice = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;
    if ($.event.fixHooks) {
        for (var i = toFix.length; i;) {
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks
        }
    }
    var special = $.event.special.mousewheel = {
        version: "3.1.9",
        setup: function() {
            if (this.addEventListener) {
                for (var i = toBind.length; i;) {
                    this.addEventListener(toBind[--i], handler, false)
                }
            } else {
                this.onmousewheel = handler
            }
            $.data(this, "mousewheel-line-height",
                special.getLineHeight(this));
            $.data(this, "mousewheel-page-height", special.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var i = toBind.length; i;) {
                    this.removeEventListener(toBind[--i], handler, false)
                }
            } else {
                this.onmousewheel = null
            }
        },
        getLineHeight: function(elem) {
            return parseInt($(elem)["offsetParent" in $.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
        },
        getPageHeight: function(elem) {
            return $(elem).height()
        },
        settings: {
            adjustOldDeltas: true
        }
    };
    $.fn.extend({
        mousewheel: function(
            fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel")
        },
        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn)
        }
    });

    function handler(event) {
        var orgEvent = event || window.event,
            args = slice.call(arguments, 1),
            delta = 0,
            deltaX = 0,
            deltaY = 0,
            absDelta = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";
        if ("detail" in orgEvent) {
            deltaY = orgEvent.detail * -1
        }
        if ("wheelDelta" in orgEvent) {
            deltaY = orgEvent.wheelDelta
        }
        if ("wheelDeltaY" in orgEvent) {
            deltaY = orgEvent.wheelDeltaY
        }
        if ("wheelDeltaX" in orgEvent) {
            deltaX = orgEvent.wheelDeltaX * -1
        }
        if ("axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaX = deltaY * -1;
            deltaY = 0
        }
        delta = deltaY === 0 ? deltaX : deltaY;
        if ("deltaY" in orgEvent) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY
        }
        if ("deltaX" in orgEvent) {
            deltaX = orgEvent.deltaX;
            if (deltaY === 0) {
                delta = deltaX * -1
            }
        }
        if (deltaY === 0 && deltaX === 0) {
            return
        }
        if (orgEvent.deltaMode === 1) {
            var lineHeight = $.data(this, "mousewheel-line-height");
            delta *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight
        } else if (orgEvent.deltaMode === 2) {
            var pageHeight = $.data(this, "mousewheel-page-height");
            delta *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight
        }
        absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if (!lowestDelta || absDelta < lowestDelta) {
            lowestDelta = absDelta;
            if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
                lowestDelta /= 40
            }
        }
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
            delta /= 40;
            deltaX /= 40;
            deltaY /= 40
        }
        delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta);
        deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta);
        deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta);
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.deltaMode = 0;
        args.unshift(event, delta, deltaX, deltaY);
        if (nullLowestDeltaTimeout) {
            clearTimeout(nullLowestDeltaTimeout)
        }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);
        return ($.event.dispatch || $.event.handle).apply(this, args)
    }

    function nullLowestDelta() {
        lowestDelta = null
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        return special.settings.adjustOldDeltas && orgEvent.type === "mousewheel" && absDelta % 120 === 0
    }
})();
$.extend({
    cookie: {
        _isValidKey: function(key) {
            return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(key)
        },
        getRaw: function(key) {
            if (this._isValidKey(key)) {
                var reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)"),
                    result = reg.exec(document.cookie);
                if (result) {
                    return result[2] || null
                }
            }
            return null
        },
        get: function(key) {
            var value = this.getRaw(key);
            if ("string" == typeof value) {
                value = decodeURIComponent(value);
                return value
            }
            return null
        },
        setRaw: function(key, value, options) {
            if (
                !this._isValidKey(key)) {
                return
            }
            options = options || {};
            var expires = options.expires;
            if ("number" == typeof options.expires) {
                expires = new Date;
                expires.setTime(expires.getTime() + options.expires)
            }
            document.cookie = key + "=" + value + (options.path ? "; path=" + options.path : "") + (expires ? "; expires=" + expires.toGMTString() : "") + (options.domain ? "; domain=" + options.domain : "") + (options.secure ? "; secure" : "")
        },
        remove: function(key, options) {
            options = options || {};
            options.expires = new Date(0);
            this.setRaw(key, "", options)
        },
        set: function(key, value, options) {
            this.setRaw(key, encodeURIComponent(value), options)
        }
    }
});
(function(F, baseUrl) {
    function forEach(o, fn) {
        if (o instanceof Array) {
            for (var i = 0, l = o.length; i < l; i++) {
                if (fn.call(o[i], o[i], i) === false) {
                    return
                }
            }
        } else {
            for (var i in o) {
                if (o.hasOwnProperty(i)) {
                    if (fn.call(o[i], o[i], i) === false) {
                        return
                    }
                }
            }
        }
    }
    F.each = forEach;

    function Module(path, name) {
        this.svnMod = "";
        this.name = null;
        this.path = path;
        this.fn = null;
        this.exports = {};
        this._loaded = false;
        this._requiredStack = [];
        this._readyStack = [];
        Module.cache[this.path] = this;
        if (name) {
            if (name.charAt(0) !== ".") {
                var segs = name.split(":");
                if (
                    segs.length > 1) {
                    this.svnMod = segs[0];
                    this.name = segs[1]
                } else {
                    this.name = name
                }
            }
        }
        if (!this.svnMod) {
            this.svnMod = this.path.split("/js/")[0].substr(1)
        }
        this.type = "js";
        this.getKey = function() {
            return this.svnMod + ":" + this.name
        };
        this._info = {}
    }
    Module.currentPath = "";
    Module.loadedPaths = {};
    Module.loadingPaths = {};
    Module.cache = {};
    Module.paths = {};
    Module.handlers = [];
    Module.moduleFileMap = {};
    Module.requiredPaths = {};
    Module.lazyLoadPaths = {};
    Module.services = {};
    Module.isPathsLoaded = function(paths) {
        var r = true;
        forEach(paths,
            function(path) {
                if (!(path in Module.loadedPaths)) {
                    return r = false
                }
            });
        return r
    };
    Module.require = function(name, svnMod) {
        if (name.search(":") < 0) {
            if (!svnMod) {
                svnMod = "superman";
                if (Module.currentPath) {
                    svnMod = Module.currentPath.split("/js/")[0].substr(1)
                }
            }
            name = svnMod + ":" + name
        }
        var mod = Module.get(name, Module.currentPath);
        if (mod.type == "css") return;
        if (mod) {
            if (!mod._inited) {
                mod._inited = true;
                var result, modSvnMod = mod.svnMod;
                if (result = mod.fn.call(null, function(n) {
                            return Module.require(n, modSvnMod)
                        }, mod.exports,
                        new Context(mod.name, modSvnMod))) {
                    mod.exports = result
                }
            }
            return mod.exports
        } else {
            throw new Error('Module "' + name + '" not found!')
        }
    };
    Module.baseUrl = baseUrl ? baseUrl[baseUrl.length - 1] == "/" ? baseUrl : baseUrl + "/" : "/";
    Module.getBasePath = function(name) {
        var prefix, i;
        if ((i = name.indexOf("/")) !== -1) {
            prefix = name.slice(0, i)
        }
        if (prefix && prefix in Module.paths) {
            return Module.paths[prefix]
        }
        return Module.baseUrl
    };
    Module.getJsPath = function(name, basePath) {
        if (name.charAt(0) === ".") {
            basePath = basePath.replace(
                /\/[^\/]+\/[^\/]+$/, "");
            if (name.search("./") === 0) {
                name = name.substr(2)
            }
            var depth = 0;
            name = name.replace(/^(\.\.\/)+/g, function(x) {
                depth = x.length / 3;
                return ""
            });
            while (depth > 0) {
                basePath = basePath.substr(0, basePath.lastIndexOf("/"));
                depth--
            }
            return basePath + "/" + name + "/" + name.substr(name.lastIndexOf("/") + 1) + ".js"
        } else {
            var svnMod, prefix, i1, i2, fileName, path;
            if (name.search(":") >= 0) {
                var arr = name.split(":");
                svnMod = arr[0];
                name = arr[1]
            } else if (basePath) {
                svnMod = basePath.split("/")[1]
            }
            svnMod = svnMod || "superman";
            var isCSS = /\.css(?:\?|$)/i.test(name);
            if (isCSS) {
                if (Module.moduleFileMap[svnMod][name]) {
                    F._useConfig && (name = Module.moduleFileMap[svnMod][name])
                } else {
                    !F._useConfig && alert(name + "没有配置在config.js中")
                }
            }
            var name = fileName = name;
            var libPath = Module.getBasePath(name);
            if ((i1 = name.indexOf("/")) !== -1) {
                prefix = name.slice(0, i1);
                i2 = name.lastIndexOf("/");
                fileName = name.slice(i2 + 1)
            }
            if (prefix && prefix in Module.paths) {
                name = name.slice(i1 + 1)
            }
            path = libPath + svnMod + "/js/" + name + ".js";
            return path
        }
    };
    Module.get = function(name,
        basePath) {
        var path = Module.getJsPath(name, basePath);
        if (Module.cache[path]) {
            return Module.cache[path]
        }
        return new Module(path, name)
    };
    Module.prototype = {
        load: function() {
            Module.loadingPaths[this.path] = true;
            var svnMod = this.svnMod || "superman",
                path = s_domain.staticUrl + "static/" + svnMod + "/";
            var _this = this;
            var isCSS = /\.css(?:\?|$)/i.test(this.name);
            this.type = isCSS ? "css" : "js";
            var modname = "/" + this.type + "/" + Module.moduleFileMap[svnMod][this.name];
            if (F._useConfig && Module.moduleFileMap[svnMod][this.name]) {
                path += this.type + "/" + Module.moduleFileMap[svnMod][this.name]
            } else {
                path += this.type + "/" + this.name + (isCSS ? "" : ".js")
            }
            if ($.inArray(modname, F._firstScreenCSS) >= 0 || F._useConfig && $.inArray(modname, F._firstScreenJS) >= 0) {
                if (isCSS) {
                    setTimeout(function() {
                        _this._loaded = true;
                        _this.ready()
                    }, 1)
                } else {
                    _this._loaded = true;
                    _this.ready()
                }
            } else {
                var startTime = (new Date).getTime();
                Script.create({
                    src: path,
                    type: this.type,
                    loaded: function() {
                        _this._info.loadedTime = (new Date).getTime() - startTime;
                        if (_this.type == "css") {
                            _this._loaded = true;
                            _this.ready()
                        }
                    }
                })
            }
        },
        lazyLoad: function() {
            var name = this.name;
            if (Module.lazyLoadPaths[this.getKey()]) {
                this.define();
                delete Module.lazyLoadPaths[this.getKey()]
            } else {
                if (this.exist()) {
                    return
                }
                Module.requiredPaths[this.getKey()] = true;
                this.load()
            }
        },
        ready: function(fn, isRequired) {
            var stack = isRequired ? this._requiredStack : this._readyStack;
            if (fn) {
                if (this._loaded) {
                    fn()
                } else {
                    stack.push(fn)
                }
            } else {
                Module.loadedPaths[this.path] = true;
                delete Module.loadingPaths[this.path];
                this._loaded = true;
                Module.currentPath = this.path;
                if (this._readyStack && this._readyStack.length > 0) {
                    this._inited = true;
                    var result, modSvnMod = this.svnMod;
                    if (result = this.fn.call(null, function(n) {
                            return Module.require(n, modSvnMod)
                        }, this.exports, new Context(this.name, modSvnMod))) {
                        this.exports = result
                    }
                    forEach(this._readyStack, function(func) {
                        func()
                    });
                    delete this._readyStack
                }
                if (this._requiredStack && this._requiredStack.length > 0) {
                    forEach(this._requiredStack, function(func) {
                        func()
                    });
                    delete this._requiredStack
                }
            }
        },
        define: function() {
            var _this = this,
                deps = this.deps,
                path = this.path,
                depPaths = [];
            if (!deps) {
                deps = this.getDependents()
            }
            if (deps.length) {
                forEach(deps, function(d) {
                    depPaths.push(Module.getJsPath(d, _this.path))
                });
                forEach(deps, function(d) {
                    var mod = Module.get(d, _this.path);
                    mod.ready(function() {
                        if (Module.isPathsLoaded(depPaths)) {
                            _this.ready()
                        }
                    }, true);
                    mod.lazyLoad()
                })
            } else {
                this.ready()
            }
        },
        exist: function() {
            var path = this.path;
            return path in Module.loadedPaths || path in Module.loadingPaths
        },
        getDependents: function() {
            var _this = this;
            var str = this.fn.toString();
            var req = str.match(/function\s*\(([^,]*),/i);
            var reg = new RegExp("[^.]\\b" + req[1] + "\\(\\s*('|\")([^()\"']*)('|\")\\s*\\)", "g");
            var deps = str.match(reg);
            var depsr = [];
            if (deps) {
                forEach(deps, function(d, i) {
                    depsr[i] = d.substr(req[1].length + 3).slice(0, -2)
                })
            }
            return depsr
        }
    };
    var Script = {
        create: function(opt) {
            var src = opt.src;
            if (src in this._paths) {
                return
            }
            this._paths[src] = true;
            forEach(this._rules, function(modify) {
                src = modify.call(null, src)
            });
            assetOnload(src, opt.type, opt.loaded)
        },
        _paths: {},
        _rules: [],
        addPathRule: function(modify) {
            this._rules.push(modify)
        }
    };

    function createNode(src, type) {
        var isCSS = type == "css";
        var node = document.createElement(isCSS ? "link" : "script");
        return node
    }

    function assetOnload(src, type, callback, reload) {
        var node = createNode(src, type);
        if (node.nodeName === "SCRIPT") {
            scriptOnload(node, cb)
        } else {
            styleOnload(node, cb)
        }
        var timer = setTimeout(function() {
                throw new Error("load " + type + " timeout : " + src);
                !reload && assetOnload(src + "?v=" + (new Date).valueOf(), type, cb, true)
            },
            F._loadScriptTimeout || 1e4);

        function cb() {
            if (!cb.isCalled) {
                cb.isCalled = true;
                clearTimeout(timer);
                callback && callback()
            }
        }
        var head = document.getElementsByTagName("head")[0];
        if (type == "css") {
            node.rel = "stylesheet";
            node.href = src;
            head.appendChild(node)
        } else {
            node.type = "text/javascript";
            node.charset = "utf-8";
            node.src = src;
            head.insertBefore(node, head.firstChild)
        }
    }

    function scriptOnload(node, callback) {
        node.onload = node.onerror = node.onreadystatechange = function() {
            if (/loaded|complete|undefined/.test(node.readyState)) {
                node.onload = node.onerror = node.onreadystatechange = null;
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                    try {
                        if (node.clearAttributes) {
                            node.clearAttributes()
                        } else {
                            for (var p in node) delete node[p]
                        }
                    } catch (x) {}
                }
                node = undefined;
                callback && callback()
            }
        }
    }

    function styleOnload(node, callback) {
        if (node.attachEvent) {
            node.attachEvent("onload", callback)
        } else {
            setTimeout(function() {
                poll(node, callback)
            }, 0)
        }
    }

    function poll(node, callback) {
        if (callback && callback.isCalled) {
            return
        }
        var isLoaded;
        var UA = navigator.userAgent;
        var isWebKit = ~UA.indexOf("AppleWebKit");
        var isOpera = ~UA.indexOf("Opera");
        if (isWebKit || isOpera) {
            if (node["sheet"]) {
                isLoaded = true
            }
        } else if (node["sheet"]) {
            try {
                if (node["sheet"].cssRules) {
                    isLoaded = true
                }
            } catch (ex) {
                if (ex.name === "SecurityError" || ex.name === "NS_ERROR_DOM_SECURITY_ERR") {
                    isLoaded = true
                }
            }
        }
        setTimeout(function() {
            if (isLoaded) {
                callback && callback()
            } else {
                poll(node, callback)
            }
        }, 1)
    }
    F.version = "1.0";
    F.use = function(names, fn) {
        if (typeof names === "string") {
            names = [names]
        }
        var args = [];
        var flags = [];
        forEach(names, function(name, i) {
            flags[i] = false
        });
        forEach(names, function(name, i) {
            var mod = Module.get(name),
                modLoaded = mod._loaded;
            mod.ready(function() {
                var modArg = mod.exports || {};
                modArg._INFO = mod._info;
                if (modArg._INFO) {
                    modArg._INFO.isNew = !modLoaded
                }
                args[i] = modArg;
                flags[i] = true;
                var done = true;
                forEach(flags, function(f) {
                    if (f === false) {
                        return done = false
                    }
                });
                if (fn && done) {
                    fn.apply(null, args)
                }
            });
            mod.lazyLoad()
        })
    };
    F.module = function(name, fn, deps) {
        var mod = Module.get(name);
        mod.fn = fn;
        mod.deps = deps;
        if (
            Module.requiredPaths[mod.getKey()]) {
            mod.define()
        } else {
            Module.lazyLoadPaths[mod.getKey()] = true
        }
    };
    F.pathRule = function(modify) {
        Script.addPathRule(modify)
    };
    F._addPath = function(prefix, path) {
        if (path.slice(-1) !== "/") {
            path += "/"
        }
        if (prefix in Module.paths) {
            throw new Error(prefix + " has already in Module.paths")
        } else {
            Module.paths[prefix] = path
        }
    };
    var _curSvnMod = "superman";
    F._setMod = function(svnMod) {
        _curSvnMod = svnMod || "superman"
    };
    F._fileMap = function(path, names) {
        if (typeof path === "object") {
            forEach(path, function(
                ns, p) {
                F._fileMap(p, ns)
            })
        } else {
            var svnMod = _curSvnMod;
            if (typeof names === "string") {
                names = [names]
            }
            path = path.indexOf("js/") == 1 ? path.substr(4) : path;
            path = path.indexOf("css/") == 1 ? path.substr(5) : path;
            var modMap = Module.moduleFileMap[svnMod];
            if (!modMap) {
                modMap = {}
            }
            forEach(names, function(name) {
                if (!modMap[name]) modMap[name] = path
            });
            Module.moduleFileMap[svnMod] = modMap
        }
    };
    F._eventMap = {};
    F.call = function(mod, fn, params) {
        var realArgs = [];
        for (var i = 2, len = arguments.length; i < len; i++) {
            realArgs.push(arguments[i])
        }
        F.use(mod, function(m) {
            var fns = fn.split(".");
            for (var i = 0, l = fns.length; i < l; i++) {
                m = m[fns[i]]
            }
            if (m) {
                m.apply(this, realArgs)
            }
        })
    };
    F._setContext = function(context) {
        if (typeof context === "object") {
            forEach(context, function(a, b) {
                Context.prototype[b] = Module.require(a)
            })
        }
    };
    F._setContextMethod = function(methodName, method) {
        Context.prototype[methodName] = method
    };
    var Context = function(modName, svnMod) {
        this.modName = modName;
        this.svnMod = svnMod
    };
    Context.prototype = {
        domain: s_domain,
        session: s_session,
        use: function(names, fn) {
            if (
                typeof names === "string") {
                names = [names]
            }
            for (var i = names.length - 1; i >= 0; i--) {
                names[i] = this.svnMod + ":" + names[i]
            }
            F.use(names, fn)
        }
    };
    F._Context = Context;
    F.addLog = function(modName, logCfg) {
        F.use("superman:lib/log", function(log) {
            log.defaultLog(modName, logCfg)
        })
    };
    F.fire = function(modName, evtName, evtArgs) {
        F.use("superman:lib/mod_evt", function(evt) {
            evt.fire(modName, evtName, evtArgs)
        })
    };
    F._defService = function(svnMod, srvObj) {
        if (svnMod) {
            var srvPool = Module.services[svnMod];
            srvPool = srvPool || {};
            forEach(srvObj,
                function(obj, key) {
                    srvPool[key] = obj
                });
            Module.services[svnMod] = srvPool
        }
    };
    F.getService = function(svnMod, srvKey, fn) {
        var srvPool = Module.services[svnMod];
        if (srvPool) {
            var srvMod = srvPool[srvKey];
            if (srvMod) {
                F.use(svnMod + ":" + srvMod, fn)
            } else {
                throw new Error(svnMod + " mod didn't provide service " + srvKey)
            }
        } else {
            throw new Error(svnMod + " mod didn't define any services")
        }
    }
})(function() {
    return window.F = {}
}());
F.module("superman:lib/sbase", function(require, exports, ctx) {
    var S = exports
});
F.use("superman:lib/sbase", function(S) {
    S.BaseClass = function() {
        var me = this,
            _events = {};
        me.on = function(eventName, handler) {
            var arr = _events[eventName];
            if (!arr) {
                arr = _events[eventName] = []
            }
            arr.push(handler)
        };
        me.un = function(eventName, handler) {
            if (!eventName) {
                _events = {};
                return
            }
            var arr = _events[eventName];
            if (arr) {
                if (handler) {
                    $.each(arr, function(i, h) {
                        if (h == handler) {
                            arr.splice(i, 1);
                            return false
                        }
                    })
                } else {
                    _events[eventName] = []
                }
            }
        };
        me.fire = function(eventName, args) {
            var arr = _events[eventName];
            if (arr) {
                args = args || {};
                $.each(arr, function(idx, handler) {
                    args._result = handler.call(me, $.extend({
                        _ctx: {
                            src: me
                        }
                    }, args))
                })
            }
        }
    };
    var Class = {};
    Class.create = function(cls, superClass) {
        superClass = superClass || S.BaseClass;
        return function Class() {
            superClass.apply(this, arguments);
            var bs = $.extend({}, this);
            cls.apply(this, arguments);
            this._super = bs
        }
    };
    S.Class = Class
});
F.module("lib/mod_evt", function(require, exports, ctx) {
    var handlers = {};
    var fire = function(modName, eventName, eventArgs) {
        var tmpArr = modName.split("/"),
            mod = tmpArr[0],
            submod = tmpArr[1],
            key = mod + "-" + eventName,
            eventResult = {
                handlerCount: 0,
                returnValue: true
            };
        if (handlers[key]) {
            eventArgs = eventArgs || {};
            var hs = handlers[key];
            for (var i = 0, len = hs.length; i < len; i++) {
                var h = hs[i];
                if (submod && h.submod && submod != h.submod) continue;
                var evtArgs = {
                    _MOD: mod,
                    _EVENT_NAME: eventName,
                    _SUBMOD: submod || ""
                };
                for (var k in eventArgs) {
                    evtArgs[k] = eventArgs[k]
                }
                var rValue = h.hnd(evtArgs);
                if (rValue === false) {
                    eventResult.returnValue = false
                }
            }
            eventResult.handlerCount = hs.length
        }
        return eventResult
    };
    var addEvent = function(modName, eventName, handler) {
        var tmpArr = modName.split("/"),
            mod = tmpArr[0],
            submod = tmpArr[1],
            key = mod + "-" + eventName;
        h = {
            hnd: handler,
            mod: mod,
            submod: submod
        };
        if (handlers[key]) {
            handlers[key].push(h)
        } else {
            handlers[key] = [h]
        }
    };
    var on = function(modName, evtNames, handler) {
        var mType = Object.prototype.toString.call(modName);
        if (
            mType == "[object String]") {
            var eType = Object.prototype.toString.call(evtNames);
            if (eType == "[object String]") {
                addEvent(modName, evtNames, handler)
            } else if (eType == "[object Array]") {
                for (var i = 0, len = evtNames.length; i < len; i++) {
                    addEvent(modName, evtNames[i], handler)
                }
            }
        } else if (mType == "[object Array]") {
            for (var i = 0, len = modName.length; i < len; i++) {
                on(modName[i], evtNames, handler)
            }
        }
    };
    var un = function(modName, eventName, handler) {
        var tmpArr = modName.split("/"),
            mod = tmpArr[0],
            submod = tmpArr[1],
            key = mod + "-" + eventName;
        if (
            handlers[key]) {
            var hs = handlers[key],
                newHs = [];
            for (var i = 0, len = hs.length; i < len; i++) {
                var h = hs[i];
                if (h.hnd != handler) newHs.push(h)
            }
            handlers[key] = newHs
        }
    };
    exports.fire = fire;
    exports.on = on;
    exports.un = un;
    exports.handlers = handlers
});
F.module("lib/log", function(require, exports, ctx) {
    var S = ctx.base;
    var buildInKeys = {
            m: 1,
            mod: 1,
            submod: 1,
            evttype: 1,
            mouse: 1,
            initiator: 1,
            portrait: 1,
            glogid: 1,
            slogid: 1,
            type: 1,
            pid: 1,
            logactid: 1
        },
        femods = {
            sys: 1,
            base: 1,
            page: 2,
            feed: 2,
            nav: 2,
            hot: 2,
            app: 2,
            msg: 2,
            res: 2
        },
        bUtype = s_session.usertype,
        bSuperVer = "supernewplus",
        bPortrait = s_session.portrait,
        bGlogId = s_session.logId || "0",
        logSrcDomain = 0,
        ubslogactids = {};
    var getBuildInValues = function(mod, submod) {
        var values = {
            mod: mod,
            submod: submod || "",
            utype: bUtype,
            superver: bSuperVer,
            portrait: bPortrait,
            glogid: bGlogId,
            type: 2011,
            pid: 315,
            isLogin: s_session.username ? 1 : 0,
            version: "PCHome",
            terminal: "PC",
            qid: s_session.seqId,
            sid: s_session.sid,
            super_frm: $.url.getQueryValue(location.href, "super_frm") || "",
            from_login: $.url.getQueryValue(location.href, "from_login") || "",
            from_reg: $.url.getQueryValue(location.href, "from_reg") || "",
            query: $("#kw").val(),
            curcard: s_session.curmod,
            curcardtab: $("#s_content_" + s_session.curmod + " " + ".s-xmancard").attr("data-curtab") || "",
            _r: Math.random()
        };
        return values
    };
    var imgLogSrc = function() {
        return $.url.escapeSSL("http://dj" + ++logSrcDomain % 3 + ".baidu.com/v.gif?")
    };
    var imgLog = function(src) {
        var n = "imglog__" + (new Date).getTime();
        var c = window[n] = new Image;
        c.onload = c.onerror = function() {
            window[n] = null
        };
        c.src = src;
        c = null
    };
    var logEventListener = function(evt) {
        var params = getBuildInValues(evt._MOD, evt._SUBMOD);
        var m = evt._MOD + "_" + evt._EVENT_NAME;
        params.m = m;
        if (ubslogactids[m]) {
            params.logactid = ubslogactids[m]
        }
        for (var k in evt) {
            if (k.indexOf(
                    "_") === 0) {
                continue
            }
            if (params[k]) {
                ctx.warn("logParamConflicted", k + " is conflicted in " + params.m);
                continue
            }
            var value = evt[k];
            var vType = typeof value;
            if (vType === "string" || vType === "number" || vType === "boolean") {
                params[k] = value
            }
        }
        var src = imgLogSrc() + $.url.jsonToQuery(params);
        if (params.logactid === "0200100000" || params.logactid === "0200100001" && params.clickType === "wordTopic") {
            imgLog("//www.baidu.com/home/hit/v.gif?" + $.url.jsonToQuery(params))
        }
        ctx.use("lib/mod_evt", function(evt) {
            var evtResult = evt.fire(
                "lib/log", "beforeSendLog", {
                    modEvt: evt,
                    logParams: params
                });
            if (evtResult.returnValue) {
                imgLog(src)
            }
        })
    };
    var defaultLog = function(modName, logCfg) {
        var cfgType = Object.prototype.toString.call(logCfg);
        switch (cfgType) {
            case "[object Array]":
                ctx.listen(modName, logCfg, logEventListener);
                break;
            case "[object Object]":
                var mod = modName.split("/")[0];
                for (var evtName in logCfg) {
                    if (logCfg.hasOwnProperty(evtName)) {
                        ctx.listen(modName, evtName, logEventListener);
                        ubslogactids[mod + "_" + evtName] = logCfg[evtName]
                    }
                }
                break
        }
    };
    var modReg = /home\/\w+\/(data|submit)\/\w+/;
    ctx.listen("lib/sbase", "ajaxSuccess", function(evt) {
        if (!evt.logId) {
            return
        }
        var ms = evt.url && evt.url.match(modReg);
        var m = ms && ms[0] || "";
        var paths = m.split("/");
        var mod = paths && paths[1]
    });
    var imgLogPC = function() {
        var params = getBuildInValues("superman:lib", "index");
        var optLog = {
            logactid: "1234567890",
            showTab: "10000",
            opType: "showpv"
        };
        var megeredParams = $.extend({}, optLog, params);
        var src = imgLogSrc() + $.url.jsonToQuery(megeredParams);
        imgLog(src)
    };
    var imgLogTC = function() {
        var rnd = "imglogtc__" + (new Date).getTime();
        var img = window[rnd] = new Image;
        img.onload = img.onerror = function() {
            window[rnd] = null
        };
        img.src = "//m.baidu.com/tc?tcreq4log=1" + "&ssid=" + window.s_session.portrait + "&from=0&pu=sz%401320_2001%2Cta%40iphone_1_9.1_3_601" + "&qid=" + window.s_session.logId + "pc" + "&ct=10&cst=1&clk_from=exception&clk_info=pclog";
        img = null
    };

    function randTool(probability) {
        return !!(Math.random() * 100 < probability)
    }
    imgLogPC();
    if (!!window.s_session.sid.match("20277")) {
        imgLogTC()
    }
    exports.log = logEventListener;
    exports.defaultLog = defaultLog
});
(function(global) {
    var EXT_TYPE = {
        PROTOTYPE: "prototype",
        INSTANCE: "instance",
        SINGLETON: "singleton",
        STATICTYPE: "static"
    };
    var extensions = {};

    function Thunder(opt) {
        var self = this;
        self.opt = opt || {};
        self.baseParams = self.opt.baseParams || {};
        self.config(opt, true);
        if (opt.autoBind) {
            self.bindLogHook()
        }
        simpleMerge(self, extensions)
    }
    Thunder.prototype = {
        config: function(opt) {
            var self = this;
            simpleMerge(self.opt, opt);
            self.baseURL = self.opt.baseURL || "//hpd.baidu.com/v.gif";
            self.domHook = self.opt.domHook || "data-stats";
            self.mainDom = self.opt.mainDom;
            self.skipPrevent = !!self.opt.skipPrevent;
            self.logRegx = self.opt.logRegx || "(.*?):(.*?);";
            self.baseParams = simpleMerge(self.baseParams, opt.baseParams);
            return self
        },
        send: function(pobj, callback, url) {
            var self = this;
            self.__sendPreHook && self.__sendPreHook(pobj);
            var id = "l" + Date.now();
            var req = window[id] = new Image;
            var params = "";
            var timer = null;
            url = url || self.baseURL;
            req.onload = req.onerror = req.onabort = function() {
                window[id] = null;
                if (timer) {
                    clearTimeout(timer);
                    timer = null;
                    callback && callback();
                    self.__sendAfrHook && self.__sendAfrHook(pobj, false)
                }
            };
            pobj = pobj || {};
            pobj.r = id;
            pobj._r = Math.random();
            pobj.isLogin = s_session.username ? 1 : 0;
            var baseParams = self.baseParams;
            pobj = simpleMerge(simpleMerge({}, baseParams), pobj);
            for (var i in pobj) {
                if (pobj.hasOwnProperty(i)) {
                    params += "&" + i + "=" + encodeURIComponent(pobj[i])
                }
            }
            req.src = url + "?" + params.slice(1);
            if (typeof callback === "function") {
                timer = setTimeout(function() {
                    timer = null;
                    callback()
                }, 500)
            }
            self.__sendAfrHook && self.__sendAfrHook(pobj, true);
            return self
        },
        bindLogHook: function(mainDom, domHook) {
            var self = this;
            mainDom = mainDom ? $(mainDom) : $(self.mainDom);
            mainDom && mainDom.on("click", domHook || "[" + self.domHook + "]", function(e) {
                self.hookClick.call(self, this, e)
            })
        },
        hookClick: function(dom, e) {
            var self = this;
            var dataLogStr = dom.getAttribute(self.domHook);
            var isSkip = dom.getAttribute("data-stopskip");
            var targetHref = dom.getAttribute("href");
            var callback = null;
            var logObj = {};
            var regx = new RegExp(self.logRegx, "g");
            var output = null;
            while (output = regx.exec(
                    dataLogStr)) {
                logObj[output[1]] = output[2]
            }
            if (dom.tagName.toLowerCase() === "a" && targetHref && isSkip) {
                e.preventDefault();
                callback = function() {
                    global.location.href = targetHref
                }
            }
            self.send(logObj, callback)
        }
    };

    function simpleMerge(obj1, obj2) {
        if (!obj2 || !obj1) {
            return obj1
        }
        for (var i in obj2) {
            if (obj2.hasOwnProperty(i)) {
                obj1[i] = obj2[i]
            }
        }
        return obj1
    }
    var thunderInstance = null;
    var exportThunder = {
        create: function(opt, cb) {
            return new Thunder(opt)
        },
        extend: function(ext, methodType) {
            switch (methodType) {
                case EXT_TYPE.PROTOTYPE:
                    simpleMerge(Thunder.prototype, ext);
                    break;
                case EXT_TYPE.STATICTYPE:
                    simpleMerge(Thunder, ext);
                    break;
                case EXT_TYPE.INSTANCE:
                case EXT_TYPE.SINGLETON:
                default:
                    simpleMerge(extensions, ext)
            }
        },
        get: function(opt) {
            return thunderInstance || (thunderInstance = this.create(opt))
        }
    };
    global.Thunder = exportThunder
})(this);
F.module("superman:lib/utils", function(require, exports, ctx) {
    function throttle(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        if (!options) options = {};
        var later = function() {
            previous = options.leading === false ? 0 : +new Date;
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null
        };
        return function() {
            var now = +new Date;
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
                if (!timeout) context = args = null
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining)
            }
            return result
        }
    }
    exports.throttle = throttle
});
F.module("superman:common/user_attr", function(require, exports, ctx) {
    var URLS = {
        SUBMIT_STATUS: ["/page/submit/userattr", "/pcweb/submit/manusertips"]
    };
    var userProp = [s_session.userProp || 0, s_session.userTips || 0],
        PropOrTips = {};
    var getAttr = function(name) {
        var propValue = userProp[0][name],
            tipsValue = userProp[1][name];
        if (propValue != undefined) {
            PropOrTips.name = 0;
            return propValue
        } else if (tipsValue != undefined) {
            PropOrTips.name = 1;
            return tipsValue
        } else return
    };
    var setAttr = function(name, value) {
        var oldValue = getAttr(
            name);
        if (typeof oldValue != "undefined" && oldValue != value) {
            $.ajaxpost(s_domain.baseuri + URLS.SUBMIT_STATUS[PropOrTips.name], {
                prop: name,
                value: parseValue(value)
            }, function(data) {
                if (data.errNo == 0) {
                    userProp[PropOrTips.name][name] = value;
                    ctx.fire("setUserAttr", {
                        attr: name,
                        state: "setSucc"
                    })
                } else {
                    ctx.fire("setUserAttr", {
                        attr: name,
                        state: "setFail"
                    })
                }
            })
        }
    };
    var setMultiAttr = function(names, values) {
        var _leng = names.length,
            _names = [],
            _values = [];
        for (var i = 0; i < _leng; i++) {
            var oldValue = getAttr(names[i]);
            if (
                typeof oldValue != "undefined" && oldValue != values[i]) {
                _names.push(names[i]);
                _values.push(parseValue(values[i]))
            }
        }
        var _nLeng = _names.length;
        if (_nLeng > 0) {
            if (isFromSameInterface) {
                $.ajaxpost(s_domain.baseuri + URLS.SUBMIT_STATUS[PropOrTips.name], {
                    prop: _names.join(","),
                    value: _values.join(",")
                }, function(data) {
                    if (data.errNo == 0) {
                        for (var j = 0; j < _nLeng; j++) {
                            userProp[PropOrTips.name][_names[j]] = _values[j] == "on" ? true : false;
                            ctx.fire("setUserAttr", {
                                attr: _names[j],
                                state: "setSucc"
                            })
                        }
                    } else {
                        for (var k = 0; k < _nLeng; k++) {
                            userProp[PropOrTips.name][_names[k]] = _values[k];
                            ctx.fire("setUserAttr", {
                                attr: _names[k],
                                state: "setFail"
                            })
                        }
                    }
                })
            } else {}
        }
    };
    var parseValue = function(value) {
        if (value === true) {
            return "on"
        } else if (value === false) {
            return "off"
        } else {
            return value
        }
    };
    var isFromSameInterface = function(names) {
        if (names && names.length > 0) {
            var _namesL = names.length,
                initvalue = PropOrTips[_names[0]];
            for (var i = _namesL - 1; i >= 0; i--) {
                if (PropOrTips[_names[0]] != initvalue) {
                    return false
                }
            }
            return true
        }
    };
    exports.getAttr = getAttr;
    exports.setAttr = setAttr;
    exports.setMultiAttr = setMultiAttr
});
F.module("superman:common/select", function(require, exports, ctx) {
    require("select.css");
    var S = ctx.base;
    var Select = S.Class.create(function(cfg) {
        var me = this,
            time = (new Date).getTime();
        me.value = null;
        me.words = null;
        me.selectId = "s_select_" + time;
        me.inputId = "s_select_input_" + time;
        me.inputMaskId = "s_select_input_mask_" + time;
        me.arrowId = "s_select_arrow_" + time;
        me.hiddenId = "s_select_hidden_" + time;
        me.layerId = "s_select_layer_" + time;
        me.selected = 0;
        me.isshow = false;
        me.maxCount = cfg.showCount || 10;
        me.optHeight = 20;
        me.mouseoverOpt = null;
        me.mouseoverIdx = null;
        me.timer = null;
        me.scroll = false;
        me.scrollTimer = null;
        var setOption = function(value, words, selected, pos) {
            if (pos != undefined) {
                var option = me.layer.find(".s-select-layer-option")[pos];
                if (option) {
                    $(option).val(value).html(words);
                    if (selected) {
                        option.className = "s-select-layer-option current";
                        setValue(value, words, pos)
                    } else {
                        option.className = "s-select-layer-option"
                    }
                }
            }
        };
        var addOption = function(value, words, selected, pos) {
            if (pos != undefined) {
                var options = me.layer.find(
                        ".s-select-layer-option"),
                    option = options[pos];
                if (option) {
                    $(option).before('<div value="' + value + '" class="s-select-layer-option' + (selected ? " current" : "") + '">' + words + "</div>")
                } else {
                    if (options.length) {
                        $(options.last()).after('<div value="' + value + '" class="s-select-layer-option' + (selected ? " current" : "") + '">' + words + "</div>")
                    } else {
                        me.layer.prepend('<div value="' + value + '" class="s-select-layer-option' + (selected ? " current" : "") + '">' + words + "</div>")
                    }
                }
            } else {
                me.layer.append(
                    '<div value="' + value + '" class="s-select-layer-option' + (selected ? " current" : "") + '">' + words + "</div>")
            }
            if (selected) {
                setValue(value, words, pos);
                updateCurrent()
            }
            setLayerHeight()
        };
        var updateCurrent = function() {
            eachOption(function(opt, idx) {
                if (idx == me.selected) {
                    $(opt).addClass("current")
                } else {
                    $(opt).removeClass("current")
                }
            })
        };
        var setValue = function(value, words, idx) {
            me.hidden.val(value);
            me.input.val(words);
            me.inputMask.html(words);
            me.selected = idx;
            me.mouseoverIdx = idx;
            me.fire("valueChange")
        };
        var getVlaue = function() {
            return me.hidden.val()
        };
        var bindEvent = function() {
            me.inputMask.bind("mousedown", function(e) {
                me.fire("clickSelect");
                me.input.focus();
                if (me.isshow) {
                    hideLayer()
                } else {
                    showLayer()
                }
                e.preventDefault();
                e.stopPropagation()
            });
            me.inputMask.bind("click", function(e) {
                e.preventDefault();
                e.stopPropagation()
            });
            me.arrow.bind("mousedown", function(e) {
                me.fire("clickSelect");
                me.input.focus();
                if (me.isshow) {
                    hideLayer()
                } else {
                    showLayer()
                }
                e.preventDefault();
                e.stopPropagation()
            });
            me.arrow.bind(
                "click",
                function(e) {
                    e.preventDefault();
                    e.stopPropagation()
                })
        };
        var setLayerPos = function() {
            var pos = me.select.offset(),
                left = 0,
                top = 26;
            if ($.isIE == 8) {
                left = -1;
                top = 25
            } else if ($.isIE == 7) {
                left = -1
            } else if ($.isIE6) {
                left = -1;
                top = 25
            }
            me.layer.css({
                left: pos.left + left + "px",
                top: pos.top + top + "px"
            })
        };
        var showLayer = function() {
            me.input.focus();
            if (me.isshow) return;
            setLayerPos();
            me.layer.addClass("show");
            setLayerHeight();
            updateCurrent();
            me.isshow = true;
            setScrollTop();
            bindLayer();
            me.fire("layerShow")
        };
        var setLayerHeight = function() {
            var options = me.layer.find(".s-select-layer-option");
            if (options.length > me.maxCount) {
                me.layer.css("height", me.optHeight * me.maxCount + "px")
            }
        };
        var hideLayer = function() {
            if (!me.isshow) return;
            me.layer.removeClass("show");
            me.isshow = false;
            unbindLayer();
            me.mouseoverOpt = null;
            me.fire("layerHide")
        };
        var bindLayer = function() {
            me.timer = setInterval(function() {
                setLayerPos()
            }, 300);
            me.input.bind("keydown", function(e) {
                if (e.keyCode && me.isshow) {
                    switch (e.keyCode) {
                        case 38:
                            up();
                            e.preventDefault();
                            e.stopPropagation();
                            break;
                        case 40:
                            down();
                            e.preventDefault();
                            e.stopPropagation();
                            break;
                        case 13:
                            enterFunc();
                            hideLayer();
                            e.preventDefault();
                            e.stopPropagation();
                            break
                    }
                }
            });
            $(document.body).bind("click", hideLayer);
            var options = me.layer.find(".s-select-layer-option");
            me.layer.bind("mouseenter", function(e) {
                $(options[me.selected]).removeClass("current");
                e.preventDefault();
                e.stopPropagation()
            });
            me.layer.bind("mouseleave", function(e) {
                me.mouseoverOpt && me.mouseoverOpt[0] && me.mouseoverOpt.remove("current");
                e.preventDefault();
                e.stopPropagation()
            });
            $.each(options, function(idx, o) {
                var option = $(o);
                option.bind("mousedown", function(e) {
                    setValue(option.attr("value"), option.html(), idx);
                    hideLayer();
                    e.preventDefault();
                    e.stopPropagation()
                });
                option.bind("mouseover", function(e) {
                    if (me.scroll) return;
                    eachOption(function(obj) {
                        $(obj).removeClass("current")
                    });
                    option.addClass("current");
                    me.mouseoverOpt = option;
                    me.mouseoverIdx = idx;
                    e.preventDefault();
                    e.stopPropagation()
                });
                option.bind("mouseout", function(e) {
                    if (me.scroll) return;
                    option.removeClass("current");
                    me.mouseoverIdx = idx;
                    e.preventDefault();
                    e.stopPropagation()
                })
            })
        };
        var enterFunc = function() {
            var options = me.layer.find(".s-select-layer-option");
            for (i = 0, len = options.length; i < len; i++) {
                if ($(options[i]).hasClass("current")) {
                    setValue($(options[i]).attr("value"), $(options[i]).html(), i);
                    break
                }
            }
        };
        var eachOption = function(callback) {
            var options = me.layer.find(".s-select-layer-option");
            $.each(options,
                function(idx, opt) {
                    callback && callback($(opt), idx)
                })
        };
        var unbindLayer = function() {
            me.timer && clearInterval(me.timer);
            me.timer = null;
            me.input.unbind("keydown");
            me.input.unbind("blur");
            eachOption(function(option) {
                $(option).unbind("mousedown");
                $(option).unbind("mouseover");
                $(option).unbind("mouseout")
            });
            me.layer.unbind("mouseenter");
            me.layer.unbind("mouseleave")
        };
        var up = function() {
            var idx = me.mouseoverIdx || me.selected;
            if (idx && idx > 0) {
                var options = me.layer.find(".s-select-layer-option");
                $(options[idx]).removeClass("current");
                $(options[idx - 1]).addClass("current");
                setValue($(options[idx - 1]).attr("value"), $(options[idx - 1]).html(), idx - 1);
                setScrollTop()
            }
        };
        var down = function() {
            var options = me.layer.find(".s-select-layer-option");
            var idx = me.mouseoverIdx || me.selected;
            if (idx < options.length - 1) {
                $(options[idx]).removeClass("current");
                $(options[idx + 1]).addClass("current");
                setValue($(options[idx + 1]).attr("value"), $(options[idx + 1]).html(), idx + 1);
                setScrollTop()
            }
        };
        var setScrollTop = function() {
            me.scroll = true;
            var c = me.selected + 1 - me.maxCount;
            if (c > 0) {
                me.layer.scrollTop(c * me.optHeight)
            } else {
                me.layer.scrollTop(0)
            }
            if (me.scrollTimer) {
                clearTimeout(me.scrollTimer);
                me.scrollTimer = null;
                me.scrollTimer = setTimeout(function() {
                    me.scroll = false
                }, 500)
            } else {
                me.scrollTimer = setTimeout(function() {
                    me.scroll = false
                }, 500)
            }
        };
        me.getResult = function() {
            return {
                value: me.hidden.val(),
                words: me.inputMask.html()
            }
        };
        me.hide = function() {
            me.select.hide();
            hideLayer()
        };
        me.show = function() {
            me.select.css("display", "inline-block")
        };
        me.addOption = addOption;
        me.setOption = setOption;
        me.getLayer = function() {
            return $("#" + me.layerId)
        };
        me.hideLayer = hideLayer;
        (function() {
            var html = ['<span id="' + me.selectId + '" class="s-select ' + cfg.customClass + '">', '<div id="' + me.inputMaskId + '" class="s-select-input-mask s-opacity-blank1 ' + cfg.customClass + '"></div><input type="input" class="s-select-input ' + cfg.customClass + '" value="' + me.words + '" id="' + me.inputId + '">',
                '<a class="s-select-arrow s-opacity-border3-left ' + cfg.customClass + '" id="' + me.arrowId + '" href="#" onclick="return false;" hidefocus></a></span>', '<input type="hidden" value="' + me.value + '" id="' + me.hiddenId + '">'
            ].join("");
            $(cfg.dom)[cfg.type](html);
            $("#head").append('<div id="' + me.layerId + '" class="s-select-layer  s-isindex-wrap ' + cfg.customClass + '"></div>');
            me.select = $("#" + me.selectId);
            me.input = $("#" + me.inputId);
            me.inputMask = $("#" + me.inputMaskId);
            me.arrow = $("#" + me.arrowId);
            me.hidden = $(
                "#" + me.hiddenId);
            me.layer = $("#" + me.layerId);
            $.each(cfg.options, function(idx, opt) {
                addOption(opt.value, opt.words, opt.selected, idx)
            });
            bindEvent()
        })()
    });
    exports.Select = Select
});
F.module("superman:common/bottom_layer", function(require, exports, ctx) {
    function init() {
        $("#bottom_layer .s-bottom-show").click(function() {
            if (s_session.isLogin) {
                window.location.href = location.protocol + "//" + location.host + "/home/xman/show/liteoff";
                return
            }
            $.cookie.remove("hide_feed");
            location.reload()
        });
        $("#bottom_layer .s-bottom-hide").click(function() {
            ctx.fire("hideMain");
            if (!s_session.isLogin) {
                $.cookie.set("hide_feed", 1);
                $("#qrcodeCon").removeClass("hide");
                $("#bottom_space").hide()
            }
        })
    }
    exports.init = init
});
F.call("superman:common/bottom_layer", "init");
!function(n){var r={};function e(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=r,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(i,t){if(1&t&&(i=e(i)),8&t)return i;if(4&t&&"object"==typeof i&&i&&i.__esModule)return i;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:i}),2&t&&"string"!=typeof i)for(var r in i)e.d(n,r,function(t){return i[t]}.bind(null,r));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=28)}([function(t,i){t.exports={e:Object.prototype.hasOwnProperty,a:function(t,i){for(var n=t,r=i.split(".");r.length;){if(n===undefined||null===n)return undefined;n=n[r.shift()]}return n},u:function(t){if("object"!=typeof t)return"";var i=[];for(var n in t)this.e.call(t,n)&&i.push(n+"="+encodeURIComponent(t[n]));return i.join("&")},f:function(t){for(var i in t)return!1;return!0},h:function(t,n){return t.replace(/{(\w*?)}/g,function(t,i){return n[i]===undefined?"":n[i]})},v:function(t){var i={'"':"&quot;",">":"&gt;","<":"&lt;","&":"&amp;"};return t.replace(/["<>&]/g,function(t){return i[t]})},_:function(t,e){var a=this;return t.replace(/\{(\w+):(\w+)\}/g,function(t,i,n){var r=e[i];switch(n){case"number":r=+r||0;break;case"boolean":r=!!r;break;case"html":r=a.v(r)}return r})},w:function(t){var i="";return window.JSON&&window.JSON.parse&&(i=window.JSON.parse(t)),i},y:function(t){var i="";try{i=window.JSON&&window.JSON.stringify?window.JSON.stringify(t):window.eval(t)}catch(n){}return i},b:function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},I:function(t){for(var i=[],n={},r=t.length,e=0;e<r;e++){var a=t[e];n[a]||(n[i[i.length]=a]=!0)}return i},k:function(t){return"[object Array]"===Object.prototype.toString.call(t)},A:function(t){return"[object Function]"===Object.prototype.toString.call(t)},S:function(t){return"[object Object]"===Object.prototype.toString.call(t)},x:function(t){return"[object Number]"===Object.prototype.toString.call(t)},D:function(t){return"[object String]"===Object.prototype.toString.call(t)},C:function(t){var i,n=Object.prototype.hasOwnProperty;if(!(t&&"[object Object]"===Object.prototype.toString.call(t)&&"isPrototypeOf"in t))return!1;if(t.constructor&&!n.call(t,"constructor")&&!n.call(t.constructor.prototype,"isPrototypeOf"))return!1;for(i in t);return i===undefined||n.call(t,i)},T:function(t){var i,n,r=t;if(!t||t instanceof Number||t instanceof String||t instanceof Boolean)return r;if(this.k(t)){r=[];var e=0;for(i=0,n=t.length;i<n;i++)r[e++]=this.T(t[i])}else if(this.C(t))for(i in r={},t)t.hasOwnProperty(i)&&(r[i]=this.T(t[i]));return r},P:function(t,i){var n=Array.prototype.slice.apply(arguments),r=n.shift(),e="function"==typeof this?this:n.shift();return function(){var t=Array.prototype.slice.apply(arguments);return e.apply(r,t.concat(n))}}}},function(t,i){t.exports={O:"BAIDU_SSP_",M:"___baidu_union_callback",U:"https:",B:"https:"===document.location.protocol,R:"___adblockplus_",L:"BAIDU_SSP_lcr",N:"//pos.baidu.com/",F:"",j:"pos.baidu.com",H:"HTML_POST",W:"SSP_JSONP",z:"STATIC_JSONP",V:"//pos.baidu.com/bfp/snippetcacher.php?",q:1,J:2,G:4,X:8,K:16,Y:"pageSearchId",$:"0",Q:"AUTO_JSONP",Z:4,it:"auto_dup",nt:"auto_ds",rt:"111003",et:"fatalError",at:"remote",ot:"BAIDU_DUP2_pageFirstRequestTime",st:"DUP_DEBUG_FLAG",ut:"https://dup.baidustatic.com/dup/painter/",ct:"__baidu_dup_jobruner",ft:111e3,ht:/^u?\d*0[0-7]_\d+$/,dt:{text_default_120_600:!0,text_default_160_600:!0,text_default_300_250:!0,text_default_250_250:!0,text_default_200_200:!0,text_default_336_280:!0,text_default_360_300:!0,text_default_234_60:!0,text_default_460_60:!0,text_default_all:!0},lt:{CLOSEAD:"closeAd"}}},function(t,i,f){var e=f(0),h=f(5),o=f(17),r=f(3);t.exports={g:function(t,i){return t?e.D(t)&&0<t.length?(i=i||window).document.getElementById(t):!t.nodeName||1!==t.nodeType&&9!==t.nodeType?null:t:null},vt:function(t,i){if(!t)return null;var n;if(document.getElementsByClassName)n=document.getElementsByClassName(t);else{n=[];for(var r=document.getElementsByTagName(i),e=0,a=r.length;e<a;e++){var o=r[e],s=o.getAttribute("class")||o.getAttribute("className");s&&0<=s.indexOf(t)&&n.push(o)}}return n},_t:function(t,i,n){if(!t)return null;if(1===t.nodeType)return t;var r=this.vt(t,i);if(n instanceof Function)for(var e=0,a=r.length;e<a;e++)if(n(r[e]))return r[e];return r[0]},pt:function(t){if(t.wt)return t.wt;var i=t.containerId;return t.wt=this.g(i)||this._t(i,"div",function(t){var i=r.__slotMap;for(var n in i)if(i.hasOwnProperty(n)&&i[n]&&i[n].wt===t)return!1;return!0}),t.wt},mt:function(t){return 9===t.nodeType?t:t.ownerDocument||t.document},gt:function(t){var i=this.mt(t);return i.parentWindow||i.defaultView||null},yt:function(t){try{if(t&&"object"==typeof t&&t.document&&"setInterval"in t)return!0}catch(i){return!1}return!1},bt:function(t,i){return(t=t||window)!=window.top&&t!=t.parent||!this.yt(t)},It:function(t){try{return!!t.parent.location.toString()}catch(i){return!1}},kt:function(t,i){i=2===arguments.length?i:t.parent;for(var n=0;n++<10&&this.bt(t,i);){if(!this.It(t))return!0;t=t.parent}return 10<=n},At:function(t,i,s){var u=(s=s||this.win||window).document;i=i||0,this.domReadyMonitorRunTimes=0,this.readyFuncArray=this.readyFuncArray||[],this.readyFuncArray.push({func:t,delay:i,done:!1});var n=e.P(this,function(){var t=!1;this.domReadyMonitorRunTimes++;var i=!1;try{s.frameElement&&(i=!0)}catch(a){i=!0}if(h.ie&&h.ie<9&&!i)try{u.documentElement.doScroll("left"),t=!0}catch(a){}else if("complete"===u.readyState||this.domContentLoaded)t=!0;else if(3e5<this.domReadyMonitorRunTimes)return void(this.domReadyMonitorId&&(s.clearInterval(this.domReadyMonitorId),this.domReadyMonitorId=null));if(t)try{if(this.readyFuncArray&&this.readyFuncArray.length)for(var n=0,r=this.readyFuncArray.length;n<r;n++){var e=this.readyFuncArray[n];e&&e.func&&!e.done&&(e.delay?(e.done=!0,s.setTimeout(e.func,e.delay)):(e.done=!0,e.func()))}}catch(o){}finally{this.domReadyMonitorId&&(s.clearInterval(this.domReadyMonitorId),this.domReadyMonitorId=null)}}),r=e.P(this,function(){this.domContentLoaded=!0,n()});this.domReadyMonitorId||(this.domReadyMonitorId=s.setInterval(n,50),u.addEventListener?(u.addEventListener("DOMContentLoaded",r,!1),s.addEventListener("load",r,!1)):u.attachEvent&&s.attachEvent("onload",r,!1))},St:function(t,i,n){return i=i.replace(/^on/i,"").toLowerCase(),t.addEventListener?t.addEventListener(i,n,!1):t.attachEvent&&t.attachEvent("on"+i,n),t},xt:function(t,i,n){return i=i.replace(/^on/i,"").toLowerCase(),t.removeEventListener?t.removeEventListener(i,n,!1):t.attachEvent&&t.detachEvent("on"+i,n),t},Dt:function(t,i){1===arguments.length&&e.x(t)&&(i=t,t=undefined),i=i||10;for(var n=window,r=0;r++<i&&this.bt(n)&&!this.kt(n)&&(!t||!t(n));)n=n.parent;return n},Ct:function(t){var i=this.yt(t)?t.document:this.mt(t);return"CSS1Compat"===i.compatMode?i.documentElement:i.body},Tt:function(t){var i=document.createElement("script");i.type="text/javascript",i.async=!0,i.src=t;var n=document.getElementsByTagName("script")[0];n.parentNode&&n.parentNode.insertBefore(i,n)},Pt:function(t){switch(t.nodeName.toLowerCase()){case"a":case"script":case"iframe":case"br":case"title":case"option":case"button":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return!1;default:return!0}},Ot:function(t,n,i,r){try{var e=t||document.createElement("script");if(!e.attachEvent||e.attachEvent.toString&&e.attachEvent.toString().indexOf("[native code")<0||h.opera?(this.St(e,"error",i),this.St(e,"load",n)):this.St(t,"readystatechange",function(t){var i=(t.currentTarget||t.srcElement).readyState;"complete"!==i&&"loaded"!==i||n(t)}),!t&&r){for(var a in e.type="text/javascript",e.async=!0,r)r.hasOwnProperty(a)&&(e[a]=r[a]);var o=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];o.parentNode.insertBefore(e,o)}return e}catch(c){var s=f(6),u=f(1);s.Et(u.et,c,{pos:"loadScriptError"})}},Mt:function(t,i){if(o.Ut(20)&&(i=this.Bt()+i),o.Ut(20)&&(i+=this.Bt()),o.Ut(20)){for(var n="",r="",e=o.Rt(1,3),a=0;a<e;a++)n+=this.Lt(),r+="</div>";i=n+i+r}return o.Ut(30)&&t.removeAttribute&&t.removeAttribute("id"),o.Ut(80)&&t.removeAttribute&&t.removeAttribute("style"),i},Bt:function(){var t=o.Nt(["div","abbr","span","ins","em"]),i="";o.Ut(20)&&(i=' id="'+o.Ft(5,10)+'" ');var n="";o.Ut(20)&&(n=' class="'+o.Ft(6,15)+'" ');var r=o.Nt(["display:none;","width:0px;height:0px;"]);o.Ut(50)&&(r+=o.jt()),r=' style="'+r+'" ';return e.h("<{tagname} {idString} {classString} {styleString}></{tagname}>",{tagname:t,idString:i,classString:n,styleString:r})},Lt:function(){var t="";o.Ut(30)&&(t=' id="'+o.Ft(5,10)+'" ');var i="";o.Ut(60)&&(i=' style="'+o.jt()+'" ');return e.h("<div {idString} {styleString}>",{idString:t,styleString:i})}}},function(t,i){var n="___delivery___global___counter___";if(window._SF_&&window._SF_._global_&&window._SF_._global_._ssp&&!window.___baidu_union){var r=window._SF_._global_._ssp;r.DUP_4_SF=!0,r.destroy=function(){try{window.top[n]={}}catch(t){window[n]={}}},window.___baidu_union=r}var e=window.___baidu_union=window.___baidu_union||{};try{e.counter=window.top[n]=window.top[n]||{}}catch(s){e.counter=window[n]=window[n]||{}}var a="",o="";e.domainInfo,e.domainInfo={dup:a,pos:o},e.startTime=(new Date).getTime(),t.exports=e},function(t,i,n){var c=n(1),o=n(11),p=n(2),s=n(17),u=n(0),w=n(8),f=n(5),e=n(15),r=n(6),h=n(24),a=n(23),d=n(3),l=n(10);d.__slotMap=d.__slotMap||{};var v=d.__slotMap,_=d.counter||{};_.slotTotalCount=_.slotTotalCount||1,_.slotCountIndex=_.slotCountIndex||{},t.exports={Ht:function(t){return v[t]},Wt:function(t){for(var i in v)if(v.hasOwnProperty(i)&&-1<i.indexOf(t))return v[i];return{}},zt:function(t){var i=""+t.slotId;_.slotCountIndex[i]=_.slotCountIndex[i]||0;var n={};return n.index=_.slotCountIndex[i],n.count=0===i.indexOf("u")?_.slotTotalCount:0,n.id=i+"_"+n.index,n.containerId=c.O+"_wrapper_"+i+"_"+n.index,n.slotId=t.slotId,n.productLine=t.productLine,n.errors=[],_.slotCountIndex[i]=_.slotCountIndex[i]+1,i!==c.$&&(_.slotTotalCount=_.slotTotalCount+1),n.isAsync=t.isAsync,n.timestampWatcher=d.startTime?{t1:d.startTime}:{t1:0},t.coa&&u.S(t.coa)?n.styleOpenApi=t.coa:window.cproStyleApi?n.styleOpenApi=window.cproStyleApi[i]||{}:n.styleOpenApi={},n.isUnion=0===i.indexOf("u"),n.width=0,n.height=0,n.domainInfo=d.domainInfo||{},n.domainInfo.mixOffset=a.Vt(n.domainInfo.pos),n},processSlot:function(t){var i=t.response.rtb_deliv=t.response.rtb_deliv||{},n=t.response.order_deliv=t.response.order_deliv||{},r=t.response.pdb_deliv=t.response.pdb_deliv||{},e=i.deliv_id=parseInt(i.deliv_id,10),a=i.demand_id=parseInt(i.demand_id,10),o=n.deliv_id=parseInt(n.deliv_id,10),s=n.demand_id=parseInt(n.demand_id,10),u=r.deliv_id=parseInt(r.deliv_id,10);r.demand_id=parseInt(r.demand_id,10);var c=t.response.placement||{};t.containerInfo=c.container||{},t.complementType=c.complement_type,t.isPdbAd=0===e&&0===a&&0===o&&0===s,t.isNeedCacheRequest=!isNaN(e)&&0!==e&&7===t.complementType||!isNaN(o)&&0!==o||!isNaN(e)&&0!==e&&0!==u},qt:function(t){v[t.id]=t},Jt:function(t,i){t.status=t.status^i},Gt:function(t,i){return 0<(t.status&i)},Xt:function(t,i){var n=this.Ht(t);n&&(n.status|=i)},Kt:function(){var t=v;for(var i in t)if(i&&t[i]&&t.hasOwnProperty(i)){var n=t[i];if(n.status>=c.J)continue;this.Yt(n),this.$t(n),this.Qt(n)}},Qt:function(t){0!==t.proxy&&1!==t.proxy&&(d.prScript=p.Ot(d.prScript,u.P(this,this.Zt,t),u.P(this,this.Zt,t),{src:"//cpro.baidustatic.com/cpro/ui/pr.js"}))},Zt:function(t,i){"object"!=typeof window.__baidu_dup_jobruner&&(window.__baidu_dup_jobruner="block",i.proxy=1,e.ti("___ds_storage__isblock",i.proxy+"|"+(new Date).getTime()),this.$t(i))},$t:function(t){!d.ii&&window.postMessage&&(d.ii=!0,p.St(window,"message",u.P(this,this.ni)));var i,n=t.isUnion||t.isAsync;t.proxy=t.proxy||this.ri(t),t.paramObj=t.paramObj||o.ei(t);var r=o.ai(t.paramObj,t.proxy,t.domainInfo.mixOffset),e=c.F+r;if(1===t.proxy&&t.domainInfo.mixOffset){var a=c.U+"//"+t.domainInfo.pos+"/";e=(a+=f.ie?"s?":s.Ft(5,10)+"?")+r}t.paramObj.dtm=c.H,t.timestampWatcher.t2=+new Date,(i=this.oi(t))?window[c.R](i):this.si(e,n),h.ui(t),this.Xt(t.id,c.J)},ni:function(t){var i=t.data;if("string"==typeof i&&window.JSON&&window.JSON.parse)try{i=JSON.parse(i)}catch(n){}i&&i.tuid&&(i.placement&&i.placement.update&&i.queryid?(this.ci(i),-1<i.tuid.indexOf("u")&&i.noadx&&parseInt(i.noadx,10)&&3!==parseInt(i.noadx,10)&&this.fi(i)):1===i.type&&this.hi(t,i))},hi:function(t,i){var n=t.origin||t.originalEvent.origin,r=n&&n.split("//")[1],e=i.tuid,a=i.msg,o=this.Wt(e),s=o&&o.response,u=s&&s.placement&&s.placement.basic&&s.placement.basic.publisherDomain&&s.placement.basic.publisherDomain.pos;!o||r!==c.j&&r!==u||"click"!==a||(this.li(o),l.vi(c.lt.CLOSEAD,e))},ci:function(t){var i,n=t.placement.update,r=e.Nt(t.tuid);r&&(i=u.w(r),e._i()&&window.JSON&&window.JSON.stringify&&i&&i.placement&&i.placement.update&&i.placement.update!==n&&(t.adExpire=(new Date).getTime(),e.ti(t.tuid,JSON.stringify(t))))},oi:function(t){try{if(f.ie&&f.ie<9||!e._i()||t.isAutoAd)return!1;var i=e.Nt(t.id);return!!i&&u.w(i)}catch(n){r.Et("elog",n,{pos:"localAdInfo",id:t.id})}},pi:function(t){try{var i=t.response,n=t.id;n&&!t.isPdbAd&&t.isUnion&&!t.isAutoAd&&window.JSON&&window.JSON.stringify&&e._i()&&!e.Nt(n)&&(i.adExpire=(new Date).getTime(),e.ti(n,JSON.stringify(i)))}catch(r){}},Yt:function(t){p.pt(t)||(t.isAsync?"union"===t.productLine&&(t.containerId="cpro_"+t.slotId):(document.write('<div id="'+t.containerId+'"></div>'),p.g(t.containerId)||this.wi(t))),this.Xt(t.id,c.q)},wi:function(t){try{var i=document.getElementsByTagName("script"),n=i[i.length-1];if(n){var r=n.parentNode;if(r){var e=document.createElement("div");return e.id=t.containerId,r.insertBefore(e,n),!0}}}catch(a){}return!1},si:function(t,i){if(i){var n=document.createElement("script");if(!n)return;n.type="text/javascript",n.async=!0,n.src=t;var r=document.getElementsByTagName("script")[0];r&&r.parentNode?r.parentNode.insertBefore(n,r):document.write('<script charset="utf-8" src="'+t+'"><\/script>')}else document.write('<script charset="utf-8" src="'+t+'"><\/script>')},mi:function(t){var i=t.response,n=i.pdb_deliv,r=i.rtb_deliv,e=i.order_deliv;return!(!t.isUnion&&7===t.complementType&&0===n.deliv_id&&0===r.deliv_id&&0===e.deliv_id)},fi:function(t){var i=this.Wt(t.tuid);i&&7===t.placement.complement_type&&this.li(i)},li:function(t){var i=p.pt(t);i&&(i.parentNode.removeChild(i),n(12).unregisetViewWatch(t))},processSlotInfo:function(t){var i=this.gi(t),n=t.response.placement.basic;return i.cname=n.cname,i},gi:function(t){var i=t.response.placement,n=t.response["extends"]||{},r=p.pt(t),e=i.container,a=t.styleOpenApi,o=e.width,s=e.height,u=a.cpro_w||a.rsi0||0,c=a.cpro_h||a.rsi1||0,f=e.sizeType;if(5!==f&&!t.isUnion&&n&&n.hasOwnProperty("sspw")&&n.hasOwnProperty("ssph")){var h=parseInt(n.sspw||0,10),d=parseInt(n.ssph||0,10),l=parseInt(n.cbsz||0,10);f=0<l?l:f,o=0<h?h:o,s=0<d?d:s}if(a.scale){f=2;var v=a.scale.split(".")||[];o=v[0],s=v[1]}(u||c)&&(f=1,o=u||w.yi(),s=c||s),("-1"===t.pcwd||t.ftpc||t.styleOpenApi.cpro_ftpc)&&(f="-1"===t.pcwd&&"-1"===t.pchd?8:5),a.sizeType&&(f=a.sizeType&&parseInt(a.sizeType,10)||f,o=a.width&&parseInt(a.width,10)||o,s=a.height&&parseInt(a.height,10)||s),2!==a.apType&&3!==a.apType||(e.location=a.apType);var _=0;switch(f){case 1:break;case 2:o=t.pcwd||o,s=t.pchd||s,o&&s&&(_=s/o),o=w.yi(),s=Math.ceil(o*_);break;case 3:o=w.yi();break;case 5:o&&s&&(_=s/o),o=w.bi(r.parentElement),s=Math.ceil(o*_);break;case 6:o=w.bi(r.parentElement);break;case 7:s=w.Ii(r.parentElement);break;case 8:o=w.bi(r.parentElement),s=w.Ii(r.parentElement)}return{width:t.width=o,height:t.height=s,sizeType:f}},ri:function(t){var i=-1;return t.isAnti?"block"===window[c.ct]||1===e.ki("isblock")?i=1:!u.S(window[c.ct])&&0!==e.ki("isblock")||(i=0):i=0,i}}},function(t,i,n){var s=n(0),u=window,c=window.navigator;var r={Ai:function(){var t=navigator.userAgent,i=window.RegExp;this.antBrowser=!1,/msie (\d+\.\d)/i.test(t)&&(this.ie=document.documentMode||+i.$1),/opera\/(\d+\.\d)/i.test(t)&&(this.opera=+i.$1),/firefox\/(\d+\.\d)/i.test(t)&&(this.firefox=+i.$1),/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(t)&&!/chrome/i.test(t)&&(this.safari=+(i.$1||i.$2)),/chrome\/(\d+\.\d)/i.test(t)&&(this.chrome=+i.$1,function a(){try{return"scoped"in document.createElement("style")}catch(t){return!1}}()&&(this.qihoo=!0)),/qqbrowser\/(\d+\.\d)/i.test(t)&&(this.tencent=!0),(/ucbrowser\/(\d+\.\d)/i.test(t)||/ubrowser\/(\d+\.\d)/i.test(t))&&(this.uc=!0),/miuibrowser\/(\d+\.\d)/i.test(t)&&(this.xiaomi=!0),/vivobrowser\/(\d+\.\d)/i.test(t)&&(this.vivo=!0),/oppobrowser\/(\d+\.\d)/i.test(t)&&(this.oppo=!0),/baiduboxapp\/([\d.]+)/.test(t)&&(this.baiduboxapp=!0),/qqbrowser|ucbrowser|ubrowser|miuibrowser|vivobrowser|oppobrowser/i.test(t)&&(this.isAdBlock=!0);try{/(\d+\.\d)/.test(s.a(window,"external.max_version"))&&(this.maxthon=+i.$1)}catch(o){}/Chrome\/[8-9][0-9]/.test(t)&&(this.hasSameSiteLimit=!0),(this.tencent||this.uc||this.xiaomi||this.vivo||this.oppo)&&(this.antBrowser=!0),this.isWebkit=/webkit/i.test(t),this.isGecko=/gecko/i.test(t)&&!/like gecko/i.test(t);for(var n=["Android","iPad","iPod","iPhone","iOS","Linux","Macintosh","Windows"],r="",e=0;e<n.length;e++)if(r=n[e],t.match(new RegExp(r,"i"))){"iPad"===r||"iPhone"===r||"iOS"===r||"iPod"===r?this.isIOS=!0:"Android"===r&&(this.isAndroid=!0);break}this.platform=r},Si:function(){var t=0;try{var i="https:"===document.location.protocol;if(45<=this.chrome||i)return 0;if(c.plugins&&c.mimeTypes.length){var n=c.plugins["Shockwave Flash"];n&&n.description&&(t=n.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")+".0")}if(0===t&&(u.ActiveXObject||u.hasOwnProperty("ActiveXObject")))for(var r=30;2<=r;r--)try{var e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+r);if(e){var a=e.GetVariable("$version");if(0<(t=a.replace(/WIN/g,"").replace(/,/g,".")))break}}catch(o){}t=parseInt(t,10),this.Si=function(){return t}}catch(s){t=0}return t}};r.Ai(),t.exports=r},function(t,i,n){var a=n(0),o=n(10),s=n(15),u="BAIDU_DUP_log_storage";t.exports={xi:function(t,i){var n=new Image,r="BAIDU_DUP_log_"+Math.floor(2147483648*Math.random()).toString(36);(window[r]=n).onload=n.onerror=n.onabort=function(){n.onload=n.onerror=n.onabort=null,window[r]=null,n=null,i&&i(u,t,!0)},n.src=t},Di:function(t){var i=new Image,n="baidu_dan_log_"+ +new Date;(window[n]=i).onload=i.onerror=i.onabort=function(){try{delete window[n]}catch(t){window[n]=undefined}i=null},t+=-1<t.indexOf("?")?"&":"?",t+="stamp="+Math.random(),i.src=t},Ci:function(t){var i=(t=a.S(t)?t:{}).url||"//eclick.baidu.com/se.jpg",n=t.data||{},r=t.option||"now",e=a.u(n);switch(i+=(0<=i.indexOf("?")?"&":"?")+e+(e?"&":"")+"ver=0603&rdm="+ +new Date,r){case"now":this.xi(i);break;case"block":break;case"unload":default:s.Ti(u,i,!0),o.St(window,"unload",a.P(this,function(){this.xi(i,a.P(s,s.Pi))}))}},Oi:function(t,i,n){if(!t||!i)return"";var r="//eclick.baidu.com/"+t+"?type="+i;if(n)for(var e in n)n.hasOwnProperty(e)&&(r+="&"+e+"="+n[e]);this.Ci({url:r,option:"now"})},Ei:function(t,i){this.Oi("se.jpg",t,i)},Et:function(t,i,n){n=n||{};var r=i&&i.stack?i.stack:i;n.stack=encodeURIComponent(r),this.Oi("rs.jpg",t,n)}}},function(t,i,n){var u=n(0),r=n(2),e=n(3);e.__pageInfo=e.__pageInfo||{};var c=e.__pageInfo,a=r.Dt(),f=a.BAIDU_SSP__info||(a.BAIDU_SSP__info={});t.exports={Mi:function(t,i,n){var r,e=n?f:c;if(u.D(t)){for(var a=t.split("."),o=e;a.length;){var s=a.shift();0<a.length?o[s]||(o[s]={}):o[s]=i,o=o[s]}r=i}return r},Ui:function(t,i){var n=i?f:c;if(u.D(t))for(var r=t.split(".");r.length;){var e=r.shift();if(!r.length||n[e]===undefined)return delete n[e],!0;n=n[e]}return!1},Bi:function(t,i){var n,r=i?f:c;return u.D(t)&&(n=u.a(r,t)),n},Ri:function(t){var i=window,n=i[t];return i[t]=undefined,n},Li:function(t,i,n){var r=n||window;return r[t]?r[t]:r[t]=i},Ni:function(t){return!!t&&(c=this.Bi("pageConfig")||{})[t]},Fi:function(t,i){return!(!t||!i)&&((c=this.Bi("pageConfig")||{})[t]=i,this.Mi("pageConfig",c),!0)}}},function(t,i,n){var f=n(2),o=n(0),s=n(5);t.exports={ji:function(t){t=t||window;try{var i=f.Ct(t).clientWidth;if(i||0===i)return i}catch(n){}return-1},Hi:function(t){t=t||window;try{var i=f.Ct(t).clientHeight;if(i||0===i)return i}catch(n){}return-1},Wi:function(t){var i={top:0,left:0};if(t===f.Ct(t))return i;var n=f.mt(t),r=n.body,e=n.documentElement;if(r&&t.getBoundingClientRect){var a=t.getBoundingClientRect();i.left=Math.floor(a.left)+Math.max(e.scrollLeft,r.scrollLeft),i.top=Math.floor(a.top)+Math.max(e.scrollTop,r.scrollTop),i.left-=e.clientLeft,i.top-=e.clientTop;var o=this.zi(r,"borderLeftWidth"),s=this.zi(r,"borderTopWidth"),u=parseInt(o,10),c=parseInt(s,10);i.left-=isNaN(u)?2:u,i.top-=isNaN(c)?2:c}return i},zi:function(t,i){if(!t)return"";var n="";n=-1<i.indexOf("-")?i.replace(/[-][^-]{1}/g,function(t){return t.charAt(1).toUpperCase()}):i.replace(/[A-Z]{1}/g,function(t){return"-"+t.charAt(0).toLowerCase()});var r,e=f.gt(t);if(t.style[i]||t.style[n])return t.style[i]||t.style[n];if(e&&e.getComputedStyle){if(r=e.getComputedStyle(t,null))return r.getPropertyValue(i)||r.getPropertyValue(n)}else if(t.currentStyle)return(r=t.currentStyle)[i]||r[n];return""},Vi:function(t){if(!t)return{top:0,left:0};var i=this.Wi(t),n=f.gt(t);if(!n)return i;try{for(var r=0;n!==n.parent&&r++<10&&!f.kt(n)&&n.frameElement;){var e=this.Wi(n.frameElement);i.left+=e.left,i.top+=e.top,n=n.parent}}catch(a){}return i},qi:function(t){for(var i=t,n=f.gt(i),r=100;i&&i.tagName;){var e=100;if(s.ie){if(5<s.ie)try{e=parseInt(o.a(i,"filters.alpha.opacity"),10)||100}catch(a){}r=e<r?e:r}else{try{e=100*(n.getComputedStyle(i,null).opacity||1)}catch(a){}r*=e/100}i=i.parentNode}return 0===r?0:r||100},Ji:function(t){var i=f.gt(t),n=this.qi(t);try{for(var r=0;r++<10&&f.bt(i)&&!f.kt(i);){n*=(i.frameElement?this.qi(i.frameElement):100)/100,i=i.parent}}catch(e){}return n},Gi:function(t){t=t||window;try{var i=f.Ct(t).scrollWidth;if(i||0===i)return i}catch(n){}return-1},Xi:function(t){t=t||window;try{var i=f.Ct(t).scrollHeight;if(i||0===i)return i}catch(n){}return-1},Ki:function(t){var i=(t=t||window).document;return t.pageYOffset||i.documentElement.scrollTop||i.body.scrollTop},Yi:function(t){var i=t||window,n=f.Ct(i);return i.pageXOffset||n.scrollLeft},$i:function(t,i){var n=t.offsetWidth;return i&&(n+=this.Qi(t,"Left")+this.Qi(t,"Right")),n},Qi:function(t,i){var n=this.zi(t,"margin"+i).toString().toLowerCase().replace("px","").replace("auto","0");return parseInt(n,10)||0},Zi:function(t,i){var n=t.offsetHeight;return i&&(n+=this.Qi(t,"Top")+this.Qi(t,"Bottom")),n},"in":function(t,i){var n=["<div ",'style="position: absolute; right: 0px; top: 0px; z-index: 9999999;line-height:1.2;','font-size: 12px;background:#ff0000;font-weight: 700;">',"BAIDU_AD_",i,"<br>",t.clientWidth,"*",t.clientHeight,"</div>"].join(""),r=document.createElement("div");r.innerHTML=n;var e=t.style;e.border="1px solid #ff0000",e.position=e.position||"relative",t.appendChild(r)},nn:function(t){for(var i=t,n=f.gt(i);i&&i.tagName;){if(!("hidden"!==n.getComputedStyle(i,null).visibility))return!1;i=i.parentNode}return!0},rn:function(t){var i=f.gt(t),n=this.nn(t);if(!n)return!1;try{for(var r=0;r++<10&&f.bt(i)&&!f.kt(i)&&i.frameElement;){if(!(n=this.nn(i.frameElement)))return!1;i=i.parent}}catch(e){}return!0},yi:function(){var t=Math.max(320,window.innerWidth);return t=isNaN(t)?this.ji():t},bi:function(t){if(!t)return window.screen.width;var i=parseInt(this.zi(t,"paddingLeft"),10)||0,n=parseInt(this.zi(t,"paddingRight"),10)||0,r=t.clientWidth-i-n;return r=0<r?r:window.screen.width},Ii:function(t){if(!t)return 0;var i=parseInt(this.zi(t,"paddingTop"),10)||0,n=parseInt(this.zi(t,"paddingBottom"),10)||0,r=t.clientHeight-i-n;return r=0<r?r:0}}},function(t,i,n){var h=n(1),d=n(4),u=n(34),r=n(7),e=n(6),l=n(2),a=n(0);t.exports={en:function(t,i){return t.nodeName&&t.nodeName.toUpperCase()===i.toUpperCase()},an:function(t,i){try{var n=document.createElement("script");n.type="text/javascript",t.src?n.src=t.src:n.text=t.text||t.textContent||t.innerHTML||"",i.insertBefore(n,i.firstChild)}catch(r){e.Et(h.et,r,{pos:"createscripterror",status:"renderFail"})}},on:function(t,i){if(!t)return!1;t.innerHTML='<span style="display: none">ie</span>'+i;for(var n=t.childNodes,r=[],e=0;n[e];e++)!this.en(n[e],"script")||n[e].type&&"text/javascript"!==n[e].type.toLowerCase()||r.push(n[e]);r.reverse();for(var a=0,o=r.length;a<o;a++)this.an(r[a].parentNode.removeChild(r[a]),t);return!0},sn:function(t,i){var n=d.Ht(t);if(n&&!d.Gt(n,h.K)){var r=n.response.pdb_deliv.deliv_des;r=r._html;var e=this.un();if(this.cn()&&i.getAttribute("src",2)!==e)i.src=e;else{if(r&&"url"===r.type)return i.src=r.content,void d.Xt(n.id,h.K);try{d.Xt(n.id,h.K);var a=u.fn(r,n);a.indexOf("<body>")<0&&(a="<!DOCTYPE html><body>"+a);var o=i.contentWindow.document;o.open("text/html","replace"),o.write(a),o.body&&(o.body.style.backgroundColor="transparent")}catch(s){}}}},cn:function(){var t=document.createElement("iframe"),i=!1;if(!document.body)return i;return t.src="about:blank",document.body.insertBefore(t,document.body.firstChild),i=function n(t){try{return!t.contentWindow.document}catch(i){return!0}}(t),document.body.removeChild(t),this.cn=function(){return i},i},hn:function(){var t=navigator.userAgent,i=t&&t.match(/iphone.*micromessenger/i);return this.hn=function(){return i},i},un:function(){return this.cn()?r.Ni("domainPolicyFileUrl")||"/domain-policy.htm":this.hn()?r.Ni("blankPolicyFileUrl")||"/blank-policy.htm":"about:blank"},renderRichMaterial:function(t){var i=t.response,n=i&&i.pdb_deliv&&i.pdb_deliv.deliv_des,r=n&&n._html,e=t.isNeedCacheRequest;if(!r||"rich"!==r.type||e)return!1;var a=l.pt(t),o=r.content,s=t.isAsync,u=t.productLine,c=!1;if(s)if(!s||"clb"!==u&&"dup"!==u)c=this.on(a,o);else{var f=this.dn(t);a.innerHTML=f,c=!0}else document.write(o),d.Xt(t.id,h.K),c=!0;return c},dn:function(t){var i=this.ln(t);return this.vn(i)},ln:function(t){var i=t.containerInfo,n=t.width||i.width,r=t.height||i.height,e=this.un();return{iframeId:"iframe"+t.id,srcAttriName:"src",onloadDefine:'onload="'+h.M+"(3, '"+t.id+"', this);\"",iframeWidth:""+n,iframeHeight:""+r,url:e}},vn:function(t){var i=["<iframe",' id="{iframeId}"',' name="{iframeId}"'," {onloadDefine}",' {srcAttriName}="{url}"',' width="{iframeWidth}"',' height="{iframeHeight}"',' align="center,center"',' vspace="0"',' hspace="0"',' marginwidth="0"',' marginheight="0"',' scrolling="no"',' frameborder="0"',' style="border:0;vertical-align:bottom;margin:0;width:{iframeWidth}px;height:{iframeHeight}px"',' allowtransparency="true">',"</iframe>"].join("");return a.h(i,t)}}},function(t,i,n){var r=n(3),e=n(0);r.__eventMap=r.__eventMap||{};var a=r.__eventMap;t.exports={St:function(t,i,n){if(t)if(t.addEventListener)t.addEventListener(i,n,!1);else if(t.attachEvent)t.attachEvent("on"+i,n);else{var r=t["on"+i];t["on"+i]=function(){r&&r.apply(this,arguments),n.apply(this,arguments)}}return t},_n:function(t,i){e.A(i)&&(a[t]=i)},pn:function(t){delete a[t]},vi:function(t){var i=a[t];if(e.A(i)){var n=Array.prototype.slice.call(arguments,1);i.apply(window,n)}}}},function(t,i,n){var d=n(1),o=n(29),s=n(31),u=n(20),c=n(32),f=n(22),h=n(33),l=n(23),v=n(5),_=n(17),p=n(2),e=n(0),w=n(6),a={slotParam:o,businessParam:s,browserParam:u,systemParam:c,additionalParam:f};t.exports={wn:function(t){for(var i=[],n=t.paramsList,r=0,e=n.length;r<e;r++){var a=n[r],o=a.key,s=a.encode,u=a.value,c=a.limit;try{u="function"==typeof u?u.apply(t):u,u=c?u.substr(0,c):u,u=s?encodeURIComponent(u):u,i.push({key:o,value:u})}catch(f){w.Et("adcodex_error",f,{key:encodeURIComponent(o)})}}return i},ei:function(t){var i=[];o.setSlotInfo(t),u.setSlotInfo(t),s.setSlotInfo(t),s.mn(p.Dt());for(var n={},r=0,e=(i=(i=(i=(i=(i=i.concat(this.wn(o))).concat(this.wn(s))).concat(this.wn(u))).concat(this.wn(f))).concat(this.wn(c))).length;r<e;r++){var a=i[r];n[a.key]=a.value}return n},gn:function(t){var i=[];h.setSlotInfo(t),h.mn(p.Dt());for(var n={},r=0,e=(i=i.concat(this.wn(h))).length;r<e;r++){var a=i[r];n[a.key]=a.value}return n},ai:function(t,i,n,r){var e=[];for(var a in t)if(a&&(t[a]||0===t[a])&&t.hasOwnProperty(a)&&(!r||!r[a])){var o=t[a];e.push(a+"="+o)}if(i&&(e=_.yn(e)),window&&window.location&&window.location.ancestorOrigins&&window.location.ancestorOrigins.length){var s=window.location.ancestorOrigins;e.push("lto="+encodeURIComponent(s[s.length-1])),e.push("ltl="+s.length)}return 1===i&&n&&!v.ie?l.bn(n,e):e.join("&")},getPmpRequestUrl:function(t){var i=t.paramObj,n=t.timestampWatcher,r=n.t1,e=n.t2,a=n.t3,o=t.response;i.qn=o.queryid;var s=["conwid="+t.width,"conhei="+t.height],u=o.pdb_deliv,c=o.order_deliv,f=o.rtb_deliv;o.media_protect&&"0"!==o.media_protect&&s.push("mpdi="+o.media_protect),u.deliv_id&&s.push("pdbid="+u.deliv_id),c.deliv_id&&s.push("orderid="+c.deliv_id),c.demand_id&&s.push("odid="+c.demand_id),f.deliv_id&&s.push("rtbid="+f.deliv_id),f.demand_id&&s.push("rdid="+f.demand_id),t.isNeedCacheRequest&&(i.dpv=i.qn),t.isUnion?s.push("dc=3"):s.push("dc=2"),0<r&&0<e&&0<a&&(i.tt=r+"."+(e-r)+"."+(a-r)+"."+(new Date-r));var h={};return i.exps&&(s.push("exps="+i.exps),h.exps=!0),this.In(t,d.U,d.kn,i,s,h)},An:function(t){var i=t.paramObj,n=d.B&&_.Ut(50)?"":d.U,r=d.N+"s?",e={},a=["wid="+t.width,"hei="+t.height];if(a.push("di="+i.di),e.di=!0,i.ltu&&(a.push("ltu="+i.ltu),e.ltu=!0),i.psi&&(a.push("psi="+i.psi),e.psi=!0),t.isUnion?a.push("dc=3"):a.push("dc=2"),1===t.proxy)for(var o=["ti","utdi","drs","cfv","cpl","chi","cce","tlm","psr","ccd","cja","cmi","col","cdo","tcn","ltr"],s=0;s<o.length;s++)e[o[s]]=!0;return this.In(t,n,r,i,a,e)},In:function(t,i,n,r,e,a){var o=i+n+e.join("&")+"&",s=t.response.placement.basic.publisherDomain,u="",c=!1;1===t.proxy&&s&&s.pos&&(o=i+"//"+s.pos+"/",v.ie?o=o+"s?"+e.join("&")+"&":(u=l.Vt(s.pos),o=o+_.Ft(5,10)+"?"+l.bn(u,e)+"&",c=!0));var f=o+this.ai(r,t.proxy,u,a);return c&&(f+="&swt=1"),f},Sn:function(t,i){var n=a[t]&&a[t].paramsList;if(n)for(var r=0;r<n.length;r++)if(n[r].key===i)return e.P(a[t],n[r].value)()}}},function(t,i,n){var l=n(2),_=n(8),s=n(5),u=n(6),r=n(0),c=1,f=2,h=3,p=!0,w=window,d=0,v=0;t.exports={xn:"//eclick.baidu.com/a.js",Dn:72e5,Cn:{},Tn:null,Pn:null,On:500,En:!1,regisetViewWatch:function(t){this.En||(this.Mn(),this.En=!0),this.Tn=this.Tn||[];var i=l.pt(t);if(i){var n=t.paramObj,r=t.width,e=t.height,a=t.response.queryid,o=t.containerInfo;r=o.width,e=o.height;var s=new Date,u=""+t.slotId,c={uid:t.id,slotId:u,domEle:i,jk:a,word:n.ltu,iframeStatus:n.dis,aw:r,ah:e,viewContext:{opacity:1,pageStayTime:0,pageStayTimeStamp:s,inViewTime:0,inViewTimeStamp:s,currViewStatus:!1,focusTime:0,adViewTime:0,currAdViewStatus:!1,adViewTimeStamp:s}};if(window.postMessage&&c.slotId&&-1<c.slotId.indexOf("u")){c.sendMessage=function(){if(this.watchIframeWindow&&this.watchIframeLoaded&&this.viewContext&&this.viewContext.lastAdViewStatus!==this.viewContext.currAdViewStatus)try{var t=this.analysisUrl&&this.analysisUrl.split("?"),i=t?t[1]:"";this.watchIframeWindow.postMessage(i,this.targetOrigin)}catch(n){}};var f=i.getElementsByTagName("iframe");if(f&&f.length){var h=f[0];c.watchIframe=h,c.targetOrigin=h.getAttribute("src")||"*";try{c.watchIframeWindow=h.contentWindow}catch(d){c.watchIframeWindow=""}c.viewContext.lastAdViewStatus=!1,c.viewContext.lastViewStatus=!1,l.St(c.watchIframe,"load",function(){c.watchIframeLoaded=!0,c.viewContext.lastAdViewStatus=!c.viewContext.currAdViewStatus,c.sendMessage()})}}this.Un(c,i),this.Tn.push(c)}},unregisetViewWatch:function(t){if(this.Tn)for(var i=t.id,n=0;n<this.Tn.length;n++){if(this.Tn[n].uid===i)return void this.Tn.splice(n,1)}},Bn:function(t,i){if(t&&i){var n=t+"?",r=i.viewContext;r.inViewTime>this.Dn&&(r.inViewTime=this.Dn),r.adViewTime>this.Dn&&(r.adViewTime=this.Dn),r.pageStayTime>=this.Dn&&(r.pageStayTime=this.Dn);var e=[];return e.push("tu="+i.slotId),e.push("op="+r.opacity),e.push("jk="+i.jk),e.push("word="+i.word),e.push("if="+i.iframeStatus),e.push("aw="+i.aw),e.push("ah="+i.ah),e.push("pt="+r.pageStayTime),e.push("it="+r.inViewTime),e.push("vt="+r.adViewTime),e.push("csp="+i.desktopResolution),e.push("bcl="+i.browserRegion),e.push("pof="+i.pageRegion),e.push("top="+i.top),e.push("left="+i.left),e.push("uid="+i.uid),e.push("iw="+r.currAdViewStatus),n+e.join("&")}},Mn:function(){this.Rn(),l.At(r.P(this,this.Ln),2e3),s.platform&&(-1<s.platform.indexOf("Android")||-1<s.platform.indexOf("Phone")||-1<s.platform.indexOf("iPod"))||l.St(w,"beforeunload",r.P(this,this.Nn))},Un:function(t,i){var n=_.Vi(i);t.left=n.left,t.top=n.top;var r=window.screen.availWidth,e=window.screen.availHeight;1e4<r&&(r=0),1e4<e&&(e=0),t.desktopResolution=r+","+e,t.browserRegion=_.ji(window)+","+_.Hi(window),t.pageRegion=_.Gi(window)+","+_.Xi(window)},Fn:function(t,i){var n,r,e,a=i.isInView,o=i.isAdView,s=new Date;return n=r=e=this.On,t.lastViewStatus=t.currViewStatus,t.lastAdViewStatus=t.currAdViewStatus,v===c&&(v=f,n=r=0,e=r=0),t.currViewStatus?(v===c&&((n=parseInt(s.getTime()-t.inViewTimeStamp.getTime(),10))<0?n=0:n>this.On&&(n=this.On)),t.inViewTime+=n,t.inViewTimeStamp=s):a&&(t.inViewTimeStamp=s),t.currViewStatus=a,t.currAdViewStatus?(v===h&&((e=parseInt(s.getTime()-t.adViewTimeStamp.getTime(),10))<0?e=0:e>this.On&&(e=this.On)),t.adViewTime+=e,t.adViewTimeStamp=s):o&&(t.adViewTimeStamp=s),t.currAdViewStatus=o,t.pageStayTime=t.pageStayTime||0,d=d||0,v===h&&(this.pageTimeSpan=parseInt(s.getTime()-t.pageStayTimeStamp.getTime(),10),r<0?r=0:r>this.On&&(r=this.On)),t.pageStayTime+=r,d+=r,p&&(t.focusTime+=r),t.pageStayTimeStamp=s,t.opacity=i.opacity,t},jn:function(t){var i=t.domEle;if(!i)return{isInView:!1,isAdView:!1,opacity:1};var n=!1,r=!1,e=1;if(p)try{if(e=this.Ji(t),this.Hn(i)){var a=_.ji(w),o=_.Hi(w),s=this.Vi(i),u=_.$i(i),c=_.Zi(i);n=0<=s.top&&s.bottom<=o&&0<=s.left&&s.left<=a;var f=0<s.top?s.top:0,h=s.bottom>o?o:s.bottom,d=0<s.left?s.left:0,l=s.right>a?a:s.right;if(f<h&&d<l)r=.5*(u*c)<(h-f)*(l-d)}else r=n=!1}catch(v){}return{isInView:n,isAdView:r,opacity:e}},Hn:function(t){return!!t&&(50<=_.Ji(t)&&_.rn(t))},Ji:function(t){var i=t.uid,n=t.domEle;this.Cn[i]=this.Cn[i]||0;var r=_.Ji(n);return 100===r&&(this.Cn[i]|=1),r<100&&0<r&&(this.Cn[i]|=2),0===r&&(this.Cn[i]|=4),this.Cn[i]},Vi:function(t){var i=_.Wi(t),n=_.Yi(window),r=_.Ki(window),e=_.$i(t,!1),a=_.Zi(t,!1);return{top:i.top-r,bottom:i.top-r+a,left:i.left-n,right:i.left-n+e,topAbs:i.top,bottomAbs:i.top+a,leftAbs:i.left,rightAbs:i.left+e}},Wn:function(){if(this.Tn)for(var t=0,i=this.Tn.length;t<i;t++){var n=this.Tn[t],r=this.jn(n);n.viewContext=this.Fn(n.viewContext,r),n.analysisUrl=this.Bn(this.xn,n),n.sendMessage&&n.sendMessage()}},zn:function(){this.Wn(),d>=this.Dn&&this.Nn(!1)},Rn:function(){v=c,this.Vn(w),(!s.ie||s.ie&&6<s.ie)&&this.zn(),this.Pn=setInterval(r.P(this,this.zn),this.On)},Ln:function(){var t,i,n,r;for(t=0,i=this.Tn.length;t<i;t++)(n=this.Tn[t])&&(r=n.domEle)&&this.Un(n,r)},Nn:function(t){try{if(clearInterval(this.Pn),v!==f)return void(v=h);var i,n;for(v=h,this.Wn(),i=0,n=this.Tn.length;i<n;i++){var r=this.Tn[i];r&&r.analysisUrl&&!r.isSended&&(r.isSended=!0,0===i&&(r.analysisUrl+="&total="+this.Tn.length),u.Ci({url:r.analysisUrl}))}if(t){var e,a=(new Date).getTime();if(s.ie)for(e=a+200;a<e;)a=(new Date).getTime();else{for(n=1e5,i=0;i<n;i++);for(n=1e7<(n=2e7/((e=(new Date).getTime())-a))?1e7:n,i=0;i<n;i++);}}}catch(o){}},Vn:function(t){t=t||w,p=!0,s.ie?(l.St(t,"focusin",r.P(this,this.Jn)),l.St(t,"focusout",r.P(this,this.Gn))):(l.St(t,"focus",r.P(this,this.Jn)),l.St(t,"blur",r.P(this,this.Gn)))},Jn:function(){p=!0},Gn:function(){p=!1}}},function(t,i,n){var r,e,a,o=n(3),s=n(0),u={mixDom:{percent:10,expId:"110063",baseId:"110053"}};if(!o.__onlyExps)for(var c in o.__onlyExps={},u)u.hasOwnProperty(c)&&u[c]&&(a=u[c]).onlyExp&&(r=a.expId,e=a.baseId,r&&(o.__onlyExps[r]=!0),e&&(o.__onlyExps[e]=!0));t.exports={Xn:function(t,i){return t&&i?t+=","+i:t=t||i,t},Kn:function(t){var i="",n=1e4*Math.random(),r=100*t.percent,e=200*t.percent;return n<r?i=t.expId:r<=n&&n<e&&(i=t.baseId),i},Yn:function(t,i){var n=u[t],r=this.Kn(n),e="";return(r=r&&this.$n(i)?"":r)&&(r===n.expId?e="exp":r===n.baseId&&(e="base")),{expType:e,expId:r}},$n:function(t){if(s.f(o.__onlyExps))return!1;var i=this.Qn(t),n=i&&i.split(",");if(0<n.length)for(var r=0;r<n.length;r++)if(o.__onlyExps[n[r]])return!0;return!1},Qn:function(t){return t&&t.exps?t.paramObj&&t.paramObj.exps?t.paramObj.exps:t.exps:""}}},function(t,i,n){var u=n(1),c=n(25),f=n(11),h=n(0),d=n(7),r=n(9);t.exports={getFrameHTML:function(t){if(t.isPdbAd)return r.dn(t);var i=this.ln(t);return this.vn(i)},ln:function(t){var i=t.containerInfo,n=t.width||i.width,r=t.height||i.height,e=t.isDsFlow?f.An(t):f.getPmpRequestUrl(t),a="";if(t.isNeedCacheRequest){var o=t.response.queryid;c.Zn(o,t),d.Li("adsbybaidu_callback",h.P(c,c.tr)),a='onload="'+u.M+"(1, '"+o+"', this);\""}else if(t.styleOpenApi&&t.styleOpenApi.floatingState&&"show"!==t.styleOpenApi.floatingState||2===i.location){var s=t.styleOpenApi&&t.styleOpenApi.floatingState?t.styleOpenApi.floatingState:"upSlideShow";a='onload="'+u.M+"(2, '"+i.location+"', '"+s+"', this);\""}return{iframeId:"iframe"+t.id,srcAttriName:"src",onloadDefine:a,iframeWidth:""+n,iframeHeight:""+r,url:e}},vn:function(t){var i=["<iframe",' id="{iframeId}"',' name="{iframeId}"'," {onloadDefine}",' {srcAttriName}="{url}"',' width="{iframeWidth}"',' height="{iframeHeight}"',' align="center,center"',' vspace="0"',' hspace="0"',' marginwidth="0"',' marginheight="0"',' scrolling="no"',' frameborder="0"',' style="border:0;vertical-align:bottom;margin:0;width:{iframeWidth}px;height:{iframeHeight}px"',' allowtransparency="true">',"</iframe>"].join("");return h.h(i,t)}}},function(t,i){var a=null,e=!1;try{(a=window.localStorage)&&a.removeItem&&(e=!0)}catch(n){}t.exports={ir:"___ds_storage__",nr:72e5,_i:function(){return e},ti:function(t,i,n){if(a){i=n?encodeURIComponent(i):i;try{a.setItem(t,i)}catch(r){}}},Nt:function(t,i){if(a)try{var n=a.getItem(t);return i&&n?decodeURIComponent(n):n}catch(r){return null}return null},Ti:function(t,i,n){if(a){i=n?encodeURIComponent(i):i;var r=this.Nt(t)||"";r+=(r&&"|")+i;try{this.ti(t,r)}catch(e){}}},rr:function(t){try{a&&a.removeItem(t)}catch(i){}},Pi:function(t,i,n){if(a){i=n?encodeURIComponent(i):i;var r=this.Nt(t)||"";if(r=r.replace(new RegExp(i+"\\|?","g"),"").replace(/\|$/,""))try{this.ti(t,r)}catch(e){}else a.removeItem(t)}},ki:function(t){var i,n=this.Nt(this.ir+t)||"";if(e&&n){var r=(new Date).getTime();n=n.split("|"),(parseInt(n[1],10)||0)+this.nr>r&&(i=parseInt(n[0],10)||0)}return i},er:function(t){this.rr(this.ir+t)}}},function(t,i){t.exports={Ci:function(t){var i=t.response.pdb_deliv.deliv_des,n=i&&i._html,r=n&&n.monitorUrl;if(r){var e=new Image,a="log"+ +new Date;window[a]=e,"http"===r.substr(0,4).toLowerCase()?("http://"===r.substr(0,7).toLowerCase()&&(r=r.replace("http://","//")),"https://"===r.substr(0,8).toLowerCase()&&(r=r.replace("https://","//"))):r="//"+r;e.onload=e.onerror=e.onabort=function(){e.onload=e.onerror=e.onabort=null;try{delete window[a]}catch(t){window[a]=undefined}},e.src=r}}}},function(t,i){t.exports={Rt:function(t,i){return t=t||0,i=i||1,Math.floor(Math.random()*(i-t+1))+t},Ft:function(t,i){for(var n="",r=this.Rt(t,i),e=0;e<r;e++)n+=String.fromCharCode(Math.floor(26*Math.random())+97);return n},Ut:function(t){var i=!1;return t=10*(t||50),this.Rt(0,1e3)<t&&(i=!0),i},Nt:function(t){var i;t&&0<t.length&&(i=t[this.Rt(0,t.length-1)]);return i},jt:function(){var t=["padding-left:0px;","padding-right:0px;","padding-top:0px;","padding-bottom:0px;","padding:0px;","margin-left:0px;","margin-right:0px;","margin-top:0px;","margin-bottom:0px;","margin:0px;","cursor:auto;","visibility:visible;","text-align:left;","zoom:1;"];return t[this.Rt(0,t.length-1)]},yn:function(t){for(var i=t.length;0<i;i--){var n=Math.floor(Math.random()*i),r=t[i-1];t[i-1]=t[n],t[n]=r}return t}}},function(t,i,n){var f=n(0),h=n(7);t.exports={ar:"bizOrientations",or:"bizUrgentOrientations",sr:function(t,i){var n=this.ur.apply(this,arguments);return this.cr(t,n)},ur:function(t,i){return t&&/^[0-9a-zA-Z]+$/.test(t)&&i?i=f.k(i)?i:Array.prototype.slice.call(arguments,1):[]},cr:function(t,i){if(!i||!i.length)return!1;var n=this.ar,r=h.Bi(n)||{},e={};for(var a in r)f.e.call(r,a)&&(e[a]=f.k(r[a])?r[a].slice():r[a]);for(var o=e[t]||[],s=i.length,u=0;u<s;u++){var c=i[u];"string"==typeof c&&(c=encodeURIComponent(c)).length<=100&&(o[o.length]=c)}return!!o.length&&(e[t]=f.I(o),h.Mi(n,e),!0)},fr:function(t){t=t||500,t=Math.max(0,Math.min(t,500));var i,n=[],r=h.Bi(this.or)||h.Bi(this.ar)||{};if(f.S(r))for(var e in r)f.e.call(r,e)&&(i=e+"="+r[e].join(","),n[n.length]=i);h.Mi(this.or,undefined),n.sort(function(t,i){return t.length-i.length});for(var a="",o=n.length,s=0;s<o&&!(a.length+n[s].length>=t);s++)a+=(s?"&":"")+n[s];return a}}},function(t,i,n){var e=n(20),a=n(1),o=n(0),s=n(6);t.exports={hr:function(t){o.S(t)?(this.hasher=t.hasher,this.time=t.time,this.url=t.url,this.random=t.random,this.screen_resolution=t.screen_resolution,this.screen_orientation=t.screen_orientation,this.canvas=t.canvas,this.ie_activex=t.ie_activex):"function"==typeof t&&(this.hasher=t)},dr:function(){var t=[];t.push((new Date).getTime()),t.push(Math.random()),this.url&&t.push(this.url);try{if(t.push(navigator.userAgent),t.push(navigator.language),t.push(window.screen.colorDepth),this.screen_resolution){var i=this.lr();void 0!==i&&t.push(i.join("x"))}t.push((new Date).getTimezoneOffset()),t.push(this.vr()),t.push(this._r()),t.push(this.pr()),document.body?t.push(typeof document.body.addBehavior):t.push(typeof undefined),t.push(typeof window.openDatabase),t.push(navigator.cpuClass),t.push(navigator.platform),t.push(navigator.doNotTrack),this.canvas&&this.wr()&&t.push(this.mr())}catch(n){s.Et(a.et,n,{key:"pageSearchId",value:"navigatorParam"})}return this.hasher?this.hasher(t.join("~~~"),31):this.gr(t.join("~~~"),31)},yr:function(t,i){t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]],i=[i[0]>>>16,65535&i[0],i[1]>>>16,65535&i[1]];var n=[0,0,0,0];return n[3]+=t[3]+i[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=t[2]+i[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=t[1]+i[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=t[0]+i[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]},br:function(t,i){t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]],i=[i[0]>>>16,65535&i[0],i[1]>>>16,65535&i[1]];var n=[0,0,0,0];return n[3]+=t[3]*i[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=t[2]*i[3],n[1]+=n[2]>>>16,n[2]&=65535,n[2]+=t[3]*i[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=t[1]*i[3],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=t[2]*i[2],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=t[3]*i[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=t[0]*i[3]+t[1]*i[2]+t[2]*i[1]+t[3]*i[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]},Ir:function(t,i){return 32===(i%=64)?[t[1],t[0]]:i<32?[t[0]<<i|t[1]>>>32-i,t[1]<<i|t[0]>>>32-i]:(i-=32,[t[1]<<i|t[0]>>>32-i,t[0]<<i|t[1]>>>32-i])},kr:function(t,i){return 0===(i%=64)?t:i<32?[t[0]<<i|t[1]>>>32-i,t[1]<<i]:[t[1]<<i-32,0]},Ar:function(t,i){return[t[0]^i[0],t[1]^i[1]]},Sr:function(t){return t=this.Ar(t,[0,t[0]>>>1]),t=this.br(t,[4283543511,3981806797]),t=this.Ar(t,[0,t[0]>>>1]),t=this.br(t,[3301882366,444984403]),t=this.Ar(t,[0,t[0]>>>1])},gr:function(t,i){i=i||0;for(var n=(t=t||"").length%16,r=t.length-n,e=[0,i],a=[0,i],o=[0,0],s=[0,0],u=[2277735313,289559509],c=[1291169091,658871167],f=0;f<r;f+=16)o=[255&t.charCodeAt(f+4)|(255&t.charCodeAt(f+5))<<8|(255&t.charCodeAt(f+6))<<16|(255&t.charCodeAt(f+7))<<24,255&t.charCodeAt(f)|(255&t.charCodeAt(f+1))<<8|(255&t.charCodeAt(f+2))<<16|(255&t.charCodeAt(f+3))<<24],s=[255&t.charCodeAt(f+12)|(255&t.charCodeAt(f+13))<<8|(255&t.charCodeAt(f+14))<<16|(255&t.charCodeAt(f+15))<<24,255&t.charCodeAt(f+8)|(255&t.charCodeAt(f+9))<<8|(255&t.charCodeAt(f+10))<<16|(255&t.charCodeAt(f+11))<<24],o=this.br(o,u),o=this.Ir(o,31),o=this.br(o,c),e=this.Ar(e,o),e=this.Ir(e,27),e=this.yr(e,a),e=this.yr(this.br(e,[0,5]),[0,1390208809]),s=this.br(s,c),s=this.Ir(s,33),s=this.br(s,u),a=this.Ar(a,s),a=this.Ir(a,31),a=this.yr(a,e),a=this.yr(this.br(a,[0,5]),[0,944331445]);switch(o=[0,0],s=[0,0],n){case 15:s=this.Ar(s,this.kr([0,t.charCodeAt(f+14)],48));case 14:s=this.Ar(s,this.kr([0,t.charCodeAt(f+13)],40));case 13:s=this.Ar(s,this.kr([0,t.charCodeAt(f+12)],32));case 12:s=this.Ar(s,this.kr([0,t.charCodeAt(f+11)],24));case 11:s=this.Ar(s,this.kr([0,t.charCodeAt(f+10)],16));case 10:s=this.Ar(s,this.kr([0,t.charCodeAt(f+9)],8));case 9:s=this.Ar(s,[0,t.charCodeAt(f+8)]),s=this.br(s,c),s=this.Ir(s,33),s=this.br(s,u),a=this.Ar(a,s);case 8:o=this.Ar(o,this.kr([0,t.charCodeAt(f+7)],56));case 7:o=this.Ar(o,this.kr([0,t.charCodeAt(f+6)],48));case 6:o=this.Ar(o,this.kr([0,t.charCodeAt(f+5)],40));case 5:o=this.Ar(o,this.kr([0,t.charCodeAt(f+4)],32));case 4:o=this.Ar(o,this.kr([0,t.charCodeAt(f+3)],24));case 3:o=this.Ar(o,this.kr([0,t.charCodeAt(f+2)],16));case 2:o=this.Ar(o,this.kr([0,t.charCodeAt(f+1)],8));case 1:o=this.Ar(o,[0,t.charCodeAt(f)]),o=this.br(o,u),o=this.Ir(o,31),o=this.br(o,c),e=this.Ar(e,o)}return e=this.Ar(e,[0,t.length]),a=this.Ar(a,[0,t.length]),e=this.yr(e,a),a=this.yr(a,e),e=this.Sr(e),a=this.Sr(a),e=this.yr(e,a),a=this.yr(a,e),("00000000"+(e[0]>>>0).toString(16)).slice(-8)+("00000000"+(e[1]>>>0).toString(16)).slice(-8)+("00000000"+(a[0]>>>0).toString(16)).slice(-8)+("00000000"+(a[1]>>>0).toString(16)).slice(-8)},_r:function(){try{return!!window.localStorage}catch(t){return!0}},vr:function(){try{return!!window.sessionStorage}catch(t){return!0}},pr:function(){try{return!!window.indexedDB}catch(t){return!0}},wr:function(){var t=document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))},lr:function(){return this.screen_orientation?window.screen.height>window.screen.width?[window.screen.height,window.screen.width]:[window.screen.width,window.screen.height]:[window.screen.height,window.screen.width]},mr:function(){var t=document.createElement("canvas"),i=t.getContext("2d"),n="http://valve.github.io";return i.textBaseline="top",i.font='14px "Arial"',i.textBaseline="alphabetic",i.fillStyle="#f60",i.fillRect(125,1,62,20),i.fillStyle="#069",i.fillText(n,2,15),i.fillStyle="rgba(102, 204, 0, 0.7)",i.fillText(n,4,17),t.toDataURL()},xr:function(){try{for(var t="",i=e.paramsList,n=0;n<i.length;n++)if("ltu"===i[n].key){t=o.P(e,i[n].value)();break}return this.hr({url:t}),this.dr()}catch(r){s.Et(a.et,r,{key:"pageSearchId"})}}}},function(t,i,n){var e=n(1),r=n(5),a=n(2),o=n(8),s=n(21),u=n(30),c=n(3),f=window,h=f.document,d=f.navigator,l=a.Dt();t.exports={paramsList:[{key:"dbv",value:function(){return r.qihoo?"1":r.chrome?"2":"0"}},{key:"drs",value:function(){try{return{uninitialized:0,loading:1,loaded:2,interactive:3,complete:4}[h.readyState]}catch(t){return-1}}},{key:"pcs",value:function(){return[o.ji(l),o.Hi(l)].join("x")}},{key:"pss",value:function(){return[o.Gi(l),o.Xi(l)].join("x")}},{key:"cfv",value:function(){return r.Si()}},{key:"cpl",value:function(){return d.plugins.length||0}},{key:"chi",value:function(){return f.history.length||0}},{key:"cce",value:function(){return d.cookieEnabled||0}},{key:"cec",value:function(){return(h.characterSet?h.characterSet:h.charset)||""}},{key:"tlm",value:function(){return Date.parse(h.lastModified)/1e3}},{key:"prot",value:function(){return"2"}},{key:"rw",value:function(){var t=Math.max(320,Math.min(window.innerWidth,window.innerHeight));return isNaN(t)&&(t=Math.min(o.ji(),o.Hi())),t||0}},{key:"ltu",encode:!0,limit:700,value:function(){var t;return 0<(t=c.location&&c.location.href?c.location.href:s.Dr(function(t){var i=o.ji(t),n=o.Hi(t);return 400<i&&120<n})).indexOf("cpro_prev")&&(t=t.slice(0,t.indexOf("?"))),t}},{key:"liu",encode:!0,limit:700,value:function(){return a.bt(f)?h.URL:""}},{key:"ltr",encode:!0,limit:300,value:function(){var t="";try{t=l.opener?l.opener.document.location.href:""}catch(i){}return t||l.document.referrer}},{key:"lcr",encode:!0,value:function(){if("union"===this.Cr.productLine)return"";var t=h.referrer;if(!t)return"";var i=t.replace(/^https?:\/\//,"");i=(i=i.split("/")[0]).split(":")[0],i=s.Tr(i);var n=s.Tr(),r=u.Pr(e.L);return r&&n===i?r:n!==i?(u.Or(e.L,t,{domain:n}),t):""}},{key:"ecd",encode:!0,value:function(){return r.ie&&r.ie<9?0:1}}],setSlotInfo:function(t){this.Cr=t}}},function(t,i,n){var r=n(2);t.exports={Dr:function(t){var i=r.Dt(t),n="";return r.bt(i)&&(n=i.document.referrer),n=n||i.location.href},Tr:function(t){0===(t=t||document.domain).indexOf("www.")&&(t=t.substr(4)),"."===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1));var i="([a-z0-9][a-z0-9\\-]*?\\.(?:"+["com","cn","net","org","gov","info","la","cc","co","jp","us","hk","tv","me","biz","in","be","io","tk","cm","li","ru","ws","hn","fm","tw","ma","in","vn","name","mx","gd","im"].join("|")+")(?:\\.(?:cn|jp|tw|ru|th))?)$",n=new RegExp(i,"i"),r=t.match(n);return r?r[0]:t}}},function(t,i){t.exports={paramsList:[],Er:{clid:{key:"apdi",encode:!0},cuid:{key:"udi",encode:!0},ctkey:{key:"lcdi",encode:!0},acid:{key:"acid",encode:!0}},Mr:function(t,i){for(var n in this.paramsList=[],i)if(n&&i.hasOwnProperty(n)&&this.Er[n]){var r=this.Er[n],e={};try{r.key&&(e.key=r.key,e.value=this.Ur(r,i[n])),r&&!r.key&&(e.key=n,e.value=this.Ur(r,i[n])),this.paramsList.push(e)}catch(a){}}},Ur:function(t,i){return t.encode?encodeURIComponent(i):i}}},function(t,i,n){var c=n(3);c.__mappingCache=c.__mappingCache||{},t.exports={Vt:function(t){if(!t)return 0;for(var i=21,n=0;n<t.length;n++)i+=t.charCodeAt(n);return i},Br:function(t){var i,n=t%25+1,r="key"+n;if(!(i=c.__mappingCache[r])){i={};for(var e=97;e<=122;e++){var a=String.fromCharCode(e),o=e+n;o=122<o?o-26:o;var s=String.fromCharCode(o);i[a]=s}c.__mappingCache[r]=i}return i},Rr:function(t){var i,n=t%64+1,r="v"+n,e="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_-.";if(!(i=c.__mappingCache[r])){i={};for(var a=0;a<e.length;a++){var o=e.charAt(a),s=a+n,u=e.charAt(65<=s?s-65:s);i[o]=u}c.__mappingCache[r]=i}return i},bn:function(t,i){for(var n=this.Br(t),r=this.Rr(t),e={},a=0;a<i.length;a++){i[a]=i[a].replace(/\./g,"%_"),i[a]=i[a].replace(/%/g,".");var o=i[a].split("=");e[o[0]]=o[1]}var s=[];for(var u in e)if(e.hasOwnProperty(u)&&e[u]){for(var c="",f=0;f<u.length;f++){c+=n[u.charAt(f)]}c+="=";for(var h=e[u],d=0;d<h.length;d++){var l=h.charAt(d);r[l]?c+=r[l]:c+=l}s.push(c)}return s.join("&")}}},function(t,i,n){var r=n(1),e=n(3),a=n(10),o=n(2),s=n(15),u=n(0),c=n(7),f=n(13),h=n(5);t.exports={Lr:function(){this.idPrefix="BAIDU_DUP_fp_",this.fpElId=this.idPrefix+"wrapper",o.g(this.fpElId)||a.St(window,"load",u.P(this,this.Nr))},Nr:function(){if(!o.g(this.fpElId)){var t=window.document,i=t.body,n=t.createElement("div");n.id=this.fpElId,n.style.position="absolute",n.style.left="-1px",n.style.bottom="-1px",n.style.zIndex=0,n.style.width=0,n.style.height=0,n.style.overflow="hidden",n.style.visibility="hidden",n.style.display="none";var r=t.createElement("iframe");r.id=this.idPrefix+"iframe",r.src="https://pos.baidu.com/wh/o.htm?ltr=",r.style.width=0,r.style.height=0,r.style.visibility="hidden",r.style.display="none";try{n.insertBefore(r,n.firstChild),i&&i.insertBefore(n,i.firstChild)}catch(e){}}},ui:function(t){try{if(e.antiScript||!this.Fr(t))return;e.antiScript=document.createElement("script"),e.antiScript.type="text/javascript",e.antiScript.async=!0,e.antiScript.src="//cpro.baidustatic.com/cpro/ui/ab.min.js";var i=document.getElementsByTagName("script")[0];i&&i.parentNode&&i.parentNode.insertBefore(e.antiScript,i),o.Ot(e.antiScript,function(){window.BAIDU_SSP_sendAntiLog&&window.BAIDU_SSP_sendAntiLog()}),c.Li("__abbaidu_2028_cb",u.P(this,function(t){t&&s.ti("___ds_storage__loadAntiFile",t)}))}catch(n){}},jr:function(t){var i=t.paramObj,n=i.exps||"";if(this.Fr(t)){var r=s.Nt("___ds_storage__loadAntiFile")?"119015":"";n=f.Xn(n,r),i.exps=n}},Fr:function(t){return(h.isAndroid||h.isIOS)&&!o.bt(window)&&!t.isAnti&&r.ht.test(t.id)}}},function(t,i,n){var c=n(4),f=n(1),h=n(2),d=n(9),a=n(12),r={},l={};t.exports={Zn:function(t,i){r[t]=i},Hr:function(t){return r[t]},Wr:function(t,i){if(!t||l[t])return!1;l[t]=i;var n=this.Hr(t),r=f.V+"dpv="+t+"&di="+n.slotId;h.Tt(r)},tr:function(t){if("success"!==(t.html||"success")){var i=this.Hr(t.dpv);if(i){var n=i.response,r=n.pdb_deliv,e=n.rtb_deliv,a=n.order_deliv,o=r.deliv_des;if(o=o._html||{},0===parseInt(r.deliv_id,10)&&(0!==parseInt(a.deliv_id,10)||0!==parseInt(e.deliv_id,10))&&7===n.placement.complement_type)return this.zr(i);if("rich"===o.type){var s=h.pt(i);d.on(s,o.content)}else{var u=l[t.dpv];c.Jt(i,f.K),u.outerHTML=d.dn(i)}}}},zr:function(t){var i=t.containerId,n=h.pt(t),r=document.getElementById(i+"_left"),e=document.getElementById(i+"_right");n&&(a.unregisetViewWatch(t),n.parentNode.removeChild(n)),r&&r.parentNode.removeChild(r),e&&e.parentNode.removeChild(e)}}},function(t,i,n){var e=n(1),r=n(4),a=n(24),o=n(7),s=n(27),u=n(35),c=n(36),f=n(37),h=n(38),d=n(39),l=n(2),v=n(0),_=n(3),p=n(12),w=n(40),m=n(8),g=n(6),y=n(41),b=n(42),I=n(45),k=n(46),A=n(47),S=n(48),x=n(25),D=n(9),C={inlayFix:b,"mobile.inlayFix":I,"mobile.float":k,"mobile.insideText":A,"ds.inlay":S};t.exports={Kt:function(){this.Vr(),w.qr(),d.qr(),c.qr(),f.qr(),u.qr(),h.qr(),a.Lr()},Vr:function(){o.Li(e.R,v.P(this,this.Jr)),o.Li(e.M,this.Gr)},Jr:function(t){try{var i=r.Ht(t.tuid);if(!i||i.containerId&&!l.pt(i))return;i.response=t,r.Xt(i.id,e.G),r.processSlot(i),i.timestampWatcher.t3=(new Date).getTime(),r.pi(i),a.jr(i),this.Xr(i)}catch(n){if(!t.tuid)return;g.Et(e.et,n,{pos:"callback",id:t.tuid})}},Xr:function(t){var i=s.Kr(t);if(i){var n=C[i]||this.Yr(i);n?this.$r(i,t,n):this.Qr(i,t)}},Qr:function(t,i){var n=t;0<n.indexOf(".")&&(n=n.replace(".","/")),n=e.ut+n+".js",y.Zr(i.id,n,v.P(this,this.te,t,i))},te:function(t,i){try{var n=this.Yr(t);this.$r(t,i,n)}catch(r){g.Et(e.et,r,{pos:"painterLoadCallback",painter:t,id:i.id})}},Yr:function(t){var i=_.painter;if(i){var n=t.split(".");return"mobile"===n[0]?i.mobile&&i.mobile[n[1]]:i[n[0]]}},$r:function(t,i,n){n&&(n.render(i),this.ne(i),t&&-1<t.indexOf("mobile")&&p.regisetViewWatch(i),this.re(i))},ne:function(i){var t=l.pt(i),n=t&&t.querySelector&&t.querySelector("iframe");n&&l.St(n,"load",function(){if(window.JSON&&window.JSON.stringify&&n.contentWindow&&n.contentWindow.postMessage){var t=JSON.stringify({type:1,tuid:i.id});n.contentWindow.postMessage(t,"*")}})},Gr:function(t){try{var i=Array.prototype.slice.call(arguments,1);switch(t){case"auto":w.Jr.apply(w,i);break;case 1:x.Wr.apply(x,i);break;case 2:k.ee.apply(k,i);break;case 3:D.sn.apply(D,i)}}catch(n){g.Et(e.et,n,{pos:"commoncallback"})}},re:function(t){var i=l.pt(t);-1<(t.paramObj.dis?t.paramObj.ltu:window.location.href).indexOf(e.st)&&m["in"](i,t.id)}}},function(t,i,n){var h=n(1),d=n(13);t.exports={Kr:function(t){var i=t.response;if(!i.painter){var n=this.ae(t);if(n)return n}return this.oe(i)},ae:function(t){var i=t.response.placement.userdefine||"",n=t.response.placement.encode_userdefine||"";n&&"encoded"===n&&(i=decodeURIComponent(i),t.response.placement.userdefine=i);for(var r=i.split("|")||[],e={},a=0,o=r.length;a<o;a++){var s=r[a].split("="),u=s[0];u&&(e[u]=s[1])}if(3===r.length&&e.hasOwnProperty("cpro_template")&&e.hasOwnProperty("cpro_version")&&h.dt[e.cpro_template]&&"2.0"===e.cpro_version&&(t.paramObj.exps=d.Xn("117318",t.paramObj.exps)),e.hasOwnProperty("painter"))return e.painter;var c=t.styleOpenApi.tn||"",f=parseInt(t.styleOpenApi.xuanting||0,10);return 0<=c.indexOf("mobile")&&0<f?"mobile.float":0<=c.indexOf("mobile")?"mobile.inlayFix":0<f?"dynamicFloat":c&&0<c.length&&c.indexOf("_xuanfu")<0&&c.indexOf("float")<0?"inlayFix":""},oe:function(t){return this.se(t)?"ds.inlay":this.ue(t)?"mobile.float":this.ce(t)?"mobile.inlayFix":this.fe(t)?"mobile.float":this.he(t)?"mobile.insideText":this.de(t)?"inlayFix":this.le(t)?"insideText":this.ve(t)?"dynamicFloat":this._e(t)?"bottomSearchBar":void 0},_e:function(t){var i=t.placement,n=i.container,r=i.fillstyle;return!(3!==n.anchoredType||!n.slide||9!==r.btnStyleId)},de:function(t){var i=t.placement,n=i.basic,r=i.container,e=r.floated;return 1===n.rspFormat&&1===n.flowType&&1===r.anchoredType&&(!e||(1===e.trigger||!this.pe(e)))},pe:function(t){for(var i in t)return!0;return!1},ve:function(t){var i=t.placement,n=i.basic,r=i.container,e=r.floated;return!(1!==n.rspFormat||1!==n.flowType||1!==r.anchoredType||!e||8!==e.trigger)},le:function(t){var i=t.placement,n=i.basic,r=i.container;return 3===n.rspFormat&&1===n.flowType&&8===r.occurrence&&11===r.anchoredType},ce:function(t){var i=t.placement,n=i.basic,r=i.container;return 1===n.rspFormat&&2===n.flowType&&1===r.anchoredType},fe:function(t){var i=t.placement,n=i.basic,r=i.container;return 1===n.rspFormat&&2===n.flowType&&(3===r.anchoredType||11===r.anchoredType)},he:function(t){var i=t.painter,n=t.placement,r=n.basic,e=n.container;return 3===i||"mobile.insideText"===i||!i&&3===r.rspFormat&&2===r.flowType&&8===e.occurrence&&11===e.anchoredType},se:function(t){var i=t.painter;return 1===i||"mobile.inlayFix"===i||"inlayFix"===i},ue:function(t){var i=t.painter;return 2===i||"mobile.float"===i}}},function(t,i,n){try{a=n(3),o=n(7),s=n(0),u=n(4),c=n(12),f=n(14),h=n(9),d=n(11),l=n(26),n(49),o.Li("regisetViewWatch",s.P(c,c.regisetViewWatch),a),o.Li("getFrameHTML",s.P(f,f.getFrameHTML),a),o.Li("renderRichMaterial",s.P(h,h.renderRichMaterial),a),o.Li("processSlotInfo",s.P(u,u.processSlotInfo),a),o.Li("getPmpRequestUrl",s.P(d,d.getPmpRequestUrl),a),l.Kt()}catch(v){var r=n(6),e=n(1);r.Et(e.et,v,{date:"0604"})}var a,o,s,u,c,f,h,d,l},function(t,i,n){var a=n(2),o=n(8),e=n(5),s=n(1),u=n(13),c=n(3),r=n(19),f=n(6),h=window;t.exports={paramsList:[{key:"psi",value:function(){var t=c[s.Y];return t=t||(c[s.Y]=r.xr())}},{key:"di",value:function(){return this.Cr.slotId}},{key:"dri",value:function(){return this.Cr.index}},{key:"dis",value:function(){var t=0;a.bt(h)&&(t+=1),a.kt(h,h.top)&&(t+=2);var i=o.ji(),n=o.Hi();(i<40||n<10)&&(t+=4);try{if(3==(3&t)){var r=a.Dt();r.document.referrer&&r.top===r.parent&&(t+=8)}}catch(e){f.Et(s.et,e,{pos:"disParam"})}return t}},{key:"dai",value:function(){return this.Cr.count}},{key:"ps",value:function(){var t=a.pt(this.Cr),i=o.Vi(t);return i.top+"x"+i.left}},{key:"coa",encode:!0,value:function(){var t=[],i=this.Cr.styleOpenApi;for(var n in"-1"===this.Cr.pcwd&&(i.cpro_ftpc="true"),i)if(n&&"undefined"!=typeof i[n]&&i.hasOwnProperty(n)){var r=n;if("width"===n||"height"===n||"sizeType"===n||"apType"===n||"floatingState"===n)continue;"cpro_w"===n&&(r="rsi0"),"cpro_h"===n&&(r="rsi1"),t.push(r+"="+encodeURIComponent(i[n]))}return t.join("&")}},{key:"enu",value:function(){return"encoding"}},{key:"cw",value:function(){var t=this.Cr.styleOpenApi.cpro_ftpc||"true"===this.Cr.styleOpenApi.cpro_ftpc||"-1"===this.Cr.pcwd,i=a.pt(this.Cr);if(t&&i&&i.parentElement.clientWidth)return i.parentElement.clientWidth||0}},{key:"exps",value:function(){var t=this.Cr.exps;if(t&&0<=t.indexOf(s.ft)){for(var i,n=t.split(","),r=0;r<n.length;r++)(i=parseInt(n[r],10))===s.ft&&1===this.Cr.proxy&&(i=e.isAdBlock?i+1:i+2,n[r]=""+i);t=n.join(",")}return u.Xn(t,c.expId)}},{key:"ant",value:function(){return 1===this.Cr.proxy?1:0}}],setSlotInfo:function(t){this.Cr=t}}},function(t,i){t.exports={Pr:function(t,i){var n=new RegExp("(^| )"+t+"=([^;]*)(;|$)").exec(document.cookie),r="";return n&&(r=i?decodeURIComponent(n[2]):n[2]),r},Or:function(t,i,n,r){var e=n.expires;document.cookie=t+"="+(r?encodeURIComponent(i):i)+(n.path?"; path="+n.path:"")+(e?"; expires="+e.toGMTString():"")+(n.domain?"; domain="+n.domain:"")},we:function(t){var i=new Date;i.setTime(i.getTime()-86400),this.Or(t,"",{path:"/",expires:i})}}},function(t,i,n){var r=n(1),e=n(5),a=n(18),o=n(3);t.exports={mn:function(t){this.me=t},paramsList:[{key:"dcb",value:function(){return r.R}},{key:"dtm",value:function(){return r.W}},{key:"dvi",value:function(){return"0.0"}},{key:"dci",value:function(){return"-1"}},{key:"dds",value:function(){return""}},{key:"dpt",value:function(){return"none"}},{key:"tsr",value:function(){var t=0,i=+new Date;return r.startTime&&(t=i-r.startTime),t}},{key:"tpr",value:function(){var t=(new Date).getTime(),i=o.DUP_4_SF?o:this.me,n=i[r.ot];return(!n||"number"!=typeof n||24e4<=t-n)&&(n=i[r.ot]=t),n}},{key:"cop",encode:!0,value:function(){return a.fr()}},{key:"ti",encode:!0,limit:60,value:function(){var t=e.baiduboxapp&&this.me.articleTitle?this.me.articleTitle:this.me.document.title;return t=this.Cr.title?this.Cr.title:t}},{key:"utdi",encode:!0,value:function(){return e.baiduboxapp&&this.me.MP&&this.me.MP.globalConf&&this.me.MP.globalConf.cuid||""}},{key:"atdi",encode:!0,value:function(){return e.baiduboxapp&&this.me.MP&&this.me.MP.globalConf&&this.me.MP.globalConf.nid||""}},{key:"ari",value:function(){return 2}},{key:"ver",value:function(){return"0603"}}],setSlotInfo:function(t){this.Cr=t}}},function(t,i,n){var r=n(2),e=n(8),a=window,o=a.screen;t.exports={paramsList:[{key:"uc",value:function(){return[o.availWidth,o.availHeight].join("x")}},{key:"pis",value:function(){return(r.bt(a)?[e.ji(),e.Hi()]:[-1,-1]).join("x")}},{key:"sr",value:function(){return[o.width,o.height].join("x")}},{key:"tcn",value:function(){var t=+new Date;return Math.round(t/1e3)}}]}},function(t,i,n){var a=n(1),o=n(3),s=n(2),u=n(8),c=n(5),f=n(6),r=n(21),h=n(13),e=n(19),d=window,l=d.document,v=d.navigator,_=d.screen,p=s.Dt();t.exports={setSlotInfo:function(t){this.Cr=t},mn:function(t){this.me=t},paramsList:[{key:"ti",encode:!0,limit:60,value:function(){return c.baiduboxapp&&this.me.articleTitle?this.me.articleTitle:this.me.document.title}},{key:"utdi",encode:!0,value:function(){return c.baiduboxapp&&this.me.MP&&this.me.MP.globalConf&&this.me.MP.globalConf.cuid||""}},{key:"atdi",encode:!0,value:function(){return c.baiduboxapp&&this.me.MP&&this.me.MP.globalConf&&this.me.MP.globalConf.nid||""}},{key:"ps",value:function(){var t=s.pt(this.Cr),i=u.Vi(t);return i.top+"x"+i.left}},{key:"drs",value:function(){try{return{uninitialized:0,loading:1,loaded:2,interactive:3,complete:4}[l.readyState]}catch(t){return-1}}},{key:"pcs",value:function(){return[u.ji(p),u.Hi(p)].join("x")}},{key:"pss",value:function(){return[u.Gi(p),u.Xi(p)].join("x")}},{key:"cfv",value:function(){return c.Si()}},{key:"cpl",value:function(){return v.plugins.length||0}},{key:"chi",value:function(){return d.history.length||0}},{key:"cce",value:function(){return v.cookieEnabled||0}},{key:"cec",value:function(){return(l.characterSet?l.characterSet:l.charset)||""}},{key:"tlm",value:function(){return Date.parse(l.lastModified)/1e3}},{key:"psr",value:function(){return[_.width,_.height].join("x")}},{key:"par",value:function(){return[_.availWidth,_.availHeight].join("x")}},{key:"pis",value:function(){return(s.bt(d)?[u.ji(),u.Hi()]:[-1,-1]).join("x")}},{key:"ccd",value:function(){return _.colorDepth||0}},{key:"cja",value:function(){return v.javaEnabled().toString()}},{key:"cmi",value:function(){return v.mimeTypes.length||0}},{key:"col",value:function(){var t=v.language||v.browserLanguage||v.systemLanguage||"";return t=t.replace(/[^a-zA-Z0-9-]/g,"")}},{key:"cdo",value:function(){var t=d.orientation;return t===undefined&&(t=-1),t}},{key:"tcn",value:function(){var t=+new Date;return Math.round(t/1e3)}},{key:"psi",value:function(){var t=o[a.Y];return t=t||(o[a.Y]=e.xr())}},{key:"di",value:function(){return this.Cr.slotId}},{key:"dtm",value:function(){return a.W}},{key:"tpr",value:function(){var t=(new Date).getTime(),i=o.DUP_4_SF?o:this.me,n=i[a.ot];return(!n||"number"!=typeof n||24e4<=t-n)&&(n=i[a.ot]=t),n}},{key:"ari",value:function(){return 2}},{key:"ant",value:function(){return 1===this.Cr.proxy?1:0}},{key:"exps",value:function(){var t=this.Cr.exps;if(t&&0<=t.indexOf(a.ft)){for(var i,n=t.split(","),r=0;r<n.length;r++)(i=parseInt(n[r],10))===a.ft&&1===this.Cr.proxy&&(i=c.isAdBlock?i+1:i+2,n[r]=""+i);t=n.join(",")}var e=o.expId;return c.hasSameSiteLimit&&(e=1===this.Cr.proxy?h.Xn("112028",o.expId):h.Xn("112027",o.expId)),h.Xn(t,e)}},{key:"prot",value:function(){return"2"}},{key:"dis",value:function(){var t=0;s.bt(d)&&(t+=1),s.kt(d,d.top)&&(t+=2);var i=u.ji(),n=u.Hi();(i<40||n<10)&&(t+=4);try{if(!0&t){var r=s.Dt();r.document.referrer&&r.top===r.parent&&(t+=8)}}catch(e){f.Et(a.et,e,{pos:"disParam"})}return t}},{key:"dai",value:function(){return this.Cr.count}},{key:"dri",value:function(){return this.Cr.index}},{key:"ltu",encode:!0,limit:700,value:function(){var t;return 0<(t=o.location&&o.location.href?o.location.href:r.Dr(function(t){var i=u.ji(t),n=u.Hi(t);return 400<i&&120<n})).indexOf("cpro_prev")&&(t=t.slice(0,t.indexOf("?"))),t}},{key:"liu",encode:!0,limit:700,value:function(){return s.bt(d)?l.URL:""}},{key:"ltr",encode:!0,limit:300,value:function(){var t="";try{t=p.opener?p.opener.document.location.href:""}catch(i){}return t||p.document.referrer}},{key:"coa",encode:!0,value:function(){var t=[],i=this.Cr.styleOpenApi;for(var n in"-1"===this.Cr.pcwd&&(i.cpro_ftpc="true"),i)if(n&&"undefined"!=typeof i[n]&&i.hasOwnProperty(n)){var r=n;if("width"===n||"height"===n||"sizeType"===n||"apType"===n||"floatingState"===n)continue;"cpro_w"===n&&(r="rsi0"),"cpro_h"===n&&(r="rsi1"),t.push(r+"="+encodeURIComponent(i[n]))}return t.join("&")}}]}},function(t,i,n){var f=n(0),a={};function s(t,i,n){if("string"==typeof t)return t;if(!t.type)return"";var r=a[t.type];if(!r)return"";var e="string"==typeof r?f._(r,t):r(t,i);return n?e:"<!DOCTYPE html><body>"+e}a.text=function(t){var i='<span style="word-wrap:break-word;"><a href="{clickUrl:string}" target="{target:string}" style="font-size:{size:number}{unit:string};color:{defaultColor:string};font-weight:{defaultBold:string};font-style:{defaultItalic:string};text-decoration:{defaultUnderline:string};"{events}>{text:string}</a></span>',n=/\{events\}/;if(1===t.version)i=i.replace(n,"");else if(2===t.version){i=i.replace(n," onmouseover=\"this.style.color='{hoverColor:string}';this.style.fontWeight='{hoverBold:string}';this.style.fontStyle='{hoverItalic:string}';this.style.textDecoration='{hoverUnderline:string}';\" onmouseout=\"this.style.color='{defaultColor:string}';this.style.fontWeight='{defaultBold:string}';this.style.fontStyle='{defaultItalic:string}';this.style.textDecoration='{defaultUnderline:string}';\"");for(var r=["default","hover"],e=0;e<r.length;e++){var a=r[e],o=a+"Color",s=a+"Bold",u=a+"Italic",c=a+"Underline";t[o]="#"+t[o],t[s]=t[s]?"bold":"normal",t[u]=t[u]?"italic":"normal",t[c]=t[c]?"underline":"none"}}return f._(i,t)},a.image='<a href="{clickUrl:string}" target="{target:string}"><img src="{src:string}" title="{title:html}" alt="{title:html}" border="0" height="{height:number}" width="{width:number}" /></a>',a.flash=function(t){return t.file=t.hasLink?"cflash":"flash",t.imageClickUrl=t.clickUrl,t.hasLink||(t.clickUrl=""),f._(["<script>","var BD = BD || {};","BD.MC = BD.MC || {};","BD.MC.ADFlash = BD.MC.ADFlash || {};","BD.MC.ADImg = BD.MC.ADImg || {};","BD.MC.ADFlash.w = {width:number};","BD.MC.ADFlash.h = {height:number};",'BD.MC.ADFlash.mu = "{src:string}";','BD.MC.ADFlash.cu = "{clickUrl:string}";',"BD.MC.ADFlash.wm = {wmode:number};",'BD.MC.ADFlash.ct = "{clickTag:string}";',"BD.MC.ADImg.w = {imageWidth:number};","BD.MC.ADImg.h = {imageHeight:number};",'BD.MC.ADImg.mu = "{imageSrc:string}";','BD.MC.ADImg.cu = "{imageClickUrl:string}";','BD.MC.ADImg.tw = "{target:string}";',"BD.MC.ADImg.flag = {backupImage:number};","<\/script>",'<script src ="','//cbjs.baidu.com/js/{file:string}.js">',"<\/script>"].join(""),t)},a.rich=function(t){return t.content},a.slide=function(t,i){for(var n=[],r=t.materials,e=0;e<r.length;e++){var a=r[e];"string"!=typeof a&&(a=s(a,i,!0)),n.push(a)}t.html="<div>"+n.join("</div><div>")+"</div>";var o=i.response.placement.container;return t.width=i.width||o.width,t.height=i.height||o.height,f._('<div id="bd_ec_clb_asp" style="width:{width:number}px;height:{height:number}px;overflow:hidden;">{html:string}</div><script>(function(){var d = document;function G(id) { return d.getElementById(id); };var container = G("bd_ec_clb_asp");var pages = container.childNodes;var pl = 0;for (var i = 0; i < pages.length; i++) {if (pages[i].nodeType === 1) {pl++;}}var cp = 0;function showPage(pn) { pages[pn].style.display = ""; };function hidePages() {for (var i = 0; i < pl; i++) {pages[i].style.display = "none";}};function roll() {hidePages();showPage(cp);cp == (pages.length - 1) ? cp = 0 : cp++;};var autoRoll;function setRoll() { autoRoll = window.setInterval(function() { roll(); }, {interval:number});};roll();setRoll();container.onmouseover = function() { window.clearInterval(autoRoll); };container.onmouseout = function() {setRoll(); };})();<\/script>',t)},t.exports={fn:s}},function(t,i,n){var a=n(4),o=n(1),r=n(18),e=n(7),s=n(0);t.exports={ge:{BAIDU_CLB_fillSlot:!0,BAIDU_CLB_singleFillSlot:!0,BAIDU_CLB_fillSlotWithSize:!0,BAIDU_CLB_fillSlotAsync:!0},qr:function(){var t;try{var i=window.BAIDU_CLB_SLOT_ID;for(var n in window.BAIDU_CLB_SLOT_ID=null,i&&(t=a.zt({slotId:i,productLine:"clb",isAsync:!1}),a.qt(t),a.Kt()),this.ge)e.Li(n,this.ye);this.be()}catch(r){}},Ie:function(){},ye:function(t,i){var n;t&&((n=a.zt({slotId:t,productLine:"clb",isAsync:!!i})).containerId=i||n.containerId,a.qt(n),a.Kt())},be:function(){try{e.Li("BAIDU_CLB_prepareMoveSlot",this.ke),e.Li("BAIDU_CLB_setConfig",s.P(e,e.Fi)),e.Li("BAIDU_CLB_addOrientation",s.P(r,r.sr)),e.Li("BAIDU_CLB_addSlot",this.Ie),e.Li("BAIDU_CLB_enableAllSlots",this.Ie),e.Li("BAIDU_CLB_preloadSlots",this.Ie),e.Li("BAIDU_DUP_addSlotStatusCallback",this.Ie)}catch(t){}},ke:function(t){try{for(var i=0,n=t+"_"+i;a.Ht(n)&&0!==a.Ht(n)[0];){var r=a.Ht(n);a.Jt(r,o.K),n=t+"_"+ ++i}}catch(e){}}}},function(t,i,n){var u=n(4);t.exports={qr:function(){var t,i=window.cpro_id;window.cpro_id=null,i&&(t=u.zt({slotId:i,productLine:"union",isAsync:!1}),u.qt(t));var n,r,e=window.cproArray;if(window.cproArray=null,e)for(n=0,r=e.length;n<r;n++)t=u.zt({slotId:e[n].id,productLine:"union",isAsync:!0}),u.qt(t);var a=window.cpro_mobile_slot;if(window.cpro_mobile_slot=null,a)for(n=0,r=a.length;n<r;n++){var o=a[n];for(var s in(t=u.zt({slotId:o.id,productLine:"union",isAsync:!0})).styleOpenApi=t.styleOpenApi||{},o)s&&o[s]&&o.hasOwnProperty(s)&&(t.styleOpenApi[s]=o[s]);u.qt(t)}u.Kt()}}},function(t,i,n){var s=n(4);t.exports={qr:function(){this.delieveryObjArray=this.delieveryObjArray||[],window.BAIDU_DUP=window.BAIDU_DUP||[],window.BAIDU_DUP&&window.BAIDU_DUP instanceof Array&&(this.delieveryObjArray=this.delieveryObjArray.concat(window.BAIDU_DUP),window.BAIDU_DUP=[]),this.be(),this.Kt()},be:function(){window.BAIDU_DUP=this,window.BAIDU_DUP.load=!0},Kt:function(){for(var t,i=0,n=this.delieveryObjArray.length;i<n;i++){var r=this.delieveryObjArray[i];if(r instanceof Array&&2<=r.length){var e=r[0],a=r[1],o=r[2];if("fill"!==e&&"fillAsync"!==e||!a)continue;(t=s.zt({slotId:a,productLine:"dup",isAsync:"fillAsync"===e})).containerId=o||t.containerId,s.qt(t)}}this.delieveryObjArray=[],s.Kt()},push:function(t){this.delieveryObjArray=this.delieveryObjArray&&[],this.delieveryObjArray.push(t),this.Kt()}}},function(t,i,n){var s=n(4),u=n(22),a=n(18),o=n(0),c=n(3),f=n(10),h=n(1);t.exports={qr:function(){this.delieveryObjArray=this.delieveryObjArray||[],window.slotbydup=window.slotbydup||[],window.slotbydup&&window.slotbydup instanceof Array&&(this.delieveryObjArray=this.delieveryObjArray.concat(window.slotbydup),window.slotbydup=[]),c.slotbyds=c.slotbyds||[],c.slotbyds instanceof Array&&c.domainInfo.dup&&c.domainInfo.pos&&(this.delieveryObjArray=this.delieveryObjArray.concat(c.slotbyds),c.slotbyds=[]),this.be(),0<this.delieveryObjArray.length&&this.Kt()},Kt:function(){for(var t,i=0,n=this.delieveryObjArray.length;i<n;i++){var r=this.delieveryObjArray[i];if(c.domainInfo.dup||c.domainInfo.pos||!r.isAnti)if(r.hasOwnProperty("id")){var e=r.isRelateRecomAd&&r.title,a=r.hasOwnProperty("isAsync")&&r.isAsync||r.hasOwnProperty("async")&&r.async||e,o=r.hasOwnProperty("coa")&&r.coa;t=s.zt({slotId:r.id,productLine:"adcodex",isAsync:a,coa:o}),u.Mr(t,r),t.containerId=r.container||t.containerId,t.display=r.display,t.ftpc=r.ftpc||!1,t.size=r.size||"",t.pcwd=r.pcwd||"",t.pchd=r.pchd||"",t.exps=r.exps||"",t.isAutoAd=r.isAutoAd||!1,t.isAnti=r.isAnti||"",t.startTime=r.startTime||0,e&&(t.title=r.title),s.qt(t)}else this.Ae(r);else(c.slotbyds=c.slotbyds||[]).push(r)}this.delieveryObjArray=[],s.Kt()},be:function(){window.slotbydup=this,window.slotbydup.load=!0},push:function(t){this.delieveryObjArray=this.delieveryObjArray&&[],this.delieveryObjArray.push(t),this.Kt()},Ae:function(t){var i=t.addOrientation;for(var n in i&&o.k(i)&&a.sr.apply(a,i),h.lt)if(h.lt.hasOwnProperty(n)){var r=h.lt[n],e=t[r];o.A(e)&&f._n(r,e)}}}},function(t,i,n){var a=n(1),r=n(2),e=n(0),o=n(6),s=n(3),u=n(4),c=n(11);window.__delivery_global_=window.__delivery_global_||{};var f=window.__delivery_global_;t.exports={qr:function(){f.dupApi=f.dupApi||[];var t=f.dupApi;f.dupApi=this;for(var i=0,n=t.length;i<n;i++)this.push(t[i])},push:function(t){try{var i=t.container;if(!document.getElementById(i))return!1;var n=t.hasOwnProperty("coa")&&t.coa,r=u.zt({slotId:t.id,isAsync:!0,coa:n});r.isDsFlow=!0,r.proxy=t.proxy,r.exps=t.exps,r.containerId=i,u.qt(r),r.response=t.adInfo,r.response.painter=n.painter||r.response.painter,r.containerInfo=r.response.placement.container||{},r.paramObj=c.gn(r),r.paramObj.dtm=a.H,u.processSlot(r),this.Kt(r)}catch(e){o.Et(a.at,e)}},Kt:function(t){!s.ii&&window.postMessage&&(s.ii=!0,r.St(window,"message",e.P(u,u.ni))),n(26).Xr(t)}}},function(t,i,n){var a=n(1),o=n(2),s=n(6),u=n(0),r=n(5),e=n(15),c=n(3),f=n(4),h=n(11);t.exports={qr:function(){try{if(!c.expId&&!r.baiduboxapp)if(c.expId="110011",0===h.Sn("slotParam","dis")){var t=this.Se();this.xe(t)}}catch(i){s.Et(a.et,i,{pos:"autoAds"})}},Se:function(){return f.zt({slotId:a.$,isAsync:!0})},xe:function(t){t.paramObj=h.ei(t),t.paramObj.dcb=a.M,t.paramObj.dtm=a.Q,t.paramObj.dc=a.Z;var i=this.De()?1:0,n=c.domainInfo.mixOffset,r=h.ai(t.paramObj,i,n),e=a.U+a.N+a.it+"?"+r;1==i&&n&&(e=a.U+"//"+c.domainInfo.pos+"/"+a.nt+"?"+r),o.At(u.P(this,o.Tt,e))},Jr:function(t,i){try{i instanceof Array&&document.querySelector&&this.Ce(i)}catch(n){s.Et(a.et,n,{pos:"autoDupCallback"})}},Ce:function(t){for(var i=0;i<t.length;i++){var n=t[i],r=n.tuid,e=n.placement;r&&u.S(e)&&(this.Te(r,e.processor,e.position,n),s.Ei("autoDupLog",{tuid:r,ltu:encodeURIComponent(h.Sn("browserParam","ltu")),psi:h.Sn("slotParam","psi")}))}},Te:function(t,i,n,r){var e=n&&document.querySelector(n),a="";switch(i){case"0":e=(a=e)&&a.parentNode;break;case"1":a=this.Pe(e);break;case"2":a=this.Oe(e)}this.Ee(t,a,e,r)},Pe:function(t){var i=t&&t.children;if(i&&1<i.length&&t.scrollHeight>window.screen.height){var n=i.length;return i[Math.ceil(n/2)]}},Oe:function(t){var i=t&&t.children;if(i&&0<i.length)return i[i.length-1]},Ee:function(t,i,n,r){if(!i||!n)return!1;var e=document.createElement("div");e.id="_"+Math.random().toString(36).slice(2);var a=document.createElement("script");a.text=this.Me(t,e.id,r),e.appendChild(a),n.insertBefore(e,i)},Me:function(t,i,n){var r=n.userdefine;return r=window.JSON&&window.JSON.stringify&&u.S(r)&&JSON.stringify(r),u.h('(window.slotbydup = window.slotbydup || []).push({ id:"{tuid}", container:"{containerId}", exps:"{exps}", isAutoAd:true, coa:{coa}, isAnti:{isAnti}});',{tuid:t,containerId:i,exps:a.rt,coa:r||"{}",isAnti:this.De()})},De:function(){return!(!c.domainInfo.dup||!c.domainInfo.pos||u.S(window[a.ct])&&0===e.ki("isblock"))}}},function(t,i,n){var o=n(0),s={};t.exports={Zr:function(t,i,n){if(i){var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src=i;var e=o.P(this,this.Ue,t,r);r.onload=r.onerror=r.onreadystatechange=e;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a),s[t]=n}},Ue:function(t,i,n){n=3===arguments.length?(i=i,n):i=t;var r=s[i];n&&/loaded|complete|undefined/.test(n.readyState)&&(n.onload=n.onerror=n.onreadystatechange=null,n=undefined,r&&r())}}},function(t,i,n){var o=n(1),s=n(2),u=n(4),c=n(14),f=n(12),h=n(9),d=n(16),l=n(43),r=n(10),v=n(0),e=n(5),a=n(44),_=!e.ie||8<=e.ie;t.exports={Be:function(n){var t=s.pt(n);r.St(t,"mouseover",function(t){var i=t.target||t.srcElement;"iframe"!==i.tagName.toLowerCase()&&"iframe"!==i.nodeName.toLowerCase()||l.Re("mouseover",n.id)})},Le:function(t){if(t.isUnion){var i=a.Ne(t),n=a.Le(t);return n&&a.Fe(i,t.containerId),n}return!0},je:function(t,i){0===i.complementType&&(t.style.width=i.width+"px",t.style.height=i.height+"px",t.style.display="inline-block")},render:function(t){u.Xt(t.id,o.X);var i=s.pt(t);if(!u.mi(t))return u.Xt(t.id,o.K),!1;var n=t.containerInfo.slide,r=n&&!v.f(n)&&_;if(r&&(l.He(t),this.Be(t)),this.Le(t))if(d.Ci(t),h.renderRichMaterial(t))_&&setTimeout(function(){l.Re("adloaded",t.id)},800);else{var e=u.processSlotInfo(t);t.width=e.width,t.height=e.height,this.je(i,t);var a=c.getFrameHTML(t);i.innerHTML=a,f.regisetViewWatch(t),t.isPdbAd||u.Xt(t.id,o.K),r&&setTimeout(function(){l.Re("adloaded",t.id)},800)}}}},function(t,i,n){var v=n(2),e=n(10),_=n(4),p={},w={},r=!1,u={up:{},down:{},left:{},right:{}};t.exports={We:function(t,i){var n=_.Ht(t),r=v.pt(n);if(r){var e=r.getElementsByTagName("iframe")[0];i=JSON.stringify(i),e.contentWindow.postMessage(i,"*")}},ze:function(t){return window.getComputedStyle?window.getComputedStyle(t).width:t.currentStyle.width},Ve:function(){var n=this;(window.addEventListener||window.attachEvent)&&JSON&&JSON.parse&&e.St(window,"message",function r(t){if("string"!=typeof t.data)return!1;var i=JSON.parse(t.data);if(!i.title||"baidudup"!==i.title)return!1;if("invokeMethod"===i.type)switch(i.method){case"expand":n.qe(i.parameters[0]);break;case"close":n.Je(i.parameters[0])}}),e.St(window,"scroll",function(){n.Ge()}),e.St(window,"resize",function(){n.Ge()})},Ge:function(){var t=u;for(var i in t)for(var n in t[i]){var r=t[i][n];if(!r.isExpand)return;var e,a=r.origin,o=a.getElementsByTagName("iframe")[0],s=r.originWidth;switch(i){case"up":case"down":e=parseInt(this.ze(a),10),o.style.left=0;break;case"left":e=parseInt(this.ze(a),10),o.style.right=e-s+"px";break;case"right":e=parseInt(this.ze(a),10),o.style.left=0}}},Xe:function(t,i,n,r,e,a,o){if(!u[t][i]){var s=u[t][i]={};s.isExpand=!0,s.origin=n,s.originWidth=r,s.originHeight=e,s.targetWidth=a,s.targetHeight=o}},Ke:function(t,i,n,r,e,a){this.Xe("up",t,i,n,r,e,a);var o=i.getElementsByTagName("iframe")[0];o.style.bottom=0,o.style.left=0},Ye:function(t,i,n,r,e,a){this.Xe("down",t,i,n,r,e,a);var o=i.getElementsByTagName("iframe")[0];o.style.top=0,o.style.left=0},$e:function(t,i,n,r,e,a){this.Xe("left",t,i,n,r,e,a);var o=i.getElementsByTagName("iframe")[0],s=parseInt(this.ze(i),10);o.style.bottom=0,o.style.right=s-n+"px"},Qe:function(t,i,n,r,e,a){this.Xe("right",t,i,n,r,e,a);var o=i.getElementsByTagName("iframe")[0];o.style.bottom=0,o.style.left=0},qe:function(t){if(!p[t]){p[t]=!0;var i=_.Wt(t),n=i.containerInfo,r=n.width,e=n.height,a=n.slide,o=a.slideWidth,s=a.slideHeight,u=1e3*parseInt(a.extendTime,10),c=parseInt(a.slideMode,10),f=parseInt(a.direction,10),h=v.pt(i),d=h.getElementsByTagName("iframe")[0];if(1===f||2===f?(d.setAttribute("height",s),d.style.height=s+"px"):3!==f&&4!==f||(d.setAttribute("width",o),d.style.width=o+"px"),2===c&&2===f||2===c&&4===f)switch(f){case 2:d.setAttribute("height",s),d.style.height=s+"px";break;case 4:d.setAttribute("width",o),d.style.width=o+"px"}else switch(h.style.position="relative",d.style.position="absolute",h.style.height=e+"px",f){case 1:this.Ke(t,h,r,e,o,s);break;case 2:this.Ye(t,h,r,e,o,s);break;case 3:this.$e(t,h,r,e,o,s);break;case 4:this.Qe(t,h,r,e,o,s)}var l=this;w[t]=setTimeout(function(){p[t]&&l.Je(t)},Math.min(u))}},Je:function(t){if(p[t]){p[t]=!1,clearTimeout(w[t]);var i=_.Wt(t),n=i.containerInfo.width,r=i.containerInfo.height,e=v.pt(i),a=e.getElementsByTagName("iframe")[0];for(var o in e.style.position="",e.style.width="",e.style.height="",e.style.top="",e.style.left="",a.style.position="",a.style.display="",a.style.top="",a.style.left="",a.style.right="",a.style.width="",a.style.height="",a.setAttribute("height",r),a.setAttribute("width",n),u)for(var s in u[o])s===t&&(u[o][s].isExpand=!1)}},He:function(t){t=_.Wt(t.slotId),v.pt(t).style.textAlign="left",r||(r=!0,this.Ve())},Re:function(t,i){var n,r=_.Wt(i).containerInfo.slide;r&&(n=r.trigger);var e,a=0;e=n,"[object Array]"===Object.prototype.toString.call(e)?a=n[0]:n&&(a=n);["","BEFORE_PAGELOAD","AFTER_PAGECLOSE","PAGE_PERCENT","mouseover","click","adloaded","SLIP"][a]===t&&this.We(i,{title:"baidudup",type:"eventHappen",parameters:[t]})}}},function(t,i,n){var s=n(27),r=n(2),u="inlay",c="linkunit",e={inlay:25,linkunit:25},a={};t.exports={Le:function(t){if(!t.isUnion)return!0;var i=this.Ne(t);return this.Ze(i)<e[i]},Ze:function(t){var i=a[t]||{},n=0;for(var r in i)i.hasOwnProperty(r)&&(n+=i[r]);return n},Fe:function(t,i){var n=a[t];return n||(a[t]={},n=a[t]),r.g(i)?n[i]=1:n[i]?n[i]++:n[i]=1,!0},Ne:function(t){var i=u,n=t.response;if(!n)return i;var r=n.placement;if((s.de(n)||s.ve(n))&&(i=u),r&&r.fillstyle)for(var e=n.placement.fillstyle.elements||[],a=0,o=e.length;a<o;a++)if(5===e[a])return c;return i}}},function(t,i,n){var u=n(1),r=n(0),c=n(2),f=n(4),h=n(16),d=n(14),l=n(9);t.exports={ta:function(t){var i=['<div style="box-sizing: content-box;width:{width}px;height:{height}px;position:relative;margin:0 auto;">',"{iframeHtml}","</div>"].join("");return r.h(i,t)},je:function(t,i){0===i.complementType&&(t.style.width=i.width+"px",t.style.height=i.height+"px",t.style.display="inline-block")},render:function(t){if(f.Xt(t.id,u.X),!f.mi(t))return!1;var i=c.pt(t);if(h.Ci(t),!l.renderRichMaterial(t)){var n=f.processSlotInfo(t);if(t.width=n.width,t.height=n.height,2===n.sizeType||5===n.sizeType){var r=t.response.pdb_deliv.deliv_des;if(r&&r._html){var e=(r=r._html).type;"text"!==e&&"image"!==e&&"flash"!==e||(r.width=t.width,r.height=t.height)}}this.je(i,t);var a=d.getFrameHTML(t),o={id:t.id,width:n.width,height:n.height,iframeHtml:a},s=this.ta(o);s=1===t.proxy?c.Mt(i,s):s,i.innerHTML=s,t.isPdbAd||f.Xt(t.id,u.K)}}}},function(t,i,n){var c=n(1),a=n(0),e=n(8),f=n(2),h=n(4),d=n(14),l=n(16),v=n(9);t.exports={ia:"show",na:"upSlideShow",ra:"downSlideShow",ea:2,aa:1,oa:String.fromCharCode(65088),sa:String.fromCharCode(65087),ua:function(t,i){var n=!1,r=t.containerInfo.location,e=t.styleOpenApi,a=2===e.apType;if(2===r&&!a)return!1;(1!==i.sizeType||e.rsi0||e.rsi1||e.cpro_w||e.cpro_h)&&(n=3.4<i.width/i.height);return n},ca:function(t){var i=t.containerInfo,n=t.response.placement.fillstyle||{},r=parseFloat(n.opacity||.9),e=n.backgroundColor||"#000";t.styleOpenApi.sizeType&&(t.styleOpenApi.sizeType=2),i.sizeType=2;var a=h.processSlotInfo(t);a.backgroundOpacity=r,a.backgroundColor=e;var o=2===i.location?2:3;return a.locationType=o,a.containerId=t.containerId,a.floatingState=this.fa(t,o),a},ta:function(t){var i=["{closeBtnHtml}","{iframeHtml}"].join("");return a.h(i,t)},ha:function(t){var i="",n="",r="0",e=0;return e=2===t.locationType?(i="0 0 40px 40px",r=t.height,n=t.floatingState===this.ia?this.sa:this.oa,this.aa):(i="40px 40px 0 0",r=-20,n=t.floatingState===this.ia?this.oa:this.sa,this.ea),{domId:t.containerId,borderRadius:i,top:r,btnTag:n,lineHeight:e}},da:function(t){var i=["<div",' class="closeBtn"',' style="',"position:absolute;","left:50%;","top:{top}px;","margin-left: -20px;","width:40px;","height:20px;","background-color:#4a4a4a;","cursor:pointer;","border-radius:{borderRadius};","z-index:2147483647;","color:#ffffff;","font-weight:600;","box-sizing:border-box;","font-size:14px;","font-family:'Microsoft Yahei',sans-serif;",'line-height:{lineHeight};">',"{btnTag}","</div>"].join(""),n=this.ha(t);return a.h(i,n)},je:function(t,i){var n=0;i.floatingState!==this.ia&&"ontouchend"in document&&0<i.height&&(n=-1*(i.height+20));var r=2===i.locationType?"top":"bottom",e=2===i.locationType?"border-bottom":"border-top";t.style.cssText=["box-sizing: content-box;","display:block","position:fixed","z-index:2147483647;","left:0",r+":"+n+"px","background-color:"+i.backgroundColor,"opacity:"+i.backgroundOpacity,"text-align:center","width:"+i.width+"px","height:"+i.height+"px",e+":2px solid #4a4a4a"].join(";")},la:function(t,i,n,r){var e=2===i.locationType?"top":"bottom";"hidden"===n.getAttribute("state")?this.va(e,n,r):this._a(e,n,r)},va:function(t,i,n){i.setAttribute("state","show"),i.style.transition=t+" 0.75s",i.style["-webkit-transition"]=t+" 0.75s",i.style["-moz-transition"]=t+" 0.75s",i.style["-o-transition"]=t+" 0.75s",i.style[t]="0px","top"===t?(n.style.lineHeight=this.aa,n.innerText=this.sa):(n.style.lineHeight=this.ea,n.innerText=this.oa)},_a:function(t,i,n){i.setAttribute("state","hidden");var r=e.zi(i,"height");r=r&&parseInt(r,10),i.style.transition=t+" 0.75s",i.style["-webkit-transition"]=t+" 0.75s",i.style["-moz-transition"]=t+" 0.75s",i.style["-o-transition"]=t+" 0.75s",i.style[t]=-1*r+"px","top"===t?(n.style.lineHeight=this.ea,n.innerText=this.oa):(n.style.lineHeight=this.aa,n.innerText=this.sa)},render:function(t){if(!h.mi(t))return!1;h.Xt(t.id,c.X),this.id=t.id;var i=this.ca(t);l.Ci(t);var n=v.renderRichMaterial(t),r=f.pt(t);if(!n&&r&&this.ua(t,i)){this.je(r,i);var e=this.da(i);this.pa(i,t);var a={closeBtnHtml:e,iframeHtml:d.getFrameHTML(t)},o=this.ta(a);r.innerHTML=o;var s=r.getElementsByClassName("closeBtn")[0];if(s){var u=this;f.St(s,"click",function(){u.la(t,i,r,this)})}t.isPdbAd||h.Xt(t.id,c.K)}},ee:function(t,i,n){var r=n.parentElement;if(document.body&&r){var e=r.getElementsByClassName("closeBtn")[0];t="2"===t?"top":"bottom",f.St(document.body,"touchstart",a.P(this,this.wa)),f.St(document.body,"touchend",a.P(this,this.ma,r,e,t,i))}},wa:function(t){this.startY=t.targetTouches[0]&&t.targetTouches[0].pageY},ma:function(t,i,n,r,e){this[r]=this[r]||!1,this.pageY=t.changedTouches[0]&&t.changedTouches[0].pageY;var a=this.pageY-this.startY;(a<-10&&!this[r]&&e===this.na||10<a&&!this[r]&&e===this.ra)&&(this[r]=!0,this.va(r,i,n))},fa:function(t,i){return t.styleOpenApi&&t.styleOpenApi.floatingState?t.styleOpenApi.floatingState:2===i?this.na:this.ia},pa:function(t,i){if(2===t.sizeType){var n=i.response.pdb_deliv.deliv_des;if(n&&n._html){var r=(n=n._html).type;"text"!==r&&"image"!==r&&"flash"!==r||(n.width=i.width,n.height=i.height)}}}}},function(t,i,n){var e=n(1),a=n(0),o=n(2),r=n(4),s=n(11),u=n(7),c=n(12),f=n(5),h=n(16);t.exports={ga:{},ya:0,ba:"BAIDU_DUP_MOBILE_INSIDE_TEXT_",Ia:40,ka:3,Aa:0,Sa:{},render:function(t){r.Xt(t.id,e.X),h.Ci(t);var i=o.pt(t);if(i){u.Li(this.ba,a.P(this,this.xa));var n=this.Da(i);n&&("complete"===document.readyState?(this.Ca(t,i),this.Ta(n)):o.St(document,"readystatechange",a.P(this,function(){"complete"===document.readyState&&(this.Ca(t,i),this.Ta(n))})),c.regisetViewWatch(t),r.Xt(t.id,e.K))}},Da:function(t){var i=t.parentNode;return i.tagName&&"body"===i.tagName.toLowerCase()?i:this.Da(i)},Ca:function(t,i){t.paramObj.dcb=this.ba,t.paramObj.dtm=e.z,t.paramObj.cec="utf-8";var n=s.getPmpRequestUrl(t),r=document.createElement("script");r.src=n,r.charset=t.paramObj.cec,i.appendChild(r)},Ta:function(t){for(var i=t.childNodes,n=0;n<i.length;n++){var r=i[n];if(o.Pt(r))switch(r.nodeType){case 3:var e;f.ie<9&&r.nodeValue&&(e=r.nodeValue),r.textContent&&(e=r.textContent),e&&a.b(e)&&0<e.length&&this.Pa(r);break;default:this.Ta(r)}}},Pa:function(t){var i=t.parentNode;i.innerHTML&&(this.ga["item_"+this.ya]=i,this.ya++)},xa:function(){var t=arguments[0]&&arguments[0].slots[0]&&arguments[0].slots[0].ads[0];if(t){var i=t.data&&t.data.meta;if(i&&0!==i.length)for(var n in this.ga){var r=this.ga[n];if(document.contains(r)){for(var e=r.innerHTML,a=0;a<i.length;a++)e=this.Oa(i[a],e);if(r.innerHTML=e,this.Aa===this.Ia)break}}}},Oa:function(t,i){if(!t||!i)return i;var n=t.title,r=new RegExp(n,"i");if(n&&0<n.length&&r.test(i)&&this.Ea(n,i)&&this.Ma(n,i)){var e='<a href="'+(t.curl||"")+'" target="_blank" style="color:#38f;text-decoration:none">'+n+"</a>";if(this.Sa[n]||(this.Sa[n]=0),this.Aa<this.Ia&&this.Sa[n]<this.ka)return this.Aa++,this.Sa[n]++,i.replace(r,e)}return i},Ea:function(t,i){var n=i.indexOf(t),r=n-4,e=n+t.length,a="</a>"===i.substr(r,4),o="<a "===i.substr(e,3);return!a&&!o},Ma:function(t,i){var n=new RegExp("<[^>]*"+t+"[^<]*>","i"),r=new RegExp(">[^<]*"+t+"[^>]*</","i");return!n.test(i)&&!r.test(i)}}},function(t,i,n){var s=n(1),u=n(0),c=n(2),f=n(4),h=n(14),d=n(13);t.exports={render:function(t){f.Xt(t.id,s.X);var i=f.processSlotInfo(t);t.width=i.width,t.height=i.height;var n=c.pt(t),r={};0===t.proxy&&(r=d.Yn("mixDom",t)).expType&&(t.paramObj.exps=d.Xn(t.paramObj.exps,r.expId));var e=h.ln(t),a=u.h('<iframe width="{iframeWidth}" frameborder="0" height="{iframeHeight}" scrolling="no" src="{url}"></iframe>',e),o=a;"exp"!==r.expType&&(o=c.Mt(n,a)),n.innerHTML=o,f.Xt(t.id,s.K)}}},function(t,i,n){var r=n(1),e=String.fromCharCode(Math.floor(26*Math.random())+97),a=String.fromCharCode(Math.floor(26*Math.random())+97);r.F||(r.kn=r.N+e+"c"+a+"m?",r.F=r.U+r.kn)}]);
====================================================
====================Beautified Below================
})
        },
        w: function(t) {
            var i = "";
            return window.JSON && window.JSON.parse && (i = window.JSON.parse(t)), i
        },
        y: function(t) {
            var i = "";
            try {
                i = window.JSON && window.JSON.stringify ? window.JSON.stringify(t) : window.eval(t)
            } catch (n) {}
            return i
        },
        b: function(t) {
            return t.replace(/(^\s*)|(\s*$)/g, "")
        },
        I: function(t) {
            for (var i = [], n = {}, r = t.length, e = 0; e < r; e++) {
                var a = t[e];
                n[a] || (n[i[i.length] = a] = !0)
            }
            return i
        },
        k: function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        },
        A: function(t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        },
        S: function(t) {
            return "[object Object]" === Object.prototype.toString.call(t)
        },
        x: function(t) {
            return "[object Number]" === Object.prototype.toString.call(t)
        },
        D: function(t) {
            return "[object String]" === Object.prototype.toString.call(t)
        },
        C: function(t) {
            var i, n = Object.prototype.hasOwnProperty;
            if (!(t && "[object Object]" === Object.prototype.toString.call(t) && "isPrototypeOf" in t)) return !1;
            if (t.constructor && !n.call(t, "constructor") && !n.call(t.constructor.prototype, "isPrototypeOf")) return !1;
            for (i in t);
            return i === undefined || n.call(t, i)
        },
        T: function(t) {
            var i, n, r = t;
            if (!t || t instanceof Number || t instanceof String || t instanceof Boolean) return r;
            if (this.k(t)) {
                r = [];
                var e = 0;
                for (i = 0, n = t.length; i < n; i++) r[e++] = this.T(t[i])
            } else if (this.C(t))
                for (i in r = {}, t) t.hasOwnProperty(i) && (r[i] = this.T(t[i]));
            return r
        },
        P: function(t, i) {
            var n = Array.prototype.slice.apply(arguments),
                r = n.shift(),
                e = "function" == typeof this ? this : n.shift();
            return function() {
                var t = Array.prototype.slice.apply(arguments);
                return e.apply(r, t.concat(n))
            }
        }
    }
}, function(t, i) {
    t.exports = {
        O: "BAIDU_SSP_",
        M: "___baidu_union_callback",
        U: "https:",
        B: "https:" === document.location.protocol,
        R: "___adblockplus_",
        L: "BAIDU_SSP_lcr",
        N: "//pos.baidu.com/",
        F: "",
        j: "pos.baidu.com",
        H: "HTML_POST",
        W: "SSP_JSONP",
        z: "STATIC_JSONP",
        V: "//pos.baidu.com/bfp/snippetcacher.php?",
        q: 1,
        J: 2,
        G: 4,
        X: 8,
        K: 16,
        Y: "pageSearchId",
        $: "0",
        Q: "AUTO_JSONP",
        Z: 4,
        it: "auto_dup",
        nt: "auto_ds",
        rt: "111003",
        et: "fatalError",
        at: "remote",
        ot: "BAIDU_DUP2_pageFirstRequestTime",
        st: "DUP_DEBUG_FLAG",
        ut: "https://dup.baidustatic.com/dup/painter/",
        ct: "__baidu_dup_jobruner",
        ft: 111e3,
        ht: /^u?\d*0[0-7]_\d+$/,
        dt: {
            text_default_120_600: !0,
            text_default_160_600: !0,
            text_default_300_250: !0,
            text_default_250_250: !0,
            text_default_200_200: !0,
            text_default_336_280: !0,
            text_default_360_300: !0,
            text_default_234_60: !0,
            text_default_460_60: !0,
            text_default_all: !0
        },
        lt: {
            CLOSEAD: "closeAd"
        }
    }
}, function(t, i, f) {
    var e = f(0),
        h = f(5),
        o = f(17),
        r = f(3);
    t.exports = {
        g: function(t, i) {
            return t ? e.D(t) && 0 < t.length ? (i = i || window).document.getElementById(t) : !t.nodeName || 1 !== t.nodeType && 9 !== t.nodeType ? null : t : null
        },
        vt: function(t, i) {
            if (!t) return null;
            var n;
            if (document.getElementsByClassName) n = document.getElementsByClassName(t);
            else {
                n = [];
                for (var r = document.getElementsByTagName(i), e = 0, a = r.length; e < a; e++) {
                    var o = r[e],
                        s = o.getAttribute("class") || o.getAttribute("className");
                    s && 0 <= s.indexOf(t) && n.push(o)
                }
            }
            return n
        },
        _t: function(t, i, n) {
            if (!t) return null;
            if (1 === t.nodeType) return t;
            var r = this.vt(t, i);
            if (n instanceof Function)
                for (var e = 0, a = r.length; e < a; e++)
                    if (n(r[e])) return r[e];
            return r[0]
        },
        pt: function(t) {
            if (t.wt) return t.wt;
            var i = t.containerId;
            return t.wt = this.g(i) || this._t(i, "div", function(t) {
                var i = r.__slotMap;
                for (var n in i)
                    if (i.hasOwnProperty(n) && i[n] && i[n].wt === t) return !1;
                return !0
            }), t.wt
        },
        mt: function(t) {
            return 9 === t.nodeType ? t : t.ownerDocument || t.document
        },
        gt: function(t) {
            var i = this.mt(t);
            return i.parentWindow || i.defaultView || null
        },
        yt: function(t) {
            try {
                if (t && "object" == typeof t && t.document && "setInterval" in t) return !0
            } catch (i) {
                return !1
            }
            return !1
        },
        bt: function(t, i) {
            return (t = t || window) != window.top && t != t.parent || !this.yt(t)
        },
        It: function(t) {
            try {
                return !!t.parent.location.toString()
            } catch (i) {
                return !1
            }
        },
        kt: function(t, i) {
            i = 2 === arguments.length ? i : t.parent;
            for (var n = 0; n++ < 10 && this.bt(t, i);) {
                if (!this.It(t)) return !0;
                t = t.parent
            }
            return 10 <= n
        },
        At: function(t, i, s) {
            var u = (s = s || this.win || window).document;
            i = i || 0, this.domReadyMonitorRunTimes = 0, this.readyFuncArray = this.readyFuncArray || [], this.readyFuncArray.push({
                func: t,
                delay: i,
                done: !1
            });
            var n = e.P(this, function() {
                    var t = !1;
                    this.domReadyMonitorRunTimes++;
                    var i = !1;
                    try {
                        s.frameElement && (i = !0)
                    } catch (a) {
                        i = !0
                    }
                    if (h.ie && h.ie < 9 && !i) try {
                            u.documentElement.doScroll("left"), t = !0
                        } catch (a) {} else if ("complete" === u.readyState || this.domContentLoaded) t = !0;
                        else if (3e5 < this.domReadyMonitorRunTimes) return void(this.domReadyMonitorId && (s.clearInterval(this.domReadyMonitorId), this.domReadyMonitorId = null));
                    if (t) try {
                        if (this.readyFuncArray && this.readyFuncArray.length)
                            for (var n = 0, r = this.readyFuncArray.length; n < r; n++) {
                                var e = this.readyFuncArray[n];
                                e && e.func && !e.done && (e.delay ? (e.done = !0, s.setTimeout(e.func, e.delay)) : (e.done = !0, e.func()))
                            }
                    } catch (o) {} finally {
                        this.domReadyMonitorId && (s.clearInterval(this.domReadyMonitorId), this.domReadyMonitorId = null)
                    }
                }),
                r = e.P(this, function() {
                    this.domContentLoaded = !0, n()
                });
            this.domReadyMonitorId || (this.domReadyMonitorId = s.setInterval(n, 50), u.addEventListener ? (u.addEventListener("DOMContentLoaded", r, !1), s.addEventListener("load", r, !1)) : u.attachEvent && s.attachEvent("onload", r, !1))
        },
        St: function(t, i, n) {
            return i = i.replace(/^on/i, "").toLowerCase(), t.addEventListener ? t.addEventListener(i, n, !1) : t.attachEvent && t.attachEvent("on" + i, n), t
        },
        xt: function(t, i, n) {
            return i = i.replace(/^on/i, "").toLowerCase(), t.removeEventListener ? t.removeEventListener(i, n, !1) : t.attachEvent && t.detachEvent("on" + i, n), t
        },
        Dt: function(t, i) {
            1 === arguments.length && e.x(t) && (i = t, t = undefined), i = i || 10;
            for (var n = window, r = 0; r++ < i && this.bt(n) && !this.kt(n) && (!t || !t(n));) n = n.parent;
            return n
        },
        Ct: function(t) {
            var i = this.yt(t) ? t.document : this.mt(t);
            return "CSS1Compat" === i.compatMode ? i.documentElement : i.body
        },
        Tt: function(t) {
            var i = document.createElement("script");
            i.type = "text/javascript", i.async = !0, i.src = t;
            var n = document.getElementsByTagName("script")[0];
            n.parentNode && n.parentNode.insertBefore(i, n)
        },
        Pt: function(t) {
            switch (t.nodeName.toLowerCase()) {
                case "a":
                case "script":
                case "iframe":
                case "br":
                case "title":
                case "option":
                case "button":
                case "h1":
                case "h2":
                case "h3":
                case "h4":
                case "h5":
                case "h6":
                    return !1;
                default:
                    return !0
            }
        },
        Ot: function(t, n, i, r) {
            try {
                var e = t || document.createElement("script");
                if (!e.attachEvent || e.attachEvent.toString && e.attachEvent.toString().indexOf("[native code") < 0 || h.opera ? (this.St(e, "error", i), this.St(e, "load", n)) : this.St(t, "readystatechange", function(t) {
                        var i = (t.currentTarget || t.srcElement).readyState;
                        "complete" !== i && "loaded" !== i || n(t)
                    }), !t && r) {
                    for (var a in e.type = "text/javascript", e.async = !0, r) r.hasOwnProperty(a) && (e[a] = r[a]);
                    var o = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
                    o.parentNode.insertBefore(e, o)
                }
                return e
            } catch (c) {
                var s = f(6),
                    u = f(1);
                s.Et(u.et, c, {
                    pos: "loadScriptError"
                })
            }
        },
        Mt: function(t, i) {
            if (o.Ut(20) && (i = this.Bt() + i), o.Ut(20) && (i += this.Bt()), o.Ut(20)) {
                for (var n = "", r = "", e = o.Rt(1, 3), a = 0; a < e; a++) n += this.Lt(), r += "</div>";
                i = n + i + r
            }
            return o.Ut(30) && t.removeAttribute && t.removeAttribute("id"), o.Ut(80) && t.removeAttribute && t.removeAttribute("style"), i
        },
        Bt: function() {
            var t = o.Nt(["div", "abbr", "span", "ins", "em"]),
                i = "";
            o.Ut(20) && (i = ' id="' + o.Ft(5, 10) + '" ');
            var n = "";
            o.Ut(20) && (n = ' class="' + o.Ft(6, 15) + '" ');
            var r = o.Nt(["display:none;", "width:0px;height:0px;"]);
            o.Ut(50) && (r += o.jt()), r = ' style="' + r + '" ';
            return e.h("<{tagname} {idString} {classString} {styleString}></{tagname}>", {
                tagname: t,
                idString: i,
                classString: n,
                styleString: r
            })
        },
        Lt: function() {
            var t = "";
            o.Ut(30) && (t = ' id="' + o.Ft(5, 10) + '" ');
            var i = "";
            o.Ut(60) && (i = ' style="' + o.jt() + '" ');
            return e.h("<div {idString} {styleString}>", {
                idString: t,
                styleString: i
            })
        }
    }
}, function(t, i) {
    var n = "___delivery___global___counter___";
    if (window._SF_ && window._SF_._global_ && window._SF_._global_._ssp && !window.___baidu_union) {
        var r = window._SF_._global_._ssp;
        r.DUP_4_SF = !0, r.destroy = function() {
            try {
                window.top[n] = {}
            } catch (t) {
                window[n] = {}
            }
        }, window.___baidu_union = r
    }
    var e = window.___baidu_union = window.___baidu_union || {};
    try {
        e.counter = window.top[n] = window.top[n] || {}
    } catch (s) {
        e.counter = window[n] = window[n] || {}
    }
    var a = "",
        o = "";
    e.domainInfo, e.domainInfo = {
        dup: a,
        pos: o
    }, e.startTime = (new Date).getTime(), t.exports = e
}, function(t, i, n) {
    var c = n(1),
        o = n(11),
        p = n(2),
        s = n(17),
        u = n(0),
        w = n(8),
        f = n(5),
        e = n(15),
        r = n(6),
        h = n(24),
        a = n(23),
        d = n(3),
        l = n(10);
    d.__slotMap = d.__slotMap || {};
    var v = d.__slotMap,
        _ = d.counter || {};
    _.slotTotalCount = _.slotTotalCount || 1, _.slotCountIndex = _.slotCountIndex || {}, t.exports = {
        Ht: function(t) {
            return v[t]
        },
        Wt: function(t) {
            for (var i in v)
                if (v.hasOwnProperty(i) && -1 < i.indexOf(t)) return v[i];
            return {}
        },
        zt: function(t) {
            var i = "" + t.slotId;
            _.slotCountIndex[i] = _.slotCountIndex[i] || 0;
            var n = {};
            return n.index = _.slotCountIndex[i], n.count = 0 === i.indexOf("u") ? _.slotTotalCount : 0, n.id = i + "_" + n.index, n.containerId = c.O + "_wrapper_" + i + "_" + n.index, n.slotId = t.slotId, n.productLine = t.productLine, n.errors = [], _.slotCountIndex[i] = _.slotCountIndex[i] + 1, i !== c.$ && (_.slotTotalCount = _.slotTotalCount + 1), n.isAsync = t.isAsync, n.timestampWatcher = d.startTime ? {
                t1: d.startTime
            } : {
                t1: 0
            }, t.coa && u.S(t.coa) ? n.styleOpenApi = t.coa : window.cproStyleApi ? n.styleOpenApi = window.cproStyleApi[i] || {} : n.styleOpenApi = {}, n.isUnion = 0 === i.indexOf("u"), n.width = 0, n.height = 0, n.domainInfo = d.domainInfo || {}, n.domainInfo.mixOffset = a.Vt(n.domainInfo.pos), n
        },
        processSlot: function(t) {
            var i = t.response.rtb_deliv = t.response.rtb_deliv || {},
                n = t.response.order_deliv = t.response.order_deliv || {},
                r = t.response.pdb_deliv = t.response.pdb_deliv || {},
                e = i.deliv_id = parseInt(i.deliv_id, 10),
                a = i.demand_id = parseInt(i.demand_id, 10),
                o = n.deliv_id = parseInt(n.deliv_id, 10),
                s = n.demand_id = parseInt(n.demand_id, 10),
                u = r.deliv_id = parseInt(r.deliv_id, 10);
            r.demand_id = parseInt(r.demand_id, 10);
            var c = t.response.placement || {};
            t.containerInfo = c.container || {}, t.complementType = c.complement_type, t.isPdbAd = 0 === e && 0 === a && 0 === o && 0 === s, t.isNeedCacheRequest = !isNaN(e) && 0 !== e && 7 === t.complementType || !isNaN(o) && 0 !== o || !isNaN(e) && 0 !== e && 0 !== u
        },
        qt: function(t) {
            v[t.id] = t
        },
        Jt: function(t, i) {
            t.status = t.status ^ i
        },
        Gt: function(t, i) {
            return 0 < (t.status & i)
        },
        Xt: function(t, i) {
            var n = this.Ht(t);
            n && (n.status |= i)
        },
        Kt: function() {
            var t = v;
            for (var i in t)
                if (i && t[i] && t.hasOwnProperty(i)) {
                    var n = t[i];
                    if (n.status >= c.J) continue;
                    this.Yt(n), this.$t(n), this.Qt(n)
                }
        },
        Qt: function(t) {
            0 !== t.proxy && 1 !== t.proxy && (d.prScript = p.Ot(d.prScript, u.P(this, this.Zt, t), u.P(this, this.Zt, t), {
                src: "//cpro.baidustatic.com/cpro/ui/pr.js"
            }))
        },
        Zt: function(t, i) {
            "object" != typeof window.__baidu_dup_jobruner && (window.__baidu_dup_jobruner = "block", i.proxy = 1, e.ti("___ds_storage__isblock", i.proxy + "|" + (new Date).getTime()), this.$t(i))
        },
        $t: function(t) {
            !d.ii && window.postMessage && (d.ii = !0, p.St(window, "message", u.P(this, this.ni)));
            var i, n = t.isUnion || t.isAsync;
            t.proxy = t.proxy || this.ri(t), t.paramObj = t.paramObj || o.ei(t);
            var r = o.ai(t.paramObj, t.proxy, t.domainInfo.mixOffset),
                e = c.F + r;
            if (1 === t.proxy && t.domainInfo.mixOffset) {
                var a = c.U + "//" + t.domainInfo.pos + "/";
                e = (a += f.ie ? "s?" : s.Ft(5, 10) + "?") + r
            }
            t.paramObj.dtm = c.H, t.timestampWatcher.t2 = +new Date, (i = this.oi(t)) ? window[c.R](i) : this.si(e, n), h.ui(t), this.Xt(t.id, c.J)
        },
        ni: function(t) {
            var i = t.data;
            if ("string" == typeof i && window.JSON && window.JSON.parse) try {
                i = JSON.parse(i)
            } catch (n) {}
            i && i.tuid && (i.placement && i.placement.update && i.queryid ? (this.ci(i), -1 < i.tuid.indexOf("u") && i.noadx && parseInt(i.noadx, 10) && 3 !== parseInt(i.noadx, 10) && this.fi(i)) : 1 === i.type && this.hi(t, i))
        },
        hi: function(t, i) {
            var n = t.origin || t.originalEvent.origin,
                r = n && n.split("//")[1],
                e = i.tuid,
                a = i.msg,
                o = this.Wt(e),
                s = o && o.response,
                u = s && s.placement && s.placement.basic && s.placement.basic.publisherDomain && s.placement.basic.publisherDomain.pos;
            !o || r !== c.j && r !== u || "click" !== a || (this.li(o), l.vi(c.lt.CLOSEAD, e))
        },
        ci: function(t) {
            var i, n = t.placement.update,
                r = e.Nt(t.tuid);
            r && (i = u.w(r), e._i() && window.JSON && window.JSON.stringify && i && i.placement && i.placement.update && i.placement.update !== n && (t.adExpire = (new Date).getTime(), e.ti(t.tuid, JSON.stringify(t))))
        },
        oi: function(t) {
            try {
                if (f.ie && f.ie < 9 || !e._i() || t.isAutoAd) return !1;
                var i = e.Nt(t.id);
                return !!i && u.w(i)
            } catch (n) {
                r.Et("elog", n, {
                    pos: "localAdInfo",
                    id: t.id
                })
            }
        },
        pi: function(t) {
            try {
                var i = t.response,
                    n = t.id;
                n && !t.isPdbAd && t.isUnion && !t.isAutoAd && window.JSON && window.JSON.stringify && e._i() && !e.Nt(n) && (i.adExpire = (new Date).getTime(), e.ti(n, JSON.stringify(i)))
            } catch (r) {}
        },
        Yt: function(t) {
            p.pt(t) || (t.isAsync ? "union" === t.productLine && (t.containerId = "cpro_" + t.slotId) : (document.write('<div id="' + t.containerId + '"></div>'), p.g(t.containerId) || this.wi(t))), this.Xt(t.id, c.q)
        },
        wi: function(t) {
            try {
                var i = document.getElementsByTagName("script"),
                    n = i[i.length - 1];
                if (n) {
                    var r = n.parentNode;
                    if (r) {
                        var e = document.createElement("div");
                        return e.id = t.containerId, r.insertBefore(e, n), !0
                    }
                }
            } catch (a) {}
            return !1
        },
        si: function(t, i) {
            if (i) {
                var n = document.createElement("script");
                if (!n) return;
                n.type = "text/javascript", n.async = !0, n.src = t;
                var r = document.getElementsByTagName("script")[0];
                r && r.parentNode ? r.parentNode.insertBefore(n, r) : document.write('<script charset="utf-8" src="' + t + '"><\/script>')
            } else document.write('<script charset="utf-8" src="' + t + '"><\/script>')
        },
        mi: function(t) {
            var i = t.response,
                n = i.pdb_deliv,
                r = i.rtb_deliv,
                e = i.order_deliv;
            return !(!t.isUnion && 7 === t.complementType && 0 === n.deliv_id && 0 === r.deliv_id && 0 === e.deliv_id)
        },
        fi: function(t) {
            var i = this.Wt(t.tuid);
            i && 7 === t.placement.complement_type && this.li(i)
        },
        li: function(t) {
            var i = p.pt(t);
            i && (i.parentNode.removeChild(i), n(12).unregisetViewWatch(t))
        },
        processSlotInfo: function(t) {
            var i = this.gi(t),
                n = t.response.placement.basic;
            return i.cname = n.cname, i
        },
        gi: function(t) {
            var i = t.response.placement,
                n = t.response["extends"] || {},
                r = p.pt(t),
                e = i.container,
                a = t.styleOpenApi,
                o = e.width,
                s = e.height,
                u = a.cpro_w || a.rsi0 || 0,
                c = a.cpro_h || a.rsi1 || 0,
                f = e.sizeType;
            if (5 !== f && !t.isUnion && n && n.hasOwnProperty("sspw") && n.hasOwnProperty("ssph")) {
                var h = parseInt(n.sspw || 0, 10),
                    d = parseInt(n.ssph || 0, 10),
                    l = parseInt(n.cbsz || 0, 10);
                f = 0 < l ? l : f, o = 0 < h ? h : o, s = 0 < d ? d : s
            }
            if (a.scale) {
                f = 2;
                var v = a.scale.split(".") || [];
                o = v[0], s = v[1]
            }(u || c) && (f = 1, o = u || w.yi(), s = c || s), ("-1" === t.pcwd || t.ftpc || t.styleOpenApi.cpro_ftpc) && (f = "-1" === t.pcwd && "-1" === t.pchd ? 8 : 5), a.sizeType && (f = a.sizeType && parseInt(a.sizeType, 10) || f, o = a.width && parseInt(a.width, 10) || o, s = a.height && parseInt(a.height, 10) || s), 2 !== a.apType && 3 !== a.apType || (e.location = a.apType);
            var _ = 0;
            switch (f) {
                case 1:
                    break;
                case 2:
                    o = t.pcwd || o, s = t.pchd || s, o && s && (_ = s / o), o = w.yi(), s = Math.ceil(o * _);
                    break;
                case 3:
                    o = w.yi();
                    break;
                case 5:
                    o && s && (_ = s / o), o = w.bi(r.parentElement), s = Math.ceil(o * _);
                    break;
                case 6:
                    o = w.bi(r.parentElement);
                    break;
                case 7:
                    s = w.Ii(r.parentElement);
                    break;
                case 8:
                    o = w.bi(r.parentElement), s = w.Ii(r.parentElement)
            }
            return {
                width: t.width = o,
                height: t.height = s,
                sizeType: f
            }
        },
        ri: function(t) {
            var i = -1;
            return t.isAnti ? "block" === window[c.ct] || 1 === e.ki("isblock") ? i = 1 : !u.S(window[c.ct]) && 0 !== e.ki("isblock") || (i = 0) : i = 0, i
        }
    }
}, function(t, i, n) {
    var s = n(0),
        u = window,
        c = window.navigator;
    var r = {
        Ai: function() {
            var t = navigator.userAgent,
                i = window.RegExp;
            this.antBrowser = !1, /msie (\d+\.\d)/i.test(t) && (this.ie = document.documentMode || +i.$1), /opera\/(\d+\.\d)/i.test(t) && (this.opera = +i.$1), /firefox\/(\d+\.\d)/i.test(t) && (this.firefox = +i.$1), /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(t) && !/chrome/i.test(t) && (this.safari = +(i.$1 || i.$2)), /chrome\/(\d+\.\d)/i.test(t) && (this.chrome = +i.$1, function a() {
                try {
                    return "scoped" in document.createElement("style")
                } catch (t) {
                    return !1
                }
            }() && (this.qihoo = !0)), /qqbrowser\/(\d+\.\d)/i.test(t) && (this.tencent = !0), (/ucbrowser\/(\d+\.\d)/i.test(t) || /ubrowser\/(\d+\.\d)/i.test(t)) && (this.uc = !0), /miuibrowser\/(\d+\.\d)/i.test(t) && (this.xiaomi = !0), /vivobrowser\/(\d+\.\d)/i.test(t) && (this.vivo = !0), /oppobrowser\/(\d+\.\d)/i.test(t) && (this.oppo = !0), /baiduboxapp\/([\d.]+)/.test(t) && (this.baiduboxapp = !0), /qqbrowser|ucbrowser|ubrowser|miuibrowser|vivobrowser|oppobrowser/i.test(t) && (this.isAdBlock = !0);
            try {
                /(\d+\.\d)/.test(s.a(window, "external.max_version")) && (this.maxthon = +i.$1)
            } catch (o) {}
            /Chrome\/[8-9][0-9]/.test(t) && (this.hasSameSiteLimit = !0), (this.tencent || this.uc || this.xiaomi || this.vivo || this.oppo) && (this.antBrowser = !0), this.isWebkit = /webkit/i.test(t), this.isGecko = /gecko/i.test(t) && !/like gecko/i.test(t);
            for (var n = ["Android", "iPad", "iPod", "iPhone", "iOS", "Linux", "Macintosh", "Windows"], r = "", e = 0; e < n.length; e++)
                if (r = n[e], t.match(new RegExp(r, "i"))) {
                    "iPad" === r || "iPhone" === r || "iOS" === r || "iPod" === r ? this.isIOS = !0 : "Android" === r && (this.isAndroid = !0);
                    break
                } this.platform = r
        },
        Si: function() {
            var t = 0;
            try {
                var i = "https:" === document.location.protocol;
                if (45 <= this.chrome || i) return 0;
                if (c.plugins && c.mimeTypes.length) {
                    var n = c.plugins["Shockwave Flash"];
                    n && n.description && (t = n.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0")
                }
                if (0 === t && (u.ActiveXObject || u.hasOwnProperty("ActiveXObject")))
                    for (var r = 30; 2 <= r; r--) try {
                        var e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + r);
                        if (e) {
                            var a = e.GetVariable("$version");
                            if (0 < (t = a.replace(/WIN/g, "").replace(/,/g, "."))) break
                        }
                    } catch (o) {}
                t = parseInt(t, 10), this.Si = function() {
                    return t
                }
            } catch (s) {
                t = 0
            }
            return t
        }
    };
    r.Ai(), t.exports = r
}, function(t, i, n) {
    var a = n(0),
        o = n(10),
        s = n(15),
        u = "BAIDU_DUP_log_storage";
    t.exports = {
        xi: function(t, i) {
            var n = new Image,
                r = "BAIDU_DUP_log_" + Math.floor(2147483648 * Math.random()).toString(36);
            (window[r] = n).onload = n.onerror = n.onabort = function() {
                n.onload = n.onerror = n.onabort = null, window[r] = null, n = null, i && i(u, t, !0)
            }, n.src = t
        },
        Di: function(t) {
            var i = new Image,
                n = "baidu_dan_log_" + +new Date;
            (window[n] = i).onload = i.onerror = i.onabort = function() {
                try {
                    delete window[n]
                } catch (t) {
                    window[n] = undefined
                }
                i = null
            }, t += -1 < t.indexOf("?") ? "&" : "?", t += "stamp=" + Math.random(), i.src = t
        },
        Ci: function(t) {
            var i = (t = a.S(t) ? t : {}).url || "//eclick.baidu.com/se.jpg",
                n = t.data || {},
                r = t.option || "now",
                e = a.u(n);
            switch (i += (0 <= i.indexOf("?") ? "&" : "?") + e + (e ? "&" : "") + "ver=0603&rdm=" + +new Date, r) {
                case "now":
                    this.xi(i);
                    break;
                case "block":
                    break;
                case "unload":
                default:
                    s.Ti(u, i, !0), o.St(window, "unload", a.P(this, function() {
                        this.xi(i, a.P(s, s.Pi))
                    }))
            }
        },
        Oi: function(t, i, n) {
            if (!t || !i) return "";
            var r = "//eclick.baidu.com/" + t + "?type=" + i;
            if (n)
                for (var e in n) n.hasOwnProperty(e) && (r += "&" + e + "=" + n[e]);
            this.Ci({
                url: r,
                option: "now"
            })
        },
        Ei: function(t, i) {
            this.Oi("se.jpg", t, i)
        },
        Et: function(t, i, n) {
            n = n || {};
            var r = i && i.stack ? i.stack : i;
            n.stack = encodeURIComponent(r), this.Oi("rs.jpg", t, n)
        }
    }
}, function(t, i, n) {
    var u = n(0),
        r = n(2),
        e = n(3);
    e.__pageInfo = e.__pageInfo || {};
    var c = e.__pageInfo,
        a = r.Dt(),
        f = a.BAIDU_SSP__info || (a.BAIDU_SSP__info = {});
    t.exports = {
        Mi: function(t, i, n) {
            var r, e = n ? f : c;
            if (u.D(t)) {
                for (var a = t.split("."), o = e; a.length;) {
                    var s = a.shift();
                    0 < a.length ? o[s] || (o[s] = {}) : o[s] = i, o = o[s]
                }
                r = i
            }
            return r
        },
        Ui: function(t, i) {
            var n = i ? f : c;
            if (u.D(t))
                for (var r = t.split("."); r.length;) {
                    var e = r.shift();
                    if (!r.length || n[e] === undefined) return delete n[e], !0;
                    n = n[e]
                }
            return !1
        },
        Bi: function(t, i) {
            var n, r = i ? f : c;
            return u.D(t) && (n = u.a(r, t)), n
        },
        Ri: function(t) {
            var i = window,
                n = i[t];
            return i[t] = undefined, n
        },
        Li: function(t, i, n) {
            var r = n || window;
            return r[t] ? r[t] : r[t] = i
        },
        Ni: function(t) {
            return !!t && (c = this.Bi("pageConfig") || {})[t]
        },
        Fi: function(t, i) {
            return !(!t || !i) && ((c = this.Bi("pageConfig") || {})[t] = i, this.Mi("pageConfig", c), !0)
        }
    }
}, function(t, i, n) {
    var f = n(2),
        o = n(0),
        s = n(5);
    t.exports = {
        ji: function(t) {
            t = t || window;
            try {
                var i = f.Ct(t).clientWidth;
                if (i || 0 === i) return i
            } catch (n) {}
            return -1
        },
        Hi: function(t) {
            t = t || window;
            try {
                var i = f.Ct(t).clientHeight;
                if (i || 0 === i) return i
            } catch (n) {}
            return -1
        },
        Wi: function(t) {
            var i = {
                top: 0,
                left: 0
            };
            if (t === f.Ct(t)) return i;
            var n = f.mt(t),
                r = n.body,
                e = n.documentElement;
            if (r && t.getBoundingClientRect) {
                var a = t.getBoundingClientRect();
                i.left = Math.floor(a.left) + Math.max(e.scrollLeft, r.scrollLeft), i.top = Math.floor(a.top) + Math.max(e.scrollTop, r.scrollTop), i.left -= e.clientLeft, i.top -= e.clientTop;
                var o = this.zi(r, "borderLeftWidth"),
                    s = this.zi(r, "borderTopWidth"),
                    u = parseInt(o, 10),
                    c = parseInt(s, 10);
                i.left -= isNaN(u) ? 2 : u, i.top -= isNaN(c) ? 2 : c
            }
            return i
        },
        zi: function(t, i) {
            if (!t) return "";
            var n = "";
            n = -1 < i.indexOf("-") ? i.replace(/[-][^-]{1}/g, function(t) {
                return t.charAt(1).toUpperCase()
            }) : i.replace(/[A-Z]{1}/g, function(t) {
                return "-" + t.charAt(0).toLowerCase()
            });
            var r, e = f.gt(t);
            if (t.style[i] || t.style[n]) return t.style[i] || t.style[n];
            if (e && e.getComputedStyle) {
                if (r = e.getComputedStyle(t, null)) return r.getPropertyValue(i) || r.getPropertyValue(n)
            } else if (t.currentStyle) return (r = t.currentStyle)[i] || r[n];
            return ""
        },
        Vi: function(t) {
            if (!t) return {
                top: 0,
                left: 0
            };
            var i = this.Wi(t),
                n = f.gt(t);
            if (!n) return i;
            try {
                for (var r = 0; n !== n.parent && r++ < 10 && !f.kt(n) && n.frameElement;) {
                    var e = this.Wi(n.frameElement);
                    i.left += e.left, i.top += e.top, n = n.parent
                }
            } catch (a) {}
            return i
        },
        qi: function(t) {
            for (var i = t, n = f.gt(i), r = 100; i && i.tagName;) {
                var e = 100;
                if (s.ie) {
                    if (5 < s.ie) try {
                        e = parseInt(o.a(i, "filters.alpha.opacity"), 10) || 100
                    } catch (a) {}
                    r = e < r ? e : r
                } else {
                    try {
                        e = 100 * (n.getComputedStyle(i, null).opacity || 1)
                    } catch (a) {}
                    r *= e / 100
                }
                i = i.parentNode
            }
            return 0 === r ? 0 : r || 100
        },
        Ji: function(t) {
            var i = f.gt(t),
                n = this.qi(t);
            try {
                for (var r = 0; r++ < 10 && f.bt(i) && !f.kt(i);) {
                    n *= (i.frameElement ? this.qi(i.frameElement) : 100) / 100, i = i.parent
                }
            } catch (e) {}
            return n
        },
        Gi: function(t) {
            t = t || window;
            try {
                var i = f.Ct(t).scrollWidth;
                if (i || 0 === i) return i
            } catch (n) {}
            return -1
        },
        Xi: function(t) {
            t = t || window;
            try {
                var i = f.Ct(t).scrollHeight;
                if (i || 0 === i) return i
            } catch (n) {}
            return -1
        },
        Ki: function(t) {
            var i = (t = t || window).document;
            return t.pageYOffset || i.documentElement.scrollTop || i.body.scrollTop
        },
        Yi: function(t) {
            var i = t || window,
                n = f.Ct(i);
            return i.pageXOffset || n.scrollLeft
        },
        $i: function(t, i) {
            var n = t.offsetWidth;
            return i && (n += this.Qi(t, "Left") + this.Qi(t, "Right")), n
        },
        Qi: function(t, i) {
            var n = this.zi(t, "margin" + i).toString().toLowerCase().replace("px", "").replace("auto", "0");
            return parseInt(n, 10) || 0
        },
        Zi: function(t, i) {
            var n = t.offsetHeight;
            return i && (n += this.Qi(t, "Top") + this.Qi(t, "Bottom")), n
        },
        "in": function(t, i) {
            var n = ["<div ", 'style="position: absolute; right: 0px; top: 0px; z-index: 9999999;line-height:1.2;', 'font-size: 12px;background:#ff0000;font-weight: 700;">', "BAIDU_AD_", i, "<br>", t.clientWidth, "*", t.clientHeight, "</div>"].join(""),
                r = document.createElement("div");
            r.innerHTML = n;
            var e = t.style;
            e.border = "1px solid #ff0000", e.position = e.position || "relative", t.appendChild(r)
        },
        nn: function(t) {
            for (var i = t, n = f.gt(i); i && i.tagName;) {
                if (!("hidden" !== n.getComputedStyle(i, null).visibility)) return !1;
                i = i.parentNode
            }
            return !0
        },
        rn: function(t) {
            var i = f.gt(t),
                n = this.nn(t);
            if (!n) return !1;
            try {
                for (var r = 0; r++ < 10 && f.bt(i) && !f.kt(i) && i.frameElement;) {
                    if (!(n = this.nn(i.frameElement))) return !1;
                    i = i.parent
                }
            } catch (e) {}
            return !0
        },
        yi: function() {
            var t = Math.max(320, window.innerWidth);
            return t = isNaN(t) ? this.ji() : t
        },
        bi: function(t) {
            if (!t) return window.screen.width;
            var i = parseInt(this.zi(t, "paddingLeft"), 10) || 0,
                n = parseInt(this.zi(t, "paddingRight"), 10) || 0,
                r = t.clientWidth - i - n;
            return r = 0 < r ? r : window.screen.width
        },
        Ii: function(t) {
            if (!t) return 0;
            var i = parseInt(this.zi(t, "paddingTop"), 10) || 0,
                n = parseInt(this.zi(t, "paddingBottom"), 10) || 0,
                r = t.clientHeight - i - n;
            return r = 0 < r ? r : 0
        }
    }
}, function(t, i, n) {
    var h = n(1),
        d = n(4),
        u = n(34),
        r = n(7),
        e = n(6),
        l = n(2),
        a = n(0);
    t.exports = {
        en: function(t, i) {
            return t.nodeName && t.nodeName.toUpperCase() === i.toUpperCase()
        },
        an: function(t, i) {
            try {
                var n = document.createElement("script");
                n.type = "text/javascript", t.src ? n.src = t.src : n.text = t.text || t.textContent || t.innerHTML || "", i.insertBefore(n, i.firstChild)
            } catch (r) {
                e.Et(h.et, r, {
                    pos: "createscripterror",
                    status: "renderFail"
                })
            }
        },
        on: function(t, i) {
            if (!t) return !1;
            t.innerHTML = '<span style="display: none">ie</span>' + i;
            for (var n = t.childNodes, r = [], e = 0; n[e]; e++) !this.en(n[e], "script") || n[e].type && "text/javascript" !== n[e].type.toLowerCase() || r.push(n[e]);
            r.reverse();
            for (var a = 0, o = r.length; a < o; a++) this.an(r[a].parentNode.removeChild(r[a]), t);
            return !0
        },
        sn: function(t, i) {
            var n = d.Ht(t);
            if (n && !d.Gt(n, h.K)) {
                var r = n.response.pdb_deliv.deliv_des;
                r = r._html;
                var e = this.un();
                if (this.cn() && i.getAttribute("src", 2) !== e) i.src = e;
                else {
                    if (r && "url" === r.type) return i.src = r.content, void d.Xt(n.id, h.K);
                    try {
                        d.Xt(n.id, h.K);
                        var a = u.fn(r, n);
                        a.indexOf("<body>") < 0 && (a = "<!DOCTYPE html><body>" + a);
                        var o = i.contentWindow.document;
                        o.open("text/html", "replace"), o.write(a), o.body && (o.body.style.backgroundColor = "transparent")
                    } catch (s) {}
                }
            }
        },
        cn: function() {
            var t = document.createElement("iframe"),
                i = !1;
            if (!document.body) return i;
            return t.src = "about:blank", document.body.insertBefore(t, document.body.firstChild), i = function n(t) {
                try {
                    return !t.contentWindow.document
                } catch (i) {
                    return !0
                }
            }(t), document.body.removeChild(t), this.cn = function() {
                return i
            }, i
        },
        hn: function() {
            var t = navigator.userAgent,
                i = t && t.match(/iphone.*micromessenger/i);
            return this.hn = function() {
                return i
            }, i
        },
        un: function() {
            return this.cn() ? r.Ni("domainPolicyFileUrl") || "/domain-policy.htm" : this.hn() ? r.Ni("blankPolicyFileUrl") || "/blank-policy.htm" : "about:blank"
        },
        renderRichMaterial: function(t) {
            var i = t.response,
                n = i && i.pdb_deliv && i.pdb_deliv.deliv_des,
                r = n && n._html,
                e = t.isNeedCacheRequest;
            if (!r || "rich" !== r.type || e) return !1;
            var a = l.pt(t),
                o = r.content,
                s = t.isAsync,
                u = t.productLine,
                c = !1;
            if (s)
                if (!s || "clb" !== u && "dup" !== u) c = this.on(a, o);
                else {
                    var f = this.dn(t);
                    a.innerHTML = f, c = !0
                }
            else document.write(o), d.Xt(t.id, h.K), c = !0;
            return c
        },
        dn: function(t) {
            var i = this.ln(t);
            return this.vn(i)
        },
        ln: function(t) {
            var i = t.containerInfo,
                n = t.width || i.width,
                r = t.height || i.height,
                e = this.un();
            return {
                iframeId: "iframe" + t.id,
                srcAttriName: "src",
                onloadDefine: 'onload="' + h.M + "(3, '" + t.id + "', this);\"",
                iframeWidth: "" + n,
                iframeHeight: "" + r,
                url: e
            }
        },
        vn: function(t) {
            var i = ["<iframe", ' id="{iframeId}"', ' name="{iframeId}"', " {onloadDefine}", ' {srcAttriName}="{url}"', ' width="{iframeWidth}"', ' height="{iframeHeight}"', ' align="center,center"', ' vspace="0"', ' hspace="0"', ' marginwidth="0"', ' marginheight="0"', ' scrolling="no"', ' frameborder="0"', ' style="border:0;vertical-align:bottom;margin:0;width:{iframeWidth}px;height:{iframeHeight}px"', ' allowtransparency="true">', "</iframe>"].join("");
            return a.h(i, t)
        }
    }
}, function(t, i, n) {
    var r = n(3),
        e = n(0);
    r.__eventMap = r.__eventMap || {};
    var a = r.__eventMap;
    t.exports = {
        St: function(t, i, n) {
            if (t)
                if (t.addEventListener) t.addEventListener(i, n, !1);
                else if (t.attachEvent) t.attachEvent("on" + i, n);
            else {
                var r = t["on" + i];
                t["on" + i] = function() {
                    r && r.apply(this, arguments), n.apply(this, arguments)
                }
            }
            return t
        },
        _n: function(t, i) {
            e.A(i) && (a[t] = i)
        },
        pn: function(t) {
            delete a[t]
        },
        vi: function(t) {
            var i = a[t];
            if (e.A(i)) {
                var n = Array.prototype.slice.call(arguments, 1);
                i.apply(window, n)
            }
        }
    }
}, function(t, i, n) {
    var d = n(1),
        o = n(29),
        s = n(31),
        u = n(20),
        c = n(32),
        f = n(22),
        h = n(33),
        l = n(23),
        v = n(5),
        _ = n(17),
        p = n(2),
        e = n(0),
        w = n(6),
        a = {
            slotParam: o,
            businessParam: s,
            browserParam: u,
            systemParam: c,
            additionalParam: f
        };
    t.exports = {
        wn: function(t) {
            for (var i = [], n = t.paramsList, r = 0, e = n.length; r < e; r++) {
                var a = n[r],
                    o = a.key,
                    s = a.encode,
                    u = a.value,
                    c = a.limit;
                try {
                    u = "function" == typeof u ? u.apply(t) : u, u = c ? u.substr(0, c) : u, u = s ? encodeURIComponent(u) : u, i.push({
                        key: o,
                        value: u
                    })
                } catch (f) {
                    w.Et("adcodex_error", f, {
                        key: encodeURIComponent(o)
                    })
                }
            }
            return i
        },
        ei: function(t) {
            var i = [];
            o.setSlotInfo(t), u.setSlotInfo(t), s.setSlotInfo(t), s.mn(p.Dt());
            for (var n = {}, r = 0, e = (i = (i = (i = (i = (i = i.concat(this.wn(o))).concat(this.wn(s))).concat(this.wn(u))).concat(this.wn(f))).concat(this.wn(c))).length; r < e; r++) {
                var a = i[r];
                n[a.key] = a.value
            }
            return n
        },
        gn: function(t) {
            var i = [];
            h.setSlotInfo(t), h.mn(p.Dt());
            for (var n = {}, r = 0, e = (i = i.concat(this.wn(h))).length; r < e; r++) {
                var a = i[r];
                n[a.key] = a.value
            }
            return n
        },
        ai: function(t, i, n, r) {
            var e = [];
            for (var a in t)
                if (a && (t[a] || 0 === t[a]) && t.hasOwnProperty(a) && (!r || !r[a])) {
                    var o = t[a];
                    e.push(a + "=" + o)
                } if (i && (e = _.yn(e)), window && window.location && window.location.ancestorOrigins && window.location.ancestorOrigins.length) {
                var s = window.location.ancestorOrigins;
                e.push("lto=" + encodeURIComponent(s[s.length - 1])), e.push("ltl=" + s.length)
            }
            return 1 === i && n && !v.ie ? l.bn(n, e) : e.join("&")
        },
        getPmpRequestUrl: function(t) {
            var i = t.paramObj,
                n = t.timestampWatcher,
                r = n.t1,
                e = n.t2,
                a = n.t3,
                o = t.response;
            i.qn = o.queryid;
            var s = ["conwid=" + t.width, "conhei=" + t.height],
                u = o.pdb_deliv,
                c = o.order_deliv,
                f = o.rtb_deliv;
            o.media_protect && "0" !== o.media_protect && s.push("mpdi=" + o.media_protect), u.deliv_id && s.push("pdbid=" + u.deliv_id), c.deliv_id && s.push("orderid=" + c.deliv_id), c.demand_id && s.push("odid=" + c.demand_id), f.deliv_id && s.push("rtbid=" + f.deliv_id), f.demand_id && s.push("rdid=" + f.demand_id), t.isNeedCacheRequest && (i.dpv = i.qn), t.isUnion ? s.push("dc=3") : s.push("dc=2"), 0 < r && 0 < e && 0 < a && (i.tt = r + "." + (e - r) + "." + (a - r) + "." + (new Date - r));
            var h = {};
            return i.exps && (s.push("exps=" + i.exps), h.exps = !0), this.In(t, d.U, d.kn, i, s, h)
        },
        An: function(t) {
            var i = t.paramObj,
                n = d.B && _.Ut(50) ? "" : d.U,
                r = d.N + "s?",
                e = {},
                a = ["wid=" + t.width, "hei=" + t.height];
            if (a.push("di=" + i.di), e.di = !0, i.ltu && (a.push("ltu=" + i.ltu), e.ltu = !0), i.psi && (a.push("psi=" + i.psi), e.psi = !0), t.isUnion ? a.push("dc=3") : a.push("dc=2"), 1 === t.proxy)
                for (var o = ["ti", "utdi", "drs", "cfv", "cpl", "chi", "cce", "tlm", "psr", "ccd", "cja", "cmi", "col", "cdo", "tcn", "ltr"], s = 0; s < o.length; s++) e[o[s]] = !0;
            return this.In(t, n, r, i, a, e)
        },
        In: function(t, i, n, r, e, a) {
            var o = i + n + e.join("&") + "&",
                s = t.response.placement.basic.publisherDomain,
                u = "",
                c = !1;
            1 === t.proxy && s && s.pos && (o = i + "//" + s.pos + "/", v.ie ? o = o + "s?" + e.join("&") + "&" : (u = l.Vt(s.pos), o = o + _.Ft(5, 10) + "?" + l.bn(u, e) + "&", c = !0));
            var f = o + this.ai(r, t.proxy, u, a);
            return c && (f += "&swt=1"), f
        },
        Sn: function(t, i) {
            var n = a[t] && a[t].paramsList;
            if (n)
                for (var r = 0; r < n.length; r++)
                    if (n[r].key === i) return e.P(a[t], n[r].value)()
        }
    }
}, function(t, i, n) {
    var l = n(2),
        _ = n(8),
        s = n(5),
        u = n(6),
        r = n(0),
        c = 1,
        f = 2,
        h = 3,
        p = !0,
        w = window,
        d = 0,
        v = 0;
    t.exports = {
        xn: "//eclick.baidu.com/a.js",
        Dn: 72e5,
        Cn: {},
        Tn: null,
        Pn: null,
        On: 500,
        En: !1,
        regisetViewWatch: function(t) {
            this.En || (this.Mn(), this.En = !0), this.Tn = this.Tn || [];
            var i = l.pt(t);
            if (i) {
                var n = t.paramObj,
                    r = t.width,
                    e = t.height,
                    a = t.response.queryid,
                    o = t.containerInfo;
                r = o.width, e = o.height;
                var s = new Date,
                    u = "" + t.slotId,
                    c = {
                        uid: t.id,
                        slotId: u,
                        domEle: i,
                        jk: a,
                        word: n.ltu,
                        iframeStatus: n.dis,
                        aw: r,
                        ah: e,
                        viewContext: {
                            opacity: 1,
                            pageStayTime: 0,
                            pageStayTimeStamp: s,
                            inViewTime: 0,
                            inViewTimeStamp: s,
                            currViewStatus: !1,
                            focusTime: 0,
                            adViewTime: 0,
                            currAdViewStatus: !1,
                            adViewTimeStamp: s
                        }
                    };
                if (window.postMessage && c.slotId && -1 < c.slotId.indexOf("u")) {
                    c.sendMessage = function() {
                        if (this.watchIframeWindow && this.watchIframeLoaded && this.viewContext && this.viewContext.lastAdViewStatus !== this.viewContext.currAdViewStatus) try {
                            var t = this.analysisUrl && this.analysisUrl.split("?"),
                                i = t ? t[1] : "";
                            this.watchIframeWindow.postMessage(i, this.targetOrigin)
                        } catch (n) {}
                    };
                    var f = i.getElementsByTagName("iframe");
                    if (f && f.length) {
                        var h = f[0];
                        c.watchIframe = h, c.targetOrigin = h.getAttribute("src") || "*";
                        try {
                            c.watchIframeWindow = h.contentWindow
                        } catch (d) {
                            c.watchIframeWindow = ""
                        }
                        c.viewContext.lastAdViewStatus = !1, c.viewContext.lastViewStatus = !1, l.St(c.watchIframe, "load", function() {
                            c.watchIframeLoaded = !0, c.viewContext.lastAdViewStatus = !c.viewContext.currAdViewStatus, c.sendMessage()
                        })
                    }
                }
                this.Un(c, i), this.Tn.push(c)
            }
        },
        unregisetViewWatch: function(t) {
            if (this.Tn)
                for (var i = t.id, n = 0; n < this.Tn.length; n++) {
                    if (this.Tn[n].uid === i) return void this.Tn.splice(n, 1)
                }
        },
        Bn: function(t, i) {
            if (t && i) {
                var n = t + "?",
                    r = i.viewContext;
                r.inViewTime > this.Dn && (r.inViewTime = this.Dn), r.adViewTime > this.Dn && (r.adViewTime = this.Dn), r.pageStayTime >= this.Dn && (r.pageStayTime = this.Dn);
                var e = [];
                return e.push("tu=" + i.slotId), e.push("op=" + r.opacity), e.push("jk=" + i.jk), e.push("word=" + i.word), e.push("if=" + i.iframeStatus), e.push("aw=" + i.aw), e.push("ah=" + i.ah), e.push("pt=" + r.pageStayTime), e.push("it=" + r.inViewTime), e.push("vt=" + r.adViewTime), e.push("csp=" + i.desktopResolution), e.push("bcl=" + i.browserRegion), e.push("pof=" + i.pageRegion), e.push("top=" + i.top), e.push("left=" + i.left), e.push("uid=" + i.uid), e.push("iw=" + r.currAdViewStatus), n + e.join("&")
            }
        },
        Mn: function() {
            this.Rn(), l.At(r.P(this, this.Ln), 2e3), s.platform && (-1 < s.platform.indexOf("Android") || -1 < s.platform.indexOf("Phone") || -1 < s.platform.indexOf("iPod")) || l.St(w, "beforeunload", r.P(this, this.Nn))
        },
        Un: function(t, i) {
            var n = _.Vi(i);
            t.left = n.left, t.top = n.top;
            var r = window.screen.availWidth,
                e = window.screen.availHeight;
            1e4 < r && (r = 0), 1e4 < e && (e = 0), t.desktopResolution = r + "," + e, t.browserRegion = _.ji(window) + "," + _.Hi(window), t.pageRegion = _.Gi(window) + "," + _.Xi(window)
        },
        Fn: function(t, i) {
            var n, r, e, a = i.isInView,
                o = i.isAdView,
                s = new Date;
            return n = r = e = this.On, t.lastViewStatus = t.currViewStatus, t.lastAdViewStatus = t.currAdViewStatus, v === c && (v = f, n = r = 0, e = r = 0), t.currViewStatus ? (v === c && ((n = parseInt(s.getTime() - t.inViewTimeStamp.getTime(), 10)) < 0 ? n = 0 : n > this.On && (n = this.On)), t.inViewTime += n, t.inViewTimeStamp = s) : a && (t.inViewTimeStamp = s), t.currViewStatus = a, t.currAdViewStatus ? (v === h && ((e = parseInt(s.getTime() - t.adViewTimeStamp.getTime(), 10)) < 0 ? e = 0 : e > this.On && (e = this.On)), t.adViewTime += e, t.adViewTimeStamp = s) : o && (t.adViewTimeStamp = s), t.currAdViewStatus = o, t.pageStayTime = t.pageStayTime || 0, d = d || 0, v === h && (this.pageTimeSpan = parseInt(s.getTime() - t.pageStayTimeStamp.getTime(), 10), r < 0 ? r = 0 : r > this.On && (r = this.On)), t.pageStayTime += r, d += r, p && (t.focusTime += r), t.pageStayTimeStamp = s, t.opacity = i.opacity, t
        },
        jn: function(t) {
            var i = t.domEle;
            if (!i) return {
                isInView: !1,
                isAdView: !1,
                opacity: 1
            };
            var n = !1,
                r = !1,
                e = 1;
            if (p) try {
                if (e = this.Ji(t), this.Hn(i)) {
                    var a = _.ji(w),
                        o = _.Hi(w),
                        s = this.Vi(i),
                        u = _.$i(i),
                        c = _.Zi(i);
                    n = 0 <= s.top && s.bottom <= o && 0 <= s.left && s.left <= a;
                    var f = 0 < s.top ? s.top : 0,
                        h = s.bottom > o ? o : s.bottom,
                        d = 0 < s.left ? s.left : 0,
                        l = s.right > a ? a : s.right;
                    if (f < h && d < l) r = .5 * (u * c) < (h - f) * (l - d)
                } else r = n = !1
            } catch (v) {}
            return {
                isInView: n,
                isAdView: r,
                opacity: e
            }
        },
        Hn: function(t) {
            return !!t && (50 <= _.Ji(t) && _.rn(t))
        },
        Ji: function(t) {
            var i = t.uid,
                n = t.domEle;
            this.Cn[i] = this.Cn[i] || 0;
            var r = _.Ji(n);
            return 100 === r && (this.Cn[i] |= 1), r < 100 && 0 < r && (this.Cn[i] |= 2), 0 === r && (this.Cn[i] |= 4), this.Cn[i]
        },
        Vi: function(t) {
            var i = _.Wi(t),
                n = _.Yi(window),
                r = _.Ki(window),
                e = _.$i(t, !1),
                a = _.Zi(t, !1);
            return {
                top: i.top - r,
                bottom: i.top - r + a,
                left: i.left - n,
                right: i.left - n + e,
                topAbs: i.top,
                bottomAbs: i.top + a,
                leftAbs: i.left,
                rightAbs: i.left + e
            }
        },
        Wn: function() {
            if (this.Tn)
                for (var t = 0, i = this.Tn.length; t < i; t++) {
                    var n = this.Tn[t],
                        r = this.jn(n);
                    n.viewContext = this.Fn(n.viewContext, r), n.analysisUrl = this.Bn(this.xn, n), n.sendMessage && n.sendMessage()
                }
        },
        zn: function() {
            this.Wn(), d >= this.Dn && this.Nn(!1)
        },
        Rn: function() {
            v = c, this.Vn(w), (!s.ie || s.ie && 6 < s.ie) && this.zn(), this.Pn = setInterval(r.P(this, this.zn), this.On)
        },
        Ln: function() {
            var t, i, n, r;
            for (t = 0, i = this.Tn.length; t < i; t++)(n = this.Tn[t]) && (r = n.domEle) && this.Un(n, r)
        },
        Nn: function(t) {
            try {
                if (clearInterval(this.Pn), v !== f) return void(v = h);
                var i, n;
                for (v = h, this.Wn(), i = 0, n = this.Tn.length; i < n; i++) {
                    var r = this.Tn[i];
                    r && r.analysisUrl && !r.isSended && (r.isSended = !0, 0 === i && (r.analysisUrl += "&total=" + this.Tn.length), u.Ci({
                        url: r.analysisUrl
                    }))
                }
                if (t) {
                    var e, a = (new Date).getTime();
                    if (s.ie)
                        for (e = a + 200; a < e;) a = (new Date).getTime();
                    else {
                        for (n = 1e5, i = 0; i < n; i++);
                        for (n = 1e7 < (n = 2e7 / ((e = (new Date).getTime()) - a)) ? 1e7 : n, i = 0; i < n; i++);
                    }
                }
            } catch (o) {}
        },
        Vn: function(t) {
            t = t || w, p = !0, s.ie ? (l.St(t, "focusin", r.P(this, this.Jn)), l.St(t, "focusout", r.P(this, this.Gn))) : (l.St(t, "focus", r.P(this, this.Jn)), l.St(t, "blur", r.P(this, this.Gn)))
        },
        Jn: function() {
            p = !0
        },
        Gn: function() {
            p = !1
        }
    }
}, function(t, i, n) {
    var r, e, a, o = n(3),
        s = n(0),
        u = {
            mixDom: {
                percent: 10,
                expId: "110063",
                baseId: "110053"
            }
        };
    if (!o.__onlyExps)
        for (var c in o.__onlyExps = {}, u) u.hasOwnProperty(c) && u[c] && (a = u[c]).onlyExp && (r = a.expId, e = a.baseId, r && (o.__onlyExps[r] = !0), e && (o.__onlyExps[e] = !0));
    t.exports = {
        Xn: function(t, i) {
            return t && i ? t += "," + i : t = t || i, t
        },
        Kn: function(t) {
            var i = "",
                n = 1e4 * Math.random(),
                r = 100 * t.percent,
                e = 200 * t.percent;
            return n < r ? i = t.expId : r <= n && n < e && (i = t.baseId), i
        },
        Yn: function(t, i) {
            var n = u[t],
                r = this.Kn(n),
                e = "";
            return (r = r && this.$n(i) ? "" : r) && (r === n.expId ? e = "exp" : r === n.baseId && (e = "base")), {
                expType: e,
                expId: r
            }
        },
        $n: function(t) {
            if (s.f(o.__onlyExps)) return !1;
            var i = this.Qn(t),
                n = i && i.split(",");
            if (0 < n.length)
                for (var r = 0; r < n.length; r++)
                    if (o.__onlyExps[n[r]]) return !0;
            return !1
        },
        Qn: function(t) {
            return t && t.exps ? t.paramObj && t.paramObj.exps ? t.paramObj.exps : t.exps : ""
        }
    }
}, function(t, i, n) {
    var u = n(1),
        c = n(25),
        f = n(11),
        h = n(0),
        d = n(7),
        r = n(9);
    t.exports = {
        getFrameHTML: function(t) {
            if (t.isPdbAd) return r.dn(t);
            var i = this.ln(t);
            return this.vn(i)
        },
        ln: function(t) {
            var i = t.containerInfo,
                n = t.width || i.width,
                r = t.height || i.height,
                e = t.isDsFlow ? f.An(t) : f.getPmpRequestUrl(t),
                a = "";
            if (t.isNeedCacheRequest) {
                var o = t.response.queryid;
                c.Zn(o, t), d.Li("adsbybaidu_callback", h.P(c, c.tr)), a = 'onload="' + u.M + "(1, '" + o + "', this);\""
            } else if (t.styleOpenApi && t.styleOpenApi.floatingState && "show" !== t.styleOpenApi.floatingState || 2 === i.location) {
                var s = t.styleOpenApi && t.styleOpenApi.floatingState ? t.styleOpenApi.floatingState : "upSlideShow";
                a = 'onload="' + u.M + "(2, '" + i.location + "', '" + s + "', this);\""
            }
            return {
                iframeId: "iframe" + t.id,
                srcAttriName: "src",
                onloadDefine: a,
                iframeWidth: "" + n,
                iframeHeight: "" + r,
                url: e
            }
        },
        vn: function(t) {
            var i = ["<iframe", ' id="{iframeId}"', ' name="{iframeId}"', " {onloadDefine}", ' {srcAttriName}="{url}"', ' width="{iframeWidth}"', ' height="{iframeHeight}"', ' align="center,center"', ' vspace="0"', ' hspace="0"', ' marginwidth="0"', ' marginheight="0"', ' scrolling="no"', ' frameborder="0"', ' style="border:0;vertical-align:bottom;margin:0;width:{iframeWidth}px;height:{iframeHeight}px"', ' allowtransparency="true">', "</iframe>"].join("");
            return h.h(i, t)
        }
    }
}, function(t, i) {
    var a = null,
        e = !1;
    try {
        (a = window.localStorage) && a.removeItem && (e = !0)
    } catch (n) {}
    t.exports = {
        ir: "___ds_storage__",
        nr: 72e5,
        _i: function() {
            return e
        },
        ti: function(t, i, n) {
            if (a) {
                i = n ? encodeURIComponent(i) : i;
                try {
                    a.setItem(t, i)
                } catch (r) {}
            }
        },
        Nt: function(t, i) {
            if (a) try {
                var n = a.getItem(t);
                return i && n ? decodeURIComponent(n) : n
            } catch (r) {
                return null
            }
            return null
        },
        Ti: function(t, i, n) {
            if (a) {
                i = n ? encodeURIComponent(i) : i;
                var r = this.Nt(t) || "";
                r += (r && "|") + i;
                try {
                    this.ti(t, r)
                } catch (e) {}
            }
        },
        rr: function(t) {
            try {
                a && a.removeItem(t)
            } catch (i) {}
        },
        Pi: function(t, i, n) {
            if (a) {
                i = n ? encodeURIComponent(i) : i;
                var r = this.Nt(t) || "";
                if (r = r.replace(new RegExp(i + "\\|?", "g"), "").replace(/\|$/, "")) try {
                    this.ti(t, r)
                } catch (e) {} else a.removeItem(t)
            }
        },
        ki: function(t) {
            var i, n = this.Nt(this.ir + t) || "";
            if (e && n) {
                var r = (new Date).getTime();
                n = n.split("|"), (parseInt(n[1], 10) || 0) + this.nr > r && (i = parseInt(n[0], 10) || 0)
            }
            return i
        },
        er: function(t) {
            this.rr(this.ir + t)
        }
    }
}, function(t, i) {
    t.exports = {
        Ci: function(t) {
            var i = t.response.pdb_deliv.deliv_des,
                n = i && i._html,
                r = n && n.monitorUrl;
            if (r) {
                var e = new Image,
                    a = "log" + +new Date;
                window[a] = e, "http" === r.substr(0, 4).toLowerCase() ? ("http://" === r.substr(0, 7).toLowerCase() && (r = r.replace("http://", "//")), "https://" === r.substr(0, 8).toLowerCase() && (r = r.replace("https://", "//"))) : r = "//" + r;
                e.onload = e.onerror = e.onabort = function() {
                    e.onload = e.onerror = e.onabort = null;
                    try {
                        delete window[a]
                    } catch (t) {
                        window[a] = undefined
                    }
                }, e.src = r
            }
        }
    }
}, function(t, i) {
    t.exports = {
        Rt: function(t, i) {
            return t = t || 0, i = i || 1, Math.floor(Math.random() * (i - t + 1)) + t
        },
        Ft: function(t, i) {
            for (var n = "", r = this.Rt(t, i), e = 0; e < r; e++) n += String.fromCharCode(Math.floor(26 * Math.random()) + 97);
            return n
        },
        Ut: function(t) {
            var i = !1;
            return t = 10 * (t || 50), this.Rt(0, 1e3) < t && (i = !0), i
        },
        Nt: function(t) {
            var i;
            t && 0 < t.length && (i = t[this.Rt(0, t.length - 1)]);
            return i
        },
        jt: function() {
            var t = ["padding-left:0px;", "padding-right:0px;", "padding-top:0px;", "padding-bottom:0px;", "padding:0px;", "margin-left:0px;", "margin-right:0px;", "margin-top:0px;", "margin-bottom:0px;", "margin:0px;", "cursor:auto;", "visibility:visible;", "text-align:left;", "zoom:1;"];
            return t[this.Rt(0, t.length - 1)]
        },
        yn: function(t) {
            for (var i = t.length; 0 < i; i--) {
                var n = Math.floor(Math.random() * i),
                    r = t[i - 1];
                t[i - 1] = t[n], t[n] = r
            }
            return t
        }
    }
}, function(t, i, n) {
    var f = n(0),
        h = n(7);
    t.exports = {
        ar: "bizOrientations",
        or: "bizUrgentOrientations",
        sr: function(t, i) {
            var n = this.ur.apply(this, arguments);
            return this.cr(t, n)
        },
        ur: function(t, i) {
            return t && /^[0-9a-zA-Z]+$/.test(t) && i ? i = f.k(i) ? i : Array.prototype.slice.call(arguments, 1) : []
        },
        cr: function(t, i) {
            if (!i || !i.length) return !1;
            var n = this.ar,
                r = h.Bi(n) || {},
                e = {};
            for (var a in r) f.e.call(r, a) && (e[a] = f.k(r[a]) ? r[a].slice() : r[a]);
            for (var o = e[t] || [], s = i.length, u = 0; u < s; u++) {
                var c = i[u];
                "string" == typeof c && (c = encodeURIComponent(c)).length <= 100 && (o[o.length] = c)
            }
            return !!o.length && (e[t] = f.I(o), h.Mi(n, e), !0)
        },
        fr: function(t) {
            t = t || 500, t = Math.max(0, Math.min(t, 500));
            var i, n = [],
                r = h.Bi(this.or) || h.Bi(this.ar) || {};
            if (f.S(r))
                for (var e in r) f.e.call(r, e) && (i = e + "=" + r[e].join(","), n[n.length] = i);
            h.Mi(this.or, undefined), n.sort(function(t, i) {
                return t.length - i.length
            });
            for (var a = "", o = n.length, s = 0; s < o && !(a.length + n[s].length >= t); s++) a += (s ? "&" : "") + n[s];
            return a
        }
    }
}, function(t, i, n) {
    var e = n(20),
        a = n(1),
        o = n(0),
        s = n(6);
    t.exports = {
        hr: function(t) {
            o.S(t) ? (this.hasher = t.hasher, this.time = t.time, this.url = t.url, this.random = t.random, this.screen_resolution = t.screen_resolution, this.screen_orientation = t.screen_orientation, this.canvas = t.canvas, this.ie_activex = t.ie_activex) : "function" == typeof t && (this.hasher = t)
        },
        dr: function() {
            var t = [];
            t.push((new Date).getTime()), t.push(Math.random()), this.url && t.push(this.url);
            try {
                if (t.push(navigator.userAgent), t.push(navigator.language), t.push(window.screen.colorDepth), this.screen_resolution) {
                    var i = this.lr();
                    void 0 !== i && t.push(i.join("x"))
                }
                t.push((new Date).getTimezoneOffset()), t.push(this.vr()), t.push(this._r()), t.push(this.pr()), document.body ? t.push(typeof document.body.addBehavior) : t.push(typeof undefined), t.push(typeof window.openDatabase), t.push(navigator.cpuClass), t.push(navigator.platform), t.push(navigator.doNotTrack), this.canvas && this.wr() && t.push(this.mr())
            } catch (n) {
                s.Et(a.et, n, {
                    key: "pageSearchId",
                    value: "navigatorParam"
                })
            }
            return this.hasher ? this.hasher(t.join("~~~"), 31) : this.gr(t.join("~~~"), 31)
        },
        yr: function(t, i) {
            t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], i = [i[0] >>> 16, 65535 & i[0], i[1] >>> 16, 65535 & i[1]];
            var n = [0, 0, 0, 0];
            return n[3] += t[3] + i[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] + i[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] + i[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] + i[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
        },
        br: function(t, i) {
            t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], i = [i[0] >>> 16, 65535 & i[0], i[1] >>> 16, 65535 & i[1]];
            var n = [0, 0, 0, 0];
            return n[3] += t[3] * i[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] * i[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += t[3] * i[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] * i[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[2] * i[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[3] * i[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] * i[3] + t[1] * i[2] + t[2] * i[1] + t[3] * i[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
        },
        Ir: function(t, i) {
            return 32 === (i %= 64) ? [t[1], t[0]] : i < 32 ? [t[0] << i | t[1] >>> 32 - i, t[1] << i | t[0] >>> 32 - i] : (i -= 32, [t[1] << i | t[0] >>> 32 - i, t[0] << i | t[1] >>> 32 - i])
        },
        kr: function(t, i) {
            return 0 === (i %= 64) ? t : i < 32 ? [t[0] << i | t[1] >>> 32 - i, t[1] << i] : [t[1] << i - 32, 0]
        },
        Ar: function(t, i) {
            return [t[0] ^ i[0], t[1] ^ i[1]]
        },
        Sr: function(t) {
            return t = this.Ar(t, [0, t[0] >>> 1]), t = this.br(t, [4283543511, 3981806797]), t = this.Ar(t, [0, t[0] >>> 1]), t = this.br(t, [3301882366, 444984403]), t = this.Ar(t, [0, t[0] >>> 1])
        },
        gr: function(t, i) {
            i = i || 0;
            for (var n = (t = t || "").length % 16, r = t.length - n, e = [0, i], a = [0, i], o = [0, 0], s = [0, 0], u = [2277735313, 289559509], c = [1291169091, 658871167], f = 0; f < r; f += 16) o = [255 & t.charCodeAt(f + 4) | (255 & t.charCodeAt(f + 5)) << 8 | (255 & t.charCodeAt(f + 6)) << 16 | (255 & t.charCodeAt(f + 7)) << 24, 255 & t.charCodeAt(f) | (255 & t.charCodeAt(f + 1)) << 8 | (255 & t.charCodeAt(f + 2)) << 16 | (255 & t.charCodeAt(f + 3)) << 24], s = [255 & t.charCodeAt(f + 12) | (255 & t.charCodeAt(f + 13)) << 8 | (255 & t.charCodeAt(f + 14)) << 16 | (255 & t.charCodeAt(f + 15)) << 24, 255 & t.charCodeAt(f + 8) | (255 & t.charCodeAt(f + 9)) << 8 | (255 & t.charCodeAt(f + 10)) << 16 | (255 & t.charCodeAt(f + 11)) << 24], o = this.br(o, u), o = this.Ir(o, 31), o = this.br(o, c), e = this.Ar(e, o), e = this.Ir(e, 27), e = this.yr(e, a), e = this.yr(this.br(e, [0, 5]), [0, 1390208809]), s = this.br(s, c), s = this.Ir(s, 33), s = this.br(s, u), a = this.Ar(a, s), a = this.Ir(a, 31), a = this.yr(a, e), a = this.yr(this.br(a, [0, 5]), [0, 944331445]);
            switch (o = [0, 0], s = [0, 0], n) {
                case 15:
                    s = this.Ar(s, this.kr([0, t.charCodeAt(f + 14)], 48));
                case 14:
                    s = this.Ar(s, this.kr([0, t.charCodeAt(f + 13)], 40));
                case 13:
                    s = this.Ar(s, this.kr([0, t.charCodeAt(f + 12)], 32));
                case 12:
                    s = this.Ar(s, this.kr([0, t.charCodeAt(f + 11)], 24));
                case 11:
                    s = this.Ar(s, this.kr([0, t.charCodeAt(f + 10)], 16));
                case 10:
                    s = this.Ar(s, this.kr([0, t.charCodeAt(f + 9)], 8));
                case 9:
                    s = this.Ar(s, [0, t.charCodeAt(f + 8)]), s = this.br(s, c), s = this.Ir(s, 33), s = this.br(s, u), a = this.Ar(a, s);
                case 8:
                    o = this.Ar(o, this.kr([0, t.charCodeAt(f + 7)], 56));
                case 7:
                    o = this.Ar(o, this.kr([0, t.charCodeAt(f + 6)], 48));
                case 6:
                    o = this.Ar(o, this.kr([0, t.charCodeAt(f + 5)], 40));
                case 5:
                    o = this.Ar(o, this.kr([0, t.charCodeAt(f + 4)], 32));
                case 4:
                    o = this.Ar(o, this.kr([0, t.charCodeAt(f + 3)], 24));
                case 3:
                    o = this.Ar(o, this.kr([0, t.charCodeAt(f + 2)], 16));
                case 2:
                    o = this.Ar(o, this.kr([0, t.charCodeAt(f + 1)], 8));
                case 1:
                    o = this.Ar(o, [0, t.charCodeAt(f)]), o = this.br(o, u), o = this.Ir(o, 31), o = this.br(o, c), e = this.Ar(e, o)
            }
            return e = this.Ar(e, [0, t.length]), a = this.Ar(a, [0, t.length]), e = this.yr(e, a), a = this.yr(a, e), e = this.Sr(e), a = this.Sr(a), e = this.yr(e, a), a = this.yr(a, e), ("00000000" + (e[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (e[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8)
        },
        _r: function() {
            try {
                return !!window.localStorage
            } catch (t) {
                return !0
            }
        },
        vr: function() {
            try {
                return !!window.sessionStorage
            } catch (t) {
                return !0
            }
        },
        pr: function() {
            try {
                return !!window.indexedDB
            } catch (t) {
                return !0
            }
        },
        wr: function() {
            var t = document.createElement("canvas");
            return !(!t.getContext || !t.getContext("2d"))
        },
        lr: function() {
            return this.screen_orientation ? window.screen.height > window.screen.width ? [window.screen.height, window.screen.width] : [window.screen.width, window.screen.height] : [window.screen.height, window.screen.width]
        },
        mr: function() {
            var t = document.createElement("canvas"),
                i = t.getContext("2d"),
                n = "http://valve.github.io";
            return i.textBaseline = "top", i.font = '14px "Arial"', i.textBaseline = "alphabetic", i.fillStyle = "#f60", i.fillRect(125, 1, 62, 20), i.fillStyle = "#069", i.fillText(n, 2, 15), i.fillStyle = "rgba(102, 204, 0, 0.7)", i.fillText(n, 4, 17), t.toDataURL()
        },
        xr: function() {
            try {
                for (var t = "", i = e.paramsList, n = 0; n < i.length; n++)
                    if ("ltu" === i[n].key) {
                        t = o.P(e, i[n].value)();
                        break
                    } return this.hr({
                    url: t
                }), this.dr()
            } catch (r) {
                s.Et(a.et, r, {
                    key: "pageSearchId"
                })
            }
        }
    }
}, function(t, i, n) {
    var e = n(1),
        r = n(5),
        a = n(2),
        o = n(8),
        s = n(21),
        u = n(30),
        c = n(3),
        f = window,
        h = f.document,
        d = f.navigator,
        l = a.Dt();
    t.exports = {
        paramsList: [{
            key: "dbv",
            value: function() {
                return r.qihoo ? "1" : r.chrome ? "2" : "0"
            }
        }, {
            key: "drs",
            value: function() {
                try {
                    return {
                        uninitialized: 0,
                        loading: 1,
                        loaded: 2,
                        interactive: 3,
                        complete: 4
                    } [h.readyState]
                } catch (t) {
                    return -1
                }
            }
        }, {
            key: "pcs",
            value: function() {
                return [o.ji(l), o.Hi(l)].join("x")
            }
        }, {
            key: "pss",
            value: function() {
                return [o.Gi(l), o.Xi(l)].join("x")
            }
        }, {
            key: "cfv",
            value: function() {
                return r.Si()
            }
        }, {
            key: "cpl",
            value: function() {
                return d.plugins.length || 0
            }
        }, {
            key: "chi",
            value: function() {
                return f.history.length || 0
            }
        }, {
            key: "cce",
            value: function() {
                return d.cookieEnabled || 0
            }
        }, {
            key: "cec",
            value: function() {
                return (h.characterSet ? h.characterSet : h.charset) || ""
            }
        }, {
            key: "tlm",
            value: function() {
                return Date.parse(h.lastModified) / 1e3
            }
        }, {
            key: "prot",
            value: function() {
                return "2"
            }
        }, {
            key: "rw",
            value: function() {
                var t = Math.max(320, Math.min(window.innerWidth, window.innerHeight));
                return isNaN(t) && (t = Math.min(o.ji(), o.Hi())), t || 0
            }
        }, {
            key: "ltu",
            encode: !0,
            limit: 700,
            value: function() {
                var t;
                return 0 < (t = c.location && c.location.href ? c.location.href : s.Dr(function(t) {
                    var i = o.ji(t),
                        n = o.Hi(t);
                    return 400 < i && 120 < n
                })).indexOf("cpro_prev") && (t = t.slice(0, t.indexOf("?"))), t
            }
        }, {
            key: "liu",
            encode: !0,
            limit: 700,
            value: function() {
                return a.bt(f) ? h.URL : ""
            }
        }, {
            key: "ltr",
            encode: !0,
            limit: 300,
            value: function() {
                var t = "";
                try {
                    t = l.opener ? l.opener.document.location.href : ""
                } catch (i) {}
                return t || l.document.referrer
            }
        }, {
            key: "lcr",
            encode: !0,
            value: function() {
                if ("union" === this.Cr.productLine) return "";
                var t = h.referrer;
                if (!t) return "";
                var i = t.replace(/^https?:\/\//, "");
                i = (i = i.split("/")[0]).split(":")[0], i = s.Tr(i);
                var n = s.Tr(),
                    r = u.Pr(e.L);
                return r && n === i ? r : n !== i ? (u.Or(e.L, t, {
                    domain: n
                }), t) : ""
            }
        }, {
            key: "ecd",
            encode: !0,
            value: function() {
                return r.ie && r.ie < 9 ? 0 : 1
            }
        }],
        setSlotInfo: function(t) {
            this.Cr = t
        }
    }
}, function(t, i, n) {
    var r = n(2);
    t.exports = {
        Dr: function(t) {
            var i = r.Dt(t),
                n = "";
            return r.bt(i) && (n = i.document.referrer), n = n || i.location.href
        },
        Tr: function(t) {
            0 === (t = t || document.domain).indexOf("www.") && (t = t.substr(4)), "." === t.charAt(t.length - 1) && (t = t.substring(0, t.length - 1));
            var i = "([a-z0-9][a-z0-9\\-]*?\\.(?:" + ["com", "cn", "net", "org", "gov", "info", "la", "cc", "co", "jp", "us", "hk", "tv", "me", "biz", "in", "be", "io", "tk", "cm", "li", "ru", "ws", "hn", "fm", "tw", "ma", "in", "vn", "name", "mx", "gd", "im"].join("|") + ")(?:\\.(?:cn|jp|tw|ru|th))?)$",
                n = new RegExp(i, "i"),
                r = t.match(n);
            return r ? r[0] : t
        }
    }
}, function(t, i) {
    t.exports = {
        paramsList: [],
        Er: {
            clid: {
                key: "apdi",
                encode: !0
            },
            cuid: {
                key: "udi",
                encode: !0
            },
            ctkey: {
                key: "lcdi",
                encode: !0
            },
            acid: {
                key: "acid",
                encode: !0
            }
        },
        Mr: function(t, i) {
            for (var n in this.paramsList = [], i)
                if (n && i.hasOwnProperty(n) && this.Er[n]) {
                    var r = this.Er[n],
                        e = {};
                    try {
                        r.key && (e.key = r.key, e.value = this.Ur(r, i[n])), r && !r.key && (e.key = n, e.value = this.Ur(r, i[n])), this.paramsList.push(e)
                    } catch (a) {}
                }
        },
        Ur: function(t, i) {
            return t.encode ? encodeURIComponent(i) : i
        }
    }
}, function(t, i, n) {
    var c = n(3);
    c.__mappingCache = c.__mappingCache || {}, t.exports = {
        Vt: function(t) {
            if (!t) return 0;
            for (var i = 21, n = 0; n < t.length; n++) i += t.charCodeAt(n);
            return i
        },
        Br: function(t) {
            var i, n = t % 25 + 1,
                r = "key" + n;
            if (!(i = c.__mappingCache[r])) {
                i = {};
                for (var e = 97; e <= 122; e++) {
                    var a = String.fromCharCode(e),
                        o = e + n;
                    o = 122 < o ? o - 26 : o;
                    var s = String.fromCharCode(o);
                    i[a] = s
                }
                c.__mappingCache[r] = i
            }
            return i
        },
        Rr: function(t) {
            var i, n = t % 64 + 1,
                r = "v" + n,
                e = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_-.";
            if (!(i = c.__mappingCache[r])) {
                i = {};
                for (var a = 0; a < e.length; a++) {
                    var o = e.charAt(a),
                        s = a + n,
                        u = e.charAt(65 <= s ? s - 65 : s);
                    i[o] = u
                }
                c.__mappingCache[r] = i
            }
            return i
        },
        bn: function(t, i) {
            for (var n = this.Br(t), r = this.Rr(t), e = {}, a = 0; a < i.length; a++) {
                i[a] = i[a].replace(/\./g, "%_"), i[a] = i[a].replace(/%/g, ".");
                var o = i[a].split("=");
                e[o[0]] = o[1]
            }
            var s = [];
            for (var u in e)
                if (e.hasOwnProperty(u) && e[u]) {
                    for (var c = "", f = 0; f < u.length; f++) {
                        c += n[u.charAt(f)]
                    }
                    c += "=";
                    for (var h = e[u], d = 0; d < h.length; d++) {
                        var l = h.charAt(d);
                        r[l] ? c += r[l] : c += l
                    }
                    s.push(c)
                } return s.join("&")
        }
    }
}, function(t, i, n) {
    var r = n(1),
        e = n(3),
        a = n(10),
        o = n(2),
        s = n(15),
        u = n(0),
        c = n(7),
        f = n(13),
        h = n(5);
    t.exports = {
        Lr: function() {
            this.idPrefix = "BAIDU_DUP_fp_", this.fpElId = this.idPrefix + "wrapper", o.g(this.fpElId) || a.St(window, "load", u.P(this, this.Nr))
        },
        Nr: function() {
            if (!o.g(this.fpElId)) {
                var t = window.document,
                    i = t.body,
                    n = t.createElement("div");
                n.id = this.fpElId, n.style.position = "absolute", n.style.left = "-1px", n.style.bottom = "-1px", n.style.zIndex = 0, n.style.width = 0, n.style.height = 0, n.style.overflow = "hidden", n.style.visibility = "hidden", n.style.display = "none";
                var r = t.createElement("iframe");
                r.id = this.idPrefix + "iframe", r.src = "https://pos.baidu.com/wh/o.htm?ltr=", r.style.width = 0, r.style.height = 0, r.style.visibility = "hidden", r.style.display = "none";
                try {
                    n.insertBefore(r, n.firstChild), i && i.insertBefore(n, i.firstChild)
                } catch (e) {}
            }
        },
        ui: function(t) {
            try {
                if (e.antiScript || !this.Fr(t)) return;
                e.antiScript = document.createElement("script"), e.antiScript.type = "text/javascript", e.antiScript.async = !0, e.antiScript.src = "//cpro.baidustatic.com/cpro/ui/ab.min.js";
                var i = document.getElementsByTagName("script")[0];
                i && i.parentNode && i.parentNode.insertBefore(e.antiScript, i), o.Ot(e.antiScript, function() {
                    window.BAIDU_SSP_sendAntiLog && window.BAIDU_SSP_sendAntiLog()
                }), c.Li("__abbaidu_2028_cb", u.P(this, function(t) {
                    t && s.ti("___ds_storage__loadAntiFile", t)
                }))
            } catch (n) {}
        },
        jr: function(t) {
            var i = t.paramObj,
                n = i.exps || "";
            if (this.Fr(t)) {
                var r = s.Nt("___ds_storage__loadAntiFile") ? "119015" : "";
                n = f.Xn(n, r), i.exps = n
            }
        },
        Fr: function(t) {
            return (h.isAndroid || h.isIOS) && !o.bt(window) && !t.isAnti && r.ht.test(t.id)
        }
    }
}, function(t, i, n) {
    var c = n(4),
        f = n(1),
        h = n(2),
        d = n(9),
        a = n(12),
        r = {},
        l = {};
    t.exports = {
        Zn: function(t, i) {
            r[t] = i
        },
        Hr: function(t) {
            return r[t]
        },
        Wr: function(t, i) {
            if (!t || l[t]) return !1;
            l[t] = i;
            var n = this.Hr(t),
                r = f.V + "dpv=" + t + "&di=" + n.slotId;
            h.Tt(r)
        },
        tr: function(t) {
            if ("success" !== (t.html || "success")) {
                var i = this.Hr(t.dpv);
                if (i) {
                    var n = i.response,
                        r = n.pdb_deliv,
                        e = n.rtb_deliv,
                        a = n.order_deliv,
                        o = r.deliv_des;
                    if (o = o._html || {}, 0 === parseInt(r.deliv_id, 10) && (0 !== parseInt(a.deliv_id, 10) || 0 !== parseInt(e.deliv_id, 10)) && 7 === n.placement.complement_type) return this.zr(i);
                    if ("rich" === o.type) {
                        var s = h.pt(i);
                        d.on(s, o.content)
                    } else {
                        var u = l[t.dpv];
                        c.Jt(i, f.K), u.outerHTML = d.dn(i)
                    }
                }
            }
        },
        zr: function(t) {
            var i = t.containerId,
                n = h.pt(t),
                r = document.getElementById(i + "_left"),
                e = document.getElementById(i + "_right");
            n && (a.unregisetViewWatch(t), n.parentNode.removeChild(n)), r && r.parentNode.removeChild(r), e && e.parentNode.removeChild(e)
        }
    }
}, function(t, i, n) {
    var e = n(1),
        r = n(4),
        a = n(24),
        o = n(7),
        s = n(27),
        u = n(35),
        c = n(36),
        f = n(37),
        h = n(38),
        d = n(39),
        l = n(2),
        v = n(0),
        _ = n(3),
        p = n(12),
        w = n(40),
        m = n(8),
        g = n(6),
        y = n(41),
        b = n(42),
        I = n(45),
        k = n(46),
        A = n(47),
        S = n(48),
        x = n(25),
        D = n(9),
        C = {
            inlayFix: b,
            "mobile.inlayFix": I,
            "mobile.float": k,
            "mobile.insideText": A,
            "ds.inlay": S
        };
    t.exports = {
        Kt: function() {
            this.Vr(), w.qr(), d.qr(), c.qr(), f.qr(), u.qr(), h.qr(), a.Lr()
        },
        Vr: function() {
            o.Li(e.R, v.P(this, this.Jr)), o.Li(e.M, this.Gr)
        },
        Jr: function(t) {
            try {
                var i = r.Ht(t.tuid);
                if (!i || i.containerId && !l.pt(i)) return;
                i.response = t, r.Xt(i.id, e.G), r.processSlot(i), i.timestampWatcher.t3 = (new Date).getTime(), r.pi(i), a.jr(i), this.Xr(i)
            } catch (n) {
                if (!t.tuid) return;
                g.Et(e.et, n, {
                    pos: "callback",
                    id: t.tuid
                })
            }
        },
        Xr: function(t) {
            var i = s.Kr(t);
            if (i) {
                var n = C[i] || this.Yr(i);
                n ? this.$r(i, t, n) : this.Qr(i, t)
            }
        },
        Qr: function(t, i) {
            var n = t;
            0 < n.indexOf(".") && (n = n.replace(".", "/")), n = e.ut + n + ".js", y.Zr(i.id, n, v.P(this, this.te, t, i))
        },
        te: function(t, i) {
            try {
                var n = this.Yr(t);
                this.$r(t, i, n)
            } catch (r) {
                g.Et(e.et, r, {
                    pos: "painterLoadCallback",
                    painter: t,
                    id: i.id
                })
            }
        },
        Yr: function(t) {
            var i = _.painter;
            if (i) {
                var n = t.split(".");
                return "mobile" === n[0] ? i.mobile && i.mobile[n[1]] : i[n[0]]
            }
        },
        $r: function(t, i, n) {
            n && (n.render(i), this.ne(i), t && -1 < t.indexOf("mobile") && p.regisetViewWatch(i), this.re(i))
        },
        ne: function(i) {
            var t = l.pt(i),
                n = t && t.querySelector && t.querySelector("iframe");
            n && l.St(n, "load", function() {
                if (window.JSON && window.JSON.stringify && n.contentWindow && n.contentWindow.postMessage) {
                    var t = JSON.stringify({
                        type: 1,
                        tuid: i.id
                    });
                    n.contentWindow.postMessage(t, "*")
                }
            })
        },
        Gr: function(t) {
            try {
                var i = Array.prototype.slice.call(arguments, 1);
                switch (t) {
                    case "auto":
                        w.Jr.apply(w, i);
                        break;
                    case 1:
                        x.Wr.apply(x, i);
                        break;
                    case 2:
                        k.ee.apply(k, i);
                        break;
                    case 3:
                        D.sn.apply(D, i)
                }
            } catch (n) {
                g.Et(e.et, n, {
                    pos: "commoncallback"
                })
            }
        },
        re: function(t) {
            var i = l.pt(t); - 1 < (t.paramObj.dis ? t.paramObj.ltu : window.location.href).indexOf(e.st) && m["in"](i, t.id)
        }
    }
}, function(t, i, n) {
    var h = n(1),
        d = n(13);
    t.exports = {
        Kr: function(t) {
            var i = t.response;
            if (!i.painter) {
                var n = this.ae(t);
                if (n) return n
            }
            return this.oe(i)
        },
        ae: function(t) {
            var i = t.response.placement.userdefine || "",
                n = t.response.placement.encode_userdefine || "";
            n && "encoded" === n && (i = decodeURIComponent(i), t.response.placement.userdefine = i);
            for (var r = i.split("|") || [], e = {}, a = 0, o = r.length; a < o; a++) {
                var s = r[a].split("="),
                    u = s[0];
                u && (e[u] = s[1])
            }
            if (3 === r.length && e.hasOwnProperty("cpro_template") && e.hasOwnProperty("cpro_version") && h.dt[e.cpro_template] && "2.0" === e.cpro_version && (t.paramObj.exps = d.Xn("117318", t.paramObj.exps)), e.hasOwnProperty("painter")) return e.painter;
            var c = t.styleOpenApi.tn || "",
                f = parseInt(t.styleOpenApi.xuanting || 0, 10);
            return 0 <= c.indexOf("mobile") && 0 < f ? "mobile.float" : 0 <= c.indexOf("mobile") ? "mobile.inlayFix" : 0 < f ? "dynamicFloat" : c && 0 < c.length && c.indexOf("_xuanfu") < 0 && c.indexOf("float") < 0 ? "inlayFix" : ""
        },
        oe: function(t) {
            return this.se(t) ? "ds.inlay" : this.ue(t) ? "mobile.float" : this.ce(t) ? "mobile.inlayFix" : this.fe(t) ? "mobile.float" : this.he(t) ? "mobile.insideText" : this.de(t) ? "inlayFix" : this.le(t) ? "insideText" : this.ve(t) ? "dynamicFloat" : this._e(t) ? "bottomSearchBar" : void 0
        },
        _e: function(t) {
            var i = t.placement,
                n = i.container,
                r = i.fillstyle;
            return !(3 !== n.anchoredType || !n.slide || 9 !== r.btnStyleId)
        },
        de: function(t) {
            var i = t.placement,
                n = i.basic,
                r = i.container,
                e = r.floated;
            return 1 === n.rspFormat && 1 === n.flowType && 1 === r.anchoredType && (!e || (1 === e.trigger || !this.pe(e)))
        },
        pe: function(t) {
            for (var i in t) return !0;
            return !1
        },
        ve: function(t) {
            var i = t.placement,
                n = i.basic,
                r = i.container,
                e = r.floated;
            return !(1 !== n.rspFormat || 1 !== n.flowType || 1 !== r.anchoredType || !e || 8 !== e.trigger)
        },
        le: function(t) {
            var i = t.placement,
                n = i.basic,
                r = i.container;
            return 3 === n.rspFormat && 1 === n.flowType && 8 === r.occurrence && 11 === r.anchoredType
        },
        ce: function(t) {
            var i = t.placement,
                n = i.basic,
                r = i.container;
            return 1 === n.rspFormat && 2 === n.flowType && 1 === r.anchoredType
        },
        fe: function(t) {
            var i = t.placement,
                n = i.basic,
                r = i.container;
            return 1 === n.rspFormat && 2 === n.flowType && (3 === r.anchoredType || 11 === r.anchoredType)
        },
        he: function(t) {
            var i = t.painter,
                n = t.placement,
                r = n.basic,
                e = n.container;
            return 3 === i || "mobile.insideText" === i || !i && 3 === r.rspFormat && 2 === r.flowType && 8 === e.occurrence && 11 === e.anchoredType
        },
        se: function(t) {
            var i = t.painter;
            return 1 === i || "mobile.inlayFix" === i || "inlayFix" === i
        },
        ue: function(t) {
            var i = t.painter;
            return 2 === i || "mobile.float" === i
        }
    }
}, function(t, i, n) {
    try {
        a = n(3), o = n(7), s = n(0), u = n(4), c = n(12), f = n(14), h = n(9), d = n(11), l = n(26), n(49), o.Li("regisetViewWatch", s.P(c, c.regisetViewWatch), a), o.Li("getFrameHTML", s.P(f, f.getFrameHTML), a), o.Li("renderRichMaterial", s.P(h, h.renderRichMaterial), a), o.Li("processSlotInfo", s.P(u, u.processSlotInfo), a), o.Li("getPmpRequestUrl", s.P(d, d.getPmpRequestUrl), a), l.Kt()
    } catch (v) {
        var r = n(6),
            e = n(1);
        r.Et(e.et, v, {
            date: "0604"
        })
    }
    var a, o, s, u, c, f, h, d, l
}, function(t, i, n) {
    var a = n(2),
        o = n(8),
        e = n(5),
        s = n(1),
        u = n(13),
        c = n(3),
        r = n(19),
        f = n(6),
        h = window;
    t.exports = {
        paramsList: [{
            key: "psi",
            value: function() {
                var t = c[s.Y];
                return t = t || (c[s.Y] = r.xr())
            }
        }, {
            key: "di",
            value: function() {
                return this.Cr.slotId
            }
        }, {
            key: "dri",
            value: function() {
                return this.Cr.index
            }
        }, {
            key: "dis",
            value: function() {
                var t = 0;
                a.bt(h) && (t += 1), a.kt(h, h.top) && (t += 2);
                var i = o.ji(),
                    n = o.Hi();
                (i < 40 || n < 10) && (t += 4);
                try {
                    if (3 == (3 & t)) {
                        var r = a.Dt();
                        r.document.referrer && r.top === r.parent && (t += 8)
                    }
                } catch (e) {
                    f.Et(s.et, e, {
                        pos: "disParam"
                    })
                }
                return t
            }
        }, {
            key: "dai",
            value: function() {
                return this.Cr.count
            }
        }, {
            key: "ps",
            value: function() {
                var t = a.pt(this.Cr),
                    i = o.Vi(t);
                return i.top + "x" + i.left
            }
        }, {
            key: "coa",
            encode: !0,
            value: function() {
                var t = [],
                    i = this.Cr.styleOpenApi;
                for (var n in "-1" === this.Cr.pcwd && (i.cpro_ftpc = "true"), i)
                    if (n && "undefined" != typeof i[n] && i.hasOwnProperty(n)) {
                        var r = n;
                        if ("width" === n || "height" === n || "sizeType" === n || "apType" === n || "floatingState" === n) continue;
                        "cpro_w" === n && (r = "rsi0"), "cpro_h" === n && (r = "rsi1"), t.push(r + "=" + encodeURIComponent(i[n]))
                    } return t.join("&")
            }
        }, {
            key: "enu",
            value: function() {
                return "encoding"
            }
        }, {
            key: "cw",
            value: function() {
                var t = this.Cr.styleOpenApi.cpro_ftpc || "true" === this.Cr.styleOpenApi.cpro_ftpc || "-1" === this.Cr.pcwd,
                    i = a.pt(this.Cr);
                if (t && i && i.parentElement.clientWidth) return i.parentElement.clientWidth || 0
            }
        }, {
            key: "exps",
            value: function() {
                var t = this.Cr.exps;
                if (t && 0 <= t.indexOf(s.ft)) {
                    for (var i, n = t.split(","), r = 0; r < n.length; r++)(i = parseInt(n[r], 10)) === s.ft && 1 === this.Cr.proxy && (i = e.isAdBlock ? i + 1 : i + 2, n[r] = "" + i);
                    t = n.join(",")
                }
                return u.Xn(t, c.expId)
            }
        }, {
            key: "ant",
            value: function() {
                return 1 === this.Cr.proxy ? 1 : 0
            }
        }],
        setSlotInfo: function(t) {
            this.Cr = t
        }
    }
}, function(t, i) {
    t.exports = {
        Pr: function(t, i) {
            var n = new RegExp("(^| )" + t + "=([^;]*)(;|$)").exec(document.cookie),
                r = "";
            return n && (r = i ? decodeURIComponent(n[2]) : n[2]), r
        },
        Or: function(t, i, n, r) {
            var e = n.expires;
            document.cookie = t + "=" + (r ? encodeURIComponent(i) : i) + (n.path ? "; path=" + n.path : "") + (e ? "; expires=" + e.toGMTString() : "") + (n.domain ? "; domain=" + n.domain : "")
        },
        we: function(t) {
            var i = new Date;
            i.setTime(i.getTime() - 86400), this.Or(t, "", {
                path: "/",
                expires: i
            })
        }
    }
}, function(t, i, n) {
    var r = n(1),
        e = n(5),
        a = n(18),
        o = n(3);
    t.exports = {
        mn: function(t) {
            this.me = t
        },
        paramsList: [{
            key: "dcb",
            value: function() {
                return r.R
            }
        }, {
            key: "dtm",
            value: function() {
                return r.W
            }
        }, {
            key: "dvi",
            value: function() {
                return "0.0"
            }
        }, {
            key: "dci",
            value: function() {
                return "-1"
            }
        }, {
            key: "dds",
            value: function() {
                return ""
            }
        }, {
            key: "dpt",
            value: function() {
                return "none"
            }
        }, {
            key: "tsr",
            value: function() {
                var t = 0,
                    i = +new Date;
                return r.startTime && (t = i - r.startTime), t
            }
        }, {
            key: "tpr",
            value: function() {
                var t = (new Date).getTime(),
                    i = o.DUP_4_SF ? o : this.me,
                    n = i[r.ot];
                return (!n || "number" != typeof n || 24e4 <= t - n) && (n = i[r.ot] = t), n
            }
        }, {
            key: "cop",
            encode: !0,
            value: function() {
                return a.fr()
            }
        }, {
            key: "ti",
            encode: !0,
            limit: 60,
            value: function() {
                var t = e.baiduboxapp && this.me.articleTitle ? this.me.articleTitle : this.me.document.title;
                return t = this.Cr.title ? this.Cr.title : t
            }
        }, {
            key: "utdi",
            encode: !0,
            value: function() {
                return e.baiduboxapp && this.me.MP && this.me.MP.globalConf && this.me.MP.globalConf.cuid || ""
            }
        }, {
            key: "atdi",
            encode: !0,
            value: function() {
                return e.baiduboxapp && this.me.MP && this.me.MP.globalConf && this.me.MP.globalConf.nid || ""
            }
        }, {
            key: "ari",
            value: function() {
                return 2
            }
        }, {
            key: "ver",
            value: function() {
                return "0603"
            }
        }],
        setSlotInfo: function(t) {
            this.Cr = t
        }
    }
}, function(t, i, n) {
    var r = n(2),
        e = n(8),
        a = window,
        o = a.screen;
    t.exports = {
        paramsList: [{
            key: "uc",
            value: function() {
                return [o.availWidth, o.availHeight].join("x")
            }
        }, {
            key: "pis",
            value: function() {
                return (r.bt(a) ? [e.ji(), e.Hi()] : [-1, -1]).join("x")
            }
        }, {
            key: "sr",
            value: function() {
                return [o.width, o.height].join("x")
            }
        }, {
            key: "tcn",
            value: function() {
                var t = +new Date;
                return Math.round(t / 1e3)
            }
        }]
    }
}, function(t, i, n) {
    var a = n(1),
        o = n(3),
        s = n(2),
        u = n(8),
        c = n(5),
        f = n(6),
        r = n(21),
        h = n(13),
        e = n(19),
        d = window,
        l = d.document,
        v = d.navigator,
        _ = d.screen,
        p = s.Dt();
    t.exports = {
        setSlotInfo: function(t) {
            this.Cr = t
        },
        mn: function(t) {
            this.me = t
        },
        paramsList: [{
            key: "ti",
            encode: !0,
            limit: 60,
            value: function() {
                return c.baiduboxapp && this.me.articleTitle ? this.me.articleTitle : this.me.document.title
            }
        }, {
            key: "utdi",
            encode: !0,
            value: function() {
                return c.baiduboxapp && this.me.MP && this.me.MP.globalConf && this.me.MP.globalConf.cuid || ""
            }
        }, {
            key: "atdi",
            encode: !0,
            value: function() {
                return c.baiduboxapp && this.me.MP && this.me.MP.globalConf && this.me.MP.globalConf.nid || ""
            }
        }, {
            key: "ps",
            value: function() {
                var t = s.pt(this.Cr),
                    i = u.Vi(t);
                return i.top + "x" + i.left
            }
        }, {
            key: "drs",
            value: function() {
                try {
                    return {
                        uninitialized: 0,
                        loading: 1,
                        loaded: 2,
                        interactive: 3,
                        complete: 4
                    } [l.readyState]
                } catch (t) {
                    return -1
                }
            }
        }, {
            key: "pcs",
            value: function() {
                return [u.ji(p), u.Hi(p)].join("x")
            }
        }, {
            key: "pss",
            value: function() {
                return [u.Gi(p), u.Xi(p)].join("x")
            }
        }, {
            key: "cfv",
            value: function() {
                return c.Si()
            }
        }, {
            key: "cpl",
            value: function() {
                return v.plugins.length || 0
            }
        }, {
            key: "chi",
            value: function() {
                return d.history.length || 0
            }
        }, {
            key: "cce",
            value: function() {
                return v.cookieEnabled || 0
            }
        }, {
            key: "cec",
            value: function() {
                return (l.characterSet ? l.characterSet : l.charset) || ""
            }
        }, {
            key: "tlm",
            value: function() {
                return Date.parse(l.lastModified) / 1e3
            }
        }, {
            key: "psr",
            value: function() {
                return [_.width, _.height].join("x")
            }
        }, {
            key: "par",
            value: function() {
                return [_.availWidth, _.availHeight].join("x")
            }
        }, {
            key: "pis",
            value: function() {
                return (s.bt(d) ? [u.ji(), u.Hi()] : [-1, -1]).join("x")
            }
        }, {
            key: "ccd",
            value: function() {
                return _.colorDepth || 0
            }
        }, {
            key: "cja",
            value: function() {
                return v.javaEnabled().toString()
            }
        }, {
            key: "cmi",
            value: function() {
                return v.mimeTypes.length || 0
            }
        }, {
            key: "col",
            value: function() {
                var t = v.language || v.browserLanguage || v.systemLanguage || "";
                return t = t.replace(/[^a-zA-Z0-9-]/g, "")
            }
        }, {
            key: "cdo",
            value: function() {
                var t = d.orientation;
                return t === undefined && (t = -1), t
            }
        }, {
            key: "tcn",
            value: function() {
                var t = +new Date;
                return Math.round(t / 1e3)
            }
        }, {
            key: "psi",
            value: function() {
                var t = o[a.Y];
                return t = t || (o[a.Y] = e.xr())
            }
        }, {
            key: "di",
            value: function() {
                return this.Cr.slotId
            }
        }, {
            key: "dtm",
            value: function() {
                return a.W
            }
        }, {
            key: "tpr",
            value: function() {
                var t = (new Date).getTime(),
                    i = o.DUP_4_SF ? o : this.me,
                    n = i[a.ot];
                return (!n || "number" != typeof n || 24e4 <= t - n) && (n = i[a.ot] = t), n
            }
        }, {
            key: "ari",
            value: function() {
                return 2
            }
        }, {
            key: "ant",
            value: function() {
                return 1 === this.Cr.proxy ? 1 : 0
            }
        }, {
            key: "exps",
            value: function() {
                var t = this.Cr.exps;
                if (t && 0 <= t.indexOf(a.ft)) {
                    for (var i, n = t.split(","), r = 0; r < n.length; r++)(i = parseInt(n[r], 10)) === a.ft && 1 === this.Cr.proxy && (i = c.isAdBlock ? i + 1 : i + 2, n[r] = "" + i);
                    t = n.join(",")
                }
                var e = o.expId;
                return c.hasSameSiteLimit && (e = 1 === this.Cr.proxy ? h.Xn("112028", o.expId) : h.Xn("112027", o.expId)), h.Xn(t, e)
            }
        }, {
            key: "prot",
            value: function() {
                return "2"
            }
        }, {
            key: "dis",
            value: function() {
                var t = 0;
                s.bt(d) && (t += 1), s.kt(d, d.top) && (t += 2);
                var i = u.ji(),
                    n = u.Hi();
                (i < 40 || n < 10) && (t += 4);
                try {
                    if (!0 & t) {
                        var r = s.Dt();
                        r.document.referrer && r.top === r.parent && (t += 8)
                    }
                } catch (e) {
                    f.Et(a.et, e, {
                        pos: "disParam"
                    })
                }
                return t
            }
        }, {
            key: "dai",
            value: function() {
                return this.Cr.count
            }
        }, {
            key: "dri",
            value: function() {
                return this.Cr.index
            }
        }, {
            key: "ltu",
            encode: !0,
            limit: 700,
            value: function() {
                var t;
                return 0 < (t = o.location && o.location.href ? o.location.href : r.Dr(function(t) {
                    var i = u.ji(t),
                        n = u.Hi(t);
                    return 400 < i && 120 < n
                })).indexOf("cpro_prev") && (t = t.slice(0, t.indexOf("?"))), t
            }
        }, {
            key: "liu",
            encode: !0,
            limit: 700,
            value: function() {
                return s.bt(d) ? l.URL : ""
            }
        }, {
            key: "ltr",
            encode: !0,
            limit: 300,
            value: function() {
                var t = "";
                try {
                    t = p.opener ? p.opener.document.location.href : ""
                } catch (i) {}
                return t || p.document.referrer
            }
        }, {
            key: "coa",
            encode: !0,
            value: function() {
                var t = [],
                    i = this.Cr.styleOpenApi;
                for (var n in "-1" === this.Cr.pcwd && (i.cpro_ftpc = "true"), i)
                    if (n && "undefined" != typeof i[n] && i.hasOwnProperty(n)) {
                        var r = n;
                        if ("width" === n || "height" === n || "sizeType" === n || "apType" === n || "floatingState" === n) continue;
                        "cpro_w" === n && (r = "rsi0"), "cpro_h" === n && (r = "rsi1"), t.push(r + "=" + encodeURIComponent(i[n]))
                    } return t.join("&")
            }
        }]
    }
}, function(t, i, n) {
    var f = n(0),
        a = {};

    function s(t, i, n) {
        if ("string" == typeof t) return t;
        if (!t.type) return "";
        var r = a[t.type];
        if (!r) return "";
        var e = "string" == typeof r ? f._(r, t) : r(t, i);
        return n ? e : "<!DOCTYPE html><body>" + e
    }
    a.text = function(t) {
        var i = '<span style="word-wrap:break-word;"><a href="{clickUrl:string}" target="{target:string}" style="font-size:{size:number}{unit:string};color:{defaultColor:string};font-weight:{defaultBold:string};font-style:{defaultItalic:string};text-decoration:{defaultUnderline:string};"{events}>{text:string}</a></span>',
            n = /\{events\}/;
        if (1 === t.version) i = i.replace(n, "");
        else if (2 === t.version) {
            i = i.replace(n, " onmouseover=\"this.style.color='{hoverColor:string}';this.style.fontWeight='{hoverBold:string}';this.style.fontStyle='{hoverItalic:string}';this.style.textDecoration='{hoverUnderline:string}';\" onmouseout=\"this.style.color='{defaultColor:string}';this.style.fontWeight='{defaultBold:string}';this.style.fontStyle='{defaultItalic:string}';this.style.textDecoration='{defaultUnderline:string}';\"");
            for (var r = ["default", "hover"], e = 0; e < r.length; e++) {
                var a = r[e],
                    o = a + "Color",
                    s = a + "Bold",
                    u = a + "Italic",
                    c = a + "Underline";
                t[o] = "#" + t[o], t[s] = t[s] ? "bold" : "normal", t[u] = t[u] ? "italic" : "normal", t[c] = t[c] ? "underline" : "none"
            }
        }
        return f._(i, t)
    }, a.image = '<a href="{clickUrl:string}" target="{target:string}"><img src="{src:string}" title="{title:html}" alt="{title:html}" border="0" height="{height:number}" width="{width:number}" /></a>', a.flash = function(t) {
        return t.file = t.hasLink ? "cflash" : "flash", t.imageClickUrl = t.clickUrl, t.hasLink || (t.clickUrl = ""), f._(["<script>", "var BD = BD || {};", "BD.MC = BD.MC || {};", "BD.MC.ADFlash = BD.MC.ADFlash || {};", "BD.MC.ADImg = BD.MC.ADImg || {};", "BD.MC.ADFlash.w = {width:number};", "BD.MC.ADFlash.h = {height:number};", 'BD.MC.ADFlash.mu = "{src:string}";', 'BD.MC.ADFlash.cu = "{clickUrl:string}";', "BD.MC.ADFlash.wm = {wmode:number};", 'BD.MC.ADFlash.ct = "{clickTag:string}";', "BD.MC.ADImg.w = {imageWidth:number};", "BD.MC.ADImg.h = {imageHeight:number};", 'BD.MC.ADImg.mu = "{imageSrc:string}";', 'BD.MC.ADImg.cu = "{imageClickUrl:string}";', 'BD.MC.ADImg.tw = "{target:string}";', "BD.MC.ADImg.flag = {backupImage:number};", "<\/script>", '<script src ="', '//cbjs.baidu.com/js/{file:string}.js">', "<\/script>"].join(""), t)
    }, a.rich = function(t) {
        return t.content
    }, a.slide = function(t, i) {
        for (var n = [], r = t.materials, e = 0; e < r.length; e++) {
            var a = r[e];
            "string" != typeof a && (a = s(a, i, !0)), n.push(a)
        }
        t.html = "<div>" + n.join("</div><div>") + "</div>";
        var o = i.response.placement.container;
        return t.width = i.width || o.width, t.height = i.height || o.height, f._('<div id="bd_ec_clb_asp" style="width:{width:number}px;height:{height:number}px;overflow:hidden;">{html:string}</div><script>(function(){var d = document;function G(id) { return d.getElementById(id); };var container = G("bd_ec_clb_asp");var pages = container.childNodes;var pl = 0;for (var i = 0; i < pages.length; i++) {if (pages[i].nodeType === 1) {pl++;}}var cp = 0;function showPage(pn) { pages[pn].style.display = ""; };function hidePages() {for (var i = 0; i < pl; i++) {pages[i].style.display = "none";}};function roll() {hidePages();showPage(cp);cp == (pages.length - 1) ? cp = 0 : cp++;};var autoRoll;function setRoll() { autoRoll = window.setInterval(function() { roll(); }, {interval:number});};roll();setRoll();container.onmouseover = function() { window.clearInterval(autoRoll); };container.onmouseout = function() {setRoll(); };})();<\/script>', t)
    }, t.exports = {
        fn: s
    }
}, function(t, i, n) {
    var a = n(4),
        o = n(1),
        r = n(18),
        e = n(7),
        s = n(0);
    t.exports = {
        ge: {
            BAIDU_CLB_fillSlot: !0,
            BAIDU_CLB_singleFillSlot: !0,
            BAIDU_CLB_fillSlotWithSize: !0,
            BAIDU_CLB_fillSlotAsync: !0
        },
        qr: function() {
            var t;
            try {
                var i = window.BAIDU_CLB_SLOT_ID;
                for (var n in window.BAIDU_CLB_SLOT_ID = null, i && (t = a.zt({
                        slotId: i,
                        productLine: "clb",
                        isAsync: !1
                    }), a.qt(t), a.Kt()), this.ge) e.Li(n, this.ye);
                this.be()
            } catch (r) {}
        },
        Ie: function() {},
        ye: function(t, i) {
            var n;
            t && ((n = a.zt({
                slotId: t,
                productLine: "clb",
                isAsync: !!i
            })).containerId = i || n.containerId, a.qt(n), a.Kt())
        },
        be: function() {
            try {
                e.Li("BAIDU_CLB_prepareMoveSlot", this.ke), e.Li("BAIDU_CLB_setConfig", s.P(e, e.Fi)), e.Li("BAIDU_CLB_addOrientation", s.P(r, r.sr)), e.Li("BAIDU_CLB_addSlot", this.Ie), e.Li("BAIDU_CLB_enableAllSlots", this.Ie), e.Li("BAIDU_CLB_preloadSlots", this.Ie), e.Li("BAIDU_DUP_addSlotStatusCallback", this.Ie)
            } catch (t) {}
        },
        ke: function(t) {
            try {
                for (var i = 0, n = t + "_" + i; a.Ht(n) && 0 !== a.Ht(n)[0];) {
                    var r = a.Ht(n);
                    a.Jt(r, o.K), n = t + "_" + ++i
                }
            } catch (e) {}
        }
    }
}, function(t, i, n) {
    var u = n(4);
    t.exports = {
        qr: function() {
            var t, i = window.cpro_id;
            window.cpro_id = null, i && (t = u.zt({
                slotId: i,
                productLine: "union",
                isAsync: !1
            }), u.qt(t));
            var n, r, e = window.cproArray;
            if (window.cproArray = null, e)
                for (n = 0, r = e.length; n < r; n++) t = u.zt({
                    slotId: e[n].id,
                    productLine: "union",
                    isAsync: !0
                }), u.qt(t);
            var a = window.cpro_mobile_slot;
            if (window.cpro_mobile_slot = null, a)
                for (n = 0, r = a.length; n < r; n++) {
                    var o = a[n];
                    for (var s in (t = u.zt({
                            slotId: o.id,
                            productLine: "union",
                            isAsync: !0
                        })).styleOpenApi = t.styleOpenApi || {}, o) s && o[s] && o.hasOwnProperty(s) && (t.styleOpenApi[s] = o[s]);
                    u.qt(t)
                }
            u.Kt()
        }
    }
}, function(t, i, n) {
    var s = n(4);
    t.exports = {
        qr: function() {
            this.delieveryObjArray = this.delieveryObjArray || [], window.BAIDU_DUP = window.BAIDU_DUP || [], window.BAIDU_DUP && window.BAIDU_DUP instanceof Array && (this.delieveryObjArray = this.delieveryObjArray.concat(window.BAIDU_DUP), window.BAIDU_DUP = []), this.be(), this.Kt()
        },
        be: function() {
            window.BAIDU_DUP = this, window.BAIDU_DUP.load = !0
        },
        Kt: function() {
            for (var t, i = 0, n = this.delieveryObjArray.length; i < n; i++) {
                var r = this.delieveryObjArray[i];
                if (r instanceof Array && 2 <= r.length) {
                    var e = r[0],
                        a = r[1],
                        o = r[2];
                    if ("fill" !== e && "fillAsync" !== e || !a) continue;
                    (t = s.zt({
                        slotId: a,
                        productLine: "dup",
                        isAsync: "fillAsync" === e
                    })).containerId = o || t.containerId, s.qt(t)
                }
            }
            this.delieveryObjArray = [], s.Kt()
        },
        push: function(t) {
            this.delieveryObjArray = this.delieveryObjArray && [], this.delieveryObjArray.push(t), this.Kt()
        }
    }
}, function(t, i, n) {
    var s = n(4),
        u = n(22),
        a = n(18),
        o = n(0),
        c = n(3),
        f = n(10),
        h = n(1);
    t.exports = {
        qr: function() {
            this.delieveryObjArray = this.delieveryObjArray || [], window.slotbydup = window.slotbydup || [], window.slotbydup && window.slotbydup instanceof Array && (this.delieveryObjArray = this.delieveryObjArray.concat(window.slotbydup), window.slotbydup = []), c.slotbyds = c.slotbyds || [], c.slotbyds instanceof Array && c.domainInfo.dup && c.domainInfo.pos && (this.delieveryObjArray = this.delieveryObjArray.concat(c.slotbyds), c.slotbyds = []), this.be(), 0 < this.delieveryObjArray.length && this.Kt()
        },
        Kt: function() {
            for (var t, i = 0, n = this.delieveryObjArray.length; i < n; i++) {
                var r = this.delieveryObjArray[i];
                if (c.domainInfo.dup || c.domainInfo.pos || !r.isAnti)
                    if (r.hasOwnProperty("id")) {
                        var e = r.isRelateRecomAd && r.title,
                            a = r.hasOwnProperty("isAsync") && r.isAsync || r.hasOwnProperty("async") && r.async || e,
                            o = r.hasOwnProperty("coa") && r.coa;
                        t = s.zt({
                            slotId: r.id,
                            productLine: "adcodex",
                            isAsync: a,
                            coa: o
                        }), u.Mr(t, r), t.containerId = r.container || t.containerId, t.display = r.display, t.ftpc = r.ftpc || !1, t.size = r.size || "", t.pcwd = r.pcwd || "", t.pchd = r.pchd || "", t.exps = r.exps || "", t.isAutoAd = r.isAutoAd || !1, t.isAnti = r.isAnti || "", t.startTime = r.startTime || 0, e && (t.title = r.title), s.qt(t)
                    } else this.Ae(r);
                else(c.slotbyds = c.slotbyds || []).push(r)
            }
            this.delieveryObjArray = [], s.Kt()
        },
        be: function() {
            window.slotbydup = this, window.slotbydup.load = !0
        },
        push: function(t) {
            this.delieveryObjArray = this.delieveryObjArray && [], this.delieveryObjArray.push(t), this.Kt()
        },
        Ae: function(t) {
            var i = t.addOrientation;
            for (var n in i && o.k(i) && a.sr.apply(a, i), h.lt)
                if (h.lt.hasOwnProperty(n)) {
                    var r = h.lt[n],
                        e = t[r];
                    o.A(e) && f._n(r, e)
                }
        }
    }
}, function(t, i, n) {
    var a = n(1),
        r = n(2),
        e = n(0),
        o = n(6),
        s = n(3),
        u = n(4),
        c = n(11);
    window.__delivery_global_ = window.__delivery_global_ || {};
    var f = window.__delivery_global_;
    t.exports = {
        qr: function() {
            f.dupApi = f.dupApi || [];
            var t = f.dupApi;
            f.dupApi = this;
            for (var i = 0, n = t.length; i < n; i++) this.push(t[i])
        },
        push: function(t) {
            try {
                var i = t.container;
                if (!document.getElementById(i)) return !1;
                var n = t.hasOwnProperty("coa") && t.coa,
                    r = u.zt({
                        slotId: t.id,
                        isAsync: !0,
                        coa: n
                    });
                r.isDsFlow = !0, r.proxy = t.proxy, r.exps = t.exps, r.containerId = i, u.qt(r), r.response = t.adInfo, r.response.painter = n.painter || r.response.painter, r.containerInfo = r.response.placement.container || {}, r.paramObj = c.gn(r), r.paramObj.dtm = a.H, u.processSlot(r), this.Kt(r)
            } catch (e) {
                o.Et(a.at, e)
            }
        },
        Kt: function(t) {
            !s.ii && window.postMessage && (s.ii = !0, r.St(window, "message", e.P(u, u.ni))), n(26).Xr(t)
        }
    }
}, function(t, i, n) {
    var a = n(1),
        o = n(2),
        s = n(6),
        u = n(0),
        r = n(5),
        e = n(15),
        c = n(3),
        f = n(4),
        h = n(11);
    t.exports = {
        qr: function() {
            try {
                if (!c.expId && !r.baiduboxapp)
                    if (c.expId = "110011", 0 === h.Sn("slotParam", "dis")) {
                        var t = this.Se();
                        this.xe(t)
                    }
            } catch (i) {
                s.Et(a.et, i, {
                    pos: "autoAds"
                })
            }
        },
        Se: function() {
            return f.zt({
                slotId: a.$,
                isAsync: !0
            })
        },
        xe: function(t) {
            t.paramObj = h.ei(t), t.paramObj.dcb = a.M, t.paramObj.dtm = a.Q, t.paramObj.dc = a.Z;
            var i = this.De() ? 1 : 0,
                n = c.domainInfo.mixOffset,
                r = h.ai(t.paramObj, i, n),
                e = a.U + a.N + a.it + "?" + r;
            1 == i && n && (e = a.U + "//" + c.domainInfo.pos + "/" + a.nt + "?" + r), o.At(u.P(this, o.Tt, e))
        },
        Jr: function(t, i) {
            try {
                i instanceof Array && document.querySelector && this.Ce(i)
            } catch (n) {
                s.Et(a.et, n, {
                    pos: "autoDupCallback"
                })
            }
        },
        Ce: function(t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i],
                    r = n.tuid,
                    e = n.placement;
                r && u.S(e) && (this.Te(r, e.processor, e.position, n), s.Ei("autoDupLog", {
                    tuid: r,
                    ltu: encodeURIComponent(h.Sn("browserParam", "ltu")),
                    psi: h.Sn("slotParam", "psi")
                }))
            }
        },
        Te: function(t, i, n, r) {
            var e = n && document.querySelector(n),
                a = "";
            switch (i) {
                case "0":
                    e = (a = e) && a.parentNode;
                    break;
                case "1":
                    a = this.Pe(e);
                    break;
                case "2":
                    a = this.Oe(e)
            }
            this.Ee(t, a, e, r)
        },
        Pe: function(t) {
            var i = t && t.children;
            if (i && 1 < i.length && t.scrollHeight > window.screen.height) {
                var n = i.length;
                return i[Math.ceil(n / 2)]
            }
        },
        Oe: function(t) {
            var i = t && t.children;
            if (i && 0 < i.length) return i[i.length - 1]
        },
        Ee: function(t, i, n, r) {
            if (!i || !n) return !1;
            var e = document.createElement("div");
            e.id = "_" + Math.random().toString(36).slice(2);
            var a = document.createElement("script");
            a.text = this.Me(t, e.id, r), e.appendChild(a), n.insertBefore(e, i)
        },
        Me: function(t, i, n) {
            var r = n.userdefine;
            return r = window.JSON && window.JSON.stringify && u.S(r) && JSON.stringify(r), u.h('(window.slotbydup = window.slotbydup || []).push({ id:"{tuid}", container:"{containerId}", exps:"{exps}", isAutoAd:true, coa:{coa}, isAnti:{isAnti}});', {
                tuid: t,
                containerId: i,
                exps: a.rt,
                coa: r || "{}",
                isAnti: this.De()
            })
        },
        De: function() {
            return !(!c.domainInfo.dup || !c.domainInfo.pos || u.S(window[a.ct]) && 0 === e.ki("isblock"))
        }
    }
}, function(t, i, n) {
    var o = n(0),
        s = {};
    t.exports = {
        Zr: function(t, i, n) {
            if (i) {
                var r = document.createElement("script");
                r.type = "text/javascript", r.async = !0, r.src = i;
                var e = o.P(this, this.Ue, t, r);
                r.onload = r.onerror = r.onreadystatechange = e;
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(r, a), s[t] = n
            }
        },
        Ue: function(t, i, n) {
            n = 3 === arguments.length ? (i = i, n) : i = t;
            var r = s[i];
            n && /loaded|complete|undefined/.test(n.readyState) && (n.onload = n.onerror = n.onreadystatechange = null, n = undefined, r && r())
        }
    }
}, function(t, i, n) {
    var o = n(1),
        s = n(2),
        u = n(4),
        c = n(14),
        f = n(12),
        h = n(9),
        d = n(16),
        l = n(43),
        r = n(10),
        v = n(0),
        e = n(5),
        a = n(44),
        _ = !e.ie || 8 <= e.ie;
    t.exports = {
        Be: function(n) {
            var t = s.pt(n);
            r.St(t, "mouseover", function(t) {
                var i = t.target || t.srcElement;
                "iframe" !== i.tagName.toLowerCase() && "iframe" !== i.nodeName.toLowerCase() || l.Re("mouseover", n.id)
            })
        },
        Le: function(t) {
            if (t.isUnion) {
                var i = a.Ne(t),
                    n = a.Le(t);
                return n && a.Fe(i, t.containerId), n
            }
            return !0
        },
        je: function(t, i) {
            0 === i.complementType && (t.style.width = i.width + "px", t.style.height = i.height + "px", t.style.display = "inline-block")
        },
        render: function(t) {
            u.Xt(t.id, o.X);
            var i = s.pt(t);
            if (!u.mi(t)) return u.Xt(t.id, o.K), !1;
            var n = t.containerInfo.slide,
                r = n && !v.f(n) && _;
            if (r && (l.He(t), this.Be(t)), this.Le(t))
                if (d.Ci(t), h.renderRichMaterial(t)) _ && setTimeout(function() {
                    l.Re("adloaded", t.id)
                }, 800);
                else {
                    var e = u.processSlotInfo(t);
                    t.width = e.width, t.height = e.height, this.je(i, t);
                    var a = c.getFrameHTML(t);
                    i.innerHTML = a, f.regisetViewWatch(t), t.isPdbAd || u.Xt(t.id, o.K), r && setTimeout(function() {
                        l.Re("adloaded", t.id)
                    }, 800)
                }
        }
    }
}, function(t, i, n) {
    var v = n(2),
        e = n(10),
        _ = n(4),
        p = {},
        w = {},
        r = !1,
        u = {
            up: {},
            down: {},
            left: {},
            right: {}
        };
    t.exports = {
        We: function(t, i) {
            var n = _.Ht(t),
                r = v.pt(n);
            if (r) {
                var e = r.getElementsByTagName("iframe")[0];
                i = JSON.stringify(i), e.contentWindow.postMessage(i, "*")
            }
        },
        ze: function(t) {
            return window.getComputedStyle ? window.getComputedStyle(t).width : t.currentStyle.width
        },
        Ve: function() {
            var n = this;
            (window.addEventListener || window.attachEvent) && JSON && JSON.parse && e.St(window, "message", function r(t) {
                if ("string" != typeof t.data) return !1;
                var i = JSON.parse(t.data);
                if (!i.title || "baidudup" !== i.title) return !1;
                if ("invokeMethod" === i.type) switch (i.method) {
                    case "expand":
                        n.qe(i.parameters[0]);
                        break;
                    case "close":
                        n.Je(i.parameters[0])
                }
            }), e.St(window, "scroll", function() {
                n.Ge()
            }), e.St(window, "resize", function() {
                n.Ge()
            })
        },
        Ge: function() {
            var t = u;
            for (var i in t)
                for (var n in t[i]) {
                    var r = t[i][n];
                    if (!r.isExpand) return;
                    var e, a = r.origin,
                        o = a.getElementsByTagName("iframe")[0],
                        s = r.originWidth;
                    switch (i) {
                        case "up":
                        case "down":
                            e = parseInt(this.ze(a), 10), o.style.left = 0;
                            break;
                        case "left":
                            e = parseInt(this.ze(a), 10), o.style.right = e - s + "px";
                            break;
                        case "right":
                            e = parseInt(this.ze(a), 10), o.style.left = 0
                    }
                }
        },
        Xe: function(t, i, n, r, e, a, o) {
            if (!u[t][i]) {
                var s = u[t][i] = {};
                s.isExpand = !0, s.origin = n, s.originWidth = r, s.originHeight = e, s.targetWidth = a, s.targetHeight = o
            }
        },
        Ke: function(t, i, n, r, e, a) {
            this.Xe("up", t, i, n, r, e, a);
            var o = i.getElementsByTagName("iframe")[0];
            o.style.bottom = 0, o.style.left = 0
        },
        Ye: function(t, i, n, r, e, a) {
            this.Xe("down", t, i, n, r, e, a);
            var o = i.getElementsByTagName("iframe")[0];
            o.style.top = 0, o.style.left = 0
        },
        $e: function(t, i, n, r, e, a) {
            this.Xe("left", t, i, n, r, e, a);
            var o = i.getElementsByTagName("iframe")[0],
                s = parseInt(this.ze(i), 10);
            o.style.bottom = 0, o.style.right = s - n + "px"
        },
        Qe: function(t, i, n, r, e, a) {
            this.Xe("right", t, i, n, r, e, a);
            var o = i.getElementsByTagName("iframe")[0];
            o.style.bottom = 0, o.style.left = 0
        },
        qe: function(t) {
            if (!p[t]) {
                p[t] = !0;
                var i = _.Wt(t),
                    n = i.containerInfo,
                    r = n.width,
                    e = n.height,
                    a = n.slide,
                    o = a.slideWidth,
                    s = a.slideHeight,
                    u = 1e3 * parseInt(a.extendTime, 10),
                    c = parseInt(a.slideMode, 10),
                    f = parseInt(a.direction, 10),
                    h = v.pt(i),
                    d = h.getElementsByTagName("iframe")[0];
                if (1 === f || 2 === f ? (d.setAttribute("height", s), d.style.height = s + "px") : 3 !== f && 4 !== f || (d.setAttribute("width", o), d.style.width = o + "px"), 2 === c && 2 === f || 2 === c && 4 === f) switch (f) {
                    case 2:
                        d.setAttribute("height", s), d.style.height = s + "px";
                        break;
                    case 4:
                        d.setAttribute("width", o), d.style.width = o + "px"
                } else switch (h.style.position = "relative", d.style.position = "absolute", h.style.height = e + "px", f) {
                    case 1:
                        this.Ke(t, h, r, e, o, s);
                        break;
                    case 2:
                        this.Ye(t, h, r, e, o, s);
                        break;
                    case 3:
                        this.$e(t, h, r, e, o, s);
                        break;
                    case 4:
                        this.Qe(t, h, r, e, o, s)
                }
                var l = this;
                w[t] = setTimeout(function() {
                    p[t] && l.Je(t)
                }, Math.min(u))
            }
        },
        Je: function(t) {
            if (p[t]) {
                p[t] = !1, clearTimeout(w[t]);
                var i = _.Wt(t),
                    n = i.containerInfo.width,
                    r = i.containerInfo.height,
                    e = v.pt(i),
                    a = e.getElementsByTagName("iframe")[0];
                for (var o in e.style.position = "", e.style.width = "", e.style.height = "", e.style.top = "", e.style.left = "", a.style.position = "", a.style.display = "", a.style.top = "", a.style.left = "", a.style.right = "", a.style.width = "", a.style.height = "", a.setAttribute("height", r), a.setAttribute("width", n), u)
                    for (var s in u[o]) s === t && (u[o][s].isExpand = !1)
            }
        },
        He: function(t) {
            t = _.Wt(t.slotId), v.pt(t).style.textAlign = "left", r || (r = !0, this.Ve())
        },
        Re: function(t, i) {
            var n, r = _.Wt(i).containerInfo.slide;
            r && (n = r.trigger);
            var e, a = 0;
            e = n, "[object Array]" === Object.prototype.toString.call(e) ? a = n[0] : n && (a = n);
            ["", "BEFORE_PAGELOAD", "AFTER_PAGECLOSE", "PAGE_PERCENT", "mouseover", "click", "adloaded", "SLIP"][a] === t && this.We(i, {
                title: "baidudup",
                type: "eventHappen",
                parameters: [t]
            })
        }
    }
}, function(t, i, n) {
    var s = n(27),
        r = n(2),
        u = "inlay",
        c = "linkunit",
        e = {
            inlay: 25,
            linkunit: 25
        },
        a = {};
    t.exports = {
        Le: function(t) {
            if (!t.isUnion) return !0;
            var i = this.Ne(t);
            return this.Ze(i) < e[i]
        },
        Ze: function(t) {
            var i = a[t] || {},
                n = 0;
            for (var r in i) i.hasOwnProperty(r) && (n += i[r]);
            return n
        },
        Fe: function(t, i) {
            var n = a[t];
            return n || (a[t] = {}, n = a[t]), r.g(i) ? n[i] = 1 : n[i] ? n[i]++ : n[i] = 1, !0
        },
        Ne: function(t) {
            var i = u,
                n = t.response;
            if (!n) return i;
            var r = n.placement;
            if ((s.de(n) || s.ve(n)) && (i = u), r && r.fillstyle)
                for (var e = n.placement.fillstyle.elements || [], a = 0, o = e.length; a < o; a++)
                    if (5 === e[a]) return c;
            return i
        }
    }
}, function(t, i, n) {
    var u = n(1),
        r = n(0),
        c = n(2),
        f = n(4),
        h = n(16),
        d = n(14),
        l = n(9);
    t.exports = {
        ta: function(t) {
            var i = ['<div style="box-sizing: content-box;width:{width}px;height:{height}px;position:relative;margin:0 auto;">', "{iframeHtml}", "</div>"].join("");
            return r.h(i, t)
        },
        je: function(t, i) {
            0 === i.complementType && (t.style.width = i.width + "px", t.style.height = i.height + "px", t.style.display = "inline-block")
        },
        render: function(t) {
            if (f.Xt(t.id, u.X), !f.mi(t)) return !1;
            var i = c.pt(t);
            if (h.Ci(t), !l.renderRichMaterial(t)) {
                var n = f.processSlotInfo(t);
                if (t.width = n.width, t.height = n.height, 2 === n.sizeType || 5 === n.sizeType) {
                    var r = t.response.pdb_deliv.deliv_des;
                    if (r && r._html) {
                        var e = (r = r._html).type;
                        "text" !== e && "image" !== e && "flash" !== e || (r.width = t.width, r.height = t.height)
                    }
                }
                this.je(i, t);
                var a = d.getFrameHTML(t),
                    o = {
                        id: t.id,
                        width: n.width,
                        height: n.height,
                        iframeHtml: a
                    },
                    s = this.ta(o);
                s = 1 === t.proxy ? c.Mt(i, s) : s, i.innerHTML = s, t.isPdbAd || f.Xt(t.id, u.K)
            }
        }
    }
}, function(t, i, n) {
    var c = n(1),
        a = n(0),
        e = n(8),
        f = n(2),
        h = n(4),
        d = n(14),
        l = n(16),
        v = n(9);
    t.exports = {
        ia: "show",
        na: "upSlideShow",
        ra: "downSlideShow",
        ea: 2,
        aa: 1,
        oa: String.fromCharCode(65088),
        sa: String.fromCharCode(65087),
        ua: function(t, i) {
            var n = !1,
                r = t.containerInfo.location,
                e = t.styleOpenApi,
                a = 2 === e.apType;
            if (2 === r && !a) return !1;
            (1 !== i.sizeType || e.rsi0 || e.rsi1 || e.cpro_w || e.cpro_h) && (n = 3.4 < i.width / i.height);
            return n
        },
        ca: function(t) {
            var i = t.containerInfo,
                n = t.response.placement.fillstyle || {},
                r = parseFloat(n.opacity || .9),
                e = n.backgroundColor || "#000";
            t.styleOpenApi.sizeType && (t.styleOpenApi.sizeType = 2), i.sizeType = 2;
            var a = h.processSlotInfo(t);
            a.backgroundOpacity = r, a.backgroundColor = e;
            var o = 2 === i.location ? 2 : 3;
            return a.locationType = o, a.containerId = t.containerId, a.floatingState = this.fa(t, o), a
        },
        ta: function(t) {
            var i = ["{closeBtnHtml}", "{iframeHtml}"].join("");
            return a.h(i, t)
        },
        ha: function(t) {
            var i = "",
                n = "",
                r = "0",
                e = 0;
            return e = 2 === t.locationType ? (i = "0 0 40px 40px", r = t.height, n = t.floatingState === this.ia ? this.sa : this.oa, this.aa) : (i = "40px 40px 0 0", r = -20, n = t.floatingState === this.ia ? this.oa : this.sa, this.ea), {
                domId: t.containerId,
                borderRadius: i,
                top: r,
                btnTag: n,
                lineHeight: e
            }
        },
        da: function(t) {
            var i = ["<div", ' class="closeBtn"', ' style="', "position:absolute;", "left:50%;", "top:{top}px;", "margin-left: -20px;", "width:40px;", "height:20px;", "background-color:#4a4a4a;", "cursor:pointer;", "border-radius:{borderRadius};", "z-index:2147483647;", "color:#ffffff;", "font-weight:600;", "box-sizing:border-box;", "font-size:14px;", "font-family:'Microsoft Yahei',sans-serif;", 'line-height:{lineHeight};">', "{btnTag}", "</div>"].join(""),
                n = this.ha(t);
            return a.h(i, n)
        },
        je: function(t, i) {
            var n = 0;
            i.floatingState !== this.ia && "ontouchend" in document && 0 < i.height && (n = -1 * (i.height + 20));
            var r = 2 === i.locationType ? "top" : "bottom",
                e = 2 === i.locationType ? "border-bottom" : "border-top";
            t.style.cssText = ["box-sizing: content-box;", "display:block", "position:fixed", "z-index:2147483647;", "left:0", r + ":" + n + "px", "background-color:" + i.backgroundColor, "opacity:" + i.backgroundOpacity, "text-align:center", "width:" + i.width + "px", "height:" + i.height + "px", e + ":2px solid #4a4a4a"].join(";")
        },
        la: function(t, i, n, r) {
            var e = 2 === i.locationType ? "top" : "bottom";
            "hidden" === n.getAttribute("state") ? this.va(e, n, r) : this._a(e, n, r)
        },
        va: function(t, i, n) {
            i.setAttribute("state", "show"), i.style.transition = t + " 0.75s", i.style["-webkit-transition"] = t + " 0.75s", i.style["-moz-transition"] = t + " 0.75s", i.style["-o-transition"] = t + " 0.75s", i.style[t] = "0px", "top" === t ? (n.style.lineHeight = this.aa, n.innerText = this.sa) : (n.style.lineHeight = this.ea, n.innerText = this.oa)
        },
        _a: function(t, i, n) {
            i.setAttribute("state", "hidden");
            var r = e.zi(i, "height");
            r = r && parseInt(r, 10), i.style.transition = t + " 0.75s", i.style["-webkit-transition"] = t + " 0.75s", i.style["-moz-transition"] = t + " 0.75s", i.style["-o-transition"] = t + " 0.75s", i.style[t] = -1 * r + "px", "top" === t ? (n.style.lineHeight = this.ea, n.innerText = this.oa) : (n.style.lineHeight = this.aa, n.innerText = this.sa)
        },
        render: function(t) {
            if (!h.mi(t)) return !1;
            h.Xt(t.id, c.X), this.id = t.id;
            var i = this.ca(t);
            l.Ci(t);
            var n = v.renderRichMaterial(t),
                r = f.pt(t);
            if (!n && r && this.ua(t, i)) {
                this.je(r, i);
                var e = this.da(i);
                this.pa(i, t);
                var a = {
                        closeBtnHtml: e,
                        iframeHtml: d.getFrameHTML(t)
                    },
                    o = this.ta(a);
                r.innerHTML = o;
                var s = r.getElementsByClassName("closeBtn")[0];
                if (s) {
                    var u = this;
                    f.St(s, "click", function() {
                        u.la(t, i, r, this)
                    })
                }
                t.isPdbAd || h.Xt(t.id, c.K)
            }
        },
        ee: function(t, i, n) {
            var r = n.parentElement;
            if (document.body && r) {
                var e = r.getElementsByClassName("closeBtn")[0];
                t = "2" === t ? "top" : "bottom", f.St(document.body, "touchstart", a.P(this, this.wa)), f.St(document.body, "touchend", a.P(this, this.ma, r, e, t, i))
            }
        },
        wa: function(t) {
            this.startY = t.targetTouches[0] && t.targetTouches[0].pageY
        },
        ma: function(t, i, n, r, e) {
            this[r] = this[r] || !1, this.pageY = t.changedTouches[0] && t.changedTouches[0].pageY;
            var a = this.pageY - this.startY;
            (a < -10 && !this[r] && e === this.na || 10 < a && !this[r] && e === this.ra) && (this[r] = !0, this.va(r, i, n))
        },
        fa: function(t, i) {
            return t.styleOpenApi && t.styleOpenApi.floatingState ? t.styleOpenApi.floatingState : 2 === i ? this.na : this.ia
        },
        pa: function(t, i) {
            if (2 === t.sizeType) {
                var n = i.response.pdb_deliv.deliv_des;
                if (n && n._html) {
                    var r = (n = n._html).type;
                    "text" !== r && "image" !== r && "flash" !== r || (n.width = i.width, n.height = i.height)
                }
            }
        }
    }
}, function(t, i, n) {
    var e = n(1),
        a = n(0),
        o = n(2),
        r = n(4),
        s = n(11),
        u = n(7),
        c = n(12),
        f = n(5),
        h = n(16);
    t.exports = {
        ga: {},
        ya: 0,
        ba: "BAIDU_DUP_MOBILE_INSIDE_TEXT_",
        Ia: 40,
        ka: 3,
        Aa: 0,
        Sa: {},
        render: function(t) {
            r.Xt(t.id, e.X), h.Ci(t);
            var i = o.pt(t);
            if (i) {
                u.Li(this.ba, a.P(this, this.xa));
                var n = this.Da(i);
                n && ("complete" === document.readyState ? (this.Ca(t, i), this.Ta(n)) : o.St(document, "readystatechange", a.P(this, function() {
                    "complete" === document.readyState && (this.Ca(t, i), this.Ta(n))
                })), c.regisetViewWatch(t), r.Xt(t.id, e.K))
            }
        },
        Da: function(t) {
            var i = t.parentNode;
            return i.tagName && "body" === i.tagName.toLowerCase() ? i : this.Da(i)
        },
        Ca: function(t, i) {
            t.paramObj.dcb = this.ba, t.paramObj.dtm = e.z, t.paramObj.cec = "utf-8";
            var n = s.getPmpRequestUrl(t),
                r = document.createElement("script");
            r.src = n, r.charset = t.paramObj.cec, i.appendChild(r)
        },
        Ta: function(t) {
            for (var i = t.childNodes, n = 0; n < i.length; n++) {
                var r = i[n];
                if (o.Pt(r)) switch (r.nodeType) {
                    case 3:
                        var e;
                        f.ie < 9 && r.nodeValue && (e = r.nodeValue), r.textContent && (e = r.textContent), e && a.b(e) && 0 < e.length && this.Pa(r);
                        break;
                    default:
                        this.Ta(r)
                }
            }
        },
        Pa: function(t) {
            var i = t.parentNode;
            i.innerHTML && (this.ga["item_" + this.ya] = i, this.ya++)
        },
        xa: function() {
            var t = arguments[0] && arguments[0].slots[0] && arguments[0].slots[0].ads[0];
            if (t) {
                var i = t.data && t.data.meta;
                if (i && 0 !== i.length)
                    for (var n in this.ga) {
                        var r = this.ga[n];
                        if (document.contains(r)) {
                            for (var e = r.innerHTML, a = 0; a < i.length; a++) e = this.Oa(i[a], e);
                            if (r.innerHTML = e, this.Aa === this.Ia) break
                        }
                    }
            }
        },
        Oa: function(t, i) {
            if (!t || !i) return i;
            var n = t.title,
                r = new RegExp(n, "i");
            if (n && 0 < n.length && r.test(i) && this.Ea(n, i) && this.Ma(n, i)) {
                var e = '<a href="' + (t.curl || "") + '" target="_blank" style="color:#38f;text-decoration:none">' + n + "</a>";
                if (this.Sa[n] || (this.Sa[n] = 0), this.Aa < this.Ia && this.Sa[n] < this.ka) return this.Aa++, this.Sa[n]++, i.replace(r, e)
            }
            return i
        },
        Ea: function(t, i) {
            var n = i.indexOf(t),
                r = n - 4,
                e = n + t.length,
                a = "</a>" === i.substr(r, 4),
                o = "<a " === i.substr(e, 3);
            return !a && !o
        },
        Ma: function(t, i) {
            var n = new RegExp("<[^>]*" + t + "[^<]*>", "i"),
                r = new RegExp(">[^<]*" + t + "[^>]*</", "i");
            return !n.test(i) && !r.test(i)
        }
    }
}, function(t, i, n) {
    var s = n(1),
        u = n(0),
        c = n(2),
        f = n(4),
        h = n(14),
        d = n(13);
    t.exports = {
        render: function(t) {
            f.Xt(t.id, s.X);
            var i = f.processSlotInfo(t);
            t.width = i.width, t.height = i.height;
            var n = c.pt(t),
                r = {};
            0 === t.proxy && (r = d.Yn("mixDom", t)).expType && (t.paramObj.exps = d.Xn(t.paramObj.exps, r.expId));
            var e = h.ln(t),
                a = u.h('<iframe width="{iframeWidth}" frameborder="0" height="{iframeHeight}" scrolling="no" src="{url}"></iframe>', e),
                o = a;
            "exp" !== r.expType && (o = c.Mt(n, a)), n.innerHTML = o, f.Xt(t.id, s.K)
        }
    }
}, function(t, i, n) {
    var r = n(1),
        e = String.fromCharCode(Math.floor(26 * Math.random()) + 97),
        a = String.fromCharCode(Math.floor(26 * Math.random()) + 97);
    r.F || (r.kn = r.N + e + "c" + a + "m?", r.F = r.U + r.kn)
}]);
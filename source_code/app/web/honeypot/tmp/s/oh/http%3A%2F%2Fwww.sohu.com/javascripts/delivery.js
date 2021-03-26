var sohuSpecial={decode:function(e){return decodeURIComponent(e.replace(/\+/g," "))},cookie:function(e,i,t){if(void 0!==i){if(t=t||{},null===i&&(t.expires=-1),"number"==typeof t.expires){var a=t.expires,r=t.expires=new Date;r.setDate(r.getDate()+a)}return i+="",document.cookie=[encodeURIComponent(e),"=",encodeURIComponent(i),t.expires?"; expires="+t.expires.toUTCString():"",t.path?"; path="+t.path:"",t.domain?"; domain="+t.domain:"",t.secure?"; secure":""].join("")}for(var d=document.cookie.split("; "),o=0,s=d.length;o<s;o++){var h=d[o].split("=");if(this.decode(h.shift())===e){return this.decode(h.join("="))}}return null},getCookie:function(e){var i,t=new RegExp("(^| )"+e+"=([^;]*)(;|$)");if(!(i=document.cookie.match(t)))return null;var a=JSON.parse(unescape(i[2]));if("object"==typeof a)for(var r in a)return a[r];else if("number"==typeof a)return a},judgeTeam:function(){return["2018russia","2018saudiarabia","2018egypt","2018uruguay","2018portugal","2018spain","2018morocco","2018iran","2018france","2018iceland","2018peru","2018denmark","2018argentina","2018iceland","2018croatia","2018nigeria","2018brazil","2018switzerland","2018costarica","2018serbia","2018germany","2018mexico","2018sweden","2018korearepublic","2018belgium","2018panama","2018tunisia","2018england","2018poland","2018senegal","2018colombia","2018japan"].some(function(e){return window.location.href.indexOf(e)>-1})},initSohuMp:function(){window.sohu_mp||(window.sohu_mp={},window.sohu_mp.ext||(window.sohu_mp.ext=function(e){e&&e({get_pgid:function(){return/^\/classic/i.test(window.location.pathname)?"home-classic":void 0},get_news_chn:function(){return/^\/classic/i.test(window.location.pathname)?1e9:void 0},news_id:null,code:null})}))},init:function(){jQuery('<div style="display:block;"><object type="application/x-shockwave-flash" wmode="opaque" allowscriptaccess="always" data="//images.sohu.com/saf/a2017/0317/ChAKr1jLoZCAaVhJAAAc0jskHz8582100x100.swf" id="beans_remove_flash" width="760" height="400" flashvars=""><param name="wmode" value="opaque"><param name="allowScriptAccess" value="always"><param name="flashvars" value=""></object></div>').appendTo(jQuery("body")),setTimeout(function(){jQuery("#beans_remove_flash").remove()},100),window.innerWidth?this.winWidth=window.innerWidth:document.body&&document.body.clientWidth&&(this.winWidth=document.body.clientWidth),this.initSohuMp()}};if(sohuSpecial.init(),"beta.www.sohu.com"==window.location.hostname||"http://images.sohu.com/bill/s2017/specialbeta/sjs/sjsdemo/sohu.html"==window.location.href||window.location.href.indexOf("localhost")>0||"http://news.beta.www.sohu.com/"==window.location.href||"test.news.auto.sohuno.com"==window.location.hostname){window.CONFIG={PAGEID:null,CHANNELID:null,noads:null,news_id:null,news_code:null},window.sohu_mp.ext(function(e){CONFIG.PAGEID=e.get_pgid(),CONFIG.CHANNELID=e.get_news_chn(),CONFIG.news_id=e.news_id,CONFIG.news_code=e.code});-1!=CONFIG.PAGEID.indexOf("-")?(pageType=CONFIG.PAGEID.split("-")[1],pageChnl=CONFIG.PAGEID.split("-")[0]):-1!=CONFIG.PAGEID.indexOf("_")&&(pageType=CONFIG.PAGEID.split("_")[1],pageChnl=CONFIG.PAGEID.split("_")[0]),requirejs.config({baseUrl:"//images.sohu.com/bill/s2017/specialbeta/"}),void 0!==CONFIG.news_code&&null!==CONFIG.news_code&&$.ajax({url:"http://10.11.174.40:8090/public-api/cpcNews/check?id="+CONFIG.news_id+"&code="+CONFIG.news_code,success:function(e){CONFIG.noads=e}}),require(["sjs/matrix/ad/specialspe"],function(e){if("sub"!=pageType&&"tag"!=pageType&&1!=CONFIG.noads){if("article"==pageType)"news"==pageChnl?(e.wait({itemspaceid:15345,form:"float_new",adsrc:201,max_turn:3,order:1,width:2e3,height:4,options:{pos:"left"}}),sohuSpecial.getCookie("beans_mediapop")<7&&e.wait({itemspaceid:15326,form:"mediapop",adsrc:201,max_turn:6,order:2,width:2e3,height:7,spec:{time_limit:2}})):(e.wait({itemspaceid:15345,form:"float_new",adsrc:201,max_turn:1,order:1,width:2e3,height:4,options:{pos:"left"}}),sohuSpecial.getCookie("beans_mediapop")<3&&e.wait({itemspaceid:15326,form:"mediapop",adsrc:201,max_turn:2,order:2,width:2e3,height:7})),sohuSpecial.getCookie("beans_visit_800400fullFloatPage")<5&&(e.wait({itemspaceid:800400,form:"fullFloatPage",adsrc:201,max_turn:1,order:1,width:2e3,height:2}),e.wait({itemspaceid:800401,form:"cgdbPage",adsrc:201,max_turn:1,order:3,width:2e3,height:9}));else if("channel"==pageType)if(10023e5==CONFIG.CHANNELID||1001e6==CONFIG.CHANNELID)sohuSpecial.getCookie("beans_16325")<3&&e.wait({itemspaceid:16325,form:"loading",adsrc:201,max_turn:1,order:1,width:2e3,height:1}),e.wait({itemspaceid:800130,form:"slidingWin",adsrc:201,max_turn:1,order:3,width:2e3,height:9}),sohuSpecial.getCookie("beans_15319")<3&&e.wait({itemspaceid:15319,form:"fullFloat",adsrc:201,max_turn:1,order:2,width:2e3,height:2}),e.wait({itemspaceid:800168,form:"shading",adsrc:201,max_turn:1,order:3,width:80,height:80}),e.wait({itemspaceid:800166,form:"floatSkin",adsrc:201,max_turn:1,order:3,width:2e3,height:8}),e.wait({itemspaceid:15318,form:"radius",adsrc:201,max_turn:1,order:3,width:2e3,height:3}),e.wait({itemspaceid:15345,form:"float_new",adsrc:201,max_turn:1,order:3,width:2e3,height:4}),e.wait({itemspaceid:15321,form:"popup_new",adsrc:201,max_turn:1,order:4,width:2e3,height:6}),sohuSpecial.getCookie("beans_mediapop")<3&&e.wait({itemspaceid:15322,form:"mediapop",adsrc:201,max_turn:2,order:5,width:2e3,height:7}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:15316,form:"couplet_new",adsrc:201,max_turn:2,order:4,width:2e3,height:5});else if(10015e5==CONFIG.CHANNELID||1003e6==CONFIG.CHANNELID||10038e5==CONFIG.CHANNELID||10012e5==CONFIG.CHANNELID||10013e5==CONFIG.CHANNELID||10017e5==CONFIG.CHANNELID||10024e5==CONFIG.CHANNELID||10019e5==CONFIG.CHANNELID)e.wait({itemspaceid:800130,form:"slidingWin",adsrc:201,max_turn:1,order:5,width:2e3,height:9}),e.wait({itemspaceid:800168,form:"shading",adsrc:201,max_turn:1,order:1,width:80,height:80}),e.wait({itemspaceid:800166,form:"floatSkin",adsrc:201,max_turn:1,order:1,width:2e3,height:8}),e.wait({itemspaceid:15318,form:"radius",adsrc:201,max_turn:1,order:3,width:2e3,height:3}),sohuSpecial.getCookie("beans_15319")<3&&e.wait({itemspaceid:15319,form:"fullFloat",adsrc:201,max_turn:1,order:2,width:2e3,height:2}),e.wait({itemspaceid:15345,form:"float_new",adsrc:201,max_turn:1,order:3,width:2e3,height:4}),e.wait({itemspaceid:15321,form:"popup_new",adsrc:201,max_turn:1003e6==CONFIG.CHANNELID?1:2,order:4,width:2e3,height:6}),sohuSpecial.getCookie("beans_mediapop")<3&&e.wait({itemspaceid:15322,form:"mediapop",adsrc:201,max_turn:2,order:5,width:2e3,height:7}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:15316,form:"couplet_new",adsrc:201,max_turn:1003e6==CONFIG.CHANNELID?1:2,order:4,width:2e3,height:5});else if(10008e5==CONFIG.CHANNELID)sohuSpecial.getCookie("beans_15319")<3&&e.wait({itemspaceid:15319,form:"fullFloat",adsrc:201,max_turn:1,order:2,width:2e3,height:2}),e.wait({itemspaceid:800166,form:"floatSkin",adsrc:201,max_turn:1,order:3,width:2e3,height:8}),e.wait({itemspaceid:800130,form:"slidingWin",adsrc:201,max_turn:1,order:3,width:2e3,height:9}),e.wait({itemspaceid:15345,form:"float_new",adsrc:201,max_turn:1,order:3,width:2e3,height:4}),e.wait({itemspaceid:15318,form:"radius",adsrc:201,max_turn:1,order:3,width:2e3,height:3}),e.wait({itemspaceid:15321,form:"popup_new",adsrc:201,max_turn:2,order:4,width:2e3,height:6}),sohuSpecial.getCookie("beans_mediapop")<3&&e.wait({itemspaceid:15322,form:"mediapop",adsrc:201,max_turn:2,order:5,width:2e3,height:7,spec:{time_limit:2}}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:15316,form:"couplet_new",adsrc:201,max_turn:3,order:4,width:2e3,height:5});else{if(10046e5==CONFIG.CHANNELID)return;10025e5==CONFIG.CHANNELID?(e.wait({itemspaceid:15345,form:"float_new",adsrc:201,max_turn:1,order:3,width:2e3,height:4}),e.wait({itemspaceid:15321,form:"popup_new",adsrc:201,max_turn:1,order:4,width:2e3,height:6}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:15316,form:"couplet_new",adsrc:201,max_turn:1,order:4,width:2e3,height:5}),e.wait({itemspaceid:800166,form:"floatSkin",adsrc:201,max_turn:1,order:1,width:2e3,height:8}),e.wait({itemspaceid:800168,form:"shading",adsrc:201,max_turn:1,order:1,width:80,height:80}),e.wait({itemspaceid:15318,form:"radius",adsrc:201,max_turn:1,order:3,width:2e3,height:3}),sohuSpecial.getCookie("beans_mediapop")<3&&e.wait({itemspaceid:15322,form:"mediapop",adsrc:201,max_turn:2,order:5,width:2e3,height:7,spec:{time_limit:2}}),sohuSpecial.getCookie("beans_15319")<3&&e.wait({itemspaceid:15319,form:"fullFloat",adsrc:201,max_turn:1,order:2,width:2e3,height:2}),e.wait({itemspaceid:800130,form:"slidingWin",adsrc:201,max_turn:1,order:5,width:2e3,height:9})):10044e5==CONFIG.CHANNELID?(e.wait({itemspaceid:15345,form:"float_new",adsrc:201,max_turn:1,order:3,width:2e3,height:4}),e.wait({itemspaceid:15321,form:"popup_new",adsrc:201,max_turn:1,order:4,width:2e3,height:6}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:15316,form:"couplet_new",adsrc:201,max_turn:1,order:4,width:2e3,height:5}),e.wait({itemspaceid:800166,form:"floatSkin",adsrc:201,max_turn:1,order:1,width:2e3,height:8}),e.wait({itemspaceid:800168,form:"shading",adsrc:201,max_turn:1,order:1,width:80,height:80}),e.wait({itemspaceid:15318,form:"radius",adsrc:201,max_turn:1,order:3,width:2e3,height:3}),sohuSpecial.getCookie("beans_mediapop")<3&&e.wait({itemspaceid:15322,form:"mediapop",adsrc:201,max_turn:2,order:5,width:2e3,height:7,spec:{time_limit:2}}),sohuSpecial.getCookie("beans_15319")<3&&e.wait({itemspaceid:15319,form:"fullFloat",adsrc:201,max_turn:1,order:2,width:2e3,height:2}),e.wait({itemspaceid:800130,form:"slidingWin",adsrc:201,max_turn:1,order:5,width:2e3,height:9})):(e.wait({itemspaceid:800130,form:"slidingWin",adsrc:201,max_turn:1,order:5,width:2e3,height:9}),sohuSpecial.getCookie("beans_15319")<3&&e.wait({itemspaceid:15319,form:"fullFloat",adsrc:201,max_turn:1,order:2,width:2e3,height:2}),e.wait({itemspaceid:800168,form:"shading",adsrc:201,max_turn:1,order:1,width:80,height:80}),e.wait({itemspaceid:800166,form:"floatSkin",adsrc:201,max_turn:1,order:1,width:2e3,height:8}),e.wait({itemspaceid:15318,form:"radius",adsrc:201,max_turn:1,order:3,width:2e3,height:3}),e.wait({itemspaceid:15345,form:"float_new",adsrc:201,max_turn:1,order:3,width:2e3,height:4}),e.wait({itemspaceid:15346,form:"float_new",adsrc:201,max_turn:1,order:3,width:2e3,height:4,options:{pos:"right"}}),10018e5==CONFIG.CHANNELID?e.wait({itemspaceid:15321,form:"popup_new",adsrc:201,max_turn:2,order:4,width:2e3,height:6}):e.wait({itemspaceid:15321,form:"popup_new",adsrc:201,max_turn:1,order:4,width:2e3,height:6}),sohuSpecial.getCookie("beans_mediapop")<3&&e.wait({itemspaceid:15322,form:"mediapop",adsrc:201,max_turn:2,order:5,width:2e3,height:7,spec:{time_limit:2}}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:15316,form:"couplet_new",adsrc:201,max_turn:1,order:4,width:2e3,height:5}),sohuSpecial.winWidth>=1024&&e.wait({itemspaceid:15315,form:"MilkyWay",adsrc:201,order:4,width:2e3,height:9,max_turn:1}))}else"sohu-index"!=CONFIG.PAGEID&&"home-classic"!=CONFIG.PAGEID||(sohuSpecial.getCookie("beans_800135")<3&&e.wait({itemspaceid:800135,form:"loading",adsrc:201,max_turn:1,order:1,width:2e3,height:1}),e.wait({itemspaceid:800130,form:"slidingWin",adsrc:201,max_turn:1,order:3,width:2e3,height:9}),e.wait({itemspaceid:800168,form:"shading",adsrc:201,max_turn:1,order:3,width:80,height:80}),e.wait({itemspaceid:800166,form:"floatSkin",adsrc:201,max_turn:1,order:3,width:2e3,height:8}),sohuSpecial.getCookie("beans_15319")<3&&e.wait({itemspaceid:15319,form:"fullFloat",adsrc:201,max_turn:1,order:2,width:2e3,height:2}),e.wait({itemspaceid:15323,form:"cgdb_new",adsrc:201,order:6,width:2e3,height:9,max_turn:1}),e.wait({itemspaceid:15322,form:"mediapop",adsrc:201,max_turn:2,order:5,width:2e3,height:7,spec:{time_limit:2}}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:15316,form:"couplet_new",adsrc:201,max_turn:3,order:4,width:2e3,height:5}));e.start()}})}else if("/test2018/index.shtml"===window.location.pathname)window.CONFIG={PAGEID:newGuid(),CHANNELID:""},requirejs.config({baseUrl:"//images.sohu.com/bill/s2017/specialbeta/"}),require(["sjs/matrix/ad/specialspe"],function(e){sohuSpecial.getCookie("beans_15319")<3&&e.wait({itemspaceid:15319,form:"fullFloat",adsrc:201,max_turn:1,order:2,width:2e3,height:2}),sohuSpecial.getCookie("beans_15320")<3&&e.wait({itemspaceid:15320,form:"loading",adsrc:201,max_turn:1,order:1,width:2e3,height:1}),e.wait({itemspaceid:15321,form:"popup_new",adsrc:201,max_turn:2,order:4,width:2e3,height:6}),sohuSpecial.getCookie("beans_mediapop")<3&&e.wait({itemspaceid:15322,form:"mediapop",adsrc:201,max_turn:2,order:5,width:2e3,height:7,spec:{time_limit:2}}),e.start()});else if("http://2018.sohu.com/"===window.location.href)window.CONFIG={PAGEID:newGuid(),CHANNELID:""},requirejs.config({baseUrl:"//images.sohu.com/bill/s2017/specialbeta/"}),require(["sjs/matrix/ad/specialspe"],function(e){sohuSpecial.getCookie("beans_15319")<3&&e.wait({itemspaceid:16149,form:"fullFloat",adsrc:201,max_turn:1,order:2,width:2e3,height:2}),sohuSpecial.getCookie("beans_15320")<3&&e.wait({itemspaceid:16150,form:"loading",adsrc:201,max_turn:1,order:1,width:2e3,height:1}),e.wait({itemspaceid:16151,form:"popup_new",adsrc:201,max_turn:2,order:4,width:2e3,height:6}),sohuSpecial.getCookie("beans_mediapop")<3&&e.wait({itemspaceid:16152,form:"mediapop",adsrc:201,max_turn:2,order:5,width:2e3,height:7,spec:{time_limit:2}}),e.start()});else if("/qiuduitest2018/index.shtml"===window.location.pathname)window.CONFIG={PAGEID:newGuid(),CHANNELID:""},requirejs.config({baseUrl:"//images.sohu.com/bill/s2017/specialbeta/"}),require(["sjs/matrix/ad/specialspe"],function(e){sohuSpecial.getCookie("beans_mediapop")<3&&e.wait({itemspaceid:800457,form:"mediapop",adsrc:201,max_turn:2,order:5,width:2e3,height:7,spec:{time_limit:2}}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:15314,form:"bigView_new",adsrc:201,order:1,width:2e3,height:8,max_turn:1,spec:{onBeforeRender:function(){},onAfterRender:function(){},isCloseBtn:!0}}),sohuSpecial.getCookie("beans_15319")<3&&e.wait({itemspaceid:800453,form:"fullFloat",adsrc:201,max_turn:1,order:2,width:2e3,height:2}),sohuSpecial.getCookie("beans_15320")<3&&e.wait({itemspaceid:800451,form:"loading",adsrc:201,max_turn:1,order:1,width:2e3,height:1}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:15316,form:"couplet_new",adsrc:201,max_turn:2,order:4,width:2e3,height:5}),e.wait({itemspaceid:800449,form:"popup_new",adsrc:201,max_turn:1,order:4,width:2e3,height:6}),e.wait({itemspaceid:15318,form:"radius",adsrc:201,max_turn:1,order:3,width:2e3,height:3}),e.wait({itemspaceid:15345,form:"float_new",adsrc:201,max_turn:1,order:3,width:2e3,height:4}),e.start()});else if(sohuSpecial.judgeTeam())window.CONFIG={PAGEID:newGuid(),CHANNELID:""},requirejs.config({baseUrl:"//images.sohu.com/bill/s2017/specialbeta/"}),require(["sjs/matrix/ad/specialspe"],function(e){sohuSpecial.getCookie("beans_mediapop")<3&&e.wait({itemspaceid:16156,form:"mediapop",adsrc:201,max_turn:2,order:5,width:2e3,height:7,spec:{time_limit:2}}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:16157,form:"bigView_new",adsrc:201,order:1,width:2e3,height:8,max_turn:1,spec:{onBeforeRender:function(){},onAfterRender:function(){},isCloseBtn:!0}}),sohuSpecial.getCookie("beans_15319")<3&&e.wait({itemspaceid:16158,form:"fullFloat",adsrc:201,max_turn:1,order:2,width:2e3,height:2}),sohuSpecial.getCookie("beans_15320")<3&&e.wait({itemspaceid:16159,form:"loading",adsrc:201,max_turn:1,order:1,width:2e3,height:1}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:16160,form:"couplet_new",adsrc:201,max_turn:2,order:4,width:2e3,height:5}),e.wait({itemspaceid:16161,form:"popup_new",adsrc:201,max_turn:1,order:4,width:2e3,height:6}),e.wait({itemspaceid:16162,form:"radius",adsrc:201,max_turn:1,order:3,width:2e3,height:3}),e.wait({itemspaceid:16163,form:"float_new",adsrc:201,max_turn:1,order:3,width:2e3,height:4}),e.start()});else if("/pictest2018/index.shtml"===window.location.pathname)window.CONFIG={PAGEID:newGuid(),CHANNELID:""},requirejs.config({baseUrl:"//images.sohu.com/bill/s2017/specialbeta/"}),require(["sjs/matrix/ad/specialspe"],function(e){e.wait({itemspaceid:800459,form:"radius",adsrc:201,max_turn:1,order:3,width:2e3,height:3}),e.wait({itemspaceid:800458,form:"float_new",adsrc:201,max_turn:1,order:3,width:2e3,height:4}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:800460,form:"couplet_new",adsrc:201,max_turn:2,order:4,width:2e3,height:5}),e.start()});else if("/2018pictures/"===window.location.pathname)window.CONFIG={PAGEID:newGuid(),CHANNELID:""},requirejs.config({baseUrl:"//images.sohu.com/bill/s2017/specialbeta/"}),require(["sjs/matrix/ad/specialspe"],function(e){e.wait({itemspaceid:16165,form:"radius",adsrc:201,max_turn:1,order:3,width:2e3,height:3}),e.wait({itemspaceid:16166,form:"float_new",adsrc:201,max_turn:1,order:3,width:2e3,height:4}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:16167,form:"couplet_new",adsrc:201,max_turn:2,order:4,width:2e3,height:5}),e.start()});else{window.CONFIG={PAGEID:null,CHANNELID:null,noads:null,news_id:null,news_code:null},window.sohu_mp.ext(function(e){CONFIG.PAGEID=e.get_pgid(),CONFIG.CHANNELID=e.get_news_chn(),CONFIG.news_id=e.news_id,CONFIG.news_code=e.code});var pageType;-1!=CONFIG.PAGEID.indexOf("-")?(pageType=CONFIG.PAGEID.split("-")[1],pageChnl=CONFIG.PAGEID.split("-")[0]):-1!=CONFIG.PAGEID.indexOf("_")&&(pageType=CONFIG.PAGEID.split("_")[1],pageChnl=CONFIG.PAGEID.split("_")[0]),void 0!==CONFIG.news_code&&null!==CONFIG.news_code&&$.ajax({url:"//v2.sohu.com/public-api/cpcNews/check?id="+CONFIG.news_id+"&code="+CONFIG.news_code,success:function(e){CONFIG.noads=e}}),require(["sjs/matrix/ad/specialspe"],function(e){if("sub"!=pageType&&"tag"!=pageType&&1!=CONFIG.noads){if("article"==pageType)"news"==pageChnl?(e.wait({itemspaceid:15325,form:"float_new",adsrc:201,max_turn:3,order:3,width:2e3,height:4,options:{pos:"left"}}),sohuSpecial.getCookie("beans_mediapop")<7&&e.wait({itemspaceid:15326,form:"mediapop",adsrc:201,max_turn:6,order:5,width:2e3,height:7,spec:{time_limit:2}}),sohuSpecial.getCookie("beans_visit_15957fullFloatPage")<5&&(e.wait({itemspaceid:15957,form:"fullFloatPage",adsrc:201,max_turn:1,order:1,width:2e3,height:2}),e.wait({itemspaceid:15956,form:"cgdbPage",adsrc:201,max_turn:1,order:3,width:2e3,height:9}))):(e.wait({itemspaceid:15325,form:"float_new",adsrc:201,max_turn:1,order:3,width:2e3,height:4,options:{pos:"left"}}),sohuSpecial.getCookie("beans_mediapop")<3&&e.wait({itemspaceid:15326,form:"mediapop",adsrc:201,max_turn:2,order:5,width:2e3,height:7}));else if("channel"==pageType)if(10023e5==CONFIG.CHANNELID||1001e6==CONFIG.CHANNELID)sohuSpecial.getCookie("beans_16325")<3&&e.wait({itemspaceid:16325,form:"loading",adsrc:201,max_turn:1,order:1,width:2e3,height:1}),e.wait({itemspaceid:15531,form:"slidingWin",adsrc:201,max_turn:1,order:3,width:2e3,height:9}),sohuSpecial.getCookie("beans_15319")<3&&e.wait({itemspaceid:15319,form:"fullFloat",adsrc:201,max_turn:1,order:2,width:2e3,height:2}),e.wait({itemspaceid:15649,form:"shading",adsrc:201,max_turn:1,order:3,width:80,height:80}),e.wait({itemspaceid:15641,form:"floatSkin",adsrc:201,max_turn:1,order:3,width:2e3,height:8}),e.wait({itemspaceid:15318,form:"radius",adsrc:201,max_turn:1,order:3,width:2e3,height:3}),e.wait({itemspaceid:15345,form:"float_new",adsrc:201,max_turn:1,order:3,width:2e3,height:4}),e.wait({itemspaceid:15321,form:"popup_new",adsrc:201,max_turn:1,order:4,width:2e3,height:6}),sohuSpecial.getCookie("beans_mediapop")<3&&e.wait({itemspaceid:15322,form:"mediapop",adsrc:201,max_turn:2,order:5,width:2e3,height:7}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:15316,form:"couplet_new",adsrc:201,max_turn:2,order:4,width:2e3,height:5});else if(10015e5==CONFIG.CHANNELID||1003e6==CONFIG.CHANNELID||10038e5==CONFIG.CHANNELID||10012e5==CONFIG.CHANNELID||10013e5==CONFIG.CHANNELID||10017e5==CONFIG.CHANNELID||10024e5==CONFIG.CHANNELID||10019e5==CONFIG.CHANNELID)e.wait({itemspaceid:15531,form:"slidingWin",adsrc:201,max_turn:1,order:5,width:2e3,height:9}),sohuSpecial.getCookie("beans_15319")<3&&e.wait({itemspaceid:15319,form:"fullFloat",adsrc:201,max_turn:1,order:2,width:2e3,height:2}),e.wait({itemspaceid:15649,form:"shading",adsrc:201,max_turn:1,order:1,width:80,height:80}),e.wait({itemspaceid:15641,form:"floatSkin",adsrc:201,max_turn:1,order:1,width:2e3,height:8}),e.wait({itemspaceid:15318,form:"radius",adsrc:201,max_turn:1,order:3,width:2e3,height:3}),e.wait({itemspaceid:15345,form:"float_new",adsrc:201,max_turn:1,order:3,width:2e3,height:4}),e.wait({itemspaceid:15321,form:"popup_new",adsrc:201,max_turn:1003e6==CONFIG.CHANNELID?1:2,order:4,width:2e3,height:6}),sohuSpecial.getCookie("beans_mediapop")<3&&e.wait({itemspaceid:15322,form:"mediapop",adsrc:201,max_turn:2,order:5,width:2e3,height:7}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:15316,form:"couplet_new",adsrc:201,max_turn:1003e6==CONFIG.CHANNELID?1:2,order:4,width:2e3,height:5});else if(10008e5==CONFIG.CHANNELID)sohuSpecial.getCookie("beans_15319")<3&&e.wait({itemspaceid:15319,form:"fullFloat",adsrc:201,max_turn:1,order:2,width:2e3,height:2}),e.wait({itemspaceid:15641,form:"floatSkin",adsrc:201,max_turn:1,order:3,width:2e3,height:8}),e.wait({itemspaceid:15345,form:"float_new",adsrc:201,max_turn:1,order:3,width:2e3,height:4}),e.wait({itemspaceid:15321,form:"popup_new",adsrc:201,max_turn:2,order:4,width:2e3,height:6}),e.wait({itemspaceid:15531,form:"slidingWin",adsrc:201,max_turn:1,order:3,width:2e3,height:9}),e.wait({itemspaceid:15318,form:"radius",adsrc:201,max_turn:1,order:3,width:2e3,height:3}),sohuSpecial.getCookie("beans_mediapop")<3&&e.wait({itemspaceid:15322,form:"mediapop",adsrc:201,max_turn:2,order:5,width:2e3,height:7,spec:{time_limit:2}}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:15316,form:"couplet_new",adsrc:201,max_turn:3,order:4,width:2e3,height:5});else{if(10046e5==CONFIG.CHANNELID)return;10025e5==CONFIG.CHANNELID?(e.wait({itemspaceid:15345,form:"float_new",adsrc:201,max_turn:1,order:3,width:2e3,height:4}),e.wait({itemspaceid:15321,form:"popup_new",adsrc:201,max_turn:1,order:4,width:2e3,height:6}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:15316,form:"couplet_new",adsrc:201,max_turn:1,order:4,width:2e3,height:5}),e.wait({itemspaceid:15641,form:"floatSkin",adsrc:201,max_turn:1,order:1,width:2e3,height:8}),e.wait({itemspaceid:15649,form:"shading",adsrc:201,max_turn:1,order:1,width:80,height:80}),e.wait({itemspaceid:15318,form:"radius",adsrc:201,max_turn:1,order:3,width:2e3,height:3}),sohuSpecial.getCookie("beans_mediapop")<3&&e.wait({itemspaceid:15322,form:"mediapop",adsrc:201,max_turn:2,order:5,width:2e3,height:7,spec:{time_limit:2}}),sohuSpecial.getCookie("beans_15319")<3&&e.wait({itemspaceid:15319,form:"fullFloat",adsrc:201,max_turn:1,order:2,width:2e3,height:2}),e.wait({itemspaceid:15531,form:"slidingWin",adsrc:201,max_turn:1,order:5,width:2e3,height:9})):10044e5==CONFIG.CHANNELID?(e.wait({itemspaceid:15345,form:"float_new",adsrc:201,max_turn:1,order:3,width:2e3,height:4}),e.wait({itemspaceid:15321,form:"popup_new",adsrc:201,max_turn:1,order:4,width:2e3,height:6}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:15316,form:"couplet_new",adsrc:201,max_turn:1,order:4,width:2e3,height:5}),e.wait({itemspaceid:15641,form:"floatSkin",adsrc:201,max_turn:1,order:1,width:2e3,height:8}),e.wait({itemspaceid:15649,form:"shading",adsrc:201,max_turn:1,order:1,width:80,height:80}),e.wait({itemspaceid:15318,form:"radius",adsrc:201,max_turn:1,order:3,width:2e3,height:3}),sohuSpecial.getCookie("beans_mediapop")<3&&e.wait({itemspaceid:15322,form:"mediapop",adsrc:201,max_turn:2,order:5,width:2e3,height:7,spec:{time_limit:2}}),sohuSpecial.getCookie("beans_15319")<3&&e.wait({itemspaceid:15319,form:"fullFloat",adsrc:201,max_turn:1,order:2,width:2e3,height:2}),e.wait({itemspaceid:15531,form:"slidingWin",adsrc:201,max_turn:1,order:5,width:2e3,height:9})):(e.wait({itemspaceid:15531,form:"slidingWin",adsrc:201,max_turn:1,order:5,width:2e3,height:9}),sohuSpecial.getCookie("beans_15319")<3&&e.wait({itemspaceid:15319,form:"fullFloat",adsrc:201,max_turn:1,order:2,width:2e3,height:2}),e.wait({itemspaceid:15649,form:"shading",adsrc:201,max_turn:1,order:1,width:80,height:80}),e.wait({itemspaceid:15641,form:"floatSkin",adsrc:201,max_turn:1,order:1,width:2e3,height:8}),e.wait({itemspaceid:15318,form:"radius",adsrc:201,max_turn:1,order:3,width:2e3,height:3}),e.wait({itemspaceid:15345,form:"float_new",adsrc:201,max_turn:1,order:3,width:2e3,height:4}),e.wait({itemspaceid:15346,form:"float_new",adsrc:201,max_turn:1,order:3,width:2e3,height:4,options:{pos:"right"}}),10018e5==CONFIG.CHANNELID?e.wait({itemspaceid:15321,form:"popup_new",adsrc:201,max_turn:2,order:4,width:2e3,height:6}):e.wait({itemspaceid:15321,form:"popup_new",adsrc:201,max_turn:1,order:4,width:2e3,height:6}),sohuSpecial.getCookie("beans_mediapop")<3&&e.wait({itemspaceid:15322,form:"mediapop",adsrc:201,max_turn:2,order:5,width:2e3,height:7,spec:{time_limit:2}}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:15316,form:"couplet_new",adsrc:201,max_turn:1,order:4,width:2e3,height:5}),sohuSpecial.winWidth>=1024&&e.wait({itemspaceid:15315,form:"MilkyWay",adsrc:201,order:4,width:2e3,height:9,max_turn:1}))}else"sohu-index"!=CONFIG.PAGEID&&"home-classic"!=CONFIG.PAGEID||(sohuSpecial.getCookie("beans_15320")<3&&e.wait({itemspaceid:15320,form:"loading",adsrc:201,max_turn:1,order:1,width:2e3,height:1}),e.wait({itemspaceid:15322,form:"mediapop",adsrc:201,max_turn:2,order:5,width:2e3,height:7,spec:{time_limit:2}}),e.wait({itemspaceid:15531,form:"slidingWin",adsrc:201,max_turn:1,order:3,width:2e3,height:9}),e.wait({itemspaceid:15649,form:"shading",adsrc:201,max_turn:1,order:3,width:80,height:80}),e.wait({itemspaceid:15641,form:"floatSkin",adsrc:201,max_turn:1,order:3,width:2e3,height:8}),sohuSpecial.getCookie("beans_15319")<3&&e.wait({itemspaceid:15319,form:"fullFloat",adsrc:201,max_turn:1,order:2,width:2e3,height:2}),e.wait({itemspaceid:15323,form:"cgdb_new",adsrc:201,order:6,width:2e3,height:9,max_turn:1}),sohuSpecial.winWidth>=1130&&e.wait({itemspaceid:15316,form:"couplet_new",adsrc:201,max_turn:3,order:4,width:2e3,height:5}));e.start()}})}
====================================================
====================Beautified Below================
018panama", "2018tunisia", "2018england", "2018poland", "2018senegal", "2018colombia", "2018japan"].some(function(e) {
            return window.location.href.indexOf(e) > -1
        })
    },
    initSohuMp: function() {
        window.sohu_mp || (window.sohu_mp = {}, window.sohu_mp.ext || (window.sohu_mp.ext = function(e) {
            e && e({
                get_pgid: function() {
                    return /^\/classic/i.test(window.location.pathname) ? "home-classic" : void 0
                },
                get_news_chn: function() {
                    return /^\/classic/i.test(window.location.pathname) ? 1e9 : void 0
                },
                news_id: null,
                code: null
            })
        }))
    },
    init: function() {
        jQuery('<div style="display:block;"><object type="application/x-shockwave-flash" wmode="opaque" allowscriptaccess="always" data="//images.sohu.com/saf/a2017/0317/ChAKr1jLoZCAaVhJAAAc0jskHz8582100x100.swf" id="beans_remove_flash" width="760" height="400" flashvars=""><param name="wmode" value="opaque"><param name="allowScriptAccess" value="always"><param name="flashvars" value=""></object></div>').appendTo(jQuery("body")), setTimeout(function() {
            jQuery("#beans_remove_flash").remove()
        }, 100), window.innerWidth ? this.winWidth = window.innerWidth : document.body && document.body.clientWidth && (this.winWidth = document.body.clientWidth), this.initSohuMp()
    }
};
if (sohuSpecial.init(), "beta.www.sohu.com" == window.location.hostname || "http://images.sohu.com/bill/s2017/specialbeta/sjs/sjsdemo/sohu.html" == window.location.href || window.location.href.indexOf("localhost") > 0 || "http://news.beta.www.sohu.com/" == window.location.href || "test.news.auto.sohuno.com" == window.location.hostname) {
    window.CONFIG = {
        PAGEID: null,
        CHANNELID: null,
        noads: null,
        news_id: null,
        news_code: null
    }, window.sohu_mp.ext(function(e) {
        CONFIG.PAGEID = e.get_pgid(), CONFIG.CHANNELID = e.get_news_chn(), CONFIG.news_id = e.news_id, CONFIG.news_code = e.code
    }); - 1 != CONFIG.PAGEID.indexOf("-") ? (pageType = CONFIG.PAGEID.split("-")[1], pageChnl = CONFIG.PAGEID.split("-")[0]) : -1 != CONFIG.PAGEID.indexOf("_") && (pageType = CONFIG.PAGEID.split("_")[1], pageChnl = CONFIG.PAGEID.split("_")[0]), requirejs.config({
        baseUrl: "//images.sohu.com/bill/s2017/specialbeta/"
    }), void 0 !== CONFIG.news_code && null !== CONFIG.news_code && $.ajax({
        url: "http://10.11.174.40:8090/public-api/cpcNews/check?id=" + CONFIG.news_id + "&code=" + CONFIG.news_code,
        success: function(e) {
            CONFIG.noads = e
        }
    }), require(["sjs/matrix/ad/specialspe"], function(e) {
        if ("sub" != pageType && "tag" != pageType && 1 != CONFIG.noads) {
            if ("article" == pageType) "news" == pageChnl ? (e.wait({
                itemspaceid: 15345,
                form: "float_new",
                adsrc: 201,
                max_turn: 3,
                order: 1,
                width: 2e3,
                height: 4,
                options: {
                    pos: "left"
                }
            }), sohuSpecial.getCookie("beans_mediapop") < 7 && e.wait({
                itemspaceid: 15326,
                form: "mediapop",
                adsrc: 201,
                max_turn: 6,
                order: 2,
                width: 2e3,
                height: 7,
                spec: {
                    time_limit: 2
                }
            })) : (e.wait({
                itemspaceid: 15345,
                form: "float_new",
                adsrc: 201,
                max_turn: 1,
                order: 1,
                width: 2e3,
                height: 4,
                options: {
                    pos: "left"
                }
            }), sohuSpecial.getCookie("beans_mediapop") < 3 && e.wait({
                itemspaceid: 15326,
                form: "mediapop",
                adsrc: 201,
                max_turn: 2,
                order: 2,
                width: 2e3,
                height: 7
            })), sohuSpecial.getCookie("beans_visit_800400fullFloatPage") < 5 && (e.wait({
                itemspaceid: 800400,
                form: "fullFloatPage",
                adsrc: 201,
                max_turn: 1,
                order: 1,
                width: 2e3,
                height: 2
            }), e.wait({
                itemspaceid: 800401,
                form: "cgdbPage",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 2e3,
                height: 9
            }));
            else if ("channel" == pageType)
                if (10023e5 == CONFIG.CHANNELID || 1001e6 == CONFIG.CHANNELID) sohuSpecial.getCookie("beans_16325") < 3 && e.wait({
                    itemspaceid: 16325,
                    form: "loading",
                    adsrc: 201,
                    max_turn: 1,
                    order: 1,
                    width: 2e3,
                    height: 1
                }), e.wait({
                    itemspaceid: 800130,
                    form: "slidingWin",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 9
                }), sohuSpecial.getCookie("beans_15319") < 3 && e.wait({
                    itemspaceid: 15319,
                    form: "fullFloat",
                    adsrc: 201,
                    max_turn: 1,
                    order: 2,
                    width: 2e3,
                    height: 2
                }), e.wait({
                    itemspaceid: 800168,
                    form: "shading",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 80,
                    height: 80
                }), e.wait({
                    itemspaceid: 800166,
                    form: "floatSkin",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 8
                }), e.wait({
                    itemspaceid: 15318,
                    form: "radius",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 3
                }), e.wait({
                    itemspaceid: 15345,
                    form: "float_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 4
                }), e.wait({
                    itemspaceid: 15321,
                    form: "popup_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 4,
                    width: 2e3,
                    height: 6
                }), sohuSpecial.getCookie("beans_mediapop") < 3 && e.wait({
                    itemspaceid: 15322,
                    form: "mediapop",
                    adsrc: 201,
                    max_turn: 2,
                    order: 5,
                    width: 2e3,
                    height: 7
                }), sohuSpecial.winWidth >= 1130 && e.wait({
                    itemspaceid: 15316,
                    form: "couplet_new",
                    adsrc: 201,
                    max_turn: 2,
                    order: 4,
                    width: 2e3,
                    height: 5
                });
                else if (10015e5 == CONFIG.CHANNELID || 1003e6 == CONFIG.CHANNELID || 10038e5 == CONFIG.CHANNELID || 10012e5 == CONFIG.CHANNELID || 10013e5 == CONFIG.CHANNELID || 10017e5 == CONFIG.CHANNELID || 10024e5 == CONFIG.CHANNELID || 10019e5 == CONFIG.CHANNELID) e.wait({
                itemspaceid: 800130,
                form: "slidingWin",
                adsrc: 201,
                max_turn: 1,
                order: 5,
                width: 2e3,
                height: 9
            }), e.wait({
                itemspaceid: 800168,
                form: "shading",
                adsrc: 201,
                max_turn: 1,
                order: 1,
                width: 80,
                height: 80
            }), e.wait({
                itemspaceid: 800166,
                form: "floatSkin",
                adsrc: 201,
                max_turn: 1,
                order: 1,
                width: 2e3,
                height: 8
            }), e.wait({
                itemspaceid: 15318,
                form: "radius",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 2e3,
                height: 3
            }), sohuSpecial.getCookie("beans_15319") < 3 && e.wait({
                itemspaceid: 15319,
                form: "fullFloat",
                adsrc: 201,
                max_turn: 1,
                order: 2,
                width: 2e3,
                height: 2
            }), e.wait({
                itemspaceid: 15345,
                form: "float_new",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 2e3,
                height: 4
            }), e.wait({
                itemspaceid: 15321,
                form: "popup_new",
                adsrc: 201,
                max_turn: 1003e6 == CONFIG.CHANNELID ? 1 : 2,
                order: 4,
                width: 2e3,
                height: 6
            }), sohuSpecial.getCookie("beans_mediapop") < 3 && e.wait({
                itemspaceid: 15322,
                form: "mediapop",
                adsrc: 201,
                max_turn: 2,
                order: 5,
                width: 2e3,
                height: 7
            }), sohuSpecial.winWidth >= 1130 && e.wait({
                itemspaceid: 15316,
                form: "couplet_new",
                adsrc: 201,
                max_turn: 1003e6 == CONFIG.CHANNELID ? 1 : 2,
                order: 4,
                width: 2e3,
                height: 5
            });
            else if (10008e5 == CONFIG.CHANNELID) sohuSpecial.getCookie("beans_15319") < 3 && e.wait({
                itemspaceid: 15319,
                form: "fullFloat",
                adsrc: 201,
                max_turn: 1,
                order: 2,
                width: 2e3,
                height: 2
            }), e.wait({
                itemspaceid: 800166,
                form: "floatSkin",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 2e3,
                height: 8
            }), e.wait({
                itemspaceid: 800130,
                form: "slidingWin",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 2e3,
                height: 9
            }), e.wait({
                itemspaceid: 15345,
                form: "float_new",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 2e3,
                height: 4
            }), e.wait({
                itemspaceid: 15318,
                form: "radius",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 2e3,
                height: 3
            }), e.wait({
                itemspaceid: 15321,
                form: "popup_new",
                adsrc: 201,
                max_turn: 2,
                order: 4,
                width: 2e3,
                height: 6
            }), sohuSpecial.getCookie("beans_mediapop") < 3 && e.wait({
                itemspaceid: 15322,
                form: "mediapop",
                adsrc: 201,
                max_turn: 2,
                order: 5,
                width: 2e3,
                height: 7,
                spec: {
                    time_limit: 2
                }
            }), sohuSpecial.winWidth >= 1130 && e.wait({
                itemspaceid: 15316,
                form: "couplet_new",
                adsrc: 201,
                max_turn: 3,
                order: 4,
                width: 2e3,
                height: 5
            });
            else {
                if (10046e5 == CONFIG.CHANNELID) return;
                10025e5 == CONFIG.CHANNELID ? (e.wait({
                    itemspaceid: 15345,
                    form: "float_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 4
                }), e.wait({
                    itemspaceid: 15321,
                    form: "popup_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 4,
                    width: 2e3,
                    height: 6
                }), sohuSpecial.winWidth >= 1130 && e.wait({
                    itemspaceid: 15316,
                    form: "couplet_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 4,
                    width: 2e3,
                    height: 5
                }), e.wait({
                    itemspaceid: 800166,
                    form: "floatSkin",
                    adsrc: 201,
                    max_turn: 1,
                    order: 1,
                    width: 2e3,
                    height: 8
                }), e.wait({
                    itemspaceid: 800168,
                    form: "shading",
                    adsrc: 201,
                    max_turn: 1,
                    order: 1,
                    width: 80,
                    height: 80
                }), e.wait({
                    itemspaceid: 15318,
                    form: "radius",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 3
                }), sohuSpecial.getCookie("beans_mediapop") < 3 && e.wait({
                    itemspaceid: 15322,
                    form: "mediapop",
                    adsrc: 201,
                    max_turn: 2,
                    order: 5,
                    width: 2e3,
                    height: 7,
                    spec: {
                        time_limit: 2
                    }
                }), sohuSpecial.getCookie("beans_15319") < 3 && e.wait({
                    itemspaceid: 15319,
                    form: "fullFloat",
                    adsrc: 201,
                    max_turn: 1,
                    order: 2,
                    width: 2e3,
                    height: 2
                }), e.wait({
                    itemspaceid: 800130,
                    form: "slidingWin",
                    adsrc: 201,
                    max_turn: 1,
                    order: 5,
                    width: 2e3,
                    height: 9
                })) : 10044e5 == CONFIG.CHANNELID ? (e.wait({
                    itemspaceid: 15345,
                    form: "float_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 4
                }), e.wait({
                    itemspaceid: 15321,
                    form: "popup_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 4,
                    width: 2e3,
                    height: 6
                }), sohuSpecial.winWidth >= 1130 && e.wait({
                    itemspaceid: 15316,
                    form: "couplet_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 4,
                    width: 2e3,
                    height: 5
                }), e.wait({
                    itemspaceid: 800166,
                    form: "floatSkin",
                    adsrc: 201,
                    max_turn: 1,
                    order: 1,
                    width: 2e3,
                    height: 8
                }), e.wait({
                    itemspaceid: 800168,
                    form: "shading",
                    adsrc: 201,
                    max_turn: 1,
                    order: 1,
                    width: 80,
                    height: 80
                }), e.wait({
                    itemspaceid: 15318,
                    form: "radius",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 3
                }), sohuSpecial.getCookie("beans_mediapop") < 3 && e.wait({
                    itemspaceid: 15322,
                    form: "mediapop",
                    adsrc: 201,
                    max_turn: 2,
                    order: 5,
                    width: 2e3,
                    height: 7,
                    spec: {
                        time_limit: 2
                    }
                }), sohuSpecial.getCookie("beans_15319") < 3 && e.wait({
                    itemspaceid: 15319,
                    form: "fullFloat",
                    adsrc: 201,
                    max_turn: 1,
                    order: 2,
                    width: 2e3,
                    height: 2
                }), e.wait({
                    itemspaceid: 800130,
                    form: "slidingWin",
                    adsrc: 201,
                    max_turn: 1,
                    order: 5,
                    width: 2e3,
                    height: 9
                })) : (e.wait({
                    itemspaceid: 800130,
                    form: "slidingWin",
                    adsrc: 201,
                    max_turn: 1,
                    order: 5,
                    width: 2e3,
                    height: 9
                }), sohuSpecial.getCookie("beans_15319") < 3 && e.wait({
                    itemspaceid: 15319,
                    form: "fullFloat",
                    adsrc: 201,
                    max_turn: 1,
                    order: 2,
                    width: 2e3,
                    height: 2
                }), e.wait({
                    itemspaceid: 800168,
                    form: "shading",
                    adsrc: 201,
                    max_turn: 1,
                    order: 1,
                    width: 80,
                    height: 80
                }), e.wait({
                    itemspaceid: 800166,
                    form: "floatSkin",
                    adsrc: 201,
                    max_turn: 1,
                    order: 1,
                    width: 2e3,
                    height: 8
                }), e.wait({
                    itemspaceid: 15318,
                    form: "radius",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 3
                }), e.wait({
                    itemspaceid: 15345,
                    form: "float_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 4
                }), e.wait({
                    itemspaceid: 15346,
                    form: "float_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 4,
                    options: {
                        pos: "right"
                    }
                }), 10018e5 == CONFIG.CHANNELID ? e.wait({
                    itemspaceid: 15321,
                    form: "popup_new",
                    adsrc: 201,
                    max_turn: 2,
                    order: 4,
                    width: 2e3,
                    height: 6
                }) : e.wait({
                    itemspaceid: 15321,
                    form: "popup_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 4,
                    width: 2e3,
                    height: 6
                }), sohuSpecial.getCookie("beans_mediapop") < 3 && e.wait({
                    itemspaceid: 15322,
                    form: "mediapop",
                    adsrc: 201,
                    max_turn: 2,
                    order: 5,
                    width: 2e3,
                    height: 7,
                    spec: {
                        time_limit: 2
                    }
                }), sohuSpecial.winWidth >= 1130 && e.wait({
                    itemspaceid: 15316,
                    form: "couplet_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 4,
                    width: 2e3,
                    height: 5
                }), sohuSpecial.winWidth >= 1024 && e.wait({
                    itemspaceid: 15315,
                    form: "MilkyWay",
                    adsrc: 201,
                    order: 4,
                    width: 2e3,
                    height: 9,
                    max_turn: 1
                }))
            } else "sohu-index" != CONFIG.PAGEID && "home-classic" != CONFIG.PAGEID || (sohuSpecial.getCookie("beans_800135") < 3 && e.wait({
                itemspaceid: 800135,
                form: "loading",
                adsrc: 201,
                max_turn: 1,
                order: 1,
                width: 2e3,
                height: 1
            }), e.wait({
                itemspaceid: 800130,
                form: "slidingWin",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 2e3,
                height: 9
            }), e.wait({
                itemspaceid: 800168,
                form: "shading",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 80,
                height: 80
            }), e.wait({
                itemspaceid: 800166,
                form: "floatSkin",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 2e3,
                height: 8
            }), sohuSpecial.getCookie("beans_15319") < 3 && e.wait({
                itemspaceid: 15319,
                form: "fullFloat",
                adsrc: 201,
                max_turn: 1,
                order: 2,
                width: 2e3,
                height: 2
            }), e.wait({
                itemspaceid: 15323,
                form: "cgdb_new",
                adsrc: 201,
                order: 6,
                width: 2e3,
                height: 9,
                max_turn: 1
            }), e.wait({
                itemspaceid: 15322,
                form: "mediapop",
                adsrc: 201,
                max_turn: 2,
                order: 5,
                width: 2e3,
                height: 7,
                spec: {
                    time_limit: 2
                }
            }), sohuSpecial.winWidth >= 1130 && e.wait({
                itemspaceid: 15316,
                form: "couplet_new",
                adsrc: 201,
                max_turn: 3,
                order: 4,
                width: 2e3,
                height: 5
            }));
            e.start()
        }
    })
} else if ("/test2018/index.shtml" === window.location.pathname) window.CONFIG = {
    PAGEID: newGuid(),
    CHANNELID: ""
}, requirejs.config({
    baseUrl: "//images.sohu.com/bill/s2017/specialbeta/"
}), require(["sjs/matrix/ad/specialspe"], function(e) {
    sohuSpecial.getCookie("beans_15319") < 3 && e.wait({
        itemspaceid: 15319,
        form: "fullFloat",
        adsrc: 201,
        max_turn: 1,
        order: 2,
        width: 2e3,
        height: 2
    }), sohuSpecial.getCookie("beans_15320") < 3 && e.wait({
        itemspaceid: 15320,
        form: "loading",
        adsrc: 201,
        max_turn: 1,
        order: 1,
        width: 2e3,
        height: 1
    }), e.wait({
        itemspaceid: 15321,
        form: "popup_new",
        adsrc: 201,
        max_turn: 2,
        order: 4,
        width: 2e3,
        height: 6
    }), sohuSpecial.getCookie("beans_mediapop") < 3 && e.wait({
        itemspaceid: 15322,
        form: "mediapop",
        adsrc: 201,
        max_turn: 2,
        order: 5,
        width: 2e3,
        height: 7,
        spec: {
            time_limit: 2
        }
    }), e.start()
});
else if ("http://2018.sohu.com/" === window.location.href) window.CONFIG = {
    PAGEID: newGuid(),
    CHANNELID: ""
}, requirejs.config({
    baseUrl: "//images.sohu.com/bill/s2017/specialbeta/"
}), require(["sjs/matrix/ad/specialspe"], function(e) {
    sohuSpecial.getCookie("beans_15319") < 3 && e.wait({
        itemspaceid: 16149,
        form: "fullFloat",
        adsrc: 201,
        max_turn: 1,
        order: 2,
        width: 2e3,
        height: 2
    }), sohuSpecial.getCookie("beans_15320") < 3 && e.wait({
        itemspaceid: 16150,
        form: "loading",
        adsrc: 201,
        max_turn: 1,
        order: 1,
        width: 2e3,
        height: 1
    }), e.wait({
        itemspaceid: 16151,
        form: "popup_new",
        adsrc: 201,
        max_turn: 2,
        order: 4,
        width: 2e3,
        height: 6
    }), sohuSpecial.getCookie("beans_mediapop") < 3 && e.wait({
        itemspaceid: 16152,
        form: "mediapop",
        adsrc: 201,
        max_turn: 2,
        order: 5,
        width: 2e3,
        height: 7,
        spec: {
            time_limit: 2
        }
    }), e.start()
});
else if ("/qiuduitest2018/index.shtml" === window.location.pathname) window.CONFIG = {
    PAGEID: newGuid(),
    CHANNELID: ""
}, requirejs.config({
    baseUrl: "//images.sohu.com/bill/s2017/specialbeta/"
}), require(["sjs/matrix/ad/specialspe"], function(e) {
    sohuSpecial.getCookie("beans_mediapop") < 3 && e.wait({
        itemspaceid: 800457,
        form: "mediapop",
        adsrc: 201,
        max_turn: 2,
        order: 5,
        width: 2e3,
        height: 7,
        spec: {
            time_limit: 2
        }
    }), sohuSpecial.winWidth >= 1130 && e.wait({
        itemspaceid: 15314,
        form: "bigView_new",
        adsrc: 201,
        order: 1,
        width: 2e3,
        height: 8,
        max_turn: 1,
        spec: {
            onBeforeRender: function() {},
            onAfterRender: function() {},
            isCloseBtn: !0
        }
    }), sohuSpecial.getCookie("beans_15319") < 3 && e.wait({
        itemspaceid: 800453,
        form: "fullFloat",
        adsrc: 201,
        max_turn: 1,
        order: 2,
        width: 2e3,
        height: 2
    }), sohuSpecial.getCookie("beans_15320") < 3 && e.wait({
        itemspaceid: 800451,
        form: "loading",
        adsrc: 201,
        max_turn: 1,
        order: 1,
        width: 2e3,
        height: 1
    }), sohuSpecial.winWidth >= 1130 && e.wait({
        itemspaceid: 15316,
        form: "couplet_new",
        adsrc: 201,
        max_turn: 2,
        order: 4,
        width: 2e3,
        height: 5
    }), e.wait({
        itemspaceid: 800449,
        form: "popup_new",
        adsrc: 201,
        max_turn: 1,
        order: 4,
        width: 2e3,
        height: 6
    }), e.wait({
        itemspaceid: 15318,
        form: "radius",
        adsrc: 201,
        max_turn: 1,
        order: 3,
        width: 2e3,
        height: 3
    }), e.wait({
        itemspaceid: 15345,
        form: "float_new",
        adsrc: 201,
        max_turn: 1,
        order: 3,
        width: 2e3,
        height: 4
    }), e.start()
});
else if (sohuSpecial.judgeTeam()) window.CONFIG = {
    PAGEID: newGuid(),
    CHANNELID: ""
}, requirejs.config({
    baseUrl: "//images.sohu.com/bill/s2017/specialbeta/"
}), require(["sjs/matrix/ad/specialspe"], function(e) {
    sohuSpecial.getCookie("beans_mediapop") < 3 && e.wait({
        itemspaceid: 16156,
        form: "mediapop",
        adsrc: 201,
        max_turn: 2,
        order: 5,
        width: 2e3,
        height: 7,
        spec: {
            time_limit: 2
        }
    }), sohuSpecial.winWidth >= 1130 && e.wait({
        itemspaceid: 16157,
        form: "bigView_new",
        adsrc: 201,
        order: 1,
        width: 2e3,
        height: 8,
        max_turn: 1,
        spec: {
            onBeforeRender: function() {},
            onAfterRender: function() {},
            isCloseBtn: !0
        }
    }), sohuSpecial.getCookie("beans_15319") < 3 && e.wait({
        itemspaceid: 16158,
        form: "fullFloat",
        adsrc: 201,
        max_turn: 1,
        order: 2,
        width: 2e3,
        height: 2
    }), sohuSpecial.getCookie("beans_15320") < 3 && e.wait({
        itemspaceid: 16159,
        form: "loading",
        adsrc: 201,
        max_turn: 1,
        order: 1,
        width: 2e3,
        height: 1
    }), sohuSpecial.winWidth >= 1130 && e.wait({
        itemspaceid: 16160,
        form: "couplet_new",
        adsrc: 201,
        max_turn: 2,
        order: 4,
        width: 2e3,
        height: 5
    }), e.wait({
        itemspaceid: 16161,
        form: "popup_new",
        adsrc: 201,
        max_turn: 1,
        order: 4,
        width: 2e3,
        height: 6
    }), e.wait({
        itemspaceid: 16162,
        form: "radius",
        adsrc: 201,
        max_turn: 1,
        order: 3,
        width: 2e3,
        height: 3
    }), e.wait({
        itemspaceid: 16163,
        form: "float_new",
        adsrc: 201,
        max_turn: 1,
        order: 3,
        width: 2e3,
        height: 4
    }), e.start()
});
else if ("/pictest2018/index.shtml" === window.location.pathname) window.CONFIG = {
    PAGEID: newGuid(),
    CHANNELID: ""
}, requirejs.config({
    baseUrl: "//images.sohu.com/bill/s2017/specialbeta/"
}), require(["sjs/matrix/ad/specialspe"], function(e) {
    e.wait({
        itemspaceid: 800459,
        form: "radius",
        adsrc: 201,
        max_turn: 1,
        order: 3,
        width: 2e3,
        height: 3
    }), e.wait({
        itemspaceid: 800458,
        form: "float_new",
        adsrc: 201,
        max_turn: 1,
        order: 3,
        width: 2e3,
        height: 4
    }), sohuSpecial.winWidth >= 1130 && e.wait({
        itemspaceid: 800460,
        form: "couplet_new",
        adsrc: 201,
        max_turn: 2,
        order: 4,
        width: 2e3,
        height: 5
    }), e.start()
});
else if ("/2018pictures/" === window.location.pathname) window.CONFIG = {
    PAGEID: newGuid(),
    CHANNELID: ""
}, requirejs.config({
    baseUrl: "//images.sohu.com/bill/s2017/specialbeta/"
}), require(["sjs/matrix/ad/specialspe"], function(e) {
    e.wait({
        itemspaceid: 16165,
        form: "radius",
        adsrc: 201,
        max_turn: 1,
        order: 3,
        width: 2e3,
        height: 3
    }), e.wait({
        itemspaceid: 16166,
        form: "float_new",
        adsrc: 201,
        max_turn: 1,
        order: 3,
        width: 2e3,
        height: 4
    }), sohuSpecial.winWidth >= 1130 && e.wait({
        itemspaceid: 16167,
        form: "couplet_new",
        adsrc: 201,
        max_turn: 2,
        order: 4,
        width: 2e3,
        height: 5
    }), e.start()
});
else {
    window.CONFIG = {
        PAGEID: null,
        CHANNELID: null,
        noads: null,
        news_id: null,
        news_code: null
    }, window.sohu_mp.ext(function(e) {
        CONFIG.PAGEID = e.get_pgid(), CONFIG.CHANNELID = e.get_news_chn(), CONFIG.news_id = e.news_id, CONFIG.news_code = e.code
    });
    var pageType; - 1 != CONFIG.PAGEID.indexOf("-") ? (pageType = CONFIG.PAGEID.split("-")[1], pageChnl = CONFIG.PAGEID.split("-")[0]) : -1 != CONFIG.PAGEID.indexOf("_") && (pageType = CONFIG.PAGEID.split("_")[1], pageChnl = CONFIG.PAGEID.split("_")[0]), void 0 !== CONFIG.news_code && null !== CONFIG.news_code && $.ajax({
        url: "//v2.sohu.com/public-api/cpcNews/check?id=" + CONFIG.news_id + "&code=" + CONFIG.news_code,
        success: function(e) {
            CONFIG.noads = e
        }
    }), require(["sjs/matrix/ad/specialspe"], function(e) {
        if ("sub" != pageType && "tag" != pageType && 1 != CONFIG.noads) {
            if ("article" == pageType) "news" == pageChnl ? (e.wait({
                itemspaceid: 15325,
                form: "float_new",
                adsrc: 201,
                max_turn: 3,
                order: 3,
                width: 2e3,
                height: 4,
                options: {
                    pos: "left"
                }
            }), sohuSpecial.getCookie("beans_mediapop") < 7 && e.wait({
                itemspaceid: 15326,
                form: "mediapop",
                adsrc: 201,
                max_turn: 6,
                order: 5,
                width: 2e3,
                height: 7,
                spec: {
                    time_limit: 2
                }
            }), sohuSpecial.getCookie("beans_visit_15957fullFloatPage") < 5 && (e.wait({
                itemspaceid: 15957,
                form: "fullFloatPage",
                adsrc: 201,
                max_turn: 1,
                order: 1,
                width: 2e3,
                height: 2
            }), e.wait({
                itemspaceid: 15956,
                form: "cgdbPage",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 2e3,
                height: 9
            }))) : (e.wait({
                itemspaceid: 15325,
                form: "float_new",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 2e3,
                height: 4,
                options: {
                    pos: "left"
                }
            }), sohuSpecial.getCookie("beans_mediapop") < 3 && e.wait({
                itemspaceid: 15326,
                form: "mediapop",
                adsrc: 201,
                max_turn: 2,
                order: 5,
                width: 2e3,
                height: 7
            }));
            else if ("channel" == pageType)
                if (10023e5 == CONFIG.CHANNELID || 1001e6 == CONFIG.CHANNELID) sohuSpecial.getCookie("beans_16325") < 3 && e.wait({
                    itemspaceid: 16325,
                    form: "loading",
                    adsrc: 201,
                    max_turn: 1,
                    order: 1,
                    width: 2e3,
                    height: 1
                }), e.wait({
                    itemspaceid: 15531,
                    form: "slidingWin",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 9
                }), sohuSpecial.getCookie("beans_15319") < 3 && e.wait({
                    itemspaceid: 15319,
                    form: "fullFloat",
                    adsrc: 201,
                    max_turn: 1,
                    order: 2,
                    width: 2e3,
                    height: 2
                }), e.wait({
                    itemspaceid: 15649,
                    form: "shading",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 80,
                    height: 80
                }), e.wait({
                    itemspaceid: 15641,
                    form: "floatSkin",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 8
                }), e.wait({
                    itemspaceid: 15318,
                    form: "radius",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 3
                }), e.wait({
                    itemspaceid: 15345,
                    form: "float_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 4
                }), e.wait({
                    itemspaceid: 15321,
                    form: "popup_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 4,
                    width: 2e3,
                    height: 6
                }), sohuSpecial.getCookie("beans_mediapop") < 3 && e.wait({
                    itemspaceid: 15322,
                    form: "mediapop",
                    adsrc: 201,
                    max_turn: 2,
                    order: 5,
                    width: 2e3,
                    height: 7
                }), sohuSpecial.winWidth >= 1130 && e.wait({
                    itemspaceid: 15316,
                    form: "couplet_new",
                    adsrc: 201,
                    max_turn: 2,
                    order: 4,
                    width: 2e3,
                    height: 5
                });
                else if (10015e5 == CONFIG.CHANNELID || 1003e6 == CONFIG.CHANNELID || 10038e5 == CONFIG.CHANNELID || 10012e5 == CONFIG.CHANNELID || 10013e5 == CONFIG.CHANNELID || 10017e5 == CONFIG.CHANNELID || 10024e5 == CONFIG.CHANNELID || 10019e5 == CONFIG.CHANNELID) e.wait({
                itemspaceid: 15531,
                form: "slidingWin",
                adsrc: 201,
                max_turn: 1,
                order: 5,
                width: 2e3,
                height: 9
            }), sohuSpecial.getCookie("beans_15319") < 3 && e.wait({
                itemspaceid: 15319,
                form: "fullFloat",
                adsrc: 201,
                max_turn: 1,
                order: 2,
                width: 2e3,
                height: 2
            }), e.wait({
                itemspaceid: 15649,
                form: "shading",
                adsrc: 201,
                max_turn: 1,
                order: 1,
                width: 80,
                height: 80
            }), e.wait({
                itemspaceid: 15641,
                form: "floatSkin",
                adsrc: 201,
                max_turn: 1,
                order: 1,
                width: 2e3,
                height: 8
            }), e.wait({
                itemspaceid: 15318,
                form: "radius",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 2e3,
                height: 3
            }), e.wait({
                itemspaceid: 15345,
                form: "float_new",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 2e3,
                height: 4
            }), e.wait({
                itemspaceid: 15321,
                form: "popup_new",
                adsrc: 201,
                max_turn: 1003e6 == CONFIG.CHANNELID ? 1 : 2,
                order: 4,
                width: 2e3,
                height: 6
            }), sohuSpecial.getCookie("beans_mediapop") < 3 && e.wait({
                itemspaceid: 15322,
                form: "mediapop",
                adsrc: 201,
                max_turn: 2,
                order: 5,
                width: 2e3,
                height: 7
            }), sohuSpecial.winWidth >= 1130 && e.wait({
                itemspaceid: 15316,
                form: "couplet_new",
                adsrc: 201,
                max_turn: 1003e6 == CONFIG.CHANNELID ? 1 : 2,
                order: 4,
                width: 2e3,
                height: 5
            });
            else if (10008e5 == CONFIG.CHANNELID) sohuSpecial.getCookie("beans_15319") < 3 && e.wait({
                itemspaceid: 15319,
                form: "fullFloat",
                adsrc: 201,
                max_turn: 1,
                order: 2,
                width: 2e3,
                height: 2
            }), e.wait({
                itemspaceid: 15641,
                form: "floatSkin",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 2e3,
                height: 8
            }), e.wait({
                itemspaceid: 15345,
                form: "float_new",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 2e3,
                height: 4
            }), e.wait({
                itemspaceid: 15321,
                form: "popup_new",
                adsrc: 201,
                max_turn: 2,
                order: 4,
                width: 2e3,
                height: 6
            }), e.wait({
                itemspaceid: 15531,
                form: "slidingWin",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 2e3,
                height: 9
            }), e.wait({
                itemspaceid: 15318,
                form: "radius",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 2e3,
                height: 3
            }), sohuSpecial.getCookie("beans_mediapop") < 3 && e.wait({
                itemspaceid: 15322,
                form: "mediapop",
                adsrc: 201,
                max_turn: 2,
                order: 5,
                width: 2e3,
                height: 7,
                spec: {
                    time_limit: 2
                }
            }), sohuSpecial.winWidth >= 1130 && e.wait({
                itemspaceid: 15316,
                form: "couplet_new",
                adsrc: 201,
                max_turn: 3,
                order: 4,
                width: 2e3,
                height: 5
            });
            else {
                if (10046e5 == CONFIG.CHANNELID) return;
                10025e5 == CONFIG.CHANNELID ? (e.wait({
                    itemspaceid: 15345,
                    form: "float_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 4
                }), e.wait({
                    itemspaceid: 15321,
                    form: "popup_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 4,
                    width: 2e3,
                    height: 6
                }), sohuSpecial.winWidth >= 1130 && e.wait({
                    itemspaceid: 15316,
                    form: "couplet_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 4,
                    width: 2e3,
                    height: 5
                }), e.wait({
                    itemspaceid: 15641,
                    form: "floatSkin",
                    adsrc: 201,
                    max_turn: 1,
                    order: 1,
                    width: 2e3,
                    height: 8
                }), e.wait({
                    itemspaceid: 15649,
                    form: "shading",
                    adsrc: 201,
                    max_turn: 1,
                    order: 1,
                    width: 80,
                    height: 80
                }), e.wait({
                    itemspaceid: 15318,
                    form: "radius",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 3
                }), sohuSpecial.getCookie("beans_mediapop") < 3 && e.wait({
                    itemspaceid: 15322,
                    form: "mediapop",
                    adsrc: 201,
                    max_turn: 2,
                    order: 5,
                    width: 2e3,
                    height: 7,
                    spec: {
                        time_limit: 2
                    }
                }), sohuSpecial.getCookie("beans_15319") < 3 && e.wait({
                    itemspaceid: 15319,
                    form: "fullFloat",
                    adsrc: 201,
                    max_turn: 1,
                    order: 2,
                    width: 2e3,
                    height: 2
                }), e.wait({
                    itemspaceid: 15531,
                    form: "slidingWin",
                    adsrc: 201,
                    max_turn: 1,
                    order: 5,
                    width: 2e3,
                    height: 9
                })) : 10044e5 == CONFIG.CHANNELID ? (e.wait({
                    itemspaceid: 15345,
                    form: "float_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 4
                }), e.wait({
                    itemspaceid: 15321,
                    form: "popup_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 4,
                    width: 2e3,
                    height: 6
                }), sohuSpecial.winWidth >= 1130 && e.wait({
                    itemspaceid: 15316,
                    form: "couplet_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 4,
                    width: 2e3,
                    height: 5
                }), e.wait({
                    itemspaceid: 15641,
                    form: "floatSkin",
                    adsrc: 201,
                    max_turn: 1,
                    order: 1,
                    width: 2e3,
                    height: 8
                }), e.wait({
                    itemspaceid: 15649,
                    form: "shading",
                    adsrc: 201,
                    max_turn: 1,
                    order: 1,
                    width: 80,
                    height: 80
                }), e.wait({
                    itemspaceid: 15318,
                    form: "radius",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 3
                }), sohuSpecial.getCookie("beans_mediapop") < 3 && e.wait({
                    itemspaceid: 15322,
                    form: "mediapop",
                    adsrc: 201,
                    max_turn: 2,
                    order: 5,
                    width: 2e3,
                    height: 7,
                    spec: {
                        time_limit: 2
                    }
                }), sohuSpecial.getCookie("beans_15319") < 3 && e.wait({
                    itemspaceid: 15319,
                    form: "fullFloat",
                    adsrc: 201,
                    max_turn: 1,
                    order: 2,
                    width: 2e3,
                    height: 2
                }), e.wait({
                    itemspaceid: 15531,
                    form: "slidingWin",
                    adsrc: 201,
                    max_turn: 1,
                    order: 5,
                    width: 2e3,
                    height: 9
                })) : (e.wait({
                    itemspaceid: 15531,
                    form: "slidingWin",
                    adsrc: 201,
                    max_turn: 1,
                    order: 5,
                    width: 2e3,
                    height: 9
                }), sohuSpecial.getCookie("beans_15319") < 3 && e.wait({
                    itemspaceid: 15319,
                    form: "fullFloat",
                    adsrc: 201,
                    max_turn: 1,
                    order: 2,
                    width: 2e3,
                    height: 2
                }), e.wait({
                    itemspaceid: 15649,
                    form: "shading",
                    adsrc: 201,
                    max_turn: 1,
                    order: 1,
                    width: 80,
                    height: 80
                }), e.wait({
                    itemspaceid: 15641,
                    form: "floatSkin",
                    adsrc: 201,
                    max_turn: 1,
                    order: 1,
                    width: 2e3,
                    height: 8
                }), e.wait({
                    itemspaceid: 15318,
                    form: "radius",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 3
                }), e.wait({
                    itemspaceid: 15345,
                    form: "float_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 4
                }), e.wait({
                    itemspaceid: 15346,
                    form: "float_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 3,
                    width: 2e3,
                    height: 4,
                    options: {
                        pos: "right"
                    }
                }), 10018e5 == CONFIG.CHANNELID ? e.wait({
                    itemspaceid: 15321,
                    form: "popup_new",
                    adsrc: 201,
                    max_turn: 2,
                    order: 4,
                    width: 2e3,
                    height: 6
                }) : e.wait({
                    itemspaceid: 15321,
                    form: "popup_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 4,
                    width: 2e3,
                    height: 6
                }), sohuSpecial.getCookie("beans_mediapop") < 3 && e.wait({
                    itemspaceid: 15322,
                    form: "mediapop",
                    adsrc: 201,
                    max_turn: 2,
                    order: 5,
                    width: 2e3,
                    height: 7,
                    spec: {
                        time_limit: 2
                    }
                }), sohuSpecial.winWidth >= 1130 && e.wait({
                    itemspaceid: 15316,
                    form: "couplet_new",
                    adsrc: 201,
                    max_turn: 1,
                    order: 4,
                    width: 2e3,
                    height: 5
                }), sohuSpecial.winWidth >= 1024 && e.wait({
                    itemspaceid: 15315,
                    form: "MilkyWay",
                    adsrc: 201,
                    order: 4,
                    width: 2e3,
                    height: 9,
                    max_turn: 1
                }))
            } else "sohu-index" != CONFIG.PAGEID && "home-classic" != CONFIG.PAGEID || (sohuSpecial.getCookie("beans_15320") < 3 && e.wait({
                itemspaceid: 15320,
                form: "loading",
                adsrc: 201,
                max_turn: 1,
                order: 1,
                width: 2e3,
                height: 1
            }), e.wait({
                itemspaceid: 15322,
                form: "mediapop",
                adsrc: 201,
                max_turn: 2,
                order: 5,
                width: 2e3,
                height: 7,
                spec: {
                    time_limit: 2
                }
            }), e.wait({
                itemspaceid: 15531,
                form: "slidingWin",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 2e3,
                height: 9
            }), e.wait({
                itemspaceid: 15649,
                form: "shading",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 80,
                height: 80
            }), e.wait({
                itemspaceid: 15641,
                form: "floatSkin",
                adsrc: 201,
                max_turn: 1,
                order: 3,
                width: 2e3,
                height: 8
            }), sohuSpecial.getCookie("beans_15319") < 3 && e.wait({
                itemspaceid: 15319,
                form: "fullFloat",
                adsrc: 201,
                max_turn: 1,
                order: 2,
                width: 2e3,
                height: 2
            }), e.wait({
                itemspaceid: 15323,
                form: "cgdb_new",
                adsrc: 201,
                order: 6,
                width: 2e3,
                height: 9,
                max_turn: 1
            }), sohuSpecial.winWidth >= 1130 && e.wait({
                itemspaceid: 15316,
                form: "couplet_new",
                adsrc: 201,
                max_turn: 3,
                order: 4,
                width: 2e3,
                height: 5
            }));
            e.start()
        }
    })
}
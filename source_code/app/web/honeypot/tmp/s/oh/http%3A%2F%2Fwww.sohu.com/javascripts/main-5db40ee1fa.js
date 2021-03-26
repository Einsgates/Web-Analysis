!function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return e[n].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var i={};t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){i(12),function(e){try{window.console=i(11)}catch(t){}try{e.sohu_mp={env:i(13),article:i(14),channel:i(128),tag:i(136),subject:i(138),ext:i(127).ext,404:i(139),plugin:i(134),sohu_index:i(141),plugin_dev:i(153),sohu_idnex_v3:i(154),news_channel:i(237),pic_collections:i(267)}}catch(t){throw console.log("初始化代码错误"),t}}(window)},,,function(e,t,i){var n=i(4),s=i(5),a=i(7);""==document.cookie&&a.set("itssohu","true",{domain:".sohu.com"});var o=new SohuPassport({appid:116005}),r=n.extend({init:function(){this.urls={user_info:"//v2.sohu.com/user/info/web",get_captcha:"//passport.sohu.com/apiv2/picture_captcha?userid=",user_new_comment:"/user/newComments/count"}},fetch:function(){var e=this;this._fetching||(this._fetching=!0,$.ajax({dataType:"jsonp",type:"get",url:this.urls.user_info}).done(function(t){e._fetching=!1;try{t?e.trigger("get:userInfo",{nick:t.userName,icon:t.avatar}):e.trigger("get:userInfo",{})}catch(i){e.trigger("error")}}).fail(function(){e.trigger("error"),e._fetching=!1}))},userLogin:function(e){console.log(e),o.login({success:e.success,error:e.error,params:{userid:e.userid,password:e.password,captcha:e.captcha,persistentCookie:e.keep}})},userCaptcha:function(){return o.getLoginPicture()},mobileLogin:function(e){console.log("手机号登录",e),o.mobileLogin({success:e.success,error:e.error,params:{mobile:e.mobile,smcode:e.smcode,persistentCookie:e.keep}})},mobileCaptcha:function(){return o.getPhonePicture()},mobileSignInCaptcha:function(e){console.log("手机号登录验证码",e),o.getSignInCaptcha({success:e.success,error:e.error,params:{mobile:e.mobile,way:e.way,captcha:e.captcha}})},logout:function(e){s.remove("userinfo"),o.logout({success:e.success,error:e.error})},getNewCommentsCount:function(){var e=this;$.ajax({dataType:"jsonp",type:"get",url:"//v2.sohu.com"+this.urls.user_new_comment}).done(function(t){"number"==typeof t&&e.trigger("get:new_comment_count",t)}).fail(function(){e.trigger("error")})},getThirdLoginUrl:function(e){return o.getThirdLoginUrl({provider:e.provider,ru:e.ru})},getBindPhoneCaptcha:function(e){console.log("第三方绑定手机验证码",e),o.getBindPhoneCaptcha({success:e.success,error:e.error,params:{mobile:e.mobile,way:e.way}})},bindPhone:function(e){console.log("第三方绑定手机",e),o.bindPhone({success:e.success,error:e.error,params:{mobile:e.mobile,smcode:e.smcode,ru:e.ru}})},isLogin:function(){var e=a.get("ppinf");return console.log(e?"已登录":"未登录"),!!e},isOkey:function(){var e=a.get("ppok"),t=a.get("ppinf");return!(!e||t)},getCaptcha:function(e,t){var i=e&&e.user_id;return this.urls.get_captcha+i},getSpInstance:function(){return o}}),c=new r;e.exports=c},function(e,t){var i=function(){this.url="",this._ev_callback={},this.init.apply(this,arguments)};i.prototype={init:function(){},fetch:function(e){var t=e&&e.data,i=e&&e.success||function(e){this.attrs=e,s.trigger("sync",this.attrs)},n=/\/\//g.test(this.url)?this.url:"//v2.sohu.com/public-api/"+this.url,s=this;$.ajax({url:n,data:t,method:e.method||"GET",dataType:e.dataType||"jsonp",contentType:e.contentType||"",success:i,error:function(){s.trigger("error",arguments)}})},on:function(e,t){this._ev_callback[e]=this._ev_callback[e]||[],this._ev_callback[e].push({fn:t})},one:function(e,t){this._ev_callback[e]=this._ev_callback[e]||[],this._ev_callback[e].push({fn:t,one:!0})},trigger:function(e,t){var i=this,n=[];this._ev_callback[e]&&this._ev_callback[e].forEach(function(e){e.one&&n.push(e.fn),e.fn&&e.fn.call(i,t)}),n&&n.forEach(function(t){i.off(e,t)})},off:function(e,t){this._ev_callback[e]=this._ev_callback[e]||[];var i=-1;this._ev_callback[e].forEach(function(e,n){e.fn===t&&(i=n)}),i>=0&&this._ev_callback[e].splice(i,1)}},i.extend=function(e){var t=this,i=function(){return t.apply(this,arguments)};return $.extend(i,t),i.prototype=new t,$.extend(i.prototype,e),i.__super__=t.prototype,i},e.exports=i},function(e,t,i){var n=i(6),s=i(7),a={set:function(e,t){if(n.isSupportStorage){e=encodeURIComponent(String(e));try{t=JSON.stringify(t)}catch(i){return}t=encodeURIComponent(String(t)),localStorage.setItem(e,t)}else s.set(e,t)},get:function(e){if(n.isSupportStorage){e=encodeURIComponent(String(e));var t=localStorage.getItem(e);t=decodeURIComponent(t);try{t=JSON.parse(t)}catch(i){}return t}if(s.get(e)!=undefined)return JSON.parse(s.get(e))},remove:function(e){n.isSupportStorage?(e=encodeURIComponent(String(e)),localStorage.removeItem(e)):s.remove(e)}};try{e.exports=a}catch(o){console.log(o),e.exports={}}},function(e,t){var i={detectTransform:function(){return"transform"in document.createElement("div").style},detectWebP:function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0==e.toDataURL("image/webp").indexOf("data:image/webp")},detectStorage:function(){try{return localStorage.setItem("test","test"),localStorage.removeItem("test"),!0}catch(e){return!1}}};e.exports={isSupportTransform:i.detectTransform,isSupportWebp:i.detectWebP(),isSupportStorage:i.detectStorage()}},function(e,t){try{e.exports=function(){var e={},t=function(t,i,n){var s;if("undefined"!=typeof document){if(arguments.length>1){if(n=$.extend({path:"/"},e,n),"number"==typeof n.expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*n.expires),n.expires=a}try{s=JSON.stringify(i),/^[\{\[]/.test(s)&&(i=s)}catch(h){}return i=encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape),document.cookie=[t,"=",i,n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}t||(s={});for(var o=document.cookie?document.cookie.split("; "):[],r=0;r<o.length;r++){var c=o[r].split("="),l=c.slice(1).join("=");'"'===l.charAt(0)&&(l=l.slice(1,-1));try{var d=c[0].replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent);if(l=l.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent),this.json)try{l=JSON.parse(l)}catch(h){}if(t===d){s=l;break}t||(s[d]=l)}catch(h){}}return s}};return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults=e,t.remove=function(e,i){t(e,"",$.extend(i,{expires:-1}))},t}()}catch(i){console.log(i),e.exports={}}},,,,function(e,t){for(var i=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],s=n.length,a={};s--;)method=n[s],a[method]||(a[method]=i);e.exports=a},function(e,t){},function(e,t){e.exports="prod"},function(e,t,i){var n=(i(15),i(17)),s=(i(20),i(22)),a=i(23),o=(i(29),i(31)),r=i(33),c=(i(35),i(25),i(36)),l=i(24),d=i(42),h=i(26),u=i(16),p=i(43),f=i(44),m=i(48),g=i(51),o=i(31),_=i(52),v=i(53),w=i(59),b=i(62),x=i(66),y=(i(67),i(70)),k=i(110),I=i(71),P=i(112),r=i(33),C=i(114),T=i(118),E=i(121),S=i(123),z=i(124),j=i(125);i(30);i(11);var A=i(127);e.exports=function(e){A.set(e),new m({el:$("#search"),d_val:$("#news-recommend-nav").find("ul li").eq(1).text(),scene:"ARTICLE"}),new n({el:"#user-info",media_id:e.media_id});var t=new a({el:"#main-news",page_no:0,new_window:!1,model:function(){return new s({sceneId:e.channel_id,scene:"CHANNEL"})}(),data:{channel_id:e.channel_id}});t.next(),new o({el:"#share"}),new c({el:"#head-login",mark:"article",type:"other"}),new b({el:"#sogou-words",model:new x({title:e.title.replace(/\s+/g,""),content:$(".article").text().replace(/\s+/g,""),url:window.location.href})});var i=new f({el:"#float-btn",data:{refreshable:!1,home:!0,comment:!1}});i.on("refresh",function(){window.location.reload()}),i.on("back",function(){window.open(e.channel_url,"_self")});var D=$("#news-time");$("#news-time").html(new l(parseInt(D.data("val"))).format("yyyy-MM-dd HH:mm"));var N=new d({news_id:e.news_id});N.on("sync",function(e){var t=0;for(var i in e)"newsId"!=i&&(t+=e[i]);$("[data-role='pv']").html(new u(t).format())}),N.fetch(),new w({el:"#uninterested",data:{opts:e}});var V=new g({el:"#fixed-view",offset_top:0});new _({el:$("#article-do"),rel_el:$("#comment_area")}),new v({el:"#pages-fun"});var L=new E({el:"#recommend-writer",model:new S({scene:"CHANNEL",sceneId:e.channel_id})}),q=new j({el:$("#hot-news"),model:new z({scene:"CHANNEL",sceneId:e.channel_id})});if(!p.isUrlParamExist("_trans_","060005_xxhd")){var M=[];t.on("news:add",function(t){1!=t&&fix_ad&&fix_ad.reset({news_id:e.news_id,channel_id:e.channel_id,index:5})}),new y(t,"feeds",{news_id:e.news_id,channel_id:e.channel_id}),$("#nav_button").size()>0&&M.push(I($("#nav_button"),"nav_button",{news_id:e.news_id,channel_id:e.channel_id})),$("#god_1").size()>0&&M.push(I($("#god_1"),"side_1",{news_id:e.news_id,channel_id:e.channel_id})),$("#god_2").size()>0&&M.push(I($("#god_2"),"side_2",{news_id:e.news_id,channel_id:e.channel_id})),$("#god_3").size()>0&&M.push(I($("#god_3"),"side_3",{news_id:e.news_id,channel_id:e.channel_id})),$("#god_4").size()>0&&I($("#god_4"),"side_4",{news_id:e.news_id,channel_id:e.channel_id}),$("#god_fix_1").size()>0&&(fix_ad=I($("#god_fix_1"),"side_fix",{news_id:e.news_id,channel_id:e.channel_id,empty_ad:function(){}}),M.push(fix_ad)),q.on("rendered",function(){I($("#hot-news .pic-txt:last"),"recommends",{channel_id:e.channel_id,news_id:e.news_id,empty_ad:function(){this.$el.show()}})}),L.on("rendered",function(){I($("#recommend-writer .pic-txt:last"),"writer",{channel_id:e.channel_id,news_id:e.news_id,empty_ad:function(){this.$el.show()}})}),$("#god_bottom_banner").size()>0&&I($("#god_bottom_banner"),"article_bottom",{news_id:e.news_id,channel_id:e.channel_id})}V.on("fix_change",function(e){e.fixed?$("#god_fix_container").show().css({left:e.o.left_dis+"px",top:e.o.$el_clone.height()+e.o.$el_clone.position().top}):$("#god_fix_container").hide()}),V.on("resize",function(e){$("#god_fix_container").is(":visible")&&$("#god_fix_container").css({left:e.o.left_dis+"px"})});new P({loc:1});new k;var O=$('[data-role="channelLink"]');if(""==O.attr("href")&&O.attr("target","_self").attr("href","javascript:void(0)"),"0"!==e.cms_id){var U=new h({news_ids:[e.cms_id]||[e.id]});U.one("sync",function(t){$('.article-do [data-role="comment-count"]').html(t.result[e.cms_id].comments)}),U.fetch()}new r({el:$("#news-recommend-nav")}),e.mpNewsExt&&e.mpNewsExt.modelId&&"null"!==e.mpNewsExt.modelId&&e.mpNewsExt.modelId;C.load({type:"article",channel_id:e.channel_id,args:{news_ids:e.news_id,ext_data:{modelId:"0"}}}),C.load({type:"article",channel_id:"1",args:{media_id:e.media_id,cms_id:parseInt(e.cms_id)||"mp_"+e.news_id,title:e.title.replace(/\s+/g,"")}}),new T}},function(e,t,i){var n=i(4),s=(i(16),{});e.exports=n.extend({init:function(e){this.media_id=e.media_id},fetch:function(){if(s[this.passport])return void this.trigger("sync",s[this.passport]);if(!this._fetching){var e=this;this.url="//v2.sohu.com/stat/medias/"+this.media_id,this._fetching=!0,n.prototype.fetch.call(this,{success:function(t,i){e._fetching=!1;try{var t=t[0],n=0;for(var s in t)/pv|ev/gi.test(s)&&(n+=t[s]);e.trigger("sync",n)}catch(a){e.trigger("error")}},error:function(){e._fetching=!1}})}}})},function(e,t){var i=function(e){var t=parseInt(e)||0;this.number=t};i.prototype={format:function(){return this.number<=0?"0":this.number<1e4?this.number.toString():this.number<1e5?(this.number/1e4).toFixed(1).replace(/\.?0*$/gi,"")+"万":this.number<=1e8?(this.number/1e4).toFixed(0)+"万":this.number<1e9?(this.number/1e8).toFixed(1).replace(/\.?0*$/gi,"")+"亿":(this.number/1e8).toFixed(0)+"亿"}},e.exports=i},function(e,t,i){var n=(i(18),i(16)),s=i(15);e.exports=Backbone.View.extend({template:_.template(i(19)),data:{info:{}},events:{"click .user-intro-show":"showAll","click .user-intro-hide":"collapse"},model:null,render:function(){this.$el.html(this.template(this.data))},initialize:function(e){var t=this;this.model=new s({media_id:e.media_id}),t.fixItem()},fixItem:function(e){var t=this.$el.find("[data-role='info-join-time']"),i=this.$el.find("[data-role='info-article-num']"),s=this.$el.find("[data-role='info-read-num']"),a=new Date(parseInt(t.attr("data-val"))),o=a.getFullYear()+"年"+(a.getMonth()+1)+"月"+a.getDate()+"日";t.find("span").text(o),i.find("em").text(new n(i.attr("data-value")).format()),this.model.on("sync",function(e){s.find("em").text(new n(e).format())}),this.model.fetch()},showAll:function(e){this.$el.find("[data-role='full-desp']").show(),this.$el.find("[data-role='shorted-desp']").hide(),$(e.currentTarget).hide(),this.$el.find(".user-intro-hide").show(),e.preventDefault()},collapse:function(e){this.$el.find("[data-role='full-desp']").hide(),this.$el.find("[data-role='shorted-desp']").show(),$(e.currentTarget).hide(),this.$el.find(".user-intro-show").show(),e.preventDefault()}})},function(e,t){var i=/[A-Z|0-9|\u4e00-\u9fa5|\uFF00-\uFFFF|\u3000|\x00-\xff|\u2014]/g,n=function(e){for(var t=0,i=e.length,n=-1,s=0;s<i;s++)n=e.charCodeAt(s),t+=n>=0&&n<=128?1:2;return t};e.exports={subString:function(e,t){if(!e)return e;var n=e.replace(i,"**"),s=2*t;if(n.length<=s)return e;for(var a=[],o=0,r=0;o<s&&r<e.length;)a.push(e[r]),r++,/[\u4e00-\u9fa5|\uFF00-\uFFFF|A-Z|0-9|\u3000|\x00-\xff|\u2014]/.test(e[r])?o+=2:i.test(e[r])?o+=2:o++;return a.join("")+"..."},getSubString:function(e,t){if(!e)return e;var i=2*t;if(n(e)<=i)return e;for(var s=[],a=0,o=0;a<i&&o<e.length;){s.push(e[o]),o++;var r=e.charCodeAt(a);a+=r>=0&&r<=128?1:2}return s.join("")+"..."}}},function(e,t){e.exports='\x3c!--字段？？规则？？--\x3e\n<div class="user-pic"><a href="<%=info.weiboUrl%>" target="_blank"><img src="<%=info.avatorUrl%>" alt=""></a></div>\n<h4>\n    <a href="<%=info.weiboUrl%>" target="_blank">\n        <%=info.username%>\n    </a>\n</h4>\n<dl class="user-num">\n    <dd>文章：<span class="value"><em class="num"><%=info.totalNewsCnt_str%></em></span></dd>\n    <dd>阅读：<span class="value"><em class="num"><%=info.totalPv_str%></span></dd>\n</dl>\n<div class="user-intro">\n    <p>\n        <em class="desp"><%=info.fixed_desp%></em>\n        <a href="#" class="user-intro-show btn">展开<em class="icon-angle-up"></em></a>\n        <a href="#" class="user-intro-hide btn">隐藏<em class="icon-angle-up "></em></a>\n    </p>\n</div>\n<div class="user-join">\n    <%=info.create_time%>加入搜狐自媒体</div>\n<div class="user-more"><a href="<%=info.weiboUrl%>" target="_blank">查看TA的更多文章&gt;&gt;</a></div>'},function(e,t,i){var n=window.location.protocol||"http",s=n+"//changyan.sohu.com/upload/changyan.js",a=i(21).changyan_key,o=i(21).changyan_conf;e.exports=Backbone.View.extend({initialize:function(e){this.skin=e.skin,window._config={sohuUIType:1,categoryId:"1",pageSize:10,skin:this.skin},this.render()},render:function(){$.getScript(s,function(){window.changyan.api.config({appid:a,conf:o})})}})},function(e,t){var i=window.location.protocol||"http:";e.exports={changyan_key:"cyqemw6s1",changyan_conf:"prod_54aaa410c404b5eca1efa2bb0bae7f64",counter_server:i+"//pv.sohu.com",ad_gtr_server:i+"//s.go.sohu.com/"}},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.scene=e&&e.scene||"HOMEPAGE",this.sceneId=e&&e.sceneId||0},fetch:function(e){this.page=e&&e.page_no||1,this.size=e&&e.size||20,this.url="feed?scene="+this.scene+"&sceneId="+this.sceneId+"&page="+this.page+"&size="+this.size;var t=this;n.prototype.fetch.call(this,{success:function(e,i){try{t.trigger("sync",e)}catch(n){t.trigger("error",n)}},error:function(e){t.trigger("error",e)}})}})},function(e,t,i){var n=i(24),s=i(25),a=i(26),o=i(18),r=i(16);e.exports=Backbone.View.extend({template:_.template(i(27)),items_template:_.template(i(28)),events:{"mousedown [data-role='news-item'] A":"set_target"},new_window:!0,set_target:function(e){"A"==e.currentTarget.tagName&&$(e.currentTarget).attr("target",this.new_window?"_blank":"_self")},set_loading:function(e){this.loading=e,this.finished&&this.$el.find('[data-role="bottom-loading"]').hide()},set_finish:function(e){this.finished=e,this.finished?this.$el.find('[data-role="finished"]').show():this.$el.find('[data-role="finished"]').hide()},user_defalut_img:"//statics.itc.cn/web/static/images/pic/default_user_img.png",api_error:!1,loading:!1,top_loading:!1,finished:!1,has_new:!1,page_size:20,page_no:1,model:null,sub_id:0,news_count:0,next:function(){var e=this;this.set_loading(!0),this.page_no++,this.model&&(this.model.one("sync",function(t){(!t||t.length<=0)&&e.set_finish(!0),e.set_loading(!1),"CATEGORY"==e.model.scene?t.forEach(function(t){t.loc=2,t.cate_id=e.model.sceneId}):"TAG"==e.model.scene?t.forEach(function(t){t.loc=4,t.tag_id=e.model.sceneId}):t.forEach(function(e){e.loc=1,e.cate_id=""}),e.render_article(t),e.$nextTick(function(){e.read_comment_count()})}),this.model.fetch({page_no:e.page_no,page_size:e.page_size}))},$nextTick:function(e){setTimeout(e,100)},render:function(){this.$el.html(this.template()),this.$el.find('[data-role="slot"]').replaceWith(this.slot);var e=[];this.$el.find("[data-media-id]").each(function(){e.push($(this).data("mediaId"))}),this.cdn_media=e,window.sohuSpm&&"function"==typeof window.sohuSpm.domDidChange&&window.sohuSpm.domDidChange()},render_article:function(e){var e=this.fixed_items(e),t=this.items_template({items:e});this.$el.find(".news-wrapper").append(t),this.news_count=this.$el.find(".news-wrapper").children().length,this.trigger("news:add",this.page_no,this),window.sohuSpm&&"function"==typeof window.sohuSpm.domDidChange&&window.sohuSpm.domDidChange()},read_comment_count:function(){var e=[],t=this;this.$el.find('[data-role="comment-count"]').each(function(){var t=$(this).data("cmsid")+"|mp_"+$(this).data("id");$(this).attr("data-role","waiting-comment-count"),e.push(t)});var i=new a({news_ids:e});i.one("sync",function(e){for(var i in e.result){var n=new r(e.result[i].parts).format();0==parseInt(n)&&(n="&nbsp;"),i.indexOf("mp_")>-1?$(t.$el).find("[data-role='waiting-comment-count'][data-id='"+i.replace("mp_","")+"']").html(n).attr("data-role",""):$(t.$el).find("[data-role='waiting-comment-count'][data-cmsid='"+i+"']").html(n).attr("data-role","")}}),i.fetch()},fixed_items:function(e){var t=this;return e.forEach(function(e){if(e.fixed_time=new n(e.publicTime).fixTime(),e.title=e.title.replace(/&amp;/g,"&"),e.picUrl?e.title=o.subString(e.title,40):e.title=o.subString(e.title,32),e.authorPic?e.picUrl=e.picUrl.replace(/\i\.mp\.itc\.cn/g,"i.mp.itc.cn/c_zoom,w_160,h_107"):e.authorPic=t.user_defalut_img,e.images.length>0){var i=[];e.images.forEach(function(e){i.push(e.replace(/\i\.mp\.itc\.cn/g,"i.mp.itc.cn/c_zoom,w_160,h_107"))}),e.images=i}e.cmsId||(e.cmsId=e.id),e.path=s.news(e)}),e},initialize:function(e){this.page_no=e.page_no!==undefined?e.page_no:this.page_no,this.page_size=e.page_size!==undefined?e.page_size:this.page_size;var t=this;this.model=e.model,this.role=e.role||"",this.items_template=_.template(i(28)),this.new_window=e.new_window!==undefined?e.new_window:this.new_window,this.slot=this.$el.html(),this.render(),this.read_comment_count(),this.$el.find('[data-role="time"]').each(function(){this.innerText=new n(parseInt($(this).data("val"))).fixTime()}),this.model.on("error",function(e){t.next(),console.log(e)});var s;$(window).on("scroll",function(e){s&&clearTimeout(s),s=setTimeout(function(){if(!t.loading&&!t.finished){var e=$(t.$el).find('[data-role="bottom-loading"]').offset(),i=e?e.top:0,n=$(this).scrollTop(),s=$(window).height();i=i>s?i:s,n+s>=i-50&&t.next()}},10)})}})},function(e,t){var i=function(e){this.time=new Date(e)},n=function(e){return e.toString().length<2?"0"+e:e};i.prototype={fromNow:function(){var e=new Date;return e-this.time<=6e5?"刚刚":e-this.time<=36e5?Math.round((e-this.time)/60/1e3)+"分钟前":e-this.time<=864e5?Math.round((e-this.time)/60/60/1e3)+"小时前":e.getFullYear()==this.time.getFullYear()?n(this.time.getMonth()+1)+"-"+n(this.time.getDate())+" "+n(this.time.getHours())+":"+n(this.time.getMinutes()):this.time.getFullYear()+"-"+n(this.time.getMonth()+1)+"-"+n(this.time.getDate())},format:function(e){return e.replace("yyyy",this.time.getFullYear()).replace("MM",n(this.time.getMonth()+1)).replace("dd",n(this.time.getDate())).replace("HH",n(this.time.getHours())).replace("mm",n(this.time.getMinutes()))},fixTime:function(){var e=new Date;if(e.getFullYear()==this.time.getFullYear()){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),i=new Date(this.time.getFullYear(),this.time.getMonth(),this.time.getDate());return t-i==0?"今天 "+n(this.time.getHours())+":"+n(this.time.getMinutes()):t-i<=864e5?"昨天 "+n(this.time.getHours())+":"+n(this.time.getMinutes()):this.fromNow()}return this.fromNow()}},e.exports=i},function(e,t){var i={42:"//game.sohu.com",23:"//fashion.sohu.com",15:"//business.sohu.com",19:"//soyule.sohu.com",17:"//mt.sohu.com/beta/sports",18:"//mt.sohu.com/beta/auto",30:"//it.sohu.com",41:"//acg.sohu.com",12:"//cul.sohu.com",13:"//history.sohu.com",25:"//learning.sohu.com",27:"//astro.sohu.com",45:"//fun.sohu.com",44:"//pets.sohu.com",43:"//view.sohu.com",28:"//chihe.sohu.com",29:"//travel.sohu.com",24:"//health.sohu.com",8:"//news.sohu.com",10:"//mil.sohu.com"};e.exports={news:function(e){var t="";return e.scm&&(t="?scm="+e.scm),"//www.sohu.com/a/"+e.id+"_"+e.authorId+t},tag:function(e){return"//mt.sohu.com/tags/"+e+".shtml"},channel:function(e){return i[e]},sub:function(e,t){return 0==i[e].indexOf("//mt.sohu.com")?"/"+i[e]+"/"+t+"/index.shtml":"/"+i[e]+"/"+t},subject:function(e){return"//mt.sohu.com/subject/"+e+".shtml"}}},function(e,t,i){var n=i(4),s=i(21).changyan_key,a=window.location.protocol||"http";e.exports=n.extend({init:function(e){this.news_ids=e.news_ids},fetch:function(){if(this.news_ids&&!(this.news_ids.length<=0)){var e=this;this.url=a+"//apiv2.sohu.com/api/comment/count?client_id="+s+"&topic_source_id="+this.news_ids.join(",")+"&callback=?",$.ajax({url:this.url,dataType:"jsonp",success:function(t){e.trigger("sync",t.jsonObject)},error:function(){e.trigger("error")}})}}})},function(e,t){e.exports='<div class="clear">\n    <div style="display:none" data-role="top-loading" class="more-load top-load top_loading">\n        <a href="javascript:void(0)">刷新中..</a>\n    </div>\n    <div style="display:none" class="prompt">\n        <a href="#" target="_blank">您有未读新闻，点击查看</a>\n        <a href="#" target="_blank" class="close"><i class="icon-close"></i></a>\n    </div>\n    <div class="news-wrapper">\n        <div data-role="slot">\n        </div>\n    </div>\n\n    <div  data-role="bottom-loading" class="more-load loading"><a href="javascript:void(0)">加载更多</a>\n    </div>\n    <div style="display:none" data-role="finished" class="more-load">\n        已经到底了\n    </div>\n    <div style="display:none" data-role="error-info" class="more-load">\n        小狐找不到新闻了，请下拉重试吧～～\n    </div>\n    <div data-role="load-more" style="font-size:0;height:0"></div>\n</div>'},function(e,t){e.exports='\n<%for(var i =0 ;i< items.length; i++){\nvar preloadUrl="//statics.itc.cn/web/static/images/pic/preload.png";\nvar item = items[i];\nvar shouldImgGroup=item.images &&  item.images.length>3;\nif(!item._hide){\n%>\n <% if(item.topic){%>\n <div data-role="news-item" class="news-box news-box-pt clear"  data-ev="<%=item.id%>" data-media-id="<%=item.authorId%>"\ndata-loc="<%=item.loc%>" data-cate-id="<%=item.cate_id%>" data-tag-id="<%=item.tag_id%>" data-spm-type="resource">\n     <%if(item.picUrl){%>\n     <div class="pic img-do left">\n         <a href="<%= item.path%>" target="_blank">\n             <img data-src="<%=item.picUrl%>" alt=""  src="<%=preloadUrl%>">\n        </a>\n    </div>\n     <%}%>\n    <h5><a href="#" target="_blank"></a></h5>\n    <h4><a href="<%=  item.path%>" target="_blank"><%=item.title%></a></h4>\n    <%for(var j=0;j< item.topicList.length;j++){\n        var topicItem=topicList[j];\n    %>\n        <div class="pt">\n            <a href="<%=\'//www.sohu.com/a/\'+topicItem.id+\'_\'+topicItem.authorId%>" target="_blank">\n                <%if(item.picUrl){%>\n                <div class="img-do sm-img">\n                    <img data-src="<%=item.picUrl %>" alt=""  src="<%=preloadUrl%>">\n                </div>\n                <%}%>\n                <span><%=topicItem.title%></span>\n             </a>\n        </div>\n    <%}%>\n </div>\n <%}%>\n <% if(!item.topic && shouldImgGroup){ %>\n    <div data-role="news-item" class="news-box news-box-thr news-box-pic clear"  data-ev="<%=item.id%>" data-media-id="<%=item.authorId%>"\ndata-loc="<%=item.loc%>" data-cate-id="<%=item.cate_id%>" data-tag-id="<%=item.tag_id%>" data-spm-type="resource">\n\n        <h4><a href="<%= item.path%>"  target="_blank"><%=item.title%></a></h4>\n        <div class="pic-group clear">\n            <ul>\n                <% for(var j=0;j<item.images.length;j++){ %>\n                <li class="img-do <%= j==item.images.length-1 && item.images.length==4?\'end\' :\'\' %>" ><a href="<%= item.path%>" target="_blank"><img data-src="<%=item.images[j]%>" alt=""  src="<%=preloadUrl%>"></a></li>\n                <%}%>\n                <% if(item.images.length==3){%>\n                <li class="end pic-more"><a href="<%= item.path%>" target="_blank">查看更多 &gt;</a></li>\n                <%}%>\n            </ul>\n        </div>\n        <div class="other">\n            <span class="img"><a href="<%=item.personalPage%>" target="_blank"><img src="<%= item.authorPic%>" alt="" ></a></span>\n            <%if(item.channelName){%>\n            <span class="channel"><a href="<%=item.channelUrl+ \'?_f=v2-index-feeds\'%>" target="_blank"><%= item.channelName%></a></span>\n            <span class="dot channel-dot">·</span>\n            <%}%>\n            <span class="name"><a href="<%=item.personalPage%>" target="_blank"><%=item.authorName%></a></span>\n            <span class="dot">·</span>\n            <span class="time"><%=item.fixed_time%></span>\n            <a class="com" href="<%= item.path%>#comment_area"><i class="icon icon-comment"></i><span data-id="<%=item.cmsId%>" data-role="comment-count"></span></a>\n        </div>\n    </div>\n<%}%>\n <% if(!item.topic && !shouldImgGroup) {%>\n<div data-role="news-item" class="news-box clear <%=(item.picUrl?\'\':\'news-box-txt\')%>" data-ev="<%=item.id%>" data-media-id="<%=item.authorId%>"\ndata-loc="<%=item.loc%>" data-cate-id="<%=item.cate_id%>" data-tag-id="<%=item.tag_id%>" data-spm-type="resource">\n    <%if(item.picUrl){%>\n    <div class="pic img-do left">\n        <a href="<%= item.path%>">\n            <img data-src="<%=item.picUrl%>" alt=""  src="<%=preloadUrl%>">\n            <%if(item.hasVideo){%>\n            <i class="icon icon-video-god"></i>\n            <%}%>\n        </a>\n    </div>\n    <%}%>\n    <h4><a href="<%= item.path%>"><%=item.title%></a></h4>\n    <div class="other">\n         <span class="img"><a href="<%=item.personalPage%>" target="_blank"><img src="<%= item.authorPic%>" alt=""></a></span>\n        <%if(item.channelName){%>\n        <span class="channel"><a href="<%=item.channelUrl+ \'?_f=v2-index-feeds\'%>" target="_blank"><%= item.channelName%></a></span>\n        <span class="dot channel-dot">·</span>\n        <%}%>\n        <span class="name"><a href="<%=item.personalPage%>"><%=item.authorName%></a></span>\n        <span class="dot">·</span>\n        <span class="time" data-role="time"><%=item.fixed_time%></span>\n        <a class="com" href="<%= item.path%>#comment_area"><i class="icon icon-comment"></i><span data-id="<%=item.cmsId%>" data-role="comment-count"></span></a>\n    </div>\n</div>\n<%}%>\n\n<%}}%>\n'},function(e,t,i){var n=i(30),s=i(7);e.exports=Backbone.View.extend({events:{"click ":"like"},initialize:function(e){if(this.news_id=e.news_id,this.userId=e.userId,this.liked=s.get("isLiked"+this.news_id,"1"),this.liked)return void this.$el.find(".zan-icon").addClass("cur");this.model=new n({news_id:this.news_id,userId:this.userId}),this.render()},render:function(){},like:function(){if(!this.done&&!this.liked){s.set("isLiked"+this.news_id,"1");var e=this,t=this.$el.find('[data-role="like"]');return this.done=!0,e.$el.find(".zan-icon").addClass("cur"),this.$el.find(".add-one").fadeIn().fadeOut(function(){/^\d+$/gi.test(t.text())&&t.text(parseInt(t.text())+1)}),this.model.add(),!1}}})},function(e,t,i){var n=i(4),s=(i(16),"//v2.sohu.com");e.exports=n.extend({init:function(e){this.news_id=e.news_id,this.userId=e.userId},add:function(){if(!this._fetching){var e=this;this.url=s+"/news/"+this.news_id+"/upvote",this._fetching=!0,$.ajax({type:"POST",url:this.url,data:{userId:this.userId},success:function(){e._fetching=!1;try{e.trigger("sync",data)}catch(t){e.trigger("error")}},error:function(){e._fetching=!1}})}},get:function(){var e=this;this.url=s+"/news/"+this.news_id+"/upvote",$.ajax({type:"GET",url:this.url,data:{userId:this.userId}}).done(function(t){e.trigger("get:count",t)}).fail(function(t){e.trigger("get:fail",t)})}})},function(e,t,i){e.exports=Backbone.View.extend({template:_.template(i(32)),data:{param:{webid:"",name:"",title:document.title,url:window.location.href,pic:"",content:"",sina_appkey:"",tencent_appkey:""},sina_url:"",qzone_url:"",showWeChat:!1},events:{"mouseover .weixin":"render_qrcode"},initialize:function(e){this.data.showWeixin=e&&e.showWeChat;var t=$("article img")[0];this.data.param.pic=t?t.src:"",this.data.sina_url="http://service.weibo.com/share/share.php?url="+encodeURIComponent(this.data.param.url)+"&appkey=2890110694",this.data.qzone_url="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+encodeURIComponent(this.data.param.url),this.render()},render_qrcode:function(){if(!this.rendered){var e=document.createElement("canvas").getContext?"canvas":"table";$("#qrcode").qrcode({render:e,width:90,height:90,text:this.data.param.url}),this.rendered=!0}},render:function(){this.$el.html(this.template(this.data))}})},function(e,t){e.exports='<ul>\n    <li class="tt">分享到</li>\n    <li class="sinat"><a target="_blank" href="<%=sina_url%>"><em class="icon sinat-icon"></em></a></li>\n    <%if (showWeChat){%>\n    <li class="weixin"><a href="javascript:void(0)"><em class="icon weixin-icon"></em></a>\n        <div class="wx-code">\n            <div class="cort"></div>\n            <div class="code-pic">\n                <div id="qrcode"></div>\n            </div>\n            <p>微信“扫一扫”<br/>分享到朋友圈</p>\n        </div>\n    </li>\n    <%}%>\n    <li class="qzone"><a target="_blank" href="<%=qzone_url%>"><em class="icon qzone-icon"></em></a></li>\n</ul>'},function(e,t,i){var n=i(25);e.exports=Backbone.View.extend({template:_.template(i(34)),events:{},change_news_channel:function(e){var t=($(e.currentTarget).data("id"),$(e.currentTarget).data("tagId"));t&&(window.location=n.tag(t))},setFixed:function(e){var t=$(window).width(),i=this;e?(this.$el.addClass("groom-menu-fixed"),t<1180?i.$el.css({left:0,marginLeft:0}):i.$el.css({left:"",marginLeft:""})):(this.$el.removeClass("groom-menu-fixed"),this.$el.css({left:"",marginLeft:""}))},data:{show_channel:!0,items:[]},render:function(){this.$el.html(this.template(this.data))},initialize:function(e){var t,i=this,n=$(this.$el).offset()?$(this.$el).offset().top:0;$(window).on("resize",function(){t&&clearTimeout(t),t=setTimeout(function(){$(window).scrollTop()>=n-40?i.setFixed(!0):(i.setFixed(!1),n=$(i.$el).offset().top)},10)}),$(window).on("scroll",function(e){t&&clearTimeout(t),t=setTimeout(function(){$(window).scrollTop()>=n-40?i.setFixed(!0):(i.setFixed(!1),n=$(i.$el).offset().top)},10)})}})},function(e,t){e.exports='\n<ul>     <li class="cur" data-id=""><a href="javascript:void(0)"><em class="dot"></em>推荐</a></li>\n        <%for(var i=0;i< items.length ;i++){\n        var item =items[i];\n        %>\n        <li data-id="" data-tag-id="<%=item.tagId%>" ><a href="javascript:void(0)"><%=item.tagName%></a></li>\n        <%}%>\n    \n</ul>'},function(e,t,i){var n=i(4),s={};e.exports=n.extend({init:function(e){
this.channel_id=e.channel_id},fetch:function(e){if(s[this.channel_id])return void this.trigger("sync",s[this.channel_id]);if(!this._fetching){var t=this;this.url="/apiV2/re/tags?channelId="+this.channel_id,this._fetching=!0,n.prototype.fetch.call(this,{success:function(e,i){t._fetching=!1;try{"string"==typeof e&&(e=JSON.parse(e)),t.trigger("sync",e.list),s[t.channel_id]=e.list}catch(n){t.trigger("error")}},error:function(){t._fetching=!1}})}}})},function(e,t,i){var n=i(3),s=i(37),a=i(7),o=i(39);e.exports=Backbone.View.extend({template:_.template(i(40)),index_tpl:_.template(i(41)),events:{"click [data-role='login-btn']":"login","click [data-role='logout-btn']":"logout","click .my-center,my-user":"_to_ucenter","click .my-media":"_to_my_media","click .my-user":"_to_ucenter_head"},data:{object:{},msg:0,sohu_msg:0},initialize:function(e){var t=this;this.type=e.type,this.mark=e.mark,this.cfgs=$.extend(this.cfgs,e.cfgs),this.render();var i=a.get("ppinf");n.on("get:userInfo",function(e){t.data.object=e,s.user_info=e,s.excFnList(s.get_user_info_cbs||[],e),t.render()}),n.on("get:new_comment_count",function(e){t.data.msg=e,t.render()}),i&&(n.fetch(),n.getNewCommentsCount()),s.$el.on("login:success",function(e){n.fetch(),n.getNewCommentsCount()})},render:function(){"other"==this.type?this.$el.html(this.template(this.data)):this.$el.html(this.index_tpl(this.data)),"other"==this.type&&(this.data.object&&this.data.object.nick?this.$el.attr("class","right login-after"):this.$el.attr("class","right login"))},_to_ucenter:function(){"index"==this.mark?o.trigger(o.action_id.ucenter_index):"channel"==this.mark||"news_channel"==this.mark?o.trigger(o.action_id.ucenter_channel):"article"==this.mark?o.trigger(o.action_id.ucenter_article):"pic_colloetions"==this.mark||this.mark,console.log(this.mark),this.data.msg=0,this.render()},_to_my_media:function(){o.trigger(o.action_id.sohuhao)},_to_ucenter_head:function(){o.trigger(o.action_id.ucenter_head)},login:function(){s.login()},logout:function(){var e={success:function(e,t){console.log("退出登录",e,t),window.location.reload()},error:function(e){console.log("退出失败",e)},url:encodeURIComponent(window.location)};return n.logout(e),!1}})},function(e,t,i){var n=i(7),s=Backbone.View.extend({template:_.template(i(38)),events:{"click [data-role='userlogin-bar']":"userLoginModel","click [data-role='mobilelogin-bar']":"mobileLoginModel","click [data-role='login-close']":"close","click [data-role='body-shade']":"close","click [data-role='remember']":"set_remember",'click [data-role="user-captcha"] img':"getUserCaptcha",'click [data-role="mobilenum-captcha"] img':"getMobileCaptcha",'blur [data-role="user-password"]':"blur_pwd",'blur [data-role="user-passport"]':"blur_pwd",'focus [data-role="user-password"]':"hover_pwd",'focus [data-role="user-passport"]':"hover_pwd",'blur [data-role="mobilenum"]':"blur_pwd",'blur [data-role="mobilenum-captcha"] input':"blur_pwd",'focus [data-role="mobilenum"]':"hover_pwd",'focus [data-role="mobilenum-captcha"] input':"hover_pwd",'keydown [data-role="user-password"]':"chk_key",'keydown [data-role="user-passport"]':"chk_key","click [data-login]":"thirdLogin",'click [data-role="submit-user"]':"submitUser",'click [data-role="submit-mobile"]':"submitMobile",'click [data-role="dynamic-get"]':"getMobileDynamic",'click [data-role="yuyin-close"]':"closeYuin",'click [data-role="yuyin-send"]':"sendYuin","click .pw-txt":"hover_pwd",'click [data-role="bind-dynamic"]':"getBindDynamic",'click [data-role="bind-yuyin"]':"getBindYuyin",'click [data-role="submit-bind"]':"submitBind"},set_remembered:!0,needUserCaptcha:!1,mobileDynamic:!0,bindDynamic:!0,initialize:function(e){var t=this;this.model=i(3),this.cfgs=$.extend(this.cfgs,e.cfgs),this.placeholderSupported=this.placeholderSupported(),this.$el.append(this.template(this.placeholderSupported)),this.$shade_el=$('[data-role="body-shade"]'),this.$login_el=$('[data-role="login-pop"]'),this.$bind_el=$('[data-role="bind-pop"]'),this.model.on("get:userInfo",function(e){t.user_info=e}),this.model.isOkey()&&this.bindMobile()},userLoginModel:function(){this.$el.find(".err-info").hide(),$("[data-role='userlogin-bar']").addClass("cur"),$("[data-role='mobilelogin-bar']").removeClass("cur"),$("[data-role='mobile-box']").hide(),$("[data-role='user-box']").show()},getUserCaptcha:function(){var e=this.model.userCaptcha();this.$el.find('[data-role="user-captcha"]').find("img").replaceWith("<img class='captcha-pic' src="+e+">")},submitUser:function(){this.submit(!0)},showCaptcha:function(e,t){e?(this.$el.find('[data-role="user-captcha"]').show(),t&&this.$el.find('[data-role="user-captcha"]').find("img").attr("src",t)):this.$el.find('[data-role="user-captcha"]').hide()},mobileLoginModel:function(){if(this.$el.find(".err-info").hide(),!this.$el.find('[data-role="mobilenum-captcha"]').find("img").attr("src")){this.getMobileCaptcha()}$("[data-role='userlogin-bar']").removeClass("cur"),$("[data-role='mobilelogin-bar']").addClass("cur"),$("[data-role='mobile-box']").show(),$("[data-role='user-box']").hide()},getMobileCaptcha:function(){var e=this.model.mobileCaptcha();this.$el.find('[data-role="mobilenum-captcha"]').find("img").replaceWith("<img class='captcha-pic' src="+e+">")},getMobileDynamic:function(e,t){var i=this;this.$el.find(".err-info").hide();var n=this.$el.find('[data-role="mobilenum"]').removeClass("error").val(),s=this.$el.find('[data-role="mobilenum-captcha"] input').removeClass("error").val();if(!n)return this.showErrorInfo("请输入手机号"),this.$el.find('[data-role="mobilenum"]').addClass("error"),!1;if(!s){this.showErrorInfo("请输入验证码");var s=this.$el.find('[data-role="mobilenum-captcha"] input').addClass("error");return!1}if(!this.mobileDynamic)return this.showErrorInfo("获取验证码太频繁，请稍后再试"),!1;var a={mobile:n,way:t?1:0,captcha:s,success:function(e,t){i.getDynamicSuccess(e,t)},error:function(e){i.getDynamicError(e)}};return console.log("获取手机验证码"),this.model.mobileSignInCaptcha(a),!1},getDynamicSuccess:function(e,t){this.mobileDynamic=!1;var i=this,n=59,s=this.$el.find('[data-role="dynamic-get"]');s.removeClass("dynamic-btn-click"),s.html("60s重新获取");var a=setInterval(function(){if(0==n)return s.html("获取验证码"),s.addClass("dynamic-btn-click"),i.mobileDynamic=!0,void clearInterval(a);n<10&&n>0?s.html("0"+n+"s重新获取"):s.html(n+"s重新获取"),n--},1e3)},closeYuin:function(){return this.$el.find(".safe-hint").hide(),!1},sendYuin:function(){return n.get("ppok")&&"none"!=$(".safe-hint").css("display")?this.getBindDynamic(null,!0):(this.mobileDynamic=!0,this.getMobileDynamic(null,!0)),this.closeYuin(),!1},submitMobile:function(){this.submit(!1)},successFn:function(e,t){if(console.log("user-loginSuccess",e,t),this.login_success_callback){for(var i=0;i<this.login_success_callback.length;i++)!function(t){setTimeout(function(){t(e)},0)}(this.login_success_callback[i]);this.login_success_callback=[]}this.close(null,!0),this.$el.trigger("login:success",e)},showErrorInfo:function(e){this.$el.find(".err-info").text(e).show()},closeErrorInfo:function(){this.$el.find(".err-info").hide()},chk_key:function(e){13==e.keyCode&&this.submitUser()},hover_pwd:function(e){if(!this.placeholderSupported){var t=$(e.target).attr("data-role");"user-passport"==t||"user-password"==t||"mobilenum"==t||"mobilenum-tip"==t?$(e.target).siblings(".pw-txt").hide():$(e.target).hide().siblings("input").focus()}},blur_pwd:function(e){this.placeholderSupported||""==e.target.value&&$(e.target).siblings(".pw-txt").show()},submit:function(e){var t=this;if(this.$el.find(".err-info").hide(),e){var i=this.$el.find('[data-role="user-passport"]').removeClass("error").val(),n=this.$el.find('[data-role="user-password"]').removeClass("error").val(),s=this.$el.find('[data-role="user-captcha"] input').removeClass("error").val();if(!i)return void this.$el.find('[data-role="user-passport"]').addClass("error");if(!n)return void this.$el.find('[data-role="user-password"]').addClass("error");if(this.needUserCaptcha&&!s){var s=this.$el.find('[data-role="user-captcha"] input').addClass("error");return}var a={userid:i,password:n,keep:this.set_remembered?1:0,captcha:s,success:function(e,i){t.successFn(e,i)},error:function(e){t.userErrorFn(e)}};console.log("账号密码登陆"),this.$el.find('[data-role="user-captcha"] input').val(""),this.model.userLogin(a)}else{var o=this.$el.find('[data-role="mobilenum"]').removeClass("error").val(),r=this.$el.find('[data-role="mobilenum-dynamic"]').removeClass("error").val();if(!o)return void this.$el.find('[data-role="mobilenum"]').addClass("error");if(!r)return void this.$el.find('[data-role="mobilenum-dynamic"]').addClass("error");var a={mobile:o,smcode:r,keep:this.set_remembered?1:0,success:function(e,i){t.successFn(e,i)},error:function(e){t.mobileErrorFn(e)}};console.log("手机号登陆"),this.model.mobileLogin(a)}},thirdLogin:function(e){var t=$(e.currentTarget).data("login"),i=this.model.getThirdLoginUrl({provider:t,ru:encodeURIComponent(window.location)});return window.location.href=i,!1},set_remember:function(e){$("[data-role='remember']").find(".radio-icon").toggleClass("radio-icon-sel"),this.set_remembered=!this.set_remembered},render:function(){},is_login:function(){return this.model.isLogin()},login:function(e){if(this.is_login())return void(e&&e(this.user_info));this.login_success_callback=this.login_success_callback||[],e&&this.login_success_callback.push(e),this.mobileLoginModel(),this.$shade_el.show(),this.$login_el.show()},bindMobile:function(){this.$shade_el.show(),this.$bind_el.show(),console.log(this.$shade_el)},close:function(e,t){this.$login_el.hide(),this.$shade_el.hide(),this.$bind_el.hide(),t||(this.login_success_callback=[],this.$el.trigger("login:cancel"))},placeholderSupported:function(){return"placeholder"in document.createElement("input")},getUserInfo:function(e){this.user_info?"function"==typeof e&&e(this.user_info):(this.get_user_info_cbs=this.get_user_info_cbs||[],"function"==typeof e&&this.get_user_info_cbs.push(e))},excFnList:function(e,t){e.forEach(function(e){setTimeout(function(){e(t)},0)})},getBindDynamic:function(e,t){var i=this;this.$el.find(".err-info").hide();var n=this.$el.find('[data-role="bind-mobile"]').removeClass("error").val();if(!n)return this.showErrorInfo("请输入手机号"),this.$el.find('[data-role="bind-mobile"]').addClass("error"),!1;if(!this.bindDynamic)return this.showErrorInfo("获取验证码太频繁，请稍后再试"),!1;var s={mobile:n,way:t?1:0,success:function(e,t){i.bindDynamicSuccess(e,t)},error:function(e){i.bindDynamicError(e)}};return console.log("绑定手机号验证码"),this.model.getBindPhoneCaptcha(s),!1},bindDynamicSuccess:function(){this.bindDynamic=!1;var e=this,t=59,i=this.$el.find('[data-role="bind-dynamic"]');i.removeClass("dynamic-btn-click"),i.html("60s重新获取");var n=setInterval(function(){if(0==t)return i.html("获取验证码"),i.addClass("dynamic-btn-click"),e.bindDynamic=!1,void clearInterval(n);t<10&&t>0?i.html("0"+t+"s重新获取"):i.html(t+"s重新获取"),t--},1e3)},getBindYuyin:function(){return this.bindDynamic=!0,this.getBindDynamic(null,!0),!1},submitBind:function(){var e=this;this.$el.find(".err-info").hide();var t=this.$el.find('[data-role="bind-mobile"]').removeClass("error").val(),i=this.$el.find('[data-role="bind-input"]').removeClass("error").val();if(!t)return this.showErrorInfo("请输入手机号"),this.$el.find('[data-role="bind-mobile"]').addClass("error"),!1;if(!i)return this.showErrorInfo("请输入手机验证码"),this.$el.find('[data-role="bind-input"]').addClass("error"),!1;var n={mobile:t,smcode:i,success:function(t,i){e.successFn(t,i)},error:function(t){e.bindError(t)}};return console.log("绑定手机号"),this.model.bindPhone(n),!1},userErrorFn:function(e){switch(console.log("user-loginError",e),e.status){case 400:this.showErrorInfo("服务错误，请刷新页面再试");break;case 404:this.showErrorInfo("用户名或密码错误");break;case 420:this.showErrorInfo("图形验证码输入错误");var t=this.model.userCaptcha();this.needUserCaptcha=!0,this.showCaptcha(!0,t);break;case 423:this.showErrorInfo("账号未设置密码，请通过手机动态码登录"),this.mobileLoginModel();break;case 450:this.showErrorInfo("用户名或密码不能为空");break;case 453:this.showErrorInfo("多次登录失败，账号已被封锁，请一小时后再试");break;case 461:this.showErrorInfo("账号未绑定手机号"),this.mobileLoginModel();break;case 465:this.showErrorInfo("请输入图形验证码后登录");var t=this.model.userCaptcha();this.needUserCaptcha=!0,this.showCaptcha(!0,t);break;default:this.showErrorInfo("发生未知错误，请稍后再试")}},getDynamicError:function(e){switch(console.log("Dynamic-Error",e,this),e.status){case 400:this.showErrorInfo("非法请求，请刷新页面再试"),this.$el.find('[data-role="mobilenum-captcha"] input').val(""),this.getMobileCaptcha();break;case 420:this.showErrorInfo("图形验证码输入错误"),this.$el.find('[data-role="mobilenum-captcha"] input').val(""),this.getMobileCaptcha();break;case 421:this.showErrorInfo("验证码发送次数过多，请稍后再试"),this.$el.find('[data-role="mobilenum-captcha"] input').val(""),this.getMobileCaptcha();break;case 450:this.showErrorInfo("手机号与图形验证码不能为空"),this.$el.find('[data-role="mobilenum-captcha"] input').val(""),this.getMobileCaptcha();break;case 461:this.showErrorInfo("请输入正确的手机号"),this.$el.find('[data-role="mobilenum-captcha"] input').val(""),this.getMobileCaptcha();break;case 474:this.showErrorInfo("请通过语音验证码方式登录"),this.$el.find(".safe-hint").show();break;case 482:this.showErrorInfo("操作超时，请稍后再试"),this.$el.find('[data-role="mobilenum-captcha"] input').val(""),this.getMobileCaptcha();break;default:this.showErrorInfo("服务器繁忙，请稍后再试"),this.$el.find('[data-role="mobilenum-captcha"] input').val(""),this.getMobileCaptcha()}},mobileErrorFn:function(e){switch(console.log("mobile-loginError",e),e.status){case 400:this.showErrorInfo("服务错误，请刷新页面再试");break;case 427:this.showErrorInfo("该手机号已经绑定多个账号，无法注册");break;case 422:this.showErrorInfo("手机动态码输入错误");break;case 42201:this.showErrorInfo("手机动态码不存在或已过期"),this.mobileLoginModel();break;case 450:this.showErrorInfo("手机号或动态码不能为空");break;case 453:this.showErrorInfo("多次登录失败，账号已被封锁，请一小时后再试");break;default:this.showErrorInfo("发生未知错误，请稍后再试")}},bindDynamicError:function(e){switch(console.log("Bind-Dynamic-Error",e),e.status){case 400:this.showErrorInfo("非法请求，请刷新页面再试");break;case 421:this.showErrorInfo("手机动态码发送次数过多，请稍后再试");break;case 450:this.showErrorInfo("手机号不能为空");break;case 461:this.showErrorInfo("请输入正确的手机号");break;case 474:this.showErrorInfo("请通过语音验证码方式登录"),this.$el.find(".safe-hint").show();break;default:this.showErrorInfo("服务器繁忙，请稍后再试")}},bindError:function(e){switch(console.log("bind-loginError",e),e.status){case 427:this.showErrorInfo("该手机号已经绑定多个账号，无法注册");break;case 422:this.showErrorInfo("手机动态码输入错误");break;case 42201:this.showErrorInfo("手机动态码不存在或已过期");break;case 450:this.showErrorInfo("手机号不能为空");break;case 462:this.showErrorInfo("当前账号已经绑定过登录手机");break;case 482:this.showErrorInfo("操作超时，请稍后重试");break;default:this.showErrorInfo("服务器繁忙，请稍后再试")}}});e.exports=new s({el:"body"})},function(e,t){e.exports='<div data-role="body-shade" class="body-shade" style="display:none;"></div>\n<div data-role="login-pop" class="pop-layer login-pop" style="display:none;">\n    <a href="javascript:void(0)" data-role="login-close" class="close-pop">\n        <i class="icon-close"></i>\n    </a>\n    <div class="title">\n        <ul>\n            <li data-role="userlogin-bar" class="cur">账号密码登录</li>\n            <li data-role="mobilelogin-bar">手机动态码登录</li>\n        </ul>\n    </div>\n    <div class="err-info" style="display:none">请输入正确的登录账号或密码</div>\n    \x3c!-- 用户名登陆 --\x3e\n    <div data-role="user-box" class="login user-login">\n        <ul>\n            <li><input type="text"  data-role="user-passport" class="user-input" placeholder="邮箱/手机号"/>\n                <% if(!this.placeholderSupported){%>\n                <span class="pw-txt" data-role="passport-tip">邮箱/手机号</span>\n                <%}%>\n            </li>\n            <li><input type="password" value="" data-role="user-password" class="password-input" placeholder="请输入密码" />\n                <% if(!this.placeholderSupported){%>\n                <span class="pw-txt" data-role="pw-tip">请输入密码</span>\n                <%}%>\n            </li>\n             <li class="short" data-role="user-captcha" style="display:none">\n                <input type="text" value=""  class="password-input" placeholder="验证码" />\n                <img class="captcha-pic" src="">\n            </li>\n\n        </ul>\n\n        <div class="auto-login"><span data-role="remember" class="radio-btn"><em class="radio-icon radio-icon-sel" ><input type="radio" /></em>下次自动登录</span><a href="https://v4.passport.sohu.com/fe/forgetPassword" target="_blank" class="back-link">找回密码</a></div>\n        <div class="login-btn"><input data-role="submit-user" type="button" class="login-bn" value="登录" /></div>\n        <div class="login-oper"><a href="https://v4.passport.sohu.com/fe/register" target="_blank" class="reg-link">注册</a></div>\n    </div>\n    \x3c!-- 手机号登陆 --\x3e\n    <div data-role="mobile-box" class="login mobile-login">\n        <ul>\n            <li>\n                <input type="text" data-role="mobilenum" class="user-input" placeholder="请输入手机号">\n                <% if(!this.placeholderSupported){%>\n                <span class="pw-txt" data-role="mo-phone">请输入手机号</span>\n                <%}%>\n                \x3c!-- <a href="#" target="_blank" class="user-del"></a> --\x3e\n            </li>\n            <li class="short" data-role="mobilenum-captcha">\n                <input type="text" value="" data-role="mobilenum-tip" class="password-input" placeholder="验证码">\n                <% if(!this.placeholderSupported){%>\n                <span class="pw-txt" data-role="mo-captcha">验证码</span>\n                <%}%>\n                <img class="captcha-pic" src="">\n            </li>\n            <li class="dynamic-code">\n                <input data-role="mobilenum-dynamic" type="text" value="" class="dynamic-input" placeholder="">\n                <a data-role="dynamic-get" href="#" target="_blank" class="dynamic-btn dynamic-btn-click">获取验证码</a>\n            </li>\n        </ul>\n\n        <div class="auto-login">\n            <span data-role="remember" class="radio-btn">\n                <em class="radio-icon radio-icon-sel"><input type="radio"></em>下次自动登录\n            </span>\n            <a href="https://v4.passport.sohu.com/fe/forgetPassword" target="_blank" class="back-link">找回密码</a>\n        </div>\n        <div class="login-btn">\n            <input data-role="submit-mobile" type="button" class="login-bn" value="登录">\n        </div>\n        <div class="login-oper">\n            <a href="https://v4.passport.sohu.com/fe/register" target="_blank" class="reg-link">注册</a>\n        </div>\n\n    </div>\n\n    \x3c!-- 第三方登陆 --\x3e\n    <div class="third clear">\n        <ul>\n            <li class="qq">\n                <a data-login="qq" href="#"></a>\n            </li>\n            <li class="sinat">\n                <a data-login="sina" href="#"></a>\n            </li>\n            <li class="wx">\n                <a data-login="weChat" href="#"></a>\n            </li>\n            <li class="oth">\n                <a href="https://v4.passport.sohu.com/fe/login?ru=<%=encodeURIComponent(window.location)%>" target="_blank"></a>\n            </li>\n        </ul>\n    </div>\n\n</div>\n\n<div data-role="bind-pop" class="pop-layer login-pop" style="display:none;">\n    <a href="javascript:void(0)" data-role="login-close" class="close-pop">\n        <i class="icon-close"></i>\n    </a>\n    <div class="safe-title">\n        <div class="safe-tt"><i class="icon safe-icon"></i>安全提示</div>\n        <p>为保证您的账户安全，建议您绑定手机号码</p>\n    </div>\n    <div class="err-info" style="display:none">请输入正确的登录账号或密码</div>\n    <div class="login">\n        <ul>\n            <li>\n                <input type="text" data-role="bind-mobile" class="user-input" placeholder="请输入手机号">\n            </li>\n            <li class="dynamic-code">\n                <input data-role="bind-input" type="text" value="" class="dynamic-input" placeholder="">\n                <a data-role="bind-dynamic" href="#" target="_blank" class="dynamic-btn dynamic-btn-click">获取动态码</a>\n            </li>\n        </ul>\n        <div class="dynamic-hint">收不到短信验证码？点击获取 <a data-role="bind-yuyin" href="#" target="_blank">语音验证码</a></div>\n        <div class="login-btn"><input data-role="submit-bind" type="button" class="login-bn" value="确定"></div>\n    </div>\n</div>\n\x3c!-- 语音验证提示 --\x3e\n<div class="safe-hint">\n    <div class="safe-tt"><i class="icon safe-icon"></i>安全提示</div>\n    <div class="safe-info">系统出于安全考虑，在点击“发送语音验证码”后，您将会收到一条来自950开头号码的语音验证码，请注意接听。</div>\n    <div class="safe-btn"><a data-role="yuyin-close" href="#" target="_blank" class="btn-send-no">暂不发送</a><a data-role="yuyin-send" href="#" target="_blank" class="btn-send">发送语音验证码</a></div>\n</div>\n\n<div data-role="register-pop" class="pop-layer register-pop" style="display:none;">\n    <a href="javascript:void(0)" data-role="login-close" class="close-pop">\n        <i class="icon-close"></i>\n    </a>\n    <div class="register-menu">\n        <ul>\n            <li class="now"><em class="phone-reg"></em>手机注册</li>\n            <li><em class="mail-reg"></em>邮箱注册</li>\n        </ul>\n    </div>\n    <div class="login">\n        <ul>\n            <li><input type="text" value="手机号码" class="phone-input" /><a href="#" target="_blank" class="close-btn"></a></li>\n            <li><input type="text" value="设置密码" class="password-input" /><a href="#" target="_blank" class="keyboard"></a></li>\n            <li><input type="text" value="验证码" class="code-input" /><a href="#" target="_blank" class="gain-code">获取验证码</a></li>\n        </ul>\n        <div class="agreement"><span class="radio-btn radio-btn-clk"><input type="radio" /></span>同意<a href="#" target="_blank">《搜狐服务协议》</a></div>\n        <div class="login-btn"><input type="button" class="login-bn" value="立即注册" /></div>\n        <div class="login-oper"><a href="#" target="_blank" class="back-link">使用已有账号登录</a></div>\n    </div>\n</div>'},function(e,t,i){var n=i(7),s=n.get("SUV"),a={action_id:{sohuhao:"10220422",ucenter_article:"10220423",ucenter_index:"10220424",ucenter_channel:"10220425",ucenter_head:"10220447",colloetion:"10220426",information:"10220427",safety:"10220428",my_comment:"10220413",comment_zan:"10220416",comment_from:"10220417",comment_remove:"10220421",my_reply:"10220414",reply_zan:"10220415",reply_from:"10220420",reply_reply:"10220418",reply_reply_succ:"10220419"},trigger:function(e){var t="//pv.sohu.com/action.gif?actionId="+e+"&SUV="+s;$.getScript(t,function(){})}};e.exports=a},function(e,t){e.exports=' <div class="login">\n <%if(object && object.nick){%>\n    <span class="login-after">\n        <a href="//www.sohu.com/ucenter" target="_blank" class="user my-user">\n            <img src="<%=object.icon%>" alt="">\n            <%if(msg+sohu_msg){%>\n                \x3c!-- <span class="red-point"></span> --\x3e\n                <span class="num" style="visibility:hidden;"><%=(msg+sohu_msg)>99?\'99+\':(msg+sohu_msg)%></span>\n            <%}else{%>\n                <span class="num" style="visibility:hidden;"></span>\n            <%}%>\n            <span class="user-name"><em class="name"><%=object.nick%></em></span>\n        </a>\n        <div class="login-layer">\n            <a href="//www.sohu.com/ucenter" target="_blank" class="my-center">个人中心\n                \x3c!-- <%if(msg){%>   \n                    <span class="menu-num"><span class="num"><%=msg>99?\'99+\':msg%></span></span>\n                <%}%>   --\x3e\n            </a>\n            \x3c!-- <a href="//mp.sohu.com" target="_blank" class="my-media">我的搜狐号\n                <%if(sohu_msg){%>   \n                    <span class="menu-num"><span class="num"><%=sohu_msg>99?\'99+\':sohu_msg%></span></span>\n                <%}%>\n            </a> --\x3e\n            <a href="javascript:void(0)" class="quit" data-role="logout-btn">退出</a>\n        </div>\n    </span>\n\n    <%}else{%>\n    <a href="javascript:void(0)"  data-role="login-btn" class="login-sohu"><i class="icon-user"></i>登录</a>\n    <%}%>\n </div>\n\n'},function(e,t){e.exports='<ul data-spm="top-head">\n    <li class="classic">设为默认首页</li>\n    <li class="download-app"><a href="https://k.sohu.com/" target="_blank" data-spm-acode="8073">下载APP</a></li>\n    <li class="login">\n        <%if(object && object.nick){%>\n            <span class="login-after">\n                <a href="//www.sohu.com/ucenter" target="_blank" class="user my-user">\n                    <img src="<%=object.icon%>" alt="">\n                    <%if(msg+sohu_msg){%>\n                        <span class="num" style="visibility:hidden;"><%=(msg+sohu_msg)>99?\'99+\':(msg+sohu_msg)%></span>\n                    <%}else{%>\n                        <span class="num" style="visibility:hidden;"></span>\n                    <%}%>\n                    <span class="user-name"><em class="name"><%=object.nick%></em></span>\n                </a>\n                <div class="login-layer">\n                    <a href="//www.sohu.com/ucenter" target="_blank" class="my-center">个人中心\n                        \x3c!-- <%if(msg){%>\n                            <span class="menu-num"><span class="num"><%=msg>99?\'99+\':msg%></span></span>\n                        <%}%> --\x3e\n                    </a>\n                    \x3c!-- <a href="//mp.sohu.com" target="_blank" class="my-media">我的搜狐号\n                        <%if(sohu_msg){%>\n                            <span class="menu-num"><span class="num"><%=sohu_msg>99?\'99+\':sohu_msg%></span></span>\n                        <%}%>\n                    </a> --\x3e\n                    <a href="javascript:void(0)" target="" class="quit" data-role="logout-btn">退出</a>\n                </div>\n            </span>\n        <%}else{%>\n            <span class="login-before" data-spm-acode="8074"><a href="javascript:void(0)"  data-role="login-btn" class="login-sohu"><i class="icon-user"></i>登录</a></span>\n        <%}%>\n    </li>\n\n</ul>'},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.news_id=e.news_id},fetch:function(e){var t=this;this.url="articles/"+this.news_id+"/pv",n.prototype.fetch.call(this,{success:function(e,i){try{t.trigger("sync",e)}catch(n){t.trigger("error")}}})}})},function(e,t){e.exports={getParams:function(e){if("string"!=typeof e)return{};e=e.substring(e.indexOf("?")+1);for(var t=e.split(/&|=/),i={},n=0;n<t.length;n+=2)i[t[n]]=t[n+1];return i},isUrlParamExist:function(e,t){var i=this.getParams(window.location.href);return!(!i[e]||i[e]!=t)}}},function(e,t,i){i(45);var n=i(46);e.exports=Backbone.View.extend({template:_.template(i(47)),events:{"click [data-role='refresh']":"refresh","click [data-role='on_comment']":"on_comment","click [data-role='on_back']":"on_back","click [data-role='go_top']":"go_top"},data:{refreshable:!0,home:!1,comment:!1,qrcode:!0,feedback:!1,userlink:"http://passport.zhan.sohu.com/passport/sohu/login-jumpto?callback=http%3A%2F%2Ffbp.sohu.com%2Ffbp%2Fproblem%2Fadvice%3Fproduct%3Dpc",survey:!1,surveyUrl:"https://wj.qq.com/s/1672453/db94",classicSohu:!1,classicSohuImg:n},initialize:function(e){this.cfgs=$.extend(this.data,e.data),(this.isIE(8)||this.isIE(9))&&(this.data.userlink="//shang.qq.com/wpa/qunwpa?idkey=04e47b9e7004c967962f52532465719ae8a30cf05413c11934ec121fb7e2dd62"),this.data.survey&&/hao123\.com|114la\.com|2345\.com|123\.sogou\.com|hao\.qq\.com|duba\.com|hao\.360\.cn|maxthon\.cn|0\.baidu\.com|daohang\.qq\.com|hao\.360\.cn|firefoxchina\.cn/gi.test(document.referrer)&&(this.data.surveyUrl="https://wj.qq.com/s/1685917/82ab"),this.render(),$(window).on("scroll",_.debounce(this.go_top_control).bind(this))},render:function(){this.$el.html(this.template(this.data))},refresh:function(){this.trigger("refresh",this)},on_comment:function(){this.trigger("comment",this)},on_back:function(){this.trigger("back",this)},go_top:function(){window.scrollTo(0,0)},go_top_control:function(){var e=$(window).height();$(window).scrollTop()>1*e/2?this.$el.find("[data-role='go_top']").find("a").fadeIn():this.$el.find("[data-role='go_top']").find("a").fadeOut()},isIE:function(e){var t=document.createElement("b");return t.innerHTML="\x3c!--[if IE "+e+"]><i></i><![endif]--\x3e",1===t.getElementsByTagName("i").length}})},function(e,t){},function(e,t){
e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAABaCAYAAAALk14LAAAVTUlEQVR4nOWceVyU1f7H388wwzIiiAIKsimmYqCGS6amZnZVTFs0I8uy0q6XbHNLs9TQbDNK7ao3c0tTWkivuS9dNFEzFC0KUVFkhk1ZRGBYZ57fH88wC8wMM5NavX6feZ3XnOec7/me7/c537Of8wiiKPKHcP/99lDJgFeAHUDWH8gtGtgHLABWOpz60CGDMLcDw4AE4CcgykkeMmA94At8CIQ4K8ztUvou/X8bYD8Q4ASPGKC73q8EZjorzO1SupWJvx2wERAc5PHPRs+PAwpnhJE7k8gJuDV6fgCYCqxCUr4DEAl0AwIBT0ALlAJq4HdgeCMe/sBg4KCjwsgBau680+4E9cB6ucAhF5hdJ3KPfzt7ktVYCHsbuE/vfO0WwByDcEJph8y7BohXCB47XVhYBas3ywVvO5PesBDmBzyG8wqD1Jo7DLvNWwQSFELAWRl70TcoWQJhO68VjHrQr522meRFzghnB/zZvdtyTEyM1UR2l/R3LnifkLEPYwsKMHylXPi4maQtkBodh6ARRSZVVzOjpgYbI4lIYmLuc5S3XUpfEJB9KRe+wkIfq4OXRpQWbk0oKmxtIakL8B1g1wjGFCfCw8nR6UjTasnW6ayReQC7iIkZ6AjvZpWuBj5SCHO1TVtP0z4ndr8L5x8tLYx/q7gw3IRkLvAPRwQCwMMDYcQIw6NCsNm7eQDfERMTbovIFM0qvUEuROULLLCU7eI6kW7GQmijgbd+k3GxvKDg99qioi3AfFu8q7HcrDNyJPcMG0ZU9+6MGjWKoE6dzNLUNU3hByQSE+PanD7QTEOWJkO214W1clBMrxP5yUXgsP41tRchUgdLdCK7XGCTXKAaGK0FV4hwUSojrPHdWlfH+ro6XAWBalGkrSDwoqsr/V1cwN8fnngCd3d3li1fLiVISSFv8WIW19RwWaejFpjl6soIuZn4vYG39M4mBFEULfbT1cA0V2FSucD6N+pEeujghgDTFAJlAgzXQly9sYkpEGCri0BcvYibIODm7w82zFKLVOFFIFcUaQH4+PnBokUQGtqEvuTYMbSHDuGXlgbV1dbY1gI92L37nFOt99dywaNK4J1FeoUBvESYole0u868TW0nwmv1Im6AzM3NpsIgKQxSuxDk4YHPuHGwahWEhqJWq9Fqjb1gXl4e5YGB+L31FiQmwqxZEGJxvuEKNO5NXICOSAOZaEBmsaRLBZirEF6bVycmBFvoL95RCEyrF/G20pcoWrVC5u5uU2kA5HJ49FF45BHwNo5z3l6wgJdffZW0tDRulJXh6+vL2bNneXHaNGNarRY2bICkJEucY5FmYcOBfkjdZgP+Z1HpUzJcg0Wy/EWCLHGsbMTFDHaYNgDBwTBvnsUS27xpE7m5ueTn51NTXU1dXR3TZ86kW7duTfmsWQPbtjUOFbE+oamwVqfHAd/YltoyZG5uKHx8bBO1bw9Ll5qVrilEUSQjIwN3d3c6hIWh1WqRK6xMqOrrYfZsOHfOXhHXWVP6ANLE32HIvbxwUSqtEygUsHy5xcbKaVy5AtOmSSZvGzeAOy01ZOE4MYJqQLN1+ZFHbq7CIPEbOtQeyqmA2pLSU3B8gg+AzNUVQWZjvOPqCo895gzr5vH44821I+8BW6Fpl+UKPOtsvjIPD9sEOp3kbgUCAyEy0lrs18C8hofGSg9CWpFwGIJMhktzpl1fDzt2OMPePgy0OO9YA0wADG+7sdJONV6gL+XmuimAffvgjy47W8Ndd1kKnY80ADRAxvXNuKXMxS1lLkAfZ/Oz2WKboqgIfv/d2Wxso317aFrFmqyuNC5pu6dnZkwUCgQXl+YJG3D8uDPZNA9BgLCwxqFNil8QSze5Ii2ePwVYWghwHgU3YPp/oabePLy9Nyx/9KZm1QxKgU3ALFo9VStDFD9AFF9GFFsjitxU17YlxA1o2gHmlkHu9Zubl23no9cxHkAG4kRpqHqL3IAwmDYQFI3M/3j2rcvTupsCIAfx5pq0JQzuCBH+sCsDfrwM5TWg1ekFua1oDSCIJetve85/KnwmCbJbYUY56qKbzvPmOalO31SmGefz6Dc8gRx1scNpNVU17Nx3tlm6ouJyiorL/4DSTrSGCf8+wML3vjcL+/yLH0lMOknDaMu3dQsSk06yc98vzfJLTDpJjqqYoqJyXpj+NclHMy3SFRWVk3w0k5jYlcTErnRY7gbZ5A3aO4Kc3BJKr1cZ3tznm1KY//4+4l8fjpGfSF5BGWd/+53VG35kw4qJ+LbxbMIr43w+0+fvILp7AF+vfR6AgsIyMs7nseegNHLzaunOjyeyOHD4oiFdQvwYnJEdQG4yDncIPq08MKbVcei7qUR0bkfG+QIAlB5ypsdJOy6BkQs5eDiD2Ed7NeET0bktM+MGsXTlEcY/vxaAHpGBzFq4ndO/5BPdPYBOHXzpcWcgjz3Uk/AwX/zaeOpfoHOy213SGecLOJueS0VlDcd+zkadV06/XqH079uB+e8fICHeDRCprKwFQFNVw5ZvU0k/l6/nYKxTjTE97j6WrjzC6V/yGf9QJBGd2xr8S94cjdLDFU1VLUoPaS0/OeUCFy9dY/LE/k4pbXedfm/ZQRJWHSY9Ix91XjkAm785xaVsaUNy+vydzFqwg4pKaU1a6a6gnX9LWnk1TDct8y0qKufVN4wrmv16hYIoEh0VQL9eoSjdFeSoiunU511yVMUgikz45xbSM/L/SJ22z0Q2fvqEwR/ZtS0AkyfeYwg7lDSZiM7tSE6R6l2Ouph+vULp3i2AzzalSko3yquouJLuQz4mOqodW1bHMmFqInkFZYCOmS8O5uKla4COSo30Io/9fImQIOkkx1OPRTfhZy+casg8PRu2jKS0QQEtmbVwJ1eLKlHnS1bQb+S/DfRBAS0ZNqgzjfNSKuUkxI9kzIhIg+n+8ONFpv9rMG39PJn99i4mT+xHROe2BAW0pFOHNoBIUEBLunVp24SfvXCqIZNa5XwqKqqZPLEfu7c+y8Ej52nn3xKACVO/Ycemp2ihdKXwWjl9o0P0SpnnpfSQE/tITwB27k8H4PSvBWiqqgGd/gVKafr3CaaFUgHoWPnBQyg95E342Qu767RGU0NqWg4JK5NZuvIYGeev0TMyEEQR39ZKYh/uyZD+4RQUSictFn5wgMrKGob0D0fprrDJO0dVQvzSQ0RHSdXmSk6Jof7lqErQaGo49nMOoUGtQBTZ/M1pioornK7TMultNe/GT/6SMU9/yQ9HLxEU4En/PsH07tke0JFxPp/klAuAjnb+niS8/Q+GDuzAmKe/JON8vk2+idtOM+75L+nfJ5gPFzTsSTfEQ0iQNydPXyHm/jtMSlckPSPPLrmbOgfMe2bcAACGDOhI4raznDilMjBpoVSwfmsqp39RM3VSP5QeCjRVdSxddYKzv+UR0dnPIk9NVR3TF+xn/JiuLJn3D37PLNTHiGRlFxteQHJKFkMGdDTk18rLjYuXixgyoINdsjeG3eY9pH8HhvTvYBKGwR/S3puNK8aRoy7jX7O2k5qmYvWGE5JF9A6xylPpLifv7Aw+WTQKpbuci5ek7i/iDj9Sz6gZP7orRcUVfLb5DH3vCmLn/gwSVv3IkAEd2L4n49abt7lrGGiYhy+ZN4wDR64w5pmvWLrqJ+bPuJeQIC+bvDRVNeSoSwx8o6P80FTVsPtQFpFd/bhWJPUGSg8XwkNbsXTVT3gqFVwt0pB8LMsJ2R1UeueBDDRVNRaV1lTVcDItx8yM4j86QsLqo2ScL7TK84qqhH6j1vP55p9J+M8Jhg4MY0vSGdT5FXTq6EMLpXTa4JmXkpgVvx+Ai5eLiH04gtnxBygqqXBYaUEsXGJ3ZxfYcwUPDAom40IJsQ9FMH3qPXz+5SnSz13jWGoe6vxKxo++gzdfGwTAjIX7OXBEBUBQQAtihnZk4awhTfgmrD7O0tWpAOzY8ChjJn0nKXd8KkoPhSGPkPbejBzaSd91Qb8HNxEU0IIXnurB5Cebjustwn+uIIiFi+1WOvlYNhPidhEd5cuGZaPxba3kmZd3cOCIiheejOS5J3oSEuTdJM3sRcmo8ysB+OWHZ/Ftbb5GrqmqY/wL3zHzX3czpH8YCz88zJABoQzpH2ZTntQzecTN3Y86v5ITO59qkrdlpecJgli4yLlhjQPQVNVxRVVGC6XCPsEc5F1UrLGfr/+bghzxFm2omUDp7kLEHfr1x5ucn9LdhZD2LR3i6/R8+u8Mh5Wuqq7Hw/12HRO/NXDIvI+eLGDL9susXHIPmVnXSc8stUg35J4A2vhY3rad+14qkx7rRJfwVmZ+a7TvzulN0u7LAIyNMR+BqfIq0FRJW0bpmaVN4q3BoZJe+UUmC17rjvkAxYhKTT0fr71A356+tPExnljMzCoz+Mtu1HJZdQMQzfwAvq3dzF7W3sOFvDvHdFNAx10j9xjiI8I9CQ2SeoKITt5UVdfaZYVy0c456b5kNVFdvekc7oWmuo7O4V50DvcyxFdV1zMz/hTzXupKUKASU76x044xYrC015+VU8mO/Wq8vRRm/mx1JWNjghkbE2aWr6j/NfgBTu8ZgTU0p4+AneZdVV3Pxm8vsyK+N6rccqa8/jPb1gw0vNWq6npmLjpNt85ejB0ZYrElXfK6NG9+4/00nhnXkS7h3mb+pN1X9OPjRmlFnWHMbIj7gz2AXea9bG0GPl4Kko/n80PKVd58qSse7jJAR1p6CXPf/5XoSG9SUovpEVHAwL6WTnA05GM6hG3sN6WTEB2z3+RJtBAmYcRgX8OLbQ52KT18cFsu5VTyQ0oh3Tp7MbCvL2npRXyzS022WsOyhT3oEu5FZtYNlq+7wO7/5fHMuDC6mJj/G++fAeB0ehllNzLx9lKY+bPVGsaObN9E6dO7zY9KvfPpebau6M3Gb7NZ8rp0ySAtvYRjp4qbpLWutB2mctedrajUSKesnxsfhiq3gg9Xnyfu6Q4M7KOfK4s6unT05N+L7yJpt4pte1XMiTOefn5mbAgAZTeyGPNAO8KCWpj5Dx69qjdlC+bdCCGBHpz+tcwQ92vGdTqFKu02e7tKWpWn4eWFv7H2/SjOXbzOpZxKVsRHkXz8Gkm7c5rQt/VzZ2yMeal1CZd2N7xbuhAWpKRLuKeZPz3zOpZWTKNHJQMw78WOjI2Rjqp6uAuEh3qgyqsgOFDJ3sNXWREf1SStDaWbb713HMija0cPvtmVS9dwT9r6md8tK7hWTUpqKWNHNtwmlOpqVbWWnFwNAJlZ0tpZWXk92eoKQDTzF1yTlnlVeZUEBxonJKd33UvS7lxAajAb+A/t78uOA3n06OZN9whPfRdpX08k6NQv/uEJR+alcjZ+q2LJbPNTuqq8KlZtvuwQr67hnjw9NoTi0lqefOUMe7/oS9IeSenILl6GfKqqtTzywikA1rwXRXBgMwf39BDafyo4NDjJvFRBtkpD2m83mBPXySTGcssbHOjGktldDc9p6de5WlzLcH2f3fA86O42eLibHs/QkZNbQXRkw36VxP+ntBK6hrdAWrSoo3UrOSXX6zBdILAHdin9RZKaT9bnMmJQK3pFeTGwTysyLxkv1WWrNJSV15mF+fq40sbHlapqLad+LWPlJmkxIW5isEFApVJG2pEyPl57hdHD2hA7OtAwkvs18wa9oloalK7UaNny30LWvNeNoz8XsXjFZd58SRp2TpmTzpQnAk2ql20IOtWUZs27uLTWbFipyq9ilV4Ja4i5z5deUd48//rvhLV3I+Y+Xwb2sXy8pbi0lsTvC/j+UDHLFtxBl46evPHBeWZMCaONjytJewr44VgpwYFu3BGmJGnvNRa80oEuHaXGMfNSBcvXq5gTF0ZwgG0zF4I+EwSdavItXURo/MJsoapa28jMm8Y3wBadLQhBaxyr086gjY/92y8e7oJNWim+Ac7LfVtWTv5qcGrX8u+O/6/LRRZK+kYtZJYiXC6D6zVQWW+c3v1VIQjQQg7ebogdvaGLD3hZbkDN63S9DiElH9Kuge4vrmRjiCKU10J5LYK6HI7mQk8/xIEBIDc/4W0saU09wrcX4armT5D4FkAHpBYg5NxAHNcJlMZlJElprYiQdAEKKv88IW8VCioQki4gTugCLlKXJwMdQnIO5JZjuE1jzT27Coa92jxdg+vxKCxOsc3v2VXmYab0M7ZJPKylnbHNPjlyyyUdDbuWZTVwslA6itycE4GH42DlRXM387+W6XX6fWxr/D6bAh27Q4+x5nmY+nWi9bTFBfDcf+yT/WQhXJemr4K48R6RI7n2mco/10HOOdjzgfX4PnZc3ls1G059Jfl7PQ7Dn4biQttpJ4daDv8wFRI/NPKzhUHt4eljgiDOjxBRlVsminkdxk2zHNeArHR4Z6TluN6x8MRsmOHA50g+Om2kn7cH9m2E1ETr9OtUtmUwRZAnxGcIcoo11i9miqLEMN7Ktxz6TICRk6ynb+j2rMVvzJP+P50JP28xhpvS60Tr6R+cK8nXui1EP27OwxKuSg21nPJq0FrpkxtWaG29lIb4lzbD3Q9YpmtQzhRPtZXcwkMSH1MaU/+0pcBS+HoF7FhszmNYLBzQW8GISXBik+X8G1Ah6SFHJlRSq7V8B1wnQqdI2FxoMRqAi+lSQ/HJhKZx/SbCxDnwYjPfRtKJ8IR+VXXrNaN/0f9g1zrLyjz0lvSytsVLz8Mehz5P2lZcIasGkKOpOYuI5eO03y2UnL14ZCH0vg/mDdYrow83tZTV52CqcQkJUZTotFp47Ss4fsBIbxrXGLEvw9blxrh9iRDzLKRssC6fTnsGQEa99iBaLRbda4mS6/eMJKxWCw8vgHcOG/2vJRrpRZM6bOm5QcDGz6Io8enSA5aOaxrXWK53DsPx/fDtW8awb/Vf+jCVp7Gr1+4HEMSHPEOQvvtnvt038Hl47g14Tn8TcV0WrFsCR9fC9nJ4WDoHygfHYMdaKfyxxfDkK9bfNEDJVSPP2UnQVb8V85ydNx7XZUFRIcy2ctZ7XRacOwMfjG0cUw/cwfbybEF80AOkz2S8akby0U+w/XP4cY30PGe79P/ew1LcyUPw1Rtw7xR4eDLMuNs+oTdkw6Qwc/+9U2D2MtvpNn8Cfe+Ha/mSDM3lce5MY7plfK95FUAQR7qBdFn8CGCn5H87/AQMZnd1DYBcf3O9FhiN9HlKi5eQ/8ZIA0azt9bwmSRBfMBsVVEJvAvEcfu+P3irUI/0bdG57K83my8L4v0Wb7eHIX0VZhTSnWp/jF/e+atCBxQiNcq7gEQO6rItEf4fDCJzLhHJDAEAAAAASUVORK5CYII="},function(e,t){e.exports='<ul data-spm="user-feedback">\n    <a class="fixed-operation" target="_blank"></a>\n    <%if(classicSohu){%>\n        <div class="classic-sohu"><a class="rightbutton"><img src="http://statics.itc.cn/sohu-homepage/oldright.png" alt="经典狐首"/></a></div>\n    <%}%>\n    <%if(survey && surveyUrl){%>\n        <li class="prize-survey"><a href="<%=surveyUrl%>" target="_blank"><em>有奖<br>调查</em></a></li>\n    <%}%>\n    <%if(comment){%>\n        <div class="comm-btn"  data-role="on_comment"><a href="javascript:void(0)"><em class="icon-comment"></em></a></div>\n    <%}%>\n    <%if(home){%>\n        <li class="back-sohu prize-survey" data-role="on_back"><a href="http://www.sohu.com" target="_blank"><em>返回<br/>首页</em></a></li>\n    <%}%>\n    <%if(feedback){%>\n        <li class="user-feedback"><a href="<%=userlink%>" target="_blank" data-spm-acode="8072"><em>用户<br/>反馈</em></a></li>\n    <%}%>\n    <%if(refreshable){%>\n        <div class="refresh" data-role="refresh"><a href="javascript:void(0)" title="刷新"><em class="icon-cached"></em></a></div>\n    <%}%>\n    <li class="back-top" data-role="go_top"><a href="javascript:void(0)"><i class="icon"></i></a></li>\n</ul>'},function(e,t,i){var n=i(49);e.exports=Backbone.View.extend({template:_.template(i(50)),events:{"click .search-btn":"onSearch","keydown [data-val='key']":"keydown","focus [data-val='key']":"focus","blur [data-val='key']":"blur"},data:{d_val:""},p_id_map:{HOMEPAGE:"0001",CHANNEL:"0002",TAG:"0003",ARTICLE:"0004"},search_host:"https://www.sogou.com/",render:function(){this.$el.html(this.template(this.data))},initialize:function(e){var t=this;if(e.scene&&(this.p_id=this.p_id_map[e.scene]),this.data.d_val=e&&e.d_val,this.data.d_val&&(this.data.d_val="大家都在搜："+this.data.d_val),"TAG"==e.scene)this.render();else{var i=e.channel_id||0,s=new n,a=[];this.render(),s.on("sync",function(e){e.forEach(function(e){e.channel_id==i&&a.push(e.word)}),t.randomWord=a[Math.floor(Math.random()*a.length)],t.randomWord&&(t.data.d_val="大家都在搜："+t.randomWord),t.$el.find(".search-input").attr("value",t.data.d_val)}),s.on("error",function(){t.render()}),s.fetch()}},onSearch:function(e){var t,i=$(this.$el).find('[data-val="key"]').val();i==this.data.d_val&&(i=i.replace("大家都在搜：","")),""==i?t=this.search_host:(this.randomWord&&i==this.randomWord&&(this.p_id="0005"),t=[this.search_host,"sogou?query=",window.encodeURIComponent(i),"&pid=","sogou-wsse-f880d0d6a01ba52f-",this.p_id,"&ie=utf8"].join("")),window.open(t)},keydown:function(e){var t=window.encodeURIComponent($(this.$el).find('[data-val="key"]').val()),i=navigator.userAgent,n=""==t?this.search_host:this.search_host+"web?query="+t+" site:sohu.com";if(13==e.keyCode)if(/MSIE ([^;]+)/.test(i)){var s=$("<form/>",{target:"_blank",action:n,style:"display:none;width:0;height:0",method:"post"}).appendTo(document.body);s.submit().remove()}else this.onSearch()},focus:function(e){$(e.currentTarget).val()==this.data.d_val&&(e.currentTarget.value="")},blur:function(){var e=this;setTimeout(function(){e.$el.find('[data-val="key"]').val(e.data.d_val)},200)}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.url="//hotword.sogoucdn.com/hot_word.json"},fetch:function(){var e=this;$.ajax({url:this.url,type:"GET",dataType:"jsonp",jsonpCallback:"_getjson",success:function(t){e.trigger("sync",t)},error:function(t){e.trigger("error",t)},timeout:3e3})}})},function(e,t){e.exports='<input type="text" class="search-input left" value="<%=d_val%>"  data-val="key" data-spm-acode="8066">\n<span class="search-btn" data-spm-acode="8067"><i class="search-icon icon"></i></span>\n<form target=""  style="display:none;width:0;height:0"></form>\n\n\n'},function(e,t){e.exports=Backbone.View.extend({setPosition:function(){var e=this,t=this.$fix_el;if(this.top_dis=$(this.$el).offset()&&$(this.$el).offset().top,$(window).scrollTop()+this.offset_top>=this.top_dis)t.is("."+e.fixClsName)||(t.addClass(e.fixClsName).css({left:e.left_dis+"px"}).append(e.rel_selector.clone(!0)).css({opacity:1}),e.need_hide_on_fixed&&e.rel_selector.hide(),e.trigger("fix_change",{fixed:!0,o:e}));else{t.is("."+this.fixClsName)&&(t.removeClass(this.fixClsName).css({left:""}).html("").css({opacity:0}),this.rel_selector.show(),this.trigger("fix_change",{fixed:!1,o:this}));var i=t.offset()?t.offset().top:0;i>0&&i!=this.top_dis&&(this.top_dis=i);var n=t.offset()?t.offset().left:0;n>0&&n!=this.left_dis&&(this.left_dis=n)}},initialize:function(e){this.fixClsName=e&&e.fixClsName||"right-fixed",this.rel_selector=$(this.$el.data("rel")),this.$el_clone=this.$fix_el=$("<div></div>"),this.$el.append(this.$fix_el),this.rel_selector.next().length<=0&&(this.need_hide_on_fixed=!0,this.$fix_el.addClass("no-tran")),this.offset_top=e.offset_top||0;var t=$(this.$el).offset();this.top_dis=t&&t.top,this.left_dis=t&&t.left;var i,n=this;$(window).on("resize",function(){var e=$(n.$fix_el),t=$(window).scrollTop();i&&clearTimeout(i),i=setTimeout(function(){var i=n.$el.offset()?n.$el.offset().top:0;i>0&&i!=n.top_dis&&(n.top_dis=i);var s=n.$el.offset().left;s>0&&s!=n.left_dis&&(n.left_dis=s),e.removeClass(n.fixClsName).css({left:""}).html("").css({opacity:0}),!e.is("."+n.fixClsName)&&t+n.offset_top>=n.top_dis?(e.addClass(n.fixClsName).css({left:n.left_dis+"px"}).append(n.rel_selector.clone(!0)).css({opacity:1}),n.need_hide_on_fixed&&n.rel_selector.hide(),n.trigger("fix_change",{fixed:!0,o:n})):n.trigger("fix_change",{fixed:!1,o:n})},100)}),$(window).on("scroll",_.throttle(n.setPosition.bind(this),200))}})},function(e,t,i){i(25);e.exports=Backbone.View.extend({setFixed:function(e){var t=this,i=$(window).width();e?this.$el.addClass("article-do-fixed"):this.$el.removeClass("article-do-fixed"),i<1180?t.$el.css({left:0,marginLeft:0}):t.$el.css({left:"",marginLeft:""})},initialize:function(e){var t,i=this,n=e.rel_el,s=$(this.$el).offset()?$(this.$el).offset().top:0,a=this.$el.outerWidth()||140;$(window).on("resize",function(){var e=n.offset().top;$(window).width();t&&clearTimeout(t),t=setTimeout(function(){var t=$(window).scrollTop();t>=s-70&&t<e-a?i.setFixed(!0):(i.setFixed(!1),s=$(i.$el).offset().top,e=n.offset().top)},10)}),$(window).on("scroll",function(e){var o=n.offset().top;t&&clearTimeout(t),t=setTimeout(function(){var e=$(window).scrollTop();e>=s-70&&e<o-a?i.setFixed(!0):(i.setFixed(!1),s=$(i.$el).offset().top)},10)})}})},function(e,t,i){var n=i(54);e.exports=Backbone.View.extend({template:_.template(i(58)),data:{portable:!1},initialize:function(e){this.render();var t="";this.data.portable=e&&e.portable,this.data.portable&&(t=document.createElement("canvas").getContext?"canvas":"table",this.$el.find("#float-qrcode").qrcode({render:t,width:100,height:100,text:window.location.href}));var i=$("[data-role='contract-btn']");new n({btn:i,el:"body"})},render:function(){this.$el.html(this.template(this.data))}})},function(e,t,i){var n=i(55),s=i(56);e.exports=Backbone.View.extend({events:{"click .radio-sel li":"optSelected","click .us-btn-ok":"submit","change .write-need textarea":"checkValue","click .us-pop-wrapper":"hidePop"},data:{options:[{id:"0",content:"网站功能问题反馈"},{id:"1",content:"推荐内容问题反馈"},{id:"2",content:"侵权投诉"},{id:"3",content:"产品合作"},{id:"4",content:"商务、媒体合作"},{id:"5",content:"搜狐公众平台相关问题"},{id:"6",content:"广告合作与投诉"},{id:"7",content:"其他"}]},imgUploadurl:"http://changyan.sohu.com/api/2/comment/attachment",exsist:!1,imgPool:[],answers:{type:0,desc:undefined,contact:undefined},template:_.template(i(57)),initialize:function(e){var t=this;this.btn=e.btn,this.btn.on("click",function(e){if(t.exsist){t.pop_el.toggle();var i=!("none"==t.pop_el.css("display"));t.showShade(i)}else t.$el.append(t.template(t.data)),t.exsist=!t.exsist,t.pop_el=t.$el.find(".us-pop-wrapper"),t.shade_el=$(".body-shade"),t.showShade(!0),t.feed_el=t.$el.find(".unfeedback"),t.options=$(".radio-sel"),t.uploader_ipt=t.pop_el.find(".myFile"),t.upload_btn=t.pop_el.find(".add-file"),s&&(t.placeholder=new s(t.$el.find("input,textarea"))),"undefined"==typeof window.FormData&&(t.upload_btn.addClass("disable"),$(".upload-err-info").text("您的浏览器版本过低，不支持图片上传").show()),t.uploader_ipt.on("change",function(e){t.upLoadImg(this)}),t.scrollbarCaller();return!1})},hidePop:function(e){return $(e.target).hasClass("us-pop")||$(e.target).parents(".us-pop").length>0?$(e.target).hasClass(".close-us")||$(e.target).parents(".close-us").length>0?(this.pop_el.hide(),this.showShade(!1),!1):void 0:(this.pop_el.hide(),this.showShade(!1),!1)},submit:function(){var e=this;if(this.answers.desc=e.$el.find(".write-need textarea").val()==e.$el.find(".write-need textarea").attr("placeholder")?"":e.$el.find(".write-need textarea").val(),this.answers.contact=$(".input-mode").val()==$(".input-mode").attr("placeholder")?"":$(".input-mode").val(),!this.answers.desc||this.answers.desc<=0)return $(".box-need").find(".err-info").show(),!1;this.answers.pics=this.imgPool.join(","),this.answers.url=window.location.href,model=new n({data:this.answers}),model.on("sync",function(){e.pop_el.fadeOut(),e.showShade(!1),e.feed_el.fadeIn().delay(2e3).fadeOut()}),model.fetch()},upLoadImg:function(e){var t=e.files[0],i=this;if(!window.FormData)return void alert("您的浏览器版本过低，不支持上传图片");t&&$.ajax({url:this.imgUploadurl,type:"POST",data:new FormData(this.pop_el.find("form")[0]),cache:!1,processData:!1,contentType:!1,success:function(e){var e=JSON.parse(e);i.addImg("[data-role='img-pool']",e.url),$("#mt-file-upload")[0].reset()}})},addImg:function(e,t){var i=this.imgPool.length;$(e).append("<span class='add-img'><img src='"+t+"'><a class='close-pic'></a></span>"),i++,this.imgPool.push(t),this.imgPool.length>=5&&(this.uploader_ipt.attr("readonly","readonly"),this.upload_btn.addClass("disable"),this.upload_btn.on("click",function(){return $(".upload-err-info").show(),!1})),$(".close-pic").one("click",this.removeImg.bind(this))},removeImg:function(e){var t=$(e.currentTarget).parent(".add-img");src=t.find("img").attr("src"),t.remove();for(var i=0,n=this.imgPool.length;i<n;i++)if(this.imgPool[i]==src){this.imgPool.splice(i,1);break}return this.uploader_ipt.attr("readonly")&&this.imgPool.length<5&&(this.uploader_ipt.removeAttr("readonly"),this.upload_btn.removeClass("disable"),$(".upload-err-info").hide(),this.upload_btn.off("click")),!1},optSelected:function(e){this.options.find("li input"),this.options.find("li").removeClass("clk"),$(e.currentTarget).addClass("clk"),this.answers.type=$(e.currentTarget).attr("data-id")},showShade:function(e){var t=this;e?(t.shade_el.show(),$(document.body).css({overflow:"hidden"})):(t.shade_el.hide(),$(document.body).css({overflow:""}))},checkValue:function(e){""==e.currentTarget.value?$(".box-need").find(".err-info").show():$(".box-need").find(".err-info").hide()},scrollbarCaller:function(){function e(){var e=$(window).height(),t=$(window).width();-n.left>t/2?(i.css("marginLeft",0),i.css("left",0)):(i.css("marginLeft",""),i.css("left","")),-n.top>e/2?(i.css("marginTop",0),i.css("top",0)):(i.css("marginTop",""),i.css("top",""))}var t=this,i=t.pop_el.find(".us-pop"),n={left:parseInt(i.css("marginLeft")),top:parseInt(i.css("marginTop"))};e(),$(window).on("resize",_.throttle(e.bind(this),200))}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.data=e.data},fetch:function(){var e=this;this.url="//apiv2.sohu.com/apiV2/qt/advise?",$.ajax({url:this.url,type:"GET",dataType:"jsonp",data:this.data,success:function(t){200==t.code?e.trigger("sync",t):e.trigger("error",t)},error:function(t){e.trigger("error",t)}})}})},function(e,t){e.exports=function(){function e(e){e=this.filter(e),this.bindEvents(e),e.trigger("blur.placeholder")}e.prototype={constructor:e,setPlaceHolder:function(e){var t=this,i=$(this);""!==t.value||t.acticved||(t.value=i.attr("placeholder"),t.actived=!0)},clearPlaceHolder:function(){var e=this,t=$(this);e.value===t.attr("placeholder")&&e.actived&&(e.value="",e.actived=!1)},bindEvents:function(e){e.on("focus.placeholder",this.clearPlaceHolder),e.on("blur.placeholder",this.setPlaceHolder)},filter:function(e){return e.not(":radio, :checkbox, [type=hidden],:file")}};var t="placeholder"in document.createElement("input"),i="placeholder"in document.createElement("textarea");return t&&i?null:e}()},function(e,t){e.exports='<div class="us-pop-wrapper">\n<div class="us-pop">\n\t<a href="javascript:void(0)" class="close-us"><i class="icon-close"></i></a>\n\t<div class="wrapper">\n\t\t<div class="us-tt">联系我们</div>\n\t\t<div class="box box-problem clear">\n\t\t\t<h4>您想要解决的问题（必填）</h4>\n\t\t\t<ul class="radio-sel">\n\t\t\t\t<% for( var a = 0 ; a < options.length ; a++) { %>\n\t\t\t\t\t<%var item = options[a];\n\t\t\t\t%>\n\t\t\t\t\t<li data-id="<%= item.id%>" class="<%= a==0?\'clk\':\'\'%>"><span class="radio-icon"><input type="radio"></span><%=item.content%></li>\n\t\t\t\t<%}%>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class="box box-need clear">\n\t\t\t<h4>请在下方说明您的需求（必填）</h4>\n\t\t\t<div class="write-need"><textarea placeholder="请详细描述"></textarea></div>\n\t\t\t<span style="color:#ff0000;display: none" class="err-info">必须填写</span>\n\t\t</div>\n\t\t<div class="box box-pic clear">\n\t\t\t<span class="tt">添加图片：</span>\n\t\t\t<form id="mt-file-upload">\n\t\t\t\t<span class="add-file"><input type="file" class="myFile" name="file" accept="image/jpg,image/jpeg,image/png"><a href="#" class="file-btn">点击上传</a></span>\n\t\t\t\t<div data-role="img-pool">\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t<span class="err-info upload-err-info">图片最多上传5张</span>\t\t\t\n\t\t</div>\n\t\t<div class="box box-mode clear"><span class="tt">您的联系方式：</span><input type="text" class="input-mode" placeholder="微信/QQ/手机/邮箱，方便工作人员与您取得联系。" /></div>\n\t\t<div class="btns"><input type="button" class="us-btn us-btn-ok" value="提交" /></div>\n\t</div>\n</div>\n</div>\n\n<div class="unfeedback"><i class="feedback-icon"></i>\n\t<p>我们会尽快处理您的反馈，谢谢支持！</p>\n</div>'},function(e,t){e.exports='<ul>\n    <% if (portable){%>\n    <li class="qrcode-fun" data-role="code-btn"><a href="#" target="_blank"><em class="icon-qrcode"></em>手机浏览</a>\n        <div class="wx-code">\n            <div class="cort"></div>\n            <div class="code-pic"  id="float-qrcode"></div>\n            <p>扫一扫<br />手机上看热点内容</p>\n        </div>\n    </li>\n    <%}%>\n    <li class="contact-fun" data-role="contract-btn"><a href="javascript:void(0)"><em class="contact-icon icon"></em>联系我们</a></li>\n</ul>'},function(e,t,i){var n=i(60);e.exports=Backbone.View.extend({template:_.template(i(61)),events:{"click li":"liEvent","click .uninterested-ok":"submitInfo","click .uninterested-link":"showBox","click .uninterested-box":"keepLive","click .otherquestion":"showTextarea"},data:{callback:"callback",mpId:0,mediaId:0,dislikeTypes:[],detail:"",suv:"",count:0},init:function(){this.$el.find("ul li").each(function(){$(this).removeClass("clk"),$(this).find("input").prop("checked",!1)}),this.$el.find(".unia").hide().find("textarea").val(""),this.hideInfo()},isPad:function(){return-1!=window.navigator.userAgent.indexOf("iPad")},liEvent:function(e){this.checkItem(e),this.hideInfo();var t=$(e.currentTarget).find("input");t.prop("checked",!t.prop("checked"))},checkItem:function(e){$(e.currentTarget).toggleClass("clk")},showTextarea:function(){this.$el.find(".unia").toggle().find("textarea").val("")},getCookie:function(){var e,t=new RegExp("(^| )SUV=([^;]*)(;|$)");return(e=document.cookie.match(t))?unescape(e[2]):null},showInfo:function(){this.$el.find(".btn span").show()},hideInfo:function(){this.$el.find(".btn span").hide()},showFeedback:function(){this.$el.find(".unfeedback").delay(500).fadeIn(400).delay(2e3).fadeOut(400)},hideFeedbackBox:function(){this.$el.find(".uninterested-box").hide()},keepLive:function(e){e.stopPropagation()},submitInfo:function(e){e.preventDefault();var t=this,i=this.$el.find(".unia textarea").val();return t.data.dislikeTypes=[],this.$el.find("ul li.clk").each(function(){t.data.dislikeTypes.push($(this).data("val"))}),-1!=$.inArray(10,this.data.dislikeTypes)?this.data.detail=$.trim(i):this.data.detail="",0==this.data.dislikeTypes.length?(this.$el.find(".btn span").show().text("*请选择原因"),!1):-1!=$.inArray(10,this.data.dislikeTypes)&&""==this.data.detail?(this.$el.find(".btn span").show().text("*请填写原因"),!1):void(0==this.data.count?this.model.fetch():(this.init(),this.$el.find(".uninterested-no").fadeIn(400).delay(2e3).fadeOut(400),this.hideFeedbackBox()))},showBox:function(e){e.preventDefault(),e.stopPropagation(),this.hideInfo(),this.$el.find(".uninterested-box").toggle()},render:function(){this.$el.html(this.template(this.data))},initialize:function(e){var t=this;this.opts=e.data.opts,this.data.suv=this.getCookie(),this.data.mpId=this.opts.news_id,this.data.mediaId=this.opts.media_id||-1,this.model=new n({data:this.data}),this.model.one("sync",function(e){t.init(),t.showFeedback(),t.hideFeedbackBox(),this.data.count++,-1==e.status&&console.log("status 为-1 ，参数不足")}),$(document.body).on("click touch",function(e){t.hideFeedbackBox()}),this.render()}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.data=e.data},fetch:function(){var e=this;this.url="//apiv2.sohu.com/apiV2/feedback/dislike",$.ajax({url:this.url,type:"GET",dataType:"jsonp",data:{mpId:e.data.mpId,mediaId:e.data.mediaId,type:e.data.dislikeTypes.join(","),detail:e.data.detail,suv:e.data.suv},success:function(t){e.trigger("sync",t)},error:function(){e.trigger("error")}})}})},function(e,t){e.exports='\n<a class="uninterested-link" target="_blank" href="#"><em class="uninterested-icon icon"></em>不感兴趣</a>\n<div class="uninterested-box">\n\t<div class="cort"></div>\n\t<h4>不感兴趣</h4>\n\t<ul>\n\t\t<li data-val="1"><span class="checkbox-icon"><input type="checkbox" /></span>广告软文</li>\n\t\t<li data-val="2"><span class="checkbox-icon"><input type="checkbox" /></span>重复、旧闻</li>\n\t\t<li data-val="3"><span class="checkbox-icon"><input type="checkbox" /></span>文章质量差</li>\n\t\t<li data-val="4"><span class="checkbox-icon"><input type="checkbox" /></span>文字、图片、视频等展示问题</li>\n\t\t<li data-val="5"><span class="checkbox-icon"><input type="checkbox" /></span>标题夸张、文不对题</li>\n\t\t<li data-val="6"><span class="checkbox-icon"><input type="checkbox" /></span>与事实不符</li>\n\t\t<li data-val="7"><span class="checkbox-icon"><input type="checkbox" /></span>低俗色情</li>\n\t\t<li data-val="8"><span class="checkbox-icon"><input type="checkbox" /></span>欺诈或恶意营销</li>\n\t\t<li data-val="9"><span class="checkbox-icon"><input type="checkbox" /></span>疑似抄袭</li>\n\t\t<li data-val="10" class="otherquestion"><span class="checkbox-icon"><input type="checkbox" /></span>其他问题，我要吐槽</li>\n\t</ul>\n\t<div class="unia"><textarea maxlength="200"></textarea></div>\n\t<div class="btn"><a href="#" target="_blank" class="uninterested-ok">确定</a><span></span></div>\n</div>\n<div class="uninterested-no"><div class="cort"></div>请勿重复提交</div>\n<div class="unfeedback"><i class="feedback-icon"></i><p>感谢您的反馈，我们将会减少此类文章的推荐</p></div>'},function(e,t,i){var n=i(63),s=i(64),a=new s;e.exports=Backbone.View.extend({template:_.template(i(65)),events:{"click li":"handleClk"},data:{items:[]},initialize:function(e){var t=this;this.ev_triggered=!1,this.model=e.model,this.model.on("sync",function(e){t.data.items=e.length>12?e.slice(0,12):e,t.render()}),this.model.fetch()},render:function(){this.data.items.length&&a.pv_trigger({uigs_productid:"webapp",type:"sohustat",stype:"recom_pv"}),this.$el.html(this.template(this.data)),this.startMonitor()},startMonitor:function(){$(window).on("resize scroll",_.throttle(this.handler).bind(this))},handler:function(){this.ev_triggered||n(this.$el)&&(a.ev_trigger({uigs_productid:"webapp",type:"sohustat",stype:"recom_ev"}),this.ev_triggered=!0)},handleClk:function(e){a.click_trigger({uigs_productid:"webapp",type:"sohustat",stype:"recommend",cl_kw:window.encodeURIComponent($(e.currentTarget).text())})}})},function(e,t){var i=function(e){if(!e.is(":visible"))return!1;var t=$(window),i={top:t.scrollTop(),left:t.scrollLeft()};i.right=i.left+t.width(),i.bottom=i.top+t.height();var n=e.outerHeight(),s=e.outerWidth();if(!s||!n)return!1;var a=e.offset();return a.right=a.left+s,a.bottom=a.top+n,!(i.right<a.left||i.left>a.right||i.bottom<a.top||i.top>a.bottom)};e.exports=i},function(e,t,i){var n=i(4),s=function(e,t){var i="";for(var n in t)i+=n+"="+t[n]+"&";return i=i.substring(0,i.length-1),e=e+"?"+i},a=function(e,t){e=s(e,t),o(e)},o=function(e){setTimeout(function(){var t=document.createElement("img");t.src=e,$(t).css({display:"none",width:0,height:0}).appendTo("body").on("load error",function(){$(this).remove()})},0)};e.exports=n.extend({init:function(){},ev_trigger:function(e){a("//pb.sogou.com/pv.gif",e)},pv_trigger:function(e){a("//pb.sogou.com/pv.gif",e)},click_trigger:function(e){a("//pb.sogou.com/cl.gif",e)}})},function(e,t){e.exports='<%if(items.length>0){%>\n<div class="title"><span><em class="ln"></em>本文相关推荐</span></div>\n<ul class="recom-list" data-role="sogou-recom">\n    <%for (var i = 0; i < items.length; i++) {\n        var item = window.decodeURIComponent(items[i]);\n    %>\n    \n    <li><a href="//www.sogou.com/sogou?pid=sogou-wsse-ba500f04049a8eec&ie=utf8&query=<%=item%>" target="_blank"><%=item%>\n    <%if (i == 0) {%><em class="hot-icon icon"></em><%}%></a></li>\n    \n    <%}%>\n</ul>\n<%}%>'},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.apiUrl="//tuijian.sogou.com/websearch/features/sohu_recommend.jsp",this.opts=e},gen_url:function(e,t){var i="";for(var n in t)i+=n+"="+window.encodeURIComponent(t[n])+"&";return i=i.substring(0,i.length-1),e=e+"?"+i},fetch:function(){var e=this;$.ajax({url:this.apiUrl,method:"POST",dataType:"json",data:this.opts,success:function(t){try{"string"==typeof t&&(t=JSON.parse(t)),e.trigger("sync",t.hotwords)}catch(i){e.trigger("error")}},error:function(t){e.trigger("error",t)}})}})},function(e,t,i){var n=i(68);e.exports=Backbone.View.extend({template:_.template(i(69)),data:{info:{}},model:null,render:function(){this.$el.html(this.template(this.data))},initialize:function(e){this.model=new n({passport:e.passport}),this.user_model=e.model;var t=this;this.user_model&&this.user_model.on("sync",function(e){t.data.user_info=e,t.data.ad_info&&t.data.user_info&&(t.data.ad_info.pcText1&&t.data.ad_info.pcTitle1||t.data.ad_info.pcText2&&t.data.ad_info.pcTitle2)&&(t.render(),t.$el.show())}),this.model&&this.model.on("sync",function(e){t.data.ad_info=e.object,t.data.ad_info&&t.data.user_info&&(t.data.ad_info.pcText1&&t.data.ad_info.pcTitle1||t.data.ad_info.pcText2&&t.data.ad_info.pcTitle2)&&(t.render(),t.$el.show())}),this.model.fetch()}})},function(e,t,i){var n=i(4);i(16);e.exports=n.extend({init:function(e){this.passport=e.passport},fetch:function(){if(!this._fetching){var e=this;this.url="/apiV2/ad/info?passport="+this.passport,this._fetching=!0,n.prototype.fetch.call(this,{success:function(t){e._fetching=!1;try{e.trigger("sync",t)}catch(i){e.trigger("error")}},error:function(){e._fetching=!1}})}}})},function(e,t){e.exports='<%if((ad_info.pcText1 && ad_info.pcTitle1)||(ad_info.pcText2 && ad_info.pcTitle2)){%>\n<div class="user-god-pic">\n    <a href="<%=user_info.weiboUrl%>" target="_blank"><img src="<%=user_info.avatorUrl%>" alt=""></a>\n</div>\n<div class="user-god-link">\n    <%if(ad_info.pcText1 && ad_info.pcTitle1){%>\n    <dl>\n        <dt><a href="<%=ad_info.pcLink1||\'#\'%>" target="_blank"><%=ad_info.pcTitle1%></a></dt>\n        <dd><%=ad_info.pcText1%></dd>\n    </dl>\n    <%}%>\n    <%if(ad_info.pcText2 && ad_info.pcTitle2){%>\n    <dl>\n        <dt><a href="<%=ad_info.pcLink2||\'#\'%>" target="_blank"><%=ad_info.pcTitle2%></a></dt>\n        <dd><%=ad_info.pcText2%></dd>\n    </dl>\n    <%}%>\n</div>\n<%}%>'},function(e,t,i){var n=i(71),s=(i(11),function(e,t,i){this.news_feeds=e,this.news_id=i&&i.news_id,this.channel_id=i&&i.channel_id,this.sub_id=i&&i.sub_id,this.tag_id=i&&i.tag_id,this.start=i&&i.start||5,this.interval=i&&i.interval||4,this.extra=i&&i.extra;var n=this;this.ad_type=t,this.news_feeds.on("news:add",function(){n.setNewsAdLoc(),n.append_ad_place(n.newsAd)}),this.news_feeds.$el.find('[data-role="news-item"]').size()>0&&n.render()});s.prototype={position:1,newsAd:[],setNewsAdLoc:function(){var e=this,t=this.news_feeds.$el.find('.news-box:not([data-role="god"]):not(".cpc-news")').size(),i=$(".news-box[data-role='god']").last().length?($(".news-box[data-role='god']").last().attr("data-position")-1)*this.interval+this.start-1:this.start-1-this.interval;this.newsAd=[];for(var n=i;n<=t-this.interval;n+=this.interval)this.newsAd.push({$ad:$(e.create_ad_placeholder({position:e.position})),loc:n+e.interval-1,position:e.position}),this.position++},
append_ad_place:function(e){for(var t=this.news_feeds.$el.find('.news-box:not([data-role="god"]):not(".cpc-news")'),i=0;i<e.length;i++){var s=e[i];t.eq(s.loc).after(s.$ad),n(s.$ad,this.ad_type||"feeds",{position:s.position,tag_id:this.tag_id,channel_id:this.channel_id,sub_id:this.sub_id,news_id:this.news_id})}},render:function(){var e=this;this.setNewsAdLoc(),this.extra?this.extra.on("v-recom:rendered",function(){var t=e.newsAd;e.append_ad_place(t)}):e.append_ad_place(e.newsAd)},reset:function(){this.page=0,this.ad_index=0,this.news_feeds.$el.find('[data-role="ad"]').remove()},create_ad_placeholder:function(e){return $("<div class='news-box clear' data-position='"+e.position+"' style='display:none' data-role='god'></div>")}},e.exports=s},function(e,t,i){var n=i(72),s=function(e,t,i){var s="";s=i&&i.sub_id&&i.channel_id?"sub":i&&"dsy"==i.type?"pic_collection":i&&i.news_id&&i.channel_id?"article":i&&i.tag_id&&i.channel_id?"tag":i&&"news_channel"==i.type?"news_channel":i&&i.channel_id?"channel":i&&"v3"==i.type?"v3_index":i&&"popup"==i.type?"popup":"index";var a=new n(s,t,e);return a.init(i),a};e.exports=s},function(e,t,i){function n(e){if("object"!=typeof e||null==e)return 0;try{if(Object.keys)return Object.keys(e).length;var t,i=[];for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&i.push(t);return i.length}catch(n){return 0}}var s=i(73),a=i(75),r=new a,c=(i(7),i(77)),l=i(80),d=i(106),h=i(76),u=i(107),p=function(e,t,i){this.$el=i,c[e]&&(this.page_type=e,this.ad_type=t,this.ad=c[e][t],this.ad&&(this.adps=this.ad.size,this.AdInstance=this.ad.Ins,this.support_flash=h(t)?"1":"0",this.needMultiItem=this.ad.needMultiItem))},f=i(108),m=i(109);p.prototype={init:function(e){if(!this.ad)return void(this.empty_ad?this.empty_ad():this.$el.hide());var t=this;this.empty_ad=e.empty_ad||this.empty_ad;var i,a=(new Date).getTime(),o=this.ad.ad_id;this.$el.attr("data-god-id",o);var c=f(e),h=d(this.page_type,this.ad_type,e),p=e.maxreads?e.maxreads>21?21:e.maxreads:1,g=m(e),_=e.data;if("BAIDUUNION"===this.ad.adType)"none"===t.$el.css("display")&&t.$el.show(),t.ad_instance=new t.AdInstance({el:t.$el,data:{adType:t.ad.adType,id:t.ad.ad_id,ad_type:t.ad_type,baiduId:t.ad.baiduId,spm:t.ad.spm,pcm:t.ad.pcm}}),t.ad_instance.render(),setTimeout(function(){u.refreshBuryCode()},0),u.genBaiDuAds(t.ad.baiduId,t.$el.find(".baiduAds a")[0]);else{var v=new s({turn:t.ad.turn||h||1,id:t.ad.itemspaceid||o,position:e.position,channel_id:c,sub_id:e.sub_id,tag_id:e.tag_id,news_id:e.news_id,subid:e.subid,adps:t.ad.adps||t.adps,maxreads:t.ad.maxreads||p,multichn:g,support_flash:t.support_flash});i=(new Date).getTime()-a;var w=function(n){var s=n&&n.monitorkey||"",a=t.$el.offset()||{};""===s?a.left=a.top="":t.$el.is(":visible")?(a.left=a.left.toFixed(1),a.top=a.top.toFixed(1)):a.left=a.top=0,r.pv_trigger({source:n&&n.source||"",newsid:e.news_id||"",subid:e.subid||"",aid:n&&n.adid||"",apid:"beans_"+o,impid:n&&n.impression_id||"",mkey:s,latcy:i,freq:n&&n.freq||0,ax:a&&a.left,ay:a&&a.top,ed:n&&n.ed||"",bucket:n&&n.bucket||"",ext:n&&n.ext||"",uloc:n&&n.uloc||"",newschn:c,turn:h,position:e.position||"",pgid:l.get(e),shbd_monitor_ext:n&&n.shbd_monitor_ext||"",sf:t.support_flash})};v.on("sync",function(s){if(("column_2"==t.ad_type||"column_3"==t.ad_type||"column_4"==t.ad_type)&&"v3"==e.type){if(1==s.length&&s[0])s[0].resource.width<=575&&(s=s[0].source?[{source:s[0].source}]:[],w(s[0]));else if(s.length>1&&s[0])switch(s[0].resource&&s[0].resource.type){case"iframe":break;case"image":case"flash":s[0].resource.width<=575&&(s[1]&&575==s[1].resource.width&&"iframe"!=s[1].resource.type||(s=s[0].source?[{source:s[0].source}]:[],w(s[0])));break;default:console.log("请求数据",s)}else w(s[0]);console.log("请求数据",s)}s[0]&&n(s[0])>1?(t.$el.show().attr("data-monitorkey",s[0].monitorkey),t.ad_instance=new t.AdInstance({adType:"",newsid:e.news_id||"",subid:e.subid||"",data:t.needMultiItem?s:s[0],turn:h,ad_id:o,el:t.$el,latcy:i,position:e.position,channel_id:e.channel_id,sub_id:e.sub_id,tag_id:e.tag_id,news_id:e.news_id,ad_channel_id:c,sf:t.support_flash,ad_type:t.ad_type,type:e.type}),t.ad_instance.render()):(t.ad_instance&&t.ad_instance.hide&&t.ad_instance.hide(),t.empty_ad?t.empty_ad():t.$el.hide()),w(s[0])}),v.on("error",function(){w(),t.ad_instance&&t.ad_instance.hide&&t.ad_instance.hide(),t.empty_ad?t.empty_ad():t.$el.hide()}),_?v.trigger("sync",[_]):v.fetch()}},reset:function(e){this.ad_instance&&this.ad_instance.undelegateEvents(),this.init(e)}},e.exports=p},function(e,t,i){var n=i(4),s=i(7),a=i(74),o=i(21).ad_gtr_server,r=function(e){e.file&&"string"==typeof e.file&&/^http/gi.test(e.file)&&(e.file=e.file.replace(/^http(s)?:/gi,""))};e.exports=n.extend({init:function(e){this.itemspaceid=e.id,this.pgid=e.pgid,this.adsrc=13,this.turn=e.turn,this.adps=e.adps,this.newsid=e.news_id||"",this.subid=e.subid||"",this.appid="pcnews",this.newschn=e.channel_id,this._smuid=s.get("_smuid")||"",this.suv=s.get("SUV"),this.yyid=s.get("yyid")||"",this.support_flash=e.support_flash,this.duid=s.get("_duid"),this.position=e.position,this.maxreads=e.maxreads,this.multichn=e.multichn},fetch:function(){var e=this;this.url=o+"adgtr/?callback=?",$.ajax({url:this.url,dataType:"jsonp",data:{itemspaceid:this.itemspaceid,sf:this.support_flash,pgid:this.pgid,newschn:this.newschn,smuid:this._smuid,SUV:this.suv,newsid:this.newsid,subid:this.subid,appid:this.appid,yyid:this.yyid,adsrc:this.adsrc,adps:this.adps,turn:this.turn,duid:this.duid,position:this.position,pgid:a.get(),maxreads:this.maxreads,multichn:this.multichn},success:function(t){if(t[0]){var i=t[0];i.resource&&r(i.resource),i.resource1&&r(i.resource1),i.resource2&&r(i.resource2),i.resource3&&r(i.resource3),i.resource4&&r(i.resource4),i.resource5&&r(i.resource5),i.resource6&&r(i.resource6)}e.trigger("sync",t)},error:function(){e.trigger("error")}})}})},function(e,t){function i(){this.date=new Date,"function"!=typeof this.newGUID&&(i.prototype.newGUID=function(){this.date=new Date;var e="";sexadecimalDate=this.hexadecimal(this.getGUIDDate(),16),sexadecimalTime=this.hexadecimal(this.getGUIDTime(),16);for(var t=0;t<9;t++)e+=Math.floor(16*Math.random()).toString(16);for(e+=sexadecimalDate,e+=sexadecimalTime;e.length<32;)e+=Math.floor(16*Math.random()).toString(16);return this.formatGUID(e)},i.prototype.getGUIDDate=function(){return this.date.getFullYear()+this.addZero(this.date.getMonth()+1)+this.addZero(this.date.getDay())},i.prototype.getGUIDTime=function(){return this.addZero(this.date.getHours())+this.addZero(this.date.getMinutes())+this.addZero(this.date.getSeconds())+this.addZero(parseInt(this.date.getMilliseconds()/10))},i.prototype.addZero=function(e){return"NaN"!=Number(e).toString()&&e>=0&&e<10?"0"+Math.floor(e):e.toString()},i.prototype.hexadecimal=function(e,t,i){return i!=undefined?parseInt(e.toString(),i).toString(t):parseInt(e.toString()).toString(t)},i.prototype.formatGUID=function(e){return e.slice(0,8)+"-"+e.slice(8,12)+"-"+e.slice(12,16)+"-"+e.slice(16,20)+"-"+e.slice(20)})}var n=new i;e.exports={get:function(){return this._guid=this._guid||n.newGUID(),this._guid},reset:function(){this._guid=n.newGUID()}}},function(e,t,i){var n=i(4),s=(i(76),i(7)),a=document.referrer,o=function(e){return window.encodeURIComponent&&"function"==typeof encodeURIComponent?encodeURIComponent(e):window.encodeURI&&"function"==typeof window.encodeURI?window.encodeURI(e):e},r=s.get("SUV"),c=function(e,t){var i="";t.at=t.at||"1",t.supplyid="1",t.sf=t.sf,t.timestamp=(new Date).getTime(),t.r=Math.random(),t.rsln=window.screen.width+"*"+window.screen.height,t.smuid=s.get("_smuid")||"";for(var n in t)i+=n+"="+t[n]+"&";return i=i.substring(0,i.length-1),e=e+"?"+i,e=e+"&suv="+r+"&pagerefer="+o(a)+"&appid=pcnews"},l=function(e,t){e=c(e,t),d(e)},d=function(e){setTimeout(function(){var t=document.createElement("img");e.indexOf("?")>0?t.src=e+"&_r="+(new Date).getTime():t.src=e+"?_r="+(new Date).getTime(),$(t).css({display:"none",width:0,height:0}).appendTo("body").on("load error",function(){$(this).remove()})},0)};e.exports=n.extend({init:function(){},pv_trigger:function(e){l("//i.go.sohu.com/count/v",e)},av_trigger:function(e){l("//i.go.sohu.com/count/av",e)},click_trigger:function(e){l("//i.go.sohu.com/count/c",e)},get_click_trigger_url:function(e){return c("//i.go.sohu.com/count/c",e)},play_trigger:function(e){l("//i.go.sohu.com/count/vp",e)},trigger_imp:function(e){e.url&&0==e.url.indexOf("http")&&d(e.url)},count_trigger:function(e){d("//pv.sohu.com/click.gif?id=10000063&suv=1506101635319085")}})},function(e,t){e.exports=function(e){var t=null;if(/chrome/.test(navigator.userAgent.toLowerCase())&&"feeds"==e)return!1;if("index_side_txt"==e)return!1;if(document.all||document.getElementsByTagName("*")){try{if(t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return!0}catch(i){}if(!t&&navigator.plugins&&navigator.plugins.length>0){var t=navigator.plugins["Shockwave Flash"];if(t)return!0}}return!1}},function(e,t,i){var n=i(78),s=i(82),a=i(84),o=i(86),r=i(88),c=i(90),l=i(92),d=(i(94),i(98),i(100),i(102)),h=i(104),u=i(105),p={channel:{nav_button:{ad_id:"15280",desc:"PC端频道首页冠名广告",size:"3400064",Ins:n},focus:{ad_id:"15281",desc:"PC端频道首页焦点图",size:"6400320",Ins:a},side_1:{ad_id:"15282",desc:"PC端频道首页矩形1",size:"3000250",Ins:n},side_2:{ad_id:"15283",desc:"PC端频道首页矩形2",size:"3000250",Ins:n},side_3:{ad_id:"15284",desc:"PC端频道首页矩形3",size:"3000250",Ins:n},side_fix:{ad_id:"15285",desc:"PC端频道首页悬浮矩形",size:"20000009",Ins:c},writer:{ad_id:"15286",desc:"PC端频道首页搜狐公众号号推荐图混",size:"500050",Ins:r},recommends:{ad_id:"15287",desc:"PC端频道首页24小时热文推荐图混",size:"30000002",Ins:l},feeds:{ad_id:"15288",desc:"PC端频道首页信息流",size:"30000003",Ins:o},channel_top:{ad_id:"15324",desc:"频道头栏拉伸",size:"20000009",Ins:s},hot_spot:{ad_id:"15407",desc:"热点直达广告",size:"60001",Ins:n}},sub:{nav_button:{ad_id:"15289",desc:"PC端二级页冠名广告",size:"3400064",Ins:n},side_1:{ad_id:"15290",desc:"PC端二级页矩形1",size:"3000250",Ins:n},side_2:{ad_id:"15291",desc:"PC端二级页矩形2",size:"3000250",Ins:n},side_3:{ad_id:"15292",desc:"PC端二级页矩形3",size:"3000250",Ins:n},side_fix:{ad_id:"15293",desc:"PC端二级页悬浮矩形",size:"20000009",Ins:c},writer:{ad_id:"15294",desc:"PC端二级页搜狐公众号号推荐图混",size:"500050",Ins:r},recommends:{ad_id:"15295",desc:"PC端二级页24小时热文推荐图混",size:"30000002",Ins:l},feeds:{ad_id:"15296",desc:"PC端二级页信息流",size:"30000003",Ins:o},hot_spot:{ad_id:"15408",desc:"热点直达广告",size:"60001",Ins:n}},tag:{side_1:{ad_id:"15297",desc:"PC端标签页矩形1",size:"3000250",Ins:n},side_2:{ad_id:"15298",desc:"PC端标签页矩形2",size:"3000250",Ins:n},side_3:{ad_id:"15299",desc:"PC端标签页矩形3",size:"3000250",Ins:n},side_fix:{ad_id:"15300",desc:"PC端标签页悬浮矩形",size:"20000009",Ins:c},writer:{ad_id:"15301",desc:"PC端标签页搜狐公众号号推荐图混",size:"500050",Ins:r},recommends:{ad_id:"15302",desc:"PC端二级页24小时热文推荐图混",size:"30000002",Ins:l},feeds:{ad_id:"15303",desc:"PC端标签页信息流",size:"30000003",Ins:o},hot_spot:{ad_id:"15409",desc:"热点直达广告",size:"60001",Ins:n}},article:{nav_button:{ad_id:"15304",desc:"PC端文章页冠名广告",size:"3400064",Ins:n},side_1:{ad_id:"15305",desc:"PC端文章页矩形1",size:"3000250",Ins:n},side_2:{ad_id:"15306",desc:"PC端文章页矩形2",size:"3000250",Ins:n},side_3:{ad_id:"15307",desc:"PC端文章页矩形3",size:"3000250",Ins:n},side_4:{ad_id:"15308",desc:"PC端文章页矩形4",size:"3000250",Ins:n},side_fix:{ad_id:"15309",desc:"PC端文章页悬浮矩形",size:"20000009",Ins:c},article_bottom:{ad_id:"15310",desc:"PC端文章页中部通栏",size:"6400150",Ins:n},writer:{ad_id:"15311",desc:"PC端文章页搜狐公众号号推荐图混",size:"500050",Ins:r},recommends:{ad_id:"15312",desc:"PC端文章页24小时热文推荐图混",size:"30000002",Ins:l},feeds:{ad_id:"15313",desc:"PC端文章页信息流",size:"30000003",Ins:o},hot_spot:{ad_id:"15428",desc:"热点直达广告",size:"60001",Ins:n}},v3_index:{"drain-btn":{ad_id:"16078",regionId:"16078",desc:"经典版引流按钮"},index_focus:{ad_id:"15537",desc:"PC端搜狐V3首页焦点图",size:"3200213",Ins:a},side_1:{ad_id:"15538",desc:"PC端搜狐V3首页矩形1",size:"3000250",Ins:n},side_2:{ad_id:"15539",desc:"PC端搜狐V3首页矩形2",size:"3000250",Ins:n},side_3:{ad_id:"15540",desc:"PC端搜狐V3首页矩形3",size:"3000250",Ins:n},side_4:{ad_id:"15541",desc:"PC端搜狐V3首页矩形4",size:"3000250",Ins:n},side_5:{ad_id:"15109",regionId:"15109",desc:"PC端搜狐V3首页矩形5",size:"3000250",spm:"god-side-5",Ins:n},side_6:{ad_id:"15594",desc:"PC端搜狐V3首页矩形6",size:"3000250",Ins:n},side_7:{ad_id:"15768",desc:"PC端搜狐V3首页矩形7",size:"3000250",Ins:n},side_8:{ad_id:"15769",desc:"PC端搜狐V3首页矩形8",size:"3000250",Ins:n},column_1:{ad_id:"15595",desc:"PC端搜狐V3首页通栏1",size:"10300100",Ins:n},column_2:{ad_id:"15632",desc:"PC端搜狐V3首页通栏2",size:"30000002",Ins:h,needMultiItem:!0},sub_column_2:{ad_id:"15632",desc:"PC端搜狐V3首页通栏3",size:"30000002",Ins:n},column_3:{ad_id:"15633",desc:"PC端搜狐V3首页通栏3",size:"30000002",Ins:n,Ins:h,needMultiItem:!0},sub_column_3:{ad_id:"15633",desc:"PC端搜狐V3首页通栏3",size:"30000002",Ins:n},column_4:{ad_id:"15634",desc:"PC端搜狐V3首页通栏4",size:"30000002",Ins:n,Ins:h,needMultiItem:!0},sub_column_4:{ad_id:"15634",desc:"PC端搜狐V3首页通栏3",size:"30000002",Ins:n},column_5:{ad_id:"15108",regionId:"15108",desc:"PC端搜狐V3首页通栏5",size:"8500100",spm:"god-middle-5",Ins:n},column_6:{ad_id:"15110",regionId:"15110",desc:"PC端搜狐V3首页通栏6",size:"8500100",spm:"god-middle-6",Ins:n},column_7:{ad_id:"15637",desc:"PC端搜狐V3首页通栏7",size:"8500100",Ins:n},column_8:{ad_id:"15638",desc:"PC端搜狐V3首页通栏8",size:"11800100",Ins:n},promotion_1:{ad_id:"15639",desc:"PC端搜狐V3首页推广区1",size:"3000439",Ins:n},promotion_2:{ad_id:"15106",regionId:"15106",desc:"PC端搜狐V3首页推广区2",size:"3000250",spm:"god-promotion-2",Ins:n},promotion_3:{ad_id:"15107",regionId:"15107",desc:"PC端搜狐V3首页推广3",size:"3000150",spm:"god-promotion-3",Ins:n},txt_focus_1:{ad_id:"15620",desc:"PC端搜狐V3首页要闻半行文字链1",size:"130001",Ins:n},txt_focus_2:{ad_id:"15621",desc:"PC端搜狐V3首页要闻半行文字链2",size:"130001",Ins:n},txt_yule_1:{ad_id:"15622",desc:"PC端搜狐V3首页娱乐半行文字链1",size:"130001",Ins:n},txt_yule_2:{ad_id:"15623",desc:"PC端搜狐V3首页娱乐半行文字链2",size:"130001",Ins:n},txt_sports_1:{ad_id:"15631",desc:"PC端搜狐V3首页体育半行文字链1",size:"130001",Ins:n},txt_sports_2:{ad_id:"15630",desc:"PC端搜狐V3首页体育半行文字链2",size:"130001",Ins:n},txt_business_1:{ad_id:"15629",desc:"PC端搜狐V3首页财经半行文字链1",size:"130001",Ins:n},txt_business_2:{ad_id:"15628",desc:"PC端搜狐V3首页财经半行文字链2",size:"130001",Ins:n},txt_house_1:{ad_id:"15627",desc:"PC端搜狐V3首页房产半行文字链1",size:"130001",Ins:n},txt_house_2:{ad_id:"15626",desc:"PC端搜狐V3首页房产半行文字链2",size:"130001",Ins:n},txt_auto_1:{ad_id:"15625",desc:"PC端搜狐V3首页汽车半行文字链1",size:"130001",Ins:n},txt_auto_2:{ad_id:"15624",desc:"PC端搜狐V3首页汽车半行文字链2",size:"130001",Ins:n},txt_it_1:{ad_id:"15596",desc:"PC端搜狐V3首页科技半行文字链1",size:"130001",Ins:n},txt_it_2:{ad_id:"15597",desc:"PC端搜狐V3首页科技半行文字链2",size:"130001",Ins:n},txt_fashion_1:{ad_id:"15598",desc:"PC端搜狐V3首页时尚半行文字链1",size:"100001",Ins:n},txt_fashion_2:{ad_id:"15599",desc:"PC端搜狐V3首页时尚半行文字链2",size:"100001",Ins:n},txt_mil_1:{ad_id:"15600",desc:"PC端搜狐V3首页军事半行文字链1",size:"100001",Ins:n},txt_mil_2:{ad_id:"15601",desc:"PC端搜狐V3首页军事半行文字链2",size:"100001",Ins:n},txt_history_1:{ad_id:"15603",desc:"PC端搜狐V3首页历史半行文字链1",size:"100001",Ins:n},txt_history_2:{ad_id:"15602",desc:"PC端搜狐V3首页历史半行文字链2",size:"100001",Ins:n},txt_health_1:{ad_id:"15604",desc:"PC端搜狐V3首页健康半行文字链1",size:"100001",Ins:n},txt_health_2:{ad_id:"15605",desc:"PC端搜狐V3首页健康半行文字链2",size:"100001",Ins:n},txt_cul_1:{ad_id:"15606",desc:"PC端搜狐V3首页文化半行文字链1",size:"100001",Ins:n},txt_cul_2:{ad_id:"15607",desc:"PC端搜狐V3首页文化半行文字链2",size:"100001",Ins:n},txt_travel_1:{ad_id:"15608",desc:"PC端搜狐V3首页旅游半行文字链1",size:"100001",Ins:n},txt_travel_2:{ad_id:"15609",desc:"PC端搜狐V3首页旅游半行文字链2",size:"100001",Ins:n},txt_learning_1:{ad_id:"15610",desc:"PC端搜狐V3首页教育半行文字链1",size:"100001",Ins:n},txt_learning_2:{ad_id:"15611",desc:"PC端搜狐V3首页教育半行文字链2",size:"100001",Ins:n},txt_baobao_1:{ad_id:"15612",desc:"PC端搜狐V3首页母婴半行文字链1",size:"100001",Ins:n},txt_baobao_2:{ad_id:"15613",desc:"PC端搜狐V3首页母婴半行文字链2",size:"100001",Ins:n},txt_chihe_1:{ad_id:"15614",desc:"PC端搜狐V3首页美食半行文字链1",size:"100001",Ins:n},txt_chihe_2:{ad_id:"15615",desc:"PC端搜狐V3首页美食半行文字链2",size:"100001",Ins:n},txt_astro_1:{ad_id:"15616",desc:"PC端搜狐V3首页星座半行文字链1",size:"100001",Ins:n},txt_astro_2:{ad_id:"15617",desc:"PC端搜狐V3首页星座半行文字链2",size:"100001",Ins:n},txt_pets_1:{ad_id:"15618",desc:"PC端搜狐V3首页生活半行文字链1",size:"100001",Ins:n},txt_pets_2:{ad_id:"15619",desc:"PC端搜狐V3首页生活半行文字链2",size:"100001",Ins:n},txt_acg_1:{ad_id:"15770",desc:"PC端搜狐V3首页动漫半行文字链1",size:"100001",Ins:n},txt_acg_2:{ad_id:"15771",desc:"PC端搜狐V3首页动漫半行文字链2",size:"100001",Ins:n},txt_game_1:{ad_id:"15772",desc:"PC端搜狐V3首页游戏半行文字链1",size:"100001",Ins:n},txt_game_2:{ad_id:"15773",desc:"PC端搜狐V3首页游戏半行文字链2",size:"100001",Ins:n},txt_society_1:{ad_id:"15774",desc:"PC端搜狐V3首页宠物半行文字链1",size:"100001",Ins:n},txt_society_2:{ad_id:"15775",desc:"PC端搜狐V3首页宠物半行文字链2",size:"100001",Ins:n},auto_main_txt_1_1:{ad_id:"15778",desc:"汽车区域专用资源行1 1",size:"130001",Ins:n},auto_main_txt_1_2:{ad_id:"15779",desc:"汽车区域专用资源行1 2",size:"130001",Ins:n},auto_main_txt_2_1:{ad_id:"15780",desc:"汽车区域专用资源行2 1",size:"130001",Ins:n},auto_main_txt_2_2:{ad_id:"15781",desc:"汽车区域专用资源行 2 2",size:"130001",Ins:n},txt_business_0:{ad_id:"15860",desc:"PC端搜狐V3首页财经一行行文字链0",size:"200001",Ins:n}},popup:{rectangle:{ad_id:"16175",desc:"要闻频道左侧第三位置矩形广告",size:"1740116",Ins:d}},pic_collection:{side_1:{ad_id:"15853",desc:"图集页末尾图集广告",size:"3000250",Ins:n},side_2:{ad_id:"15851",desc:"图集右侧广告1",size:"3000250",Ins:n},side_3:{ad_id:"15852",desc:"图集右侧广告2",size:"3000250",Ins:n},column_1:{ad_id:"15849",desc:"图集通栏广告1",size:"8500100",Ins:n},column_2:{ad_id:"15850",desc:"图集通栏广告2",size:"8500100",Ins:n}},news_channel:u,setV3IndexData:function(e){var t=this;switch(Object.prototype.toString.call(e)){case"[object Object]":this["v3-index"][e.key]=e.value;break;case"[object Array]":e.forEach(function(e){t.v3_index[e.key][e.prop]=e.value})}}};e.exports=p},function(e,t,i){var n=i(75),s=new n,a=i(63),o=i(79),r=i(80);e.exports=Backbone.View.extend({template:_.template(i(81)),data:{},events:{"click a":"_click"},_click:function(e){if(!$(e.currentTarget).is(".got-i-icon")&&"javascript:void(0)"!==$(e.currentTarget).attr("href")){if(this.data.resource.clkm)for(var t=o.fix_imp_str(this.data.resource.clkm,{apid:"beans_"+this.ad_id,impid:this.data.impression_id}),i=0;i<t.length;i++)s.trigger_imp({url:t[i]});var n=this.$el.offset(),a=e.target||e.srcElement;s.click_trigger({source:this.data.source||"",newsid:this.news_id||"",subid:this.subid||"",aid:this.data.adid,apid:"beans_"+this.ad_id,impid:this.data.impression_id,mkey:this.data.monitorkey,freq:this.data.freq||0,ax:n&&n.left.toFixed(1)||"",ay:n&&n.top.toFixed(1)||"",cx:e.offsetX||e.clientX-a.getBoundingClientRect().left||e.clientX,cy:e.offsetY||e.clientY-a.getBoundingClientRect().top||e.clientY,ed:this.data.ed,bucket:this.data.bucket,ext:this.data.ext,uloc:this.data.uloc,turn:this.turn,sf:this.sf,newschn:this.ad_channel_id,pgid:this.pgid,shbd_monitor_ext:this.data.shbd_monitor_ext,latcy:this.latcy,position:this.position||""})}},pv_trigger:function(){var e=this.$el.offset();s.pv_trigger({source:this.data.source||"",newsid:this.news_id||"",subid:this.subid||"",aid:this.data.adid,apid:"beans_"+this.ad_id,impid:this.data.impression_id,mkey:this.data.monitorkey,freq:this.data.freq||0,ax:e&&e.left||"",ay:e&&e.top||"",ed:this.data.ed,bucket:this.data.bucket,ext:this.data.ext,uloc:this.data.uloc,turn:this.turn,newschn:this.ad_channel_id,rsln:window.screen.height+"0"+window.screen.width,shbd_monitor_ext:this.data.shbd_monitor_ext,pgid:this.pgid,latcy:this.latcy,sf:this.sf,position:this.position||""})},av_trigger:function(){if(!this.av_triggered){var e=this.$el.offset();a(this.$el)&&(s.av_trigger({source:this.data.source||"",newsid:this.news_id||"",subid:this.subid||"",aid:this.data.adid,apid:"beans_"+this.ad_id,impid:this.data.impression_id,mkey:this.data.monitorkey,freq:this.data.freq||0,ax:e&&e.left||"",ay:e&&e.top||"",ed:this.data.ed,bucket:this.data.bucket,ext:this.data.ext,uloc:this.data.uloc,turn:this.turn,newschn:this.ad_channel_id,rsln:window.screen.height+"0"+window.screen.width,shbd_monitor_ext:this.data.shbd_monitor_ext,pgid:this.pgid,latcy:this.latcy||"",position:this.position||"",sf:this.sf}),this.av_triggered=!0)}},initialize:function(e){this.data=e.data,this.ad_id=e.ad_id,this.turn=e.turn,this.channel_id=e.channel_id,this.sub_id=e.sub_id,this.news_id=e.news_id,this.newsid=e.news_id||"",this.subid=e.subid||"",this.ad_channel_id=e.ad_channel_id,this.pgid=r.get(e),this.latcy=e.latcy,this.av_triggered=!1,this.position=e.position,this.sf=e.sf},_ad_img_load:function(){var e=this;$(window).on("resize scroll",function(){e.av_trigger()}),this.av_trigger()},trigger_imp:function(e){if(e)for(var t=o.fix_imp_str(e,{apid:"beans_"+this.ad_id,impid:this.data.impression_id}),i=0;i<t.length;i++)s.trigger_imp({url:t[i]})},fix_ad_plus:function(e){e&&e.click&&(e.click=o.fix_adplus(e.click,{apid:"beans_"+this.ad_id,impid:this.data.impression_id}))},fix_ad_frame_url:function(e){if(e&&"iframe"==e.type){var t=this.$el.offset(),i=s.get_click_trigger_url({source:this.data.source||"",newsid:this.news_id||"",subid:this.subid||"",aid:this.data.adid,apid:"beans_"+this.ad_id,impid:this.data.impression_id,mkey:this.data.monitorkey,freq:this.data.freq||0,ax:t&&t.left||"",ay:t&&t.top||"",ed:this.data.ed,bucket:this.data.bucket,ext:this.data.ext,uloc:this.data.uloc,turn:this.turn,sf:this.sf,newschn:this.ad_channel_id,pgid:this.pgid,shbd_monitor_ext:this.data.shbd_monitor_ext,latcy:this.latcy,position:this.position||""});/\[_SOHU_CLICK_ENC_\]/gi.test(e.file)?e.file=e.file.replace(/\[_SOHU_CLICK_ENC_\]/gi,encodeURIComponent(i)):e.file=e.file+(e.file.indexOf("?")>0?"&":"?")+"clkm="+encodeURIComponent(i)}},render:function(){var e=this;if(this.data){if("BAIDUUNION"===this.data.adType)return this.$el.html(this.template(this.data));if(this.data.adType="",this.fix_ad_frame_url(this.data.resource),this.data.using_resource)for(var t in this.data.using_resource)this.fix_ad_plus.call(this,this.data.using_resource[t]);else this.data.resource&&this.fix_ad_plus(this.data.resource);this.$el.html(this.template(this.data));for(var i=o.fix_imp_str(this.data.resource.imp,{apid:"beans_"+this.ad_id,impid:this.data.impression_id}),n=0;n<i.length;n++)s.trigger_imp({url:i[n]});1==this.$el.find("img:eq(0)").size()?this.$el.find("img:eq(0)").one("load",function(){e._ad_img_load()}):e._ad_img_load()}}})},function(e,t){var i=function(e,t){return/imp\.optaim.com|clk.optaim\.com|trackimp/gi.test(e)?e.indexOf("?")>0?e+"&apid="+(t&&t.apid)+"&impid="+(t&&t.impid):e+"?apid="+(t&&t.apid)+"&impid="+(t&&t.impid):e};e.exports={fix_imp_str:function(e,t){var n=[];if(e)if(e instanceof Array)for(var s=0;s<e.length;s++)n.push(i(e[s],t));else if("string"==typeof e)if(0==e.indexOf("["))try{for(var a=JSON.parse(e),s=0;s<a.length;s++)a[s]&&n.push(i(a[s],t))}catch(o){}else for(var a=e.split("|"),s=0;s<a.length;s++)a[s]&&n.push(i(a[s],t));return n},fix_adplus:i}},function(e,t){var i={42:"game",23:"fashion",15:"business",19:"yule",17:"sports",18:"auto",30:"it",41:"dm",12:"cul",13:"history",25:"learning",27:"astro",45:"joke",44:"pets",10:"mil",43:"view",28:"food",29:"travel",24:"health",8:"news",26:"baby"},n=function(e){return e.sub_id?"sub":e.news_id?"article":"dsy"==e.type?"pic":e.tag_id?"tag":e.channel_id?"channel":"index"};e.exports={get:function(e){return(i[e.channel_id]||"sohu")+"-"+n(e)}}},function(e,t){e.exports='<%if (adType== "BAIDUUNION"){%>\n    <div class="<%=ad_type%> baiduAds" data-spm="<%=spm%>"  data-god-id="<%=baiduId%>"><a data-spm-content="<%=pcm%>" style="display: inline-block"></a></div>    \n <%}else{%>\n<%if(resource.type== "text"){%>\n<a  href="<%=resource.click%>" target="_blank"><%=resource.text%></a>\n<%}else{%>\n\n<%if(dsp_source){%>\n<span class="god-mark god-mark-origin"><%=dsp_source%></span>\n<%}%>\n<%if(!adstyle||adstyle=="1"){%>\n\x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n<span class="god-mark">广告</span>\n<%}%>\n<%if(resource.type!== "iframe"){%>\n<a  class="swf-top" href="<%=resource.click%>" target="_blank"></a>\n<%}%>\n<div>\n    <%if (resource.type== "flash"){%>\n    \x3c!--<embed src="<%=resource.file%>" width="<%=resource.width%>" height="<%=resource.height%>"></embed>--\x3e\n    <object type="application/x-shockwave-flash" data="<%=resource.file%>" width="<%=resource.width%>" height="<%=resource.height%>">\n        <param name="movie" value="<%=resource.file%>" />\n        <param name="wmode" value="opaque" />\n        <embed wmode="opaque"></embed>\n    </object>\n    <%}else if(resource.type== "image"){%>\n    <img src="<%=resource.file%>"/>\n    <%}else if(resource.type== "iframe"){%>\n    <iframe src="<%=resource.file%>" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" width="<%=resource.width%>" height="<%=resource.height%>"></iframe>\n    <%}%>\n</div>\n<%}%>\n<%}%>\n\n'},function(e,t,i){var n=i(78),s=function(e){if(e.using_resource={},e.special&&e.special.dict){var t=e[e.special.dict.big960]||{},i=e[e.special.dict.small960]||{},n=e[e.special.dict.big1130]||{},s=e[e.special.dict.small1130]||{};e.using_resource.big960=t,e.using_resource.small960=i,e.using_resource.big1130=n,e.using_resource.small1130=s}};e.exports=n.extend({template:_.template(i(83)),events:$.extend(n.prototype.events,{'click [data-role="show-all"]':"show_all"}),av_triggered_open:!1,show_all:function(e){e.stopPropagation(),e.preventDefault();var t=this;this.$el.toggleClass("show-all"),this.$el.is(".show-all")?(this.pv_triggered||(n.prototype.pv_trigger.call(this,null),this.pv_triggered=!0),this.av_triggered_open||(this.av_triggered=!1,n.prototype.av_trigger.call(this,null),this.av_triggered_open=!0),this.$el.find(".big-god").show(),this.$el.find(".small-god").hide(),this.$el.find("[data-role='show-all']").html("关闭<em>CLOSE</em>")):(this.$el.find(".big-god").hide(),this.$el.find(".small-god").show(),this.$el.find("[data-role='show-all']").html("打开<em>OPEN</em>")),setTimeout(function(){t.$el.trigger("show-change")},500)},hide:function(){this.$el.hide(),this.$el.trigger("show-change")},render:function(){var e=this;s(this.data),n.prototype.fix_ad_plus.call(this,this.data.using_resource.big960),n.prototype.fix_ad_plus.call(this,this.data.using_resource.small960),n.prototype.fix_ad_plus.call(this,this.data.using_resource.big1130),n.prototype.fix_ad_plus.call(this,this.data.using_resource.small1130),n.prototype.fix_ad_frame_url.call(this,this.data.using_resource.small960),n.prototype.fix_ad_frame_url.call(this,this.data.using_resource.big960),n.prototype.fix_ad_frame_url.call(this,this.data.using_resource.small1130),n.prototype.fix_ad_frame_url.call(this,this.data.using_resource.big1130),this.data.using_resource.small960=this.data.using_resource.small960||this,this.data.using_resource.big960,this.data.using_resource.small1130=this.data.using_resource.small1130||this,this.data.using_resource.big1130,this.data.using_resource.small960&&this.data.using_resource.small960.imp&&n.prototype.trigger_imp.call(this,this.data.using_resource.small960.imp),this.data.using_resource.big960&&this.data.using_resource.big960.imp&&n.prototype.trigger_imp.call(this,this.data.using_resource.big960.imp),this.data.using_resource.small1130&&this.data.using_resource.small1130.imp&&n.prototype.trigger_imp.call(this,this.data.using_resource.small1130.imp),this.data.using_resource.big1130&&this.data.using_resource.big1130.imp&&n.prototype.trigger_imp.call(this,this.data.using_resource.big1130.imp);try{this.$el.html(this.template(this.data)),this.$el.show(),this.$el.trigger("show-change")}catch(t){this.$el.hide(),console.log("ad data error no display")}1==this.$el.find("img").size()?this.$el.find("img").one("load",function(){e._ad_img_load()}):e._ad_img_load()}})},function(e,t){e.exports='\x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n<span class="god-mark">\n    <%if(dsp_source){%><%=dsp_source%>|<%}%>广告\n</span>\n<span data-role="show-all" class="god-o-c" href="javascript:void(0)">打开<em>OPEN</em></span>\n<div class="big-god" style="display:none">\n        <%if (using_resource.big960.type== "flash"){%>\n    <a class="b-960 flash" href="<%=using_resource.big960.click%>" target="_blank">\n    </a>\n    <embed class="b-960" src="<%=using_resource.big960.file%>" width="<%=using_resource.big960.width%>" height="<%=using_resource.big960.height%>"></embed>\n        <%}else if(resource.type== "image"){%>\n    <a class="b-960" href="<%=using_resource.big960.click%>" target="_blank"><img src="<%=using_resource.big960.file%>"/></a>\n        <%}%>\n        <%if (using_resource.big1130.type== "flash"){%>\n    <a class="b-1130 flash" href="<%=using_resource.big1130.click%>" target="_blank">\n        </a>\n        <embed class="b-1130" src="<%=using_resource.big1130.file%>" width="<%=using_resource.big1130.width%>" height="<%=using_resource.big1130.height%>"></embed>\n        <%}else if(resource.type== "image"){%>\n    <a class="b-1130" href="<%=using_resource.big1130.click%>" target="_blank">\n        <img src="<%=using_resource.big1130.file%>"/>\n        </a>\n        <%}%>\n    </a>\n</div>\n<div class="small-god">\n        <%if (using_resource.small960.type== "flash"){%>\n    <a class="s-960 flash" href="<%=using_resource.small960.click%>" target="_blank">\n        </a>\n        <embed class="s-960" src="<%=using_resource.small960.file%>" width="<%=using_resource.small960.width%>" height="<%=using_resource.small960.height%>"></embed>\n        <%}else if(using_resource.small960.type== "image"){%>\n    <a class="s-960" href="<%=using_resource.small960.click%>" target="_blank">\n    <img src="<%=using_resource.small960.file%>"/>\n        </a>\n        <%}%>\n        <%if (using_resource.small1130.type== "flash"){%>\n    <a class="s-1130 flash" href="<%=using_resource.small1130.click%>" target="_blank">\n        </a>\n        <embed class="s-1130" src="<%=using_resource.small1130.file%>" width="<%=using_resource.small1130.width%>" height="<%=using_resource.small1130.height%>"></embed>\n        <%}else if(using_resource.small1130.type== "image"){%>\n    <a class="s-1130" href="<%=using_resource.small1130.click%>" target="_blank">\n        <img src="<%=using_resource.small1130.file%>"/>\n        </a>\n        <%}%>\n    </a>\n</div>'},function(e,t,i){var n=i(78),s=function(e){if(e.using_resource={},e.special&&e.special.dict){var t=e[e.special.dict.txt]||{},i=e[e.special.dict.picture]||{};e.using_resource.title=t,e.using_resource.picture=i}};e.exports=n.extend({template:_.template(i(85)),events:$.extend(!0,{"focus-in-view":"trigger-av"},n.prototype.events),"trigger-av":function(){this.av_trigger()},render:function(){var e=this;this.data.adstyle=this.data.adstyle||"1",s(this.data),this.data.using_resource&&(n.prototype.fix_ad_plus.call(this,this.data.using_resource.title),n.prototype.fix_ad_plus.call(this,this.data.using_resource.picture)),this.$el.html(this.template(this.data)).removeAttr("data-media-id").removeAttr("data-focus-ev").addClass("focus-god"),this.data.using_resource&&this.data.using_resource.picture&&n.prototype.trigger_imp.call(this,this.data.using_resource.picture.imp),1==this.$el.find("img:eq(0)").size()?this.$el.find("img:eq(0)").one("load",function(){e._ad_img_load()}):e._ad_img_load()}})},function(e,t){e.exports='<%if(!adstyle || adstyle=="1"){%>\n<span class="god-mark">广告</span>\n<%if(dsp_source){%>\n<span class="god-mark god-mark-origin"><%=dsp_source%></span>\n<%}%>\n\x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n<%}%>\n<a target="_blank" href="<%=using_resource.picture.click%>">\n\n    <img alt="" src="<%=using_resource.picture.file%>"/>\n    <span class="shadow linear-box"><em class="linear-bg"></em><span><%=using_resource.title.text%></span></span>\n</a>'},function(e,t,i){var n=i(11),s=i(78),a=i(75),o=new a,r=i(79),c=function(e){if(e.using_resource={},e.resource&&"iframe"==e.resource.type)e.using_resource=e.resource;else{if(!e.special||!e.special.dict)return;e.adstyle=e.adstyle||""
;var t=e[e.special.dict.title]||{},i=e[e.special.dict.picture]||{},n=e[e.special.dict.video]||{},s=e[e.special.dict.leftpicture]||{},a=e[e.special.dict.middlepicture]||{},o=e[e.special.dict.rightpicture]||{},r=e[e.special.dict.lastpicture]||{};"pcinfo_txt"==e.form&&(e.using_resource.title=t),"pcinfo_pictxt"==e.form&&(e.using_resource.title=t,e.using_resource.picture=i),"pcinfo_mixpictxt"==e.form&&(e.using_resource.title=t,e.using_resource.leftpicture=s,e.using_resource.middlepicture=a,e.using_resource.rightpicture=o,e.using_resource.lastpicture=r),"pcinfo_bannertxt"==e.form&&(e.using_resource.title=t,e.using_resource.picture=i),"pcinfo_video"==e.form&&(e.using_resource.title=t,e.using_resource.picture=i,e.using_resource.video=n)}var c=new Date;e.using_resource.now="今天 "+c.getHours()+":"+c.getMinutes()};e.exports=s.extend({template:_.template(i(87)),events:$.extend(s.prototype.events,{'click [data-role="god-play"]':"play",'click [data-role="god-close"]':"stop","click .got-i-icon":"pcinfo_click"}),play:function(e){e.stopPropagation(),e.preventDefault();var t=this;this.$el.find('[data-role="god-video"]').show(),this.$el.find('[data-role="god-video"] video')[0].play(),this.play_trigger(e),this.$el.find("[data-role='god-video'] video").one("ended",function(e){t.stop(e)})},_click:function(e){if(s.prototype._click.call(this,e),this.data.using_resource.video&&this.data.using_resource.video.click_imp)for(var t=r.fix_imp_str(this.data.using_resource.video.click_imp,{apid:"beans_"+this.ad_id,impid:this.data.impression_id}),i=0;i<t.length;i++)o.trigger_imp({url:t[i]})},pcinfo_click:function(e){e.stopPropagation()},stop:function(e){e.stopPropagation(),this.$el.find('[data-role="god-video"]').hide(),this.$el.find('[data-role="god-video"] video')[0].pause()},play_trigger:function(e){var t=this.$el.offset(),i=e.target||e.srcElement;if(o.play_trigger({source:this.data.source||"",newsid:this.news_id||"",subid:this.subid||"",aid:this.data.adid,apid:"beans_"+this.ad_id,impid:this.data.impression_id,mkey:this.data.monitorkey,freq:this.data.freq,ax:t&&t.left.toFixed(1),ay:t&&t.top,cx:e.offsetX||e.clientX-i.getBoundingClientRect().left||e.clientX,cy:e.offsetY||e.clientY-i.getBoundingClientRect().top||e.clientY,ed:this.data.ed,bucket:this.data.bucket,ext:this.data.ext,uloc:this.data.uloc,turn:this.turn,sf:this.sf,newschn:this.ad_channel_id,pgid:this.pgid,shbd_monitor_ext:this.data.shbd_monitor_ext,latcy:this.latcy,position:this.position||""}),this.data.using_resource.video.tracking_imp)for(var n=r.fix_imp_str(this.data.using_resource.video.tracking_imp,{apid:"beans_"+this.ad_id,impid:this.data.impression_id}),s=0;s<n.length;s++)o.trigger_imp({url:n[s]})},render:function(){var e=this;c(this.data);for(var t in this.data.using_resource)s.prototype.fix_ad_plus.call(this,this.data.using_resource[t]);"pcinfo_mixpictxt"==this.data.form||"pcinfo_bannertxt"==this.data.form?this.$el.addClass("news-box-thr"):"pcinfo_video"==this.data.form?this.$el.addClass("god-pop").removeClass("clear"):"pcinfo_txt"==this.data.form&&this.$el.addClass("god-pop").addClass("news-box-txt");try{this.$el.html(this.template(this.data))}catch(i){this.$el.hide(),n.log("ad data error no display")}this.data.using_resource&&this.data.using_resource.title&&s.prototype.trigger_imp.call(this,this.data.using_resource.title&&this.data.using_resource.title.imp),1==this.$el.find("img:eq(0)").size()?this.$el.find("img:eq(0)").one("load",function(){e._ad_img_load()}):e._ad_img_load()}})},function(e,t){e.exports='<%if(using_resource.type=="iframe"){%>\n<iframe src="<%=using_resource.file%>" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" width="640" height="100"></iframe>\n<div class="other god-list-txt">\n    \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n    <span class="name">广告</span>\n    <span class="dot">·</span>\n    <span class="time"><%=using_resource.now%></span>\n</div>\n<%} else {%>\n\n<%if(form== "pcinfo_bannertxt"){%>\n\n<h4><a href="<%=using_resource.title.click%>" target="_blank"><%=using_resource.title.text%></a></h4>\n<div class="pic-group clear">\n    <div class="god-banner"><a href="<%=using_resource.picture.click%>" target="_blank"><img\n            src="<%=using_resource.picture.file%>"/></a>\n    </div>\n</div>\n\n    <%if(!adstyle||adstyle=="1"){%>\n<div class="other god-list-txt">\n    \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n    <span class="name">广告<%=dsp_source?" · "+dsp_source:""%></span>\n    <span class="dot">·</span>\n    <span class="time"><%=using_resource.now%></span>\n</div>\n    <%}%>\n\n\n<%}else if(form== "pcinfo_txt"){%>\n\n<h4><a href="<%=using_resource.title.click%>" target="_blank"><%=using_resource.title.text%></a></h4>\n\n    <%if(!adstyle||adstyle=="1"){%>\n<div class="other god-list-txt">\n    \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n    <span class="name">广告<%=dsp_source?" · "+dsp_source:""%></span>\n    <span class="dot">·</span>\n    <span class="time"><%=using_resource.now%></span>\n</div>\n    <%}%>\n\n<%}else if(form=="pcinfo_pictxt"){%>\n\n\n<div class="pic img-do left god-one">\n    <%if (using_resource.picture.type=="flash") {%>\n    <a class="swf-top" href="<%=using_resource.picture.click%>" target="_blank"></a>\n    <object type="application/x-shockwave-flash" data="<%=using_resource.picture.file%>" width="<%=using_resource.picture.width%>" height="<%=using_resource.picture.height%>">\n        <param name="movie" value="<%=using_resource.picture.file%>" />\n        <param name="wmode" value="opaque" />\n        <embed wmode="opaque"></embed>\n    </object>\n    <%} else if (using_resource.picture.type== "image") {%>\n    <a href="<%=using_resource.picture.click%>" target="_blank">\n        <img src="<%=using_resource.picture.file%>" alt=""/>\n    </a>\n    <%}%>\n    \x3c!--<a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a>--\x3e\n</div>\n<h4><a href="<%=using_resource.title.click%>" target="_blank">\n    <%=using_resource.title.text%>\n</a></h4>\n\n\n    <%if(!adstyle||adstyle=="1"){%>\n<div class="other god-list-txt">\n    \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n    <span class="name">广告<%=dsp_source?" · "+dsp_source:""%></span>\n    <span class="dot">·</span>\n    <span class="time"><%=using_resource.now%></span>\n</div>\n    <%}%>\n\n<%}else if(form=="pcinfo_video"){%>\n\n<div class="pic img-do left god-one">\n    <a href="javascript:void(0)" data-role="god-play" >\n        <img src="<%=using_resource.picture.file%>" alt=""/>\n    </a>\n    \x3c!--<a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a>--\x3e\n    <i class="got-video-icon"></i>\n</div>\n<h4> <a target="_blank"  href="<%=using_resource.video.click%>">\n    <%=using_resource.title.text%>\n</a></h4>\n\n    <%if(!adstyle||adstyle=="1"){%>\n<div class="other god-list-txt">\n    \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n    <span class="name">广告<%=dsp_source?" · "+dsp_source:""%></span>\n    <span class="dot">·</span>\n    <span class="time"><%=using_resource.now%></span>\n</div>\n    <%}%>\n\n\n<div class="god-video" data-role="god-video" style="display:none">\n    <div class="god-video-box">\n       <video controls="controls" src="<%=using_resource.video.file%>"/>\n    </div>\n    <div class="god-video-do">\n        <span class="god-video-close" data-role="god-close">关闭<i class="icon-close"></i></span>\n    </div>\n</div>\n<%}else if(form=="pcinfo_mixpictxt"){%>\n<h4>\n    <a href="<%=using_resource.title.click%>" target="_blank"><%=using_resource.title.text%></a>\n</h4>\n<div class="pic-group clear god-thr">\n    <ul>\n        <li class="img-do"><a href="<%=using_resource.leftpicture.click%>" target="_blank"><img\n                src="<%=using_resource.leftpicture.file%>"/></a></li>\n        <li class="img-do"><a href="<%=using_resource.middlepicture.click%>" target="_blank"><img\n                src="<%=using_resource.middlepicture.file%>"/></a></li>\n        <li class="img-do"><a href="<%=using_resource.rightpicture.click%>" target="_blank"><img\n                src="<%=using_resource.rightpicture.file%>"/></a></li>\n        <%if(using_resource.lastpicture){%>\n        <li class="img-do end"><a href="<%=using_resource.lastpicture.click%>" target="_blank"><img\n                src="<%=using_resource.lastpicture.file%>"/></a></li>\n        <%} else {%>\n        <li class="end pic-more"><a href="<%=using_resource.title.click%>" target="_blank">查看更多 &gt;</a></li>\n        <%}%>\n    </ul>\n</div>\n\n    <%if(!adstyle||adstyle=="1"){%>\n<div class="other god-list-txt">\n    \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n    <span class="name">广告<%=dsp_source?" · "+dsp_source:""%></span>\n    <span class="dot">·</span>\n    <span class="time"><%=using_resource.now%></span>\n</div>\n    <%}%>\n<%}%>\n<%}%>'},function(e,t,i){var n=i(75),s=(new n,i(78)),a=(i(79),function(e){if(e.special&&e.special.dict){var t=e[e.special.dict.title]||{},i=e[e.special.dict.picture]||{},n=e[e.special.dict.summary]||{};e.using_resource={title:t,picture:i,summary:n}}});e.exports=s.extend({template:_.template(i(89)),render:function(){var e=this;a(this.data),s.prototype.fix_ad_plus.call(this,this.data.using_resource.title),s.prototype.fix_ad_plus.call(this,this.data.using_resource.picture),s.prototype.fix_ad_plus.call(this,this.data.using_resource.summary),this.$el.html(this.template(this.data)).removeAttr("data-media-id").removeAttr("data-focus-ev"),s.prototype.trigger_imp.call(this,this.data.using_resource.picture.imp),1==this.$el.find("img:eq(0)").size()?this.$el.find("img:eq(0)").one("load",function(){e._ad_img_load()}):e._ad_img_load()}})},function(e,t){e.exports='\n    <div class="pic"><a href="<%=using_resource.picture.click%>" target="_blank"><img src="<%=using_resource.picture.file%>" alt=""></a></div>\n    <h4><a href="<%=using_resource.title.click%>" target="_blank"><%=using_resource.title.text%></a></h4>\n    <p>\n        <%=using_resource.summary.text%>\n    </p>\n'},function(e,t,i){var n=i(11),s=i(78),a=i(75),o=(new a,i(79),function(e){if(e.using_resource={},e.special&&e.special.dict){var t=e[e.special.dict.big]||{},i=e[e.special.dict.small]||{};e.using_resource.big=t,e.using_resource.small=i}else e.resource&&(e.using_resource.big=e.resource,e.using_resource.small=e.resource)});e.exports=s.extend({template:_.template(i(91)),render:function(){var e=this;o(this.data),s.prototype.fix_ad_plus.call(this,this.data.using_resource.big),s.prototype.fix_ad_plus.call(this,this.data.using_resource.small),s.prototype.fix_ad_frame_url.call(this,this.data.using_resource.small),s.prototype.fix_ad_frame_url.call(this,this.data.using_resource.big),this.data.using_resource.small=this.data.using_resource.small||this,this.data.using_resource.big,this.data.using_resource.big&&this.data.using_resource.big.imp&&s.prototype.trigger_imp.call(this,this.data.using_resource.big.imp);try{this.$el.html(this.template(this.data)),this.$el.show()}catch(t){this.$el.hide(),n.log("ad data error no display")}1==this.$el.find("img:eq(0)").size()?this.$el.find("img:eq(0)").one("load",function(){e._ad_img_load()}):e._ad_img_load()}})},function(e,t){e.exports='<%if(dsp_source){%>\n<span class="god-mark god-mark-origin"><%=dsp_source%></span>\n<%}%>\n\x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n<span class="god-mark">广告</span>\n<%if(using_resource.big.type!== "iframe"){%>\n\x3c!--<a class="swf-top" href="<%=using_resource.big.click%>" target="_blank"></a>--\x3e\n<a class="swf-top" href="<%=resource.click%>" target="_blank"></a>\n<%}%>\n<div class="big-god">\n    <%if (using_resource.big.type== "flash"){%>\n    <object type="application/x-shockwave-flash" data="<%=using_resource.big.file%>" width="<%=using_resource.big.width%>" height="<%=using_resource.big.height%>">\n        <param name="movie" value="<%=using_resource.big.file%>" />\n        <param name="wmode" value="opaque" />\n        <embed wmode="opaque"></embed>\n    </object>\n    <%}else if(using_resource.big.type== "image"){%>\n    <img src="<%=using_resource.big.file%>"/>\n    <%}else if(using_resource.big.type== "text"){%>\n    <%=using_resource.big.text%>\n    <%}else if(using_resource.big.type== "iframe"){%>\n    <iframe src="<%=using_resource.big.file%>" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" width="300" height="250"></iframe>\n    <%}%>\n\n</div>\n<div class="small-god">\n    <%if (using_resource.small.type== "flash"){%>\n    <object type="application/x-shockwave-flash" data="<%=using_resource.small.file%>" width="<%=using_resource.small.width%>" height="<%=using_resource.small.height%>">\n        <param name="movie" value="<%=using_resource.small.file%>" />\n        <param name="wmode" value="opaque" />\n        <embed wmode="opaque"></embed>\n    </object>\n    <%}else if(using_resource.small.type== "image"){%>\n    <img src="<%=using_resource.small.file%>"/>\n    <%}else if(using_resource.small.type== "text"){%>\n    <%=using_resource.small.text%>\n    <%}else if(using_resource.small.type== "iframe"){%>\n    <iframe src="<%=using_resource.small.file%>" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" width="300" height="100"></iframe>\n    <%}%>\n</div>'},function(e,t,i){var n=i(75),s=(new n,i(78)),a=function(e){if(e.special&&e.special.dict){var t=e[e.special.dict.txt]||{},i=e[e.special.dict.picture]||{};e.using_resource={title:t,picture:i}}};e.exports=s.extend({template:_.template(i(93)),render:function(){var e=this;a(this.data),s.prototype.fix_ad_plus.call(this,this.data.using_resource.title),s.prototype.fix_ad_plus.call(this,this.data.using_resource.picture),this.$el.html(this.template(this.data)).removeAttr("data-media-id").removeAttr("data-focus-ev").addClass("other"),s.prototype.trigger_imp.call(this,this.data.using_resource.picture.imp),1==this.$el.find("img:eq(0)").size()?this.$el.find("img:eq(0)").one("load",function(){e._ad_img_load()}):e._ad_img_load()}})},function(e,t){e.exports='<div class="pic img-do">\n    <a href="<%=using_resource.picture.click%>" target="_blank"><img src="<%=using_resource.picture.file%>" alt=""></a>\n</div>\n<h4><a href="<%=using_resource.title.click%>" target="_blank"><%=using_resource.title.text%></a>\n</h4>\n'},function(e,t,i){var n=i(75),s=new n,a=i(63),o=i(79),r=i(80),c=i(95),l=c.extend({template:_.template(i(97))});e.exports=Backbone.View.extend({data:[],events:{"click .pic":"_click"},_click:function(e){if(!$(e.target).is(".got-i-icon")&&"javascript:void(0)"!==$(e.target).attr("href")){var t=this,i=$(e.currentTarget).offset(),n=e.target||e.srcElement,a=$(e.currentTarget).index()-1,o=this.swiperList[a];s.click_trigger({source:o.source||"",newsid:t.news_id||"",subid:t.subid||"",aid:o.adid,apid:"beans_"+t.ad_id,impid:o.impression_id,mkey:o.monitorkey,freq:o.freq||0,ax:i&&i.left.toFixed(1)||"",ay:i&&i.top.toFixed(1)||"",cx:e.offsetX||e.clientX-n.getBoundingClientRect().left||e.clientX,cy:e.offsetY||e.clientY-n.getBoundingClientRect().top||e.clientY,ed:o.ed,bucket:o.bucket,ext:o.ext,uloc:o.uloc,turn:t.turn,sf:t.sf,newschn:t.ad_channel_id,pgid:t.pgid,shbd_monitor_ext:o.shbd_monitor_ext,latcy:t.latcy,position:t.position||""})}},av_trigger:function(){function e(e){var n=t.swiperList[e];n&&!n.av_triggered&&(s.av_trigger({source:n.source||"",newsid:t.news_id||"",subid:t.subid||"",aid:n.adid,apid:"beans_"+t.ad_id,impid:n.impression_id,mkey:n.monitorkey,freq:n.freq||0,ax:i&&i.left||"",ay:i&&i.top||"",ed:n.ed,bucket:n.bucket,ext:n.ext,uloc:n.uloc,turn:t.turn,newschn:t.ad_channel_id,rsln:window.screen.height+"0"+window.screen.width,shbd_monitor_ext:n.shbd_monitor_ext,pgid:t.pgid,latcy:t.latcy||"",position:t.position||"",sf:t.sf}),n.av_triggered=!0)}var t=this,i=this.$el.offset();a(this.$el)&&(1==this.swiperData.length&&e(0),this.swiper.on("swiper-change",function(t){e(t.page)}))},initialize:function(e){this.data=e.data,this.ad_id=e.ad_id,this.turn=e.turn,this.channel_id=e.channel_id,this.sub_id=e.sub_id,this.news_id=e.news_id,this.ad_channel_id=e.ad_channel_id,this.pgid=r.get(e),this.latcy=e.latcy,this.position=e.position,this.sf=e.sf},render:function(){var e=this;this.data&&(this.data[0]&&_.each(this.data,function(t){e.fix_ad_plus(t),e.trigger_imp(t)}),this.swiperDataAdapt(),this.swiperInit())},swiperDataAdapt:function(){var e=this;this.swiperList=[],this.swiperData=[],_.each(this.data,function(t){t.av_triggered=!1,e.swiperList.push(t),e.swiperData.push({focusImg:t.resource.file,path:t.resource.click,title:t.resource.text,adstyle:t.adstyle,dsp_source:t.dsp_source,type:t.resource.type,monitorkey:t.monitorkey})})},swiperInit:function(e){var t=this,i=this.swiperData;this.swiper=new l({el:t.$el,data:i}),this._ad_img_load(),$("#god_index").show()},_ad_img_load:function(){var e=this;$(window).on("resize scroll",function(){e.av_trigger()}),this.av_trigger()},trigger_imp:function(e){var t=this;if(e.resource.imp)for(var i=o.fix_imp_str(e.resource.imp,{apid:"beans_"+t.ad_id,impid:e.impression_id}),n=0;n<i.length;n++)s.trigger_imp({url:i[n]})},fix_ad_plus:function(e){var t=this;e.resource&&e.resource.click&&(e.resource.click=o.fix_adplus(e.resource.click,{apid:"beans_"+t.ad_id,impid:e.impression_id}))}})},function(e,t,i){var n=Backbone.View.extend({template:_.template(i(96)),events:{"transitionend .con":"_onTransitionEnd","click .bullets span ":"goPage",mouseenter:"freeze",mouseleave:"start"},duration:3e3,curPage:0,data:{items:[]},initialize:function(e){var t=this;this.data.items=e.data,this.$el=$(e.el),1==this.data.items.length?(t.render(),this.$el.off("mouseleave")):(t.data.items.unshift(t.data.items[t.data.items.length-1]),t.data.items.push(t.data.items[1]),t.render(),t.ready())},render:function(){this.$el.html(this.template(this.data))},setPage:function(e){var t=this;this.curPage=e,this.slideEls&&(this.translateX=0-$(this.slideEls[0]).outerWidth()*(e+1),this.isSupportTransform()?(this.$els.css("transform","translate3d("+this.translateX+"px,0px, 0)"),t.setPageNation(t.curPage)):this.$els.animate({left:this.translateX+"px"},"300",function(){(t.curPage<0||t.curPage>t.totalPage-1)&&(t.curPage<0?(t.curPage=t.totalPage-1,this.translateX=0-t.slideEls[0].clientWidth*t.totalPage):(t.curPage=0,this.translateX=0-t.slideEls[0].clientWidth),t.$els.css({left:this.translateX})),t.setPageNation(t.curPage)}),this.trigger("swiper-change",{page:this.curPage,o:this}))},ready:function(){this.$els=this.$el.find('[data-role="item-wrapper"]'),this.slideEls=this.$el[0]&&this.$els[0].children,this.totalPage=this.slideEls.length-2,this.setPage(0),this.start()},start:function(){var e=this;this.timer=setInterval(function(){e.next()},this.duration)},next:function(){this.curPage++,this.setPage(this.curPage)},_onTransitionEnd:function(){this.curPage>this.totalPage-1?this.setPageNoAnimate(0):this.curPage<0&&this.setPageNoAnimate(this.totalPage-1)},setPageNoAnimate:function(e){this.$els.css("transition","none"),this.setPage(e);var t=this;setTimeout(function(){t.$els.css("transition","")},100)},goPage:function(e){this.setPage($(e.currentTarget).data("id"))},freeze:function(e){clearInterval(this.timer),this.timer=null},isSupportTransform:function(){return"transform"in document.createElement("div").style},setPageNation:function(e){this.$el.find(".bullets span").removeClass("active"),this.$el.find(".bullets span").eq(e).addClass("active")}});e.exports=n},function(e,t){e.exports='\x3c!-- 三种类型广告：图文、flash、frame --\x3e\n<div class="swiper">\n<div class="widget-swiper">\n    <div class="scroll">\n        <div class="con" data-role="item-wrapper" style="transform: translate3d(-960px, 0px, 0px);">\n      \n            <%for (var i = 0; i < items.length; i++) {\n              var item = items[i];\n            %>  \n            <div class="pic img-do" data-monitorkey="<%=item.monitorkey%>">\n                <%if (!adstyle || adstyle == "1") {%>\n                <span class="god-mark">广告</span>\n                <%if (dsp_source) {%>\n                <span class="god-mark god-mark-origin"><%=dsp_source%></span>\n                <%}%>\n                \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n                <%}%>\n\n                <a href="<%=item.using_resource.picture.click%>" target="_blank">\n                    <img alt="" src="<%=item.using_resource.picture.file%>">\n                </a>\n                <span class="linear-box widget-txt">\n                    <em class="linear-bg"></em>\n                    <a href="<%=item.using_resource.picture.click%>">\n                    <%=item.using_resource.title.text%>\n                    </a>\n                </span>\n            </div>\n            <%}%>\n            \n        </div>\n    </div>\n    <div class="bullets">\n        <%for (var i = 0; i < items.length; i++) {\n        %>\n        <span class="active" data-id="<%=i%>"><a></a></span>\n        <%}%>\n    </div>\n</div>\n</div>\n\n<div class="tab-wrap">\n    <ul class="tab-nav">\n        <li class="tab-nav-item tab-nav-item-house active">\n            <span></span>\n        </li>\n    </ul>\n    <div class="tab-body">\n        <div class="tab-body-item tab-body-item-house active">\n            <ul class="tab-body-item-list">\n                <%for (var i = 0; i < items.length; i++) {\n                    var item = items[i];\n                %>\n                <li class="tab-body-item-list-item" data-monitorkey="<%=item.monitorkey%>">\n                    <em class="dot"></em>\n                    <a href="<%=item.using_resource.title.click%>" target="_blank">\n                        <%=item.using_resource.title.text%>\n                    </a>\n                </li>\n                <%}%>\n            </ul>\n        </div>\n    </div>\n</div>'},function(e,t){e.exports='\n\n<div class="widget-swiper">\n    <div class="scroll">\n    <div class="con" data-role="item-wrapper">\n        <% for (var i=0,len=items.length;i<=len-1;i++){%>\n          <%  var item=items[i] %>\n        \n        <div class="pic img-do" data-monitorkey="<%=item.monitorkey%>">\n\n            <%if (!item.adstyle || item.adstyle == "1") {%>\n            <span class="god-mark">广告</span>\n            <%if (item.dsp_source) {%>\n            <span class="god-mark god-mark-origin"><%=item.dsp_source%></span>\n            <%}%>\n            \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n            <%}%>\n\n            <%if(item.type=="iframe"){%>\n            <iframe src="<%=item.focusImg%>" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" width="300" height="150"></iframe>\n            <%} else {%>\n            <a href="<%=item.path%>" target="_blank">\n                <img alt="" src="<%=item.focusImg%>">\n            </a>\n            <span class="linear-box widget-txt"><em class="linear-bg"></em><a href="<%=item.path%>"><%=item.title%></a></span>\n            <%}%>\n            \n        </div>\n        <%}%>\n    </div>\n    </div>\n    <div class="bullets">\n    <% for (var i=0,len=items.length;i<=len-3;i++){%>\n        <span class="<%=(i==0) ? \'active\' : \'\'%>" data-id="<%= i%>"><a></a></span>\n    <%}%>    \n    </div>\n</div>\n'},function(e,t,i){var n=i(75),s=new n,a=i(63),o=i(79),r=i(80),c=i(95),l=c.extend({template:_.template(i(99)),events:{"transitionend .tab-body":"_onTransitionEnd","click .tab-nav-item ":"goPage",mouseenter:"freeze",mouseleave:"start"},setPageNation:function(e){this.$el.find(".tab-nav .tab-nav-item").removeClass("active"),this.$el.find(".tab-nav .tab-nav-item").eq(e).addClass("active")}});e.exports=Backbone.View.extend({data:[],events:{"click .tab-body-item-list-item":"_click","click .tab-nav-item":"_tab"},_click:function(e){var t=this,i=$(e.currentTarget).offset(),n=e.target||e.srcElement,a=$(e.currentTarget).index(),o=this.tabList[a];s.click_trigger({source:o.source||"",newsid:t.news_id||"",subid:t.subid||"",aid:o.adid,apid:"beans_"+t.ad_id,impid:o.impression_id,mkey:o.monitorkey,freq:o.freq||0,ax:i&&i.left.toFixed(1)||"",ay:i&&i.top.toFixed(1)||"",cx:e.offsetX||e.clientX-n.getBoundingClientRect().left||e.clientX,cy:e.offsetY||e.clientY-n.getBoundingClientRect().top||e.clientY,ed:o.ed,bucket:o.bucket,ext:o.ext,uloc:o.uloc,turn:t.turn,sf:t.sf,newschn:t.ad_channel_id,pgid:t.pgid,shbd_monitor_ext:o.shbd_monitor_ext,latcy:t.latcy,position:t.position||""})},_tab:function(){$(this).addClass("active").siblings().removeClass("active")},av_trigger:function(){function e(e){for(var n=7*e;n<7*(e+1);n++){var a=t.tabList[n];if(!a||a.av_triggered)break;s.av_trigger({source:a.source||"",newsid:t.news_id||"",subid:t.subid||"",aid:a.adid,apid:"beans_"+t.ad_id,impid:a.impression_id,mkey:a.monitorkey,freq:a.freq||0,ax:i&&i.left||"",ay:i&&i.top||"",ed:a.ed,bucket:a.bucket,ext:a.ext,uloc:a.uloc,turn:t.turn,newschn:t.ad_channel_id,rsln:window.screen.height+"0"+window.screen.width,shbd_monitor_ext:a.shbd_monitor_ext,pgid:t.pgid,latcy:t.latcy||"",position:t.position||"",sf:t.sf}),a.av_triggered=!0}}var t=this,i=this.$el.offset();a(this.$el)&&(1==this.tabData.length&&e(0),this.tab.on("swiper-change",function(t){e(t.page)}))},initialize:function(e){this.data=e.data,this.ad_id=e.ad_id,this.turn=e.turn,this.channel_id=e.channel_id,this.sub_id=e.sub_id,this.news_id=e.news_id,this.ad_channel_id=e.ad_channel_id,this.pgid=r.get(e),this.latcy=e.latcy,this.position=e.position,this.sf=e.sf},render:function(){var e=this;this.data&&(this.data[0]&&_.each(this.data,function(t){e.fix_ad_plus(t),e.trigger_imp(t)}),this.tabDataAdapt(),this.tabInit())},tabDataAdapt:function(){var e=this;this.tabList=[],this.tabData=[];var t=[];_.each(this.data,function(i){i.av_triggered=!1,e.tabList.push(i),t.push({path:i.resource.click,title:i.resource.text,monitorkey:i.monitorkey})});for(var i=Math.ceil(t.length),n=0;n<3&&(this.tabData.push(t.splice(0,7)),!(i<=7*(n+1)));n++);},tabInit:function(){var e=this;this.tab=new l({el:e.$el,data:e.tabData}),e._ad_img_load(),$("#god_index").show()},_ad_img_load:function(){var e=this;$(window).on("resize scroll",function(){e.av_trigger()}),this.av_trigger()},trigger_imp:function(e){var t=this;if(e.resource.imp)for(var i=o.fix_imp_str(e.resource.imp,{apid:"beans_"+t.ad_id,impid:e.impression_id}),n=0;n<i.length;n++)s.trigger_imp({url:i[n]})},fix_ad_plus:function(e){var t=this;e.resource&&e.resource.click&&(e.resource.click=o.fix_adplus(e.resource.click,{apid:"beans_"+t.ad_id,impid:e.impression_id}))}})},function(e,t){e.exports='    \n    <ul class="tab-nav">\n        <li class="tab-nav-item active" data-id="0">\n            <span>热点</span>\n        </li>\n        <% if (items.length >= 4) { %>\n        <li class="tab-nav-item" data-id="1">\n            <span>商情</span>\n        </li>\n        <% } %>\n        <% if (items.length >= 5) { %>\n        <li class="tab-nav-item" data-id="2">\n            <span>关注</span>\n        </li>\n        <% } %>\n    </ul>\n    <div class="tab-body" data-role="item-wrapper">\n        <%for (var i = 0; i < items.length; i++) {\n            var tab = items[i];\n        %>\n        <div class="tab-body-item">\n            <ul class="tab-body-item-list">\n                <%for (var j = 0; j < tab.length; j++) {\n                    var item = tab[j];\n                    if (!item) break;\n                %>\n                <li class="tab-body-item-list-item" data-monitorkey="<%=item.monitorkey%>">\n                    <em class="dot"></em>\n                    <a href="<%=item.path%>" target="_blank">\n                        <%=item.title%>\n                    </a>\n                </li>\n                <%}%>\n            </ul>\n        </div>\n        <%}%>\n    </div>\n'},function(e,t,i){var n=i(78),s=function(e){if(e.using_resource={},e.special&&e.special.dict){var t=e[e.special.dict.txt]||{},i=e[e.special.dict.picture]||{};e.using_resource.title=t,e.using_resource.picture=i}};e.exports=n.extend({template:_.template(i(101)),events:$.extend(!0,{"focus-in-view":"trigger-av"},n.prototype.events),"trigger-av":function(){this.av_trigger()},render:function(){var e=this;this.data.adstyle=this.data.adstyle||"1",s(this.data),this.data.using_resource&&(n.prototype.fix_ad_plus.call(this,this.data.using_resource.title),n.prototype.fix_ad_plus.call(this,this.data.using_resource.picture)),this.$el.html(this.template(this.data)).hide(),this.data.using_resource&&this.data.using_resource.picture&&n.prototype.trigger_imp.call(this,this.data.using_resource.picture.imp),1==this.$el.find("img:eq(0)").size()?this.$el.find("img:eq(0)").one("load",function(){e._ad_img_load()}):e._ad_img_load()}})},function(e,t){e.exports='\x3c!--<div class="god-focus">--\x3e\n    <%if(!adstyle || adstyle=="1"){%>\n    <span class="god-mark">广告</span>\n    <%if(dsp_source){%>\n    <span class="god-mark god-mark-origin"><%=dsp_source%></span>\n    <%}%>\n    \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n    <%}%>\n    <a target="_blank" href="<%=using_resource.picture.click%>">\n        <img alt="" src="<%=using_resource.picture.file%>"/>\n    </a>\n    <span class="linear-box">\n        <em class="linear-bg"></em>\n        <a href="<%=using_resource.picture.click%>" target="_blank">\n            <%=using_resource.title.text%>\n        </a>\n    </span>\n\x3c!--</div>--\x3e'},function(e,t,i){var n=i(78),s=function(e){if(e.using_resource={},"picturetxt"===e.form&&e.special&&e.special.dict){var t=e[e.special.dict.txt]||{},i=e[e.special.dict.picture]||{};e.using_resource.title=t,e.using_resource.picture=i}};e.exports=n.extend({template:_.template(i(103)),render:function(){var e=this;this.data&&(this.data.adstyle=this.data.adstyle||"1",s(this.data),this.data.using_resource&&(n.prototype.fix_ad_plus.call(this,this.data.using_resource.title),n.prototype.fix_ad_plus.call(this,this.data.using_resource.picture)),this.$el.html(this.template(this.data)),this.data.using_resource&&this.data.using_resource.picture&&n.prototype.trigger_imp.call(this,this.data.using_resource.picture.imp),1==this.$el.find("img:eq(0)").size()?this.$el.find("img:eq(0)").one("load",function(){e._ad_img_load()}):e._ad_img_load())}})},function(e,t){e.exports='<a href="<%=using_resource.picture.click%>" class="img-warp" target="_blank">\n    <img src="<%=using_resource.picture.file%>" alt="<%=using_resource.title.text%>" />\n    <span class="desc">\n        <em class="bg"></em>\n        <em class="txt"><%=using_resource.title.text%></em>\n    </span>\n    <%if(!adstyle||adstyle=="1"){%>\n    \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n    <span class="god-mark">广告</span>\n    <%}%>\n</a>'},function(e,t,i){var n=i(78),s=i(63),a=i(75),o=new a,r=i(80);e.exports=n.extend({events:$.extend(n.prototype.events,{}),av_triggered_open:!1,hide:function(){this.$el.hide(),this.$el.trigger("show-change")},initialize:function(e){this.needSubAv=!0,this.data2=e.data[1]||!1,this.resolveAds(e),this.data=e.data[0],this.ad_id=e.ad_id,this.turn=e.turn,this.channel_id=e.channel_id,this.sub_id=e.sub_id,this.news_id=e.news_id,this.ad_channel_id=e.ad_channel_id,this.pgid=r.get(e),this.latcy=e.latcy,this.av_triggered=!1,this.position=e.position,this.sf=e.sf,this.cut_over=e.cut_over,this.subid=e.subid,this.opts=e},resolveAds:function(e){if(e.data.length>0&&e.data[0])switch(e.data[0].resource.type){case"image":case"flash":if(e.data[0].resource.width>575)this.data=e.data[0],this.data2=!1,
this.triggerSubPv(e.data[0],e);else if(e.data[1]&&575==e.data[1].resource.width&&"iframe"!=e.data[1].resource.type){this.needSubAv=!1;var t=e.ad_type.substr(e.ad_type.length-1,1);this.$el.trigger("needSecondColumn",{data:e.data[1],column_type:t})}else this.hide(),this.data2=!1,this.triggerSubPv({},e);break;case"iframe":e.data[0].resource.height="100",e.data[0].resource.width="1180",this.data=e.data[0],this.data2=!1,this.triggerSubPv(e.data[0],e);break;default:this.hide()}else this.hide()},av_trigger:function(){function e(e,i){o.av_trigger({source:e.source||"",newsid:i.news_id||"",subid:i.subid||"",aid:e.adid,apid:"beans_"+i.ad_id,impid:e.impression_id,mkey:e.monitorkey,freq:e.freq||0,ax:t&&t.left||"",ay:t&&t.top||"",ed:e.ed,bucket:e.bucket,ext:e.ext,uloc:e.uloc,turn:i.turn,newschn:i.ad_channel_id,rsln:window.screen.height+"0"+window.screen.width,shbd_monitor_ext:e.shbd_monitor_ext,pgid:i.pgid,latcy:i.latcy||"",position:i.position||"",sf:i.sf})}this.opts;if(!this.av_triggered){var t=this.$el.offset();if(s(this.$el)){if(e(this.data,this),this.needSubAv){e(this.data2||this.data,this)}this.av_triggered=!0}}},triggerSubPv:function(e,t){var i=this.$el.offset();o.pv_trigger({source:e.source||"",newsid:t.news_id||"",subid:t.subid||"",aid:e.adid,apid:"beans_"+t.ad_id,impid:e.impression_id,mkey:e.monitorkey,freq:e.freq||0,ax:i&&i.left||"",ay:i&&i.top||"",ed:e.ed,bucket:e.bucket,ext:e.ext,uloc:e.uloc,turn:t.turn,newschn:t.ad_channel_id,rsln:window.screen.height+"0"+window.screen.width,shbd_monitor_ext:e.shbd_monitor_ext,pgid:t.pgid,latcy:t.latcy,sf:t.sf,position:t.position||""})}})},function(e,t,i){var n=i(78);e.exports={column_1:{ad_id:"15867",desc:"PC端新闻频道首页第一通栏",Ins:n,size:"11800100"},column_2:{ad_id:"15878",desc:"PC端新闻频道首页第二通栏",Ins:n,size:"11800100"},column_3:{ad_id:"15885",desc:"PC端新闻频道首页第三通栏",Ins:n,size:"11800100"},column_4:{ad_id:"15895",desc:"PC端新闻频道首页第四通栏",Ins:n,size:"11800100"},column_5:{ad_id:"15909",desc:"PC端新闻频道首页第五通栏",Ins:n,size:"11800100"},column_6:{ad_id:"15913",desc:"PC端新闻频道首页第六通栏",Ins:n,size:"11800100"},side_1:{ad_id:"15868",desc:"PC端新闻频道首页右侧第一矩形",Ins:n,size:"3000250"},side_2:{ad_id:"15871",desc:"PC端新闻频道首页右侧第二矩形",Ins:n,size:"3000250"},side_3:{ad_id:"15892",desc:"PC端新闻频道首页右侧第三矩形",Ins:n,size:"3000250"},side_4:{ad_id:"15906",desc:"PC端新闻频道首页右侧第四矩形",Ins:n,size:"3000250"},side_5:{ad_id:"15912",desc:"PC端新闻频道首页右侧第五矩形",Ins:n,size:"3000250"},txt_focus_1:{ad_id:"15869",desc:"PC端新闻频道首页要闻区半行文字链1",Ins:n,size:"80001"},txt_focus_2:{ad_id:"15870",desc:"PC端新闻频道首页要闻区半行文字链2",Ins:n,size:"80001"},txt_politics_society_1:{ad_id:"15872",desc:"PC端新闻频道首页时政生活新闻区半行文字链1",Ins:n,size:"80001"},txt_politics_society_2:{ad_id:"15873",desc:"PC端新闻频道首页时政生活新闻区半行文字链2",Ins:n,size:"80001"},txt_politics_1:{ad_id:"15874",desc:"PC端新闻频道首页时局新闻区半行文字链1",Ins:n,size:"80001"},txt_politics_2:{ad_id:"15875",desc:"PC端新闻频道首页时局新闻区半行文字链2",Ins:n,size:"80001"},txt_society_1:{ad_id:"15876",desc:"PC端新闻频道首页生活新闻区半行文字链1",Ins:n,size:"80001"},txt_society_2:{ad_id:"15877",desc:"PC端新闻频道首页生活新闻区半行文字链2",Ins:n,size:"80001"},txt_military_culture_1:{ad_id:"15879",desc:"PC端新闻频道首页文化军事新闻区半行文字链1",Ins:n,size:"80001"},txt_military_culture_2:{ad_id:"15880",desc:"PC端新闻频道首页文化军事新闻区半行文字链2",Ins:n,size:"80001"},txt_culture_1:{ad_id:"15881",desc:"PC端新闻频道首页读书新闻区半行文字链1",Ins:n,size:"80001"},txt_culture_2:{ad_id:"15882",desc:"PC端新闻频道首页读书新闻区半行文字链2",Ins:n,size:"80001"},txt_history_1:{ad_id:"15883",desc:"PC端新闻频道首页历史新闻区半行文字链1",Ins:n,size:"80001"},txt_history_2:{ad_id:"15884",desc:"PC端新闻频道首页历史新闻区半行文字链2",Ins:n,size:"80001"},txt_business_finance_1:{ad_id:"15886",desc:"PC端新闻频道首页财经金融新闻区半行文字链1",Ins:n,size:"80001"},txt_business_finance_2:{ad_id:"15887",desc:"PC端新闻频道首页财经金融新闻区半行文字链2",Ins:n,size:"80001"},txt_stock_1:{ad_id:"15888",desc:"PC端新闻频道首页股票新闻区半行文字链1",Ins:n,size:"80001"},txt_stock_2:{ad_id:"15889",desc:"PC端新闻频道首页股票新闻区半行文字链2",Ins:n,size:"80001"},txt_finance_1:{ad_id:"15890",desc:"PC端新闻频道首页理财新闻区半行文字链1",Ins:n,size:"80001"},txt_finance_2:{ad_id:"15891",desc:"PC端新闻频道首页理财新闻区半行文字链2",Ins:n,size:"80001"},txt_sports_yule_1:{ad_id:"15893",desc:"PC端新闻频道首页体育娱乐新闻区半行文字链1",Ins:n,size:"80001"},txt_sports_yule_2:{ad_id:"15894",desc:"PC端新闻频道首页体育娱乐新闻区半行文字链2",Ins:n,size:"80001"},txt_fashion_life_1:{ad_id:"15896",desc:"PC端新闻频道首页时尚生活新闻区半行文字链1",Ins:n,size:"80001"},txt_fashion_life_2:{ad_id:"15897",desc:"PC端新闻频道首页时尚生活新闻区半行文字链2",Ins:n,size:"80001"},txt_health_1:{ad_id:"15898",desc:"PC端新闻频道首页健康新闻区半行文字链1",Ins:n,size:"80001"},txt_health_2:{ad_id:"15899",desc:"PC端新闻频道首页健康新闻区半行文字链2",Ins:n,size:"80001"},txt_teach_1:{ad_id:"15900",desc:"PC端新闻频道首页教育新闻区半行文字链1",Ins:n,size:"80001"},txt_teach_2:{ad_id:"15901",desc:"PC端新闻频道首页教育新闻区半行文字链2",Ins:n,size:"80001"},txt_food_1:{ad_id:"15902",desc:"PC端新闻频道首页美食新闻区半行文字链1",Ins:n,size:"80001"},txt_food_2:{ad_id:"15903",desc:"PC端新闻频道首页美食新闻区半行文字链2",Ins:n,size:"80001"},txt_travel_1:{ad_id:"15904",desc:"PC端新闻频道首页旅游新闻区半行文字链1",Ins:n,size:"80001"},txt_travel_2:{ad_id:"15905",desc:"PC端新闻频道首页旅游新闻区半行文字链2",Ins:n,size:"80001"},txt_focus_auto_1:{ad_id:"15907",desc:"PC端新闻频道首页房产汽车新闻区半行文字链1",Ins:n,size:"80001"},txt_focus_auto_2:{ad_id:"15908",desc:"PC端新闻频道首页房产汽车新闻区半行文字链2",Ins:n,size:"80001"},txt_it_digital_1:{ad_id:"15910",desc:"PC端新闻频道首页科技数码新闻区半行文字链1",Ins:n,size:"80001"},txt_it_digital_2:{ad_id:"15911",desc:"PC端新闻频道首页科技数码新闻区半行文字链2",Ins:n,size:"80001"}}},function(e,t,i){var n=i(7),s=function(){this.prefix="ad_t_";for(var e=1;e<=6;e++){var t=this.prefix+e;this[t]=parseInt(n.get(t))||Math.ceil(Math.random()*e)}};s.prototype={get_cur_turn:function(e,t){return t&&t.fromCookie?parseInt(n.get(e)):this[e]},save_ad_turn:function(e,t){n.set(e,t,{expires:new Date((new Date).getTime()+864e5),doamin:window.location.hostname,path:window.location.pathname})},del_old_cookie:function(e,t){n.set(e,t,{expires:new Date((new Date).getTime()-1)})}};var a=new s,o=function(e,t){if("channel"==e){if(15==t.channel_id){if([1,2,3].indexOf(t.position)>=0)return 3}else if([30,23].indexOf(t.channel_id)>=0){if([1,2,3,4,5].indexOf(t.position)>=0)return 2}else if(10==t.channel_id){if([1,2,3].indexOf(t.position)>=0)return 2}else if(26==t.channel_id&&[1].indexOf(t.position)>=0)return 2}else if("sub"==e){if(15==t.channel_id){if([997].indexOf(t.sub_id)>=0){if([1,2,3,5].indexOf(t.position)>=0)return 2}else if(998==t.sub_id){if([1].indexOf(t.position)>=0)return 3;if([2].indexOf(t.position)>=0)return 4;if([3,4,5].indexOf(t.position)>=0)return 2}}else if(30==t.channel_id&&[936].indexOf(t.sub_id)>=0&&[1,2,3,5].indexOf(t.position)>=0)return 2}else if("index"==e){if([1].indexOf(t.position)>=0)return 5;if([2,3,4,5,6].indexOf(t.position)>=0)return 3}return 1},r=function(e,t,i){if("channel"==t){var n={15:3,30:2,23:2,12:{side_1:2},43:{side_1:2},41:{side_1:2},42:{side_1:2},19:{side_1:2},10:{side_1:2,side_2:2,side_3:2,side_fix:2},26:{side_1:2}};if(n[i.channel_id])return"number"==typeof n[i.channel_id]?n[i.channel_id]:n[i.channel_id][e]||1}else if("sub"==t){if(15==i.channel_id)return[994,996,995].indexOf(i.sub_id)>=0?3:[997].indexOf(i.sub_id)>=0?2:1;if(30==i.channel_id){if(936!==i.sub_id)return 2}else{if(23==i.channel_id)return 2;if([12,43,41,42,19,26].indexOf(i.channel_id)>=0){if("side_1"==e)return 2}else if(10==i.channel_id&&["side_1","side_2","side_3","side_fix"].indexOf(e)>=0)return 2}}else{if("article"==t){if(18==i.channel_id)return 3;if([17,28,10,26].indexOf(i.channel_id)>=0){if(["side_1","side_2","side_3","side_4","side_fix"].indexOf(e)>=0)return 2}else{if([24,29].indexOf(i.channel_id)>=0)return 2;if(8==i.channel_id&&"side_1"==e)return 3}return 2}if("v3_index"==t)return"side_1"==e?4:"side_6"==e||"side_8"==e||"side_7"==e?2:3;if("pic_collection"==t)return"side_1"==e||"side_2"==e||"side_3"==e?2:1;if("news_channel"==t)return 3}},c=function(e,t){return[17,18,8].indexOf(t.channel_id)>=0?"article"==e?3:1:3},l=function(e,t,i){return"pic_collection"==t?"column_1"==e||"column_2"==e?2:1:"news_channel"==t?"column_3"==e?4:3:"column_1"==e?5:["column_7","column_8"].indexOf(e)>=0?1:3},d=function(e){return e.block_name&&"history"==e.block_name?6:1},h={},u=0,p=function(e,t,i){var n="ad_t_"+e+"_"+t+"_"+i.channel_id+"_"+(i.sub_id||"")+"_"+(i.tag_id||"")+"_"+(i.position||""),s="ad_t_",p=1;if(i.sub_id=parseInt(i.sub_id)||0,i.channel_id=parseInt(i.channel_id)||0,"feeds"==t?p=o(e,i)||1:["side_1","side_2","side_3","side_4","side_5","side_6","side_fix","side_7","side_8"].indexOf(t)>=0?p=r(t,e,i)||1:["writer","recommends","hot_spot"].indexOf(t)>=0?p=c(e,i)||1:"index_focus"==t?p=3:["column_1","column_2","column_3","column_4","column_5","column_6","column_7","column_8"].indexOf(t)>=0?p=l(t,e)||1:t.match(/txt\w+\_\d+/gi)?p=d(i):"rectangle"===t&&(p=3),1==p)return 1;var f={fromCookie:!1};"side_fix"==t&&(f.fromCookie=!0,s+="side_fix_");var m=a.get_cur_turn(s+p,f)||Math.ceil(Math.random()*p);if(m=m%p+1,a.del_old_cookie(n,m),"hot_spot"==t){if(u)return u;u=m}if("feeds"==t){if(h[p])return h[p];h[p]=m,console.log(h)}return a.save_ad_turn(s+p,m),m};e.exports=p},function(e,t,i){var n=i(77),s={genRands:function(){var e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";return[0,0,0,0,0,0,0].map(function(){return e[Math.floor(Math.random()*e.length)]}).join("")},getRegions:function(e){return!e||e.length<1?[]:e.map(function(e){return{regionId:e.regionId,size:10,integrateType:1,spm:"no.spm.at.current.moment",forceUseNewData:!1,adapter:"pc"}})},tidyAdsParams:function(e){var t=+new Date+this.genRands(),i=+new Date+this.genRands();return{suv:t,pvid:i,client:1,spm_e:i,requestid:[t,+new Date].join("_"),user_agent:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36",regions:this.getRegions(e),adapter:{name:"pc"}}},insertAdsProps:function(e,t){if(e){var i=t.v3_index,s={},a=[],o=this;Object.keys(e.data).forEach(function(e){a.push(1*e)}),Object.keys(i).forEach(function(e){var t=i[e];t.regionId&&a.indexOf(1*t.regionId)>-1&&(s[1*t.regionId]=$.extend({className:e},t))}),Object.keys(s).forEach(function(t){var i=s[t],a=e.data[t].data[0];n.setV3IndexData([{key:i.className,prop:"maxreads",value:a&&a.maxreads&&a.maxreads||""},{key:i.className,prop:"turn",value:a&&a.turn&&a.turn||""},{key:i.className,prop:"adps",value:a&&a.adps&&a.adps||""},{key:i.className,prop:"adType",value:a&&a.adType},{key:i.className,prop:"baiduId",value:a&&a.adData.id&&a.adData.id||""},{key:i.className,prop:"pcm",value:a&&o.generatePCM(a)||""}]),a&&a.adType&&"XPS"===a.adType&&n.setV3IndexData([{key:i.className,prop:"ad_id",value:a.adData.itemspaceid},{key:i.className,prop:"itemspaceid",value:a&&a.adData.itemspaceid&&a.adData.itemspaceid||""}])})}},genBaiDuAds:function(e,t){(window.slotbydup=window.slotbydup||[]).push({id:e,container:t,isAsync:!0})},refreshBuryCode:function(){window.sohuSpm&&"function"==typeof window.sohuSpm.domDidChange&&window.sohuSpm.domDidChange()},generatePCM:function(e){return[e.resourceType||"",e.authorId||"",e.id||"",e.pcm||"",e.type||"",""].join("|")}};e.exports=s},function(e,t){var i=function(e){var t=1e4+(e.channel_id?parseInt(e.channel_id):0),i="";if(e.sub_id){for(var n=e.sub_id.toString(),s=0;s<5-n.length;s++)i+="0";i+=n}else i="00000";return t+""+i};e.exports=i},function(e,t){var i=function(e){return""+(1e4+(e?parseInt(e):0))},n=function(e){var t="";if(e){for(var i=e.toString(),n=0;n<5-i.length;n++)t+="0";t+=i}else t="00000";return t},s=function(e){var t=i(e.channel_id);if(e.sub_id){return[t+"00000",t+n(e.sub_id)].join(",")}return t+"00000"};e.exports=s},function(e,t,i){var n=i(111),s=new n,a=function(e){this.init(e)};a.prototype={init:function(e){var t=this;this.cate_id=e&&e.cate_id,this.start_time=(new Date).getTime(),this.page_url=window.location.href,this.started=!1,this.stopped=!0,this.clock=null,this.focus_time=0,this.idle_time_out=1e4,this.idle_timer=null,window.localStorage&&(this.sendReport(),$(document).on("click",function(){t.trigger()}),$(document).on("keydown",function(){t.trigger()}),$(window).on("mousemove",function(){_.throttle(t.trigger,500).apply(t)}),$(window).on("scroll",function(){_.throttle(t.trigger,500).apply(t)}),t.visibityHandler(),$(window).on("beforeunload",function(){t.storeReportData()}),$(window).on("focus",function(){t.sendReport()}))},storeReportData:function(){this.report_data=this.getItem("ptMonitor"),this.end_time=(new Date).getTime();var e=(this.end_time-this.start_time)/1e3;this.report_data.push({page_url:this.page_url,start_time:this.start_time,end_time:this.end_time,cate_id:this.cate_id,diff_time:e,focus_time:1e3*this.focus_time}),this.setItem("ptMonitor",this.report_data)},sendReport:function(){var e=this;this.check("ptMonitor")&&(this.report_data=this.getItem("ptMonitor"),$.each(this.report_data,function(e,t){s.pt_trigger({data:t})}),e.report_data=[],this.setItem("ptMonitor",e.report_data))},trigger:function(){var e=this;this.started=!0,this.stopped&&(this.stopped=!1,this.clock=setInterval(function(){e.focus_time++},1e3)),clearTimeout(this.idle_timer),this.idle_timer=setTimeout(function(){e.setIdle()},e.idle_time_out)},setIdle:function(){this.stopped=!0,clearInterval(this.clock)},visibityHandler:function(){var e=this,t="hidden",i="visibilitychange",n=["ms","webkit","moz","o"],s=null;if("hidden"in document)t="hidden",i="visibilitychange";else for(var a=0;a<n.length;a++)n[a]+"hidden"in document&&(t=n[a]+"Hidden",i=n[a]+"Visibilitychange");s=function(){document[t]&&e.setIdle()},$(document).on(i,s)},check:function(e){if(this.getItem(e))return this.getItem(e).length>0},getItem:function(e){if(!window.localStorage||!window.localStorage.getItem)return[];var t=window.localStorage.getItem(e);if(!t)return[];try{return JSON.parse(t)}catch(i){return console.log(i.message),[]}},setItem:function(e,t){if(window.localStorage&&window.localStorage.setItem)try{var i=JSON.stringify(t);window.localStorage.setItem(e,i)}catch(n){console.log(n.message)}}},e.exports=a},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.base_url="https://pv.sohu.com/rt.gif"},pt_trigger:function(e){var t=e&&e.data||{};this.params=[],this.url="",t.page_url&&this.params.push("url="+encodeURIComponent(t.page_url)),t.start_time&&this.params.push("start_t="+t.start_time),t.end_time&&this.params.push("end_t="+t.end_time),t.focus_time!=undefined&&this.params.push("focus_t="+t.focus_time),t.cate_id&&this.params.push("cate_id="+t.cate_id),this.url=this.base_url+"?"+this.params.join("&"),$.getScript(this.url)}})},function(e,t,i){var n=i(63),s=i(113),a=new s,o=function(e){this.news_list=[],this.unique=[],this.tag_id=e&&e.tag_id,this.loc=e&&e.loc||1,this.sub_id=e.sub_id,this.delay_timer=null,this.init.apply(this),this.evHandler()};o.prototype={init:function(e){var t=this;$(window).on("scroll",function(){clearTimeout(t.delay_timer),t.delay_timer=setTimeout(function(){t.evHandler()},100)}),$(window).on("resize",function(){clearTimeout(t.delay_timer),t.delay_timer=setTimeout(function(){t.evHandler()},100)})},evHandler:function(){var e=this;$("[data-ev]").each(function(t,i){var n=$(i).attr("data-ev"),s=$(i).attr("data-media-id"),a=$(i).attr("data-loc")||e.loc,o=$(i).attr("data-cate-id")||e.sub_id,r=$(i).attr("data-tag-id")||e.tag_id,c=$(i).find("a").eq(0).attr("href");$(this).removeAttr("data-ev"),e.news_list.push({el:i,news_id:n,media_id:s,loc:a,cate_id:o,tag_id:r,status:1,href:c})}),$.each(e.news_list,function(e,t){var i=$(t.el);"1"==t.loc?t.fix_url=t.href+"?loc="+t.loc+"&focus_pic=0":"2"==t.loc?t.fix_url=t.href+"?loc="+t.loc+"&cate_id="+t.cate_id:"3"==t.loc||"5"==t.loc?t.fix_url=t.href+"?loc="+t.loc:"4"==t.loc&&(t.fix_url=t.href+"?loc="+t.loc+"&tag_id="+t.tag_id),n(i)&&t.status&&(a.ev_trigger({loc:t.loc,news_id:t.news_id,media_id:t.media_id,cate_id:t.cate_id,tag_id:t.tag_id}),t.status=0)}),e.fixUrl()},trigger_pv:function(e){},fixUrl:function(){$.each(this.news_list,function(e,t){$(t.el).one("click",function(e){$(t.el).find("a").each(function(e,i){0==$(i).parents(".other").length&&$(i).attr("href",t.fix_url)}),e.stopPropagation()})})}},e.exports=o},function(e,t,i){var n=i(4),s=i(21).counter_server,a=function(e,t){e=e||"ev";var i="";t.news_id&&(i+="news_id="+t.news_id+"&"),t.media_id&&(i+="media_id="+t.media_id+"&"),t.loc&&(i+="loc="+t.loc+"&"),"4"==t.loc&&t.tag_id&&(i+="tag_id="+t.tag_id+"&"),"2"==t.loc&&t.cate_id&&(i+="cate_id="+t.cate_id+"&"),t.focus_pic?i+="focus_pic="+t.focus_pic+"&":i+="focus_pic=0&",i&&(i=i.substring(0,i.length-1));var n=s+"/"+e+".gif?"+i;$.getScript(n,function(){})};e.exports=n.extend({init:function(){},pv_trigger:function(e){a("pv",e)},ev_trigger:function(e){a("ev",e)}})},function(e,t,i){var n=i(37),s=i(115),a=i(7),o=function(e,t){if("login"===e)n.login(t.success);else{if("is_login"===e)return n.is_login();if("get_location"===e)return a.get("_test_loc_")||window.sohu_IP_Loc||"";if("get_userInfo"===e)return n.getUserInfo(t.onGetUserInfo);if("create_swiper"===e)return s(t)}},r={},c=function(e,t){r[e]&&"success"==r[e].status?t():r[e]?"loading"==r[e].status&&r[e].call_list.push(t):(r[e]={status:"loading",call_list:[t]},$.ajax({url:e,dataType:"script",cache:!0,success:function(){if(r[e].status="success",r[e].call_list){for(var t=0;t<r[e].call_list.length;t++)r[e].call_list[t]();r[e].call_list=[]}}}))},l=function(e,t){e&&(e.View?new e.View({el:$(e.el),args:t,api:o}):c(e.js,function(){e.View?new e.View({el:$(e.el).show(),args:t,api:o}):$(e.el).hide()}),e.css&&$("head").append('<link rel="stylesheet" href="'+e.css+'">'))},d=i(117);e.exports={load:function(e){for(var t=d.get_def(e),i=0;i<t.length;i++)l(t[i],e.args)}}},function(e,t,i){var n=Backbone.View.extend({template:_.template(i(116)),events:{"transitionend [data-role=item-wrapper]":"_onTransitionEnd","click .autos span ":"goPage",mouseenter:"freeze",mouseleave:"restart","click .btnl":"goPrev","click .btnr":"goNext"},duration:5e3,curPage:0,data:{items:[]},initialize:function(e){var t=this;this.data.items=e.data,t.supportTransform=t.isSupportTransform(),t.data.items.unshift(t.data.items[t.data.items.length-1]),t.data.items.push(t.data.items[1]),this.$el=$(e.el),t.render(),t.ready()},render:function(){this.$el.html(this.template(this.data))},setPage:function(e,t){var i=this;t=t||"0.5s",this.curPage=e,this.translateX=0-$(this.slideEls[0]).width()*(e+1),this.supportTransform?(this.$els.css("transition",t),this.$els.css("transform","translate3d("+this.translateX+"px,0px, 0)"),i.setPageNation(i.curPage)):this.$els.animate({left:this.translateX+"px"},"300",function(){(i.curPage<0||i.curPage>i.totalPage-1)&&(i.curPage<0?(i.curPage=i.totalPage-1,this.translateX=0-i.slideEls[0].clientWidth*i.totalPage):(i.curPage=0,this.translateX=0-i.slideEls[0].clientWidth),i.$els.css({left:this.translateX})),i.setPageNation(i.curPage)}),this.trigger("swiper-change",{page:this.curPage,o:this})},ready:function(){this.$els=this.$el.find('[data-role="item-wrapper"]'),this.slideEls=this.$el[0]&&this.$els[0].children,this.totalPage=this.slideEls.length-2,this.setPage(0),this.start()},start:function(){var e=this;this.interval=setInterval(function(){e.goNext()},this.duration)},goPrev:function(){var e=this;this.curPage--,this.curPage<-1?this.setPage(this.totalPage-1,"0s"):this.setPage(this.curPage),clearInterval(this.interval),clearTimeout(this.timer),this.timer=setTimeout(function(){e.start()},6e4)},goNext:function(e){var t=this;this.curPage++,this.curPage>this.totalPage?this.setPage(0,"0s"):this.setPage(this.curPage),e&&t.restart()},_onTransitionEnd:function(e){e.stopPropagation(),this.curPage>this.totalPage-1?this.setPage(0,"0s"):this.curPage<-1&&this.setPage(0,"0s")},goPage:function(e){this.setPage($(e.currentTarget).data("id"))},freeze:function(e){clearInterval(this.interval),this.interval=null},isSupportTransform:function(){return"transform"in document.createElement("div").style},setPageNation:function(e){this.$el.find(".autos span").removeClass("cur"),this.$el.find(".autos span").eq(e).addClass("cur")},restart:function(){var e=this;clearInterval(this.interval),clearTimeout(this.timer),this.timer=setTimeout(function(){e.start()},6e4)}});e.exports=function(e){return new n({el:e.el,data:e.data,title:e.title})}},function(e,t){e.exports='<div class="widget-swiper">\n    <div class="scroll">\n    <div class="con" data-role="item-wrapper">\n        <% for (var i=0,len=items.length;i<=len-1;i++){%>\n          <%  var item=items[i] %>\n        \n        <div class="pic">\n            <a href="<%=item.path%>" target="_blank">\n                <img alt="" src="<%=item.focusImg%>">\n            <span class="linear-box"><em class="linear-bg"></em><em class="linear-txt"><%=item.title%></em></span>\n            </a>\n        </div>\n        <%}%>\n    </div>\n    </div>\n    <div class="autos">\n    <% for (var i=0,len=items.length;i<=len-3;i++){%>\n        <span class="<%=(i==0) ? \'cur\' : \'\'%>" data-id="<%= i%>"><a></a></span>\n    <%}%>    \n    </div>\n     <div class="btns"><a class="btnl" href="javascript:void(0)"></a><a class="btnr" href="javascript:void(0)"></a></div>\n</div>\n\n'},function(e,t){var i={business_stock_top_1:{el:"#main-stock",View:null,js:"//k.sohu.com/static/business/v0.0.10/js/index.bundle.min.js",css:""},business_stock_top_2:{el:"#my-stock",View:null,js:"//k.sohu.com/static/business/v0.0.10/js/index.bundle.min.js",css:""},business_stock_right_1:{el:"#my-stock-r",View:null,js:"//k.sohu.com/static/business/v0.0.10/js/index.bundle.min.js",css:""},auto_component_1:{el:"#auto_component_1",View:null,js:"//auto-db.bjcnc.scs.sohucs.com/component.js",css:"//auto-db.bjcnc.scs.sohucs.com/auto-mp-plugin.css"},auto_component_2:{el:"#auto_component_2",View:null,js:"//auto-db.bjcnc.scs.sohucs.com/component.js",css:"//auto-db.bjcnc.scs.sohucs.com/auto-mp-plugin.css"},auto_component_3:{el:"#auto_component_3",View:null,js:"//auto-db.bjcnc.scs.sohucs.com/component.js",css:"//auto-db.bjcnc.scs.sohucs.com/auto-mp-plugin.css"},auto_component_4:{el:"#auto_component_4",View:null,js:"//auto-db.bjcnc.scs.sohucs.com/component.js",css:"//auto-db.bjcnc.scs.sohucs.com/auto-mp-plugin.css"},auto_index_component_1:{el:'[data-widget-id="auto_index_component_1"]',View:null,js:"//m1.auto.itc.cn/sohupchome/main_right_v2.js",css:""},focus_index_component_1:{el:'[data-widget-id="focus_index_component_1"]',View:null,js:"//file.focus-res.cn/be/js/focusbe_in_sohuv3_2.js",css:""},auto_component_5:{el:"#auto_component_5",View:null,js:"//auto-db.bjcnc.scs.sohucs.com/component.js",css:"//auto-db.bjcnc.scs.sohucs.com/auto-mp-plugin.css"},SOHU_TV:{el:'[data-widget-id="tv_index_component"]',View:null,js:"//js.tv.itc.cn/site/index/inc_sohu_v3.js",css:""},test_plugin:{el:'[data-widget-id="sports_index_component_1"]',View:null,js:"//statics.itc.cn/PC_base/sports-live-2.js",css:""},comment:{el:"#mp-comment",View:null,js:"//statics.itc.cn/web/static/js/comment-170929.js"},business_index_stockhq:{el:'[data-widget-id="business_index_component_1"]',View:null,js:"//k.sohu.com/static/finance/pc/sohuindex/main.js"},auto_index_tabs:{el:'[data-role="auto-section"]',View:null,js:"//m1.auto.itc.cn/sohupchome/main_v2.js"},auto_news_component_1:{el:'[data-widget-id="auto_news_component_1"]',View:null,js:"//sohu-media.bjcnc.scs.sohucs.com/static/markPrices.js"},auto_news_component_2:{el:'[data-widget-id="auto_news_component_2"]',View:null,js:"//m2.auto.itc.cn/sohupchome/news_auto_plugin.js"},plugin_focus_region:{el:"#hot-news-focus-region",View:null,js:"//t.focus-res.cn/front-end/focus_in_sohu_news.js"},auto_index_component_2:{el:'[data-role="auto-index-component2"]',View:null,js:"//news.sohu.com/upload/sohusy_jpl_qynr20180117newjsyszx/main.js"}},n={channel:{15:["business_stock_top_1","business_stock_top_2","business_stock_right_1"]},index:["auto_index_component_1","focus_index_component_1","SOHU_TV"],article:{18:["auto_component_1","auto_component_2","auto_component_3","auto_component_4","auto_component_5"],1:["comment"]},sub:{997:["business_stock_top_1","business_stock_top_2","business_stock_right_1"]},index_v3:["business_index_stockhq","auto_index_component_1","test_plugin","auto_index_tabs","focus_index_component_1","auto_index_component_2"],pic_collections:["comment"],news_channel:["business_index_stockhq","auto_news_component_1","auto_news_component_2","plugin_focus_region"]};e.exports={get_def:function(e){var t=[];if("channel"==e.type||"article"==e.type){var s=n[e.type][e.channel_id];if(s)for(var a=0;a<s.length;a++)t.push(i[s[a]])}else if("sub"==e.type){var s=n[e.type][e.sub_id];if(s)for(var a=0;a<s.length;a++)t.push(i[s[a]])}else if(e.type,0){if("pic_collections"==e.type){var s=n[e.type];if(s)for(var a=0;a<s.length;a++)t.push(i[s[a]])}else if("news_channel"==e.type){var s=n[e.type];if(s)for(var a=0;a<s.length;a++)t.push(i[s[a]])}else if("test"==e.type&&e.def)for(var o in e.def)i[o]=e.def[o],t.push(e.def[o])}else{var s=n[e.type];if(s)for(var a=0;a<s.length;a++)t.push(i[s[a]])}return t},plugins:i}},function(e,t,i){function n(e){this._settings=$.extend({},o,e),this._boundHandleScroll=_.throttle(this._loopThroughElements.bind(this),this._settings.throttle)}var s=i(119),a=i(120),o={elements_selector:"img[data-src]",container:window,throttle:150,skip_invisible:!1,threshold:0};n.prototype={constructor:n,update:function(){this._elements=this._toArray(document.querySelectorAll(this._settings.elements_selector)),this._purgeElements(),this._loopThroughElements(),this._startScrollHandler()},_loopThroughElements:function(){var e,t=this._settings,i=this._elements,n=i?i.length:0,a=[];for(e=0;e<n;e++){var o=i[e];t.skip_invisible&&null===o.offsetParent||s(o,t.container,t.threshold)&&(this._reveal(o),a.push(e),o.setAttribute("data-processed",!0))}for(;a.length>0;)i.splice(a.pop(),1);0===n&&this._stopScrollHandler()},_startScrollHandler:function(){this._isHandlingScroll||(this._isHandlingScroll=!0,$(this._settings.container).on("scroll",this._boundHandleScroll))},_stopScrollHandler:function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,$(this._settings.container).off("scroll",this._boundHandleScroll))},_purgeElements:function(){var e,t=this._elements,i=t.length,n=[];for(e=0;e<i;e++){t[e].getAttribute("data-processed")&&n.push(e)}for(;n.length>0;)t.splice(n.pop(),1)},_reveal:function(e){var t=(this._settings,e.getAttribute("data-src"));e.setAttribute("src",a(t))},destroy:function(){this._stopScrollHandler(),this._elements=null,this._settings=null},addImage:function(e){var t=this._toArray(e.querySelectorAll("img[data-src]"));this._elements=this._elements.concat(t),this._loopThroughElements()},_toArray:function(e){for(var t=[],i=e.length,n=0;n<i;n++)t.push(e[n]);return t}};var r=new n;e.exports=r},function(e,t){var i=function(e){return e.getBoundingClientRect().top+window.pageYOffset-e.ownerDocument.documentElement.clientTop},n=function(e,t,n){return(t===window?window.innerHeight+window.pageYOffset:i(t)+t.offsetHeight)<=i(e)-n},s=function(e){return e.getBoundingClientRect().left+window.pageXOffset-e.ownerDocument.documentElement.clientLeft},a=function(e,t,i){var n=window.innerWidth;return(t===window?n+window.pageXOffset:s(t)+n)<=s(e)-i},o=function(e,t,n){return(t===window?window.pageYOffset:i(t))>=i(e)+n+e.offsetHeight},r=function(e,t,i){return(t===window?window.pageXOffset:s(t))>=s(e)+i+e.offsetWidth};e.exports=function(e,t,i){return!(n(e,t,i)||o(e,t,i)||a(e,t,i)||r(e,t,i))}},function(e,t,i){var n=i(6);e.exports=function(e){return/(\i\.mp\.itc\.cn)|(5b0988e595225\.cdn)|(img\.mp\.sohu\.com)/gi.test(e)&&(e=e.replace(/\.png/gi,".jpg"),n.isSupportWebp&&(e=e.replace(/\.jpg/gi,".webp"))),e}},function(e,t,i){var n=(i(24),i(18));e.exports=Backbone.View.extend({template:_.template(i(122)),data:{items:[]},initialize:function(e){var t=this;this.type=e&&e.type||"",$.extend(this.data,e.data),console.log(this.data),this.model=e.model,this.model.one("sync",function(e){t.data.items=e,t.render()}),this.model.fetch()},render:function(){this.fixed_items(),this.$el.html(this.template(this.data)),this.trigger("rendered"),window.sohuSpm&&"function"==typeof window.sohuSpm.domDidChange&&window.sohuSpm.domDidChange()},fixed_items:function(){return this.data.items.forEach(function(e){e.description=n.subString(e.description,35),e.name=n.subString(e.name,17)}),this.items}})},function(e,t){e.exports='\n    <div class="titleR"><span class="tt">搜狐公众号</span>\x3c!--<span class="link">\n        <a>名人榜\n        &gt;</a></span>--\x3e\n    </div>\n    <%for(var i=0;i< items.length ;i++){\n    var item =items[i];\n    %>\n        <div class="pic-txt clear">\n            <div class="pic img-do"><a href="<%=item.personalPage%>" target="_blank"><img src="<%=item.logo%>" alt=""></a></div>\n            <h4><a href="<%=item.personalPage%>" target="_blank"><%=item.name%></a></h4>\n            <p>\n                <%=item.description%>\n            </p>\n        </div>\n        <%}%>\n\n'},function(e,t,i){var n=i(4),s={};e.exports=n.extend({init:function(e){this.scene=e&&e.scene||"HOMEPAGE",this.sceneId=e&&e.sceneId||0},fetch:function(){if(s[this.sceneId])return void this.trigger("sync",s[this.sceneId]);var e=this;this.url="hotAuthors?scene="+this.scene+"&sceneId="+this.sceneId,n.prototype.fetch.call(this,{success:function(t,i){try{"string"==typeof t&&(t=JSON.parse(t)),e.trigger("sync",t),s[e.sceneId]=t}catch(n){e.trigger("error")}}})}})},function(e,t,i){var n=i(4),s={};e.exports=n.extend({init:function(e){this.scene=e&&e.scene||"HOMEPAGE",this.sceneId=e&&e.sceneId||0,this.type=e&&e.type||!1},fetch:function(){if(s[this.sceneId])return void this.trigger("sync",s[this.sceneId]);var e=this;this.type&&"index"==this.type?this.url="//v2.sohu.com/public-api/hotArticle/v2?scene=HOMEPAGE&sceneId=0&count=15&secureScore=75":this.type&&"index2"==this.type?this.url="//v2.sohu.com/public-api/hotArticles/v2?scene="+this.scene+"&sceneId="+this.sceneId+"&secureScore=75":this.url="hotArticle?scene="+this.scene+"&sceneId="+this.sceneId,n.prototype.fetch.call(this,{success:function(t,i){try{"string"==typeof t&&(t=JSON.parse(t)),e.trigger("sync",t),s[e.sceneId]=t}catch(n){e.trigger("error")}}})}})},function(e,t,i){var n=i(25),s=i(18);e.exports=Backbone.View.extend({template:_.template(i(126)),data:{items:[]},model:null,fixed_items:function(){if(this.data.items){for(var e=1;e<=3;e++)this.data.items[e-1]&&(this.data.items[e-1].index=e);this.data.items.forEach(function(e){e.path=n.news(e),e.title=s.subString(e.title,27),e.picUrl=e.picUrl.replace(/\i\.mp\.itc\.cn/g,"i.mp.itc.cn/c_zoom,w_100,h_67")})}return this.data},initialize:function(e){var t=this;this.model=e.model,this.model.on("sync",function(e){t.data.items=e,t.render()}),this.model.fetch()},render:function(){this.fixed_items(),this.$el.html(this.template(this.data)),this.trigger("rendered"),window.sohuSpm&&"function"==typeof window.sohuSpm.domDidChange&&window.sohuSpm.domDidChange()}})},function(e,t){e.exports='<div class="titleR">\n    <span class="tt">24小时热文</span>\n</div>\n\n<% for( var a = 0 ; a < items.length ; a++) { %>\n<%\nvar item = items[a];\n%>\n<div class="pic-txt clear " data-loc="3" data-ev="<%=item.id%>" data-media-id="<%=item.authorId%>">\n    <div class="pic img-do">\n        <a target="_blank" href="<%=item.path %>">\n            <img alt="" src="<%=item.picUrl%>">\n            <%if(item.index){%>\n            <span class="sn"><%=item.index%></span>\n            <%}%>\n        </a>\n</div>\n    <h4><a target="_blank" href="<%=item.path %>"><%=item.title%></a>\n    </h4>\n</div>\n<%}%>\n'},function(e,t,i){var n=i(80),s=i(108),a={get_pgid:function(){return n.get(a)},get_news_chn:function(){return s(a)}};e.exports={set:function(e,t){if("string"==typeof arguments[0]&&(a[arguments[0]]=arguments[1]),"object"==typeof arguments[0])for(var i in arguments[0])a[i]=arguments[0][i]},ext:function(e){e&&e(a)}}},function(e,t,i){var n=(i(25),i(110)),s=i(71),a=i(36),o=(i(129),i(130)),r=i(48),c=i(132),l=i(23),d=i(22),h=i(51),u=i(44),p=i(53),f=i(70),m=(i(134),i(112)),g=i(135),_=i(114),v=i(118),w=i(121),b=i(123),x=i(124),y=i(125),k=i(127);i(11),e.exports=function(e){var t,i,I=[];k.set(e),_.load({type:"channel",channel_id:e.channel_id}),e.sub_id?(_.load({type:"sub",channel_id:e.channel_id,sub_id:e.sub_id}),"997"==e.sub_id&&$("#business_plugin_1").show()):_.load({type:"channel",channel_id:e.channel_id}),new a({el:"#head-login",
mark:"channel",type:"other"});new o({el:$("#left-nav")});new r({el:$("#search"),d_val:$("[data-role='left-hot-spots']").find("p").eq(0).find("a").eq(0).text(),scene:"CHANNEL"});var P=new c({el:$("#focus"),data:{channel_id:e.channel_id,items:e.focus}});new g({focus:P});var C=new l({el:$("#main-news"),data:{channel_id:e.channel_id,sub_id:e.sub_id},model:function(){return new d(e.sub_id?{scene:"CATEGORY",sceneId:e.sub_id}:{scene:"CHANNEL",sceneId:e.channel_id})}()}),T=new h({el:"#fixed-view"});new u({el:$("#float-btn"),data:{refreshable:!1}}).on("refresh",function(){(window.pageYOffset!==undefined?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop)>110&&window.scrollTo(0,0),C.reset(),z.reset()}),new p({el:"#pages-fun"});var E=new w({el:"#recommend-writer",model:new b({scene:"CHANNEL",sceneId:e.channel_id})}),S=new y({el:$("#hot-news"),model:new x({scene:"TAG",sceneId:e.channel_id})});C.on("news:add",function(){t&&t.reset({channel_id:e.channel_id,sub_id:e.sub_id,index:5})});var z=new f(C,"feeds",{start:5,interval:4,channel_id:e.channel_id,sub_id:e.sub_id});$("#nav_button").size()>0&&I.push(s($("#nav_button"),"nav_button",{channel_id:e.channel_id,sub_id:e.sub_id})),$("#focus").size()>0&&P.on("ready",function(){$("#focus .pic.img-do:eq(4)").size()>0&&(i=s($("#focus .pic.img-do:eq(4)"),"focus",{channel_id:e.channel_id,sub_id:e.sub_id,empty_ad:function(){}}),I.push(i))});var j=$("#left-nav [data-role='left-hot-spots'] li:last");j.size()<1&&(j=$("#left-nav [data-role='left-hot-spots'] p:last a:last")),s(j,"hot_spot",{channel_id:e.channel_id,sub_id:e.sub_id,empty_ad:function(){this.$el.show()}}),$("#god_1").size()>0&&I.push(s($("#god_1"),"side_1",{channel_id:e.channel_id,sub_id:e.sub_id})),$("#god_2").size()>0&&I.push(s($("#god_2"),"side_2",{channel_id:e.channel_id,sub_id:e.sub_id})),$("#god_3").size()>0&&I.push(s($("#god_3"),"side_3",{channel_id:e.channel_id,sub_id:e.sub_id})),$("#god_fix_1").size()>0&&(t=s($("#god_fix_1"),"side_fix",{channel_id:e.channel_id,sub_id:e.sub_id,empty_ad:function(){}}),I.push(t)),E.on("rendered",function(){s($("#recommend-writer .pic-txt:last"),"writer",{channel_id:e.channel_id,sub_id:e.sub_id,empty_ad:function(){this.$el.show()}})}),S.on("rendered",function(){s($("#hot-news .pic-txt:last"),"recommends",{channel_id:e.channel_id,sub_id:e.sub_id,empty_ad:function(){this.$el.show()}})}),T.on("fix_change",function(e){e.fixed?$("#god_fix_container").show().css({left:e.o.left_dis+"px",top:e.o.$el_clone.height()+e.o.$el_clone.position().top}):$("#god_fix_container").hide()}),T.on("resize",function(e){$("#god_fix_container").is(":visible")&&$("#god_fix_container").css({left:e.o.left_dis+"px"})}),$("#god-channel-top").size()>0&&I.push(s($("#god-channel-top"),"channel_top",{channel_id:e.channel_id,sub_id:e.sub_id}));var A=new m({loc:e.sub_id?2:1,sub_id:e.sub_id});C.on("reset:after-init",function(){A.evHandler()}),new n({cate_id:e.sub_id}),new v}},function(e,t,i){var n=i(48),s=i(37),a=i(3);e.exports=Backbone.View.extend({events:{'click [data-role="mobile-search-btn"]':"show_search","click #mobile-channel-nav":"hide_search","click a.login-link":"show_login","click img.login-link":"go_user"},initialize:function(e){var t=this;this.render(),new n({el:"#main-search",type:"pc",d_val:e.d_val}),new n({el:"#mobile_search",type:"mobile",d_val:e.d_val}),a.on("sync",function(e){t.$el.find(".login-link").replaceWith("<img class='login-link' src='"+e.icon+"'>")}),a.fetch(),$(s.$el).on("login:success",function(e){a.fetch()})},show_login:function(){s.login()},go_user:function(){window.location="https://passport.sohu.com"},show_search:function(){$("html,body").css({overflow:"hidden",height:document.body.clientHeight+"px"}),this.$el.find("#mobile-channel-nav").addClass("show")},hide_search:function(e){$(e.target).closest(".channel-search").size()<=0&&($("html,body").css({overflow:"",height:""}),this.$el.find("#mobile-channel-nav").removeClass("show"))}})},function(e,t,i){var n=i(131);e.exports=Backbone.View.extend({initialize:function(e){var t=this;n(this.$el,{offset:40}),t.setResponsible(),$(window).on("resize",_.throttle(function(e){t.setResponsible()},200))},setResponsible:function(){var e=this.$el.find(".box"),t=this.$el.find(".box-no"),i=$(window).height(),n=this.$el.find(".channel-logo").outerHeight(),s=i-n,a=e.size()-1,o=Math.ceil(s/100)-2;o<a?(this.$el.find(".box:lt("+o+")").show(),this.$el.find(".box:gt("+(o-1)+")").hide(),t.show(),t.find("dl:gt("+(o-2)+")").show(),t.find("dl:lt("+(o-1)+")").hide()):(e.show(),t.hide()),this.$el.css({visibility:"visible"})}})},function(e,t){e.exports=function(e,t){function i(){$(window).scrollTop()+c.offset>l.top?n():s()}function n(){o.css({position:"fixed",left:"50%",top:c.offset,marginLeft:-h+"px"}),d=!0}function s(){o.css({position:"",left:"",top:"",marginLeft:""}),d=!1,l=o.offset()}function a(){var e=$(window).width();h=e<=c.w_flag?e/2:c.w_flag/2,d&&o.css({marginLeft:-h+"px"})}var o=$(e),r={offset:0,w_flag:1180},c=$.extend({},r,t),l=o.offset(),d=!1,h=c.w_flag/2;i(),a(),$(window).on("scroll",_.throttle(i,10)),$(window).on("resize",_.throttle(a,10))}},function(e,t,i){var n=i(18);e.exports=Backbone.View.extend({template:_.template(i(133)),data:{items:[]},currentPage:1,lastPage:0,translateX:0,translateY:0,startTranslateX:0,startTranslateY:0,delta:0,dragging:!1,startPos:null,transitioning:!1,slideEls:[],totalPage:0,interval:null,timer:null,events:{"touchstart .scroll":"_onTouchStart","click .btnl":"prev","click .btnr":"next","click .autos > span":"go_page","transitionend .con":"_onTransitionEnd","webkitTransitionend .con":"_onTransitionEnd",mouseenter:"freeze",mouseleave:"start"},show:function(){console.log(this.data.items),this.data.items.length>0?this.$el.show():this.$el.hide()},hide:function(){this.$el.hide()},render:function(){this.$el.html(this.template(this.data)),window.sohuSpm&&"function"==typeof window.sohuSpm.domDidChange&&window.sohuSpm.domDidChange()},ready:function(){if(this.$els=this.$el.find('[data-role="item-wrapper"]'),this.slideEls=this.$els[0]&&this.$els[0].children,this.slideEls){this.totalPage=this.slideEls.length||0,$(this.$els).append($(this.slideEls[0]).clone().removeAttr("data-focus-ev")),$(this.$els).prepend($(this.slideEls[this.slideEls.length-2]).clone().removeAttr("data-focus-ev")),this.setPage(0);var e=this;setTimeout(function(){e.trigger("ready")},10),this.start()}},initialize:function(e){var t=this;if(this.channel_id=e.data.channel_id,this.data.items=e.data.items,this.data.items&&this.data.items.length>0){for(var i=0;i<this.data.items.length;i++)this.data.items[i].title=n.subString(this.data.items[i].title.replace(/&amp;/g,"&"),44);t.render(),t.ready()}else this.hide();var t=this;this._onTouchMove=function(e){t.onTouchMove.apply(t,arguments),e.preventDefault(),e.stopPropagation()},this._onTouchEnd=function(e){t.onTouchEnd.apply(t,arguments),e.preventDefault(),e.stopPropagation()}},reset:function(){$(this.$els).html(""),this.slideEls=this.$els[0].children,this.totalPage=this.slideEls.length,$(this.$els).append($(this.slideEls[0]).clone()),$(this.$els).prepend($(this.slideEls[this.slideEls.length-2]).clone()),this.setPage(0)},start:function(){var e=this;e.transitioning=!1,this.interval=setInterval(function(){e.next()},5e3)},next:function(e){var t=this;this.transitioning||(this.currentPage++,this.setPage(this.currentPage),e&&(clearInterval(this.interval),clearTimeout(this.timer),this.timer=setTimeout(function(){t.start()},6e4)))},prev:function(e){var t=this;this.transitioning||(this.currentPage--,this.setPage(this.currentPage),e&&(clearInterval(this.interval),clearTimeout(this.timer),this.timer=setTimeout(function(){t.start()},6e4)))},setPage:function(e){var t;if(this.lastPage=this.currentPage,this.currentPage=e,$(this.slideEls[this.currentPage+1]).trigger("focus-in-view"),this.isHorizontal()?("clientWidth",t="translateX"):("clientHeight",t="translateY"),this.isSupportTransform()){this[t]=0-$(this.slideEls[0]).width()*(e+1);var i=this.$el.find(".con");i.css("transform","translate3d("+this.translateX+"px,"+this.translateY+"px, 0)"),this.$el.find(".autos >span.cur").removeClass("cur"),this.$el.find(".autos >span:eq("+e+")").addClass("cur"),this._onTransitionStart()}else{var n=this;this[t]=0-$(this.slideEls[0]).width()*(e+1);var i=this.$el.find(".con");i.animate({left:n.translateX+"px"},"300",function(){if(n.currentPage<0){n.currentPage=n.totalPage-1;var e=0-n.slideEls[0].clientWidth*n.totalPage}if(n.currentPage>n.totalPage-1){n.currentPage=0;var e=0-n.slideEls[0].clientWidth}i.css({left:e}),n.transitioning=!1,n.$el.find(".autos >span.cur").removeClass("cur"),n.$el.find(".autos >span:eq("+n.currentPage+")").addClass("cur")})}window.sohuSpm&&"function"==typeof window.sohuSpm.reScan&&window.sohuSpm.reScan()},go_page:function(e){this.setPage($(e.currentTarget).data("id"))},setPageNoAnimate:function(e){var t=$(this.$els);t.css("transition","none"),this.setPage(e);var i=this;setTimeout(function(){t.css("transition",""),i.transitioning=!1},100)},isHorizontal:function(){return!0},isVertical:function(){return!1},isSupportTransform:function(){return"transform"in document.createElement("div").style},_onTouchStart:function(e){this.transitioning||(this.startPos=this._getTouchPos(e.originalEvent),this.delta=0,this.startTranslateX=this.translateX,this.startTranslateY=this.translateY,this.startTime=(new Date).getTime(),this.dragging=!0,document.addEventListener("touchmove",this._onTouchMove,!1),document.addEventListener("touchend",this._onTouchEnd,!1),document.addEventListener("mousemove",this._onTouchMove,!1),document.addEventListener("mouseup",this._onTouchEnd,!1))},onTouchMove:function(e){this.delta=this._getTouchPos(e)-this.startPos,e.preventDefault(),e.stopPropagation(),this.isHorizontal()?(this.translateX=this.startTranslateX+this.delta,this.trigger("slider-move",this.translateX)):(this.translateY=this.startTranslateY+this.delta,this.trigger("slider-move",this.translateY)),(this.isVertical()||this.isHorizontal()&&Math.abs(this.delta)>0)&&e.preventDefault()},onTouchEnd:function(e){this.dragging=!1;var t=(new Date).getTime()-this.startTime<1e3;this.delta<-100||t&&this.delta<-15?this.next(e):this.delta>100||t&&this.delta>15?this.prev(e):this._revert(),e.stopPropagation(),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),document.removeEventListener("mousemove",this._onTouchMove),document.removeEventListener("mouseup",this._onTouchEnd)},_revert:function(){this.setPage(this.currentPage)},_getTouchPos:function(e){var t=this.isHorizontal()?"pageX":"pageY";return e.changedTouches?e.changedTouches[0][t]:e[t]},_onTransitionStart:function(){this.transitioning=!0,this._isPageChanged()?this.trigger("slide-change-start",this.currentPage,this):this.trigger("slide-revert-start",this.currentPage,this)},_onTransitionEnd:function(){this.currentPage<0?(this.transitioning=!0,this.setPageNoAnimate(this.totalPage-1)):this.currentPage>this.totalPage-1?(this.transitioning=!0,this.setPageNoAnimate(0)):this.transitioning=!1,this.trigger("focus-change",this.currentPage,this)},_isPageChanged:function(){return this.lastPage!==this.currentPage},freeze:function(){clearInterval(this.interval),this.interval=null}})},function(e,t){e.exports='<div class="scroll" id="swiper">\n    <div class="con" data-role="item-wrapper">\n        <%for(var i = 0 ;i< items.length;i++){\n            var item = items[i];\n            item.path=item.path.match(/\\/\\//)?item.path:"//www.sohu.com"+item.path;\n        %>\n        <div class="pic img-do" data-media-id="<%=item.mediaId%>" data-focus-ev="<%=item.id%>">\n            <a target="_blank"\n                                   href="<%=item.path%>"><img\n                alt="" src="<%=item.picUrl%>">\n                <span class="shadow linear-box"><em class="linear-bg"></em><span><%=item.title%></span></span>\n            </a>\n        </div>\n        <%}%>\n    </div>\n    <div class="autos">\n        <%for(var i = 0 ;i< items.length;i++){%>\n\n        <span data-id="<%=i%>" class="<%i==0?\'cur\':\'\'%>"><a data-spm-stop="nev"></a></span>\n        <%}%>\n    </div>\n    <div class="btns"><a href="javascript:void(0)" class="btnl" data-spm-stop="nev"></a><a href="javascript:void(0)" class="btnr" data-spm-stop="nev"></a>\n    </div>\n</div>\n'},function(e,t,i){var n=i(117).plugins;e.exports={define:function(e,t){var i=n[e];i&&(i.View||(i.View=Backbone.View.extend(t)))}}},function(e,t,i){var n=i(63),s=i(113),a=new s,o=function(e){this.focus_obj=e.focus,this.$focus_el=this.focus_obj.$el,this.focus_list=[],this.init(),this.reset_focus_link(),this.focusHandler(0)};o.prototype={delay_timer:null,focusHandler:function(e){var t=this;if(e=e||0,n(this.$focus_el)&&t.focus_list[e]&&t.focus_list[e].status){var i=t.focus_list[e];i.news_id&&i.media_id&&(a.ev_trigger({loc:i.loc,focus_pic:1,news_id:i.news_id,media_id:i.media_id}),i.status=0)}},init:function(){var e=this;this.$focus_el.find("[data-focus-ev]").each(function(t,i){var n=$(this).find("a").attr("href"),s=$(i).attr("data-focus-ev"),a=$(i).attr("data-media-id");s&&a&&e.focus_list.push({el:i,news_id:s,media_id:a,loc:1,status:1,href:n})}),this.focus_obj.on("focus-change",function(t){e.focusHandler(t)})},reset_focus_link:function(){$.each(this.focus_list,function(e,t){$(t.el).one("click",function(e){e.stopPropagation();var i=$(this).attr("data-focus-ev"),n=$(this).attr("data-media-id");i&&n&&(href=t.href+"?loc="+t.loc+"&focus_pic=1",$(t.el).find("a").attr("href",href))})})}},e.exports=o},function(e,t,i){var n=i(110),s=i(36),a=i(129),o=i(23),r=i(22),c=i(48),l=i(137),d=i(53),h=i(51),u=i(44),p=i(112),f=i(71),m=i(70),g=i(118),_=i(121),v=i(123),w=i(124),b=i(125);i(11);var x=i(127);e.exports=function(e){x.set(e),e.channel_id="-1"==e.channel_id?"42":e.channel_id;var t;new a({el:"#top"}),new s({el:"#head-login",mark:"tag",type:"other"});var i=(new l({el:"#hot-spots"}),new o({el:"#main-news",data:{channel_id:e.channel_id,tag_id:e.tag_id},model:new r({scene:"TAG",sceneId:e.tag_id})}));new c({el:$("#search"),d_val:$("#hot-spots").find("ul li").eq(0).text().replace(/\s+/g,""),scene:"TAG"});var y=new h({el:"#fixed-view",offset_top:20}),k=(new u({el:"#float-btn",data:{refreshable:!1}}),new _({el:"#recommend-writer",model:new v({scene:"CHANNEL",sceneId:e.channel_id})})),I=new b({el:$("#hot-news"),model:new w({scene:"TAG",sceneId:e.channel_id})});i.on("news:add",function(){t&&t.reset({channel_id:e.channel_id,tag_id:e.tag_id,index:4})});new m(i,"feeds",{channel_id:e.channel_id,tag_id:e.tag_id});setTimeout(function(){f($("#hot-spots li:last"),"hot_spot",{channel_id:e.channel_id,sub_id:e.sub_id,tag_id:e.tag_id,empty_ad:function(){}})},100),$("#god_1").size()>0&&f($("#god_1"),"side_1",{channel_id:e.channel_id,tag_id:e.tag_id}),$("#god_2").size()>0&&f($("#god_2"),"side_2",{channel_id:e.channel_id,tag_id:e.tag_id}),$("#god_3").size()>0&&f($("#god_3"),"side_3",{channel_id:e.channel_id,tag_id:e.tag_id}),$("#god_fix_1").size()>0&&(t=f($("#god_fix_1"),"side_fix",{channel_id:e.channel_id,tag_id:e.tag_id,empty_ad:function(){}})),k.on("rendered",function(){f($("#recommend-writer .pic-txt:last"),"writer",{channel_id:e.channel_id,tag_id:e.tag_id,empty_ad:function(){this.$el.show()}})}),I.on("rendered",function(){f($("#hot-news .pic-txt:last"),"recommends",{channel_id:e.channel_id,tag_id:e.tag_id,empty_ad:function(){this.$el.show()}})}),y.on("fix_change",function(e){e.fixed?$("#god_fix_container").show().css({left:e.o.left_dis+"px",top:e.o.$el_clone.height()+e.o.$el_clone.position().top}):$("#god_fix_container").hide()}),y.on("resize",function(e){$("#god_fix_container").is(":visible")&&$("#god_fix_container").css({left:e.o.left_dis+"px"})});new p({loc:4,tag_id:e.tag_id});new n,new g,new d({el:"#pages-fun"})}},function(e,t,i){var n=i(131);e.exports=Backbone.View.extend({initialize:function(e){n(this.$el,{offset:35})}})},function(e,t,i){var n=(i(25),i(110)),s=i(36),a=(i(129),i(48)),o=i(23),r=i(22),c=i(44),l=i(70),d=i(112),h=i(71),u=(i(114),i(127));e.exports=function(e){var t,i=[];u.set(e),new s({el:"#head-login"}),new s({el:"#nav-login"}),new a({el:$("#search")});var p=new o({el:"#main-news",data:{subject_id:e.subject_id},model:new r({subject_id:e.subject_id})});new c({el:$("#float-btn")}).on("refresh",function(){(window.pageYOffset!==undefined?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop)>110&&window.scrollTo(0,0),p.reset(),f.reset()}),p.on("news:add",function(){t&&t.reset({channel_id:e.channel_id,sub_id:e.sub_id,index:5})});var f=new l(p);$("#god_1").size()>0&&i.push(h($("#god_1"),"side_1",{channel_id:e.channel_id,sub_id:e.sub_id})),$("#god_fix_1").size()>0&&(t=h($("#god_fix_1"),"side_fix",{channel_id:e.channel_id,sub_id:e.sub_id,empty_ad:function(){}}),i.push(t));var m=new d({loc:e.sub_id?2:1,sub_id:e.sub_id});p.on("reset:after-init",function(){m.evHandler()}),new n({cate_id:e.sub_id})}},function(e,t,i){var n=(i(140),i(36));e.exports=function(){new n({el:"#head-login",type:"other"})}},function(e,t){e.exports=Backbone.View.extend({events:{"mouseover .more-nav":"show_more","mouseout .more-nav":"hide"},show_more:function(){$(this.$el).find('[data-role="more-channel"]').show()},hide:function(){$(this.$el).find('[data-role="more-channel"]').hide()}})},function(e,t,i){var n=i(48),s=i(142),a=i(36),o=i(44),r=i(22),c=i(23),l=i(112),d=i(135),h=i(51),u=i(114),p=i(146),f=i(53),m=i(121),g=i(123),_=i(124),v=i(125),w=i(147),b=i(71),x=i(150),y=(i(110),i(70)),k=i(118),I=i(127),P=i(152);i(11),e.exports=function(e){I.set(e),u.load({type:"index",args:{ext_data:{modelId:0}}}),new n({el:$("#search"),scene:"HOMEPAGE"});var t=new s({el:$("#index-focus"),data:{items:e.focus}});new a({el:"#head-login",mark:"index",type:"index"});var i=new h({el:"#fixed-view"}),C=new c({el:$("#main-news"),model:new r({scene:"HOMEPAGE"}),role:"index",page_no:2}),T=new v({el:$("#hot-news"),model:new _({scene:"HOMEPAGE"})});new o({el:"#float-btn",data:{refreshable:!1,home:!1,comment:!1,qrcode:!1}}).on("refresh",function(){window.location.reload()});new l({loc:1});new d({focus:t}),new p({el:"#left-nav"}),new f({el:"#pages-fun"});var E=new w({el:"#main-news"}),S=new m({el:"#recommend-writer",model:new g({scene:"HOMEPAGE"})});new y(C,"feeds",{start:3,interval:6,extra:E});C.on("news:add",function(){fix_ad&&fix_ad.reset({})});var z=b($("#god_focus"),"index_focus",{});t.on("auto-change",function(e){z.$el.html()&&2==e&&(t.pause(),z.$el.show(),z.ad_instance.av_trigger(),setTimeout(function(){z.$el.hide(),t.reStart()},3e3))}),$("#god_1").size()>0&&b($("#god_1"),"side_1",{}),$("#god_2").size()>0&&b($("#god_2"),"side_2",{}),$("#god_3").size()>0&&b($("#god_3"),"side_3",{}),$("#god_4").size()>0&&b($("#god_4"),"side_4",{}),$("#god_5").size()>0&&b($("#god_5"),"side_5",{}),$("#god_fix_1").size()>0&&(fix_ad=b($("#god_fix_1"),"side_fix",{})),S.on("rendered",function(){b($("#recommend-writer .pic-txt:last"),"writer",{empty_ad:function(){this.$el.show()}})}),T.on("rendered",function(){b($("#hot-news .pic-txt:last"),"recommends",{empty_ad:function(){this.$el.show()}})}),i.on("fix_change",function(e){e.fixed?$("#god_fix_container").show().css({left:e.o.left_dis+"px",top:e.o.$el_clone.height()+e.o.$el_clone.position().top}):$("#god_fix_container").hide()}),i.on("resize",function(e){$("#god_fix_container").is(":visible")&&$("#god_fix_container").css({left:e.o.left_dis+"px"})}),$("#god_index").size()>0&&(x($("#god_index .swiper"),"index_side_swiper",{maxreads:5}),x($("#god_index .tab-wrap"),"index_side_txt",{maxreads:21})),new k,new P({el:$("#report")}),$('[data-role="channelLink"]').each(function(e,t){""==$(t).attr("href")&&$(t).attr("target","_self").attr("href","javascript:void(0)")})}},function(e,t,i){var n=(i(143),i(18));i(144);e.exports=Backbone.View.extend({template:_.template(i(145)),events:{"mouseenter .list>ul>li":"tabChange",mouseenter:"pause",mouseleave:"reStart"},data:{items:[],cur_id:30,tabs:[]},extra:{},cur_index:0,interval:2e3,timer:null,restart_timer:null,slide_number:7,render:function(){this.$el.html(this.template(this.data))},initialize:function(e){var t=this;this.data.items=e.data.items,this.slide_number=this.data.items.length;for(var i=0;i<this.data.items.length&&!(i>this.slide_number-1);i++)this.data.items[i].title=this.data.items[i].title&&n.subString(this.data.items[i].title.replace(/&amp;/g,"&"),44),this.data.tabs.push({channel_id:this.data.items[i].channelId,name:this.data.items[i].channelName});t.render(),this.updateSlides(),setTimeout(function(){t.trigger("ready")},10),t.start()},updateSlides:function(){this.slides=this.$el.find(".con").children(),this.total_page=this.slides.length},tabChange:function(e){this.cur_index=$(e.currentTarget).attr("data-id"),this.setPagenation(this.cur_index),this.setPage(this.cur_index)},setPagenation:function(e){this.$el.find(".list li").removeClass("now").eq(e).addClass("now")},start:function(){var e=this;this.timer=setTimeout(function(){e.cur_index++;var t=e.cur_index%e.total_page;e.trigger("auto-change",t,e),e.setPagenation(t),e.setPage(t),e.start()},5e3)},setPage:function(e){this.slides.removeClass("cur"),this.slides.eq(e).addClass("cur"),this.trigger("focus-change",this.cur_index,this)},pause:function(){clearInterval(this.timer),this.timer=null},reStart:function(){clearInterval(this.timer),this.timer=null,this.start()}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.channel_id=e.channel_id},fetch:function(e){var t=this;this.url="/apiV2/re/headers?channelId="+this.channel_id,n.prototype.fetch.call(this,{success:function(e,i){try{"string"==typeof e&&(e=JSON.parse(e)),t.trigger("sync",e.list)}catch(n){t.trigger("error")}}})}})},function(e,t){var i={42:{name_cn:"游戏",name:"game"},23:{name_cn:"时尚",name:"fashion"},15:{name_cn:"财经",name:"business"},19:{name_cn:"娱谈",name:"yule"},17:{name_cn:"体育",name:"sports"},18:{name_cn:"汽车",name:"auto"},30:{name_cn:"科技",name:"it"},41:{name_cn:"动漫",name:"dm"},12:{name_cn:"文化",name:"cul"},13:{name_cn:"历史",name:"history"},25:{name_cn:"教育",name:"learning"},27:{name_cn:"星座",name:"astro"},45:{name_cn:"搞笑",name:"joke"},44:{name_cn:"宠物",name:"pets"},43:{name_cn:"世相",name:"view"},28:{name_cn:"美食",name:"food"},29:{name_cn:"旅游",name:"travel"},8:{name_cn:"新闻",name:"news"},24:{name_cn:"健康",name:"health"}};e.exports={getNameCn:function(e){try{return i[e].name_cn}catch(t){return console.log("channel id doesn't exsist",t),""}},getName:function(e){try{return channel_info[e].name}catch(t){return console.log("channel id doesn't exsist",t),0}}}},function(e,t){e.exports='<div class="scroll">\n\n        <div  class="con active">\n            <%for(var j = 0 ;j< items.length;j++){\n                var slide=items[j];    \n            %>\n                <div class="pic img-do <%=(j==0)? \'cur\' :\'\'%>" data-media-id="<%=slide.mediaId%>" data-focus-ev="<%=slide.id%>">\n                    <a href="<%=\'//www.sohu.com\'+slide.path%>" target="_blank"><img src="<%=slide.picUrl%>" alt=""></a>\n                    <span class="linear-box"><em class="linear-bg"></em><a href="<%=\'//www.sohu.com\'+slide.path%>" target="_blank"><%=slide.title%></a></span>\n                </div>\n             <%}%>\n        </div>\n</div>\n<div class="list">\n    <ul>\n        <%for(var i = 0 ;i< tabs.length;i++){%>\n            <li data-id="<%= i %>" class="<%=(i==0) ? \'now\' : \'\'%>">\n                <i class="cort"></i>\n                <%=tabs[i].name%>\n            </li>\n            <%}%>\n    </ul>\n</div>\n<div id="god_focus"></div>'},function(e,t,i){var n=i(131);e.exports=Backbone.View.extend({initialize:function(e){var t=this;n(this.$el),this.setResponsible(),$(window).on("resize",_.throttle(function(e){t.setResponsible()},200))},setResponsible:function(){var e=this.$el.find(".box"),t=this.$el.find(".box-more"),i=$(window).height(),n=this.$el.find(".sohu-logo").outerHeight(),s=this.$el.offset.top>50?0:50,a=i-n-s,o=e.size(),r=Math.ceil(a/63)-0;r=r<=2?2:r,r<o?(this.$el.find(".box").show(),this.$el.find(".box:gt("+(r-2)+")").hide(),t.show().find("dl").show(),t.find("dl:lt("+(r-1)+")").hide()):(e.show(),t.hide()),this.$el.css({visibility:"visible"})}})},function(e,t,i){var n=i(148),s=i(149),a=function(){};e.exports=n({template:s,initFn:a,items:[],needRender:!1,interval:6e3})},function(e,t){function i(e){return Backbone.View.extend({template:_.template(e.template),data:{items:e.items},currentPage:1,lastPage:0,translateX:0,translateY:0,startTranslateX:0,startTranslateY:0,delta:0,dragging:!1,startPos:null,transitioning:!1,slideEls:[],totalPage:0,interval:null,timer:null,time:5e3,events:{"touchstart [data-role='wrapper']":"_onTouchStart","click [data-role='left-btn']":"prev","click [data-role='right-btn']":"next","click [data-role='bullet']":"go_page","transitionend [data-role='wrapper']":"_onTransitionEnd","webkitTransitionend [data-role='wrapper']":"_onTransitionEnd",mouseenter:"freeze",mouseleave:"start"},show:function(){this.data.items.length>0?this.$el.show():this.$el.hide()},hide:function(){this.$el.hide()},render:function(){this.$el.html(this.template(this.data))},ready:function(){if(this.$els=this.$el.find('[data-role="wrapper"]'),this.slideEls=this.$els[0]&&this.$els[0].children,!this.slideEls)return void this.$el.hide();this.totalPage=this.slideEls.length||0,$(this.$els).append($(this.slideEls[0]).clone().removeAttr("data-focus-ev")),$(this.$els).prepend($(this.slideEls[this.slideEls.length-2]).clone().removeAttr("data-focus-ev")),this.setPage(0);this.start()},resolveOptions:function(e){for(var t,i=["time"],n=i.length;t<n;t++){var s=i[t];this[s]=e[s]}},initialize:function(e){var t=this;this.resolveOptions(),e.needRender?this.data.items&&this.data.items.length>0?(t.render(),t.ready()):this.hide():t.ready();var t=this;this._onTouchMove=function(e){t.onTouchMove.apply(t,arguments),e.preventDefault(),e.stopPropagation()},this._onTouchEnd=function(e){t.onTouchEnd.apply(t,arguments),e.preventDefault(),e.stopPropagation()}},reset:function(){$(this.$els).html(""),this.slideEls=this.$els[0].children,this.totalPage=this.slideEls.length,$(this.$els).append($(this.slideEls[0]).clone()),$(this.$els).prepend($(this.slideEls[this.slideEls.length-2]).clone()),this.setPage(0)},start:function(){var e=this;e.transitioning=!1,this.interval=setInterval(function(){e.next()},this.time)},next:function(e){var t=this;this.currentPage++,this.setPage(this.currentPage),e&&(clearInterval(this.interval),clearTimeout(this.timer),this.timer=setTimeout(function(){t.start()},6e4))},prev:function(e){var t=this;this.transitioning||(this.currentPage--,this.setPage(this.currentPage),e&&(clearInterval(this.interval),clearTimeout(this.timer),this.timer=setTimeout(function(){t.start()},6e4)))},setPage:function(e){var t;if(this.lastPage=this.currentPage,this.currentPage=e,$(this.slideEls[this.currentPage+1]).trigger("focus-in-view"),this.isHorizontal()?("clientWidth",t="translateX"):("clientHeight",t="translateY"),this.isSupportTransform()){this[t]=0-$(this.slideEls[0]).width()*(e+1);var i=this.$el.find("[data-role='wrapper']");i.css("transform","translate3d("+this.translateX+"px,"+this.translateY+"px, 0)"),this.$el.find("[data-role='bullet']").removeClass("cur"),this.$el.find("[data-role='bullet']:eq("+e+")").addClass("cur"),this._onTransitionStart()}else{var n=this;this[t]=0-$(this.slideEls[0]).width()*(e+1);var i=this.$el.find("[data-role='wrapper']");i.animate({left:n.translateX+"px"},"300",function(){if(n.currentPage<0){n.currentPage=n.totalPage-1;var e=0-n.slideEls[0].clientWidth*n.totalPage}if(n.currentPage>n.totalPage-1){n.currentPage=0;var e=0-n.slideEls[0].clientWidth}i.css({left:e}),n.transitioning=!1,n.$el.find("[data-role='bullet']").removeClass("cur"),n.$el.find("[data-role='bullet']:eq("+n.currentPage+")").addClass("cur")})}setTimeout(function(){window.sohuSpm&&"function"==typeof window.sohuSpm.reScan&&window.sohuSpm.reScan()})},go_page:function(e){this.setPage($(e.currentTarget).data("id"))},setPageNoAnimate:function(e){var t=$(this.$els);t.css("transition","none"),this.setPage(e);var i=this;setTimeout(function(){t.css("transition",""),i.transitioning=!1},100)},isHorizontal:function(){return!0},isVertical:function(){return!1},isSupportTransform:function(){return"transform"in document.createElement("div").style},_onTouchStart:function(e){this.transitioning||(this.startPos=this._getTouchPos(e.originalEvent),this.delta=0,this.startTranslateX=this.translateX,this.startTranslateY=this.translateY,this.startTime=(new Date).getTime(),this.dragging=!0,document.addEventListener("touchmove",this._onTouchMove,!1),document.addEventListener("touchend",this._onTouchEnd,!1),document.addEventListener("mousemove",this._onTouchMove,!1),document.addEventListener("mouseup",this._onTouchEnd,!1))},onTouchMove:function(e){this.delta=this._getTouchPos(e)-this.startPos,e.preventDefault(),e.stopPropagation(),this.isHorizontal()?(this.translateX=this.startTranslateX+this.delta,this.trigger("slider-move",this.translateX)):(this.translateY=this.startTranslateY+this.delta,this.trigger("slider-move",this.translateY)),(this.isVertical()||this.isHorizontal()&&Math.abs(this.delta)>0)&&e.preventDefault()},onTouchEnd:function(e){this.dragging=!1;var t=(new Date).getTime()-this.startTime<1e3;this.delta<-100||t&&this.delta<-15?this.next(e):this.delta>100||t&&this.delta>15?this.prev(e):this._revert(),e.stopPropagation(),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),document.removeEventListener("mousemove",this._onTouchMove),document.removeEventListener("mouseup",this._onTouchEnd)},_revert:function(){this.setPage(this.currentPage)},_getTouchPos:function(e){var t=this.isHorizontal()?"pageX":"pageY";return e.changedTouches?e.changedTouches[0][t]:e[t]},_onTransitionStart:function(){this.transitioning=!0,this._isPageChanged()?this.trigger("slide-change-start",this.currentPage,this):this.trigger("slide-revert-start",this.currentPage,this)},_onTransitionEnd:function(){this.currentPage<0?(this.transitioning=!0,this.setPageNoAnimate(this.totalPage-1)):this.currentPage>this.totalPage-1?(this.transitioning=!0,this.setPageNoAnimate(0)):this.transitioning=!1,this.trigger("focus-change",this.currentPage,this)},_isPageChanged:function(){return this.lastPage!==this.currentPage},freeze:function(){clearInterval(this.interval),this.interval=null}})}e.exports=i},function(e,t){e.exports=""},function(e,t,i){var n=i(151),s=function(e,t,i){var s="";s=i.sub_id&&i.channel_id?"sub":i.news_id&&i.channel_id?"article":i.tag_id&&i.channel_id?"tag":i.channel_id?"channel":"index";var a=new n(s,t,e);return a.init(i),a};e.exports=s},function(e,t,i){var n=i(73),s=i(75),a=new s,o=(i(7),i(77)),r=i(80),c=i(106),l=i(108),d=i(109),h=i(76),u=function(e,t,i){this.$el=i,this.adShowList=[],a.count_trigger(),o[e]&&(this.page_type=e,this.ad_type=t,this.ad=o[e][t],this.ad&&(this.adps=this.ad.size,this.AdInstance=this.ad.Ins,this.support_flash=h(t)?"1":"0"))};u.prototype={init:function(e){if(!this.ad)return void(this.empty_ad?this.empty_ad():this.$el.hide());var t=this;this.empty_ad=e.empty_ad||this.empty_ad;var i,s=(new Date).getTime(),o=this.ad.ad_id;this.$el.attr("data-god-id",o);var h=l(e),u=c(this.page_type,this.ad_type,e),p=e.maxreads?e.maxreads>21?21:e.maxreads:1,f=d(e),m=new n({turn:u||1,id:o,position:e.position,channel_id:h,sub_id:e.sub_id,tag_id:e.tag_id,news_id:e.news_id,subid:e.subid,adps:t.adps,maxreads:p,multichn:f,support_flash:t.support_flash});i=(new Date).getTime()-s;var g=function(n){var s=n,c=s.length,l="index_side_swiper"==t.ad_type?5:21;if(c<l)for(var d=c;d<l;d++)s.push({});_.forEach(s,function(n){var s=n&&n.monitorkey||"",c=t.$el.offset();""===s?c.left=c.top="":t.$el.is(":visible")?(c.left=c.left.toFixed(1),c.top=c.top.toFixed(1)):c.left=c.top=0,a.pv_trigger({source:n.source||"",newsid:t.news_id||"",subid:t.subid||"",aid:n&&n.adid||"",apid:"beans_"+o,impid:n&&n.impression_id||"",mkey:s,latcy:i,freq:n&&n.freq||0,ax:c&&c.left,ay:c&&c.top,ed:n&&n.ed||"",
bucket:n&&n.bucket||"",ext:n&&n.ext||"",uloc:n&&n.uloc||"",newschn:h,turn:u,position:e.position||"",pgid:r.get(e),shbd_monitor_ext:n&&n.shbd_monitor_ext||"",sf:t.support_flash})})};m.on("sync",function(n){n[0]?(t.$el.show(),t.ad_instance=new t.AdInstance({data:n,turn:u,ad_id:o,el:t.$el,latcy:i,position:e.position,channel_id:e.channel_id,sub_id:e.sub_id,tag_id:e.tag_id,news_id:e.news_id,ad_channel_id:h,sf:t.support_flash}),t.ad_instance.render()):t.empty_ad?t.empty_ad():t.$el.hide(),g(n)}),m.on("error",function(){g(),t.empty_ad?t.empty_ad():t.$el.hide()}),m.fetch()},reset:function(e){this.ad_instance&&this.ad_instance.undelegateEvents(),this.init(e)}},e.exports=u},function(e,t,i){var n=i(6);e.exports=Backbone.View.extend({d:106,interval:1e4,events:{"webkitTransitionEnd .jubao-list":"onTransitionEnd","transitionend .jubao-list":"onTransitionEnd","MSTransitionEnd .jubao-list":"onTransitionEnd"},index:0,initialize:function(e){var t=this;this.wrap=this.$el.find(".jubao-list"),this.count=this.wrap.find("div").length;var i=this.wrap.find("div");this.wrap.append(i.eq(2).clone()),t.start()},start:function(){var e=this,e=this;setTimeout(function(){e.index++,e.setPage(e.index),e.start()},e.interval)},setPage:function(e){var t=Math.ceil(this.count/2);this.index=e%t,n.isSupportTransform()?this.wrap.css({opacity:"0"}):this.wrap.css({top:-this.index*this.d+"px"})},onTransitionEnd:function(){this.wrap.css({transform:"translateY("+-this.index*this.d+"px)",opacity:"1"})}})},function(e,t,i){var n=i(114);e.exports=function(e){n.load({type:"test",def:e.def,channel_id:e.channel_id,args:{channel_id:e.channel_id,sub_id:e.sub_id,tag_id:e.sub_id,news_ids:e.news_id,ext_data:e.ext_data}})}},function(e,t,i){var n=i(155),s=i(48),a=i(156),o=(i(158),i(114)),r=i(152),c=i(159),l=i(164),d=i(174),h=(i(178),i(162),i(22),i(180)),u=(i(167),i(123),i(183),i(118)),p=i(192),f=i(193),m=(i(194),i(197)),g=i(16),_=i(36),v=i(199),w=i(44),b=i(7),x=(b.get("SUV"),i(201)),y=(i(124),i(205)),k=i(206),I=i(209),P=i(212),C=i(147),T=i(215),E=i(217),S=(i(218),i(219)),z=(i(221),i(223)),j=i(225),A=i(77),D=i(107);i(11);var N=i(230),V=i(231);e.exports=function(e){function t(){if(WebSocket){var e=new WebSocket("wss://jincai.sohu.com/home-ws/homews");e.onopen=function(e){console.log(e)},e.onmessage=function(e){var t=document.getElementById("entrance"),i="";try{i=JSON.parse(e.data)}catch(n){console.log("解析JSON失败",i)}console.log(i.messageType),"ON"===i.messageType?(t.style.display="block",$('[data-spm="top-news6"]').find("li:last").css("display","none")):"OFF"===i.messageType&&(t.style.display="none",$('[data-spm="top-news6"]').find("li:last").css("display","block"))}}else console.log("WebSocket不存在")}function i(e){var t={refreshable:!1,feedback:!0,classicSohu:!0};new w({el:"#float-btn",data:$.extend(t,e)})}function b(){$(document).on("click",".classic",function(){"设为默认首页"===$(".classic").text()?(N.set("isFromClassic","false",{expires:3,domain:".sohu.com"}),$(".classic").text("取消设为默认首页"),localStorage.setItem("homepage","true")):"取消设为默认首页"===$(".classic").text()&&($(".classic").text("设为默认首页"),localStorage.setItem("homepage","false"))}),t(),$(document).on("click",".intoclassic",function(e){e.preventDefault(),window.sohuSpm.sendAction({acode:"8742",clkParam:"position:0"}),window.open($(e.currentTarget).attr("href"),"_blank")}),$(document).on("click",".rightbutton",function(e){window.sohuSpm.sendAction({acode:"8742",clkParam:"position:1"}),window.open("/classic","_blank")}),new s({el:"#search",channel_id:8}),new r({el:"#report"}),+new Date>1589904e6&&+new Date<15907428e5&&new z({el:".theme-skin-wrap"}),new E({firstEl:"[data-role='update-pa-0']",nextEl:"[data-role='update-pa-1']",btnEl:"[data-role='update-btn']",top:$(".contentA").offset().top,bottom:$(".contentA").offset().top+$(".contentA").height()});var e=new c({el:"[data-role='focus-section']"});e.on("newItemsIn",function(e){v.upDateAdMap({adMap:e})}),e.on("ready",function(){this.readyRender=!0,v.triggerPv(),e&&f&&w&&e.readyRender&&f.readyRender&&w.readyRender&&(v.clickMonitor(),v.evMonitor())}),new l({el:"[data-role='sohu-video-collection']"}),new d({el:"[data-role='joke-hot-news']",sceneId:45,channelInfo:{name:"搞笑",url:"//fun.sohu.com",name_en:"fun"}}),new x({el:"[data-role='hot-news']",model:new y({id:11960,slice:6}),type:"index2"});var i=new a({el:"[data-role='index-focus']"});new S({changeFocus:$("[data-role='index-focus'] .con .pic")[2],succCallback:function(){i.setPage(1),i.freeze(),setTimeout(function(){i.start()},2e3)}}),function(){var e=$("[data-role='author-reading-count']"),t=[],i=new p;e.each(function(e){t.push($(this).attr("data-id").trim()),$(this).attr("data-role","watting-author-reading-count")}),i.on("sync",function(e){$('[data-role="watting-author-reading-count"]').each(function(t){var i=$(this).attr("data-id").trim();$(this).html(new g(e[i]).format())})}),i.fetch({list:t})}(),new V({el:$("#pop-news")}),o.load({type:"index_v3",args:{ext_data:{modelId:0}}}),u.update(),new m({el:"[data-role='index-sohu-choice']"}),new j({el:"#city-sohu-choice"}),new _({el:".right.head-right",type:"",mark:"index"}),new _({el:"#head-login",type:"other",mark:"index"}),new h({el:"[data-role='yule-section']"}),new h({el:"[data-role='sports-section']"}),new h({el:"[data-role='business-section']"}),new h({el:"[data-role='auto-section']"}),new k({el:"[data-role='rank-list']"});var f=new I({el:".other-modB"});f.on("ready",function(t){var i={};t.list.forEach(function(e){i[e.ad_pos_id]=e}),v.upDateAdMap({adMap:i}),this.readyRender=!0,e&&f&&w&&e.readyRender&&f.readyRender&&w.readyRender&&(v.clickMonitor(),v.evMonitor())});var w=new P({el:".other-modA"});w.on("ready",function(t){var i={};t.list.forEach(function(e){i[e.ad_pos_id]=e}),v.upDateAdMap({adMap:i}),this.readyRender=!0,e&&f&&w&&e.readyRender&&f.readyRender&&w.readyRender&&(v.clickMonitor(),v.evMonitor())}),new C({el:"[data-role='yule-pay']"}),n.init({type:"v3"},{focus:i,house:e}),new T({topEv:[{el:'[data-role="yule-section"]',param:"10210052"},{el:'[data-role="auto-section"]',param:"10210053"},{el:".main-left.fashion-news.left",param:"10210054"},{el:".main-left.mil-news.left",param:"10210055"},{el:".service-info.area.clearfix",param:"10210056"}],clickEv:{el:"[data-clev]",special:[{el:"#search",param:"10210051"},{el:'[data-role="update-btn"]',param:"10220073"}]},linkEv:"[data-param]"}),"true"===N.get("isFromClassic")?$(".classic").text("设为默认首页"):"true"===localStorage.getItem("homepage")?$(".classic").text("取消设为默认首页"):"false"===localStorage.getItem("homepage")&&$(".classic").text("设为默认首页")}var L=this,q=["side_5","promotion_2","promotion_3","column_6","column_5","drain-btn"],M=A.v3_index,O=[];q.forEach(function(e){O.push(M[e])});var U=new f;U.on("sync",function(e){var t=q.splice(5,1)[0],n=e.data||{};n[M[t].ad_id].data&&n[M[t].ad_id].data.length>0?i():i({classicSohu:!1}),delete e.data[M[t].ad_id],D.insertAdsProps(e,A),b.call(L)}),U.on("error",function(e){i({classicSohu:!1})}),U.fetch({params:JSON.stringify(D.tidyAdsParams(O))})}},function(e,t,i){var n=i(71),s=i(77),a=(i(70),!1),o={focus:!1,house:!1};e.exports={init:function(e,t){var i=this;this.opts=e,this.deps=t,this.thresholds=[],this.sync(e,t),a=!0,i.depsAd(e,t),i.load(e)},sync:function(e,t){var i=this;t.focus.on("ready",function(){o.focus=!0,i.depsAd(e,t)}),t.house.on("ready",function(){o.house=!0,i.depsAd(e,t)})},depsAd:function(e,t,i){var s=this;a&&(o.focus&&($("[data-role='index-focus']").size()&&n($("[data-role='index-focus'] .pic.img-do:eq(3)"),"index_focus",$.extend({},e,{empty_ad:function(){this.$el.show()}})),o.focus=!1),o.house&&(s.channelAd("house"),o.house=!1))},load:function(e){var t=this;_.each($(".godR"),function(t,i){t&&n($(t),"side_"+(i+1),$.extend({},e,{}))}),_.each($("[data-role='god_column']"),function(i,s){if(1==s||2==s||3==s)var a={maxreads:2};if(i){var o=n($(i),"column_"+(s+1),$.extend({},a,e,{}));o.$el.on("needSecondColumn",function(t,i){o.$el.removeClass("god-main").addClass("god-sub");var s=$("<div class='god-sub'></div>");s.insertAfter(o.$el),n(s,"sub_column_"+i.column_type,$.extend({},a,e,{data:i.data},{}))}),o.$el.on("needEmptyColumn",function(i,s){var o=$("<div class='god-sub' style='display:none'></div>");n(o,"sub_column_"+s.column_type,$.extend({},a,e,{data:s.data},{})),console.log("AAAAA",t.cutOver("sub_column_"+s.column_type))})}});var i=["focus","yule","sports","business","auto","it","fashion","mil","history","health","cul","travel","learning","baobao","chihe","astro","society","game","acg","pets"];_.each(i,function(e,i){t.channelAd(e)}),_.each($("[data-role='god_promotion']"),function(t,i){n($(t),"promotion_"+(i+1),$.extend({},e,{empty_ad:function(){this.$el.hide()}}))})},channelAd:function(e){var t=this.opts,i=$("."+e+"-news").find(".list16:last li:last");"focus"==e&&(i=$("."+e+"-news .list-mod-0").find(".list16 li").eq(-2));var s=i.html();i.html("广告<em style='color:#D0D0D0'> | </em><span></span><span style='margin-left:10px'></span>");var a="txt_"+e,o=i.find("span");if(o.eq(0).size()&&n(o.eq(0),a+"_1",$.extend({},t,{empty_ad:function(){i.html(s)},block_name:e})),o.eq(1).size()&&n(o.eq(1),a+"_2",$.extend({},t,{})),"business"==e){var r=$("."+e+"-news").find(".list16:last li").slice(4,5),c=r.html();r.html("<span></span>");var l=r.find("span");l.eq(0).size()&&n(l.eq(0),a+"_0",$.extend({},t,{empty_ad:function(){r.html(c)},block_name:e}))}},cutOver:function(e){var t=this.thresholds,i=s[this.pageType()][e]||{},n=i.ad_id||"";if(t.length>0&&a){for(var o=0,r=t.length;o<r;o++)if(t[o].adslot_id==n)return t[o].ifNew||!1;return!1}return!1},pageType:function(){var e=this.opts;return e&&e.sub_id&&e.channel_id?"sub":e&&e.news_id&&e.channel_id?"article":e&&"dsy"==e.type?"pic_collection":e&&e.tag_id&&e.channel_id?"tag":e&&"news_channel"==e.type?"news_channel":e&&e.channel_id?"channel":e&&"v3"==e.type?"v3_index":"index"}}},function(e,t,i){i(18);e.exports=Backbone.View.extend({template:_.template(i(157)),data:{items:[]},currentPage:1,lastPage:0,translateX:0,translateY:0,startTranslateX:0,startTranslateY:0,delta:0,dragging:!1,startPos:null,transitioning:!1,slideEls:[],totalPage:0,interval:null,timer:null,events:{"touchstart .scroll":"_onTouchStart","click .btnl":"prev","click .btnr":"next","click .autos > span":"go_page","transitionend .con":"_onTransitionEnd","webkitTransitionend .con":"_onTransitionEnd",mouseenter:"freeze",mouseleave:"start"},show:function(){console.log(this.data.items),this.data.items.length>0?this.$el.show():this.$el.hide()},hide:function(){this.$el.hide()},render:function(){this.$el.html(this.template(this.data))},ready:function(){if(this.$els=this.$el.find('[data-role="item-wrapper"]'),this.slideEls=this.$els[0]&&this.$els[0].children,this.slideEls){this.totalPage=this.slideEls.length||0,$(this.$els).append($(this.slideEls[0]).clone().removeAttr("data-focus-ev")),$(this.$els).prepend($(this.slideEls[this.slideEls.length-2]).clone().removeAttr("data-focus-ev")),this.setPage(0);var e=this;setTimeout(function(){e.trigger("ready")},10),this.start()}},initialize:function(e){var t=this;t.ready(),this._onTouchMove=function(e){t.onTouchMove.apply(t,arguments),e.preventDefault(),e.stopPropagation()},this._onTouchEnd=function(e){t.onTouchEnd.apply(t,arguments),e.preventDefault(),e.stopPropagation()}},reset:function(){$(this.$els).html(""),this.slideEls=this.$els[0].children,this.totalPage=this.slideEls.length,$(this.$els).append($(this.slideEls[0]).clone()),$(this.$els).prepend($(this.slideEls[this.slideEls.length-2]).clone()),this.setPage(0)},start:function(){var e=this;e.transitioning=!1,this.interval=setInterval(function(){e.next()},5e3)},next:function(e){var t=this;this.transitioning||(this.currentPage++,this.setPage(this.currentPage),e&&(clearInterval(this.interval),clearTimeout(this.timer),this.timer=setTimeout(function(){t.start()},6e4)))},prev:function(e){var t=this;this.transitioning||(this.currentPage--,this.setPage(this.currentPage),e&&(clearInterval(this.interval),clearTimeout(this.timer),this.timer=setTimeout(function(){t.start()},6e4)))},setPage:function(e){var t;if(this.lastPage=this.currentPage,this.currentPage=e,$(this.slideEls[this.currentPage+1]).trigger("focus-in-view"),this.isHorizontal()?("clientWidth",t="translateX"):("clientHeight",t="translateY"),this.isSupportTransform()){this[t]=0-$(this.slideEls[0]).width()*(e+1);var i=this.$el.find(".con");i.css("transform","translate3d("+this.translateX+"px,"+this.translateY+"px, 0)"),this.$el.find(".autos >span.cur").removeClass("cur"),this.$el.find(".autos >span:eq("+e+")").addClass("cur"),this._onTransitionStart()}else{var n=this;this[t]=0-$(this.slideEls[0]).width()*(e+1);var i=this.$el.find(".con");i.animate({left:n.translateX+"px"},"300",function(){if(n.currentPage<0){n.currentPage=n.totalPage-1;var e=0-n.slideEls[0].clientWidth*n.totalPage}if(n.currentPage>n.totalPage-1){n.currentPage=0;var e=0-n.slideEls[0].clientWidth}i.css({left:e}),n.transitioning=!1,n.$el.find(".autos >span.cur").removeClass("cur"),n.$el.find(".autos >span:eq("+n.currentPage+")").addClass("cur")})}},go_page:function(e){this.setPage($(e.currentTarget).data("id"))},setPageNoAnimate:function(e){var t=$(this.$els);t.css("transition","none"),this.setPage(e);var i=this;setTimeout(function(){t.css("transition",""),i.transitioning=!1},100)},isHorizontal:function(){return!0},isVertical:function(){return!1},isSupportTransform:function(){return"transform"in document.createElement("div").style},_onTouchStart:function(e){this.transitioning||(this.startPos=this._getTouchPos(e.originalEvent),this.delta=0,this.startTranslateX=this.translateX,this.startTranslateY=this.translateY,this.startTime=(new Date).getTime(),this.dragging=!0,document.addEventListener("touchmove",this._onTouchMove,!1),document.addEventListener("touchend",this._onTouchEnd,!1),document.addEventListener("mousemove",this._onTouchMove,!1),document.addEventListener("mouseup",this._onTouchEnd,!1))},onTouchMove:function(e){this.delta=this._getTouchPos(e)-this.startPos,e.preventDefault(),e.stopPropagation(),this.isHorizontal()?(this.translateX=this.startTranslateX+this.delta,this.trigger("slider-move",this.translateX)):(this.translateY=this.startTranslateY+this.delta,this.trigger("slider-move",this.translateY)),(this.isVertical()||this.isHorizontal()&&Math.abs(this.delta)>0)&&e.preventDefault()},onTouchEnd:function(e){this.dragging=!1;var t=(new Date).getTime()-this.startTime<1e3;this.delta<-100||t&&this.delta<-15?this.next(e):this.delta>100||t&&this.delta>15?this.prev(e):this._revert(),e.stopPropagation(),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),document.removeEventListener("mousemove",this._onTouchMove),document.removeEventListener("mouseup",this._onTouchEnd)},_revert:function(){this.setPage(this.currentPage)},_getTouchPos:function(e){var t=this.isHorizontal()?"pageX":"pageY";return e.changedTouches?e.changedTouches[0][t]:e[t]},_onTransitionStart:function(){this.transitioning=!0,this._isPageChanged()?this.trigger("slide-change-start",this.currentPage,this):this.trigger("slide-revert-start",this.currentPage,this)},_onTransitionEnd:function(){this.currentPage<0?(this.transitioning=!0,this.setPageNoAnimate(this.totalPage-1)):this.currentPage>this.totalPage-1?(this.transitioning=!0,this.setPageNoAnimate(0)):this.transitioning=!1,this.trigger("focus-change",this.currentPage,this)},_isPageChanged:function(){return this.lastPage!==this.currentPage},freeze:function(){clearInterval(this.interval),this.interval=null}})},function(e,t){e.exports='<div class="scroll" id="swiper">\n    <div class="con" data-role="item-wrapper">\n        <%for(var i = 0 ;i< items.length;i++){\n            var item = items[i];\n            item.path=item.path.match(/\\/\\//)?item.path:"//www.sohu.com"+item.path;\n        %>\n        <div class="pic img-do" data-media-id="<%=item.mediaId%>" data-focus-ev="<%=item.id%>">\n            <a target="_blank"\n                                   href="<%=item.path%>?_f=index_focus_<%=i %>" title= "<%= item.title%>"><img\n                alt="" src="<%=item.picUrl%>">\n                <span class="shadow linear-box"><em class="linear-bg"></em><span><%=item.title%></span></span>\n            </a>\n        </div>\n        <%}%>\n    </div>\n    <div class="autos">\n        <%for(var i = 0 ;i< items.length;i++){%>\n\n        <span data-id="<%=i%>" class="<%i==0?\'cur\':\'\'%>"><a></a></span>\n        <%}%>\n    </div>\n    <div class="btns"><a href="javascript:void(0)" class="btnl"></a><a href="javascript:void(0)" class="btnr"></a>\n    </div>\n</div>\n'},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.scene=e&&e.scene||"HOMEPAGE",this.sceneId=e&&e.sceneId||0},fetch:function(e){this.page=e&&e.page_no||1,this.size=e&&e.size_size||20,this.url="feed?scene="+this.scene+"&sceneId="+this.sceneId+"&page="+this.page+"&size="+this.size;var t=this,i=[{path:"/a/134752522_120702",focusImg:"//i.mp.itc.cn/20170418/134752522_600_300_1492511476526.png",channelName:"新闻",id:134752522,mediaId:120702,title:"京沪高铁沿线垃圾堆成山 上百亩国有土地被强占",channelId:8},{path:"/a/134765648_267106",focusImg:"//i.mp.itc.cn/20170418/134765648_600_300_1492511630464.png",channelName:"财经",id:134765648,mediaId:267106,title:"3月份一二线热点城市楼市已逐步开启降温通道",channelId:15},{path:"/a/134742132_115565",focusImg:"//i1.itc.cn/20170418/38a0_b727fd90_5e75_0358_2859_08e485d57a89_1.jpg",channelName:"科技",id:134742132,mediaId:115565,title:"司机围堵易到：油钱都出不起了 只能“追债”",channelId:30},{path:"/a/134715651_538698",focusImg:"//i.mp.itc.cn/20170418/134715651_600_300_1492511734312.png",channelName:"生活",id:134715651,mediaId:538698,title:"外国专家：中国人为何这么热爱共享单车？",channelId:43},{path:"/a/134743196_115280",focusImg:"//i.mp.itc.cn/20170418/134743196_600_300_1492511797724.png",channelName:"其它",id:134743196,mediaId:115280,title:"重播2000次的《西游记》上千亿的版权收益归了谁?",channelId:34},{path:"/a/134717006_114813",focusImg:"//i.mp.itc.cn/20170418/134717006_600_300_1492511878721.png",channelName:"历史",id:134717006,mediaId:114813,title:"他们是明朝被误解最深的：揭秘真实的锦衣卫",channelId:13},{path:"/a/134742375_115253",focusImg:"//i.mp.itc.cn/20170418/134742375_600_300_1492511973077.png",channelName:"旅游",id:134742375,mediaId:115253,title:"唐山大地震：地裂40年后的记忆与重生",channelId:29}];t.trigger("sync",i)}})},function(e,t,i){var n=(i(160),i(158),i(162),i(164),i(167),i(169)),s=i(18);e.exports=Backbone.View.extend({template:_.template(i(170)),focusTpl:_.template(i(171)),newsTpl:_.template(i(172)),panelTpl:_.template(i(173)),data:{},events:{"mouseenter [data-id]":"tabChange","mouseleave .title-cut ul":"clear"},render:function(e){this.$el.html(this.template(e))},adMap:{},replaceUrl:function(e){this.$el.find(".title-cut a").each(function(){var t=$(this).attr("href").replace("{pinyin}",e.pinyin).replace("{suffix}",e.suffix).replace(escape("{pinyin}"),e.pinyin).replace(escape("{suffix}"),e.suffix);!e.is_shengtai&&/\/zixun\//gi.test(t)&&(t="//news.focus.cn/"+e.suffix),!e.is_shengtai&&/bbs\.focus\.cn/gi.test(t)&&(t="//"+e.suffix+".focus.cn/group/yezhu.php"),$(this).attr("href",t)})},initialize:function(e){var t=$.extend({},e);this.cacheData={},this.render(t),this.refresh("47")},ready:function(){var e=this;setTimeout(function(){e.trigger("ready")},10)},refresh:function(e){var t=this;if(this.cacheData[e]){var i=t.$el.find("[data-role='focus-panel']");i.hide(),i.filter("[data-focus-id="+e+"]").show()}else{var a=new n({adposId:e});a.on("sync",function(i){t.$el.find("[data-role='focus-panel']").hide(),t.$el.find(".house-news").append(t.panelTpl({i:e}));var n=t.$el.find(".house-news").find("[data-focus-id='"+e+"']");i.headers.forEach(function(e,t){var i=t?20:22;e.title=s.subString(e.title,i)}),n.find("[data-role='focus']").html(t.focusTpl({items:i.headers})),n.find("[data-role='main-news']").html(t.newsTpl({items:i.data})),t.cacheData[e]=i,t.replaceUrl(i),t.flag||(t.ready(),t.$el.show(),t.flag=!0),t.adMap.city_id=i.city_id,t.adMap.area_code=i.area_code,t.adMap.city_name=i.city_name;for(var a in i)"data"!=a&&"headers"!=a||i[a].forEach(function(e){t.adMap[e.ad_pos_id]=e});t.trigger("newItemsIn",t.adMap)}),a.fetch()}},tabChange:function(e){var t=this;clearTimeout(this.timer),this.timer=setTimeout(function(){var i=$(e.currentTarget);t.$el.find("[data-id]").removeClass("cur"),i.addClass("cur"),t.refresh(i.data("id"))},300)},clear:function(){clearTimeout(this.timer)}})},function(e,t,i){var n=i(25);e.exports=Backbone.View.extend({template:_.template(i(161)),data:{items:{}},model:null,settings:{count:3},render:function(){this.$el.html(this.template(this.data))},initialize:function(e){if(e.needFirstRender)if("object"==typeof e.headers)this.data.items=e.headers.slice(0,this.settings.count),this.render();else{this.settings=$.extend({},this.settings,e);var t=this;this.model=this.settings.model,this.model&&this.model.one("sync",function(e){t.data.items=e.slice(0,t.settings.count),t.render()}),this.model.fetch()}},resetFocus:function(e){e.model;this.data.items=e.data,this.data.channel=e.channel,this.data.index=e.index,this.data.items.forEach(function(e){e.path=n.news(e),e.focusImg=e.picUrl}),this.render()}})},function(e,t){e.exports='<% var firstItem=items.splice(0,1)%>\n    <div class="pic-focus">\n        <a href="<%= firstItem[0].path%>?_f=index_<%=channel%>focus_<%=index%>_0" title="<%= firstItem[0].title%>" target="_blank"><img src="<%= firstItem[0].focusImg%>" alt=""><span class="linear-box"><em class="linear-bg"></em><em class="linear-txt"><%= firstItem[0].title%></em></span></a>\n    </div>\n    <div class="pic-group clearfix">\n        <ul>\n            <%for (var i = 0; i < items.length; i++) {%>\n                <%   var item = items[i]; %>\n                    <li class="<%= i%2==1 ?\'end\' : \'\' %>">\n                        <a href="<%= item.path%>?_f=index_<%=channel%>focus_<%=index%>_<%= i%>" title= "<%= item.title%>" target="_blank"><img src="<%= item.focusImg%>" alt=""><span class="linear-box"><em class="linear-bg"></em><em class="linear-txt"><%= item.title%></em></span></a>\n                    </li>\n                    <%}%>\n        </ul>\n    </div>'},function(e,t,i){var n=(i(22),i(25));e.exports=Backbone.View.extend({template:_.template(i(163)),data:{},render:function(e){this.$el.html(this.template(e))},renderArticle:function(e){var t=this;return function(i){t.fixItem(i.items),e.html(t.template(i))}},initialize:function(e){var t=this,i=e.model;i.on("sync",function(e){t.fixItem(e),t.render({items:e})}),i.fetch()},fixItem:function(e){e.forEach(function(e){e.path=n.news(e)})},resetArticle:function(e){var t=this;this.richNewsList=[],this.plainNewslist=[],this.cacheData=this.cacheData||{};var i=e.index,n=e.channel,s=e.model,a=(e.el,e.el?this.renderArticle(e.el):t.render);t.cacheData[s.scene+"_"+s.sceneId]&&0!=t.cacheData[s.scene+"_"+s.sceneId].length?a.call(t,{items:t.cacheData[s.scene+"_"+s.sceneId]}):(s.on("sync",function(e){var o=[];e.forEach(function(e){t.richNewsList.length<3&&e.picUrl?t.richNewsList.push(e):o.push(e)}),a.call(t,{items:o,index:i,channel:n}),t.cacheData[s.scene+"_"+s.sceneId]=o,t.trigger("ready",t.richNewsList)}),s.fetch())}})},function(e,t){e.exports='<% var firstPart=items.slice(0,5)%>\n <div class="list16">\n                <ul>\n                <%for(var i=0,len=firstPart.length;i<len;i++){%>\n                    <% var item=firstPart[i]%>\n                    <li><a href="<%= item.path %>?_f=index_<%=channel%>news_<%=index%>_<%= i%>" target="_blank">\n                        <%if(i==0){%>\n                        <strong><%= item.title %></strong>\n                        <%}%>\n                        <%if(i>0){%>\n                             <%= item.title %>\n                        \n                        <%}%>\n\n                    </a></li>\n                <%}%>\n                </ul>\n            </div>\n            <div class="list16">\n                <ul>\n                    <% var secondPart=items.slice(5)%>\n                     <%for(var i=0,len=firstPart.length;i<len;i++){%>\n                    <% var item=secondPart[i]%>\n                    <li><a href="<%= item.path %>?_f=index_<%=channel%>news_<%=index%>_<%= i+5 %>" target="_blank">\n                        <%if(i==0){%>\n                        <strong><%= item.title %></strong>\n                        <%}%>\n                        <%if(i>0){%>\n                             <%= item.title %>\n                        \n                        <%}%>\n\n                    </a></li>\n                <%}%>\n                </ul>\n</div>\n\n\n'},function(e,t,i){var n=i(165);i(25);e.exports=Backbone.View.extend({template:_.template(i(166)),data:{info:null},render:function(e){this.$el.html(this.template(this.data))},initialize:function(e){var t=this,i=new n;i.on("sync",function(e){t.data.info=e,t.render()}),i.fetch()}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.url="//pl.hd.sohu.com/fraginfo?fragId=19"},fetch:function(){var e=this;$.ajax({url:this.url,type:"GET",dataType:"jsonp",jsonpCallback:"plFragCallback_19",success:function(t){e.trigger("sync",t),console.log("hahah")},error:function(t){e.trigger("error",t)}})}})},function(e,t){e.exports='       <div class="yule-play clearfix">\n                <div class="titleR"><span class="tt"><a href="http://tv.sohu.com/yule/" target="_blank">娱乐播报</span></div>\n                <div class="pic-group">\n                    <ul>\n                    <% for(var i=0,len=info.fragItemInfoList.length;i<len;i++){%>\n                     <% var item=info.fragItemInfoList[i]%>\n                        <li class="<%= i%2==1?\'end\':\'\'%>"><a href="<%=item.itemUrl%>?_f=index_yulebobao_<%= i%>" target="_blank"><img src="<%= item.itemPic%>" alt="">\n                        <% if(item.isShowPlayLogo==1){%>\n                        <i class="icon play-icon"></i>\n                        <%}%>\n                        <span class="txt"><%=item.itemTitle%></span></a></li>\n                      \n                     <%}%>\n                    </ul>\n                </div>\n            </div>\n'},function(e,t,i){var n=i(123),s=i(25);e.exports=Backbone.View.extend({template:_.template(i(168)),data:{items:{}},render:function(){this.fixItem(),this.$el.html(this.template(this.data))},initialize:function(e){var t=this;this.data.channel=e.channel,e.writerList?(this.data.items=e.writerList.slice(0,6),t.render(),t.trigger("rendered")):(this.model=new n({scene:"CHANNEL",sceneId:e.sceneId}),this.model&&this.model.one("sync",function(e){t.data.items=e.slice(0,4),t.render(),t.trigger("rendered")}),this.model.fetch())},fixItem:function(){this.data.items.forEach(function(e){e.path=s.news(e)})}})},function(e,t){e.exports='<div class="titleR"><span class="tt">公众号</span></div>\n<div class="pt-list clearfix">\n        <%for(var i=0;i< items.length ;i++){\n    var item =items[i];\n    %>\n    <div class="pt">\n        <div class="pic">\n            <a href="<%=item.personalPage%>" target="_blank"><img src="<%=item.logo%>" alt=""></a>\n        </div>\n        <h4><a href="<%=item.personalPage%>" target="_blank"><%=item.name%></a></h4>\n        <p>阅读数<em class="num" data-id="<%=item.id%>" data-role="author-reading-count"></em></p>\n    </div>\n       <%}%>\n</div>'},function(e,t,i){var n=i(4),s=i(7);e.exports=n.extend({init:function(e){this.cityCode=s.get("_test_loc_")||window.sohu_IP_Loc||"",this.data={cityCode:this.cityCode,adposId:e.adposId}},fetch:function(e){this.url="//adv-sv-show.focus.cn/be_fox_say3";var t=this;n.prototype.fetch.call(this,{data:this.data,success:function(e,i){var n={headers:[],data:[]},s=e.data.list;n.pinyin=e.data.pinyin,n.suffix=e.data.suffix,n.city_id=e.data.list&&e.data.list[0]&&e.data.list[0].city_id,n.area_code=e.data.list&&e.data.list[0]&&e.data.list[0].area_code,n.city_name=e.data.list&&e.data.list[0]&&e.data.list[0].city_name,n.is_shengtai=e.data.is_shengtai;for(var a=0,o=s.length;a<o;a++)a<3?(n.headers[a]=s[a],n.headers[a].path=s[a].link,n.headers[a].focusImg=s[a].resource_map.pic_text.url,n.headers[a].title=s[a].resource_map.pic_text.despriction):(n.data[a-3]=s[a],n.data[a-3].path=s[a].link,n.data[a-3].title=s[a].resource_map.text.despriction);t.trigger("sync",n)},error:function(e){t.trigger("error",e)}})}})},function(e,t){e.exports='<div class="main left">\n<div class="title-cut" data-spm="focus-nav">\n    <ul>\n        <li class="cur" data-id="47">\n          <a href="//www.focus.cn" target="_blank">房产</a>\n        </li>\n        <li data-id="49" ><a href="https://wl.focus.cn/" target="_blank">文旅</a></li>\n        <li data-id="48" ><a href="http://home.focus.cn/" target="_blank">家居</a></li>\n\n    </ul>\n    <span class="link">\n        <a href="http://www.focus.cn/loupan" target="_blank">新房</a>\n        <a href="https://{pinyin}.focus.cn/map/" target="_blank">地图找房</a>\n        <a href="http://{pinyin}.focus.cn/kanfangtuan/" target="_blank">看房团</a>\n        <a href="https://{pinyin}.focus.cn/zixun/" target="_blank">资讯</a>\n        <a href="http://baike.focus.cn/" target="_blank">百科</a>\n        <a href="https://house-on-sale.focus.cn/pc/index" target="_blank">在线开盘</a>\n        <a href="http://www.focus.cn" target="_blank">进入房产首页 &gt;</a>\n        \x3c!-- <a href="http://www.nanguazufang.cn/" target="_blank">南瓜公寓</a>\n        <a href="https://{pinyin}.focus.cn/zixun/" target="_blank">资讯</a>\n        <a href="https://bbs.focus.cn/{suffix}/" target="_blank">论坛</a>\n        <a href="https://zhibo.focus.cn/{suffix}/" target="_blank">直播</a>\n        <a href="http://shangye.focus.cn/" target="_blank">商业</a>\n        <a href="http://world.focus.cn/loupan/" target="_blank">海外</a>\n        <a href="http://baike.focus.cn/" target="_blank">百科</a>\n        <a href="http://www.focus.cn" target="_blank">进入房产首页 &gt;</a> --\x3e\n    </span>\n</div>\n    <div class="main-box clearfix house-news" >\n        \x3c!--左侧头图--\x3e\n\n\n    </div>\n</div>\n\x3c!--右侧--\x3e\n<div class="sidebar right">\n    <div class="yule-video clearfix" data-role="pic-collection">\n\n    </div>\n\n\n    <div class="clear  plugin plugin-side-right bordR" data-widget-id="focus_index_component_1" style="display: block; overflow: visible;">\n\n    </div>\n</div>'},function(e,t){e.exports='<% var firstItem=items.slice(0,1)%>\n    <div class="pic-focus">\n        <%if (firstItem[0]) { %>\n            <a href="<%= firstItem[0].path%>" data-adposid="<%=firstItem[0].ad_pos_id%>" target="_blank"><img src="<%= firstItem[0].focusImg%>" alt=""><span class="txt"><%= firstItem[0].title%></span></a>\n        <%}%>\n    </div>\n    <div class="pic-group clearfix">\n        <ul>\n            <%for (var i = 1; i < items.length; i++) {%>\n                <%   var item = items[i]; %>\n                    <li class="<%= i%2==0 ?\'end\' : \'\' %>">\n                        <a href="<%= item.path%>" data-adposid="<%=item.ad_pos_id%>" target="_blank"><img src="<%= item.focusImg%>" alt=""><span class="txt"><%= item.title%></span></a>\n                    </li>\n                    <%}%>\n        </ul>\n    </div>'},function(e,t){
e.exports='<% var firstPart=items.slice(0,6)%>\n <div class="list16">\n                <ul>\n                <%for(var i=0,len=firstPart.length;i<len;i++){%>\n                    <% var item=firstPart[i]%>\n                    <li><a href="<%= item.path %>" target="_blank" data-adposid="<%=item.ad_pos_id%>">\n                        <%if(i==0){%>\n                        <strong><%= item.title %></strong>\n                        <%}%>\n                        <%if(i>0){%>\n                             <%= item.title %>\n                        \n                        <%}%>\n\n                    </a></li>\n                <%}%>\n                </ul>\n            </div>\n            <div class="list16">\n                <ul>\n                    <% var secondPart=items.slice(6)%>\n                     <%for(var i=0,len=secondPart.length;i<len;i++){%>\n                    <% var item=secondPart[i]%>\n                    <li><a href="<%= item.path %>" target="_blank" data-adposid="<%=item.ad_pos_id%>">\n                        <%if(i==0){%>\n                        <strong><%= item.title %></strong>\n                        <%}%>\n                        <%if(i>0){%>\n                             <%= item.title %>\n                        \n                        <%}%>\n\n                    </a></li>\n                <%}%>\n                </ul>\n</div>'},function(e,t){e.exports=' <div data-role="focus-panel" data-focus-id="<%= i %>">\n        <div class="main-left left" data-role="focus">\n            \n        </div>\n        \x3c!--文章--\x3e\n        <div class="main-right right" data-role="main-news">\n\n        </div>\n        </div>'},function(e,t,i){var n=i(22),s=i(25),a=i(115),o=i(175),r=i(118);e.exports=Backbone.View.extend({template:_.template(i(176)),item_template:_.template(i(177)),data:{items:{}},render:function(){this.$el.html(this.template(this.data)),setTimeout(function(){window.sohuSpm&&"function"==typeof window.sohuSpm.domDidChange&&window.sohuSpm.domDidChange()})},insertItem:function(){this.fixItem(),this.$el.append(this.item_template(this.data))},initialize:function(e){var t=this;this.data.channelInfo=e.channelInfo,this.render(),e.data?t.render(e.data):(this.model=new n({scene:"CHANNEL",sceneId:e.sceneId}),this.model&&this.model.one("sync",function(e){for(var i=[],n=0,s=e.length;n<s;n++)e[n].picUrl&&e[n].picUrl.length&&i.push(e[n]);t.data.items=i.slice(0,5),console.log(t.data.items),t.data.items.forEach(function(e){e.picUrl=e.picUrl.replace(/\,w\_\d+\,h\_\d+/g,",w_90,h_60").replace(/cdn\.sohucs\.com\/images/g,"cdn.sohucs.com/c_fill,w_90,h_60,g_faces/images").replace("png","jpg")}),t.insertItem(),r.addImage(t.$el[0])}),this.model.on("error",function(e){console.log("error",e)}),this.model.fetch({size:30}),this.headerModel=new o({sceneId:e.sceneId,scene:"CHANNEL"}),this.headerModel.one("sync",function(e){try{var i=[];e.forEach(function(e,t){i.push({path:s.news(e)+"?_f=index_funfocus_"+t,focusImg:e.focus.replace(/\,w\_\d+\,h\_\d+/g,",w_300,h_150,q_70").replace(/cdn\.sohucs\.com\/images/g,"cdn.sohucs.com/c_fill,w_300,h_150,g_faces,q_70/images").replace("png","jpg"),title:e.title})}),new a({el:t.$el.find(".swiper"),data:i})}catch(n){console.error("获取头图数据错误",n)}}),this.headerModel.fetch())},fixItem:function(){this.data.items.forEach(function(e){e.path=s.news(e),e.picUrl=e.picUrl.replace(/\i\.mp\.itc\.cn/g,"i.mp.itc.cn/c_zoom,w_90,h_60")})}})},function(e,t,i){var n=i(4),s={};e.exports=n.extend({init:function(e){this.scene=e&&e.scene||"HOMEPAGE",this.sceneId=e&&e.sceneId||0},fetch:function(){if(s[this.sceneId])return void this.trigger("sync",s[this.sceneId]);var e=this;this.url="focus?scene="+this.scene+"&sceneId="+this.sceneId,n.prototype.fetch.call(this,{success:function(t,i){try{e.trigger("sync",t),s[e.sceneId]=t}catch(n){e.trigger("error")}}})}})},function(e,t){e.exports='\n<div class="titleR" data-spm="<%= channelInfo.name_en %>-nav"><a href="<%= channelInfo.url%>" target="_blank"><span class="tt"><%= channelInfo.name %></span></a></div>\n<div class="channel-focus swiper" data-spm="<%= channelInfo.name_en %>-pics">\n</div>\n'},function(e,t){e.exports='<div data-spm="<%= channelInfo.name_en %>-list">\n<% for( var a = 0 ; a < items.length ; a++) { %>\n            <% var item = items[a];%>\n<div class="pic-text clearfix" data-spm-type="resource">\n    <div class="pic">\n        <a href="<%=item.path %>?_f=index_funnews_<%= a%>" target="_blank"><img data-src="<%=item.picUrl%>" alt="" src="http://statics.itc.cn/web/static/images/pic/preload.png"></a>\n    </div>\n    <h4><a href="<%=item.path %>?_f=index_funnews_<%= a%>" target="_blank"><%=item.title%></a></h4>\n</div>\n<% } %>\n</div>'},function(e,t,i){var n=i(175),s=i(25);e.exports=Backbone.View.extend({template:_.template(i(179)),data:{items:[]},render:function(){this.fixItem(),this.$el.html(this.template(this.data))},initialize:function(e){var t=this;dmModel=new n({sceneId:41,scene:"CHANNEL"}),gameModel=new n({sceneId:42,scene:"CHANNEL"}),[dmModel,gameModel].forEach(function(e){e.one("sync",function(e){t.data.items=t.data.items.concat(e.slice(0,2)),4==t.data.items.length&&t.render()}),e.fetch()})},fixItem:function(){this.data.items.forEach(function(e){e.path=s.news(e)})}})},function(e,t){e.exports='<div class="titleR"><span class="tt"><a href="//acg.sohu.com" target="_blank">动漫</a> · <a href="//game.sohu.com" target="_blank">游戏</a></span></div>\n<% for( var a = 0 ; a < items.length ; a++) { %>\n            <% var item = items[a];%>\n<div class="cover-pic">\n    <a href="<%=item.path%>?_f=index_acggame_<%=a %>" target="_blank"><img src="<%= item.focus%>" alt=""><span class="linear-box"><em class="linear-bg"></em><em class="linear-txt"><%= item.title %></em></span></a>\n</div>\n\n<%}%>'},function(e,t,i){var n=i(181),s=i(22),a=i(118);e.exports=Backbone.View.extend({events:{"mouseenter [data-role='nav-tab']":"tabChange","mouseleave .title-cut ul":"clear"},initialize:function(e){var t=this.$el,i=this;this.$tabs=t.find("[data-role='nav-tab']"),this.$mainNewsZone=t.find("[data-role='main-news']"),this.$mainFocus=t.find("[data-role='focus']");var a=i.$el.data("role").replace(/\-section$|\s+/gi,"");"business"==a&&this.$el.find("[data-role='nav-tab']").each(function(e,t){var o=$(t).attr("data-id");if(o){var r=($(t).data("tab-order"),i.$el.find("[data-role="+$(t).attr("data-rel")+"]"));new n({el:r,model:new s({scene:"CATEGORY",sceneId:o}),channel:a,index:$(t).data("tab-order")})}})},tabChange:function(e){var t=this;clearTimeout(this.timer),this.timer=setTimeout(function(){var i=$(e.currentTarget),n=(i.attr("data-type"),i.attr("data-sync"),t.$el.find("[data-role="+i.attr("data-rel")+"]")),s=t.$el.data("role").replace(/\-section$|\s+/gi,"");i.hasClass("cur")||(t.$tabs.removeClass("cur"),i.addClass("cur"),"auto"==s&&t.$el.trigger("auto:tab-changed",i.data("tab-order")-1),t.$el.find(".main-box").hide(),n.show().find("img[data-src]").each(function(){a._reveal(this),$(this).data("process",!0),a._purgeElements()}),setTimeout(function(){window.sohuSpm&&"function"==typeof window.sohuSpm.reScan&&window.sohuSpm.reScan()}))},300)},clear:function(){clearTimeout(this.timer)}})},function(e,t,i){var n=i(25),s=i(118);e.exports=Backbone.View.extend({template:_.template(i(182)),models:{},settings:{count:3},render:function(){this.$el.html(this.template(this.data))},fixNewsItem:function(e){e.forEach(function(e){e.path=n.news(e)})},initialize:function(e){this.settings=$.extend({},this.settings,e);var t=this;this.data={items:[],focus:[]};var i=e.model;t.data.index=e.index,t.data.channel=e.channel,i&&i.one("sync",function(e){t.fixNewsItem(e),e.forEach(function(e,i){e.focus&&t.data.focus.length<3?t.data.focus.push(e):t.data.items.push(e)}),t.data.items=t.data.items.slice(0,12),t.render(),s.addImage(t.$el[0])}),i.fetch({size:30})}})},function(e,t){e.exports='<div data-role=\'focus\' class=\'main-left left\' data-spm="<%=channel%>-pics<%=index+1%>">\n  <% var firstItem=focus.splice(0,1)%>\n    <div class="pic-focus">\n        <a href="<%= firstItem[0].path%>?_f=index_<%=channel%>focus_<%=index%>_0" title="<%= firstItem[0].title%>" target="_blank"><img data-src="<%= firstItem[0].focus.replace(\'w_600,h_300\',\'w_320,h_213\') %>" src="//statics.itc.cn/web/static/images/pic/preload.png" alt=""><span class="txt"><%= firstItem[0].title%></em></span></a>\n    </div>\n    <div class="pic-group clearfix">\n        <ul>\n            <%for (var i = 0; i < focus.length; i++) {%>\n                <%   var item = focus[i]; %>\n                    <li class="<%= i%2==1 ?\'end\' : \'\' %>">\n                        <a href="<%= item.path%>?_f=index_<%=channel%>focus_<%=index%>_<%= i%>" title= "<%= item.title%>" target="_blank"><img data-src="<%= item.focus.replace(\'w_600,h_300\',\'w_155,h_103\') %>"  src="//statics.itc.cn/web/static/images/pic/preload.png" alt=""><span class="txt"><%= item.title%></span></a>\n                    </li>\n                    <%}%>\n        </ul>\n    </div>\n\n</div>\n<div data-role=\'main-news\' class=\'main-right right\'>\n    <% var firstPart=items.slice(0,6)%>\n <div class="list16" data-spm="<%=channel%>-news<%=index+1%>1">\n                <ul>\n                <%for(var i=0,len=firstPart.length;i<len;i++){%>\n                    <% var item=firstPart[i]%>\n                    <li><a href="<%= item.path %>?_f=index_<%=channel%>news_<%=index%>_<%= i%>" target="_blank">\n                        <%if(i==0){%>\n                        <strong><%= item.title %></strong>\n                        <%}%>\n                        <%if(i>0){%>\n                             <%= item.title %>\n\n                        <%}%>\n\n                    </a></li>\n                <%}%>\n                </ul>\n            </div>\n            <div class="list16" data-spm="<%=channel%>-news<%=index+1%>2">\n                <ul>\n                    <% var secondPart=items.slice(6)%>\n                     <%for(var i=0,len=firstPart.length;i<len;i++){%>\n                    <% var item=secondPart[i]%>\n                    <li><a href="<%= item.path %>?_f=index_<%=channel%>news_<%=index%>_<%= i+6 %>" target="_blank">\n                        <%if(i==0){%>\n                        <strong><%= item.title %></strong>\n                        <%}%>\n                        <%if(i>0){%>\n                             <%= item.title %>\n\n                        <%}%>\n\n                    </a></li>\n                <%}%>\n                </ul>\n</div>\n\n\n\n</div>'},function(e,t,i){var n=i(184),s=i(186),a=i(187),o=i(7),r=i(188);e.exports=Backbone.View.extend({template:_.template(i(189)),events:{"click .weather-week":"sogouQuery","click .weather-con":"sogouQuery","click [data-role='queryBtn']":"querySelected","click [data-role='locBtn']":"showSelectBox","click  [data-role='cancelBtn']":"cancelSelected","mouseenter ":"showWeatherBox",mouseleave:"hideWeatherBox","mouseenter [data-role='province-btn']":"showSelectList","mouseenter [data-role='city-btn']":"showSelectList","mouseleave [data-role='city-btn']":"hideSelectList","mouseleave [data-role='province-btn']":"hideSelectList","click [data-role='province-btn'] ul li":"changeProvince","click [data-role='city-btn'] ul li":"changeCity"},data:{subs:{},current:{},cityList:null,locInfo:null},config:{sogouQueryUrl:"https://www.sogou.com/sogou?pid=sogou-wsse-6354461b879d3b12&ie=utf8&query="},locInfo:null,render:function(){this.$el.html(this.template(this.data))},initialize:function(e){this.data.cityList=i(190),this.ip=window.sohu_user_ip||"123.126.70.238";var t=o.get("weather_location");t?this.upDateWeather({city:t,manual:!1}):this.upDateWeather({ip:this.ip,manual:!1})},upDateWeather:function(e){var t=(e.ip,e.city,e.manual),o=this;this.weatherBox=$(".weather-box");var r=new n({ip:e.ip,city:e.city}),c=new s,l=new a;c.one("sync",function(e){"object"==typeof e&&(o.data.current=e&&e.l,o.fixItem(),o.render(),o.$el.find("[data-role='locSelect']").html(_.template(i(191))(o.data)),t&&$(".weather-box").show())}),l.one("sync",function(e){"object"==typeof e&&(o.data.airQuality=e&&e.cn&&e.cn["@aqi"],c.fetch({location:encodeURIComponent(o.location)}))}),r.one("sync",function(e){"object"==typeof e&&(o.location=e&&e.subitem&&e.subitem.location,o.data.locInfo=e&&e.subitem&&e.subitem.key.split("_"),o.data.subs=e&&e.subitem&&e.subitem.subdisplay,l.fetch({location:o.data.locInfo}))}),r.fetch()},sogouQuery:function(e){return window.open(this.config.sogouQueryUrl+encodeURIComponent(this.data.locInfo[this.data.locInfo.length-1]+"天气")),!1},fixItem:function(){this.data.current.desc=r.descMap[this.data.current.l5],this.data.current.windLevel=r.windLevelMap[this.data.current.l3],this.data.current.windDir=r.windDirMap[this.data.current.l4],this.data.current.airQuality=r.getAirLevel(this.data.airQuality),this.data.subs.day.forEach(function(e){var t=r.desList.indexOf(e.daydescription)+1;t=t<10?"0"+t:t,e.picUrl="//statics.itc.cn/web/static/images/pic/weather/pic"+t+".png"})},loadSubOption:function(e){for(var t=$(e.currentTarget).text().replace(/\s+/g),i=this.data.cityList[t].city,n=this.$el.find("[data-role='citySubSelect']"),s="",a=0,o=i.length;a<o;a++)s+="<option>"+i[a]+"</option>";n.html(s),n.find("option").eq(0).select()},querySelected:function(){var e=(this.$el.find("[data-role='province-btn']").find(".sele-con").text(),this.$el.find("[data-role='city-btn']").find(".sele-con").text());return $(".weather-box").show(),this.upDateWeather({city:e,manual:!0}),o.set("weather_location",e),!1},showSelectBox:function(){return $("[data-role='locSelect']").toggle(),!1},cancelSelected:function(){$("[data-role='locSelect']").hide()},showWeatherBox:function(e){"change"==e.type&&setTimeout(function(){$(".weather-box").show()},10),"mouseenter"==e.type&&$(".weather-box").fadeIn(200)},hideWeatherBox:function(){$(".weather-box").fadeOut(200)},showSelectList:function(e){$(e.currentTarget).find(".sele-option").show()},hideSelectList:function(e){$(e.currentTarget).find(".sele-option").hide()},changeProvince:function(e){this.$el.find("[data-role='province-box']").hide();var t=$(e.currentTarget).text();$(e.currentTarget).parents(".select").find(".sele-con").text(t);for(var i=$(e.currentTarget).attr("data-id"),n=this.data.cityList[i].city,s=this.$el.find("[data-role='city-btn']"),a="",o=0,r=n.length;o<r;o++)a+="<li>"+n[o]+"</li>";return s.find("ul").html(a),s.find(".sele-con").text(n[0]),!1},changeCity:function(e){this.$el.find("[data-role='city-box']").hide();var t=$(e.currentTarget).text();return $(e.currentTarget).parents(".select").find(".sele-con").text(t),!1}})},function(e,t,i){var n=i(4),s=i(185);e.exports=n.extend({init:function(e){this.ip=e.ip,this.city=e.city,this.url=s.weatherHost},fetch:function(){var e,t=this;this.ip&&(e={ip:this.ip}),this.city&&(e={query:this.city+"天气"}),e=$.extend({},{from:"中国移动",query:"天气",reqtype:"json",type:0},e),n.prototype.fetch.call(this,{data:e,success:function(e){"string"==typeof e&&""!=e&&(e=JSON.parse(e)),"object"==typeof e&&t.trigger("sync",e[0]&&e[0].item&&e[0].item.display)},error:function(){t.trigger("error",arguments)}})}})},function(e,t){e.exports={weatherHost:"http://api.open.sogou.com/apiopen/openapi/vrinfo"}},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(){},fetch:function(e){var t=this;this.location=e.location,this.url="//vi.www.sogou.com/?op=8&query="+this.location,n.prototype.fetch.call(this,{success:function(e){console.log("location hint"),t.trigger("sync",e)}})}})},function(e,t,i){var n=i(4),s=i(185);e.exports=n.extend({init:function(){this.url=s.weatherHost},fetch:function(e){var t=this,i=e&&e.location,s=i&&i[1],a={from:"中国移动",query:s+"空气质量",reqtype:"json",type:0};n.prototype.fetch.call(this,{data:a,success:function(e){"string"==typeof e&&""!=e&&(e=JSON.parse(e)),"object"==typeof e?t.trigger("sync",e&&e[0]&&e[0].item&&e[0].item.display):t.trigger("error",arguments)},error:function(){t.trigger("error",arguments)}})}})},function(e,t){e.exports={desList:["晴","多云","阴","阵雨","雷阵雨","雷阵雨伴有冰雹","雨夹雪","小雨","中雨","大雨","暴雨","大暴雨","特大暴雨","阵雪","小雪","中雪","大雪","暴雪","雾","冻雨","沙尘暴","小到中雨","中到大雨","大到暴雨","暴雨到大暴雨","大暴雨到特大暴雨","小到中雪","中到大雪","大到暴雪","浮尘","扬沙","强沙尘暴","霾","无","浓雾","强浓雾","中度霾","重度霾","严重霾","大雾","特强浓雾"],windDirMap:{0:"无风",1:"东北风",2:"东风",3:"东南风",4:"南风",5:"西南风",6:"西风",7:"西北风",8:"北风",9:"旋转风"},windLevelMap:{0:"微风",1:"3-4级",2:"4-5级",3:"5-6级",4:"6-7级",5:"7-8级",6:"8-9级",7:"9-10级",8:"10-11级",9:"11-12级"},descMap:{"00":"晴","01":"多云","02":"阴","03":"阵雨","04":"雷阵雨","05":"雷阵雨伴有冰雹","06":"雨夹雪","07":"小雨","08":"中雨","09":"大雨",10:"暴雨",11:"大暴雨",12:"特大暴雨",13:"阵雪",14:"小雪",15:"中雪",16:"大雪",17:"暴雪",18:"雾",19:"冻雨",20:"沙尘暴",21:"小到中雨",22:"中到大雨",23:"大到暴雨",24:"暴雨到大暴雨",25:"大暴雨到特大暴雨",26:"小到中雪",27:"中到大雪",28:"大到暴雪",29:"浮尘",30:"扬沙",31:"强沙尘暴",53:"霾",99:"无",32:"浓雾",49:"强浓雾",54:"中度霾",55:"重度霾",56:"严重霾",57:"大雾",58:"特强浓雾"},getAirLevel:function(e){return e<=50?{cls:"good",qualityCn:"优"}:50<e&&e<=100?{cls:"moderate",qualityCn:"良"}:101<e&&e<=150?{cls:"usg",qualityCn:"轻度污染"}:150<e&&e<=200?{cls:"unhealthy",qualityCn:"中度污染"}:201<e&&e<=300?{cls:"very-unhealthy",qualityCn:"重度污染"}:e>300?{cls:"hazardous",qualityCn:"严重污染"}:void 0}}},function(e,t){e.exports='    <em class="icon location-icon"></em>   \n   <em class="weather-city"><%=locInfo[1]%></em><em class="weather-status"><%= subs.day[1].daydescription %></em><em class="weather-num"><%= subs.day[1].low %>°/<%=subs.day[1].high %>°</em>\n   <em class="weather-drop">\n      <i class="icon cor"></i>\n      <div class="weather-box">\n         <h4><a href="javascript:void(0)"  class="weather-location" data-role="locBtn"><em class="icon location-icon"></em><em class="location-city"><%=locInfo[1]%></em></a><a href="javascript:void(0)" target="" class="weather-week">未来七天天气</a></h4>\n         <div class="weather-con">\n            <div class="weather-info">\n               <div class="degree"><em class="num"><%= current.l1 %></em>°C</div>\n               <div class="info">\n                  <p><%= current.desc %></p>\n                  <p><em class="quality <%=current.airQuality.cls %>"><%=current.airQuality.qualityCn %>  <%= airQuality %></em></p>\n               </div>\n            </div>\n            <div class="weather-thr clear">\n               <ul>\n                  <li title="<%= subs.day[2].description %>"><span class="tt">明天</span><span class="img"><img src="<%= subs.day[2].picUrl %>" alt="" ></span>\n                     <span class="num"><%= subs.day[2].low %>°/<%=subs.day[2].high %>°</span>\n                  </li>\n                  <li title="<%= subs.day[3].description %>"><span class="tt">后天</span><span class="img"><img src="<%= subs.day[3].picUrl %>" alt=""></span><span class="num"><%= subs.day[3].low %>°/<%=subs.day[3].high %>°</span></li>\n                  <li title="<%= subs.day[4].description %>"><span class="tt"><%= subs.day[4].week %></span><span class="img"><img src="<%= subs.day[4].picUrl %>" alt=""></span><span class="num"><%= subs.day[4].low %>°/<%=subs.day[4].high %>°</span></li>\n               </ul>\n            </div>\n         </div>\n         <div class="weather-area" data-role="locSelect" style="display: none">\n          \n         </div>\n      </div>\n   </em>'},function(e,t){e.exports=[{province:"北京",city:["北京"]},{province:"天津",city:["天津"]},{province:"上海",city:["上海"]},{province:"重庆",city:["重庆"]},{province:"河北",city:["石家庄","唐山","秦皇岛","邯郸","邢台","保定","张家口","承德","沧州","廊坊","衡水"]},{province:"山西",city:["太原","大同","阳泉","长治","晋城","朔州","晋中","运城","忻州","临汾","吕梁"]},{province:"内蒙古",city:["呼和浩特","包头","乌海","赤峰","通辽","鄂尔多斯","呼伦贝尔","巴彦淖尔","乌兰察布","兴安盟","锡林郭勒","阿拉善盟"]},{province:"辽宁",city:["沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛"]},{province:"黑龙江",city:["哈尔滨","齐齐哈尔","鸡西","鹤岗","双鸭山","大庆","伊春","佳木斯","七台河","牡丹江","黑河","绥化","大兴安岭"]},{province:"江苏",city:["南京","无锡","徐州","常州","苏州","南通","连云港","淮安","盐城","扬州","镇江","泰州","宿迁"]},{province:"浙江",city:["杭州","宁波","温州","嘉兴","湖州","绍兴","金华","衢州","舟山","台州","丽水"]},{province:"安徽",city:["合肥","芜湖","蚌埠","淮南","马鞍山","淮北","铜陵","安庆","黄山","滁州","阜阳","宿州","六安","亳州","池州","宣城"]},{province:"福建",city:["福州","厦门","莆田","三明","泉州","漳州","南平","龙岩","宁德"]},{province:"江西",city:["南昌","景德镇","萍乡","九江","新余","鹰潭","赣州","吉安","宜春","抚州","上饶"]},{province:"山东",city:["济南","青岛","淄博","枣庄","东营","烟台","潍坊","济宁","泰安","威海","日照","莱芜","临沂","德州","聊城","滨州","菏泽"]},{province:"河南",city:["郑州","开封","洛阳","平顶山","安阳","鹤壁","新乡","焦作","濮阳","许昌","漯河","三门峡","南阳","商丘","信阳","周口","驻马店"]},{province:"湖北",city:["武汉","黄石","十堰","宜昌","襄阳","鄂州","荆门","孝感","荆州","黄冈","咸宁","随州","恩施"]},{province:"湖南",city:["长沙","株洲","湘潭","衡阳","邵阳","岳阳","常德","张家界","益阳","郴州","永州","怀化","娄底","湘西"]},{province:"广东",city:["广州","韶关","深圳","珠海","汕头","佛山","江门","湛江","茂名","肇庆","惠州","梅州","汕尾","河源","阳江","清远","东莞","中山","潮州","揭阳","云浮"]},{province:"广西",city:["南宁","柳州","桂林","梧州","北海","防城港","钦州","贵港","玉林","百色","贺州","河池","来宾","崇左"]},{province:"海南",city:["海口","三亚"]},{province:"四川",city:["成都","自贡","攀枝花","泸州","德阳","绵阳","广元","遂宁","内江","乐山","南充","眉山","宜宾","广安","达州","雅安","巴中","资阳","阿坝","甘孜","凉山"]},{province:"贵州",city:["贵阳","六盘水","遵义","安顺","毕节","铜仁","黔西","黔东","黔南"]},{province:"云南",city:["昆明","曲靖","玉溪","保山","昭通","丽江","普洱","临沧","楚雄","红河","文山","西双版纳","大理","德宏","怒江","迪庆"]},{province:"西藏",city:["拉萨","昌都","山南","日喀则","那曲","阿里","林芝"]},{province:"陕西",city:["西安","铜川","宝鸡","咸阳","渭南","延安","汉中","榆林","安康","商洛"]},{province:"甘肃",city:["兰州","嘉峪关","金昌","白银","天水","武威","张掖","平凉","酒泉","庆阳","定西","陇南","临夏","甘南"]},{province:"青海",city:["西宁","海东","海北","黄南","海南","果洛","玉树","海西"]},{province:"宁夏",city:["银川","石嘴山","吴忠","固原","中卫"]},{province:"新疆",city:["乌鲁木齐","克拉玛依","吐鲁番","哈密","昌吉","博尔塔拉","巴音郭楞","阿克苏","喀什","和田","伊犁","塔城","阿勒泰"]}]},function(e,t){e.exports='<% var province=locInfo[0] %>\n    <% var city=locInfo[1]%>\n        <% var provinceIndex=0 %>\n            <div class="weather-area-sel">\n                <div class="select" data-role=\'province-btn\'>\n                    <span class="sele-con" ><%=province%></span><em class="icon sele-icon"></em>\n                    <div class="sele-option" data-role=\'province-box\'>\n                                        <ul>\n                        <% for(var j=0;j<cityList.length;j++) {%>\n                            <% if(province==cityList[j].province){%>\n                                <% provinceIndex=j;%>\n                                    <%} %>\n                                            <li data-id="<%= j%>" ><%= cityList[j].province %></li>\n                                        \n                             <%}%>\n                                        </ul>\n                    </div>\n                </div>\n                <div class="select" data-role=\'city-btn\'>\n                    <span class="sele-con"><%=city%></span><em class="icon sele-icon"></em>\n                    <div class="sele-option" data-role=\'city-box\'>\n                        <ul>\n                        <% for(var a=0;a<cityList[provinceIndex].city.length;a++){%>\n                             <% var c=cityList[provinceIndex].city[a]%>\n                            <li><%= c %></li>\n                        <%}%>  \n                        </ul>\n\n                    </div>\n                </div>\n            <div class="weather-area-btn"><a href="javascript:void(0)" class="weather-ok" data-role=\'queryBtn\'>确定</a><a href="javascript:void(0)" class="weather-cancel" data-role="cancelBtn">取消</a></div>\n            </div>'},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(){},fetch:function(e){var t=this;this.list=[];for(var i={},s=0;s<e.list.length;s++)i[e.list[s]]||(this.list.push(e.list[s]),i[e.list[s]]=1);this.url="authors/pv";var a={authorIds:t.list.join(",")};n.prototype.fetch.call(this,{data:a,url:this.url,success:function(e){t.trigger("sync",e)},error:function(e){t.trigger("error",e)}})}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(){},fetch:function(e){that=this,this.url="//v2.sohu.com/integration-api/batch/web",n.prototype.fetch.call(this,{data:e.params,url:this.url,method:e.method||"POST",dataType:"json",contentType:"application/json;charset=utf-8",success:function(e){that.trigger("sync",e)},error:function(e){that.trigger("error",e)}})}})},function(e,t,i){var n=i(195),s=i(192),a=i(26),o=i(16),r=i(18);e.exports=Backbone.View.extend({template:_.template(i(196)),data:{items:[]},index:0,store:null,events:{"click [data-role='switch-writer']":"refresh"},render:function(e){this.blocksEl.html(this.template(e))},refreshable:!1,setLoading:function(e){e?(this.blocksEl.hide(),this.loadingEl.show()):(this.blocksEl.show(),this.loadingEl.hide())},initialize:function(e){var t=new n,i=new s;this.loadingEl=this.$el.find(".loading"),this.blocksEl=this.$el.find("[data-role='blocks']");var c,l=this,d=[],h=[];t.on("sync",function(e){e.authors.forEach(function(e,t){e.articles[0].title=r.subString(e.articles[0].title,27),e.index=t}),l.store=e.authors,l.store.forEach(function(e){e.articles[0]&&(d.push(e.articles[0].authorId),e.articles[0].cmsId?h.push(e.articles[0].cmsId+"|mp_"+e.articles[0].id):h.push("mp_"+e.articles[0].id+"|mp_"+e.articles[0].id))}),c=new a({news_ids:h}),l.refreshable=!0,this.trigger("ready")}),t.fetch(),t.on("ready",function(){i.on("sync",function(e){for(var t in l.store)if(l.store.hasOwnProperty(t)&&l.store[t].articles.length>0){var i=l.store[t].articles[0].authorId;l.store[t].readingCount=new o(e[i]).format()}}),i.fetch({list:d}),c.on("sync",function(e){if(e&&e.result){l.store.forEach(function(t){var i=t.articles[0].cmsId?t.articles[0].cmsId:"mp_"+t.articles[0].id,n=e.result;n[i].parts;n[i].parts-0==0||isNaN(n[i].parts-0)?t.commentCount="":t.commentCount=new o(n[i].parts).format()}),$("[data-role='comment-count']").each(function(e,t){$(this).html(l.store[e].commentCount+" 评论")});var t=l.store.splice(0,4);l.store=l.store.concat(t)}}),c.fetch()})},refresh:function(){if(this.refreshable&&!this.loading){var e=this;this.loading=!0,this.setLoading(!0),setTimeout(function(){e.index+=4;var t=(e.store.length,e.store.splice(0,4));e.store=e.store.concat(t),e.render({items:t}),e.setLoading(!1),e.loading=!1},200)}},fixCount:function(){var e=$("[data-role='author-reading-count']"),t=[],i=new s;e.each(function(e){t.push($(this).attr("data-id")),$(this).attr("data-role","watting-author-reading-count")}),i.on("sync",function(e){$('[data-role="watting-author-reading-count"]').each(function(t){var i=$(this).attr("data-id");$(this).html(new o(e[i]).format())})}),i.fetch({list:t})}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.url="headLines/home/hotAuthors"},fetch:function(e){var t=this,i={pageSize:20};n.prototype.fetch.call(this,{data:i,success:function(e,i){try{t.trigger("sync",e)}catch(n){t.trigger("error")}}})}})},function(e,t){e.exports='          <%for(var i=0;i< items.length ;i++){\n    var item =items[i];\n    %>\n    <div class="block">\n        <div class="pic-txt">\n            <div class="pic">\n                <a href="<%= item.personalPage%>" target="_blank"><img src="<%= item.logo%>" alt=""></a>\n            </div>\n            <p><a href="<%= item.personalPage%>" target="_blank"><%= item.name%></a><em class="num">阅读数 <%= item.readingCount%></em></p>\n\n        </div>\n        <h4><a href="//www.sohu.com<%= item.articles[0].relativeUrl%>?_f=index_recom_<%= item.index%>" target="_blank"><%= item.articles[0].title%></a>\n        <a href="//www.sohu.com/a/<%= item.articles[0].id%>_<%= item.articles[0].authorId%>?_f=index_recom_<%= item.index%>#comment_area" target="_blank"> <em class="num" data-role=\'comment-count\'  ><%= item.commentCount%> 评论</a></em></h4>\n\n    </div>\n     <%}%>\n\n'},function(e,t,i){i(16),i(18);e.exports=Backbone.View.extend({template:_.template(i(198)),data:{items:[],mouseIndex:0},index:0,store:null,refreshable:!1,loading:!1,pageSize:6,maxPage:3,events:{"click [data-role='switch-choice']":"refresh","mouseover [data-role='block']":"mouseover"},render:function(e){this.blocksEl.html(this.template(e))},initialize:function(e){this.loadingEl=this.$el.find(".loading"),this.blocksEl=this.$el.find("[data-role='blocks']"),this.blocksContentEl=this.$el.find("[data-role='blocks-content']"),this.switchButton=this.$el.find("[data-role='switch-choice']"),this.refreshable=!0},setLoading:function(e){e?(this.blocksEl.hide(),this.loadingEl.show()):(this.loadingEl.hide(),this.blocksEl.show())},refresh:function(){if(this.refreshable&&!this.loading){var e=this;this.loading=!0,console.log("refresh"),this.setLoading(!0),setTimeout(function(){e.index=e.index==e.maxPage-1?0:e.index+1,e.blocksEl.find(".box-now").removeClass("box-now");for(var t=0;t<3;t++)t==e.index?(e.blocksContentEl[t].style.display="block",$(e.blocksContentEl[t]).find(".box:first").addClass("box-now")):e.blocksContentEl[t].style.display="none";e.setLoading(!1),e.loading=!1},200)}},mouseover:function(e){this.blocksEl.find(".box-now").removeClass("box-now"),$(e.currentTarget).addClass("box-now")}})},function(e,t){e.exports='<% for(var i=0,len=items.length;i<len;i++){\n    var item =items[i]; \n%>\n    <div class="box <%= i==0?\'box-now\':\'\' %>" data-role="block">\n        <a href="<%= item.url + \'?_f=index_funnews_\' + item.index %>" target="_blank">\n            <h4><%= item.title%></h4>\n            <div class="pic-text clearfix" data-role="block-content">\n                <div class="pic">\n                    <img data-src="<%= item.picUrl%>" alt="" src="<%= item.picUrl%>" data-processed="true">\n                </div>\n                <p><%= item.description%></p>\n            </div>\n        </a>\n    </div>\n\n<% } %>\n'},function(e,t,i){function n(e){var t={$el:$(document.body)};this.settings=$.extend({},t,e)}var s=i(200),a=i(63);n.prototype={constructor:n,upDateAdMap:function(e){this.adMap=$.extend({},this.adMap,e.adMap)},triggerPv:function(e){s.sendPv({city_id:this.adMap.city_id,area_code:this.adMap.area_code,city_name:encodeURIComponent(this.adMap.city_name)})},clickMonitor:function(e){console.log("执行");var t=this.adMap;this.settings.$el.on("click","[data-adposid]",function(e){$(e.currentTarget).attr("data-adposid")&&s.reportClick(t[$(e.currentTarget).attr("data-adposid")])})},evMonitor:function(){var e,t={},i=[],n=this;$(window).on("scroll",_.throttle(function(){for(n.settings.$el.find("[data-adposid]").each(function(){var e=$(this).attr("data-adPosId");t[e]||(a($(this))||a($(this).children()))&&(i.push(n.adMap[e]),t[e]=1)});i.length>2;)clearTimeout(e),s.sendEv(i.splice(0,3));e=setTimeout(function(){i.length>0&&s.sendEv(i),i=[]},1e4)},200))}},e.exports=new n},function(e,t,i){function n(){this.host="//adv-sv-stat.focus.cn/adv/producer/sendComplexLog?",this.singleHost="//adv-sv-stat.focus.cn/adv/producer/sendLog?",this.params={domain:encodeURIComponent(window.location.host),source_agent:3,referer_url:encodeURIComponent(window.location.href),user_suv:s.get("SUV")}}var s=i(7);n.prototype={constructor:n,sendPv:function(e){this._doSingleReq(2,e)},reportClick:function(e){this._doSingleReq(0,{demander_id:e.demander_id||-1,plan_id:e.plan_id,order_id:e.order_id,idea_id:e.idea_id,estate_id:e.estate_id||-1,city_id:e.city_id,city_name:encodeURIComponent(e.city_name),area_code:e.area_code,ad_pos_id:e.ad_pos_id})},sendEv:function(e){var t=[];e.forEach(function(e){e!=undefined&&t.push({demander_id:e.demander_id,plan_id:e.plan_id,order_id:e.order_id,idea_id:e.idea_id,estate_id:e.estate_id||-1,city_id:e.city_id,city_name:encodeURIComponent(e.city_name),area_code:e.area_code,ad_pos_id:e.ad_pos_id})}),t.length>5?this._doRequest(1,t.splice(0,5)):this._doRequest(1,t)},_param:function(e){var t=[];for(var i in e)t.push(i+"="+e[i]);return t.join("&")},_doRequest:function(e,t){var i=$.extend({},this.params,{type:e,ads:encodeURIComponent(JSON.stringify(t))});$.getScript(this.host+this._param(i))},_doSingleReq:function(e,t){var i=$.extend({type:e},t,this.params);$.getScript(this.singleHost+this._param(i))}},e.exports=new n},function(e,t,i){var n=i(25),s=(i(18),i(26)),a=i(202),o=i(16),r=i(18);e.exports=Backbone.View.extend({template:_.template(i(203)),template_index:_.template(i(204)),data:{items:[],title:""},currentPage:1,lastPage:0,
translateX:0,translateY:0,startTranslateX:0,startTranslateY:0,delta:0,dragging:!1,startPos:null,transitioning:!1,slideEls:[],totalPage:0,interval:null,timer:5e3,events:{"touchstart .hot-news-scroll":"_onTouchStart","mouseover [data-role='hot-news-bullet']":"go_page","transitionend .hot-news-scroll-cont":"_onTransitionEnd","webkitTransitionend .hot-news-scroll-cont":"_onTransitionEnd",mouseenter:"freeze",mouseleave:"start"},model:null,fixed_items:function(){this.data.items.length>0&&(this.data.firstImage=this.data.items[0].picUrl||this.data.items[0].images[0]),this.data.items.forEach(function(e,t){e.link=n.news(e),e.cmsId=e.cmsId?e.cmsId:e.id,e.picUrl=e.picUrl&&e.picUrl.replace(/(cdn\.sohucs\.com)(.*)(images\/)/g,"$1/c_fill,w_90,h_60,g_faces,q_70/$3")})},initialize:function(e){var t=this;this.type=e.type,this.model=e.model,this.model.on("sync",function(e){e.forEach(function(e,i){var n="index"==t.type?28:i?27:24;e.title=r.subString(e.title,n)}),t.data.items=e,"index"==t.type?(t.data.pageSize=parseInt(e.length/5),t.data.items=e,t.data.isIndex2=!1,t.render_index()):"index2"==t.type?(t.data.isIndex2=!0,t.render_index()):t.render(),"index"==t.type&&t.data.pageSize>1&&(t.ready(),this._onTouchMove=function(e){t.onTouchMove.apply(t,arguments),e.preventDefault(),e.stopPropagation()},this._onTouchEnd=function(e){t.onTouchEnd.apply(t,arguments),e.preventDefault(),e.stopPropagation()})}),this.model.fetch()},render:function(){this.fixed_items(),this.$el.html(this.template(this.data)),this.read_comment_count()},render_index:function(){this.fixed_items(),this.$el.html(this.template_index(this.data)),this.read_count(),setTimeout(function(){window.sohuSpm&&"function"==typeof window.sohuSpm.domDidChange&&window.sohuSpm.domDidChange()})},read_comment_count:function(){var e=[],t=this;this.$el.find('[data-role="comment-count"]').each(function(){var t=$(this).data("cmsid")+"|mp_"+$(this).data("id");$(this).attr("data-role","waiting-comment-count"),e.push(t)});var i=new s({news_ids:e});i.one("sync",function(e){for(var i in e.result){var n=new o(e.result[i].parts).format();0==parseInt(n)&&(n="&nbsp;"),i.indexOf("mp_")>-1?$(t.$el).find("[data-role='waiting-comment-count'][data-id='"+i.replace("mp_","")+"']").html(n).attr("data-role",""):$(t.$el).find("[data-role='waiting-comment-count'][data-cmsid='"+i+"']").html(n).attr("data-role","")}}),i.fetch()},read_count:function(){var e=[],t=this;this.$el.find('[data-role="comment-count"]').each(function(){var t=$(this).data("id");$(this).attr("data-role","waiting-article-pv"),e.push(t)});var i=new a;i.one("sync",function(e){for(var i in e){var n=new o(e[i]).format();0==parseInt(n)&&(n="&nbsp;"),$(t.$el).find("[data-role='waiting-article-pv'][data-id='"+i+"']").html(n).attr("data-role","")}}),i.fetch({list:e})},ready:function(){if(this.$els=this.$el.find(".hot-news-scroll-cont"),this.slideEls=this.$els[0]&&this.$els[0].children,this.slideEls){this.totalPage=this.slideEls.length||0,$(this.$els).append($(this.slideEls[0]).clone().removeAttr("data-focus-ev")),$(this.$els).prepend($(this.slideEls[this.slideEls.length-2]).clone().removeAttr("data-focus-ev")),this.setPage(0);var e=this;setTimeout(function(){e.trigger("ready")},10),this.start()}},reset:function(){$(this.$els).html(""),this.slideEls=this.$els[0].children,this.totalPage=this.slideEls.length,$(this.$els).append($(this.slideEls[0]).clone()),$(this.$els).prepend($(this.slideEls[this.slideEls.length-2]).clone()),this.setPage(0)},start:function(){var e=this;e.transitioning=!1,this.interval=setInterval(function(){e.next()},7e3)},next:function(e){var t=this;this.transitioning||(this.currentPage++,this.setPage(this.currentPage),e&&(clearInterval(this.interval),clearTimeout(this.timer),this.timer=setTimeout(function(){t.start()},6e4)))},prev:function(e){var t=this;this.transitioning||(this.currentPage--,this.setPage(this.currentPage),e&&(clearInterval(this.interval),clearTimeout(this.timer),this.timer=setTimeout(function(){t.start()},6e4)))},setPage:function(e){var t;if(this.lastPage=this.currentPage,this.currentPage=e,$(this.slideEls[this.currentPage+1]).trigger("focus-in-view"),this.isHorizontal()?("clientWidth",t="translateX"):("clientHeight",t="translateY"),this.isSupportTransform()){this[t]=0-$(this.slideEls[0]).width()*(e+1);var i=this.$el.find(".hot-news-scroll-cont");i.css("transform","translate3d("+this.translateX+"px,"+this.translateY+"px, 0)"),this.$el.find(".scroll-auto li.cur").removeClass("cur"),this.$el.find(".scroll-auto li:eq("+e+")").addClass("cur"),this._onTransitionStart()}else{var n=this;this[t]=0-$(this.slideEls[0]).width()*(e+1);var i=this.$el.find(".hot-news-scroll-cont");i.animate({left:n.translateX+"px"},1e3,function(){if(n.currentPage<0){n.currentPage=n.totalPage-1;var e=0-n.slideEls[0].clientWidth*n.totalPage}if(n.currentPage>n.totalPage-1){n.currentPage=0;var e=0-n.slideEls[0].clientWidth}i.css({left:e}),n.transitioning=!1,n.$el.find(".scroll-auto li.cur").removeClass("cur"),n.$el.find(".scroll-auto li:eq("+n.currentPage+")").addClass("cur")})}},go_page:function(e){this.setPage($(e.currentTarget).data("id"))},setPageNoAnimate:function(e){var t=$(this.$els);t.css("transition","none"),this.setPage(e);var i=this;setTimeout(function(){t.css("transition",""),i.transitioning=!1},100)},isHorizontal:function(){return!0},isVertical:function(){return!1},isSupportTransform:function(){return"transform"in document.createElement("div").style},_onTouchStart:function(e){this.transitioning||(this.startPos=this._getTouchPos(e.originalEvent),this.delta=0,this.startTranslateX=this.translateX,this.startTranslateY=this.translateY,this.startTime=(new Date).getTime(),this.dragging=!0,document.addEventListener("touchmove",this._onTouchMove,!1),document.addEventListener("touchend",this._onTouchEnd,!1),document.addEventListener("mousemove",this._onTouchMove,!1),document.addEventListener("mouseup",this._onTouchEnd,!1))},onTouchMove:function(e){this.delta=this._getTouchPos(e)-this.startPos,e.preventDefault(),e.stopPropagation(),this.isHorizontal()?(this.translateX=this.startTranslateX+this.delta,this.trigger("slider-move",this.translateX)):(this.translateY=this.startTranslateY+this.delta,this.trigger("slider-move",this.translateY)),(this.isVertical()||this.isHorizontal()&&Math.abs(this.delta)>0)&&e.preventDefault()},onTouchEnd:function(e){this.dragging=!1;var t=(new Date).getTime()-this.startTime<1e3;this.delta<-100||t&&this.delta<-15?this.next(e):this.delta>100||t&&this.delta>15?this.prev(e):this._revert(),e.stopPropagation(),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),document.removeEventListener("mousemove",this._onTouchMove),document.removeEventListener("mouseup",this._onTouchEnd)},_revert:function(){this.setPage(this.currentPage)},_getTouchPos:function(e){var t=this.isHorizontal()?"pageX":"pageY";return e.changedTouches?e.changedTouches[0][t]:e[t]},_onTransitionStart:function(){this.transitioning=!0,this._isPageChanged()?this.trigger("slide-change-start",this.currentPage,this):this.trigger("slide-revert-start",this.currentPage,this)},_onTransitionEnd:function(){this.currentPage<0?(this.transitioning=!0,this.setPageNoAnimate(this.totalPage-1)):this.currentPage>this.totalPage-1?(this.transitioning=!0,this.setPageNoAnimate(0)):this.transitioning=!1,this.trigger("focus-change",this.currentPage,this)},_isPageChanged:function(){return this.lastPage!==this.currentPage},freeze:function(){clearInterval(this.interval),this.interval=null}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(){},fetch:function(e){var t=this;this.list=[];for(var i={},s=0;s<e.list.length;s++)i[e.list[s]]||(this.list.push(e.list[s]),i[e.list[s]]=1);console.log(this.list),this.url="//v2.sohu.com/public-api/articles/pv?";var a={articleIds:t.list.join(",")};n.prototype.fetch.call(this,{data:a,url:this.url,success:function(e){t.trigger("sync",e)},error:function(e){t.trigger("error",e)}})}})},function(e,t){e.exports='\n    <div class="titleR"><span class="tt">24小时热文</span></div>\n    <%if(firstImage){%>\n        <div class="img-text clearfix">\n            <div class="pic"><a href="<%=items[0].link%>" target="_blank"><img alt="" src="<%=firstImage%>"><em class="sn">1</em></a></div>\n            <h4>\n                <a href="<%=items[0].link%>?_f=index_hotnews_0" target="_blank">\n                    <%=items[0].title%>\n                </a>\n            </h4>\n            <p><a href="<%=items[0].link%>?_f=index_hotnews_0#comment_area" target="_blank"><em data-role="comment-count" data-id="<%=items[0].cmsId%>"></em> 评论</a></p>\n        </div>\n        <%}%>\n            <div class="sn-list">\n                <ul>\n                    <% var b=firstImage?1:0%>\n                        <% for( var a = b ; a < items.length ; a++) { %>\n                            <%\n                         var item = items[a];\n                        %>\n                                <li><em class="sn"><%= a+1 %></em>\n                                    <a href="<%=item.link%>?_f=index_hotnews_<%= a%>" target="_blank">\n                                    <%=item.title%>\n                                    </a><em class="com-num"><a href="<%=item.link%>?_f=index_hotnews_<%= a%>#comment_area" target="_blank"><em data-cmsid="<%=item.cmsId || \'mp_\'+ item.id%>" data-role="comment-count" data-id="<%=item.id%>"></em> 评论</a></em></li>\n\n                                <%}%>\n                </ul>\n            </div>'},function(e,t){e.exports='\n<div class="titleR"><span class="tt">24小时热文</span></div>\n<%if(isIndex2){%>\n    <%if(firstImage){%>\n    <div class="img-text clearfix" data-spm-type="resource">\n        <div class="pic"><a href="<%=items[0].link%>" target="_blank"><img alt="" src="<%=firstImage%>"><em class="sn">1</em></a></div>\n        <h4>\n            <a href="<%=items[0].link%>" target="_blank" data-spm-type="content">\n                <%=items[0].title%>\n            </a>\n        </h4>\n        <p><a href="<%=items[0].link%>" target="_blank"><em data-role="comment-count" data-id="<%=items[0].id%>"></em> 阅读</a></p>\n    </div>\n    <%}%>\n    <div class="sn-list">\n        <ul>\n            <% var b=firstImage?1:0%>\n            <% for( var a = b ; a < items.length ; a++) { %>\n                <% var item = items[a]; %>\n                <li data-spm-type="resource">\n                    <em class="sn"><%= a+1 %></em>\n                    <a href="<%=item.link%>" target="_blank" data-spm-type="content"><%=item.title%></a>\n                    <em class="com-num">\n                        <a href="<%=item.link%>" target="_blank">\n                            <em data-role="comment-count" data-id="<%=item.id%>"></em> 阅读\n                        </a>\n                    </em>\n                </li>\n            <%}%>\n        </ul>\n    </div>\n<%} else {%>\n\n<div class="scroll-auto">\n    <ul>\n        <% for( var i = 0 ; i < pageSize ; i++) { %>\n            <li class="<%= i==0?\'cur\':\'\'%>" data-role="hot-news-bullet" data-id="<%=i%>"></li>\n        <%}%>\n    </ul>\n</div>\n<div class="hot-news-scroll">\n    <div class="hot-news-scroll-cont">\n    <% for( var i = 0 ; i < pageSize ; i++) { %>\n        <div class="hot-news-scroll-item" data-media-id="<%=i%>" data-focus-ev="<%=i%>">\n            <% for( var a = 0 ; a < 5 ; a++) { %>\n                <% var item = items[i*5+a]; %>\n            <div class="img-text clearfix">\n                <div class="pic"><a href="<%=item.link%>" target="_blank"><img alt="" src="<%=item.picUrl%>"></a></div>\n                <h4>\n                    <a href="<%=item.link%>" target="_blank" data-spm-type="content">\n                        <%=item.title%>\n                    </a>\n                </h4>\n                <p><a href="<%=item.link%>" target="_blank"><em data-role="comment-count" data-id="<%=item.id%>"></em> 阅读</a></p>\n            </div>\n            <%}%>\n        </div>\n    <%}%>\n    </div>\n</div>\n\n<%}%>\n'},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.region=e.id,this.slice=e.slice},fetch:function(){if(this.region){var e=this;this.url="//v2.sohu.com/integration-api/mix/region/"+this.region+"?secureScore=75",$.ajax({url:this.url,dataType:"jsonp",success:function(t){var i=t.data;e.slice&&(i=i.slice(0,e.slice)),e.trigger("sync",i)},error:function(){e.trigger("error",arguments)}})}}})},function(e,t,i){var n=i(207);e.exports=Backbone.View.extend({template:_.template(i(208)),events:{"mouseenter li[data-id]":"tabChange"},tabChange:function(e){var t=$(e.currentTarget);t.addClass("cur"),t.siblings().removeClass("cur");var i=t.data("id");this.$el.find("[data-role='tab']").hide(),this.$el.find("[data-role='tab']").eq(i).show()},initialize:function(){var e=this,t=new n;t.on("sync",function(t){for(var i in t)t.hasOwnProperty(i)&&t[i].forEach(function(e){e.totalScore=(e.totalScore+"").split(".")[0]});e.data=t,e.render()}),t.fetch()},render:function(){this.$el.html(this.template(this.data))}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.url="starsRank"},fetch:function(e){var t=this;n.prototype.fetch.call(this,{success:function(e,i){try{t.trigger("sync",e)}catch(n){t.trigger("error")}}})}})},function(e,t){e.exports='\n    <div class="titleR"><a href="http://stars.sohu.com" target="_blank"><span class="tt">星图排行榜</span></a></div>\n    <div class="menu menuC3">\n        <ul>\n            <li class="cur" data-id="0">日榜</li>\n            <li data-id="1">周榜</li>\n            <li data-id="2" class="end">月榜</li>\n        </ul>\n    </div>\n    <div class="rank clearfix" data-role="tab">\n        <ul>\n            <% for( var a = 0 ; a <DAILY.length ; a++) { %>\n            <%\n            var item =DAILY[a];\n            %>\n                    <li><em class="sn <%= a==0?\'sn-one\':\'\'%>"><%= a+1%></em>\n                        <a href="<%=item.mediaUrl%>" target="_blank">\n                            <%= item.mediaName%>\n                        </a><em class="num">指数 <%=item.totalScore%></em></li>\n            <%}%>            \n        </ul>\n    </div>\n    <div class="rank clearfix" style="display:none" data-role="tab">\n        <ul>\n        <% for( var a = 0 ; a <WEEKLY.length ; a++) { %>\n            <%\n            var item =WEEKLY[a];\n            %>\n                    <li><em class="sn <%= a==0?\'sn-one\':\'\'%>"><%= a+1%></em>\n                        <a href="<%=item.mediaUrl%>" target="_blank">\n                            <%= item.mediaName%>\n                        </a><em class="num">指数 <%=item.totalScore%></em></li>\n            <%}%>  \n        </ul>\n    </div>\n    <div class="rank clearfix" style="display:none" data-role="tab">\n        <ul>\n         <% for( var a = 0 ; a <MONTHLY.length ; a++) { %>\n            <%\n            var item =MONTHLY[a];\n            %>\n                    <li><em class="sn <%= a==0?\'sn-one\':\'\'%>"><%= a+1%></em>\n                        <a href="<%=item.mediaUrl%>" target="_blank">\n                            <%= item.mediaName%>\n                        </a><em class="num">指数 <%=item.totalScore%></em></li>\n            <%}%>  \n        </ul>\n    </div>\n'},function(e,t,i){var n=i(210);e.exports=Backbone.View.extend({template:_.template(i(211)),initialize:function(e){var t=new n,i=this;t.on("sync",function(e){var e=e.data;i.fixItem(e.list),i.$el.html(i.template(e)),i.trigger("ready",e)}),t.on("error",function(){i.$el.hide()}),t.fetch()},fixItem:function(e){e.forEach(function(e){e.resource_map=e.resource_map?e.resource_map:"",e.resource_map&&(e.resource_map.text=e.resource_map.text?e.resource_map.text:""),e.resource_map.text&&(e.resource_map.text.despriction=e.resource_map.text.despriction?e.resource_map.text.despriction:"")})}})},function(e,t,i){var n=i(4),s=i(7);e.exports=n.extend({init:function(e){this.url="//adv-sv-show.focus.cn/be_fox_say3",this.data={cityCode:s.get("_test_loc_")||window.sohu_IP_Loc||"",adposId:51}},fetch:function(e){var t=this;n.prototype.fetch.call(this,{success:function(e,i){try{t.trigger("sync",e)}catch(n){t.trigger("error")}},data:this.data,timeout:3e3})}})},function(e,t){e.exports='\n<div class="titleR"><span class="tt">房产动态</span></div>\n<div class="list" data-spm="focus-list2">\n    <ul>\n        <% for( var a = 0 ; a < list.length ; a++) { %>\n    <%\n    var item = list[a];\n    %>\n        <li><a href="<%= item.link%>" target="_blank" data-adposid="<%= item.ad_pos_id%>"><%= item.resource_map.text.despriction%></a></li>\n    <%}%>\n    </ul>\n\n</div>\n'},function(e,t,i){var n=i(213);e.exports=Backbone.View.extend({template:_.template(i(214)),initialize:function(e){var t=new n,i=this;t.on("sync",function(e){var e=e.data;i.fixItem(e.list),i.$el.html(i.template(e)),i.trigger("ready",e)}),t.on("error",function(){i.$el.hide()}),t.fetch()},fixItem:function(e){e.forEach(function(e){e.resource_map=e.resource_map?e.resource_map:"",e.resource_map&&(e.resource_map.text=e.resource_map.text?e.resource_map.text:"",e.resource_map.pic=e.resource_map.pic?e.resource_map.pic:""),e.resource_map.pic&&(e.resource_map.pic.url=e.resource_map.pic.url?e.resource_map.pic.url:""),e.resource_map.text&&(e.resource_map.text.despriction=e.resource_map.text.despriction?e.resource_map.text.despriction:"")})}})},function(e,t,i){var n=i(4),s=i(7);e.exports=n.extend({init:function(e){this.url="//adv-sv-show.focus.cn/be_fox_say3",this.data={cityCode:s.get("_test_loc_")||window.sohu_IP_Loc||"",adposId:52}},fetch:function(e){var t=this;n.prototype.fetch.call(this,{success:function(e,i){try{t.trigger("sync",e)}catch(n){t.trigger("error")}},data:this.data,timeout:3e3})}})},function(e,t){e.exports='\n<div class="titleR"><span class="tt">房产热点</span></div>\n\n<div class="extend-pic">\n    <a href="<%= list[0].link%>" target="_blank" data-adposid="<%= list[0].ad_pos_id%>"><img src="<%=list[0].resource_map.pic.url%>" alt=""></a>\n</div>\n<div class="list" data-spm="focus-list1">\n    <ul>\n        <% for( var a = 1 ; a < 11 ; a++) { %>\n    <%\n    var item = list[a];\n\n    %>\n        <li><a href="<%= item.link%>" target="_blank" data-adposid="<%= item.ad_pos_id%>"><%= item.resource_map.text.despriction%></a></li>\n    <%}%>\n\n    </ul>\n</div>\n'},function(e,t,i){var n=i(216),s=new n,a=function(e){this.topEv=e.topEv||[],this.clickEv=e.clickEv||!1,this.sclickEv=e.clickEv&&e.clickEv.special||[],this.linkEv=e.linkEv||!1,this.news_list=[],this.unique=[],this.delay_timer=null,this.init.apply(this),this.evHandler()};a.prototype={init:function(e){var t=this;this.linkEv&&this.fixUrl(),this.clickEv&&this.cvHandler(),$(window).on("scroll",function(){clearTimeout(t.delay_timer),t.delay_timer=setTimeout(function(){t.evHandler()},100)}),$(window).on("resize",function(){clearTimeout(t.delay_timer),t.delay_timer=setTimeout(function(){t.evHandler()},100)});for(var i=0,n=this.sclickEv.length;i<n;i++)!function(){var e=t.sclickEv[i];"#search"==e.el?$(e.el).on("click",function(t){"search-btn"!=t.target.className&&"search-icon icon"!=t.target.className||s.click_trigger(e.param)}):$(e.el).on("click",function(t){s.click_trigger(e.param)})}()},evHandler:function(){for(var e=this,t=0,i=this.topEv.length;t<i;t++){var n=e.topEv[t];if(0!=$(n.el).size()&&!n.hadTrigger){var a=$(n.el).offset().top;$(window).scrollTop()+$(window).height()>a&&(s.ev_trigger(n.param),n.hadTrigger=!0)}}},fixUrl:function(){var e=this;$(this.linkEv).each(function(t,i){var n=$(i).attr(e.linkEv.replace(/[\[\]]/g,""));$(i).one("click",function(e){var t=$(i).eq(0).attr("href");~t.indexOf("?")&&(n=n.replace("?","&")),$(i).attr("href",t+n),e.stopPropagation()})})},cvHandler:function(){if(this.clickEv&&this.clickEv.el){if($(this.clickEv.el).on("click",function(){var e=$(this).data("clev");s.click_trigger(e)}),this.clickEv.sync)for(var e=0,t=this.clickEv.sync.length;e<t;e++){var i=this.clickEv.sync[e];!function(e){e.plugin.on("ready",function(){$(e.el).on("click",function(){var e=$(this).data("clev");s.click_trigger(e)})})}(i)}}}},e.exports=a},function(e,t,i){var n=i(4),s=i(7),a=s.get("SUV"),o=function(e,t){var e=e+"actionId="+t+"&SUV="+a;$.getScript(e,function(){})};e.exports=n.extend({init:function(){},ev_trigger:function(e){o("//pv.sohu.com/action.gif?",e)},click_trigger:function(e){o("//pv.sohu.com/action.gif?",e)}})},function(e,t){var i=function(e){if(this.firstEl=e.firstEl,this.nextEl=e.nextEl,this.btnEl=e.btnEl,this.top=e.top,this.bottom=e.bottom,0==$(this.btnEl).size()||0==$(this.firstEl).size()||0==$(this.nextEl).size())return!1;this.stopTop=$(this.firstEl).offset().top,this.delay_timer=null,this.hadShow=!1,this.showIng=!1,this.init.apply(this),this.evHandler()};i.prototype={init:function(){var e=this;$(this.btnEl).on("click",function(t){t.preventDefault(),1==e.showIng&&$("html, body").animate({scrollTop:e.top},300),e.toggle(t)}),$(window).on("scroll",function(){e.evHandler()}),$(window).on("resize",function(){e.evHandler()})},evHandler:function(){var e=$(window).scrollTop()+$(window).height(),t=$(window).scrollTop();e>this.bottom&&t<this.bottom&&!this.hadShow&&(this.show(),this.hadShow=!0),t>this.stopTop&&t<this.bottom&&!this.showIng&&($(this.btnEl).addClass("update-btn-fixed"),this.showIng=!0),t<=this.stopTop&&this.showIng&&(this.show(),$(this.btnEl).removeClass("update-btn-fixed"),this.showIng=!1),t>this.bottom&&this.hadShow&&(this.hide(),this.hadShow=!1)},show:function(){$(this.btnEl).fadeIn(),$(this.firstEl).addClass("show-list-mod"),$(this.firstEl).find(".list16:last li:last").hide()},hide:function(){$(this.btnEl).fadeOut()},toggle:function(){$(this.firstEl).fadeOut(),$(this.nextEl).fadeIn()}},e.exports=i},function(e,t){function i(e){var t=e.url,i=e.success,n=e.complete;this.data={},this.focus=[],this.news=[],this.url=t,this.init(i,n)}i.prototype={formatData:function(){for(var e=0;e<this.data.length;e++){var t=this.data[e];0!==t.images.length&&this.focus.length<2?this.focus.push(t):this.news.push(t)}0===this.focus.length?this.focus.push(news.shift()):1===this.focus.length&&(this.focus.push(news.shift()),this.focus.push(news.shift()))},init:function(e,t){$.ajax({url:this.url,method:"GET",dataType:"jsonp",jsonp:"callback",success:e.bind(this),complete:t.bind(this)})}},e.exports=i},function(e,t,i){var n=i(43),s=i(220),a=i(216),o=new a,r=function(e){this.params=n.getParams(location.href),this.changeFocus=e.changeFocus,this.succCallback=e.succCallback,this.change()};r.prototype.change=function(){var e=this;if(this.params&&this.params.pvid&&this.params.newsid&&this.params.t&&this.params.t>Date.now()-12e4){var t=new s;t.on("sync",function(t){if(t.news&&t.news.id&&t.news.userId&&t.news.title&&t.news.cover){var i=e.changeFocus,n='<a target="_blank" data-param="?_f=index_focus_1" href="/a/'+t.news.id+"_"+t.news.userId+'" title="'+t.news.title+'"><img alt="'+t.news.title+'" src="'+t.news.cover.replace("cdn.sohucs.com","cdn.sohucs.com/c_zoom,h_213,w_320")+'"><span class="shadow linear-box"><em class="linear-bg"></em><span>'+t.news.title+"</span></span></a>";$(i).html(n),e.succCallback&&"function"==typeof e.succCallback&&e.succCallback(),$(i).find("a").on("click",function(){o.click_trigger("10220429")})}}),t.fetch({newsid:this.params.newsid})}},e.exports=r},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(){},fetch:function(e){var t=e.newsid;this.url="meta/"+t;var i=this;n.prototype.fetch.call(this,{success:function(e,t){try{"string"==typeof e&&(e=JSON.parse(e)),console.log(e),i.trigger("sync",e)}catch(n){i.trigger("error",n)}},error:function(e){i.trigger("error",e)}})}})},function(e,t,i){i(222),e.exports=Backbone.View.extend({initialize:function(e){this.addTheme(e)},addTheme:function(e){$(".sohu-index-v3").addClass("festival-wrapper"),$(".logo-search").css({backgroundImage:"url('//statics.itc.cn/index/festivals/2020/"+e.festival+"/bg.png')"})}})},function(e,t){},function(e,t,i){i(224);var n=i(7);e.exports=Backbone.View.extend({events:{"click .close-wrap":"removeTheme"},initialize:function(e){this.$el=$(e.el),this.addTheme()},addTheme:function(){var e=n.get("closeTheme"),t=$(".sohu-index-v3");(e=!1)||(t.addClass("festival-twomeeting"),t.find(".top-box .top-box-wrapper").removeClass("top-box-wrapper").css({width:"1200px",margin:"0 auto",paddingBottom:"10px"}),this.$el.show())},removeTheme:function(){var e=$(".sohu-index-v3");n.set("closeTheme",!0,{expires:1.5}),this.$el.hide(),e.removeClass("festival-twomeeting")}})},function(e,t){},function(e,t,i){i(226);var n=i(7),s=i(227),a=i(228),o="left";e.exports=Backbone.View.extend({template:_.template(i(229)),data:{el:null,sourceCityCode:"",targetCityCode:"",targetCityName:""},initialize:function(e){var t=this;t.data.el=$(e.el),window.localStorage||(window.localStorage={getItem:function(){},setItem:function(){}}),t.getCityCode()},getCityCode:function(){var e=this,t=window.localStorage.getItem("sohu_choice_citycode");if(void 0!==t&&""!==t&&null!==t)return e.data.sourceCityCode=t,void e.asyncGetCityCode();$.ajax({url:"//v2.sohu.com/api/pc-home-city/home-data/ip2location",method:"GET",async:!1,dataType:"jsonp",success:function(t){e.data.sourceCityCode=t.data&&t.data.china_admin_code||"",window.localStorage.setItem("sohu_choice_citycode",e.data.sourceCityCode),e.handleCityCodeAndSendAjax()},error:function(e){console.log("出错了",e)}})},asyncGetCityCode:function(){var e=this;setTimeout(function(){$.ajax({url:"//v2.sohu.com/api/pc-home-city/home-data/ip2location",method:"GET",async:!1,dataType:"jsonp",success:function(e){window.localStorage.setItem("sohu_choice_citycode",e.data&&e.data.china_admin_code||"")},error:function(e){console.log("出错了",e)}})},0),e.handleCityCodeAndSendAjax()},handleCityCodeAndSendAjax:function(){var e=this,t=e.data.sourceCityCode;e.data.targetCityCode=s[t]&&s[t].code,e.data.targetCityName=s[t]&&s[t].city,e.data.targetCityCode&&e.data.targetCityName&&(e.fetchFeedData(),e.bindDomListener())},buildFeedParams:function(){var e={},t=n.get("SUV")||"";return e.suv=t,e.refer=document.referrer||"",e.ua=navigator.userAgent||"",e},fetchFeedData:function(){var e=this,t=e.buildFeedParams();$.ajax({url:"//v2.sohu.com/api/pc-home-city/home-data/area",method:"GET",async:!1,dataType:"jsonp",data:{suv:t.suv,refer:t.refer,ua:t.ua,cityCode:e.data.targetCityCode},success:function(t){if("OK"===t.msg&&t.data&&t.data.length>0){var i=a[e.data.targetCityName],n="//www.sohu.com/topic/city/?tab="+i;$("#tabs-jingxuan .tt").hide(),$("#tabs-city").append("<a href="+n+'   target="_blank">'+e.data.targetCityName+"城事</a>").show(),$("#tabs-divideline").show(),$("#city-sohu-choice").attr("data-spm","city-"+i),e.render(t.data)}},error:function(e){console.log("出错了",e)}})},sendAction:function(e){window.sohuSpm&&"function"==typeof window.sohuSpm.sendAction&&window.sohuSpm.sendAction(e)},bindDomListener:function(){var e=this;$("#new-sohu-choice #tabs-jingxuan").hover(function(){$("#new-sohu-choice #tabs-jingxuan").css({color:"#333"}),$("#new-sohu-choice #tabs-city a").css({color:"#999"}),$("#new-sohu-choice #city-sohu-choice-tabs").css({marginLeft:"0px"}),$("#new-sohu-choice #city-choice-switch-choice").css({display:"block"}),"left"===o&&(o="right",e.sendAction({acode:"8564",clkParam:"",spm:""}))}),$("#new-sohu-choice #tabs-city").hover(function(){$("#new-sohu-choice #city-sohu-choice-tabs").css({marginLeft:"-300px"}),$("#new-sohu-choice #tabs-jingxuan").css({color:"#999"}),$("#new-sohu-choice #tabs-city a").css({color:"#333"}),$("#new-sohu-choice #city-choice-switch-choice").css({display:"none"}),"right"===o&&(o="left",e.sendAction({acode:"8564",clkParam:"",spm:""}))})},render:function(e){var t=this,i=$(document.createDocumentFragment());e=e||[],e=e.slice(0,6);var n=e[0];if(n.images&&n.images[0]&&-1!==n.images[0].indexOf("q_70,c_lfill")){var s=n.images[0].split("/");s.forEach(function(e,t,i){-1!==e.indexOf("q_70,c_lfill")&&(i[t]="q_70,c_lfill,w_300,h_135,g_faces")}),n.images[0]=s.join("/")}else n.images&&n.images[0]&&(n.images[0]=n.images[0].replace("com/","com/q_70,c_lfill,w_300,h_135,g_faces/"));n.images&&n.images[0]&&/.gif$/.test(n.images[0])&&(n.images[0]=n.images[0].replace(/.gif$/,".jpeg"));for(var o=0;o<e.length;o++){var n=e[o];if(0===o){var r=a[t.data.targetCityName],c="//www.sohu.com/topic/city/?tab="+r;n.targetCityName=t.data.targetCityName,n.targetCityLink=c}n.index=o,n.url="//www.sohu.com"+n.url,i.append(t.template({data:n}))}t.data.el.append(i),$("#goto-sohuCity-link").click(function(){t.sendAction({acode:"8563",clkParam:"",spm:""})}),window.sohuSpm&&"function"==typeof window.sohuSpm.domDidChange&&window.sohuSpm.domDidChange();var l=$(".content-right .content-first .first-title");if(l.length>0){l.height()<30&&$("#goto-beijing-icon").css({position:"absolute",left:"15px",top:"82px"})}return!0}})},function(e,t){},function(e,t){e.exports={110000:{code:"110000",city:"北京"},310000:{code:"310000",city:"上海"},440100:{code:"440100",city:"广州"},440300:{code:"440300",city:"深圳"},500000:{code:"500000",city:"重庆"},610100:{code:"610100",city:"西安"}}},function(e,t){e.exports={"北京":"beijing","上海":"shanghai","广州":"guangzhou","深圳":"shenzhen","重庆":"chongqing","西安":"xian"}},function(e,t){e.exports='\n<% var item = data, index = data.index  %>\n \n    <% if (index%6==0) { %>\n        <a href="<%= item.url %>" title="<%= item.title %>" target="_blank"> \n            <div class="content-first"  >\n                <div class="image-wrap">\n                    <img class="base-img" src="<%= item.images[0] %>"   />\n                    <div class="city-img"></div>\n                </div>\n                <div class="img-cover"> </div>\n                <h4 class="first-title"><%= item.title %></h4>\n            </div>\n        </a>\n        <a href="<%= item.targetCityLink %>"  title="搜狐-城事" target="_blank"  id="goto-sohuCity-link" >\n            <div class="first-icon" id="goto-beijing-icon" ><i id="pos-icon"></i><%= item.targetCityName %><i id="right-icon"></i></div>\n        </a>\n    <% } else  { %>\n        <div> \n            <div class="content-other-item">\n                <a href="<%= item.url %>" title="<%= item.title %>" target="_blank"> <div class="other-title"><%= item.title %></div></a>\n                <div class="other-divideline"></div>\n            </div>   \n        </div>\n    <% } %>\n '},function(e,t,i){var n,s;!function(a){var o;if(n=a,(s="function"==typeof n?n.call(t,i,t,e):n)!==undefined&&(e.exports=s),o=!0,e.exports=a(),o=!0,!o){var r=window.Cookies,c=window.Cookies=a();c.noConflict=function(){return window.Cookies=r,c}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var n in i)t[n]=i[n]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function i(n){function s(){}function a(t,i,a){if("undefined"!=typeof document){a=e({path:"/"},s.defaults,a),"number"==typeof a.expires&&(a.expires=new Date(1*new Date+864e5*a.expires)),a.expires=a.expires?a.expires.toUTCString():"";try{var o=JSON.stringify(i);/^[\{\[]/.test(o)&&(i=o)}catch(l){}i=n.write?n.write(i,t):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var r="";for(var c in a)a[c]&&(r+="; "+c,!0!==a[c]&&(r+="="+a[c].split(";")[0]));return document.cookie=t+"="+i+r}}function o(e,i){if("undefined"!=typeof document){for(var s={},a=document.cookie?document.cookie.split("; "):[],o=0;o<a.length;o++){var r=a[o].split("="),c=r.slice(1).join("=");i||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var l=t(r[0]);if(c=(n.read||n)(c,l)||t(c),i)try{c=JSON.parse(c)}catch(d){}if(s[l]=c,e===l)break}catch(d){}}return e?s[e]:s}}return s.set=a,s.get=function(e){return o(e,!1)},s.getJSON=function(e){return o(e,!0)},s.remove=function(t,i){a(t,"",e(i,{expires:-1}))},s.defaults={},s.withConverter=i,s}return i(function(){})})},function(e,t,i){var n=i(232),s=i(233),a=window.localStorage||!1,o=i(18),r=i(234),c=o.subString,l=i(235),d=i(216),h=new d;e.exports=Backbone.View.extend({
template:_.template(i(236)),data:{},events:{"click .pop-news-close":"closePermission"},model:null,initialize:function(e){var t=this;this.pushCv(),this.myNotify=null,this.needAsk=e.needAsk||!1,this.model=new n,this.timer=e.timer||3e5,this.model.on("sync",function(e){if(e){if(e.imageUrl=t.fixImage(e.imageUrl),e.brief=c(e.brief,34)+"[点击查看]",-1==e.link.indexOf("//")&&(e.link="//"+e.link),a&&a.getItem("sohu_push")){var i=JSON.parse(a.getItem("sohu_push"));if(e.id==i.id)return console.log("两条新闻重复啦，别再发出来了/更新时间，再过五分钟再问我"),i.outtime=(new Date).getTime()+3e5,void a.setItem("sohu_push",JSON.stringify(i))}t.myNotify=s.windowsNotify({title:"",body:e.brief||"",pic:e.imageUrl,href:t.fixUrl(e.link),tag:"sohu_push",needAsk:t.needAsk,closeAsk:function(){t.closePermission()},showAsk:function(){t.showPermission(e)},interval:function(){console.log("关闭cosole",t.interval),clearInterval(t.interval)}}),e.outtime=(new Date).getTime()+3e5,a.setItem("sohu_push",JSON.stringify(e))}}),this.intervalFetch()},intervalFetch:function(){var e=this;if("搜狗浏览器"!=r.client.name){if(!s.ifNotifyPermission()&&!e.needAsk)return void console.log("没有弹出权限");if(!s.ifNotifyPermission()&&e.needAsk&&this.todayAsk())return void console.log("今天问过了，明天再问吧");!s.ifNotifyPermission()&&e.needAsk&&a&&a.getItem("sohu_push")&&a.removeItem("sohu_push"),e.fetchModel(),setInterval(function(){e.fetchModel()},12e4)}},fetchModel:function(){var e=this;if(a&&a.getItem("sohu_push")){var t=JSON.parse(a.getItem("sohu_push")),i=(new Date).getTime();if(t&&t.id&&t.outtime&&i>=t.outtime)console.log("五分钟啦，看看有没有新闻啊"),e.model.fetch();else{if(t&&t.id&&t.outtime&&i<t.outtime)return void console.log("时间还没到，着啥急");console.log("数据有问题吧，看看data",t),e.model.fetch()}}else a&&!a.getItem("sohu_push")&&e.model.fetch()},render:function(){this.$el.html(this.template(this.data))},closePermission:function(){return this.$el.hide(),!1},showPermission:function(e){this.data=e,this.render(),this.$el.show(),h.click_trigger("10220310")},fixImage:function(e){return e?e.replace(/cdn\.sohucs\.com/g,"cdn.sohucs.com/c_fill,w_90,h_90,g_faces"):"//statics.itc.cn/web/static/images/sohu_logo.jpg"},todayAsk:function(){return a&&a.getItem("today_asked")?!((new Date).getTime()>a.getItem("today_asked"))||(a.setItem("today_asked",l.getTomorrowTime()),!1):(a.setItem("today_asked",l.getTomorrowTime()),!1)},pushCv:function(){a&&a.getItem("sohu_push_cv")&&(h.click_trigger("10220312"),a.removeItem("sohu_push_cv"))},fixUrl:function(e){return e?e=e+(/\?/g.test(e)?"&":"?")+"pvid=3ad77031caeadc5b":"//www.sohu.com/?pvid=3ad77031caeadc5b"}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){},fetch:function(){var e=this;this.url="//v2.sohu.com/public-api/push-news/pc",n.prototype.fetch.call(this,{success:function(t,i){try{e.trigger("sync",t)}catch(n){e.trigger("error")}}})}})},function(e,t,i){function n(){return!!("Notification"in window||window.webkitNotifications)&&(!(!window.webkitNotifications||0!=window.webkitNotifications.checkPermission())||"Notification"in window&&"granted"===Notification.permission)}function s(e){if("Notification"in window||window.webkitNotifications)return null==Notification.permission||Notification.permission==undefined?a(e):"granted"===Notification.permission?o(e):"denied"!==Notification.permission?void(e.needAsk&&(console.log("问问权限"),e.showAsk&&e.showAsk(),Notification.requestPermission(function(t){if(e.closeAsk&&e.closeAsk(),"permission"in Notification||(Notification.permission=t),"granted"===t)return o(e,!0)}))):void 0}function a(e,t){e.closeAsk&&e.closeAsk(),window.webkitNotifications&&0==window.webkitNotifications.checkPermission()?(t?c.click_trigger("10220311"):c.click_trigger("10220384"),function(){var t=window.webkitNotifications.createNotification(e.pic,e.title,e.body);t.onclick=function(){l.setItem("sohu_push_cv",!0),window.open(e.href,"_blank"),this.cancel()},t.onclose=function(){c.click_trigger("10220387"),this.cancel()},t.show()}()):window.webkitNotifications&&e.needAsk&&(e.showAsk&&e.showAsk(),window.webkitNotifications.requestPermission(a))}function o(e,t){t?c.click_trigger("10220311"):c.click_trigger("10220384"),function(){var t=new Notification(e.title,{renotify:!0,body:e.body,icon:e.pic,tag:e.tag});t.onclick=function(){l.setItem("sohu_push_cv",!0),window.open(e.href,"_blank"),this.close()},t.onclose=function(){console.log("被关掉了"),c.click_trigger("10220387"),this.close()}}()}var r=(i(234),i(216)),c=new r,l=window.localStorage||!1;e.exports={windowsNotify:s,ifNotifyPermission:n}},function(e,t){var i=i||function(e){var t=e.document,i=e.navigator,n=i.userAgent.toLowerCase(),s=t.documentMode,a=e.chrome||!1,o={agent:n,isIE:/msie/.test(n),isGecko:n.indexOf("gecko")>0&&n.indexOf("like gecko")<0,isWebkit:n.indexOf("webkit")>0,isStrict:"CSS1Compat"===t.compatMode,supportSubTitle:function(){return"track"in t.createElement("track")},supportScope:function(){return"scoped"in t.createElement("style")},ieVersion:function(){try{return n.match(/msie ([\d.]+)/)[1]||0}catch(e){return console.log("error"),s}},operaVersion:function(){try{if(e.opera)return n.match(/opera.([\d.]+)/)[1];if(n.indexOf("opr")>0)return n.match(/opr\/([\d.]+)/)[1]}catch(t){return console.log("error"),0}},versionFilter:function(){if(1===arguments.length&&"string"==typeof arguments[0]){var e=arguments[0];return start=e.indexOf("."),start>0&&(end=e.indexOf(".",start+1),-1!==end)?e.substr(0,end):e}return 1===arguments.length?arguments[0]:0}};try{o.type=o.isIE?"IE":e.opera||n.indexOf("opr")>0?"Opera":n.indexOf("chrome")>0?"Chrome":e.openDatabase?"Safari":n.indexOf("firefox")>0?"Firefox":"unknow",o.version="IE"===o.type?o.ieVersion():"Firefox"===o.type?n.match(/firefox\/([\d.]+)/)[1]:"Chrome"===o.type?n.match(/chrome\/([\d.]+)/)[1]:"Opera"===o.type?o.operaVersion():"Safari"===o.type?n.match(/version\/([\d.]+)/)[1]:"0",o.shell=function(){if(n.indexOf("maxthon")>0)return o.version=n.match(/maxthon\/([\d.]+)/)[1]||o.version,"傲游浏览器";if(n.indexOf("qqbrowser")>0)return o.version=n.match(/qqbrowser\/([\d.]+)/)[1]||o.version,"QQ浏览器";if(n.indexOf("se 2.x")>0)return"搜狗浏览器";if(a&&"Opera"!==o.type){var t=e.external,i=e.clientInformation,s=i.languages;if(t&&"LiebaoGetVersion"in t)return"猎豹浏览器";if(n.indexOf("bidubrowser")>0)return o.version=n.match(/bidubrowser\/([\d.]+)/)[1]||n.match(/chrome\/([\d.]+)/)[1],"百度浏览器";if(o.supportSubTitle()&&void 0===s){var r=Object.keys(a.webstore).length;return r>1?"360极速浏览器":"360安全浏览器"}return"Chrome"}return o.type},o.name=o.shell(),o.version=o.versionFilter(o.version)}catch(r){console.log("error")}return{client:o}}(window);e.exports=i},function(e,t){var i=window.localStorage||!1,n={outTime:function(e){if(!i||!e)return!1;if(!i[e])return!0;var t=(new Date).getTime(),n=new Date(parseInt(i[e],10)).getTime();return!n||t-n>0},setTime:function(e){i[e]=new Date(this.getLocalTime(1)).getTime()},getLocalTime:function(e){var t,i,n,s,a;return s=(new Date).getTime(),a=new Date(s+864e5*e),t=a.getFullYear(),i=a.getMonth()+1,n=a.getDate(),a=t+"-"+i+"-"+n},getTomorrowTime:function(){return new Date(this.getLocalTime(1)).getTime()}};e.exports=n},function(e,t){e.exports='\n<h3>请点击上方 <em>[允许]</em> 订阅搜狐体育最热新闻</h3>\n<a href="javascript:void(0);" target="_blank" class="pop-news-close"></a>\n<div class="pop-news-cont">\n    <div class="pic">\n        <a href="<%=link%>" target="_blank">\n            <img src="<%=imageUrl%>" alt="" />\n        </a>\n    </div>\n    <h4><a href="<%=link%>" target="_blank"><%=brief%></a></h4>\n    <p><a href="<%=link%>" target="_blank">www.sohu.com</a></p>\n</div>'},function(e,t,i){var n=i(238),s=i(48),a=i(114),o=i(239),r=i(241),c=i(243),l=i(244),d=i(248),h=i(251),u=i(253),p=i(254),f=i(256),m=i(118),g=i(44),_=i(36),v=i(259),w=i(127),b=i(260),x=i(263),y=i(265),k=i(231);i(218);i(11),e.exports=function(e){w.set(e),+new Date>1589904e6&&+new Date<15907428e5&&new y({el:".theme-skin-wrap"}),new x({el:"#news-novelty-seek"}),new s({el:"#search",channel_id:8});var t=new l({el:'[data-role="focus-auto-main"]',focus:'[data-role="focus-auto"]'});new k({el:$("#pop-news")});var i=!1,I=!1;new u({left:"[data-role='most-site'] .btnl",right:"[data-role='most-site'] .btnr",box:"[data-role='most-site'] [data-video-box]",point:"[data-role='most-site'] [data-point]"});new p({el:"[data-role='need-play-num']"});var P=(new h({right:"[data-role='mil-news'] [data-role='switch']",box:"[data-role='mil-news'] [data-mil-box]"}),new d({el:'[data-role="yule-bobao"]'})),C=new r({model:new c({}),el:'[data-role="hot-rank"]'});C.on("ready",function(){(I=!0)&&i&&(new o("type1"),new o("type2"),new o("type3"))}),P.on("ready",function(){i=!0,I&&i&&(new o("type1"),new o("type2"),new o("type3"))}),a.load({type:"news_channel",args:{ext_data:{modelId:0}}}),m.update(),new _({el:"#head-login",mark:"news_channel",type:"other"}),new g({el:"#float-btn",data:{refreshable:!1,feedback:!0,home:!0}});var T=new f({writer1:"finance",writer2:"life",writer3:"tech"});n.init($.extend({},e,{type:"news_channel"}),{house:t}),new v({linkEv:"[data-param]",clickEv:{el:"[data-clev]",sync:[{plugin:C,el:'[data-role="hot-rank"] [data-clev]'},{plugin:P,el:'[data-role="yule-bobao"] [data-clev]'}]},linkSync:[{plugin:t,el:".content-focus-auto [data-psync]",param:"psync"},{plugin:T,el:".modGRA [data-psync]",param:"psync"}]}),new b({el:"[data-role='uav-mod'] .pic-group li",type:"news_channel"})}},function(e,t,i){var n=i(71),s=i(77),a=(i(70),!1),o={house:!1};e.exports={init:function(e,t){var i=this;this.opts=e,this.deps=t,this.thresholds=[],this.sync(e,t),a=!0,i.depsAd(e,t),i.load(e)},sync:function(e,t){var i=this;t.house.on("ready",function(){o.house=!0,i.depsAd(e,t)})},depsAd:function(e,t,i){var n=this;a&&o.house&&(n.txtAd({name:"house",channel:".content-focus-auto",focus:!1,main:!0,main_name:"focus_auto",left:!1,left_name:"health",right:!1,right_name:"teach"}),o.house=!1)},load:function(e,t){var i=this;_.each($("[data-role='god_side']"),function(t,i){t&&n($(t),"side_"+(i+1),$.extend({},e,{}))}),_.each($("[data-role='god_column']"),function(t,i){if(t){n($(t),"column_"+(i+1),$.extend({},e,{}))}});var s=[{channel:".contentA",focus:!0,main:!1,main_name:"",left:!1,left_name:"",right:!1,right_name:""},{channel:".content-politics-society",focus:!1,main:!0,main_name:"politics_society",left:!0,left_name:"politics",right:!0,right_name:"society"},{channel:".content-military-culture",focus:!1,main:!0,main_name:"military_culture",left:!0,left_name:"culture",right:!0,right_name:"history"},{channel:".content-business-finance",focus:!1,main:!0,main_name:"business_finance",left:!0,left_name:"stock",right:!0,right_name:"finance"},{channel:".content-sports-yule",focus:!1,main:!0,main_name:"sports_yule",left:!1,left_name:"",right:!1,right_name:""},{channel:".content-fashion-life",focus:!1,main:!0,main_name:"fashion_life",left:!0,left_name:"health",left_name2:"food",right:!0,right_name:"teach",right_name2:"travel"},{channel:".content-it-digital",focus:!1,main:!0,main_name:"it_digital",left:!1,left_name:"health",right:!1,right_name:"teach"}];_.each(s,function(e,t){i.txtAd(e)})},txtAd:function(e){var t=$(e.channel).find(".focus-news .list16:last li:last"),i=$(e.channel).find(".main-modA .list16:last li:last"),n=$(e.channel).find(".main-modB .main-left .list16:last li:last"),s=$(e.channel).find(".main-modB .main-right .list16:last li:last");if(e.focus&&t.size()&&this.pushAd(t,"focus"),e.main&&i.size()&&this.pushAd(i,e.main_name),e.left&&n.size()&&this.pushAd(n,e.left_name),e.right&&s.size()&&this.pushAd(s,e.right_name),".content-fashion-life"==e.channel){var a=$(e.channel).find(".main-modC .main-left .list16:last li:last"),o=$(e.channel).find(".main-modC .main-right .list16:last li:last");this.pushAd(a,e.left_name2),this.pushAd(o,e.right_name2)}},pushAd:function(e,t){var i=this.opts;if(e.size()&&t){var s=e.html();e.html("广告<em style='color:#D0D0D0'> | </em><span></span><span style='margin-left:10px'></span>");var a="txt_"+t,o=e.find("span");o.eq(0).size()&&n(o.eq(0),a+"_1",$.extend({},i,{empty_ad:function(){e.html(s)}})),o.eq(1).size()&&n(o.eq(1),a+"_2",$.extend({},i,{}))}},cutOver:function(e){var t=this.thresholds,i=s[this.pageType()][e]||{},n=i.ad_id||"";if(t.length>0&&a){for(var o=0,r=t.length;o<r;o++)if(t[o].adslot_id==n)return t[o].ifNew||!1;return!1}return!1},pageType:function(){var e=this.opts;return e&&e.sub_id&&e.channel_id?"sub":e&&e.news_id&&e.channel_id?"article":e&&"dsy"==e.type?"pic_collection":e&&e.tag_id&&e.channel_id?"tag":e&&"news_channel"==e.type?"news_channel":e&&e.channel_id?"channel":e&&"v3"==e.type?"v3_index":"index"}}},function(e,t,i){var n=i(240),s={type1:{width:320,height:180,wrapper:"[data-video-wrapper='video1']",trigger:"[data-video-clicker='video1']",close:!1},type2:{wrapper:"[data-video-wrapper='video2']",trigger:"[data-video-clicker='video2']",width:410,height:320,close:!1},type3:{wrapper:"[data-video-wrapper='video3']",trigger:"[data-video-clicker='video3']",width:420,height:300,close:"[data-video-close='video3']",closeWrapper:"[data-video-frame='video3']",wrapperTitle:"[data-video-title='video3']"}},a=function(e){this.type=e,this.init()};a.prototype={init:function(){return new n(s[this.type])}},e.exports=a},function(e,t){var i=function(e){this.wrapper=$(e.wrapper),this.trigger=$(e.trigger),this.width=e.width,this.height=e.height,this.frame=!1,this.title=!1,this.close=e.close||!1,this.close&&(this.frame=$(e.closeWrapper),this.title=$(e.wrapperTitle)),this.init()};i.prototype={init:function(){var e=this;this.trigger.each(function(t,i){var n=$(this).data("vid"),s=$(this).data("title"),a=$(this).data("site")||1;$(this).on("click",function(t){t.preventDefault(),e.show(n,s,a)})}),this.close&&$(this.close)&&$(this.close).on("click",function(t){t.preventDefault(),e.closeVideo()})},closeVideo:function(){this.frame.hide(),this.wrapper.html("")},show:function(e,t,i){2==i?this.wrapper.html(showVrsPlayer({bid:e,width:this.width,height:this.height,autoplay:"true",getHTML:1,vars:{api_key:"54a6e8af2ad333207e75bb1bb9234950"}})):this.wrapper.html(showVrsPlayer({vid:e,width:this.width,height:this.height,autoplay:"true",getHTML:1,vars:{api_key:"54a6e8af2ad333207e75bb1bb9234950"}})),this.close&&(this.title.html(t),this.frame.fadeIn())}},e.exports=i},function(e,t,i){function n(){window.sohuSpm&&"function"==typeof window.sohuSpm.domDidChange&&window.sohuSpm.domDidChange()}var s=i(18),a=s.subString;e.exports=Backbone.View.extend({template:_.template(i(242)),data:{},model:null,events:{"mouseenter .rank1":"toggleTag","click .rank1":"toggleTag","mouseenter .rank2":"toggleTag","click .rank2":"toggleTag"},initialize:function(e){var t=this;this.model=e.model,this.model.on("sync",function(e){t.data=e,t.fixData(),t.render(),t.trigger("ready")}),this.model.on("error",function(e){console.log("hotrank",e),t.trigger("ready")}),this.model.fetch()},render:function(){this.$el.html(this.template(this.data))},fixData:function(){for(var e=this.data,t=0,i=Math.max(e.dayVideos.length,e.weekVideos.length,6);t<i;t++)e.dayVideos[t]&&(e.dayVideos[t].sub_name=a(e.dayVideos[t].tv_name,26)),e.weekVideos[t]&&(e.weekVideos[t].sub_name=a(e.weekVideos[t].tv_name,26));this.data=e},toggleTag:function(e){$(e.currentTarget).hasClass("rank1")?($(".rank2").removeClass("cur"),$(".rank1").addClass("cur"),$(".sn-rank2").hide(),$(".sn-rank1").show(),n()):$(e.currentTarget).hasClass("rank2")&&($(".rank1").removeClass("cur"),$(".rank2").addClass("cur"),$(".sn-rank1").hide(),$(".sn-rank2").show(),n())}})},function(e,t){e.exports='<div class="titleR"><span class="tt">热门新闻</span>\n    <ul class="tm">\n        <li class="rank1 cur">日榜</li>\n        <li class="rank2 end">周榜</li>\n    </ul>\n</div>\n<%if(dayVideos.length > 0){%>\n<div class="sn-list sn-rank1" data-spm="hotvideo-day">\n    <ul>\n    <%for (var i = 0, len = dayVideos.length; i < (len<6?len:6); i++) {%>\n        <li data-spm-type="resource"><em class="sn <%=i<3?\'sc\':\'\'%>"><%=i+1%>\n        </em><a data-clev="<%=i+10220176%>" data-site="2" data-video-clicker=\'video3\' data-vid="<%=dayVideos[i].vid%>" data-title="<%=dayVideos[i].tv_name%>" title="<%=dayVideos[i].tv_name%>" href="javascript:void(0)" target="_blank"><i class="icon icon-video"></i><%=dayVideos[i].sub_name%></a><em class="com-num"><a data-clev="<%=i+10220176%>" data-site="1" data-video-clicker=\'video3\' data-vid="<%=dayVideos[i].vid%>" data-title="<%=dayVideos[i].tv_name%>" title="<%=dayVideos[i].tv_name%>" href="javascript:void(0)" target="_blank"><%=dayVideos[i].tv_count%> 播放</a></em></li>\n    <%}%>\n    </ul>\n</div>\n<%}%>\n<%if(weekVideos.length > 0){%>\n<div class="sn-list sn-rank2" style="display: none;" data-spm="hotvideo-week">\n    <ul>\n    <%for (var i = 0, len = weekVideos.length; i < (len<6?len:6); i++) {%>\n        <li data-spm-type="resource"><em class="sn <%=i<3?\'sc\':\'\'%>"><%=i+1%></em>\n            <a data-clev="<%=i+10220182%>" data-site="2" data-video-clicker=\'video3\' data-vid="<%=weekVideos[i].vid%>" data-title="<%=weekVideos[i].tv_name%>" title="<%=weekVideos[i].tv_name%>" href="javascript:void(0)" target="_blank"><i class="icon icon-video"></i><%=weekVideos[i].sub_name%></a><em class="com-num"><a data-clev="<%=i+10220182%>" data-site="1e" data-video-clicker=\'video3\' data-vid="<%=weekVideos[i].vid%>" data-title="<%=weekVideos[i].tv_name%>" title="<%=weekVideos[i].tv_name%>" href="javascript:void(0)" target="_blank"><%=weekVideos[i].tv_count%> 播放</a></em></li>\n    <%}%>\n    </ul>\n</div>\n<%}%>'},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.dayRankUrl="//tv.sohu.com/frag/vrs_inc/phb_media_301_day_10_simple.js",this.weekRankUrl="//tv.sohu.com/frag/vrs_inc/phb_media_301_week_10.js",this.moreRankUrl="//tv.sohu.com/frag/vrs_inc/phb_media_212_day_20.js"},fetch:function(){var e=this;e.data={},window.onRankLoaded=function(t){e.getData(t)},$.getScript(e.dayRankUrl,function(e){}),$.getScript(e.weekRankUrl,function(e){}),this.timeout=setTimeout(function(){e.trigger("error","超时")},3e3)},getData:function(e){var t=this;"phb_media_301_day_10_simple"==e.rankname?t.data.dayVideos=e.videos:"phb_media_301_week_10"==e.rankname&&(t.data.weekVideos=e.videos),t.data.dayVideos&&t.data.dayVideos.length>0&&t.data.weekVideos&&t.data.weekVideos.length>0&&(t.trigger("sync",t.data),clearTimeout(t.timeout))}})},function(e,t,i){var n=i(245),s=i(118),a=i(18),o=a.subString;e.exports=Backbone.View.extend({template:_.template(i(246)),focus_template:_.template(i(247)),data:{},model:new n,events:{},initialize:function(e){var t=this;this.$focus=$(e.focus),this.model.on("sync",function(e){t.renderFocus(e[0]),t.data.result=t.fixData(e),t.render(),t.trigger("ready")}),this.model.fetch()},render:function(){this.$el.html(this.template(this.data))},renderFocus:function(e){if(e){var t={};t.all={},t.all.idea=e.idea_id,t.all.url=e.link,t.all.img=e.resource_map&&e.resource_map.pic_text&&e.resource_map.pic_text.url||"//statics.itc.cn/web/static/images/pic/preload_2_1.png",t.all.txt=o(e.resource_map&&e.resource_map.pic_text&&e.resource_map.pic_text.despriction||"",37),console.log(t),this.$focus.html(this.focus_template(t)),s.update()}},fixData:function(e){for(var t,i,n,s,a=[],o=1,r=e.length;o<r;o++)i=e[o].link||"",n=e[o].resource_map&&e[o].resource_map.text&&e[o].resource_map.text.despriction||"",s=e[o].idea_id||"0",t={url:i,title:n,idea:s},a.push(t);return a}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){var t=window.sohu_IP_Loc||"CN110000";this.url="//adv-sv-show.focus.cn/be_fox_say3?adposId=85&cityCode="+t},fetch:function(){var e=this;$.ajax({url:this.url,type:"GET",dataType:"jsonp",success:function(t){200==t.code&&e.trigger("sync",t.data.list)},error:function(t){console.log("focus",t),e.trigger("error",t)}})}})},function(e,t){e.exports='<% if(result.length > 0) {%>\n<div class="list16">\n    <ul>\n        <% for (var i = 0, len = result.length; i < (len<5?len:5); i++) {%>\n            <li><a data-pos="focus_be_pos" data-idea="<%=result[i].idea%>" data-psync="_f=index_chan08house_carnews_<%=i%>" title="<%=result[i].title%>" href="<%=result[i].url%>" target="_blank">\n                <%if(i==0){%><strong><%=result[i].title%></strong><%}else{%><%=result[i].title%><%}%>\n            </a></li>\n        <% } %>\n    </ul>\n</div>\n<% } %>\n<% if(result.length > 5) {%>\n<div class="list16">\n    <ul>\n        <% for (var i = 5, len = result.length; i < len; i++) {%>\n            <li><a data-pos="focus_be_pos" data-idea="<%=result[i].idea%>" data-psync="_f=index_chan08house_carnews_<%=i%>" title="<%=result[i].title%>" href="<%=result[i].url%>" target="_blank">\n                <%if(i==5){%><strong><%=result[i].title%></strong><%}else{%><%=result[i].title%><%}%>\n            </a></li>\n        <% } %>\n    </ul>\n</div>\n<% } %>'},function(e,t){e.exports='<% if(all) {%>\n\n<a data-pos="focus_be_pos" data-idea="<%=all.idea%>" data-psync="_f=index_chan08house_carfocus_0" href="<%=all.url%>" target="_blank">\n    <img src="<%=all.img%>" alt="">\n    <span class="linear-box video-txt">\n        <em class="linear-bg"></em>\n        <em class="linear-txt"><%=all.txt%></em>\n    </span>\n</a>\n<% } %>'},function(e,t,i){var n=i(249);e.exports=Backbone.View.extend({template:_.template(i(250)),data:{},model:new n,events:{},initialize:function(e){var t=this;this.$focus=$(e.focus),this.model.on("sync",function(e){t.data=e,t.render(),t.trigger("ready")}),this.model.on("error",function(e){t.trigger("ready")}),this.model.fetch()},render:function(){this.$el.html(this.template(this.data))}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.url="//api.my.tv.sohu.com/v2/videos.do?uid=341014877"},fetch:function(){var e=this;$.ajax({url:this.url,type:"GET",dataType:"jsonp",success:function(t){t.errorCode&&500==t.errorCode?e.trigger("error",t.message):e.trigger("sync",t)},error:function(t){console.log("yule",t),e.trigger("error",t)}})}})},function(e,t){e.exports='<% if(list.length > 0) {%>\n<div class="list16">\n    <ul>\n        <% for (var i = 0, len = list.length; i < (len<6?len:6); i++) {%>\n            <li><a data-clev="<%=i+10220208%>" href="javascript:void(0)" data-site="2" data-video-clicker=\'video3\' data-vid="<%=list[i].id%>" data-title="<%=list[i].title%>" title="<%=list[i].title%>" target="_blank"><i class="icon icon-video"></i>\n                <%if(i==0){%><strong><%=list[i].title%></strong><%}else{%><%=list[i].title%><%}%>\n            </a></li>\n        <% } %>\n    </ul>\n</div>\n<% } %>'},function(e,t,i){function n(e){this.$tabRight=$(e.right),this.$boxs=$(e.box),this.store=new s({index:0,len:this.$boxs.size()}),this.init()}var s=i(252),a=i(118);n.prototype={init:function(){var e=this;this.$tabRight.on("click",function(){e.store.next(),e.changeBox(e.store.index)})},changeBox:function(e){this.$boxs.hide(),this.$boxs.eq(e).fadeIn(),a.update()}},e.exports=n},function(e,t){function i(e){this.index=e.index||0,this.max=e.len}i.prototype={next:function(){this.index=this.index+1,this.index==this.max&&(this.index=0)},prev:function(){this.index=this.index-1,this.index<0&&(this.index=this.max-1)},check:function(e){this.index=e%this.max}},e.exports=i},function(e,t,i){function n(e){this.$tabLeft=$(e.left),this.$tabRight=$(e.right),this.$boxs=$(e.box),this.$point=$(e.point),this.store=new s({index:0,len:this.$boxs.size()}),this.init()}var s=i(252),a=i(118);n.prototype={init:function(){var e=this;this.$tabLeft.on("click",function(){e.store.prev(),e.changeBox(e.store.index)}),this.$tabRight.on("click",function(){e.store.next(),e.changeBox(e.store.index)}),this.$boxs.parent().on("mouseover",function(){e.$tabLeft.show(),e.$tabRight.show()}),this.$boxs.parent().on("mouseout",function(){e.$tabLeft.hide(),e.$tabRight.hide()})},changeBox:function(e){this.$boxs.hide(),this.$point.removeClass("cur"),this.$boxs.eq(e).fadeIn(),this.$point.eq(e).addClass("cur"),a.update(),window.sohuSpm&&"function"==typeof window.sohuSpm.domDidChange&&window.sohuSpm.domDidChange({target:"video-list"})}},e.exports=n},function(e,t,i){function n(e){this.$el=$(e.el),this.init()}var s=i(255);n.prototype={init:function(){var e=[],t=this;this.$el.each(function(t,i){$(this).data("vid")&&e.push($(this).data("vid"))}),this.model=new s({ids:e}),this.model.on("sync",function(e){t.$el.each(function(t,i){for(var n=$(this).data("vid"),s=0,a=e.length;s<a;s++)if(e[s].id==n){var o=parseInt(e[s].count,10);o/1e5>=1&&(o=Math.floor(o/1e4)+"万"),$(this).html(o)}})}),this.model.on("error",function(){t.$el.hide()}),this.model.fetch()}},e.exports=n},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){var t=e.ids.join("|");this.url="//vstat.v.blog.sohu.com/dostat.do?method=getVideoPlayCount&v="+t+"&rt=jsonp&n=playnum"},fetch:function(){var e=this;$.ajax({url:this.url,type:"GET",dataType:"jsonp",jsonpCallback:"playnum",success:function(t){e.trigger("sync",t)},error:function(t){e.trigger("error",t)},timeout:3e3})}})},function(e,t,i){var n=i(257),s=i(118),a=i(18),o=a.subString;e.exports=Backbone.View.extend({template:_.template(i(258)),data:{},model:new n,events:{},initialize:function(e){var t=this;this.writer1=e.writer1,this.writer2=e.writer2,this.writer3=e.writer3,this.model.on("sync",function(e){t.data=e,t.render1(),t.render2(),t.render3(),s.update(),t.trigger("ready")}),this.model.on("error",function(e){t.trigger("ready")}),this.model.fetch()},fixData:function(e,t){if(e){for(var i=0,n=e.length;i<n;i++){if(2==t&&0==i)var s=e[i].articles.slice(0,3);else var s=e[i].articles.slice(0,2);for(var a=0,r=s.length;a<r;a++)s[a].sub_title=o(s[a].title,22),s[a].pic=s[a].pic.replace(/\i\.mp\.itc\.cn/g,"i.mp.itc.cn/c_zoom,w_100,h_67").replace(/cdn\.sohucs\.com\/images/g,"cdn.sohucs.com/c_fill,w_100,h_66,g_faces/images");e[i].articles=s}return e}},render1:function(){$("[data-writer="+this.writer1+"]").html(this.template({spmStarter:1,data:this.fixData(this.data[this.writer1],1),param:"_f=index_chan08ecorecom_"}))},render2:function(){$("[data-writer="+this.writer2+"]").html(this.template({spmStarter:5,data:this.fixData(this.data[this.writer2],1),param:"_f=index_chan08liferecom_"}))},render3:function(){$("[data-writer="+this.writer3+"]").html(this.template({spmStarter:2,data:this.fixData(this.data[this.writer3],2),param:"_f=index_chan08techrecom_"}))}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.url="//v2.sohu.com/public-api/originalAuthor"},fetch:function(){var e=this;$.ajax({url:this.url,type:"GET",dataType:"jsonp",success:function(t){e.trigger("sync",t)},error:function(t){e.trigger("error",t)}})}})},function(e,t){e.exports='\n<%if (data && data.length > 0) {%>\n<% for(var i = 0, len = data.length; i < len; i++) { %>\n<%if (data[i].articles.length > 0) {%>\n<div class="modGRA bordR clearfix">\n    <div class="titleR" data-spm="side-mp<%=i + spmStarter%>-nav"><a href="<%=data[i].personalPage%>" target="_blank" title="<%=data[i].authorName%>"><span class="tt"><%=data[i].authorName%></a></span></div>\n    <div data-spm="side-mp<%=i + spmStarter%>-news">\n        <% for(var j = 0, leng = data[i].articles.length < 5 ? data[i].articles.length : 5; j < leng; j++){ %>\n        <div class="pic-text clearfix" data-spm-type="resource">\n            <div class="pic">\n                <a data-psync="<%=param+i+\'_\'+j%>" href="<%=data[i].articles[j].url%>" target="_blank" title="<%=data[i].articles[j].title%>"><img src="//statics.itc.cn/web/static/images/pic/preload.png" data-src="<%=data[i].articles[j].pic%>" alt=""></a>\n            </div>\n            <h4><a data-psync="<%=param+i+\'_\'+j%>" href="<%=data[i].articles[j].url%>" target="_blank" title="<%=data[i].articles[j].title%>"><%=data[i].articles[j].sub_title%></a></h4>\n        </div>\n        <%}%>\n    </div>\n</div>\n<%}%>\n<%}%>\n<%}%>'},function(e,t,i){var n=i(216),s=new n,a=function(e){this.topEv=e.topEv||[],this.clickEv=e.clickEv||!1,this.linkEv=e.linkEv||!1,this.linkSync=e.linkSync||!1,this.news_list=[],this.unique=[],this.delay_timer=null,this.init.apply(this)};a.prototype={init:function(e){this.clickEv&&this.cvHandler(),this.linkEv&&this.fixUrl(),this.linkSync&&this.fixUrlSync()},cvHandler:function(){if(this.clickEv&&this.clickEv.el){if($(this.clickEv.el).on("click",function(){var e=$(this).data("clev");s.click_trigger(e)}),this.clickEv.sync)for(var e=0,t=this.clickEv.sync.length;e<t;e++){var i=this.clickEv.sync[e];!function(e){e.plugin.on("ready",function(){$(e.el).on("click",function(){var e=$(this).data("clev");s.click_trigger(e)})})}(i)}}},fixUrl:function(){var e=this;$(this.linkEv).each(function(t,i){var n=$(i).attr(e.linkEv.replace(/[\[\]]/g,""));$(i).one("click",function(e){var t=$(i).eq(0).attr("href"),s=/\?/g.test(t)?"&":"?";$(i).attr("href",t+s+n),e.stopPropagation()})})},fixUrlSync:function(){for(var e=0,t=this.linkSync.length;e<t;e++){var i=this.linkSync[e];!function(e){e.plugin.on("ready",function(){$(e.el).each(function(t,i){var n=$(i).data(e.param);$(i).one("click",function(e){var t=$(i).eq(0).attr("href"),s=/\?/g.test(t)?"&":"?";$(i).attr("href",t+s+n),e.stopPropagation()})})})}(i)}}},e.exports=a},function(e,t,i){var n=i(261),s=i(262),a=new s,o=i(18);e.exports=Backbone.View.extend({initialize:function(e){var t=$(e.el);"pic_collection"==e.type?this.pic_collection(t):"news_channel"==e.type&&this.news_channel(t)},news_channel:function(e){if(0!=e.size()){var t=this,i=new n({type:4});i.on("sync",function(i){i.topics[0]&&t.exChangeNewsChannel(e.eq(0),i.topics[0]),i.topics[1]&&t.exChangeNewsChannel(e.eq(1),i.topics[1])}),i.on("error",function(e){console.log("exc-hot-news",e)}),i.fetch()}},pic_collection:function(e){if(0!=e.size()){var t=this,i=new n({type:3});i.on("sync",function(i){for(var n=i&&i.topics&&i.topics.length,s=[10220401,10220458,10220402,10220459,10220403,10220460],a=0;a<n;a++)!function(n){i.topics[n]&&t.exChangePicCollection(e.eq(n),i.topics[n],s[n])}(a)}),i.on("error",function(e){console.log("exc-hot-news",e)}),i.fetch()}},exChangeNewsChannel:function(e,t){e.find("a")[0].href=t.url,e.find("a").attr("title",t.title),e.find("span").text(o.subString(t.title,19)),e.find("a img")[0].src="//0d077ef9e74d8.cdn.sohucs.com/c_fill,w_130,h_86,q_70,g_faces/"+t.img},exChangePicCollection:function(e,t,i){e.find("a")[0].href=t.url,e.find("a").attr("title",t.title),e.find("a").on("click",function(){a.cv_trigger({id:i})}),e.find("span").text(o.subString(t.title,27)),e.find("a img")[0].src="//0d077ef9e74d8.cdn.sohucs.com/c_fill,w_150,h_100,q_70,g_faces/"+t.img}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){3==e.type?(this.callbackName="jinrirp_callback_qQnVS1l_png",this.url="//e80c500186e5e.cdn.sohucs.com/qQnVS1l_png"):4==e.type&&(this.callbackName="jinrirp_callback_qH9LY9X_jpg",this.url="//0d077ef9e74d8.cdn.sohucs.com/qH9LY9X_jpg")},fetch:function(){var e=this;$.ajax({url:this.url,type:"GET",dataType:"jsonp",jsonpCallback:this.callbackName,success:function(t){e.trigger("sync",t)},error:function(t){e.trigger("error",t)},timeout:3e3})}})},function(e,t,i){var n=i(4),s=i(7),a=s.get("SUV"),o=function(e,t){e=e||"ev";var i="//pv.sohu.com/action.gif?";"ev"==e?i+="actionId="+t.id+"&SUV="+a:"cv"==e?i+="actionId="+t.id+"&SUV="+a:"sv"==e&&(i+="actionId="+t.id+"&SUV="+a),$.getScript(i,function(){})};e.exports=n.extend({init:function(){},cv_trigger:function(e){o("cv",e)},ev_trigger:function(e){o("ev",e)},sv_trigger:function(e){o("sv",e)}})},function(e,t,i){function n(e){return[e.resourceType||"",e.authorId||"",e.id||"",e.pcm||"",e.type||"",""].join("|")}e.exports=Backbone.View.extend({template:_.template(i(264)),initialize:function(){this.getData()},getData:function(){var e="news.sohu.com"===location.host||"pre.beta.www.sohu.com"===location.host,t=e?"//v2.sohu.com/integration-api/mix/region/":"//d1.m.sohu.com/integration-api/mix/region/",i=e?11353:1490,s=this;$.ajax({url:[t,i,"?secureScore=50&adapter=pc"].join(""),type:"GET",dataType:"jsonp",success:function(e){if("success"===e.message&&e.data&&e.data.length&&e.data[0].multiData&&e.data[0].multiData.length>=2){for(var t=e.data[0].multiData.slice(0,2),i=$(document.createDocumentFragment()),a=0;a<2;a++){var o=$.extend({},e.data[0],t[a]),r=s.template({data:o,isEnd:1===a,
pcm:n(o)});i.append(r)}$("#news-novelty-seek .content").append(i)}else if("success"===e.message&&e.data&&e.data.length>=2){for(var t=e.data.slice(0,2),i=$(document.createDocumentFragment()),a=0;a<2;a++){var o=t[a],r=s.template({data:o,isEnd:1===a,pcm:n(o)});i.append(r)}$("#news-novelty-seek .content").append(i)}else $("#news-novelty-seek").hide()},error:function(){$("#news-novelty-seek").hide()}})}})},function(e,t){e.exports='<li <%if (isEnd) {%> class="end" <%}%> <%if (pcm) {%> data-spm-content="<%= pcm %>" <%}%> data-spm-type="resource">\n    <a data-clev="10220405" title="" href="<%= data.url %>" target="_blank">\n        <img src="<%= data.images[0] %>" alt="">\n        <span class="txt"><%= data.title %></span>\n    </a>\n</li>'},function(e,t,i){i(266);var n=i(7);e.exports=Backbone.View.extend({events:{"click .close-wrap":"removeTheme"},initialize:function(e){this.$el=$(e.el),this.addTheme()},addTheme:function(){var e=n.get("closeTheme"),t=$(".news-index");(e=!1)||(t.addClass("festival-twomeeting"),t.find(".main-news-wrap").removeClass("main-news-wrap").css({width:"1200px",margin:"0 auto"}),this.$el.show())},removeTheme:function(){var e=$(".news-index");n.set("closeTheme",!0,{expires:1.5}),this.$el.hide(),e.removeClass("festival-twomeeting")}})},function(e,t){},function(e,t,i){var n=i(268),s=i(36),a=i(42),o=i(16),r=i(44),c=i(48),l=i(59),d=i(62),h=i(66),u=i(269),p=i(114),f=i(124),m=i(201),g=i(270),_=i(271),v=i(127),w=i(274),b=i(260),x=i(231);e.exports=function(e){console.log("参数",e),v.set(e),new c({el:$("#search"),scene:"ARTICLE",channel_id:e.channel_id,d_val:$("#news-recommend-nav").find("ul li").eq(1).text()});var t=new g({el:$(".dsy-wrap")});new _({el:$(".dsy-wrap .zan-link")}),new s({el:"#head-login",mark:"pic_collections",type:"other"}),new d({el:"#sogou-words",model:new h({title:e.title.replace(/\s+/g,""),content:$(".article").text().replace(/\s+/g,""),url:window.location.href})});new r({el:"#float-btn",data:{refreshable:!1,home:!0,feedback:!0}});new x({el:$("#pop-news"),needAsk:17==e.channel_id});var i=new a({news_id:e.news_id});i.on("sync",function(e){$("[data-role='pv']").html(new o(e).format())}),i.fetch(),new l({el:"#uninterested",data:{opts:e}}),new m({el:"[data-role='hot-news']",model:new f({scene:"HOMEPAGE"})}),n.init({channel_id:e.channel_id,news_id:e.news_id,subid:e.media_id,type:"dsy"},{pic_collection:t});new u({article_type:5,ev_list:$("[data-ev]"),cv_list:$("[data-cv]"),sv_list:$("[data-sv]")});$("#comment_area").on("comment:ready",function(e,t){$('.func [data-role="comment-count"]').html(parseInt(t.cmt_sum)||0)}),p.load({type:"pic_collections",channel_id:e.channel_id,args:{cms_id:"mp_"+e.news_id,media_id:e.media_id,title:e.title,url:window.location.href.replace(/\s+/g),channel_id:e.channel_id,news_id:"mp_"+e.news_id,dsy:!0}}),w(1),t.on("exchange",function(e){w(e)}),new b({el:".pic-last .pic-group li",type:"pic_collection"})}},function(e,t,i){var n=i(71),s=i(77),a=(i(70),!1),o=!1;e.exports={init:function(e,t){var i=this;this.opts=e,this.deps=t,this.thresholds=[],this.sync(e,t),a=!0,i.depsAd(e,t),i.load(e)},sync:function(e,t){var i=this;t.pic_collection.on("showMoreCollection",function(){o=!0,i.depsAd(e,t)})},depsAd:function(e,t,i){a&&o&&(_.each($(".godR"),function(t,i){0==i&&t&&n($(t),"side_"+(i+1),$.extend({},e,{}))}),o=!1)},load:function(e){_.each($(".godR"),function(t,i){0!=i&&t&&n($(t),"side_"+(i+1),$.extend({},e,{}))}),_.each($("[data-role='god_column']"),function(t,i){t&&n($(t),"column_"+(i+1),$.extend({},e,{}))})},cutOver:function(e){var t=this.thresholds,i=s[this.pageType()][e]||{},n=i.ad_id||"";if(t.length>0&&a){for(var o=0,r=t.length;o<r;o++)if(t[o].adslot_id==n)return t[o].ifNew||!1;return!1}return!1},pageType:function(){var e=this.opts;return e&&e.sub_id&&e.channel_id?"sub":e&&"dsy"==e.type?"pic_collection":e&&e.news_id&&e.channel_id?"article":e&&e.tag_id&&e.channel_id?"tag":e&&"news_channel"==e.type?"news_channel":e&&e.channel_id?"channel":e&&"v3"==e.type?"v3_index":"index"}}},function(e,t,i){var n=i(63),s=i(262),a=new s,o=i(5),r=function(e){this.article_type=e.article_type||1,this.ev_list=e.ev_list||[],this.cv_list=e.cv_list||[],this.sv_list=e.sv_list||[],this.evInterval=null,this.init.apply(this),this.evHandler(),this.svTrigger()};r.prototype={init:function(){var e=this;this.ev_list.length>0&&(this.evInterval=setInterval(function(){e.evHandler()},300)),this.cvHandler(),this.svHandler()},evHandler:function(){var e=this.ev_list.length,t=[];if(0==e)return void clearInterval(this.evInterval);for(var i=0;i<e;i++){var s=this.ev_list[i];n($(s))?a.ev_trigger({id:$(s).data("ev")}):t.push(s)}this.ev_list=t},cvHandler:function(){for(var e=this.cv_list.length,t=0;t<e;t++){var i=this.cv_list[t];!function(){var e=$(i).data("cv");$(i).on("click",function(){a.cv_trigger({id:e})})}()}},svHandler:function(){for(var e=this.sv_list.length,t=0;t<e;t++){var i=this.sv_list[t];!function(){var e=$(i).data("sv");$(i).on("click",function(t){var i=o.get("dsy_sv")&&o.get("dsy_sv").split(",")||[];i.push(e),o.set("dsy_sv",i.join(","))})}()}},svTrigger:function(){if(o.get("dsy_sv")){for(var e=o.get("dsy_sv").split(","),t=e.length,i=0;i<t;i++)a.sv_trigger({id:e[i]});o.remove("dsy_sv")}}},e.exports=r},function(e,t){e.exports=Backbone.View.extend({data:{currentPage:1,totalPage:0,showDescText:!0,showDescPlayText:!0,showLargeImg:!1,showPlayImg:!1,bigCurrentPage:1,pausePlay:!1,timer:0,playDir:0,picGroupPage:1,picGroupTotalPage:1,showMoreDescText:!1,isFirstLogout:!0,INTER_TIME:2500,ANIMATE_INTER_TIME:300,PIC_GROUP_LEN:7,PIC_WIDTH:130,LEAVE_OUT_HEIGTH:44,FIR_CLICK_PAGE:!0,ZOOM_PARAM:"c_zoom,h_50",TURN_TIME:100},render:{},events:{"click .pre-img-btn":"preImg","click .next-img-btn":"nextImg","mouseenter .pre-img-btn,.next-img-btn":"showPicSwitchBtnFunc","mouseleave .pre-img-btn,.next-img-btn":"hidePicSwitchBtnFunc","click .pic-main .pic-list .pic":"getCurImg","click .restart-link":"restartLookOver","click .btn-original":"showLargeImgFunc","click .original-close":"closeLargeImgFunc","click .btn-slide":"showPlayImgFunc","click .slide-quit":"hidePlayImgFunc","click .slide-explain .btn-fold":"hideDescPlayTextFunc","click .slide-explain .btn-unfold":"showDescPlayTextFunc","click .slide-box .slide-stop":"pausePlayFunc","click .slide-box .slide-play":"restartPlayFunc","click .slide-box .btn-pre":"playPreImgFunc","click .slide-box .btn-next":"playNextImgFunc","click .pic-main .pre-pic-group":"prePicGroupFunc","click .pic-main .next-pic-group":"nextPicGroupFunc","mouseenter .pic-main .explain":"showMoreDescTextFunc","mouseleave .pic-main .explain":"hideMoreDescTextFunc","mouseenter .btn-include-text":"showHintText","mouseleave .btn-include-text":"hideHintText","mouseenter .pic-list .pic":"showHoverStyle","mouseleave .pic-list .pic":"hideHoverStyle"},initialize:function(){var e=this;e.data.totalPage=e.$el.find(".pic-main .picture").length,e.data.picGroupTotalPage=Math.ceil(e.data.totalPage/e.data.PIC_GROUP_LEN),e.$el.find(".pic-main .total,.slide-explain .total").html(e.data.totalPage),e.data.picGroupPage>=e.data.picGroupTotalPage&&this.$el.find(".pic-main .next-pic-group").addClass("unbtnl"),this.loadImg();var t=this.$el.find(".pic-main .picture img").eq(this.data.currentPage-1),i=this.$el.find(".pic-main .picture").width()-42;t.width()>i&&t.css({width:i+"px",height:"auto"});for(var n=this.$el.find(".pic-small-group .pic").length,s=0;s<n;s++){var a=this.$el.find(".pic-small-group .pic").eq(s),t=a.find("img");a.find(".bg").css({background:"url('"+t.attr("src")+"') 50% 50% no-repeat","background-size":"cover"})}$(document).bind("keyup",function(t){if(e===undefined||!e.switchLargeImg instanceof Function||!e.switchPlay instanceof Function)return!1;var i=t.keyCode||t.which;"27"==i&&(e.data.showPlayImg=!1,e.switchLargeImg()),"32"==i&&(e.data.pausePlay?e.data.pausePlay=!1:e.data.pausePlay=!0,e.switchPlay()),"37"==i&&(e.playPreImgFunc(),e.preImg()),"39"==i&&(e.playNextImgFunc(),e.nextImg())}),$(window).on("resize",function(){var t=$(window),i=t.width(),n=setInterval(function(){var s=t.width();s!==i?i=s:(e.data.showPlayImg&&(e.switchLargeImg(),e.$el.find(".slide-main .picture").width(i)),clearInterval(n))},e.data.TURN_TIME)})},loadImg:function(e){var t=this,i=this.$el.find(".pic-main .picture img"),n=i.length,s=new Image;s.onload=function(){t.$el.find(".pic-main .picture img").eq(0).attr("src",this.src),i[0].img=new Image,i[0].img.onload=function(){t.$el.find(".pic-main .picture img").eq(0).attr("src",this.src),t.$el.find(".slide-box .slide-pic .picture img").eq(0).attr("src",this.src);for(var e=1;e<n;e++)i[e].img=new Image,function(e){i[e].img.onload=function(){t.$el.find(".pic-main .picture img").eq(e).attr("src",this.src),t.$el.find(".slide-box .slide-pic .picture img").eq(e).attr("src",this.src)},i[e].img.src=i.eq(e).attr("data-url")}(e)},i[0].img.src=i.eq(0).attr("data-url")},s.src=i.eq(0).attr("data-url").replace(".com",".com/c_zoom,h_450","i")},renderCurrentImage:function(){if(this.data.currentPage>this.data.totalPage)return this.$el.find(".restart-link").removeClass("hid"),this.$el.find(".pic-main").addClass("hid").siblings(".pic-last").removeClass("hid"),this.trigger("showMoreCollection"),!1;if(this.$el.find(".restart-link").addClass("hid"),this.$el.find(".pic-main").removeClass("hid").siblings(".pic-last").addClass("hid"),this.$el.find(".pic-main .picture").addClass("hid").eq(this.data.currentPage-1).removeClass("hid"),this.$el.find(".pic-main .txt p").addClass("hid").eq(this.data.currentPage-1).removeClass("hid"),this.$el.find(".pic-main .pic-list .pic").removeClass("cur").eq(this.data.currentPage-1).addClass("cur"),this.$el.find(".pic-main .num").html(this.data.currentPage),this.data.currentPage<=1?this.$el.find(".pic-main .btn-pre").addClass("hid"):this.$el.find(".pic-main .btn-pre").removeClass("hid"),this.data.currentPage==(this.data.picGroupPage-1)*this.data.PIC_GROUP_LEN&&0===this.data.playDir&&this.prePicGroupFunc(),this.data.currentPage==this.data.picGroupPage*this.data.PIC_GROUP_LEN+1&&1===this.data.playDir&&this.nextPicGroupFunc(),this.trigger("exchange",this.data.currentPage),this.data.currentPage===this.data.bigCurrentPage&&this.data.isFirstLogout)return this.data.isFirstLogout=!1,!1;var e=this.$el.find(".pic-main .picture img").eq(this.data.currentPage-1),t=this.$el.find(".pic-main .picture").width()-42;e.width()>t&&e.css({width:t+"px",height:"auto"}),0===this.data.playDir?e.css({opacity:0,filter:"Alpha(opacity=0)"}):1===this.data.playDir&&e.css({opacity:0,filter:"Alpha(opacity=0)"}),e.animate({left:0,opacity:1,filter:"Alpha(opacity=100)"},this.data.ANIMATE_INTER_TIME,"linear")},renderCurrentPicGroup:function(){this.data.picGroupPage<=1?this.$el.find(".pic-main .pre-pic-group").addClass("unbtnl"):this.$el.find(".pic-main .pre-pic-group").removeClass("unbtnl"),this.data.picGroupPage>=this.data.picGroupTotalPage?this.$el.find(".pic-main .next-pic-group").addClass("unbtnl"):this.$el.find(".pic-main .next-pic-group").removeClass("unbtnl");var e=(this.data.picGroupPage-1)*this.data.PIC_GROUP_LEN*this.data.PIC_WIDTH;this.$el.find(".pic-main .pic-list .con").animate({left:-e+"px"},this.data.ANIMATE_INTER_TIME)},renderPlayCurrentImg:function(){var e=this.$el.find(".slide-main .picture"),t=e.find("img");if(e.removeClass("show").eq(this.data.bigCurrentPage-1).addClass("show"),this.$el.find(".slide-box .pic-number .num").html(this.data.bigCurrentPage),this.$el.find(".slide-box .pic-exp p").addClass("hid").eq(this.data.bigCurrentPage-1).removeClass("hid"),this.data.currentPage===this.data.bigCurrentPage&&this.data.isFirstLogout)return this.data.isFirstLogout=!1,!1;var i=this.$el.find(".slide-box .picture").width()-42,t=this.$el.find(".slide-box .picture img").eq(this.data.bigCurrentPage-1);t.width()>i&&t.css({width:i+"px",height:"auto"});var n=$(window).width();this.$el.find(".slide-main .picture").width(n),0===this.data.playDir?t.css({opacity:0,filter:"Alpha(opacity=0)"}):1===this.data.playDir&&t.css({opacity:0,filter:"Alpha(opacity=0)"}),t.animate({left:0,opacity:1,filter:"Alpha(opacity=100)"},this.data.ANIMATE_INTER_TIME,"linear"),this.trigger("exchange",this.data.currentPage)},renderDescText:function(){var e=this.$el.find(".pic-exp .txt"),t=e.find("p").eq(this.data.currentPage-1);if(this.data.showMoreDescText&&this.$el.find(".pic-exp .txt p").eq(this.data.currentPage-1).height()>this.data.LEAVE_OUT_HEIGTH){var i=t.height();e.stop().animate({height:i+"px"},"fast")}else e.stop().animate({height:"44px"},"fast")},switchPlay:function(){this.data.pausePlay?this.$el.find(".slide-box .slide-stop").addClass("hid").siblings(".slide-play").removeClass("hid"):this.$el.find(".slide-box .slide-stop").removeClass("hid").siblings(".slide-play").addClass("hid")},switchDescText:function(){this.data.showDescText?this.$el.find(".pic-main .explain").removeClass("explain-hid"):this.$el.find(".pic-main .explain").addClass("explain-hid"),this.data.showDescPlayText?this.$el.find(".slide-explain .btn-fold").removeClass("hid").siblings(".btn-unfold").addClass("hid").siblings(".explain").removeClass("hid"):this.$el.find(".slide-explain .btn-fold").addClass("hid").siblings(".btn-unfold").removeClass("hid").siblings(".explain").addClass("hid")},switchLargeImg:function(){this.data.showPlayImg?(this.$el.find(".slide-box").addClass("show"),this.autoPlay()):(this.renderCurrentImage(),this.$el.find(".slide-box").removeClass("show"))},switchShowLargeImg:function(){if(this.data.showLargeImg){var e=this.$el.find(".pic-main .picture").eq(this.data.currentPage-1).find("img").attr("data-url");this.$el.find(".original-box").addClass("show").find(".original-pic img").attr("src",e);var t=this.$el.find(".original-box .original-pic img"),i=this.$el.find(".original-box"),n=t.height(),s=t.width(),a=i.width(),o=i.height();n>o-40?t.height(o-40):s>a-40&&t.width(a-40)}else this.$el.find(".original-box").removeClass("show")},preImg:function(){this.data.currentPage>1&&(this.data.currentPage--,this.data.playDir=0,this.renderCurrentImage())},nextImg:function(){this.data.currentPage<this.data.totalPage?this.data.currentPage++:this.data.currentPage=this.data.totalPage+1,this.data.playDir=1,this.renderCurrentImage()},showPicSwitchBtnFunc:function(e){$(e.currentTarget).find(".icon").removeClass("hid")},hidePicSwitchBtnFunc:function(e){$(e.currentTarget).find(".icon").addClass("hid")},showHintText:function(e){$(e.currentTarget).find(".show-hint-text").removeClass("hid")},hideHintText:function(e){$(e.currentTarget).find(".show-hint-text").addClass("hid")},showHoverStyle:function(e){$(e.currentTarget).addClass("cur")},hideHoverStyle:function(e){$(e.currentTarget).removeClass("cur")},getCurImg:function(e){var t=this.$el.find(".pic-main .pic-list .pic").index(e.currentTarget)+1;t>=0&&(t<this.data.currentPage?this.data.playDir=0:this.data.playDir=1,this.data.currentPage=t,this.renderCurrentImage())},prePicGroupFunc:function(){this.data.picGroupPage>1&&(this.data.picGroupPage--,this.renderCurrentPicGroup())},nextPicGroupFunc:function(){this.data.picGroupPage<this.data.picGroupTotalPage&&(this.data.picGroupPage++,this.renderCurrentPicGroup())},restartLookOver:function(){window.location.reload()},showMoreDescTextFunc:function(){this.data.showMoreDescText=!0,this.renderDescText()},hideMoreDescTextFunc:function(){this.data.showMoreDescText=!1,this.renderDescText()},showLargeImgFunc:function(){this.data.showLargeImg=!0,this.switchShowLargeImg()},closeLargeImgFunc:function(){this.data.showLargeImg=!1,this.switchShowLargeImg()},showPlayImgFunc:function(){this.data.showPlayImg=!0,this.data.isFirstLogout=!0,this.data.bigCurrentPage=this.data.currentPage;var e=this.$el.find(".slide-box")[0];this.launchFullscreen(e)},launchFullscreen:function(e){if(e.requestFullscreen)e.requestFullscreen();else if(e.mozRequestFullScreen)e.mozRequestFullScreen();else if(e.msRequestFullscreen)e.msRequestFullscreen();else if(e.oRequestFullscreen)e.oRequestFullscreen();else if(e.webkitRequestFullscreen)e.webkitRequestFullScreen();else{this.switchLargeImg();var t=$(window).width();this.$el.find(".slide-main .picture").width(t)}},exitFullscreen:function(){document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.oRequestFullscreen?document.oCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},hidePlayImgFunc:function(){this.data.showPlayImg=!1,this.data.pausePlay=!0,this.data.isFirstLogout=!0,this.data.currentPage=this.data.bigCurrentPage,this.switchLargeImg(),this.exitFullscreen()},hideDescPlayTextFunc:function(){this.data.showDescPlayText=!1,this.switchDescText()},showDescPlayTextFunc:function(){this.data.showDescPlayText=!0,this.switchDescText()},autoPlay:function(){var e=this;e.data.bigCurrentPage=e.data.currentPage,e.data.pausePlay=!1,clearInterval(e.data.timer),e.renderPlayCurrentImg(),e.switchPlay(),e.data.timer=setInterval(function(){if(e.data.pausePlay)return!1;e.data.bigCurrentPage<e.data.totalPage?e.data.bigCurrentPage++:e.data.bigCurrentPage=1,e.data.playDir=1,e.renderPlayCurrentImg()},this.data.INTER_TIME)},pausePlayFunc:function(){this.data.pausePlay=!0,this.switchPlay()},restartPlayFunc:function(){this.data.pausePlay=!1,this.switchPlay()},playPreImgFunc:function(){this.data.bigCurrentPage>1?this.data.bigCurrentPage--:this.data.bigCurrentPage=this.data.totalPage,this.data.playDir=0,this.renderPlayCurrentImg(),this.pauseOne()},playNextImgFunc:function(){this.data.bigCurrentPage>=this.data.totalPage?this.data.bigCurrentPage=1:this.data.bigCurrentPage++,this.data.playDir=1,this.renderPlayCurrentImg(),this.pauseOne()},pauseOne:function(){var e=this;e.data.pausePlay||(e.data.pausePlay=!0,setTimeout(function(){e.data.showPlayImg&&e.$el.find(".slide-box .slide-play").hasClass("hid")&&(e.data.pausePlay=!1)},e.data.INTER_TIME))}})},function(e,t,i){var n=i(272),s=i(273);e.exports=Backbone.View.extend({data:{isLikes:!1,picId:0,model:null,modleGiveLikes:null},events:{"click .add-likes":"giveLikes"},giveLikes:function(){var e=this;if(this.data.isLikes)return!1;this.data.modleGiveLikes.on("sync",function(t){e.data.isLikes=!0,e.$el.find(".zan-icon").addClass("hid").siblings(".unzan-icon").removeClass("hid"),e.getLikesNum()}),this.data.modleGiveLikes.fetch(this.data.picId)},getLikesNum:function(){var e=this;this.data.model.on("sync",function(t){var i=t;t<=0&&(i=0),e.$el.find(".num").html(i)}),this.data.model.fetch(this.data.picId)},initialize:function(){this.data.model=new n,this.data.modleGiveLikes=new s,this.data.picId=this.$el.attr("pic-likes"),this.getLikesNum()}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.url="https://m.sohu.com/counter/picturegroup_"+e+"_like/total"},fetch:function(e){var t=this;this.init(e),$.ajax({url:this.url,type:"GET",dataType:"jsonp",success:function(e){t.trigger("sync",e)},error:function(e){t.trigger("error",e)},timeout:3e3})}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.url="https://m.sohu.com/counter/picturegroup_"+e+"_like/total/incr"},fetch:function(e){var t=this;this.init(e),$.ajax({url:this.url,type:"GET",dataType:"jsonp",success:function(e){t.trigger("sync",e)},error:function(e){t.trigger("error",e)},timeout:3e3})}})},function(e,t){e.exports=function(e){var t=function(e){return window.encodeURIComponent&&"function"==typeof encodeURIComponent?encodeURIComponent(e):window.encodeURI&&"function"==typeof window.encodeURI?window.encodeURI(e):e},i=function(){var e=/suv=(\d+);/gi.exec(document.cookie);return e&&e[1]||""};!function(){var n=escape(1e3*(new Date).getTime()+Math.round(1e3*Math.random())),s=window.screen.width,a=window.screen.height,o=t(document.referrer),r=!1,c=!1,l=document.getElementsByTagName("script");if(function(){var e=l[l.length-1],t=e&&e.src;if(!t)return!1;var i=t.split("?")[1];if(!i)return!1;-1!=i.toLowerCase().indexOf("ifr")&&(c=!0)}(),"undefined"!=typeof _focus_pv_id?r=_focus_pv_id:"undefined"!=typeof _pvinsight_id&&(r=_pvinsight_id),document.domain.indexOf(".focus.cn")>=0||document.domain.indexOf("home.sohu.com")>=0||document.domain.indexOf("ihome.sohu.com")>=0)var d=document.getElementsByTagName("head")[0],h=document.body,u=d||h,p="//pv.focus.cn/suv",f="//pv.focus.cn";else var d=document.getElementsByTagName("head")[0],h=document.body,u=d||h,p="//pv.sohu.com/suv",f="//pv.sohu.com";if(c||top.location==self.location||document.domain.indexOf(".go2map.com")>=0){var m,g=t(window.location.href);if(document.cookie.indexOf("SUV=")<0||document.cookie.indexOf("IPLOC=")<0?spv_src=p+"/":spv_src=f+"/pv.gif",m=r?spv_src+"?t?=_"+n+"_"+s+"_"+a+"_"+r+"?r?="+o+"?url?="+g+"?SUV?="+i():spv_src+"?t?="+n+"_"+s+"_"+a+"?r?="+o+"?url?="+g+"?SUV?="+i(),e&&(m+="?p?="+e),u){var _=document.createElement("script");_.src=m,u.appendChild(_)}else document.write("<script type='text/javascript' src='"+m+"'><\/script>")}}()}}]);
====================================================
====================Beautified Below================
7)
                }
            } catch (t) {
                throw console.log("初始化代码错误"), t
            }
        }(window)
}, , , function(e, t, i) {
    var n = i(4),
        s = i(5),
        a = i(7);
    "" == document.cookie && a.set("itssohu", "true", {
        domain: ".sohu.com"
    });
    var o = new SohuPassport({
            appid: 116005
        }),
        r = n.extend({
            init: function() {
                this.urls = {
                    user_info: "//v2.sohu.com/user/info/web",
                    get_captcha: "//passport.sohu.com/apiv2/picture_captcha?userid=",
                    user_new_comment: "/user/newComments/count"
                }
            },
            fetch: function() {
                var e = this;
                this._fetching || (this._fetching = !0, $.ajax({
                    dataType: "jsonp",
                    type: "get",
                    url: this.urls.user_info
                }).done(function(t) {
                    e._fetching = !1;
                    try {
                        t ? e.trigger("get:userInfo", {
                            nick: t.userName,
                            icon: t.avatar
                        }) : e.trigger("get:userInfo", {})
                    } catch (i) {
                        e.trigger("error")
                    }
                }).fail(function() {
                    e.trigger("error"), e._fetching = !1
                }))
            },
            userLogin: function(e) {
                console.log(e), o.login({
                    success: e.success,
                    error: e.error,
                    params: {
                        userid: e.userid,
                        password: e.password,
                        captcha: e.captcha,
                        persistentCookie: e.keep
                    }
                })
            },
            userCaptcha: function() {
                return o.getLoginPicture()
            },
            mobileLogin: function(e) {
                console.log("手机号登录", e), o.mobileLogin({
                    success: e.success,
                    error: e.error,
                    params: {
                        mobile: e.mobile,
                        smcode: e.smcode,
                        persistentCookie: e.keep
                    }
                })
            },
            mobileCaptcha: function() {
                return o.getPhonePicture()
            },
            mobileSignInCaptcha: function(e) {
                console.log("手机号登录验证码", e), o.getSignInCaptcha({
                    success: e.success,
                    error: e.error,
                    params: {
                        mobile: e.mobile,
                        way: e.way,
                        captcha: e.captcha
                    }
                })
            },
            logout: function(e) {
                s.remove("userinfo"), o.logout({
                    success: e.success,
                    error: e.error
                })
            },
            getNewCommentsCount: function() {
                var e = this;
                $.ajax({
                    dataType: "jsonp",
                    type: "get",
                    url: "//v2.sohu.com" + this.urls.user_new_comment
                }).done(function(t) {
                    "number" == typeof t && e.trigger("get:new_comment_count", t)
                }).fail(function() {
                    e.trigger("error")
                })
            },
            getThirdLoginUrl: function(e) {
                return o.getThirdLoginUrl({
                    provider: e.provider,
                    ru: e.ru
                })
            },
            getBindPhoneCaptcha: function(e) {
                console.log("第三方绑定手机验证码", e), o.getBindPhoneCaptcha({
                    success: e.success,
                    error: e.error,
                    params: {
                        mobile: e.mobile,
                        way: e.way
                    }
                })
            },
            bindPhone: function(e) {
                console.log("第三方绑定手机", e), o.bindPhone({
                    success: e.success,
                    error: e.error,
                    params: {
                        mobile: e.mobile,
                        smcode: e.smcode,
                        ru: e.ru
                    }
                })
            },
            isLogin: function() {
                var e = a.get("ppinf");
                return console.log(e ? "已登录" : "未登录"), !!e
            },
            isOkey: function() {
                var e = a.get("ppok"),
                    t = a.get("ppinf");
                return !(!e || t)
            },
            getCaptcha: function(e, t) {
                var i = e && e.user_id;
                return this.urls.get_captcha + i
            },
            getSpInstance: function() {
                return o
            }
        }),
        c = new r;
    e.exports = c
}, function(e, t) {
    var i = function() {
        this.url = "", this._ev_callback = {}, this.init.apply(this, arguments)
    };
    i.prototype = {
        init: function() {},
        fetch: function(e) {
            var t = e && e.data,
                i = e && e.success || function(e) {
                    this.attrs = e, s.trigger("sync", this.attrs)
                },
                n = /\/\//g.test(this.url) ? this.url : "//v2.sohu.com/public-api/" + this.url,
                s = this;
            $.ajax({
                url: n,
                data: t,
                method: e.method || "GET",
                dataType: e.dataType || "jsonp",
                contentType: e.contentType || "",
                success: i,
                error: function() {
                    s.trigger("error", arguments)
                }
            })
        },
        on: function(e, t) {
            this._ev_callback[e] = this._ev_callback[e] || [], this._ev_callback[e].push({
                fn: t
            })
        },
        one: function(e, t) {
            this._ev_callback[e] = this._ev_callback[e] || [], this._ev_callback[e].push({
                fn: t,
                one: !0
            })
        },
        trigger: function(e, t) {
            var i = this,
                n = [];
            this._ev_callback[e] && this._ev_callback[e].forEach(function(e) {
                e.one && n.push(e.fn), e.fn && e.fn.call(i, t)
            }), n && n.forEach(function(t) {
                i.off(e, t)
            })
        },
        off: function(e, t) {
            this._ev_callback[e] = this._ev_callback[e] || [];
            var i = -1;
            this._ev_callback[e].forEach(function(e, n) {
                e.fn === t && (i = n)
            }), i >= 0 && this._ev_callback[e].splice(i, 1)
        }
    }, i.extend = function(e) {
        var t = this,
            i = function() {
                return t.apply(this, arguments)
            };
        return $.extend(i, t), i.prototype = new t, $.extend(i.prototype, e), i.__super__ = t.prototype, i
    }, e.exports = i
}, function(e, t, i) {
    var n = i(6),
        s = i(7),
        a = {
            set: function(e, t) {
                if (n.isSupportStorage) {
                    e = encodeURIComponent(String(e));
                    try {
                        t = JSON.stringify(t)
                    } catch (i) {
                        return
                    }
                    t = encodeURIComponent(String(t)), localStorage.setItem(e, t)
                } else s.set(e, t)
            },
            get: function(e) {
                if (n.isSupportStorage) {
                    e = encodeURIComponent(String(e));
                    var t = localStorage.getItem(e);
                    t = decodeURIComponent(t);
                    try {
                        t = JSON.parse(t)
                    } catch (i) {}
                    return t
                }
                if (s.get(e) != undefined) return JSON.parse(s.get(e))
            },
            remove: function(e) {
                n.isSupportStorage ? (e = encodeURIComponent(String(e)), localStorage.removeItem(e)) : s.remove(e)
            }
        };
    try {
        e.exports = a
    } catch (o) {
        console.log(o), e.exports = {}
    }
}, function(e, t) {
    var i = {
        detectTransform: function() {
            return "transform" in document.createElement("div").style
        },
        detectWebP: function() {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d")) && 0 == e.toDataURL("image/webp").indexOf("data:image/webp")
        },
        detectStorage: function() {
            try {
                return localStorage.setItem("test", "test"), localStorage.removeItem("test"), !0
            } catch (e) {
                return !1
            }
        }
    };
    e.exports = {
        isSupportTransform: i.detectTransform,
        isSupportWebp: i.detectWebP(),
        isSupportStorage: i.detectStorage()
    }
}, function(e, t) {
    try {
        e.exports = function() {
            var e = {},
                t = function(t, i, n) {
                    var s;
                    if ("undefined" != typeof document) {
                        if (arguments.length > 1) {
                            if (n = $.extend({
                                    path: "/"
                                }, e, n), "number" == typeof n.expires) {
                                var a = new Date;
                                a.setMilliseconds(a.getMilliseconds() + 864e5 * n.expires), n.expires = a
                            }
                            try {
                                s = JSON.stringify(i), /^[\{\[]/.test(s) && (i = s)
                            } catch (h) {}
                            return i = encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape), document.cookie = [t, "=", i, n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
                        }
                        t || (s = {});
                        for (var o = document.cookie ? document.cookie.split("; ") : [], r = 0; r < o.length; r++) {
                            var c = o[r].split("="),
                                l = c.slice(1).join("=");
                            '"' === l.charAt(0) && (l = l.slice(1, -1));
                            try {
                                var d = c[0].replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                                if (l = l.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent), this.json) try {
                                    l = JSON.parse(l)
                                } catch (h) {}
                                if (t === d) {
                                    s = l;
                                    break
                                }
                                t || (s[d] = l)
                            } catch (h) {}
                        }
                        return s
                    }
                };
            return t.set = t, t.get = function(e) {
                return t.call(t, e)
            }, t.getJSON = function() {
                return t.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, t.defaults = e, t.remove = function(e, i) {
                t(e, "", $.extend(i, {
                    expires: -1
                }))
            }, t
        }()
    } catch (i) {
        console.log(i), e.exports = {}
    }
}, , , , function(e, t) {
    for (var i = function() {}, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], s = n.length, a = {}; s--;) method = n[s], a[method] || (a[method] = i);
    e.exports = a
}, function(e, t) {}, function(e, t) {
    e.exports = "prod"
}, function(e, t, i) {
    var n = (i(15), i(17)),
        s = (i(20), i(22)),
        a = i(23),
        o = (i(29), i(31)),
        r = i(33),
        c = (i(35), i(25), i(36)),
        l = i(24),
        d = i(42),
        h = i(26),
        u = i(16),
        p = i(43),
        f = i(44),
        m = i(48),
        g = i(51),
        o = i(31),
        _ = i(52),
        v = i(53),
        w = i(59),
        b = i(62),
        x = i(66),
        y = (i(67), i(70)),
        k = i(110),
        I = i(71),
        P = i(112),
        r = i(33),
        C = i(114),
        T = i(118),
        E = i(121),
        S = i(123),
        z = i(124),
        j = i(125);
    i(30);
    i(11);
    var A = i(127);
    e.exports = function(e) {
        A.set(e), new m({
            el: $("#search"),
            d_val: $("#news-recommend-nav").find("ul li").eq(1).text(),
            scene: "ARTICLE"
        }), new n({
            el: "#user-info",
            media_id: e.media_id
        });
        var t = new a({
            el: "#main-news",
            page_no: 0,
            new_window: !1,
            model: function() {
                return new s({
                    sceneId: e.channel_id,
                    scene: "CHANNEL"
                })
            }(),
            data: {
                channel_id: e.channel_id
            }
        });
        t.next(), new o({
            el: "#share"
        }), new c({
            el: "#head-login",
            mark: "article",
            type: "other"
        }), new b({
            el: "#sogou-words",
            model: new x({
                title: e.title.replace(/\s+/g, ""),
                content: $(".article").text().replace(/\s+/g, ""),
                url: window.location.href
            })
        });
        var i = new f({
            el: "#float-btn",
            data: {
                refreshable: !1,
                home: !0,
                comment: !1
            }
        });
        i.on("refresh", function() {
            window.location.reload()
        }), i.on("back", function() {
            window.open(e.channel_url, "_self")
        });
        var D = $("#news-time");
        $("#news-time").html(new l(parseInt(D.data("val"))).format("yyyy-MM-dd HH:mm"));
        var N = new d({
            news_id: e.news_id
        });
        N.on("sync", function(e) {
            var t = 0;
            for (var i in e) "newsId" != i && (t += e[i]);
            $("[data-role='pv']").html(new u(t).format())
        }), N.fetch(), new w({
            el: "#uninterested",
            data: {
                opts: e
            }
        });
        var V = new g({
            el: "#fixed-view",
            offset_top: 0
        });
        new _({
            el: $("#article-do"),
            rel_el: $("#comment_area")
        }), new v({
            el: "#pages-fun"
        });
        var L = new E({
                el: "#recommend-writer",
                model: new S({
                    scene: "CHANNEL",
                    sceneId: e.channel_id
                })
            }),
            q = new j({
                el: $("#hot-news"),
                model: new z({
                    scene: "CHANNEL",
                    sceneId: e.channel_id
                })
            });
        if (!p.isUrlParamExist("_trans_", "060005_xxhd")) {
            var M = [];
            t.on("news:add", function(t) {
                1 != t && fix_ad && fix_ad.reset({
                    news_id: e.news_id,
                    channel_id: e.channel_id,
                    index: 5
                })
            }), new y(t, "feeds", {
                news_id: e.news_id,
                channel_id: e.channel_id
            }), $("#nav_button").size() > 0 && M.push(I($("#nav_button"), "nav_button", {
                news_id: e.news_id,
                channel_id: e.channel_id
            })), $("#god_1").size() > 0 && M.push(I($("#god_1"), "side_1", {
                news_id: e.news_id,
                channel_id: e.channel_id
            })), $("#god_2").size() > 0 && M.push(I($("#god_2"), "side_2", {
                news_id: e.news_id,
                channel_id: e.channel_id
            })), $("#god_3").size() > 0 && M.push(I($("#god_3"), "side_3", {
                news_id: e.news_id,
                channel_id: e.channel_id
            })), $("#god_4").size() > 0 && I($("#god_4"), "side_4", {
                news_id: e.news_id,
                channel_id: e.channel_id
            }), $("#god_fix_1").size() > 0 && (fix_ad = I($("#god_fix_1"), "side_fix", {
                news_id: e.news_id,
                channel_id: e.channel_id,
                empty_ad: function() {}
            }), M.push(fix_ad)), q.on("rendered", function() {
                I($("#hot-news .pic-txt:last"), "recommends", {
                    channel_id: e.channel_id,
                    news_id: e.news_id,
                    empty_ad: function() {
                        this.$el.show()
                    }
                })
            }), L.on("rendered", function() {
                I($("#recommend-writer .pic-txt:last"), "writer", {
                    channel_id: e.channel_id,
                    news_id: e.news_id,
                    empty_ad: function() {
                        this.$el.show()
                    }
                })
            }), $("#god_bottom_banner").size() > 0 && I($("#god_bottom_banner"), "article_bottom", {
                news_id: e.news_id,
                channel_id: e.channel_id
            })
        }
        V.on("fix_change", function(e) {
            e.fixed ? $("#god_fix_container").show().css({
                left: e.o.left_dis + "px",
                top: e.o.$el_clone.height() + e.o.$el_clone.position().top
            }) : $("#god_fix_container").hide()
        }), V.on("resize", function(e) {
            $("#god_fix_container").is(":visible") && $("#god_fix_container").css({
                left: e.o.left_dis + "px"
            })
        });
        new P({
            loc: 1
        });
        new k;
        var O = $('[data-role="channelLink"]');
        if ("" == O.attr("href") && O.attr("target", "_self").attr("href", "javascript:void(0)"), "0" !== e.cms_id) {
            var U = new h({
                news_ids: [e.cms_id] || [e.id]
            });
            U.one("sync", function(t) {
                $('.article-do [data-role="comment-count"]').html(t.result[e.cms_id].comments)
            }), U.fetch()
        }
        new r({
            el: $("#news-recommend-nav")
        }), e.mpNewsExt && e.mpNewsExt.modelId && "null" !== e.mpNewsExt.modelId && e.mpNewsExt.modelId;
        C.load({
            type: "article",
            channel_id: e.channel_id,
            args: {
                news_ids: e.news_id,
                ext_data: {
                    modelId: "0"
                }
            }
        }), C.load({
            type: "article",
            channel_id: "1",
            args: {
                media_id: e.media_id,
                cms_id: parseInt(e.cms_id) || "mp_" + e.news_id,
                title: e.title.replace(/\s+/g, "")
            }
        }), new T
    }
}, function(e, t, i) {
    var n = i(4),
        s = (i(16), {});
    e.exports = n.extend({
        init: function(e) {
            this.media_id = e.media_id
        },
        fetch: function() {
            if (s[this.passport]) return void this.trigger("sync", s[this.passport]);
            if (!this._fetching) {
                var e = this;
                this.url = "//v2.sohu.com/stat/medias/" + this.media_id, this._fetching = !0, n.prototype.fetch.call(this, {
                    success: function(t, i) {
                        e._fetching = !1;
                        try {
                            var t = t[0],
                                n = 0;
                            for (var s in t) /pv|ev/gi.test(s) && (n += t[s]);
                            e.trigger("sync", n)
                        } catch (a) {
                            e.trigger("error")
                        }
                    },
                    error: function() {
                        e._fetching = !1
                    }
                })
            }
        }
    })
}, function(e, t) {
    var i = function(e) {
        var t = parseInt(e) || 0;
        this.number = t
    };
    i.prototype = {
        format: function() {
            return this.number <= 0 ? "0" : this.number < 1e4 ? this.number.toString() : this.number < 1e5 ? (this.number / 1e4).toFixed(1).replace(/\.?0*$/gi, "") + "万" : this.number <= 1e8 ? (this.number / 1e4).toFixed(0) + "万" : this.number < 1e9 ? (this.number / 1e8).toFixed(1).replace(/\.?0*$/gi, "") + "亿" : (this.number / 1e8).toFixed(0) + "亿"
        }
    }, e.exports = i
}, function(e, t, i) {
    var n = (i(18), i(16)),
        s = i(15);
    e.exports = Backbone.View.extend({
        template: _.template(i(19)),
        data: {
            info: {}
        },
        events: {
            "click .user-intro-show": "showAll",
            "click .user-intro-hide": "collapse"
        },
        model: null,
        render: function() {
            this.$el.html(this.template(this.data))
        },
        initialize: function(e) {
            var t = this;
            this.model = new s({
                media_id: e.media_id
            }), t.fixItem()
        },
        fixItem: function(e) {
            var t = this.$el.find("[data-role='info-join-time']"),
                i = this.$el.find("[data-role='info-article-num']"),
                s = this.$el.find("[data-role='info-read-num']"),
                a = new Date(parseInt(t.attr("data-val"))),
                o = a.getFullYear() + "年" + (a.getMonth() + 1) + "月" + a.getDate() + "日";
            t.find("span").text(o), i.find("em").text(new n(i.attr("data-value")).format()), this.model.on("sync", function(e) {
                s.find("em").text(new n(e).format())
            }), this.model.fetch()
        },
        showAll: function(e) {
            this.$el.find("[data-role='full-desp']").show(), this.$el.find("[data-role='shorted-desp']").hide(), $(e.currentTarget).hide(), this.$el.find(".user-intro-hide").show(), e.preventDefault()
        },
        collapse: function(e) {
            this.$el.find("[data-role='full-desp']").hide(), this.$el.find("[data-role='shorted-desp']").show(), $(e.currentTarget).hide(), this.$el.find(".user-intro-show").show(), e.preventDefault()
        }
    })
}, function(e, t) {
    var i = /[A-Z|0-9|\u4e00-\u9fa5|\uFF00-\uFFFF|\u3000|\x00-\xff|\u2014]/g,
        n = function(e) {
            for (var t = 0, i = e.length, n = -1, s = 0; s < i; s++) n = e.charCodeAt(s), t += n >= 0 && n <= 128 ? 1 : 2;
            return t
        };
    e.exports = {
        subString: function(e, t) {
            if (!e) return e;
            var n = e.replace(i, "**"),
                s = 2 * t;
            if (n.length <= s) return e;
            for (var a = [], o = 0, r = 0; o < s && r < e.length;) a.push(e[r]), r++, /[\u4e00-\u9fa5|\uFF00-\uFFFF|A-Z|0-9|\u3000|\x00-\xff|\u2014]/.test(e[r]) ? o += 2 : i.test(e[r]) ? o += 2 : o++;
            return a.join("") + "..."
        },
        getSubString: function(e, t) {
            if (!e) return e;
            var i = 2 * t;
            if (n(e) <= i) return e;
            for (var s = [], a = 0, o = 0; a < i && o < e.length;) {
                s.push(e[o]), o++;
                var r = e.charCodeAt(a);
                a += r >= 0 && r <= 128 ? 1 : 2
            }
            return s.join("") + "..."
        }
    }
}, function(e, t) {
    e.exports = '\x3c!--字段？？规则？？--\x3e\n<div class="user-pic"><a href="<%=info.weiboUrl%>" target="_blank"><img src="<%=info.avatorUrl%>" alt=""></a></div>\n<h4>\n    <a href="<%=info.weiboUrl%>" target="_blank">\n        <%=info.username%>\n    </a>\n</h4>\n<dl class="user-num">\n    <dd>文章：<span class="value"><em class="num"><%=info.totalNewsCnt_str%></em></span></dd>\n    <dd>阅读：<span class="value"><em class="num"><%=info.totalPv_str%></span></dd>\n</dl>\n<div class="user-intro">\n    <p>\n        <em class="desp"><%=info.fixed_desp%></em>\n        <a href="#" class="user-intro-show btn">展开<em class="icon-angle-up"></em></a>\n        <a href="#" class="user-intro-hide btn">隐藏<em class="icon-angle-up "></em></a>\n    </p>\n</div>\n<div class="user-join">\n    <%=info.create_time%>加入搜狐自媒体</div>\n<div class="user-more"><a href="<%=info.weiboUrl%>" target="_blank">查看TA的更多文章&gt;&gt;</a></div>'
}, function(e, t, i) {
    var n = window.location.protocol || "http",
        s = n + "//changyan.sohu.com/upload/changyan.js",
        a = i(21).changyan_key,
        o = i(21).changyan_conf;
    e.exports = Backbone.View.extend({
        initialize: function(e) {
            this.skin = e.skin, window._config = {
                sohuUIType: 1,
                categoryId: "1",
                pageSize: 10,
                skin: this.skin
            }, this.render()
        },
        render: function() {
            $.getScript(s, function() {
                window.changyan.api.config({
                    appid: a,
                    conf: o
                })
            })
        }
    })
}, function(e, t) {
    var i = window.location.protocol || "http:";
    e.exports = {
        changyan_key: "cyqemw6s1",
        changyan_conf: "prod_54aaa410c404b5eca1efa2bb0bae7f64",
        counter_server: i + "//pv.sohu.com",
        ad_gtr_server: i + "//s.go.sohu.com/"
    }
}, function(e, t, i) {
    var n = i(4);
    e.exports = n.extend({
        init: function(e) {
            this.scene = e && e.scene || "HOMEPAGE", this.sceneId = e && e.sceneId || 0
        },
        fetch: function(e) {
            this.page = e && e.page_no || 1, this.size = e && e.size || 20, this.url = "feed?scene=" + this.scene + "&sceneId=" + this.sceneId + "&page=" + this.page + "&size=" + this.size;
            var t = this;
            n.prototype.fetch.call(this, {
                success: function(e, i) {
                    try {
                        t.trigger("sync", e)
                    } catch (n) {
                        t.trigger("error", n)
                    }
                },
                error: function(e) {
                    t.trigger("error", e)
                }
            })
        }
    })
}, function(e, t, i) {
    var n = i(24),
        s = i(25),
        a = i(26),
        o = i(18),
        r = i(16);
    e.exports = Backbone.View.extend({
        template: _.template(i(27)),
        items_template: _.template(i(28)),
        events: {
            "mousedown [data-role='news-item'] A": "set_target"
        },
        new_window: !0,
        set_target: function(e) {
            "A" == e.currentTarget.tagName && $(e.currentTarget).attr("target", this.new_window ? "_blank" : "_self")
        },
        set_loading: function(e) {
            this.loading = e, this.finished && this.$el.find('[data-role="bottom-loading"]').hide()
        },
        set_finish: function(e) {
            this.finished = e, this.finished ? this.$el.find('[data-role="finished"]').show() : this.$el.find('[data-role="finished"]').hide()
        },
        user_defalut_img: "//statics.itc.cn/web/static/images/pic/default_user_img.png",
        api_error: !1,
        loading: !1,
        top_loading: !1,
        finished: !1,
        has_new: !1,
        page_size: 20,
        page_no: 1,
        model: null,
        sub_id: 0,
        news_count: 0,
        next: function() {
            var e = this;
            this.set_loading(!0), this.page_no++, this.model && (this.model.one("sync", function(t) {
                (!t || t.length <= 0) && e.set_finish(!0), e.set_loading(!1), "CATEGORY" == e.model.scene ? t.forEach(function(t) {
                    t.loc = 2, t.cate_id = e.model.sceneId
                }) : "TAG" == e.model.scene ? t.forEach(function(t) {
                    t.loc = 4, t.tag_id = e.model.sceneId
                }) : t.forEach(function(e) {
                    e.loc = 1, e.cate_id = ""
                }), e.render_article(t), e.$nextTick(function() {
                    e.read_comment_count()
                })
            }), this.model.fetch({
                page_no: e.page_no,
                page_size: e.page_size
            }))
        },
        $nextTick: function(e) {
            setTimeout(e, 100)
        },
        render: function() {
            this.$el.html(this.template()), this.$el.find('[data-role="slot"]').replaceWith(this.slot);
            var e = [];
            this.$el.find("[data-media-id]").each(function() {
                e.push($(this).data("mediaId"))
            }), this.cdn_media = e, window.sohuSpm && "function" == typeof window.sohuSpm.domDidChange && window.sohuSpm.domDidChange()
        },
        render_article: function(e) {
            var e = this.fixed_items(e),
                t = this.items_template({
                    items: e
                });
            this.$el.find(".news-wrapper").append(t), this.news_count = this.$el.find(".news-wrapper").children().length, this.trigger("news:add", this.page_no, this), window.sohuSpm && "function" == typeof window.sohuSpm.domDidChange && window.sohuSpm.domDidChange()
        },
        read_comment_count: function() {
            var e = [],
                t = this;
            this.$el.find('[data-role="comment-count"]').each(function() {
                var t = $(this).data("cmsid") + "|mp_" + $(this).data("id");
                $(this).attr("data-role", "waiting-comment-count"), e.push(t)
            });
            var i = new a({
                news_ids: e
            });
            i.one("sync", function(e) {
                for (var i in e.result) {
                    var n = new r(e.result[i].parts).format();
                    0 == parseInt(n) && (n = "&nbsp;"), i.indexOf("mp_") > -1 ? $(t.$el).find("[data-role='waiting-comment-count'][data-id='" + i.replace("mp_", "") + "']").html(n).attr("data-role", "") : $(t.$el).find("[data-role='waiting-comment-count'][data-cmsid='" + i + "']").html(n).attr("data-role", "")
                }
            }), i.fetch()
        },
        fixed_items: function(e) {
            var t = this;
            return e.forEach(function(e) {
                if (e.fixed_time = new n(e.publicTime).fixTime(), e.title = e.title.replace(/&amp;/g, "&"), e.picUrl ? e.title = o.subString(e.title, 40) : e.title = o.subString(e.title, 32), e.authorPic ? e.picUrl = e.picUrl.replace(/\i\.mp\.itc\.cn/g, "i.mp.itc.cn/c_zoom,w_160,h_107") : e.authorPic = t.user_defalut_img, e.images.length > 0) {
                    var i = [];
                    e.images.forEach(function(e) {
                        i.push(e.replace(/\i\.mp\.itc\.cn/g, "i.mp.itc.cn/c_zoom,w_160,h_107"))
                    }), e.images = i
                }
                e.cmsId || (e.cmsId = e.id), e.path = s.news(e)
            }), e
        },
        initialize: function(e) {
            this.page_no = e.page_no !== undefined ? e.page_no : this.page_no, this.page_size = e.page_size !== undefined ? e.page_size : this.page_size;
            var t = this;
            this.model = e.model, this.role = e.role || "", this.items_template = _.template(i(28)), this.new_window = e.new_window !== undefined ? e.new_window : this.new_window, this.slot = this.$el.html(), this.render(), this.read_comment_count(), this.$el.find('[data-role="time"]').each(function() {
                this.innerText = new n(parseInt($(this).data("val"))).fixTime()
            }), this.model.on("error", function(e) {
                t.next(), console.log(e)
            });
            var s;
            $(window).on("scroll", function(e) {
                s && clearTimeout(s), s = setTimeout(function() {
                    if (!t.loading && !t.finished) {
                        var e = $(t.$el).find('[data-role="bottom-loading"]').offset(),
                            i = e ? e.top : 0,
                            n = $(this).scrollTop(),
                            s = $(window).height();
                        i = i > s ? i : s, n + s >= i - 50 && t.next()
                    }
                }, 10)
            })
        }
    })
}, function(e, t) {
    var i = function(e) {
            this.time = new Date(e)
        },
        n = function(e) {
            return e.toString().length < 2 ? "0" + e : e
        };
    i.prototype = {
        fromNow: function() {
            var e = new Date;
            return e - this.time <= 6e5 ? "刚刚" : e - this.time <= 36e5 ? Math.round((e - this.time) / 60 / 1e3) + "分钟前" : e - this.time <= 864e5 ? Math.round((e - this.time) / 60 / 60 / 1e3) + "小时前" : e.getFullYear() == this.time.getFullYear() ? n(this.time.getMonth() + 1) + "-" + n(this.time.getDate()) + " " + n(this.time.getHours()) + ":" + n(this.time.getMinutes()) : this.time.getFullYear() + "-" + n(this.time.getMonth() + 1) + "-" + n(this.time.getDate())
        },
        format: function(e) {
            return e.replace("yyyy", this.time.getFullYear()).replace("MM", n(this.time.getMonth() + 1)).replace("dd", n(this.time.getDate())).replace("HH", n(this.time.getHours())).replace("mm", n(this.time.getMinutes()))
        },
        fixTime: function() {
            var e = new Date;
            if (e.getFullYear() == this.time.getFullYear()) {
                var t = new Date(e.getFullYear(), e.getMonth(), e.getDate()),
                    i = new Date(this.time.getFullYear(), this.time.getMonth(), this.time.getDate());
                return t - i == 0 ? "今天 " + n(this.time.getHours()) + ":" + n(this.time.getMinutes()) : t - i <= 864e5 ? "昨天 " + n(this.time.getHours()) + ":" + n(this.time.getMinutes()) : this.fromNow()
            }
            return this.fromNow()
        }
    }, e.exports = i
}, function(e, t) {
    var i = {
        42: "//game.sohu.com",
        23: "//fashion.sohu.com",
        15: "//business.sohu.com",
        19: "//soyule.sohu.com",
        17: "//mt.sohu.com/beta/sports",
        18: "//mt.sohu.com/beta/auto",
        30: "//it.sohu.com",
        41: "//acg.sohu.com",
        12: "//cul.sohu.com",
        13: "//history.sohu.com",
        25: "//learning.sohu.com",
        27: "//astro.sohu.com",
        45: "//fun.sohu.com",
        44: "//pets.sohu.com",
        43: "//view.sohu.com",
        28: "//chihe.sohu.com",
        29: "//travel.sohu.com",
        24: "//health.sohu.com",
        8: "//news.sohu.com",
        10: "//mil.sohu.com"
    };
    e.exports = {
        news: function(e) {
            var t = "";
            return e.scm && (t = "?scm=" + e.scm), "//www.sohu.com/a/" + e.id + "_" + e.authorId + t
        },
        tag: function(e) {
            return "//mt.sohu.com/tags/" + e + ".shtml"
        },
        channel: function(e) {
            return i[e]
        },
        sub: function(e, t) {
            return 0 == i[e].indexOf("//mt.sohu.com") ? "/" + i[e] + "/" + t + "/index.shtml" : "/" + i[e] + "/" + t
        },
        subject: function(e) {
            return "//mt.sohu.com/subject/" + e + ".shtml"
        }
    }
}, function(e, t, i) {
    var n = i(4),
        s = i(21).changyan_key,
        a = window.location.protocol || "http";
    e.exports = n.extend({
        init: function(e) {
            this.news_ids = e.news_ids
        },
        fetch: function() {
            if (this.news_ids && !(this.news_ids.length <= 0)) {
                var e = this;
                this.url = a + "//apiv2.sohu.com/api/comment/count?client_id=" + s + "&topic_source_id=" + this.news_ids.join(",") + "&callback=?", $.ajax({
                    url: this.url,
                    dataType: "jsonp",
                    success: function(t) {
                        e.trigger("sync", t.jsonObject)
                    },
                    error: function() {
                        e.trigger("error")
                    }
                })
            }
        }
    })
}, function(e, t) {
    e.exports = '<div class="clear">\n    <div style="display:none" data-role="top-loading" class="more-load top-load top_loading">\n        <a href="javascript:void(0)">刷新中..</a>\n    </div>\n    <div style="display:none" class="prompt">\n        <a href="#" target="_blank">您有未读新闻，点击查看</a>\n        <a href="#" target="_blank" class="close"><i class="icon-close"></i></a>\n    </div>\n    <div class="news-wrapper">\n        <div data-role="slot">\n        </div>\n    </div>\n\n    <div  data-role="bottom-loading" class="more-load loading"><a href="javascript:void(0)">加载更多</a>\n    </div>\n    <div style="display:none" data-role="finished" class="more-load">\n        已经到底了\n    </div>\n    <div style="display:none" data-role="error-info" class="more-load">\n        小狐找不到新闻了，请下拉重试吧～～\n    </div>\n    <div data-role="load-more" style="font-size:0;height:0"></div>\n</div>'
}, function(e, t) {
    e.exports = '\n<%for(var i =0 ;i< items.length; i++){\nvar preloadUrl="//statics.itc.cn/web/static/images/pic/preload.png";\nvar item = items[i];\nvar shouldImgGroup=item.images &&  item.images.length>3;\nif(!item._hide){\n%>\n <% if(item.topic){%>\n <div data-role="news-item" class="news-box news-box-pt clear"  data-ev="<%=item.id%>" data-media-id="<%=item.authorId%>"\ndata-loc="<%=item.loc%>" data-cate-id="<%=item.cate_id%>" data-tag-id="<%=item.tag_id%>" data-spm-type="resource">\n     <%if(item.picUrl){%>\n     <div class="pic img-do left">\n         <a href="<%= item.path%>" target="_blank">\n             <img data-src="<%=item.picUrl%>" alt=""  src="<%=preloadUrl%>">\n        </a>\n    </div>\n     <%}%>\n    <h5><a href="#" target="_blank"></a></h5>\n    <h4><a href="<%=  item.path%>" target="_blank"><%=item.title%></a></h4>\n    <%for(var j=0;j< item.topicList.length;j++){\n        var topicItem=topicList[j];\n    %>\n        <div class="pt">\n            <a href="<%=\'//www.sohu.com/a/\'+topicItem.id+\'_\'+topicItem.authorId%>" target="_blank">\n                <%if(item.picUrl){%>\n                <div class="img-do sm-img">\n                    <img data-src="<%=item.picUrl %>" alt=""  src="<%=preloadUrl%>">\n                </div>\n                <%}%>\n                <span><%=topicItem.title%></span>\n             </a>\n        </div>\n    <%}%>\n </div>\n <%}%>\n <% if(!item.topic && shouldImgGroup){ %>\n    <div data-role="news-item" class="news-box news-box-thr news-box-pic clear"  data-ev="<%=item.id%>" data-media-id="<%=item.authorId%>"\ndata-loc="<%=item.loc%>" data-cate-id="<%=item.cate_id%>" data-tag-id="<%=item.tag_id%>" data-spm-type="resource">\n\n        <h4><a href="<%= item.path%>"  target="_blank"><%=item.title%></a></h4>\n        <div class="pic-group clear">\n            <ul>\n                <% for(var j=0;j<item.images.length;j++){ %>\n                <li class="img-do <%= j==item.images.length-1 && item.images.length==4?\'end\' :\'\' %>" ><a href="<%= item.path%>" target="_blank"><img data-src="<%=item.images[j]%>" alt=""  src="<%=preloadUrl%>"></a></li>\n                <%}%>\n                <% if(item.images.length==3){%>\n                <li class="end pic-more"><a href="<%= item.path%>" target="_blank">查看更多 &gt;</a></li>\n                <%}%>\n            </ul>\n        </div>\n        <div class="other">\n            <span class="img"><a href="<%=item.personalPage%>" target="_blank"><img src="<%= item.authorPic%>" alt="" ></a></span>\n            <%if(item.channelName){%>\n            <span class="channel"><a href="<%=item.channelUrl+ \'?_f=v2-index-feeds\'%>" target="_blank"><%= item.channelName%></a></span>\n            <span class="dot channel-dot">·</span>\n            <%}%>\n            <span class="name"><a href="<%=item.personalPage%>" target="_blank"><%=item.authorName%></a></span>\n            <span class="dot">·</span>\n            <span class="time"><%=item.fixed_time%></span>\n            <a class="com" href="<%= item.path%>#comment_area"><i class="icon icon-comment"></i><span data-id="<%=item.cmsId%>" data-role="comment-count"></span></a>\n        </div>\n    </div>\n<%}%>\n <% if(!item.topic && !shouldImgGroup) {%>\n<div data-role="news-item" class="news-box clear <%=(item.picUrl?\'\':\'news-box-txt\')%>" data-ev="<%=item.id%>" data-media-id="<%=item.authorId%>"\ndata-loc="<%=item.loc%>" data-cate-id="<%=item.cate_id%>" data-tag-id="<%=item.tag_id%>" data-spm-type="resource">\n    <%if(item.picUrl){%>\n    <div class="pic img-do left">\n        <a href="<%= item.path%>">\n            <img data-src="<%=item.picUrl%>" alt=""  src="<%=preloadUrl%>">\n            <%if(item.hasVideo){%>\n            <i class="icon icon-video-god"></i>\n            <%}%>\n        </a>\n    </div>\n    <%}%>\n    <h4><a href="<%= item.path%>"><%=item.title%></a></h4>\n    <div class="other">\n         <span class="img"><a href="<%=item.personalPage%>" target="_blank"><img src="<%= item.authorPic%>" alt=""></a></span>\n        <%if(item.channelName){%>\n        <span class="channel"><a href="<%=item.channelUrl+ \'?_f=v2-index-feeds\'%>" target="_blank"><%= item.channelName%></a></span>\n        <span class="dot channel-dot">·</span>\n        <%}%>\n        <span class="name"><a href="<%=item.personalPage%>"><%=item.authorName%></a></span>\n        <span class="dot">·</span>\n        <span class="time" data-role="time"><%=item.fixed_time%></span>\n        <a class="com" href="<%= item.path%>#comment_area"><i class="icon icon-comment"></i><span data-id="<%=item.cmsId%>" data-role="comment-count"></span></a>\n    </div>\n</div>\n<%}%>\n\n<%}}%>\n'
}, function(e, t, i) {
    var n = i(30),
        s = i(7);
    e.exports = Backbone.View.extend({
        events: {
            "click ": "like"
        },
        initialize: function(e) {
            if (this.news_id = e.news_id, this.userId = e.userId, this.liked = s.get("isLiked" + this.news_id, "1"), this.liked) return void this.$el.find(".zan-icon").addClass("cur");
            this.model = new n({
                news_id: this.news_id,
                userId: this.userId
            }), this.render()
        },
        render: function() {},
        like: function() {
            if (!this.done && !this.liked) {
                s.set("isLiked" + this.news_id, "1");
                var e = this,
                    t = this.$el.find('[data-role="like"]');
                return this.done = !0, e.$el.find(".zan-icon").addClass("cur"), this.$el.find(".add-one").fadeIn().fadeOut(function() {
                    /^\d+$/gi.test(t.text()) && t.text(parseInt(t.text()) + 1)
                }), this.model.add(), !1
            }
        }
    })
}, function(e, t, i) {
    var n = i(4),
        s = (i(16), "//v2.sohu.com");
    e.exports = n.extend({
        init: function(e) {
            this.news_id = e.news_id, this.userId = e.userId
        },
        add: function() {
            if (!this._fetching) {
                var e = this;
                this.url = s + "/news/" + this.news_id + "/upvote", this._fetching = !0, $.ajax({
                    type: "POST",
                    url: this.url,
                    data: {
                        userId: this.userId
                    },
                    success: function() {
                        e._fetching = !1;
                        try {
                            e.trigger("sync", data)
                        } catch (t) {
                            e.trigger("error")
                        }
                    },
                    error: function() {
                        e._fetching = !1
                    }
                })
            }
        },
        get: function() {
            var e = this;
            this.url = s + "/news/" + this.news_id + "/upvote", $.ajax({
                type: "GET",
                url: this.url,
                data: {
                    userId: this.userId
                }
            }).done(function(t) {
                e.trigger("get:count", t)
            }).fail(function(t) {
                e.trigger("get:fail", t)
            })
        }
    })
}, function(e, t, i) {
    e.exports = Backbone.View.extend({
        template: _.template(i(32)),
        data: {
            param: {
                webid: "",
                name: "",
                title: document.title,
                url: window.location.href,
                pic: "",
                content: "",
                sina_appkey: "",
                tencent_appkey: ""
            },
            sina_url: "",
            qzone_url: "",
            showWeChat: !1
        },
        events: {
            "mouseover .weixin": "render_qrcode"
        },
        initialize: function(e) {
            this.data.showWeixin = e && e.showWeChat;
            var t = $("article img")[0];
            this.data.param.pic = t ? t.src : "", this.data.sina_url = "http://service.weibo.com/share/share.php?url=" + encodeURIComponent(this.data.param.url) + "&appkey=2890110694", this.data.qzone_url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(this.data.param.url), this.render()
        },
        render_qrcode: function() {
            if (!this.rendered) {
                var e = document.createElement("canvas").getContext ? "canvas" : "table";
                $("#qrcode").qrcode({
                    render: e,
                    width: 90,
                    height: 90,
                    text: this.data.param.url
                }), this.rendered = !0
            }
        },
        render: function() {
            this.$el.html(this.template(this.data))
        }
    })
}, function(e, t) {
    e.exports = '<ul>\n    <li class="tt">分享到</li>\n    <li class="sinat"><a target="_blank" href="<%=sina_url%>"><em class="icon sinat-icon"></em></a></li>\n    <%if (showWeChat){%>\n    <li class="weixin"><a href="javascript:void(0)"><em class="icon weixin-icon"></em></a>\n        <div class="wx-code">\n            <div class="cort"></div>\n            <div class="code-pic">\n                <div id="qrcode"></div>\n            </div>\n            <p>微信“扫一扫”<br/>分享到朋友圈</p>\n        </div>\n    </li>\n    <%}%>\n    <li class="qzone"><a target="_blank" href="<%=qzone_url%>"><em class="icon qzone-icon"></em></a></li>\n</ul>'
}, function(e, t, i) {
    var n = i(25);
    e.exports = Backbone.View.extend({
        template: _.template(i(34)),
        events: {},
        change_news_channel: function(e) {
            var t = ($(e.currentTarget).data("id"), $(e.currentTarget).data("tagId"));
            t && (window.location = n.tag(t))
        },
        setFixed: function(e) {
            var t = $(window).width(),
                i = this;
            e ? (this.$el.addClass("groom-menu-fixed"), t < 1180 ? i.$el.css({
                left: 0,
                marginLeft: 0
            }) : i.$el.css({
                left: "",
                marginLeft: ""
            })) : (this.$el.removeClass("groom-menu-fixed"), this.$el.css({
                left: "",
                marginLeft: ""
            }))
        },
        data: {
            show_channel: !0,
            items: []
        },
        render: function() {
            this.$el.html(this.template(this.data))
        },
        initialize: function(e) {
            var t, i = this,
                n = $(this.$el).offset() ? $(this.$el).offset().top : 0;
            $(window).on("resize", function() {
                t && clearTimeout(t), t = setTimeout(function() {
                    $(window).scrollTop() >= n - 40 ? i.setFixed(!0) : (i.setFixed(!1), n = $(i.$el).offset().top)
                }, 10)
            }), $(window).on("scroll", function(e) {
                t && clearTimeout(t), t = setTimeout(function() {
                    $(window).scrollTop() >= n - 40 ? i.setFixed(!0) : (i.setFixed(!1), n = $(i.$el).offset().top)
                }, 10)
            })
        }
    })
}, function(e, t) {
    e.exports = '\n<ul>     <li class="cur" data-id=""><a href="javascript:void(0)"><em class="dot"></em>推荐</a></li>\n        <%for(var i=0;i< items.length ;i++){\n        var item =items[i];\n        %>\n        <li data-id="" data-tag-id="<%=item.tagId%>" ><a href="javascript:void(0)"><%=item.tagName%></a></li>\n        <%}%>\n    \n</ul>'},function(e,t,i){var n=i(4),s={};e.exports=n.extend({init:function(e){
this.channel_id=e.channel_id},fetch:function(e){if(s[this.channel_id])return void this.trigger("sync",s[this.channel_id]);if(!this._fetching){var t=this;this.url="/apiV2/re/tags?channelId="+this.channel_id,this._fetching=!0,n.prototype.fetch.call(this,{success:function(e,i){t._fetching=!1;try{"string"==typeof e&&(e=JSON.parse(e)),t.trigger("sync",e.list),s[t.channel_id]=e.list}catch(n){t.trigger("error")}},error:function(){t._fetching=!1}})}}})},function(e,t,i){var n=i(3),s=i(37),a=i(7),o=i(39);e.exports=Backbone.View.extend({template:_.template(i(40)),index_tpl:_.template(i(41)),events:{"click [data-role='login-btn']":"login","click [data-role='logout-btn']":"logout","click .my-center,my-user":"_to_ucenter","click .my-media":"_to_my_media","click .my-user":"_to_ucenter_head"},data:{object:{},msg:0,sohu_msg:0},initialize:function(e){var t=this;this.type=e.type,this.mark=e.mark,this.cfgs=$.extend(this.cfgs,e.cfgs),this.render();var i=a.get("ppinf");n.on("get:userInfo",function(e){t.data.object=e,s.user_info=e,s.excFnList(s.get_user_info_cbs||[],e),t.render()}),n.on("get:new_comment_count",function(e){t.data.msg=e,t.render()}),i&&(n.fetch(),n.getNewCommentsCount()),s.$el.on("login:success",function(e){n.fetch(),n.getNewCommentsCount()})},render:function(){"other"==this.type?this.$el.html(this.template(this.data)):this.$el.html(this.index_tpl(this.data)),"other"==this.type&&(this.data.object&&this.data.object.nick?this.$el.attr("class","right login-after"):this.$el.attr("class","right login"))},_to_ucenter:function(){"index"==this.mark?o.trigger(o.action_id.ucenter_index):"channel"==this.mark||"news_channel"==this.mark?o.trigger(o.action_id.ucenter_channel):"article"==this.mark?o.trigger(o.action_id.ucenter_article):"pic_colloetions"==this.mark||this.mark,console.log(this.mark),this.data.msg=0,this.render()},_to_my_media:function(){o.trigger(o.action_id.sohuhao)},_to_ucenter_head:function(){o.trigger(o.action_id.ucenter_head)},login:function(){s.login()},logout:function(){var e={success:function(e,t){console.log("退出登录",e,t),window.location.reload()},error:function(e){console.log("退出失败",e)},url:encodeURIComponent(window.location)};return n.logout(e),!1}})},function(e,t,i){var n=i(7),s=Backbone.View.extend({template:_.template(i(38)),events:{"click [data-role='userlogin-bar']":"userLoginModel","click [data-role='mobilelogin-bar']":"mobileLoginModel","click [data-role='login-close']":"close","click [data-role='body-shade']":"close","click [data-role='remember']":"set_remember",'click [data-role="user-captcha"] img':"getUserCaptcha",'click [data-role="mobilenum-captcha"] img':"getMobileCaptcha",'blur [data-role="user-password"]':"blur_pwd",'blur [data-role="user-passport"]':"blur_pwd",'focus [data-role="user-password"]':"hover_pwd",'focus [data-role="user-passport"]':"hover_pwd",'blur [data-role="mobilenum"]':"blur_pwd",'blur [data-role="mobilenum-captcha"] input':"blur_pwd",'focus [data-role="mobilenum"]':"hover_pwd",'focus [data-role="mobilenum-captcha"] input':"hover_pwd",'keydown [data-role="user-password"]':"chk_key",'keydown [data-role="user-passport"]':"chk_key","click [data-login]":"thirdLogin",'click [data-role="submit-user"]':"submitUser",'click [data-role="submit-mobile"]':"submitMobile",'click [data-role="dynamic-get"]':"getMobileDynamic",'click [data-role="yuyin-close"]':"closeYuin",'click [data-role="yuyin-send"]':"sendYuin","click .pw-txt":"hover_pwd",'click [data-role="bind-dynamic"]':"getBindDynamic",'click [data-role="bind-yuyin"]':"getBindYuyin",'click [data-role="submit-bind"]':"submitBind"},set_remembered:!0,needUserCaptcha:!1,mobileDynamic:!0,bindDynamic:!0,initialize:function(e){var t=this;this.model=i(3),this.cfgs=$.extend(this.cfgs,e.cfgs),this.placeholderSupported=this.placeholderSupported(),this.$el.append(this.template(this.placeholderSupported)),this.$shade_el=$('[data-role="body-shade"]'),this.$login_el=$('[data-role="login-pop"]'),this.$bind_el=$('[data-role="bind-pop"]'),this.model.on("get:userInfo",function(e){t.user_info=e}),this.model.isOkey()&&this.bindMobile()},userLoginModel:function(){this.$el.find(".err-info").hide(),$("[data-role='userlogin-bar']").addClass("cur"),$("[data-role='mobilelogin-bar']").removeClass("cur"),$("[data-role='mobile-box']").hide(),$("[data-role='user-box']").show()},getUserCaptcha:function(){var e=this.model.userCaptcha();this.$el.find('[data-role="user-captcha"]').find("img").replaceWith("<img class='captcha-pic' src="+e+">")},submitUser:function(){this.submit(!0)},showCaptcha:function(e,t){e?(this.$el.find('[data-role="user-captcha"]').show(),t&&this.$el.find('[data-role="user-captcha"]').find("img").attr("src",t)):this.$el.find('[data-role="user-captcha"]').hide()},mobileLoginModel:function(){if(this.$el.find(".err-info").hide(),!this.$el.find('[data-role="mobilenum-captcha"]').find("img").attr("src")){this.getMobileCaptcha()}$("[data-role='userlogin-bar']").removeClass("cur"),$("[data-role='mobilelogin-bar']").addClass("cur"),$("[data-role='mobile-box']").show(),$("[data-role='user-box']").hide()},getMobileCaptcha:function(){var e=this.model.mobileCaptcha();this.$el.find('[data-role="mobilenum-captcha"]').find("img").replaceWith("<img class='captcha-pic' src="+e+">")},getMobileDynamic:function(e,t){var i=this;this.$el.find(".err-info").hide();var n=this.$el.find('[data-role="mobilenum"]').removeClass("error").val(),s=this.$el.find('[data-role="mobilenum-captcha"] input').removeClass("error").val();if(!n)return this.showErrorInfo("请输入手机号"),this.$el.find('[data-role="mobilenum"]').addClass("error"),!1;if(!s){this.showErrorInfo("请输入验证码");var s=this.$el.find('[data-role="mobilenum-captcha"] input').addClass("error");return!1}if(!this.mobileDynamic)return this.showErrorInfo("获取验证码太频繁，请稍后再试"),!1;var a={mobile:n,way:t?1:0,captcha:s,success:function(e,t){i.getDynamicSuccess(e,t)},error:function(e){i.getDynamicError(e)}};return console.log("获取手机验证码"),this.model.mobileSignInCaptcha(a),!1},getDynamicSuccess:function(e,t){this.mobileDynamic=!1;var i=this,n=59,s=this.$el.find('[data-role="dynamic-get"]');s.removeClass("dynamic-btn-click"),s.html("60s重新获取");var a=setInterval(function(){if(0==n)return s.html("获取验证码"),s.addClass("dynamic-btn-click"),i.mobileDynamic=!0,void clearInterval(a);n<10&&n>0?s.html("0"+n+"s重新获取"):s.html(n+"s重新获取"),n--},1e3)},closeYuin:function(){return this.$el.find(".safe-hint").hide(),!1},sendYuin:function(){return n.get("ppok")&&"none"!=$(".safe-hint").css("display")?this.getBindDynamic(null,!0):(this.mobileDynamic=!0,this.getMobileDynamic(null,!0)),this.closeYuin(),!1},submitMobile:function(){this.submit(!1)},successFn:function(e,t){if(console.log("user-loginSuccess",e,t),this.login_success_callback){for(var i=0;i<this.login_success_callback.length;i++)!function(t){setTimeout(function(){t(e)},0)}(this.login_success_callback[i]);this.login_success_callback=[]}this.close(null,!0),this.$el.trigger("login:success",e)},showErrorInfo:function(e){this.$el.find(".err-info").text(e).show()},closeErrorInfo:function(){this.$el.find(".err-info").hide()},chk_key:function(e){13==e.keyCode&&this.submitUser()},hover_pwd:function(e){if(!this.placeholderSupported){var t=$(e.target).attr("data-role");"user-passport"==t||"user-password"==t||"mobilenum"==t||"mobilenum-tip"==t?$(e.target).siblings(".pw-txt").hide():$(e.target).hide().siblings("input").focus()}},blur_pwd:function(e){this.placeholderSupported||""==e.target.value&&$(e.target).siblings(".pw-txt").show()},submit:function(e){var t=this;if(this.$el.find(".err-info").hide(),e){var i=this.$el.find('[data-role="user-passport"]').removeClass("error").val(),n=this.$el.find('[data-role="user-password"]').removeClass("error").val(),s=this.$el.find('[data-role="user-captcha"] input').removeClass("error").val();if(!i)return void this.$el.find('[data-role="user-passport"]').addClass("error");if(!n)return void this.$el.find('[data-role="user-password"]').addClass("error");if(this.needUserCaptcha&&!s){var s=this.$el.find('[data-role="user-captcha"] input').addClass("error");return}var a={userid:i,password:n,keep:this.set_remembered?1:0,captcha:s,success:function(e,i){t.successFn(e,i)},error:function(e){t.userErrorFn(e)}};console.log("账号密码登陆"),this.$el.find('[data-role="user-captcha"] input').val(""),this.model.userLogin(a)}else{var o=this.$el.find('[data-role="mobilenum"]').removeClass("error").val(),r=this.$el.find('[data-role="mobilenum-dynamic"]').removeClass("error").val();if(!o)return void this.$el.find('[data-role="mobilenum"]').addClass("error");if(!r)return void this.$el.find('[data-role="mobilenum-dynamic"]').addClass("error");var a={mobile:o,smcode:r,keep:this.set_remembered?1:0,success:function(e,i){t.successFn(e,i)},error:function(e){t.mobileErrorFn(e)}};console.log("手机号登陆"),this.model.mobileLogin(a)}},thirdLogin:function(e){var t=$(e.currentTarget).data("login"),i=this.model.getThirdLoginUrl({provider:t,ru:encodeURIComponent(window.location)});return window.location.href=i,!1},set_remember:function(e){$("[data-role='remember']").find(".radio-icon").toggleClass("radio-icon-sel"),this.set_remembered=!this.set_remembered},render:function(){},is_login:function(){return this.model.isLogin()},login:function(e){if(this.is_login())return void(e&&e(this.user_info));this.login_success_callback=this.login_success_callback||[],e&&this.login_success_callback.push(e),this.mobileLoginModel(),this.$shade_el.show(),this.$login_el.show()},bindMobile:function(){this.$shade_el.show(),this.$bind_el.show(),console.log(this.$shade_el)},close:function(e,t){this.$login_el.hide(),this.$shade_el.hide(),this.$bind_el.hide(),t||(this.login_success_callback=[],this.$el.trigger("login:cancel"))},placeholderSupported:function(){return"placeholder"in document.createElement("input")},getUserInfo:function(e){this.user_info?"function"==typeof e&&e(this.user_info):(this.get_user_info_cbs=this.get_user_info_cbs||[],"function"==typeof e&&this.get_user_info_cbs.push(e))},excFnList:function(e,t){e.forEach(function(e){setTimeout(function(){e(t)},0)})},getBindDynamic:function(e,t){var i=this;this.$el.find(".err-info").hide();var n=this.$el.find('[data-role="bind-mobile"]').removeClass("error").val();if(!n)return this.showErrorInfo("请输入手机号"),this.$el.find('[data-role="bind-mobile"]').addClass("error"),!1;if(!this.bindDynamic)return this.showErrorInfo("获取验证码太频繁，请稍后再试"),!1;var s={mobile:n,way:t?1:0,success:function(e,t){i.bindDynamicSuccess(e,t)},error:function(e){i.bindDynamicError(e)}};return console.log("绑定手机号验证码"),this.model.getBindPhoneCaptcha(s),!1},bindDynamicSuccess:function(){this.bindDynamic=!1;var e=this,t=59,i=this.$el.find('[data-role="bind-dynamic"]');i.removeClass("dynamic-btn-click"),i.html("60s重新获取");var n=setInterval(function(){if(0==t)return i.html("获取验证码"),i.addClass("dynamic-btn-click"),e.bindDynamic=!1,void clearInterval(n);t<10&&t>0?i.html("0"+t+"s重新获取"):i.html(t+"s重新获取"),t--},1e3)},getBindYuyin:function(){return this.bindDynamic=!0,this.getBindDynamic(null,!0),!1},submitBind:function(){var e=this;this.$el.find(".err-info").hide();var t=this.$el.find('[data-role="bind-mobile"]').removeClass("error").val(),i=this.$el.find('[data-role="bind-input"]').removeClass("error").val();if(!t)return this.showErrorInfo("请输入手机号"),this.$el.find('[data-role="bind-mobile"]').addClass("error"),!1;if(!i)return this.showErrorInfo("请输入手机验证码"),this.$el.find('[data-role="bind-input"]').addClass("error"),!1;var n={mobile:t,smcode:i,success:function(t,i){e.successFn(t,i)},error:function(t){e.bindError(t)}};return console.log("绑定手机号"),this.model.bindPhone(n),!1},userErrorFn:function(e){switch(console.log("user-loginError",e),e.status){case 400:this.showErrorInfo("服务错误，请刷新页面再试");break;case 404:this.showErrorInfo("用户名或密码错误");break;case 420:this.showErrorInfo("图形验证码输入错误");var t=this.model.userCaptcha();this.needUserCaptcha=!0,this.showCaptcha(!0,t);break;case 423:this.showErrorInfo("账号未设置密码，请通过手机动态码登录"),this.mobileLoginModel();break;case 450:this.showErrorInfo("用户名或密码不能为空");break;case 453:this.showErrorInfo("多次登录失败，账号已被封锁，请一小时后再试");break;case 461:this.showErrorInfo("账号未绑定手机号"),this.mobileLoginModel();break;case 465:this.showErrorInfo("请输入图形验证码后登录");var t=this.model.userCaptcha();this.needUserCaptcha=!0,this.showCaptcha(!0,t);break;default:this.showErrorInfo("发生未知错误，请稍后再试")}},getDynamicError:function(e){switch(console.log("Dynamic-Error",e,this),e.status){case 400:this.showErrorInfo("非法请求，请刷新页面再试"),this.$el.find('[data-role="mobilenum-captcha"] input').val(""),this.getMobileCaptcha();break;case 420:this.showErrorInfo("图形验证码输入错误"),this.$el.find('[data-role="mobilenum-captcha"] input').val(""),this.getMobileCaptcha();break;case 421:this.showErrorInfo("验证码发送次数过多，请稍后再试"),this.$el.find('[data-role="mobilenum-captcha"] input').val(""),this.getMobileCaptcha();break;case 450:this.showErrorInfo("手机号与图形验证码不能为空"),this.$el.find('[data-role="mobilenum-captcha"] input').val(""),this.getMobileCaptcha();break;case 461:this.showErrorInfo("请输入正确的手机号"),this.$el.find('[data-role="mobilenum-captcha"] input').val(""),this.getMobileCaptcha();break;case 474:this.showErrorInfo("请通过语音验证码方式登录"),this.$el.find(".safe-hint").show();break;case 482:this.showErrorInfo("操作超时，请稍后再试"),this.$el.find('[data-role="mobilenum-captcha"] input').val(""),this.getMobileCaptcha();break;default:this.showErrorInfo("服务器繁忙，请稍后再试"),this.$el.find('[data-role="mobilenum-captcha"] input').val(""),this.getMobileCaptcha()}},mobileErrorFn:function(e){switch(console.log("mobile-loginError",e),e.status){case 400:this.showErrorInfo("服务错误，请刷新页面再试");break;case 427:this.showErrorInfo("该手机号已经绑定多个账号，无法注册");break;case 422:this.showErrorInfo("手机动态码输入错误");break;case 42201:this.showErrorInfo("手机动态码不存在或已过期"),this.mobileLoginModel();break;case 450:this.showErrorInfo("手机号或动态码不能为空");break;case 453:this.showErrorInfo("多次登录失败，账号已被封锁，请一小时后再试");break;default:this.showErrorInfo("发生未知错误，请稍后再试")}},bindDynamicError:function(e){switch(console.log("Bind-Dynamic-Error",e),e.status){case 400:this.showErrorInfo("非法请求，请刷新页面再试");break;case 421:this.showErrorInfo("手机动态码发送次数过多，请稍后再试");break;case 450:this.showErrorInfo("手机号不能为空");break;case 461:this.showErrorInfo("请输入正确的手机号");break;case 474:this.showErrorInfo("请通过语音验证码方式登录"),this.$el.find(".safe-hint").show();break;default:this.showErrorInfo("服务器繁忙，请稍后再试")}},bindError:function(e){switch(console.log("bind-loginError",e),e.status){case 427:this.showErrorInfo("该手机号已经绑定多个账号，无法注册");break;case 422:this.showErrorInfo("手机动态码输入错误");break;case 42201:this.showErrorInfo("手机动态码不存在或已过期");break;case 450:this.showErrorInfo("手机号不能为空");break;case 462:this.showErrorInfo("当前账号已经绑定过登录手机");break;case 482:this.showErrorInfo("操作超时，请稍后重试");break;default:this.showErrorInfo("服务器繁忙，请稍后再试")}}});e.exports=new s({el:"body"})},function(e,t){e.exports='<div data-role="body-shade" class="body-shade" style="display:none;"></div>\n<div data-role="login-pop" class="pop-layer login-pop" style="display:none;">\n    <a href="javascript:void(0)" data-role="login-close" class="close-pop">\n        <i class="icon-close"></i>\n    </a>\n    <div class="title">\n        <ul>\n            <li data-role="userlogin-bar" class="cur">账号密码登录</li>\n            <li data-role="mobilelogin-bar">手机动态码登录</li>\n        </ul>\n    </div>\n    <div class="err-info" style="display:none">请输入正确的登录账号或密码</div>\n    \x3c!-- 用户名登陆 --\x3e\n    <div data-role="user-box" class="login user-login">\n        <ul>\n            <li><input type="text"  data-role="user-passport" class="user-input" placeholder="邮箱/手机号"/>\n                <% if(!this.placeholderSupported){%>\n                <span class="pw-txt" data-role="passport-tip">邮箱/手机号</span>\n                <%}%>\n            </li>\n            <li><input type="password" value="" data-role="user-password" class="password-input" placeholder="请输入密码" />\n                <% if(!this.placeholderSupported){%>\n                <span class="pw-txt" data-role="pw-tip">请输入密码</span>\n                <%}%>\n            </li>\n             <li class="short" data-role="user-captcha" style="display:none">\n                <input type="text" value=""  class="password-input" placeholder="验证码" />\n                <img class="captcha-pic" src="">\n            </li>\n\n        </ul>\n\n        <div class="auto-login"><span data-role="remember" class="radio-btn"><em class="radio-icon radio-icon-sel" ><input type="radio" /></em>下次自动登录</span><a href="https://v4.passport.sohu.com/fe/forgetPassword" target="_blank" class="back-link">找回密码</a></div>\n        <div class="login-btn"><input data-role="submit-user" type="button" class="login-bn" value="登录" /></div>\n        <div class="login-oper"><a href="https://v4.passport.sohu.com/fe/register" target="_blank" class="reg-link">注册</a></div>\n    </div>\n    \x3c!-- 手机号登陆 --\x3e\n    <div data-role="mobile-box" class="login mobile-login">\n        <ul>\n            <li>\n                <input type="text" data-role="mobilenum" class="user-input" placeholder="请输入手机号">\n                <% if(!this.placeholderSupported){%>\n                <span class="pw-txt" data-role="mo-phone">请输入手机号</span>\n                <%}%>\n                \x3c!-- <a href="#" target="_blank" class="user-del"></a> --\x3e\n            </li>\n            <li class="short" data-role="mobilenum-captcha">\n                <input type="text" value="" data-role="mobilenum-tip" class="password-input" placeholder="验证码">\n                <% if(!this.placeholderSupported){%>\n                <span class="pw-txt" data-role="mo-captcha">验证码</span>\n                <%}%>\n                <img class="captcha-pic" src="">\n            </li>\n            <li class="dynamic-code">\n                <input data-role="mobilenum-dynamic" type="text" value="" class="dynamic-input" placeholder="">\n                <a data-role="dynamic-get" href="#" target="_blank" class="dynamic-btn dynamic-btn-click">获取验证码</a>\n            </li>\n        </ul>\n\n        <div class="auto-login">\n            <span data-role="remember" class="radio-btn">\n                <em class="radio-icon radio-icon-sel"><input type="radio"></em>下次自动登录\n            </span>\n            <a href="https://v4.passport.sohu.com/fe/forgetPassword" target="_blank" class="back-link">找回密码</a>\n        </div>\n        <div class="login-btn">\n            <input data-role="submit-mobile" type="button" class="login-bn" value="登录">\n        </div>\n        <div class="login-oper">\n            <a href="https://v4.passport.sohu.com/fe/register" target="_blank" class="reg-link">注册</a>\n        </div>\n\n    </div>\n\n    \x3c!-- 第三方登陆 --\x3e\n    <div class="third clear">\n        <ul>\n            <li class="qq">\n                <a data-login="qq" href="#"></a>\n            </li>\n            <li class="sinat">\n                <a data-login="sina" href="#"></a>\n            </li>\n            <li class="wx">\n                <a data-login="weChat" href="#"></a>\n            </li>\n            <li class="oth">\n                <a href="https://v4.passport.sohu.com/fe/login?ru=<%=encodeURIComponent(window.location)%>" target="_blank"></a>\n            </li>\n        </ul>\n    </div>\n\n</div>\n\n<div data-role="bind-pop" class="pop-layer login-pop" style="display:none;">\n    <a href="javascript:void(0)" data-role="login-close" class="close-pop">\n        <i class="icon-close"></i>\n    </a>\n    <div class="safe-title">\n        <div class="safe-tt"><i class="icon safe-icon"></i>安全提示</div>\n        <p>为保证您的账户安全，建议您绑定手机号码</p>\n    </div>\n    <div class="err-info" style="display:none">请输入正确的登录账号或密码</div>\n    <div class="login">\n        <ul>\n            <li>\n                <input type="text" data-role="bind-mobile" class="user-input" placeholder="请输入手机号">\n            </li>\n            <li class="dynamic-code">\n                <input data-role="bind-input" type="text" value="" class="dynamic-input" placeholder="">\n                <a data-role="bind-dynamic" href="#" target="_blank" class="dynamic-btn dynamic-btn-click">获取动态码</a>\n            </li>\n        </ul>\n        <div class="dynamic-hint">收不到短信验证码？点击获取 <a data-role="bind-yuyin" href="#" target="_blank">语音验证码</a></div>\n        <div class="login-btn"><input data-role="submit-bind" type="button" class="login-bn" value="确定"></div>\n    </div>\n</div>\n\x3c!-- 语音验证提示 --\x3e\n<div class="safe-hint">\n    <div class="safe-tt"><i class="icon safe-icon"></i>安全提示</div>\n    <div class="safe-info">系统出于安全考虑，在点击“发送语音验证码”后，您将会收到一条来自950开头号码的语音验证码，请注意接听。</div>\n    <div class="safe-btn"><a data-role="yuyin-close" href="#" target="_blank" class="btn-send-no">暂不发送</a><a data-role="yuyin-send" href="#" target="_blank" class="btn-send">发送语音验证码</a></div>\n</div>\n\n<div data-role="register-pop" class="pop-layer register-pop" style="display:none;">\n    <a href="javascript:void(0)" data-role="login-close" class="close-pop">\n        <i class="icon-close"></i>\n    </a>\n    <div class="register-menu">\n        <ul>\n            <li class="now"><em class="phone-reg"></em>手机注册</li>\n            <li><em class="mail-reg"></em>邮箱注册</li>\n        </ul>\n    </div>\n    <div class="login">\n        <ul>\n            <li><input type="text" value="手机号码" class="phone-input" /><a href="#" target="_blank" class="close-btn"></a></li>\n            <li><input type="text" value="设置密码" class="password-input" /><a href="#" target="_blank" class="keyboard"></a></li>\n            <li><input type="text" value="验证码" class="code-input" /><a href="#" target="_blank" class="gain-code">获取验证码</a></li>\n        </ul>\n        <div class="agreement"><span class="radio-btn radio-btn-clk"><input type="radio" /></span>同意<a href="#" target="_blank">《搜狐服务协议》</a></div>\n        <div class="login-btn"><input type="button" class="login-bn" value="立即注册" /></div>\n        <div class="login-oper"><a href="#" target="_blank" class="back-link">使用已有账号登录</a></div>\n    </div>\n</div>'
}, function(e, t, i) {
    var n = i(7),
        s = n.get("SUV"),
        a = {
            action_id: {
                sohuhao: "10220422",
                ucenter_article: "10220423",
                ucenter_index: "10220424",
                ucenter_channel: "10220425",
                ucenter_head: "10220447",
                colloetion: "10220426",
                information: "10220427",
                safety: "10220428",
                my_comment: "10220413",
                comment_zan: "10220416",
                comment_from: "10220417",
                comment_remove: "10220421",
                my_reply: "10220414",
                reply_zan: "10220415",
                reply_from: "10220420",
                reply_reply: "10220418",
                reply_reply_succ: "10220419"
            },
            trigger: function(e) {
                var t = "//pv.sohu.com/action.gif?actionId=" + e + "&SUV=" + s;
                $.getScript(t, function() {})
            }
        };
    e.exports = a
}, function(e, t) {
    e.exports = ' <div class="login">\n <%if(object && object.nick){%>\n    <span class="login-after">\n        <a href="//www.sohu.com/ucenter" target="_blank" class="user my-user">\n            <img src="<%=object.icon%>" alt="">\n            <%if(msg+sohu_msg){%>\n                \x3c!-- <span class="red-point"></span> --\x3e\n                <span class="num" style="visibility:hidden;"><%=(msg+sohu_msg)>99?\'99+\':(msg+sohu_msg)%></span>\n            <%}else{%>\n                <span class="num" style="visibility:hidden;"></span>\n            <%}%>\n            <span class="user-name"><em class="name"><%=object.nick%></em></span>\n        </a>\n        <div class="login-layer">\n            <a href="//www.sohu.com/ucenter" target="_blank" class="my-center">个人中心\n                \x3c!-- <%if(msg){%>   \n                    <span class="menu-num"><span class="num"><%=msg>99?\'99+\':msg%></span></span>\n                <%}%>   --\x3e\n            </a>\n            \x3c!-- <a href="//mp.sohu.com" target="_blank" class="my-media">我的搜狐号\n                <%if(sohu_msg){%>   \n                    <span class="menu-num"><span class="num"><%=sohu_msg>99?\'99+\':sohu_msg%></span></span>\n                <%}%>\n            </a> --\x3e\n            <a href="javascript:void(0)" class="quit" data-role="logout-btn">退出</a>\n        </div>\n    </span>\n\n    <%}else{%>\n    <a href="javascript:void(0)"  data-role="login-btn" class="login-sohu"><i class="icon-user"></i>登录</a>\n    <%}%>\n </div>\n\n'},function(e,t){e.exports='<ul data-spm="top-head">\n    <li class="classic">设为默认首页</li>\n    <li class="download-app"><a href="https://k.sohu.com/" target="_blank" data-spm-acode="8073">下载APP</a></li>\n    <li class="login">\n        <%if(object && object.nick){%>\n            <span class="login-after">\n                <a href="//www.sohu.com/ucenter" target="_blank" class="user my-user">\n                    <img src="<%=object.icon%>" alt="">\n                    <%if(msg+sohu_msg){%>\n                        <span class="num" style="visibility:hidden;"><%=(msg+sohu_msg)>99?\'99+\':(msg+sohu_msg)%></span>\n                    <%}else{%>\n                        <span class="num" style="visibility:hidden;"></span>\n                    <%}%>\n                    <span class="user-name"><em class="name"><%=object.nick%></em></span>\n                </a>\n                <div class="login-layer">\n                    <a href="//www.sohu.com/ucenter" target="_blank" class="my-center">个人中心\n                        \x3c!-- <%if(msg){%>\n                            <span class="menu-num"><span class="num"><%=msg>99?\'99+\':msg%></span></span>\n                        <%}%> --\x3e\n                    </a>\n                    \x3c!-- <a href="//mp.sohu.com" target="_blank" class="my-media">我的搜狐号\n                        <%if(sohu_msg){%>\n                            <span class="menu-num"><span class="num"><%=sohu_msg>99?\'99+\':sohu_msg%></span></span>\n                        <%}%>\n                    </a> --\x3e\n                    <a href="javascript:void(0)" target="" class="quit" data-role="logout-btn">退出</a>\n                </div>\n            </span>\n        <%}else{%>\n            <span class="login-before" data-spm-acode="8074"><a href="javascript:void(0)"  data-role="login-btn" class="login-sohu"><i class="icon-user"></i>登录</a></span>\n        <%}%>\n    </li>\n\n</ul>'},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.news_id=e.news_id},fetch:function(e){var t=this;this.url="articles/"+this.news_id+"/pv",n.prototype.fetch.call(this,{success:function(e,i){try{t.trigger("sync",e)}catch(n){t.trigger("error")}}})}})},function(e,t){e.exports={getParams:function(e){if("string"!=typeof e)return{};e=e.substring(e.indexOf("?")+1);for(var t=e.split(/&|=/),i={},n=0;n<t.length;n+=2)i[t[n]]=t[n+1];return i},isUrlParamExist:function(e,t){var i=this.getParams(window.location.href);return!(!i[e]||i[e]!=t)}}},function(e,t,i){i(45);var n=i(46);e.exports=Backbone.View.extend({template:_.template(i(47)),events:{"click [data-role='refresh']":"refresh","click [data-role='on_comment']":"on_comment","click [data-role='on_back']":"on_back","click [data-role='go_top']":"go_top"},data:{refreshable:!0,home:!1,comment:!1,qrcode:!0,feedback:!1,userlink:"http://passport.zhan.sohu.com/passport/sohu/login-jumpto?callback=http%3A%2F%2Ffbp.sohu.com%2Ffbp%2Fproblem%2Fadvice%3Fproduct%3Dpc",survey:!1,surveyUrl:"https://wj.qq.com/s/1672453/db94",classicSohu:!1,classicSohuImg:n},initialize:function(e){this.cfgs=$.extend(this.data,e.data),(this.isIE(8)||this.isIE(9))&&(this.data.userlink="//shang.qq.com/wpa/qunwpa?idkey=04e47b9e7004c967962f52532465719ae8a30cf05413c11934ec121fb7e2dd62"),this.data.survey&&/hao123\.com|114la\.com|2345\.com|123\.sogou\.com|hao\.qq\.com|duba\.com|hao\.360\.cn|maxthon\.cn|0\.baidu\.com|daohang\.qq\.com|hao\.360\.cn|firefoxchina\.cn/gi.test(document.referrer)&&(this.data.surveyUrl="https://wj.qq.com/s/1685917/82ab"),this.render(),$(window).on("scroll",_.debounce(this.go_top_control).bind(this))},render:function(){this.$el.html(this.template(this.data))},refresh:function(){this.trigger("refresh",this)},on_comment:function(){this.trigger("comment",this)},on_back:function(){this.trigger("back",this)},go_top:function(){window.scrollTo(0,0)},go_top_control:function(){var e=$(window).height();$(window).scrollTop()>1*e/2?this.$el.find("[data-role='go_top']").find("a").fadeIn():this.$el.find("[data-role='go_top']").find("a").fadeOut()},isIE:function(e){var t=document.createElement("b");return t.innerHTML="\x3c!--[if IE "+e+"]><i></i><![endif]--\x3e",1===t.getElementsByTagName("i").length}})},function(e,t){},function(e,t){
e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAABaCAYAAAALk14LAAAVTUlEQVR4nOWceVyU1f7H388wwzIiiAIKsimmYqCGS6amZnZVTFs0I8uy0q6XbHNLs9TQbDNK7ao3c0tTWkivuS9dNFEzFC0KUVFkhk1ZRGBYZ57fH88wC8wMM5NavX6feZ3XnOec7/me7/c537Of8wiiKPKHcP/99lDJgFeAHUDWH8gtGtgHLABWOpz60CGDMLcDw4AE4CcgykkeMmA94At8CIQ4K8ztUvou/X8bYD8Q4ASPGKC73q8EZjorzO1SupWJvx2wERAc5PHPRs+PAwpnhJE7k8gJuDV6fgCYCqxCUr4DEAl0AwIBT0ALlAJq4HdgeCMe/sBg4KCjwsgBau680+4E9cB6ucAhF5hdJ3KPfzt7ktVYCHsbuE/vfO0WwByDcEJph8y7BohXCB47XVhYBas3ywVvO5PesBDmBzyG8wqD1Jo7DLvNWwQSFELAWRl70TcoWQJhO68VjHrQr522meRFzghnB/zZvdtyTEyM1UR2l/R3LnifkLEPYwsKMHylXPi4maQtkBodh6ARRSZVVzOjpgYbI4lIYmLuc5S3XUpfEJB9KRe+wkIfq4OXRpQWbk0oKmxtIakL8B1g1wjGFCfCw8nR6UjTasnW6ayReQC7iIkZ6AjvZpWuBj5SCHO1TVtP0z4ndr8L5x8tLYx/q7gw3IRkLvAPRwQCwMMDYcQIw6NCsNm7eQDfERMTbovIFM0qvUEuROULLLCU7eI6kW7GQmijgbd+k3GxvKDg99qioi3AfFu8q7HcrDNyJPcMG0ZU9+6MGjWKoE6dzNLUNU3hByQSE+PanD7QTEOWJkO214W1clBMrxP5yUXgsP41tRchUgdLdCK7XGCTXKAaGK0FV4hwUSojrPHdWlfH+ro6XAWBalGkrSDwoqsr/V1cwN8fnngCd3d3li1fLiVISSFv8WIW19RwWaejFpjl6soIuZn4vYG39M4mBFEULfbT1cA0V2FSucD6N+pEeujghgDTFAJlAgzXQly9sYkpEGCri0BcvYibIODm7w82zFKLVOFFIFcUaQH4+PnBokUQGtqEvuTYMbSHDuGXlgbV1dbY1gI92L37nFOt99dywaNK4J1FeoUBvESYole0u868TW0nwmv1Im6AzM3NpsIgKQxSuxDk4YHPuHGwahWEhqJWq9Fqjb1gXl4e5YGB+L31FiQmwqxZEGJxvuEKNO5NXICOSAOZaEBmsaRLBZirEF6bVycmBFvoL95RCEyrF/G20pcoWrVC5u5uU2kA5HJ49FF45BHwNo5z3l6wgJdffZW0tDRulJXh6+vL2bNneXHaNGNarRY2bICkJEucY5FmYcOBfkjdZgP+Z1HpUzJcg0Wy/EWCLHGsbMTFDHaYNgDBwTBvnsUS27xpE7m5ueTn51NTXU1dXR3TZ86kW7duTfmsWQPbtjUOFbE+oamwVqfHAd/YltoyZG5uKHx8bBO1bw9Ll5qVrilEUSQjIwN3d3c6hIWh1WqRK6xMqOrrYfZsOHfOXhHXWVP6ANLE32HIvbxwUSqtEygUsHy5xcbKaVy5AtOmSSZvGzeAOy01ZOE4MYJqQLN1+ZFHbq7CIPEbOtQeyqmA2pLSU3B8gg+AzNUVQWZjvOPqCo895gzr5vH44821I+8BW6Fpl+UKPOtsvjIPD9sEOp3kbgUCAyEy0lrs18C8hofGSg9CWpFwGIJMhktzpl1fDzt2OMPePgy0OO9YA0wADG+7sdJONV6gL+XmuimAffvgjy47W8Ndd1kKnY80ADRAxvXNuKXMxS1lLkAfZ/Oz2WKboqgIfv/d2Wxso317aFrFmqyuNC5pu6dnZkwUCgQXl+YJG3D8uDPZNA9BgLCwxqFNil8QSze5Ii2ePwVYWghwHgU3YPp/oabePLy9Nyx/9KZm1QxKgU3ALFo9VStDFD9AFF9GFFsjitxU17YlxA1o2gHmlkHu9Zubl23no9cxHkAG4kRpqHqL3IAwmDYQFI3M/3j2rcvTupsCIAfx5pq0JQzuCBH+sCsDfrwM5TWg1ekFua1oDSCIJetve85/KnwmCbJbYUY56qKbzvPmOalO31SmGefz6Dc8gRx1scNpNVU17Nx3tlm6ouJyiorL/4DSTrSGCf8+wML3vjcL+/yLH0lMOknDaMu3dQsSk06yc98vzfJLTDpJjqqYoqJyXpj+NclHMy3SFRWVk3w0k5jYlcTErnRY7gbZ5A3aO4Kc3BJKr1cZ3tznm1KY//4+4l8fjpGfSF5BGWd/+53VG35kw4qJ+LbxbMIr43w+0+fvILp7AF+vfR6AgsIyMs7nseegNHLzaunOjyeyOHD4oiFdQvwYnJEdQG4yDncIPq08MKbVcei7qUR0bkfG+QIAlB5ypsdJOy6BkQs5eDiD2Ed7NeET0bktM+MGsXTlEcY/vxaAHpGBzFq4ndO/5BPdPYBOHXzpcWcgjz3Uk/AwX/zaeOpfoHOy213SGecLOJueS0VlDcd+zkadV06/XqH079uB+e8fICHeDRCprKwFQFNVw5ZvU0k/l6/nYKxTjTE97j6WrjzC6V/yGf9QJBGd2xr8S94cjdLDFU1VLUoPaS0/OeUCFy9dY/LE/k4pbXedfm/ZQRJWHSY9Ix91XjkAm785xaVsaUNy+vydzFqwg4pKaU1a6a6gnX9LWnk1TDct8y0qKufVN4wrmv16hYIoEh0VQL9eoSjdFeSoiunU511yVMUgikz45xbSM/L/SJ22z0Q2fvqEwR/ZtS0AkyfeYwg7lDSZiM7tSE6R6l2Ouph+vULp3i2AzzalSko3yquouJLuQz4mOqodW1bHMmFqInkFZYCOmS8O5uKla4COSo30Io/9fImQIOkkx1OPRTfhZy+casg8PRu2jKS0QQEtmbVwJ1eLKlHnS1bQb+S/DfRBAS0ZNqgzjfNSKuUkxI9kzIhIg+n+8ONFpv9rMG39PJn99i4mT+xHROe2BAW0pFOHNoBIUEBLunVp24SfvXCqIZNa5XwqKqqZPLEfu7c+y8Ej52nn3xKACVO/Ycemp2ihdKXwWjl9o0P0SpnnpfSQE/tITwB27k8H4PSvBWiqqgGd/gVKafr3CaaFUgHoWPnBQyg95E342Qu767RGU0NqWg4JK5NZuvIYGeev0TMyEEQR39ZKYh/uyZD+4RQUSictFn5wgMrKGob0D0fprrDJO0dVQvzSQ0RHSdXmSk6Jof7lqErQaGo49nMOoUGtQBTZ/M1pioornK7TMultNe/GT/6SMU9/yQ9HLxEU4En/PsH07tke0JFxPp/klAuAjnb+niS8/Q+GDuzAmKe/JON8vk2+idtOM+75L+nfJ5gPFzTsSTfEQ0iQNydPXyHm/jtMSlckPSPPLrmbOgfMe2bcAACGDOhI4raznDilMjBpoVSwfmsqp39RM3VSP5QeCjRVdSxddYKzv+UR0dnPIk9NVR3TF+xn/JiuLJn3D37PLNTHiGRlFxteQHJKFkMGdDTk18rLjYuXixgyoINdsjeG3eY9pH8HhvTvYBKGwR/S3puNK8aRoy7jX7O2k5qmYvWGE5JF9A6xylPpLifv7Aw+WTQKpbuci5ek7i/iDj9Sz6gZP7orRcUVfLb5DH3vCmLn/gwSVv3IkAEd2L4n49abt7lrGGiYhy+ZN4wDR64w5pmvWLrqJ+bPuJeQIC+bvDRVNeSoSwx8o6P80FTVsPtQFpFd/bhWJPUGSg8XwkNbsXTVT3gqFVwt0pB8LMsJ2R1UeueBDDRVNRaV1lTVcDItx8yM4j86QsLqo2ScL7TK84qqhH6j1vP55p9J+M8Jhg4MY0vSGdT5FXTq6EMLpXTa4JmXkpgVvx+Ai5eLiH04gtnxBygqqXBYaUEsXGJ3ZxfYcwUPDAom40IJsQ9FMH3qPXz+5SnSz13jWGoe6vxKxo++gzdfGwTAjIX7OXBEBUBQQAtihnZk4awhTfgmrD7O0tWpAOzY8ChjJn0nKXd8KkoPhSGPkPbejBzaSd91Qb8HNxEU0IIXnurB5Cebjustwn+uIIiFi+1WOvlYNhPidhEd5cuGZaPxba3kmZd3cOCIiheejOS5J3oSEuTdJM3sRcmo8ysB+OWHZ/Ftbb5GrqmqY/wL3zHzX3czpH8YCz88zJABoQzpH2ZTntQzecTN3Y86v5ITO59qkrdlpecJgli4yLlhjQPQVNVxRVVGC6XCPsEc5F1UrLGfr/+bghzxFm2omUDp7kLEHfr1x5ucn9LdhZD2LR3i6/R8+u8Mh5Wuqq7Hw/12HRO/NXDIvI+eLGDL9susXHIPmVnXSc8stUg35J4A2vhY3rad+14qkx7rRJfwVmZ+a7TvzulN0u7LAIyNMR+BqfIq0FRJW0bpmaVN4q3BoZJe+UUmC17rjvkAxYhKTT0fr71A356+tPExnljMzCoz+Mtu1HJZdQMQzfwAvq3dzF7W3sOFvDvHdFNAx10j9xjiI8I9CQ2SeoKITt5UVdfaZYVy0c456b5kNVFdvekc7oWmuo7O4V50DvcyxFdV1zMz/hTzXupKUKASU76x044xYrC015+VU8mO/Wq8vRRm/mx1JWNjghkbE2aWr6j/NfgBTu8ZgTU0p4+AneZdVV3Pxm8vsyK+N6rccqa8/jPb1gw0vNWq6npmLjpNt85ejB0ZYrElXfK6NG9+4/00nhnXkS7h3mb+pN1X9OPjRmlFnWHMbIj7gz2AXea9bG0GPl4Kko/n80PKVd58qSse7jJAR1p6CXPf/5XoSG9SUovpEVHAwL6WTnA05GM6hG3sN6WTEB2z3+RJtBAmYcRgX8OLbQ52KT18cFsu5VTyQ0oh3Tp7MbCvL2npRXyzS022WsOyhT3oEu5FZtYNlq+7wO7/5fHMuDC6mJj/G++fAeB0ehllNzLx9lKY+bPVGsaObN9E6dO7zY9KvfPpebau6M3Gb7NZ8rp0ySAtvYRjp4qbpLWutB2mctedrajUSKesnxsfhiq3gg9Xnyfu6Q4M7KOfK4s6unT05N+L7yJpt4pte1XMiTOefn5mbAgAZTeyGPNAO8KCWpj5Dx69qjdlC+bdCCGBHpz+tcwQ92vGdTqFKu02e7tKWpWn4eWFv7H2/SjOXbzOpZxKVsRHkXz8Gkm7c5rQt/VzZ2yMeal1CZd2N7xbuhAWpKRLuKeZPz3zOpZWTKNHJQMw78WOjI2Rjqp6uAuEh3qgyqsgOFDJ3sNXWREf1SStDaWbb713HMija0cPvtmVS9dwT9r6md8tK7hWTUpqKWNHNtwmlOpqVbWWnFwNAJlZ0tpZWXk92eoKQDTzF1yTlnlVeZUEBxonJKd33UvS7lxAajAb+A/t78uOA3n06OZN9whPfRdpX08k6NQv/uEJR+alcjZ+q2LJbPNTuqq8KlZtvuwQr67hnjw9NoTi0lqefOUMe7/oS9IeSenILl6GfKqqtTzywikA1rwXRXBgMwf39BDafyo4NDjJvFRBtkpD2m83mBPXySTGcssbHOjGktldDc9p6de5WlzLcH2f3fA86O42eLibHs/QkZNbQXRkw36VxP+ntBK6hrdAWrSoo3UrOSXX6zBdILAHdin9RZKaT9bnMmJQK3pFeTGwTysyLxkv1WWrNJSV15mF+fq40sbHlapqLad+LWPlJmkxIW5isEFApVJG2pEyPl57hdHD2hA7OtAwkvs18wa9oloalK7UaNny30LWvNeNoz8XsXjFZd58SRp2TpmTzpQnAk2ql20IOtWUZs27uLTWbFipyq9ilV4Ja4i5z5deUd48//rvhLV3I+Y+Xwb2sXy8pbi0lsTvC/j+UDHLFtxBl46evPHBeWZMCaONjytJewr44VgpwYFu3BGmJGnvNRa80oEuHaXGMfNSBcvXq5gTF0ZwgG0zF4I+EwSdavItXURo/MJsoapa28jMm8Y3wBadLQhBaxyr086gjY/92y8e7oJNWim+Ac7LfVtWTv5qcGrX8u+O/6/LRRZK+kYtZJYiXC6D6zVQWW+c3v1VIQjQQg7ebogdvaGLD3hZbkDN63S9DiElH9Kuge4vrmRjiCKU10J5LYK6HI7mQk8/xIEBIDc/4W0saU09wrcX4armT5D4FkAHpBYg5NxAHNcJlMZlJElprYiQdAEKKv88IW8VCioQki4gTugCLlKXJwMdQnIO5JZjuE1jzT27Coa92jxdg+vxKCxOsc3v2VXmYab0M7ZJPKylnbHNPjlyyyUdDbuWZTVwslA6itycE4GH42DlRXM387+W6XX6fWxr/D6bAh27Q4+x5nmY+nWi9bTFBfDcf+yT/WQhXJemr4K48R6RI7n2mco/10HOOdjzgfX4PnZc3ls1G059Jfl7PQ7Dn4biQttpJ4daDv8wFRI/NPKzhUHt4eljgiDOjxBRlVsminkdxk2zHNeArHR4Z6TluN6x8MRsmOHA50g+Om2kn7cH9m2E1ETr9OtUtmUwRZAnxGcIcoo11i9miqLEMN7Ktxz6TICRk6ynb+j2rMVvzJP+P50JP28xhpvS60Tr6R+cK8nXui1EP27OwxKuSg21nPJq0FrpkxtWaG29lIb4lzbD3Q9YpmtQzhRPtZXcwkMSH1MaU/+0pcBS+HoF7FhszmNYLBzQW8GISXBik+X8G1Ah6SFHJlRSq7V8B1wnQqdI2FxoMRqAi+lSQ/HJhKZx/SbCxDnwYjPfRtKJ8IR+VXXrNaN/0f9g1zrLyjz0lvSytsVLz8Mehz5P2lZcIasGkKOpOYuI5eO03y2UnL14ZCH0vg/mDdYrow83tZTV52CqcQkJUZTotFp47Ss4fsBIbxrXGLEvw9blxrh9iRDzLKRssC6fTnsGQEa99iBaLRbda4mS6/eMJKxWCw8vgHcOG/2vJRrpRZM6bOm5QcDGz6Io8enSA5aOaxrXWK53DsPx/fDtW8awb/Vf+jCVp7Gr1+4HEMSHPEOQvvtnvt038Hl47g14Tn8TcV0WrFsCR9fC9nJ4WDoHygfHYMdaKfyxxfDkK9bfNEDJVSPP2UnQVb8V85ydNx7XZUFRIcy2ctZ7XRacOwMfjG0cUw/cwfbybEF80AOkz2S8akby0U+w/XP4cY30PGe79P/ew1LcyUPw1Rtw7xR4eDLMuNs+oTdkw6Qwc/+9U2D2MtvpNn8Cfe+Ha/mSDM3lce5MY7plfK95FUAQR7qBdFn8CGCn5H87/AQMZnd1DYBcf3O9FhiN9HlKi5eQ/8ZIA0azt9bwmSRBfMBsVVEJvAvEcfu+P3irUI/0bdG57K83my8L4v0Wb7eHIX0VZhTSnWp/jF/e+atCBxQiNcq7gEQO6rItEf4fDCJzLhHJDAEAAAAASUVORK5CYII="},function(e,t){e.exports='<ul data-spm="user-feedback">\n    <a class="fixed-operation" target="_blank"></a>\n    <%if(classicSohu){%>\n        <div class="classic-sohu"><a class="rightbutton"><img src="http://statics.itc.cn/sohu-homepage/oldright.png" alt="经典狐首"/></a></div>\n    <%}%>\n    <%if(survey && surveyUrl){%>\n        <li class="prize-survey"><a href="<%=surveyUrl%>" target="_blank"><em>有奖<br>调查</em></a></li>\n    <%}%>\n    <%if(comment){%>\n        <div class="comm-btn"  data-role="on_comment"><a href="javascript:void(0)"><em class="icon-comment"></em></a></div>\n    <%}%>\n    <%if(home){%>\n        <li class="back-sohu prize-survey" data-role="on_back"><a href="http://www.sohu.com" target="_blank"><em>返回<br/>首页</em></a></li>\n    <%}%>\n    <%if(feedback){%>\n        <li class="user-feedback"><a href="<%=userlink%>" target="_blank" data-spm-acode="8072"><em>用户<br/>反馈</em></a></li>\n    <%}%>\n    <%if(refreshable){%>\n        <div class="refresh" data-role="refresh"><a href="javascript:void(0)" title="刷新"><em class="icon-cached"></em></a></div>\n    <%}%>\n    <li class="back-top" data-role="go_top"><a href="javascript:void(0)"><i class="icon"></i></a></li>\n</ul>'},function(e,t,i){var n=i(49);e.exports=Backbone.View.extend({template:_.template(i(50)),events:{"click .search-btn":"onSearch","keydown [data-val='key']":"keydown","focus [data-val='key']":"focus","blur [data-val='key']":"blur"},data:{d_val:""},p_id_map:{HOMEPAGE:"0001",CHANNEL:"0002",TAG:"0003",ARTICLE:"0004"},search_host:"https://www.sogou.com/",render:function(){this.$el.html(this.template(this.data))},initialize:function(e){var t=this;if(e.scene&&(this.p_id=this.p_id_map[e.scene]),this.data.d_val=e&&e.d_val,this.data.d_val&&(this.data.d_val="大家都在搜："+this.data.d_val),"TAG"==e.scene)this.render();else{var i=e.channel_id||0,s=new n,a=[];this.render(),s.on("sync",function(e){e.forEach(function(e){e.channel_id==i&&a.push(e.word)}),t.randomWord=a[Math.floor(Math.random()*a.length)],t.randomWord&&(t.data.d_val="大家都在搜："+t.randomWord),t.$el.find(".search-input").attr("value",t.data.d_val)}),s.on("error",function(){t.render()}),s.fetch()}},onSearch:function(e){var t,i=$(this.$el).find('[data-val="key"]').val();i==this.data.d_val&&(i=i.replace("大家都在搜：","")),""==i?t=this.search_host:(this.randomWord&&i==this.randomWord&&(this.p_id="0005"),t=[this.search_host,"sogou?query=",window.encodeURIComponent(i),"&pid=","sogou-wsse-f880d0d6a01ba52f-",this.p_id,"&ie=utf8"].join("")),window.open(t)},keydown:function(e){var t=window.encodeURIComponent($(this.$el).find('[data-val="key"]').val()),i=navigator.userAgent,n=""==t?this.search_host:this.search_host+"web?query="+t+" site:sohu.com";if(13==e.keyCode)if(/MSIE ([^;]+)/.test(i)){var s=$("<form/>",{target:"_blank",action:n,style:"display:none;width:0;height:0",method:"post"}).appendTo(document.body);s.submit().remove()}else this.onSearch()},focus:function(e){$(e.currentTarget).val()==this.data.d_val&&(e.currentTarget.value="")},blur:function(){var e=this;setTimeout(function(){e.$el.find('[data-val="key"]').val(e.data.d_val)},200)}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.url="//hotword.sogoucdn.com/hot_word.json"},fetch:function(){var e=this;$.ajax({url:this.url,type:"GET",dataType:"jsonp",jsonpCallback:"_getjson",success:function(t){e.trigger("sync",t)},error:function(t){e.trigger("error",t)},timeout:3e3})}})},function(e,t){e.exports='<input type="text" class="search-input left" value="<%=d_val%>"  data-val="key" data-spm-acode="8066">\n<span class="search-btn" data-spm-acode="8067"><i class="search-icon icon"></i></span>\n<form target=""  style="display:none;width:0;height:0"></form>\n\n\n'
}, function(e, t) {
    e.exports = Backbone.View.extend({
        setPosition: function() {
            var e = this,
                t = this.$fix_el;
            if (this.top_dis = $(this.$el).offset() && $(this.$el).offset().top, $(window).scrollTop() + this.offset_top >= this.top_dis) t.is("." + e.fixClsName) || (t.addClass(e.fixClsName).css({
                left: e.left_dis + "px"
            }).append(e.rel_selector.clone(!0)).css({
                opacity: 1
            }), e.need_hide_on_fixed && e.rel_selector.hide(), e.trigger("fix_change", {
                fixed: !0,
                o: e
            }));
            else {
                t.is("." + this.fixClsName) && (t.removeClass(this.fixClsName).css({
                    left: ""
                }).html("").css({
                    opacity: 0
                }), this.rel_selector.show(), this.trigger("fix_change", {
                    fixed: !1,
                    o: this
                }));
                var i = t.offset() ? t.offset().top : 0;
                i > 0 && i != this.top_dis && (this.top_dis = i);
                var n = t.offset() ? t.offset().left : 0;
                n > 0 && n != this.left_dis && (this.left_dis = n)
            }
        },
        initialize: function(e) {
            this.fixClsName = e && e.fixClsName || "right-fixed", this.rel_selector = $(this.$el.data("rel")), this.$el_clone = this.$fix_el = $("<div></div>"), this.$el.append(this.$fix_el), this.rel_selector.next().length <= 0 && (this.need_hide_on_fixed = !0, this.$fix_el.addClass("no-tran")), this.offset_top = e.offset_top || 0;
            var t = $(this.$el).offset();
            this.top_dis = t && t.top, this.left_dis = t && t.left;
            var i, n = this;
            $(window).on("resize", function() {
                var e = $(n.$fix_el),
                    t = $(window).scrollTop();
                i && clearTimeout(i), i = setTimeout(function() {
                    var i = n.$el.offset() ? n.$el.offset().top : 0;
                    i > 0 && i != n.top_dis && (n.top_dis = i);
                    var s = n.$el.offset().left;
                    s > 0 && s != n.left_dis && (n.left_dis = s), e.removeClass(n.fixClsName).css({
                        left: ""
                    }).html("").css({
                        opacity: 0
                    }), !e.is("." + n.fixClsName) && t + n.offset_top >= n.top_dis ? (e.addClass(n.fixClsName).css({
                        left: n.left_dis + "px"
                    }).append(n.rel_selector.clone(!0)).css({
                        opacity: 1
                    }), n.need_hide_on_fixed && n.rel_selector.hide(), n.trigger("fix_change", {
                        fixed: !0,
                        o: n
                    })) : n.trigger("fix_change", {
                        fixed: !1,
                        o: n
                    })
                }, 100)
            }), $(window).on("scroll", _.throttle(n.setPosition.bind(this), 200))
        }
    })
}, function(e, t, i) {
    i(25);
    e.exports = Backbone.View.extend({
        setFixed: function(e) {
            var t = this,
                i = $(window).width();
            e ? this.$el.addClass("article-do-fixed") : this.$el.removeClass("article-do-fixed"), i < 1180 ? t.$el.css({
                left: 0,
                marginLeft: 0
            }) : t.$el.css({
                left: "",
                marginLeft: ""
            })
        },
        initialize: function(e) {
            var t, i = this,
                n = e.rel_el,
                s = $(this.$el).offset() ? $(this.$el).offset().top : 0,
                a = this.$el.outerWidth() || 140;
            $(window).on("resize", function() {
                var e = n.offset().top;
                $(window).width();
                t && clearTimeout(t), t = setTimeout(function() {
                    var t = $(window).scrollTop();
                    t >= s - 70 && t < e - a ? i.setFixed(!0) : (i.setFixed(!1), s = $(i.$el).offset().top, e = n.offset().top)
                }, 10)
            }), $(window).on("scroll", function(e) {
                var o = n.offset().top;
                t && clearTimeout(t), t = setTimeout(function() {
                    var e = $(window).scrollTop();
                    e >= s - 70 && e < o - a ? i.setFixed(!0) : (i.setFixed(!1), s = $(i.$el).offset().top)
                }, 10)
            })
        }
    })
}, function(e, t, i) {
    var n = i(54);
    e.exports = Backbone.View.extend({
        template: _.template(i(58)),
        data: {
            portable: !1
        },
        initialize: function(e) {
            this.render();
            var t = "";
            this.data.portable = e && e.portable, this.data.portable && (t = document.createElement("canvas").getContext ? "canvas" : "table", this.$el.find("#float-qrcode").qrcode({
                render: t,
                width: 100,
                height: 100,
                text: window.location.href
            }));
            var i = $("[data-role='contract-btn']");
            new n({
                btn: i,
                el: "body"
            })
        },
        render: function() {
            this.$el.html(this.template(this.data))
        }
    })
}, function(e, t, i) {
    var n = i(55),
        s = i(56);
    e.exports = Backbone.View.extend({
        events: {
            "click .radio-sel li": "optSelected",
            "click .us-btn-ok": "submit",
            "change .write-need textarea": "checkValue",
            "click .us-pop-wrapper": "hidePop"
        },
        data: {
            options: [{
                id: "0",
                content: "网站功能问题反馈"
            }, {
                id: "1",
                content: "推荐内容问题反馈"
            }, {
                id: "2",
                content: "侵权投诉"
            }, {
                id: "3",
                content: "产品合作"
            }, {
                id: "4",
                content: "商务、媒体合作"
            }, {
                id: "5",
                content: "搜狐公众平台相关问题"
            }, {
                id: "6",
                content: "广告合作与投诉"
            }, {
                id: "7",
                content: "其他"
            }]
        },
        imgUploadurl: "http://changyan.sohu.com/api/2/comment/attachment",
        exsist: !1,
        imgPool: [],
        answers: {
            type: 0,
            desc: undefined,
            contact: undefined
        },
        template: _.template(i(57)),
        initialize: function(e) {
            var t = this;
            this.btn = e.btn, this.btn.on("click", function(e) {
                if (t.exsist) {
                    t.pop_el.toggle();
                    var i = !("none" == t.pop_el.css("display"));
                    t.showShade(i)
                } else t.$el.append(t.template(t.data)), t.exsist = !t.exsist, t.pop_el = t.$el.find(".us-pop-wrapper"), t.shade_el = $(".body-shade"), t.showShade(!0), t.feed_el = t.$el.find(".unfeedback"), t.options = $(".radio-sel"), t.uploader_ipt = t.pop_el.find(".myFile"), t.upload_btn = t.pop_el.find(".add-file"), s && (t.placeholder = new s(t.$el.find("input,textarea"))), "undefined" == typeof window.FormData && (t.upload_btn.addClass("disable"), $(".upload-err-info").text("您的浏览器版本过低，不支持图片上传").show()), t.uploader_ipt.on("change", function(e) {
                    t.upLoadImg(this)
                }), t.scrollbarCaller();
                return !1
            })
        },
        hidePop: function(e) {
            return $(e.target).hasClass("us-pop") || $(e.target).parents(".us-pop").length > 0 ? $(e.target).hasClass(".close-us") || $(e.target).parents(".close-us").length > 0 ? (this.pop_el.hide(), this.showShade(!1), !1) : void 0 : (this.pop_el.hide(), this.showShade(!1), !1)
        },
        submit: function() {
            var e = this;
            if (this.answers.desc = e.$el.find(".write-need textarea").val() == e.$el.find(".write-need textarea").attr("placeholder") ? "" : e.$el.find(".write-need textarea").val(), this.answers.contact = $(".input-mode").val() == $(".input-mode").attr("placeholder") ? "" : $(".input-mode").val(), !this.answers.desc || this.answers.desc <= 0) return $(".box-need").find(".err-info").show(), !1;
            this.answers.pics = this.imgPool.join(","), this.answers.url = window.location.href, model = new n({
                data: this.answers
            }), model.on("sync", function() {
                e.pop_el.fadeOut(), e.showShade(!1), e.feed_el.fadeIn().delay(2e3).fadeOut()
            }), model.fetch()
        },
        upLoadImg: function(e) {
            var t = e.files[0],
                i = this;
            if (!window.FormData) return void alert("您的浏览器版本过低，不支持上传图片");
            t && $.ajax({
                url: this.imgUploadurl,
                type: "POST",
                data: new FormData(this.pop_el.find("form")[0]),
                cache: !1,
                processData: !1,
                contentType: !1,
                success: function(e) {
                    var e = JSON.parse(e);
                    i.addImg("[data-role='img-pool']", e.url), $("#mt-file-upload")[0].reset()
                }
            })
        },
        addImg: function(e, t) {
            var i = this.imgPool.length;
            $(e).append("<span class='add-img'><img src='" + t + "'><a class='close-pic'></a></span>"), i++, this.imgPool.push(t), this.imgPool.length >= 5 && (this.uploader_ipt.attr("readonly", "readonly"), this.upload_btn.addClass("disable"), this.upload_btn.on("click", function() {
                return $(".upload-err-info").show(), !1
            })), $(".close-pic").one("click", this.removeImg.bind(this))
        },
        removeImg: function(e) {
            var t = $(e.currentTarget).parent(".add-img");
            src = t.find("img").attr("src"), t.remove();
            for (var i = 0, n = this.imgPool.length; i < n; i++)
                if (this.imgPool[i] == src) {
                    this.imgPool.splice(i, 1);
                    break
                } return this.uploader_ipt.attr("readonly") && this.imgPool.length < 5 && (this.uploader_ipt.removeAttr("readonly"), this.upload_btn.removeClass("disable"), $(".upload-err-info").hide(), this.upload_btn.off("click")), !1
        },
        optSelected: function(e) {
            this.options.find("li input"), this.options.find("li").removeClass("clk"), $(e.currentTarget).addClass("clk"), this.answers.type = $(e.currentTarget).attr("data-id")
        },
        showShade: function(e) {
            var t = this;
            e ? (t.shade_el.show(), $(document.body).css({
                overflow: "hidden"
            })) : (t.shade_el.hide(), $(document.body).css({
                overflow: ""
            }))
        },
        checkValue: function(e) {
            "" == e.currentTarget.value ? $(".box-need").find(".err-info").show() : $(".box-need").find(".err-info").hide()
        },
        scrollbarCaller: function() {
            function e() {
                var e = $(window).height(),
                    t = $(window).width(); - n.left > t / 2 ? (i.css("marginLeft", 0), i.css("left", 0)) : (i.css("marginLeft", ""), i.css("left", "")), -n.top > e / 2 ? (i.css("marginTop", 0), i.css("top", 0)) : (i.css("marginTop", ""), i.css("top", ""))
            }
            var t = this,
                i = t.pop_el.find(".us-pop"),
                n = {
                    left: parseInt(i.css("marginLeft")),
                    top: parseInt(i.css("marginTop"))
                };
            e(), $(window).on("resize", _.throttle(e.bind(this), 200))
        }
    })
}, function(e, t, i) {
    var n = i(4);
    e.exports = n.extend({
        init: function(e) {
            this.data = e.data
        },
        fetch: function() {
            var e = this;
            this.url = "//apiv2.sohu.com/apiV2/qt/advise?", $.ajax({
                url: this.url,
                type: "GET",
                dataType: "jsonp",
                data: this.data,
                success: function(t) {
                    200 == t.code ? e.trigger("sync", t) : e.trigger("error", t)
                },
                error: function(t) {
                    e.trigger("error", t)
                }
            })
        }
    })
}, function(e, t) {
    e.exports = function() {
        function e(e) {
            e = this.filter(e), this.bindEvents(e), e.trigger("blur.placeholder")
        }
        e.prototype = {
            constructor: e,
            setPlaceHolder: function(e) {
                var t = this,
                    i = $(this);
                "" !== t.value || t.acticved || (t.value = i.attr("placeholder"), t.actived = !0)
            },
            clearPlaceHolder: function() {
                var e = this,
                    t = $(this);
                e.value === t.attr("placeholder") && e.actived && (e.value = "", e.actived = !1)
            },
            bindEvents: function(e) {
                e.on("focus.placeholder", this.clearPlaceHolder), e.on("blur.placeholder", this.setPlaceHolder)
            },
            filter: function(e) {
                return e.not(":radio, :checkbox, [type=hidden],:file")
            }
        };
        var t = "placeholder" in document.createElement("input"),
            i = "placeholder" in document.createElement("textarea");
        return t && i ? null : e
    }()
}, function(e, t) {
    e.exports = '<div class="us-pop-wrapper">\n<div class="us-pop">\n\t<a href="javascript:void(0)" class="close-us"><i class="icon-close"></i></a>\n\t<div class="wrapper">\n\t\t<div class="us-tt">联系我们</div>\n\t\t<div class="box box-problem clear">\n\t\t\t<h4>您想要解决的问题（必填）</h4>\n\t\t\t<ul class="radio-sel">\n\t\t\t\t<% for( var a = 0 ; a < options.length ; a++) { %>\n\t\t\t\t\t<%var item = options[a];\n\t\t\t\t%>\n\t\t\t\t\t<li data-id="<%= item.id%>" class="<%= a==0?\'clk\':\'\'%>"><span class="radio-icon"><input type="radio"></span><%=item.content%></li>\n\t\t\t\t<%}%>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class="box box-need clear">\n\t\t\t<h4>请在下方说明您的需求（必填）</h4>\n\t\t\t<div class="write-need"><textarea placeholder="请详细描述"></textarea></div>\n\t\t\t<span style="color:#ff0000;display: none" class="err-info">必须填写</span>\n\t\t</div>\n\t\t<div class="box box-pic clear">\n\t\t\t<span class="tt">添加图片：</span>\n\t\t\t<form id="mt-file-upload">\n\t\t\t\t<span class="add-file"><input type="file" class="myFile" name="file" accept="image/jpg,image/jpeg,image/png"><a href="#" class="file-btn">点击上传</a></span>\n\t\t\t\t<div data-role="img-pool">\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t<span class="err-info upload-err-info">图片最多上传5张</span>\t\t\t\n\t\t</div>\n\t\t<div class="box box-mode clear"><span class="tt">您的联系方式：</span><input type="text" class="input-mode" placeholder="微信/QQ/手机/邮箱，方便工作人员与您取得联系。" /></div>\n\t\t<div class="btns"><input type="button" class="us-btn us-btn-ok" value="提交" /></div>\n\t</div>\n</div>\n</div>\n\n<div class="unfeedback"><i class="feedback-icon"></i>\n\t<p>我们会尽快处理您的反馈，谢谢支持！</p>\n</div>'},function(e,t){e.exports='<ul>\n    <% if (portable){%>\n    <li class="qrcode-fun" data-role="code-btn"><a href="#" target="_blank"><em class="icon-qrcode"></em>手机浏览</a>\n        <div class="wx-code">\n            <div class="cort"></div>\n            <div class="code-pic"  id="float-qrcode"></div>\n            <p>扫一扫<br />手机上看热点内容</p>\n        </div>\n    </li>\n    <%}%>\n    <li class="contact-fun" data-role="contract-btn"><a href="javascript:void(0)"><em class="contact-icon icon"></em>联系我们</a></li>\n</ul>'},function(e,t,i){var n=i(60);e.exports=Backbone.View.extend({template:_.template(i(61)),events:{"click li":"liEvent","click .uninterested-ok":"submitInfo","click .uninterested-link":"showBox","click .uninterested-box":"keepLive","click .otherquestion":"showTextarea"},data:{callback:"callback",mpId:0,mediaId:0,dislikeTypes:[],detail:"",suv:"",count:0},init:function(){this.$el.find("ul li").each(function(){$(this).removeClass("clk"),$(this).find("input").prop("checked",!1)}),this.$el.find(".unia").hide().find("textarea").val(""),this.hideInfo()},isPad:function(){return-1!=window.navigator.userAgent.indexOf("iPad")},liEvent:function(e){this.checkItem(e),this.hideInfo();var t=$(e.currentTarget).find("input");t.prop("checked",!t.prop("checked"))},checkItem:function(e){$(e.currentTarget).toggleClass("clk")},showTextarea:function(){this.$el.find(".unia").toggle().find("textarea").val("")},getCookie:function(){var e,t=new RegExp("(^| )SUV=([^;]*)(;|$)");return(e=document.cookie.match(t))?unescape(e[2]):null},showInfo:function(){this.$el.find(".btn span").show()},hideInfo:function(){this.$el.find(".btn span").hide()},showFeedback:function(){this.$el.find(".unfeedback").delay(500).fadeIn(400).delay(2e3).fadeOut(400)},hideFeedbackBox:function(){this.$el.find(".uninterested-box").hide()},keepLive:function(e){e.stopPropagation()},submitInfo:function(e){e.preventDefault();var t=this,i=this.$el.find(".unia textarea").val();return t.data.dislikeTypes=[],this.$el.find("ul li.clk").each(function(){t.data.dislikeTypes.push($(this).data("val"))}),-1!=$.inArray(10,this.data.dislikeTypes)?this.data.detail=$.trim(i):this.data.detail="",0==this.data.dislikeTypes.length?(this.$el.find(".btn span").show().text("*请选择原因"),!1):-1!=$.inArray(10,this.data.dislikeTypes)&&""==this.data.detail?(this.$el.find(".btn span").show().text("*请填写原因"),!1):void(0==this.data.count?this.model.fetch():(this.init(),this.$el.find(".uninterested-no").fadeIn(400).delay(2e3).fadeOut(400),this.hideFeedbackBox()))},showBox:function(e){e.preventDefault(),e.stopPropagation(),this.hideInfo(),this.$el.find(".uninterested-box").toggle()},render:function(){this.$el.html(this.template(this.data))},initialize:function(e){var t=this;this.opts=e.data.opts,this.data.suv=this.getCookie(),this.data.mpId=this.opts.news_id,this.data.mediaId=this.opts.media_id||-1,this.model=new n({data:this.data}),this.model.one("sync",function(e){t.init(),t.showFeedback(),t.hideFeedbackBox(),this.data.count++,-1==e.status&&console.log("status 为-1 ，参数不足")}),$(document.body).on("click touch",function(e){t.hideFeedbackBox()}),this.render()}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.data=e.data},fetch:function(){var e=this;this.url="//apiv2.sohu.com/apiV2/feedback/dislike",$.ajax({url:this.url,type:"GET",dataType:"jsonp",data:{mpId:e.data.mpId,mediaId:e.data.mediaId,type:e.data.dislikeTypes.join(","),detail:e.data.detail,suv:e.data.suv},success:function(t){e.trigger("sync",t)},error:function(){e.trigger("error")}})}})},function(e,t){e.exports='\n<a class="uninterested-link" target="_blank" href="#"><em class="uninterested-icon icon"></em>不感兴趣</a>\n<div class="uninterested-box">\n\t<div class="cort"></div>\n\t<h4>不感兴趣</h4>\n\t<ul>\n\t\t<li data-val="1"><span class="checkbox-icon"><input type="checkbox" /></span>广告软文</li>\n\t\t<li data-val="2"><span class="checkbox-icon"><input type="checkbox" /></span>重复、旧闻</li>\n\t\t<li data-val="3"><span class="checkbox-icon"><input type="checkbox" /></span>文章质量差</li>\n\t\t<li data-val="4"><span class="checkbox-icon"><input type="checkbox" /></span>文字、图片、视频等展示问题</li>\n\t\t<li data-val="5"><span class="checkbox-icon"><input type="checkbox" /></span>标题夸张、文不对题</li>\n\t\t<li data-val="6"><span class="checkbox-icon"><input type="checkbox" /></span>与事实不符</li>\n\t\t<li data-val="7"><span class="checkbox-icon"><input type="checkbox" /></span>低俗色情</li>\n\t\t<li data-val="8"><span class="checkbox-icon"><input type="checkbox" /></span>欺诈或恶意营销</li>\n\t\t<li data-val="9"><span class="checkbox-icon"><input type="checkbox" /></span>疑似抄袭</li>\n\t\t<li data-val="10" class="otherquestion"><span class="checkbox-icon"><input type="checkbox" /></span>其他问题，我要吐槽</li>\n\t</ul>\n\t<div class="unia"><textarea maxlength="200"></textarea></div>\n\t<div class="btn"><a href="#" target="_blank" class="uninterested-ok">确定</a><span></span></div>\n</div>\n<div class="uninterested-no"><div class="cort"></div>请勿重复提交</div>\n<div class="unfeedback"><i class="feedback-icon"></i><p>感谢您的反馈，我们将会减少此类文章的推荐</p></div>'},function(e,t,i){var n=i(63),s=i(64),a=new s;e.exports=Backbone.View.extend({template:_.template(i(65)),events:{"click li":"handleClk"},data:{items:[]},initialize:function(e){var t=this;this.ev_triggered=!1,this.model=e.model,this.model.on("sync",function(e){t.data.items=e.length>12?e.slice(0,12):e,t.render()}),this.model.fetch()},render:function(){this.data.items.length&&a.pv_trigger({uigs_productid:"webapp",type:"sohustat",stype:"recom_pv"}),this.$el.html(this.template(this.data)),this.startMonitor()},startMonitor:function(){$(window).on("resize scroll",_.throttle(this.handler).bind(this))},handler:function(){this.ev_triggered||n(this.$el)&&(a.ev_trigger({uigs_productid:"webapp",type:"sohustat",stype:"recom_ev"}),this.ev_triggered=!0)},handleClk:function(e){a.click_trigger({uigs_productid:"webapp",type:"sohustat",stype:"recommend",cl_kw:window.encodeURIComponent($(e.currentTarget).text())})}})},function(e,t){var i=function(e){if(!e.is(":visible"))return!1;var t=$(window),i={top:t.scrollTop(),left:t.scrollLeft()};i.right=i.left+t.width(),i.bottom=i.top+t.height();var n=e.outerHeight(),s=e.outerWidth();if(!s||!n)return!1;var a=e.offset();return a.right=a.left+s,a.bottom=a.top+n,!(i.right<a.left||i.left>a.right||i.bottom<a.top||i.top>a.bottom)};e.exports=i},function(e,t,i){var n=i(4),s=function(e,t){var i="";for(var n in t)i+=n+"="+t[n]+"&";return i=i.substring(0,i.length-1),e=e+"?"+i},a=function(e,t){e=s(e,t),o(e)},o=function(e){setTimeout(function(){var t=document.createElement("img");t.src=e,$(t).css({display:"none",width:0,height:0}).appendTo("body").on("load error",function(){$(this).remove()})},0)};e.exports=n.extend({init:function(){},ev_trigger:function(e){a("//pb.sogou.com/pv.gif",e)},pv_trigger:function(e){a("//pb.sogou.com/pv.gif",e)},click_trigger:function(e){a("//pb.sogou.com/cl.gif",e)}})},function(e,t){e.exports='<%if(items.length>0){%>\n<div class="title"><span><em class="ln"></em>本文相关推荐</span></div>\n<ul class="recom-list" data-role="sogou-recom">\n    <%for (var i = 0; i < items.length; i++) {\n        var item = window.decodeURIComponent(items[i]);\n    %>\n    \n    <li><a href="//www.sogou.com/sogou?pid=sogou-wsse-ba500f04049a8eec&ie=utf8&query=<%=item%>" target="_blank"><%=item%>\n    <%if (i == 0) {%><em class="hot-icon icon"></em><%}%></a></li>\n    \n    <%}%>\n</ul>\n<%}%>'},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.apiUrl="//tuijian.sogou.com/websearch/features/sohu_recommend.jsp",this.opts=e},gen_url:function(e,t){var i="";for(var n in t)i+=n+"="+window.encodeURIComponent(t[n])+"&";return i=i.substring(0,i.length-1),e=e+"?"+i},fetch:function(){var e=this;$.ajax({url:this.apiUrl,method:"POST",dataType:"json",data:this.opts,success:function(t){try{"string"==typeof t&&(t=JSON.parse(t)),e.trigger("sync",t.hotwords)}catch(i){e.trigger("error")}},error:function(t){e.trigger("error",t)}})}})},function(e,t,i){var n=i(68);e.exports=Backbone.View.extend({template:_.template(i(69)),data:{info:{}},model:null,render:function(){this.$el.html(this.template(this.data))},initialize:function(e){this.model=new n({passport:e.passport}),this.user_model=e.model;var t=this;this.user_model&&this.user_model.on("sync",function(e){t.data.user_info=e,t.data.ad_info&&t.data.user_info&&(t.data.ad_info.pcText1&&t.data.ad_info.pcTitle1||t.data.ad_info.pcText2&&t.data.ad_info.pcTitle2)&&(t.render(),t.$el.show())}),this.model&&this.model.on("sync",function(e){t.data.ad_info=e.object,t.data.ad_info&&t.data.user_info&&(t.data.ad_info.pcText1&&t.data.ad_info.pcTitle1||t.data.ad_info.pcText2&&t.data.ad_info.pcTitle2)&&(t.render(),t.$el.show())}),this.model.fetch()}})},function(e,t,i){var n=i(4);i(16);e.exports=n.extend({init:function(e){this.passport=e.passport},fetch:function(){if(!this._fetching){var e=this;this.url="/apiV2/ad/info?passport="+this.passport,this._fetching=!0,n.prototype.fetch.call(this,{success:function(t){e._fetching=!1;try{e.trigger("sync",t)}catch(i){e.trigger("error")}},error:function(){e._fetching=!1}})}}})},function(e,t){e.exports='<%if((ad_info.pcText1 && ad_info.pcTitle1)||(ad_info.pcText2 && ad_info.pcTitle2)){%>\n<div class="user-god-pic">\n    <a href="<%=user_info.weiboUrl%>" target="_blank"><img src="<%=user_info.avatorUrl%>" alt=""></a>\n</div>\n<div class="user-god-link">\n    <%if(ad_info.pcText1 && ad_info.pcTitle1){%>\n    <dl>\n        <dt><a href="<%=ad_info.pcLink1||\'#\'%>" target="_blank"><%=ad_info.pcTitle1%></a></dt>\n        <dd><%=ad_info.pcText1%></dd>\n    </dl>\n    <%}%>\n    <%if(ad_info.pcText2 && ad_info.pcTitle2){%>\n    <dl>\n        <dt><a href="<%=ad_info.pcLink2||\'#\'%>" target="_blank"><%=ad_info.pcTitle2%></a></dt>\n        <dd><%=ad_info.pcText2%></dd>\n    </dl>\n    <%}%>\n</div>\n<%}%>'
}, function(e, t, i) {
    var n = i(71),
        s = (i(11), function(e, t, i) {
            this.news_feeds = e, this.news_id = i && i.news_id, this.channel_id = i && i.channel_id, this.sub_id = i && i.sub_id, this.tag_id = i && i.tag_id, this.start = i && i.start || 5, this.interval = i && i.interval || 4, this.extra = i && i.extra;
            var n = this;
            this.ad_type = t, this.news_feeds.on("news:add", function() {
                n.setNewsAdLoc(), n.append_ad_place(n.newsAd)
            }), this.news_feeds.$el.find('[data-role="news-item"]').size() > 0 && n.render()
        });
    s.prototype = {
        position: 1,
        newsAd: [],
        setNewsAdLoc: function() {
            var e = this,
                t = this.news_feeds.$el.find('.news-box:not([data-role="god"]):not(".cpc-news")').size(),
                i = $(".news-box[data-role='god']").last().length ? ($(".news-box[data-role='god']").last().attr("data-position") - 1) * this.interval + this.start - 1 : this.start - 1 - this.interval;
            this.newsAd = [];
            for (var n = i; n <= t - this.interval; n += this.interval) this.newsAd.push({
                $ad: $(e.create_ad_placeholder({
                    position: e.position
                })),
                loc: n + e.interval - 1,
                position: e.position
            }), this.position++
        },
        append_ad_place: function(e) {
            for (var t = this.news_feeds.$el.find('.news-box:not([data-role="god"]):not(".cpc-news")'), i = 0; i < e.length; i++) {
                var s = e[i];
                t.eq(s.loc).after(s.$ad), n(s.$ad, this.ad_type || "feeds", {
                    position: s.position,
                    tag_id: this.tag_id,
                    channel_id: this.channel_id,
                    sub_id: this.sub_id,
                    news_id: this.news_id
                })
            }
        },
        render: function() {
            var e = this;
            this.setNewsAdLoc(), this.extra ? this.extra.on("v-recom:rendered", function() {
                var t = e.newsAd;
                e.append_ad_place(t)
            }) : e.append_ad_place(e.newsAd)
        },
        reset: function() {
            this.page = 0, this.ad_index = 0, this.news_feeds.$el.find('[data-role="ad"]').remove()
        },
        create_ad_placeholder: function(e) {
            return $("<div class='news-box clear' data-position='" + e.position + "' style='display:none' data-role='god'></div>")
        }
    }, e.exports = s
}, function(e, t, i) {
    var n = i(72),
        s = function(e, t, i) {
            var s = "";
            s = i && i.sub_id && i.channel_id ? "sub" : i && "dsy" == i.type ? "pic_collection" : i && i.news_id && i.channel_id ? "article" : i && i.tag_id && i.channel_id ? "tag" : i && "news_channel" == i.type ? "news_channel" : i && i.channel_id ? "channel" : i && "v3" == i.type ? "v3_index" : i && "popup" == i.type ? "popup" : "index";
            var a = new n(s, t, e);
            return a.init(i), a
        };
    e.exports = s
}, function(e, t, i) {
    function n(e) {
        if ("object" != typeof e || null == e) return 0;
        try {
            if (Object.keys) return Object.keys(e).length;
            var t, i = [];
            for (t in o) Object.prototype.hasOwnProperty.call(o, t) && i.push(t);
            return i.length
        } catch (n) {
            return 0
        }
    }
    var s = i(73),
        a = i(75),
        r = new a,
        c = (i(7), i(77)),
        l = i(80),
        d = i(106),
        h = i(76),
        u = i(107),
        p = function(e, t, i) {
            this.$el = i, c[e] && (this.page_type = e, this.ad_type = t, this.ad = c[e][t], this.ad && (this.adps = this.ad.size, this.AdInstance = this.ad.Ins, this.support_flash = h(t) ? "1" : "0", this.needMultiItem = this.ad.needMultiItem))
        },
        f = i(108),
        m = i(109);
    p.prototype = {
        init: function(e) {
            if (!this.ad) return void(this.empty_ad ? this.empty_ad() : this.$el.hide());
            var t = this;
            this.empty_ad = e.empty_ad || this.empty_ad;
            var i, a = (new Date).getTime(),
                o = this.ad.ad_id;
            this.$el.attr("data-god-id", o);
            var c = f(e),
                h = d(this.page_type, this.ad_type, e),
                p = e.maxreads ? e.maxreads > 21 ? 21 : e.maxreads : 1,
                g = m(e),
                _ = e.data;
            if ("BAIDUUNION" === this.ad.adType) "none" === t.$el.css("display") && t.$el.show(), t.ad_instance = new t.AdInstance({
                el: t.$el,
                data: {
                    adType: t.ad.adType,
                    id: t.ad.ad_id,
                    ad_type: t.ad_type,
                    baiduId: t.ad.baiduId,
                    spm: t.ad.spm,
                    pcm: t.ad.pcm
                }
            }), t.ad_instance.render(), setTimeout(function() {
                u.refreshBuryCode()
            }, 0), u.genBaiDuAds(t.ad.baiduId, t.$el.find(".baiduAds a")[0]);
            else {
                var v = new s({
                    turn: t.ad.turn || h || 1,
                    id: t.ad.itemspaceid || o,
                    position: e.position,
                    channel_id: c,
                    sub_id: e.sub_id,
                    tag_id: e.tag_id,
                    news_id: e.news_id,
                    subid: e.subid,
                    adps: t.ad.adps || t.adps,
                    maxreads: t.ad.maxreads || p,
                    multichn: g,
                    support_flash: t.support_flash
                });
                i = (new Date).getTime() - a;
                var w = function(n) {
                    var s = n && n.monitorkey || "",
                        a = t.$el.offset() || {};
                    "" === s ? a.left = a.top = "" : t.$el.is(":visible") ? (a.left = a.left.toFixed(1), a.top = a.top.toFixed(1)) : a.left = a.top = 0, r.pv_trigger({
                        source: n && n.source || "",
                        newsid: e.news_id || "",
                        subid: e.subid || "",
                        aid: n && n.adid || "",
                        apid: "beans_" + o,
                        impid: n && n.impression_id || "",
                        mkey: s,
                        latcy: i,
                        freq: n && n.freq || 0,
                        ax: a && a.left,
                        ay: a && a.top,
                        ed: n && n.ed || "",
                        bucket: n && n.bucket || "",
                        ext: n && n.ext || "",
                        uloc: n && n.uloc || "",
                        newschn: c,
                        turn: h,
                        position: e.position || "",
                        pgid: l.get(e),
                        shbd_monitor_ext: n && n.shbd_monitor_ext || "",
                        sf: t.support_flash
                    })
                };
                v.on("sync", function(s) {
                    if (("column_2" == t.ad_type || "column_3" == t.ad_type || "column_4" == t.ad_type) && "v3" == e.type) {
                        if (1 == s.length && s[0]) s[0].resource.width <= 575 && (s = s[0].source ? [{
                            source: s[0].source
                        }] : [], w(s[0]));
                        else if (s.length > 1 && s[0]) switch (s[0].resource && s[0].resource.type) {
                            case "iframe":
                                break;
                            case "image":
                            case "flash":
                                s[0].resource.width <= 575 && (s[1] && 575 == s[1].resource.width && "iframe" != s[1].resource.type || (s = s[0].source ? [{
                                    source: s[0].source
                                }] : [], w(s[0])));
                                break;
                            default:
                                console.log("请求数据", s)
                        } else w(s[0]);
                        console.log("请求数据", s)
                    }
                    s[0] && n(s[0]) > 1 ? (t.$el.show().attr("data-monitorkey", s[0].monitorkey), t.ad_instance = new t.AdInstance({
                        adType: "",
                        newsid: e.news_id || "",
                        subid: e.subid || "",
                        data: t.needMultiItem ? s : s[0],
                        turn: h,
                        ad_id: o,
                        el: t.$el,
                        latcy: i,
                        position: e.position,
                        channel_id: e.channel_id,
                        sub_id: e.sub_id,
                        tag_id: e.tag_id,
                        news_id: e.news_id,
                        ad_channel_id: c,
                        sf: t.support_flash,
                        ad_type: t.ad_type,
                        type: e.type
                    }), t.ad_instance.render()) : (t.ad_instance && t.ad_instance.hide && t.ad_instance.hide(), t.empty_ad ? t.empty_ad() : t.$el.hide()), w(s[0])
                }), v.on("error", function() {
                    w(), t.ad_instance && t.ad_instance.hide && t.ad_instance.hide(), t.empty_ad ? t.empty_ad() : t.$el.hide()
                }), _ ? v.trigger("sync", [_]) : v.fetch()
            }
        },
        reset: function(e) {
            this.ad_instance && this.ad_instance.undelegateEvents(), this.init(e)
        }
    }, e.exports = p
}, function(e, t, i) {
    var n = i(4),
        s = i(7),
        a = i(74),
        o = i(21).ad_gtr_server,
        r = function(e) {
            e.file && "string" == typeof e.file && /^http/gi.test(e.file) && (e.file = e.file.replace(/^http(s)?:/gi, ""))
        };
    e.exports = n.extend({
        init: function(e) {
            this.itemspaceid = e.id, this.pgid = e.pgid, this.adsrc = 13, this.turn = e.turn, this.adps = e.adps, this.newsid = e.news_id || "", this.subid = e.subid || "", this.appid = "pcnews", this.newschn = e.channel_id, this._smuid = s.get("_smuid") || "", this.suv = s.get("SUV"), this.yyid = s.get("yyid") || "", this.support_flash = e.support_flash, this.duid = s.get("_duid"), this.position = e.position, this.maxreads = e.maxreads, this.multichn = e.multichn
        },
        fetch: function() {
            var e = this;
            this.url = o + "adgtr/?callback=?", $.ajax({
                url: this.url,
                dataType: "jsonp",
                data: {
                    itemspaceid: this.itemspaceid,
                    sf: this.support_flash,
                    pgid: this.pgid,
                    newschn: this.newschn,
                    smuid: this._smuid,
                    SUV: this.suv,
                    newsid: this.newsid,
                    subid: this.subid,
                    appid: this.appid,
                    yyid: this.yyid,
                    adsrc: this.adsrc,
                    adps: this.adps,
                    turn: this.turn,
                    duid: this.duid,
                    position: this.position,
                    pgid: a.get(),
                    maxreads: this.maxreads,
                    multichn: this.multichn
                },
                success: function(t) {
                    if (t[0]) {
                        var i = t[0];
                        i.resource && r(i.resource), i.resource1 && r(i.resource1), i.resource2 && r(i.resource2), i.resource3 && r(i.resource3), i.resource4 && r(i.resource4), i.resource5 && r(i.resource5), i.resource6 && r(i.resource6)
                    }
                    e.trigger("sync", t)
                },
                error: function() {
                    e.trigger("error")
                }
            })
        }
    })
}, function(e, t) {
    function i() {
        this.date = new Date, "function" != typeof this.newGUID && (i.prototype.newGUID = function() {
            this.date = new Date;
            var e = "";
            sexadecimalDate = this.hexadecimal(this.getGUIDDate(), 16), sexadecimalTime = this.hexadecimal(this.getGUIDTime(), 16);
            for (var t = 0; t < 9; t++) e += Math.floor(16 * Math.random()).toString(16);
            for (e += sexadecimalDate, e += sexadecimalTime; e.length < 32;) e += Math.floor(16 * Math.random()).toString(16);
            return this.formatGUID(e)
        }, i.prototype.getGUIDDate = function() {
            return this.date.getFullYear() + this.addZero(this.date.getMonth() + 1) + this.addZero(this.date.getDay())
        }, i.prototype.getGUIDTime = function() {
            return this.addZero(this.date.getHours()) + this.addZero(this.date.getMinutes()) + this.addZero(this.date.getSeconds()) + this.addZero(parseInt(this.date.getMilliseconds() / 10))
        }, i.prototype.addZero = function(e) {
            return "NaN" != Number(e).toString() && e >= 0 && e < 10 ? "0" + Math.floor(e) : e.toString()
        }, i.prototype.hexadecimal = function(e, t, i) {
            return i != undefined ? parseInt(e.toString(), i).toString(t) : parseInt(e.toString()).toString(t)
        }, i.prototype.formatGUID = function(e) {
            return e.slice(0, 8) + "-" + e.slice(8, 12) + "-" + e.slice(12, 16) + "-" + e.slice(16, 20) + "-" + e.slice(20)
        })
    }
    var n = new i;
    e.exports = {
        get: function() {
            return this._guid = this._guid || n.newGUID(), this._guid
        },
        reset: function() {
            this._guid = n.newGUID()
        }
    }
}, function(e, t, i) {
    var n = i(4),
        s = (i(76), i(7)),
        a = document.referrer,
        o = function(e) {
            return window.encodeURIComponent && "function" == typeof encodeURIComponent ? encodeURIComponent(e) : window.encodeURI && "function" == typeof window.encodeURI ? window.encodeURI(e) : e
        },
        r = s.get("SUV"),
        c = function(e, t) {
            var i = "";
            t.at = t.at || "1", t.supplyid = "1", t.sf = t.sf, t.timestamp = (new Date).getTime(), t.r = Math.random(), t.rsln = window.screen.width + "*" + window.screen.height, t.smuid = s.get("_smuid") || "";
            for (var n in t) i += n + "=" + t[n] + "&";
            return i = i.substring(0, i.length - 1), e = e + "?" + i, e = e + "&suv=" + r + "&pagerefer=" + o(a) + "&appid=pcnews"
        },
        l = function(e, t) {
            e = c(e, t), d(e)
        },
        d = function(e) {
            setTimeout(function() {
                var t = document.createElement("img");
                e.indexOf("?") > 0 ? t.src = e + "&_r=" + (new Date).getTime() : t.src = e + "?_r=" + (new Date).getTime(), $(t).css({
                    display: "none",
                    width: 0,
                    height: 0
                }).appendTo("body").on("load error", function() {
                    $(this).remove()
                })
            }, 0)
        };
    e.exports = n.extend({
        init: function() {},
        pv_trigger: function(e) {
            l("//i.go.sohu.com/count/v", e)
        },
        av_trigger: function(e) {
            l("//i.go.sohu.com/count/av", e)
        },
        click_trigger: function(e) {
            l("//i.go.sohu.com/count/c", e)
        },
        get_click_trigger_url: function(e) {
            return c("//i.go.sohu.com/count/c", e)
        },
        play_trigger: function(e) {
            l("//i.go.sohu.com/count/vp", e)
        },
        trigger_imp: function(e) {
            e.url && 0 == e.url.indexOf("http") && d(e.url)
        },
        count_trigger: function(e) {
            d("//pv.sohu.com/click.gif?id=10000063&suv=1506101635319085")
        }
    })
}, function(e, t) {
    e.exports = function(e) {
        var t = null;
        if (/chrome/.test(navigator.userAgent.toLowerCase()) && "feeds" == e) return !1;
        if ("index_side_txt" == e) return !1;
        if (document.all || document.getElementsByTagName("*")) {
            try {
                if (t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return !0
            } catch (i) {}
            if (!t && navigator.plugins && navigator.plugins.length > 0) {
                var t = navigator.plugins["Shockwave Flash"];
                if (t) return !0
            }
        }
        return !1
    }
}, function(e, t, i) {
    var n = i(78),
        s = i(82),
        a = i(84),
        o = i(86),
        r = i(88),
        c = i(90),
        l = i(92),
        d = (i(94), i(98), i(100), i(102)),
        h = i(104),
        u = i(105),
        p = {
            channel: {
                nav_button: {
                    ad_id: "15280",
                    desc: "PC端频道首页冠名广告",
                    size: "3400064",
                    Ins: n
                },
                focus: {
                    ad_id: "15281",
                    desc: "PC端频道首页焦点图",
                    size: "6400320",
                    Ins: a
                },
                side_1: {
                    ad_id: "15282",
                    desc: "PC端频道首页矩形1",
                    size: "3000250",
                    Ins: n
                },
                side_2: {
                    ad_id: "15283",
                    desc: "PC端频道首页矩形2",
                    size: "3000250",
                    Ins: n
                },
                side_3: {
                    ad_id: "15284",
                    desc: "PC端频道首页矩形3",
                    size: "3000250",
                    Ins: n
                },
                side_fix: {
                    ad_id: "15285",
                    desc: "PC端频道首页悬浮矩形",
                    size: "20000009",
                    Ins: c
                },
                writer: {
                    ad_id: "15286",
                    desc: "PC端频道首页搜狐公众号号推荐图混",
                    size: "500050",
                    Ins: r
                },
                recommends: {
                    ad_id: "15287",
                    desc: "PC端频道首页24小时热文推荐图混",
                    size: "30000002",
                    Ins: l
                },
                feeds: {
                    ad_id: "15288",
                    desc: "PC端频道首页信息流",
                    size: "30000003",
                    Ins: o
                },
                channel_top: {
                    ad_id: "15324",
                    desc: "频道头栏拉伸",
                    size: "20000009",
                    Ins: s
                },
                hot_spot: {
                    ad_id: "15407",
                    desc: "热点直达广告",
                    size: "60001",
                    Ins: n
                }
            },
            sub: {
                nav_button: {
                    ad_id: "15289",
                    desc: "PC端二级页冠名广告",
                    size: "3400064",
                    Ins: n
                },
                side_1: {
                    ad_id: "15290",
                    desc: "PC端二级页矩形1",
                    size: "3000250",
                    Ins: n
                },
                side_2: {
                    ad_id: "15291",
                    desc: "PC端二级页矩形2",
                    size: "3000250",
                    Ins: n
                },
                side_3: {
                    ad_id: "15292",
                    desc: "PC端二级页矩形3",
                    size: "3000250",
                    Ins: n
                },
                side_fix: {
                    ad_id: "15293",
                    desc: "PC端二级页悬浮矩形",
                    size: "20000009",
                    Ins: c
                },
                writer: {
                    ad_id: "15294",
                    desc: "PC端二级页搜狐公众号号推荐图混",
                    size: "500050",
                    Ins: r
                },
                recommends: {
                    ad_id: "15295",
                    desc: "PC端二级页24小时热文推荐图混",
                    size: "30000002",
                    Ins: l
                },
                feeds: {
                    ad_id: "15296",
                    desc: "PC端二级页信息流",
                    size: "30000003",
                    Ins: o
                },
                hot_spot: {
                    ad_id: "15408",
                    desc: "热点直达广告",
                    size: "60001",
                    Ins: n
                }
            },
            tag: {
                side_1: {
                    ad_id: "15297",
                    desc: "PC端标签页矩形1",
                    size: "3000250",
                    Ins: n
                },
                side_2: {
                    ad_id: "15298",
                    desc: "PC端标签页矩形2",
                    size: "3000250",
                    Ins: n
                },
                side_3: {
                    ad_id: "15299",
                    desc: "PC端标签页矩形3",
                    size: "3000250",
                    Ins: n
                },
                side_fix: {
                    ad_id: "15300",
                    desc: "PC端标签页悬浮矩形",
                    size: "20000009",
                    Ins: c
                },
                writer: {
                    ad_id: "15301",
                    desc: "PC端标签页搜狐公众号号推荐图混",
                    size: "500050",
                    Ins: r
                },
                recommends: {
                    ad_id: "15302",
                    desc: "PC端二级页24小时热文推荐图混",
                    size: "30000002",
                    Ins: l
                },
                feeds: {
                    ad_id: "15303",
                    desc: "PC端标签页信息流",
                    size: "30000003",
                    Ins: o
                },
                hot_spot: {
                    ad_id: "15409",
                    desc: "热点直达广告",
                    size: "60001",
                    Ins: n
                }
            },
            article: {
                nav_button: {
                    ad_id: "15304",
                    desc: "PC端文章页冠名广告",
                    size: "3400064",
                    Ins: n
                },
                side_1: {
                    ad_id: "15305",
                    desc: "PC端文章页矩形1",
                    size: "3000250",
                    Ins: n
                },
                side_2: {
                    ad_id: "15306",
                    desc: "PC端文章页矩形2",
                    size: "3000250",
                    Ins: n
                },
                side_3: {
                    ad_id: "15307",
                    desc: "PC端文章页矩形3",
                    size: "3000250",
                    Ins: n
                },
                side_4: {
                    ad_id: "15308",
                    desc: "PC端文章页矩形4",
                    size: "3000250",
                    Ins: n
                },
                side_fix: {
                    ad_id: "15309",
                    desc: "PC端文章页悬浮矩形",
                    size: "20000009",
                    Ins: c
                },
                article_bottom: {
                    ad_id: "15310",
                    desc: "PC端文章页中部通栏",
                    size: "6400150",
                    Ins: n
                },
                writer: {
                    ad_id: "15311",
                    desc: "PC端文章页搜狐公众号号推荐图混",
                    size: "500050",
                    Ins: r
                },
                recommends: {
                    ad_id: "15312",
                    desc: "PC端文章页24小时热文推荐图混",
                    size: "30000002",
                    Ins: l
                },
                feeds: {
                    ad_id: "15313",
                    desc: "PC端文章页信息流",
                    size: "30000003",
                    Ins: o
                },
                hot_spot: {
                    ad_id: "15428",
                    desc: "热点直达广告",
                    size: "60001",
                    Ins: n
                }
            },
            v3_index: {
                "drain-btn": {
                    ad_id: "16078",
                    regionId: "16078",
                    desc: "经典版引流按钮"
                },
                index_focus: {
                    ad_id: "15537",
                    desc: "PC端搜狐V3首页焦点图",
                    size: "3200213",
                    Ins: a
                },
                side_1: {
                    ad_id: "15538",
                    desc: "PC端搜狐V3首页矩形1",
                    size: "3000250",
                    Ins: n
                },
                side_2: {
                    ad_id: "15539",
                    desc: "PC端搜狐V3首页矩形2",
                    size: "3000250",
                    Ins: n
                },
                side_3: {
                    ad_id: "15540",
                    desc: "PC端搜狐V3首页矩形3",
                    size: "3000250",
                    Ins: n
                },
                side_4: {
                    ad_id: "15541",
                    desc: "PC端搜狐V3首页矩形4",
                    size: "3000250",
                    Ins: n
                },
                side_5: {
                    ad_id: "15109",
                    regionId: "15109",
                    desc: "PC端搜狐V3首页矩形5",
                    size: "3000250",
                    spm: "god-side-5",
                    Ins: n
                },
                side_6: {
                    ad_id: "15594",
                    desc: "PC端搜狐V3首页矩形6",
                    size: "3000250",
                    Ins: n
                },
                side_7: {
                    ad_id: "15768",
                    desc: "PC端搜狐V3首页矩形7",
                    size: "3000250",
                    Ins: n
                },
                side_8: {
                    ad_id: "15769",
                    desc: "PC端搜狐V3首页矩形8",
                    size: "3000250",
                    Ins: n
                },
                column_1: {
                    ad_id: "15595",
                    desc: "PC端搜狐V3首页通栏1",
                    size: "10300100",
                    Ins: n
                },
                column_2: {
                    ad_id: "15632",
                    desc: "PC端搜狐V3首页通栏2",
                    size: "30000002",
                    Ins: h,
                    needMultiItem: !0
                },
                sub_column_2: {
                    ad_id: "15632",
                    desc: "PC端搜狐V3首页通栏3",
                    size: "30000002",
                    Ins: n
                },
                column_3: {
                    ad_id: "15633",
                    desc: "PC端搜狐V3首页通栏3",
                    size: "30000002",
                    Ins: n,
                    Ins: h,
                    needMultiItem: !0
                },
                sub_column_3: {
                    ad_id: "15633",
                    desc: "PC端搜狐V3首页通栏3",
                    size: "30000002",
                    Ins: n
                },
                column_4: {
                    ad_id: "15634",
                    desc: "PC端搜狐V3首页通栏4",
                    size: "30000002",
                    Ins: n,
                    Ins: h,
                    needMultiItem: !0
                },
                sub_column_4: {
                    ad_id: "15634",
                    desc: "PC端搜狐V3首页通栏3",
                    size: "30000002",
                    Ins: n
                },
                column_5: {
                    ad_id: "15108",
                    regionId: "15108",
                    desc: "PC端搜狐V3首页通栏5",
                    size: "8500100",
                    spm: "god-middle-5",
                    Ins: n
                },
                column_6: {
                    ad_id: "15110",
                    regionId: "15110",
                    desc: "PC端搜狐V3首页通栏6",
                    size: "8500100",
                    spm: "god-middle-6",
                    Ins: n
                },
                column_7: {
                    ad_id: "15637",
                    desc: "PC端搜狐V3首页通栏7",
                    size: "8500100",
                    Ins: n
                },
                column_8: {
                    ad_id: "15638",
                    desc: "PC端搜狐V3首页通栏8",
                    size: "11800100",
                    Ins: n
                },
                promotion_1: {
                    ad_id: "15639",
                    desc: "PC端搜狐V3首页推广区1",
                    size: "3000439",
                    Ins: n
                },
                promotion_2: {
                    ad_id: "15106",
                    regionId: "15106",
                    desc: "PC端搜狐V3首页推广区2",
                    size: "3000250",
                    spm: "god-promotion-2",
                    Ins: n
                },
                promotion_3: {
                    ad_id: "15107",
                    regionId: "15107",
                    desc: "PC端搜狐V3首页推广3",
                    size: "3000150",
                    spm: "god-promotion-3",
                    Ins: n
                },
                txt_focus_1: {
                    ad_id: "15620",
                    desc: "PC端搜狐V3首页要闻半行文字链1",
                    size: "130001",
                    Ins: n
                },
                txt_focus_2: {
                    ad_id: "15621",
                    desc: "PC端搜狐V3首页要闻半行文字链2",
                    size: "130001",
                    Ins: n
                },
                txt_yule_1: {
                    ad_id: "15622",
                    desc: "PC端搜狐V3首页娱乐半行文字链1",
                    size: "130001",
                    Ins: n
                },
                txt_yule_2: {
                    ad_id: "15623",
                    desc: "PC端搜狐V3首页娱乐半行文字链2",
                    size: "130001",
                    Ins: n
                },
                txt_sports_1: {
                    ad_id: "15631",
                    desc: "PC端搜狐V3首页体育半行文字链1",
                    size: "130001",
                    Ins: n
                },
                txt_sports_2: {
                    ad_id: "15630",
                    desc: "PC端搜狐V3首页体育半行文字链2",
                    size: "130001",
                    Ins: n
                },
                txt_business_1: {
                    ad_id: "15629",
                    desc: "PC端搜狐V3首页财经半行文字链1",
                    size: "130001",
                    Ins: n
                },
                txt_business_2: {
                    ad_id: "15628",
                    desc: "PC端搜狐V3首页财经半行文字链2",
                    size: "130001",
                    Ins: n
                },
                txt_house_1: {
                    ad_id: "15627",
                    desc: "PC端搜狐V3首页房产半行文字链1",
                    size: "130001",
                    Ins: n
                },
                txt_house_2: {
                    ad_id: "15626",
                    desc: "PC端搜狐V3首页房产半行文字链2",
                    size: "130001",
                    Ins: n
                },
                txt_auto_1: {
                    ad_id: "15625",
                    desc: "PC端搜狐V3首页汽车半行文字链1",
                    size: "130001",
                    Ins: n
                },
                txt_auto_2: {
                    ad_id: "15624",
                    desc: "PC端搜狐V3首页汽车半行文字链2",
                    size: "130001",
                    Ins: n
                },
                txt_it_1: {
                    ad_id: "15596",
                    desc: "PC端搜狐V3首页科技半行文字链1",
                    size: "130001",
                    Ins: n
                },
                txt_it_2: {
                    ad_id: "15597",
                    desc: "PC端搜狐V3首页科技半行文字链2",
                    size: "130001",
                    Ins: n
                },
                txt_fashion_1: {
                    ad_id: "15598",
                    desc: "PC端搜狐V3首页时尚半行文字链1",
                    size: "100001",
                    Ins: n
                },
                txt_fashion_2: {
                    ad_id: "15599",
                    desc: "PC端搜狐V3首页时尚半行文字链2",
                    size: "100001",
                    Ins: n
                },
                txt_mil_1: {
                    ad_id: "15600",
                    desc: "PC端搜狐V3首页军事半行文字链1",
                    size: "100001",
                    Ins: n
                },
                txt_mil_2: {
                    ad_id: "15601",
                    desc: "PC端搜狐V3首页军事半行文字链2",
                    size: "100001",
                    Ins: n
                },
                txt_history_1: {
                    ad_id: "15603",
                    desc: "PC端搜狐V3首页历史半行文字链1",
                    size: "100001",
                    Ins: n
                },
                txt_history_2: {
                    ad_id: "15602",
                    desc: "PC端搜狐V3首页历史半行文字链2",
                    size: "100001",
                    Ins: n
                },
                txt_health_1: {
                    ad_id: "15604",
                    desc: "PC端搜狐V3首页健康半行文字链1",
                    size: "100001",
                    Ins: n
                },
                txt_health_2: {
                    ad_id: "15605",
                    desc: "PC端搜狐V3首页健康半行文字链2",
                    size: "100001",
                    Ins: n
                },
                txt_cul_1: {
                    ad_id: "15606",
                    desc: "PC端搜狐V3首页文化半行文字链1",
                    size: "100001",
                    Ins: n
                },
                txt_cul_2: {
                    ad_id: "15607",
                    desc: "PC端搜狐V3首页文化半行文字链2",
                    size: "100001",
                    Ins: n
                },
                txt_travel_1: {
                    ad_id: "15608",
                    desc: "PC端搜狐V3首页旅游半行文字链1",
                    size: "100001",
                    Ins: n
                },
                txt_travel_2: {
                    ad_id: "15609",
                    desc: "PC端搜狐V3首页旅游半行文字链2",
                    size: "100001",
                    Ins: n
                },
                txt_learning_1: {
                    ad_id: "15610",
                    desc: "PC端搜狐V3首页教育半行文字链1",
                    size: "100001",
                    Ins: n
                },
                txt_learning_2: {
                    ad_id: "15611",
                    desc: "PC端搜狐V3首页教育半行文字链2",
                    size: "100001",
                    Ins: n
                },
                txt_baobao_1: {
                    ad_id: "15612",
                    desc: "PC端搜狐V3首页母婴半行文字链1",
                    size: "100001",
                    Ins: n
                },
                txt_baobao_2: {
                    ad_id: "15613",
                    desc: "PC端搜狐V3首页母婴半行文字链2",
                    size: "100001",
                    Ins: n
                },
                txt_chihe_1: {
                    ad_id: "15614",
                    desc: "PC端搜狐V3首页美食半行文字链1",
                    size: "100001",
                    Ins: n
                },
                txt_chihe_2: {
                    ad_id: "15615",
                    desc: "PC端搜狐V3首页美食半行文字链2",
                    size: "100001",
                    Ins: n
                },
                txt_astro_1: {
                    ad_id: "15616",
                    desc: "PC端搜狐V3首页星座半行文字链1",
                    size: "100001",
                    Ins: n
                },
                txt_astro_2: {
                    ad_id: "15617",
                    desc: "PC端搜狐V3首页星座半行文字链2",
                    size: "100001",
                    Ins: n
                },
                txt_pets_1: {
                    ad_id: "15618",
                    desc: "PC端搜狐V3首页生活半行文字链1",
                    size: "100001",
                    Ins: n
                },
                txt_pets_2: {
                    ad_id: "15619",
                    desc: "PC端搜狐V3首页生活半行文字链2",
                    size: "100001",
                    Ins: n
                },
                txt_acg_1: {
                    ad_id: "15770",
                    desc: "PC端搜狐V3首页动漫半行文字链1",
                    size: "100001",
                    Ins: n
                },
                txt_acg_2: {
                    ad_id: "15771",
                    desc: "PC端搜狐V3首页动漫半行文字链2",
                    size: "100001",
                    Ins: n
                },
                txt_game_1: {
                    ad_id: "15772",
                    desc: "PC端搜狐V3首页游戏半行文字链1",
                    size: "100001",
                    Ins: n
                },
                txt_game_2: {
                    ad_id: "15773",
                    desc: "PC端搜狐V3首页游戏半行文字链2",
                    size: "100001",
                    Ins: n
                },
                txt_society_1: {
                    ad_id: "15774",
                    desc: "PC端搜狐V3首页宠物半行文字链1",
                    size: "100001",
                    Ins: n
                },
                txt_society_2: {
                    ad_id: "15775",
                    desc: "PC端搜狐V3首页宠物半行文字链2",
                    size: "100001",
                    Ins: n
                },
                auto_main_txt_1_1: {
                    ad_id: "15778",
                    desc: "汽车区域专用资源行1 1",
                    size: "130001",
                    Ins: n
                },
                auto_main_txt_1_2: {
                    ad_id: "15779",
                    desc: "汽车区域专用资源行1 2",
                    size: "130001",
                    Ins: n
                },
                auto_main_txt_2_1: {
                    ad_id: "15780",
                    desc: "汽车区域专用资源行2 1",
                    size: "130001",
                    Ins: n
                },
                auto_main_txt_2_2: {
                    ad_id: "15781",
                    desc: "汽车区域专用资源行 2 2",
                    size: "130001",
                    Ins: n
                },
                txt_business_0: {
                    ad_id: "15860",
                    desc: "PC端搜狐V3首页财经一行行文字链0",
                    size: "200001",
                    Ins: n
                }
            },
            popup: {
                rectangle: {
                    ad_id: "16175",
                    desc: "要闻频道左侧第三位置矩形广告",
                    size: "1740116",
                    Ins: d
                }
            },
            pic_collection: {
                side_1: {
                    ad_id: "15853",
                    desc: "图集页末尾图集广告",
                    size: "3000250",
                    Ins: n
                },
                side_2: {
                    ad_id: "15851",
                    desc: "图集右侧广告1",
                    size: "3000250",
                    Ins: n
                },
                side_3: {
                    ad_id: "15852",
                    desc: "图集右侧广告2",
                    size: "3000250",
                    Ins: n
                },
                column_1: {
                    ad_id: "15849",
                    desc: "图集通栏广告1",
                    size: "8500100",
                    Ins: n
                },
                column_2: {
                    ad_id: "15850",
                    desc: "图集通栏广告2",
                    size: "8500100",
                    Ins: n
                }
            },
            news_channel: u,
            setV3IndexData: function(e) {
                var t = this;
                switch (Object.prototype.toString.call(e)) {
                    case "[object Object]":
                        this["v3-index"][e.key] = e.value;
                        break;
                    case "[object Array]":
                        e.forEach(function(e) {
                            t.v3_index[e.key][e.prop] = e.value
                        })
                }
            }
        };
    e.exports = p
}, function(e, t, i) {
    var n = i(75),
        s = new n,
        a = i(63),
        o = i(79),
        r = i(80);
    e.exports = Backbone.View.extend({
        template: _.template(i(81)),
        data: {},
        events: {
            "click a": "_click"
        },
        _click: function(e) {
            if (!$(e.currentTarget).is(".got-i-icon") && "javascript:void(0)" !== $(e.currentTarget).attr("href")) {
                if (this.data.resource.clkm)
                    for (var t = o.fix_imp_str(this.data.resource.clkm, {
                            apid: "beans_" + this.ad_id,
                            impid: this.data.impression_id
                        }), i = 0; i < t.length; i++) s.trigger_imp({
                        url: t[i]
                    });
                var n = this.$el.offset(),
                    a = e.target || e.srcElement;
                s.click_trigger({
                    source: this.data.source || "",
                    newsid: this.news_id || "",
                    subid: this.subid || "",
                    aid: this.data.adid,
                    apid: "beans_" + this.ad_id,
                    impid: this.data.impression_id,
                    mkey: this.data.monitorkey,
                    freq: this.data.freq || 0,
                    ax: n && n.left.toFixed(1) || "",
                    ay: n && n.top.toFixed(1) || "",
                    cx: e.offsetX || e.clientX - a.getBoundingClientRect().left || e.clientX,
                    cy: e.offsetY || e.clientY - a.getBoundingClientRect().top || e.clientY,
                    ed: this.data.ed,
                    bucket: this.data.bucket,
                    ext: this.data.ext,
                    uloc: this.data.uloc,
                    turn: this.turn,
                    sf: this.sf,
                    newschn: this.ad_channel_id,
                    pgid: this.pgid,
                    shbd_monitor_ext: this.data.shbd_monitor_ext,
                    latcy: this.latcy,
                    position: this.position || ""
                })
            }
        },
        pv_trigger: function() {
            var e = this.$el.offset();
            s.pv_trigger({
                source: this.data.source || "",
                newsid: this.news_id || "",
                subid: this.subid || "",
                aid: this.data.adid,
                apid: "beans_" + this.ad_id,
                impid: this.data.impression_id,
                mkey: this.data.monitorkey,
                freq: this.data.freq || 0,
                ax: e && e.left || "",
                ay: e && e.top || "",
                ed: this.data.ed,
                bucket: this.data.bucket,
                ext: this.data.ext,
                uloc: this.data.uloc,
                turn: this.turn,
                newschn: this.ad_channel_id,
                rsln: window.screen.height + "0" + window.screen.width,
                shbd_monitor_ext: this.data.shbd_monitor_ext,
                pgid: this.pgid,
                latcy: this.latcy,
                sf: this.sf,
                position: this.position || ""
            })
        },
        av_trigger: function() {
            if (!this.av_triggered) {
                var e = this.$el.offset();
                a(this.$el) && (s.av_trigger({
                    source: this.data.source || "",
                    newsid: this.news_id || "",
                    subid: this.subid || "",
                    aid: this.data.adid,
                    apid: "beans_" + this.ad_id,
                    impid: this.data.impression_id,
                    mkey: this.data.monitorkey,
                    freq: this.data.freq || 0,
                    ax: e && e.left || "",
                    ay: e && e.top || "",
                    ed: this.data.ed,
                    bucket: this.data.bucket,
                    ext: this.data.ext,
                    uloc: this.data.uloc,
                    turn: this.turn,
                    newschn: this.ad_channel_id,
                    rsln: window.screen.height + "0" + window.screen.width,
                    shbd_monitor_ext: this.data.shbd_monitor_ext,
                    pgid: this.pgid,
                    latcy: this.latcy || "",
                    position: this.position || "",
                    sf: this.sf
                }), this.av_triggered = !0)
            }
        },
        initialize: function(e) {
            this.data = e.data, this.ad_id = e.ad_id, this.turn = e.turn, this.channel_id = e.channel_id, this.sub_id = e.sub_id, this.news_id = e.news_id, this.newsid = e.news_id || "", this.subid = e.subid || "", this.ad_channel_id = e.ad_channel_id, this.pgid = r.get(e), this.latcy = e.latcy, this.av_triggered = !1, this.position = e.position, this.sf = e.sf
        },
        _ad_img_load: function() {
            var e = this;
            $(window).on("resize scroll", function() {
                e.av_trigger()
            }), this.av_trigger()
        },
        trigger_imp: function(e) {
            if (e)
                for (var t = o.fix_imp_str(e, {
                        apid: "beans_" + this.ad_id,
                        impid: this.data.impression_id
                    }), i = 0; i < t.length; i++) s.trigger_imp({
                    url: t[i]
                })
        },
        fix_ad_plus: function(e) {
            e && e.click && (e.click = o.fix_adplus(e.click, {
                apid: "beans_" + this.ad_id,
                impid: this.data.impression_id
            }))
        },
        fix_ad_frame_url: function(e) {
            if (e && "iframe" == e.type) {
                var t = this.$el.offset(),
                    i = s.get_click_trigger_url({
                        source: this.data.source || "",
                        newsid: this.news_id || "",
                        subid: this.subid || "",
                        aid: this.data.adid,
                        apid: "beans_" + this.ad_id,
                        impid: this.data.impression_id,
                        mkey: this.data.monitorkey,
                        freq: this.data.freq || 0,
                        ax: t && t.left || "",
                        ay: t && t.top || "",
                        ed: this.data.ed,
                        bucket: this.data.bucket,
                        ext: this.data.ext,
                        uloc: this.data.uloc,
                        turn: this.turn,
                        sf: this.sf,
                        newschn: this.ad_channel_id,
                        pgid: this.pgid,
                        shbd_monitor_ext: this.data.shbd_monitor_ext,
                        latcy: this.latcy,
                        position: this.position || ""
                    });
                /\[_SOHU_CLICK_ENC_\]/gi.test(e.file) ? e.file = e.file.replace(/\[_SOHU_CLICK_ENC_\]/gi, encodeURIComponent(i)) : e.file = e.file + (e.file.indexOf("?") > 0 ? "&" : "?") + "clkm=" + encodeURIComponent(i)
            }
        },
        render: function() {
            var e = this;
            if (this.data) {
                if ("BAIDUUNION" === this.data.adType) return this.$el.html(this.template(this.data));
                if (this.data.adType = "", this.fix_ad_frame_url(this.data.resource), this.data.using_resource)
                    for (var t in this.data.using_resource) this.fix_ad_plus.call(this, this.data.using_resource[t]);
                else this.data.resource && this.fix_ad_plus(this.data.resource);
                this.$el.html(this.template(this.data));
                for (var i = o.fix_imp_str(this.data.resource.imp, {
                        apid: "beans_" + this.ad_id,
                        impid: this.data.impression_id
                    }), n = 0; n < i.length; n++) s.trigger_imp({
                    url: i[n]
                });
                1 == this.$el.find("img:eq(0)").size() ? this.$el.find("img:eq(0)").one("load", function() {
                    e._ad_img_load()
                }) : e._ad_img_load()
            }
        }
    })
}, function(e, t) {
    var i = function(e, t) {
        return /imp\.optaim.com|clk.optaim\.com|trackimp/gi.test(e) ? e.indexOf("?") > 0 ? e + "&apid=" + (t && t.apid) + "&impid=" + (t && t.impid) : e + "?apid=" + (t && t.apid) + "&impid=" + (t && t.impid) : e
    };
    e.exports = {
        fix_imp_str: function(e, t) {
            var n = [];
            if (e)
                if (e instanceof Array)
                    for (var s = 0; s < e.length; s++) n.push(i(e[s], t));
                else if ("string" == typeof e)
                if (0 == e.indexOf("[")) try {
                    for (var a = JSON.parse(e), s = 0; s < a.length; s++) a[s] && n.push(i(a[s], t))
                } catch (o) {} else
                    for (var a = e.split("|"), s = 0; s < a.length; s++) a[s] && n.push(i(a[s], t));
            return n
        },
        fix_adplus: i
    }
}, function(e, t) {
    var i = {
            42: "game",
            23: "fashion",
            15: "business",
            19: "yule",
            17: "sports",
            18: "auto",
            30: "it",
            41: "dm",
            12: "cul",
            13: "history",
            25: "learning",
            27: "astro",
            45: "joke",
            44: "pets",
            10: "mil",
            43: "view",
            28: "food",
            29: "travel",
            24: "health",
            8: "news",
            26: "baby"
        },
        n = function(e) {
            return e.sub_id ? "sub" : e.news_id ? "article" : "dsy" == e.type ? "pic" : e.tag_id ? "tag" : e.channel_id ? "channel" : "index"
        };
    e.exports = {
        get: function(e) {
            return (i[e.channel_id] || "sohu") + "-" + n(e)
        }
    }
}, function(e, t) {
    e.exports = '<%if (adType== "BAIDUUNION"){%>\n    <div class="<%=ad_type%> baiduAds" data-spm="<%=spm%>"  data-god-id="<%=baiduId%>"><a data-spm-content="<%=pcm%>" style="display: inline-block"></a></div>    \n <%}else{%>\n<%if(resource.type== "text"){%>\n<a  href="<%=resource.click%>" target="_blank"><%=resource.text%></a>\n<%}else{%>\n\n<%if(dsp_source){%>\n<span class="god-mark god-mark-origin"><%=dsp_source%></span>\n<%}%>\n<%if(!adstyle||adstyle=="1"){%>\n\x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n<span class="god-mark">广告</span>\n<%}%>\n<%if(resource.type!== "iframe"){%>\n<a  class="swf-top" href="<%=resource.click%>" target="_blank"></a>\n<%}%>\n<div>\n    <%if (resource.type== "flash"){%>\n    \x3c!--<embed src="<%=resource.file%>" width="<%=resource.width%>" height="<%=resource.height%>"></embed>--\x3e\n    <object type="application/x-shockwave-flash" data="<%=resource.file%>" width="<%=resource.width%>" height="<%=resource.height%>">\n        <param name="movie" value="<%=resource.file%>" />\n        <param name="wmode" value="opaque" />\n        <embed wmode="opaque"></embed>\n    </object>\n    <%}else if(resource.type== "image"){%>\n    <img src="<%=resource.file%>"/>\n    <%}else if(resource.type== "iframe"){%>\n    <iframe src="<%=resource.file%>" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" width="<%=resource.width%>" height="<%=resource.height%>"></iframe>\n    <%}%>\n</div>\n<%}%>\n<%}%>\n\n'},function(e,t,i){var n=i(78),s=function(e){if(e.using_resource={},e.special&&e.special.dict){var t=e[e.special.dict.big960]||{},i=e[e.special.dict.small960]||{},n=e[e.special.dict.big1130]||{},s=e[e.special.dict.small1130]||{};e.using_resource.big960=t,e.using_resource.small960=i,e.using_resource.big1130=n,e.using_resource.small1130=s}};e.exports=n.extend({template:_.template(i(83)),events:$.extend(n.prototype.events,{'click [data-role="show-all"]':"show_all"}),av_triggered_open:!1,show_all:function(e){e.stopPropagation(),e.preventDefault();var t=this;this.$el.toggleClass("show-all"),this.$el.is(".show-all")?(this.pv_triggered||(n.prototype.pv_trigger.call(this,null),this.pv_triggered=!0),this.av_triggered_open||(this.av_triggered=!1,n.prototype.av_trigger.call(this,null),this.av_triggered_open=!0),this.$el.find(".big-god").show(),this.$el.find(".small-god").hide(),this.$el.find("[data-role='show-all']").html("关闭<em>CLOSE</em>")):(this.$el.find(".big-god").hide(),this.$el.find(".small-god").show(),this.$el.find("[data-role='show-all']").html("打开<em>OPEN</em>")),setTimeout(function(){t.$el.trigger("show-change")},500)},hide:function(){this.$el.hide(),this.$el.trigger("show-change")},render:function(){var e=this;s(this.data),n.prototype.fix_ad_plus.call(this,this.data.using_resource.big960),n.prototype.fix_ad_plus.call(this,this.data.using_resource.small960),n.prototype.fix_ad_plus.call(this,this.data.using_resource.big1130),n.prototype.fix_ad_plus.call(this,this.data.using_resource.small1130),n.prototype.fix_ad_frame_url.call(this,this.data.using_resource.small960),n.prototype.fix_ad_frame_url.call(this,this.data.using_resource.big960),n.prototype.fix_ad_frame_url.call(this,this.data.using_resource.small1130),n.prototype.fix_ad_frame_url.call(this,this.data.using_resource.big1130),this.data.using_resource.small960=this.data.using_resource.small960||this,this.data.using_resource.big960,this.data.using_resource.small1130=this.data.using_resource.small1130||this,this.data.using_resource.big1130,this.data.using_resource.small960&&this.data.using_resource.small960.imp&&n.prototype.trigger_imp.call(this,this.data.using_resource.small960.imp),this.data.using_resource.big960&&this.data.using_resource.big960.imp&&n.prototype.trigger_imp.call(this,this.data.using_resource.big960.imp),this.data.using_resource.small1130&&this.data.using_resource.small1130.imp&&n.prototype.trigger_imp.call(this,this.data.using_resource.small1130.imp),this.data.using_resource.big1130&&this.data.using_resource.big1130.imp&&n.prototype.trigger_imp.call(this,this.data.using_resource.big1130.imp);try{this.$el.html(this.template(this.data)),this.$el.show(),this.$el.trigger("show-change")}catch(t){this.$el.hide(),console.log("ad data error no display")}1==this.$el.find("img").size()?this.$el.find("img").one("load",function(){e._ad_img_load()}):e._ad_img_load()}})},function(e,t){e.exports='\x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n<span class="god-mark">\n    <%if(dsp_source){%><%=dsp_source%>|<%}%>广告\n</span>\n<span data-role="show-all" class="god-o-c" href="javascript:void(0)">打开<em>OPEN</em></span>\n<div class="big-god" style="display:none">\n        <%if (using_resource.big960.type== "flash"){%>\n    <a class="b-960 flash" href="<%=using_resource.big960.click%>" target="_blank">\n    </a>\n    <embed class="b-960" src="<%=using_resource.big960.file%>" width="<%=using_resource.big960.width%>" height="<%=using_resource.big960.height%>"></embed>\n        <%}else if(resource.type== "image"){%>\n    <a class="b-960" href="<%=using_resource.big960.click%>" target="_blank"><img src="<%=using_resource.big960.file%>"/></a>\n        <%}%>\n        <%if (using_resource.big1130.type== "flash"){%>\n    <a class="b-1130 flash" href="<%=using_resource.big1130.click%>" target="_blank">\n        </a>\n        <embed class="b-1130" src="<%=using_resource.big1130.file%>" width="<%=using_resource.big1130.width%>" height="<%=using_resource.big1130.height%>"></embed>\n        <%}else if(resource.type== "image"){%>\n    <a class="b-1130" href="<%=using_resource.big1130.click%>" target="_blank">\n        <img src="<%=using_resource.big1130.file%>"/>\n        </a>\n        <%}%>\n    </a>\n</div>\n<div class="small-god">\n        <%if (using_resource.small960.type== "flash"){%>\n    <a class="s-960 flash" href="<%=using_resource.small960.click%>" target="_blank">\n        </a>\n        <embed class="s-960" src="<%=using_resource.small960.file%>" width="<%=using_resource.small960.width%>" height="<%=using_resource.small960.height%>"></embed>\n        <%}else if(using_resource.small960.type== "image"){%>\n    <a class="s-960" href="<%=using_resource.small960.click%>" target="_blank">\n    <img src="<%=using_resource.small960.file%>"/>\n        </a>\n        <%}%>\n        <%if (using_resource.small1130.type== "flash"){%>\n    <a class="s-1130 flash" href="<%=using_resource.small1130.click%>" target="_blank">\n        </a>\n        <embed class="s-1130" src="<%=using_resource.small1130.file%>" width="<%=using_resource.small1130.width%>" height="<%=using_resource.small1130.height%>"></embed>\n        <%}else if(using_resource.small1130.type== "image"){%>\n    <a class="s-1130" href="<%=using_resource.small1130.click%>" target="_blank">\n        <img src="<%=using_resource.small1130.file%>"/>\n        </a>\n        <%}%>\n    </a>\n</div>'},function(e,t,i){var n=i(78),s=function(e){if(e.using_resource={},e.special&&e.special.dict){var t=e[e.special.dict.txt]||{},i=e[e.special.dict.picture]||{};e.using_resource.title=t,e.using_resource.picture=i}};e.exports=n.extend({template:_.template(i(85)),events:$.extend(!0,{"focus-in-view":"trigger-av"},n.prototype.events),"trigger-av":function(){this.av_trigger()},render:function(){var e=this;this.data.adstyle=this.data.adstyle||"1",s(this.data),this.data.using_resource&&(n.prototype.fix_ad_plus.call(this,this.data.using_resource.title),n.prototype.fix_ad_plus.call(this,this.data.using_resource.picture)),this.$el.html(this.template(this.data)).removeAttr("data-media-id").removeAttr("data-focus-ev").addClass("focus-god"),this.data.using_resource&&this.data.using_resource.picture&&n.prototype.trigger_imp.call(this,this.data.using_resource.picture.imp),1==this.$el.find("img:eq(0)").size()?this.$el.find("img:eq(0)").one("load",function(){e._ad_img_load()}):e._ad_img_load()}})},function(e,t){e.exports='<%if(!adstyle || adstyle=="1"){%>\n<span class="god-mark">广告</span>\n<%if(dsp_source){%>\n<span class="god-mark god-mark-origin"><%=dsp_source%></span>\n<%}%>\n\x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n<%}%>\n<a target="_blank" href="<%=using_resource.picture.click%>">\n\n    <img alt="" src="<%=using_resource.picture.file%>"/>\n    <span class="shadow linear-box"><em class="linear-bg"></em><span><%=using_resource.title.text%></span></span>\n</a>'
}, function(e, t, i) {
    var n = i(11),
        s = i(78),
        a = i(75),
        o = new a,
        r = i(79),
        c = function(e) {
            if (e.using_resource = {}, e.resource && "iframe" == e.resource.type) e.using_resource = e.resource;
            else {
                if (!e.special || !e.special.dict) return;
                e.adstyle = e.adstyle || "";
                var t = e[e.special.dict.title] || {},
                    i = e[e.special.dict.picture] || {},
                    n = e[e.special.dict.video] || {},
                    s = e[e.special.dict.leftpicture] || {},
                    a = e[e.special.dict.middlepicture] || {},
                    o = e[e.special.dict.rightpicture] || {},
                    r = e[e.special.dict.lastpicture] || {};
                "pcinfo_txt" == e.form && (e.using_resource.title = t), "pcinfo_pictxt" == e.form && (e.using_resource.title = t, e.using_resource.picture = i), "pcinfo_mixpictxt" == e.form && (e.using_resource.title = t, e.using_resource.leftpicture = s, e.using_resource.middlepicture = a, e.using_resource.rightpicture = o, e.using_resource.lastpicture = r), "pcinfo_bannertxt" == e.form && (e.using_resource.title = t, e.using_resource.picture = i), "pcinfo_video" == e.form && (e.using_resource.title = t, e.using_resource.picture = i, e.using_resource.video = n)
            }
            var c = new Date;
            e.using_resource.now = "今天 " + c.getHours() + ":" + c.getMinutes()
        };
    e.exports = s.extend({
        template: _.template(i(87)),
        events: $.extend(s.prototype.events, {
            'click [data-role="god-play"]': "play",
            'click [data-role="god-close"]': "stop",
            "click .got-i-icon": "pcinfo_click"
        }),
        play: function(e) {
            e.stopPropagation(), e.preventDefault();
            var t = this;
            this.$el.find('[data-role="god-video"]').show(), this.$el.find('[data-role="god-video"] video')[0].play(), this.play_trigger(e), this.$el.find("[data-role='god-video'] video").one("ended", function(e) {
                t.stop(e)
            })
        },
        _click: function(e) {
            if (s.prototype._click.call(this, e), this.data.using_resource.video && this.data.using_resource.video.click_imp)
                for (var t = r.fix_imp_str(this.data.using_resource.video.click_imp, {
                        apid: "beans_" + this.ad_id,
                        impid: this.data.impression_id
                    }), i = 0; i < t.length; i++) o.trigger_imp({
                    url: t[i]
                })
        },
        pcinfo_click: function(e) {
            e.stopPropagation()
        },
        stop: function(e) {
            e.stopPropagation(), this.$el.find('[data-role="god-video"]').hide(), this.$el.find('[data-role="god-video"] video')[0].pause()
        },
        play_trigger: function(e) {
            var t = this.$el.offset(),
                i = e.target || e.srcElement;
            if (o.play_trigger({
                    source: this.data.source || "",
                    newsid: this.news_id || "",
                    subid: this.subid || "",
                    aid: this.data.adid,
                    apid: "beans_" + this.ad_id,
                    impid: this.data.impression_id,
                    mkey: this.data.monitorkey,
                    freq: this.data.freq,
                    ax: t && t.left.toFixed(1),
                    ay: t && t.top,
                    cx: e.offsetX || e.clientX - i.getBoundingClientRect().left || e.clientX,
                    cy: e.offsetY || e.clientY - i.getBoundingClientRect().top || e.clientY,
                    ed: this.data.ed,
                    bucket: this.data.bucket,
                    ext: this.data.ext,
                    uloc: this.data.uloc,
                    turn: this.turn,
                    sf: this.sf,
                    newschn: this.ad_channel_id,
                    pgid: this.pgid,
                    shbd_monitor_ext: this.data.shbd_monitor_ext,
                    latcy: this.latcy,
                    position: this.position || ""
                }), this.data.using_resource.video.tracking_imp)
                for (var n = r.fix_imp_str(this.data.using_resource.video.tracking_imp, {
                        apid: "beans_" + this.ad_id,
                        impid: this.data.impression_id
                    }), s = 0; s < n.length; s++) o.trigger_imp({
                    url: n[s]
                })
        },
        render: function() {
            var e = this;
            c(this.data);
            for (var t in this.data.using_resource) s.prototype.fix_ad_plus.call(this, this.data.using_resource[t]);
            "pcinfo_mixpictxt" == this.data.form || "pcinfo_bannertxt" == this.data.form ? this.$el.addClass("news-box-thr") : "pcinfo_video" == this.data.form ? this.$el.addClass("god-pop").removeClass("clear") : "pcinfo_txt" == this.data.form && this.$el.addClass("god-pop").addClass("news-box-txt");
            try {
                this.$el.html(this.template(this.data))
            } catch (i) {
                this.$el.hide(), n.log("ad data error no display")
            }
            this.data.using_resource && this.data.using_resource.title && s.prototype.trigger_imp.call(this, this.data.using_resource.title && this.data.using_resource.title.imp), 1 == this.$el.find("img:eq(0)").size() ? this.$el.find("img:eq(0)").one("load", function() {
                e._ad_img_load()
            }) : e._ad_img_load()
        }
    })
}, function(e, t) {
    e.exports = '<%if(using_resource.type=="iframe"){%>\n<iframe src="<%=using_resource.file%>" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" width="640" height="100"></iframe>\n<div class="other god-list-txt">\n    \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n    <span class="name">广告</span>\n    <span class="dot">·</span>\n    <span class="time"><%=using_resource.now%></span>\n</div>\n<%} else {%>\n\n<%if(form== "pcinfo_bannertxt"){%>\n\n<h4><a href="<%=using_resource.title.click%>" target="_blank"><%=using_resource.title.text%></a></h4>\n<div class="pic-group clear">\n    <div class="god-banner"><a href="<%=using_resource.picture.click%>" target="_blank"><img\n            src="<%=using_resource.picture.file%>"/></a>\n    </div>\n</div>\n\n    <%if(!adstyle||adstyle=="1"){%>\n<div class="other god-list-txt">\n    \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n    <span class="name">广告<%=dsp_source?" · "+dsp_source:""%></span>\n    <span class="dot">·</span>\n    <span class="time"><%=using_resource.now%></span>\n</div>\n    <%}%>\n\n\n<%}else if(form== "pcinfo_txt"){%>\n\n<h4><a href="<%=using_resource.title.click%>" target="_blank"><%=using_resource.title.text%></a></h4>\n\n    <%if(!adstyle||adstyle=="1"){%>\n<div class="other god-list-txt">\n    \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n    <span class="name">广告<%=dsp_source?" · "+dsp_source:""%></span>\n    <span class="dot">·</span>\n    <span class="time"><%=using_resource.now%></span>\n</div>\n    <%}%>\n\n<%}else if(form=="pcinfo_pictxt"){%>\n\n\n<div class="pic img-do left god-one">\n    <%if (using_resource.picture.type=="flash") {%>\n    <a class="swf-top" href="<%=using_resource.picture.click%>" target="_blank"></a>\n    <object type="application/x-shockwave-flash" data="<%=using_resource.picture.file%>" width="<%=using_resource.picture.width%>" height="<%=using_resource.picture.height%>">\n        <param name="movie" value="<%=using_resource.picture.file%>" />\n        <param name="wmode" value="opaque" />\n        <embed wmode="opaque"></embed>\n    </object>\n    <%} else if (using_resource.picture.type== "image") {%>\n    <a href="<%=using_resource.picture.click%>" target="_blank">\n        <img src="<%=using_resource.picture.file%>" alt=""/>\n    </a>\n    <%}%>\n    \x3c!--<a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a>--\x3e\n</div>\n<h4><a href="<%=using_resource.title.click%>" target="_blank">\n    <%=using_resource.title.text%>\n</a></h4>\n\n\n    <%if(!adstyle||adstyle=="1"){%>\n<div class="other god-list-txt">\n    \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n    <span class="name">广告<%=dsp_source?" · "+dsp_source:""%></span>\n    <span class="dot">·</span>\n    <span class="time"><%=using_resource.now%></span>\n</div>\n    <%}%>\n\n<%}else if(form=="pcinfo_video"){%>\n\n<div class="pic img-do left god-one">\n    <a href="javascript:void(0)" data-role="god-play" >\n        <img src="<%=using_resource.picture.file%>" alt=""/>\n    </a>\n    \x3c!--<a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a>--\x3e\n    <i class="got-video-icon"></i>\n</div>\n<h4> <a target="_blank"  href="<%=using_resource.video.click%>">\n    <%=using_resource.title.text%>\n</a></h4>\n\n    <%if(!adstyle||adstyle=="1"){%>\n<div class="other god-list-txt">\n    \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n    <span class="name">广告<%=dsp_source?" · "+dsp_source:""%></span>\n    <span class="dot">·</span>\n    <span class="time"><%=using_resource.now%></span>\n</div>\n    <%}%>\n\n\n<div class="god-video" data-role="god-video" style="display:none">\n    <div class="god-video-box">\n       <video controls="controls" src="<%=using_resource.video.file%>"/>\n    </div>\n    <div class="god-video-do">\n        <span class="god-video-close" data-role="god-close">关闭<i class="icon-close"></i></span>\n    </div>\n</div>\n<%}else if(form=="pcinfo_mixpictxt"){%>\n<h4>\n    <a href="<%=using_resource.title.click%>" target="_blank"><%=using_resource.title.text%></a>\n</h4>\n<div class="pic-group clear god-thr">\n    <ul>\n        <li class="img-do"><a href="<%=using_resource.leftpicture.click%>" target="_blank"><img\n                src="<%=using_resource.leftpicture.file%>"/></a></li>\n        <li class="img-do"><a href="<%=using_resource.middlepicture.click%>" target="_blank"><img\n                src="<%=using_resource.middlepicture.file%>"/></a></li>\n        <li class="img-do"><a href="<%=using_resource.rightpicture.click%>" target="_blank"><img\n                src="<%=using_resource.rightpicture.file%>"/></a></li>\n        <%if(using_resource.lastpicture){%>\n        <li class="img-do end"><a href="<%=using_resource.lastpicture.click%>" target="_blank"><img\n                src="<%=using_resource.lastpicture.file%>"/></a></li>\n        <%} else {%>\n        <li class="end pic-more"><a href="<%=using_resource.title.click%>" target="_blank">查看更多 &gt;</a></li>\n        <%}%>\n    </ul>\n</div>\n\n    <%if(!adstyle||adstyle=="1"){%>\n<div class="other god-list-txt">\n    \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n    <span class="name">广告<%=dsp_source?" · "+dsp_source:""%></span>\n    <span class="dot">·</span>\n    <span class="time"><%=using_resource.now%></span>\n</div>\n    <%}%>\n<%}%>\n<%}%>'},function(e,t,i){var n=i(75),s=(new n,i(78)),a=(i(79),function(e){if(e.special&&e.special.dict){var t=e[e.special.dict.title]||{},i=e[e.special.dict.picture]||{},n=e[e.special.dict.summary]||{};e.using_resource={title:t,picture:i,summary:n}}});e.exports=s.extend({template:_.template(i(89)),render:function(){var e=this;a(this.data),s.prototype.fix_ad_plus.call(this,this.data.using_resource.title),s.prototype.fix_ad_plus.call(this,this.data.using_resource.picture),s.prototype.fix_ad_plus.call(this,this.data.using_resource.summary),this.$el.html(this.template(this.data)).removeAttr("data-media-id").removeAttr("data-focus-ev"),s.prototype.trigger_imp.call(this,this.data.using_resource.picture.imp),1==this.$el.find("img:eq(0)").size()?this.$el.find("img:eq(0)").one("load",function(){e._ad_img_load()}):e._ad_img_load()}})},function(e,t){e.exports='\n    <div class="pic"><a href="<%=using_resource.picture.click%>" target="_blank"><img src="<%=using_resource.picture.file%>" alt=""></a></div>\n    <h4><a href="<%=using_resource.title.click%>" target="_blank"><%=using_resource.title.text%></a></h4>\n    <p>\n        <%=using_resource.summary.text%>\n    </p>\n'
}, function(e, t, i) {
    var n = i(11),
        s = i(78),
        a = i(75),
        o = (new a, i(79), function(e) {
            if (e.using_resource = {}, e.special && e.special.dict) {
                var t = e[e.special.dict.big] || {},
                    i = e[e.special.dict.small] || {};
                e.using_resource.big = t, e.using_resource.small = i
            } else e.resource && (e.using_resource.big = e.resource, e.using_resource.small = e.resource)
        });
    e.exports = s.extend({
        template: _.template(i(91)),
        render: function() {
            var e = this;
            o(this.data), s.prototype.fix_ad_plus.call(this, this.data.using_resource.big), s.prototype.fix_ad_plus.call(this, this.data.using_resource.small), s.prototype.fix_ad_frame_url.call(this, this.data.using_resource.small), s.prototype.fix_ad_frame_url.call(this, this.data.using_resource.big), this.data.using_resource.small = this.data.using_resource.small || this, this.data.using_resource.big, this.data.using_resource.big && this.data.using_resource.big.imp && s.prototype.trigger_imp.call(this, this.data.using_resource.big.imp);
            try {
                this.$el.html(this.template(this.data)), this.$el.show()
            } catch (t) {
                this.$el.hide(), n.log("ad data error no display")
            }
            1 == this.$el.find("img:eq(0)").size() ? this.$el.find("img:eq(0)").one("load", function() {
                e._ad_img_load()
            }) : e._ad_img_load()
        }
    })
}, function(e, t) {
    e.exports = '<%if(dsp_source){%>\n<span class="god-mark god-mark-origin"><%=dsp_source%></span>\n<%}%>\n\x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n<span class="god-mark">广告</span>\n<%if(using_resource.big.type!== "iframe"){%>\n\x3c!--<a class="swf-top" href="<%=using_resource.big.click%>" target="_blank"></a>--\x3e\n<a class="swf-top" href="<%=resource.click%>" target="_blank"></a>\n<%}%>\n<div class="big-god">\n    <%if (using_resource.big.type== "flash"){%>\n    <object type="application/x-shockwave-flash" data="<%=using_resource.big.file%>" width="<%=using_resource.big.width%>" height="<%=using_resource.big.height%>">\n        <param name="movie" value="<%=using_resource.big.file%>" />\n        <param name="wmode" value="opaque" />\n        <embed wmode="opaque"></embed>\n    </object>\n    <%}else if(using_resource.big.type== "image"){%>\n    <img src="<%=using_resource.big.file%>"/>\n    <%}else if(using_resource.big.type== "text"){%>\n    <%=using_resource.big.text%>\n    <%}else if(using_resource.big.type== "iframe"){%>\n    <iframe src="<%=using_resource.big.file%>" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" width="300" height="250"></iframe>\n    <%}%>\n\n</div>\n<div class="small-god">\n    <%if (using_resource.small.type== "flash"){%>\n    <object type="application/x-shockwave-flash" data="<%=using_resource.small.file%>" width="<%=using_resource.small.width%>" height="<%=using_resource.small.height%>">\n        <param name="movie" value="<%=using_resource.small.file%>" />\n        <param name="wmode" value="opaque" />\n        <embed wmode="opaque"></embed>\n    </object>\n    <%}else if(using_resource.small.type== "image"){%>\n    <img src="<%=using_resource.small.file%>"/>\n    <%}else if(using_resource.small.type== "text"){%>\n    <%=using_resource.small.text%>\n    <%}else if(using_resource.small.type== "iframe"){%>\n    <iframe src="<%=using_resource.small.file%>" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" width="300" height="100"></iframe>\n    <%}%>\n</div>'},function(e,t,i){var n=i(75),s=(new n,i(78)),a=function(e){if(e.special&&e.special.dict){var t=e[e.special.dict.txt]||{},i=e[e.special.dict.picture]||{};e.using_resource={title:t,picture:i}}};e.exports=s.extend({template:_.template(i(93)),render:function(){var e=this;a(this.data),s.prototype.fix_ad_plus.call(this,this.data.using_resource.title),s.prototype.fix_ad_plus.call(this,this.data.using_resource.picture),this.$el.html(this.template(this.data)).removeAttr("data-media-id").removeAttr("data-focus-ev").addClass("other"),s.prototype.trigger_imp.call(this,this.data.using_resource.picture.imp),1==this.$el.find("img:eq(0)").size()?this.$el.find("img:eq(0)").one("load",function(){e._ad_img_load()}):e._ad_img_load()}})},function(e,t){e.exports='<div class="pic img-do">\n    <a href="<%=using_resource.picture.click%>" target="_blank"><img src="<%=using_resource.picture.file%>" alt=""></a>\n</div>\n<h4><a href="<%=using_resource.title.click%>" target="_blank"><%=using_resource.title.text%></a>\n</h4>\n'
}, function(e, t, i) {
    var n = i(75),
        s = new n,
        a = i(63),
        o = i(79),
        r = i(80),
        c = i(95),
        l = c.extend({
            template: _.template(i(97))
        });
    e.exports = Backbone.View.extend({
        data: [],
        events: {
            "click .pic": "_click"
        },
        _click: function(e) {
            if (!$(e.target).is(".got-i-icon") && "javascript:void(0)" !== $(e.target).attr("href")) {
                var t = this,
                    i = $(e.currentTarget).offset(),
                    n = e.target || e.srcElement,
                    a = $(e.currentTarget).index() - 1,
                    o = this.swiperList[a];
                s.click_trigger({
                    source: o.source || "",
                    newsid: t.news_id || "",
                    subid: t.subid || "",
                    aid: o.adid,
                    apid: "beans_" + t.ad_id,
                    impid: o.impression_id,
                    mkey: o.monitorkey,
                    freq: o.freq || 0,
                    ax: i && i.left.toFixed(1) || "",
                    ay: i && i.top.toFixed(1) || "",
                    cx: e.offsetX || e.clientX - n.getBoundingClientRect().left || e.clientX,
                    cy: e.offsetY || e.clientY - n.getBoundingClientRect().top || e.clientY,
                    ed: o.ed,
                    bucket: o.bucket,
                    ext: o.ext,
                    uloc: o.uloc,
                    turn: t.turn,
                    sf: t.sf,
                    newschn: t.ad_channel_id,
                    pgid: t.pgid,
                    shbd_monitor_ext: o.shbd_monitor_ext,
                    latcy: t.latcy,
                    position: t.position || ""
                })
            }
        },
        av_trigger: function() {
            function e(e) {
                var n = t.swiperList[e];
                n && !n.av_triggered && (s.av_trigger({
                    source: n.source || "",
                    newsid: t.news_id || "",
                    subid: t.subid || "",
                    aid: n.adid,
                    apid: "beans_" + t.ad_id,
                    impid: n.impression_id,
                    mkey: n.monitorkey,
                    freq: n.freq || 0,
                    ax: i && i.left || "",
                    ay: i && i.top || "",
                    ed: n.ed,
                    bucket: n.bucket,
                    ext: n.ext,
                    uloc: n.uloc,
                    turn: t.turn,
                    newschn: t.ad_channel_id,
                    rsln: window.screen.height + "0" + window.screen.width,
                    shbd_monitor_ext: n.shbd_monitor_ext,
                    pgid: t.pgid,
                    latcy: t.latcy || "",
                    position: t.position || "",
                    sf: t.sf
                }), n.av_triggered = !0)
            }
            var t = this,
                i = this.$el.offset();
            a(this.$el) && (1 == this.swiperData.length && e(0), this.swiper.on("swiper-change", function(t) {
                e(t.page)
            }))
        },
        initialize: function(e) {
            this.data = e.data, this.ad_id = e.ad_id, this.turn = e.turn, this.channel_id = e.channel_id, this.sub_id = e.sub_id, this.news_id = e.news_id, this.ad_channel_id = e.ad_channel_id, this.pgid = r.get(e), this.latcy = e.latcy, this.position = e.position, this.sf = e.sf
        },
        render: function() {
            var e = this;
            this.data && (this.data[0] && _.each(this.data, function(t) {
                e.fix_ad_plus(t), e.trigger_imp(t)
            }), this.swiperDataAdapt(), this.swiperInit())
        },
        swiperDataAdapt: function() {
            var e = this;
            this.swiperList = [], this.swiperData = [], _.each(this.data, function(t) {
                t.av_triggered = !1, e.swiperList.push(t), e.swiperData.push({
                    focusImg: t.resource.file,
                    path: t.resource.click,
                    title: t.resource.text,
                    adstyle: t.adstyle,
                    dsp_source: t.dsp_source,
                    type: t.resource.type,
                    monitorkey: t.monitorkey
                })
            })
        },
        swiperInit: function(e) {
            var t = this,
                i = this.swiperData;
            this.swiper = new l({
                el: t.$el,
                data: i
            }), this._ad_img_load(), $("#god_index").show()
        },
        _ad_img_load: function() {
            var e = this;
            $(window).on("resize scroll", function() {
                e.av_trigger()
            }), this.av_trigger()
        },
        trigger_imp: function(e) {
            var t = this;
            if (e.resource.imp)
                for (var i = o.fix_imp_str(e.resource.imp, {
                        apid: "beans_" + t.ad_id,
                        impid: e.impression_id
                    }), n = 0; n < i.length; n++) s.trigger_imp({
                    url: i[n]
                })
        },
        fix_ad_plus: function(e) {
            var t = this;
            e.resource && e.resource.click && (e.resource.click = o.fix_adplus(e.resource.click, {
                apid: "beans_" + t.ad_id,
                impid: e.impression_id
            }))
        }
    })
}, function(e, t, i) {
    var n = Backbone.View.extend({
        template: _.template(i(96)),
        events: {
            "transitionend .con": "_onTransitionEnd",
            "click .bullets span ": "goPage",
            mouseenter: "freeze",
            mouseleave: "start"
        },
        duration: 3e3,
        curPage: 0,
        data: {
            items: []
        },
        initialize: function(e) {
            var t = this;
            this.data.items = e.data, this.$el = $(e.el), 1 == this.data.items.length ? (t.render(), this.$el.off("mouseleave")) : (t.data.items.unshift(t.data.items[t.data.items.length - 1]), t.data.items.push(t.data.items[1]), t.render(), t.ready())
        },
        render: function() {
            this.$el.html(this.template(this.data))
        },
        setPage: function(e) {
            var t = this;
            this.curPage = e, this.slideEls && (this.translateX = 0 - $(this.slideEls[0]).outerWidth() * (e + 1), this.isSupportTransform() ? (this.$els.css("transform", "translate3d(" + this.translateX + "px,0px, 0)"), t.setPageNation(t.curPage)) : this.$els.animate({
                left: this.translateX + "px"
            }, "300", function() {
                (t.curPage < 0 || t.curPage > t.totalPage - 1) && (t.curPage < 0 ? (t.curPage = t.totalPage - 1, this.translateX = 0 - t.slideEls[0].clientWidth * t.totalPage) : (t.curPage = 0, this.translateX = 0 - t.slideEls[0].clientWidth), t.$els.css({
                    left: this.translateX
                })), t.setPageNation(t.curPage)
            }), this.trigger("swiper-change", {
                page: this.curPage,
                o: this
            }))
        },
        ready: function() {
            this.$els = this.$el.find('[data-role="item-wrapper"]'), this.slideEls = this.$el[0] && this.$els[0].children, this.totalPage = this.slideEls.length - 2, this.setPage(0), this.start()
        },
        start: function() {
            var e = this;
            this.timer = setInterval(function() {
                e.next()
            }, this.duration)
        },
        next: function() {
            this.curPage++, this.setPage(this.curPage)
        },
        _onTransitionEnd: function() {
            this.curPage > this.totalPage - 1 ? this.setPageNoAnimate(0) : this.curPage < 0 && this.setPageNoAnimate(this.totalPage - 1)
        },
        setPageNoAnimate: function(e) {
            this.$els.css("transition", "none"), this.setPage(e);
            var t = this;
            setTimeout(function() {
                t.$els.css("transition", "")
            }, 100)
        },
        goPage: function(e) {
            this.setPage($(e.currentTarget).data("id"))
        },
        freeze: function(e) {
            clearInterval(this.timer), this.timer = null
        },
        isSupportTransform: function() {
            return "transform" in document.createElement("div").style
        },
        setPageNation: function(e) {
            this.$el.find(".bullets span").removeClass("active"), this.$el.find(".bullets span").eq(e).addClass("active")
        }
    });
    e.exports = n
}, function(e, t) {
    e.exports = '\x3c!-- 三种类型广告：图文、flash、frame --\x3e\n<div class="swiper">\n<div class="widget-swiper">\n    <div class="scroll">\n        <div class="con" data-role="item-wrapper" style="transform: translate3d(-960px, 0px, 0px);">\n      \n            <%for (var i = 0; i < items.length; i++) {\n              var item = items[i];\n            %>  \n            <div class="pic img-do" data-monitorkey="<%=item.monitorkey%>">\n                <%if (!adstyle || adstyle == "1") {%>\n                <span class="god-mark">广告</span>\n                <%if (dsp_source) {%>\n                <span class="god-mark god-mark-origin"><%=dsp_source%></span>\n                <%}%>\n                \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n                <%}%>\n\n                <a href="<%=item.using_resource.picture.click%>" target="_blank">\n                    <img alt="" src="<%=item.using_resource.picture.file%>">\n                </a>\n                <span class="linear-box widget-txt">\n                    <em class="linear-bg"></em>\n                    <a href="<%=item.using_resource.picture.click%>">\n                    <%=item.using_resource.title.text%>\n                    </a>\n                </span>\n            </div>\n            <%}%>\n            \n        </div>\n    </div>\n    <div class="bullets">\n        <%for (var i = 0; i < items.length; i++) {\n        %>\n        <span class="active" data-id="<%=i%>"><a></a></span>\n        <%}%>\n    </div>\n</div>\n</div>\n\n<div class="tab-wrap">\n    <ul class="tab-nav">\n        <li class="tab-nav-item tab-nav-item-house active">\n            <span></span>\n        </li>\n    </ul>\n    <div class="tab-body">\n        <div class="tab-body-item tab-body-item-house active">\n            <ul class="tab-body-item-list">\n                <%for (var i = 0; i < items.length; i++) {\n                    var item = items[i];\n                %>\n                <li class="tab-body-item-list-item" data-monitorkey="<%=item.monitorkey%>">\n                    <em class="dot"></em>\n                    <a href="<%=item.using_resource.title.click%>" target="_blank">\n                        <%=item.using_resource.title.text%>\n                    </a>\n                </li>\n                <%}%>\n            </ul>\n        </div>\n    </div>\n</div>'},function(e,t){e.exports='\n\n<div class="widget-swiper">\n    <div class="scroll">\n    <div class="con" data-role="item-wrapper">\n        <% for (var i=0,len=items.length;i<=len-1;i++){%>\n          <%  var item=items[i] %>\n        \n        <div class="pic img-do" data-monitorkey="<%=item.monitorkey%>">\n\n            <%if (!item.adstyle || item.adstyle == "1") {%>\n            <span class="god-mark">广告</span>\n            <%if (item.dsp_source) {%>\n            <span class="god-mark god-mark-origin"><%=item.dsp_source%></span>\n            <%}%>\n            \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n            <%}%>\n\n            <%if(item.type=="iframe"){%>\n            <iframe src="<%=item.focusImg%>" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" width="300" height="150"></iframe>\n            <%} else {%>\n            <a href="<%=item.path%>" target="_blank">\n                <img alt="" src="<%=item.focusImg%>">\n            </a>\n            <span class="linear-box widget-txt"><em class="linear-bg"></em><a href="<%=item.path%>"><%=item.title%></a></span>\n            <%}%>\n            \n        </div>\n        <%}%>\n    </div>\n    </div>\n    <div class="bullets">\n    <% for (var i=0,len=items.length;i<=len-3;i++){%>\n        <span class="<%=(i==0) ? \'active\' : \'\'%>" data-id="<%= i%>"><a></a></span>\n    <%}%>    \n    </div>\n</div>\n'},function(e,t,i){var n=i(75),s=new n,a=i(63),o=i(79),r=i(80),c=i(95),l=c.extend({template:_.template(i(99)),events:{"transitionend .tab-body":"_onTransitionEnd","click .tab-nav-item ":"goPage",mouseenter:"freeze",mouseleave:"start"},setPageNation:function(e){this.$el.find(".tab-nav .tab-nav-item").removeClass("active"),this.$el.find(".tab-nav .tab-nav-item").eq(e).addClass("active")}});e.exports=Backbone.View.extend({data:[],events:{"click .tab-body-item-list-item":"_click","click .tab-nav-item":"_tab"},_click:function(e){var t=this,i=$(e.currentTarget).offset(),n=e.target||e.srcElement,a=$(e.currentTarget).index(),o=this.tabList[a];s.click_trigger({source:o.source||"",newsid:t.news_id||"",subid:t.subid||"",aid:o.adid,apid:"beans_"+t.ad_id,impid:o.impression_id,mkey:o.monitorkey,freq:o.freq||0,ax:i&&i.left.toFixed(1)||"",ay:i&&i.top.toFixed(1)||"",cx:e.offsetX||e.clientX-n.getBoundingClientRect().left||e.clientX,cy:e.offsetY||e.clientY-n.getBoundingClientRect().top||e.clientY,ed:o.ed,bucket:o.bucket,ext:o.ext,uloc:o.uloc,turn:t.turn,sf:t.sf,newschn:t.ad_channel_id,pgid:t.pgid,shbd_monitor_ext:o.shbd_monitor_ext,latcy:t.latcy,position:t.position||""})},_tab:function(){$(this).addClass("active").siblings().removeClass("active")},av_trigger:function(){function e(e){for(var n=7*e;n<7*(e+1);n++){var a=t.tabList[n];if(!a||a.av_triggered)break;s.av_trigger({source:a.source||"",newsid:t.news_id||"",subid:t.subid||"",aid:a.adid,apid:"beans_"+t.ad_id,impid:a.impression_id,mkey:a.monitorkey,freq:a.freq||0,ax:i&&i.left||"",ay:i&&i.top||"",ed:a.ed,bucket:a.bucket,ext:a.ext,uloc:a.uloc,turn:t.turn,newschn:t.ad_channel_id,rsln:window.screen.height+"0"+window.screen.width,shbd_monitor_ext:a.shbd_monitor_ext,pgid:t.pgid,latcy:t.latcy||"",position:t.position||"",sf:t.sf}),a.av_triggered=!0}}var t=this,i=this.$el.offset();a(this.$el)&&(1==this.tabData.length&&e(0),this.tab.on("swiper-change",function(t){e(t.page)}))},initialize:function(e){this.data=e.data,this.ad_id=e.ad_id,this.turn=e.turn,this.channel_id=e.channel_id,this.sub_id=e.sub_id,this.news_id=e.news_id,this.ad_channel_id=e.ad_channel_id,this.pgid=r.get(e),this.latcy=e.latcy,this.position=e.position,this.sf=e.sf},render:function(){var e=this;this.data&&(this.data[0]&&_.each(this.data,function(t){e.fix_ad_plus(t),e.trigger_imp(t)}),this.tabDataAdapt(),this.tabInit())},tabDataAdapt:function(){var e=this;this.tabList=[],this.tabData=[];var t=[];_.each(this.data,function(i){i.av_triggered=!1,e.tabList.push(i),t.push({path:i.resource.click,title:i.resource.text,monitorkey:i.monitorkey})});for(var i=Math.ceil(t.length),n=0;n<3&&(this.tabData.push(t.splice(0,7)),!(i<=7*(n+1)));n++);},tabInit:function(){var e=this;this.tab=new l({el:e.$el,data:e.tabData}),e._ad_img_load(),$("#god_index").show()},_ad_img_load:function(){var e=this;$(window).on("resize scroll",function(){e.av_trigger()}),this.av_trigger()},trigger_imp:function(e){var t=this;if(e.resource.imp)for(var i=o.fix_imp_str(e.resource.imp,{apid:"beans_"+t.ad_id,impid:e.impression_id}),n=0;n<i.length;n++)s.trigger_imp({url:i[n]})},fix_ad_plus:function(e){var t=this;e.resource&&e.resource.click&&(e.resource.click=o.fix_adplus(e.resource.click,{apid:"beans_"+t.ad_id,impid:e.impression_id}))}})},function(e,t){e.exports='    \n    <ul class="tab-nav">\n        <li class="tab-nav-item active" data-id="0">\n            <span>热点</span>\n        </li>\n        <% if (items.length >= 4) { %>\n        <li class="tab-nav-item" data-id="1">\n            <span>商情</span>\n        </li>\n        <% } %>\n        <% if (items.length >= 5) { %>\n        <li class="tab-nav-item" data-id="2">\n            <span>关注</span>\n        </li>\n        <% } %>\n    </ul>\n    <div class="tab-body" data-role="item-wrapper">\n        <%for (var i = 0; i < items.length; i++) {\n            var tab = items[i];\n        %>\n        <div class="tab-body-item">\n            <ul class="tab-body-item-list">\n                <%for (var j = 0; j < tab.length; j++) {\n                    var item = tab[j];\n                    if (!item) break;\n                %>\n                <li class="tab-body-item-list-item" data-monitorkey="<%=item.monitorkey%>">\n                    <em class="dot"></em>\n                    <a href="<%=item.path%>" target="_blank">\n                        <%=item.title%>\n                    </a>\n                </li>\n                <%}%>\n            </ul>\n        </div>\n        <%}%>\n    </div>\n'
}, function(e, t, i) {
    var n = i(78),
        s = function(e) {
            if (e.using_resource = {}, e.special && e.special.dict) {
                var t = e[e.special.dict.txt] || {},
                    i = e[e.special.dict.picture] || {};
                e.using_resource.title = t, e.using_resource.picture = i
            }
        };
    e.exports = n.extend({
        template: _.template(i(101)),
        events: $.extend(!0, {
            "focus-in-view": "trigger-av"
        }, n.prototype.events),
        "trigger-av": function() {
            this.av_trigger()
        },
        render: function() {
            var e = this;
            this.data.adstyle = this.data.adstyle || "1", s(this.data), this.data.using_resource && (n.prototype.fix_ad_plus.call(this, this.data.using_resource.title), n.prototype.fix_ad_plus.call(this, this.data.using_resource.picture)), this.$el.html(this.template(this.data)).hide(), this.data.using_resource && this.data.using_resource.picture && n.prototype.trigger_imp.call(this, this.data.using_resource.picture.imp), 1 == this.$el.find("img:eq(0)").size() ? this.$el.find("img:eq(0)").one("load", function() {
                e._ad_img_load()
            }) : e._ad_img_load()
        }
    })
}, function(e, t) {
    e.exports = '\x3c!--<div class="god-focus">--\x3e\n    <%if(!adstyle || adstyle=="1"){%>\n    <span class="god-mark">广告</span>\n    <%if(dsp_source){%>\n    <span class="god-mark god-mark-origin"><%=dsp_source%></span>\n    <%}%>\n    \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n    <%}%>\n    <a target="_blank" href="<%=using_resource.picture.click%>">\n        <img alt="" src="<%=using_resource.picture.file%>"/>\n    </a>\n    <span class="linear-box">\n        <em class="linear-bg"></em>\n        <a href="<%=using_resource.picture.click%>" target="_blank">\n            <%=using_resource.title.text%>\n        </a>\n    </span>\n\x3c!--</div>--\x3e'
}, function(e, t, i) {
    var n = i(78),
        s = function(e) {
            if (e.using_resource = {}, "picturetxt" === e.form && e.special && e.special.dict) {
                var t = e[e.special.dict.txt] || {},
                    i = e[e.special.dict.picture] || {};
                e.using_resource.title = t, e.using_resource.picture = i
            }
        };
    e.exports = n.extend({
        template: _.template(i(103)),
        render: function() {
            var e = this;
            this.data && (this.data.adstyle = this.data.adstyle || "1", s(this.data), this.data.using_resource && (n.prototype.fix_ad_plus.call(this, this.data.using_resource.title), n.prototype.fix_ad_plus.call(this, this.data.using_resource.picture)), this.$el.html(this.template(this.data)), this.data.using_resource && this.data.using_resource.picture && n.prototype.trigger_imp.call(this, this.data.using_resource.picture.imp), 1 == this.$el.find("img:eq(0)").size() ? this.$el.find("img:eq(0)").one("load", function() {
                e._ad_img_load()
            }) : e._ad_img_load())
        }
    })
}, function(e, t) {
    e.exports = '<a href="<%=using_resource.picture.click%>" class="img-warp" target="_blank">\n    <img src="<%=using_resource.picture.file%>" alt="<%=using_resource.title.text%>" />\n    <span class="desc">\n        <em class="bg"></em>\n        <em class="txt"><%=using_resource.title.text%></em>\n    </span>\n    <%if(!adstyle||adstyle=="1"){%>\n    \x3c!-- <a href="http://corp.sohu.com/s2007/privacy/" target="_blank" class="got-i-icon"></a> --\x3e\n    <span class="god-mark">广告</span>\n    <%}%>\n</a>'},function(e,t,i){var n=i(78),s=i(63),a=i(75),o=new a,r=i(80);e.exports=n.extend({events:$.extend(n.prototype.events,{}),av_triggered_open:!1,hide:function(){this.$el.hide(),this.$el.trigger("show-change")},initialize:function(e){this.needSubAv=!0,this.data2=e.data[1]||!1,this.resolveAds(e),this.data=e.data[0],this.ad_id=e.ad_id,this.turn=e.turn,this.channel_id=e.channel_id,this.sub_id=e.sub_id,this.news_id=e.news_id,this.ad_channel_id=e.ad_channel_id,this.pgid=r.get(e),this.latcy=e.latcy,this.av_triggered=!1,this.position=e.position,this.sf=e.sf,this.cut_over=e.cut_over,this.subid=e.subid,this.opts=e},resolveAds:function(e){if(e.data.length>0&&e.data[0])switch(e.data[0].resource.type){case"image":case"flash":if(e.data[0].resource.width>575)this.data=e.data[0],this.data2=!1,
this.triggerSubPv(e.data[0],e);else if(e.data[1]&&575==e.data[1].resource.width&&"iframe"!=e.data[1].resource.type){this.needSubAv=!1;var t=e.ad_type.substr(e.ad_type.length-1,1);this.$el.trigger("needSecondColumn",{data:e.data[1],column_type:t})}else this.hide(),this.data2=!1,this.triggerSubPv({},e);break;case"iframe":e.data[0].resource.height="100",e.data[0].resource.width="1180",this.data=e.data[0],this.data2=!1,this.triggerSubPv(e.data[0],e);break;default:this.hide()}else this.hide()},av_trigger:function(){function e(e,i){o.av_trigger({source:e.source||"",newsid:i.news_id||"",subid:i.subid||"",aid:e.adid,apid:"beans_"+i.ad_id,impid:e.impression_id,mkey:e.monitorkey,freq:e.freq||0,ax:t&&t.left||"",ay:t&&t.top||"",ed:e.ed,bucket:e.bucket,ext:e.ext,uloc:e.uloc,turn:i.turn,newschn:i.ad_channel_id,rsln:window.screen.height+"0"+window.screen.width,shbd_monitor_ext:e.shbd_monitor_ext,pgid:i.pgid,latcy:i.latcy||"",position:i.position||"",sf:i.sf})}this.opts;if(!this.av_triggered){var t=this.$el.offset();if(s(this.$el)){if(e(this.data,this),this.needSubAv){e(this.data2||this.data,this)}this.av_triggered=!0}}},triggerSubPv:function(e,t){var i=this.$el.offset();o.pv_trigger({source:e.source||"",newsid:t.news_id||"",subid:t.subid||"",aid:e.adid,apid:"beans_"+t.ad_id,impid:e.impression_id,mkey:e.monitorkey,freq:e.freq||0,ax:i&&i.left||"",ay:i&&i.top||"",ed:e.ed,bucket:e.bucket,ext:e.ext,uloc:e.uloc,turn:t.turn,newschn:t.ad_channel_id,rsln:window.screen.height+"0"+window.screen.width,shbd_monitor_ext:e.shbd_monitor_ext,pgid:t.pgid,latcy:t.latcy,sf:t.sf,position:t.position||""})}})},function(e,t,i){var n=i(78);e.exports={column_1:{ad_id:"15867",desc:"PC端新闻频道首页第一通栏",Ins:n,size:"11800100"},column_2:{ad_id:"15878",desc:"PC端新闻频道首页第二通栏",Ins:n,size:"11800100"},column_3:{ad_id:"15885",desc:"PC端新闻频道首页第三通栏",Ins:n,size:"11800100"},column_4:{ad_id:"15895",desc:"PC端新闻频道首页第四通栏",Ins:n,size:"11800100"},column_5:{ad_id:"15909",desc:"PC端新闻频道首页第五通栏",Ins:n,size:"11800100"},column_6:{ad_id:"15913",desc:"PC端新闻频道首页第六通栏",Ins:n,size:"11800100"},side_1:{ad_id:"15868",desc:"PC端新闻频道首页右侧第一矩形",Ins:n,size:"3000250"},side_2:{ad_id:"15871",desc:"PC端新闻频道首页右侧第二矩形",Ins:n,size:"3000250"},side_3:{ad_id:"15892",desc:"PC端新闻频道首页右侧第三矩形",Ins:n,size:"3000250"},side_4:{ad_id:"15906",desc:"PC端新闻频道首页右侧第四矩形",Ins:n,size:"3000250"},side_5:{ad_id:"15912",desc:"PC端新闻频道首页右侧第五矩形",Ins:n,size:"3000250"},txt_focus_1:{ad_id:"15869",desc:"PC端新闻频道首页要闻区半行文字链1",Ins:n,size:"80001"},txt_focus_2:{ad_id:"15870",desc:"PC端新闻频道首页要闻区半行文字链2",Ins:n,size:"80001"},txt_politics_society_1:{ad_id:"15872",desc:"PC端新闻频道首页时政生活新闻区半行文字链1",Ins:n,size:"80001"},txt_politics_society_2:{ad_id:"15873",desc:"PC端新闻频道首页时政生活新闻区半行文字链2",Ins:n,size:"80001"},txt_politics_1:{ad_id:"15874",desc:"PC端新闻频道首页时局新闻区半行文字链1",Ins:n,size:"80001"},txt_politics_2:{ad_id:"15875",desc:"PC端新闻频道首页时局新闻区半行文字链2",Ins:n,size:"80001"},txt_society_1:{ad_id:"15876",desc:"PC端新闻频道首页生活新闻区半行文字链1",Ins:n,size:"80001"},txt_society_2:{ad_id:"15877",desc:"PC端新闻频道首页生活新闻区半行文字链2",Ins:n,size:"80001"},txt_military_culture_1:{ad_id:"15879",desc:"PC端新闻频道首页文化军事新闻区半行文字链1",Ins:n,size:"80001"},txt_military_culture_2:{ad_id:"15880",desc:"PC端新闻频道首页文化军事新闻区半行文字链2",Ins:n,size:"80001"},txt_culture_1:{ad_id:"15881",desc:"PC端新闻频道首页读书新闻区半行文字链1",Ins:n,size:"80001"},txt_culture_2:{ad_id:"15882",desc:"PC端新闻频道首页读书新闻区半行文字链2",Ins:n,size:"80001"},txt_history_1:{ad_id:"15883",desc:"PC端新闻频道首页历史新闻区半行文字链1",Ins:n,size:"80001"},txt_history_2:{ad_id:"15884",desc:"PC端新闻频道首页历史新闻区半行文字链2",Ins:n,size:"80001"},txt_business_finance_1:{ad_id:"15886",desc:"PC端新闻频道首页财经金融新闻区半行文字链1",Ins:n,size:"80001"},txt_business_finance_2:{ad_id:"15887",desc:"PC端新闻频道首页财经金融新闻区半行文字链2",Ins:n,size:"80001"},txt_stock_1:{ad_id:"15888",desc:"PC端新闻频道首页股票新闻区半行文字链1",Ins:n,size:"80001"},txt_stock_2:{ad_id:"15889",desc:"PC端新闻频道首页股票新闻区半行文字链2",Ins:n,size:"80001"},txt_finance_1:{ad_id:"15890",desc:"PC端新闻频道首页理财新闻区半行文字链1",Ins:n,size:"80001"},txt_finance_2:{ad_id:"15891",desc:"PC端新闻频道首页理财新闻区半行文字链2",Ins:n,size:"80001"},txt_sports_yule_1:{ad_id:"15893",desc:"PC端新闻频道首页体育娱乐新闻区半行文字链1",Ins:n,size:"80001"},txt_sports_yule_2:{ad_id:"15894",desc:"PC端新闻频道首页体育娱乐新闻区半行文字链2",Ins:n,size:"80001"},txt_fashion_life_1:{ad_id:"15896",desc:"PC端新闻频道首页时尚生活新闻区半行文字链1",Ins:n,size:"80001"},txt_fashion_life_2:{ad_id:"15897",desc:"PC端新闻频道首页时尚生活新闻区半行文字链2",Ins:n,size:"80001"},txt_health_1:{ad_id:"15898",desc:"PC端新闻频道首页健康新闻区半行文字链1",Ins:n,size:"80001"},txt_health_2:{ad_id:"15899",desc:"PC端新闻频道首页健康新闻区半行文字链2",Ins:n,size:"80001"},txt_teach_1:{ad_id:"15900",desc:"PC端新闻频道首页教育新闻区半行文字链1",Ins:n,size:"80001"},txt_teach_2:{ad_id:"15901",desc:"PC端新闻频道首页教育新闻区半行文字链2",Ins:n,size:"80001"},txt_food_1:{ad_id:"15902",desc:"PC端新闻频道首页美食新闻区半行文字链1",Ins:n,size:"80001"},txt_food_2:{ad_id:"15903",desc:"PC端新闻频道首页美食新闻区半行文字链2",Ins:n,size:"80001"},txt_travel_1:{ad_id:"15904",desc:"PC端新闻频道首页旅游新闻区半行文字链1",Ins:n,size:"80001"},txt_travel_2:{ad_id:"15905",desc:"PC端新闻频道首页旅游新闻区半行文字链2",Ins:n,size:"80001"},txt_focus_auto_1:{ad_id:"15907",desc:"PC端新闻频道首页房产汽车新闻区半行文字链1",Ins:n,size:"80001"},txt_focus_auto_2:{ad_id:"15908",desc:"PC端新闻频道首页房产汽车新闻区半行文字链2",Ins:n,size:"80001"},txt_it_digital_1:{ad_id:"15910",desc:"PC端新闻频道首页科技数码新闻区半行文字链1",Ins:n,size:"80001"},txt_it_digital_2:{ad_id:"15911",desc:"PC端新闻频道首页科技数码新闻区半行文字链2",Ins:n,size:"80001"}}},function(e,t,i){var n=i(7),s=function(){this.prefix="ad_t_";for(var e=1;e<=6;e++){var t=this.prefix+e;this[t]=parseInt(n.get(t))||Math.ceil(Math.random()*e)}};s.prototype={get_cur_turn:function(e,t){return t&&t.fromCookie?parseInt(n.get(e)):this[e]},save_ad_turn:function(e,t){n.set(e,t,{expires:new Date((new Date).getTime()+864e5),doamin:window.location.hostname,path:window.location.pathname})},del_old_cookie:function(e,t){n.set(e,t,{expires:new Date((new Date).getTime()-1)})}};var a=new s,o=function(e,t){if("channel"==e){if(15==t.channel_id){if([1,2,3].indexOf(t.position)>=0)return 3}else if([30,23].indexOf(t.channel_id)>=0){if([1,2,3,4,5].indexOf(t.position)>=0)return 2}else if(10==t.channel_id){if([1,2,3].indexOf(t.position)>=0)return 2}else if(26==t.channel_id&&[1].indexOf(t.position)>=0)return 2}else if("sub"==e){if(15==t.channel_id){if([997].indexOf(t.sub_id)>=0){if([1,2,3,5].indexOf(t.position)>=0)return 2}else if(998==t.sub_id){if([1].indexOf(t.position)>=0)return 3;if([2].indexOf(t.position)>=0)return 4;if([3,4,5].indexOf(t.position)>=0)return 2}}else if(30==t.channel_id&&[936].indexOf(t.sub_id)>=0&&[1,2,3,5].indexOf(t.position)>=0)return 2}else if("index"==e){if([1].indexOf(t.position)>=0)return 5;if([2,3,4,5,6].indexOf(t.position)>=0)return 3}return 1},r=function(e,t,i){if("channel"==t){var n={15:3,30:2,23:2,12:{side_1:2},43:{side_1:2},41:{side_1:2},42:{side_1:2},19:{side_1:2},10:{side_1:2,side_2:2,side_3:2,side_fix:2},26:{side_1:2}};if(n[i.channel_id])return"number"==typeof n[i.channel_id]?n[i.channel_id]:n[i.channel_id][e]||1}else if("sub"==t){if(15==i.channel_id)return[994,996,995].indexOf(i.sub_id)>=0?3:[997].indexOf(i.sub_id)>=0?2:1;if(30==i.channel_id){if(936!==i.sub_id)return 2}else{if(23==i.channel_id)return 2;if([12,43,41,42,19,26].indexOf(i.channel_id)>=0){if("side_1"==e)return 2}else if(10==i.channel_id&&["side_1","side_2","side_3","side_fix"].indexOf(e)>=0)return 2}}else{if("article"==t){if(18==i.channel_id)return 3;if([17,28,10,26].indexOf(i.channel_id)>=0){if(["side_1","side_2","side_3","side_4","side_fix"].indexOf(e)>=0)return 2}else{if([24,29].indexOf(i.channel_id)>=0)return 2;if(8==i.channel_id&&"side_1"==e)return 3}return 2}if("v3_index"==t)return"side_1"==e?4:"side_6"==e||"side_8"==e||"side_7"==e?2:3;if("pic_collection"==t)return"side_1"==e||"side_2"==e||"side_3"==e?2:1;if("news_channel"==t)return 3}},c=function(e,t){return[17,18,8].indexOf(t.channel_id)>=0?"article"==e?3:1:3},l=function(e,t,i){return"pic_collection"==t?"column_1"==e||"column_2"==e?2:1:"news_channel"==t?"column_3"==e?4:3:"column_1"==e?5:["column_7","column_8"].indexOf(e)>=0?1:3},d=function(e){return e.block_name&&"history"==e.block_name?6:1},h={},u=0,p=function(e,t,i){var n="ad_t_"+e+"_"+t+"_"+i.channel_id+"_"+(i.sub_id||"")+"_"+(i.tag_id||"")+"_"+(i.position||""),s="ad_t_",p=1;if(i.sub_id=parseInt(i.sub_id)||0,i.channel_id=parseInt(i.channel_id)||0,"feeds"==t?p=o(e,i)||1:["side_1","side_2","side_3","side_4","side_5","side_6","side_fix","side_7","side_8"].indexOf(t)>=0?p=r(t,e,i)||1:["writer","recommends","hot_spot"].indexOf(t)>=0?p=c(e,i)||1:"index_focus"==t?p=3:["column_1","column_2","column_3","column_4","column_5","column_6","column_7","column_8"].indexOf(t)>=0?p=l(t,e)||1:t.match(/txt\w+\_\d+/gi)?p=d(i):"rectangle"===t&&(p=3),1==p)return 1;var f={fromCookie:!1};"side_fix"==t&&(f.fromCookie=!0,s+="side_fix_");var m=a.get_cur_turn(s+p,f)||Math.ceil(Math.random()*p);if(m=m%p+1,a.del_old_cookie(n,m),"hot_spot"==t){if(u)return u;u=m}if("feeds"==t){if(h[p])return h[p];h[p]=m,console.log(h)}return a.save_ad_turn(s+p,m),m};e.exports=p},function(e,t,i){var n=i(77),s={genRands:function(){var e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";return[0,0,0,0,0,0,0].map(function(){return e[Math.floor(Math.random()*e.length)]}).join("")},getRegions:function(e){return!e||e.length<1?[]:e.map(function(e){return{regionId:e.regionId,size:10,integrateType:1,spm:"no.spm.at.current.moment",forceUseNewData:!1,adapter:"pc"}})},tidyAdsParams:function(e){var t=+new Date+this.genRands(),i=+new Date+this.genRands();return{suv:t,pvid:i,client:1,spm_e:i,requestid:[t,+new Date].join("_"),user_agent:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36",regions:this.getRegions(e),adapter:{name:"pc"}}},insertAdsProps:function(e,t){if(e){var i=t.v3_index,s={},a=[],o=this;Object.keys(e.data).forEach(function(e){a.push(1*e)}),Object.keys(i).forEach(function(e){var t=i[e];t.regionId&&a.indexOf(1*t.regionId)>-1&&(s[1*t.regionId]=$.extend({className:e},t))}),Object.keys(s).forEach(function(t){var i=s[t],a=e.data[t].data[0];n.setV3IndexData([{key:i.className,prop:"maxreads",value:a&&a.maxreads&&a.maxreads||""},{key:i.className,prop:"turn",value:a&&a.turn&&a.turn||""},{key:i.className,prop:"adps",value:a&&a.adps&&a.adps||""},{key:i.className,prop:"adType",value:a&&a.adType},{key:i.className,prop:"baiduId",value:a&&a.adData.id&&a.adData.id||""},{key:i.className,prop:"pcm",value:a&&o.generatePCM(a)||""}]),a&&a.adType&&"XPS"===a.adType&&n.setV3IndexData([{key:i.className,prop:"ad_id",value:a.adData.itemspaceid},{key:i.className,prop:"itemspaceid",value:a&&a.adData.itemspaceid&&a.adData.itemspaceid||""}])})}},genBaiDuAds:function(e,t){(window.slotbydup=window.slotbydup||[]).push({id:e,container:t,isAsync:!0})},refreshBuryCode:function(){window.sohuSpm&&"function"==typeof window.sohuSpm.domDidChange&&window.sohuSpm.domDidChange()},generatePCM:function(e){return[e.resourceType||"",e.authorId||"",e.id||"",e.pcm||"",e.type||"",""].join("|")}};e.exports=s},function(e,t){var i=function(e){var t=1e4+(e.channel_id?parseInt(e.channel_id):0),i="";if(e.sub_id){for(var n=e.sub_id.toString(),s=0;s<5-n.length;s++)i+="0";i+=n}else i="00000";return t+""+i};e.exports=i},function(e,t){var i=function(e){return""+(1e4+(e?parseInt(e):0))},n=function(e){var t="";if(e){for(var i=e.toString(),n=0;n<5-i.length;n++)t+="0";t+=i}else t="00000";return t},s=function(e){var t=i(e.channel_id);if(e.sub_id){return[t+"00000",t+n(e.sub_id)].join(",")}return t+"00000"};e.exports=s},function(e,t,i){var n=i(111),s=new n,a=function(e){this.init(e)};a.prototype={init:function(e){var t=this;this.cate_id=e&&e.cate_id,this.start_time=(new Date).getTime(),this.page_url=window.location.href,this.started=!1,this.stopped=!0,this.clock=null,this.focus_time=0,this.idle_time_out=1e4,this.idle_timer=null,window.localStorage&&(this.sendReport(),$(document).on("click",function(){t.trigger()}),$(document).on("keydown",function(){t.trigger()}),$(window).on("mousemove",function(){_.throttle(t.trigger,500).apply(t)}),$(window).on("scroll",function(){_.throttle(t.trigger,500).apply(t)}),t.visibityHandler(),$(window).on("beforeunload",function(){t.storeReportData()}),$(window).on("focus",function(){t.sendReport()}))},storeReportData:function(){this.report_data=this.getItem("ptMonitor"),this.end_time=(new Date).getTime();var e=(this.end_time-this.start_time)/1e3;this.report_data.push({page_url:this.page_url,start_time:this.start_time,end_time:this.end_time,cate_id:this.cate_id,diff_time:e,focus_time:1e3*this.focus_time}),this.setItem("ptMonitor",this.report_data)},sendReport:function(){var e=this;this.check("ptMonitor")&&(this.report_data=this.getItem("ptMonitor"),$.each(this.report_data,function(e,t){s.pt_trigger({data:t})}),e.report_data=[],this.setItem("ptMonitor",e.report_data))},trigger:function(){var e=this;this.started=!0,this.stopped&&(this.stopped=!1,this.clock=setInterval(function(){e.focus_time++},1e3)),clearTimeout(this.idle_timer),this.idle_timer=setTimeout(function(){e.setIdle()},e.idle_time_out)},setIdle:function(){this.stopped=!0,clearInterval(this.clock)},visibityHandler:function(){var e=this,t="hidden",i="visibilitychange",n=["ms","webkit","moz","o"],s=null;if("hidden"in document)t="hidden",i="visibilitychange";else for(var a=0;a<n.length;a++)n[a]+"hidden"in document&&(t=n[a]+"Hidden",i=n[a]+"Visibilitychange");s=function(){document[t]&&e.setIdle()},$(document).on(i,s)},check:function(e){if(this.getItem(e))return this.getItem(e).length>0},getItem:function(e){if(!window.localStorage||!window.localStorage.getItem)return[];var t=window.localStorage.getItem(e);if(!t)return[];try{return JSON.parse(t)}catch(i){return console.log(i.message),[]}},setItem:function(e,t){if(window.localStorage&&window.localStorage.setItem)try{var i=JSON.stringify(t);window.localStorage.setItem(e,i)}catch(n){console.log(n.message)}}},e.exports=a},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.base_url="https://pv.sohu.com/rt.gif"},pt_trigger:function(e){var t=e&&e.data||{};this.params=[],this.url="",t.page_url&&this.params.push("url="+encodeURIComponent(t.page_url)),t.start_time&&this.params.push("start_t="+t.start_time),t.end_time&&this.params.push("end_t="+t.end_time),t.focus_time!=undefined&&this.params.push("focus_t="+t.focus_time),t.cate_id&&this.params.push("cate_id="+t.cate_id),this.url=this.base_url+"?"+this.params.join("&"),$.getScript(this.url)}})},function(e,t,i){var n=i(63),s=i(113),a=new s,o=function(e){this.news_list=[],this.unique=[],this.tag_id=e&&e.tag_id,this.loc=e&&e.loc||1,this.sub_id=e.sub_id,this.delay_timer=null,this.init.apply(this),this.evHandler()};o.prototype={init:function(e){var t=this;$(window).on("scroll",function(){clearTimeout(t.delay_timer),t.delay_timer=setTimeout(function(){t.evHandler()},100)}),$(window).on("resize",function(){clearTimeout(t.delay_timer),t.delay_timer=setTimeout(function(){t.evHandler()},100)})},evHandler:function(){var e=this;$("[data-ev]").each(function(t,i){var n=$(i).attr("data-ev"),s=$(i).attr("data-media-id"),a=$(i).attr("data-loc")||e.loc,o=$(i).attr("data-cate-id")||e.sub_id,r=$(i).attr("data-tag-id")||e.tag_id,c=$(i).find("a").eq(0).attr("href");$(this).removeAttr("data-ev"),e.news_list.push({el:i,news_id:n,media_id:s,loc:a,cate_id:o,tag_id:r,status:1,href:c})}),$.each(e.news_list,function(e,t){var i=$(t.el);"1"==t.loc?t.fix_url=t.href+"?loc="+t.loc+"&focus_pic=0":"2"==t.loc?t.fix_url=t.href+"?loc="+t.loc+"&cate_id="+t.cate_id:"3"==t.loc||"5"==t.loc?t.fix_url=t.href+"?loc="+t.loc:"4"==t.loc&&(t.fix_url=t.href+"?loc="+t.loc+"&tag_id="+t.tag_id),n(i)&&t.status&&(a.ev_trigger({loc:t.loc,news_id:t.news_id,media_id:t.media_id,cate_id:t.cate_id,tag_id:t.tag_id}),t.status=0)}),e.fixUrl()},trigger_pv:function(e){},fixUrl:function(){$.each(this.news_list,function(e,t){$(t.el).one("click",function(e){$(t.el).find("a").each(function(e,i){0==$(i).parents(".other").length&&$(i).attr("href",t.fix_url)}),e.stopPropagation()})})}},e.exports=o},function(e,t,i){var n=i(4),s=i(21).counter_server,a=function(e,t){e=e||"ev";var i="";t.news_id&&(i+="news_id="+t.news_id+"&"),t.media_id&&(i+="media_id="+t.media_id+"&"),t.loc&&(i+="loc="+t.loc+"&"),"4"==t.loc&&t.tag_id&&(i+="tag_id="+t.tag_id+"&"),"2"==t.loc&&t.cate_id&&(i+="cate_id="+t.cate_id+"&"),t.focus_pic?i+="focus_pic="+t.focus_pic+"&":i+="focus_pic=0&",i&&(i=i.substring(0,i.length-1));var n=s+"/"+e+".gif?"+i;$.getScript(n,function(){})};e.exports=n.extend({init:function(){},pv_trigger:function(e){a("pv",e)},ev_trigger:function(e){a("ev",e)}})},function(e,t,i){var n=i(37),s=i(115),a=i(7),o=function(e,t){if("login"===e)n.login(t.success);else{if("is_login"===e)return n.is_login();if("get_location"===e)return a.get("_test_loc_")||window.sohu_IP_Loc||"";if("get_userInfo"===e)return n.getUserInfo(t.onGetUserInfo);if("create_swiper"===e)return s(t)}},r={},c=function(e,t){r[e]&&"success"==r[e].status?t():r[e]?"loading"==r[e].status&&r[e].call_list.push(t):(r[e]={status:"loading",call_list:[t]},$.ajax({url:e,dataType:"script",cache:!0,success:function(){if(r[e].status="success",r[e].call_list){for(var t=0;t<r[e].call_list.length;t++)r[e].call_list[t]();r[e].call_list=[]}}}))},l=function(e,t){e&&(e.View?new e.View({el:$(e.el),args:t,api:o}):c(e.js,function(){e.View?new e.View({el:$(e.el).show(),args:t,api:o}):$(e.el).hide()}),e.css&&$("head").append('<link rel="stylesheet" href="'+e.css+'">'))},d=i(117);e.exports={load:function(e){for(var t=d.get_def(e),i=0;i<t.length;i++)l(t[i],e.args)}}},function(e,t,i){var n=Backbone.View.extend({template:_.template(i(116)),events:{"transitionend [data-role=item-wrapper]":"_onTransitionEnd","click .autos span ":"goPage",mouseenter:"freeze",mouseleave:"restart","click .btnl":"goPrev","click .btnr":"goNext"},duration:5e3,curPage:0,data:{items:[]},initialize:function(e){var t=this;this.data.items=e.data,t.supportTransform=t.isSupportTransform(),t.data.items.unshift(t.data.items[t.data.items.length-1]),t.data.items.push(t.data.items[1]),this.$el=$(e.el),t.render(),t.ready()},render:function(){this.$el.html(this.template(this.data))},setPage:function(e,t){var i=this;t=t||"0.5s",this.curPage=e,this.translateX=0-$(this.slideEls[0]).width()*(e+1),this.supportTransform?(this.$els.css("transition",t),this.$els.css("transform","translate3d("+this.translateX+"px,0px, 0)"),i.setPageNation(i.curPage)):this.$els.animate({left:this.translateX+"px"},"300",function(){(i.curPage<0||i.curPage>i.totalPage-1)&&(i.curPage<0?(i.curPage=i.totalPage-1,this.translateX=0-i.slideEls[0].clientWidth*i.totalPage):(i.curPage=0,this.translateX=0-i.slideEls[0].clientWidth),i.$els.css({left:this.translateX})),i.setPageNation(i.curPage)}),this.trigger("swiper-change",{page:this.curPage,o:this})},ready:function(){this.$els=this.$el.find('[data-role="item-wrapper"]'),this.slideEls=this.$el[0]&&this.$els[0].children,this.totalPage=this.slideEls.length-2,this.setPage(0),this.start()},start:function(){var e=this;this.interval=setInterval(function(){e.goNext()},this.duration)},goPrev:function(){var e=this;this.curPage--,this.curPage<-1?this.setPage(this.totalPage-1,"0s"):this.setPage(this.curPage),clearInterval(this.interval),clearTimeout(this.timer),this.timer=setTimeout(function(){e.start()},6e4)},goNext:function(e){var t=this;this.curPage++,this.curPage>this.totalPage?this.setPage(0,"0s"):this.setPage(this.curPage),e&&t.restart()},_onTransitionEnd:function(e){e.stopPropagation(),this.curPage>this.totalPage-1?this.setPage(0,"0s"):this.curPage<-1&&this.setPage(0,"0s")},goPage:function(e){this.setPage($(e.currentTarget).data("id"))},freeze:function(e){clearInterval(this.interval),this.interval=null},isSupportTransform:function(){return"transform"in document.createElement("div").style},setPageNation:function(e){this.$el.find(".autos span").removeClass("cur"),this.$el.find(".autos span").eq(e).addClass("cur")},restart:function(){var e=this;clearInterval(this.interval),clearTimeout(this.timer),this.timer=setTimeout(function(){e.start()},6e4)}});e.exports=function(e){return new n({el:e.el,data:e.data,title:e.title})}},function(e,t){e.exports='<div class="widget-swiper">\n    <div class="scroll">\n    <div class="con" data-role="item-wrapper">\n        <% for (var i=0,len=items.length;i<=len-1;i++){%>\n          <%  var item=items[i] %>\n        \n        <div class="pic">\n            <a href="<%=item.path%>" target="_blank">\n                <img alt="" src="<%=item.focusImg%>">\n            <span class="linear-box"><em class="linear-bg"></em><em class="linear-txt"><%=item.title%></em></span>\n            </a>\n        </div>\n        <%}%>\n    </div>\n    </div>\n    <div class="autos">\n    <% for (var i=0,len=items.length;i<=len-3;i++){%>\n        <span class="<%=(i==0) ? \'cur\' : \'\'%>" data-id="<%= i%>"><a></a></span>\n    <%}%>    \n    </div>\n     <div class="btns"><a class="btnl" href="javascript:void(0)"></a><a class="btnr" href="javascript:void(0)"></a></div>\n</div>\n\n'},function(e,t){var i={business_stock_top_1:{el:"#main-stock",View:null,js:"//k.sohu.com/static/business/v0.0.10/js/index.bundle.min.js",css:""},business_stock_top_2:{el:"#my-stock",View:null,js:"//k.sohu.com/static/business/v0.0.10/js/index.bundle.min.js",css:""},business_stock_right_1:{el:"#my-stock-r",View:null,js:"//k.sohu.com/static/business/v0.0.10/js/index.bundle.min.js",css:""},auto_component_1:{el:"#auto_component_1",View:null,js:"//auto-db.bjcnc.scs.sohucs.com/component.js",css:"//auto-db.bjcnc.scs.sohucs.com/auto-mp-plugin.css"},auto_component_2:{el:"#auto_component_2",View:null,js:"//auto-db.bjcnc.scs.sohucs.com/component.js",css:"//auto-db.bjcnc.scs.sohucs.com/auto-mp-plugin.css"},auto_component_3:{el:"#auto_component_3",View:null,js:"//auto-db.bjcnc.scs.sohucs.com/component.js",css:"//auto-db.bjcnc.scs.sohucs.com/auto-mp-plugin.css"},auto_component_4:{el:"#auto_component_4",View:null,js:"//auto-db.bjcnc.scs.sohucs.com/component.js",css:"//auto-db.bjcnc.scs.sohucs.com/auto-mp-plugin.css"},auto_index_component_1:{el:'[data-widget-id="auto_index_component_1"]',View:null,js:"//m1.auto.itc.cn/sohupchome/main_right_v2.js",css:""},focus_index_component_1:{el:'[data-widget-id="focus_index_component_1"]',View:null,js:"//file.focus-res.cn/be/js/focusbe_in_sohuv3_2.js",css:""},auto_component_5:{el:"#auto_component_5",View:null,js:"//auto-db.bjcnc.scs.sohucs.com/component.js",css:"//auto-db.bjcnc.scs.sohucs.com/auto-mp-plugin.css"},SOHU_TV:{el:'[data-widget-id="tv_index_component"]',View:null,js:"//js.tv.itc.cn/site/index/inc_sohu_v3.js",css:""},test_plugin:{el:'[data-widget-id="sports_index_component_1"]',View:null,js:"//statics.itc.cn/PC_base/sports-live-2.js",css:""},comment:{el:"#mp-comment",View:null,js:"//statics.itc.cn/web/static/js/comment-170929.js"},business_index_stockhq:{el:'[data-widget-id="business_index_component_1"]',View:null,js:"//k.sohu.com/static/finance/pc/sohuindex/main.js"},auto_index_tabs:{el:'[data-role="auto-section"]',View:null,js:"//m1.auto.itc.cn/sohupchome/main_v2.js"},auto_news_component_1:{el:'[data-widget-id="auto_news_component_1"]',View:null,js:"//sohu-media.bjcnc.scs.sohucs.com/static/markPrices.js"},auto_news_component_2:{el:'[data-widget-id="auto_news_component_2"]',View:null,js:"//m2.auto.itc.cn/sohupchome/news_auto_plugin.js"},plugin_focus_region:{el:"#hot-news-focus-region",View:null,js:"//t.focus-res.cn/front-end/focus_in_sohu_news.js"},auto_index_component_2:{el:'[data-role="auto-index-component2"]',View:null,js:"//news.sohu.com/upload/sohusy_jpl_qynr20180117newjsyszx/main.js"}},n={channel:{15:["business_stock_top_1","business_stock_top_2","business_stock_right_1"]},index:["auto_index_component_1","focus_index_component_1","SOHU_TV"],article:{18:["auto_component_1","auto_component_2","auto_component_3","auto_component_4","auto_component_5"],1:["comment"]},sub:{997:["business_stock_top_1","business_stock_top_2","business_stock_right_1"]},index_v3:["business_index_stockhq","auto_index_component_1","test_plugin","auto_index_tabs","focus_index_component_1","auto_index_component_2"],pic_collections:["comment"],news_channel:["business_index_stockhq","auto_news_component_1","auto_news_component_2","plugin_focus_region"]};e.exports={get_def:function(e){var t=[];if("channel"==e.type||"article"==e.type){var s=n[e.type][e.channel_id];if(s)for(var a=0;a<s.length;a++)t.push(i[s[a]])}else if("sub"==e.type){var s=n[e.type][e.sub_id];if(s)for(var a=0;a<s.length;a++)t.push(i[s[a]])}else if(e.type,0){if("pic_collections"==e.type){var s=n[e.type];if(s)for(var a=0;a<s.length;a++)t.push(i[s[a]])}else if("news_channel"==e.type){var s=n[e.type];if(s)for(var a=0;a<s.length;a++)t.push(i[s[a]])}else if("test"==e.type&&e.def)for(var o in e.def)i[o]=e.def[o],t.push(e.def[o])}else{var s=n[e.type];if(s)for(var a=0;a<s.length;a++)t.push(i[s[a]])}return t},plugins:i}},function(e,t,i){function n(e){this._settings=$.extend({},o,e),this._boundHandleScroll=_.throttle(this._loopThroughElements.bind(this),this._settings.throttle)}var s=i(119),a=i(120),o={elements_selector:"img[data-src]",container:window,throttle:150,skip_invisible:!1,threshold:0};n.prototype={constructor:n,update:function(){this._elements=this._toArray(document.querySelectorAll(this._settings.elements_selector)),this._purgeElements(),this._loopThroughElements(),this._startScrollHandler()},_loopThroughElements:function(){var e,t=this._settings,i=this._elements,n=i?i.length:0,a=[];for(e=0;e<n;e++){var o=i[e];t.skip_invisible&&null===o.offsetParent||s(o,t.container,t.threshold)&&(this._reveal(o),a.push(e),o.setAttribute("data-processed",!0))}for(;a.length>0;)i.splice(a.pop(),1);0===n&&this._stopScrollHandler()},_startScrollHandler:function(){this._isHandlingScroll||(this._isHandlingScroll=!0,$(this._settings.container).on("scroll",this._boundHandleScroll))},_stopScrollHandler:function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,$(this._settings.container).off("scroll",this._boundHandleScroll))},_purgeElements:function(){var e,t=this._elements,i=t.length,n=[];for(e=0;e<i;e++){t[e].getAttribute("data-processed")&&n.push(e)}for(;n.length>0;)t.splice(n.pop(),1)},_reveal:function(e){var t=(this._settings,e.getAttribute("data-src"));e.setAttribute("src",a(t))},destroy:function(){this._stopScrollHandler(),this._elements=null,this._settings=null},addImage:function(e){var t=this._toArray(e.querySelectorAll("img[data-src]"));this._elements=this._elements.concat(t),this._loopThroughElements()},_toArray:function(e){for(var t=[],i=e.length,n=0;n<i;n++)t.push(e[n]);return t}};var r=new n;e.exports=r},function(e,t){var i=function(e){return e.getBoundingClientRect().top+window.pageYOffset-e.ownerDocument.documentElement.clientTop},n=function(e,t,n){return(t===window?window.innerHeight+window.pageYOffset:i(t)+t.offsetHeight)<=i(e)-n},s=function(e){return e.getBoundingClientRect().left+window.pageXOffset-e.ownerDocument.documentElement.clientLeft},a=function(e,t,i){var n=window.innerWidth;return(t===window?n+window.pageXOffset:s(t)+n)<=s(e)-i},o=function(e,t,n){return(t===window?window.pageYOffset:i(t))>=i(e)+n+e.offsetHeight},r=function(e,t,i){return(t===window?window.pageXOffset:s(t))>=s(e)+i+e.offsetWidth};e.exports=function(e,t,i){return!(n(e,t,i)||o(e,t,i)||a(e,t,i)||r(e,t,i))}},function(e,t,i){var n=i(6);e.exports=function(e){return/(\i\.mp\.itc\.cn)|(5b0988e595225\.cdn)|(img\.mp\.sohu\.com)/gi.test(e)&&(e=e.replace(/\.png/gi,".jpg"),n.isSupportWebp&&(e=e.replace(/\.jpg/gi,".webp"))),e}},function(e,t,i){var n=(i(24),i(18));e.exports=Backbone.View.extend({template:_.template(i(122)),data:{items:[]},initialize:function(e){var t=this;this.type=e&&e.type||"",$.extend(this.data,e.data),console.log(this.data),this.model=e.model,this.model.one("sync",function(e){t.data.items=e,t.render()}),this.model.fetch()},render:function(){this.fixed_items(),this.$el.html(this.template(this.data)),this.trigger("rendered"),window.sohuSpm&&"function"==typeof window.sohuSpm.domDidChange&&window.sohuSpm.domDidChange()},fixed_items:function(){return this.data.items.forEach(function(e){e.description=n.subString(e.description,35),e.name=n.subString(e.name,17)}),this.items}})},function(e,t){e.exports='\n    <div class="titleR"><span class="tt">搜狐公众号</span>\x3c!--<span class="link">\n        <a>名人榜\n        &gt;</a></span>--\x3e\n    </div>\n    <%for(var i=0;i< items.length ;i++){\n    var item =items[i];\n    %>\n        <div class="pic-txt clear">\n            <div class="pic img-do"><a href="<%=item.personalPage%>" target="_blank"><img src="<%=item.logo%>" alt=""></a></div>\n            <h4><a href="<%=item.personalPage%>" target="_blank"><%=item.name%></a></h4>\n            <p>\n                <%=item.description%>\n            </p>\n        </div>\n        <%}%>\n\n'},function(e,t,i){var n=i(4),s={};e.exports=n.extend({init:function(e){this.scene=e&&e.scene||"HOMEPAGE",this.sceneId=e&&e.sceneId||0},fetch:function(){if(s[this.sceneId])return void this.trigger("sync",s[this.sceneId]);var e=this;this.url="hotAuthors?scene="+this.scene+"&sceneId="+this.sceneId,n.prototype.fetch.call(this,{success:function(t,i){try{"string"==typeof t&&(t=JSON.parse(t)),e.trigger("sync",t),s[e.sceneId]=t}catch(n){e.trigger("error")}}})}})},function(e,t,i){var n=i(4),s={};e.exports=n.extend({init:function(e){this.scene=e&&e.scene||"HOMEPAGE",this.sceneId=e&&e.sceneId||0,this.type=e&&e.type||!1},fetch:function(){if(s[this.sceneId])return void this.trigger("sync",s[this.sceneId]);var e=this;this.type&&"index"==this.type?this.url="//v2.sohu.com/public-api/hotArticle/v2?scene=HOMEPAGE&sceneId=0&count=15&secureScore=75":this.type&&"index2"==this.type?this.url="//v2.sohu.com/public-api/hotArticles/v2?scene="+this.scene+"&sceneId="+this.sceneId+"&secureScore=75":this.url="hotArticle?scene="+this.scene+"&sceneId="+this.sceneId,n.prototype.fetch.call(this,{success:function(t,i){try{"string"==typeof t&&(t=JSON.parse(t)),e.trigger("sync",t),s[e.sceneId]=t}catch(n){e.trigger("error")}}})}})},function(e,t,i){var n=i(25),s=i(18);e.exports=Backbone.View.extend({template:_.template(i(126)),data:{items:[]},model:null,fixed_items:function(){if(this.data.items){for(var e=1;e<=3;e++)this.data.items[e-1]&&(this.data.items[e-1].index=e);this.data.items.forEach(function(e){e.path=n.news(e),e.title=s.subString(e.title,27),e.picUrl=e.picUrl.replace(/\i\.mp\.itc\.cn/g,"i.mp.itc.cn/c_zoom,w_100,h_67")})}return this.data},initialize:function(e){var t=this;this.model=e.model,this.model.on("sync",function(e){t.data.items=e,t.render()}),this.model.fetch()},render:function(){this.fixed_items(),this.$el.html(this.template(this.data)),this.trigger("rendered"),window.sohuSpm&&"function"==typeof window.sohuSpm.domDidChange&&window.sohuSpm.domDidChange()}})},function(e,t){e.exports='<div class="titleR">\n    <span class="tt">24小时热文</span>\n</div>\n\n<% for( var a = 0 ; a < items.length ; a++) { %>\n<%\nvar item = items[a];\n%>\n<div class="pic-txt clear " data-loc="3" data-ev="<%=item.id%>" data-media-id="<%=item.authorId%>">\n    <div class="pic img-do">\n        <a target="_blank" href="<%=item.path %>">\n            <img alt="" src="<%=item.picUrl%>">\n            <%if(item.index){%>\n            <span class="sn"><%=item.index%></span>\n            <%}%>\n        </a>\n</div>\n    <h4><a target="_blank" href="<%=item.path %>"><%=item.title%></a>\n    </h4>\n</div>\n<%}%>\n'},function(e,t,i){var n=i(80),s=i(108),a={get_pgid:function(){return n.get(a)},get_news_chn:function(){return s(a)}};e.exports={set:function(e,t){if("string"==typeof arguments[0]&&(a[arguments[0]]=arguments[1]),"object"==typeof arguments[0])for(var i in arguments[0])a[i]=arguments[0][i]},ext:function(e){e&&e(a)}}},function(e,t,i){var n=(i(25),i(110)),s=i(71),a=i(36),o=(i(129),i(130)),r=i(48),c=i(132),l=i(23),d=i(22),h=i(51),u=i(44),p=i(53),f=i(70),m=(i(134),i(112)),g=i(135),_=i(114),v=i(118),w=i(121),b=i(123),x=i(124),y=i(125),k=i(127);i(11),e.exports=function(e){var t,i,I=[];k.set(e),_.load({type:"channel",channel_id:e.channel_id}),e.sub_id?(_.load({type:"sub",channel_id:e.channel_id,sub_id:e.sub_id}),"997"==e.sub_id&&$("#business_plugin_1").show()):_.load({type:"channel",channel_id:e.channel_id}),new a({el:"#head-login",
mark:"channel",type:"other"});new o({el:$("#left-nav")});new r({el:$("#search"),d_val:$("[data-role='left-hot-spots']").find("p").eq(0).find("a").eq(0).text(),scene:"CHANNEL"});var P=new c({el:$("#focus"),data:{channel_id:e.channel_id,items:e.focus}});new g({focus:P});var C=new l({el:$("#main-news"),data:{channel_id:e.channel_id,sub_id:e.sub_id},model:function(){return new d(e.sub_id?{scene:"CATEGORY",sceneId:e.sub_id}:{scene:"CHANNEL",sceneId:e.channel_id})}()}),T=new h({el:"#fixed-view"});new u({el:$("#float-btn"),data:{refreshable:!1}}).on("refresh",function(){(window.pageYOffset!==undefined?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop)>110&&window.scrollTo(0,0),C.reset(),z.reset()}),new p({el:"#pages-fun"});var E=new w({el:"#recommend-writer",model:new b({scene:"CHANNEL",sceneId:e.channel_id})}),S=new y({el:$("#hot-news"),model:new x({scene:"TAG",sceneId:e.channel_id})});C.on("news:add",function(){t&&t.reset({channel_id:e.channel_id,sub_id:e.sub_id,index:5})});var z=new f(C,"feeds",{start:5,interval:4,channel_id:e.channel_id,sub_id:e.sub_id});$("#nav_button").size()>0&&I.push(s($("#nav_button"),"nav_button",{channel_id:e.channel_id,sub_id:e.sub_id})),$("#focus").size()>0&&P.on("ready",function(){$("#focus .pic.img-do:eq(4)").size()>0&&(i=s($("#focus .pic.img-do:eq(4)"),"focus",{channel_id:e.channel_id,sub_id:e.sub_id,empty_ad:function(){}}),I.push(i))});var j=$("#left-nav [data-role='left-hot-spots'] li:last");j.size()<1&&(j=$("#left-nav [data-role='left-hot-spots'] p:last a:last")),s(j,"hot_spot",{channel_id:e.channel_id,sub_id:e.sub_id,empty_ad:function(){this.$el.show()}}),$("#god_1").size()>0&&I.push(s($("#god_1"),"side_1",{channel_id:e.channel_id,sub_id:e.sub_id})),$("#god_2").size()>0&&I.push(s($("#god_2"),"side_2",{channel_id:e.channel_id,sub_id:e.sub_id})),$("#god_3").size()>0&&I.push(s($("#god_3"),"side_3",{channel_id:e.channel_id,sub_id:e.sub_id})),$("#god_fix_1").size()>0&&(t=s($("#god_fix_1"),"side_fix",{channel_id:e.channel_id,sub_id:e.sub_id,empty_ad:function(){}}),I.push(t)),E.on("rendered",function(){s($("#recommend-writer .pic-txt:last"),"writer",{channel_id:e.channel_id,sub_id:e.sub_id,empty_ad:function(){this.$el.show()}})}),S.on("rendered",function(){s($("#hot-news .pic-txt:last"),"recommends",{channel_id:e.channel_id,sub_id:e.sub_id,empty_ad:function(){this.$el.show()}})}),T.on("fix_change",function(e){e.fixed?$("#god_fix_container").show().css({left:e.o.left_dis+"px",top:e.o.$el_clone.height()+e.o.$el_clone.position().top}):$("#god_fix_container").hide()}),T.on("resize",function(e){$("#god_fix_container").is(":visible")&&$("#god_fix_container").css({left:e.o.left_dis+"px"})}),$("#god-channel-top").size()>0&&I.push(s($("#god-channel-top"),"channel_top",{channel_id:e.channel_id,sub_id:e.sub_id}));var A=new m({loc:e.sub_id?2:1,sub_id:e.sub_id});C.on("reset:after-init",function(){A.evHandler()}),new n({cate_id:e.sub_id}),new v}},function(e,t,i){var n=i(48),s=i(37),a=i(3);e.exports=Backbone.View.extend({events:{'click [data-role="mobile-search-btn"]':"show_search","click #mobile-channel-nav":"hide_search","click a.login-link":"show_login","click img.login-link":"go_user"},initialize:function(e){var t=this;this.render(),new n({el:"#main-search",type:"pc",d_val:e.d_val}),new n({el:"#mobile_search",type:"mobile",d_val:e.d_val}),a.on("sync",function(e){t.$el.find(".login-link").replaceWith("<img class='login-link' src='"+e.icon+"'>")}),a.fetch(),$(s.$el).on("login:success",function(e){a.fetch()})},show_login:function(){s.login()},go_user:function(){window.location="https://passport.sohu.com"},show_search:function(){$("html,body").css({overflow:"hidden",height:document.body.clientHeight+"px"}),this.$el.find("#mobile-channel-nav").addClass("show")},hide_search:function(e){$(e.target).closest(".channel-search").size()<=0&&($("html,body").css({overflow:"",height:""}),this.$el.find("#mobile-channel-nav").removeClass("show"))}})},function(e,t,i){var n=i(131);e.exports=Backbone.View.extend({initialize:function(e){var t=this;n(this.$el,{offset:40}),t.setResponsible(),$(window).on("resize",_.throttle(function(e){t.setResponsible()},200))},setResponsible:function(){var e=this.$el.find(".box"),t=this.$el.find(".box-no"),i=$(window).height(),n=this.$el.find(".channel-logo").outerHeight(),s=i-n,a=e.size()-1,o=Math.ceil(s/100)-2;o<a?(this.$el.find(".box:lt("+o+")").show(),this.$el.find(".box:gt("+(o-1)+")").hide(),t.show(),t.find("dl:gt("+(o-2)+")").show(),t.find("dl:lt("+(o-1)+")").hide()):(e.show(),t.hide()),this.$el.css({visibility:"visible"})}})},function(e,t){e.exports=function(e,t){function i(){$(window).scrollTop()+c.offset>l.top?n():s()}function n(){o.css({position:"fixed",left:"50%",top:c.offset,marginLeft:-h+"px"}),d=!0}function s(){o.css({position:"",left:"",top:"",marginLeft:""}),d=!1,l=o.offset()}function a(){var e=$(window).width();h=e<=c.w_flag?e/2:c.w_flag/2,d&&o.css({marginLeft:-h+"px"})}var o=$(e),r={offset:0,w_flag:1180},c=$.extend({},r,t),l=o.offset(),d=!1,h=c.w_flag/2;i(),a(),$(window).on("scroll",_.throttle(i,10)),$(window).on("resize",_.throttle(a,10))}},function(e,t,i){var n=i(18);e.exports=Backbone.View.extend({template:_.template(i(133)),data:{items:[]},currentPage:1,lastPage:0,translateX:0,translateY:0,startTranslateX:0,startTranslateY:0,delta:0,dragging:!1,startPos:null,transitioning:!1,slideEls:[],totalPage:0,interval:null,timer:null,events:{"touchstart .scroll":"_onTouchStart","click .btnl":"prev","click .btnr":"next","click .autos > span":"go_page","transitionend .con":"_onTransitionEnd","webkitTransitionend .con":"_onTransitionEnd",mouseenter:"freeze",mouseleave:"start"},show:function(){console.log(this.data.items),this.data.items.length>0?this.$el.show():this.$el.hide()},hide:function(){this.$el.hide()},render:function(){this.$el.html(this.template(this.data)),window.sohuSpm&&"function"==typeof window.sohuSpm.domDidChange&&window.sohuSpm.domDidChange()},ready:function(){if(this.$els=this.$el.find('[data-role="item-wrapper"]'),this.slideEls=this.$els[0]&&this.$els[0].children,this.slideEls){this.totalPage=this.slideEls.length||0,$(this.$els).append($(this.slideEls[0]).clone().removeAttr("data-focus-ev")),$(this.$els).prepend($(this.slideEls[this.slideEls.length-2]).clone().removeAttr("data-focus-ev")),this.setPage(0);var e=this;setTimeout(function(){e.trigger("ready")},10),this.start()}},initialize:function(e){var t=this;if(this.channel_id=e.data.channel_id,this.data.items=e.data.items,this.data.items&&this.data.items.length>0){for(var i=0;i<this.data.items.length;i++)this.data.items[i].title=n.subString(this.data.items[i].title.replace(/&amp;/g,"&"),44);t.render(),t.ready()}else this.hide();var t=this;this._onTouchMove=function(e){t.onTouchMove.apply(t,arguments),e.preventDefault(),e.stopPropagation()},this._onTouchEnd=function(e){t.onTouchEnd.apply(t,arguments),e.preventDefault(),e.stopPropagation()}},reset:function(){$(this.$els).html(""),this.slideEls=this.$els[0].children,this.totalPage=this.slideEls.length,$(this.$els).append($(this.slideEls[0]).clone()),$(this.$els).prepend($(this.slideEls[this.slideEls.length-2]).clone()),this.setPage(0)},start:function(){var e=this;e.transitioning=!1,this.interval=setInterval(function(){e.next()},5e3)},next:function(e){var t=this;this.transitioning||(this.currentPage++,this.setPage(this.currentPage),e&&(clearInterval(this.interval),clearTimeout(this.timer),this.timer=setTimeout(function(){t.start()},6e4)))},prev:function(e){var t=this;this.transitioning||(this.currentPage--,this.setPage(this.currentPage),e&&(clearInterval(this.interval),clearTimeout(this.timer),this.timer=setTimeout(function(){t.start()},6e4)))},setPage:function(e){var t;if(this.lastPage=this.currentPage,this.currentPage=e,$(this.slideEls[this.currentPage+1]).trigger("focus-in-view"),this.isHorizontal()?("clientWidth",t="translateX"):("clientHeight",t="translateY"),this.isSupportTransform()){this[t]=0-$(this.slideEls[0]).width()*(e+1);var i=this.$el.find(".con");i.css("transform","translate3d("+this.translateX+"px,"+this.translateY+"px, 0)"),this.$el.find(".autos >span.cur").removeClass("cur"),this.$el.find(".autos >span:eq("+e+")").addClass("cur"),this._onTransitionStart()}else{var n=this;this[t]=0-$(this.slideEls[0]).width()*(e+1);var i=this.$el.find(".con");i.animate({left:n.translateX+"px"},"300",function(){if(n.currentPage<0){n.currentPage=n.totalPage-1;var e=0-n.slideEls[0].clientWidth*n.totalPage}if(n.currentPage>n.totalPage-1){n.currentPage=0;var e=0-n.slideEls[0].clientWidth}i.css({left:e}),n.transitioning=!1,n.$el.find(".autos >span.cur").removeClass("cur"),n.$el.find(".autos >span:eq("+n.currentPage+")").addClass("cur")})}window.sohuSpm&&"function"==typeof window.sohuSpm.reScan&&window.sohuSpm.reScan()},go_page:function(e){this.setPage($(e.currentTarget).data("id"))},setPageNoAnimate:function(e){var t=$(this.$els);t.css("transition","none"),this.setPage(e);var i=this;setTimeout(function(){t.css("transition",""),i.transitioning=!1},100)},isHorizontal:function(){return!0},isVertical:function(){return!1},isSupportTransform:function(){return"transform"in document.createElement("div").style},_onTouchStart:function(e){this.transitioning||(this.startPos=this._getTouchPos(e.originalEvent),this.delta=0,this.startTranslateX=this.translateX,this.startTranslateY=this.translateY,this.startTime=(new Date).getTime(),this.dragging=!0,document.addEventListener("touchmove",this._onTouchMove,!1),document.addEventListener("touchend",this._onTouchEnd,!1),document.addEventListener("mousemove",this._onTouchMove,!1),document.addEventListener("mouseup",this._onTouchEnd,!1))},onTouchMove:function(e){this.delta=this._getTouchPos(e)-this.startPos,e.preventDefault(),e.stopPropagation(),this.isHorizontal()?(this.translateX=this.startTranslateX+this.delta,this.trigger("slider-move",this.translateX)):(this.translateY=this.startTranslateY+this.delta,this.trigger("slider-move",this.translateY)),(this.isVertical()||this.isHorizontal()&&Math.abs(this.delta)>0)&&e.preventDefault()},onTouchEnd:function(e){this.dragging=!1;var t=(new Date).getTime()-this.startTime<1e3;this.delta<-100||t&&this.delta<-15?this.next(e):this.delta>100||t&&this.delta>15?this.prev(e):this._revert(),e.stopPropagation(),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),document.removeEventListener("mousemove",this._onTouchMove),document.removeEventListener("mouseup",this._onTouchEnd)},_revert:function(){this.setPage(this.currentPage)},_getTouchPos:function(e){var t=this.isHorizontal()?"pageX":"pageY";return e.changedTouches?e.changedTouches[0][t]:e[t]},_onTransitionStart:function(){this.transitioning=!0,this._isPageChanged()?this.trigger("slide-change-start",this.currentPage,this):this.trigger("slide-revert-start",this.currentPage,this)},_onTransitionEnd:function(){this.currentPage<0?(this.transitioning=!0,this.setPageNoAnimate(this.totalPage-1)):this.currentPage>this.totalPage-1?(this.transitioning=!0,this.setPageNoAnimate(0)):this.transitioning=!1,this.trigger("focus-change",this.currentPage,this)},_isPageChanged:function(){return this.lastPage!==this.currentPage},freeze:function(){clearInterval(this.interval),this.interval=null}})},function(e,t){e.exports='<div class="scroll" id="swiper">\n    <div class="con" data-role="item-wrapper">\n        <%for(var i = 0 ;i< items.length;i++){\n            var item = items[i];\n            item.path=item.path.match(/\\/\\//)?item.path:"//www.sohu.com"+item.path;\n        %>\n        <div class="pic img-do" data-media-id="<%=item.mediaId%>" data-focus-ev="<%=item.id%>">\n            <a target="_blank"\n                                   href="<%=item.path%>"><img\n                alt="" src="<%=item.picUrl%>">\n                <span class="shadow linear-box"><em class="linear-bg"></em><span><%=item.title%></span></span>\n            </a>\n        </div>\n        <%}%>\n    </div>\n    <div class="autos">\n        <%for(var i = 0 ;i< items.length;i++){%>\n\n        <span data-id="<%=i%>" class="<%i==0?\'cur\':\'\'%>"><a data-spm-stop="nev"></a></span>\n        <%}%>\n    </div>\n    <div class="btns"><a href="javascript:void(0)" class="btnl" data-spm-stop="nev"></a><a href="javascript:void(0)" class="btnr" data-spm-stop="nev"></a>\n    </div>\n</div>\n'},function(e,t,i){var n=i(117).plugins;e.exports={define:function(e,t){var i=n[e];i&&(i.View||(i.View=Backbone.View.extend(t)))}}},function(e,t,i){var n=i(63),s=i(113),a=new s,o=function(e){this.focus_obj=e.focus,this.$focus_el=this.focus_obj.$el,this.focus_list=[],this.init(),this.reset_focus_link(),this.focusHandler(0)};o.prototype={delay_timer:null,focusHandler:function(e){var t=this;if(e=e||0,n(this.$focus_el)&&t.focus_list[e]&&t.focus_list[e].status){var i=t.focus_list[e];i.news_id&&i.media_id&&(a.ev_trigger({loc:i.loc,focus_pic:1,news_id:i.news_id,media_id:i.media_id}),i.status=0)}},init:function(){var e=this;this.$focus_el.find("[data-focus-ev]").each(function(t,i){var n=$(this).find("a").attr("href"),s=$(i).attr("data-focus-ev"),a=$(i).attr("data-media-id");s&&a&&e.focus_list.push({el:i,news_id:s,media_id:a,loc:1,status:1,href:n})}),this.focus_obj.on("focus-change",function(t){e.focusHandler(t)})},reset_focus_link:function(){$.each(this.focus_list,function(e,t){$(t.el).one("click",function(e){e.stopPropagation();var i=$(this).attr("data-focus-ev"),n=$(this).attr("data-media-id");i&&n&&(href=t.href+"?loc="+t.loc+"&focus_pic=1",$(t.el).find("a").attr("href",href))})})}},e.exports=o},function(e,t,i){var n=i(110),s=i(36),a=i(129),o=i(23),r=i(22),c=i(48),l=i(137),d=i(53),h=i(51),u=i(44),p=i(112),f=i(71),m=i(70),g=i(118),_=i(121),v=i(123),w=i(124),b=i(125);i(11);var x=i(127);e.exports=function(e){x.set(e),e.channel_id="-1"==e.channel_id?"42":e.channel_id;var t;new a({el:"#top"}),new s({el:"#head-login",mark:"tag",type:"other"});var i=(new l({el:"#hot-spots"}),new o({el:"#main-news",data:{channel_id:e.channel_id,tag_id:e.tag_id},model:new r({scene:"TAG",sceneId:e.tag_id})}));new c({el:$("#search"),d_val:$("#hot-spots").find("ul li").eq(0).text().replace(/\s+/g,""),scene:"TAG"});var y=new h({el:"#fixed-view",offset_top:20}),k=(new u({el:"#float-btn",data:{refreshable:!1}}),new _({el:"#recommend-writer",model:new v({scene:"CHANNEL",sceneId:e.channel_id})})),I=new b({el:$("#hot-news"),model:new w({scene:"TAG",sceneId:e.channel_id})});i.on("news:add",function(){t&&t.reset({channel_id:e.channel_id,tag_id:e.tag_id,index:4})});new m(i,"feeds",{channel_id:e.channel_id,tag_id:e.tag_id});setTimeout(function(){f($("#hot-spots li:last"),"hot_spot",{channel_id:e.channel_id,sub_id:e.sub_id,tag_id:e.tag_id,empty_ad:function(){}})},100),$("#god_1").size()>0&&f($("#god_1"),"side_1",{channel_id:e.channel_id,tag_id:e.tag_id}),$("#god_2").size()>0&&f($("#god_2"),"side_2",{channel_id:e.channel_id,tag_id:e.tag_id}),$("#god_3").size()>0&&f($("#god_3"),"side_3",{channel_id:e.channel_id,tag_id:e.tag_id}),$("#god_fix_1").size()>0&&(t=f($("#god_fix_1"),"side_fix",{channel_id:e.channel_id,tag_id:e.tag_id,empty_ad:function(){}})),k.on("rendered",function(){f($("#recommend-writer .pic-txt:last"),"writer",{channel_id:e.channel_id,tag_id:e.tag_id,empty_ad:function(){this.$el.show()}})}),I.on("rendered",function(){f($("#hot-news .pic-txt:last"),"recommends",{channel_id:e.channel_id,tag_id:e.tag_id,empty_ad:function(){this.$el.show()}})}),y.on("fix_change",function(e){e.fixed?$("#god_fix_container").show().css({left:e.o.left_dis+"px",top:e.o.$el_clone.height()+e.o.$el_clone.position().top}):$("#god_fix_container").hide()}),y.on("resize",function(e){$("#god_fix_container").is(":visible")&&$("#god_fix_container").css({left:e.o.left_dis+"px"})});new p({loc:4,tag_id:e.tag_id});new n,new g,new d({el:"#pages-fun"})}},function(e,t,i){var n=i(131);e.exports=Backbone.View.extend({initialize:function(e){n(this.$el,{offset:35})}})},function(e,t,i){var n=(i(25),i(110)),s=i(36),a=(i(129),i(48)),o=i(23),r=i(22),c=i(44),l=i(70),d=i(112),h=i(71),u=(i(114),i(127));e.exports=function(e){var t,i=[];u.set(e),new s({el:"#head-login"}),new s({el:"#nav-login"}),new a({el:$("#search")});var p=new o({el:"#main-news",data:{subject_id:e.subject_id},model:new r({subject_id:e.subject_id})});new c({el:$("#float-btn")}).on("refresh",function(){(window.pageYOffset!==undefined?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop)>110&&window.scrollTo(0,0),p.reset(),f.reset()}),p.on("news:add",function(){t&&t.reset({channel_id:e.channel_id,sub_id:e.sub_id,index:5})});var f=new l(p);$("#god_1").size()>0&&i.push(h($("#god_1"),"side_1",{channel_id:e.channel_id,sub_id:e.sub_id})),$("#god_fix_1").size()>0&&(t=h($("#god_fix_1"),"side_fix",{channel_id:e.channel_id,sub_id:e.sub_id,empty_ad:function(){}}),i.push(t));var m=new d({loc:e.sub_id?2:1,sub_id:e.sub_id});p.on("reset:after-init",function(){m.evHandler()}),new n({cate_id:e.sub_id})}},function(e,t,i){var n=(i(140),i(36));e.exports=function(){new n({el:"#head-login",type:"other"})}},function(e,t){e.exports=Backbone.View.extend({events:{"mouseover .more-nav":"show_more","mouseout .more-nav":"hide"},show_more:function(){$(this.$el).find('[data-role="more-channel"]').show()},hide:function(){$(this.$el).find('[data-role="more-channel"]').hide()}})},function(e,t,i){var n=i(48),s=i(142),a=i(36),o=i(44),r=i(22),c=i(23),l=i(112),d=i(135),h=i(51),u=i(114),p=i(146),f=i(53),m=i(121),g=i(123),_=i(124),v=i(125),w=i(147),b=i(71),x=i(150),y=(i(110),i(70)),k=i(118),I=i(127),P=i(152);i(11),e.exports=function(e){I.set(e),u.load({type:"index",args:{ext_data:{modelId:0}}}),new n({el:$("#search"),scene:"HOMEPAGE"});var t=new s({el:$("#index-focus"),data:{items:e.focus}});new a({el:"#head-login",mark:"index",type:"index"});var i=new h({el:"#fixed-view"}),C=new c({el:$("#main-news"),model:new r({scene:"HOMEPAGE"}),role:"index",page_no:2}),T=new v({el:$("#hot-news"),model:new _({scene:"HOMEPAGE"})});new o({el:"#float-btn",data:{refreshable:!1,home:!1,comment:!1,qrcode:!1}}).on("refresh",function(){window.location.reload()});new l({loc:1});new d({focus:t}),new p({el:"#left-nav"}),new f({el:"#pages-fun"});var E=new w({el:"#main-news"}),S=new m({el:"#recommend-writer",model:new g({scene:"HOMEPAGE"})});new y(C,"feeds",{start:3,interval:6,extra:E});C.on("news:add",function(){fix_ad&&fix_ad.reset({})});var z=b($("#god_focus"),"index_focus",{});t.on("auto-change",function(e){z.$el.html()&&2==e&&(t.pause(),z.$el.show(),z.ad_instance.av_trigger(),setTimeout(function(){z.$el.hide(),t.reStart()},3e3))}),$("#god_1").size()>0&&b($("#god_1"),"side_1",{}),$("#god_2").size()>0&&b($("#god_2"),"side_2",{}),$("#god_3").size()>0&&b($("#god_3"),"side_3",{}),$("#god_4").size()>0&&b($("#god_4"),"side_4",{}),$("#god_5").size()>0&&b($("#god_5"),"side_5",{}),$("#god_fix_1").size()>0&&(fix_ad=b($("#god_fix_1"),"side_fix",{})),S.on("rendered",function(){b($("#recommend-writer .pic-txt:last"),"writer",{empty_ad:function(){this.$el.show()}})}),T.on("rendered",function(){b($("#hot-news .pic-txt:last"),"recommends",{empty_ad:function(){this.$el.show()}})}),i.on("fix_change",function(e){e.fixed?$("#god_fix_container").show().css({left:e.o.left_dis+"px",top:e.o.$el_clone.height()+e.o.$el_clone.position().top}):$("#god_fix_container").hide()}),i.on("resize",function(e){$("#god_fix_container").is(":visible")&&$("#god_fix_container").css({left:e.o.left_dis+"px"})}),$("#god_index").size()>0&&(x($("#god_index .swiper"),"index_side_swiper",{maxreads:5}),x($("#god_index .tab-wrap"),"index_side_txt",{maxreads:21})),new k,new P({el:$("#report")}),$('[data-role="channelLink"]').each(function(e,t){""==$(t).attr("href")&&$(t).attr("target","_self").attr("href","javascript:void(0)")})}},function(e,t,i){var n=(i(143),i(18));i(144);e.exports=Backbone.View.extend({template:_.template(i(145)),events:{"mouseenter .list>ul>li":"tabChange",mouseenter:"pause",mouseleave:"reStart"},data:{items:[],cur_id:30,tabs:[]},extra:{},cur_index:0,interval:2e3,timer:null,restart_timer:null,slide_number:7,render:function(){this.$el.html(this.template(this.data))},initialize:function(e){var t=this;this.data.items=e.data.items,this.slide_number=this.data.items.length;for(var i=0;i<this.data.items.length&&!(i>this.slide_number-1);i++)this.data.items[i].title=this.data.items[i].title&&n.subString(this.data.items[i].title.replace(/&amp;/g,"&"),44),this.data.tabs.push({channel_id:this.data.items[i].channelId,name:this.data.items[i].channelName});t.render(),this.updateSlides(),setTimeout(function(){t.trigger("ready")},10),t.start()},updateSlides:function(){this.slides=this.$el.find(".con").children(),this.total_page=this.slides.length},tabChange:function(e){this.cur_index=$(e.currentTarget).attr("data-id"),this.setPagenation(this.cur_index),this.setPage(this.cur_index)},setPagenation:function(e){this.$el.find(".list li").removeClass("now").eq(e).addClass("now")},start:function(){var e=this;this.timer=setTimeout(function(){e.cur_index++;var t=e.cur_index%e.total_page;e.trigger("auto-change",t,e),e.setPagenation(t),e.setPage(t),e.start()},5e3)},setPage:function(e){this.slides.removeClass("cur"),this.slides.eq(e).addClass("cur"),this.trigger("focus-change",this.cur_index,this)},pause:function(){clearInterval(this.timer),this.timer=null},reStart:function(){clearInterval(this.timer),this.timer=null,this.start()}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.channel_id=e.channel_id},fetch:function(e){var t=this;this.url="/apiV2/re/headers?channelId="+this.channel_id,n.prototype.fetch.call(this,{success:function(e,i){try{"string"==typeof e&&(e=JSON.parse(e)),t.trigger("sync",e.list)}catch(n){t.trigger("error")}}})}})},function(e,t){var i={42:{name_cn:"游戏",name:"game"},23:{name_cn:"时尚",name:"fashion"},15:{name_cn:"财经",name:"business"},19:{name_cn:"娱谈",name:"yule"},17:{name_cn:"体育",name:"sports"},18:{name_cn:"汽车",name:"auto"},30:{name_cn:"科技",name:"it"},41:{name_cn:"动漫",name:"dm"},12:{name_cn:"文化",name:"cul"},13:{name_cn:"历史",name:"history"},25:{name_cn:"教育",name:"learning"},27:{name_cn:"星座",name:"astro"},45:{name_cn:"搞笑",name:"joke"},44:{name_cn:"宠物",name:"pets"},43:{name_cn:"世相",name:"view"},28:{name_cn:"美食",name:"food"},29:{name_cn:"旅游",name:"travel"},8:{name_cn:"新闻",name:"news"},24:{name_cn:"健康",name:"health"}};e.exports={getNameCn:function(e){try{return i[e].name_cn}catch(t){return console.log("channel id doesn't exsist",t),""}},getName:function(e){try{return channel_info[e].name}catch(t){return console.log("channel id doesn't exsist",t),0}}}},function(e,t){e.exports='<div class="scroll">\n\n        <div  class="con active">\n            <%for(var j = 0 ;j< items.length;j++){\n                var slide=items[j];    \n            %>\n                <div class="pic img-do <%=(j==0)? \'cur\' :\'\'%>" data-media-id="<%=slide.mediaId%>" data-focus-ev="<%=slide.id%>">\n                    <a href="<%=\'//www.sohu.com\'+slide.path%>" target="_blank"><img src="<%=slide.picUrl%>" alt=""></a>\n                    <span class="linear-box"><em class="linear-bg"></em><a href="<%=\'//www.sohu.com\'+slide.path%>" target="_blank"><%=slide.title%></a></span>\n                </div>\n             <%}%>\n        </div>\n</div>\n<div class="list">\n    <ul>\n        <%for(var i = 0 ;i< tabs.length;i++){%>\n            <li data-id="<%= i %>" class="<%=(i==0) ? \'now\' : \'\'%>">\n                <i class="cort"></i>\n                <%=tabs[i].name%>\n            </li>\n            <%}%>\n    </ul>\n</div>\n<div id="god_focus"></div>'},function(e,t,i){var n=i(131);e.exports=Backbone.View.extend({initialize:function(e){var t=this;n(this.$el),this.setResponsible(),$(window).on("resize",_.throttle(function(e){t.setResponsible()},200))},setResponsible:function(){var e=this.$el.find(".box"),t=this.$el.find(".box-more"),i=$(window).height(),n=this.$el.find(".sohu-logo").outerHeight(),s=this.$el.offset.top>50?0:50,a=i-n-s,o=e.size(),r=Math.ceil(a/63)-0;r=r<=2?2:r,r<o?(this.$el.find(".box").show(),this.$el.find(".box:gt("+(r-2)+")").hide(),t.show().find("dl").show(),t.find("dl:lt("+(r-1)+")").hide()):(e.show(),t.hide()),this.$el.css({visibility:"visible"})}})},function(e,t,i){var n=i(148),s=i(149),a=function(){};e.exports=n({template:s,initFn:a,items:[],needRender:!1,interval:6e3})},function(e,t){function i(e){return Backbone.View.extend({template:_.template(e.template),data:{items:e.items},currentPage:1,lastPage:0,translateX:0,translateY:0,startTranslateX:0,startTranslateY:0,delta:0,dragging:!1,startPos:null,transitioning:!1,slideEls:[],totalPage:0,interval:null,timer:null,time:5e3,events:{"touchstart [data-role='wrapper']":"_onTouchStart","click [data-role='left-btn']":"prev","click [data-role='right-btn']":"next","click [data-role='bullet']":"go_page","transitionend [data-role='wrapper']":"_onTransitionEnd","webkitTransitionend [data-role='wrapper']":"_onTransitionEnd",mouseenter:"freeze",mouseleave:"start"},show:function(){this.data.items.length>0?this.$el.show():this.$el.hide()},hide:function(){this.$el.hide()},render:function(){this.$el.html(this.template(this.data))},ready:function(){if(this.$els=this.$el.find('[data-role="wrapper"]'),this.slideEls=this.$els[0]&&this.$els[0].children,!this.slideEls)return void this.$el.hide();this.totalPage=this.slideEls.length||0,$(this.$els).append($(this.slideEls[0]).clone().removeAttr("data-focus-ev")),$(this.$els).prepend($(this.slideEls[this.slideEls.length-2]).clone().removeAttr("data-focus-ev")),this.setPage(0);this.start()},resolveOptions:function(e){for(var t,i=["time"],n=i.length;t<n;t++){var s=i[t];this[s]=e[s]}},initialize:function(e){var t=this;this.resolveOptions(),e.needRender?this.data.items&&this.data.items.length>0?(t.render(),t.ready()):this.hide():t.ready();var t=this;this._onTouchMove=function(e){t.onTouchMove.apply(t,arguments),e.preventDefault(),e.stopPropagation()},this._onTouchEnd=function(e){t.onTouchEnd.apply(t,arguments),e.preventDefault(),e.stopPropagation()}},reset:function(){$(this.$els).html(""),this.slideEls=this.$els[0].children,this.totalPage=this.slideEls.length,$(this.$els).append($(this.slideEls[0]).clone()),$(this.$els).prepend($(this.slideEls[this.slideEls.length-2]).clone()),this.setPage(0)},start:function(){var e=this;e.transitioning=!1,this.interval=setInterval(function(){e.next()},this.time)},next:function(e){var t=this;this.currentPage++,this.setPage(this.currentPage),e&&(clearInterval(this.interval),clearTimeout(this.timer),this.timer=setTimeout(function(){t.start()},6e4))},prev:function(e){var t=this;this.transitioning||(this.currentPage--,this.setPage(this.currentPage),e&&(clearInterval(this.interval),clearTimeout(this.timer),this.timer=setTimeout(function(){t.start()},6e4)))},setPage:function(e){var t;if(this.lastPage=this.currentPage,this.currentPage=e,$(this.slideEls[this.currentPage+1]).trigger("focus-in-view"),this.isHorizontal()?("clientWidth",t="translateX"):("clientHeight",t="translateY"),this.isSupportTransform()){this[t]=0-$(this.slideEls[0]).width()*(e+1);var i=this.$el.find("[data-role='wrapper']");i.css("transform","translate3d("+this.translateX+"px,"+this.translateY+"px, 0)"),this.$el.find("[data-role='bullet']").removeClass("cur"),this.$el.find("[data-role='bullet']:eq("+e+")").addClass("cur"),this._onTransitionStart()}else{var n=this;this[t]=0-$(this.slideEls[0]).width()*(e+1);var i=this.$el.find("[data-role='wrapper']");i.animate({left:n.translateX+"px"},"300",function(){if(n.currentPage<0){n.currentPage=n.totalPage-1;var e=0-n.slideEls[0].clientWidth*n.totalPage}if(n.currentPage>n.totalPage-1){n.currentPage=0;var e=0-n.slideEls[0].clientWidth}i.css({left:e}),n.transitioning=!1,n.$el.find("[data-role='bullet']").removeClass("cur"),n.$el.find("[data-role='bullet']:eq("+n.currentPage+")").addClass("cur")})}setTimeout(function(){window.sohuSpm&&"function"==typeof window.sohuSpm.reScan&&window.sohuSpm.reScan()})},go_page:function(e){this.setPage($(e.currentTarget).data("id"))},setPageNoAnimate:function(e){var t=$(this.$els);t.css("transition","none"),this.setPage(e);var i=this;setTimeout(function(){t.css("transition",""),i.transitioning=!1},100)},isHorizontal:function(){return!0},isVertical:function(){return!1},isSupportTransform:function(){return"transform"in document.createElement("div").style},_onTouchStart:function(e){this.transitioning||(this.startPos=this._getTouchPos(e.originalEvent),this.delta=0,this.startTranslateX=this.translateX,this.startTranslateY=this.translateY,this.startTime=(new Date).getTime(),this.dragging=!0,document.addEventListener("touchmove",this._onTouchMove,!1),document.addEventListener("touchend",this._onTouchEnd,!1),document.addEventListener("mousemove",this._onTouchMove,!1),document.addEventListener("mouseup",this._onTouchEnd,!1))},onTouchMove:function(e){this.delta=this._getTouchPos(e)-this.startPos,e.preventDefault(),e.stopPropagation(),this.isHorizontal()?(this.translateX=this.startTranslateX+this.delta,this.trigger("slider-move",this.translateX)):(this.translateY=this.startTranslateY+this.delta,this.trigger("slider-move",this.translateY)),(this.isVertical()||this.isHorizontal()&&Math.abs(this.delta)>0)&&e.preventDefault()},onTouchEnd:function(e){this.dragging=!1;var t=(new Date).getTime()-this.startTime<1e3;this.delta<-100||t&&this.delta<-15?this.next(e):this.delta>100||t&&this.delta>15?this.prev(e):this._revert(),e.stopPropagation(),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),document.removeEventListener("mousemove",this._onTouchMove),document.removeEventListener("mouseup",this._onTouchEnd)},_revert:function(){this.setPage(this.currentPage)},_getTouchPos:function(e){var t=this.isHorizontal()?"pageX":"pageY";return e.changedTouches?e.changedTouches[0][t]:e[t]},_onTransitionStart:function(){this.transitioning=!0,this._isPageChanged()?this.trigger("slide-change-start",this.currentPage,this):this.trigger("slide-revert-start",this.currentPage,this)},_onTransitionEnd:function(){this.currentPage<0?(this.transitioning=!0,this.setPageNoAnimate(this.totalPage-1)):this.currentPage>this.totalPage-1?(this.transitioning=!0,this.setPageNoAnimate(0)):this.transitioning=!1,this.trigger("focus-change",this.currentPage,this)},_isPageChanged:function(){return this.lastPage!==this.currentPage},freeze:function(){clearInterval(this.interval),this.interval=null}})}e.exports=i},function(e,t){e.exports=""},function(e,t,i){var n=i(151),s=function(e,t,i){var s="";s=i.sub_id&&i.channel_id?"sub":i.news_id&&i.channel_id?"article":i.tag_id&&i.channel_id?"tag":i.channel_id?"channel":"index";var a=new n(s,t,e);return a.init(i),a};e.exports=s},function(e,t,i){var n=i(73),s=i(75),a=new s,o=(i(7),i(77)),r=i(80),c=i(106),l=i(108),d=i(109),h=i(76),u=function(e,t,i){this.$el=i,this.adShowList=[],a.count_trigger(),o[e]&&(this.page_type=e,this.ad_type=t,this.ad=o[e][t],this.ad&&(this.adps=this.ad.size,this.AdInstance=this.ad.Ins,this.support_flash=h(t)?"1":"0"))};u.prototype={init:function(e){if(!this.ad)return void(this.empty_ad?this.empty_ad():this.$el.hide());var t=this;this.empty_ad=e.empty_ad||this.empty_ad;var i,s=(new Date).getTime(),o=this.ad.ad_id;this.$el.attr("data-god-id",o);var h=l(e),u=c(this.page_type,this.ad_type,e),p=e.maxreads?e.maxreads>21?21:e.maxreads:1,f=d(e),m=new n({turn:u||1,id:o,position:e.position,channel_id:h,sub_id:e.sub_id,tag_id:e.tag_id,news_id:e.news_id,subid:e.subid,adps:t.adps,maxreads:p,multichn:f,support_flash:t.support_flash});i=(new Date).getTime()-s;var g=function(n){var s=n,c=s.length,l="index_side_swiper"==t.ad_type?5:21;if(c<l)for(var d=c;d<l;d++)s.push({});_.forEach(s,function(n){var s=n&&n.monitorkey||"",c=t.$el.offset();""===s?c.left=c.top="":t.$el.is(":visible")?(c.left=c.left.toFixed(1),c.top=c.top.toFixed(1)):c.left=c.top=0,a.pv_trigger({source:n.source||"",newsid:t.news_id||"",subid:t.subid||"",aid:n&&n.adid||"",apid:"beans_"+o,impid:n&&n.impression_id||"",mkey:s,latcy:i,freq:n&&n.freq||0,ax:c&&c.left,ay:c&&c.top,ed:n&&n.ed||"",
bucket:n&&n.bucket||"",ext:n&&n.ext||"",uloc:n&&n.uloc||"",newschn:h,turn:u,position:e.position||"",pgid:r.get(e),shbd_monitor_ext:n&&n.shbd_monitor_ext||"",sf:t.support_flash})})};m.on("sync",function(n){n[0]?(t.$el.show(),t.ad_instance=new t.AdInstance({data:n,turn:u,ad_id:o,el:t.$el,latcy:i,position:e.position,channel_id:e.channel_id,sub_id:e.sub_id,tag_id:e.tag_id,news_id:e.news_id,ad_channel_id:h,sf:t.support_flash}),t.ad_instance.render()):t.empty_ad?t.empty_ad():t.$el.hide(),g(n)}),m.on("error",function(){g(),t.empty_ad?t.empty_ad():t.$el.hide()}),m.fetch()},reset:function(e){this.ad_instance&&this.ad_instance.undelegateEvents(),this.init(e)}},e.exports=u},function(e,t,i){var n=i(6);e.exports=Backbone.View.extend({d:106,interval:1e4,events:{"webkitTransitionEnd .jubao-list":"onTransitionEnd","transitionend .jubao-list":"onTransitionEnd","MSTransitionEnd .jubao-list":"onTransitionEnd"},index:0,initialize:function(e){var t=this;this.wrap=this.$el.find(".jubao-list"),this.count=this.wrap.find("div").length;var i=this.wrap.find("div");this.wrap.append(i.eq(2).clone()),t.start()},start:function(){var e=this,e=this;setTimeout(function(){e.index++,e.setPage(e.index),e.start()},e.interval)},setPage:function(e){var t=Math.ceil(this.count/2);this.index=e%t,n.isSupportTransform()?this.wrap.css({opacity:"0"}):this.wrap.css({top:-this.index*this.d+"px"})},onTransitionEnd:function(){this.wrap.css({transform:"translateY("+-this.index*this.d+"px)",opacity:"1"})}})},function(e,t,i){var n=i(114);e.exports=function(e){n.load({type:"test",def:e.def,channel_id:e.channel_id,args:{channel_id:e.channel_id,sub_id:e.sub_id,tag_id:e.sub_id,news_ids:e.news_id,ext_data:e.ext_data}})}},function(e,t,i){var n=i(155),s=i(48),a=i(156),o=(i(158),i(114)),r=i(152),c=i(159),l=i(164),d=i(174),h=(i(178),i(162),i(22),i(180)),u=(i(167),i(123),i(183),i(118)),p=i(192),f=i(193),m=(i(194),i(197)),g=i(16),_=i(36),v=i(199),w=i(44),b=i(7),x=(b.get("SUV"),i(201)),y=(i(124),i(205)),k=i(206),I=i(209),P=i(212),C=i(147),T=i(215),E=i(217),S=(i(218),i(219)),z=(i(221),i(223)),j=i(225),A=i(77),D=i(107);i(11);var N=i(230),V=i(231);e.exports=function(e){function t(){if(WebSocket){var e=new WebSocket("wss://jincai.sohu.com/home-ws/homews");e.onopen=function(e){console.log(e)},e.onmessage=function(e){var t=document.getElementById("entrance"),i="";try{i=JSON.parse(e.data)}catch(n){console.log("解析JSON失败",i)}console.log(i.messageType),"ON"===i.messageType?(t.style.display="block",$('[data-spm="top-news6"]').find("li:last").css("display","none")):"OFF"===i.messageType&&(t.style.display="none",$('[data-spm="top-news6"]').find("li:last").css("display","block"))}}else console.log("WebSocket不存在")}function i(e){var t={refreshable:!1,feedback:!0,classicSohu:!0};new w({el:"#float-btn",data:$.extend(t,e)})}function b(){$(document).on("click",".classic",function(){"设为默认首页"===$(".classic").text()?(N.set("isFromClassic","false",{expires:3,domain:".sohu.com"}),$(".classic").text("取消设为默认首页"),localStorage.setItem("homepage","true")):"取消设为默认首页"===$(".classic").text()&&($(".classic").text("设为默认首页"),localStorage.setItem("homepage","false"))}),t(),$(document).on("click",".intoclassic",function(e){e.preventDefault(),window.sohuSpm.sendAction({acode:"8742",clkParam:"position:0"}),window.open($(e.currentTarget).attr("href"),"_blank")}),$(document).on("click",".rightbutton",function(e){window.sohuSpm.sendAction({acode:"8742",clkParam:"position:1"}),window.open("/classic","_blank")}),new s({el:"#search",channel_id:8}),new r({el:"#report"}),+new Date>1589904e6&&+new Date<15907428e5&&new z({el:".theme-skin-wrap"}),new E({firstEl:"[data-role='update-pa-0']",nextEl:"[data-role='update-pa-1']",btnEl:"[data-role='update-btn']",top:$(".contentA").offset().top,bottom:$(".contentA").offset().top+$(".contentA").height()});var e=new c({el:"[data-role='focus-section']"});e.on("newItemsIn",function(e){v.upDateAdMap({adMap:e})}),e.on("ready",function(){this.readyRender=!0,v.triggerPv(),e&&f&&w&&e.readyRender&&f.readyRender&&w.readyRender&&(v.clickMonitor(),v.evMonitor())}),new l({el:"[data-role='sohu-video-collection']"}),new d({el:"[data-role='joke-hot-news']",sceneId:45,channelInfo:{name:"搞笑",url:"//fun.sohu.com",name_en:"fun"}}),new x({el:"[data-role='hot-news']",model:new y({id:11960,slice:6}),type:"index2"});var i=new a({el:"[data-role='index-focus']"});new S({changeFocus:$("[data-role='index-focus'] .con .pic")[2],succCallback:function(){i.setPage(1),i.freeze(),setTimeout(function(){i.start()},2e3)}}),function(){var e=$("[data-role='author-reading-count']"),t=[],i=new p;e.each(function(e){t.push($(this).attr("data-id").trim()),$(this).attr("data-role","watting-author-reading-count")}),i.on("sync",function(e){$('[data-role="watting-author-reading-count"]').each(function(t){var i=$(this).attr("data-id").trim();$(this).html(new g(e[i]).format())})}),i.fetch({list:t})}(),new V({el:$("#pop-news")}),o.load({type:"index_v3",args:{ext_data:{modelId:0}}}),u.update(),new m({el:"[data-role='index-sohu-choice']"}),new j({el:"#city-sohu-choice"}),new _({el:".right.head-right",type:"",mark:"index"}),new _({el:"#head-login",type:"other",mark:"index"}),new h({el:"[data-role='yule-section']"}),new h({el:"[data-role='sports-section']"}),new h({el:"[data-role='business-section']"}),new h({el:"[data-role='auto-section']"}),new k({el:"[data-role='rank-list']"});var f=new I({el:".other-modB"});f.on("ready",function(t){var i={};t.list.forEach(function(e){i[e.ad_pos_id]=e}),v.upDateAdMap({adMap:i}),this.readyRender=!0,e&&f&&w&&e.readyRender&&f.readyRender&&w.readyRender&&(v.clickMonitor(),v.evMonitor())});var w=new P({el:".other-modA"});w.on("ready",function(t){var i={};t.list.forEach(function(e){i[e.ad_pos_id]=e}),v.upDateAdMap({adMap:i}),this.readyRender=!0,e&&f&&w&&e.readyRender&&f.readyRender&&w.readyRender&&(v.clickMonitor(),v.evMonitor())}),new C({el:"[data-role='yule-pay']"}),n.init({type:"v3"},{focus:i,house:e}),new T({topEv:[{el:'[data-role="yule-section"]',param:"10210052"},{el:'[data-role="auto-section"]',param:"10210053"},{el:".main-left.fashion-news.left",param:"10210054"},{el:".main-left.mil-news.left",param:"10210055"},{el:".service-info.area.clearfix",param:"10210056"}],clickEv:{el:"[data-clev]",special:[{el:"#search",param:"10210051"},{el:'[data-role="update-btn"]',param:"10220073"}]},linkEv:"[data-param]"}),"true"===N.get("isFromClassic")?$(".classic").text("设为默认首页"):"true"===localStorage.getItem("homepage")?$(".classic").text("取消设为默认首页"):"false"===localStorage.getItem("homepage")&&$(".classic").text("设为默认首页")}var L=this,q=["side_5","promotion_2","promotion_3","column_6","column_5","drain-btn"],M=A.v3_index,O=[];q.forEach(function(e){O.push(M[e])});var U=new f;U.on("sync",function(e){var t=q.splice(5,1)[0],n=e.data||{};n[M[t].ad_id].data&&n[M[t].ad_id].data.length>0?i():i({classicSohu:!1}),delete e.data[M[t].ad_id],D.insertAdsProps(e,A),b.call(L)}),U.on("error",function(e){i({classicSohu:!1})}),U.fetch({params:JSON.stringify(D.tidyAdsParams(O))})}},function(e,t,i){var n=i(71),s=i(77),a=(i(70),!1),o={focus:!1,house:!1};e.exports={init:function(e,t){var i=this;this.opts=e,this.deps=t,this.thresholds=[],this.sync(e,t),a=!0,i.depsAd(e,t),i.load(e)},sync:function(e,t){var i=this;t.focus.on("ready",function(){o.focus=!0,i.depsAd(e,t)}),t.house.on("ready",function(){o.house=!0,i.depsAd(e,t)})},depsAd:function(e,t,i){var s=this;a&&(o.focus&&($("[data-role='index-focus']").size()&&n($("[data-role='index-focus'] .pic.img-do:eq(3)"),"index_focus",$.extend({},e,{empty_ad:function(){this.$el.show()}})),o.focus=!1),o.house&&(s.channelAd("house"),o.house=!1))},load:function(e){var t=this;_.each($(".godR"),function(t,i){t&&n($(t),"side_"+(i+1),$.extend({},e,{}))}),_.each($("[data-role='god_column']"),function(i,s){if(1==s||2==s||3==s)var a={maxreads:2};if(i){var o=n($(i),"column_"+(s+1),$.extend({},a,e,{}));o.$el.on("needSecondColumn",function(t,i){o.$el.removeClass("god-main").addClass("god-sub");var s=$("<div class='god-sub'></div>");s.insertAfter(o.$el),n(s,"sub_column_"+i.column_type,$.extend({},a,e,{data:i.data},{}))}),o.$el.on("needEmptyColumn",function(i,s){var o=$("<div class='god-sub' style='display:none'></div>");n(o,"sub_column_"+s.column_type,$.extend({},a,e,{data:s.data},{})),console.log("AAAAA",t.cutOver("sub_column_"+s.column_type))})}});var i=["focus","yule","sports","business","auto","it","fashion","mil","history","health","cul","travel","learning","baobao","chihe","astro","society","game","acg","pets"];_.each(i,function(e,i){t.channelAd(e)}),_.each($("[data-role='god_promotion']"),function(t,i){n($(t),"promotion_"+(i+1),$.extend({},e,{empty_ad:function(){this.$el.hide()}}))})},channelAd:function(e){var t=this.opts,i=$("."+e+"-news").find(".list16:last li:last");"focus"==e&&(i=$("."+e+"-news .list-mod-0").find(".list16 li").eq(-2));var s=i.html();i.html("广告<em style='color:#D0D0D0'> | </em><span></span><span style='margin-left:10px'></span>");var a="txt_"+e,o=i.find("span");if(o.eq(0).size()&&n(o.eq(0),a+"_1",$.extend({},t,{empty_ad:function(){i.html(s)},block_name:e})),o.eq(1).size()&&n(o.eq(1),a+"_2",$.extend({},t,{})),"business"==e){var r=$("."+e+"-news").find(".list16:last li").slice(4,5),c=r.html();r.html("<span></span>");var l=r.find("span");l.eq(0).size()&&n(l.eq(0),a+"_0",$.extend({},t,{empty_ad:function(){r.html(c)},block_name:e}))}},cutOver:function(e){var t=this.thresholds,i=s[this.pageType()][e]||{},n=i.ad_id||"";if(t.length>0&&a){for(var o=0,r=t.length;o<r;o++)if(t[o].adslot_id==n)return t[o].ifNew||!1;return!1}return!1},pageType:function(){var e=this.opts;return e&&e.sub_id&&e.channel_id?"sub":e&&e.news_id&&e.channel_id?"article":e&&"dsy"==e.type?"pic_collection":e&&e.tag_id&&e.channel_id?"tag":e&&"news_channel"==e.type?"news_channel":e&&e.channel_id?"channel":e&&"v3"==e.type?"v3_index":"index"}}},function(e,t,i){i(18);e.exports=Backbone.View.extend({template:_.template(i(157)),data:{items:[]},currentPage:1,lastPage:0,translateX:0,translateY:0,startTranslateX:0,startTranslateY:0,delta:0,dragging:!1,startPos:null,transitioning:!1,slideEls:[],totalPage:0,interval:null,timer:null,events:{"touchstart .scroll":"_onTouchStart","click .btnl":"prev","click .btnr":"next","click .autos > span":"go_page","transitionend .con":"_onTransitionEnd","webkitTransitionend .con":"_onTransitionEnd",mouseenter:"freeze",mouseleave:"start"},show:function(){console.log(this.data.items),this.data.items.length>0?this.$el.show():this.$el.hide()},hide:function(){this.$el.hide()},render:function(){this.$el.html(this.template(this.data))},ready:function(){if(this.$els=this.$el.find('[data-role="item-wrapper"]'),this.slideEls=this.$els[0]&&this.$els[0].children,this.slideEls){this.totalPage=this.slideEls.length||0,$(this.$els).append($(this.slideEls[0]).clone().removeAttr("data-focus-ev")),$(this.$els).prepend($(this.slideEls[this.slideEls.length-2]).clone().removeAttr("data-focus-ev")),this.setPage(0);var e=this;setTimeout(function(){e.trigger("ready")},10),this.start()}},initialize:function(e){var t=this;t.ready(),this._onTouchMove=function(e){t.onTouchMove.apply(t,arguments),e.preventDefault(),e.stopPropagation()},this._onTouchEnd=function(e){t.onTouchEnd.apply(t,arguments),e.preventDefault(),e.stopPropagation()}},reset:function(){$(this.$els).html(""),this.slideEls=this.$els[0].children,this.totalPage=this.slideEls.length,$(this.$els).append($(this.slideEls[0]).clone()),$(this.$els).prepend($(this.slideEls[this.slideEls.length-2]).clone()),this.setPage(0)},start:function(){var e=this;e.transitioning=!1,this.interval=setInterval(function(){e.next()},5e3)},next:function(e){var t=this;this.transitioning||(this.currentPage++,this.setPage(this.currentPage),e&&(clearInterval(this.interval),clearTimeout(this.timer),this.timer=setTimeout(function(){t.start()},6e4)))},prev:function(e){var t=this;this.transitioning||(this.currentPage--,this.setPage(this.currentPage),e&&(clearInterval(this.interval),clearTimeout(this.timer),this.timer=setTimeout(function(){t.start()},6e4)))},setPage:function(e){var t;if(this.lastPage=this.currentPage,this.currentPage=e,$(this.slideEls[this.currentPage+1]).trigger("focus-in-view"),this.isHorizontal()?("clientWidth",t="translateX"):("clientHeight",t="translateY"),this.isSupportTransform()){this[t]=0-$(this.slideEls[0]).width()*(e+1);var i=this.$el.find(".con");i.css("transform","translate3d("+this.translateX+"px,"+this.translateY+"px, 0)"),this.$el.find(".autos >span.cur").removeClass("cur"),this.$el.find(".autos >span:eq("+e+")").addClass("cur"),this._onTransitionStart()}else{var n=this;this[t]=0-$(this.slideEls[0]).width()*(e+1);var i=this.$el.find(".con");i.animate({left:n.translateX+"px"},"300",function(){if(n.currentPage<0){n.currentPage=n.totalPage-1;var e=0-n.slideEls[0].clientWidth*n.totalPage}if(n.currentPage>n.totalPage-1){n.currentPage=0;var e=0-n.slideEls[0].clientWidth}i.css({left:e}),n.transitioning=!1,n.$el.find(".autos >span.cur").removeClass("cur"),n.$el.find(".autos >span:eq("+n.currentPage+")").addClass("cur")})}},go_page:function(e){this.setPage($(e.currentTarget).data("id"))},setPageNoAnimate:function(e){var t=$(this.$els);t.css("transition","none"),this.setPage(e);var i=this;setTimeout(function(){t.css("transition",""),i.transitioning=!1},100)},isHorizontal:function(){return!0},isVertical:function(){return!1},isSupportTransform:function(){return"transform"in document.createElement("div").style},_onTouchStart:function(e){this.transitioning||(this.startPos=this._getTouchPos(e.originalEvent),this.delta=0,this.startTranslateX=this.translateX,this.startTranslateY=this.translateY,this.startTime=(new Date).getTime(),this.dragging=!0,document.addEventListener("touchmove",this._onTouchMove,!1),document.addEventListener("touchend",this._onTouchEnd,!1),document.addEventListener("mousemove",this._onTouchMove,!1),document.addEventListener("mouseup",this._onTouchEnd,!1))},onTouchMove:function(e){this.delta=this._getTouchPos(e)-this.startPos,e.preventDefault(),e.stopPropagation(),this.isHorizontal()?(this.translateX=this.startTranslateX+this.delta,this.trigger("slider-move",this.translateX)):(this.translateY=this.startTranslateY+this.delta,this.trigger("slider-move",this.translateY)),(this.isVertical()||this.isHorizontal()&&Math.abs(this.delta)>0)&&e.preventDefault()},onTouchEnd:function(e){this.dragging=!1;var t=(new Date).getTime()-this.startTime<1e3;this.delta<-100||t&&this.delta<-15?this.next(e):this.delta>100||t&&this.delta>15?this.prev(e):this._revert(),e.stopPropagation(),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),document.removeEventListener("mousemove",this._onTouchMove),document.removeEventListener("mouseup",this._onTouchEnd)},_revert:function(){this.setPage(this.currentPage)},_getTouchPos:function(e){var t=this.isHorizontal()?"pageX":"pageY";return e.changedTouches?e.changedTouches[0][t]:e[t]},_onTransitionStart:function(){this.transitioning=!0,this._isPageChanged()?this.trigger("slide-change-start",this.currentPage,this):this.trigger("slide-revert-start",this.currentPage,this)},_onTransitionEnd:function(){this.currentPage<0?(this.transitioning=!0,this.setPageNoAnimate(this.totalPage-1)):this.currentPage>this.totalPage-1?(this.transitioning=!0,this.setPageNoAnimate(0)):this.transitioning=!1,this.trigger("focus-change",this.currentPage,this)},_isPageChanged:function(){return this.lastPage!==this.currentPage},freeze:function(){clearInterval(this.interval),this.interval=null}})},function(e,t){e.exports='<div class="scroll" id="swiper">\n    <div class="con" data-role="item-wrapper">\n        <%for(var i = 0 ;i< items.length;i++){\n            var item = items[i];\n            item.path=item.path.match(/\\/\\//)?item.path:"//www.sohu.com"+item.path;\n        %>\n        <div class="pic img-do" data-media-id="<%=item.mediaId%>" data-focus-ev="<%=item.id%>">\n            <a target="_blank"\n                                   href="<%=item.path%>?_f=index_focus_<%=i %>" title= "<%= item.title%>"><img\n                alt="" src="<%=item.picUrl%>">\n                <span class="shadow linear-box"><em class="linear-bg"></em><span><%=item.title%></span></span>\n            </a>\n        </div>\n        <%}%>\n    </div>\n    <div class="autos">\n        <%for(var i = 0 ;i< items.length;i++){%>\n\n        <span data-id="<%=i%>" class="<%i==0?\'cur\':\'\'%>"><a></a></span>\n        <%}%>\n    </div>\n    <div class="btns"><a href="javascript:void(0)" class="btnl"></a><a href="javascript:void(0)" class="btnr"></a>\n    </div>\n</div>\n'},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.scene=e&&e.scene||"HOMEPAGE",this.sceneId=e&&e.sceneId||0},fetch:function(e){this.page=e&&e.page_no||1,this.size=e&&e.size_size||20,this.url="feed?scene="+this.scene+"&sceneId="+this.sceneId+"&page="+this.page+"&size="+this.size;var t=this,i=[{path:"/a/134752522_120702",focusImg:"//i.mp.itc.cn/20170418/134752522_600_300_1492511476526.png",channelName:"新闻",id:134752522,mediaId:120702,title:"京沪高铁沿线垃圾堆成山 上百亩国有土地被强占",channelId:8},{path:"/a/134765648_267106",focusImg:"//i.mp.itc.cn/20170418/134765648_600_300_1492511630464.png",channelName:"财经",id:134765648,mediaId:267106,title:"3月份一二线热点城市楼市已逐步开启降温通道",channelId:15},{path:"/a/134742132_115565",focusImg:"//i1.itc.cn/20170418/38a0_b727fd90_5e75_0358_2859_08e485d57a89_1.jpg",channelName:"科技",id:134742132,mediaId:115565,title:"司机围堵易到：油钱都出不起了 只能“追债”",channelId:30},{path:"/a/134715651_538698",focusImg:"//i.mp.itc.cn/20170418/134715651_600_300_1492511734312.png",channelName:"生活",id:134715651,mediaId:538698,title:"外国专家：中国人为何这么热爱共享单车？",channelId:43},{path:"/a/134743196_115280",focusImg:"//i.mp.itc.cn/20170418/134743196_600_300_1492511797724.png",channelName:"其它",id:134743196,mediaId:115280,title:"重播2000次的《西游记》上千亿的版权收益归了谁?",channelId:34},{path:"/a/134717006_114813",focusImg:"//i.mp.itc.cn/20170418/134717006_600_300_1492511878721.png",channelName:"历史",id:134717006,mediaId:114813,title:"他们是明朝被误解最深的：揭秘真实的锦衣卫",channelId:13},{path:"/a/134742375_115253",focusImg:"//i.mp.itc.cn/20170418/134742375_600_300_1492511973077.png",channelName:"旅游",id:134742375,mediaId:115253,title:"唐山大地震：地裂40年后的记忆与重生",channelId:29}];t.trigger("sync",i)}})},function(e,t,i){var n=(i(160),i(158),i(162),i(164),i(167),i(169)),s=i(18);e.exports=Backbone.View.extend({template:_.template(i(170)),focusTpl:_.template(i(171)),newsTpl:_.template(i(172)),panelTpl:_.template(i(173)),data:{},events:{"mouseenter [data-id]":"tabChange","mouseleave .title-cut ul":"clear"},render:function(e){this.$el.html(this.template(e))},adMap:{},replaceUrl:function(e){this.$el.find(".title-cut a").each(function(){var t=$(this).attr("href").replace("{pinyin}",e.pinyin).replace("{suffix}",e.suffix).replace(escape("{pinyin}"),e.pinyin).replace(escape("{suffix}"),e.suffix);!e.is_shengtai&&/\/zixun\//gi.test(t)&&(t="//news.focus.cn/"+e.suffix),!e.is_shengtai&&/bbs\.focus\.cn/gi.test(t)&&(t="//"+e.suffix+".focus.cn/group/yezhu.php"),$(this).attr("href",t)})},initialize:function(e){var t=$.extend({},e);this.cacheData={},this.render(t),this.refresh("47")},ready:function(){var e=this;setTimeout(function(){e.trigger("ready")},10)},refresh:function(e){var t=this;if(this.cacheData[e]){var i=t.$el.find("[data-role='focus-panel']");i.hide(),i.filter("[data-focus-id="+e+"]").show()}else{var a=new n({adposId:e});a.on("sync",function(i){t.$el.find("[data-role='focus-panel']").hide(),t.$el.find(".house-news").append(t.panelTpl({i:e}));var n=t.$el.find(".house-news").find("[data-focus-id='"+e+"']");i.headers.forEach(function(e,t){var i=t?20:22;e.title=s.subString(e.title,i)}),n.find("[data-role='focus']").html(t.focusTpl({items:i.headers})),n.find("[data-role='main-news']").html(t.newsTpl({items:i.data})),t.cacheData[e]=i,t.replaceUrl(i),t.flag||(t.ready(),t.$el.show(),t.flag=!0),t.adMap.city_id=i.city_id,t.adMap.area_code=i.area_code,t.adMap.city_name=i.city_name;for(var a in i)"data"!=a&&"headers"!=a||i[a].forEach(function(e){t.adMap[e.ad_pos_id]=e});t.trigger("newItemsIn",t.adMap)}),a.fetch()}},tabChange:function(e){var t=this;clearTimeout(this.timer),this.timer=setTimeout(function(){var i=$(e.currentTarget);t.$el.find("[data-id]").removeClass("cur"),i.addClass("cur"),t.refresh(i.data("id"))},300)},clear:function(){clearTimeout(this.timer)}})},function(e,t,i){var n=i(25);e.exports=Backbone.View.extend({template:_.template(i(161)),data:{items:{}},model:null,settings:{count:3},render:function(){this.$el.html(this.template(this.data))},initialize:function(e){if(e.needFirstRender)if("object"==typeof e.headers)this.data.items=e.headers.slice(0,this.settings.count),this.render();else{this.settings=$.extend({},this.settings,e);var t=this;this.model=this.settings.model,this.model&&this.model.one("sync",function(e){t.data.items=e.slice(0,t.settings.count),t.render()}),this.model.fetch()}},resetFocus:function(e){e.model;this.data.items=e.data,this.data.channel=e.channel,this.data.index=e.index,this.data.items.forEach(function(e){e.path=n.news(e),e.focusImg=e.picUrl}),this.render()}})},function(e,t){e.exports='<% var firstItem=items.splice(0,1)%>\n    <div class="pic-focus">\n        <a href="<%= firstItem[0].path%>?_f=index_<%=channel%>focus_<%=index%>_0" title="<%= firstItem[0].title%>" target="_blank"><img src="<%= firstItem[0].focusImg%>" alt=""><span class="linear-box"><em class="linear-bg"></em><em class="linear-txt"><%= firstItem[0].title%></em></span></a>\n    </div>\n    <div class="pic-group clearfix">\n        <ul>\n            <%for (var i = 0; i < items.length; i++) {%>\n                <%   var item = items[i]; %>\n                    <li class="<%= i%2==1 ?\'end\' : \'\' %>">\n                        <a href="<%= item.path%>?_f=index_<%=channel%>focus_<%=index%>_<%= i%>" title= "<%= item.title%>" target="_blank"><img src="<%= item.focusImg%>" alt=""><span class="linear-box"><em class="linear-bg"></em><em class="linear-txt"><%= item.title%></em></span></a>\n                    </li>\n                    <%}%>\n        </ul>\n    </div>'},function(e,t,i){var n=(i(22),i(25));e.exports=Backbone.View.extend({template:_.template(i(163)),data:{},render:function(e){this.$el.html(this.template(e))},renderArticle:function(e){var t=this;return function(i){t.fixItem(i.items),e.html(t.template(i))}},initialize:function(e){var t=this,i=e.model;i.on("sync",function(e){t.fixItem(e),t.render({items:e})}),i.fetch()},fixItem:function(e){e.forEach(function(e){e.path=n.news(e)})},resetArticle:function(e){var t=this;this.richNewsList=[],this.plainNewslist=[],this.cacheData=this.cacheData||{};var i=e.index,n=e.channel,s=e.model,a=(e.el,e.el?this.renderArticle(e.el):t.render);t.cacheData[s.scene+"_"+s.sceneId]&&0!=t.cacheData[s.scene+"_"+s.sceneId].length?a.call(t,{items:t.cacheData[s.scene+"_"+s.sceneId]}):(s.on("sync",function(e){var o=[];e.forEach(function(e){t.richNewsList.length<3&&e.picUrl?t.richNewsList.push(e):o.push(e)}),a.call(t,{items:o,index:i,channel:n}),t.cacheData[s.scene+"_"+s.sceneId]=o,t.trigger("ready",t.richNewsList)}),s.fetch())}})},function(e,t){e.exports='<% var firstPart=items.slice(0,5)%>\n <div class="list16">\n                <ul>\n                <%for(var i=0,len=firstPart.length;i<len;i++){%>\n                    <% var item=firstPart[i]%>\n                    <li><a href="<%= item.path %>?_f=index_<%=channel%>news_<%=index%>_<%= i%>" target="_blank">\n                        <%if(i==0){%>\n                        <strong><%= item.title %></strong>\n                        <%}%>\n                        <%if(i>0){%>\n                             <%= item.title %>\n                        \n                        <%}%>\n\n                    </a></li>\n                <%}%>\n                </ul>\n            </div>\n            <div class="list16">\n                <ul>\n                    <% var secondPart=items.slice(5)%>\n                     <%for(var i=0,len=firstPart.length;i<len;i++){%>\n                    <% var item=secondPart[i]%>\n                    <li><a href="<%= item.path %>?_f=index_<%=channel%>news_<%=index%>_<%= i+5 %>" target="_blank">\n                        <%if(i==0){%>\n                        <strong><%= item.title %></strong>\n                        <%}%>\n                        <%if(i>0){%>\n                             <%= item.title %>\n                        \n                        <%}%>\n\n                    </a></li>\n                <%}%>\n                </ul>\n</div>\n\n\n'
}, function(e, t, i) {
    var n = i(165);
    i(25);
    e.exports = Backbone.View.extend({
        template: _.template(i(166)),
        data: {
            info: null
        },
        render: function(e) {
            this.$el.html(this.template(this.data))
        },
        initialize: function(e) {
            var t = this,
                i = new n;
            i.on("sync", function(e) {
                t.data.info = e, t.render()
            }), i.fetch()
        }
    })
}, function(e, t, i) {
    var n = i(4);
    e.exports = n.extend({
        init: function(e) {
            this.url = "//pl.hd.sohu.com/fraginfo?fragId=19"
        },
        fetch: function() {
            var e = this;
            $.ajax({
                url: this.url,
                type: "GET",
                dataType: "jsonp",
                jsonpCallback: "plFragCallback_19",
                success: function(t) {
                    e.trigger("sync", t), console.log("hahah")
                },
                error: function(t) {
                    e.trigger("error", t)
                }
            })
        }
    })
}, function(e, t) {
    e.exports = '       <div class="yule-play clearfix">\n                <div class="titleR"><span class="tt"><a href="http://tv.sohu.com/yule/" target="_blank">娱乐播报</span></div>\n                <div class="pic-group">\n                    <ul>\n                    <% for(var i=0,len=info.fragItemInfoList.length;i<len;i++){%>\n                     <% var item=info.fragItemInfoList[i]%>\n                        <li class="<%= i%2==1?\'end\':\'\'%>"><a href="<%=item.itemUrl%>?_f=index_yulebobao_<%= i%>" target="_blank"><img src="<%= item.itemPic%>" alt="">\n                        <% if(item.isShowPlayLogo==1){%>\n                        <i class="icon play-icon"></i>\n                        <%}%>\n                        <span class="txt"><%=item.itemTitle%></span></a></li>\n                      \n                     <%}%>\n                    </ul>\n                </div>\n            </div>\n'},function(e,t,i){var n=i(123),s=i(25);e.exports=Backbone.View.extend({template:_.template(i(168)),data:{items:{}},render:function(){this.fixItem(),this.$el.html(this.template(this.data))},initialize:function(e){var t=this;this.data.channel=e.channel,e.writerList?(this.data.items=e.writerList.slice(0,6),t.render(),t.trigger("rendered")):(this.model=new n({scene:"CHANNEL",sceneId:e.sceneId}),this.model&&this.model.one("sync",function(e){t.data.items=e.slice(0,4),t.render(),t.trigger("rendered")}),this.model.fetch())},fixItem:function(){this.data.items.forEach(function(e){e.path=s.news(e)})}})},function(e,t){e.exports='<div class="titleR"><span class="tt">公众号</span></div>\n<div class="pt-list clearfix">\n        <%for(var i=0;i< items.length ;i++){\n    var item =items[i];\n    %>\n    <div class="pt">\n        <div class="pic">\n            <a href="<%=item.personalPage%>" target="_blank"><img src="<%=item.logo%>" alt=""></a>\n        </div>\n        <h4><a href="<%=item.personalPage%>" target="_blank"><%=item.name%></a></h4>\n        <p>阅读数<em class="num" data-id="<%=item.id%>" data-role="author-reading-count"></em></p>\n    </div>\n       <%}%>\n</div>'},function(e,t,i){var n=i(4),s=i(7);e.exports=n.extend({init:function(e){this.cityCode=s.get("_test_loc_")||window.sohu_IP_Loc||"",this.data={cityCode:this.cityCode,adposId:e.adposId}},fetch:function(e){this.url="//adv-sv-show.focus.cn/be_fox_say3";var t=this;n.prototype.fetch.call(this,{data:this.data,success:function(e,i){var n={headers:[],data:[]},s=e.data.list;n.pinyin=e.data.pinyin,n.suffix=e.data.suffix,n.city_id=e.data.list&&e.data.list[0]&&e.data.list[0].city_id,n.area_code=e.data.list&&e.data.list[0]&&e.data.list[0].area_code,n.city_name=e.data.list&&e.data.list[0]&&e.data.list[0].city_name,n.is_shengtai=e.data.is_shengtai;for(var a=0,o=s.length;a<o;a++)a<3?(n.headers[a]=s[a],n.headers[a].path=s[a].link,n.headers[a].focusImg=s[a].resource_map.pic_text.url,n.headers[a].title=s[a].resource_map.pic_text.despriction):(n.data[a-3]=s[a],n.data[a-3].path=s[a].link,n.data[a-3].title=s[a].resource_map.text.despriction);t.trigger("sync",n)},error:function(e){t.trigger("error",e)}})}})},function(e,t){e.exports='<div class="main left">\n<div class="title-cut" data-spm="focus-nav">\n    <ul>\n        <li class="cur" data-id="47">\n          <a href="//www.focus.cn" target="_blank">房产</a>\n        </li>\n        <li data-id="49" ><a href="https://wl.focus.cn/" target="_blank">文旅</a></li>\n        <li data-id="48" ><a href="http://home.focus.cn/" target="_blank">家居</a></li>\n\n    </ul>\n    <span class="link">\n        <a href="http://www.focus.cn/loupan" target="_blank">新房</a>\n        <a href="https://{pinyin}.focus.cn/map/" target="_blank">地图找房</a>\n        <a href="http://{pinyin}.focus.cn/kanfangtuan/" target="_blank">看房团</a>\n        <a href="https://{pinyin}.focus.cn/zixun/" target="_blank">资讯</a>\n        <a href="http://baike.focus.cn/" target="_blank">百科</a>\n        <a href="https://house-on-sale.focus.cn/pc/index" target="_blank">在线开盘</a>\n        <a href="http://www.focus.cn" target="_blank">进入房产首页 &gt;</a>\n        \x3c!-- <a href="http://www.nanguazufang.cn/" target="_blank">南瓜公寓</a>\n        <a href="https://{pinyin}.focus.cn/zixun/" target="_blank">资讯</a>\n        <a href="https://bbs.focus.cn/{suffix}/" target="_blank">论坛</a>\n        <a href="https://zhibo.focus.cn/{suffix}/" target="_blank">直播</a>\n        <a href="http://shangye.focus.cn/" target="_blank">商业</a>\n        <a href="http://world.focus.cn/loupan/" target="_blank">海外</a>\n        <a href="http://baike.focus.cn/" target="_blank">百科</a>\n        <a href="http://www.focus.cn" target="_blank">进入房产首页 &gt;</a> --\x3e\n    </span>\n</div>\n    <div class="main-box clearfix house-news" >\n        \x3c!--左侧头图--\x3e\n\n\n    </div>\n</div>\n\x3c!--右侧--\x3e\n<div class="sidebar right">\n    <div class="yule-video clearfix" data-role="pic-collection">\n\n    </div>\n\n\n    <div class="clear  plugin plugin-side-right bordR" data-widget-id="focus_index_component_1" style="display: block; overflow: visible;">\n\n    </div>\n</div>'},function(e,t){e.exports='<% var firstItem=items.slice(0,1)%>\n    <div class="pic-focus">\n        <%if (firstItem[0]) { %>\n            <a href="<%= firstItem[0].path%>" data-adposid="<%=firstItem[0].ad_pos_id%>" target="_blank"><img src="<%= firstItem[0].focusImg%>" alt=""><span class="txt"><%= firstItem[0].title%></span></a>\n        <%}%>\n    </div>\n    <div class="pic-group clearfix">\n        <ul>\n            <%for (var i = 1; i < items.length; i++) {%>\n                <%   var item = items[i]; %>\n                    <li class="<%= i%2==0 ?\'end\' : \'\' %>">\n                        <a href="<%= item.path%>" data-adposid="<%=item.ad_pos_id%>" target="_blank"><img src="<%= item.focusImg%>" alt=""><span class="txt"><%= item.title%></span></a>\n                    </li>\n                    <%}%>\n        </ul>\n    </div>'},function(e,t){
e.exports='<% var firstPart=items.slice(0,6)%>\n <div class="list16">\n                <ul>\n                <%for(var i=0,len=firstPart.length;i<len;i++){%>\n                    <% var item=firstPart[i]%>\n                    <li><a href="<%= item.path %>" target="_blank" data-adposid="<%=item.ad_pos_id%>">\n                        <%if(i==0){%>\n                        <strong><%= item.title %></strong>\n                        <%}%>\n                        <%if(i>0){%>\n                             <%= item.title %>\n                        \n                        <%}%>\n\n                    </a></li>\n                <%}%>\n                </ul>\n            </div>\n            <div class="list16">\n                <ul>\n                    <% var secondPart=items.slice(6)%>\n                     <%for(var i=0,len=secondPart.length;i<len;i++){%>\n                    <% var item=secondPart[i]%>\n                    <li><a href="<%= item.path %>" target="_blank" data-adposid="<%=item.ad_pos_id%>">\n                        <%if(i==0){%>\n                        <strong><%= item.title %></strong>\n                        <%}%>\n                        <%if(i>0){%>\n                             <%= item.title %>\n                        \n                        <%}%>\n\n                    </a></li>\n                <%}%>\n                </ul>\n</div>'
}, function(e, t) {
    e.exports = ' <div data-role="focus-panel" data-focus-id="<%= i %>">\n        <div class="main-left left" data-role="focus">\n            \n        </div>\n        \x3c!--文章--\x3e\n        <div class="main-right right" data-role="main-news">\n\n        </div>\n        </div>'
}, function(e, t, i) {
    var n = i(22),
        s = i(25),
        a = i(115),
        o = i(175),
        r = i(118);
    e.exports = Backbone.View.extend({
        template: _.template(i(176)),
        item_template: _.template(i(177)),
        data: {
            items: {}
        },
        render: function() {
            this.$el.html(this.template(this.data)), setTimeout(function() {
                window.sohuSpm && "function" == typeof window.sohuSpm.domDidChange && window.sohuSpm.domDidChange()
            })
        },
        insertItem: function() {
            this.fixItem(), this.$el.append(this.item_template(this.data))
        },
        initialize: function(e) {
            var t = this;
            this.data.channelInfo = e.channelInfo, this.render(), e.data ? t.render(e.data) : (this.model = new n({
                scene: "CHANNEL",
                sceneId: e.sceneId
            }), this.model && this.model.one("sync", function(e) {
                for (var i = [], n = 0, s = e.length; n < s; n++) e[n].picUrl && e[n].picUrl.length && i.push(e[n]);
                t.data.items = i.slice(0, 5), console.log(t.data.items), t.data.items.forEach(function(e) {
                    e.picUrl = e.picUrl.replace(/\,w\_\d+\,h\_\d+/g, ",w_90,h_60").replace(/cdn\.sohucs\.com\/images/g, "cdn.sohucs.com/c_fill,w_90,h_60,g_faces/images").replace("png", "jpg")
                }), t.insertItem(), r.addImage(t.$el[0])
            }), this.model.on("error", function(e) {
                console.log("error", e)
            }), this.model.fetch({
                size: 30
            }), this.headerModel = new o({
                sceneId: e.sceneId,
                scene: "CHANNEL"
            }), this.headerModel.one("sync", function(e) {
                try {
                    var i = [];
                    e.forEach(function(e, t) {
                        i.push({
                            path: s.news(e) + "?_f=index_funfocus_" + t,
                            focusImg: e.focus.replace(/\,w\_\d+\,h\_\d+/g, ",w_300,h_150,q_70").replace(/cdn\.sohucs\.com\/images/g, "cdn.sohucs.com/c_fill,w_300,h_150,g_faces,q_70/images").replace("png", "jpg"),
                            title: e.title
                        })
                    }), new a({
                        el: t.$el.find(".swiper"),
                        data: i
                    })
                } catch (n) {
                    console.error("获取头图数据错误", n)
                }
            }), this.headerModel.fetch())
        },
        fixItem: function() {
            this.data.items.forEach(function(e) {
                e.path = s.news(e), e.picUrl = e.picUrl.replace(/\i\.mp\.itc\.cn/g, "i.mp.itc.cn/c_zoom,w_90,h_60")
            })
        }
    })
}, function(e, t, i) {
    var n = i(4),
        s = {};
    e.exports = n.extend({
        init: function(e) {
            this.scene = e && e.scene || "HOMEPAGE", this.sceneId = e && e.sceneId || 0
        },
        fetch: function() {
            if (s[this.sceneId]) return void this.trigger("sync", s[this.sceneId]);
            var e = this;
            this.url = "focus?scene=" + this.scene + "&sceneId=" + this.sceneId, n.prototype.fetch.call(this, {
                success: function(t, i) {
                    try {
                        e.trigger("sync", t), s[e.sceneId] = t
                    } catch (n) {
                        e.trigger("error")
                    }
                }
            })
        }
    })
}, function(e, t) {
    e.exports = '\n<div class="titleR" data-spm="<%= channelInfo.name_en %>-nav"><a href="<%= channelInfo.url%>" target="_blank"><span class="tt"><%= channelInfo.name %></span></a></div>\n<div class="channel-focus swiper" data-spm="<%= channelInfo.name_en %>-pics">\n</div>\n'
}, function(e, t) {
    e.exports = '<div data-spm="<%= channelInfo.name_en %>-list">\n<% for( var a = 0 ; a < items.length ; a++) { %>\n            <% var item = items[a];%>\n<div class="pic-text clearfix" data-spm-type="resource">\n    <div class="pic">\n        <a href="<%=item.path %>?_f=index_funnews_<%= a%>" target="_blank"><img data-src="<%=item.picUrl%>" alt="" src="http://statics.itc.cn/web/static/images/pic/preload.png"></a>\n    </div>\n    <h4><a href="<%=item.path %>?_f=index_funnews_<%= a%>" target="_blank"><%=item.title%></a></h4>\n</div>\n<% } %>\n</div>'
}, function(e, t, i) {
    var n = i(175),
        s = i(25);
    e.exports = Backbone.View.extend({
        template: _.template(i(179)),
        data: {
            items: []
        },
        render: function() {
            this.fixItem(), this.$el.html(this.template(this.data))
        },
        initialize: function(e) {
            var t = this;
            dmModel = new n({
                sceneId: 41,
                scene: "CHANNEL"
            }), gameModel = new n({
                sceneId: 42,
                scene: "CHANNEL"
            }), [dmModel, gameModel].forEach(function(e) {
                e.one("sync", function(e) {
                    t.data.items = t.data.items.concat(e.slice(0, 2)), 4 == t.data.items.length && t.render()
                }), e.fetch()
            })
        },
        fixItem: function() {
            this.data.items.forEach(function(e) {
                e.path = s.news(e)
            })
        }
    })
}, function(e, t) {
    e.exports = '<div class="titleR"><span class="tt"><a href="//acg.sohu.com" target="_blank">动漫</a> · <a href="//game.sohu.com" target="_blank">游戏</a></span></div>\n<% for( var a = 0 ; a < items.length ; a++) { %>\n            <% var item = items[a];%>\n<div class="cover-pic">\n    <a href="<%=item.path%>?_f=index_acggame_<%=a %>" target="_blank"><img src="<%= item.focus%>" alt=""><span class="linear-box"><em class="linear-bg"></em><em class="linear-txt"><%= item.title %></em></span></a>\n</div>\n\n<%}%>'},function(e,t,i){var n=i(181),s=i(22),a=i(118);e.exports=Backbone.View.extend({events:{"mouseenter [data-role='nav-tab']":"tabChange","mouseleave .title-cut ul":"clear"},initialize:function(e){var t=this.$el,i=this;this.$tabs=t.find("[data-role='nav-tab']"),this.$mainNewsZone=t.find("[data-role='main-news']"),this.$mainFocus=t.find("[data-role='focus']");var a=i.$el.data("role").replace(/\-section$|\s+/gi,"");"business"==a&&this.$el.find("[data-role='nav-tab']").each(function(e,t){var o=$(t).attr("data-id");if(o){var r=($(t).data("tab-order"),i.$el.find("[data-role="+$(t).attr("data-rel")+"]"));new n({el:r,model:new s({scene:"CATEGORY",sceneId:o}),channel:a,index:$(t).data("tab-order")})}})},tabChange:function(e){var t=this;clearTimeout(this.timer),this.timer=setTimeout(function(){var i=$(e.currentTarget),n=(i.attr("data-type"),i.attr("data-sync"),t.$el.find("[data-role="+i.attr("data-rel")+"]")),s=t.$el.data("role").replace(/\-section$|\s+/gi,"");i.hasClass("cur")||(t.$tabs.removeClass("cur"),i.addClass("cur"),"auto"==s&&t.$el.trigger("auto:tab-changed",i.data("tab-order")-1),t.$el.find(".main-box").hide(),n.show().find("img[data-src]").each(function(){a._reveal(this),$(this).data("process",!0),a._purgeElements()}),setTimeout(function(){window.sohuSpm&&"function"==typeof window.sohuSpm.reScan&&window.sohuSpm.reScan()}))},300)},clear:function(){clearTimeout(this.timer)}})},function(e,t,i){var n=i(25),s=i(118);e.exports=Backbone.View.extend({template:_.template(i(182)),models:{},settings:{count:3},render:function(){this.$el.html(this.template(this.data))},fixNewsItem:function(e){e.forEach(function(e){e.path=n.news(e)})},initialize:function(e){this.settings=$.extend({},this.settings,e);var t=this;this.data={items:[],focus:[]};var i=e.model;t.data.index=e.index,t.data.channel=e.channel,i&&i.one("sync",function(e){t.fixNewsItem(e),e.forEach(function(e,i){e.focus&&t.data.focus.length<3?t.data.focus.push(e):t.data.items.push(e)}),t.data.items=t.data.items.slice(0,12),t.render(),s.addImage(t.$el[0])}),i.fetch({size:30})}})},function(e,t){e.exports='<div data-role=\'focus\' class=\'main-left left\' data-spm="<%=channel%>-pics<%=index+1%>">\n  <% var firstItem=focus.splice(0,1)%>\n    <div class="pic-focus">\n        <a href="<%= firstItem[0].path%>?_f=index_<%=channel%>focus_<%=index%>_0" title="<%= firstItem[0].title%>" target="_blank"><img data-src="<%= firstItem[0].focus.replace(\'w_600,h_300\',\'w_320,h_213\') %>" src="//statics.itc.cn/web/static/images/pic/preload.png" alt=""><span class="txt"><%= firstItem[0].title%></em></span></a>\n    </div>\n    <div class="pic-group clearfix">\n        <ul>\n            <%for (var i = 0; i < focus.length; i++) {%>\n                <%   var item = focus[i]; %>\n                    <li class="<%= i%2==1 ?\'end\' : \'\' %>">\n                        <a href="<%= item.path%>?_f=index_<%=channel%>focus_<%=index%>_<%= i%>" title= "<%= item.title%>" target="_blank"><img data-src="<%= item.focus.replace(\'w_600,h_300\',\'w_155,h_103\') %>"  src="//statics.itc.cn/web/static/images/pic/preload.png" alt=""><span class="txt"><%= item.title%></span></a>\n                    </li>\n                    <%}%>\n        </ul>\n    </div>\n\n</div>\n<div data-role=\'main-news\' class=\'main-right right\'>\n    <% var firstPart=items.slice(0,6)%>\n <div class="list16" data-spm="<%=channel%>-news<%=index+1%>1">\n                <ul>\n                <%for(var i=0,len=firstPart.length;i<len;i++){%>\n                    <% var item=firstPart[i]%>\n                    <li><a href="<%= item.path %>?_f=index_<%=channel%>news_<%=index%>_<%= i%>" target="_blank">\n                        <%if(i==0){%>\n                        <strong><%= item.title %></strong>\n                        <%}%>\n                        <%if(i>0){%>\n                             <%= item.title %>\n\n                        <%}%>\n\n                    </a></li>\n                <%}%>\n                </ul>\n            </div>\n            <div class="list16" data-spm="<%=channel%>-news<%=index+1%>2">\n                <ul>\n                    <% var secondPart=items.slice(6)%>\n                     <%for(var i=0,len=firstPart.length;i<len;i++){%>\n                    <% var item=secondPart[i]%>\n                    <li><a href="<%= item.path %>?_f=index_<%=channel%>news_<%=index%>_<%= i+6 %>" target="_blank">\n                        <%if(i==0){%>\n                        <strong><%= item.title %></strong>\n                        <%}%>\n                        <%if(i>0){%>\n                             <%= item.title %>\n\n                        <%}%>\n\n                    </a></li>\n                <%}%>\n                </ul>\n</div>\n\n\n\n</div>'
}, function(e, t, i) {
    var n = i(184),
        s = i(186),
        a = i(187),
        o = i(7),
        r = i(188);
    e.exports = Backbone.View.extend({
        template: _.template(i(189)),
        events: {
            "click .weather-week": "sogouQuery",
            "click .weather-con": "sogouQuery",
            "click [data-role='queryBtn']": "querySelected",
            "click [data-role='locBtn']": "showSelectBox",
            "click  [data-role='cancelBtn']": "cancelSelected",
            "mouseenter ": "showWeatherBox",
            mouseleave: "hideWeatherBox",
            "mouseenter [data-role='province-btn']": "showSelectList",
            "mouseenter [data-role='city-btn']": "showSelectList",
            "mouseleave [data-role='city-btn']": "hideSelectList",
            "mouseleave [data-role='province-btn']": "hideSelectList",
            "click [data-role='province-btn'] ul li": "changeProvince",
            "click [data-role='city-btn'] ul li": "changeCity"
        },
        data: {
            subs: {},
            current: {},
            cityList: null,
            locInfo: null
        },
        config: {
            sogouQueryUrl: "https://www.sogou.com/sogou?pid=sogou-wsse-6354461b879d3b12&ie=utf8&query="
        },
        locInfo: null,
        render: function() {
            this.$el.html(this.template(this.data))
        },
        initialize: function(e) {
            this.data.cityList = i(190), this.ip = window.sohu_user_ip || "123.126.70.238";
            var t = o.get("weather_location");
            t ? this.upDateWeather({
                city: t,
                manual: !1
            }) : this.upDateWeather({
                ip: this.ip,
                manual: !1
            })
        },
        upDateWeather: function(e) {
            var t = (e.ip, e.city, e.manual),
                o = this;
            this.weatherBox = $(".weather-box");
            var r = new n({
                    ip: e.ip,
                    city: e.city
                }),
                c = new s,
                l = new a;
            c.one("sync", function(e) {
                "object" == typeof e && (o.data.current = e && e.l, o.fixItem(), o.render(), o.$el.find("[data-role='locSelect']").html(_.template(i(191))(o.data)), t && $(".weather-box").show())
            }), l.one("sync", function(e) {
                "object" == typeof e && (o.data.airQuality = e && e.cn && e.cn["@aqi"], c.fetch({
                    location: encodeURIComponent(o.location)
                }))
            }), r.one("sync", function(e) {
                "object" == typeof e && (o.location = e && e.subitem && e.subitem.location, o.data.locInfo = e && e.subitem && e.subitem.key.split("_"), o.data.subs = e && e.subitem && e.subitem.subdisplay, l.fetch({
                    location: o.data.locInfo
                }))
            }), r.fetch()
        },
        sogouQuery: function(e) {
            return window.open(this.config.sogouQueryUrl + encodeURIComponent(this.data.locInfo[this.data.locInfo.length - 1] + "天气")), !1
        },
        fixItem: function() {
            this.data.current.desc = r.descMap[this.data.current.l5], this.data.current.windLevel = r.windLevelMap[this.data.current.l3], this.data.current.windDir = r.windDirMap[this.data.current.l4], this.data.current.airQuality = r.getAirLevel(this.data.airQuality), this.data.subs.day.forEach(function(e) {
                var t = r.desList.indexOf(e.daydescription) + 1;
                t = t < 10 ? "0" + t : t, e.picUrl = "//statics.itc.cn/web/static/images/pic/weather/pic" + t + ".png"
            })
        },
        loadSubOption: function(e) {
            for (var t = $(e.currentTarget).text().replace(/\s+/g), i = this.data.cityList[t].city, n = this.$el.find("[data-role='citySubSelect']"), s = "", a = 0, o = i.length; a < o; a++) s += "<option>" + i[a] + "</option>";
            n.html(s), n.find("option").eq(0).select()
        },
        querySelected: function() {
            var e = (this.$el.find("[data-role='province-btn']").find(".sele-con").text(), this.$el.find("[data-role='city-btn']").find(".sele-con").text());
            return $(".weather-box").show(), this.upDateWeather({
                city: e,
                manual: !0
            }), o.set("weather_location", e), !1
        },
        showSelectBox: function() {
            return $("[data-role='locSelect']").toggle(), !1
        },
        cancelSelected: function() {
            $("[data-role='locSelect']").hide()
        },
        showWeatherBox: function(e) {
            "change" == e.type && setTimeout(function() {
                $(".weather-box").show()
            }, 10), "mouseenter" == e.type && $(".weather-box").fadeIn(200)
        },
        hideWeatherBox: function() {
            $(".weather-box").fadeOut(200)
        },
        showSelectList: function(e) {
            $(e.currentTarget).find(".sele-option").show()
        },
        hideSelectList: function(e) {
            $(e.currentTarget).find(".sele-option").hide()
        },
        changeProvince: function(e) {
            this.$el.find("[data-role='province-box']").hide();
            var t = $(e.currentTarget).text();
            $(e.currentTarget).parents(".select").find(".sele-con").text(t);
            for (var i = $(e.currentTarget).attr("data-id"), n = this.data.cityList[i].city, s = this.$el.find("[data-role='city-btn']"), a = "", o = 0, r = n.length; o < r; o++) a += "<li>" + n[o] + "</li>";
            return s.find("ul").html(a), s.find(".sele-con").text(n[0]), !1
        },
        changeCity: function(e) {
            this.$el.find("[data-role='city-box']").hide();
            var t = $(e.currentTarget).text();
            return $(e.currentTarget).parents(".select").find(".sele-con").text(t), !1
        }
    })
}, function(e, t, i) {
    var n = i(4),
        s = i(185);
    e.exports = n.extend({
        init: function(e) {
            this.ip = e.ip, this.city = e.city, this.url = s.weatherHost
        },
        fetch: function() {
            var e, t = this;
            this.ip && (e = {
                ip: this.ip
            }), this.city && (e = {
                query: this.city + "天气"
            }), e = $.extend({}, {
                from: "中国移动",
                query: "天气",
                reqtype: "json",
                type: 0
            }, e), n.prototype.fetch.call(this, {
                data: e,
                success: function(e) {
                    "string" == typeof e && "" != e && (e = JSON.parse(e)), "object" == typeof e && t.trigger("sync", e[0] && e[0].item && e[0].item.display)
                },
                error: function() {
                    t.trigger("error", arguments)
                }
            })
        }
    })
}, function(e, t) {
    e.exports = {
        weatherHost: "http://api.open.sogou.com/apiopen/openapi/vrinfo"
    }
}, function(e, t, i) {
    var n = i(4);
    e.exports = n.extend({
        init: function() {},
        fetch: function(e) {
            var t = this;
            this.location = e.location, this.url = "//vi.www.sogou.com/?op=8&query=" + this.location, n.prototype.fetch.call(this, {
                success: function(e) {
                    console.log("location hint"), t.trigger("sync", e)
                }
            })
        }
    })
}, function(e, t, i) {
    var n = i(4),
        s = i(185);
    e.exports = n.extend({
        init: function() {
            this.url = s.weatherHost
        },
        fetch: function(e) {
            var t = this,
                i = e && e.location,
                s = i && i[1],
                a = {
                    from: "中国移动",
                    query: s + "空气质量",
                    reqtype: "json",
                    type: 0
                };
            n.prototype.fetch.call(this, {
                data: a,
                success: function(e) {
                    "string" == typeof e && "" != e && (e = JSON.parse(e)), "object" == typeof e ? t.trigger("sync", e && e[0] && e[0].item && e[0].item.display) : t.trigger("error", arguments)
                },
                error: function() {
                    t.trigger("error", arguments)
                }
            })
        }
    })
}, function(e, t) {
    e.exports = {
        desList: ["晴", "多云", "阴", "阵雨", "雷阵雨", "雷阵雨伴有冰雹", "雨夹雪", "小雨", "中雨", "大雨", "暴雨", "大暴雨", "特大暴雨", "阵雪", "小雪", "中雪", "大雪", "暴雪", "雾", "冻雨", "沙尘暴", "小到中雨", "中到大雨", "大到暴雨", "暴雨到大暴雨", "大暴雨到特大暴雨", "小到中雪", "中到大雪", "大到暴雪", "浮尘", "扬沙", "强沙尘暴", "霾", "无", "浓雾", "强浓雾", "中度霾", "重度霾", "严重霾", "大雾", "特强浓雾"],
        windDirMap: {
            0: "无风",
            1: "东北风",
            2: "东风",
            3: "东南风",
            4: "南风",
            5: "西南风",
            6: "西风",
            7: "西北风",
            8: "北风",
            9: "旋转风"
        },
        windLevelMap: {
            0: "微风",
            1: "3-4级",
            2: "4-5级",
            3: "5-6级",
            4: "6-7级",
            5: "7-8级",
            6: "8-9级",
            7: "9-10级",
            8: "10-11级",
            9: "11-12级"
        },
        descMap: {
            "00": "晴",
            "01": "多云",
            "02": "阴",
            "03": "阵雨",
            "04": "雷阵雨",
            "05": "雷阵雨伴有冰雹",
            "06": "雨夹雪",
            "07": "小雨",
            "08": "中雨",
            "09": "大雨",
            10: "暴雨",
            11: "大暴雨",
            12: "特大暴雨",
            13: "阵雪",
            14: "小雪",
            15: "中雪",
            16: "大雪",
            17: "暴雪",
            18: "雾",
            19: "冻雨",
            20: "沙尘暴",
            21: "小到中雨",
            22: "中到大雨",
            23: "大到暴雨",
            24: "暴雨到大暴雨",
            25: "大暴雨到特大暴雨",
            26: "小到中雪",
            27: "中到大雪",
            28: "大到暴雪",
            29: "浮尘",
            30: "扬沙",
            31: "强沙尘暴",
            53: "霾",
            99: "无",
            32: "浓雾",
            49: "强浓雾",
            54: "中度霾",
            55: "重度霾",
            56: "严重霾",
            57: "大雾",
            58: "特强浓雾"
        },
        getAirLevel: function(e) {
            return e <= 50 ? {
                cls: "good",
                qualityCn: "优"
            } : 50 < e && e <= 100 ? {
                cls: "moderate",
                qualityCn: "良"
            } : 101 < e && e <= 150 ? {
                cls: "usg",
                qualityCn: "轻度污染"
            } : 150 < e && e <= 200 ? {
                cls: "unhealthy",
                qualityCn: "中度污染"
            } : 201 < e && e <= 300 ? {
                cls: "very-unhealthy",
                qualityCn: "重度污染"
            } : e > 300 ? {
                cls: "hazardous",
                qualityCn: "严重污染"
            } : void 0
        }
    }
}, function(e, t) {
    e.exports = '    <em class="icon location-icon"></em>   \n   <em class="weather-city"><%=locInfo[1]%></em><em class="weather-status"><%= subs.day[1].daydescription %></em><em class="weather-num"><%= subs.day[1].low %>°/<%=subs.day[1].high %>°</em>\n   <em class="weather-drop">\n      <i class="icon cor"></i>\n      <div class="weather-box">\n         <h4><a href="javascript:void(0)"  class="weather-location" data-role="locBtn"><em class="icon location-icon"></em><em class="location-city"><%=locInfo[1]%></em></a><a href="javascript:void(0)" target="" class="weather-week">未来七天天气</a></h4>\n         <div class="weather-con">\n            <div class="weather-info">\n               <div class="degree"><em class="num"><%= current.l1 %></em>°C</div>\n               <div class="info">\n                  <p><%= current.desc %></p>\n                  <p><em class="quality <%=current.airQuality.cls %>"><%=current.airQuality.qualityCn %>  <%= airQuality %></em></p>\n               </div>\n            </div>\n            <div class="weather-thr clear">\n               <ul>\n                  <li title="<%= subs.day[2].description %>"><span class="tt">明天</span><span class="img"><img src="<%= subs.day[2].picUrl %>" alt="" ></span>\n                     <span class="num"><%= subs.day[2].low %>°/<%=subs.day[2].high %>°</span>\n                  </li>\n                  <li title="<%= subs.day[3].description %>"><span class="tt">后天</span><span class="img"><img src="<%= subs.day[3].picUrl %>" alt=""></span><span class="num"><%= subs.day[3].low %>°/<%=subs.day[3].high %>°</span></li>\n                  <li title="<%= subs.day[4].description %>"><span class="tt"><%= subs.day[4].week %></span><span class="img"><img src="<%= subs.day[4].picUrl %>" alt=""></span><span class="num"><%= subs.day[4].low %>°/<%=subs.day[4].high %>°</span></li>\n               </ul>\n            </div>\n         </div>\n         <div class="weather-area" data-role="locSelect" style="display: none">\n          \n         </div>\n      </div>\n   </em>'
}, function(e, t) {
    e.exports = [{
        province: "北京",
        city: ["北京"]
    }, {
        province: "天津",
        city: ["天津"]
    }, {
        province: "上海",
        city: ["上海"]
    }, {
        province: "重庆",
        city: ["重庆"]
    }, {
        province: "河北",
        city: ["石家庄", "唐山", "秦皇岛", "邯郸", "邢台", "保定", "张家口", "承德", "沧州", "廊坊", "衡水"]
    }, {
        province: "山西",
        city: ["太原", "大同", "阳泉", "长治", "晋城", "朔州", "晋中", "运城", "忻州", "临汾", "吕梁"]
    }, {
        province: "内蒙古",
        city: ["呼和浩特", "包头", "乌海", "赤峰", "通辽", "鄂尔多斯", "呼伦贝尔", "巴彦淖尔", "乌兰察布", "兴安盟", "锡林郭勒", "阿拉善盟"]
    }, {
        province: "辽宁",
        city: ["沈阳", "大连", "鞍山", "抚顺", "本溪", "丹东", "锦州", "营口", "阜新", "辽阳", "盘锦", "铁岭", "朝阳", "葫芦岛"]
    }, {
        province: "黑龙江",
        city: ["哈尔滨", "齐齐哈尔", "鸡西", "鹤岗", "双鸭山", "大庆", "伊春", "佳木斯", "七台河", "牡丹江", "黑河", "绥化", "大兴安岭"]
    }, {
        province: "江苏",
        city: ["南京", "无锡", "徐州", "常州", "苏州", "南通", "连云港", "淮安", "盐城", "扬州", "镇江", "泰州", "宿迁"]
    }, {
        province: "浙江",
        city: ["杭州", "宁波", "温州", "嘉兴", "湖州", "绍兴", "金华", "衢州", "舟山", "台州", "丽水"]
    }, {
        province: "安徽",
        city: ["合肥", "芜湖", "蚌埠", "淮南", "马鞍山", "淮北", "铜陵", "安庆", "黄山", "滁州", "阜阳", "宿州", "六安", "亳州", "池州", "宣城"]
    }, {
        province: "福建",
        city: ["福州", "厦门", "莆田", "三明", "泉州", "漳州", "南平", "龙岩", "宁德"]
    }, {
        province: "江西",
        city: ["南昌", "景德镇", "萍乡", "九江", "新余", "鹰潭", "赣州", "吉安", "宜春", "抚州", "上饶"]
    }, {
        province: "山东",
        city: ["济南", "青岛", "淄博", "枣庄", "东营", "烟台", "潍坊", "济宁", "泰安", "威海", "日照", "莱芜", "临沂", "德州", "聊城", "滨州", "菏泽"]
    }, {
        province: "河南",
        city: ["郑州", "开封", "洛阳", "平顶山", "安阳", "鹤壁", "新乡", "焦作", "濮阳", "许昌", "漯河", "三门峡", "南阳", "商丘", "信阳", "周口", "驻马店"]
    }, {
        province: "湖北",
        city: ["武汉", "黄石", "十堰", "宜昌", "襄阳", "鄂州", "荆门", "孝感", "荆州", "黄冈", "咸宁", "随州", "恩施"]
    }, {
        province: "湖南",
        city: ["长沙", "株洲", "湘潭", "衡阳", "邵阳", "岳阳", "常德", "张家界", "益阳", "郴州", "永州", "怀化", "娄底", "湘西"]
    }, {
        province: "广东",
        city: ["广州", "韶关", "深圳", "珠海", "汕头", "佛山", "江门", "湛江", "茂名", "肇庆", "惠州", "梅州", "汕尾", "河源", "阳江", "清远", "东莞", "中山", "潮州", "揭阳", "云浮"]
    }, {
        province: "广西",
        city: ["南宁", "柳州", "桂林", "梧州", "北海", "防城港", "钦州", "贵港", "玉林", "百色", "贺州", "河池", "来宾", "崇左"]
    }, {
        province: "海南",
        city: ["海口", "三亚"]
    }, {
        province: "四川",
        city: ["成都", "自贡", "攀枝花", "泸州", "德阳", "绵阳", "广元", "遂宁", "内江", "乐山", "南充", "眉山", "宜宾", "广安", "达州", "雅安", "巴中", "资阳", "阿坝", "甘孜", "凉山"]
    }, {
        province: "贵州",
        city: ["贵阳", "六盘水", "遵义", "安顺", "毕节", "铜仁", "黔西", "黔东", "黔南"]
    }, {
        province: "云南",
        city: ["昆明", "曲靖", "玉溪", "保山", "昭通", "丽江", "普洱", "临沧", "楚雄", "红河", "文山", "西双版纳", "大理", "德宏", "怒江", "迪庆"]
    }, {
        province: "西藏",
        city: ["拉萨", "昌都", "山南", "日喀则", "那曲", "阿里", "林芝"]
    }, {
        province: "陕西",
        city: ["西安", "铜川", "宝鸡", "咸阳", "渭南", "延安", "汉中", "榆林", "安康", "商洛"]
    }, {
        province: "甘肃",
        city: ["兰州", "嘉峪关", "金昌", "白银", "天水", "武威", "张掖", "平凉", "酒泉", "庆阳", "定西", "陇南", "临夏", "甘南"]
    }, {
        province: "青海",
        city: ["西宁", "海东", "海北", "黄南", "海南", "果洛", "玉树", "海西"]
    }, {
        province: "宁夏",
        city: ["银川", "石嘴山", "吴忠", "固原", "中卫"]
    }, {
        province: "新疆",
        city: ["乌鲁木齐", "克拉玛依", "吐鲁番", "哈密", "昌吉", "博尔塔拉", "巴音郭楞", "阿克苏", "喀什", "和田", "伊犁", "塔城", "阿勒泰"]
    }]
}, function(e, t) {
    e.exports = '<% var province=locInfo[0] %>\n    <% var city=locInfo[1]%>\n        <% var provinceIndex=0 %>\n            <div class="weather-area-sel">\n                <div class="select" data-role=\'province-btn\'>\n                    <span class="sele-con" ><%=province%></span><em class="icon sele-icon"></em>\n                    <div class="sele-option" data-role=\'province-box\'>\n                                        <ul>\n                        <% for(var j=0;j<cityList.length;j++) {%>\n                            <% if(province==cityList[j].province){%>\n                                <% provinceIndex=j;%>\n                                    <%} %>\n                                            <li data-id="<%= j%>" ><%= cityList[j].province %></li>\n                                        \n                             <%}%>\n                                        </ul>\n                    </div>\n                </div>\n                <div class="select" data-role=\'city-btn\'>\n                    <span class="sele-con"><%=city%></span><em class="icon sele-icon"></em>\n                    <div class="sele-option" data-role=\'city-box\'>\n                        <ul>\n                        <% for(var a=0;a<cityList[provinceIndex].city.length;a++){%>\n                             <% var c=cityList[provinceIndex].city[a]%>\n                            <li><%= c %></li>\n                        <%}%>  \n                        </ul>\n\n                    </div>\n                </div>\n            <div class="weather-area-btn"><a href="javascript:void(0)" class="weather-ok" data-role=\'queryBtn\'>确定</a><a href="javascript:void(0)" class="weather-cancel" data-role="cancelBtn">取消</a></div>\n            </div>'},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(){},fetch:function(e){var t=this;this.list=[];for(var i={},s=0;s<e.list.length;s++)i[e.list[s]]||(this.list.push(e.list[s]),i[e.list[s]]=1);this.url="authors/pv";var a={authorIds:t.list.join(",")};n.prototype.fetch.call(this,{data:a,url:this.url,success:function(e){t.trigger("sync",e)},error:function(e){t.trigger("error",e)}})}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(){},fetch:function(e){that=this,this.url="//v2.sohu.com/integration-api/batch/web",n.prototype.fetch.call(this,{data:e.params,url:this.url,method:e.method||"POST",dataType:"json",contentType:"application/json;charset=utf-8",success:function(e){that.trigger("sync",e)},error:function(e){that.trigger("error",e)}})}})},function(e,t,i){var n=i(195),s=i(192),a=i(26),o=i(16),r=i(18);e.exports=Backbone.View.extend({template:_.template(i(196)),data:{items:[]},index:0,store:null,events:{"click [data-role='switch-writer']":"refresh"},render:function(e){this.blocksEl.html(this.template(e))},refreshable:!1,setLoading:function(e){e?(this.blocksEl.hide(),this.loadingEl.show()):(this.blocksEl.show(),this.loadingEl.hide())},initialize:function(e){var t=new n,i=new s;this.loadingEl=this.$el.find(".loading"),this.blocksEl=this.$el.find("[data-role='blocks']");var c,l=this,d=[],h=[];t.on("sync",function(e){e.authors.forEach(function(e,t){e.articles[0].title=r.subString(e.articles[0].title,27),e.index=t}),l.store=e.authors,l.store.forEach(function(e){e.articles[0]&&(d.push(e.articles[0].authorId),e.articles[0].cmsId?h.push(e.articles[0].cmsId+"|mp_"+e.articles[0].id):h.push("mp_"+e.articles[0].id+"|mp_"+e.articles[0].id))}),c=new a({news_ids:h}),l.refreshable=!0,this.trigger("ready")}),t.fetch(),t.on("ready",function(){i.on("sync",function(e){for(var t in l.store)if(l.store.hasOwnProperty(t)&&l.store[t].articles.length>0){var i=l.store[t].articles[0].authorId;l.store[t].readingCount=new o(e[i]).format()}}),i.fetch({list:d}),c.on("sync",function(e){if(e&&e.result){l.store.forEach(function(t){var i=t.articles[0].cmsId?t.articles[0].cmsId:"mp_"+t.articles[0].id,n=e.result;n[i].parts;n[i].parts-0==0||isNaN(n[i].parts-0)?t.commentCount="":t.commentCount=new o(n[i].parts).format()}),$("[data-role='comment-count']").each(function(e,t){$(this).html(l.store[e].commentCount+" 评论")});var t=l.store.splice(0,4);l.store=l.store.concat(t)}}),c.fetch()})},refresh:function(){if(this.refreshable&&!this.loading){var e=this;this.loading=!0,this.setLoading(!0),setTimeout(function(){e.index+=4;var t=(e.store.length,e.store.splice(0,4));e.store=e.store.concat(t),e.render({items:t}),e.setLoading(!1),e.loading=!1},200)}},fixCount:function(){var e=$("[data-role='author-reading-count']"),t=[],i=new s;e.each(function(e){t.push($(this).attr("data-id")),$(this).attr("data-role","watting-author-reading-count")}),i.on("sync",function(e){$('[data-role="watting-author-reading-count"]').each(function(t){var i=$(this).attr("data-id");$(this).html(new o(e[i]).format())})}),i.fetch({list:t})}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.url="headLines/home/hotAuthors"},fetch:function(e){var t=this,i={pageSize:20};n.prototype.fetch.call(this,{data:i,success:function(e,i){try{t.trigger("sync",e)}catch(n){t.trigger("error")}}})}})},function(e,t){e.exports='          <%for(var i=0;i< items.length ;i++){\n    var item =items[i];\n    %>\n    <div class="block">\n        <div class="pic-txt">\n            <div class="pic">\n                <a href="<%= item.personalPage%>" target="_blank"><img src="<%= item.logo%>" alt=""></a>\n            </div>\n            <p><a href="<%= item.personalPage%>" target="_blank"><%= item.name%></a><em class="num">阅读数 <%= item.readingCount%></em></p>\n\n        </div>\n        <h4><a href="//www.sohu.com<%= item.articles[0].relativeUrl%>?_f=index_recom_<%= item.index%>" target="_blank"><%= item.articles[0].title%></a>\n        <a href="//www.sohu.com/a/<%= item.articles[0].id%>_<%= item.articles[0].authorId%>?_f=index_recom_<%= item.index%>#comment_area" target="_blank"> <em class="num" data-role=\'comment-count\'  ><%= item.commentCount%> 评论</a></em></h4>\n\n    </div>\n     <%}%>\n\n'},function(e,t,i){i(16),i(18);e.exports=Backbone.View.extend({template:_.template(i(198)),data:{items:[],mouseIndex:0},index:0,store:null,refreshable:!1,loading:!1,pageSize:6,maxPage:3,events:{"click [data-role='switch-choice']":"refresh","mouseover [data-role='block']":"mouseover"},render:function(e){this.blocksEl.html(this.template(e))},initialize:function(e){this.loadingEl=this.$el.find(".loading"),this.blocksEl=this.$el.find("[data-role='blocks']"),this.blocksContentEl=this.$el.find("[data-role='blocks-content']"),this.switchButton=this.$el.find("[data-role='switch-choice']"),this.refreshable=!0},setLoading:function(e){e?(this.blocksEl.hide(),this.loadingEl.show()):(this.loadingEl.hide(),this.blocksEl.show())},refresh:function(){if(this.refreshable&&!this.loading){var e=this;this.loading=!0,console.log("refresh"),this.setLoading(!0),setTimeout(function(){e.index=e.index==e.maxPage-1?0:e.index+1,e.blocksEl.find(".box-now").removeClass("box-now");for(var t=0;t<3;t++)t==e.index?(e.blocksContentEl[t].style.display="block",$(e.blocksContentEl[t]).find(".box:first").addClass("box-now")):e.blocksContentEl[t].style.display="none";e.setLoading(!1),e.loading=!1},200)}},mouseover:function(e){this.blocksEl.find(".box-now").removeClass("box-now"),$(e.currentTarget).addClass("box-now")}})},function(e,t){e.exports='<% for(var i=0,len=items.length;i<len;i++){\n    var item =items[i]; \n%>\n    <div class="box <%= i==0?\'box-now\':\'\' %>" data-role="block">\n        <a href="<%= item.url + \'?_f=index_funnews_\' + item.index %>" target="_blank">\n            <h4><%= item.title%></h4>\n            <div class="pic-text clearfix" data-role="block-content">\n                <div class="pic">\n                    <img data-src="<%= item.picUrl%>" alt="" src="<%= item.picUrl%>" data-processed="true">\n                </div>\n                <p><%= item.description%></p>\n            </div>\n        </a>\n    </div>\n\n<% } %>\n'
}, function(e, t, i) {
    function n(e) {
        var t = {
            $el: $(document.body)
        };
        this.settings = $.extend({}, t, e)
    }
    var s = i(200),
        a = i(63);
    n.prototype = {
        constructor: n,
        upDateAdMap: function(e) {
            this.adMap = $.extend({}, this.adMap, e.adMap)
        },
        triggerPv: function(e) {
            s.sendPv({
                city_id: this.adMap.city_id,
                area_code: this.adMap.area_code,
                city_name: encodeURIComponent(this.adMap.city_name)
            })
        },
        clickMonitor: function(e) {
            console.log("执行");
            var t = this.adMap;
            this.settings.$el.on("click", "[data-adposid]", function(e) {
                $(e.currentTarget).attr("data-adposid") && s.reportClick(t[$(e.currentTarget).attr("data-adposid")])
            })
        },
        evMonitor: function() {
            var e, t = {},
                i = [],
                n = this;
            $(window).on("scroll", _.throttle(function() {
                for (n.settings.$el.find("[data-adposid]").each(function() {
                        var e = $(this).attr("data-adPosId");
                        t[e] || (a($(this)) || a($(this).children())) && (i.push(n.adMap[e]), t[e] = 1)
                    }); i.length > 2;) clearTimeout(e), s.sendEv(i.splice(0, 3));
                e = setTimeout(function() {
                    i.length > 0 && s.sendEv(i), i = []
                }, 1e4)
            }, 200))
        }
    }, e.exports = new n
}, function(e, t, i) {
    function n() {
        this.host = "//adv-sv-stat.focus.cn/adv/producer/sendComplexLog?", this.singleHost = "//adv-sv-stat.focus.cn/adv/producer/sendLog?", this.params = {
            domain: encodeURIComponent(window.location.host),
            source_agent: 3,
            referer_url: encodeURIComponent(window.location.href),
            user_suv: s.get("SUV")
        }
    }
    var s = i(7);
    n.prototype = {
        constructor: n,
        sendPv: function(e) {
            this._doSingleReq(2, e)
        },
        reportClick: function(e) {
            this._doSingleReq(0, {
                demander_id: e.demander_id || -1,
                plan_id: e.plan_id,
                order_id: e.order_id,
                idea_id: e.idea_id,
                estate_id: e.estate_id || -1,
                city_id: e.city_id,
                city_name: encodeURIComponent(e.city_name),
                area_code: e.area_code,
                ad_pos_id: e.ad_pos_id
            })
        },
        sendEv: function(e) {
            var t = [];
            e.forEach(function(e) {
                e != undefined && t.push({
                    demander_id: e.demander_id,
                    plan_id: e.plan_id,
                    order_id: e.order_id,
                    idea_id: e.idea_id,
                    estate_id: e.estate_id || -1,
                    city_id: e.city_id,
                    city_name: encodeURIComponent(e.city_name),
                    area_code: e.area_code,
                    ad_pos_id: e.ad_pos_id
                })
            }), t.length > 5 ? this._doRequest(1, t.splice(0, 5)) : this._doRequest(1, t)
        },
        _param: function(e) {
            var t = [];
            for (var i in e) t.push(i + "=" + e[i]);
            return t.join("&")
        },
        _doRequest: function(e, t) {
            var i = $.extend({}, this.params, {
                type: e,
                ads: encodeURIComponent(JSON.stringify(t))
            });
            $.getScript(this.host + this._param(i))
        },
        _doSingleReq: function(e, t) {
            var i = $.extend({
                type: e
            }, t, this.params);
            $.getScript(this.singleHost + this._param(i))
        }
    }, e.exports = new n
}, function(e, t, i) {
    var n = i(25),
        s = (i(18), i(26)),
        a = i(202),
        o = i(16),
        r = i(18);
    e.exports = Backbone.View.extend({
        template: _.template(i(203)),
        template_index: _.template(i(204)),
        data: {
            items: [],
            title: ""
        },
        currentPage: 1,
        lastPage: 0,
        translateX: 0,
        translateY: 0,
        startTranslateX: 0,
        startTranslateY: 0,
        delta: 0,
        dragging: !1,
        startPos: null,
        transitioning: !1,
        slideEls: [],
        totalPage: 0,
        interval: null,
        timer: 5e3,
        events: {
            "touchstart .hot-news-scroll": "_onTouchStart",
            "mouseover [data-role='hot-news-bullet']": "go_page",
            "transitionend .hot-news-scroll-cont": "_onTransitionEnd",
            "webkitTransitionend .hot-news-scroll-cont": "_onTransitionEnd",
            mouseenter: "freeze",
            mouseleave: "start"
        },
        model: null,
        fixed_items: function() {
            this.data.items.length > 0 && (this.data.firstImage = this.data.items[0].picUrl || this.data.items[0].images[0]), this.data.items.forEach(function(e, t) {
                e.link = n.news(e), e.cmsId = e.cmsId ? e.cmsId : e.id, e.picUrl = e.picUrl && e.picUrl.replace(/(cdn\.sohucs\.com)(.*)(images\/)/g, "$1/c_fill,w_90,h_60,g_faces,q_70/$3")
            })
        },
        initialize: function(e) {
            var t = this;
            this.type = e.type, this.model = e.model, this.model.on("sync", function(e) {
                e.forEach(function(e, i) {
                    var n = "index" == t.type ? 28 : i ? 27 : 24;
                    e.title = r.subString(e.title, n)
                }), t.data.items = e, "index" == t.type ? (t.data.pageSize = parseInt(e.length / 5), t.data.items = e, t.data.isIndex2 = !1, t.render_index()) : "index2" == t.type ? (t.data.isIndex2 = !0, t.render_index()) : t.render(), "index" == t.type && t.data.pageSize > 1 && (t.ready(), this._onTouchMove = function(e) {
                    t.onTouchMove.apply(t, arguments), e.preventDefault(), e.stopPropagation()
                }, this._onTouchEnd = function(e) {
                    t.onTouchEnd.apply(t, arguments), e.preventDefault(), e.stopPropagation()
                })
            }), this.model.fetch()
        },
        render: function() {
            this.fixed_items(), this.$el.html(this.template(this.data)), this.read_comment_count()
        },
        render_index: function() {
            this.fixed_items(), this.$el.html(this.template_index(this.data)), this.read_count(), setTimeout(function() {
                window.sohuSpm && "function" == typeof window.sohuSpm.domDidChange && window.sohuSpm.domDidChange()
            })
        },
        read_comment_count: function() {
            var e = [],
                t = this;
            this.$el.find('[data-role="comment-count"]').each(function() {
                var t = $(this).data("cmsid") + "|mp_" + $(this).data("id");
                $(this).attr("data-role", "waiting-comment-count"), e.push(t)
            });
            var i = new s({
                news_ids: e
            });
            i.one("sync", function(e) {
                for (var i in e.result) {
                    var n = new o(e.result[i].parts).format();
                    0 == parseInt(n) && (n = "&nbsp;"), i.indexOf("mp_") > -1 ? $(t.$el).find("[data-role='waiting-comment-count'][data-id='" + i.replace("mp_", "") + "']").html(n).attr("data-role", "") : $(t.$el).find("[data-role='waiting-comment-count'][data-cmsid='" + i + "']").html(n).attr("data-role", "")
                }
            }), i.fetch()
        },
        read_count: function() {
            var e = [],
                t = this;
            this.$el.find('[data-role="comment-count"]').each(function() {
                var t = $(this).data("id");
                $(this).attr("data-role", "waiting-article-pv"), e.push(t)
            });
            var i = new a;
            i.one("sync", function(e) {
                for (var i in e) {
                    var n = new o(e[i]).format();
                    0 == parseInt(n) && (n = "&nbsp;"), $(t.$el).find("[data-role='waiting-article-pv'][data-id='" + i + "']").html(n).attr("data-role", "")
                }
            }), i.fetch({
                list: e
            })
        },
        ready: function() {
            if (this.$els = this.$el.find(".hot-news-scroll-cont"), this.slideEls = this.$els[0] && this.$els[0].children, this.slideEls) {
                this.totalPage = this.slideEls.length || 0, $(this.$els).append($(this.slideEls[0]).clone().removeAttr("data-focus-ev")), $(this.$els).prepend($(this.slideEls[this.slideEls.length - 2]).clone().removeAttr("data-focus-ev")), this.setPage(0);
                var e = this;
                setTimeout(function() {
                    e.trigger("ready")
                }, 10), this.start()
            }
        },
        reset: function() {
            $(this.$els).html(""), this.slideEls = this.$els[0].children, this.totalPage = this.slideEls.length, $(this.$els).append($(this.slideEls[0]).clone()), $(this.$els).prepend($(this.slideEls[this.slideEls.length - 2]).clone()), this.setPage(0)
        },
        start: function() {
            var e = this;
            e.transitioning = !1, this.interval = setInterval(function() {
                e.next()
            }, 7e3)
        },
        next: function(e) {
            var t = this;
            this.transitioning || (this.currentPage++, this.setPage(this.currentPage), e && (clearInterval(this.interval), clearTimeout(this.timer), this.timer = setTimeout(function() {
                t.start()
            }, 6e4)))
        },
        prev: function(e) {
            var t = this;
            this.transitioning || (this.currentPage--, this.setPage(this.currentPage), e && (clearInterval(this.interval), clearTimeout(this.timer), this.timer = setTimeout(function() {
                t.start()
            }, 6e4)))
        },
        setPage: function(e) {
            var t;
            if (this.lastPage = this.currentPage, this.currentPage = e, $(this.slideEls[this.currentPage + 1]).trigger("focus-in-view"), this.isHorizontal() ? ("clientWidth", t = "translateX") : ("clientHeight", t = "translateY"), this.isSupportTransform()) {
                this[t] = 0 - $(this.slideEls[0]).width() * (e + 1);
                var i = this.$el.find(".hot-news-scroll-cont");
                i.css("transform", "translate3d(" + this.translateX + "px," + this.translateY + "px, 0)"), this.$el.find(".scroll-auto li.cur").removeClass("cur"), this.$el.find(".scroll-auto li:eq(" + e + ")").addClass("cur"), this._onTransitionStart()
            } else {
                var n = this;
                this[t] = 0 - $(this.slideEls[0]).width() * (e + 1);
                var i = this.$el.find(".hot-news-scroll-cont");
                i.animate({
                    left: n.translateX + "px"
                }, 1e3, function() {
                    if (n.currentPage < 0) {
                        n.currentPage = n.totalPage - 1;
                        var e = 0 - n.slideEls[0].clientWidth * n.totalPage
                    }
                    if (n.currentPage > n.totalPage - 1) {
                        n.currentPage = 0;
                        var e = 0 - n.slideEls[0].clientWidth
                    }
                    i.css({
                        left: e
                    }), n.transitioning = !1, n.$el.find(".scroll-auto li.cur").removeClass("cur"), n.$el.find(".scroll-auto li:eq(" + n.currentPage + ")").addClass("cur")
                })
            }
        },
        go_page: function(e) {
            this.setPage($(e.currentTarget).data("id"))
        },
        setPageNoAnimate: function(e) {
            var t = $(this.$els);
            t.css("transition", "none"), this.setPage(e);
            var i = this;
            setTimeout(function() {
                t.css("transition", ""), i.transitioning = !1
            }, 100)
        },
        isHorizontal: function() {
            return !0
        },
        isVertical: function() {
            return !1
        },
        isSupportTransform: function() {
            return "transform" in document.createElement("div").style
        },
        _onTouchStart: function(e) {
            this.transitioning || (this.startPos = this._getTouchPos(e.originalEvent), this.delta = 0, this.startTranslateX = this.translateX, this.startTranslateY = this.translateY, this.startTime = (new Date).getTime(), this.dragging = !0, document.addEventListener("touchmove", this._onTouchMove, !1), document.addEventListener("touchend", this._onTouchEnd, !1), document.addEventListener("mousemove", this._onTouchMove, !1), document.addEventListener("mouseup", this._onTouchEnd, !1))
        },
        onTouchMove: function(e) {
            this.delta = this._getTouchPos(e) - this.startPos, e.preventDefault(), e.stopPropagation(), this.isHorizontal() ? (this.translateX = this.startTranslateX + this.delta, this.trigger("slider-move", this.translateX)) : (this.translateY = this.startTranslateY + this.delta, this.trigger("slider-move", this.translateY)), (this.isVertical() || this.isHorizontal() && Math.abs(this.delta) > 0) && e.preventDefault()
        },
        onTouchEnd: function(e) {
            this.dragging = !1;
            var t = (new Date).getTime() - this.startTime < 1e3;
            this.delta < -100 || t && this.delta < -15 ? this.next(e) : this.delta > 100 || t && this.delta > 15 ? this.prev(e) : this._revert(), e.stopPropagation(), document.removeEventListener("touchmove", this._onTouchMove), document.removeEventListener("touchend", this._onTouchEnd), document.removeEventListener("mousemove", this._onTouchMove), document.removeEventListener("mouseup", this._onTouchEnd)
        },
        _revert: function() {
            this.setPage(this.currentPage)
        },
        _getTouchPos: function(e) {
            var t = this.isHorizontal() ? "pageX" : "pageY";
            return e.changedTouches ? e.changedTouches[0][t] : e[t]
        },
        _onTransitionStart: function() {
            this.transitioning = !0, this._isPageChanged() ? this.trigger("slide-change-start", this.currentPage, this) : this.trigger("slide-revert-start", this.currentPage, this)
        },
        _onTransitionEnd: function() {
            this.currentPage < 0 ? (this.transitioning = !0, this.setPageNoAnimate(this.totalPage - 1)) : this.currentPage > this.totalPage - 1 ? (this.transitioning = !0, this.setPageNoAnimate(0)) : this.transitioning = !1, this.trigger("focus-change", this.currentPage, this)
        },
        _isPageChanged: function() {
            return this.lastPage !== this.currentPage
        },
        freeze: function() {
            clearInterval(this.interval), this.interval = null
        }
    })
}, function(e, t, i) {
    var n = i(4);
    e.exports = n.extend({
        init: function() {},
        fetch: function(e) {
            var t = this;
            this.list = [];
            for (var i = {}, s = 0; s < e.list.length; s++) i[e.list[s]] || (this.list.push(e.list[s]), i[e.list[s]] = 1);
            console.log(this.list), this.url = "//v2.sohu.com/public-api/articles/pv?";
            var a = {
                articleIds: t.list.join(",")
            };
            n.prototype.fetch.call(this, {
                data: a,
                url: this.url,
                success: function(e) {
                    t.trigger("sync", e)
                },
                error: function(e) {
                    t.trigger("error", e)
                }
            })
        }
    })
}, function(e, t) {
    e.exports = '\n    <div class="titleR"><span class="tt">24小时热文</span></div>\n    <%if(firstImage){%>\n        <div class="img-text clearfix">\n            <div class="pic"><a href="<%=items[0].link%>" target="_blank"><img alt="" src="<%=firstImage%>"><em class="sn">1</em></a></div>\n            <h4>\n                <a href="<%=items[0].link%>?_f=index_hotnews_0" target="_blank">\n                    <%=items[0].title%>\n                </a>\n            </h4>\n            <p><a href="<%=items[0].link%>?_f=index_hotnews_0#comment_area" target="_blank"><em data-role="comment-count" data-id="<%=items[0].cmsId%>"></em> 评论</a></p>\n        </div>\n        <%}%>\n            <div class="sn-list">\n                <ul>\n                    <% var b=firstImage?1:0%>\n                        <% for( var a = b ; a < items.length ; a++) { %>\n                            <%\n                         var item = items[a];\n                        %>\n                                <li><em class="sn"><%= a+1 %></em>\n                                    <a href="<%=item.link%>?_f=index_hotnews_<%= a%>" target="_blank">\n                                    <%=item.title%>\n                                    </a><em class="com-num"><a href="<%=item.link%>?_f=index_hotnews_<%= a%>#comment_area" target="_blank"><em data-cmsid="<%=item.cmsId || \'mp_\'+ item.id%>" data-role="comment-count" data-id="<%=item.id%>"></em> 评论</a></em></li>\n\n                                <%}%>\n                </ul>\n            </div>'},function(e,t){e.exports='\n<div class="titleR"><span class="tt">24小时热文</span></div>\n<%if(isIndex2){%>\n    <%if(firstImage){%>\n    <div class="img-text clearfix" data-spm-type="resource">\n        <div class="pic"><a href="<%=items[0].link%>" target="_blank"><img alt="" src="<%=firstImage%>"><em class="sn">1</em></a></div>\n        <h4>\n            <a href="<%=items[0].link%>" target="_blank" data-spm-type="content">\n                <%=items[0].title%>\n            </a>\n        </h4>\n        <p><a href="<%=items[0].link%>" target="_blank"><em data-role="comment-count" data-id="<%=items[0].id%>"></em> 阅读</a></p>\n    </div>\n    <%}%>\n    <div class="sn-list">\n        <ul>\n            <% var b=firstImage?1:0%>\n            <% for( var a = b ; a < items.length ; a++) { %>\n                <% var item = items[a]; %>\n                <li data-spm-type="resource">\n                    <em class="sn"><%= a+1 %></em>\n                    <a href="<%=item.link%>" target="_blank" data-spm-type="content"><%=item.title%></a>\n                    <em class="com-num">\n                        <a href="<%=item.link%>" target="_blank">\n                            <em data-role="comment-count" data-id="<%=item.id%>"></em> 阅读\n                        </a>\n                    </em>\n                </li>\n            <%}%>\n        </ul>\n    </div>\n<%} else {%>\n\n<div class="scroll-auto">\n    <ul>\n        <% for( var i = 0 ; i < pageSize ; i++) { %>\n            <li class="<%= i==0?\'cur\':\'\'%>" data-role="hot-news-bullet" data-id="<%=i%>"></li>\n        <%}%>\n    </ul>\n</div>\n<div class="hot-news-scroll">\n    <div class="hot-news-scroll-cont">\n    <% for( var i = 0 ; i < pageSize ; i++) { %>\n        <div class="hot-news-scroll-item" data-media-id="<%=i%>" data-focus-ev="<%=i%>">\n            <% for( var a = 0 ; a < 5 ; a++) { %>\n                <% var item = items[i*5+a]; %>\n            <div class="img-text clearfix">\n                <div class="pic"><a href="<%=item.link%>" target="_blank"><img alt="" src="<%=item.picUrl%>"></a></div>\n                <h4>\n                    <a href="<%=item.link%>" target="_blank" data-spm-type="content">\n                        <%=item.title%>\n                    </a>\n                </h4>\n                <p><a href="<%=item.link%>" target="_blank"><em data-role="comment-count" data-id="<%=item.id%>"></em> 阅读</a></p>\n            </div>\n            <%}%>\n        </div>\n    <%}%>\n    </div>\n</div>\n\n<%}%>\n'},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.region=e.id,this.slice=e.slice},fetch:function(){if(this.region){var e=this;this.url="//v2.sohu.com/integration-api/mix/region/"+this.region+"?secureScore=75",$.ajax({url:this.url,dataType:"jsonp",success:function(t){var i=t.data;e.slice&&(i=i.slice(0,e.slice)),e.trigger("sync",i)},error:function(){e.trigger("error",arguments)}})}}})},function(e,t,i){var n=i(207);e.exports=Backbone.View.extend({template:_.template(i(208)),events:{"mouseenter li[data-id]":"tabChange"},tabChange:function(e){var t=$(e.currentTarget);t.addClass("cur"),t.siblings().removeClass("cur");var i=t.data("id");this.$el.find("[data-role='tab']").hide(),this.$el.find("[data-role='tab']").eq(i).show()},initialize:function(){var e=this,t=new n;t.on("sync",function(t){for(var i in t)t.hasOwnProperty(i)&&t[i].forEach(function(e){e.totalScore=(e.totalScore+"").split(".")[0]});e.data=t,e.render()}),t.fetch()},render:function(){this.$el.html(this.template(this.data))}})},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(e){this.url="starsRank"},fetch:function(e){var t=this;n.prototype.fetch.call(this,{success:function(e,i){try{t.trigger("sync",e)}catch(n){t.trigger("error")}}})}})},function(e,t){e.exports='\n    <div class="titleR"><a href="http://stars.sohu.com" target="_blank"><span class="tt">星图排行榜</span></a></div>\n    <div class="menu menuC3">\n        <ul>\n            <li class="cur" data-id="0">日榜</li>\n            <li data-id="1">周榜</li>\n            <li data-id="2" class="end">月榜</li>\n        </ul>\n    </div>\n    <div class="rank clearfix" data-role="tab">\n        <ul>\n            <% for( var a = 0 ; a <DAILY.length ; a++) { %>\n            <%\n            var item =DAILY[a];\n            %>\n                    <li><em class="sn <%= a==0?\'sn-one\':\'\'%>"><%= a+1%></em>\n                        <a href="<%=item.mediaUrl%>" target="_blank">\n                            <%= item.mediaName%>\n                        </a><em class="num">指数 <%=item.totalScore%></em></li>\n            <%}%>            \n        </ul>\n    </div>\n    <div class="rank clearfix" style="display:none" data-role="tab">\n        <ul>\n        <% for( var a = 0 ; a <WEEKLY.length ; a++) { %>\n            <%\n            var item =WEEKLY[a];\n            %>\n                    <li><em class="sn <%= a==0?\'sn-one\':\'\'%>"><%= a+1%></em>\n                        <a href="<%=item.mediaUrl%>" target="_blank">\n                            <%= item.mediaName%>\n                        </a><em class="num">指数 <%=item.totalScore%></em></li>\n            <%}%>  \n        </ul>\n    </div>\n    <div class="rank clearfix" style="display:none" data-role="tab">\n        <ul>\n         <% for( var a = 0 ; a <MONTHLY.length ; a++) { %>\n            <%\n            var item =MONTHLY[a];\n            %>\n                    <li><em class="sn <%= a==0?\'sn-one\':\'\'%>"><%= a+1%></em>\n                        <a href="<%=item.mediaUrl%>" target="_blank">\n                            <%= item.mediaName%>\n                        </a><em class="num">指数 <%=item.totalScore%></em></li>\n            <%}%>  \n        </ul>\n    </div>\n'},function(e,t,i){var n=i(210);e.exports=Backbone.View.extend({template:_.template(i(211)),initialize:function(e){var t=new n,i=this;t.on("sync",function(e){var e=e.data;i.fixItem(e.list),i.$el.html(i.template(e)),i.trigger("ready",e)}),t.on("error",function(){i.$el.hide()}),t.fetch()},fixItem:function(e){e.forEach(function(e){e.resource_map=e.resource_map?e.resource_map:"",e.resource_map&&(e.resource_map.text=e.resource_map.text?e.resource_map.text:""),e.resource_map.text&&(e.resource_map.text.despriction=e.resource_map.text.despriction?e.resource_map.text.despriction:"")})}})},function(e,t,i){var n=i(4),s=i(7);e.exports=n.extend({init:function(e){this.url="//adv-sv-show.focus.cn/be_fox_say3",this.data={cityCode:s.get("_test_loc_")||window.sohu_IP_Loc||"",adposId:51}},fetch:function(e){var t=this;n.prototype.fetch.call(this,{success:function(e,i){try{t.trigger("sync",e)}catch(n){t.trigger("error")}},data:this.data,timeout:3e3})}})},function(e,t){e.exports='\n<div class="titleR"><span class="tt">房产动态</span></div>\n<div class="list" data-spm="focus-list2">\n    <ul>\n        <% for( var a = 0 ; a < list.length ; a++) { %>\n    <%\n    var item = list[a];\n    %>\n        <li><a href="<%= item.link%>" target="_blank" data-adposid="<%= item.ad_pos_id%>"><%= item.resource_map.text.despriction%></a></li>\n    <%}%>\n    </ul>\n\n</div>\n'},function(e,t,i){var n=i(213);e.exports=Backbone.View.extend({template:_.template(i(214)),initialize:function(e){var t=new n,i=this;t.on("sync",function(e){var e=e.data;i.fixItem(e.list),i.$el.html(i.template(e)),i.trigger("ready",e)}),t.on("error",function(){i.$el.hide()}),t.fetch()},fixItem:function(e){e.forEach(function(e){e.resource_map=e.resource_map?e.resource_map:"",e.resource_map&&(e.resource_map.text=e.resource_map.text?e.resource_map.text:"",e.resource_map.pic=e.resource_map.pic?e.resource_map.pic:""),e.resource_map.pic&&(e.resource_map.pic.url=e.resource_map.pic.url?e.resource_map.pic.url:""),e.resource_map.text&&(e.resource_map.text.despriction=e.resource_map.text.despriction?e.resource_map.text.despriction:"")})}})},function(e,t,i){var n=i(4),s=i(7);e.exports=n.extend({init:function(e){this.url="//adv-sv-show.focus.cn/be_fox_say3",this.data={cityCode:s.get("_test_loc_")||window.sohu_IP_Loc||"",adposId:52}},fetch:function(e){var t=this;n.prototype.fetch.call(this,{success:function(e,i){try{t.trigger("sync",e)}catch(n){t.trigger("error")}},data:this.data,timeout:3e3})}})},function(e,t){e.exports='\n<div class="titleR"><span class="tt">房产热点</span></div>\n\n<div class="extend-pic">\n    <a href="<%= list[0].link%>" target="_blank" data-adposid="<%= list[0].ad_pos_id%>"><img src="<%=list[0].resource_map.pic.url%>" alt=""></a>\n</div>\n<div class="list" data-spm="focus-list1">\n    <ul>\n        <% for( var a = 1 ; a < 11 ; a++) { %>\n    <%\n    var item = list[a];\n\n    %>\n        <li><a href="<%= item.link%>" target="_blank" data-adposid="<%= item.ad_pos_id%>"><%= item.resource_map.text.despriction%></a></li>\n    <%}%>\n\n    </ul>\n</div>\n'},function(e,t,i){var n=i(216),s=new n,a=function(e){this.topEv=e.topEv||[],this.clickEv=e.clickEv||!1,this.sclickEv=e.clickEv&&e.clickEv.special||[],this.linkEv=e.linkEv||!1,this.news_list=[],this.unique=[],this.delay_timer=null,this.init.apply(this),this.evHandler()};a.prototype={init:function(e){var t=this;this.linkEv&&this.fixUrl(),this.clickEv&&this.cvHandler(),$(window).on("scroll",function(){clearTimeout(t.delay_timer),t.delay_timer=setTimeout(function(){t.evHandler()},100)}),$(window).on("resize",function(){clearTimeout(t.delay_timer),t.delay_timer=setTimeout(function(){t.evHandler()},100)});for(var i=0,n=this.sclickEv.length;i<n;i++)!function(){var e=t.sclickEv[i];"#search"==e.el?$(e.el).on("click",function(t){"search-btn"!=t.target.className&&"search-icon icon"!=t.target.className||s.click_trigger(e.param)}):$(e.el).on("click",function(t){s.click_trigger(e.param)})}()},evHandler:function(){for(var e=this,t=0,i=this.topEv.length;t<i;t++){var n=e.topEv[t];if(0!=$(n.el).size()&&!n.hadTrigger){var a=$(n.el).offset().top;$(window).scrollTop()+$(window).height()>a&&(s.ev_trigger(n.param),n.hadTrigger=!0)}}},fixUrl:function(){var e=this;$(this.linkEv).each(function(t,i){var n=$(i).attr(e.linkEv.replace(/[\[\]]/g,""));$(i).one("click",function(e){var t=$(i).eq(0).attr("href");~t.indexOf("?")&&(n=n.replace("?","&")),$(i).attr("href",t+n),e.stopPropagation()})})},cvHandler:function(){if(this.clickEv&&this.clickEv.el){if($(this.clickEv.el).on("click",function(){var e=$(this).data("clev");s.click_trigger(e)}),this.clickEv.sync)for(var e=0,t=this.clickEv.sync.length;e<t;e++){var i=this.clickEv.sync[e];!function(e){e.plugin.on("ready",function(){$(e.el).on("click",function(){var e=$(this).data("clev");s.click_trigger(e)})})}(i)}}}},e.exports=a},function(e,t,i){var n=i(4),s=i(7),a=s.get("SUV"),o=function(e,t){var e=e+"actionId="+t+"&SUV="+a;$.getScript(e,function(){})};e.exports=n.extend({init:function(){},ev_trigger:function(e){o("//pv.sohu.com/action.gif?",e)},click_trigger:function(e){o("//pv.sohu.com/action.gif?",e)}})},function(e,t){var i=function(e){if(this.firstEl=e.firstEl,this.nextEl=e.nextEl,this.btnEl=e.btnEl,this.top=e.top,this.bottom=e.bottom,0==$(this.btnEl).size()||0==$(this.firstEl).size()||0==$(this.nextEl).size())return!1;this.stopTop=$(this.firstEl).offset().top,this.delay_timer=null,this.hadShow=!1,this.showIng=!1,this.init.apply(this),this.evHandler()};i.prototype={init:function(){var e=this;$(this.btnEl).on("click",function(t){t.preventDefault(),1==e.showIng&&$("html, body").animate({scrollTop:e.top},300),e.toggle(t)}),$(window).on("scroll",function(){e.evHandler()}),$(window).on("resize",function(){e.evHandler()})},evHandler:function(){var e=$(window).scrollTop()+$(window).height(),t=$(window).scrollTop();e>this.bottom&&t<this.bottom&&!this.hadShow&&(this.show(),this.hadShow=!0),t>this.stopTop&&t<this.bottom&&!this.showIng&&($(this.btnEl).addClass("update-btn-fixed"),this.showIng=!0),t<=this.stopTop&&this.showIng&&(this.show(),$(this.btnEl).removeClass("update-btn-fixed"),this.showIng=!1),t>this.bottom&&this.hadShow&&(this.hide(),this.hadShow=!1)},show:function(){$(this.btnEl).fadeIn(),$(this.firstEl).addClass("show-list-mod"),$(this.firstEl).find(".list16:last li:last").hide()},hide:function(){$(this.btnEl).fadeOut()},toggle:function(){$(this.firstEl).fadeOut(),$(this.nextEl).fadeIn()}},e.exports=i},function(e,t){function i(e){var t=e.url,i=e.success,n=e.complete;this.data={},this.focus=[],this.news=[],this.url=t,this.init(i,n)}i.prototype={formatData:function(){for(var e=0;e<this.data.length;e++){var t=this.data[e];0!==t.images.length&&this.focus.length<2?this.focus.push(t):this.news.push(t)}0===this.focus.length?this.focus.push(news.shift()):1===this.focus.length&&(this.focus.push(news.shift()),this.focus.push(news.shift()))},init:function(e,t){$.ajax({url:this.url,method:"GET",dataType:"jsonp",jsonp:"callback",success:e.bind(this),complete:t.bind(this)})}},e.exports=i},function(e,t,i){var n=i(43),s=i(220),a=i(216),o=new a,r=function(e){this.params=n.getParams(location.href),this.changeFocus=e.changeFocus,this.succCallback=e.succCallback,this.change()};r.prototype.change=function(){var e=this;if(this.params&&this.params.pvid&&this.params.newsid&&this.params.t&&this.params.t>Date.now()-12e4){var t=new s;t.on("sync",function(t){if(t.news&&t.news.id&&t.news.userId&&t.news.title&&t.news.cover){var i=e.changeFocus,n='<a target="_blank" data-param="?_f=index_focus_1" href="/a/'+t.news.id+"_"+t.news.userId+'" title="'+t.news.title+'"><img alt="'+t.news.title+'" src="'+t.news.cover.replace("cdn.sohucs.com","cdn.sohucs.com/c_zoom,h_213,w_320")+'"><span class="shadow linear-box"><em class="linear-bg"></em><span>'+t.news.title+"</span></span></a>";$(i).html(n),e.succCallback&&"function"==typeof e.succCallback&&e.succCallback(),$(i).find("a").on("click",function(){o.click_trigger("10220429")})}}),t.fetch({newsid:this.params.newsid})}},e.exports=r},function(e,t,i){var n=i(4);e.exports=n.extend({init:function(){},fetch:function(e){var t=e.newsid;this.url="meta/"+t;var i=this;n.prototype.fetch.call(this,{success:function(e,t){try{"string"==typeof e&&(e=JSON.parse(e)),console.log(e),i.trigger("sync",e)}catch(n){i.trigger("error",n)}},error:function(e){i.trigger("error",e)}})}})},function(e,t,i){i(222),e.exports=Backbone.View.extend({initialize:function(e){this.addTheme(e)},addTheme:function(e){$(".sohu-index-v3").addClass("festival-wrapper"),$(".logo-search").css({backgroundImage:"url('//statics.itc.cn/index/festivals/2020/"+e.festival+"/bg.png')"})}})},function(e,t){},function(e,t,i){i(224);var n=i(7);e.exports=Backbone.View.extend({events:{"click .close-wrap":"removeTheme"},initialize:function(e){this.$el=$(e.el),this.addTheme()},addTheme:function(){var e=n.get("closeTheme"),t=$(".sohu-index-v3");(e=!1)||(t.addClass("festival-twomeeting"),t.find(".top-box .top-box-wrapper").removeClass("top-box-wrapper").css({width:"1200px",margin:"0 auto",paddingBottom:"10px"}),this.$el.show())},removeTheme:function(){var e=$(".sohu-index-v3");n.set("closeTheme",!0,{expires:1.5}),this.$el.hide(),e.removeClass("festival-twomeeting")}})},function(e,t){},function(e,t,i){i(226);var n=i(7),s=i(227),a=i(228),o="left";e.exports=Backbone.View.extend({template:_.template(i(229)),data:{el:null,sourceCityCode:"",targetCityCode:"",targetCityName:""},initialize:function(e){var t=this;t.data.el=$(e.el),window.localStorage||(window.localStorage={getItem:function(){},setItem:function(){}}),t.getCityCode()},getCityCode:function(){var e=this,t=window.localStorage.getItem("sohu_choice_citycode");if(void 0!==t&&""!==t&&null!==t)return e.data.sourceCityCode=t,void e.asyncGetCityCode();$.ajax({url:"//v2.sohu.com/api/pc-home-city/home-data/ip2location",method:"GET",async:!1,dataType:"jsonp",success:function(t){e.data.sourceCityCode=t.data&&t.data.china_admin_code||"",window.localStorage.setItem("sohu_choice_citycode",e.data.sourceCityCode),e.handleCityCodeAndSendAjax()},error:function(e){console.log("出错了",e)}})},asyncGetCityCode:function(){var e=this;setTimeout(function(){$.ajax({url:"//v2.sohu.com/api/pc-home-city/home-data/ip2location",method:"GET",async:!1,dataType:"jsonp",success:function(e){window.localStorage.setItem("sohu_choice_citycode",e.data&&e.data.china_admin_code||"")},error:function(e){console.log("出错了",e)}})},0),e.handleCityCodeAndSendAjax()},handleCityCodeAndSendAjax:function(){var e=this,t=e.data.sourceCityCode;e.data.targetCityCode=s[t]&&s[t].code,e.data.targetCityName=s[t]&&s[t].city,e.data.targetCityCode&&e.data.targetCityName&&(e.fetchFeedData(),e.bindDomListener())},buildFeedParams:function(){var e={},t=n.get("SUV")||"";return e.suv=t,e.refer=document.referrer||"",e.ua=navigator.userAgent||"",e},fetchFeedData:function(){var e=this,t=e.buildFeedParams();$.ajax({url:"//v2.sohu.com/api/pc-home-city/home-data/area",method:"GET",async:!1,dataType:"jsonp",data:{suv:t.suv,refer:t.refer,ua:t.ua,cityCode:e.data.targetCityCode},success:function(t){if("OK"===t.msg&&t.data&&t.data.length>0){var i=a[e.data.targetCityName],n="//www.sohu.com/topic/city/?tab="+i;$("#tabs-jingxuan .tt").hide(),$("#tabs-city").append("<a href="+n+'   target="_blank">'+e.data.targetCityName+"城事</a>").show(),$("#tabs-divideline").show(),$("#city-sohu-choice").attr("data-spm","city-"+i),e.render(t.data)}},error:function(e){console.log("出错了",e)}})},sendAction:function(e){window.sohuSpm&&"function"==typeof window.sohuSpm.sendAction&&window.sohuSpm.sendAction(e)},bindDomListener:function(){var e=this;$("#new-sohu-choice #tabs-jingxuan").hover(function(){$("#new-sohu-choice #tabs-jingxuan").css({color:"#333"}),$("#new-sohu-choice #tabs-city a").css({color:"#999"}),$("#new-sohu-choice #city-sohu-choice-tabs").css({marginLeft:"0px"}),$("#new-sohu-choice #city-choice-switch-choice").css({display:"block"}),"left"===o&&(o="right",e.sendAction({acode:"8564",clkParam:"",spm:""}))}),$("#new-sohu-choice #tabs-city").hover(function(){$("#new-sohu-choice #city-sohu-choice-tabs").css({marginLeft:"-300px"}),$("#new-sohu-choice #tabs-jingxuan").css({color:"#999"}),$("#new-sohu-choice #tabs-city a").css({color:"#333"}),$("#new-sohu-choice #city-choice-switch-choice").css({display:"none"}),"right"===o&&(o="left",e.sendAction({acode:"8564",clkParam:"",spm:""}))})},render:function(e){var t=this,i=$(document.createDocumentFragment());e=e||[],e=e.slice(0,6);var n=e[0];if(n.images&&n.images[0]&&-1!==n.images[0].indexOf("q_70,c_lfill")){var s=n.images[0].split("/");s.forEach(function(e,t,i){-1!==e.indexOf("q_70,c_lfill")&&(i[t]="q_70,c_lfill,w_300,h_135,g_faces")}),n.images[0]=s.join("/")}else n.images&&n.images[0]&&(n.images[0]=n.images[0].replace("com/","com/q_70,c_lfill,w_300,h_135,g_faces/"));n.images&&n.images[0]&&/.gif$/.test(n.images[0])&&(n.images[0]=n.images[0].replace(/.gif$/,".jpeg"));for(var o=0;o<e.length;o++){var n=e[o];if(0===o){var r=a[t.data.targetCityName],c="//www.sohu.com/topic/city/?tab="+r;n.targetCityName=t.data.targetCityName,n.targetCityLink=c}n.index=o,n.url="//www.sohu.com"+n.url,i.append(t.template({data:n}))}t.data.el.append(i),$("#goto-sohuCity-link").click(function(){t.sendAction({acode:"8563",clkParam:"",spm:""})}),window.sohuSpm&&"function"==typeof window.sohuSpm.domDidChange&&window.sohuSpm.domDidChange();var l=$(".content-right .content-first .first-title");if(l.length>0){l.height()<30&&$("#goto-beijing-icon").css({position:"absolute",left:"15px",top:"82px"})}return!0}})},function(e,t){},function(e,t){e.exports={110000:{code:"110000",city:"北京"},310000:{code:"310000",city:"上海"},440100:{code:"440100",city:"广州"},440300:{code:"440300",city:"深圳"},500000:{code:"500000",city:"重庆"},610100:{code:"610100",city:"西安"}}},function(e,t){e.exports={"北京":"beijing","上海":"shanghai","广州":"guangzhou","深圳":"shenzhen","重庆":"chongqing","西安":"xian"}},function(e,t){e.exports='\n<% var item = data, index = data.index  %>\n \n    <% if (index%6==0) { %>\n        <a href="<%= item.url %>" title="<%= item.title %>" target="_blank"> \n            <div class="content-first"  >\n                <div class="image-wrap">\n                    <img class="base-img" src="<%= item.images[0] %>"   />\n                    <div class="city-img"></div>\n                </div>\n                <div class="img-cover"> </div>\n                <h4 class="first-title"><%= item.title %></h4>\n            </div>\n        </a>\n        <a href="<%= item.targetCityLink %>"  title="搜狐-城事" target="_blank"  id="goto-sohuCity-link" >\n            <div class="first-icon" id="goto-beijing-icon" ><i id="pos-icon"></i><%= item.targetCityName %><i id="right-icon"></i></div>\n        </a>\n    <% } else  { %>\n        <div> \n            <div class="content-other-item">\n                <a href="<%= item.url %>" title="<%= item.title %>" target="_blank"> <div class="other-title"><%= item.title %></div></a>\n                <div class="other-divideline"></div>\n            </div>   \n        </div>\n    <% } %>\n '
}, function(e, t, i) {
    var n, s;
    ! function(a) {
        var o;
        if (n = a, (s = "function" == typeof n ? n.call(t, i, t, e) : n) !== undefined && (e.exports = s), o = !0, e.exports = a(), o = !0, !o) {
            var r = window.Cookies,
                c = window.Cookies = a();
            c.noConflict = function() {
                return window.Cookies = r, c
            }
        }
    }(function() {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i) t[n] = i[n]
            }
            return t
        }

        function t(e) {
            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }

        function i(n) {
            function s() {}

            function a(t, i, a) {
                if ("undefined" != typeof document) {
                    a = e({
                        path: "/"
                    }, s.defaults, a), "number" == typeof a.expires && (a.expires = new Date(1 * new Date + 864e5 * a.expires)), a.expires = a.expires ? a.expires.toUTCString() : "";
                    try {
                        var o = JSON.stringify(i);
                        /^[\{\[]/.test(o) && (i = o)
                    } catch (l) {}
                    i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    var r = "";
                    for (var c in a) a[c] && (r += "; " + c, !0 !== a[c] && (r += "=" + a[c].split(";")[0]));
                    return document.cookie = t + "=" + i + r
                }
            }

            function o(e, i) {
                if ("undefined" != typeof document) {
                    for (var s = {}, a = document.cookie ? document.cookie.split("; ") : [], o = 0; o < a.length; o++) {
                        var r = a[o].split("="),
                            c = r.slice(1).join("=");
                        i || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                        try {
                            var l = t(r[0]);
                            if (c = (n.read || n)(c, l) || t(c), i) try {
                                c = JSON.parse(c)
                            } catch (d) {}
                            if (s[l] = c, e === l) break
                        } catch (d) {}
                    }
                    return e ? s[e] : s
                }
            }
            return s.set = a, s.get = function(e) {
                return o(e, !1)
            }, s.getJSON = function(e) {
                return o(e, !0)
            }, s.remove = function(t, i) {
                a(t, "", e(i, {
                    expires: -1
                }))
            }, s.defaults = {}, s.withConverter = i, s
        }
        return i(function() {})
    })
}, function(e, t, i) {
    var n = i(232),
        s = i(233),
        a = window.localStorage || !1,
        o = i(18),
        r = i(234),
        c = o.subString,
        l = i(235),
        d = i(216),
        h = new d;
    e.exports = Backbone.View.extend({
        template: _.template(i(236)),
        data: {},
        events: {
            "click .pop-news-close": "closePermission"
        },
        model: null,
        initialize: function(e) {
            var t = this;
            this.pushCv(), this.myNotify = null, this.needAsk = e.needAsk || !1, this.model = new n, this.timer = e.timer || 3e5, this.model.on("sync", function(e) {
                if (e) {
                    if (e.imageUrl = t.fixImage(e.imageUrl), e.brief = c(e.brief, 34) + "[点击查看]", -1 == e.link.indexOf("//") && (e.link = "//" + e.link), a && a.getItem("sohu_push")) {
                        var i = JSON.parse(a.getItem("sohu_push"));
                        if (e.id == i.id) return console.log("两条新闻重复啦，别再发出来了/更新时间，再过五分钟再问我"), i.outtime = (new Date).getTime() + 3e5, void a.setItem("sohu_push", JSON.stringify(i))
                    }
                    t.myNotify = s.windowsNotify({
                        title: "",
                        body: e.brief || "",
                        pic: e.imageUrl,
                        href: t.fixUrl(e.link),
                        tag: "sohu_push",
                        needAsk: t.needAsk,
                        closeAsk: function() {
                            t.closePermission()
                        },
                        showAsk: function() {
                            t.showPermission(e)
                        },
                        interval: function() {
                            console.log("关闭cosole", t.interval), clearInterval(t.interval)
                        }
                    }), e.outtime = (new Date).getTime() + 3e5, a.setItem("sohu_push", JSON.stringify(e))
                }
            }), this.intervalFetch()
        },
        intervalFetch: function() {
            var e = this;
            if ("搜狗浏览器" != r.client.name) {
                if (!s.ifNotifyPermission() && !e.needAsk) return void console.log("没有弹出权限");
                if (!s.ifNotifyPermission() && e.needAsk && this.todayAsk()) return void console.log("今天问过了，明天再问吧");
                !s.ifNotifyPermission() && e.needAsk && a && a.getItem("sohu_push") && a.removeItem("sohu_push"), e.fetchModel(), setInterval(function() {
                    e.fetchModel()
                }, 12e4)
            }
        },
        fetchModel: function() {
            var e = this;
            if (a && a.getItem("sohu_push")) {
                var t = JSON.parse(a.getItem("sohu_push")),
                    i = (new Date).getTime();
                if (t && t.id && t.outtime && i >= t.outtime) console.log("五分钟啦，看看有没有新闻啊"), e.model.fetch();
                else {
                    if (t && t.id && t.outtime && i < t.outtime) return void console.log("时间还没到，着啥急");
                    console.log("数据有问题吧，看看data", t), e.model.fetch()
                }
            } else a && !a.getItem("sohu_push") && e.model.fetch()
        },
        render: function() {
            this.$el.html(this.template(this.data))
        },
        closePermission: function() {
            return this.$el.hide(), !1
        },
        showPermission: function(e) {
            this.data = e, this.render(), this.$el.show(), h.click_trigger("10220310")
        },
        fixImage: function(e) {
            return e ? e.replace(/cdn\.sohucs\.com/g, "cdn.sohucs.com/c_fill,w_90,h_90,g_faces") : "//statics.itc.cn/web/static/images/sohu_logo.jpg"
        },
        todayAsk: function() {
            return a && a.getItem("today_asked") ? !((new Date).getTime() > a.getItem("today_asked")) || (a.setItem("today_asked", l.getTomorrowTime()), !1) : (a.setItem("today_asked", l.getTomorrowTime()), !1)
        },
        pushCv: function() {
            a && a.getItem("sohu_push_cv") && (h.click_trigger("10220312"), a.removeItem("sohu_push_cv"))
        },
        fixUrl: function(e) {
            return e ? e = e + (/\?/g.test(e) ? "&" : "?") + "pvid=3ad77031caeadc5b" : "//www.sohu.com/?pvid=3ad77031caeadc5b"
        }
    })
}, function(e, t, i) {
    var n = i(4);
    e.exports = n.extend({
        init: function(e) {},
        fetch: function() {
            var e = this;
            this.url = "//v2.sohu.com/public-api/push-news/pc", n.prototype.fetch.call(this, {
                success: function(t, i) {
                    try {
                        e.trigger("sync", t)
                    } catch (n) {
                        e.trigger("error")
                    }
                }
            })
        }
    })
}, function(e, t, i) {
    function n() {
        return !!("Notification" in window || window.webkitNotifications) && (!(!window.webkitNotifications || 0 != window.webkitNotifications.checkPermission()) || "Notification" in window && "granted" === Notification.permission)
    }

    function s(e) {
        if ("Notification" in window || window.webkitNotifications) return null == Notification.permission || Notification.permission == undefined ? a(e) : "granted" === Notification.permission ? o(e) : "denied" !== Notification.permission ? void(e.needAsk && (console.log("问问权限"), e.showAsk && e.showAsk(), Notification.requestPermission(function(t) {
            if (e.closeAsk && e.closeAsk(), "permission" in Notification || (Notification.permission = t), "granted" === t) return o(e, !0)
        }))) : void 0
    }

    function a(e, t) {
        e.closeAsk && e.closeAsk(), window.webkitNotifications && 0 == window.webkitNotifications.checkPermission() ? (t ? c.click_trigger("10220311") : c.click_trigger("10220384"), function() {
            var t = window.webkitNotifications.createNotification(e.pic, e.title, e.body);
            t.onclick = function() {
                l.setItem("sohu_push_cv", !0), window.open(e.href, "_blank"), this.cancel()
            }, t.onclose = function() {
                c.click_trigger("10220387"), this.cancel()
            }, t.show()
        }()) : window.webkitNotifications && e.needAsk && (e.showAsk && e.showAsk(), window.webkitNotifications.requestPermission(a))
    }

    function o(e, t) {
        t ? c.click_trigger("10220311") : c.click_trigger("10220384"),
            function() {
                var t = new Notification(e.title, {
                    renotify: !0,
                    body: e.body,
                    icon: e.pic,
                    tag: e.tag
                });
                t.onclick = function() {
                    l.setItem("sohu_push_cv", !0), window.open(e.href, "_blank"), this.close()
                }, t.onclose = function() {
                    console.log("被关掉了"), c.click_trigger("10220387"), this.close()
                }
            }()
    }
    var r = (i(234), i(216)),
        c = new r,
        l = window.localStorage || !1;
    e.exports = {
        windowsNotify: s,
        ifNotifyPermission: n
    }
}, function(e, t) {
    var i = i || function(e) {
        var t = e.document,
            i = e.navigator,
            n = i.userAgent.toLowerCase(),
            s = t.documentMode,
            a = e.chrome || !1,
            o = {
                agent: n,
                isIE: /msie/.test(n),
                isGecko: n.indexOf("gecko") > 0 && n.indexOf("like gecko") < 0,
                isWebkit: n.indexOf("webkit") > 0,
                isStrict: "CSS1Compat" === t.compatMode,
                supportSubTitle: function() {
                    return "track" in t.createElement("track")
                },
                supportScope: function() {
                    return "scoped" in t.createElement("style")
                },
                ieVersion: function() {
                    try {
                        return n.match(/msie ([\d.]+)/)[1] || 0
                    } catch (e) {
                        return console.log("error"), s
                    }
                },
                operaVersion: function() {
                    try {
                        if (e.opera) return n.match(/opera.([\d.]+)/)[1];
                        if (n.indexOf("opr") > 0) return n.match(/opr\/([\d.]+)/)[1]
                    } catch (t) {
                        return console.log("error"), 0
                    }
                },
                versionFilter: function() {
                    if (1 === arguments.length && "string" == typeof arguments[0]) {
                        var e = arguments[0];
                        return start = e.indexOf("."), start > 0 && (end = e.indexOf(".", start + 1), -1 !== end) ? e.substr(0, end) : e
                    }
                    return 1 === arguments.length ? arguments[0] : 0
                }
            };
        try {
            o.type = o.isIE ? "IE" : e.opera || n.indexOf("opr") > 0 ? "Opera" : n.indexOf("chrome") > 0 ? "Chrome" : e.openDatabase ? "Safari" : n.indexOf("firefox") > 0 ? "Firefox" : "unknow", o.version = "IE" === o.type ? o.ieVersion() : "Firefox" === o.type ? n.match(/firefox\/([\d.]+)/)[1] : "Chrome" === o.type ? n.match(/chrome\/([\d.]+)/)[1] : "Opera" === o.type ? o.operaVersion() : "Safari" === o.type ? n.match(/version\/([\d.]+)/)[1] : "0", o.shell = function() {
                if (n.indexOf("maxthon") > 0) return o.version = n.match(/maxthon\/([\d.]+)/)[1] || o.version, "傲游浏览器";
                if (n.indexOf("qqbrowser") > 0) return o.version = n.match(/qqbrowser\/([\d.]+)/)[1] || o.version, "QQ浏览器";
                if (n.indexOf("se 2.x") > 0) return "搜狗浏览器";
                if (a && "Opera" !== o.type) {
                    var t = e.external,
                        i = e.clientInformation,
                        s = i.languages;
                    if (t && "LiebaoGetVersion" in t) return "猎豹浏览器";
                    if (n.indexOf("bidubrowser") > 0) return o.version = n.match(/bidubrowser\/([\d.]+)/)[1] || n.match(/chrome\/([\d.]+)/)[1], "百度浏览器";
                    if (o.supportSubTitle() && void 0 === s) {
                        var r = Object.keys(a.webstore).length;
                        return r > 1 ? "360极速浏览器" : "360安全浏览器"
                    }
                    return "Chrome"
                }
                return o.type
            }, o.name = o.shell(), o.version = o.versionFilter(o.version)
        } catch (r) {
            console.log("error")
        }
        return {
            client: o
        }
    }(window);
    e.exports = i
}, function(e, t) {
    var i = window.localStorage || !1,
        n = {
            outTime: function(e) {
                if (!i || !e) return !1;
                if (!i[e]) return !0;
                var t = (new Date).getTime(),
                    n = new Date(parseInt(i[e], 10)).getTime();
                return !n || t - n > 0
            },
            setTime: function(e) {
                i[e] = new Date(this.getLocalTime(1)).getTime()
            },
            getLocalTime: function(e) {
                var t, i, n, s, a;
                return s = (new Date).getTime(), a = new Date(s + 864e5 * e), t = a.getFullYear(), i = a.getMonth() + 1, n = a.getDate(), a = t + "-" + i + "-" + n
            },
            getTomorrowTime: function() {
                return new Date(this.getLocalTime(1)).getTime()
            }
        };
    e.exports = n
}, function(e, t) {
    e.exports = '\n<h3>请点击上方 <em>[允许]</em> 订阅搜狐体育最热新闻</h3>\n<a href="javascript:void(0);" target="_blank" class="pop-news-close"></a>\n<div class="pop-news-cont">\n    <div class="pic">\n        <a href="<%=link%>" target="_blank">\n            <img src="<%=imageUrl%>" alt="" />\n        </a>\n    </div>\n    <h4><a href="<%=link%>" target="_blank"><%=brief%></a></h4>\n    <p><a href="<%=link%>" target="_blank">www.sohu.com</a></p>\n</div>'
}, function(e, t, i) {
    var n = i(238),
        s = i(48),
        a = i(114),
        o = i(239),
        r = i(241),
        c = i(243),
        l = i(244),
        d = i(248),
        h = i(251),
        u = i(253),
        p = i(254),
        f = i(256),
        m = i(118),
        g = i(44),
        _ = i(36),
        v = i(259),
        w = i(127),
        b = i(260),
        x = i(263),
        y = i(265),
        k = i(231);
    i(218);
    i(11), e.exports = function(e) {
        w.set(e), +new Date > 1589904e6 && +new Date < 15907428e5 && new y({
            el: ".theme-skin-wrap"
        }), new x({
            el: "#news-novelty-seek"
        }), new s({
            el: "#search",
            channel_id: 8
        });
        var t = new l({
            el: '[data-role="focus-auto-main"]',
            focus: '[data-role="focus-auto"]'
        });
        new k({
            el: $("#pop-news")
        });
        var i = !1,
            I = !1;
        new u({
            left: "[data-role='most-site'] .btnl",
            right: "[data-role='most-site'] .btnr",
            box: "[data-role='most-site'] [data-video-box]",
            point: "[data-role='most-site'] [data-point]"
        });
        new p({
            el: "[data-role='need-play-num']"
        });
        var P = (new h({
                right: "[data-role='mil-news'] [data-role='switch']",
                box: "[data-role='mil-news'] [data-mil-box]"
            }), new d({
                el: '[data-role="yule-bobao"]'
            })),
            C = new r({
                model: new c({}),
                el: '[data-role="hot-rank"]'
            });
        C.on("ready", function() {
            (I = !0) && i && (new o("type1"), new o("type2"), new o("type3"))
        }), P.on("ready", function() {
            i = !0, I && i && (new o("type1"), new o("type2"), new o("type3"))
        }), a.load({
            type: "news_channel",
            args: {
                ext_data: {
                    modelId: 0
                }
            }
        }), m.update(), new _({
            el: "#head-login",
            mark: "news_channel",
            type: "other"
        }), new g({
            el: "#float-btn",
            data: {
                refreshable: !1,
                feedback: !0,
                home: !0
            }
        });
        var T = new f({
            writer1: "finance",
            writer2: "life",
            writer3: "tech"
        });
        n.init($.extend({}, e, {
            type: "news_channel"
        }), {
            house: t
        }), new v({
            linkEv: "[data-param]",
            clickEv: {
                el: "[data-clev]",
                sync: [{
                    plugin: C,
                    el: '[data-role="hot-rank"] [data-clev]'
                }, {
                    plugin: P,
                    el: '[data-role="yule-bobao"] [data-clev]'
                }]
            },
            linkSync: [{
                plugin: t,
                el: ".content-focus-auto [data-psync]",
                param: "psync"
            }, {
                plugin: T,
                el: ".modGRA [data-psync]",
                param: "psync"
            }]
        }), new b({
            el: "[data-role='uav-mod'] .pic-group li",
            type: "news_channel"
        })
    }
}, function(e, t, i) {
    var n = i(71),
        s = i(77),
        a = (i(70), !1),
        o = {
            house: !1
        };
    e.exports = {
        init: function(e, t) {
            var i = this;
            this.opts = e, this.deps = t, this.thresholds = [], this.sync(e, t), a = !0, i.depsAd(e, t), i.load(e)
        },
        sync: function(e, t) {
            var i = this;
            t.house.on("ready", function() {
                o.house = !0, i.depsAd(e, t)
            })
        },
        depsAd: function(e, t, i) {
            var n = this;
            a && o.house && (n.txtAd({
                name: "house",
                channel: ".content-focus-auto",
                focus: !1,
                main: !0,
                main_name: "focus_auto",
                left: !1,
                left_name: "health",
                right: !1,
                right_name: "teach"
            }), o.house = !1)
        },
        load: function(e, t) {
            var i = this;
            _.each($("[data-role='god_side']"), function(t, i) {
                t && n($(t), "side_" + (i + 1), $.extend({}, e, {}))
            }), _.each($("[data-role='god_column']"), function(t, i) {
                if (t) {
                    n($(t), "column_" + (i + 1), $.extend({}, e, {}))
                }
            });
            var s = [{
                channel: ".contentA",
                focus: !0,
                main: !1,
                main_name: "",
                left: !1,
                left_name: "",
                right: !1,
                right_name: ""
            }, {
                channel: ".content-politics-society",
                focus: !1,
                main: !0,
                main_name: "politics_society",
                left: !0,
                left_name: "politics",
                right: !0,
                right_name: "society"
            }, {
                channel: ".content-military-culture",
                focus: !1,
                main: !0,
                main_name: "military_culture",
                left: !0,
                left_name: "culture",
                right: !0,
                right_name: "history"
            }, {
                channel: ".content-business-finance",
                focus: !1,
                main: !0,
                main_name: "business_finance",
                left: !0,
                left_name: "stock",
                right: !0,
                right_name: "finance"
            }, {
                channel: ".content-sports-yule",
                focus: !1,
                main: !0,
                main_name: "sports_yule",
                left: !1,
                left_name: "",
                right: !1,
                right_name: ""
            }, {
                channel: ".content-fashion-life",
                focus: !1,
                main: !0,
                main_name: "fashion_life",
                left: !0,
                left_name: "health",
                left_name2: "food",
                right: !0,
                right_name: "teach",
                right_name2: "travel"
            }, {
                channel: ".content-it-digital",
                focus: !1,
                main: !0,
                main_name: "it_digital",
                left: !1,
                left_name: "health",
                right: !1,
                right_name: "teach"
            }];
            _.each(s, function(e, t) {
                i.txtAd(e)
            })
        },
        txtAd: function(e) {
            var t = $(e.channel).find(".focus-news .list16:last li:last"),
                i = $(e.channel).find(".main-modA .list16:last li:last"),
                n = $(e.channel).find(".main-modB .main-left .list16:last li:last"),
                s = $(e.channel).find(".main-modB .main-right .list16:last li:last");
            if (e.focus && t.size() && this.pushAd(t, "focus"), e.main && i.size() && this.pushAd(i, e.main_name), e.left && n.size() && this.pushAd(n, e.left_name), e.right && s.size() && this.pushAd(s, e.right_name), ".content-fashion-life" == e.channel) {
                var a = $(e.channel).find(".main-modC .main-left .list16:last li:last"),
                    o = $(e.channel).find(".main-modC .main-right .list16:last li:last");
                this.pushAd(a, e.left_name2), this.pushAd(o, e.right_name2)
            }
        },
        pushAd: function(e, t) {
            var i = this.opts;
            if (e.size() && t) {
                var s = e.html();
                e.html("广告<em style='color:#D0D0D0'> | </em><span></span><span style='margin-left:10px'></span>");
                var a = "txt_" + t,
                    o = e.find("span");
                o.eq(0).size() && n(o.eq(0), a + "_1", $.extend({}, i, {
                    empty_ad: function() {
                        e.html(s)
                    }
                })), o.eq(1).size() && n(o.eq(1), a + "_2", $.extend({}, i, {}))
            }
        },
        cutOver: function(e) {
            var t = this.thresholds,
                i = s[this.pageType()][e] || {},
                n = i.ad_id || "";
            if (t.length > 0 && a) {
                for (var o = 0, r = t.length; o < r; o++)
                    if (t[o].adslot_id == n) return t[o].ifNew || !1;
                return !1
            }
            return !1
        },
        pageType: function() {
            var e = this.opts;
            return e && e.sub_id && e.channel_id ? "sub" : e && e.news_id && e.channel_id ? "article" : e && "dsy" == e.type ? "pic_collection" : e && e.tag_id && e.channel_id ? "tag" : e && "news_channel" == e.type ? "news_channel" : e && e.channel_id ? "channel" : e && "v3" == e.type ? "v3_index" : "index"
        }
    }
}, function(e, t, i) {
    var n = i(240),
        s = {
            type1: {
                width: 320,
                height: 180,
                wrapper: "[data-video-wrapper='video1']",
                trigger: "[data-video-clicker='video1']",
                close: !1
            },
            type2: {
                wrapper: "[data-video-wrapper='video2']",
                trigger: "[data-video-clicker='video2']",
                width: 410,
                height: 320,
                close: !1
            },
            type3: {
                wrapper: "[data-video-wrapper='video3']",
                trigger: "[data-video-clicker='video3']",
                width: 420,
                height: 300,
                close: "[data-video-close='video3']",
                closeWrapper: "[data-video-frame='video3']",
                wrapperTitle: "[data-video-title='video3']"
            }
        },
        a = function(e) {
            this.type = e, this.init()
        };
    a.prototype = {
        init: function() {
            return new n(s[this.type])
        }
    }, e.exports = a
}, function(e, t) {
    var i = function(e) {
        this.wrapper = $(e.wrapper), this.trigger = $(e.trigger), this.width = e.width, this.height = e.height, this.frame = !1, this.title = !1, this.close = e.close || !1, this.close && (this.frame = $(e.closeWrapper), this.title = $(e.wrapperTitle)), this.init()
    };
    i.prototype = {
        init: function() {
            var e = this;
            this.trigger.each(function(t, i) {
                var n = $(this).data("vid"),
                    s = $(this).data("title"),
                    a = $(this).data("site") || 1;
                $(this).on("click", function(t) {
                    t.preventDefault(), e.show(n, s, a)
                })
            }), this.close && $(this.close) && $(this.close).on("click", function(t) {
                t.preventDefault(), e.closeVideo()
            })
        },
        closeVideo: function() {
            this.frame.hide(), this.wrapper.html("")
        },
        show: function(e, t, i) {
            2 == i ? this.wrapper.html(showVrsPlayer({
                bid: e,
                width: this.width,
                height: this.height,
                autoplay: "true",
                getHTML: 1,
                vars: {
                    api_key: "54a6e8af2ad333207e75bb1bb9234950"
                }
            })) : this.wrapper.html(showVrsPlayer({
                vid: e,
                width: this.width,
                height: this.height,
                autoplay: "true",
                getHTML: 1,
                vars: {
                    api_key: "54a6e8af2ad333207e75bb1bb9234950"
                }
            })), this.close && (this.title.html(t), this.frame.fadeIn())
        }
    }, e.exports = i
}, function(e, t, i) {
    function n() {
        window.sohuSpm && "function" == typeof window.sohuSpm.domDidChange && window.sohuSpm.domDidChange()
    }
    var s = i(18),
        a = s.subString;
    e.exports = Backbone.View.extend({
        template: _.template(i(242)),
        data: {},
        model: null,
        events: {
            "mouseenter .rank1": "toggleTag",
            "click .rank1": "toggleTag",
            "mouseenter .rank2": "toggleTag",
            "click .rank2": "toggleTag"
        },
        initialize: function(e) {
            var t = this;
            this.model = e.model, this.model.on("sync", function(e) {
                t.data = e, t.fixData(), t.render(), t.trigger("ready")
            }), this.model.on("error", function(e) {
                console.log("hotrank", e), t.trigger("ready")
            }), this.model.fetch()
        },
        render: function() {
            this.$el.html(this.template(this.data))
        },
        fixData: function() {
            for (var e = this.data, t = 0, i = Math.max(e.dayVideos.length, e.weekVideos.length, 6); t < i; t++) e.dayVideos[t] && (e.dayVideos[t].sub_name = a(e.dayVideos[t].tv_name, 26)), e.weekVideos[t] && (e.weekVideos[t].sub_name = a(e.weekVideos[t].tv_name, 26));
            this.data = e
        },
        toggleTag: function(e) {
            $(e.currentTarget).hasClass("rank1") ? ($(".rank2").removeClass("cur"), $(".rank1").addClass("cur"), $(".sn-rank2").hide(), $(".sn-rank1").show(), n()) : $(e.currentTarget).hasClass("rank2") && ($(".rank1").removeClass("cur"), $(".rank2").addClass("cur"), $(".sn-rank1").hide(), $(".sn-rank2").show(), n())
        }
    })
}, function(e, t) {
    e.exports = '<div class="titleR"><span class="tt">热门新闻</span>\n    <ul class="tm">\n        <li class="rank1 cur">日榜</li>\n        <li class="rank2 end">周榜</li>\n    </ul>\n</div>\n<%if(dayVideos.length > 0){%>\n<div class="sn-list sn-rank1" data-spm="hotvideo-day">\n    <ul>\n    <%for (var i = 0, len = dayVideos.length; i < (len<6?len:6); i++) {%>\n        <li data-spm-type="resource"><em class="sn <%=i<3?\'sc\':\'\'%>"><%=i+1%>\n        </em><a data-clev="<%=i+10220176%>" data-site="2" data-video-clicker=\'video3\' data-vid="<%=dayVideos[i].vid%>" data-title="<%=dayVideos[i].tv_name%>" title="<%=dayVideos[i].tv_name%>" href="javascript:void(0)" target="_blank"><i class="icon icon-video"></i><%=dayVideos[i].sub_name%></a><em class="com-num"><a data-clev="<%=i+10220176%>" data-site="1" data-video-clicker=\'video3\' data-vid="<%=dayVideos[i].vid%>" data-title="<%=dayVideos[i].tv_name%>" title="<%=dayVideos[i].tv_name%>" href="javascript:void(0)" target="_blank"><%=dayVideos[i].tv_count%> 播放</a></em></li>\n    <%}%>\n    </ul>\n</div>\n<%}%>\n<%if(weekVideos.length > 0){%>\n<div class="sn-list sn-rank2" style="display: none;" data-spm="hotvideo-week">\n    <ul>\n    <%for (var i = 0, len = weekVideos.length; i < (len<6?len:6); i++) {%>\n        <li data-spm-type="resource"><em class="sn <%=i<3?\'sc\':\'\'%>"><%=i+1%></em>\n            <a data-clev="<%=i+10220182%>" data-site="2" data-video-clicker=\'video3\' data-vid="<%=weekVideos[i].vid%>" data-title="<%=weekVideos[i].tv_name%>" title="<%=weekVideos[i].tv_name%>" href="javascript:void(0)" target="_blank"><i class="icon icon-video"></i><%=weekVideos[i].sub_name%></a><em class="com-num"><a data-clev="<%=i+10220182%>" data-site="1e" data-video-clicker=\'video3\' data-vid="<%=weekVideos[i].vid%>" data-title="<%=weekVideos[i].tv_name%>" title="<%=weekVideos[i].tv_name%>" href="javascript:void(0)" target="_blank"><%=weekVideos[i].tv_count%> 播放</a></em></li>\n    <%}%>\n    </ul>\n</div>\n<%}%>'
}, function(e, t, i) {
    var n = i(4);
    e.exports = n.extend({
        init: function(e) {
            this.dayRankUrl = "//tv.sohu.com/frag/vrs_inc/phb_media_301_day_10_simple.js", this.weekRankUrl = "//tv.sohu.com/frag/vrs_inc/phb_media_301_week_10.js", this.moreRankUrl = "//tv.sohu.com/frag/vrs_inc/phb_media_212_day_20.js"
        },
        fetch: function() {
            var e = this;
            e.data = {}, window.onRankLoaded = function(t) {
                e.getData(t)
            }, $.getScript(e.dayRankUrl, function(e) {}), $.getScript(e.weekRankUrl, function(e) {}), this.timeout = setTimeout(function() {
                e.trigger("error", "超时")
            }, 3e3)
        },
        getData: function(e) {
            var t = this;
            "phb_media_301_day_10_simple" == e.rankname ? t.data.dayVideos = e.videos : "phb_media_301_week_10" == e.rankname && (t.data.weekVideos = e.videos), t.data.dayVideos && t.data.dayVideos.length > 0 && t.data.weekVideos && t.data.weekVideos.length > 0 && (t.trigger("sync", t.data), clearTimeout(t.timeout))
        }
    })
}, function(e, t, i) {
    var n = i(245),
        s = i(118),
        a = i(18),
        o = a.subString;
    e.exports = Backbone.View.extend({
        template: _.template(i(246)),
        focus_template: _.template(i(247)),
        data: {},
        model: new n,
        events: {},
        initialize: function(e) {
            var t = this;
            this.$focus = $(e.focus), this.model.on("sync", function(e) {
                t.renderFocus(e[0]), t.data.result = t.fixData(e), t.render(), t.trigger("ready")
            }), this.model.fetch()
        },
        render: function() {
            this.$el.html(this.template(this.data))
        },
        renderFocus: function(e) {
            if (e) {
                var t = {};
                t.all = {}, t.all.idea = e.idea_id, t.all.url = e.link, t.all.img = e.resource_map && e.resource_map.pic_text && e.resource_map.pic_text.url || "//statics.itc.cn/web/static/images/pic/preload_2_1.png", t.all.txt = o(e.resource_map && e.resource_map.pic_text && e.resource_map.pic_text.despriction || "", 37), console.log(t), this.$focus.html(this.focus_template(t)), s.update()
            }
        },
        fixData: function(e) {
            for (var t, i, n, s, a = [], o = 1, r = e.length; o < r; o++) i = e[o].link || "", n = e[o].resource_map && e[o].resource_map.text && e[o].resource_map.text.despriction || "", s = e[o].idea_id || "0", t = {
                url: i,
                title: n,
                idea: s
            }, a.push(t);
            return a
        }
    })
}, function(e, t, i) {
    var n = i(4);
    e.exports = n.extend({
        init: function(e) {
            var t = window.sohu_IP_Loc || "CN110000";
            this.url = "//adv-sv-show.focus.cn/be_fox_say3?adposId=85&cityCode=" + t
        },
        fetch: function() {
            var e = this;
            $.ajax({
                url: this.url,
                type: "GET",
                dataType: "jsonp",
                success: function(t) {
                    200 == t.code && e.trigger("sync", t.data.list)
                },
                error: function(t) {
                    console.log("focus", t), e.trigger("error", t)
                }
            })
        }
    })
}, function(e, t) {
    e.exports = '<% if(result.length > 0) {%>\n<div class="list16">\n    <ul>\n        <% for (var i = 0, len = result.length; i < (len<5?len:5); i++) {%>\n            <li><a data-pos="focus_be_pos" data-idea="<%=result[i].idea%>" data-psync="_f=index_chan08house_carnews_<%=i%>" title="<%=result[i].title%>" href="<%=result[i].url%>" target="_blank">\n                <%if(i==0){%><strong><%=result[i].title%></strong><%}else{%><%=result[i].title%><%}%>\n            </a></li>\n        <% } %>\n    </ul>\n</div>\n<% } %>\n<% if(result.length > 5) {%>\n<div class="list16">\n    <ul>\n        <% for (var i = 5, len = result.length; i < len; i++) {%>\n            <li><a data-pos="focus_be_pos" data-idea="<%=result[i].idea%>" data-psync="_f=index_chan08house_carnews_<%=i%>" title="<%=result[i].title%>" href="<%=result[i].url%>" target="_blank">\n                <%if(i==5){%><strong><%=result[i].title%></strong><%}else{%><%=result[i].title%><%}%>\n            </a></li>\n        <% } %>\n    </ul>\n</div>\n<% } %>'
}, function(e, t) {
    e.exports = '<% if(all) {%>\n\n<a data-pos="focus_be_pos" data-idea="<%=all.idea%>" data-psync="_f=index_chan08house_carfocus_0" href="<%=all.url%>" target="_blank">\n    <img src="<%=all.img%>" alt="">\n    <span class="linear-box video-txt">\n        <em class="linear-bg"></em>\n        <em class="linear-txt"><%=all.txt%></em>\n    </span>\n</a>\n<% } %>'
}, function(e, t, i) {
    var n = i(249);
    e.exports = Backbone.View.extend({
        template: _.template(i(250)),
        data: {},
        model: new n,
        events: {},
        initialize: function(e) {
            var t = this;
            this.$focus = $(e.focus), this.model.on("sync", function(e) {
                t.data = e, t.render(), t.trigger("ready")
            }), this.model.on("error", function(e) {
                t.trigger("ready")
            }), this.model.fetch()
        },
        render: function() {
            this.$el.html(this.template(this.data))
        }
    })
}, function(e, t, i) {
    var n = i(4);
    e.exports = n.extend({
        init: function(e) {
            this.url = "//api.my.tv.sohu.com/v2/videos.do?uid=341014877"
        },
        fetch: function() {
            var e = this;
            $.ajax({
                url: this.url,
                type: "GET",
                dataType: "jsonp",
                success: function(t) {
                    t.errorCode && 500 == t.errorCode ? e.trigger("error", t.message) : e.trigger("sync", t)
                },
                error: function(t) {
                    console.log("yule", t), e.trigger("error", t)
                }
            })
        }
    })
}, function(e, t) {
    e.exports = '<% if(list.length > 0) {%>\n<div class="list16">\n    <ul>\n        <% for (var i = 0, len = list.length; i < (len<6?len:6); i++) {%>\n            <li><a data-clev="<%=i+10220208%>" href="javascript:void(0)" data-site="2" data-video-clicker=\'video3\' data-vid="<%=list[i].id%>" data-title="<%=list[i].title%>" title="<%=list[i].title%>" target="_blank"><i class="icon icon-video"></i>\n                <%if(i==0){%><strong><%=list[i].title%></strong><%}else{%><%=list[i].title%><%}%>\n            </a></li>\n        <% } %>\n    </ul>\n</div>\n<% } %>'
}, function(e, t, i) {
    function n(e) {
        this.$tabRight = $(e.right), this.$boxs = $(e.box), this.store = new s({
            index: 0,
            len: this.$boxs.size()
        }), this.init()
    }
    var s = i(252),
        a = i(118);
    n.prototype = {
        init: function() {
            var e = this;
            this.$tabRight.on("click", function() {
                e.store.next(), e.changeBox(e.store.index)
            })
        },
        changeBox: function(e) {
            this.$boxs.hide(), this.$boxs.eq(e).fadeIn(), a.update()
        }
    }, e.exports = n
}, function(e, t) {
    function i(e) {
        this.index = e.index || 0, this.max = e.len
    }
    i.prototype = {
        next: function() {
            this.index = this.index + 1, this.index == this.max && (this.index = 0)
        },
        prev: function() {
            this.index = this.index - 1, this.index < 0 && (this.index = this.max - 1)
        },
        check: function(e) {
            this.index = e % this.max
        }
    }, e.exports = i
}, function(e, t, i) {
    function n(e) {
        this.$tabLeft = $(e.left), this.$tabRight = $(e.right), this.$boxs = $(e.box), this.$point = $(e.point), this.store = new s({
            index: 0,
            len: this.$boxs.size()
        }), this.init()
    }
    var s = i(252),
        a = i(118);
    n.prototype = {
        init: function() {
            var e = this;
            this.$tabLeft.on("click", function() {
                e.store.prev(), e.changeBox(e.store.index)
            }), this.$tabRight.on("click", function() {
                e.store.next(), e.changeBox(e.store.index)
            }), this.$boxs.parent().on("mouseover", function() {
                e.$tabLeft.show(), e.$tabRight.show()
            }), this.$boxs.parent().on("mouseout", function() {
                e.$tabLeft.hide(), e.$tabRight.hide()
            })
        },
        changeBox: function(e) {
            this.$boxs.hide(), this.$point.removeClass("cur"), this.$boxs.eq(e).fadeIn(), this.$point.eq(e).addClass("cur"), a.update(), window.sohuSpm && "function" == typeof window.sohuSpm.domDidChange && window.sohuSpm.domDidChange({
                target: "video-list"
            })
        }
    }, e.exports = n
}, function(e, t, i) {
    function n(e) {
        this.$el = $(e.el), this.init()
    }
    var s = i(255);
    n.prototype = {
        init: function() {
            var e = [],
                t = this;
            this.$el.each(function(t, i) {
                $(this).data("vid") && e.push($(this).data("vid"))
            }), this.model = new s({
                ids: e
            }), this.model.on("sync", function(e) {
                t.$el.each(function(t, i) {
                    for (var n = $(this).data("vid"), s = 0, a = e.length; s < a; s++)
                        if (e[s].id == n) {
                            var o = parseInt(e[s].count, 10);
                            o / 1e5 >= 1 && (o = Math.floor(o / 1e4) + "万"), $(this).html(o)
                        }
                })
            }), this.model.on("error", function() {
                t.$el.hide()
            }), this.model.fetch()
        }
    }, e.exports = n
}, function(e, t, i) {
    var n = i(4);
    e.exports = n.extend({
        init: function(e) {
            var t = e.ids.join("|");
            this.url = "//vstat.v.blog.sohu.com/dostat.do?method=getVideoPlayCount&v=" + t + "&rt=jsonp&n=playnum"
        },
        fetch: function() {
            var e = this;
            $.ajax({
                url: this.url,
                type: "GET",
                dataType: "jsonp",
                jsonpCallback: "playnum",
                success: function(t) {
                    e.trigger("sync", t)
                },
                error: function(t) {
                    e.trigger("error", t)
                },
                timeout: 3e3
            })
        }
    })
}, function(e, t, i) {
    var n = i(257),
        s = i(118),
        a = i(18),
        o = a.subString;
    e.exports = Backbone.View.extend({
        template: _.template(i(258)),
        data: {},
        model: new n,
        events: {},
        initialize: function(e) {
            var t = this;
            this.writer1 = e.writer1, this.writer2 = e.writer2, this.writer3 = e.writer3, this.model.on("sync", function(e) {
                t.data = e, t.render1(), t.render2(), t.render3(), s.update(), t.trigger("ready")
            }), this.model.on("error", function(e) {
                t.trigger("ready")
            }), this.model.fetch()
        },
        fixData: function(e, t) {
            if (e) {
                for (var i = 0, n = e.length; i < n; i++) {
                    if (2 == t && 0 == i) var s = e[i].articles.slice(0, 3);
                    else var s = e[i].articles.slice(0, 2);
                    for (var a = 0, r = s.length; a < r; a++) s[a].sub_title = o(s[a].title, 22), s[a].pic = s[a].pic.replace(/\i\.mp\.itc\.cn/g, "i.mp.itc.cn/c_zoom,w_100,h_67").replace(/cdn\.sohucs\.com\/images/g, "cdn.sohucs.com/c_fill,w_100,h_66,g_faces/images");
                    e[i].articles = s
                }
                return e
            }
        },
        render1: function() {
            $("[data-writer=" + this.writer1 + "]").html(this.template({
                spmStarter: 1,
                data: this.fixData(this.data[this.writer1], 1),
                param: "_f=index_chan08ecorecom_"
            }))
        },
        render2: function() {
            $("[data-writer=" + this.writer2 + "]").html(this.template({
                spmStarter: 5,
                data: this.fixData(this.data[this.writer2], 1),
                param: "_f=index_chan08liferecom_"
            }))
        },
        render3: function() {
            $("[data-writer=" + this.writer3 + "]").html(this.template({
                spmStarter: 2,
                data: this.fixData(this.data[this.writer3], 2),
                param: "_f=index_chan08techrecom_"
            }))
        }
    })
}, function(e, t, i) {
    var n = i(4);
    e.exports = n.extend({
        init: function(e) {
            this.url = "//v2.sohu.com/public-api/originalAuthor"
        },
        fetch: function() {
            var e = this;
            $.ajax({
                url: this.url,
                type: "GET",
                dataType: "jsonp",
                success: function(t) {
                    e.trigger("sync", t)
                },
                error: function(t) {
                    e.trigger("error", t)
                }
            })
        }
    })
}, function(e, t) {
    e.exports = '\n<%if (data && data.length > 0) {%>\n<% for(var i = 0, len = data.length; i < len; i++) { %>\n<%if (data[i].articles.length > 0) {%>\n<div class="modGRA bordR clearfix">\n    <div class="titleR" data-spm="side-mp<%=i + spmStarter%>-nav"><a href="<%=data[i].personalPage%>" target="_blank" title="<%=data[i].authorName%>"><span class="tt"><%=data[i].authorName%></a></span></div>\n    <div data-spm="side-mp<%=i + spmStarter%>-news">\n        <% for(var j = 0, leng = data[i].articles.length < 5 ? data[i].articles.length : 5; j < leng; j++){ %>\n        <div class="pic-text clearfix" data-spm-type="resource">\n            <div class="pic">\n                <a data-psync="<%=param+i+\'_\'+j%>" href="<%=data[i].articles[j].url%>" target="_blank" title="<%=data[i].articles[j].title%>"><img src="//statics.itc.cn/web/static/images/pic/preload.png" data-src="<%=data[i].articles[j].pic%>" alt=""></a>\n            </div>\n            <h4><a data-psync="<%=param+i+\'_\'+j%>" href="<%=data[i].articles[j].url%>" target="_blank" title="<%=data[i].articles[j].title%>"><%=data[i].articles[j].sub_title%></a></h4>\n        </div>\n        <%}%>\n    </div>\n</div>\n<%}%>\n<%}%>\n<%}%>'
}, function(e, t, i) {
    var n = i(216),
        s = new n,
        a = function(e) {
            this.topEv = e.topEv || [], this.clickEv = e.clickEv || !1, this.linkEv = e.linkEv || !1, this.linkSync = e.linkSync || !1, this.news_list = [], this.unique = [], this.delay_timer = null, this.init.apply(this)
        };
    a.prototype = {
        init: function(e) {
            this.clickEv && this.cvHandler(), this.linkEv && this.fixUrl(), this.linkSync && this.fixUrlSync()
        },
        cvHandler: function() {
            if (this.clickEv && this.clickEv.el) {
                if ($(this.clickEv.el).on("click", function() {
                        var e = $(this).data("clev");
                        s.click_trigger(e)
                    }), this.clickEv.sync)
                    for (var e = 0, t = this.clickEv.sync.length; e < t; e++) {
                        var i = this.clickEv.sync[e];
                        ! function(e) {
                            e.plugin.on("ready", function() {
                                $(e.el).on("click", function() {
                                    var e = $(this).data("clev");
                                    s.click_trigger(e)
                                })
                            })
                        }(i)
                    }
            }
        },
        fixUrl: function() {
            var e = this;
            $(this.linkEv).each(function(t, i) {
                var n = $(i).attr(e.linkEv.replace(/[\[\]]/g, ""));
                $(i).one("click", function(e) {
                    var t = $(i).eq(0).attr("href"),
                        s = /\?/g.test(t) ? "&" : "?";
                    $(i).attr("href", t + s + n), e.stopPropagation()
                })
            })
        },
        fixUrlSync: function() {
            for (var e = 0, t = this.linkSync.length; e < t; e++) {
                var i = this.linkSync[e];
                ! function(e) {
                    e.plugin.on("ready", function() {
                        $(e.el).each(function(t, i) {
                            var n = $(i).data(e.param);
                            $(i).one("click", function(e) {
                                var t = $(i).eq(0).attr("href"),
                                    s = /\?/g.test(t) ? "&" : "?";
                                $(i).attr("href", t + s + n), e.stopPropagation()
                            })
                        })
                    })
                }(i)
            }
        }
    }, e.exports = a
}, function(e, t, i) {
    var n = i(261),
        s = i(262),
        a = new s,
        o = i(18);
    e.exports = Backbone.View.extend({
        initialize: function(e) {
            var t = $(e.el);
            "pic_collection" == e.type ? this.pic_collection(t) : "news_channel" == e.type && this.news_channel(t)
        },
        news_channel: function(e) {
            if (0 != e.size()) {
                var t = this,
                    i = new n({
                        type: 4
                    });
                i.on("sync", function(i) {
                    i.topics[0] && t.exChangeNewsChannel(e.eq(0), i.topics[0]), i.topics[1] && t.exChangeNewsChannel(e.eq(1), i.topics[1])
                }), i.on("error", function(e) {
                    console.log("exc-hot-news", e)
                }), i.fetch()
            }
        },
        pic_collection: function(e) {
            if (0 != e.size()) {
                var t = this,
                    i = new n({
                        type: 3
                    });
                i.on("sync", function(i) {
                    for (var n = i && i.topics && i.topics.length, s = [10220401, 10220458, 10220402, 10220459, 10220403, 10220460], a = 0; a < n; a++) ! function(n) {
                        i.topics[n] && t.exChangePicCollection(e.eq(n), i.topics[n], s[n])
                    }(a)
                }), i.on("error", function(e) {
                    console.log("exc-hot-news", e)
                }), i.fetch()
            }
        },
        exChangeNewsChannel: function(e, t) {
            e.find("a")[0].href = t.url, e.find("a").attr("title", t.title), e.find("span").text(o.subString(t.title, 19)), e.find("a img")[0].src = "//0d077ef9e74d8.cdn.sohucs.com/c_fill,w_130,h_86,q_70,g_faces/" + t.img
        },
        exChangePicCollection: function(e, t, i) {
            e.find("a")[0].href = t.url, e.find("a").attr("title", t.title), e.find("a").on("click", function() {
                a.cv_trigger({
                    id: i
                })
            }), e.find("span").text(o.subString(t.title, 27)), e.find("a img")[0].src = "//0d077ef9e74d8.cdn.sohucs.com/c_fill,w_150,h_100,q_70,g_faces/" + t.img
        }
    })
}, function(e, t, i) {
    var n = i(4);
    e.exports = n.extend({
        init: function(e) {
            3 == e.type ? (this.callbackName = "jinrirp_callback_qQnVS1l_png", this.url = "//e80c500186e5e.cdn.sohucs.com/qQnVS1l_png") : 4 == e.type && (this.callbackName = "jinrirp_callback_qH9LY9X_jpg", this.url = "//0d077ef9e74d8.cdn.sohucs.com/qH9LY9X_jpg")
        },
        fetch: function() {
            var e = this;
            $.ajax({
                url: this.url,
                type: "GET",
                dataType: "jsonp",
                jsonpCallback: this.callbackName,
                success: function(t) {
                    e.trigger("sync", t)
                },
                error: function(t) {
                    e.trigger("error", t)
                },
                timeout: 3e3
            })
        }
    })
}, function(e, t, i) {
    var n = i(4),
        s = i(7),
        a = s.get("SUV"),
        o = function(e, t) {
            e = e || "ev";
            var i = "//pv.sohu.com/action.gif?";
            "ev" == e ? i += "actionId=" + t.id + "&SUV=" + a : "cv" == e ? i += "actionId=" + t.id + "&SUV=" + a : "sv" == e && (i += "actionId=" + t.id + "&SUV=" + a), $.getScript(i, function() {})
        };
    e.exports = n.extend({
        init: function() {},
        cv_trigger: function(e) {
            o("cv", e)
        },
        ev_trigger: function(e) {
            o("ev", e)
        },
        sv_trigger: function(e) {
            o("sv", e)
        }
    })
}, function(e, t, i) {
    function n(e) {
        return [e.resourceType || "", e.authorId || "", e.id || "", e.pcm || "", e.type || "", ""].join("|")
    }
    e.exports = Backbone.View.extend({
        template: _.template(i(264)),
        initialize: function() {
            this.getData()
        },
        getData: function() {
            var e = "news.sohu.com" === location.host || "pre.beta.www.sohu.com" === location.host,
                t = e ? "//v2.sohu.com/integration-api/mix/region/" : "//d1.m.sohu.com/integration-api/mix/region/",
                i = e ? 11353 : 1490,
                s = this;
            $.ajax({
                url: [t, i, "?secureScore=50&adapter=pc"].join(""),
                type: "GET",
                dataType: "jsonp",
                success: function(e) {
                    if ("success" === e.message && e.data && e.data.length && e.data[0].multiData && e.data[0].multiData.length >= 2) {
                        for (var t = e.data[0].multiData.slice(0, 2), i = $(document.createDocumentFragment()), a = 0; a < 2; a++) {
                            var o = $.extend({}, e.data[0], t[a]),
                                r = s.template({
                                    data: o,
                                    isEnd: 1 === a,
                                    pcm: n(o)
                                });
                            i.append(r)
                        }
                        $("#news-novelty-seek .content").append(i)
                    } else if ("success" === e.message && e.data && e.data.length >= 2) {
                        for (var t = e.data.slice(0, 2), i = $(document.createDocumentFragment()), a = 0; a < 2; a++) {
                            var o = t[a],
                                r = s.template({
                                    data: o,
                                    isEnd: 1 === a,
                                    pcm: n(o)
                                });
                            i.append(r)
                        }
                        $("#news-novelty-seek .content").append(i)
                    } else $("#news-novelty-seek").hide()
                },
                error: function() {
                    $("#news-novelty-seek").hide()
                }
            })
        }
    })
}, function(e, t) {
    e.exports = '<li <%if (isEnd) {%> class="end" <%}%> <%if (pcm) {%> data-spm-content="<%= pcm %>" <%}%> data-spm-type="resource">\n    <a data-clev="10220405" title="" href="<%= data.url %>" target="_blank">\n        <img src="<%= data.images[0] %>" alt="">\n        <span class="txt"><%= data.title %></span>\n    </a>\n</li>'
}, function(e, t, i) {
    i(266);
    var n = i(7);
    e.exports = Backbone.View.extend({
        events: {
            "click .close-wrap": "removeTheme"
        },
        initialize: function(e) {
            this.$el = $(e.el), this.addTheme()
        },
        addTheme: function() {
            var e = n.get("closeTheme"),
                t = $(".news-index");
            (e = !1) || (t.addClass("festival-twomeeting"), t.find(".main-news-wrap").removeClass("main-news-wrap").css({
                width: "1200px",
                margin: "0 auto"
            }), this.$el.show())
        },
        removeTheme: function() {
            var e = $(".news-index");
            n.set("closeTheme", !0, {
                expires: 1.5
            }), this.$el.hide(), e.removeClass("festival-twomeeting")
        }
    })
}, function(e, t) {}, function(e, t, i) {
    var n = i(268),
        s = i(36),
        a = i(42),
        o = i(16),
        r = i(44),
        c = i(48),
        l = i(59),
        d = i(62),
        h = i(66),
        u = i(269),
        p = i(114),
        f = i(124),
        m = i(201),
        g = i(270),
        _ = i(271),
        v = i(127),
        w = i(274),
        b = i(260),
        x = i(231);
    e.exports = function(e) {
        console.log("参数", e), v.set(e), new c({
            el: $("#search"),
            scene: "ARTICLE",
            channel_id: e.channel_id,
            d_val: $("#news-recommend-nav").find("ul li").eq(1).text()
        });
        var t = new g({
            el: $(".dsy-wrap")
        });
        new _({
            el: $(".dsy-wrap .zan-link")
        }), new s({
            el: "#head-login",
            mark: "pic_collections",
            type: "other"
        }), new d({
            el: "#sogou-words",
            model: new h({
                title: e.title.replace(/\s+/g, ""),
                content: $(".article").text().replace(/\s+/g, ""),
                url: window.location.href
            })
        });
        new r({
            el: "#float-btn",
            data: {
                refreshable: !1,
                home: !0,
                feedback: !0
            }
        });
        new x({
            el: $("#pop-news"),
            needAsk: 17 == e.channel_id
        });
        var i = new a({
            news_id: e.news_id
        });
        i.on("sync", function(e) {
            $("[data-role='pv']").html(new o(e).format())
        }), i.fetch(), new l({
            el: "#uninterested",
            data: {
                opts: e
            }
        }), new m({
            el: "[data-role='hot-news']",
            model: new f({
                scene: "HOMEPAGE"
            })
        }), n.init({
            channel_id: e.channel_id,
            news_id: e.news_id,
            subid: e.media_id,
            type: "dsy"
        }, {
            pic_collection: t
        });
        new u({
            article_type: 5,
            ev_list: $("[data-ev]"),
            cv_list: $("[data-cv]"),
            sv_list: $("[data-sv]")
        });
        $("#comment_area").on("comment:ready", function(e, t) {
            $('.func [data-role="comment-count"]').html(parseInt(t.cmt_sum) || 0)
        }), p.load({
            type: "pic_collections",
            channel_id: e.channel_id,
            args: {
                cms_id: "mp_" + e.news_id,
                media_id: e.media_id,
                title: e.title,
                url: window.location.href.replace(/\s+/g),
                channel_id: e.channel_id,
                news_id: "mp_" + e.news_id,
                dsy: !0
            }
        }), w(1), t.on("exchange", function(e) {
            w(e)
        }), new b({
            el: ".pic-last .pic-group li",
            type: "pic_collection"
        })
    }
}, function(e, t, i) {
    var n = i(71),
        s = i(77),
        a = (i(70), !1),
        o = !1;
    e.exports = {
        init: function(e, t) {
            var i = this;
            this.opts = e, this.deps = t, this.thresholds = [], this.sync(e, t), a = !0, i.depsAd(e, t), i.load(e)
        },
        sync: function(e, t) {
            var i = this;
            t.pic_collection.on("showMoreCollection", function() {
                o = !0, i.depsAd(e, t)
            })
        },
        depsAd: function(e, t, i) {
            a && o && (_.each($(".godR"), function(t, i) {
                0 == i && t && n($(t), "side_" + (i + 1), $.extend({}, e, {}))
            }), o = !1)
        },
        load: function(e) {
            _.each($(".godR"), function(t, i) {
                0 != i && t && n($(t), "side_" + (i + 1), $.extend({}, e, {}))
            }), _.each($("[data-role='god_column']"), function(t, i) {
                t && n($(t), "column_" + (i + 1), $.extend({}, e, {}))
            })
        },
        cutOver: function(e) {
            var t = this.thresholds,
                i = s[this.pageType()][e] || {},
                n = i.ad_id || "";
            if (t.length > 0 && a) {
                for (var o = 0, r = t.length; o < r; o++)
                    if (t[o].adslot_id == n) return t[o].ifNew || !1;
                return !1
            }
            return !1
        },
        pageType: function() {
            var e = this.opts;
            return e && e.sub_id && e.channel_id ? "sub" : e && "dsy" == e.type ? "pic_collection" : e && e.news_id && e.channel_id ? "article" : e && e.tag_id && e.channel_id ? "tag" : e && "news_channel" == e.type ? "news_channel" : e && e.channel_id ? "channel" : e && "v3" == e.type ? "v3_index" : "index"
        }
    }
}, function(e, t, i) {
    var n = i(63),
        s = i(262),
        a = new s,
        o = i(5),
        r = function(e) {
            this.article_type = e.article_type || 1, this.ev_list = e.ev_list || [], this.cv_list = e.cv_list || [], this.sv_list = e.sv_list || [], this.evInterval = null, this.init.apply(this), this.evHandler(), this.svTrigger()
        };
    r.prototype = {
        init: function() {
            var e = this;
            this.ev_list.length > 0 && (this.evInterval = setInterval(function() {
                e.evHandler()
            }, 300)), this.cvHandler(), this.svHandler()
        },
        evHandler: function() {
            var e = this.ev_list.length,
                t = [];
            if (0 == e) return void clearInterval(this.evInterval);
            for (var i = 0; i < e; i++) {
                var s = this.ev_list[i];
                n($(s)) ? a.ev_trigger({
                    id: $(s).data("ev")
                }) : t.push(s)
            }
            this.ev_list = t
        },
        cvHandler: function() {
            for (var e = this.cv_list.length, t = 0; t < e; t++) {
                var i = this.cv_list[t];
                ! function() {
                    var e = $(i).data("cv");
                    $(i).on("click", function() {
                        a.cv_trigger({
                            id: e
                        })
                    })
                }()
            }
        },
        svHandler: function() {
            for (var e = this.sv_list.length, t = 0; t < e; t++) {
                var i = this.sv_list[t];
                ! function() {
                    var e = $(i).data("sv");
                    $(i).on("click", function(t) {
                        var i = o.get("dsy_sv") && o.get("dsy_sv").split(",") || [];
                        i.push(e), o.set("dsy_sv", i.join(","))
                    })
                }()
            }
        },
        svTrigger: function() {
            if (o.get("dsy_sv")) {
                for (var e = o.get("dsy_sv").split(","), t = e.length, i = 0; i < t; i++) a.sv_trigger({
                    id: e[i]
                });
                o.remove("dsy_sv")
            }
        }
    }, e.exports = r
}, function(e, t) {
    e.exports = Backbone.View.extend({
        data: {
            currentPage: 1,
            totalPage: 0,
            showDescText: !0,
            showDescPlayText: !0,
            showLargeImg: !1,
            showPlayImg: !1,
            bigCurrentPage: 1,
            pausePlay: !1,
            timer: 0,
            playDir: 0,
            picGroupPage: 1,
            picGroupTotalPage: 1,
            showMoreDescText: !1,
            isFirstLogout: !0,
            INTER_TIME: 2500,
            ANIMATE_INTER_TIME: 300,
            PIC_GROUP_LEN: 7,
            PIC_WIDTH: 130,
            LEAVE_OUT_HEIGTH: 44,
            FIR_CLICK_PAGE: !0,
            ZOOM_PARAM: "c_zoom,h_50",
            TURN_TIME: 100
        },
        render: {},
        events: {
            "click .pre-img-btn": "preImg",
            "click .next-img-btn": "nextImg",
            "mouseenter .pre-img-btn,.next-img-btn": "showPicSwitchBtnFunc",
            "mouseleave .pre-img-btn,.next-img-btn": "hidePicSwitchBtnFunc",
            "click .pic-main .pic-list .pic": "getCurImg",
            "click .restart-link": "restartLookOver",
            "click .btn-original": "showLargeImgFunc",
            "click .original-close": "closeLargeImgFunc",
            "click .btn-slide": "showPlayImgFunc",
            "click .slide-quit": "hidePlayImgFunc",
            "click .slide-explain .btn-fold": "hideDescPlayTextFunc",
            "click .slide-explain .btn-unfold": "showDescPlayTextFunc",
            "click .slide-box .slide-stop": "pausePlayFunc",
            "click .slide-box .slide-play": "restartPlayFunc",
            "click .slide-box .btn-pre": "playPreImgFunc",
            "click .slide-box .btn-next": "playNextImgFunc",
            "click .pic-main .pre-pic-group": "prePicGroupFunc",
            "click .pic-main .next-pic-group": "nextPicGroupFunc",
            "mouseenter .pic-main .explain": "showMoreDescTextFunc",
            "mouseleave .pic-main .explain": "hideMoreDescTextFunc",
            "mouseenter .btn-include-text": "showHintText",
            "mouseleave .btn-include-text": "hideHintText",
            "mouseenter .pic-list .pic": "showHoverStyle",
            "mouseleave .pic-list .pic": "hideHoverStyle"
        },
        initialize: function() {
            var e = this;
            e.data.totalPage = e.$el.find(".pic-main .picture").length, e.data.picGroupTotalPage = Math.ceil(e.data.totalPage / e.data.PIC_GROUP_LEN), e.$el.find(".pic-main .total,.slide-explain .total").html(e.data.totalPage), e.data.picGroupPage >= e.data.picGroupTotalPage && this.$el.find(".pic-main .next-pic-group").addClass("unbtnl"), this.loadImg();
            var t = this.$el.find(".pic-main .picture img").eq(this.data.currentPage - 1),
                i = this.$el.find(".pic-main .picture").width() - 42;
            t.width() > i && t.css({
                width: i + "px",
                height: "auto"
            });
            for (var n = this.$el.find(".pic-small-group .pic").length, s = 0; s < n; s++) {
                var a = this.$el.find(".pic-small-group .pic").eq(s),
                    t = a.find("img");
                a.find(".bg").css({
                    background: "url('" + t.attr("src") + "') 50% 50% no-repeat",
                    "background-size": "cover"
                })
            }
            $(document).bind("keyup", function(t) {
                if (e === undefined || !e.switchLargeImg instanceof Function || !e.switchPlay instanceof Function) return !1;
                var i = t.keyCode || t.which;
                "27" == i && (e.data.showPlayImg = !1, e.switchLargeImg()), "32" == i && (e.data.pausePlay ? e.data.pausePlay = !1 : e.data.pausePlay = !0, e.switchPlay()), "37" == i && (e.playPreImgFunc(), e.preImg()), "39" == i && (e.playNextImgFunc(), e.nextImg())
            }), $(window).on("resize", function() {
                var t = $(window),
                    i = t.width(),
                    n = setInterval(function() {
                        var s = t.width();
                        s !== i ? i = s : (e.data.showPlayImg && (e.switchLargeImg(), e.$el.find(".slide-main .picture").width(i)), clearInterval(n))
                    }, e.data.TURN_TIME)
            })
        },
        loadImg: function(e) {
            var t = this,
                i = this.$el.find(".pic-main .picture img"),
                n = i.length,
                s = new Image;
            s.onload = function() {
                t.$el.find(".pic-main .picture img").eq(0).attr("src", this.src), i[0].img = new Image, i[0].img.onload = function() {
                    t.$el.find(".pic-main .picture img").eq(0).attr("src", this.src), t.$el.find(".slide-box .slide-pic .picture img").eq(0).attr("src", this.src);
                    for (var e = 1; e < n; e++) i[e].img = new Image,
                        function(e) {
                            i[e].img.onload = function() {
                                t.$el.find(".pic-main .picture img").eq(e).attr("src", this.src), t.$el.find(".slide-box .slide-pic .picture img").eq(e).attr("src", this.src)
                            }, i[e].img.src = i.eq(e).attr("data-url")
                        }(e)
                }, i[0].img.src = i.eq(0).attr("data-url")
            }, s.src = i.eq(0).attr("data-url").replace(".com", ".com/c_zoom,h_450", "i")
        },
        renderCurrentImage: function() {
            if (this.data.currentPage > this.data.totalPage) return this.$el.find(".restart-link").removeClass("hid"), this.$el.find(".pic-main").addClass("hid").siblings(".pic-last").removeClass("hid"), this.trigger("showMoreCollection"), !1;
            if (this.$el.find(".restart-link").addClass("hid"), this.$el.find(".pic-main").removeClass("hid").siblings(".pic-last").addClass("hid"), this.$el.find(".pic-main .picture").addClass("hid").eq(this.data.currentPage - 1).removeClass("hid"), this.$el.find(".pic-main .txt p").addClass("hid").eq(this.data.currentPage - 1).removeClass("hid"), this.$el.find(".pic-main .pic-list .pic").removeClass("cur").eq(this.data.currentPage - 1).addClass("cur"), this.$el.find(".pic-main .num").html(this.data.currentPage), this.data.currentPage <= 1 ? this.$el.find(".pic-main .btn-pre").addClass("hid") : this.$el.find(".pic-main .btn-pre").removeClass("hid"), this.data.currentPage == (this.data.picGroupPage - 1) * this.data.PIC_GROUP_LEN && 0 === this.data.playDir && this.prePicGroupFunc(), this.data.currentPage == this.data.picGroupPage * this.data.PIC_GROUP_LEN + 1 && 1 === this.data.playDir && this.nextPicGroupFunc(), this.trigger("exchange", this.data.currentPage), this.data.currentPage === this.data.bigCurrentPage && this.data.isFirstLogout) return this.data.isFirstLogout = !1, !1;
            var e = this.$el.find(".pic-main .picture img").eq(this.data.currentPage - 1),
                t = this.$el.find(".pic-main .picture").width() - 42;
            e.width() > t && e.css({
                width: t + "px",
                height: "auto"
            }), 0 === this.data.playDir ? e.css({
                opacity: 0,
                filter: "Alpha(opacity=0)"
            }) : 1 === this.data.playDir && e.css({
                opacity: 0,
                filter: "Alpha(opacity=0)"
            }), e.animate({
                left: 0,
                opacity: 1,
                filter: "Alpha(opacity=100)"
            }, this.data.ANIMATE_INTER_TIME, "linear")
        },
        renderCurrentPicGroup: function() {
            this.data.picGroupPage <= 1 ? this.$el.find(".pic-main .pre-pic-group").addClass("unbtnl") : this.$el.find(".pic-main .pre-pic-group").removeClass("unbtnl"), this.data.picGroupPage >= this.data.picGroupTotalPage ? this.$el.find(".pic-main .next-pic-group").addClass("unbtnl") : this.$el.find(".pic-main .next-pic-group").removeClass("unbtnl");
            var e = (this.data.picGroupPage - 1) * this.data.PIC_GROUP_LEN * this.data.PIC_WIDTH;
            this.$el.find(".pic-main .pic-list .con").animate({
                left: -e + "px"
            }, this.data.ANIMATE_INTER_TIME)
        },
        renderPlayCurrentImg: function() {
            var e = this.$el.find(".slide-main .picture"),
                t = e.find("img");
            if (e.removeClass("show").eq(this.data.bigCurrentPage - 1).addClass("show"), this.$el.find(".slide-box .pic-number .num").html(this.data.bigCurrentPage), this.$el.find(".slide-box .pic-exp p").addClass("hid").eq(this.data.bigCurrentPage - 1).removeClass("hid"), this.data.currentPage === this.data.bigCurrentPage && this.data.isFirstLogout) return this.data.isFirstLogout = !1, !1;
            var i = this.$el.find(".slide-box .picture").width() - 42,
                t = this.$el.find(".slide-box .picture img").eq(this.data.bigCurrentPage - 1);
            t.width() > i && t.css({
                width: i + "px",
                height: "auto"
            });
            var n = $(window).width();
            this.$el.find(".slide-main .picture").width(n), 0 === this.data.playDir ? t.css({
                opacity: 0,
                filter: "Alpha(opacity=0)"
            }) : 1 === this.data.playDir && t.css({
                opacity: 0,
                filter: "Alpha(opacity=0)"
            }), t.animate({
                left: 0,
                opacity: 1,
                filter: "Alpha(opacity=100)"
            }, this.data.ANIMATE_INTER_TIME, "linear"), this.trigger("exchange", this.data.currentPage)
        },
        renderDescText: function() {
            var e = this.$el.find(".pic-exp .txt"),
                t = e.find("p").eq(this.data.currentPage - 1);
            if (this.data.showMoreDescText && this.$el.find(".pic-exp .txt p").eq(this.data.currentPage - 1).height() > this.data.LEAVE_OUT_HEIGTH) {
                var i = t.height();
                e.stop().animate({
                    height: i + "px"
                }, "fast")
            } else e.stop().animate({
                height: "44px"
            }, "fast")
        },
        switchPlay: function() {
            this.data.pausePlay ? this.$el.find(".slide-box .slide-stop").addClass("hid").siblings(".slide-play").removeClass("hid") : this.$el.find(".slide-box .slide-stop").removeClass("hid").siblings(".slide-play").addClass("hid")
        },
        switchDescText: function() {
            this.data.showDescText ? this.$el.find(".pic-main .explain").removeClass("explain-hid") : this.$el.find(".pic-main .explain").addClass("explain-hid"), this.data.showDescPlayText ? this.$el.find(".slide-explain .btn-fold").removeClass("hid").siblings(".btn-unfold").addClass("hid").siblings(".explain").removeClass("hid") : this.$el.find(".slide-explain .btn-fold").addClass("hid").siblings(".btn-unfold").removeClass("hid").siblings(".explain").addClass("hid")
        },
        switchLargeImg: function() {
            this.data.showPlayImg ? (this.$el.find(".slide-box").addClass("show"), this.autoPlay()) : (this.renderCurrentImage(), this.$el.find(".slide-box").removeClass("show"))
        },
        switchShowLargeImg: function() {
            if (this.data.showLargeImg) {
                var e = this.$el.find(".pic-main .picture").eq(this.data.currentPage - 1).find("img").attr("data-url");
                this.$el.find(".original-box").addClass("show").find(".original-pic img").attr("src", e);
                var t = this.$el.find(".original-box .original-pic img"),
                    i = this.$el.find(".original-box"),
                    n = t.height(),
                    s = t.width(),
                    a = i.width(),
                    o = i.height();
                n > o - 40 ? t.height(o - 40) : s > a - 40 && t.width(a - 40)
            } else this.$el.find(".original-box").removeClass("show")
        },
        preImg: function() {
            this.data.currentPage > 1 && (this.data.currentPage--, this.data.playDir = 0, this.renderCurrentImage())
        },
        nextImg: function() {
            this.data.currentPage < this.data.totalPage ? this.data.currentPage++ : this.data.currentPage = this.data.totalPage + 1, this.data.playDir = 1, this.renderCurrentImage()
        },
        showPicSwitchBtnFunc: function(e) {
            $(e.currentTarget).find(".icon").removeClass("hid")
        },
        hidePicSwitchBtnFunc: function(e) {
            $(e.currentTarget).find(".icon").addClass("hid")
        },
        showHintText: function(e) {
            $(e.currentTarget).find(".show-hint-text").removeClass("hid")
        },
        hideHintText: function(e) {
            $(e.currentTarget).find(".show-hint-text").addClass("hid")
        },
        showHoverStyle: function(e) {
            $(e.currentTarget).addClass("cur")
        },
        hideHoverStyle: function(e) {
            $(e.currentTarget).removeClass("cur")
        },
        getCurImg: function(e) {
            var t = this.$el.find(".pic-main .pic-list .pic").index(e.currentTarget) + 1;
            t >= 0 && (t < this.data.currentPage ? this.data.playDir = 0 : this.data.playDir = 1, this.data.currentPage = t, this.renderCurrentImage())
        },
        prePicGroupFunc: function() {
            this.data.picGroupPage > 1 && (this.data.picGroupPage--, this.renderCurrentPicGroup())
        },
        nextPicGroupFunc: function() {
            this.data.picGroupPage < this.data.picGroupTotalPage && (this.data.picGroupPage++, this.renderCurrentPicGroup())
        },
        restartLookOver: function() {
            window.location.reload()
        },
        showMoreDescTextFunc: function() {
            this.data.showMoreDescText = !0, this.renderDescText()
        },
        hideMoreDescTextFunc: function() {
            this.data.showMoreDescText = !1, this.renderDescText()
        },
        showLargeImgFunc: function() {
            this.data.showLargeImg = !0, this.switchShowLargeImg()
        },
        closeLargeImgFunc: function() {
            this.data.showLargeImg = !1, this.switchShowLargeImg()
        },
        showPlayImgFunc: function() {
            this.data.showPlayImg = !0, this.data.isFirstLogout = !0, this.data.bigCurrentPage = this.data.currentPage;
            var e = this.$el.find(".slide-box")[0];
            this.launchFullscreen(e)
        },
        launchFullscreen: function(e) {
            if (e.requestFullscreen) e.requestFullscreen();
            else if (e.mozRequestFullScreen) e.mozRequestFullScreen();
            else if (e.msRequestFullscreen) e.msRequestFullscreen();
            else if (e.oRequestFullscreen) e.oRequestFullscreen();
            else if (e.webkitRequestFullscreen) e.webkitRequestFullScreen();
            else {
                this.switchLargeImg();
                var t = $(window).width();
                this.$el.find(".slide-main .picture").width(t)
            }
        },
        exitFullscreen: function() {
            document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.oRequestFullscreen ? document.oCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
        },
        hidePlayImgFunc: function() {
            this.data.showPlayImg = !1, this.data.pausePlay = !0, this.data.isFirstLogout = !0, this.data.currentPage = this.data.bigCurrentPage, this.switchLargeImg(), this.exitFullscreen()
        },
        hideDescPlayTextFunc: function() {
            this.data.showDescPlayText = !1, this.switchDescText()
        },
        showDescPlayTextFunc: function() {
            this.data.showDescPlayText = !0, this.switchDescText()
        },
        autoPlay: function() {
            var e = this;
            e.data.bigCurrentPage = e.data.currentPage, e.data.pausePlay = !1, clearInterval(e.data.timer), e.renderPlayCurrentImg(), e.switchPlay(), e.data.timer = setInterval(function() {
                if (e.data.pausePlay) return !1;
                e.data.bigCurrentPage < e.data.totalPage ? e.data.bigCurrentPage++ : e.data.bigCurrentPage = 1, e.data.playDir = 1, e.renderPlayCurrentImg()
            }, this.data.INTER_TIME)
        },
        pausePlayFunc: function() {
            this.data.pausePlay = !0, this.switchPlay()
        },
        restartPlayFunc: function() {
            this.data.pausePlay = !1, this.switchPlay()
        },
        playPreImgFunc: function() {
            this.data.bigCurrentPage > 1 ? this.data.bigCurrentPage-- : this.data.bigCurrentPage = this.data.totalPage, this.data.playDir = 0, this.renderPlayCurrentImg(), this.pauseOne()
        },
        playNextImgFunc: function() {
            this.data.bigCurrentPage >= this.data.totalPage ? this.data.bigCurrentPage = 1 : this.data.bigCurrentPage++, this.data.playDir = 1, this.renderPlayCurrentImg(), this.pauseOne()
        },
        pauseOne: function() {
            var e = this;
            e.data.pausePlay || (e.data.pausePlay = !0, setTimeout(function() {
                e.data.showPlayImg && e.$el.find(".slide-box .slide-play").hasClass("hid") && (e.data.pausePlay = !1)
            }, e.data.INTER_TIME))
        }
    })
}, function(e, t, i) {
    var n = i(272),
        s = i(273);
    e.exports = Backbone.View.extend({
        data: {
            isLikes: !1,
            picId: 0,
            model: null,
            modleGiveLikes: null
        },
        events: {
            "click .add-likes": "giveLikes"
        },
        giveLikes: function() {
            var e = this;
            if (this.data.isLikes) return !1;
            this.data.modleGiveLikes.on("sync", function(t) {
                e.data.isLikes = !0, e.$el.find(".zan-icon").addClass("hid").siblings(".unzan-icon").removeClass("hid"), e.getLikesNum()
            }), this.data.modleGiveLikes.fetch(this.data.picId)
        },
        getLikesNum: function() {
            var e = this;
            this.data.model.on("sync", function(t) {
                var i = t;
                t <= 0 && (i = 0), e.$el.find(".num").html(i)
            }), this.data.model.fetch(this.data.picId)
        },
        initialize: function() {
            this.data.model = new n, this.data.modleGiveLikes = new s, this.data.picId = this.$el.attr("pic-likes"), this.getLikesNum()
        }
    })
}, function(e, t, i) {
    var n = i(4);
    e.exports = n.extend({
        init: function(e) {
            this.url = "https://m.sohu.com/counter/picturegroup_" + e + "_like/total"
        },
        fetch: function(e) {
            var t = this;
            this.init(e), $.ajax({
                url: this.url,
                type: "GET",
                dataType: "jsonp",
                success: function(e) {
                    t.trigger("sync", e)
                },
                error: function(e) {
                    t.trigger("error", e)
                },
                timeout: 3e3
            })
        }
    })
}, function(e, t, i) {
    var n = i(4);
    e.exports = n.extend({
        init: function(e) {
            this.url = "https://m.sohu.com/counter/picturegroup_" + e + "_like/total/incr"
        },
        fetch: function(e) {
            var t = this;
            this.init(e), $.ajax({
                url: this.url,
                type: "GET",
                dataType: "jsonp",
                success: function(e) {
                    t.trigger("sync", e)
                },
                error: function(e) {
                    t.trigger("error", e)
                },
                timeout: 3e3
            })
        }
    })
}, function(e, t) {
    e.exports = function(e) {
        var t = function(e) {
                return window.encodeURIComponent && "function" == typeof encodeURIComponent ? encodeURIComponent(e) : window.encodeURI && "function" == typeof window.encodeURI ? window.encodeURI(e) : e
            },
            i = function() {
                var e = /suv=(\d+);/gi.exec(document.cookie);
                return e && e[1] || ""
            };
        ! function() {
            var n = escape(1e3 * (new Date).getTime() + Math.round(1e3 * Math.random())),
                s = window.screen.width,
                a = window.screen.height,
                o = t(document.referrer),
                r = !1,
                c = !1,
                l = document.getElementsByTagName("script");
            if (function() {
                    var e = l[l.length - 1],
                        t = e && e.src;
                    if (!t) return !1;
                    var i = t.split("?")[1];
                    if (!i) return !1; - 1 != i.toLowerCase().indexOf("ifr") && (c = !0)
                }(), "undefined" != typeof _focus_pv_id ? r = _focus_pv_id : "undefined" != typeof _pvinsight_id && (r = _pvinsight_id), document.domain.indexOf(".focus.cn") >= 0 || document.domain.indexOf("home.sohu.com") >= 0 || document.domain.indexOf("ihome.sohu.com") >= 0) var d = document.getElementsByTagName("head")[0],
                h = document.body,
                u = d || h,
                p = "//pv.focus.cn/suv",
                f = "//pv.focus.cn";
            else var d = document.getElementsByTagName("head")[0],
                h = document.body,
                u = d || h,
                p = "//pv.sohu.com/suv",
                f = "//pv.sohu.com";
            if (c || top.location == self.location || document.domain.indexOf(".go2map.com") >= 0) {
                var m, g = t(window.location.href);
                if (document.cookie.indexOf("SUV=") < 0 || document.cookie.indexOf("IPLOC=") < 0 ? spv_src = p + "/" : spv_src = f + "/pv.gif", m = r ? spv_src + "?t?=_" + n + "_" + s + "_" + a + "_" + r + "?r?=" + o + "?url?=" + g + "?SUV?=" + i() : spv_src + "?t?=" + n + "_" + s + "_" + a + "?r?=" + o + "?url?=" + g + "?SUV?=" + i(), e && (m += "?p?=" + e), u) {
                    var _ = document.createElement("script");
                    _.src = m, u.appendChild(_)
                } else document.write("<script type='text/javascript' src='" + m + "'><\/script>")
            }
        }()
    }
}]);
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=!!e&&"length"in e&&e.length,n=de.type(e);return"function"!==n&&!de.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function r(e,t,n){if(de.isFunction(t))return de.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return de.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(be.test(t))return de.filter(t,e,n);t=de.filter(t,e)}return de.grep(e,function(e){return de.inArray(e,t)>-1!==n})}function i(e,t){do{e=e[t]}while(e&&1!==e.nodeType);return e}function o(e){var t={};return de.each(e.match(Ee)||[],function(e,n){t[n]=!0}),t}function a(){re.addEventListener?(re.removeEventListener("DOMContentLoaded",s),e.removeEventListener("load",s)):(re.detachEvent("onreadystatechange",s),e.detachEvent("onload",s))}function s(){(re.addEventListener||"load"===e.event.type||"complete"===re.readyState)&&(a(),de.ready())}function u(e,t,n){if(n===undefined&&1===e.nodeType){var r="data-"+t.replace(Ae,"-$1").toLowerCase();if("string"==typeof(n=e.getAttribute(r))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:Se.test(n)?de.parseJSON(n):n)}catch(i){}de.data(e,t,n)}else n=undefined}return n}function l(e){var t;for(t in e)if(("data"!==t||!de.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function c(e,t,n,r){if(Ne(e)){var i,o,a=de.expando,s=e.nodeType,u=s?de.cache:e,l=s?e[a]:e[a]&&a;if(l&&u[l]&&(r||u[l].data)||n!==undefined||"string"!=typeof t)return l||(l=s?e[a]=ne.pop()||de.guid++:a),u[l]||(u[l]=s?{}:{toJSON:de.noop}),"object"!=typeof t&&"function"!=typeof t||(r?u[l]=de.extend(u[l],t):u[l].data=de.extend(u[l].data,t)),o=u[l],r||(o.data||(o.data={}),o=o.data),n!==undefined&&(o[de.camelCase(t)]=n),"string"==typeof t?null==(i=o[t])&&(i=o[de.camelCase(t)]):i=o,i}}function f(e,t,n){if(Ne(e)){var r,i,o=e.nodeType,a=o?de.cache:e,s=o?e[de.expando]:de.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){de.isArray(t)?t=t.concat(de.map(t,de.camelCase)):t in r?t=[t]:(t=de.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;for(;i--;)delete r[t[i]];if(n?!l(r):!de.isEmptyObject(r))return}(n||(delete a[s].data,l(a[s])))&&(o?de.cleanData([e],!0):fe.deleteExpando||a!=a.window?delete a[s]:a[s]=undefined)}}}function d(e,t,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return de.css(e,t,"")},u=s(),l=n&&n[3]||(de.cssNumber[t]?"":"px"),c=(de.cssNumber[t]||"px"!==l&&+u)&&je.exec(de.css(e,t));if(c&&c[3]!==l){l=l||c[3],n=n||[],c=+u||1;do{o=o||".5",c/=o,de.style(e,t,c+l)}while(o!==(o=s()/u)&&1!==o&&--a)}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}function h(e){var t=qe.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function p(e,t){var n,r,i=0,o="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):undefined;if(!o)for(o=[],n=e.childNodes||e;null!=(r=n[i]);i++)!t||de.nodeName(r,t)?o.push(r):de.merge(o,p(r,t));return t===undefined||t&&de.nodeName(e,t)?de.merge([e],o):o}function g(e,t){for(var n,r=0;null!=(n=e[r]);r++)de._data(n,"globalEval",!t||de._data(t[r],"globalEval"))}function m(e){Pe.test(e.type)&&(e.defaultChecked=e.checked)}function v(e,t,n,r,i){for(var o,a,s,u,l,c,f,d=e.length,v=h(t),y=[],b=0;b<d;b++)if((a=e[b])||0===a)if("object"===de.type(a))de.merge(y,a.nodeType?[a]:a);else if(Fe.test(a)){for(u=u||v.appendChild(t.createElement("div")),l=(Be.exec(a)||["",""])[1].toLowerCase(),f=Re[l]||Re._default,u.innerHTML=f[1]+de.htmlPrefilter(a)+f[2],o=f[0];o--;)u=u.lastChild;if(!fe.leadingWhitespace&&Ie.test(a)&&y.push(t.createTextNode(Ie.exec(a)[0])),!fe.tbody)for(a="table"!==l||$e.test(a)?"<table>"!==f[1]||$e.test(a)?0:u:u.firstChild,o=a&&a.childNodes.length;o--;)de.nodeName(c=a.childNodes[o],"tbody")&&!c.childNodes.length&&a.removeChild(c);for(de.merge(y,u.childNodes),u.textContent="";u.firstChild;)u.removeChild(u.firstChild);u=v.lastChild}else y.push(t.createTextNode(a));for(u&&v.removeChild(u),fe.appendChecked||de.grep(p(y,"input"),m),b=0;a=y[b++];)if(r&&de.inArray(a,r)>-1)i&&i.push(a);else if(s=de.contains(a.ownerDocument,a),u=p(v.appendChild(a),"script"),s&&g(u),n)for(o=0;a=u[o++];)Oe.test(a.type||"")&&n.push(a);return u=null,v}function y(){return!0}function b(){return!1}function x(){try{return re.activeElement}catch(e){}}function w(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=undefined);for(s in t)w(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=undefined):null==i&&("string"==typeof n?(i=r,r=undefined):(i=r,r=n,n=undefined)),!1===i)i=b;else if(!i)return e;return 1===o&&(a=i,i=function(e){return de().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=de.guid++)),e.each(function(){de.event.add(this,t,i,r,n)})}function T(e,t){return de.nodeName(e,"table")&&de.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function C(e){return e.type=(null!==de.find.attr(e,"type"))+"/"+e.type,e}function E(e){var t=Ye.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function k(e,t){if(1===t.nodeType&&de.hasData(e)){var n,r,i,o=de._data(e),a=de._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;r<i;r++)de.event.add(t,n,s[n][r])}a.data&&(a.data=de.extend({},a.data))}}function _(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!fe.noCloneEvent&&t[de.expando]){i=de._data(t);for(r in i.events)de.removeEvent(t,r,i.handle);t.removeAttribute(de.expando)}"script"===n&&t.text!==e.text?(C(t).text=e.text,E(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),fe.html5Clone&&e.innerHTML&&!de.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Pe.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function N(e,t,n,r){t=oe.apply([],t);var i,o,a,s,u,l,c=0,f=e.length,d=f-1,h=t[0],g=de.isFunction(h);if(g||f>1&&"string"==typeof h&&!fe.checkClone&&Ke.test(h))return e.each(function(i){var o=e.eq(i);g&&(t[0]=h.call(this,i,o.html())),N(o,t,n,r)});if(f&&(l=v(t,e[0].ownerDocument,!1,e,r),i=l.firstChild,1===l.childNodes.length&&(l=i),i||r)){for(s=de.map(p(l,"script"),C),a=s.length;c<f;c++)o=l,c!==d&&(o=de.clone(o,!0,!0),a&&de.merge(s,p(o,"script"))),n.call(e[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,de.map(s,E),c=0;c<a;c++)o=s[c],Oe.test(o.type||"")&&!de._data(o,"globalEval")&&de.contains(u,o)&&(o.src?de._evalUrl&&de._evalUrl(o.src):de.globalEval((o.text||o.textContent||o.innerHTML||"").replace(Qe,"")));l=i=null}return e}function S(e,t,n){for(var r,i=t?de.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||de.cleanData(p(r)),r.parentNode&&(n&&de.contains(r.ownerDocument,r)&&g(p(r,"script")),r.parentNode.removeChild(r));return e}function A(e,t){var n=de(t.createElement(e)).appendTo(t.body),r=de.css(n[0],"display");return n.detach(),r}function L(e){var t=re,n=nt[e];return n||(n=A(e,t),"none"!==n&&n||(tt=(tt||de("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(tt[0].contentWindow||tt[0].contentDocument).document,t.write(),t.close(),n=A(e,t),tt.detach()),nt[e]=n),n}function j(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function D(e){if(e in vt)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=mt.length;n--;)if((e=mt[n]+t)in vt)return e}function H(e,t){for(var n,r,i,o=[],a=0,s=e.length;a<s;a++)r=e[a],r.style&&(o[a]=de._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&He(r)&&(o[a]=de._data(r,"olddisplay",L(r.nodeName)))):(i=He(r),(n&&"none"!==n||!i)&&de._data(r,"olddisplay",i?n:de.css(r,"display"))));for(a=0;a<s;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function M(e,t,n){var r=ht.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function P(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=de.css(e,n+De[o],!0,i)),r?("content"===n&&(a-=de.css(e,"padding"+De[o],!0,i)),"margin"!==n&&(a-=de.css(e,"border"+De[o]+"Width",!0,i))):(a+=de.css(e,"padding"+De[o],!0,i),"padding"!==n&&(a+=de.css(e,"border"+De[o]+"Width",!0,i)));return a}function B(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=st(e),a=fe.boxSizing&&"border-box"===de.css(e,"boxSizing",!1,o);if(i<=0||null==i){if(i=ut(e,t,o),(i<0||null==i)&&(i=e.style[t]),it.test(i))return i;r=a&&(fe.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+P(e,t,n||(a?"border":"content"),r,o)+"px"}function O(e,t,n,r,i){return new O.prototype.init(e,t,n,r,i)}function I(){return e.setTimeout(function(){yt=undefined}),yt=de.now()}function q(e,t){var n,r={height:e},i=0;for(t=t?1:0;i<4;i+=2-t)n=De[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function R(e,t,n){for(var r,i=(W.tweeners[t]||[]).concat(W.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function F(e,t,n){var r,i,o,a,s,u,l,c=this,f={},d=e.style,h=e.nodeType&&He(e),p=de._data(e,"fxshow");n.queue||(s=de._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,c.always(function(){c.always(function(){s.unqueued--,de.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],l=de.css(e,"display"),"inline"===("none"===l?de._data(e,"olddisplay")||L(e.nodeName):l)&&"none"===de.css(e,"float")&&(fe.inlineBlockNeedsLayout&&"inline"!==L(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",fe.shrinkWrapBlocks()||c.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],xt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!p||p[r]===undefined)continue;h=!0}f[r]=p&&p[r]||de.style(e,r)}else l=undefined;if(de.isEmptyObject(f))"inline"===("none"===l?L(e.nodeName):l)&&(d.display=l);else{p?"hidden"in p&&(h=p.hidden):p=de._data(e,"fxshow",{}),o&&(p.hidden=!h),h?de(e).show():c.done(function(){de(e).hide()}),c.done(function(){var t;de._removeData(e,"fxshow");for(t in f)de.style(e,t,f[t])});for(r in f)a=R(h?p[r]:0,r,c),r in p||(p[r]=a.start,h&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function $(e,t){var n,r,i,o,a;for(n in e)if(r=de.camelCase(n),i=t[r],o=e[n],de.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=de.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function W(e,t,n){var r,i,o=0,a=W.prefilters.length,s=de.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=yt||I(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;a<u;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),o<1&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:de.extend({},t),opts:de.extend(!0,{specialEasing:{},easing:de.easing._default},n),originalProperties:t,originalOptions:n,startTime:yt||I(),duration:n.duration,tweens:[],createTween:function(t,n){var r=de.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for($(c,l.opts.specialEasing);o<a;o++)if(r=W.prefilters[o].call(l,e,c,l.opts))return de.isFunction(r.stop)&&(de._queueHooks(l.elem,l.opts.queue).stop=de.proxy(r.stop,r)),r;return de.map(c,R,l),de.isFunction(l.opts.start)&&l.opts.start.call(e,l),de.fx.timer(de.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function z(e){return de.attr(e,"class")||""}function X(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(Ee)||[];if(de.isFunction(n))for(;r=o[i++];)"+"===r.charAt(0)?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function U(e,t,n,r){function i(s){var u;return o[s]=!0,de.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===qt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function G(e,t){var n,r,i=de.ajaxSettings.flatOptions||{};for(r in t)t[r]!==undefined&&((i[r]?e:n||(n={}))[r]=t[r]);return n&&de.extend(!0,e,n),e}function J(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),i===undefined&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(a in s)if(s[a]&&s[a].test(i)){u.unshift(a);break}if(u[0]in n)o=u[0];else{for(a in n){if(!u[0]||e.converters[a+" "+u[0]]){o=a;break}r||(r=a)}o=o||r}if(o)return o!==u[0]&&u.unshift(o),n[o]}function V(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(f){return{state:"parsererror",error:a?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function K(e){return e.style&&e.style.display||de.css(e,"display")}function Y(e){if(!de.contains(e.ownerDocument||re,e))return!0;for(;e&&1===e.nodeType;){if("none"===K(e)||"hidden"===e.type)return!0;e=e.parentNode}return!1}function Q(e,t,n,r){var i;if(de.isArray(t))de.each(t,function(t,i){n||Wt.test(e)?r(e,i):Q(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==de.type(t))r(e,t);else for(i in t)Q(e+"["+i+"]",t[i],n,r)}function Z(){try{return new e.XMLHttpRequest}catch(t){}}function ee(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function te(e){return de.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}var ne=[],re=e.document,ie=ne.slice,oe=ne.concat,ae=ne.push,se=ne.indexOf,ue={},le=ue.toString,ce=ue.hasOwnProperty,fe={},de=function(e,t){return new de.fn.init(e,t)},he=function(e,t){return t.toUpperCase()};de.fn=de.prototype={jquery:"1.12.4",constructor:de,selector:"",length:0,toArray:function(){return ie.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:ie.call(this)},pushStack:function(e){var t=de.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e){return de.each(this,e)},map:function(e){return this.pushStack(de.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(ie.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:ae,sort:ne.sort,splice:ne.splice},de.extend=de.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||de.isFunction(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(i=arguments[s]))for(r in i)e=a[r],n=i[r],a!==n&&(l&&n&&(de.isPlainObject(n)||(t=de.isArray(n)))?(t?(t=!1,o=e&&de.isArray(e)?e:[]):o=e&&de.isPlainObject(e)?e:{},a[r]=de.extend(l,o,n)):n!==undefined&&(a[r]=n));return a},de.extend({expando:"jQuery"+("1.12.4"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===de.type(e)},isArray:Array.isArray||function(e){return"array"===de.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){var t=e&&e.toString();return!de.isArray(e)&&t-parseFloat(t)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==de.type(e)||e.nodeType||de.isWindow(e))return!1;try{if(e.constructor&&!ce.call(e,"constructor")&&!ce.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}if(!fe.ownFirst)for(t in e)return ce.call(e,t);for(t in e);return t===undefined||ce.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ue[le.call(e)]||"object":typeof e},globalEval:function(t){t&&de.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,he)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var r,i=0;if(n(e))for(r=e.length;i<r&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},trim:function(e){return null==e?"":(e+"").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?de.merge(r,"string"==typeof e?[e]:e):ae.call(r,e)),r},inArray:function(e,t,n){var r;if(t){if(se)return se.call(t,e,n);for(r=t.length,n=n?n<0?Math.max(0,r+n):n:0;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;)e[i++]=t[r++];if(n!==n)for(;t[r]!==undefined;)e[i++]=t[r++];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,r){var i,o,a=0,s=[];if(n(e))for(i=e.length;a<i;a++)null!=(o=t(e[a],a,r))&&s.push(o);else for(a in e)null!=(o=t(e[a],a,r))&&s.push(o);return oe.apply([],s)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(i=e[t],t=e,e=i),de.isFunction(e)?(n=ie.call(arguments,2),r=function(){return e.apply(t||this,n.concat(ie.call(arguments)))},r.guid=e.guid=e.guid||de.guid++,r):undefined},now:function(){return+new Date},support:fe}),"function"==typeof Symbol&&(de.fn[Symbol.iterator]=ne[Symbol.iterator]),de.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ue["[object "+t+"]"]=t.toLowerCase()});var pe=function(e){function t(e,t,n,r){var i,o,a,s,l,f,d,h,p=t&&t.ownerDocument,g=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==g&&9!==g&&11!==g)return n;if(!r&&((t?t.ownerDocument||t:I)!==L&&A(t),t=t||L,D)){if(11!==g&&(f=ge.exec(e)))if(i=f[1]){if(9===g){if(!(a=t.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(p&&(a=p.getElementById(i))&&B(t,a)&&a.id===i)return n.push(a),n}else{if(f[2])return K.apply(n,t.getElementsByTagName(e)),n;if((i=f[3])&&b.getElementsByClassName&&t.getElementsByClassName)return K.apply(n,t.getElementsByClassName(i)),n}if(b.qsa&&!W[e+" "]&&(!H||!H.test(e))){if(1!==g)p=t,h=e;else if("object"!==t.nodeName.toLowerCase()){for((s=t.getAttribute("id"))?s=s.replace(ve,"\\$&"):t.setAttribute("id",s=O),d=C(e),o=d.length,l=ce.test(s)?"#"+s:"[id='"+s+"']";o--;)d[o]=l+" "+c(d[o]);h=d.join(","),p=me.test(e)&&u(t.parentNode)||t}if(h)try{return K.apply(n,p.querySelectorAll(h)),n}catch(m){}finally{s===O&&t.removeAttribute("id")}}}return k(e.replace(oe,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>x.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[O]=!0,e}function i(e){var t=L.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=n.length;r--;)x.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||X)-(~e.sourceIndex||X);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function u(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function l(){}function c(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function f(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=R++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=[q,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(l=t[O]||(t[O]={}),u=l[t.uniqueID]||(l[t.uniqueID]={}),(s=u[r])&&s[0]===q&&s[1]===o)return c[2]=s[2];if(u[r]=c,c[2]=e(t,n,a))return!0}}}function d(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function h(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r);return r}function p(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function g(e,t,n,i,o,a){return i&&!i[O]&&(i=g(i)),o&&!o[O]&&(o=g(o,a)),r(function(r,a,s,u){var l,c,f,d=[],g=[],m=a.length,v=r||h(t||"*",s.nodeType?[s]:s,[]),y=!e||!r&&t?v:p(v,d,e,s,u),b=n?o||(r?e:m||i)?[]:a:y;if(n&&n(y,b,s,u),i)for(l=p(b,g),i(l,[],s,u),c=l.length;c--;)(f=l[c])&&(b[g[c]]=!(y[g[c]]=f));if(r){if(o||e){if(o){for(l=[],c=b.length;c--;)(f=b[c])&&l.push(y[c]=f);o(null,b=[],l,u)}for(c=b.length;c--;)(f=b[c])&&(l=o?Q(r,f):d[c])>-1&&(r[l]=!(a[l]=f))}}else b=p(b===a?b.splice(m,b.length):b),o?o(null,a,b,u):K.apply(a,b)})}function m(e){for(var t,n,r,i=e.length,o=x.relative[e[0].type],a=o||x.relative[" "],s=o?1:0,u=f(function(e){return e===t},a,!0),l=f(function(e){return Q(t,e)>-1},a,!0),h=[function(e,n,r){var i=!o&&(r||n!==_)||((t=n).nodeType?u(e,n,r):l(e,n,r));return t=null,i}];s<i;s++)if(n=x.relative[e[s].type])h=[f(d(h),n)];else{if(n=x.filter[e[s].type].apply(null,e[s].matches),n[O]){for(r=++s;r<i&&!x.relative[e[r].type];r++);return g(s>1&&d(h),s>1&&c(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(oe,"$1"),n,s<r&&m(e.slice(s,r)),r<i&&m(e=e.slice(r)),r<i&&c(e))}h.push(n)}return d(h)}function v(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,l){var c,f,d,h=0,g="0",m=r&&[],v=[],y=_,b=r||o&&x.find.TAG("*",l),w=q+=null==y?1:Math.random()||.1,T=b.length;for(l&&(_=a===L||a||l);g!==T&&null!=(c=b[g]);g++){if(o&&c){for(f=0,a||c.ownerDocument===L||(A(c),s=!D);d=e[f++];)if(d(c,a||L,s)){u.push(c);break}l&&(q=w)}i&&((c=!d&&c)&&h--,r&&m.push(c))}if(h+=g,i&&g!==h){for(f=0;d=n[f++];)d(m,v,a,s);if(r){if(h>0)for(;g--;)m[g]||v[g]||(v[g]=J.call(u));v=p(v)}K.apply(u,v),l&&!r&&v.length>0&&h+n.length>1&&t.uniqueSort(u)}return l&&(q=w,_=y),m};return i?r(a):a}var y,b,x,w,T,C,E,k,_,N,S,A,L,j,D,H,M,P,B,O="sizzle"+1*new Date,I=e.document,q=0,R=0,F=n(),$=n(),W=n(),z=function(e,t){return e===t&&(S=!0),0},X=1<<31,U={}.hasOwnProperty,G=[],J=G.pop,V=G.push,K=G.push,Y=G.slice,Q=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},Z="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ee="[\\x20\\t\\r\\n\\f]",te="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ne="\\["+ee+"*("+te+")(?:"+ee+"*([*^$|!~]?=)"+ee+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+te+"))|)"+ee+"*\\]",re=":("+te+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ne+")*)|.*)\\)|)",ie=new RegExp(ee+"+","g"),oe=new RegExp("^"+ee+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ee+"+$","g"),ae=new RegExp("^"+ee+"*,"+ee+"*"),se=new RegExp("^"+ee+"*([>+~]|"+ee+")"+ee+"*"),ue=new RegExp("="+ee+"*([^\\]'\"]*?)"+ee+"*\\]","g"),le=new RegExp(re),ce=new RegExp("^"+te+"$"),fe={ID:new RegExp("^#("+te+")"),CLASS:new RegExp("^\\.("+te+")"),TAG:new RegExp("^("+te+"|[*])"),ATTR:new RegExp("^"+ne),PSEUDO:new RegExp("^"+re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ee+"*(even|odd|(([+-]|)(\\d*)n|)"+ee+"*(?:([+-]|)"+ee+"*(\\d+)|))"+ee+"*\\)|)","i"),bool:new RegExp("^(?:"+Z+")$","i"),needsContext:new RegExp("^"+ee+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ee+"*((?:-\\d)?\\d*)"+ee+"*\\)|)(?=[^-]|$)","i")},de=/^(?:input|select|textarea|button)$/i,he=/^h\d$/i,pe=/^[^{]+\{\s*\[native \w/,ge=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,me=/[+~]/,ve=/'|\\/g,ye=new RegExp("\\\\([\\da-f]{1,6}"+ee+"?|("+ee+")|.)","ig"),be=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},xe=function(){A()};try{K.apply(G=Y.call(I.childNodes),I.childNodes),G[I.childNodes.length].nodeType}catch(we){K={apply:G.length?function(e,t){V.apply(e,Y.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}b=t.support={},T=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},A=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:I;return r!==L&&9===r.nodeType&&r.documentElement?(L=r,j=L.documentElement,D=!T(L),(n=L.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",xe,!1):n.attachEvent&&n.attachEvent("onunload",xe)),b.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),b.getElementsByTagName=i(function(e){return e.appendChild(L.createComment("")),!e.getElementsByTagName("*").length}),b.getElementsByClassName=pe.test(L.getElementsByClassName),b.getById=i(function(e){return j.appendChild(e).id=O,!L.getElementsByName||!L.getElementsByName(O).length}),b.getById?(x.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&D){var n=t.getElementById(e);return n?[n]:[]}},x.filter.ID=function(e){var t=e.replace(ye,be);return function(e){return e.getAttribute("id")===t}}):(delete x.find.ID,x.filter.ID=function(e){var t=e.replace(ye,be);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),x.find.TAG=b.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):b.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},x.find.CLASS=b.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&D)return t.getElementsByClassName(e)},M=[],H=[],(b.qsa=pe.test(L.querySelectorAll))&&(i(function(e){j.appendChild(e).innerHTML="<a id='"+O+"'></a><select id='"+O+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&H.push("[*^$]="+ee+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||H.push("\\["+ee+"*(?:value|"+Z+")"),e.querySelectorAll("[id~="+O+"-]").length||H.push("~="),e.querySelectorAll(":checked").length||H.push(":checked"),e.querySelectorAll("a#"+O+"+*").length||H.push(".#.+[+~]")}),i(function(e){var t=L.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&H.push("name"+ee+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||H.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),H.push(",.*:")})),(b.matchesSelector=pe.test(P=j.matches||j.webkitMatchesSelector||j.mozMatchesSelector||j.oMatchesSelector||j.msMatchesSelector))&&i(function(e){b.disconnectedMatch=P.call(e,"div"),P.call(e,"[s!='']:x"),M.push("!=",re)}),H=H.length&&new RegExp(H.join("|")),M=M.length&&new RegExp(M.join("|")),t=pe.test(j.compareDocumentPosition),B=t||pe.test(j.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},z=t?function(e,t){if(e===t)return S=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!b.sortDetached&&t.compareDocumentPosition(e)===n?e===L||e.ownerDocument===I&&B(I,e)?-1:t===L||t.ownerDocument===I&&B(I,t)?1:N?Q(N,e)-Q(N,t):0:4&n?-1:1)}:function(e,t){if(e===t)return S=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],u=[t];if(!i||!o)return e===L?-1:t===L?1:i?-1:o?1:N?Q(N,e)-Q(N,t):0;if(i===o)return a(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;s[r]===u[r];)r++;return r?a(s[r],u[r]):s[r]===I?-1:u[r]===I?1:0},L):L},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==L&&A(e),n=n.replace(ue,"='$1']"),b.matchesSelector&&D&&!W[n+" "]&&(!M||!M.test(n))&&(!H||!H.test(n)))try{var r=P.call(e,n);if(r||b.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(we){}return t(n,L,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==L&&A(e),B(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==L&&A(e);var n=x.attrHandle[t.toLowerCase()],r=n&&U.call(x.attrHandle,t.toLowerCase())?n(e,t,!D):undefined;return r!==undefined?r:b.attributes||!D?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(S=!b.detectDuplicates,N=!b.sortStable&&e.slice(0),e.sort(z),S){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return N=null,e},w=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=w(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=w(t);return n},x=t.selectors={cacheLength:50,createPseudo:r,match:fe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ye,be),e[3]=(e[3]||e[4]||e[5]||"").replace(ye,be),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return fe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&le.test(n)&&(t=C(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ye,be).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=F[e+" "];return t||(t=new RegExp("(^|"+ee+")"+e+"("+ee+"|$)"))&&F(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(ie," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,d,h,p,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!u&&!s,b=!1;if(m){if(o){for(;g;){for(d=t;d=d[g];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;p=g="only"===e&&!p&&"nextSibling"}return!0}if(p=[a?m.firstChild:m.lastChild],a&&y){for(d=m,f=d[O]||(d[O]={}),c=f[d.uniqueID]||(f[d.uniqueID]={}),l=c[e]||[],h=l[0]===q&&l[1],b=h&&l[2],d=h&&m.childNodes[h];d=++h&&d&&d[g]||(b=h=0)||p.pop();)if(1===d.nodeType&&++b&&d===t){c[e]=[q,h,b];break}}else if(y&&(d=t,f=d[O]||(d[O]={}),
c=f[d.uniqueID]||(f[d.uniqueID]={}),l=c[e]||[],h=l[0]===q&&l[1],b=h),!1===b)for(;(d=++h&&d&&d[g]||(b=h=0)||p.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++b||(y&&(f=d[O]||(d[O]={}),c=f[d.uniqueID]||(f[d.uniqueID]={}),c[e]=[q,b]),d!==t)););return(b-=i)===r||b%r==0&&b/r>=0}}},PSEUDO:function(e,n){var i,o=x.pseudos[e]||x.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[O]?o(n):o.length>1?(i=[e,e,"",n],x.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=Q(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=E(e.replace(oe,"$1"));return i[O]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(ye,be),function(t){return(t.textContent||t.innerText||w(t)).indexOf(e)>-1}}),lang:r(function(e){return ce.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(ye,be).toLowerCase(),function(t){var n;do{if(n=D?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===j},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!x.pseudos.empty(e)},header:function(e){return he.test(e.nodeName)},input:function(e){return de.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:s(function(){return[0]}),last:s(function(e,t){return[t-1]}),eq:s(function(e,t,n){return[n<0?n+t:n]}),even:s(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:s(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:s(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:s(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},x.pseudos.nth=x.pseudos.eq;for(y in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[y]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(y);for(y in{submit:!0,reset:!0})x.pseudos[y]=function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(y);return l.prototype=x.filters=x.pseudos,x.setFilters=new l,C=t.tokenize=function(e,n){var r,i,o,a,s,u,l,c=$[e+" "];if(c)return n?0:c.slice(0);for(s=e,u=[],l=x.preFilter;s;){r&&!(i=ae.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=se.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(oe," ")}),s=s.slice(r.length));for(a in x.filter)!(i=fe[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):$(e,u).slice(0)},E=t.compile=function(e,t){var n,r=[],i=[],o=W[e+" "];if(!o){for(t||(t=C(e)),n=t.length;n--;)o=m(t[n]),o[O]?r.push(o):i.push(o);o=W(e,v(i,r)),o.selector=e}return o},k=t.select=function(e,t,n,r){var i,o,a,s,l,f="function"==typeof e&&e,d=!r&&C(e=f.selector||e);if(n=n||[],1===d.length){if(o=d[0]=d[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&b.getById&&9===t.nodeType&&D&&x.relative[o[1].type]){if(!(t=(x.find.ID(a.matches[0].replace(ye,be),t)||[])[0]))return n;f&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=fe.needsContext.test(e)?0:o.length;i--&&(a=o[i],!x.relative[s=a.type]);)if((l=x.find[s])&&(r=l(a.matches[0].replace(ye,be),me.test(o[0].type)&&u(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&c(o)))return K.apply(n,r),n;break}}return(f||E(e,d))(r,t,!D,n,!t||me.test(e)&&u(t.parentNode)||t),n},b.sortStable=O.split("").sort(z).join("")===O,b.detectDuplicates=!!S,A(),b.sortDetached=i(function(e){return 1&e.compareDocumentPosition(L.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),b.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(Z,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);de.find=pe,de.expr=pe.selectors,de.expr[":"]=de.expr.pseudos,de.uniqueSort=de.unique=pe.uniqueSort,de.text=pe.getText,de.isXMLDoc=pe.isXML,de.contains=pe.contains;var ge=function(e,t,n){for(var r=[],i=n!==undefined;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&de(e).is(n))break;r.push(e)}return r},me=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},ve=de.expr.match.needsContext,ye=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,be=/^.[^:#\[\.,]*$/;de.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?de.find.matchesSelector(r,e)?[r]:[]:de.find.matches(e,de.grep(t,function(e){return 1===e.nodeType}))},de.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(de(e).filter(function(){for(t=0;t<i;t++)if(de.contains(r[t],this))return!0}));for(t=0;t<i;t++)de.find(e,r[t],n);return n=this.pushStack(i>1?de.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&ve.test(e)?de(e):e||[],!1).length}});var xe,we=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(de.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||xe,"string"==typeof e){if(!(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:we.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof de?t[0]:t,de.merge(this,de.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:re,!0)),ye.test(r[1])&&de.isPlainObject(t))for(r in t)de.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}if((i=re.getElementById(r[2]))&&i.parentNode){if(i.id!==r[2])return xe.find(e);this.length=1,this[0]=i}return this.context=re,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):de.isFunction(e)?"undefined"!=typeof n.ready?n.ready(e):e(de):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),de.makeArray(e,this))}).prototype=de.fn,xe=de(re);var Te=/^(?:parents|prev(?:Until|All))/,Ce={children:!0,contents:!0,next:!0,prev:!0};de.fn.extend({has:function(e){var t,n=de(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(de.contains(this,n[t]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=ve.test(e)||"string"!=typeof e?de(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&de.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?de.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?de.inArray(this[0],de(e)):de.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(de.uniqueSort(de.merge(this.get(),de(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),de.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ge(e,"parentNode")},parentsUntil:function(e,t,n){return ge(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return ge(e,"nextSibling")},prevAll:function(e){return ge(e,"previousSibling")},nextUntil:function(e,t,n){return ge(e,"nextSibling",n)},prevUntil:function(e,t,n){return ge(e,"previousSibling",n)},siblings:function(e){return me((e.parentNode||{}).firstChild,e)},children:function(e){return me(e.firstChild)},contents:function(e){return de.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:de.merge([],e.childNodes)}},function(e,t){de.fn[e]=function(n,r){var i=de.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=de.filter(r,i)),this.length>1&&(Ce[e]||(i=de.uniqueSort(i)),Te.test(e)&&(i=i.reverse())),this.pushStack(i)}});var Ee=/\S+/g;de.Callbacks=function(e){e="string"==typeof e?o(e):de.extend({},e);var t,n,r,i,a=[],s=[],u=-1,l=function(){for(i=e.once,r=t=!0;s.length;u=-1)for(n=s.shift();++u<a.length;)!1===a[u].apply(n[0],n[1])&&e.stopOnFalse&&(u=a.length,n=!1);e.memory||(n=!1),t=!1,i&&(a=n?[]:"")},c={add:function(){return a&&(n&&!t&&(u=a.length-1,s.push(n)),function r(t){de.each(t,function(t,n){de.isFunction(n)?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==de.type(n)&&r(n)})}(arguments),n&&!t&&l()),this},remove:function(){return de.each(arguments,function(e,t){for(var n;(n=de.inArray(t,a,n))>-1;)a.splice(n,1),n<=u&&u--}),this},has:function(e){return e?de.inArray(e,a)>-1:a.length>0},empty:function(){return a&&(a=[]),this},disable:function(){return i=s=[],a=n="",this},disabled:function(){return!a},lock:function(){return i=!0,n||c.disable(),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],s.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},de.extend({Deferred:function(e){var t=[["resolve","done",de.Callbacks("once memory"),"resolved"],["reject","fail",de.Callbacks("once memory"),"rejected"],["notify","progress",de.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return de.Deferred(function(n){de.each(t,function(t,o){var a=de.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&de.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?de.extend(e,r):r}},i={};return r.pipe=r.then,de.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=ie.call(arguments),a=o.length,s=1!==a||e&&de.isFunction(e.promise)?a:0,u=1===s?e:de.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?ie.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);i<a;i++)o[i]&&de.isFunction(o[i].promise)?o[i].promise().progress(l(i,n,t)).done(l(i,r,o)).fail(u.reject):--s;return s||u.resolveWith(r,o),u.promise()}});var ke;de.fn.ready=function(e){return de.ready.promise().done(e),this},de.extend({isReady:!1,readyWait:1,holdReady:function(e){e?de.readyWait++:de.ready(!0)},ready:function(e){(!0===e?--de.readyWait:de.isReady)||(de.isReady=!0,!0!==e&&--de.readyWait>0||(ke.resolveWith(re,[de]),de.fn.triggerHandler&&(de(re).triggerHandler("ready"),de(re).off("ready"))))}}),de.ready.promise=function(t){if(!ke)if(ke=de.Deferred(),"complete"===re.readyState||"loading"!==re.readyState&&!re.documentElement.doScroll)e.setTimeout(de.ready);else if(re.addEventListener)re.addEventListener("DOMContentLoaded",s),e.addEventListener("load",s);else{re.attachEvent("onreadystatechange",s),e.attachEvent("onload",s);var n=!1;try{n=null==e.frameElement&&re.documentElement}catch(r){}n&&n.doScroll&&function i(){if(!de.isReady){try{n.doScroll("left")}catch(r){return e.setTimeout(i,50)}a(),de.ready()}}()}return ke.promise(t)},de.ready.promise();var _e;for(_e in de(fe))break;fe.ownFirst="0"===_e,fe.inlineBlockNeedsLayout=!1,de(function(){var e,t,n,r;(n=re.getElementsByTagName("body")[0])&&n.style&&(t=re.createElement("div"),r=re.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),"undefined"!=typeof t.style.zoom&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",fe.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(r))}),function(){var e=re.createElement("div");fe.deleteExpando=!0;try{delete e.test}catch(t){fe.deleteExpando=!1}e=null}();var Ne=function(e){var t=de.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||!0!==t&&e.getAttribute("classid")===t)},Se=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ae=/([A-Z])/g;de.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return!!(e=e.nodeType?de.cache[e[de.expando]]:e[de.expando])&&!l(e)},data:function(e,t,n){return c(e,t,n)},removeData:function(e,t){return f(e,t)},_data:function(e,t,n){return c(e,t,n,!0)},_removeData:function(e,t){return f(e,t,!0)}}),de.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(e===undefined){if(this.length&&(i=de.data(o),1===o.nodeType&&!de._data(o,"parsedAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=de.camelCase(r.slice(5)),u(o,r,i[r])));de._data(o,"parsedAttrs",!0)}return i}return"object"==typeof e?this.each(function(){de.data(this,e)}):arguments.length>1?this.each(function(){de.data(this,e,t)}):o?u(o,e,de.data(o,e)):undefined},removeData:function(e){return this.each(function(){de.removeData(this,e)})}}),de.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=de._data(e,t),n&&(!r||de.isArray(n)?r=de._data(e,t,de.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=de.queue(e,t),r=n.length,i=n.shift(),o=de._queueHooks(e,t),a=function(){de.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return de._data(e,n)||de._data(e,n,{empty:de.Callbacks("once memory").add(function(){de._removeData(e,t+"queue"),de._removeData(e,n)})})}}),de.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?de.queue(this[0],e):t===undefined?this:this.each(function(){var n=de.queue(this,e,t);de._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&de.dequeue(this,e)})},dequeue:function(e){return this.each(function(){de.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=de.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=undefined),e=e||"fx";a--;)(n=de._data(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}}),function(){var e;fe.shrinkWrapBlocks=function(){if(null!=e)return e;e=!1;var t,n,r;return(n=re.getElementsByTagName("body")[0])&&n.style?(t=re.createElement("div"),r=re.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),"undefined"!=typeof t.style.zoom&&(t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",t.appendChild(re.createElement("div")).style.width="5px",e=3!==t.offsetWidth),n.removeChild(r),e):void 0}}();var Le=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,je=new RegExp("^(?:([+-])=|)("+Le+")([a-z%]*)$","i"),De=["Top","Right","Bottom","Left"],He=function(e,t){return e=t||e,"none"===de.css(e,"display")||!de.contains(e.ownerDocument,e)},Me=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===de.type(n)){i=!0;for(s in n)Me(e,t,s,n[s],!0,o,a)}else if(r!==undefined&&(i=!0,de.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(de(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},Pe=/^(?:checkbox|radio)$/i,Be=/<([\w:-]+)/,Oe=/^$|\/(?:java|ecma)script/i,Ie=/^\s+/,qe="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";!function(){var e=re.createElement("div"),t=re.createDocumentFragment(),n=re.createElement("input");e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",fe.leadingWhitespace=3===e.firstChild.nodeType,fe.tbody=!e.getElementsByTagName("tbody").length,fe.htmlSerialize=!!e.getElementsByTagName("link").length,fe.html5Clone="<:nav></:nav>"!==re.createElement("nav").cloneNode(!0).outerHTML,n.type="checkbox",n.checked=!0,t.appendChild(n),fe.appendChecked=n.checked,e.innerHTML="<textarea>x</textarea>",fe.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue,t.appendChild(e),n=re.createElement("input"),n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),e.appendChild(n),fe.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,fe.noCloneEvent=!!e.addEventListener,e[de.expando]=1,fe.attributes=!e.getAttribute(de.expando)}();var Re={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:fe.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};Re.optgroup=Re.option,Re.tbody=Re.tfoot=Re.colgroup=Re.caption=Re.thead,Re.th=Re.td;var Fe=/<|&#?\w+;/,$e=/<tbody/i;!function(){var t,n,r=re.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})n="on"+t,(fe[t]=n in e)||(r.setAttribute(n,"t"),fe[t]=!1===r.attributes[n].expando);r=null}();var We=/^(?:input|select|textarea)$/i,ze=/^key/,Xe=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ue=/^(?:focusinfocus|focusoutblur)$/,Ge=/^([^.]*)(?:\.(.+)|)/;de.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,d,h,p,g,m=de._data(e);if(m){for(n.handler&&(u=n,n=u.handler,i=u.selector),n.guid||(n.guid=de.guid++),(a=m.events)||(a=m.events={}),(c=m.handle)||(c=m.handle=function(e){return void 0===de||e&&de.event.triggered===e.type?undefined:de.event.dispatch.apply(c.elem,arguments)},c.elem=e),t=(t||"").match(Ee)||[""],s=t.length;s--;)o=Ge.exec(t[s])||[],h=g=o[1],p=(o[2]||"").split(".").sort(),h&&(l=de.event.special[h]||{},h=(i?l.delegateType:l.bindType)||h,l=de.event.special[h]||{},f=de.extend({type:h,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&de.expr.match.needsContext.test(i),namespace:p.join(".")},u),(d=a[h])||(d=a[h]=[],d.delegateCount=0,l.setup&&!1!==l.setup.call(e,r,p,c)||(e.addEventListener?e.addEventListener(h,c,!1):e.attachEvent&&e.attachEvent("on"+h,c))),l.add&&(l.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,f):d.push(f),de.event.global[h]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,d,h,p,g,m=de.hasData(e)&&de._data(e);if(m&&(c=m.events)){for(t=(t||"").match(Ee)||[""],l=t.length;l--;)if(s=Ge.exec(t[l])||[],h=g=s[1],p=(s[2]||"").split(".").sort(),h){for(f=de.event.special[h]||{},h=(r?f.delegateType:f.bindType)||h,d=c[h]||[],s=s[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=d.length;o--;)a=d[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(d.splice(o,1),a.selector&&d.delegateCount--,f.remove&&f.remove.call(e,a));u&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,p,m.handle)||de.removeEvent(e,h,m.handle),delete c[h])}else for(h in c)de.event.remove(e,h+t[l],n,r,!0);de.isEmptyObject(c)&&(delete m.handle,de._removeData(e,"events"))}},trigger:function(t,n,r,i){var o,a,s,u,l,c,f,d=[r||re],h=ce.call(t,"type")?t.type:t,p=ce.call(t,"namespace")?t.namespace.split("."):[];if(s=c=r=r||re,3!==r.nodeType&&8!==r.nodeType&&!Ue.test(h+de.event.triggered)&&(h.indexOf(".")>-1&&(p=h.split("."),h=p.shift(),p.sort()),a=h.indexOf(":")<0&&"on"+h,t=t[de.expando]?t:new de.Event(h,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=p.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:de.makeArray(n,[t]),l=de.event.special[h]||{},i||!l.trigger||!1!==l.trigger.apply(r,n))){if(!i&&!l.noBubble&&!de.isWindow(r)){for(u=l.delegateType||h,Ue.test(u+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),c=s;c===(r.ownerDocument||re)&&d.push(c.defaultView||c.parentWindow||e)}for(f=0;(s=d[f++])&&!t.isPropagationStopped();)t.type=f>1?u:l.bindType||h,o=(de._data(s,"events")||{})[t.type]&&de._data(s,"handle"),o&&o.apply(s,n),(o=a&&s[a])&&o.apply&&Ne(s)&&(t.result=o.apply(s,n),!1===t.result&&t.preventDefault());if(t.type=h,!i&&!t.isDefaultPrevented()&&(!l._default||!1===l._default.apply(d.pop(),n))&&Ne(r)&&a&&r[h]&&!de.isWindow(r)){c=r[a],c&&(r[a]=null),de.event.triggered=h;try{r[h]()}catch(g){}de.event.triggered=undefined,c&&(r[a]=c)}return t.result}},dispatch:function(e){e=de.event.fix(e);var t,n,r,i,o,a=[],s=ie.call(arguments),u=(de._data(this,"events")||{})[e.type]||[],l=de.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,e)){for(a=de.event.handlers.call(this,e,u),t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(o.namespace)||(e.handleObj=o,e.data=o.data,(r=((de.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))!==undefined&&!1===(e.result=r)&&(e.preventDefault(),e.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(!0!==u.disabled||"click"!==e.type)){for(r=[],n=0;n<s;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?de(i,this).index(u)>-1:de.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},fix:function(e){if(e[de.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=Xe.test(i)?this.mouseHooks:ze.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new de.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||re),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button,a=t.fromElement;return null==e.pageX&&null!=t.clientX&&(r=e.target.ownerDocument||re,i=r.documentElement,n=r.body,e.pageX=t.clientX+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?t.toElement:a),e.which||o===undefined||(e.which=1&o?1:2&o?3:4&o?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==x()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===x()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(de.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(e){return de.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n){var r=de.extend(new de.Event,n,{type:e,isSimulated:!0});de.event.trigger(r,null,t),r.isDefaultPrevented()&&n.preventDefault()}},de.removeEvent=re.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)}:function(e,t,n){var r="on"+t;e.detachEvent&&("undefined"==typeof e[r]&&(e[r]=null),e.detachEvent(r,n))},de.Event=function(e,t){if(!(this instanceof de.Event))return new de.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===undefined&&!1===e.returnValue?y:b):this.type=e,t&&de.extend(this,t),this.timeStamp=e&&e.timeStamp||de.now(),this[de.expando]=!0},de.Event.prototype={constructor:de.Event,isDefaultPrevented:b,isPropagationStopped:b,isImmediatePropagationStopped:b,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=y,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=y,e&&!this.isSimulated&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=y,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},de.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){de.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||de.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),fe.submit||(de.event.special.submit={setup:function(){if(de.nodeName(this,"form"))return!1;de.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=de.nodeName(t,"input")||de.nodeName(t,"button")?de.prop(t,"form"):undefined;n&&!de._data(n,"submit")&&(de.event.add(n,"submit._submit",function(e){e._submitBubble=!0}),de._data(n,"submit",!0))})},postDispatch:function(e){e._submitBubble&&(delete e._submitBubble,this.parentNode&&!e.isTrigger&&de.event.simulate("submit",this.parentNode,e))},teardown:function(){if(de.nodeName(this,"form"))return!1;de.event.remove(this,"._submit")}}),fe.change||(de.event.special.change={setup:function(){if(We.test(this.nodeName))return"checkbox"!==this.type&&"radio"!==this.type||(de.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._justChanged=!0)}),de.event.add(this,"click._change",function(e){this._justChanged&&!e.isTrigger&&(this._justChanged=!1),de.event.simulate("change",this,e)})),!1;de.event.add(this,"beforeactivate._change",function(e){var t=e.target;We.test(t.nodeName)&&!de._data(t,"change")&&(de.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||de.event.simulate("change",this.parentNode,e)}),de._data(t,"change",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return de.event.remove(this,"._change"),!We.test(this.nodeName)}}),fe.focusin||de.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){de.event.simulate(t,e.target,de.event.fix(e))};de.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=de._data(r,t);i||r.addEventListener(e,n,!0),de._data(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=de._data(r,t)-1;i?de._data(r,t,i):(r.removeEventListener(e,n,!0),de._removeData(r,t))}}}),de.fn.extend({on:function(e,t,n,r){return w(this,e,t,n,r)},one:function(e,t,n,r){return w(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,de(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=undefined),!1===n&&(n=b),this.each(function(){de.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){de.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return de.event.trigger(e,t,n,!0)}});var Je=new RegExp("<(?:"+qe+")[\\s/>]","i"),Ve=/<script|<style|<link/i,Ke=/checked\s*(?:[^=]|=\s*.checked.)/i,Ye=/^true\/(.*)/,Qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Ze=h(re),et=Ze.appendChild(re.createElement("div"));de.extend({htmlPrefilter:function(e){return e.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u=de.contains(e.ownerDocument,e);if(fe.html5Clone||de.isXMLDoc(e)||!Je.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(et.innerHTML=e.outerHTML,et.removeChild(o=et.firstChild)),!(fe.noCloneEvent&&fe.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||de.isXMLDoc(e)))for(r=p(o),s=p(e),a=0;null!=(i=s[a]);++a)r[a]&&_(i,r[a]);if(t)if(n)for(s=s||p(e),r=r||p(o),a=0;null!=(i=s[a]);a++)k(i,r[a]);else k(e,o);return r=p(o,"script"),r.length>0&&g(r,!u&&p(e,"script")),r=s=i=null,o},cleanData:function(e,t){for(var n,r,i,o,a=0,s=de.expando,u=de.cache,l=fe.attributes,c=de.event.special;null!=(n=e[a]);a++)if((t||Ne(n))&&(i=n[s],o=i&&u[i])){if(o.events)for(r in o.events)c[r]?de.event.remove(n,r):de.removeEvent(n,r,o.handle);u[i]&&(delete u[i],l||"undefined"==typeof n.removeAttribute?n[s]=undefined:n.removeAttribute(s),ne.push(i))}}}),de.fn.extend({domManip:N,detach:function(e){return S(this,e,!0)},remove:function(e){return S(this,e)},text:function(e){return Me(this,function(e){return e===undefined?de.text(this):this.empty().append((this[0]&&this[0].ownerDocument||re).createTextNode(e))},null,e,arguments.length)},append:function(){return N(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){T(this,e).appendChild(e)}})},prepend:function(){return N(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=T(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return N(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return N(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&de.cleanData(p(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&de.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return de.clone(this,e,t)})},html:function(e){return Me(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined)return 1===t.nodeType?t.innerHTML.replace(/ jQuery\d+="(?:null|\d+)"/g,""):undefined;if("string"==typeof e&&!Ve.test(e)&&(fe.htmlSerialize||!Je.test(e))&&(fe.leadingWhitespace||!Ie.test(e))&&!Re[(Be.exec(e)||["",""])[1].toLowerCase()]){e=de.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(de.cleanData(p(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return N(this,arguments,function(t){
var n=this.parentNode;de.inArray(this,e)<0&&(de.cleanData(p(this)),n&&n.replaceChild(t,this))},e)}}),de.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){de.fn[e]=function(e){for(var n,r=0,i=[],o=de(e),a=o.length-1;r<=a;r++)n=r===a?this:this.clone(!0),de(o[r])[t](n),ae.apply(i,n.get());return this.pushStack(i)}});var tt,nt={HTML:"block",BODY:"block"},rt=/^margin/,it=new RegExp("^("+Le+")(?!px)[a-z%]+$","i"),ot=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i},at=re.documentElement;!function(){function t(){var t,c,f=re.documentElement;f.appendChild(u),l.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",n=i=s=!1,r=a=!0,e.getComputedStyle&&(c=e.getComputedStyle(l),n="1%"!==(c||{}).top,s="2px"===(c||{}).marginLeft,i="4px"===(c||{width:"4px"}).width,l.style.marginRight="50%",r="4px"===(c||{marginRight:"4px"}).marginRight,t=l.appendChild(re.createElement("div")),t.style.cssText=l.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",t.style.marginRight=t.style.width="0",l.style.width="1px",a=!parseFloat((e.getComputedStyle(t)||{}).marginRight),l.removeChild(t)),l.style.display="none",o=0===l.getClientRects().length,o&&(l.style.display="",l.innerHTML="<table><tr><td></td><td>t</td></tr></table>",l.childNodes[0].style.borderCollapse="separate",t=l.getElementsByTagName("td"),t[0].style.cssText="margin:0;border:0;padding:0;display:none",(o=0===t[0].offsetHeight)&&(t[0].style.display="",t[1].style.display="none",o=0===t[0].offsetHeight)),f.removeChild(u)}var n,r,i,o,a,s,u=re.createElement("div"),l=re.createElement("div");l.style&&(l.style.cssText="float:left;opacity:.5",fe.opacity="0.5"===l.style.opacity,fe.cssFloat=!!l.style.cssFloat,l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",fe.clearCloneStyle="content-box"===l.style.backgroundClip,u=re.createElement("div"),u.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",l.innerHTML="",u.appendChild(l),fe.boxSizing=""===l.style.boxSizing||""===l.style.MozBoxSizing||""===l.style.WebkitBoxSizing,de.extend(fe,{reliableHiddenOffsets:function(){return null==n&&t(),o},boxSizingReliable:function(){return null==n&&t(),i},pixelMarginRight:function(){return null==n&&t(),r},pixelPosition:function(){return null==n&&t(),n},reliableMarginRight:function(){return null==n&&t(),a},reliableMarginLeft:function(){return null==n&&t(),s}}))}();var st,ut,lt=/^(top|right|bottom|left)$/;e.getComputedStyle?(st=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},ut=function(e,t,n){var r,i,o,a,s=e.style;return n=n||st(e),a=n?n.getPropertyValue(t)||n[t]:undefined,""!==a&&a!==undefined||de.contains(e.ownerDocument,e)||(a=de.style(e,t)),n&&!fe.pixelMarginRight()&&it.test(a)&&rt.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o),a===undefined?a:a+""}):at.currentStyle&&(st=function(e){return e.currentStyle},ut=function(e,t,n){var r,i,o,a,s=e.style;return n=n||st(e),a=n?n[t]:undefined,null==a&&s&&s[t]&&(a=s[t]),it.test(a)&&!lt.test(t)&&(r=s.left,i=e.runtimeStyle,o=i&&i.left,o&&(i.left=e.currentStyle.left),s.left="fontSize"===t?"1em":a,a=s.pixelLeft+"px",s.left=r,o&&(i.left=o)),a===undefined?a:a+""||"auto"});var ct=/alpha\([^)]*\)/i,ft=/opacity\s*=\s*([^)]*)/i,dt=/^(none|table(?!-c[ea]).+)/,ht=new RegExp("^("+Le+")(.*)$","i"),pt={position:"absolute",visibility:"hidden",display:"block"},gt={letterSpacing:"0",fontWeight:"400"},mt=["Webkit","O","Moz","ms"],vt=re.createElement("div").style;de.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=ut(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":fe.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=de.camelCase(t),u=e.style;if(t=de.cssProps[s]||(de.cssProps[s]=D(s)||s),a=de.cssHooks[t]||de.cssHooks[s],n===undefined)return a&&"get"in a&&(i=a.get(e,!1,r))!==undefined?i:u[t];if(o=typeof n,"string"===o&&(i=je.exec(n))&&i[1]&&(n=d(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(de.cssNumber[s]?"":"px")),fe.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),!(a&&"set"in a&&(n=a.set(e,n,r))===undefined)))try{u[t]=n}catch(l){}}},css:function(e,t,n,r){var i,o,a,s=de.camelCase(t);return t=de.cssProps[s]||(de.cssProps[s]=D(s)||s),a=de.cssHooks[t]||de.cssHooks[s],a&&"get"in a&&(o=a.get(e,!0,n)),o===undefined&&(o=ut(e,t,r)),"normal"===o&&t in gt&&(o=gt[t]),""===n||n?(i=parseFloat(o),!0===n||isFinite(i)?i||0:o):o}}),de.each(["height","width"],function(e,t){de.cssHooks[t]={get:function(e,n,r){if(n)return dt.test(de.css(e,"display"))&&0===e.offsetWidth?ot(e,pt,function(){return B(e,t,r)}):B(e,t,r)},set:function(e,n,r){var i=r&&st(e);return M(e,n,r?P(e,t,r,fe.boxSizing&&"border-box"===de.css(e,"boxSizing",!1,i),i):0)}}}),fe.opacity||(de.cssHooks.opacity={get:function(e,t){return ft.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=de.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===de.trim(o.replace(ct,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=ct.test(o)?o.replace(ct,i):o+" "+i)}}),de.cssHooks.marginRight=j(fe.reliableMarginRight,function(e,t){if(t)return ot(e,{display:"inline-block"},ut,[e,"marginRight"])}),de.cssHooks.marginLeft=j(fe.reliableMarginLeft,function(e,t){if(t)return(parseFloat(ut(e,"marginLeft"))||(de.contains(e.ownerDocument,e)?e.getBoundingClientRect().left-ot(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}):0))+"px"}),de.each({margin:"",padding:"",border:"Width"},function(e,t){de.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+De[r]+t]=o[r]||o[r-2]||o[0];return i}},rt.test(e)||(de.cssHooks[e+t].set=M)}),de.fn.extend({css:function(e,t){return Me(this,function(e,t,n){var r,i,o={},a=0;if(de.isArray(t)){for(r=st(e),i=t.length;a<i;a++)o[t[a]]=de.css(e,t[a],!1,r);return o}return n!==undefined?de.style(e,t,n):de.css(e,t)},e,t,arguments.length>1)},show:function(){return H(this,!0)},hide:function(){return H(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){He(this)?de(this).show():de(this).hide()})}}),de.Tween=O,O.prototype={constructor:O,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||de.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(de.cssNumber[n]?"":"px")},cur:function(){var e=O.propHooks[this.prop];return e&&e.get?e.get(this):O.propHooks._default.get(this)},run:function(e){var t,n=O.propHooks[this.prop];return this.options.duration?this.pos=t=de.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):O.propHooks._default.set(this),this}},O.prototype.init.prototype=O.prototype,O.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=de.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){de.fx.step[e.prop]?de.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[de.cssProps[e.prop]]&&!de.cssHooks[e.prop]?e.elem[e.prop]=e.now:de.style(e.elem,e.prop,e.now+e.unit)}}},O.propHooks.scrollTop=O.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},de.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},de.fx=O.prototype.init,de.fx.step={};var yt,bt,xt=/^(?:toggle|show|hide)$/,wt=/queueHooks$/;de.Animation=de.extend(W,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return d(n.elem,e,je.exec(t),n),n}]},tweener:function(e,t){de.isFunction(e)?(t=e,e=["*"]):e=e.match(Ee);for(var n,r=0,i=e.length;r<i;r++)n=e[r],W.tweeners[n]=W.tweeners[n]||[],W.tweeners[n].unshift(t)},prefilters:[F],prefilter:function(e,t){t?W.prefilters.unshift(e):W.prefilters.push(e)}}),de.speed=function(e,t,n){var r=e&&"object"==typeof e?de.extend({},e):{complete:n||!n&&t||de.isFunction(e)&&e,duration:e,easing:n&&t||t&&!de.isFunction(t)&&t};return r.duration=de.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in de.fx.speeds?de.fx.speeds[r.duration]:de.fx.speeds._default,null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){de.isFunction(r.old)&&r.old.call(this),r.queue&&de.dequeue(this,r.queue)},r},de.fn.extend({fadeTo:function(e,t,n,r){return this.filter(He).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=de.isEmptyObject(e),o=de.speed(t,n,r),a=function(){var t=W(this,de.extend({},e),o);(i||de._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=de.timers,a=de._data(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&wt.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||de.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=de._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=de.timers,a=r?r.length:0;for(n.finish=!0,de.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),de.each(["toggle","show","hide"],function(e,t){var n=de.fn[t];de.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(q(t,!0),e,r,i)}}),de.each({slideDown:q("show"),slideUp:q("hide"),slideToggle:q("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){de.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),de.timers=[],de.fx.tick=function(){var e,t=de.timers,n=0;for(yt=de.now();n<t.length;n++)(e=t[n])()||t[n]!==e||t.splice(n--,1);t.length||de.fx.stop(),yt=undefined},de.fx.timer=function(e){de.timers.push(e),e()?de.fx.start():de.timers.pop()},de.fx.interval=13,de.fx.start=function(){bt||(bt=e.setInterval(de.fx.tick,de.fx.interval))},de.fx.stop=function(){e.clearInterval(bt),bt=null},de.fx.speeds={slow:600,fast:200,_default:400},de.fn.delay=function(t,n){return t=de.fx?de.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e,t=re.createElement("input"),n=re.createElement("div"),r=re.createElement("select"),i=r.appendChild(re.createElement("option"));n=re.createElement("div"),n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=n.getElementsByTagName("a")[0],t.setAttribute("type","checkbox"),n.appendChild(t),e=n.getElementsByTagName("a")[0],e.style.cssText="top:1px",fe.getSetAttribute="t"!==n.className,fe.style=/top/.test(e.getAttribute("style")),fe.hrefNormalized="/a"===e.getAttribute("href"),fe.checkOn=!!t.value,fe.optSelected=i.selected,fe.enctype=!!re.createElement("form").enctype,r.disabled=!0,fe.optDisabled=!i.disabled,t=re.createElement("input"),t.setAttribute("value",""),fe.input=""===t.getAttribute("value"),t.value="t",t.setAttribute("type","radio"),fe.radioValue="t"===t.value}();de.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=de.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,de(this).val()):e,null==i?i="":"number"==typeof i?i+="":de.isArray(i)&&(i=de.map(i,function(e){return null==e?"":e+""})),(t=de.valHooks[this.type]||de.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return(t=de.valHooks[i.type]||de.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace(/\r/g,""):null==n?"":n)}}}),de.extend({valHooks:{option:{get:function(e){var t=de.find.attr(e,"value");return null!=t?t:de.trim(de.text(e)).replace(/[\x20\t\r\n\f]+/g," ")}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,a=o?null:[],s=o?i+1:r.length,u=i<0?s:o?i:0;u<s;u++)if(n=r[u],(n.selected||u===i)&&(fe.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!de.nodeName(n.parentNode,"optgroup"))){if(t=de(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=de.makeArray(t),a=i.length;a--;)if(r=i[a],de.inArray(de.valHooks.option.get(r),o)>-1)try{r.selected=n=!0}catch(s){r.scrollHeight}else r.selected=!1;return n||(e.selectedIndex=-1),i}}}}),de.each(["radio","checkbox"],function(){de.valHooks[this]={set:function(e,t){if(de.isArray(t))return e.checked=de.inArray(de(e).val(),t)>-1}},fe.checkOn||(de.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Tt,Ct,Et=de.expr.attrHandle,kt=/^(?:checked|selected)$/i,_t=fe.getSetAttribute,Nt=fe.input;de.fn.extend({attr:function(e,t){return Me(this,de.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){de.removeAttr(this,e)})}}),de.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?de.prop(e,t,n):(1===o&&de.isXMLDoc(e)||(t=t.toLowerCase(),i=de.attrHooks[t]||(de.expr.match.bool.test(t)?Ct:Tt)),n!==undefined?null===n?void de.removeAttr(e,t):i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=de.find.attr(e,t),null==r?undefined:r))},attrHooks:{type:{set:function(e,t){if(!fe.radioValue&&"radio"===t&&de.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(Ee);if(o&&1===e.nodeType)for(;n=o[i++];)r=de.propFix[n]||n,de.expr.match.bool.test(n)?Nt&&_t||!kt.test(n)?e[r]=!1:e[de.camelCase("default-"+n)]=e[r]=!1:de.attr(e,n,""),e.removeAttribute(_t?n:r)}}),Ct={set:function(e,t,n){return!1===t?de.removeAttr(e,n):Nt&&_t||!kt.test(n)?e.setAttribute(!_t&&de.propFix[n]||n,n):e[de.camelCase("default-"+n)]=e[n]=!0,n}},de.each(de.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Et[t]||de.find.attr;Nt&&_t||!kt.test(t)?Et[t]=function(e,t,r){var i,o;return r||(o=Et[t],Et[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,Et[t]=o),i}:Et[t]=function(e,t,n){if(!n)return e[de.camelCase("default-"+t)]?t.toLowerCase():null}}),Nt&&_t||(de.attrHooks.value={set:function(e,t,n){if(!de.nodeName(e,"input"))return Tt&&Tt.set(e,t,n);e.defaultValue=t}}),_t||(Tt={set:function(e,t,n){var r=e.getAttributeNode(n);if(r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="","value"===n||t===e.getAttribute(n))return t}},Et.id=Et.name=Et.coords=function(e,t,n){var r;if(!n)return(r=e.getAttributeNode(t))&&""!==r.value?r.value:null},de.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified)return n.value},set:Tt.set},de.attrHooks.contenteditable={set:function(e,t,n){Tt.set(e,""!==t&&t,n)}},de.each(["width","height"],function(e,t){de.attrHooks[t]={set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}}})),fe.style||(de.attrHooks.style={get:function(e){return e.style.cssText||undefined},set:function(e,t){return e.style.cssText=t+""}});var St=/^(?:input|select|textarea|button|object)$/i,At=/^(?:a|area)$/i;de.fn.extend({prop:function(e,t){return Me(this,de.prop,e,t,arguments.length>1)},removeProp:function(e){return e=de.propFix[e]||e,this.each(function(){try{this[e]=undefined,delete this[e]}catch(t){}})}}),de.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&de.isXMLDoc(e)||(t=de.propFix[t]||t,i=de.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=de.find.attr(e,"tabindex");return t?parseInt(t,10):St.test(e.nodeName)||At.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),fe.hrefNormalized||de.each(["href","src"],function(e,t){de.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),fe.optSelected||(de.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),de.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){de.propFix[this.toLowerCase()]=this}),fe.enctype||(de.propFix.enctype="encoding");de.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(de.isFunction(e))return this.each(function(t){de(this).addClass(e.call(this,t,z(this)))});if("string"==typeof e&&e)for(t=e.match(Ee)||[];n=this[u++];)if(i=z(n),r=1===n.nodeType&&(" "+i+" ").replace(/[\t\r\n\f]/g," ")){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");s=de.trim(r),i!==s&&de.attr(n,"class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(de.isFunction(e))return this.each(function(t){de(this).removeClass(e.call(this,t,z(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(Ee)||[];n=this[u++];)if(i=z(n),r=1===n.nodeType&&(" "+i+" ").replace(/[\t\r\n\f]/g," ")){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");s=de.trim(r),i!==s&&de.attr(n,"class",s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):de.isFunction(e)?this.each(function(n){de(this).toggleClass(e.call(this,n,z(this),t),t)}):this.each(function(){var t,r,i,o;if("string"===n)for(r=0,i=de(this),o=e.match(Ee)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else e!==undefined&&"boolean"!==n||(t=z(this),t&&de._data(this,"__className__",t),de.attr(this,"class",t||!1===e?"":de._data(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+z(n)+" ").replace(/[\t\r\n\f]/g," ").indexOf(t)>-1)return!0;return!1}}),de.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){de.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),de.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}});var Lt=e.location,jt=de.now(),Dt=/\?/;de.parseJSON=function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"");var n,r=null,i=de.trim(t+"");return i&&!de.trim(i.replace(/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g,function(e,t,i,o){return n&&t&&(r=0),0===r?e:(n=i||t,r+=!o-!i,"")}))?Function("return "+i)():de.error("Invalid JSON: "+t)},de.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;try{e.DOMParser?(r=new e.DOMParser,n=r.parseFromString(t,"text/xml")):(n=new e.ActiveXObject("Microsoft.XMLDOM"),n.async="false",n.loadXML(t))}catch(i){n=undefined}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||de.error("Invalid XML: "+t),n};var Ht=/([?&])_=[^&]*/,Mt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Bt=/^(?:GET|HEAD)$/,Ot=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,It={},qt={},Rt="*/".concat("*"),Ft=Lt.href,$t=Ot.exec(Ft.toLowerCase())||[];de.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ft,type:"GET",isLocal:Pt.test($t[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":de.parseJSON,"text xml":de.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?G(G(e,de.ajaxSettings),t):G(de.ajaxSettings,e)},ajaxPrefilter:X(It),ajaxTransport:X(qt),ajax:function(t,n){function r(t,n,r,i){var o,f,y,b,w,C=n;2!==x&&(x=2,u&&e.clearTimeout(u),c=undefined,s=i||"",T.readyState=t>0?4:0,o=t>=200&&t<300||304===t,r&&(b=J(d,T,r)),b=V(d,b,T,o),o?(d.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(de.lastModified[a]=w),(w=T.getResponseHeader("etag"))&&(de.etag[a]=w)),204===t||"HEAD"===d.type?C="nocontent":304===t?C="notmodified":(C=b.state,f=b.data,y=b.error,o=!y)):(y=C,!t&&C||(C="error",t<0&&(t=0))),T.status=t,T.statusText=(n||C)+"",o?g.resolveWith(h,[f,C,T]):g.rejectWith(h,[T,C,y]),T.statusCode(v),v=undefined,l&&p.trigger(o?"ajaxSuccess":"ajaxError",[T,d,o?f:y]),m.fireWith(h,[T,C]),l&&(p.trigger("ajaxComplete",[T,d]),--de.active||de.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=undefined),n=n||{};var i,o,a,s,u,l,c,f,d=de.ajaxSetup({},n),h=d.context||d,p=d.context&&(h.nodeType||h.jquery)?de(h):de.event,g=de.Deferred(),m=de.Callbacks("once memory"),v=d.statusCode||{},y={},b={},x=0,w="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!f)for(f={};t=Mt.exec(s);)f[t[1].toLowerCase()]=t[2];t=f[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=b[n]=b[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(d.mimeType=e),this},statusCode:function(e){var t;if(e)if(x<2)for(t in e)v[t]=[v[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||w;return c&&c.abort(t),r(0,t),this}};if(g.promise(T).complete=m.add,T.success=T.done,T.error=T.fail,d.url=((t||d.url||Ft)+"").replace(/#.*$/,"").replace(/^\/\//,$t[1]+"//"),d.type=n.method||n.type||d.method||d.type,d.dataTypes=de.trim(d.dataType||"*").toLowerCase().match(Ee)||[""],null==d.crossDomain&&(i=Ot.exec(d.url.toLowerCase()),d.crossDomain=!(!i||i[1]===$t[1]&&i[2]===$t[2]&&(i[3]||("http:"===i[1]?"80":"443"))===($t[3]||("http:"===$t[1]?"80":"443")))),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=de.param(d.data,d.traditional)),U(It,d,n,T),2===x)return T;l=de.event&&d.global,l&&0==de.active++&&de.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!Bt.test(d.type),a=d.url,d.hasContent||(d.data&&(a=d.url+=(Dt.test(a)?"&":"?")+d.data,delete d.data),!1===d.cache&&(d.url=Ht.test(a)?a.replace(Ht,"$1_="+jt++):a+(Dt.test(a)?"&":"?")+"_="+jt++)),d.ifModified&&(de.lastModified[a]&&T.setRequestHeader("If-Modified-Since",de.lastModified[a]),de.etag[a]&&T.setRequestHeader("If-None-Match",de.etag[a])),(d.data&&d.hasContent&&!1!==d.contentType||n.contentType)&&T.setRequestHeader("Content-Type",d.contentType),T.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+Rt+"; q=0.01":""):d.accepts["*"]);for(o in d.headers)T.setRequestHeader(o,d.headers[o]);if(d.beforeSend&&(!1===d.beforeSend.call(h,T,d)||2===x))return T.abort();w="abort";for(o in{success:1,error:1,complete:1})T[o](d[o]);if(c=U(qt,d,n,T)){if(T.readyState=1,l&&p.trigger("ajaxSend",[T,d]),2===x)return T;d.async&&d.timeout>0&&(u=e.setTimeout(function(){T.abort("timeout")},d.timeout));try{x=1,c.send(y,r)}catch(C){if(!(x<2))throw C;r(-1,C)}}else r(-1,"No Transport");return T},getJSON:function(e,t,n){return de.get(e,t,n,"json")},getScript:function(e,t){return de.get(e,undefined,t,"script")}}),de.each(["get","post"],function(e,t){de[t]=function(e,n,r,i){return de.isFunction(n)&&(i=i||r,r=n,n=undefined),de.ajax(de.extend({url:e,type:t,dataType:i,data:n,success:r},de.isPlainObject(e)&&e))}}),de._evalUrl=function(e){return de.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},de.fn.extend({wrapAll:function(e){if(de.isFunction(e))return this.each(function(t){de(this).wrapAll(e.call(this,t))});if(this[0]){var t=de(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return de.isFunction(e)?this.each(function(t){de(this).wrapInner(e.call(this,t))}):this.each(function(){var t=de(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=de.isFunction(e);return this.each(function(n){de(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){de.nodeName(this,"body")||de(this).replaceWith(this.childNodes)}).end()}}),de.expr.filters.hidden=function(e){return fe.reliableHiddenOffsets()?e.offsetWidth<=0&&e.offsetHeight<=0&&!e.getClientRects().length:Y(e)},de.expr.filters.visible=function(e){return!de.expr.filters.hidden(e)};var Wt=/\[\]$/,zt=/^(?:submit|button|image|reset|file)$/i,Xt=/^(?:input|select|textarea|keygen)/i;de.param=function(e,t){var n,r=[],i=function(e,t){t=de.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=de.ajaxSettings&&de.ajaxSettings.traditional),de.isArray(e)||e.jquery&&!de.isPlainObject(e))de.each(e,function(){i(this.name,this.value)});else for(n in e)Q(n,e[n],t,i);return r.join("&").replace(/%20/g,"+")},de.fn.extend({serialize:function(){return de.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=de.prop(this,"elements");return e?de.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!de(this).is(":disabled")&&Xt.test(this.nodeName)&&!zt.test(e)&&(this.checked||!Pe.test(e))}).map(function(e,t){var n=de(this).val();return null==n?null:de.isArray(n)?de.map(n,function(e){return{name:t.name,value:e.replace(/\r?\n/g,"\r\n")}}):{name:t.name,value:n.replace(/\r?\n/g,"\r\n")}}).get()}}),de.ajaxSettings.xhr=e.ActiveXObject!==undefined?function(){return this.isLocal?ee():re.documentMode>8?Z():/^(get|post|head|put|delete|options)$/i.test(this.type)&&Z()||ee()}:Z;var Ut=0,Gt={},Jt=de.ajaxSettings.xhr();e.attachEvent&&e.attachEvent("onunload",function(){for(var e in Gt)Gt[e](undefined,!0)}),fe.cors=!!Jt&&"withCredentials"in Jt,Jt=fe.ajax=!!Jt,Jt&&de.ajaxTransport(function(t){if(!t.crossDomain||fe.cors){var n;return{send:function(r,i){var o,a=t.xhr(),s=++Ut;if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)a[o]=t.xhrFields[o];t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest");for(o in r)r[o]!==undefined&&a.setRequestHeader(o,r[o]+"");a.send(t.hasContent&&t.data||null),n=function(e,r){var o,u,l;if(n&&(r||4===a.readyState))if(delete Gt[s],n=undefined,a.onreadystatechange=de.noop,r)4!==a.readyState&&a.abort();else{l={},o=a.status,"string"==typeof a.responseText&&(l.text=a.responseText);try{u=a.statusText}catch(c){u=""}o||!t.isLocal||t.crossDomain?1223===o&&(o=204):o=l.text?200:404}l&&i(o,u,l,a.getAllResponseHeaders())},t.async?4===a.readyState?e.setTimeout(n):a.onreadystatechange=Gt[s]=n:n()},abort:function(){n&&n(undefined,!0)}}}}),de.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return de.globalEval(e),e}}}),de.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),de.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=re.head||de("head")[0]||re.documentElement;return{send:function(r,i){t=re.createElement("script"),t.async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||i(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(undefined,!0)}}}});var Vt=[],Kt=/(=)\?(?=&|$)|\?\?/;de.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Vt.pop()||de.expando+"_"+jt++;return this[e]=!0,e}}),de.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Kt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=de.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Kt,"$1"+i):!1!==t.jsonp&&(t.url+=(Dt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||de.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){o===undefined?de(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Vt.push(i)),a&&de.isFunction(o)&&o(a[0]),a=o=undefined}),"script"}),de.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||re;var r=ye.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=v([e],t,i),i&&i.length&&de(i).remove(),de.merge([],r.childNodes))};var Yt=de.fn.load;de.fn.load=function(e,t,n){if("string"!=typeof e&&Yt)return Yt.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=de.trim(e.slice(s,e.length)),e=e.slice(0,s)),de.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),a.length>0&&de.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?de("<div>").append(de.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},de.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){de.fn[t]=function(e){return this.on(t,e)}}),de.expr.filters.animated=function(e){return de.grep(de.timers,function(t){return e===t.elem}).length},de.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=de.css(e,"position"),f=de(e),d={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=de.css(e,"top"),u=de.css(e,"left"),l=("absolute"===c||"fixed"===c)&&de.inArray("auto",[o,u])>-1,l?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),de.isFunction(t)&&(t=t.call(e,n,de.extend({},s))),null!=t.top&&(d.top=t.top-s.top+a),null!=t.left&&(d.left=t.left-s.left+i),"using"in t?t.using.call(e,d):f.css(d)}},de.fn.extend({offset:function(e){if(arguments.length)return e===undefined?this:this.each(function(t){de.offset.setOffset(this,e,t)});var t,n,r={top:0,left:0},i=this[0],o=i&&i.ownerDocument;if(o)return t=o.documentElement,de.contains(t,i)?("undefined"!=typeof i.getBoundingClientRect&&(r=i.getBoundingClientRect()),n=te(o),{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):r},position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===de.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),de.nodeName(e[0],"html")||(n=e.offset()),
n.top+=de.css(e[0],"borderTopWidth",!0),n.left+=de.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-de.css(r,"marginTop",!0),left:t.left-n.left-de.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&!de.nodeName(e,"html")&&"static"===de.css(e,"position");)e=e.offsetParent;return e||at})}}),de.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);de.fn[e]=function(r){return Me(this,function(e,r,i){var o=te(e);if(i===undefined)return o?t in o?o[t]:o.document.documentElement[r]:e[r];o?o.scrollTo(n?de(o).scrollLeft():i,n?i:de(o).scrollTop()):e[r]=i},e,r,arguments.length,null)}}),de.each(["top","left"],function(e,t){de.cssHooks[t]=j(fe.pixelPosition,function(e,n){if(n)return n=ut(e,t),it.test(n)?de(e).position()[t]+"px":n})}),de.each({Height:"height",Width:"width"},function(e,t){de.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){de.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===i?"margin":"border");return Me(this,function(t,n,r){var i;return de.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?de.css(t,n,a):de.style(t,n,r,a)},t,o?r:undefined,o,null)}})}),de.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),de.fn.size=function(){return this.length},de.fn.andSelf=de.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return de});var Qt=e.jQuery,Zt=e.$;return de.noConflict=function(t){return e.$===de&&(e.$=Zt),t&&e.jQuery===de&&(e.jQuery=Qt),de},t||(e.jQuery=e.$=de),de}),function(){function e(e){function t(t,n,r,i,o,a){for(;o>=0&&a>o;o+=e){var s=i?i[o]:o;r=n(r,t[s],s,t)}return r}return function(n,r,i,o){r=b(r,o,4);var a=!_(n)&&y.keys(n),s=(a||n).length,u=e>0?0:s-1;return arguments.length<3&&(i=n[a?a[u]:u],u+=e),t(n,r,i,a,u,s)}}function t(e){return function(t,n,r){n=x(n,r);for(var i=k(t),o=e>0?0:i-1;o>=0&&i>o;o+=e)if(n(t[o],o,t))return o;return-1}}function n(e,t,n){return function(r,i,o){var a=0,s=k(r);if("number"==typeof o)e>0?a=o>=0?o:Math.max(o+s,a):s=o>=0?Math.min(o+1,s):o+s+1;else if(n&&o&&s)return o=n(r,i),r[o]===i?o:-1;if(i!==i)return o=t(c.call(r,a,s),y.isNaN),o>=0?o+a:-1;for(o=e>0?a:s-1;o>=0&&s>o;o+=e)if(r[o]===i)return o;return-1}}function r(e,t){var n=j.length,r=e.constructor,i=y.isFunction(r)&&r.prototype||s,o="constructor";for(y.has(e,o)&&!y.contains(t,o)&&t.push(o);n--;)(o=j[n])in e&&e[o]!==i[o]&&!y.contains(t,o)&&t.push(o)}var i=this,o=i._,a=Array.prototype,s=Object.prototype,u=Function.prototype,l=a.push,c=a.slice,f=s.toString,d=s.hasOwnProperty,h=Array.isArray,p=Object.keys,g=u.bind,m=Object.create,v=function(){},y=function(e){return e instanceof y?e:this instanceof y?void(this._wrapped=e):new y(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=y),exports._=y):i._=y,y.VERSION="1.8.3";var b=function(e,t,n){if(void 0===t)return e;switch(null==n?3:n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)};case 4:return function(n,r,i,o){return e.call(t,n,r,i,o)}}return function(){return e.apply(t,arguments)}},x=function(e,t,n){return null==e?y.identity:y.isFunction(e)?b(e,t,n):y.isObject(e)?y.matcher(e):y.property(e)};y.iteratee=function(e,t){return x(e,t,1/0)};var w=function(e,t){return function(n){var r=arguments.length;if(2>r||null==n)return n;for(var i=1;r>i;i++)for(var o=arguments[i],a=e(o),s=a.length,u=0;s>u;u++){var l=a[u];t&&void 0!==n[l]||(n[l]=o[l])}return n}},T=function(e){if(!y.isObject(e))return{};if(m)return m(e);v.prototype=e;var t=new v;return v.prototype=null,t},C=function(e){return function(t){return null==t?void 0:t[e]}},E=Math.pow(2,53)-1,k=C("length"),_=function(e){var t=k(e);return"number"==typeof t&&t>=0&&E>=t};y.each=y.forEach=function(e,t,n){t=b(t,n);var r,i;if(_(e))for(r=0,i=e.length;i>r;r++)t(e[r],r,e);else{var o=y.keys(e);for(r=0,i=o.length;i>r;r++)t(e[o[r]],o[r],e)}return e},y.map=y.collect=function(e,t,n){t=x(t,n);for(var r=!_(e)&&y.keys(e),i=(r||e).length,o=Array(i),a=0;i>a;a++){var s=r?r[a]:a;o[a]=t(e[s],s,e)}return o},y.reduce=y.foldl=y.inject=e(1),y.reduceRight=y.foldr=e(-1),y.find=y.detect=function(e,t,n){var r;return r=_(e)?y.findIndex(e,t,n):y.findKey(e,t,n),void 0!==r&&-1!==r?e[r]:void 0},y.filter=y.select=function(e,t,n){var r=[];return t=x(t,n),y.each(e,function(e,n,i){t(e,n,i)&&r.push(e)}),r},y.reject=function(e,t,n){return y.filter(e,y.negate(x(t)),n)},y.every=y.all=function(e,t,n){t=x(t,n);for(var r=!_(e)&&y.keys(e),i=(r||e).length,o=0;i>o;o++){var a=r?r[o]:o;if(!t(e[a],a,e))return!1}return!0},y.some=y.any=function(e,t,n){t=x(t,n);for(var r=!_(e)&&y.keys(e),i=(r||e).length,o=0;i>o;o++){var a=r?r[o]:o;if(t(e[a],a,e))return!0}return!1},y.contains=y.includes=y.include=function(e,t,n,r){return _(e)||(e=y.values(e)),("number"!=typeof n||r)&&(n=0),y.indexOf(e,t,n)>=0},y.invoke=function(e,t){var n=c.call(arguments,2),r=y.isFunction(t);return y.map(e,function(e){var i=r?t:e[t];return null==i?i:i.apply(e,n)})},y.pluck=function(e,t){return y.map(e,y.property(t))},y.where=function(e,t){return y.filter(e,y.matcher(t))},y.findWhere=function(e,t){return y.find(e,y.matcher(t))},y.max=function(e,t,n){var r,i,o=-1/0,a=-1/0;if(null==t&&null!=e){e=_(e)?e:y.values(e);for(var s=0,u=e.length;u>s;s++)(r=e[s])>o&&(o=r)}else t=x(t,n),y.each(e,function(e,n,r){((i=t(e,n,r))>a||i===-1/0&&o===-1/0)&&(o=e,a=i)});return o},y.min=function(e,t,n){var r,i,o=1/0,a=1/0;if(null==t&&null!=e){e=_(e)?e:y.values(e);for(var s=0,u=e.length;u>s;s++)r=e[s],o>r&&(o=r)}else t=x(t,n),y.each(e,function(e,n,r){i=t(e,n,r),(a>i||1/0===i&&1/0===o)&&(o=e,a=i)});return o},y.shuffle=function(e){for(var t,n=_(e)?e:y.values(e),r=n.length,i=Array(r),o=0;r>o;o++)t=y.random(0,o),t!==o&&(i[o]=i[t]),i[t]=n[o];return i},y.sample=function(e,t,n){return null==t||n?(_(e)||(e=y.values(e)),e[y.random(e.length-1)]):y.shuffle(e).slice(0,Math.max(0,t))},y.sortBy=function(e,t,n){return t=x(t,n),y.pluck(y.map(e,function(e,n,r){return{value:e,index:n,criteria:t(e,n,r)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(r>n||void 0===r)return-1}return e.index-t.index}),"value")};var N=function(e){return function(t,n,r){var i={};return n=x(n,r),y.each(t,function(r,o){var a=n(r,o,t);e(i,r,a)}),i}};y.groupBy=N(function(e,t,n){y.has(e,n)?e[n].push(t):e[n]=[t]}),y.indexBy=N(function(e,t,n){e[n]=t}),y.countBy=N(function(e,t,n){y.has(e,n)?e[n]++:e[n]=1}),y.toArray=function(e){return e?y.isArray(e)?c.call(e):_(e)?y.map(e,y.identity):y.values(e):[]},y.size=function(e){return null==e?0:_(e)?e.length:y.keys(e).length},y.partition=function(e,t,n){t=x(t,n);var r=[],i=[];return y.each(e,function(e,n,o){(t(e,n,o)?r:i).push(e)}),[r,i]},y.first=y.head=y.take=function(e,t,n){return null==e?void 0:null==t||n?e[0]:y.initial(e,e.length-t)},y.initial=function(e,t,n){return c.call(e,0,Math.max(0,e.length-(null==t||n?1:t)))},y.last=function(e,t,n){return null==e?void 0:null==t||n?e[e.length-1]:y.rest(e,Math.max(0,e.length-t))},y.rest=y.tail=y.drop=function(e,t,n){return c.call(e,null==t||n?1:t)},y.compact=function(e){return y.filter(e,y.identity)};var S=function(e,t,n,r){for(var i=[],o=0,a=r||0,s=k(e);s>a;a++){var u=e[a];if(_(u)&&(y.isArray(u)||y.isArguments(u))){t||(u=S(u,t,n));var l=0,c=u.length;for(i.length+=c;c>l;)i[o++]=u[l++]}else n||(i[o++]=u)}return i};y.flatten=function(e,t){return S(e,t,!1)},y.without=function(e){return y.difference(e,c.call(arguments,1))},y.uniq=y.unique=function(e,t,n,r){y.isBoolean(t)||(r=n,n=t,t=!1),null!=n&&(n=x(n,r));for(var i=[],o=[],a=0,s=k(e);s>a;a++){var u=e[a],l=n?n(u,a,e):u;t?(a&&o===l||i.push(u),o=l):n?y.contains(o,l)||(o.push(l),i.push(u)):y.contains(i,u)||i.push(u)}return i},y.union=function(){return y.uniq(S(arguments,!0,!0))},y.intersection=function(e){for(var t=[],n=arguments.length,r=0,i=k(e);i>r;r++){var o=e[r];if(!y.contains(t,o)){for(var a=1;n>a&&y.contains(arguments[a],o);a++);a===n&&t.push(o)}}return t},y.difference=function(e){var t=S(arguments,!0,!0,1);return y.filter(e,function(e){return!y.contains(t,e)})},y.zip=function(){return y.unzip(arguments)},y.unzip=function(e){for(var t=e&&y.max(e,k).length||0,n=Array(t),r=0;t>r;r++)n[r]=y.pluck(e,r);return n},y.object=function(e,t){for(var n={},r=0,i=k(e);i>r;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},y.findIndex=t(1),y.findLastIndex=t(-1),y.sortedIndex=function(e,t,n,r){n=x(n,r,1);for(var i=n(t),o=0,a=k(e);a>o;){var s=Math.floor((o+a)/2);n(e[s])<i?o=s+1:a=s}return o},y.indexOf=n(1,y.findIndex,y.sortedIndex),y.lastIndexOf=n(-1,y.findLastIndex),y.range=function(e,t,n){null==t&&(t=e||0,e=0),n=n||1;for(var r=Math.max(Math.ceil((t-e)/n),0),i=Array(r),o=0;r>o;o++,e+=n)i[o]=e;return i};var A=function(e,t,n,r,i){if(!(r instanceof t))return e.apply(n,i);var o=T(e.prototype),a=e.apply(o,i);return y.isObject(a)?a:o};y.bind=function(e,t){if(g&&e.bind===g)return g.apply(e,c.call(arguments,1));if(!y.isFunction(e))throw new TypeError("Bind must be called on a function");var n=c.call(arguments,2),r=function(){return A(e,r,t,this,n.concat(c.call(arguments)))};return r},y.partial=function(e){var t=c.call(arguments,1),n=function(){for(var r=0,i=t.length,o=Array(i),a=0;i>a;a++)o[a]=t[a]===y?arguments[r++]:t[a];for(;r<arguments.length;)o.push(arguments[r++]);return A(e,n,this,this,o)};return n},y.bindAll=function(e){var t,n,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(t=1;r>t;t++)n=arguments[t],e[n]=y.bind(e[n],e);return e},y.memoize=function(e,t){var n=function(r){var i=n.cache,o=""+(t?t.apply(this,arguments):r);return y.has(i,o)||(i[o]=e.apply(this,arguments)),i[o]};return n.cache={},n},y.delay=function(e,t){var n=c.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},y.defer=y.partial(y.delay,y,1),y.throttle=function(e,t,n){var r,i,o,a=null,s=0;n||(n={});var u=function(){s=!1===n.leading?0:y.now(),a=null,o=e.apply(r,i),a||(r=i=null)};return function(){var l=y.now();s||!1!==n.leading||(s=l);var c=t-(l-s);return r=this,i=arguments,0>=c||c>t?(a&&(clearTimeout(a),a=null),s=l,o=e.apply(r,i),a||(r=i=null)):a||!1===n.trailing||(a=setTimeout(u,c)),o}},y.debounce=function(e,t,n){var r,i,o,a,s,u=function(){var l=y.now()-a;t>l&&l>=0?r=setTimeout(u,t-l):(r=null,n||(s=e.apply(o,i),r||(o=i=null)))};return function(){o=this,i=arguments,a=y.now();var l=n&&!r;return r||(r=setTimeout(u,t)),l&&(s=e.apply(o,i),o=i=null),s}},y.wrap=function(e,t){return y.partial(t,e)},y.negate=function(e){return function(){return!e.apply(this,arguments)}},y.compose=function(){var e=arguments,t=e.length-1;return function(){for(var n=t,r=e[t].apply(this,arguments);n--;)r=e[n].call(this,r);return r}},y.after=function(e,t){return function(){return--e<1?t.apply(this,arguments):void 0}},y.before=function(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),1>=e&&(t=null),n}},y.once=y.partial(y.before,2);var L=!{toString:null}.propertyIsEnumerable("toString"),j=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];y.keys=function(e){if(!y.isObject(e))return[];if(p)return p(e);var t=[];for(var n in e)y.has(e,n)&&t.push(n);return L&&r(e,t),t},y.allKeys=function(e){if(!y.isObject(e))return[];var t=[];for(var n in e)t.push(n);return L&&r(e,t),t},y.values=function(e){for(var t=y.keys(e),n=t.length,r=Array(n),i=0;n>i;i++)r[i]=e[t[i]];return r},y.mapObject=function(e,t,n){t=x(t,n);for(var r,i=y.keys(e),o=i.length,a={},s=0;o>s;s++)r=i[s],a[r]=t(e[r],r,e);return a},y.pairs=function(e){for(var t=y.keys(e),n=t.length,r=Array(n),i=0;n>i;i++)r[i]=[t[i],e[t[i]]];return r},y.invert=function(e){for(var t={},n=y.keys(e),r=0,i=n.length;i>r;r++)t[e[n[r]]]=n[r];return t},y.functions=y.methods=function(e){var t=[];for(var n in e)y.isFunction(e[n])&&t.push(n);return t.sort()},y.extend=w(y.allKeys),y.extendOwn=y.assign=w(y.keys),y.findKey=function(e,t,n){t=x(t,n);for(var r,i=y.keys(e),o=0,a=i.length;a>o;o++)if(r=i[o],t(e[r],r,e))return r},y.pick=function(e,t,n){var r,i,o={},a=e;if(null==a)return o;y.isFunction(t)?(i=y.allKeys(a),r=b(t,n)):(i=S(arguments,!1,!1,1),r=function(e,t,n){return t in n},a=Object(a));for(var s=0,u=i.length;u>s;s++){var l=i[s],c=a[l];r(c,l,a)&&(o[l]=c)}return o},y.omit=function(e,t,n){if(y.isFunction(t))t=y.negate(t);else{var r=y.map(S(arguments,!1,!1,1),String);t=function(e,t){return!y.contains(r,t)}}return y.pick(e,t,n)},y.defaults=w(y.allKeys,!0),y.create=function(e,t){var n=T(e);return t&&y.extendOwn(n,t),n},y.clone=function(e){return y.isObject(e)?y.isArray(e)?e.slice():y.extend({},e):e},y.tap=function(e,t){return t(e),e},y.isMatch=function(e,t){var n=y.keys(t),r=n.length;if(null==e)return!r;for(var i=Object(e),o=0;r>o;o++){var a=n[o];if(t[a]!==i[a]||!(a in i))return!1}return!0};var D=function(e,t,n,r){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;e instanceof y&&(e=e._wrapped),t instanceof y&&(t=t._wrapped);var i=f.call(e);if(i!==f.call(t))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:0==+e?1/+e==1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t}var o="[object Array]"===i;if(!o){if("object"!=typeof e||"object"!=typeof t)return!1;var a=e.constructor,s=t.constructor;if(a!==s&&!(y.isFunction(a)&&a instanceof a&&y.isFunction(s)&&s instanceof s)&&"constructor"in e&&"constructor"in t)return!1}n=n||[],r=r||[];for(var u=n.length;u--;)if(n[u]===e)return r[u]===t;if(n.push(e),r.push(t),o){if((u=e.length)!==t.length)return!1;for(;u--;)if(!D(e[u],t[u],n,r))return!1}else{var l,c=y.keys(e);if(u=c.length,y.keys(t).length!==u)return!1;for(;u--;)if(l=c[u],!y.has(t,l)||!D(e[l],t[l],n,r))return!1}return n.pop(),r.pop(),!0};y.isEqual=function(e,t){return D(e,t)},y.isEmpty=function(e){return null==e||(_(e)&&(y.isArray(e)||y.isString(e)||y.isArguments(e))?0===e.length:0===y.keys(e).length)},y.isElement=function(e){return!(!e||1!==e.nodeType)},y.isArray=h||function(e){return"[object Array]"===f.call(e)},y.isObject=function(e){var t=typeof e;return"function"===t||"object"===t&&!!e},y.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(e){y["is"+e]=function(t){return f.call(t)==="[object "+e+"]"}}),y.isArguments(arguments)||(y.isArguments=function(e){return y.has(e,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(y.isFunction=function(e){return"function"==typeof e||!1}),y.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},y.isNaN=function(e){return y.isNumber(e)&&e!==+e},y.isBoolean=function(e){return!0===e||!1===e||"[object Boolean]"===f.call(e)},y.isNull=function(e){return null===e},y.isUndefined=function(e){return void 0===e},y.has=function(e,t){return null!=e&&d.call(e,t)},y.noConflict=function(){return i._=o,this},y.identity=function(e){return e},y.constant=function(e){return function(){return e}},y.noop=function(){},y.property=C,y.propertyOf=function(e){return null==e?function(){}:function(t){return e[t]}},y.matcher=y.matches=function(e){return e=y.extendOwn({},e),function(t){return y.isMatch(t,e)}},y.times=function(e,t,n){var r=Array(Math.max(0,e));t=b(t,n,1);for(var i=0;e>i;i++)r[i]=t(i);return r},y.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},y.now=Date.now||function(){return(new Date).getTime()};var H={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},M=y.invert(H),P=function(e){var t=function(t){return e[t]},n="(?:"+y.keys(e).join("|")+")",r=RegExp(n),i=RegExp(n,"g");return function(e){return e=null==e?"":""+e,r.test(e)?e.replace(i,t):e}};y.escape=P(H),y.unescape=P(M),y.result=function(e,t,n){var r=null==e?void 0:e[t];return void 0===r&&(r=n),y.isFunction(r)?r.call(e):r};var B=0;y.uniqueId=function(e){var t=++B+"";return e?e+t:t},y.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var O=/(.)^/,I={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},q=function(e){return"\\"+I[e]};y.template=function(e,t,n){!t&&n&&(t=n),t=y.defaults({},t,y.templateSettings);var r=RegExp([(t.escape||O).source,(t.interpolate||O).source,(t.evaluate||O).source].join("|")+"|$","g"),i=0,o="__p+='";e.replace(r,function(t,n,r,a,s){return o+=e.slice(i,s).replace(/\\|'|\r|\n|\u2028|\u2029/g,q),i=s+t.length,n?o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?o+="'+\n((__t=("+r+"))==null?'':__t)+\n'":a&&(o+="';\n"+a+"\n__p+='"),t}),o+="';\n",t.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{var a=new Function(t.variable||"obj","_",o)}catch(s){throw s.source=o,s}var u=function(e){return a.call(this,e,y)};return u.source="function("+(t.variable||"obj")+"){\n"+o+"}",u},y.chain=function(e){var t=y(e);return t._chain=!0,t};var R=function(e,t){return e._chain?y(t).chain():t};y.mixin=function(e){y.each(y.functions(e),function(t){var n=y[t]=e[t];y.prototype[t]=function(){var e=[this._wrapped];return l.apply(e,arguments),R(this,n.apply(y,e))}})},y.mixin(y),y.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=a[e];y.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==e&&"splice"!==e||0!==n.length||delete n[0],R(this,n)}}),y.each(["concat","join","slice"],function(e){var t=a[e];y.prototype[e]=function(){return R(this,t.apply(this._wrapped,arguments))}}),y.prototype.value=function(){return this._wrapped},y.prototype.valueOf=y.prototype.toJSON=y.prototype.value,y.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return y})}.call(this),function(e){var t="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;if("function"==typeof define&&define.amd)define(["underscore","jquery","exports"],function(n,r,i){t.Backbone=e(t,i,n,r)});else if("undefined"!=typeof exports){var n,r=require("underscore");try{n=require("jquery")}catch(i){}e(t,exports,r,n)}else t.Backbone=e(t,{},t._,t.jQuery||t.Zepto||t.ender||t.$)}(function(e,t,n,r){var i=e.Backbone,o=Array.prototype.slice;t.VERSION="1.3.3",t.$=r,t.noConflict=function(){return e.Backbone=i,this},t.emulateHTTP=!1,t.emulateJSON=!1;var a=function(e,t,r){switch(e){case 1:return function(){return n[t](this[r])};case 2:return function(e){return n[t](this[r],e)};case 3:return function(e,i){return n[t](this[r],u(e,this),i)};case 4:return function(e,i,o){return n[t](this[r],u(e,this),i,o)};default:return function(){var e=o.call(arguments);return e.unshift(this[r]),n[t].apply(n,e)}}},s=function(e,t,r){n.each(t,function(t,i){n[i]&&(e.prototype[i]=a(t,i,r))})},u=function(e,t){return n.isFunction(e)?e:n.isObject(e)&&!t._isModel(e)?l(e):n.isString(e)?function(t){return t.get(e)}:e},l=function(e){var t=n.matches(e);return function(e){return t(e.attributes)}},c=t.Events={},f=/\s+/,d=function(e,t,r,i,o){var a,s=0;if(r&&"object"==typeof r){void 0!==i&&"context"in o&&void 0===o.context&&(o.context=i);for(a=n.keys(r);s<a.length;s++)t=d(e,t,a[s],r[a[s]],o)}else if(r&&f.test(r))for(a=r.split(f);s<a.length;s++)t=e(t,a[s],i,o);else t=e(t,r,i,o);return t};c.on=function(e,t,n){return h(this,e,t,n)};var h=function(e,t,n,r,i){if(e._events=d(p,e._events||{},t,n,{context:r,ctx:e,listening:i}),i){(e._listeners||(e._listeners={}))[i.id]=i}return e};c.listenTo=function(e,t,r){if(!e)return this;var i=e._listenId||(e._listenId=n.uniqueId("l")),o=this._listeningTo||(this._listeningTo={}),a=o[i];if(!a){var s=this._listenId||(this._listenId=n.uniqueId("l"));a=o[i]={obj:e,objId:i,id:s,listeningTo:o,count:0}}return h(e,t,r,this,a),this};var p=function(e,t,n,r){if(n){var i=e[t]||(e[t]=[]),o=r.context,a=r.ctx,s=r.listening;s&&s.count++,i.push({callback:n,context:o,ctx:o||a,listening:s})}return e};c.off=function(e,t,n){return this._events?(this._events=d(g,this._events,e,t,{context:n,listeners:this._listeners}),this):this},c.stopListening=function(e,t,r){var i=this._listeningTo;if(!i)return this;for(var o=e?[e._listenId]:n.keys(i),a=0;a<o.length;a++){var s=i[o[a]];if(!s)break;s.obj.off(t,r,this)}return this};var g=function(e,t,r,i){if(e){var o,a=0,s=i.context,u=i.listeners;if(t||r||s){for(var l=t?[t]:n.keys(e);a<l.length;a++){t=l[a];var c=e[t];if(!c)break;for(var f=[],d=0;d<c.length;d++){var h=c[d];r&&r!==h.callback&&r!==h.callback._callback||s&&s!==h.context?f.push(h):(o=h.listening)&&0==--o.count&&(delete u[o.id],delete o.listeningTo[o.objId])}f.length?e[t]=f:delete e[t]}return e}for(var p=n.keys(u);a<p.length;a++)o=u[p[a]],delete u[o.id],delete o.listeningTo[o.objId]}};c.once=function(e,t,r){var i=d(m,{},e,t,n.bind(this.off,this));return"string"==typeof e&&null==r&&(t=void 0),this.on(i,t,r)},c.listenToOnce=function(e,t,r){var i=d(m,{},t,r,n.bind(this.stopListening,this,e));return this.listenTo(e,i)};var m=function(e,t,r,i){if(r){var o=e[t]=n.once(function(){i(t,o),r.apply(this,arguments)});o._callback=r}return e};c.trigger=function(e){if(!this._events)return this;for(var t=Math.max(0,arguments.length-1),n=Array(t),r=0;r<t;r++)n[r]=arguments[r+1];return d(v,this._events,e,void 0,n),this};var v=function(e,t,n,r){if(e){var i=e[t],o=e.all;i&&o&&(o=o.slice()),i&&y(i,r),o&&y(o,[t].concat(r))}return e},y=function(e,t){var n,r=-1,i=e.length,o=t[0],a=t[1],s=t[2];switch(t.length){case 0:for(;++r<i;)(n=e[r]).callback.call(n.ctx);return;case 1:for(;++r<i;)(n=e[r]).callback.call(n.ctx,o);return;case 2:for(;++r<i;)(n=e[r]).callback.call(n.ctx,o,a);return;case 3:for(;++r<i;)(n=e[r]).callback.call(n.ctx,o,a,s);return;default:for(;++r<i;)(n=e[r]).callback.apply(n.ctx,t);return}};c.bind=c.on,c.unbind=c.off,n.extend(t,c);var b=t.Model=function(e,t){var r=e||{};t||(t={}),this.cid=n.uniqueId(this.cidPrefix),this.attributes={},t.collection&&(this.collection=t.collection),t.parse&&(r=this.parse(r,t)||{});var i=n.result(this,"defaults");r=n.defaults(n.extend({},i,r),i),this.set(r,t),this.changed={},this.initialize.apply(this,arguments)};n.extend(b.prototype,c,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(e){return n.clone(this.attributes)},sync:function(){return t.sync.apply(this,arguments)},get:function(e){return this.attributes[e]},escape:function(e){return n.escape(this.get(e))},has:function(e){return null!=this.get(e)},matches:function(e){return!!n.iteratee(e,this)(this.attributes)},set:function(e,t,r){if(null==e)return this;var i;if("object"==typeof e?(i=e,r=t):(i={})[e]=t,r||(r={}),!this._validate(i,r))return!1;var o=r.unset,a=r.silent,s=[],u=this._changing;this._changing=!0,u||(this._previousAttributes=n.clone(this.attributes),this.changed={});var l=this.attributes,c=this.changed,f=this._previousAttributes;for(var d in i)t=i[d],n.isEqual(l[d],t)||s.push(d),n.isEqual(f[d],t)?delete c[d]:c[d]=t,o?delete l[d]:l[d]=t;if(this.idAttribute in i&&(this.id=this.get(this.idAttribute)),!a){s.length&&(this._pending=r);for(var h=0;h<s.length;h++)this.trigger("change:"+s[h],this,l[s[h]],r)}if(u)return this;if(!a)for(;this._pending;)r=this._pending,this._pending=!1,this.trigger("change",this,r);return this._pending=!1,this._changing=!1,this},unset:function(e,t){return this.set(e,void 0,n.extend({},t,{unset:!0}))},clear:function(e){var t={};for(var r in this.attributes)t[r]=void 0;return this.set(t,n.extend({},e,{unset:!0}))},hasChanged:function(e){return null==e?!n.isEmpty(this.changed):n.has(this.changed,e)},changedAttributes:function(e){if(!e)return!!this.hasChanged()&&n.clone(this.changed);var t=this._changing?this._previousAttributes:this.attributes,r={};for(var i in e){var o=e[i];n.isEqual(t[i],o)||(r[i]=o)}return!!n.size(r)&&r},previous:function(e){return null!=e&&this._previousAttributes?this._previousAttributes[e]:null},previousAttributes:function(){return n.clone(this._previousAttributes)},fetch:function(e){e=n.extend({parse:!0},e);var t=this,r=e.success;return e.success=function(n){var i=e.parse?t.parse(n,e):n;if(!t.set(i,e))return!1;r&&r.call(e.context,t,n,e),t.trigger("sync",t,n,e)},j(this,e),this.sync("read",this,e)},save:function(e,t,r){var i;null==e||"object"==typeof e?(i=e,r=t):(i={})[e]=t,r=n.extend({validate:!0,parse:!0},r);var o=r.wait;if(i&&!o){if(!this.set(i,r))return!1}else if(!this._validate(i,r))return!1;var a=this,s=r.success,u=this.attributes;r.success=function(e){a.attributes=u;var t=r.parse?a.parse(e,r):e;if(o&&(t=n.extend({},i,t)),t&&!a.set(t,r))return!1;s&&s.call(r.context,a,e,r),a.trigger("sync",a,e,r)},j(this,r),i&&o&&(this.attributes=n.extend({},u,i));var l=this.isNew()?"create":r.patch?"patch":"update";"patch"!==l||r.attrs||(r.attrs=i);var c=this.sync(l,this,r);return this.attributes=u,c},destroy:function(e){e=e?n.clone(e):{};var t=this,r=e.success,i=e.wait,o=function(){t.stopListening(),t.trigger("destroy",t,t.collection,e)};e.success=function(n){i&&o(),r&&r.call(e.context,t,n,e),t.isNew()||t.trigger("sync",t,n,e)};var a=!1;return this.isNew()?n.defer(e.success):(j(this,e),a=this.sync("delete",this,e)),i||o(),a},url:function(){var e=n.result(this,"urlRoot")||n.result(this.collection,"url")||L();if(this.isNew())return e;var t=this.get(this.idAttribute);return e.replace(/[^\/]$/,"$&/")+encodeURIComponent(t)},parse:function(e,t){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(e){return this._validate({},n.extend({},e,{validate:!0}))},_validate:function(e,t){if(!t.validate||!this.validate)return!0;e=n.extend({},this.attributes,e);var r=this.validationError=this.validate(e,t)||null;return!r||(this.trigger("invalid",this,r,n.extend(t,{validationError:r})),!1)}}),s(b,{keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1},"attributes");var x=t.Collection=function(e,t){t||(t={}),t.model&&(this.model=t.model),void 0!==t.comparator&&(this.comparator=t.comparator),this._reset(),this.initialize.apply(this,arguments),e&&this.reset(e,n.extend({silent:!0},t))},w={add:!0,remove:!0,merge:!0},T={add:!0,remove:!1},C=function(e,t,n){n=Math.min(Math.max(n,0),e.length);var r,i=Array(e.length-n),o=t.length;for(r=0;r<i.length;r++)i[r]=e[r+n];for(r=0;r<o;r++)e[r+n]=t[r];for(r=0;r<i.length;r++)e[r+o+n]=i[r]};n.extend(x.prototype,c,{model:b,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return t.sync.apply(this,arguments)},add:function(e,t){return this.set(e,n.extend({merge:!1},t,T))},remove:function(e,t){t=n.extend({},t);var r=!n.isArray(e);e=r?[e]:e.slice();var i=this._removeModels(e,t);return!t.silent&&i.length&&(t.changes={added:[],merged:[],removed:i},this.trigger("update",this,t)),r?i[0]:i},set:function(e,t){if(null!=e){t=n.extend({},w,t),t.parse&&!this._isModel(e)&&(e=this.parse(e,t)||[]);var r=!n.isArray(e);e=r?[e]:e.slice();var i=t.at;null!=i&&(i=+i),i>this.length&&(i=this.length),i<0&&(i+=this.length+1);var o,a,s=[],u=[],l=[],c=[],f={},d=t.add,h=t.merge,p=t.remove,g=!1,m=this.comparator&&null==i&&!1!==t.sort,v=n.isString(this.comparator)?this.comparator:null;for(a=0;a<e.length;a++){o=e[a];var y=this.get(o);if(y){if(h&&o!==y){var b=this._isModel(o)?o.attributes:o;t.parse&&(b=y.parse(b,t)),y.set(b,t),l.push(y),m&&!g&&(g=y.hasChanged(v))}f[y.cid]||(f[y.cid]=!0,s.push(y)),e[a]=y}else d&&(o=e[a]=this._prepareModel(o,t))&&(u.push(o),this._addReference(o,t),f[o.cid]=!0,s.push(o))}if(p){for(a=0;a<this.length;a++)o=this.models[a],f[o.cid]||c.push(o);c.length&&this._removeModels(c,t)}var x=!1,T=!m&&d&&p;if(s.length&&T?(x=this.length!==s.length||n.some(this.models,function(e,t){return e!==s[t]}),this.models.length=0,C(this.models,s,0),this.length=this.models.length):u.length&&(m&&(g=!0),C(this.models,u,null==i?this.length:i),this.length=this.models.length),g&&this.sort({silent:!0}),!t.silent){for(a=0;a<u.length;a++)null!=i&&(t.index=i+a),o=u[a],o.trigger("add",o,this,t);(g||x)&&this.trigger("sort",this,t),(u.length||c.length||l.length)&&(t.changes={added:u,removed:c,merged:l},this.trigger("update",this,t))}return r?e[0]:e}},reset:function(e,t){t=t?n.clone(t):{};for(var r=0;r<this.models.length;r++)this._removeReference(this.models[r],t);return t.previousModels=this.models,this._reset(),e=this.add(e,n.extend({silent:!0},t)),t.silent||this.trigger("reset",this,t),e},push:function(e,t){return this.add(e,n.extend({at:this.length},t))},pop:function(e){var t=this.at(this.length-1);return this.remove(t,e)},unshift:function(e,t){return this.add(e,n.extend({at:0},t))},shift:function(e){var t=this.at(0);return this.remove(t,e)},slice:function(){return o.apply(this.models,arguments)},get:function(e){if(null!=e)return this._byId[e]||this._byId[this.modelId(e.attributes||e)]||e.cid&&this._byId[e.cid]},has:function(e){return null!=this.get(e)},at:function(e){return e<0&&(e+=this.length),this.models[e]},where:function(e,t){return this[t?"find":"filter"](e)},findWhere:function(e){return this.where(e,!0)},sort:function(e){var t=this.comparator;if(!t)throw new Error("Cannot sort a set without a comparator");e||(e={});var r=t.length;return n.isFunction(t)&&(t=n.bind(t,this)),1===r||n.isString(t)?this.models=this.sortBy(t):this.models.sort(t),e.silent||this.trigger("sort",this,e),this},pluck:function(e){return this.map(e+"")},fetch:function(e){e=n.extend({parse:!0},e);var t=e.success,r=this;return e.success=function(n){var i=e.reset?"reset":"set";r[i](n,e),t&&t.call(e.context,r,n,e),r.trigger("sync",r,n,e)},j(this,e),this.sync("read",this,e)},create:function(e,t){t=t?n.clone(t):{};var r=t.wait;if(!(e=this._prepareModel(e,t)))return!1;r||this.add(e,t);var i=this,o=t.success;return t.success=function(e,t,n){r&&i.add(e,n),o&&o.call(n.context,e,t,n)},e.save(null,t),e},parse:function(e,t){return e},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(e){return e[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(e,t){if(this._isModel(e))return e.collection||(e.collection=this),e;t=t?n.clone(t):{},t.collection=this;var r=new this.model(e,t);return r.validationError?(this.trigger("invalid",this,r.validationError,t),!1):r},_removeModels:function(e,t){for(var n=[],r=0;r<e.length;r++){var i=this.get(e[r]);if(i){var o=this.indexOf(i);this.models.splice(o,1),this.length--,delete this._byId[i.cid];var a=this.modelId(i.attributes);null!=a&&delete this._byId[a],t.silent||(t.index=o,i.trigger("remove",i,this,t)),n.push(i),this._removeReference(i,t)}}return n},_isModel:function(e){return e instanceof b},_addReference:function(e,t){this._byId[e.cid]=e;var n=this.modelId(e.attributes);null!=n&&(this._byId[n]=e),e.on("all",this._onModelEvent,this)},_removeReference:function(e,t){delete this._byId[e.cid];var n=this.modelId(e.attributes);null!=n&&delete this._byId[n],this===e.collection&&delete e.collection,e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,t,n,r){if(t){if(("add"===e||"remove"===e)&&n!==this)return;if("destroy"===e&&this.remove(t,r),"change"===e){var i=this.modelId(t.previousAttributes()),o=this.modelId(t.attributes);i!==o&&(null!=i&&delete this._byId[i],null!=o&&(this._byId[o]=t))}}this.trigger.apply(this,arguments)}}),s(x,{forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,
countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3},"models");var E=t.View=function(e){this.cid=n.uniqueId("view"),n.extend(this,n.pick(e,k)),this._ensureElement(),this.initialize.apply(this,arguments)},k=["model","collection","el","id","attributes","className","tagName","events"];n.extend(E.prototype,c,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){return this._removeElement(),this.stopListening(),this},_removeElement:function(){this.$el.remove()},setElement:function(e){return this.undelegateEvents(),this._setElement(e),this.delegateEvents(),this},_setElement:function(e){this.$el=e instanceof t.$?e:t.$(e),this.el=this.$el[0]},delegateEvents:function(e){if(e||(e=n.result(this,"events")),!e)return this;this.undelegateEvents();for(var t in e){var r=e[t];if(n.isFunction(r)||(r=this[r]),r){var i=t.match(/^(\S+)\s*(.*)$/);this.delegate(i[1],i[2],n.bind(r,this))}}return this},delegate:function(e,t,n){return this.$el.on(e+".delegateEvents"+this.cid,t,n),this},undelegateEvents:function(){return this.$el&&this.$el.off(".delegateEvents"+this.cid),this},undelegate:function(e,t,n){return this.$el.off(e+".delegateEvents"+this.cid,t,n),this},_createElement:function(e){return document.createElement(e)},_ensureElement:function(){if(this.el)this.setElement(n.result(this,"el"));else{var e=n.extend({},n.result(this,"attributes"));this.id&&(e.id=n.result(this,"id")),this.className&&(e["class"]=n.result(this,"className")),this.setElement(this._createElement(n.result(this,"tagName"))),this._setAttributes(e)}},_setAttributes:function(e){this.$el.attr(e)}}),t.sync=function(e,r,i){var o=_[e];n.defaults(i||(i={}),{emulateHTTP:t.emulateHTTP,emulateJSON:t.emulateJSON});var a={type:o,dataType:"json"};if(i.url||(a.url=n.result(r,"url")||L()),null!=i.data||!r||"create"!==e&&"update"!==e&&"patch"!==e||(a.contentType="application/json",a.data=JSON.stringify(i.attrs||r.toJSON(i))),i.emulateJSON&&(a.contentType="application/x-www-form-urlencoded",a.data=a.data?{model:a.data}:{}),i.emulateHTTP&&("PUT"===o||"DELETE"===o||"PATCH"===o)){a.type="POST",i.emulateJSON&&(a.data._method=o);var s=i.beforeSend;i.beforeSend=function(e){if(e.setRequestHeader("X-HTTP-Method-Override",o),s)return s.apply(this,arguments)}}"GET"===a.type||i.emulateJSON||(a.processData=!1);var u=i.error;i.error=function(e,t,n){i.textStatus=t,i.errorThrown=n,u&&u.call(i.context,e,t,n)};var l=i.xhr=t.ajax(n.extend(a,i));return r.trigger("request",r,l,i),l};var _={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};t.ajax=function(){return t.$.ajax.apply(t.$,arguments)};var N=t.Router=function(e){e||(e={}),e.routes&&(this.routes=e.routes),this._bindRoutes(),this.initialize.apply(this,arguments)};n.extend(N.prototype,c,{initialize:function(){},route:function(e,r,i){n.isRegExp(e)||(e=this._routeToRegExp(e)),n.isFunction(r)&&(i=r,r=""),i||(i=this[r]);var o=this;return t.history.route(e,function(n){var a=o._extractParameters(e,n);!1!==o.execute(i,a,r)&&(o.trigger.apply(o,["route:"+r].concat(a)),o.trigger("route",r,a),t.history.trigger("route",o,r,a))}),this},execute:function(e,t,n){e&&e.apply(this,t)},navigate:function(e,n){return t.history.navigate(e,n),this},_bindRoutes:function(){if(this.routes){this.routes=n.result(this,"routes");for(var e,t=n.keys(this.routes);null!=(e=t.pop());)this.route(e,this.routes[e])}},_routeToRegExp:function(e){return e=e.replace(/[\-{}\[\]+?.,\\\^$|#\s]/g,"\\$&").replace(/\((.*?)\)/g,"(?:$1)?").replace(/(\(\?)?:\w+/g,function(e,t){return t?e:"([^/?]+)"}).replace(/\*\w+/g,"([^?]*?)"),new RegExp("^"+e+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(e,t){var r=e.exec(t).slice(1);return n.map(r,function(e,t){return t===r.length-1?e||null:e?decodeURIComponent(e):null})}});var S=t.History=function(){this.handlers=[],this.checkUrl=n.bind(this.checkUrl,this),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)};S.started=!1,n.extend(S.prototype,c,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root&&!this.getSearch()},matchRoot:function(){return this.decodeFragment(this.location.pathname).slice(0,this.root.length-1)+"/"===this.root},decodeFragment:function(e){return decodeURI(e.replace(/%25/g,"%2525"))},getSearch:function(){var e=this.location.href.replace(/#.*/,"").match(/\?.+/);return e?e[0]:""},getHash:function(e){var t=(e||this).location.href.match(/#(.*)$/);return t?t[1]:""},getPath:function(){var e=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return"/"===e.charAt(0)?e.slice(1):e},getFragment:function(e){return null==e&&(e=this._usePushState||!this._wantsHashChange?this.getPath():this.getHash()),e.replace(/^[#\/]|\s+$/g,"")},start:function(e){if(S.started)throw new Error("Backbone.history has already been started");if(S.started=!0,this.options=n.extend({root:"/"},this.options,e),this.root=this.options.root,this._wantsHashChange=!1!==this.options.hashChange,this._hasHashChange="onhashchange"in window&&(void 0===document.documentMode||document.documentMode>7),this._useHashChange=this._wantsHashChange&&this._hasHashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!(!this.history||!this.history.pushState),this._usePushState=this._wantsPushState&&this._hasPushState,this.fragment=this.getFragment(),this.root=("/"+this.root+"/").replace(/^\/+|\/+$/g,"/"),this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var t=this.root.slice(0,-1)||"/";return this.location.replace(t+"#"+this.getPath()),!0}this._hasPushState&&this.atRoot()&&this.navigate(this.getHash(),{replace:!0})}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe"),this.iframe.src="javascript:0",this.iframe.style.display="none",this.iframe.tabIndex=-1;var r=document.body,i=r.insertBefore(this.iframe,r.firstChild).contentWindow;i.document.open(),i.document.close(),i.location.hash="#"+this.fragment}var o=window.addEventListener||function(e,t){return attachEvent("on"+e,t)};if(this._usePushState?o("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe?o("hashchange",this.checkUrl,!1):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),!this.options.silent)return this.loadUrl()},stop:function(){var e=window.removeEventListener||function(e,t){return detachEvent("on"+e,t)};this._usePushState?e("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe&&e("hashchange",this.checkUrl,!1),this.iframe&&(document.body.removeChild(this.iframe),this.iframe=null),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),S.started=!1},route:function(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(e){var t=this.getFragment();if(t===this.fragment&&this.iframe&&(t=this.getHash(this.iframe.contentWindow)),t===this.fragment)return!1;this.iframe&&this.navigate(t),this.loadUrl()},loadUrl:function(e){return!!this.matchRoot()&&(e=this.fragment=this.getFragment(e),n.some(this.handlers,function(t){if(t.route.test(e))return t.callback(e),!0}))},navigate:function(e,t){if(!S.started)return!1;t&&!0!==t||(t={trigger:!!t}),e=this.getFragment(e||"");var n=this.root;""!==e&&"?"!==e.charAt(0)||(n=n.slice(0,-1)||"/");var r=n+e;if(e=this.decodeFragment(e.replace(/#.*$/,"")),this.fragment!==e){if(this.fragment=e,this._usePushState)this.history[t.replace?"replaceState":"pushState"]({},document.title,r);else{if(!this._wantsHashChange)return this.location.assign(r);if(this._updateHash(this.location,e,t.replace),this.iframe&&e!==this.getHash(this.iframe.contentWindow)){var i=this.iframe.contentWindow;t.replace||(i.document.open(),i.document.close()),this._updateHash(i.location,e,t.replace)}}return t.trigger?this.loadUrl(e):void 0}},_updateHash:function(e,t,n){if(n){var r=e.href.replace(/(javascript:|#).*$/,"");e.replace(r+"#"+t)}else e.hash="#"+t}}),t.history=new S;var A=function(e,t){var r,i=this;return r=e&&n.has(e,"constructor")?e.constructor:function(){return i.apply(this,arguments)},n.extend(r,i,t),r.prototype=n.create(i.prototype,e),r.prototype.constructor=r,r.__super__=i.prototype,r};b.extend=x.extend=N.extend=E.extend=S.extend=A;var L=function(){throw new Error('A "url" property or function must be specified')},j=function(e,t){var n=t.error;t.error=function(r){n&&n.call(t.context,e,r,t),e.trigger("error",e,r,t)}};return t}),function(e){e.fn.qrcode=function(t){function n(e){this.mode=s,this.data=e}function r(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function i(e,t){if(void 0==e.length)throw Error(e.length+"/"+t);for(var n=0;n<e.length&&0==e[n];)n++;this.num=Array(e.length-n+t);for(var r=0;r<e.length-n;r++)this.num[r]=e[r+n]}function o(e,t){this.totalCount=e,this.dataCount=t}function a(){this.buffer=[],this.length=0}var s;n.prototype={getLength:function(){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}},r.prototype={addData:function(e){this.dataList.push(new n(e)),this.dataCache=null},isDark:function(e,t){if(0>e||this.moduleCount<=e||0>t||this.moduleCount<=t)throw Error(e+","+t);return this.modules[e][t]},getModuleCount:function(){return this.moduleCount},make:function(){if(1>this.typeNumber){for(var e=1,e=1;40>e;e++){for(var t=o.getRSBlocks(e,this.errorCorrectLevel),n=new a,r=0,i=0;i<t.length;i++)r+=t[i].dataCount;for(i=0;i<this.dataList.length;i++)t=this.dataList[i],n.put(t.mode,4),n.put(t.getLength(),u.getLengthInBits(t.mode,e)),t.write(n);if(n.getLengthInBits()<=8*r)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(e,t){this.moduleCount=4*this.typeNumber+17,this.modules=Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++)this.modules[n][i]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),7<=this.typeNumber&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=r.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(e,t){for(var n=-1;7>=n;n++)if(!(-1>=e+n||this.moduleCount<=e+n))for(var r=-1;7>=r;r++)-1>=t+r||this.moduleCount<=t+r||(this.modules[e+n][t+r]=0<=n&&6>=n&&(0==r||6==r)||0<=r&&6>=r&&(0==n||6==n)||2<=n&&4>=n&&2<=r&&4>=r)},getBestMaskPattern:function(){for(var e=0,t=0,n=0;8>n;n++){this.makeImpl(!0,n);var r=u.getLostPoint(this);(0==n||e>r)&&(e=r,t=n)}return t},createMovieClip:function(e,t,n){for(e=e.createEmptyMovieClip(t,n),this.make(),t=0;t<this.modules.length;t++)for(var n=1*t,r=0;r<this.modules[t].length;r++){var i=1*r;this.modules[t][r]&&(e.beginFill(0,100),e.moveTo(i,n),e.lineTo(i+1,n),e.lineTo(i+1,n+1),e.lineTo(i,n+1),e.endFill())}return e},setupTimingPattern:function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=0==e%2);for(e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=0==e%2)},setupPositionAdjustPattern:function(){for(var e=u.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var n=0;n<e.length;n++){var r=e[t],i=e[n];if(null==this.modules[r][i])for(var o=-2;2>=o;o++)for(var a=-2;2>=a;a++)this.modules[r+o][i+a]=-2==o||2==o||-2==a||2==a||0==o&&0==a}},setupTypeNumber:function(e){for(var t=u.getBCHTypeNumber(this.typeNumber),n=0;18>n;n++){var r=!e&&1==(t>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(n=0;18>n;n++)r=!e&&1==(t>>n&1),this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r},setupTypeInfo:function(e,t){for(var n=u.getBCHTypeInfo(this.errorCorrectLevel<<3|t),r=0;15>r;r++){var i=!e&&1==(n>>r&1);6>r?this.modules[r][8]=i:8>r?this.modules[r+1][8]=i:this.modules[this.moduleCount-15+r][8]=i}for(r=0;15>r;r++)i=!e&&1==(n>>r&1),8>r?this.modules[8][this.moduleCount-r-1]=i:9>r?this.modules[8][15-r-1+1]=i:this.modules[8][15-r-1]=i;this.modules[this.moduleCount-8][8]=!e},mapData:function(e,t){for(var n=-1,r=this.moduleCount-1,i=7,o=0,a=this.moduleCount-1;0<a;a-=2)for(6==a&&a--;;){for(var s=0;2>s;s++)if(null==this.modules[r][a-s]){var l=!1;o<e.length&&(l=1==(e[o]>>>i&1)),u.getMask(t,r,a-s)&&(l=!l),this.modules[r][a-s]=l,i--,-1==i&&(o++,i=7)}if(0>(r+=n)||this.moduleCount<=r){r-=n,n=-n;break}}}},r.PAD0=236,r.PAD1=17,r.createData=function(e,t,n){for(var t=o.getRSBlocks(e,t),i=new a,s=0;s<n.length;s++){var l=n[s];i.put(l.mode,4),i.put(l.getLength(),u.getLengthInBits(l.mode,e)),l.write(i)}for(s=e=0;s<t.length;s++)e+=t[s].dataCount;if(i.getLengthInBits()>8*e)throw Error("code length overflow. ("+i.getLengthInBits()+">"+8*e+")");for(i.getLengthInBits()+4<=8*e&&i.put(0,4);0!=i.getLengthInBits()%8;)i.putBit(!1);for(;!(i.getLengthInBits()>=8*e)&&(i.put(r.PAD0,8),!(i.getLengthInBits()>=8*e));)i.put(r.PAD1,8);return r.createBytes(i,t)},r.createBytes=function(e,t){for(var n=0,r=0,o=0,a=Array(t.length),s=Array(t.length),l=0;l<t.length;l++){var c=t[l].dataCount,f=t[l].totalCount-c,r=Math.max(r,c),o=Math.max(o,f);a[l]=Array(c);for(var d=0;d<a[l].length;d++)a[l][d]=255&e.buffer[d+n];for(n+=c,d=u.getErrorCorrectPolynomial(f),c=new i(a[l],d.getLength()-1).mod(d),s[l]=Array(d.getLength()-1),d=0;d<s[l].length;d++)f=d+c.getLength()-s[l].length,s[l][d]=0<=f?c.get(f):0}for(d=l=0;d<t.length;d++)l+=t[d].totalCount;for(n=Array(l),d=c=0;d<r;d++)for(l=0;l<t.length;l++)d<a[l].length&&(n[c++]=a[l][d]);for(d=0;d<o;d++)for(l=0;l<t.length;l++)d<s[l].length&&(n[c++]=s[l][d]);return n},s=4;for(var u={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){for(var t=e<<10;0<=u.getBCHDigit(t)-u.getBCHDigit(u.G15);)t^=u.G15<<u.getBCHDigit(t)-u.getBCHDigit(u.G15);return(e<<10|t)^u.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;0<=u.getBCHDigit(t)-u.getBCHDigit(u.G18);)t^=u.G18<<u.getBCHDigit(t)-u.getBCHDigit(u.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;0!=e;)t++,e>>>=1;return t},getPatternPosition:function(e){return u.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,n){switch(e){case 0:return 0==(t+n)%2;case 1:return 0==t%2;case 2:return 0==n%3;case 3:return 0==(t+n)%3;case 4:return 0==(Math.floor(t/2)+Math.floor(n/3))%2;case 5:return 0==t*n%2+t*n%3;case 6:return 0==(t*n%2+t*n%3)%2;case 7:return 0==(t*n%3+(t+n)%2)%2;default:throw Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new i([1],0),n=0;n<e;n++)t=t.multiply(new i([1,l.gexp(n)],0));return t},getLengthInBits:function(e,t){if(1<=t&&10>t)switch(e){case 1:return 10;case 2:return 9;case s:case 8:return 8;default:throw Error("mode:"+e)}else if(27>t)switch(e){case 1:return 12;case 2:return 11;case s:return 16;case 8:return 10;default:throw Error("mode:"+e)}else{if(!(41>t))throw Error("type:"+t);switch(e){case 1:return 14;case 2:return 13;case s:return 16;case 8:return 12;default:throw Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),n=0,r=0;r<t;r++)for(var i=0;i<t;i++){for(var o=0,a=e.isDark(r,i),s=-1;1>=s;s++)if(!(0>r+s||t<=r+s))for(var u=-1;1>=u;u++)0>i+u||t<=i+u||0==s&&0==u||a==e.isDark(r+s,i+u)&&o++;5<o&&(n+=3+o-5)}for(r=0;r<t-1;r++)for(i=0;i<t-1;i++)o=0,e.isDark(r,i)&&o++,e.isDark(r+1,i)&&o++,e.isDark(r,i+1)&&o++,e.isDark(r+1,i+1)&&o++,(0==o||4==o)&&(n+=3);for(r=0;r<t;r++)for(i=0;i<t-6;i++)e.isDark(r,i)&&!e.isDark(r,i+1)&&e.isDark(r,i+2)&&e.isDark(r,i+3)&&e.isDark(r,i+4)&&!e.isDark(r,i+5)&&e.isDark(r,i+6)&&(n+=40);for(i=0;i<t;i++)for(r=0;r<t-6;r++)e.isDark(r,i)&&!e.isDark(r+1,i)&&e.isDark(r+2,i)&&e.isDark(r+3,i)&&e.isDark(r+4,i)&&!e.isDark(r+5,i)&&e.isDark(r+6,i)&&(n+=40);for(i=o=0;i<t;i++)for(r=0;r<t;r++)e.isDark(r,i)&&o++;return e=Math.abs(100*o/t/t-50)/5,n+10*e}},l={glog:function(e){if(1>e)throw Error("glog("+e+")");return l.LOG_TABLE[e]},gexp:function(e){for(;0>e;)e+=255;for(;256<=e;)e-=255;return l.EXP_TABLE[e]},EXP_TABLE:Array(256),LOG_TABLE:Array(256)},c=0;8>c;c++)l.EXP_TABLE[c]=1<<c;for(c=8;256>c;c++)l.EXP_TABLE[c]=l.EXP_TABLE[c-4]^l.EXP_TABLE[c-5]^l.EXP_TABLE[c-6]^l.EXP_TABLE[c-8];for(c=0;255>c;c++)l.LOG_TABLE[l.EXP_TABLE[c]]=c;return i.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=Array(this.getLength()+e.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<e.getLength();r++)t[n+r]^=l.gexp(l.glog(this.get(n))+l.glog(e.get(r)));return new i(t,0)},mod:function(e){if(0>this.getLength()-e.getLength())return this;for(var t=l.glog(this.get(0))-l.glog(e.get(0)),n=Array(this.getLength()),r=0;r<this.getLength();r++)n[r]=this.get(r);for(r=0;r<e.getLength();r++)n[r]^=l.gexp(l.glog(e.get(r))+t);return new i(n,0).mod(e)}},o.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o.getRSBlocks=function(e,t){var n=o.getRsBlockTable(e,t);if(void 0==n)throw Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var r=n.length/3,i=[],a=0;a<r;a++)for(var s=n[3*a+0],u=n[3*a+1],l=n[3*a+2],c=0;c<s;c++)i.push(new o(u,l));return i},o.getRsBlockTable=function(e,t){switch(t){case 1:return o.RS_BLOCK_TABLE[4*(e-1)+0];case 0:return o.RS_BLOCK_TABLE[4*(e-1)+1];case 3:return o.RS_BLOCK_TABLE[4*(e-1)+2];case 2:return o.RS_BLOCK_TABLE[4*(e-1)+3]}},a.prototype={get:function(e){return 1==(this.buffer[Math.floor(e/8)]>>>7-e%8&1)},put:function(e,t){for(var n=0;n<t;n++)this.putBit(1==(e>>>t-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},"string"==typeof t&&(t={text:t}),t=e.extend({},{render:"canvas",width:256,height:256,typeNumber:-1,correctLevel:2,background:"#ffffff",foreground:"#000000"},t),this.each(function(){var n;if("canvas"==t.render){n=new r(t.typeNumber,t.correctLevel),n.addData(t.text),n.make();var i=document.createElement("canvas");i.width=t.width,i.height=t.height;for(var o=i.getContext("2d"),a=t.width/n.getModuleCount(),s=t.height/n.getModuleCount(),u=0;u<n.getModuleCount();u++)for(var l=0;l<n.getModuleCount();l++){o.fillStyle=n.isDark(u,l)?t.foreground:t.background;var c=Math.ceil((l+1)*a)-Math.floor(l*a),f=Math.ceil((u+1)*a)-Math.floor(u*a);o.fillRect(Math.round(l*a),Math.round(u*s),c,f)}}else for(n=new r(t.typeNumber,t.correctLevel),n.addData(t.text),n.make(),i=e("<table></table>").css("width",t.width+"px").css("height",t.height+"px").css("border","0px").css("border-collapse","collapse").css("background-color",t.background),o=t.width/n.getModuleCount(),a=t.height/n.getModuleCount(),s=0;s<n.getModuleCount();s++)for(u=e("<tr></tr>").css("height",a+"px").appendTo(i),l=0;l<n.getModuleCount();l++)e("<td></td>").css("width",o+"px").css("background-color",n.isDark(s,l)?t.foreground:t.background).appendTo(u);n=i,jQuery(n).appendTo(this)})}}(jQuery);
====================================================
====================Beautified Below================
ull == (i = o[t]) && (i = o[de.camelCase(t)]) : i = o, i
        }
    }

    function f(e, t, n) {
        if (Ne(e)) {
            var r, i, o = e.nodeType,
                a = o ? de.cache : e,
                s = o ? e[de.expando] : de.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    de.isArray(t) ? t = t.concat(de.map(t, de.camelCase)) : t in r ? t = [t] : (t = de.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !l(r) : !de.isEmptyObject(r)) return
                }(n || (delete a[s].data, l(a[s]))) && (o ? de.cleanData([e], !0) : fe.deleteExpando || a != a.window ? delete a[s] : a[s] = undefined)
            }
        }
    }

    function d(e, t, n, r) {
        var i, o = 1,
            a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return de.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (de.cssNumber[t] ? "" : "px"),
            c = (de.cssNumber[t] || "px" !== l && +u) && je.exec(de.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do {
                o = o || ".5", c /= o, de.style(e, t, c + l)
            } while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function h(e) {
        var t = qe.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function p(e, t) {
        var n, r, i = 0,
            o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || de.nodeName(r, t) ? o.push(r) : de.merge(o, p(r, t));
        return t === undefined || t && de.nodeName(e, t) ? de.merge([e], o) : o
    }

    function g(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) de._data(n, "globalEval", !t || de._data(t[r], "globalEval"))
    }

    function m(e) {
        Pe.test(e.type) && (e.defaultChecked = e.checked)
    }

    function v(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f, d = e.length, v = h(t), y = [], b = 0; b < d; b++)
            if ((a = e[b]) || 0 === a)
                if ("object" === de.type(a)) de.merge(y, a.nodeType ? [a] : a);
                else if (Fe.test(a)) {
            for (u = u || v.appendChild(t.createElement("div")), l = (Be.exec(a) || ["", ""])[1].toLowerCase(), f = Re[l] || Re._default, u.innerHTML = f[1] + de.htmlPrefilter(a) + f[2], o = f[0]; o--;) u = u.lastChild;
            if (!fe.leadingWhitespace && Ie.test(a) && y.push(t.createTextNode(Ie.exec(a)[0])), !fe.tbody)
                for (a = "table" !== l || $e.test(a) ? "<table>" !== f[1] || $e.test(a) ? 0 : u : u.firstChild, o = a && a.childNodes.length; o--;) de.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (de.merge(y, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
            u = v.lastChild
        } else y.push(t.createTextNode(a));
        for (u && v.removeChild(u), fe.appendChecked || de.grep(p(y, "input"), m), b = 0; a = y[b++];)
            if (r && de.inArray(a, r) > -1) i && i.push(a);
            else if (s = de.contains(a.ownerDocument, a), u = p(v.appendChild(a), "script"), s && g(u), n)
            for (o = 0; a = u[o++];) Oe.test(a.type || "") && n.push(a);
        return u = null, v
    }

    function y() {
        return !0
    }

    function b() {
        return !1
    }

    function x() {
        try {
            return re.activeElement
        } catch (e) {}
    }

    function w(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = undefined);
            for (s in t) w(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = undefined) : null == i && ("string" == typeof n ? (i = r, r = undefined) : (i = r, r = n, n = undefined)), !1 === i) i = b;
        else if (!i) return e;
        return 1 === o && (a = i, i = function(e) {
            return de().off(e), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = de.guid++)), e.each(function() {
            de.event.add(this, t, i, r, n)
        })
    }

    function T(e, t) {
        return de.nodeName(e, "table") && de.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function C(e) {
        return e.type = (null !== de.find.attr(e, "type")) + "/" + e.type, e
    }

    function E(e) {
        var t = Ye.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function k(e, t) {
        if (1 === t.nodeType && de.hasData(e)) {
            var n, r, i, o = de._data(e),
                a = de._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; r < i; r++) de.event.add(t, n, s[n][r])
            }
            a.data && (a.data = de.extend({}, a.data))
        }
    }

    function _(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !fe.noCloneEvent && t[de.expando]) {
                i = de._data(t);
                for (r in i.events) de.removeEvent(t, r, i.handle);
                t.removeAttribute(de.expando)
            }
            "script" === n && t.text !== e.text ? (C(t).text = e.text, E(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), fe.html5Clone && e.innerHTML && !de.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Pe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function N(e, t, n, r) {
        t = oe.apply([], t);
        var i, o, a, s, u, l, c = 0,
            f = e.length,
            d = f - 1,
            h = t[0],
            g = de.isFunction(h);
        if (g || f > 1 && "string" == typeof h && !fe.checkClone && Ke.test(h)) return e.each(function(i) {
            var o = e.eq(i);
            g && (t[0] = h.call(this, i, o.html())), N(o, t, n, r)
        });
        if (f && (l = v(t, e[0].ownerDocument, !1, e, r), i = l.firstChild, 1 === l.childNodes.length && (l = i), i || r)) {
            for (s = de.map(p(l, "script"), C), a = s.length; c < f; c++) o = l, c !== d && (o = de.clone(o, !0, !0), a && de.merge(s, p(o, "script"))), n.call(e[c], o, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument, de.map(s, E), c = 0; c < a; c++) o = s[c], Oe.test(o.type || "") && !de._data(o, "globalEval") && de.contains(u, o) && (o.src ? de._evalUrl && de._evalUrl(o.src) : de.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Qe, "")));
            l = i = null
        }
        return e
    }

    function S(e, t, n) {
        for (var r, i = t ? de.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || de.cleanData(p(r)), r.parentNode && (n && de.contains(r.ownerDocument, r) && g(p(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function A(e, t) {
        var n = de(t.createElement(e)).appendTo(t.body),
            r = de.css(n[0], "display");
        return n.detach(), r
    }

    function L(e) {
        var t = re,
            n = nt[e];
        return n || (n = A(e, t), "none" !== n && n || (tt = (tt || de("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (tt[0].contentWindow || tt[0].contentDocument).document, t.write(), t.close(), n = A(e, t), tt.detach()), nt[e] = n), n
    }

    function j(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function D(e) {
        if (e in vt) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = mt.length; n--;)
            if ((e = mt[n] + t) in vt) return e
    }

    function H(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) r = e[a], r.style && (o[a] = de._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && He(r) && (o[a] = de._data(r, "olddisplay", L(r.nodeName)))) : (i = He(r), (n && "none" !== n || !i) && de._data(r, "olddisplay", i ? n : de.css(r, "display"))));
        for (a = 0; a < s; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function M(e, t, n) {
        var r = ht.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function P(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += de.css(e, n + De[o], !0, i)), r ? ("content" === n && (a -= de.css(e, "padding" + De[o], !0, i)), "margin" !== n && (a -= de.css(e, "border" + De[o] + "Width", !0, i))) : (a += de.css(e, "padding" + De[o], !0, i), "padding" !== n && (a += de.css(e, "border" + De[o] + "Width", !0, i)));
        return a
    }

    function B(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = st(e),
            a = fe.boxSizing && "border-box" === de.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (i = ut(e, t, o), (i < 0 || null == i) && (i = e.style[t]), it.test(i)) return i;
            r = a && (fe.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + P(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function O(e, t, n, r, i) {
        return new O.prototype.init(e, t, n, r, i)
    }

    function I() {
        return e.setTimeout(function() {
            yt = undefined
        }), yt = de.now()
    }

    function q(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = De[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function R(e, t, n) {
        for (var r, i = (W.tweeners[t] || []).concat(W.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function F(e, t, n) {
        var r, i, o, a, s, u, l, c = this,
            f = {},
            d = e.style,
            h = e.nodeType && He(e),
            p = de._data(e, "fxshow");
        n.queue || (s = de._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, c.always(function() {
            c.always(function() {
                s.unqueued--, de.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = de.css(e, "display"), "inline" === ("none" === l ? de._data(e, "olddisplay") || L(e.nodeName) : l) && "none" === de.css(e, "float") && (fe.inlineBlockNeedsLayout && "inline" !== L(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", fe.shrinkWrapBlocks() || c.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], xt.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !p || p[r] === undefined) continue;
                    h = !0
                }
                f[r] = p && p[r] || de.style(e, r)
            } else l = undefined;
        if (de.isEmptyObject(f)) "inline" === ("none" === l ? L(e.nodeName) : l) && (d.display = l);
        else {
            p ? "hidden" in p && (h = p.hidden) : p = de._data(e, "fxshow", {}), o && (p.hidden = !h), h ? de(e).show() : c.done(function() {
                de(e).hide()
            }), c.done(function() {
                var t;
                de._removeData(e, "fxshow");
                for (t in f) de.style(e, t, f[t])
            });
            for (r in f) a = R(h ? p[r] : 0, r, c), r in p || (p[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function $(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = de.camelCase(n), i = t[r], o = e[n], de.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = de.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function W(e, t, n) {
        var r, i, o = 0,
            a = W.prefilters.length,
            s = de.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = yt || I(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), o < 1 && u ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: de.extend({}, t),
                opts: de.extend(!0, {
                    specialEasing: {},
                    easing: de.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: yt || I(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = de.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for ($(c, l.opts.specialEasing); o < a; o++)
            if (r = W.prefilters[o].call(l, e, c, l.opts)) return de.isFunction(r.stop) && (de._queueHooks(l.elem, l.opts.queue).stop = de.proxy(r.stop, r)), r;
        return de.map(c, R, l), de.isFunction(l.opts.start) && l.opts.start.call(e, l), de.fx.timer(de.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function z(e) {
        return de.attr(e, "class") || ""
    }

    function X(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(Ee) || [];
            if (de.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function U(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, de.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            a = e === qt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function G(e, t) {
        var n, r, i = de.ajaxSettings.flatOptions || {};
        for (r in t) t[r] !== undefined && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && de.extend(!0, e, n), e
    }

    function J(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    u.unshift(a);
                    break
                } if (u[0] in n) o = u[0];
        else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function V(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))
                for (i in l)
                    if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                        break
                    } if (!0 !== a)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: a ? f : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function K(e) {
        return e.style && e.style.display || de.css(e, "display")
    }

    function Y(e) {
        if (!de.contains(e.ownerDocument || re, e)) return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === K(e) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        return !1
    }

    function Q(e, t, n, r) {
        var i;
        if (de.isArray(t)) de.each(t, function(t, i) {
            n || Wt.test(e) ? r(e, i) : Q(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== de.type(t)) r(e, t);
        else
            for (i in t) Q(e + "[" + i + "]", t[i], n, r)
    }

    function Z() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function te(e) {
        return de.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var ne = [],
        re = e.document,
        ie = ne.slice,
        oe = ne.concat,
        ae = ne.push,
        se = ne.indexOf,
        ue = {},
        le = ue.toString,
        ce = ue.hasOwnProperty,
        fe = {},
        de = function(e, t) {
            return new de.fn.init(e, t)
        },
        he = function(e, t) {
            return t.toUpperCase()
        };
    de.fn = de.prototype = {
        jquery: "1.12.4",
        constructor: de,
        selector: "",
        length: 0,
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : ie.call(this)
        },
        pushStack: function(e) {
            var t = de.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return de.each(this, e)
        },
        map: function(e) {
            return this.pushStack(de.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ae,
        sort: ne.sort,
        splice: ne.splice
    }, de.extend = de.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || de.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = a[r], n = i[r], a !== n && (l && n && (de.isPlainObject(n) || (t = de.isArray(n))) ? (t ? (t = !1, o = e && de.isArray(e) ? e : []) : o = e && de.isPlainObject(e) ? e : {}, a[r] = de.extend(l, o, n)) : n !== undefined && (a[r] = n));
        return a
    }, de.extend({
        expando: "jQuery" + ("1.12.4" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === de.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === de.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !de.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== de.type(e) || e.nodeType || de.isWindow(e)) return !1;
            try {
                if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (!fe.ownFirst)
                for (t in e) return ce.call(e, t);
            for (t in e);
            return t === undefined || ce.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ue[le.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && de.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, he)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var r, i = 0;
            if (n(e))
                for (r = e.length; i < r && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? de.merge(r, "string" == typeof e ? [e] : e) : ae.call(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (se) return se.call(t, e, n);
                for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n;) e[i++] = t[r++];
            if (n !== n)
                for (; t[r] !== undefined;) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, r) {
            var i, o, a = 0,
                s = [];
            if (n(e))
                for (i = e.length; a < i; a++) null != (o = t(e[a], a, r)) && s.push(o);
            else
                for (a in e) null != (o = t(e[a], a, r)) && s.push(o);
            return oe.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), de.isFunction(e) ? (n = ie.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(ie.call(arguments)))
            }, r.guid = e.guid = e.guid || de.guid++, r) : undefined
        },
        now: function() {
            return +new Date
        },
        support: fe
    }), "function" == typeof Symbol && (de.fn[Symbol.iterator] = ne[Symbol.iterator]), de.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ue["[object " + t + "]"] = t.toLowerCase()
    });
    var pe = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, l, f, d, h, p = t && t.ownerDocument,
                g = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
            if (!r && ((t ? t.ownerDocument || t : I) !== L && A(t), t = t || L, D)) {
                if (11 !== g && (f = ge.exec(e)))
                    if (i = f[1]) {
                        if (9 === g) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (p && (a = p.getElementById(i)) && B(t, a) && a.id === i) return n.push(a), n
                    } else {
                        if (f[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = f[3]) && b.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(i)), n
                    } if (b.qsa && !W[e + " "] && (!H || !H.test(e))) {
                    if (1 !== g) p = t, h = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(ve, "\\$&") : t.setAttribute("id", s = O), d = C(e), o = d.length, l = ce.test(s) ? "#" + s : "[id='" + s + "']"; o--;) d[o] = l + " " + c(d[o]);
                        h = d.join(","), p = me.test(e) && u(t.parentNode) || t
                    }
                    if (h) try {
                        return K.apply(n, p.querySelectorAll(h)), n
                    } catch (m) {} finally {
                        s === O && t.removeAttribute("id")
                    }
                }
            }
            return k(e.replace(oe, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[O] = !0, e
        }

        function i(e) {
            var t = L.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function l() {}

        function c(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function f(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = R++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, a) {
                var s, u, l, c = [q, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (l = t[O] || (t[O] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = u[r]) && s[0] === q && s[1] === o) return c[2] = s[2];
                            if (u[r] = c, c[2] = e(t, n, a)) return !0
                        }
            }
        }

        function d(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function h(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r
        }

        function p(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function g(e, t, n, i, o, a) {
            return i && !i[O] && (i = g(i)), o && !o[O] && (o = g(o, a)), r(function(r, a, s, u) {
                var l, c, f, d = [],
                    g = [],
                    m = a.length,
                    v = r || h(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? v : p(v, d, e, s, u),
                    b = n ? o || (r ? e : m || i) ? [] : a : y;
                if (n && n(y, b, s, u), i)
                    for (l = p(b, g), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (b[g[c]] = !(y[g[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = b.length; c--;)(f = b[c]) && l.push(y[c] = f);
                            o(null, b = [], l, u)
                        }
                        for (c = b.length; c--;)(f = b[c]) && (l = o ? Q(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else b = p(b === a ? b.splice(m, b.length) : b), o ? o(null, a, b, u) : K.apply(a, b)
            })
        }

        function m(e) {
            for (var t, n, r, i = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = f(function(e) {
                    return e === t
                }, a, !0), l = f(function(e) {
                    return Q(t, e) > -1
                }, a, !0), h = [function(e, n, r) {
                    var i = !o && (r || n !== _) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, i
                }]; s < i; s++)
                if (n = x.relative[e[s].type]) h = [f(d(h), n)];
                else {
                    if (n = x.filter[e[s].type].apply(null, e[s].matches), n[O]) {
                        for (r = ++s; r < i && !x.relative[e[r].type]; r++);
                        return g(s > 1 && d(h), s > 1 && c(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(oe, "$1"), n, s < r && m(e.slice(s, r)), r < i && m(e = e.slice(r)), r < i && c(e))
                    }
                    h.push(n)
                } return d(h)
        }

        function v(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, u, l) {
                    var c, f, d, h = 0,
                        g = "0",
                        m = r && [],
                        v = [],
                        y = _,
                        b = r || o && x.find.TAG("*", l),
                        w = q += null == y ? 1 : Math.random() || .1,
                        T = b.length;
                    for (l && (_ = a === L || a || l); g !== T && null != (c = b[g]); g++) {
                        if (o && c) {
                            for (f = 0, a || c.ownerDocument === L || (A(c), s = !D); d = e[f++];)
                                if (d(c, a || L, s)) {
                                    u.push(c);
                                    break
                                } l && (q = w)
                        }
                        i && ((c = !d && c) && h--, r && m.push(c))
                    }
                    if (h += g, i && g !== h) {
                        for (f = 0; d = n[f++];) d(m, v, a, s);
                        if (r) {
                            if (h > 0)
                                for (; g--;) m[g] || v[g] || (v[g] = J.call(u));
                            v = p(v)
                        }
                        K.apply(u, v), l && !r && v.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (q = w, _ = y), m
                };
            return i ? r(a) : a
        }
        var y, b, x, w, T, C, E, k, _, N, S, A, L, j, D, H, M, P, B, O = "sizzle" + 1 * new Date,
            I = e.document,
            q = 0,
            R = 0,
            F = n(),
            $ = n(),
            W = n(),
            z = function(e, t) {
                return e === t && (S = !0), 0
            },
            X = 1 << 31,
            U = {}.hasOwnProperty,
            G = [],
            J = G.pop,
            V = G.push,
            K = G.push,
            Y = G.slice,
            Q = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            ie = new RegExp(ee + "+", "g"),
            oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            le = new RegExp(re),
            ce = new RegExp("^" + te + "$"),
            fe = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            de = /^(?:input|select|textarea|button)$/i,
            he = /^h\d$/i,
            pe = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            me = /[+~]/,
            ve = /'|\\/g,
            ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            be = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            xe = function() {
                A()
            };
        try {
            K.apply(G = Y.call(I.childNodes), I.childNodes), G[I.childNodes.length].nodeType
        } catch (we) {
            K = {
                apply: G.length ? function(e, t) {
                    V.apply(e, Y.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        b = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, A = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : I;
            return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, j = L.documentElement, D = !T(L), (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), b.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), b.getElementsByTagName = i(function(e) {
                return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = pe.test(L.getElementsByClassName), b.getById = i(function(e) {
                return j.appendChild(e).id = O, !L.getElementsByName || !L.getElementsByName(O).length
            }), b.getById ? (x.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && D) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, x.filter.ID = function(e) {
                var t = e.replace(ye, be);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete x.find.ID, x.filter.ID = function(e) {
                var t = e.replace(ye, be);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), x.find.TAG = b.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, x.find.CLASS = b.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && D) return t.getElementsByClassName(e)
            }, M = [], H = [], (b.qsa = pe.test(L.querySelectorAll)) && (i(function(e) {
                j.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + O + "-]").length || H.push("~="), e.querySelectorAll(":checked").length || H.push(":checked"), e.querySelectorAll("a#" + O + "+*").length || H.push(".#.+[+~]")
            }), i(function(e) {
                var t = L.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
            })), (b.matchesSelector = pe.test(P = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && i(function(e) {
                b.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), M.push("!=", re)
            }), H = H.length && new RegExp(H.join("|")), M = M.length && new RegExp(M.join("|")), t = pe.test(j.compareDocumentPosition), B = t || pe.test(j.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, z = t ? function(e, t) {
                if (e === t) return S = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === I && B(I, e) ? -1 : t === L || t.ownerDocument === I && B(I, t) ? 1 : N ? Q(N, e) - Q(N, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return S = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    u = [t];
                if (!i || !o) return e === L ? -1 : t === L ? 1 : i ? -1 : o ? 1 : N ? Q(N, e) - Q(N, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; s[r] === u[r];) r++;
                return r ? a(s[r], u[r]) : s[r] === I ? -1 : u[r] === I ? 1 : 0
            }, L) : L
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== L && A(e), n = n.replace(ue, "='$1']"), b.matchesSelector && D && !W[n + " "] && (!M || !M.test(n)) && (!H || !H.test(n))) try {
                var r = P.call(e, n);
                if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (we) {}
            return t(n, L, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && A(e), B(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== L && A(e);
            var n = x.attrHandle[t.toLowerCase()],
                r = n && U.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !D) : undefined;
            return r !== undefined ? r : b.attributes || !D ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (S = !b.detectDuplicates, N = !b.sortStable && e.slice(0), e.sort(z), S) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return N = null, e
        }, w = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += w(t);
            return n
        }, x = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ye, be), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ye, be).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = F[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && F(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, f, d, h, p, g = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !u && !s,
                            b = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (d = t; d = d[g];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                for (d = m, f = d[O] || (d[O] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], h = l[0] === q && l[1], b = h && l[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (b = h = 0) || p.pop();)
                                    if (1 === d.nodeType && ++b && d === t) {
                                        c[e] = [q, h, b];
                                        break
                                    }
                            } else if (y && (d = t, f = d[O] || (d[O] = {}),
                                    c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], h = l[0] === q && l[1], b = h), !1 === b)
                                for (;
                                    (d = ++h && d && d[g] || (b = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (f = d[O] || (d[O] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [q, b]), d !== t)););
                            return (b -= i) === r || b % r == 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[O] ? o(n) : o.length > 1 ? (i = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = Q(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = E(e.replace(oe, "$1"));
                    return i[O] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(ye, be),
                        function(t) {
                            return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, be).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === j
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return he.test(e.nodeName)
                },
                input: function(e) {
                    return de.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: s(function() {
                    return [0]
                }),
                last: s(function(e, t) {
                    return [t - 1]
                }),
                eq: s(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: s(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: s(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: s(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: s(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (y in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[y] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(y);
        for (y in {
                submit: !0,
                reset: !0
            }) x.pseudos[y] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(y);
        return l.prototype = x.filters = x.pseudos, x.setFilters = new l, C = t.tokenize = function(e, n) {
            var r, i, o, a, s, u, l, c = $[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], l = x.preFilter; s;) {
                r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = se.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(oe, " ")
                }), s = s.slice(r.length));
                for (a in x.filter) !(i = fe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : $(e, u).slice(0)
        }, E = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = W[e + " "];
            if (!o) {
                for (t || (t = C(e)), n = t.length; n--;) o = m(t[n]), o[O] ? r.push(o) : i.push(o);
                o = W(e, v(i, r)), o.selector = e
            }
            return o
        }, k = t.select = function(e, t, n, r) {
            var i, o, a, s, l, f = "function" == typeof e && e,
                d = !r && C(e = f.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === t.nodeType && D && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(ye, be), t) || [])[0])) return n;
                    f && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]);)
                    if ((l = x.find[s]) && (r = l(a.matches[0].replace(ye, be), me.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && c(o))) return K.apply(n, r), n;
                        break
                    }
            }
            return (f || E(e, d))(r, t, !D, n, !t || me.test(e) && u(t.parentNode) || t), n
        }, b.sortStable = O.split("").sort(z).join("") === O, b.detectDuplicates = !!S, A(), b.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    de.find = pe, de.expr = pe.selectors, de.expr[":"] = de.expr.pseudos, de.uniqueSort = de.unique = pe.uniqueSort, de.text = pe.getText, de.isXMLDoc = pe.isXML, de.contains = pe.contains;
    var ge = function(e, t, n) {
            for (var r = [], i = n !== undefined;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && de(e).is(n)) break;
                    r.push(e)
                } return r
        },
        me = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        ve = de.expr.match.needsContext,
        ye = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        be = /^.[^:#\[\.,]*$/;
    de.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? de.find.matchesSelector(r, e) ? [r] : [] : de.find.matches(e, de.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, de.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(de(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (de.contains(r[t], this)) return !0
            }));
            for (t = 0; t < i; t++) de.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? de.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && ve.test(e) ? de(e) : e || [], !1).length
        }
    });
    var xe, we = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (de.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || xe, "string" == typeof e) {
            if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : we.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof de ? t[0] : t, de.merge(this, de.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)), ye.test(r[1]) && de.isPlainObject(t))
                    for (r in t) de.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            if ((i = re.getElementById(r[2])) && i.parentNode) {
                if (i.id !== r[2]) return xe.find(e);
                this.length = 1, this[0] = i
            }
            return this.context = re, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : de.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(de) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), de.makeArray(e, this))
    }).prototype = de.fn, xe = de(re);
    var Te = /^(?:parents|prev(?:Until|All))/,
        Ce = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    de.fn.extend({
        has: function(e) {
            var t, n = de(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (de.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ve.test(e) || "string" != typeof e ? de(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && de.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    } return this.pushStack(o.length > 1 ? de.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? de.inArray(this[0], de(e)) : de.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(de.uniqueSort(de.merge(this.get(), de(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), de.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ge(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ge(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return ge(e, "nextSibling")
        },
        prevAll: function(e) {
            return ge(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ge(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ge(e, "previousSibling", n)
        },
        siblings: function(e) {
            return me((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return me(e.firstChild)
        },
        contents: function(e) {
            return de.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : de.merge([], e.childNodes)
        }
    }, function(e, t) {
        de.fn[e] = function(n, r) {
            var i = de.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = de.filter(r, i)), this.length > 1 && (Ce[e] || (i = de.uniqueSort(i)), Te.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var Ee = /\S+/g;
    de.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : de.extend({}, e);
        var t, n, r, i, a = [],
            s = [],
            u = -1,
            l = function() {
                for (i = e.once, r = t = !0; s.length; u = -1)
                    for (n = s.shift(); ++u < a.length;) !1 === a[u].apply(n[0], n[1]) && e.stopOnFalse && (u = a.length, n = !1);
                e.memory || (n = !1), t = !1, i && (a = n ? [] : "")
            },
            c = {
                add: function() {
                    return a && (n && !t && (u = a.length - 1, s.push(n)), function r(t) {
                        de.each(t, function(t, n) {
                            de.isFunction(n) ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== de.type(n) && r(n)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return de.each(arguments, function(e, t) {
                        for (var n;
                            (n = de.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function(e) {
                    return e ? de.inArray(e, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return i = s = [], a = n = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return i = !0, n || c.disable(), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, de.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", de.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", de.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", de.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return de.Deferred(function(n) {
                            de.each(t, function(t, o) {
                                var a = de.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && de.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? de.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, de.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = ie.call(arguments),
                a = o.length,
                s = 1 !== a || e && de.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : de.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && de.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    });
    var ke;
    de.fn.ready = function(e) {
        return de.ready.promise().done(e), this
    }, de.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? de.readyWait++ : de.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --de.readyWait : de.isReady) || (de.isReady = !0, !0 !== e && --de.readyWait > 0 || (ke.resolveWith(re, [de]), de.fn.triggerHandler && (de(re).triggerHandler("ready"), de(re).off("ready"))))
        }
    }), de.ready.promise = function(t) {
        if (!ke)
            if (ke = de.Deferred(), "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll) e.setTimeout(de.ready);
            else if (re.addEventListener) re.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);
        else {
            re.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && re.documentElement
            } catch (r) {}
            n && n.doScroll && function i() {
                if (!de.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (r) {
                        return e.setTimeout(i, 50)
                    }
                    a(), de.ready()
                }
            }()
        }
        return ke.promise(t)
    }, de.ready.promise();
    var _e;
    for (_e in de(fe)) break;
    fe.ownFirst = "0" === _e, fe.inlineBlockNeedsLayout = !1, de(function() {
            var e, t, n, r;
            (n = re.getElementsByTagName("body")[0]) && n.style && (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", fe.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function() {
            var e = re.createElement("div");
            fe.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                fe.deleteExpando = !1
            }
            e = null
        }();
    var Ne = function(e) {
            var t = de.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        },
        Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ae = /([A-Z])/g;
    de.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return !!(e = e.nodeType ? de.cache[e[de.expando]] : e[de.expando]) && !l(e)
            },
            data: function(e, t, n) {
                return c(e, t, n)
            },
            removeData: function(e, t) {
                return f(e, t)
            },
            _data: function(e, t, n) {
                return c(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return f(e, t, !0)
            }
        }), de.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0],
                    a = o && o.attributes;
                if (e === undefined) {
                    if (this.length && (i = de.data(o), 1 === o.nodeType && !de._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = de.camelCase(r.slice(5)), u(o, r, i[r])));
                        de._data(o, "parsedAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    de.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    de.data(this, e, t)
                }) : o ? u(o, e, de.data(o, e)) : undefined
            },
            removeData: function(e) {
                return this.each(function() {
                    de.removeData(this, e)
                })
            }
        }), de.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = de._data(e, t), n && (!r || de.isArray(n) ? r = de._data(e, t, de.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = de.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = de._queueHooks(e, t),
                    a = function() {
                        de.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return de._data(e, n) || de._data(e, n, {
                    empty: de.Callbacks("once memory").add(function() {
                        de._removeData(e, t + "queue"), de._removeData(e, n)
                    })
                })
            }
        }), de.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? de.queue(this[0], e) : t === undefined ? this : this.each(function() {
                    var n = de.queue(this, e, t);
                    de._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && de.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    de.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = de.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --r || i.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--;)(n = de._data(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t)
            }
        }),
        function() {
            var e;
            fe.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, r;
                return (n = re.getElementsByTagName("body")[0]) && n.style ? (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(re.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
            }
        }();
    var Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        je = new RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$", "i"),
        De = ["Top", "Right", "Bottom", "Left"],
        He = function(e, t) {
            return e = t || e, "none" === de.css(e, "display") || !de.contains(e.ownerDocument, e)
        },
        Me = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === de.type(n)) {
                i = !0;
                for (s in n) Me(e, t, s, n[s], !0, o, a)
            } else if (r !== undefined && (i = !0, de.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(de(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        Pe = /^(?:checkbox|radio)$/i,
        Be = /<([\w:-]+)/,
        Oe = /^$|\/(?:java|ecma)script/i,
        Ie = /^\s+/,
        qe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var e = re.createElement("div"),
            t = re.createDocumentFragment(),
            n = re.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", fe.leadingWhitespace = 3 === e.firstChild.nodeType, fe.tbody = !e.getElementsByTagName("tbody").length, fe.htmlSerialize = !!e.getElementsByTagName("link").length, fe.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), fe.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = re.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), fe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.noCloneEvent = !!e.addEventListener, e[de.expando] = 1, fe.attributes = !e.getAttribute(de.expando)
    }();
    var Re = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: fe.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td;
    var Fe = /<|&#?\w+;/,
        $e = /<tbody/i;
    ! function() {
        var t, n, r = re.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (fe[t] = n in e) || (r.setAttribute(n, "t"), fe[t] = !1 === r.attributes[n].expando);
        r = null
    }();
    var We = /^(?:input|select|textarea)$/i,
        ze = /^key/,
        Xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ue = /^(?:focusinfocus|focusoutblur)$/,
        Ge = /^([^.]*)(?:\.(.+)|)/;
    de.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, h, p, g, m = de._data(e);
            if (m) {
                for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = de.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function(e) {
                        return void 0 === de || e && de.event.triggered === e.type ? undefined : de.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(Ee) || [""], s = t.length; s--;) o = Ge.exec(t[s]) || [], h = g = o[1], p = (o[2] || "").split(".").sort(), h && (l = de.event.special[h] || {}, h = (i ? l.delegateType : l.bindType) || h, l = de.event.special[h] || {}, f = de.extend({
                    type: h,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && de.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, u), (d = a[h]) || (d = a[h] = [], d.delegateCount = 0, l.setup && !1 !== l.setup.call(e, r, p, c) || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), de.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, h, p, g, m = de.hasData(e) && de._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(Ee) || [""], l = t.length; l--;)
                    if (s = Ge.exec(t[l]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h) {
                        for (f = de.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, d = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--;) a = d[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
                        u && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || de.removeEvent(e, h, m.handle), delete c[h])
                    } else
                        for (h in c) de.event.remove(e, h + t[l], n, r, !0);
                de.isEmptyObject(c) && (delete m.handle, de._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, f, d = [r || re],
                h = ce.call(t, "type") ? t.type : t,
                p = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || re, 3 !== r.nodeType && 8 !== r.nodeType && !Ue.test(h + de.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."), h = p.shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[de.expando] ? t : new de.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = r), n = null == n ? [t] : de.makeArray(n, [t]), l = de.event.special[h] || {}, i || !l.trigger || !1 !== l.trigger.apply(r, n))) {
                if (!i && !l.noBubble && !de.isWindow(r)) {
                    for (u = l.delegateType || h, Ue.test(u + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s), c = s;
                    c === (r.ownerDocument || re) && d.push(c.defaultView || c.parentWindow || e)
                }
                for (f = 0;
                    (s = d[f++]) && !t.isPropagationStopped();) t.type = f > 1 ? u : l.bindType || h, o = (de._data(s, "events") || {})[t.type] && de._data(s, "handle"), o && o.apply(s, n), (o = a && s[a]) && o.apply && Ne(s) && (t.result = o.apply(s, n), !1 === t.result && t.preventDefault());
                if (t.type = h, !i && !t.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), n)) && Ne(r) && a && r[h] && !de.isWindow(r)) {
                    c = r[a], c && (r[a] = null), de.event.triggered = h;
                    try {
                        r[h]()
                    } catch (g) {}
                    de.event.triggered = undefined, c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = de.event.fix(e);
            var t, n, r, i, o, a = [],
                s = ie.call(arguments),
                u = (de._data(this, "events") || {})[e.type] || [],
                l = de.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (a = de.event.handlers.call(this, e, u), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, (r = ((de.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) !== undefined && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (r = [], n = 0; n < s; n++) o = t[n], i = o.selector + " ", r[i] === undefined && (r[i] = o.needsContext ? de(i, this).index(u) > -1 : de.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    } return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[de.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Xe.test(i) ? this.mouseHooks : ze.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new de.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || re), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || re, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || o === undefined || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === x() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (de.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(e) {
                    return de.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var r = de.extend(new de.Event, n, {
                type: e,
                isSimulated: !0
            });
            de.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
        }
    }, de.removeEvent = re.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
    }, de.Event = function(e, t) {
        if (!(this instanceof de.Event)) return new de.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? y : b) : this.type = e, t && de.extend(this, t), this.timeStamp = e && e.timeStamp || de.now(), this[de.expando] = !0
    }, de.Event.prototype = {
        constructor: de.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, de.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        de.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || de.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), fe.submit || (de.event.special.submit = {
        setup: function() {
            if (de.nodeName(this, "form")) return !1;
            de.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = de.nodeName(t, "input") || de.nodeName(t, "button") ? de.prop(t, "form") : undefined;
                n && !de._data(n, "submit") && (de.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }), de._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && de.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            if (de.nodeName(this, "form")) return !1;
            de.event.remove(this, "._submit")
        }
    }), fe.change || (de.event.special.change = {
        setup: function() {
            if (We.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (de.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), de.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), de.event.simulate("change", this, e)
            })), !1;
            de.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                We.test(t.nodeName) && !de._data(t, "change") && (de.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || de.event.simulate("change", this.parentNode, e)
                }), de._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return de.event.remove(this, "._change"), !We.test(this.nodeName)
        }
    }), fe.focusin || de.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            de.event.simulate(t, e.target, de.event.fix(e))
        };
        de.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = de._data(r, t);
                i || r.addEventListener(e, n, !0), de._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = de._data(r, t) - 1;
                i ? de._data(r, t, i) : (r.removeEventListener(e, n, !0), de._removeData(r, t))
            }
        }
    }), de.fn.extend({
        on: function(e, t, n, r) {
            return w(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return w(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, de(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = b), this.each(function() {
                de.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                de.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return de.event.trigger(e, t, n, !0)
        }
    });
    var Je = new RegExp("<(?:" + qe + ")[\\s/>]", "i"),
        Ve = /<script|<style|<link/i,
        Ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ye = /^true\/(.*)/,
        Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ze = h(re),
        et = Ze.appendChild(re.createElement("div"));
    de.extend({
        htmlPrefilter: function(e) {
            return e.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u = de.contains(e.ownerDocument, e);
            if (fe.html5Clone || de.isXMLDoc(e) || !Je.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (et.innerHTML = e.outerHTML, et.removeChild(o = et.firstChild)), !(fe.noCloneEvent && fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || de.isXMLDoc(e)))
                for (r = p(o), s = p(e), a = 0; null != (i = s[a]); ++a) r[a] && _(i, r[a]);
            if (t)
                if (n)
                    for (s = s || p(e), r = r || p(o), a = 0; null != (i = s[a]); a++) k(i, r[a]);
                else k(e, o);
            return r = p(o, "script"), r.length > 0 && g(r, !u && p(e, "script")), r = s = i = null, o
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = de.expando, u = de.cache, l = fe.attributes, c = de.event.special; null != (n = e[a]); a++)
                if ((t || Ne(n)) && (i = n[s], o = i && u[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? de.event.remove(n, r) : de.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i], l || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s), ne.push(i))
                }
        }
    }), de.fn.extend({
        domManip: N,
        detach: function(e) {
            return S(this, e, !0)
        },
        remove: function(e) {
            return S(this, e)
        },
        text: function(e) {
            return Me(this, function(e) {
                return e === undefined ? de.text(this) : this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return N(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    T(this, e).appendChild(e)
                }
            })
        },
        prepend: function() {
            return N(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = T(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return N(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return N(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && de.cleanData(p(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && de.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return de.clone(this, e, t)
            })
        },
        html: function(e) {
            return Me(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(/ jQuery\d+="(?:null|\d+)"/g, "") : undefined;
                if ("string" == typeof e && !Ve.test(e) && (fe.htmlSerialize || !Je.test(e)) && (fe.leadingWhitespace || !Ie.test(e)) && !Re[(Be.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = de.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (de.cleanData(p(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return N(this, arguments, function(t) {
                var n = this.parentNode;
                de.inArray(this, e) < 0 && (de.cleanData(p(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), de.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        de.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = de(e), a = o.length - 1; r <= a; r++) n = r === a ? this : this.clone(!0), de(o[r])[t](n), ae.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var tt, nt = {
            HTML: "block",
            BODY: "block"
        },
        rt = /^margin/,
        it = new RegExp("^(" + Le + ")(?!px)[a-z%]+$", "i"),
        ot = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        },
        at = re.documentElement;
    ! function() {
        function t() {
            var t, c, f = re.documentElement;
            f.appendChild(u), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = i = s = !1, r = a = !0, e.getComputedStyle && (c = e.getComputedStyle(l), n = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, i = "4px" === (c || {
                width: "4px"
            }).width, l.style.marginRight = "50%", r = "4px" === (c || {
                marginRight: "4px"
            }).marginRight, t = l.appendChild(re.createElement("div")), t.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", l.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), l.removeChild(t)), l.style.display = "none", o = 0 === l.getClientRects().length, o && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", l.childNodes[0].style.borderCollapse = "separate", t = l.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", (o = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), f.removeChild(u)
        }
        var n, r, i, o, a, s, u = re.createElement("div"),
            l = re.createElement("div");
        l.style && (l.style.cssText = "float:left;opacity:.5", fe.opacity = "0.5" === l.style.opacity, fe.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === l.style.backgroundClip, u = re.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", u.appendChild(l), fe.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, de.extend(fe, {
            reliableHiddenOffsets: function() {
                return null == n && t(), o
            },
            boxSizingReliable: function() {
                return null == n && t(), i
            },
            pixelMarginRight: function() {
                return null == n && t(), r
            },
            pixelPosition: function() {
                return null == n && t(), n
            },
            reliableMarginRight: function() {
                return null == n && t(), a
            },
            reliableMarginLeft: function() {
                return null == n && t(), s
            }
        }))
    }();
    var st, ut, lt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (st = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, ut = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || st(e), a = n ? n.getPropertyValue(t) || n[t] : undefined, "" !== a && a !== undefined || de.contains(e.ownerDocument, e) || (a = de.style(e, t)), n && !fe.pixelMarginRight() && it.test(a) && rt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), a === undefined ? a : a + ""
    }) : at.currentStyle && (st = function(e) {
        return e.currentStyle
    }, ut = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || st(e), a = n ? n[t] : undefined, null == a && s && s[t] && (a = s[t]), it.test(a) && !lt.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), a === undefined ? a : a + "" || "auto"
    });
    var ct = /alpha\([^)]*\)/i,
        ft = /opacity\s*=\s*([^)]*)/i,
        dt = /^(none|table(?!-c[ea]).+)/,
        ht = new RegExp("^(" + Le + ")(.*)$", "i"),
        pt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        gt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        mt = ["Webkit", "O", "Moz", "ms"],
        vt = re.createElement("div").style;
    de.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = ut(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": fe.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = de.camelCase(t),
                    u = e.style;
                if (t = de.cssProps[s] || (de.cssProps[s] = D(s) || s), a = de.cssHooks[t] || de.cssHooks[s], n === undefined) return a && "get" in a && (i = a.get(e, !1, r)) !== undefined ? i : u[t];
                if (o = typeof n, "string" === o && (i = je.exec(n)) && i[1] && (n = d(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (de.cssNumber[s] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && (n = a.set(e, n, r)) === undefined))) try {
                    u[t] = n
                } catch (l) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = de.camelCase(t);
            return t = de.cssProps[s] || (de.cssProps[s] = D(s) || s), a = de.cssHooks[t] || de.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), o === undefined && (o = ut(e, t, r)), "normal" === o && t in gt && (o = gt[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }), de.each(["height", "width"], function(e, t) {
        de.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return dt.test(de.css(e, "display")) && 0 === e.offsetWidth ? ot(e, pt, function() {
                    return B(e, t, r)
                }) : B(e, t, r)
            },
            set: function(e, n, r) {
                var i = r && st(e);
                return M(e, n, r ? P(e, t, r, fe.boxSizing && "border-box" === de.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), fe.opacity || (de.cssHooks.opacity = {
        get: function(e, t) {
            return ft.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = de.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === de.trim(o.replace(ct, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ct.test(o) ? o.replace(ct, i) : o + " " + i)
        }
    }), de.cssHooks.marginRight = j(fe.reliableMarginRight, function(e, t) {
        if (t) return ot(e, {
            display: "inline-block"
        }, ut, [e, "marginRight"])
    }), de.cssHooks.marginLeft = j(fe.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(ut(e, "marginLeft")) || (de.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ot(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px"
    }), de.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        de.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + De[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, rt.test(e) || (de.cssHooks[e + t].set = M)
    }), de.fn.extend({
        css: function(e, t) {
            return Me(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (de.isArray(t)) {
                    for (r = st(e), i = t.length; a < i; a++) o[t[a]] = de.css(e, t[a], !1, r);
                    return o
                }
                return n !== undefined ? de.style(e, t, n) : de.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return H(this, !0)
        },
        hide: function() {
            return H(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                He(this) ? de(this).show() : de(this).hide()
            })
        }
    }), de.Tween = O, O.prototype = {
        constructor: O,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || de.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (de.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = O.propHooks[this.prop];
            return e && e.get ? e.get(this) : O.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = O.propHooks[this.prop];
            return this.options.duration ? this.pos = t = de.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
        }
    }, O.prototype.init.prototype = O.prototype, O.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = de.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                de.fx.step[e.prop] ? de.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[de.cssProps[e.prop]] && !de.cssHooks[e.prop] ? e.elem[e.prop] = e.now : de.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, de.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, de.fx = O.prototype.init, de.fx.step = {};
    var yt, bt, xt = /^(?:toggle|show|hide)$/,
        wt = /queueHooks$/;
    de.Animation = de.extend(W, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return d(n.elem, e, je.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                de.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ee);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(t)
            },
            prefilters: [F],
            prefilter: function(e, t) {
                t ? W.prefilters.unshift(e) : W.prefilters.push(e)
            }
        }), de.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? de.extend({}, e) : {
                complete: n || !n && t || de.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !de.isFunction(t) && t
            };
            return r.duration = de.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in de.fx.speeds ? de.fx.speeds[r.duration] : de.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                de.isFunction(r.old) && r.old.call(this), r.queue && de.dequeue(this, r.queue)
            }, r
        }, de.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(He).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = de.isEmptyObject(e),
                    o = de.speed(t, n, r),
                    a = function() {
                        var t = W(this, de.extend({}, e), o);
                        (i || de._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = undefined), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = de.timers,
                        a = de._data(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && wt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || de.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = de._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = de.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, de.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), de.each(["toggle", "show", "hide"], function(e, t) {
            var n = de.fn[t];
            de.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, r, i)
            }
        }), de.each({
            slideDown: q("show"),
            slideUp: q("hide"),
            slideToggle: q("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            de.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), de.timers = [], de.fx.tick = function() {
            var e, t = de.timers,
                n = 0;
            for (yt = de.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || de.fx.stop(), yt = undefined
        }, de.fx.timer = function(e) {
            de.timers.push(e), e() ? de.fx.start() : de.timers.pop()
        }, de.fx.interval = 13, de.fx.start = function() {
            bt || (bt = e.setInterval(de.fx.tick, de.fx.interval))
        }, de.fx.stop = function() {
            e.clearInterval(bt), bt = null
        }, de.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, de.fn.delay = function(t, n) {
            return t = de.fx ? de.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            })
        },
        function() {
            var e, t = re.createElement("input"),
                n = re.createElement("div"),
                r = re.createElement("select"),
                i = r.appendChild(re.createElement("option"));
            n = re.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", fe.getSetAttribute = "t" !== n.className, fe.style = /top/.test(e.getAttribute("style")), fe.hrefNormalized = "/a" === e.getAttribute("href"), fe.checkOn = !!t.value, fe.optSelected = i.selected, fe.enctype = !!re.createElement("form").enctype, r.disabled = !0, fe.optDisabled = !i.disabled, t = re.createElement("input"), t.setAttribute("value", ""), fe.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), fe.radioValue = "t" === t.value
        }();
    de.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = de.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, de(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : de.isArray(i) && (i = de.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = de.valHooks[this.type] || de.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, i, "value") !== undefined || (this.value = i))
                });
                if (i) return (t = de.valHooks[i.type] || de.valHooks[i.nodeName.toLowerCase()]) && "get" in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, "string" == typeof n ? n.replace(/\r/g, "") : null == n ? "" : n)
            }
        }
    }), de.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = de.find.attr(e, "value");
                    return null != t ? t : de.trim(de.text(e)).replace(/[\x20\t\r\n\f]+/g, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                        if (n = r[u], (n.selected || u === i) && (fe.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !de.nodeName(n.parentNode, "optgroup"))) {
                            if (t = de(n).val(), o) return t;
                            a.push(t)
                        } return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = de.makeArray(t), a = i.length; a--;)
                        if (r = i[a], de.inArray(de.valHooks.option.get(r), o) > -1) try {
                            r.selected = n = !0
                        } catch (s) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), de.each(["radio", "checkbox"], function() {
        de.valHooks[this] = {
            set: function(e, t) {
                if (de.isArray(t)) return e.checked = de.inArray(de(e).val(), t) > -1
            }
        }, fe.checkOn || (de.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Tt, Ct, Et = de.expr.attrHandle,
        kt = /^(?:checked|selected)$/i,
        _t = fe.getSetAttribute,
        Nt = fe.input;
    de.fn.extend({
        attr: function(e, t) {
            return Me(this, de.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                de.removeAttr(this, e)
            })
        }
    }), de.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? de.prop(e, t, n) : (1 === o && de.isXMLDoc(e) || (t = t.toLowerCase(), i = de.attrHooks[t] || (de.expr.match.bool.test(t) ? Ct : Tt)), n !== undefined ? null === n ? void de.removeAttr(e, t) : i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = de.find.attr(e, t), null == r ? undefined : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!fe.radioValue && "radio" === t && de.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(Ee);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = de.propFix[n] || n, de.expr.match.bool.test(n) ? Nt && _t || !kt.test(n) ? e[r] = !1 : e[de.camelCase("default-" + n)] = e[r] = !1 : de.attr(e, n, ""), e.removeAttribute(_t ? n : r)
        }
    }), Ct = {
        set: function(e, t, n) {
            return !1 === t ? de.removeAttr(e, n) : Nt && _t || !kt.test(n) ? e.setAttribute(!_t && de.propFix[n] || n, n) : e[de.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, de.each(de.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Et[t] || de.find.attr;
        Nt && _t || !kt.test(t) ? Et[t] = function(e, t, r) {
            var i, o;
            return r || (o = Et[t], Et[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Et[t] = o), i
        } : Et[t] = function(e, t, n) {
            if (!n) return e[de.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Nt && _t || (de.attrHooks.value = {
        set: function(e, t, n) {
            if (!de.nodeName(e, "input")) return Tt && Tt.set(e, t, n);
            e.defaultValue = t
        }
    }), _t || (Tt = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n)) return t
        }
    }, Et.id = Et.name = Et.coords = function(e, t, n) {
        var r;
        if (!n) return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, de.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value
        },
        set: Tt.set
    }, de.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Tt.set(e, "" !== t && t, n)
        }
    }, de.each(["width", "height"], function(e, t) {
        de.attrHooks[t] = {
            set: function(e, n) {
                if ("" === n) return e.setAttribute(t, "auto"), n
            }
        }
    })), fe.style || (de.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || undefined
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var St = /^(?:input|select|textarea|button|object)$/i,
        At = /^(?:a|area)$/i;
    de.fn.extend({
        prop: function(e, t) {
            return Me(this, de.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = de.propFix[e] || e, this.each(function() {
                try {
                    this[e] = undefined, delete this[e]
                } catch (t) {}
            })
        }
    }), de.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && de.isXMLDoc(e) || (t = de.propFix[t] || t, i = de.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = de.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : St.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), fe.hrefNormalized || de.each(["href", "src"], function(e, t) {
        de.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), fe.optSelected || (de.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), de.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        de.propFix[this.toLowerCase()] = this
    }), fe.enctype || (de.propFix.enctype = "encoding");
    de.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (de.isFunction(e)) return this.each(function(t) {
                de(this).addClass(e.call(this, t, z(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Ee) || []; n = this[u++];)
                    if (i = z(n), r = 1 === n.nodeType && (" " + i + " ").replace(/[\t\r\n\f]/g, " ")) {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = de.trim(r), i !== s && de.attr(n, "class", s)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (de.isFunction(e)) return this.each(function(t) {
                de(this).removeClass(e.call(this, t, z(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ee) || []; n = this[u++];)
                    if (i = z(n), r = 1 === n.nodeType && (" " + i + " ").replace(/[\t\r\n\f]/g, " ")) {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        s = de.trim(r), i !== s && de.attr(n, "class", s)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : de.isFunction(e) ? this.each(function(n) {
                de(this).toggleClass(e.call(this, n, z(this), t), t)
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0, i = de(this), o = e.match(Ee) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else e !== undefined && "boolean" !== n || (t = z(this), t && de._data(this, "__className__", t), de.attr(this, "class", t || !1 === e ? "" : de._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + z(n) + " ").replace(/[\t\r\n\f]/g, " ").indexOf(t) > -1) return !0;
            return !1
        }
    }), de.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        de.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), de.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Lt = e.location,
        jt = de.now(),
        Dt = /\?/;
    de.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = de.trim(t + "");
        return i && !de.trim(i.replace(/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g, function(e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : de.error("Invalid JSON: " + t)
    }, de.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new e.DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = undefined
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || de.error("Invalid XML: " + t), n
    };
    var Ht = /([?&])_=[^&]*/,
        Mt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Bt = /^(?:GET|HEAD)$/,
        Ot = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        It = {},
        qt = {},
        Rt = "*/".concat("*"),
        Ft = Lt.href,
        $t = Ot.exec(Ft.toLowerCase()) || [];
    de.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ft,
            type: "GET",
            isLocal: Pt.test($t[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": de.parseJSON,
                "text xml": de.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? G(G(e, de.ajaxSettings), t) : G(de.ajaxSettings, e)
        },
        ajaxPrefilter: X(It),
        ajaxTransport: X(qt),
        ajax: function(t, n) {
            function r(t, n, r, i) {
                var o, f, y, b, w, C = n;
                2 !== x && (x = 2, u && e.clearTimeout(u), c = undefined, s = i || "", T.readyState = t > 0 ? 4 : 0, o = t >= 200 && t < 300 || 304 === t, r && (b = J(d, T, r)), b = V(d, b, T, o), o ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (de.lastModified[a] = w), (w = T.getResponseHeader("etag")) && (de.etag[a] = w)), 204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, f = b.data, y = b.error, o = !y)) : (y = C, !t && C || (C = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || C) + "", o ? g.resolveWith(h, [f, C, T]) : g.rejectWith(h, [T, C, y]), T.statusCode(v), v = undefined, l && p.trigger(o ? "ajaxSuccess" : "ajaxError", [T, d, o ? f : y]), m.fireWith(h, [T, C]), l && (p.trigger("ajaxComplete", [T, d]), --de.active || de.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = undefined), n = n || {};
            var i, o, a, s, u, l, c, f, d = de.ajaxSetup({}, n),
                h = d.context || d,
                p = d.context && (h.nodeType || h.jquery) ? de(h) : de.event,
                g = de.Deferred(),
                m = de.Callbacks("once memory"),
                v = d.statusCode || {},
                y = {},
                b = {},
                x = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!f)
                                for (f = {}; t = Mt.exec(s);) f[t[1].toLowerCase()] = t[2];
                            t = f[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (x < 2)
                                for (t in e) v[t] = [v[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return c && c.abort(t), r(0, t), this
                    }
                };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, d.url = ((t || d.url || Ft) + "").replace(/#.*$/, "").replace(/^\/\//, $t[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = de.trim(d.dataType || "*").toLowerCase().match(Ee) || [""], null == d.crossDomain && (i = Ot.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === $t[1] && i[2] === $t[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === ($t[3] || ("http:" === $t[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = de.param(d.data, d.traditional)), U(It, d, n, T), 2 === x) return T;
            l = de.event && d.global, l && 0 == de.active++ && de.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Bt.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (Dt.test(a) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = Ht.test(a) ? a.replace(Ht, "$1_=" + jt++) : a + (Dt.test(a) ? "&" : "?") + "_=" + jt++)), d.ifModified && (de.lastModified[a] && T.setRequestHeader("If-Modified-Since", de.lastModified[a]), de.etag[a] && T.setRequestHeader("If-None-Match", de.etag[a])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) T.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (!1 === d.beforeSend.call(h, T, d) || 2 === x)) return T.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[o](d[o]);
            if (c = U(qt, d, n, T)) {
                if (T.readyState = 1, l && p.trigger("ajaxSend", [T, d]), 2 === x) return T;
                d.async && d.timeout > 0 && (u = e.setTimeout(function() {
                    T.abort("timeout")
                }, d.timeout));
                try {
                    x = 1, c.send(y, r)
                } catch (C) {
                    if (!(x < 2)) throw C;
                    r(-1, C)
                }
            } else r(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return de.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return de.get(e, undefined, t, "script")
        }
    }), de.each(["get", "post"], function(e, t) {
        de[t] = function(e, n, r, i) {
            return de.isFunction(n) && (i = i || r, r = n, n = undefined), de.ajax(de.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, de.isPlainObject(e) && e))
        }
    }), de._evalUrl = function(e) {
        return de.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, de.fn.extend({
        wrapAll: function(e) {
            if (de.isFunction(e)) return this.each(function(t) {
                de(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = de(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return de.isFunction(e) ? this.each(function(t) {
                de(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = de(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = de.isFunction(e);
            return this.each(function(n) {
                de(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                de.nodeName(this, "body") || de(this).replaceWith(this.childNodes)
            }).end()
        }
    }), de.expr.filters.hidden = function(e) {
        return fe.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Y(e)
    }, de.expr.filters.visible = function(e) {
        return !de.expr.filters.hidden(e)
    };
    var Wt = /\[\]$/,
        zt = /^(?:submit|button|image|reset|file)$/i,
        Xt = /^(?:input|select|textarea|keygen)/i;
    de.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = de.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (t === undefined && (t = de.ajaxSettings && de.ajaxSettings.traditional), de.isArray(e) || e.jquery && !de.isPlainObject(e)) de.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Q(n, e[n], t, i);
        return r.join("&").replace(/%20/g, "+")
    }, de.fn.extend({
        serialize: function() {
            return de.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = de.prop(this, "elements");
                return e ? de.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !de(this).is(":disabled") && Xt.test(this.nodeName) && !zt.test(e) && (this.checked || !Pe.test(e))
            }).map(function(e, t) {
                var n = de(this).val();
                return null == n ? null : de.isArray(n) ? de.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(/\r?\n/g, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(/\r?\n/g, "\r\n")
                }
            }).get()
        }
    }), de.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function() {
        return this.isLocal ? ee() : re.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    } : Z;
    var Ut = 0,
        Gt = {},
        Jt = de.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Gt) Gt[e](undefined, !0)
    }), fe.cors = !!Jt && "withCredentials" in Jt, Jt = fe.ajax = !!Jt, Jt && de.ajaxTransport(function(t) {
        if (!t.crossDomain || fe.cors) {
            var n;
            return {
                send: function(r, i) {
                    var o, a = t.xhr(),
                        s = ++Ut;
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) a[o] = t.xhrFields[o];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r) r[o] !== undefined && a.setRequestHeader(o, r[o] + "");
                    a.send(t.hasContent && t.data || null), n = function(e, r) {
                        var o, u, l;
                        if (n && (r || 4 === a.readyState))
                            if (delete Gt[s], n = undefined, a.onreadystatechange = de.noop, r) 4 !== a.readyState && a.abort();
                            else {
                                l = {}, o = a.status, "string" == typeof a.responseText && (l.text = a.responseText);
                                try {
                                    u = a.statusText
                                } catch (c) {
                                    u = ""
                                }
                                o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                            } l && i(o, u, l, a.getAllResponseHeaders())
                    }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = Gt[s] = n : n()
                },
                abort: function() {
                    n && n(undefined, !0)
                }
            }
        }
    }), de.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return de.globalEval(e), e
            }
        }
    }), de.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), de.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = re.head || de("head")[0] || re.documentElement;
            return {
                send: function(r, i) {
                    t = re.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(undefined, !0)
                }
            }
        }
    });
    var Vt = [],
        Kt = /(=)\?(?=&|$)|\?\?/;
    de.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Vt.pop() || de.expando + "_" + jt++;
            return this[e] = !0, e
        }
    }), de.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Kt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = de.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Kt, "$1" + i) : !1 !== t.jsonp && (t.url += (Dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || de.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            o === undefined ? de(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Vt.push(i)), a && de.isFunction(o) && o(a[0]), a = o = undefined
        }), "script"
    }), de.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || re;
        var r = ye.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = v([e], t, i), i && i.length && de(i).remove(), de.merge([], r.childNodes))
    };
    var Yt = de.fn.load;
    de.fn.load = function(e, t, n) {
        if ("string" != typeof e && Yt) return Yt.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = de.trim(e.slice(s, e.length)), e = e.slice(0, s)), de.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (i = "POST"), a.length > 0 && de.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? de("<div>").append(de.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, de.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        de.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), de.expr.filters.animated = function(e) {
        return de.grep(de.timers, function(t) {
            return e === t.elem
        }).length
    }, de.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = de.css(e, "position"),
                f = de(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = de.css(e, "top"), u = de.css(e, "left"), l = ("absolute" === c || "fixed" === c) && de.inArray("auto", [o, u]) > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), de.isFunction(t) && (t = t.call(e, n, de.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, de.fn.extend({
        offset: function(e) {
            if (arguments.length) return e === undefined ? this : this.each(function(t) {
                de.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            if (o) return t = o.documentElement, de.contains(t, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = te(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === de.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), de.nodeName(e[0], "html") || (n = e.offset()),
                    n.top += de.css(e[0], "borderTopWidth", !0), n.left += de.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - de.css(r, "marginTop", !0),
                    left: t.left - n.left - de.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !de.nodeName(e, "html") && "static" === de.css(e, "position");) e = e.offsetParent;
                return e || at
            })
        }
    }), de.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        de.fn[e] = function(r) {
            return Me(this, function(e, r, i) {
                var o = te(e);
                if (i === undefined) return o ? t in o ? o[t] : o.document.documentElement[r] : e[r];
                o ? o.scrollTo(n ? de(o).scrollLeft() : i, n ? i : de(o).scrollTop()) : e[r] = i
            }, e, r, arguments.length, null)
        }
    }), de.each(["top", "left"], function(e, t) {
        de.cssHooks[t] = j(fe.pixelPosition, function(e, n) {
            if (n) return n = ut(e, t), it.test(n) ? de(e).position()[t] + "px" : n
        })
    }), de.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        de.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            de.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === i ? "margin" : "border");
                return Me(this, function(t, n, r) {
                    var i;
                    return de.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? de.css(t, n, a) : de.style(t, n, r, a)
                }, t, o ? r : undefined, o, null)
            }
        })
    }), de.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), de.fn.size = function() {
        return this.length
    }, de.fn.andSelf = de.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return de
    });
    var Qt = e.jQuery,
        Zt = e.$;
    return de.noConflict = function(t) {
        return e.$ === de && (e.$ = Zt), t && e.jQuery === de && (e.jQuery = Qt), de
    }, t || (e.jQuery = e.$ = de), de
}),
function() {
    function e(e) {
        function t(t, n, r, i, o, a) {
            for (; o >= 0 && a > o; o += e) {
                var s = i ? i[o] : o;
                r = n(r, t[s], s, t)
            }
            return r
        }
        return function(n, r, i, o) {
            r = b(r, o, 4);
            var a = !_(n) && y.keys(n),
                s = (a || n).length,
                u = e > 0 ? 0 : s - 1;
            return arguments.length < 3 && (i = n[a ? a[u] : u], u += e), t(n, r, i, a, u, s)
        }
    }

    function t(e) {
        return function(t, n, r) {
            n = x(n, r);
            for (var i = k(t), o = e > 0 ? 0 : i - 1; o >= 0 && i > o; o += e)
                if (n(t[o], o, t)) return o;
            return -1
        }
    }

    function n(e, t, n) {
        return function(r, i, o) {
            var a = 0,
                s = k(r);
            if ("number" == typeof o) e > 0 ? a = o >= 0 ? o : Math.max(o + s, a) : s = o >= 0 ? Math.min(o + 1, s) : o + s + 1;
            else if (n && o && s) return o = n(r, i), r[o] === i ? o : -1;
            if (i !== i) return o = t(c.call(r, a, s), y.isNaN), o >= 0 ? o + a : -1;
            for (o = e > 0 ? a : s - 1; o >= 0 && s > o; o += e)
                if (r[o] === i) return o;
            return -1
        }
    }

    function r(e, t) {
        var n = j.length,
            r = e.constructor,
            i = y.isFunction(r) && r.prototype || s,
            o = "constructor";
        for (y.has(e, o) && !y.contains(t, o) && t.push(o); n--;)(o = j[n]) in e && e[o] !== i[o] && !y.contains(t, o) && t.push(o)
    }
    var i = this,
        o = i._,
        a = Array.prototype,
        s = Object.prototype,
        u = Function.prototype,
        l = a.push,
        c = a.slice,
        f = s.toString,
        d = s.hasOwnProperty,
        h = Array.isArray,
        p = Object.keys,
        g = u.bind,
        m = Object.create,
        v = function() {},
        y = function(e) {
            return e instanceof y ? e : this instanceof y ? void(this._wrapped = e) : new y(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), exports._ = y) : i._ = y, y.VERSION = "1.8.3";
    var b = function(e, t, n) {
            if (void 0 === t) return e;
            switch (null == n ? 3 : n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, i) {
                        return e.call(t, n, r, i)
                    };
                case 4:
                    return function(n, r, i, o) {
                        return e.call(t, n, r, i, o)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        },
        x = function(e, t, n) {
            return null == e ? y.identity : y.isFunction(e) ? b(e, t, n) : y.isObject(e) ? y.matcher(e) : y.property(e)
        };
    y.iteratee = function(e, t) {
        return x(e, t, 1 / 0)
    };
    var w = function(e, t) {
            return function(n) {
                var r = arguments.length;
                if (2 > r || null == n) return n;
                for (var i = 1; r > i; i++)
                    for (var o = arguments[i], a = e(o), s = a.length, u = 0; s > u; u++) {
                        var l = a[u];
                        t && void 0 !== n[l] || (n[l] = o[l])
                    }
                return n
            }
        },
        T = function(e) {
            if (!y.isObject(e)) return {};
            if (m) return m(e);
            v.prototype = e;
            var t = new v;
            return v.prototype = null, t
        },
        C = function(e) {
            return function(t) {
                return null == t ? void 0 : t[e]
            }
        },
        E = Math.pow(2, 53) - 1,
        k = C("length"),
        _ = function(e) {
            var t = k(e);
            return "number" == typeof t && t >= 0 && E >= t
        };
    y.each = y.forEach = function(e, t, n) {
        t = b(t, n);
        var r, i;
        if (_(e))
            for (r = 0, i = e.length; i > r; r++) t(e[r], r, e);
        else {
            var o = y.keys(e);
            for (r = 0, i = o.length; i > r; r++) t(e[o[r]], o[r], e)
        }
        return e
    }, y.map = y.collect = function(e, t, n) {
        t = x(t, n);
        for (var r = !_(e) && y.keys(e), i = (r || e).length, o = Array(i), a = 0; i > a; a++) {
            var s = r ? r[a] : a;
            o[a] = t(e[s], s, e)
        }
        return o
    }, y.reduce = y.foldl = y.inject = e(1), y.reduceRight = y.foldr = e(-1), y.find = y.detect = function(e, t, n) {
        var r;
        return r = _(e) ? y.findIndex(e, t, n) : y.findKey(e, t, n), void 0 !== r && -1 !== r ? e[r] : void 0
    }, y.filter = y.select = function(e, t, n) {
        var r = [];
        return t = x(t, n), y.each(e, function(e, n, i) {
            t(e, n, i) && r.push(e)
        }), r
    }, y.reject = function(e, t, n) {
        return y.filter(e, y.negate(x(t)), n)
    }, y.every = y.all = function(e, t, n) {
        t = x(t, n);
        for (var r = !_(e) && y.keys(e), i = (r || e).length, o = 0; i > o; o++) {
            var a = r ? r[o] : o;
            if (!t(e[a], a, e)) return !1
        }
        return !0
    }, y.some = y.any = function(e, t, n) {
        t = x(t, n);
        for (var r = !_(e) && y.keys(e), i = (r || e).length, o = 0; i > o; o++) {
            var a = r ? r[o] : o;
            if (t(e[a], a, e)) return !0
        }
        return !1
    }, y.contains = y.includes = y.include = function(e, t, n, r) {
        return _(e) || (e = y.values(e)), ("number" != typeof n || r) && (n = 0), y.indexOf(e, t, n) >= 0
    }, y.invoke = function(e, t) {
        var n = c.call(arguments, 2),
            r = y.isFunction(t);
        return y.map(e, function(e) {
            var i = r ? t : e[t];
            return null == i ? i : i.apply(e, n)
        })
    }, y.pluck = function(e, t) {
        return y.map(e, y.property(t))
    }, y.where = function(e, t) {
        return y.filter(e, y.matcher(t))
    }, y.findWhere = function(e, t) {
        return y.find(e, y.matcher(t))
    }, y.max = function(e, t, n) {
        var r, i, o = -1 / 0,
            a = -1 / 0;
        if (null == t && null != e) {
            e = _(e) ? e : y.values(e);
            for (var s = 0, u = e.length; u > s; s++)(r = e[s]) > o && (o = r)
        } else t = x(t, n), y.each(e, function(e, n, r) {
            ((i = t(e, n, r)) > a || i === -1 / 0 && o === -1 / 0) && (o = e, a = i)
        });
        return o
    }, y.min = function(e, t, n) {
        var r, i, o = 1 / 0,
            a = 1 / 0;
        if (null == t && null != e) {
            e = _(e) ? e : y.values(e);
            for (var s = 0, u = e.length; u > s; s++) r = e[s], o > r && (o = r)
        } else t = x(t, n), y.each(e, function(e, n, r) {
            i = t(e, n, r), (a > i || 1 / 0 === i && 1 / 0 === o) && (o = e, a = i)
        });
        return o
    }, y.shuffle = function(e) {
        for (var t, n = _(e) ? e : y.values(e), r = n.length, i = Array(r), o = 0; r > o; o++) t = y.random(0, o), t !== o && (i[o] = i[t]), i[t] = n[o];
        return i
    }, y.sample = function(e, t, n) {
        return null == t || n ? (_(e) || (e = y.values(e)), e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t))
    }, y.sortBy = function(e, t, n) {
        return t = x(t, n), y.pluck(y.map(e, function(e, n, r) {
            return {
                value: e,
                index: n,
                criteria: t(e, n, r)
            }
        }).sort(function(e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (r > n || void 0 === r) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var N = function(e) {
        return function(t, n, r) {
            var i = {};
            return n = x(n, r), y.each(t, function(r, o) {
                var a = n(r, o, t);
                e(i, r, a)
            }), i
        }
    };
    y.groupBy = N(function(e, t, n) {
        y.has(e, n) ? e[n].push(t) : e[n] = [t]
    }), y.indexBy = N(function(e, t, n) {
        e[n] = t
    }), y.countBy = N(function(e, t, n) {
        y.has(e, n) ? e[n]++ : e[n] = 1
    }), y.toArray = function(e) {
        return e ? y.isArray(e) ? c.call(e) : _(e) ? y.map(e, y.identity) : y.values(e) : []
    }, y.size = function(e) {
        return null == e ? 0 : _(e) ? e.length : y.keys(e).length
    }, y.partition = function(e, t, n) {
        t = x(t, n);
        var r = [],
            i = [];
        return y.each(e, function(e, n, o) {
            (t(e, n, o) ? r : i).push(e)
        }), [r, i]
    }, y.first = y.head = y.take = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : y.initial(e, e.length - t)
    }, y.initial = function(e, t, n) {
        return c.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
    }, y.last = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t))
    }, y.rest = y.tail = y.drop = function(e, t, n) {
        return c.call(e, null == t || n ? 1 : t)
    }, y.compact = function(e) {
        return y.filter(e, y.identity)
    };
    var S = function(e, t, n, r) {
        for (var i = [], o = 0, a = r || 0, s = k(e); s > a; a++) {
            var u = e[a];
            if (_(u) && (y.isArray(u) || y.isArguments(u))) {
                t || (u = S(u, t, n));
                var l = 0,
                    c = u.length;
                for (i.length += c; c > l;) i[o++] = u[l++]
            } else n || (i[o++] = u)
        }
        return i
    };
    y.flatten = function(e, t) {
        return S(e, t, !1)
    }, y.without = function(e) {
        return y.difference(e, c.call(arguments, 1))
    }, y.uniq = y.unique = function(e, t, n, r) {
        y.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = x(n, r));
        for (var i = [], o = [], a = 0, s = k(e); s > a; a++) {
            var u = e[a],
                l = n ? n(u, a, e) : u;
            t ? (a && o === l || i.push(u), o = l) : n ? y.contains(o, l) || (o.push(l), i.push(u)) : y.contains(i, u) || i.push(u)
        }
        return i
    }, y.union = function() {
        return y.uniq(S(arguments, !0, !0))
    }, y.intersection = function(e) {
        for (var t = [], n = arguments.length, r = 0, i = k(e); i > r; r++) {
            var o = e[r];
            if (!y.contains(t, o)) {
                for (var a = 1; n > a && y.contains(arguments[a], o); a++);
                a === n && t.push(o)
            }
        }
        return t
    }, y.difference = function(e) {
        var t = S(arguments, !0, !0, 1);
        return y.filter(e, function(e) {
            return !y.contains(t, e)
        })
    }, y.zip = function() {
        return y.unzip(arguments)
    }, y.unzip = function(e) {
        for (var t = e && y.max(e, k).length || 0, n = Array(t), r = 0; t > r; r++) n[r] = y.pluck(e, r);
        return n
    }, y.object = function(e, t) {
        for (var n = {}, r = 0, i = k(e); i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, y.findIndex = t(1), y.findLastIndex = t(-1), y.sortedIndex = function(e, t, n, r) {
        n = x(n, r, 1);
        for (var i = n(t), o = 0, a = k(e); a > o;) {
            var s = Math.floor((o + a) / 2);
            n(e[s]) < i ? o = s + 1 : a = s
        }
        return o
    }, y.indexOf = n(1, y.findIndex, y.sortedIndex), y.lastIndexOf = n(-1, y.findLastIndex), y.range = function(e, t, n) {
        null == t && (t = e || 0, e = 0), n = n || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; r > o; o++, e += n) i[o] = e;
        return i
    };
    var A = function(e, t, n, r, i) {
        if (!(r instanceof t)) return e.apply(n, i);
        var o = T(e.prototype),
            a = e.apply(o, i);
        return y.isObject(a) ? a : o
    };
    y.bind = function(e, t) {
        if (g && e.bind === g) return g.apply(e, c.call(arguments, 1));
        if (!y.isFunction(e)) throw new TypeError("Bind must be called on a function");
        var n = c.call(arguments, 2),
            r = function() {
                return A(e, r, t, this, n.concat(c.call(arguments)))
            };
        return r
    }, y.partial = function(e) {
        var t = c.call(arguments, 1),
            n = function() {
                for (var r = 0, i = t.length, o = Array(i), a = 0; i > a; a++) o[a] = t[a] === y ? arguments[r++] : t[a];
                for (; r < arguments.length;) o.push(arguments[r++]);
                return A(e, n, this, this, o)
            };
        return n
    }, y.bindAll = function(e) {
        var t, n, r = arguments.length;
        if (1 >= r) throw new Error("bindAll must be passed function names");
        for (t = 1; r > t; t++) n = arguments[t], e[n] = y.bind(e[n], e);
        return e
    }, y.memoize = function(e, t) {
        var n = function(r) {
            var i = n.cache,
                o = "" + (t ? t.apply(this, arguments) : r);
            return y.has(i, o) || (i[o] = e.apply(this, arguments)), i[o]
        };
        return n.cache = {}, n
    }, y.delay = function(e, t) {
        var n = c.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }, y.defer = y.partial(y.delay, y, 1), y.throttle = function(e, t, n) {
        var r, i, o, a = null,
            s = 0;
        n || (n = {});
        var u = function() {
            s = !1 === n.leading ? 0 : y.now(), a = null, o = e.apply(r, i), a || (r = i = null)
        };
        return function() {
            var l = y.now();
            s || !1 !== n.leading || (s = l);
            var c = t - (l - s);
            return r = this, i = arguments, 0 >= c || c > t ? (a && (clearTimeout(a), a = null), s = l, o = e.apply(r, i), a || (r = i = null)) : a || !1 === n.trailing || (a = setTimeout(u, c)), o
        }
    }, y.debounce = function(e, t, n) {
        var r, i, o, a, s, u = function() {
            var l = y.now() - a;
            t > l && l >= 0 ? r = setTimeout(u, t - l) : (r = null, n || (s = e.apply(o, i), r || (o = i = null)))
        };
        return function() {
            o = this, i = arguments, a = y.now();
            var l = n && !r;
            return r || (r = setTimeout(u, t)), l && (s = e.apply(o, i), o = i = null), s
        }
    }, y.wrap = function(e, t) {
        return y.partial(t, e)
    }, y.negate = function(e) {
        return function() {
            return !e.apply(this, arguments)
        }
    }, y.compose = function() {
        var e = arguments,
            t = e.length - 1;
        return function() {
            for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
            return r
        }
    }, y.after = function(e, t) {
        return function() {
            return --e < 1 ? t.apply(this, arguments) : void 0
        }
    }, y.before = function(e, t) {
        var n;
        return function() {
            return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = null), n
        }
    }, y.once = y.partial(y.before, 2);
    var L = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        j = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    y.keys = function(e) {
        if (!y.isObject(e)) return [];
        if (p) return p(e);
        var t = [];
        for (var n in e) y.has(e, n) && t.push(n);
        return L && r(e, t), t
    }, y.allKeys = function(e) {
        if (!y.isObject(e)) return [];
        var t = [];
        for (var n in e) t.push(n);
        return L && r(e, t), t
    }, y.values = function(e) {
        for (var t = y.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = e[t[i]];
        return r
    }, y.mapObject = function(e, t, n) {
        t = x(t, n);
        for (var r, i = y.keys(e), o = i.length, a = {}, s = 0; o > s; s++) r = i[s], a[r] = t(e[r], r, e);
        return a
    }, y.pairs = function(e) {
        for (var t = y.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = [t[i], e[t[i]]];
        return r
    }, y.invert = function(e) {
        for (var t = {}, n = y.keys(e), r = 0, i = n.length; i > r; r++) t[e[n[r]]] = n[r];
        return t
    }, y.functions = y.methods = function(e) {
        var t = [];
        for (var n in e) y.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, y.extend = w(y.allKeys), y.extendOwn = y.assign = w(y.keys), y.findKey = function(e, t, n) {
        t = x(t, n);
        for (var r, i = y.keys(e), o = 0, a = i.length; a > o; o++)
            if (r = i[o], t(e[r], r, e)) return r
    }, y.pick = function(e, t, n) {
        var r, i, o = {},
            a = e;
        if (null == a) return o;
        y.isFunction(t) ? (i = y.allKeys(a), r = b(t, n)) : (i = S(arguments, !1, !1, 1), r = function(e, t, n) {
            return t in n
        }, a = Object(a));
        for (var s = 0, u = i.length; u > s; s++) {
            var l = i[s],
                c = a[l];
            r(c, l, a) && (o[l] = c)
        }
        return o
    }, y.omit = function(e, t, n) {
        if (y.isFunction(t)) t = y.negate(t);
        else {
            var r = y.map(S(arguments, !1, !1, 1), String);
            t = function(e, t) {
                return !y.contains(r, t)
            }
        }
        return y.pick(e, t, n)
    }, y.defaults = w(y.allKeys, !0), y.create = function(e, t) {
        var n = T(e);
        return t && y.extendOwn(n, t), n
    }, y.clone = function(e) {
        return y.isObject(e) ? y.isArray(e) ? e.slice() : y.extend({}, e) : e
    }, y.tap = function(e, t) {
        return t(e), e
    }, y.isMatch = function(e, t) {
        var n = y.keys(t),
            r = n.length;
        if (null == e) return !r;
        for (var i = Object(e), o = 0; r > o; o++) {
            var a = n[o];
            if (t[a] !== i[a] || !(a in i)) return !1
        }
        return !0
    };
    var D = function(e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof y && (e = e._wrapped), t instanceof y && (t = t._wrapped);
        var i = f.call(e);
        if (i !== f.call(t)) return !1;
        switch (i) {
            case "[object RegExp]":
            case "[object String]":
                return "" + e == "" + t;
            case "[object Number]":
                return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t
        }
        var o = "[object Array]" === i;
        if (!o) {
            if ("object" != typeof e || "object" != typeof t) return !1;
            var a = e.constructor,
                s = t.constructor;
            if (a !== s && !(y.isFunction(a) && a instanceof a && y.isFunction(s) && s instanceof s) && "constructor" in e && "constructor" in t) return !1
        }
        n = n || [], r = r || [];
        for (var u = n.length; u--;)
            if (n[u] === e) return r[u] === t;
        if (n.push(e), r.push(t), o) {
            if ((u = e.length) !== t.length) return !1;
            for (; u--;)
                if (!D(e[u], t[u], n, r)) return !1
        } else {
            var l, c = y.keys(e);
            if (u = c.length, y.keys(t).length !== u) return !1;
            for (; u--;)
                if (l = c[u], !y.has(t, l) || !D(e[l], t[l], n, r)) return !1
        }
        return n.pop(), r.pop(), !0
    };
    y.isEqual = function(e, t) {
        return D(e, t)
    }, y.isEmpty = function(e) {
        return null == e || (_(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length)
    }, y.isElement = function(e) {
        return !(!e || 1 !== e.nodeType)
    }, y.isArray = h || function(e) {
        return "[object Array]" === f.call(e)
    }, y.isObject = function(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    }, y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
        y["is" + e] = function(t) {
            return f.call(t) === "[object " + e + "]"
        }
    }), y.isArguments(arguments) || (y.isArguments = function(e) {
        return y.has(e, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function(e) {
        return "function" == typeof e || !1
    }), y.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, y.isNaN = function(e) {
        return y.isNumber(e) && e !== +e
    }, y.isBoolean = function(e) {
        return !0 === e || !1 === e || "[object Boolean]" === f.call(e)
    }, y.isNull = function(e) {
        return null === e
    }, y.isUndefined = function(e) {
        return void 0 === e
    }, y.has = function(e, t) {
        return null != e && d.call(e, t)
    }, y.noConflict = function() {
        return i._ = o, this
    }, y.identity = function(e) {
        return e
    }, y.constant = function(e) {
        return function() {
            return e
        }
    }, y.noop = function() {}, y.property = C, y.propertyOf = function(e) {
        return null == e ? function() {} : function(t) {
            return e[t]
        }
    }, y.matcher = y.matches = function(e) {
        return e = y.extendOwn({}, e),
            function(t) {
                return y.isMatch(t, e)
            }
    }, y.times = function(e, t, n) {
        var r = Array(Math.max(0, e));
        t = b(t, n, 1);
        for (var i = 0; e > i; i++) r[i] = t(i);
        return r
    }, y.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    }, y.now = Date.now || function() {
        return (new Date).getTime()
    };
    var H = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        M = y.invert(H),
        P = function(e) {
            var t = function(t) {
                    return e[t]
                },
                n = "(?:" + y.keys(e).join("|") + ")",
                r = RegExp(n),
                i = RegExp(n, "g");
            return function(e) {
                return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
            }
        };
    y.escape = P(H), y.unescape = P(M), y.result = function(e, t, n) {
        var r = null == e ? void 0 : e[t];
        return void 0 === r && (r = n), y.isFunction(r) ? r.call(e) : r
    };
    var B = 0;
    y.uniqueId = function(e) {
        var t = ++B + "";
        return e ? e + t : t
    }, y.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var O = /(.)^/,
        I = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        q = function(e) {
            return "\\" + I[e]
        };
    y.template = function(e, t, n) {
        !t && n && (t = n), t = y.defaults({}, t, y.templateSettings);
        var r = RegExp([(t.escape || O).source, (t.interpolate || O).source, (t.evaluate || O).source].join("|") + "|$", "g"),
            i = 0,
            o = "__p+='";
        e.replace(r, function(t, n, r, a, s) {
            return o += e.slice(i, s).replace(/\\|'|\r|\n|\u2028|\u2029/g, q), i = s + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), t
        }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var a = new Function(t.variable || "obj", "_", o)
        } catch (s) {
            throw s.source = o, s
        }
        var u = function(e) {
            return a.call(this, e, y)
        };
        return u.source = "function(" + (t.variable || "obj") + "){\n" + o + "}", u
    }, y.chain = function(e) {
        var t = y(e);
        return t._chain = !0, t
    };
    var R = function(e, t) {
        return e._chain ? y(t).chain() : t
    };
    y.mixin = function(e) {
        y.each(y.functions(e), function(t) {
            var n = y[t] = e[t];
            y.prototype[t] = function() {
                var e = [this._wrapped];
                return l.apply(e, arguments), R(this, n.apply(y, e))
            }
        })
    }, y.mixin(y), y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = a[e];
        y.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], R(this, n)
        }
    }), y.each(["concat", "join", "slice"], function(e) {
        var t = a[e];
        y.prototype[e] = function() {
            return R(this, t.apply(this._wrapped, arguments))
        }
    }), y.prototype.value = function() {
        return this._wrapped
    }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function() {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return y
    })
}.call(this),
    function(e) {
        var t = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global;
        if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function(n, r, i) {
            t.Backbone = e(t, i, n, r)
        });
        else if ("undefined" != typeof exports) {
            var n, r = require("underscore");
            try {
                n = require("jquery")
            } catch (i) {}
            e(t, exports, r, n)
        } else t.Backbone = e(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$)
    }(function(e, t, n, r) {
        var i = e.Backbone,
            o = Array.prototype.slice;
        t.VERSION = "1.3.3", t.$ = r, t.noConflict = function() {
            return e.Backbone = i, this
        }, t.emulateHTTP = !1, t.emulateJSON = !1;
        var a = function(e, t, r) {
                switch (e) {
                    case 1:
                        return function() {
                            return n[t](this[r])
                        };
                    case 2:
                        return function(e) {
                            return n[t](this[r], e)
                        };
                    case 3:
                        return function(e, i) {
                            return n[t](this[r], u(e, this), i)
                        };
                    case 4:
                        return function(e, i, o) {
                            return n[t](this[r], u(e, this), i, o)
                        };
                    default:
                        return function() {
                            var e = o.call(arguments);
                            return e.unshift(this[r]), n[t].apply(n, e)
                        }
                }
            },
            s = function(e, t, r) {
                n.each(t, function(t, i) {
                    n[i] && (e.prototype[i] = a(t, i, r))
                })
            },
            u = function(e, t) {
                return n.isFunction(e) ? e : n.isObject(e) && !t._isModel(e) ? l(e) : n.isString(e) ? function(t) {
                    return t.get(e)
                } : e
            },
            l = function(e) {
                var t = n.matches(e);
                return function(e) {
                    return t(e.attributes)
                }
            },
            c = t.Events = {},
            f = /\s+/,
            d = function(e, t, r, i, o) {
                var a, s = 0;
                if (r && "object" == typeof r) {
                    void 0 !== i && "context" in o && void 0 === o.context && (o.context = i);
                    for (a = n.keys(r); s < a.length; s++) t = d(e, t, a[s], r[a[s]], o)
                } else if (r && f.test(r))
                    for (a = r.split(f); s < a.length; s++) t = e(t, a[s], i, o);
                else t = e(t, r, i, o);
                return t
            };
        c.on = function(e, t, n) {
            return h(this, e, t, n)
        };
        var h = function(e, t, n, r, i) {
            if (e._events = d(p, e._events || {}, t, n, {
                    context: r,
                    ctx: e,
                    listening: i
                }), i) {
                (e._listeners || (e._listeners = {}))[i.id] = i
            }
            return e
        };
        c.listenTo = function(e, t, r) {
            if (!e) return this;
            var i = e._listenId || (e._listenId = n.uniqueId("l")),
                o = this._listeningTo || (this._listeningTo = {}),
                a = o[i];
            if (!a) {
                var s = this._listenId || (this._listenId = n.uniqueId("l"));
                a = o[i] = {
                    obj: e,
                    objId: i,
                    id: s,
                    listeningTo: o,
                    count: 0
                }
            }
            return h(e, t, r, this, a), this
        };
        var p = function(e, t, n, r) {
            if (n) {
                var i = e[t] || (e[t] = []),
                    o = r.context,
                    a = r.ctx,
                    s = r.listening;
                s && s.count++, i.push({
                    callback: n,
                    context: o,
                    ctx: o || a,
                    listening: s
                })
            }
            return e
        };
        c.off = function(e, t, n) {
            return this._events ? (this._events = d(g, this._events, e, t, {
                context: n,
                listeners: this._listeners
            }), this) : this
        }, c.stopListening = function(e, t, r) {
            var i = this._listeningTo;
            if (!i) return this;
            for (var o = e ? [e._listenId] : n.keys(i), a = 0; a < o.length; a++) {
                var s = i[o[a]];
                if (!s) break;
                s.obj.off(t, r, this)
            }
            return this
        };
        var g = function(e, t, r, i) {
            if (e) {
                var o, a = 0,
                    s = i.context,
                    u = i.listeners;
                if (t || r || s) {
                    for (var l = t ? [t] : n.keys(e); a < l.length; a++) {
                        t = l[a];
                        var c = e[t];
                        if (!c) break;
                        for (var f = [], d = 0; d < c.length; d++) {
                            var h = c[d];
                            r && r !== h.callback && r !== h.callback._callback || s && s !== h.context ? f.push(h) : (o = h.listening) && 0 == --o.count && (delete u[o.id], delete o.listeningTo[o.objId])
                        }
                        f.length ? e[t] = f : delete e[t]
                    }
                    return e
                }
                for (var p = n.keys(u); a < p.length; a++) o = u[p[a]], delete u[o.id], delete o.listeningTo[o.objId]
            }
        };
        c.once = function(e, t, r) {
            var i = d(m, {}, e, t, n.bind(this.off, this));
            return "string" == typeof e && null == r && (t = void 0), this.on(i, t, r)
        }, c.listenToOnce = function(e, t, r) {
            var i = d(m, {}, t, r, n.bind(this.stopListening, this, e));
            return this.listenTo(e, i)
        };
        var m = function(e, t, r, i) {
            if (r) {
                var o = e[t] = n.once(function() {
                    i(t, o), r.apply(this, arguments)
                });
                o._callback = r
            }
            return e
        };
        c.trigger = function(e) {
            if (!this._events) return this;
            for (var t = Math.max(0, arguments.length - 1), n = Array(t), r = 0; r < t; r++) n[r] = arguments[r + 1];
            return d(v, this._events, e, void 0, n), this
        };
        var v = function(e, t, n, r) {
                if (e) {
                    var i = e[t],
                        o = e.all;
                    i && o && (o = o.slice()), i && y(i, r), o && y(o, [t].concat(r))
                }
                return e
            },
            y = function(e, t) {
                var n, r = -1,
                    i = e.length,
                    o = t[0],
                    a = t[1],
                    s = t[2];
                switch (t.length) {
                    case 0:
                        for (; ++r < i;)(n = e[r]).callback.call(n.ctx);
                        return;
                    case 1:
                        for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o);
                        return;
                    case 2:
                        for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o, a);
                        return;
                    case 3:
                        for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o, a, s);
                        return;
                    default:
                        for (; ++r < i;)(n = e[r]).callback.apply(n.ctx, t);
                        return
                }
            };
        c.bind = c.on, c.unbind = c.off, n.extend(t, c);
        var b = t.Model = function(e, t) {
            var r = e || {};
            t || (t = {}), this.cid = n.uniqueId(this.cidPrefix), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (r = this.parse(r, t) || {});
            var i = n.result(this, "defaults");
            r = n.defaults(n.extend({}, i, r), i), this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments)
        };
        n.extend(b.prototype, c, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            cidPrefix: "c",
            initialize: function() {},
            toJSON: function(e) {
                return n.clone(this.attributes)
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            get: function(e) {
                return this.attributes[e]
            },
            escape: function(e) {
                return n.escape(this.get(e))
            },
            has: function(e) {
                return null != this.get(e)
            },
            matches: function(e) {
                return !!n.iteratee(e, this)(this.attributes)
            },
            set: function(e, t, r) {
                if (null == e) return this;
                var i;
                if ("object" == typeof e ? (i = e, r = t) : (i = {})[e] = t, r || (r = {}), !this._validate(i, r)) return !1;
                var o = r.unset,
                    a = r.silent,
                    s = [],
                    u = this._changing;
                this._changing = !0, u || (this._previousAttributes = n.clone(this.attributes), this.changed = {});
                var l = this.attributes,
                    c = this.changed,
                    f = this._previousAttributes;
                for (var d in i) t = i[d], n.isEqual(l[d], t) || s.push(d), n.isEqual(f[d], t) ? delete c[d] : c[d] = t, o ? delete l[d] : l[d] = t;
                if (this.idAttribute in i && (this.id = this.get(this.idAttribute)), !a) {
                    s.length && (this._pending = r);
                    for (var h = 0; h < s.length; h++) this.trigger("change:" + s[h], this, l[s[h]], r)
                }
                if (u) return this;
                if (!a)
                    for (; this._pending;) r = this._pending, this._pending = !1, this.trigger("change", this, r);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(e, t) {
                return this.set(e, void 0, n.extend({}, t, {
                    unset: !0
                }))
            },
            clear: function(e) {
                var t = {};
                for (var r in this.attributes) t[r] = void 0;
                return this.set(t, n.extend({}, e, {
                    unset: !0
                }))
            },
            hasChanged: function(e) {
                return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
            },
            changedAttributes: function(e) {
                if (!e) return !!this.hasChanged() && n.clone(this.changed);
                var t = this._changing ? this._previousAttributes : this.attributes,
                    r = {};
                for (var i in e) {
                    var o = e[i];
                    n.isEqual(t[i], o) || (r[i] = o)
                }
                return !!n.size(r) && r
            },
            previous: function(e) {
                return null != e && this._previousAttributes ? this._previousAttributes[e] : null
            },
            previousAttributes: function() {
                return n.clone(this._previousAttributes)
            },
            fetch: function(e) {
                e = n.extend({
                    parse: !0
                }, e);
                var t = this,
                    r = e.success;
                return e.success = function(n) {
                    var i = e.parse ? t.parse(n, e) : n;
                    if (!t.set(i, e)) return !1;
                    r && r.call(e.context, t, n, e), t.trigger("sync", t, n, e)
                }, j(this, e), this.sync("read", this, e)
            },
            save: function(e, t, r) {
                var i;
                null == e || "object" == typeof e ? (i = e, r = t) : (i = {})[e] = t, r = n.extend({
                    validate: !0,
                    parse: !0
                }, r);
                var o = r.wait;
                if (i && !o) {
                    if (!this.set(i, r)) return !1
                } else if (!this._validate(i, r)) return !1;
                var a = this,
                    s = r.success,
                    u = this.attributes;
                r.success = function(e) {
                    a.attributes = u;
                    var t = r.parse ? a.parse(e, r) : e;
                    if (o && (t = n.extend({}, i, t)), t && !a.set(t, r)) return !1;
                    s && s.call(r.context, a, e, r), a.trigger("sync", a, e, r)
                }, j(this, r), i && o && (this.attributes = n.extend({}, u, i));
                var l = this.isNew() ? "create" : r.patch ? "patch" : "update";
                "patch" !== l || r.attrs || (r.attrs = i);
                var c = this.sync(l, this, r);
                return this.attributes = u, c
            },
            destroy: function(e) {
                e = e ? n.clone(e) : {};
                var t = this,
                    r = e.success,
                    i = e.wait,
                    o = function() {
                        t.stopListening(), t.trigger("destroy", t, t.collection, e)
                    };
                e.success = function(n) {
                    i && o(), r && r.call(e.context, t, n, e), t.isNew() || t.trigger("sync", t, n, e)
                };
                var a = !1;
                return this.isNew() ? n.defer(e.success) : (j(this, e), a = this.sync("delete", this, e)), i || o(), a
            },
            url: function() {
                var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || L();
                if (this.isNew()) return e;
                var t = this.get(this.idAttribute);
                return e.replace(/[^\/]$/, "$&/") + encodeURIComponent(t)
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(e) {
                return this._validate({}, n.extend({}, e, {
                    validate: !0
                }))
            },
            _validate: function(e, t) {
                if (!t.validate || !this.validate) return !0;
                e = n.extend({}, this.attributes, e);
                var r = this.validationError = this.validate(e, t) || null;
                return !r || (this.trigger("invalid", this, r, n.extend(t, {
                    validationError: r
                })), !1)
            }
        }), s(b, {
            keys: 1,
            values: 1,
            pairs: 1,
            invert: 1,
            pick: 0,
            omit: 0,
            chain: 1,
            isEmpty: 1
        }, "attributes");
        var x = t.Collection = function(e, t) {
                t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
                    silent: !0
                }, t))
            },
            w = {
                add: !0,
                remove: !0,
                merge: !0
            },
            T = {
                add: !0,
                remove: !1
            },
            C = function(e, t, n) {
                n = Math.min(Math.max(n, 0), e.length);
                var r, i = Array(e.length - n),
                    o = t.length;
                for (r = 0; r < i.length; r++) i[r] = e[r + n];
                for (r = 0; r < o; r++) e[r + n] = t[r];
                for (r = 0; r < i.length; r++) e[r + o + n] = i[r]
            };
        n.extend(x.prototype, c, {
            model: b,
            initialize: function() {},
            toJSON: function(e) {
                return this.map(function(t) {
                    return t.toJSON(e)
                })
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            add: function(e, t) {
                return this.set(e, n.extend({
                    merge: !1
                }, t, T))
            },
            remove: function(e, t) {
                t = n.extend({}, t);
                var r = !n.isArray(e);
                e = r ? [e] : e.slice();
                var i = this._removeModels(e, t);
                return !t.silent && i.length && (t.changes = {
                    added: [],
                    merged: [],
                    removed: i
                }, this.trigger("update", this, t)), r ? i[0] : i
            },
            set: function(e, t) {
                if (null != e) {
                    t = n.extend({}, w, t), t.parse && !this._isModel(e) && (e = this.parse(e, t) || []);
                    var r = !n.isArray(e);
                    e = r ? [e] : e.slice();
                    var i = t.at;
                    null != i && (i = +i), i > this.length && (i = this.length), i < 0 && (i += this.length + 1);
                    var o, a, s = [],
                        u = [],
                        l = [],
                        c = [],
                        f = {},
                        d = t.add,
                        h = t.merge,
                        p = t.remove,
                        g = !1,
                        m = this.comparator && null == i && !1 !== t.sort,
                        v = n.isString(this.comparator) ? this.comparator : null;
                    for (a = 0; a < e.length; a++) {
                        o = e[a];
                        var y = this.get(o);
                        if (y) {
                            if (h && o !== y) {
                                var b = this._isModel(o) ? o.attributes : o;
                                t.parse && (b = y.parse(b, t)), y.set(b, t), l.push(y), m && !g && (g = y.hasChanged(v))
                            }
                            f[y.cid] || (f[y.cid] = !0, s.push(y)), e[a] = y
                        } else d && (o = e[a] = this._prepareModel(o, t)) && (u.push(o), this._addReference(o, t), f[o.cid] = !0, s.push(o))
                    }
                    if (p) {
                        for (a = 0; a < this.length; a++) o = this.models[a], f[o.cid] || c.push(o);
                        c.length && this._removeModels(c, t)
                    }
                    var x = !1,
                        T = !m && d && p;
                    if (s.length && T ? (x = this.length !== s.length || n.some(this.models, function(e, t) {
                            return e !== s[t]
                        }), this.models.length = 0, C(this.models, s, 0), this.length = this.models.length) : u.length && (m && (g = !0), C(this.models, u, null == i ? this.length : i), this.length = this.models.length), g && this.sort({
                            silent: !0
                        }), !t.silent) {
                        for (a = 0; a < u.length; a++) null != i && (t.index = i + a), o = u[a], o.trigger("add", o, this, t);
                        (g || x) && this.trigger("sort", this, t), (u.length || c.length || l.length) && (t.changes = {
                            added: u,
                            removed: c,
                            merged: l
                        }, this.trigger("update", this, t))
                    }
                    return r ? e[0] : e
                }
            },
            reset: function(e, t) {
                t = t ? n.clone(t) : {};
                for (var r = 0; r < this.models.length; r++) this._removeReference(this.models[r], t);
                return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
                    silent: !0
                }, t)), t.silent || this.trigger("reset", this, t), e
            },
            push: function(e, t) {
                return this.add(e, n.extend({
                    at: this.length
                }, t))
            },
            pop: function(e) {
                var t = this.at(this.length - 1);
                return this.remove(t, e)
            },
            unshift: function(e, t) {
                return this.add(e, n.extend({
                    at: 0
                }, t))
            },
            shift: function(e) {
                var t = this.at(0);
                return this.remove(t, e)
            },
            slice: function() {
                return o.apply(this.models, arguments)
            },
            get: function(e) {
                if (null != e) return this._byId[e] || this._byId[this.modelId(e.attributes || e)] || e.cid && this._byId[e.cid]
            },
            has: function(e) {
                return null != this.get(e)
            },
            at: function(e) {
                return e < 0 && (e += this.length), this.models[e]
            },
            where: function(e, t) {
                return this[t ? "find" : "filter"](e)
            },
            findWhere: function(e) {
                return this.where(e, !0)
            },
            sort: function(e) {
                var t = this.comparator;
                if (!t) throw new Error("Cannot sort a set without a comparator");
                e || (e = {});
                var r = t.length;
                return n.isFunction(t) && (t = n.bind(t, this)), 1 === r || n.isString(t) ? this.models = this.sortBy(t) : this.models.sort(t), e.silent || this.trigger("sort", this, e), this
            },
            pluck: function(e) {
                return this.map(e + "")
            },
            fetch: function(e) {
                e = n.extend({
                    parse: !0
                }, e);
                var t = e.success,
                    r = this;
                return e.success = function(n) {
                    var i = e.reset ? "reset" : "set";
                    r[i](n, e), t && t.call(e.context, r, n, e), r.trigger("sync", r, n, e)
                }, j(this, e), this.sync("read", this, e)
            },
            create: function(e, t) {
                t = t ? n.clone(t) : {};
                var r = t.wait;
                if (!(e = this._prepareModel(e, t))) return !1;
                r || this.add(e, t);
                var i = this,
                    o = t.success;
                return t.success = function(e, t, n) {
                    r && i.add(e, n), o && o.call(n.context, e, t, n)
                }, e.save(null, t), e
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.models, {
                    model: this.model,
                    comparator: this.comparator
                })
            },
            modelId: function(e) {
                return e[this.model.prototype.idAttribute || "id"]
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(e, t) {
                if (this._isModel(e)) return e.collection || (e.collection = this), e;
                t = t ? n.clone(t) : {}, t.collection = this;
                var r = new this.model(e, t);
                return r.validationError ? (this.trigger("invalid", this, r.validationError, t), !1) : r
            },
            _removeModels: function(e, t) {
                for (var n = [], r = 0; r < e.length; r++) {
                    var i = this.get(e[r]);
                    if (i) {
                        var o = this.indexOf(i);
                        this.models.splice(o, 1), this.length--, delete this._byId[i.cid];
                        var a = this.modelId(i.attributes);
                        null != a && delete this._byId[a], t.silent || (t.index = o, i.trigger("remove", i, this, t)), n.push(i), this._removeReference(i, t)
                    }
                }
                return n
            },
            _isModel: function(e) {
                return e instanceof b
            },
            _addReference: function(e, t) {
                this._byId[e.cid] = e;
                var n = this.modelId(e.attributes);
                null != n && (this._byId[n] = e), e.on("all", this._onModelEvent, this)
            },
            _removeReference: function(e, t) {
                delete this._byId[e.cid];
                var n = this.modelId(e.attributes);
                null != n && delete this._byId[n], this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(e, t, n, r) {
                if (t) {
                    if (("add" === e || "remove" === e) && n !== this) return;
                    if ("destroy" === e && this.remove(t, r), "change" === e) {
                        var i = this.modelId(t.previousAttributes()),
                            o = this.modelId(t.attributes);
                        i !== o && (null != i && delete this._byId[i], null != o && (this._byId[o] = t))
                    }
                }
                this.trigger.apply(this, arguments)
            }
        }), s(x, {
            forEach: 3,
            each: 3,
            map: 3,
            collect: 3,
            reduce: 0,
            foldl: 0,
            inject: 0,
            reduceRight: 0,
            foldr: 0,
            find: 3,
            detect: 3,
            filter: 3,
            select: 3,
            reject: 3,
            every: 3,
            all: 3,
            some: 3,
            any: 3,
            include: 3,
            includes: 3,
            contains: 3,
            invoke: 0,
            max: 3,
            min: 3,
            toArray: 1,
            size: 1,
            first: 3,
            head: 3,
            take: 3,
            initial: 3,
            rest: 3,
            tail: 3,
            drop: 3,
            last: 3,
            without: 0,
            difference: 0,
            indexOf: 3,
            shuffle: 1,
            lastIndexOf: 3,
            isEmpty: 1,
            chain: 1,
            sample: 3,
            partition: 3,
            groupBy: 3,
            countBy: 3,
            sortBy: 3,
            indexBy: 3,
            findIndex: 3,
            findLastIndex: 3
        }, "models");
        var E = t.View = function(e) {
                this.cid = n.uniqueId("view"), n.extend(this, n.pick(e, k)), this._ensureElement(), this.initialize.apply(this, arguments)
            },
            k = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        n.extend(E.prototype, c, {
            tagName: "div",
            $: function(e) {
                return this.$el.find(e)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this._removeElement(), this.stopListening(), this
            },
            _removeElement: function() {
                this.$el.remove()
            },
            setElement: function(e) {
                return this.undelegateEvents(), this._setElement(e), this.delegateEvents(), this
            },
            _setElement: function(e) {
                this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0]
            },
            delegateEvents: function(e) {
                if (e || (e = n.result(this, "events")), !e) return this;
                this.undelegateEvents();
                for (var t in e) {
                    var r = e[t];
                    if (n.isFunction(r) || (r = this[r]), r) {
                        var i = t.match(/^(\S+)\s*(.*)$/);
                        this.delegate(i[1], i[2], n.bind(r, this))
                    }
                }
                return this
            },
            delegate: function(e, t, n) {
                return this.$el.on(e + ".delegateEvents" + this.cid, t, n), this
            },
            undelegateEvents: function() {
                return this.$el && this.$el.off(".delegateEvents" + this.cid), this
            },
            undelegate: function(e, t, n) {
                return this.$el.off(e + ".delegateEvents" + this.cid, t, n), this
            },
            _createElement: function(e) {
                return document.createElement(e)
            },
            _ensureElement: function() {
                if (this.el) this.setElement(n.result(this, "el"));
                else {
                    var e = n.extend({}, n.result(this, "attributes"));
                    this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className")), this.setElement(this._createElement(n.result(this, "tagName"))), this._setAttributes(e)
                }
            },
            _setAttributes: function(e) {
                this.$el.attr(e)
            }
        }), t.sync = function(e, r, i) {
            var o = _[e];
            n.defaults(i || (i = {}), {
                emulateHTTP: t.emulateHTTP,
                emulateJSON: t.emulateJSON
            });
            var a = {
                type: o,
                dataType: "json"
            };
            if (i.url || (a.url = n.result(r, "url") || L()), null != i.data || !r || "create" !== e && "update" !== e && "patch" !== e || (a.contentType = "application/json", a.data = JSON.stringify(i.attrs || r.toJSON(i))), i.emulateJSON && (a.contentType = "application/x-www-form-urlencoded", a.data = a.data ? {
                    model: a.data
                } : {}), i.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
                a.type = "POST", i.emulateJSON && (a.data._method = o);
                var s = i.beforeSend;
                i.beforeSend = function(e) {
                    if (e.setRequestHeader("X-HTTP-Method-Override", o), s) return s.apply(this, arguments)
                }
            }
            "GET" === a.type || i.emulateJSON || (a.processData = !1);
            var u = i.error;
            i.error = function(e, t, n) {
                i.textStatus = t, i.errorThrown = n, u && u.call(i.context, e, t, n)
            };
            var l = i.xhr = t.ajax(n.extend(a, i));
            return r.trigger("request", r, l, i), l
        };
        var _ = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
        t.ajax = function() {
            return t.$.ajax.apply(t.$, arguments)
        };
        var N = t.Router = function(e) {
            e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
        };
        n.extend(N.prototype, c, {
            initialize: function() {},
            route: function(e, r, i) {
                n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(r) && (i = r, r = ""), i || (i = this[r]);
                var o = this;
                return t.history.route(e, function(n) {
                    var a = o._extractParameters(e, n);
                    !1 !== o.execute(i, a, r) && (o.trigger.apply(o, ["route:" + r].concat(a)), o.trigger("route", r, a), t.history.trigger("route", o, r, a))
                }), this
            },
            execute: function(e, t, n) {
                e && e.apply(this, t)
            },
            navigate: function(e, n) {
                return t.history.navigate(e, n), this
            },
            _bindRoutes: function() {
                if (this.routes) {
                    this.routes = n.result(this, "routes");
                    for (var e, t = n.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
                }
            },
            _routeToRegExp: function(e) {
                return e = e.replace(/[\-{}\[\]+?.,\\\^$|#\s]/g, "\\$&").replace(/\((.*?)\)/g, "(?:$1)?").replace(/(\(\?)?:\w+/g, function(e, t) {
                    return t ? e : "([^/?]+)"
                }).replace(/\*\w+/g, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(e, t) {
                var r = e.exec(t).slice(1);
                return n.map(r, function(e, t) {
                    return t === r.length - 1 ? e || null : e ? decodeURIComponent(e) : null
                })
            }
        });
        var S = t.History = function() {
            this.handlers = [], this.checkUrl = n.bind(this.checkUrl, this), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
        };
        S.started = !1, n.extend(S.prototype, c, {
            interval: 50,
            atRoot: function() {
                return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch()
            },
            matchRoot: function() {
                return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root
            },
            decodeFragment: function(e) {
                return decodeURI(e.replace(/%25/g, "%2525"))
            },
            getSearch: function() {
                var e = this.location.href.replace(/#.*/, "").match(/\?.+/);
                return e ? e[0] : ""
            },
            getHash: function(e) {
                var t = (e || this).location.href.match(/#(.*)$/);
                return t ? t[1] : ""
            },
            getPath: function() {
                var e = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                return "/" === e.charAt(0) ? e.slice(1) : e
            },
            getFragment: function(e) {
                return null == e && (e = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), e.replace(/^[#\/]|\s+$/g, "")
            },
            start: function(e) {
                if (S.started) throw new Error("Backbone.history has already been started");
                if (S.started = !0, this.options = n.extend({
                        root: "/"
                    }, this.options, e), this.root = this.options.root, this._wantsHashChange = !1 !== this.options.hashChange, this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(/^\/+|\/+$/g, "/"), this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot()) {
                        var t = this.root.slice(0, -1) || "/";
                        return this.location.replace(t + "#" + this.getPath()), !0
                    }
                    this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                        replace: !0
                    })
                }
                if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                    this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                    var r = document.body,
                        i = r.insertBefore(this.iframe, r.firstChild).contentWindow;
                    i.document.open(), i.document.close(), i.location.hash = "#" + this.fragment
                }
                var o = window.addEventListener || function(e, t) {
                    return attachEvent("on" + e, t)
                };
                if (this._usePushState ? o("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? o("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl()
            },
            stop: function() {
                var e = window.removeEventListener || function(e, t) {
                    return detachEvent("on" + e, t)
                };
                this._usePushState ? e("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && e("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), S.started = !1
            },
            route: function(e, t) {
                this.handlers.unshift({
                    route: e,
                    callback: t
                })
            },
            checkUrl: function(e) {
                var t = this.getFragment();
                if (t === this.fragment && this.iframe && (t = this.getHash(this.iframe.contentWindow)), t === this.fragment) return !1;
                this.iframe && this.navigate(t), this.loadUrl()
            },
            loadUrl: function(e) {
                return !!this.matchRoot() && (e = this.fragment = this.getFragment(e), n.some(this.handlers, function(t) {
                    if (t.route.test(e)) return t.callback(e), !0
                }))
            },
            navigate: function(e, t) {
                if (!S.started) return !1;
                t && !0 !== t || (t = {
                    trigger: !!t
                }), e = this.getFragment(e || "");
                var n = this.root;
                "" !== e && "?" !== e.charAt(0) || (n = n.slice(0, -1) || "/");
                var r = n + e;
                if (e = this.decodeFragment(e.replace(/#.*$/, "")), this.fragment !== e) {
                    if (this.fragment = e, this._usePushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, r);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(r);
                        if (this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getHash(this.iframe.contentWindow)) {
                            var i = this.iframe.contentWindow;
                            t.replace || (i.document.open(), i.document.close()), this._updateHash(i.location, e, t.replace)
                        }
                    }
                    return t.trigger ? this.loadUrl(e) : void 0
                }
            },
            _updateHash: function(e, t, n) {
                if (n) {
                    var r = e.href.replace(/(javascript:|#).*$/, "");
                    e.replace(r + "#" + t)
                } else e.hash = "#" + t
            }
        }), t.history = new S;
        var A = function(e, t) {
            var r, i = this;
            return r = e && n.has(e, "constructor") ? e.constructor : function() {
                return i.apply(this, arguments)
            }, n.extend(r, i, t), r.prototype = n.create(i.prototype, e), r.prototype.constructor = r, r.__super__ = i.prototype, r
        };
        b.extend = x.extend = N.extend = E.extend = S.extend = A;
        var L = function() {
                throw new Error('A "url" property or function must be specified')
            },
            j = function(e, t) {
                var n = t.error;
                t.error = function(r) {
                    n && n.call(t.context, e, r, t), e.trigger("error", e, r, t)
                }
            };
        return t
    }),
    function(e) {
        e.fn.qrcode = function(t) {
            function n(e) {
                this.mode = s, this.data = e
            }

            function r(e, t) {
                this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
            }

            function i(e, t) {
                if (void 0 == e.length) throw Error(e.length + "/" + t);
                for (var n = 0; n < e.length && 0 == e[n];) n++;
                this.num = Array(e.length - n + t);
                for (var r = 0; r < e.length - n; r++) this.num[r] = e[r + n]
            }

            function o(e, t) {
                this.totalCount = e, this.dataCount = t
            }

            function a() {
                this.buffer = [], this.length = 0
            }
            var s;
            n.prototype = {
                getLength: function() {
                    return this.data.length
                },
                write: function(e) {
                    for (var t = 0; t < this.data.length; t++) e.put(this.data.charCodeAt(t), 8)
                }
            }, r.prototype = {
                addData: function(e) {
                    this.dataList.push(new n(e)), this.dataCache = null
                },
                isDark: function(e, t) {
                    if (0 > e || this.moduleCount <= e || 0 > t || this.moduleCount <= t) throw Error(e + "," + t);
                    return this.modules[e][t]
                },
                getModuleCount: function() {
                    return this.moduleCount
                },
                make: function() {
                    if (1 > this.typeNumber) {
                        for (var e = 1, e = 1; 40 > e; e++) {
                            for (var t = o.getRSBlocks(e, this.errorCorrectLevel), n = new a, r = 0, i = 0; i < t.length; i++) r += t[i].dataCount;
                            for (i = 0; i < this.dataList.length; i++) t = this.dataList[i], n.put(t.mode, 4), n.put(t.getLength(), u.getLengthInBits(t.mode, e)), t.write(n);
                            if (n.getLengthInBits() <= 8 * r) break
                        }
                        this.typeNumber = e
                    }
                    this.makeImpl(!1, this.getBestMaskPattern())
                },
                makeImpl: function(e, t) {
                    this.moduleCount = 4 * this.typeNumber + 17, this.modules = Array(this.moduleCount);
                    for (var n = 0; n < this.moduleCount; n++) {
                        this.modules[n] = Array(this.moduleCount);
                        for (var i = 0; i < this.moduleCount; i++) this.modules[n][i] = null
                    }
                    this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, t), 7 <= this.typeNumber && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = r.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, t)
                },
                setupPositionProbePattern: function(e, t) {
                    for (var n = -1; 7 >= n; n++)
                        if (!(-1 >= e + n || this.moduleCount <= e + n))
                            for (var r = -1; 7 >= r; r++) - 1 >= t + r || this.moduleCount <= t + r || (this.modules[e + n][t + r] = 0 <= n && 6 >= n && (0 == r || 6 == r) || 0 <= r && 6 >= r && (0 == n || 6 == n) || 2 <= n && 4 >= n && 2 <= r && 4 >= r)
                },
                getBestMaskPattern: function() {
                    for (var e = 0, t = 0, n = 0; 8 > n; n++) {
                        this.makeImpl(!0, n);
                        var r = u.getLostPoint(this);
                        (0 == n || e > r) && (e = r, t = n)
                    }
                    return t
                },
                createMovieClip: function(e, t, n) {
                    for (e = e.createEmptyMovieClip(t, n), this.make(), t = 0; t < this.modules.length; t++)
                        for (var n = 1 * t, r = 0; r < this.modules[t].length; r++) {
                            var i = 1 * r;
                            this.modules[t][r] && (e.beginFill(0, 100), e.moveTo(i, n), e.lineTo(i + 1, n), e.lineTo(i + 1, n + 1), e.lineTo(i, n + 1), e.endFill())
                        }
                    return e
                },
                setupTimingPattern: function() {
                    for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = 0 == e % 2);
                    for (e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = 0 == e % 2)
                },
                setupPositionAdjustPattern: function() {
                    for (var e = u.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
                        for (var n = 0; n < e.length; n++) {
                            var r = e[t],
                                i = e[n];
                            if (null == this.modules[r][i])
                                for (var o = -2; 2 >= o; o++)
                                    for (var a = -2; 2 >= a; a++) this.modules[r + o][i + a] = -2 == o || 2 == o || -2 == a || 2 == a || 0 == o && 0 == a
                        }
                },
                setupTypeNumber: function(e) {
                    for (var t = u.getBCHTypeNumber(this.typeNumber), n = 0; 18 > n; n++) {
                        var r = !e && 1 == (t >> n & 1);
                        this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r
                    }
                    for (n = 0; 18 > n; n++) r = !e && 1 == (t >> n & 1), this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r
                },
                setupTypeInfo: function(e, t) {
                    for (var n = u.getBCHTypeInfo(this.errorCorrectLevel << 3 | t), r = 0; 15 > r; r++) {
                        var i = !e && 1 == (n >> r & 1);
                        6 > r ? this.modules[r][8] = i : 8 > r ? this.modules[r + 1][8] = i : this.modules[this.moduleCount - 15 + r][8] = i
                    }
                    for (r = 0; 15 > r; r++) i = !e && 1 == (n >> r & 1), 8 > r ? this.modules[8][this.moduleCount - r - 1] = i : 9 > r ? this.modules[8][15 - r - 1 + 1] = i : this.modules[8][15 - r - 1] = i;
                    this.modules[this.moduleCount - 8][8] = !e
                },
                mapData: function(e, t) {
                    for (var n = -1, r = this.moduleCount - 1, i = 7, o = 0, a = this.moduleCount - 1; 0 < a; a -= 2)
                        for (6 == a && a--;;) {
                            for (var s = 0; 2 > s; s++)
                                if (null == this.modules[r][a - s]) {
                                    var l = !1;
                                    o < e.length && (l = 1 == (e[o] >>> i & 1)), u.getMask(t, r, a - s) && (l = !l), this.modules[r][a - s] = l, i--, -1 == i && (o++, i = 7)
                                } if (0 > (r += n) || this.moduleCount <= r) {
                                r -= n, n = -n;
                                break
                            }
                        }
                }
            }, r.PAD0 = 236, r.PAD1 = 17, r.createData = function(e, t, n) {
                for (var t = o.getRSBlocks(e, t), i = new a, s = 0; s < n.length; s++) {
                    var l = n[s];
                    i.put(l.mode, 4), i.put(l.getLength(), u.getLengthInBits(l.mode, e)), l.write(i)
                }
                for (s = e = 0; s < t.length; s++) e += t[s].dataCount;
                if (i.getLengthInBits() > 8 * e) throw Error("code length overflow. (" + i.getLengthInBits() + ">" + 8 * e + ")");
                for (i.getLengthInBits() + 4 <= 8 * e && i.put(0, 4); 0 != i.getLengthInBits() % 8;) i.putBit(!1);
                for (; !(i.getLengthInBits() >= 8 * e) && (i.put(r.PAD0, 8), !(i.getLengthInBits() >= 8 * e));) i.put(r.PAD1, 8);
                return r.createBytes(i, t)
            }, r.createBytes = function(e, t) {
                for (var n = 0, r = 0, o = 0, a = Array(t.length), s = Array(t.length), l = 0; l < t.length; l++) {
                    var c = t[l].dataCount,
                        f = t[l].totalCount - c,
                        r = Math.max(r, c),
                        o = Math.max(o, f);
                    a[l] = Array(c);
                    for (var d = 0; d < a[l].length; d++) a[l][d] = 255 & e.buffer[d + n];
                    for (n += c, d = u.getErrorCorrectPolynomial(f), c = new i(a[l], d.getLength() - 1).mod(d), s[l] = Array(d.getLength() - 1), d = 0; d < s[l].length; d++) f = d + c.getLength() - s[l].length, s[l][d] = 0 <= f ? c.get(f) : 0
                }
                for (d = l = 0; d < t.length; d++) l += t[d].totalCount;
                for (n = Array(l), d = c = 0; d < r; d++)
                    for (l = 0; l < t.length; l++) d < a[l].length && (n[c++] = a[l][d]);
                for (d = 0; d < o; d++)
                    for (l = 0; l < t.length; l++) d < s[l].length && (n[c++] = s[l][d]);
                return n
            }, s = 4;
            for (var u = {
                    PATTERN_POSITION_TABLE: [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(e) {
                        for (var t = e << 10; 0 <= u.getBCHDigit(t) - u.getBCHDigit(u.G15);) t ^= u.G15 << u.getBCHDigit(t) - u.getBCHDigit(u.G15);
                        return (e << 10 | t) ^ u.G15_MASK
                    },
                    getBCHTypeNumber: function(e) {
                        for (var t = e << 12; 0 <= u.getBCHDigit(t) - u.getBCHDigit(u.G18);) t ^= u.G18 << u.getBCHDigit(t) - u.getBCHDigit(u.G18);
                        return e << 12 | t
                    },
                    getBCHDigit: function(e) {
                        for (var t = 0; 0 != e;) t++, e >>>= 1;
                        return t
                    },
                    getPatternPosition: function(e) {
                        return u.PATTERN_POSITION_TABLE[e - 1]
                    },
                    getMask: function(e, t, n) {
                        switch (e) {
                            case 0:
                                return 0 == (t + n) % 2;
                            case 1:
                                return 0 == t % 2;
                            case 2:
                                return 0 == n % 3;
                            case 3:
                                return 0 == (t + n) % 3;
                            case 4:
                                return 0 == (Math.floor(t / 2) + Math.floor(n / 3)) % 2;
                            case 5:
                                return 0 == t * n % 2 + t * n % 3;
                            case 6:
                                return 0 == (t * n % 2 + t * n % 3) % 2;
                            case 7:
                                return 0 == (t * n % 3 + (t + n) % 2) % 2;
                            default:
                                throw Error("bad maskPattern:" + e)
                        }
                    },
                    getErrorCorrectPolynomial: function(e) {
                        for (var t = new i([1], 0), n = 0; n < e; n++) t = t.multiply(new i([1, l.gexp(n)], 0));
                        return t
                    },
                    getLengthInBits: function(e, t) {
                        if (1 <= t && 10 > t) switch (e) {
                            case 1:
                                return 10;
                            case 2:
                                return 9;
                            case s:
                            case 8:
                                return 8;
                            default:
                                throw Error("mode:" + e)
                        } else if (27 > t) switch (e) {
                            case 1:
                                return 12;
                            case 2:
                                return 11;
                            case s:
                                return 16;
                            case 8:
                                return 10;
                            default:
                                throw Error("mode:" + e)
                        } else {
                            if (!(41 > t)) throw Error("type:" + t);
                            switch (e) {
                                case 1:
                                    return 14;
                                case 2:
                                    return 13;
                                case s:
                                    return 16;
                                case 8:
                                    return 12;
                                default:
                                    throw Error("mode:" + e)
                            }
                        }
                    },
                    getLostPoint: function(e) {
                        for (var t = e.getModuleCount(), n = 0, r = 0; r < t; r++)
                            for (var i = 0; i < t; i++) {
                                for (var o = 0, a = e.isDark(r, i), s = -1; 1 >= s; s++)
                                    if (!(0 > r + s || t <= r + s))
                                        for (var u = -1; 1 >= u; u++) 0 > i + u || t <= i + u || 0 == s && 0 == u || a == e.isDark(r + s, i + u) && o++;
                                5 < o && (n += 3 + o - 5)
                            }
                        for (r = 0; r < t - 1; r++)
                            for (i = 0; i < t - 1; i++) o = 0, e.isDark(r, i) && o++, e.isDark(r + 1, i) && o++, e.isDark(r, i + 1) && o++, e.isDark(r + 1, i + 1) && o++, (0 == o || 4 == o) && (n += 3);
                        for (r = 0; r < t; r++)
                            for (i = 0; i < t - 6; i++) e.isDark(r, i) && !e.isDark(r, i + 1) && e.isDark(r, i + 2) && e.isDark(r, i + 3) && e.isDark(r, i + 4) && !e.isDark(r, i + 5) && e.isDark(r, i + 6) && (n += 40);
                        for (i = 0; i < t; i++)
                            for (r = 0; r < t - 6; r++) e.isDark(r, i) && !e.isDark(r + 1, i) && e.isDark(r + 2, i) && e.isDark(r + 3, i) && e.isDark(r + 4, i) && !e.isDark(r + 5, i) && e.isDark(r + 6, i) && (n += 40);
                        for (i = o = 0; i < t; i++)
                            for (r = 0; r < t; r++) e.isDark(r, i) && o++;
                        return e = Math.abs(100 * o / t / t - 50) / 5, n + 10 * e
                    }
                }, l = {
                    glog: function(e) {
                        if (1 > e) throw Error("glog(" + e + ")");
                        return l.LOG_TABLE[e]
                    },
                    gexp: function(e) {
                        for (; 0 > e;) e += 255;
                        for (; 256 <= e;) e -= 255;
                        return l.EXP_TABLE[e]
                    },
                    EXP_TABLE: Array(256),
                    LOG_TABLE: Array(256)
                }, c = 0; 8 > c; c++) l.EXP_TABLE[c] = 1 << c;
            for (c = 8; 256 > c; c++) l.EXP_TABLE[c] = l.EXP_TABLE[c - 4] ^ l.EXP_TABLE[c - 5] ^ l.EXP_TABLE[c - 6] ^ l.EXP_TABLE[c - 8];
            for (c = 0; 255 > c; c++) l.LOG_TABLE[l.EXP_TABLE[c]] = c;
            return i.prototype = {
                get: function(e) {
                    return this.num[e]
                },
                getLength: function() {
                    return this.num.length
                },
                multiply: function(e) {
                    for (var t = Array(this.getLength() + e.getLength() - 1), n = 0; n < this.getLength(); n++)
                        for (var r = 0; r < e.getLength(); r++) t[n + r] ^= l.gexp(l.glog(this.get(n)) + l.glog(e.get(r)));
                    return new i(t, 0)
                },
                mod: function(e) {
                    if (0 > this.getLength() - e.getLength()) return this;
                    for (var t = l.glog(this.get(0)) - l.glog(e.get(0)), n = Array(this.getLength()), r = 0; r < this.getLength(); r++) n[r] = this.get(r);
                    for (r = 0; r < e.getLength(); r++) n[r] ^= l.gexp(l.glog(e.get(r)) + t);
                    return new i(n, 0).mod(e)
                }
            }, o.RS_BLOCK_TABLE = [
                [1, 26, 19],
                [1, 26, 16],
                [1, 26, 13],
                [1, 26, 9],
                [1, 44, 34],
                [1, 44, 28],
                [1, 44, 22],
                [1, 44, 16],
                [1, 70, 55],
                [1, 70, 44],
                [2, 35, 17],
                [2, 35, 13],
                [1, 100, 80],
                [2, 50, 32],
                [2, 50, 24],
                [4, 25, 9],
                [1, 134, 108],
                [2, 67, 43],
                [2, 33, 15, 2, 34, 16],
                [2, 33, 11, 2, 34, 12],
                [2, 86, 68],
                [4, 43, 27],
                [4, 43, 19],
                [4, 43, 15],
                [2, 98, 78],
                [4, 49, 31],
                [2, 32, 14, 4, 33, 15],
                [4, 39, 13, 1, 40, 14],
                [2, 121, 97],
                [2, 60, 38, 2, 61, 39],
                [4, 40, 18, 2, 41, 19],
                [4, 40, 14, 2, 41, 15],
                [2, 146, 116],
                [3, 58, 36, 2, 59, 37],
                [4, 36, 16, 4, 37, 17],
                [4, 36, 12, 4, 37, 13],
                [2, 86, 68, 2, 87, 69],
                [4, 69, 43, 1, 70, 44],
                [6, 43, 19, 2, 44, 20],
                [6, 43, 15, 2, 44, 16],
                [4, 101, 81],
                [1, 80, 50, 4, 81, 51],
                [4, 50, 22, 4, 51, 23],
                [3, 36, 12, 8, 37, 13],
                [2, 116, 92, 2, 117, 93],
                [6, 58, 36, 2, 59, 37],
                [4, 46, 20, 6, 47, 21],
                [7, 42, 14, 4, 43, 15],
                [4, 133, 107],
                [8, 59, 37, 1, 60, 38],
                [8, 44, 20, 4, 45, 21],
                [12, 33, 11, 4, 34, 12],
                [3, 145, 115, 1, 146, 116],
                [4, 64, 40, 5, 65, 41],
                [11, 36, 16, 5, 37, 17],
                [11, 36, 12, 5, 37, 13],
                [5, 109, 87, 1, 110, 88],
                [5, 65, 41, 5, 66, 42],
                [5, 54, 24, 7, 55, 25],
                [11, 36, 12],
                [5, 122, 98, 1, 123, 99],
                [7, 73, 45, 3, 74, 46],
                [15, 43, 19, 2, 44, 20],
                [3, 45, 15, 13, 46, 16],
                [1, 135, 107, 5, 136, 108],
                [10, 74, 46, 1, 75, 47],
                [1, 50, 22, 15, 51, 23],
                [2, 42, 14, 17, 43, 15],
                [5, 150, 120, 1, 151, 121],
                [9, 69, 43, 4, 70, 44],
                [17, 50, 22, 1, 51, 23],
                [2, 42, 14, 19, 43, 15],
                [3, 141, 113, 4, 142, 114],
                [3, 70, 44, 11, 71, 45],
                [17, 47, 21, 4, 48, 22],
                [9, 39, 13, 16, 40, 14],
                [3, 135, 107, 5, 136, 108],
                [3, 67, 41, 13, 68, 42],
                [15, 54, 24, 5, 55, 25],
                [15, 43, 15, 10, 44, 16],
                [4, 144, 116, 4, 145, 117],
                [17, 68, 42],
                [17, 50, 22, 6, 51, 23],
                [19, 46, 16, 6, 47, 17],
                [2, 139, 111, 7, 140, 112],
                [17, 74, 46],
                [7, 54, 24, 16, 55, 25],
                [34, 37, 13],
                [4, 151, 121, 5, 152, 122],
                [4, 75, 47, 14, 76, 48],
                [11, 54, 24, 14, 55, 25],
                [16, 45, 15, 14, 46, 16],
                [6, 147, 117, 4, 148, 118],
                [6, 73, 45, 14, 74, 46],
                [11, 54, 24, 16, 55, 25],
                [30, 46, 16, 2, 47, 17],
                [8, 132, 106, 4, 133, 107],
                [8, 75, 47, 13, 76, 48],
                [7, 54, 24, 22, 55, 25],
                [22, 45, 15, 13, 46, 16],
                [10, 142, 114, 2, 143, 115],
                [19, 74, 46, 4, 75, 47],
                [28, 50, 22, 6, 51, 23],
                [33, 46, 16, 4, 47, 17],
                [8, 152, 122, 4, 153, 123],
                [22, 73, 45, 3, 74, 46],
                [8, 53, 23, 26, 54, 24],
                [12, 45, 15, 28, 46, 16],
                [3, 147, 117, 10, 148, 118],
                [3, 73, 45, 23, 74, 46],
                [4, 54, 24, 31, 55, 25],
                [11, 45, 15, 31, 46, 16],
                [7, 146, 116, 7, 147, 117],
                [21, 73, 45, 7, 74, 46],
                [1, 53, 23, 37, 54, 24],
                [19, 45, 15, 26, 46, 16],
                [5, 145, 115, 10, 146, 116],
                [19, 75, 47, 10, 76, 48],
                [15, 54, 24, 25, 55, 25],
                [23, 45, 15, 25, 46, 16],
                [13, 145, 115, 3, 146, 116],
                [2, 74, 46, 29, 75, 47],
                [42, 54, 24, 1, 55, 25],
                [23, 45, 15, 28, 46, 16],
                [17, 145, 115],
                [10, 74, 46, 23, 75, 47],
                [10, 54, 24, 35, 55, 25],
                [19, 45, 15, 35, 46, 16],
                [17, 145, 115, 1, 146, 116],
                [14, 74, 46, 21, 75, 47],
                [29, 54, 24, 19, 55, 25],
                [11, 45, 15, 46, 46, 16],
                [13, 145, 115, 6, 146, 116],
                [14, 74, 46, 23, 75, 47],
                [44, 54, 24, 7, 55, 25],
                [59, 46, 16, 1, 47, 17],
                [12, 151, 121, 7, 152, 122],
                [12, 75, 47, 26, 76, 48],
                [39, 54, 24, 14, 55, 25],
                [22, 45, 15, 41, 46, 16],
                [6, 151, 121, 14, 152, 122],
                [6, 75, 47, 34, 76, 48],
                [46, 54, 24, 10, 55, 25],
                [2, 45, 15, 64, 46, 16],
                [17, 152, 122, 4, 153, 123],
                [29, 74, 46, 14, 75, 47],
                [49, 54, 24, 10, 55, 25],
                [24, 45, 15, 46, 46, 16],
                [4, 152, 122, 18, 153, 123],
                [13, 74, 46, 32, 75, 47],
                [48, 54, 24, 14, 55, 25],
                [42, 45, 15, 32, 46, 16],
                [20, 147, 117, 4, 148, 118],
                [40, 75, 47, 7, 76, 48],
                [43, 54, 24, 22, 55, 25],
                [10, 45, 15, 67, 46, 16],
                [19, 148, 118, 6, 149, 119],
                [18, 75, 47, 31, 76, 48],
                [34, 54, 24, 34, 55, 25],
                [20, 45, 15, 61, 46, 16]
            ], o.getRSBlocks = function(e, t) {
                var n = o.getRsBlockTable(e, t);
                if (void 0 == n) throw Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
                for (var r = n.length / 3, i = [], a = 0; a < r; a++)
                    for (var s = n[3 * a + 0], u = n[3 * a + 1], l = n[3 * a + 2], c = 0; c < s; c++) i.push(new o(u, l));
                return i
            }, o.getRsBlockTable = function(e, t) {
                switch (t) {
                    case 1:
                        return o.RS_BLOCK_TABLE[4 * (e - 1) + 0];
                    case 0:
                        return o.RS_BLOCK_TABLE[4 * (e - 1) + 1];
                    case 3:
                        return o.RS_BLOCK_TABLE[4 * (e - 1) + 2];
                    case 2:
                        return o.RS_BLOCK_TABLE[4 * (e - 1) + 3]
                }
            }, a.prototype = {
                get: function(e) {
                    return 1 == (this.buffer[Math.floor(e / 8)] >>> 7 - e % 8 & 1)
                },
                put: function(e, t) {
                    for (var n = 0; n < t; n++) this.putBit(1 == (e >>> t - n - 1 & 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(e) {
                    var t = Math.floor(this.length / 8);
                    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                }
            }, "string" == typeof t && (t = {
                text: t
            }), t = e.extend({}, {
                render: "canvas",
                width: 256,
                height: 256,
                typeNumber: -1,
                correctLevel: 2,
                background: "#ffffff",
                foreground: "#000000"
            }, t), this.each(function() {
                var n;
                if ("canvas" == t.render) {
                    n = new r(t.typeNumber, t.correctLevel), n.addData(t.text), n.make();
                    var i = document.createElement("canvas");
                    i.width = t.width, i.height = t.height;
                    for (var o = i.getContext("2d"), a = t.width / n.getModuleCount(), s = t.height / n.getModuleCount(), u = 0; u < n.getModuleCount(); u++)
                        for (var l = 0; l < n.getModuleCount(); l++) {
                            o.fillStyle = n.isDark(u, l) ? t.foreground : t.background;
                            var c = Math.ceil((l + 1) * a) - Math.floor(l * a),
                                f = Math.ceil((u + 1) * a) - Math.floor(u * a);
                            o.fillRect(Math.round(l * a), Math.round(u * s), c, f)
                        }
                } else
                    for (n = new r(t.typeNumber, t.correctLevel), n.addData(t.text), n.make(), i = e("<table></table>").css("width", t.width + "px").css("height", t.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", t.background), o = t.width / n.getModuleCount(), a = t.height / n.getModuleCount(), s = 0; s < n.getModuleCount(); s++)
                        for (u = e("<tr></tr>").css("height", a + "px").appendTo(i), l = 0; l < n.getModuleCount(); l++) e("<td></td>").css("width", o + "px").css("background-color", n.isDark(s, l) ? t.foreground : t.background).appendTo(u);
                n = i, jQuery(n).appendTo(this)
            })
        }
    }(jQuery);
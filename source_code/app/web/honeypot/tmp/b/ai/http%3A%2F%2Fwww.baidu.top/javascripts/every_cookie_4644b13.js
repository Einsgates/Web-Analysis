try{!function(){function i(i){this.key=i,this.curCookie="",this.lsCookie="",this.udCookie="",this.udData=t(this.key),this.findCookie="",this.type=-1,this.IS=!1,this.support=!1,this.syncAll()}function t(i){var t=null,o=!0,e="userData"+i;if(!(t=document.getElementById(e)))try{t=document.createElement("INPUT"),t.type="hidden",t.style.display="none",t.setAttribute("id",e),t.setAttribute("data-for","result"),t.addBehavior("#default#userData"),$("body").prepend(t);var s=new Date;s.setDate(s.getDate()+365),t.expires=s.toUTCString()
}catch(n){o=!1,t=null}return{setItem:function(i){try{o&&t&&(t.setAttribute(e,i),t.save(e))}catch(s){}},getItem:function(){try{if(o&&t)return t.load(e),t.getAttribute(e)||""}catch(i){}},isSupport:function(){return o&&t?!0:!1}}}function o(i){return i?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+i+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||"":void 0}function e(i,t,o,e,s,n){return!i||/^(?:expires|max\-age|path|domain|secure)$/i.test(i)?!1:(document.cookie=encodeURIComponent(i)+"="+encodeURIComponent(t)+(o?"; expires="+o:"")+(s?"; domain="+s:"")+(e?"; path="+e:"")+(n?"; secure":""),!0)
}i.prototype={syncAll:function(){this.curCookie=this.httpCookie(),this.lsCookie=this.locStorage(),this.udCookie=this.udData.getItem(),this.everyCookieAll()},quickSync:function(){var i=this.httpCookie(),t=this.locStorage();t&&i!==t&&this.httpCookie(t)},locStorage:function(i){try{var t=window.localStorage;if(t){if(this.support=!0,void 0===i)return t.getItem(this.key)||"";t.setItem(this.key,i)}}catch(o){this.support=!1}},setFind:function(i,t){this.findCookie=i,this.type=t},sendLog:function(i){if(!(bds&&bds.comm&&1==bds.comm.ishome&&window.s_domain&&"home"==window.s_domain.base)){var t=bds&&bds.comm&&bds.comm.ishome?1:0;
if(1!==t||bds.comm.queryEnc||(bds.comm.queryEnc="inlo"),i=i||0,0===i){var o="undefined"==typeof this.lsCookie?"0":"1",e="undefined"==typeof this.udCookie?"0":"1";c({fm:"inlo",rsv_psid_page:t,rsv_psid1:this.curCookie,rsv_psid2:this.findCookie,rsv_psid_type:this.type,rsv_psid_dev:o+e})}else 1===i?c({fm:"inlo",rsv_psid_page:t,rsv_psid0:this.httpCookie(),rsv_psid_deep_clear:1}):2===i&&c({fm:"inlo",rsv_psid_page:t,rsv_psid0:this.httpCookie(),rsv_psid_not_support:1})}},checkCookie:function(){if(this.findCookie)return void(this.type=4);
if(this.lsCookie)return void this.setFind(this.lsCookie,1);if(this.udCookie)return void this.setFind(this.udCookie,2);if(this.curCookie){this.setFind(this.curCookie,0);var i=this;return void setTimeout(function(){(i.support||i.udData.isSupport()||i.soObject.isSupport())&&i.sendLog(1)},0)}},httpCookie:function(i){if(void 0===i)return o(this.key);var t=new Date;t.setTime(t.getTime()+1009152e6),e(this.key,i,t.toUTCString(),"/",".baidu.com")},syncCookie:function(){this.curCookie=this.httpCookie(),this.findCookie&&this.curCookie!==this.findCookie&&(this.type=4,this.httpCookie(this.findCookie),this.sendLog())
},everyCookieAll:function(){this.checkCookie(),this.findCookie&&(this.curCookie!==this.findCookie&&(this.httpCookie(this.findCookie),this.sendLog()),this.lsCookie!==this.findCookie&&this.locStorage(this.findCookie),this.udCookie!==this.findCookie&&this.udData.setItem(this.findCookie))}};var s=new i(String.fromCharCode(66,73,68,85,80,83,73,68));$(window).on("unload",function(){s.syncAll()}),$(window).on("swap_begin",function(){s.syncAll()}),$(window).on("swap_end",function(){s.syncAll()})}()}catch(e){}
====================================================
====================Beautified Below================
       rsv_psid_type: this.type,
                            rsv_psid_dev: o + e
                        })
                    } else 1 === i ? c({
                        fm: "inlo",
                        rsv_psid_page: t,
                        rsv_psid0: this.httpCookie(),
                        rsv_psid_deep_clear: 1
                    }) : 2 === i && c({
                        fm: "inlo",
                        rsv_psid_page: t,
                        rsv_psid0: this.httpCookie(),
                        rsv_psid_not_support: 1
                    })
                }
            },
            checkCookie: function() {
                if (this.findCookie) return void(this.type = 4);
                if (this.lsCookie) return void this.setFind(this.lsCookie, 1);
                if (this.udCookie) return void this.setFind(this.udCookie, 2);
                if (this.curCookie) {
                    this.setFind(this.curCookie, 0);
                    var i = this;
                    return void setTimeout(function() {
                        (i.support || i.udData.isSupport() || i.soObject.isSupport()) && i.sendLog(1)
                    }, 0)
                }
            },
            httpCookie: function(i) {
                if (void 0 === i) return o(this.key);
                var t = new Date;
                t.setTime(t.getTime() + 1009152e6), e(this.key, i, t.toUTCString(), "/", ".baidu.com")
            },
            syncCookie: function() {
                this.curCookie = this.httpCookie(), this.findCookie && this.curCookie !== this.findCookie && (this.type = 4, this.httpCookie(this.findCookie), this.sendLog())
            },
            everyCookieAll: function() {
                this.checkCookie(), this.findCookie && (this.curCookie !== this.findCookie && (this.httpCookie(this.findCookie), this.sendLog()), this.lsCookie !== this.findCookie && this.locStorage(this.findCookie), this.udCookie !== this.findCookie && this.udData.setItem(this.findCookie))
            }
        };
        var s = new i(String.fromCharCode(66, 73, 68, 85, 80, 83, 73, 68));
        $(window).on("unload", function() {
            s.syncAll()
        }), $(window).on("swap_begin", function() {
            s.syncAll()
        }), $(window).on("swap_end", function() {
            s.syncAll()
        })
    }()
} catch (e) {}
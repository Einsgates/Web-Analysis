try{!function(){function s(s){this.keys=s instanceof Array?s:[s],this.currValues={},this.localValues={},this.findValues={},this.type=-1,this.support=!1,this.startup()}function t(s){return s?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+s+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||"":void 0}function i(s,t,i,e,o,n){return!s||/^(?:expires|max\-age|path|domain|secure)$/i.test(s)?!1:(document.cookie=encodeURIComponent(s)+"="+encodeURIComponent(t)+(i?"; expires="+i:"")+(o?"; domain="+o:"")+(e?"; path="+e:"")+(n?"; secure":""),!0)
}s.prototype={startup:function(){this.httpCookie(),this.locStorage(),this.sync()},httpCookie:function(s,e){if("string"==typeof s&&"undefined"!=typeof e){var o=new Date;o.setTime(o.getTime()+1009152e6),i(s,e,o.toUTCString(),"/",".baidu.com")}else for(var n=0,r=this.keys.length;r>n;n++)this.currValues[this.keys[n]]=t(this.keys[n])},locStorage:function(s,t){try{var i=window.localStorage;if(i){if("string"==typeof s&&"undefined"!=typeof t)i.setItem(s,t);else for(var e=0,o=this.keys.length;o>e;e++)this.localValues[this.keys[e]]=i.getItem(this.keys[e])||"";
this.support=!0}}catch(n){this.support=!1}},sync:function(){for(var s=0,t=this.keys.length,i="";t>s;s++)i=this.keys[s],this.checkCookie(i),this.findValues[i]&&(this.currValues[i]!==this.findValues[i]&&(this.httpCookie(i,this.findValues[i]),this.sendLog(0,this.currValues[i],this.findValues[i],this.type)),this.localValues[i]!==this.findValues[i]&&this.locStorage(i,this.findValues[i]))},sendLog:function(s,t,i,e){if(!(bds&&bds.comm&&1==bds.comm.ishome&&window.s_domain&&"home"==window.s_domain.base)){var o=bds&&bds.comm&&bds.comm.ishome?1:0;
1!==o||bds.comm.queryEnc||(bds.comm.queryEnc="inlo"),s=s||0,0===s?c({fm:"inlo",rsv_psid_page:o,rsv_psid1:t,rsv_psid2:i,rsv_psid_type:e,rsv_psid_dev:this.support?"100":"000"}):1===s?c({fm:"inlo",rsv_psid_page:o,rsv_psid0:t,rsv_psid_deep_clear:1}):2===s&&c({fm:"inlo",rsv_psid_page:o,rsv_psid0:t,rsv_psid_not_support:1})}},setFind:function(s,t,i){this.findValues[s]=t,this.type=i},checkCookie:function(s){if(this.findValues[s])return void(this.type=4);if(this.localValues[s])return void this.setFind(s,this.localValues[s],1);
if(this.currValues[s]){this.setFind(s,this.currValues[s],0);var t=this,i=this.currValues[s];setTimeout(function(){t.support?t.sendLog(1,i):t.sendLog(2,i)},0)}}};var e=new s(String.fromCharCode(66,73,68,85,80,83,73,68));$(window).on("unload",function(){e.startup()}),$(window).on("swap_begin",function(){e.startup()}),$(window).on("swap_end",function(){e.startup()})}()}catch(e){}
====================================================
====================Beautified Below================
                     rsv_psid_page: o,
                        rsv_psid1: t,
                        rsv_psid2: i,
                        rsv_psid_type: e,
                        rsv_psid_dev: this.support ? "100" : "000"
                    }) : 1 === s ? c({
                        fm: "inlo",
                        rsv_psid_page: o,
                        rsv_psid0: t,
                        rsv_psid_deep_clear: 1
                    }) : 2 === s && c({
                        fm: "inlo",
                        rsv_psid_page: o,
                        rsv_psid0: t,
                        rsv_psid_not_support: 1
                    })
                }
            },
            setFind: function(s, t, i) {
                this.findValues[s] = t, this.type = i
            },
            checkCookie: function(s) {
                if (this.findValues[s]) return void(this.type = 4);
                if (this.localValues[s]) return void this.setFind(s, this.localValues[s], 1);
                if (this.currValues[s]) {
                    this.setFind(s, this.currValues[s], 0);
                    var t = this,
                        i = this.currValues[s];
                    setTimeout(function() {
                        t.support ? t.sendLog(1, i) : t.sendLog(2, i)
                    }, 0)
                }
            }
        };
        var e = new s(String.fromCharCode(66, 73, 68, 85, 80, 83, 73, 68));
        $(window).on("unload", function() {
            e.startup()
        }), $(window).on("swap_begin", function() {
            e.startup()
        }), $(window).on("swap_end", function() {
            e.startup()
        })
    }()
} catch (e) {}
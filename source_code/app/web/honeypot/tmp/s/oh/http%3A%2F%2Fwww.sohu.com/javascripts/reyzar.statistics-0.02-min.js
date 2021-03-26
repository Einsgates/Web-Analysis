function statistics(){this.Statistics={inte:function(type){var that=this;this.hosts=[];this.type=type;this.start()},start:function(){var that=this;that.localIP();var oSetting=null;var ip=null;var DeviceAndOS=that.setDeviceAndOS();var Browser=that.setBrowser();var nowTime=that.getNowFormatDate();var ck=new that.Cookie("REYZARID");var ino=new that.Cookie("PSINO");if(ck.Read()==null){console.log("首次打开页面");var dd=new Date();dd.setTime(dd.getTime()+30*24*60*60*1000);that.ajax("http://v6view.cngi.cn:9597/userCount/getUuId",function(xhl,res){var cookIP=res;var userId=that.hosts;var setDeviceAndOS=that.setDeviceAndOS();var setBrowser=that.setBrowser();if(res.length>0){that.ajax("http://v6test.6aas.com/open/getRemoteIP",function(xhl,res){var IPv6IP=res;var IPv4=null;var urls="http://v6view.cngi.cn:9597/userCount/upLoadInfo"+"?localIpv4="+that.hosts[0]+"&publicNetworkIpv4="+IPv4+"&ipv6Address="+IPv6IP+"&sessionId="+cookIP+"&time="+nowTime+"&userType="+that.type+"&systemType="+DeviceAndOS[0]+"&browserType="+Browser[0]+" "+Browser[1]+"&accessProtocol=6";that.ajax(urls,function(xhl,res){if(res==1){ck.setExpiresTime(dd);ck.Write(cookIP);ino.setExpiresTime(dd);ino.Write(that.type)}})},function(xhl,res){if(res==0){that.ajax("http://v4test.6aas.com/open/getRemoteIP",function(xhl,res1){var IPv6IP=null;var IPv4=res1;var urls="http://v6view.cngi.cn:9597/userCount/upLoadInfo"+"?localIpv4="+that.hosts[0]+"&publicNetworkIpv4="+IPv4+"&ipv6Address="+IPv6IP+"&sessionId="+cookIP+"&time="+nowTime+"&userType="+that.type+"&systemType="+DeviceAndOS[0]+"&browserType="+Browser[0]+" "+Browser[1]+"&accessProtocol=4";that.ajax(urls,function(xhl,res){if(res==1){ck.setExpiresTime(dd);ck.Write(cookIP);ino.setExpiresTime(dd);ino.Write(that.type)}})})}})}})}else{console.log("系统检测到已存在cookie，将不收集本次访问记录")}},loadScript:function(url,callback){var script=document.createElement("script");script.type="text/javascript";if(typeof(callback)!="undefined"){if(script.readyState){script.onreadystatechange=function(){if(script.readyState=="loaded"||script.readyState=="complete"){script.onreadystatechange=null;callback()}}}else{script.onload=function(){callback()}}}script.src=url;document.body.appendChild(script)},ajax:function(url,fnSucc,fnField){if(window.XMLHttpRequest){var oAjax=new XMLHttpRequest()}else{var oAjax=new XDomainRequest()}oAjax.open("GET",url,true);oAjax.send();oAjax.onreadystatechange=function(res){if(oAjax.readyState==4){if(oAjax.status==200){fnSucc(oAjax,oAjax.responseText)}else{fnField(oAjax,oAjax.status)}}}},localIP:function(){var RTCPeerConnection=window.RTCPeerConnection||window.webkitRTCPeerConnection||window.mozRTCPeerConnection;var that=this;if(RTCPeerConnection){(function(){var rtc=new RTCPeerConnection({iceServers:[]});if(true||window.mozRTCPeerConnection){rtc.createDataChannel("",{reliable:false})}rtc.onicecandidate=function(evt){if(evt.candidate){grepSDP("a="+evt.candidate.candidate)}};rtc.createOffer(function(offerDesc){grepSDP(offerDesc.sdp);rtc.setLocalDescription(offerDesc)},function(e){console.warn("offer failed",e)});var addrs=Object.create(null);addrs["0.0.0.0"]=false;function updateDisplay(newAddr){if(newAddr in addrs){return}else{addrs[newAddr]=true}var displayAddrs=Object.keys(addrs).filter(function(k){return addrs[k]});for(var i=0;i<displayAddrs.length;i++){if(displayAddrs[i].length>16){displayAddrs.splice(i,1);i--}}that.hosts.push(displayAddrs[0])}function grepSDP(sdp){sdp.split("\r\n").forEach(function(line,index,arr){if(~line.indexOf("a=candidate")){var parts=line.split(" "),addr=parts[4],type=parts[7];if(type==="host"){updateDisplay(addr)}}else{if(~line.indexOf("c=")){var parts=line.split(" "),addr=parts[2];updateDisplay(addr)}}})}})()}else{that.hosts.push("");console.log("正在使用IE")}},setDeviceAndOS:function(){var name="unknown";var OSname="";var deviceType="pc";if(window.navigator.userAgent.indexOf("Android")!=-1){name="Android"}else{if(window.navigator.userAgent.indexOf("iPhone")!=-1){name="iPhone"}else{if(window.navigator.userAgent.indexOf("SymbianOS")!=-1){name="SymbianOS"}else{if(window.navigator.userAgent.indexOf("Windows Phone")!=-1){name="Windows Phone"}else{if(window.navigator.userAgent.indexOf("iPad")!=-1){name="iPad"}else{if(window.navigator.userAgent.indexOf("iPod")!=-1){name="iPod"}}}}}}if(name!="unknown"){OSname=name;deviceType="mobile";return}if(window.navigator.userAgent.indexOf("Windows NT 10.0")!=-1){name="Windows 10"}else{if(window.navigator.userAgent.indexOf("Windows NT 6.2")!=-1){name="Windows 8"}else{if(window.navigator.userAgent.indexOf("Windows NT 6.1")!=-1){name="Windows 7"}else{if(window.navigator.userAgent.indexOf("Windows NT 6.0")!=-1){name="Windows Vista"}else{if(window.navigator.userAgent.indexOf("Windows NT 5.1")!=-1){name="Windows XP"}else{if(window.navigator.userAgent.indexOf("Windows NT 5.0")!=-1){name="Windows 2000"}else{if(window.navigator.userAgent.indexOf("Mac")!=-1){name="Mac/iOS"}else{if(window.navigator.userAgent.indexOf("X11")!=-1){name="UNIX"}else{if(window.navigator.userAgent.indexOf("Linux")!=-1){name="Linux"
}}}}}}}}}OSname=name;deviceType="pc";return[OSname,deviceType]},setBrowser:function(){var nAgt=navigator.userAgent;var browserName=navigator.appName;var fullVersion=""+parseFloat(navigator.appVersion);var majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if((verOffset=nAgt.indexOf("Opera"))!=-1){browserName="Opera";fullVersion=nAgt.substring(verOffset+6);if((verOffset=nAgt.indexOf("Version"))!=-1){fullVersion=nAgt.substring(verOffset+8)}}else{if((nAgt.indexOf("Trident"))!=-1){if((verOffset=nAgt.indexOf("MSIE"))!=-1){fullVersion=nAgt.substring(verOffset+5)}else{fullVersion="11.0"}if(fullVersion==5){fullVersion="11.0"}browserName="IE"}else{if((verOffset=nAgt.indexOf("Chrome"))!=-1){browserName="Chrome";fullVersion=nAgt.substring(verOffset+7)}else{if((verOffset=nAgt.indexOf("Safari"))!=-1){browserName="Safari";fullVersion=nAgt.substring(verOffset+7);if((verOffset=nAgt.indexOf("Version"))!=-1){fullVersion=nAgt.substring(verOffset+8)}}else{if((verOffset=nAgt.indexOf("Firefox"))!=-1){browserName="Firefox";fullVersion=nAgt.substring(verOffset+8)}else{if((nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))){browserName=nAgt.substring(nameOffset,verOffset);fullVersion=nAgt.substring(verOffset+1);if(browserName.toLowerCase()==browserName.toUpperCase()){browserName=navigator.appName}}}}}}}if((ix=fullVersion.indexOf(";"))!=-1){fullVersion=fullVersion.substring(0,ix)}if((ix=fullVersion.indexOf(" "))!=-1){fullVersion=fullVersion.substring(0,ix)}majorVersion=parseInt(""+fullVersion,10);if(isNaN(majorVersion)){fullVersion=""+parseFloat(navigator.appVersion);majorVersion=parseInt(navigator.appVersion,10)}return[browserName,fullVersion]},randomWord:function(randomFlag,min,max){var str="",range=min,arr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];if(randomFlag){range=Math.round(Math.random()*(max-min))+min}for(var i=0;i<range;i++){pos=Math.round(Math.random()*(arr.length-1));str+=arr[pos]}return str},Cookie:function(key,value){this.key=key;var that=this;if(value!=null){this.value=escape(value)}this.expiresTime=null;this.domain=null;this.path="/";this.secure=null;this.setValue=function(value){this.value=escape(value)},this.getValue=function(){return(this.value)},this.setExpiresTime=function(time){this.expiresTime=time},this.getExpiresTime=function(){return this.expiresTime},this.setDomain=function(domain){this.domain=domain},this.getDomain=function(){return this.domain},this.setPath=function(path){this.path=path},this.getPath=function(){return this.path},this.Write=function(v){if(v!=null){this.setValue(v)}var ck=this.key+"="+this.value;if(this.expiresTime!=null){try{ck+=";expires="+this.expiresTime.toUTCString()}catch(err){console.log("expiresTime参数错误")}}if(this.domain!=null){ck+=";domain="+this.domain}if(this.path!=null){ck+=";path="+this.path}if(this.secure!=null){ck+=";secure"}document.cookie=ck},this.Read=function(){try{var cks=document.cookie.split("; ");var i=0;for(i=0;i<cks.length;i++){var ck=cks[i];var fields=ck.split("=");if(fields[0]==this.key){this.value=fields[1];return(this.value)}}return null}catch(err){console.log("cookie读取错误");return null}},this.delCookie=function(name){var exp=new Date();exp.setTime(exp.getTime()-1);var cval=getCookie(name);if(cval!=null){document.cookie=name+"="+cval+";expires="+exp.toGMTString()}}},getNowFormatDate:function(){var date=new Date();var seperator1="-";var seperator2=":";var month=date.getMonth()+1;var strDate=date.getDate();var hours=date.getHours();var min=date.getMinutes();var second=date.getSeconds();if(month>=1&&month<=9){month="0"+month}if(strDate>=0&&strDate<=9){strDate="0"+strDate}if(hours>=0&&hours<=9){hours="0"+hours}if(min>=0&&min<=9){min="0"+min}if(second>=0&&second<=9){second="0"+second}var currentdate=date.getFullYear()+seperator1+month+seperator1+strDate+" "+hours+seperator2+min+seperator2+second;return currentdate}}};
====================================================
====================Beautified Below================
    if (res.length > 0) {
                        that.ajax("http://v6test.6aas.com/open/getRemoteIP", function(xhl, res) {
                            var IPv6IP = res;
                            var IPv4 = null;
                            var urls = "http://v6view.cngi.cn:9597/userCount/upLoadInfo" + "?localIpv4=" + that.hosts[0] + "&publicNetworkIpv4=" + IPv4 + "&ipv6Address=" + IPv6IP + "&sessionId=" + cookIP + "&time=" + nowTime + "&userType=" + that.type + "&systemType=" + DeviceAndOS[0] + "&browserType=" + Browser[0] + " " + Browser[1] + "&accessProtocol=6";
                            that.ajax(urls, function(xhl, res) {
                                if (res == 1) {
                                    ck.setExpiresTime(dd);
                                    ck.Write(cookIP);
                                    ino.setExpiresTime(dd);
                                    ino.Write(that.type)
                                }
                            })
                        }, function(xhl, res) {
                            if (res == 0) {
                                that.ajax("http://v4test.6aas.com/open/getRemoteIP", function(xhl, res1) {
                                    var IPv6IP = null;
                                    var IPv4 = res1;
                                    var urls = "http://v6view.cngi.cn:9597/userCount/upLoadInfo" + "?localIpv4=" + that.hosts[0] + "&publicNetworkIpv4=" + IPv4 + "&ipv6Address=" + IPv6IP + "&sessionId=" + cookIP + "&time=" + nowTime + "&userType=" + that.type + "&systemType=" + DeviceAndOS[0] + "&browserType=" + Browser[0] + " " + Browser[1] + "&accessProtocol=4";
                                    that.ajax(urls, function(xhl, res) {
                                        if (res == 1) {
                                            ck.setExpiresTime(dd);
                                            ck.Write(cookIP);
                                            ino.setExpiresTime(dd);
                                            ino.Write(that.type)
                                        }
                                    })
                                })
                            }
                        })
                    }
                })
            } else {
                console.log("系统检测到已存在cookie，将不收集本次访问记录")
            }
        },
        loadScript: function(url, callback) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            if (typeof(callback) != "undefined") {
                if (script.readyState) {
                    script.onreadystatechange = function() {
                        if (script.readyState == "loaded" || script.readyState == "complete") {
                            script.onreadystatechange = null;
                            callback()
                        }
                    }
                } else {
                    script.onload = function() {
                        callback()
                    }
                }
            }
            script.src = url;
            document.body.appendChild(script)
        },
        ajax: function(url, fnSucc, fnField) {
            if (window.XMLHttpRequest) {
                var oAjax = new XMLHttpRequest()
            } else {
                var oAjax = new XDomainRequest()
            }
            oAjax.open("GET", url, true);
            oAjax.send();
            oAjax.onreadystatechange = function(res) {
                if (oAjax.readyState == 4) {
                    if (oAjax.status == 200) {
                        fnSucc(oAjax, oAjax.responseText)
                    } else {
                        fnField(oAjax, oAjax.status)
                    }
                }
            }
        },
        localIP: function() {
            var RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
            var that = this;
            if (RTCPeerConnection) {
                (function() {
                    var rtc = new RTCPeerConnection({
                        iceServers: []
                    });
                    if (true || window.mozRTCPeerConnection) {
                        rtc.createDataChannel("", {
                            reliable: false
                        })
                    }
                    rtc.onicecandidate = function(evt) {
                        if (evt.candidate) {
                            grepSDP("a=" + evt.candidate.candidate)
                        }
                    };
                    rtc.createOffer(function(offerDesc) {
                        grepSDP(offerDesc.sdp);
                        rtc.setLocalDescription(offerDesc)
                    }, function(e) {
                        console.warn("offer failed", e)
                    });
                    var addrs = Object.create(null);
                    addrs["0.0.0.0"] = false;

                    function updateDisplay(newAddr) {
                        if (newAddr in addrs) {
                            return
                        } else {
                            addrs[newAddr] = true
                        }
                        var displayAddrs = Object.keys(addrs).filter(function(k) {
                            return addrs[k]
                        });
                        for (var i = 0; i < displayAddrs.length; i++) {
                            if (displayAddrs[i].length > 16) {
                                displayAddrs.splice(i, 1);
                                i--
                            }
                        }
                        that.hosts.push(displayAddrs[0])
                    }

                    function grepSDP(sdp) {
                        sdp.split("\r\n").forEach(function(line, index, arr) {
                            if (~line.indexOf("a=candidate")) {
                                var parts = line.split(" "),
                                    addr = parts[4],
                                    type = parts[7];
                                if (type === "host") {
                                    updateDisplay(addr)
                                }
                            } else {
                                if (~line.indexOf("c=")) {
                                    var parts = line.split(" "),
                                        addr = parts[2];
                                    updateDisplay(addr)
                                }
                            }
                        })
                    }
                })()
            } else {
                that.hosts.push("");
                console.log("正在使用IE")
            }
        },
        setDeviceAndOS: function() {
            var name = "unknown";
            var OSname = "";
            var deviceType = "pc";
            if (window.navigator.userAgent.indexOf("Android") != -1) {
                name = "Android"
            } else {
                if (window.navigator.userAgent.indexOf("iPhone") != -1) {
                    name = "iPhone"
                } else {
                    if (window.navigator.userAgent.indexOf("SymbianOS") != -1) {
                        name = "SymbianOS"
                    } else {
                        if (window.navigator.userAgent.indexOf("Windows Phone") != -1) {
                            name = "Windows Phone"
                        } else {
                            if (window.navigator.userAgent.indexOf("iPad") != -1) {
                                name = "iPad"
                            } else {
                                if (window.navigator.userAgent.indexOf("iPod") != -1) {
                                    name = "iPod"
                                }
                            }
                        }
                    }
                }
            }
            if (name != "unknown") {
                OSname = name;
                deviceType = "mobile";
                return
            }
            if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) {
                name = "Windows 10"
            } else {
                if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) {
                    name = "Windows 8"
                } else {
                    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) {
                        name = "Windows 7"
                    } else {
                        if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) {
                            name = "Windows Vista"
                        } else {
                            if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) {
                                name = "Windows XP"
                            } else {
                                if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) {
                                    name = "Windows 2000"
                                } else {
                                    if (window.navigator.userAgent.indexOf("Mac") != -1) {
                                        name = "Mac/iOS"
                                    } else {
                                        if (window.navigator.userAgent.indexOf("X11") != -1) {
                                            name = "UNIX"
                                        } else {
                                            if (window.navigator.userAgent.indexOf("Linux") != -1) {
                                                name = "Linux"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            OSname = name;
            deviceType = "pc";
            return [OSname, deviceType]
        },
        setBrowser: function() {
            var nAgt = navigator.userAgent;
            var browserName = navigator.appName;
            var fullVersion = "" + parseFloat(navigator.appVersion);
            var majorVersion = parseInt(navigator.appVersion, 10);
            var nameOffset, verOffset, ix;
            if ((verOffset = nAgt.indexOf("Opera")) != -1) {
                browserName = "Opera";
                fullVersion = nAgt.substring(verOffset + 6);
                if ((verOffset = nAgt.indexOf("Version")) != -1) {
                    fullVersion = nAgt.substring(verOffset + 8)
                }
            } else {
                if ((nAgt.indexOf("Trident")) != -1) {
                    if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
                        fullVersion = nAgt.substring(verOffset + 5)
                    } else {
                        fullVersion = "11.0"
                    }
                    if (fullVersion == 5) {
                        fullVersion = "11.0"
                    }
                    browserName = "IE"
                } else {
                    if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
                        browserName = "Chrome";
                        fullVersion = nAgt.substring(verOffset + 7)
                    } else {
                        if ((verOffset = nAgt.indexOf("Safari")) != -1) {
                            browserName = "Safari";
                            fullVersion = nAgt.substring(verOffset + 7);
                            if ((verOffset = nAgt.indexOf("Version")) != -1) {
                                fullVersion = nAgt.substring(verOffset + 8)
                            }
                        } else {
                            if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
                                browserName = "Firefox";
                                fullVersion = nAgt.substring(verOffset + 8)
                            } else {
                                if ((nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/"))) {
                                    browserName = nAgt.substring(nameOffset, verOffset);
                                    fullVersion = nAgt.substring(verOffset + 1);
                                    if (browserName.toLowerCase() == browserName.toUpperCase()) {
                                        browserName = navigator.appName
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if ((ix = fullVersion.indexOf(";")) != -1) {
                fullVersion = fullVersion.substring(0, ix)
            }
            if ((ix = fullVersion.indexOf(" ")) != -1) {
                fullVersion = fullVersion.substring(0, ix)
            }
            majorVersion = parseInt("" + fullVersion, 10);
            if (isNaN(majorVersion)) {
                fullVersion = "" + parseFloat(navigator.appVersion);
                majorVersion = parseInt(navigator.appVersion, 10)
            }
            return [browserName, fullVersion]
        },
        randomWord: function(randomFlag, min, max) {
            var str = "",
                range = min,
                arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            if (randomFlag) {
                range = Math.round(Math.random() * (max - min)) + min
            }
            for (var i = 0; i < range; i++) {
                pos = Math.round(Math.random() * (arr.length - 1));
                str += arr[pos]
            }
            return str
        },
        Cookie: function(key, value) {
            this.key = key;
            var that = this;
            if (value != null) {
                this.value = escape(value)
            }
            this.expiresTime = null;
            this.domain = null;
            this.path = "/";
            this.secure = null;
            this.setValue = function(value) {
                this.value = escape(value)
            }, this.getValue = function() {
                return (this.value)
            }, this.setExpiresTime = function(time) {
                this.expiresTime = time
            }, this.getExpiresTime = function() {
                return this.expiresTime
            }, this.setDomain = function(domain) {
                this.domain = domain
            }, this.getDomain = function() {
                return this.domain
            }, this.setPath = function(path) {
                this.path = path
            }, this.getPath = function() {
                return this.path
            }, this.Write = function(v) {
                if (v != null) {
                    this.setValue(v)
                }
                var ck = this.key + "=" + this.value;
                if (this.expiresTime != null) {
                    try {
                        ck += ";expires=" + this.expiresTime.toUTCString()
                    } catch (err) {
                        console.log("expiresTime参数错误")
                    }
                }
                if (this.domain != null) {
                    ck += ";domain=" + this.domain
                }
                if (this.path != null) {
                    ck += ";path=" + this.path
                }
                if (this.secure != null) {
                    ck += ";secure"
                }
                document.cookie = ck
            }, this.Read = function() {
                try {
                    var cks = document.cookie.split("; ");
                    var i = 0;
                    for (i = 0; i < cks.length; i++) {
                        var ck = cks[i];
                        var fields = ck.split("=");
                        if (fields[0] == this.key) {
                            this.value = fields[1];
                            return (this.value)
                        }
                    }
                    return null
                } catch (err) {
                    console.log("cookie读取错误");
                    return null
                }
            }, this.delCookie = function(name) {
                var exp = new Date();
                exp.setTime(exp.getTime() - 1);
                var cval = getCookie(name);
                if (cval != null) {
                    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()
                }
            }
        },
        getNowFormatDate: function() {
            var date = new Date();
            var seperator1 = "-";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            var hours = date.getHours();
            var min = date.getMinutes();
            var second = date.getSeconds();
            if (month >= 1 && month <= 9) {
                month = "0" + month
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate
            }
            if (hours >= 0 && hours <= 9) {
                hours = "0" + hours
            }
            if (min >= 0 && min <= 9) {
                min = "0" + min
            }
            if (second >= 0 && second <= 9) {
                second = "0" + second
            }
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + hours + seperator2 + min + seperator2 + second;
            return currentdate
        }
    }
};
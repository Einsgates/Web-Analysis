(function(window, document) {
  window.SOHUPV = window.SOHUPV || {
    spv_flag: 0,

    is_focus: function() {
      return document.domain.indexOf('.focus.cn') >= 0
        || document.domain.indexOf('home.sohu.com') >= 0
        || document.domain.indexOf('ihome.sohu.com') >= 0;
    },

    is_go2map: function() {
      return document.domain.indexOf('.go2map.com') >= 0;
    },

    suv_server: function() {
      return this.is_focus() ? '//pv.focus.cn/suv' : '//pv.sohu.com/suv';
    },

    spv_server: function() {
      return this.is_focus() ? '//pv.focus.cn' : '//pv.sohu.com';
    },

    spv_src: function() {
      return (document.cookie.indexOf('SUV=') < 0 || document.cookie.indexOf('IPLOC=') < 0)
        ? this.suv_server() + '/' : this.spv_server() + '/pv.gif';
    },

    spv_server_src: function(category_from, category_to) {
      var spv_random_str = escape((new Date().getTime()) * 1000 + Math.round(Math.random() * 1000)),
      spv_screen_w = window.screen.width, spv_screen_h = window.screen.height,
      spv_referrer = (typeof(encodeURI) == 'function') ? encodeURI(document.referrer) : document.referrer;

      var spv_id = false;
      if (typeof _focus_pv_id != "undefined") {
        spv_id = _focus_pv_id;
      } else if (typeof _pvinsight_id != "undefined") {
        spv_id = _pvinsight_id;
      }

      var src = this.spv_src();

      if (spv_id) {
        src += '?t?=_' + spv_random_str + '_' + spv_screen_w + '_' + spv_screen_h + '_' + spv_id;
      } else {
        src += '?t?=' + spv_random_str + '_' + spv_screen_w + '_' + spv_screen_h;
      }

      if (category_from != null && category_to != null) {
        spv_referrer = (typeof(encodeURI) == 'function') ? encodeURI(window.location.href) : window.location.href;
        spv_referrer += spv_referrer.indexOf('?') == -1 ? '?' : '&';
        spv_referrer += 'cfrom=' + category_from + '&cto=' + category_to;
      }

      src += '?r?=' + spv_referrer;

      return src;
    },

    spv_channel_flag: function() {
      /*
       * if iframes need to be counted, we should add args like this
       * eg: <script type="text/javascript" src="http://js.sohu.com/mail/pv/pv.js?ifr"></script>
       *
       * In fact, I don't know how it works ... is it really working?
       */
      var sct = document.getElementsByTagName('script');
      var _c_s = sct[sct.length - 1], _c_src = _c_s && _c_s.src;
      if (!_c_src) return false;
      var _p = _c_src.split('?')[1];
      if (!_p) return false;
      if (_p.toLowerCase().indexOf('ifr') != -1) return true;
    },

    send_pv: function(category_from, category_to) {
      if (this.spv_channel_flag() || window.top.location == window.self.location || this.is_go2map()) {
        var spv_dhead = document.getElementsByTagName("head")[0], spv_dbody = document.body;
        var d = spv_dhead || spv_dbody;
        if (d) {
          var _script2 = document.createElement('script');
          _script2.src = this.spv_server_src(category_from, category_to);
          d.appendChild(_script2);
        } else {
          document.write('<script type="text/javascript" src="' + this.spv_server_src(category_from, category_to) + '"></script>');
        }
      }
    }
  };

  window.spv_flag = window.spv_flag || (SOHUPV.send_pv(), 1);
})(window, document);

====================================================
====================Beautified Below================
pv_server_src(category_from, category_to);
                    d.appendChild(_script2);
                } else {
                    document.write('<script type="text/javascript" src="' + this.spv_server_src(category_from, category_to) + '"></script>');
                }
            }
        }
    };

    window.spv_flag = window.spv_flag || (SOHUPV.send_pv(), 1);
})(window, document);
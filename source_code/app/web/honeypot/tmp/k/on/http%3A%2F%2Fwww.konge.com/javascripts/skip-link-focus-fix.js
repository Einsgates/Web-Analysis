(function(){var isIe=/(trident|msie)/i.test(navigator.userAgent);if(isIe&&document.getElementById&&window.addEventListener){window.addEventListener('hashchange',function(){var id=location.hash.substring(1),element;if(!(/^[A-z0-9_-]+$/.test(id))){return;}
element=document.getElementById(id);if(element){if(!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))){element.tabIndex=-1;}
element.focus();}},false);}})();
====================================================
====================Beautified Below================
               element.tabIndex = -1;
                }
                element.focus();
            }
        }, false);
    }
})();
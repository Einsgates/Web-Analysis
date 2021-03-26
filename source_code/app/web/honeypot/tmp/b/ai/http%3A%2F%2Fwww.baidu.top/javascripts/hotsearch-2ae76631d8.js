F.addLog("superman:components/hotsearch",["hotsearchClick","hotsearchShow","hotsearchSet"]);F.addLog("superman:components",{categoryClick:"1200100001"});F.module("superman:components/hotsearch",function(require,exports,ctx){var pageNum=0;var hotsearchData;var totalPages;var $hotsearchWrapper=$(".s-hotsearch-wrapper");var $hotsearchContentWrapper=$hotsearchWrapper.find("#hotsearch-content-wrapper");var $hideHotsearchBtn=$("#s-user-setting-menu .s-set-hotsearch.set-hide");var $showHotsearchBtn=$(
"#s-user-setting-menu .s-set-hotsearch.set-show");function getHotsearchData(){hotsearchData=$.parseJSON($("#hotsearch_data").html()).hotsearch;totalPages=Math.floor(hotsearchData.length/6);hotsearchData=hotsearchData.slice(0,totalPages*16)}function updateHotsearchItem(itemIndex,data,hasHostTags){var currentIndex=6*pageNum+itemIndex;var $curDom=$hotsearchContentWrapper.find('[data-index="'+itemIndex+'"]');var $titleContent=$curDom.find(".title-content");var $titleIndex=$titleContent.find(
".title-content-index");var $lastIndexClass=$titleIndex.attr("class")||"";var $titleMark=$titleContent.find(".title-content-mark");var text=data.pure_title;var link=decodeURIComponent(data.linkurl);$titleContent.attr("href",link);$titleContent.find(".title-content-title").text(text);$titleIndex.removeClass();$titleIndex.addClass($lastIndexClass.replace(/top-[^ ]+/,"top-"+currentIndex));$titleIndex.text(currentIndex+1);var markClass=$titleMark.attr("class")||"";$titleMark.removeClass();if(
hasHostTags[data.hotTags]!==1){hasHostTags[data.hotTags]=1;$titleMark.addClass(markClass.replace(/mark-type-[^ ]+/,"mark-type-"+data.hotTags))}else{$titleMark.addClass(markClass.replace(/mark-type-[^ ]+/,"mark-type-0"))}}function hotsearchRefreshHandler(){if(!hotsearchData){getHotsearchData()}pageNum++;if(pageNum>=totalPages){pageNum=0}var data=hotsearchData.slice(pageNum*6,pageNum*6+6);var i=0;var hasHostTags=[];for(;i<3;i++){updateHotsearchItem(i,data[i],hasHostTags);updateHotsearchItem(i+3,
data[i+3],hasHostTags)}sendHotsearchShowLog()}function bindRefreshClickEvent(){$("#hotsearch-refresh-btn").click(function(){ctx.fire("newsClick",{clickType:"wordsChange"});hotsearchRefreshHandler()})}function sendHotsearchShowLog(){var wordsStr=[];$hotsearchContentWrapper.find(".title-content-title").map(function(index,dom){wordsStr.push(dom.innerText)});ctx.fire("hotsearchShow",{showType:"hotword",words:$.stringify(wordsStr),pagenum:pageNum})}function bindHotsearchItemClickEvent(){
$hotsearchContentWrapper.find(".title-content").click(function(){ctx.fire("newsClick",{clickType:"wordTopic",newsType:"words",url:$(this).attr("href"),title:$(this).find(".title-content-title").text(),pagenum:pageNum,newsindex:$(this).closest(".hotsearch-item").attr("data-index")})})}function judgeHotsearchStatus(){var isHideHotsearch=$.cookie.get("hide_hotsearch");if(isHideHotsearch!=="1"){showHotsearch()}else{hideHotsearch()}}function showHotsearch(){$hotsearchWrapper.removeClass("hide")
;$hideHotsearchBtn.show();$showHotsearchBtn.hide();$("#head_wrapper").removeClass("s-ps-islite")}function hideHotsearch(){$hotsearchWrapper.addClass("hide");$hideHotsearchBtn.hide();$showHotsearchBtn.show();$("#head_wrapper").addClass("s-ps-islite")}function bindShowAndHideHotsearchBtnClickEvent(){$showHotsearchBtn.click(function(){showHotsearch();$.cookie.remove("hide_hotsearch");ctx.fire("categoryClick",{category:"tjshowhotsearch"})});$hideHotsearchBtn.click(function(){hideHotsearch()
;var expiresDate=new Date;expiresDate.setTime(expiresDate.getTime()+365*24*60*60*1e3);$.cookie.set("hide_hotsearch",1,{path:"/",expires:expiresDate});ctx.fire("categoryClick",{category:"tjhidehotsearch"})})}function init(){bindRefreshClickEvent();bindHotsearchItemClickEvent();bindShowAndHideHotsearchBtnClickEvent();sendHotsearchShowLog();judgeHotsearchStatus()}exports.init=init});F.call("superman:components/hotsearch","init");
====================================================
====================Beautified Below================
Hotsearch() {
        $hotsearchWrapper.removeClass("hide");
        $hideHotsearchBtn.show();
        $showHotsearchBtn.hide();
        $("#head_wrapper").removeClass("s-ps-islite")
    }

    function hideHotsearch() {
        $hotsearchWrapper.addClass("hide");
        $hideHotsearchBtn.hide();
        $showHotsearchBtn.show();
        $("#head_wrapper").addClass("s-ps-islite")
    }

    function bindShowAndHideHotsearchBtnClickEvent() {
        $showHotsearchBtn.click(function() {
            showHotsearch();
            $.cookie.remove("hide_hotsearch");
            ctx.fire("categoryClick", {
                category: "tjshowhotsearch"
            })
        });
        $hideHotsearchBtn.click(function() {
            hideHotsearch();
            var expiresDate = new Date;
            expiresDate.setTime(expiresDate.getTime() + 365 * 24 * 60 * 60 * 1e3);
            $.cookie.set("hide_hotsearch", 1, {
                path: "/",
                expires: expiresDate
            });
            ctx.fire("categoryClick", {
                category: "tjhidehotsearch"
            })
        })
    }

    function init() {
        bindRefreshClickEvent();
        bindHotsearchItemClickEvent();
        bindShowAndHideHotsearchBtnClickEvent();
        sendHotsearchShowLog();
        judgeHotsearchStatus()
    }
    exports.init = init
});
F.call("superman:components/hotsearch", "init");
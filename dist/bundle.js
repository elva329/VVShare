module.exports=function(n){var e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(r,i,function(e){return n[e]}.bind(null,i));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=14)}([function(n,e){n.exports=require("prop-types")},function(n,e){n.exports=require("react")},function(n,e,t){var r=t(6),i=t(7);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var o={insert:"head",singleton:!1},a=(r(i,o),i.locals?i.locals:{});n.exports=a},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(o).concat([i]).join("\n")}var a,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e){n.exports=require("copy-to-clipboard")},function(n,e){n.exports=require("qrcode")},function(n,e,t){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],i=0;i<n.length;i++){var o=n[i],s=e.base?o[0]+e.base:o[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var d=c(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:g(f,e),references:1}),r.push(u)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,d=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function f(n,e,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,i);else{var o=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}function p(n,e,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var b=null,m=0;function g(n,e){var t,r,i;if(e.singleton){var o=m++;t=b||(b=l(e)),r=f.bind(null,t,o,!1),i=f.bind(null,t,o,!0)}else t=l(e),r=p.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var i=c(t[r]);a[i].references--}for(var o=s(n,e),l=0;l<t.length;l++){var u=c(t[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=o}}}},function(n,e,t){var r=t(3),i=t(8);(e=r(!1)).i(i),e.push([n.i,".vvshare-wrapper {\n  padding: 0;\n}\n.vvshare-item {\n  list-style: none;\n  background-color: #000;\n  color: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  top: 0;\n  opacity: 1;\n  text-align: center;\n  -webkit-transition: all ease 0.3s;\n  transition: all ease 0.3s;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.vvshare-item:hover {\n  top: -5px;\n  opacity: 0.75;\n}\n.vvshare-item i {\n  display: block;\n  overflow: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.vvshare-facebook {\n  background-color: #4267b2;\n}\n.vvshare-twitter {\n  background-color: #55acee;\n}\n.vvshare-linkedin {\n  background-color: #0077b5;\n}\n.vvshare-weibo {\n  background-color: #ff9933;\n}\n.vvshare-weixin {\n  background-color: #4ec034;\n}\n\n#qrcode-win-wrap {\n  text-align: center;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 10000;\n  background-color: rgba(0, 0, 0, 0.75);\n}\n.qrcode-win-content {\n  color: #fff;\n  margin: 0 auto;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  display: inline-block;\n}\n.qrcode-win-content-m {\n  min-width: 80%;\n}\n.qrcode-win-title {\n  margin: 0 auto;\n  font-size: 24px;\n  font-weight: bold;\n}\n.qrcode-win-code {\n  margin: 30px auto;\n}\n.qrcode-win-des {\n  margin: 0 auto;\n  font-size: 14px;\n  font-weight: bold;\n  background-color: rgba(35, 35, 35, 0.7);\n  border-radius: 999em;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.35) inset;\n  padding: 10px 30px;\n  display: inline-block;\n}\n\n#qrcode-copyurl {\n  width: 96%;\n  border: 0;\n  background-color: #fff;\n  border-radius: 4px;\n  height: 40px;\n  line-height: 40px;\n  padding: 0 2%;\n  overflow: hidden;\n  font-size: 14px;\n}\n#qrcode-copybtn {\n  height: 40px;\n  line-height: 40px;\n  width: 100px;\n  font-size: 16px;\n  border: 0;\n  border-radius: 4px;\n  text-align: center;\n  padding: 0;\n  margin: 10px auto;\n  cursor: pointer;\n}\n",""]),n.exports=e},function(n,e,t){var r=t(3),i=t(9),o=t(10),a=t(11),c=t(12),s=t(13);e=r(!1);var l=i(o),u=i(o,{hash:"#iefix"}),d=i(a),f=i(c),p=i(s,{hash:"#iconfont"});e.push([n.i,'@font-face {font-family: "iconfont";\n  src: url('+l+"); /* IE9 */\n  src: url("+u+") format('embedded-opentype'), \n  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),\n  url("+d+") format('woff'),\n  url("+f+") format('truetype'), \n  url("+p+') format(\'svg\'); /* iOS 4.1- */\n}\n\n.iconfont {\n  font-family: "iconfont" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-linkedin:before {\n  content: "\\e764";\n}\n\n.icon-weixin:before {\n  content: "\\e63b";\n}\n\n.icon-facebook:before {\n  content: "\\e676";\n}\n\n.icon-weibo:before {\n  content: "\\e699";\n}\n\n.icon-twitter:before {\n  content: "\\e655";\n}\n\n',""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";t.r(e),e.default=t.p+"0fb7e92575b37bd3b7a07ef6ded1c087.eot"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"e83907c0b130279d91c7d46b76c43d74.woff"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"4f4d4d6bd6d3509cccfd28623cfc2114.ttf"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"3e658887da639739b219e8eb02fe2274.svg"},function(n,e,t){"use strict";t.r(e);var r=t(1),i=t.n(r),o=t(0),a=t.n(o),c=t(4),s=t.n(c),l=(t(2),t(5));function u(n){window.open(n,"_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450,top=100,left=350")}function d(n){var e=n.url,t=n.winTitle,r=n.winDes,i="qrcode-win-wrap",o=document.getElementById(i);null!=o&&o.parentNode.removeChild(o);var a=document.createElement("div");a.id=i,a.innerHTML='<div class="qrcode-win-content"></div>',document.body.appendChild(a);var c=document.querySelector(".qrcode-win-content");if(/Android|webOS|iPhone|iPod|BlackBerry|iPad/i.test(navigator.userAgent))/micromessenger/i.test(navigator.userAgent.toLocaleLowerCase())?(c.className=c.className+" qrcode-win-content-m",c.innerHTML='<p class="qrcode-win-title">请使用右上角...<br/>分享到好友或朋友圈</p>'):(c.className=c.className+" qrcode-win-content-m",c.innerHTML='<p class="qrcode-win-copyinput"><input  id="qrcode-copyurl" value="'.concat(e,'"/></p>\n                        <p class="qrcode-win-copybtn"><button id="qrcode-copybtn">复制</button></p>\n                        <p class="qrcode-win-copyresult"></p>'),document.getElementById("qrcode-copybtn").onclick=function(){var n=document.querySelector(".qrcode-win-copyresult");s()(e)?n.innerHTML="复制成功,去黏贴分享":n.innerHTML="复制失败,请手动复制"});else{c.innerHTML='<p class="qrcode-win-title">'.concat(t,'</p>\n                      <p class="qrcode-win-code"><canvas id="qrcode-win-canvas"></canvas></p>\n                      <p class="qrcode-win-des">').concat(r,"</p>");var u=document.getElementById("qrcode-win-canvas");l.toCanvas(u,e,{errorCorrectionLevel:"H",margin:2,width:200},(function(n){n&&console.error(n)}))}o=document.getElementById(i),document.body.addEventListener("click",(function(n){c.contains(n.target)||(o.style.display="none")}))}var f=function(n){var e=n.title,t=n.url,r=n.image,o=n.description,a=n.network,c=n.alignment,s=n.width,l=n.height,f=n.padding,p=n.radius,b=n.marginRight,m=n.marginLeft,g=n.fontSize,h={width:s,height:l,lineHeight:l+"px",padding:f,borderRadius:p,marginRight:b,marginLeft:m},v=function(n){!function(n){var e=n.plat,t=n.url,r=n.title;switch(n.image,n.description,e){case"facebook":u("https://www.facebook.com/sharer.php?u=".concat(t));break;case"twitter":u("https://twitter.com/share?url=".concat(t,"&text=").concat(r));break;case"linkedin":u("https://www.linkedin.com/shareArticle?url=".concat(t));break;case"weibo":u("http://service.weibo.com/share/share.php?appkey=&title=".concat(r,"&url=").concat(t,"&searchPic=false&style=simple"));break;case"weixin":d({url:t,winTitle:"微信分享",winDes:"打开微信扫一扫"})}}({plat:n,url:t,title:e,image:r,description:o})};return i.a.createElement("ul",{className:"vvshare-wrapper",style:{textAlign:c}},a.map((function(n){return i.a.createElement("li",{className:"vvshare-item vvshare-".concat(n," "),key:n,style:h,onClick:function(){return v(n)}},i.a.createElement("i",{className:"iconfont icon-".concat(n),style:{fontSize:g}}))})))};function p(n){return(document.getElementsByName(n)[0]||0).content}f.propTypes={title:a.a.string,url:a.a.string,image:a.a.string,description:a.a.string,network:a.a.array,alignment:a.a.string,width:a.a.oneOfType([a.a.string,a.a.number]),height:a.a.oneOfType([a.a.string,a.a.number]),padding:a.a.oneOfType([a.a.string,a.a.number]),radius:a.a.oneOfType([a.a.string,a.a.number]),marginRight:a.a.oneOfType([a.a.string,a.a.number]),marginLeft:a.a.oneOfType([a.a.string,a.a.number]),fontSize:a.a.oneOfType([a.a.string,a.a.number])},f.defaultProps={title:document.title,url:window.location.href,image:(document.images[0]||0).src||"",description:p("description")||p("Description")||"",network:["facebook","linkedin","twitter","weixin","weibo"],alignment:"right",width:32,height:32,padding:0,radius:4,marginRight:0,marginLeft:8,fontSize:20};e.default=f}]);
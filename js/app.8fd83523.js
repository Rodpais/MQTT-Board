(function(e){function n(n){for(var a,r,c=n[0],l=n[1],u=n[2],s=0,d=[];s<c.length;s++)r=c[s],o[r]&&d.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(n);while(d.length)d.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],a=!0,r=1;r<t.length;r++){var c=t[r];0!==o[c]&&(a=!1)}a&&(i.splice(n--,1),e=l(l.s=t[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"4102bf14":"e8af5a45","4b47640d":"21cfc388",ac526a5a:"39c77cc1"}[e]+".js"}function l(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t={"4102bf14":1,ac526a5a:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise(function(n,t){for(var a="css/"+({}[e]||e)+"."+{"4102bf14":"4466b6eb","4b47640d":"31d6cfe0",ac526a5a:"48c31d40"}[e]+".css",r=l.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===r))return n()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){c=s[i],u=c.getAttribute("data-href");if(u===a||u===r)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var a=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.request=a,t(o)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){r[e]=0}));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var i=new Promise(function(n,t){a=o[e]=[n,t]});n.push(a[2]=i);var u,s=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=c(e),u=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,t[1](i)}o[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,s.appendChild(d)}return Promise.all(n)},l.m=e,l.c=a,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)l.d(t,a,function(n){return e[n]}.bind(null,a));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var f=s;i.push([0,"vendor"]),t()})({0:function(e,n,t){e.exports=t("2f39")},"034f":function(e,n,t){"use strict";var a=t("fb1c"),r=t.n(a);r.a},"1e5d":function(e,n,t){},"2f39":function(e,n,t){"use strict";t.r(n);t("4a91"),t("a114"),t("d14b"),t("113c"),t("1e5d"),t("7e6d");var a=t("2b0e"),r=t("e84f"),o=t("7051"),i=t("2040"),c=t("cf12"),l=t("46a9"),u=t("32a1"),s=t("f30c"),d=t("ce67"),f=t("0952"),p=t("2a70"),v=t("1180"),b=t("1e55"),h=t("506f"),g=t("b8d9"),m=t("7d43"),w=t("9541"),y=t("91c8"),Q=t("482e"),q=t("52b5"),T=t("5d8b"),S=t("525b"),x=t("bc9b"),E=t("5931"),j=t("7646"),C=t("6580"),P=t("3a08"),L=t("3054"),k=t("6ddb"),O=t("ac83"),A=t("03d8"),M=t("09fa6"),_=t("b5b8"),B=t("1526"),N=t("2bd2"),I=t("28c4"),D=t("133b"),H=t("6780"),J=t("f9d8");a["default"].use(r["a"],{config:{},components:{QLayout:o["a"],QLayoutHeader:i["a"],QLayoutDrawer:c["a"],QPageContainer:l["a"],QPage:u["a"],QToolbar:s["a"],QToolbarTitle:d["a"],QModal:f["a"],QModalLayout:p["a"],QList:v["a"],QListHeader:b["a"],QItem:h["a"],QItemMain:g["a"],QItemSide:m["a"],QItemTile:w["a"],QItemSeparator:y["a"],QBtn:Q["a"],QIcon:q["a"],QInput:T["a"],QCheckbox:S["a"],QToggle:x["a"],QSelect:E["a"],QCard:j["a"],QCardTitle:C["a"],QCardMain:P["a"],QCardSeparator:L["a"],QCardActions:k["a"],QCollapsible:O["a"],QTooltip:A["a"],QBtnToggle:M["a"],QPopover:_["a"]},directives:{Ripple:B["a"],CloseOverlay:N["a"],TouchSwipe:I["a"]},plugins:{Notify:D["a"],Dialog:H["a"],LocalStorage:J["a"]}});var R=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},$=[];R._withStripped=!0;var z={name:"App"},F=z,G=(t("034f"),t("2877")),K=Object(G["a"])(F,R,$,!1,null,null,null);K.options.__file="App.vue";var U=K.exports,V=t("8c4f"),W=[{path:"/",component:function(){return t.e("4102bf14").then(t.bind(null,"f241"))},children:[{path:"",component:function(){return t.e("ac526a5a").then(t.bind(null,"8b24"))}}]}];W.push({path:"*",component:function(){return t.e("4b47640d").then(t.bind(null,"e51e"))}});var X=W;a["default"].use(V["a"]);var Y=function(){var e=new V["a"]({scrollBehavior:function(){return{y:0}},routes:X,mode:"hash",base:""});return e},Z=function(){var e="function"===typeof Y?Y({}):Y,n={el:"#q-app",router:e,render:function(e){return e(U)}};return{app:n,router:e}},ee=t("9483");Object(ee["a"])("service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.")},registered:function(e){console.log("Service worker has been registered.")},cached:function(e){console.log("Content has been cached for offline use.")},updatefound:function(e){console.log("New content is downloading.")},updated:function(e){var n=document.createElement("div");n.id="sw-notification",n.innerHTML='<div class="q-notification-list q-notification-list-bottom fixed column items-end absolute">\n                                              <div class="q-notification">\n                                                <div class="q-alert row no-wrap shadow-2 bg-amber-9 text-white">\n                                                  <div class="q-alert-side col-auto row flex-center">\n                                                    <i aria-hidden="true" class="q-icon material-icons">warning</i>\n                                                  </div>\n                                                  <div class="q-alert-content col self-center">\n                                                    <div>The new version of MQQT Board is available. Refresh the page to update?</div>\n                                                  </div>\n                                                  <div class="q-alert-actions col-auto gutter-xs column flex-center">\n                                                    <div class="full-width">\n                                                      <button tabindex="0" class="q-btn inline relative-position q-btn-item non-selectable full-width q-btn-rectangle q-btn-flat q-focusable q-hoverable q-btn-dense">\n                                                        <div class="q-focus-helper"></div>\n                                                        <div class="q-btn-inner row col items-center justify-start">\n                                                          <div>Agree</div>\n                                                        </div>\n                                                      </button>\n                                                    </div>\n                                                    <div class="full-width">\n                                                      <button tabindex="0" class="q-btn inline relative-position q-btn-item non-selectable full-width q-btn-rectangle q-btn-flat q-focusable q-hoverable q-btn-dense">\n                                                        <div class="q-focus-helper"></div>\n                                                        <div class="q-btn-inner row col items-center justify-start">\n                                                          <div>Abort</div>\n                                                        </div>\n                                                      </button>\n                                                    </div>\n                                                  </div>\n                                                </div>\n                                              </div>\n                                            </div>';var t=n.getElementsByTagName("button"),a=document.getElementsByTagName("body")[0];t[0].addEventListener("click",function(e){window.location.reload()}),t[1].addEventListener("click",function(e){n.remove()}),a.appendChild(n)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ne=t("fe3c"),te=t.n(ne),ae=Z(),re=ae.app;ae.router;/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){te.a.attach(document.body)},!1),new a["default"](re)},"7e6d":function(e,n,t){},fb1c:function(e,n,t){}});
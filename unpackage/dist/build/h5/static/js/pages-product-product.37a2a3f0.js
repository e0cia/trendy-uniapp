(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-product"],{"08d3":function(t,e,n){"use strict";n.r(e);var a=n("81d54"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"12c3":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 底部安全边距 start*/.tn-tabbar-height[data-v-dda77e52]{min-height:%?120?%;height:calc(%?140?% + env(safe-area-inset-bottom) / 2);height:calc(%?140?% + constant(safe-area-inset-bottom))}\n/* 胶囊*/.tn-custom-nav-bar__back[data-v-dda77e52]{width:60%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?100?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-dda77e52]{display:block;flex:1;margin:auto;text-align:center}\n/* 轮播视觉差 start */.card-swiper[data-v-dda77e52]{height:%?750?%!important}.card-swiper uni-swiper-item[data-v-dda77e52]{width:%?750?%!important;left:%?0?%;box-sizing:border-box;overflow:initial}.card-swiper uni-swiper-item .swiper-item[data-v-dda77e52]{width:100%;display:block;height:100%;-webkit-transform:scale(1);transform:scale(1);transition:all .2s ease-in 0s;will-change:transform;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item[data-v-dda77e52]{-webkit-transform:none;transform:none;transition:all .2s ease-in 0s;will-change:transform}.card-swiper uni-swiper-item .swiper-item2[data-v-dda77e52]{margin-top:%?-980?%;width:%?900?%;display:block;height:%?1190?%;border-radius:%?0?%;-webkit-transform:translate(%?-65?%,%?20?%) scale(.3);transform:translate(%?-65?%,%?20?%) scale(.3);transition:all .6s ease 0s;will-change:transform;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item2[data-v-dda77e52]{margin-top:%?-980?%;-webkit-transform:translate(%?-65?%,%?0?%) scale(.5);transform:translate(%?-65?%,%?0?%) scale(.5);transition:all .6s ease 0s;will-change:transform}.card-swiper uni-swiper-item .swiper-item3[data-v-dda77e52]{margin-top:%?-1050?%;width:%?900?%;display:block;height:%?900?%;border-radius:%?0?%;-webkit-transform:translate(%?-60?%,%?20?%) scale(.5);transform:translate(%?-60?%,%?20?%) scale(.5);transition:all .6s ease 0s;will-change:transform;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item3[data-v-dda77e52]{margin-top:%?-1050?%;-webkit-transform:translate(%?-60?%,%?0?%) scale(.6);transform:translate(%?-60?%,%?0?%) scale(.6);transition:all .6s ease 0s;will-change:transform}.card-swiper uni-swiper-item .swiper-item-text[data-v-dda77e52]{margin-top:%?-520?%;width:100%;display:block;height:50%;border-radius:%?10?%;-webkit-transform:translate(%?100?%,%?-60?%) scale(.9);transform:translate(%?100?%,%?-60?%) scale(.9);transition:all .6s ease 0s;will-change:transform;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item-text[data-v-dda77e52]{margin-top:%?-580?%;width:100%;-webkit-transform:translate(%?0?%,%?60?%) scale(.9);transform:translate(%?0?%,%?60?%) scale(.9);transition:all .6s ease 0s;will-change:transform}.image-banner[data-v-dda77e52]{display:flex;align-items:center;justify-content:center}.image-banner uni-image[data-v-dda77e52]{width:100%;height:100%}\n/* 轮播指示点 start*/.indication[data-v-dda77e52]{z-index:9999;width:100%;height:%?36?%;position:absolute;display:flex;flex-direction:row;align-items:center;justify-content:center}.spot[data-v-dda77e52]{background-color:#fff;opacity:.6;width:%?10?%;height:%?10?%;border-radius:%?20?%;top:%?-60?%;margin:0 %?8?%!important;position:relative}.spot.active[data-v-dda77e52]{opacity:1;width:%?30?%;background-color:#fff}\n/* 悬浮 */.png-sussuspension2[data-v-dda77e52]{-webkit-animation:suspension2-data-v-dda77e52 3s ease-in-out infinite;animation:suspension2-data-v-dda77e52 3s ease-in-out infinite}@-webkit-keyframes suspension2-data-v-dda77e52{0%,\n  100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(-.2rem,1.4rem);transform:translate(-.2rem,1.4rem)}}@keyframes suspension2-data-v-dda77e52{0%,\n  100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(-.2rem,1.4rem);transform:translate(-.2rem,1.4rem)}}\n/* 悬浮 */.png-sussuspension3[data-v-dda77e52]{-webkit-animation:suspension3-data-v-dda77e52 4s ease-in-out infinite;animation:suspension3-data-v-dda77e52 4s ease-in-out infinite}@-webkit-keyframes suspension3-data-v-dda77e52{0%,\n  100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(.4rem,1rem);transform:translate(.4rem,1rem)}}@keyframes suspension3-data-v-dda77e52{0%,\n  100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(.4rem,1rem);transform:translate(.4rem,1rem)}}.text-sussuspension4[data-v-dda77e52]{-webkit-animation:suspension4-data-v-dda77e52 4s ease-in-out infinite;animation:suspension4-data-v-dda77e52 4s ease-in-out infinite}@-webkit-keyframes suspension4-data-v-dda77e52{0%,\n  100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translateY(1rem);transform:translateY(1rem)}}@keyframes suspension4-data-v-dda77e52{0%,\n  100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translateY(1rem);transform:translateY(1rem)}}\n/* 间隔线 start*/.tn-strip-bottom-min[data-v-dda77e52]{width:100%;border-bottom:%?1?% solid #f8f9fb}\n/* 间隔线 start*/.tn-strip-bottom[data-v-dda77e52]{width:100%;border-bottom:%?20?% solid hsla(0,0%,94.5%,.8)}\n/* 间隔线 end*/\n/* 底部*/.details-footerfixed[data-v-dda77e52]{position:fixed;background-color:hsla(0,0%,100%,.5);box-shadow:%?0?% %?0?% %?30?% %?0?% rgba(0,0,0,.07);bottom:0;width:100%;transition:all .25s ease-out;will-change:transform;z-index:100}\n/* 内容图 start */.content-backgroup[data-v-dda77e52]{z-index:-1}.content-backgroup .backgroud-image[data-v-dda77e52]{width:100%}\n/* 内容图 end */.detial_box[data-v-dda77e52]{height:44px}.flex-center[data-v-dda77e52]{display:flex;justify-content:center;flex-wrap:wrap;flex-direction:row;align-content:center;align-items:center}.detial_box .text_detial[data-v-dda77e52]{font-size:14px;font-family:PingFang SC-Regular,PingFang SC;font-weight:700;color:#312b2b;line-height:28px;margin:0 15px}.detial_box .flag_detial[data-v-dda77e52]{width:6px;height:6px;background:#892eaa;-webkit-transform:rotate(45deg);transform:rotate(45deg)}uni-page-body[data-v-dda77e52]{background-color:#fff}',""]),t.exports=e},"205f":function(t,e,n){var a=n("e021");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("643c02c6",a,!0,{sourceMap:!1,shadowMode:!1})},"4c18":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("5319");var r=a(n("8c0d")),i={name:"TemplateProduct",mixins:[r.default],data:function(){return{topInfo:{height:0},topInfoTranslateY:0,prevScrollTop:0,cardCur:0,swiperList:[],mainImage:"",bydata:{},detialImageList:[]}},onReady:function(){this.getTopInfoRect()},onPageScroll:function(t){this.handlePageScroll(t.scrollTop)},onLoad:function(t){this.getdata(t.id)},methods:{cardSwiper:function(t){this.cardCur=t.detail.current},tn:function(t){uni.navigateTo({url:t})},getTopInfoRect:function(){var t=this;this._tGetRect("#top-info").then((function(e){e?t.topInfo.height=e.height:setTimeout((function(){t.getTopInfoRect()}),50)}))},handlePageScroll:function(t){this.prevScrollTop>t?this.topInfoTranslateY=0:t>this.topInfo.height&&(this.topInfoTranslateY=this.topInfo.height),this.prevScrollTop=t},getdata:function(t){var e=this;this.$http.getRequest("/open/goods/"+t,{}).then((function(t){console.log(t),e.swiperList=t.data.goodImageJson.split(","),e.detialImageList=t.data.goodDesc.split(","),e.mainImage=t.data.goodImageJson.split(",")[1],e.bydata=t.data,console.log(e.mainImage),console.log(t.data.goodImageJson)}))},formatRichText:function(t){if(t){var e=t.replace(/<img[^>]*>/gi,(function(t,e){return t=t.replace(/style="[^"]+"/gi,"").replace(/style='[^']+'/gi,""),t=t.replace(/width="[^"]+"/gi,"").replace(/width='[^']+'/gi,""),t=t.replace(/height="[^"]+"/gi,"").replace(/height='[^']+'/gi,""),t}));return e=e.replace(/style="[^"]+"/gi,(function(t,e){return t=t.replace(/width:[^;]+;/gi,"max-width:100%;").replace(/width:[^;]+;/gi,"max-width:100%;"),t})),e=e.replace(/<br[^>]*\/>/gi,""),e=e.replace(/\<img/gi,'<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"'),e}}}};e.default=i},"50df":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={tnNavBar:n("35d3").default,tnButton:n("eb85").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-product tn-safe-area-inset-bottom"},[n("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[n("v-uni-text",{staticClass:"icon tn-icon-left-arrow"})],1)],1),n("v-uni-swiper",{staticClass:"card-swiper",attrs:{circular:!0,autoplay:!0,duration:"500",interval:"58000"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.cardSwiper.apply(void 0,arguments)}}},[n("v-uni-swiper-item",{staticClass:"cur"},[n("v-uni-view",{staticClass:"swiper-item image-banner"},[n("v-uni-image",{attrs:{src:t.mainImage,mode:"aspectFill"}})],1)],1)],1),n("v-uni-view",{staticClass:"indication"},[t._l(t.swiperList,(function(e,a){return[n("v-uni-view",{key:a+"_0",staticClass:"spot",class:t.cardCur==a?"active":""})]}))],2),n("v-uni-view",{staticClass:"tn-margin"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between"},[n("v-uni-view",{staticClass:"justify-content-item tn-text-bold tn-margin-top-xs tn-text-xl "},[t._v(t._s(t.bydata.goodName))]),n("v-uni-view",{staticClass:"justify-content-item tn-margin-top-sm"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-center tn-flex-col-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tn("")}}},[n("v-uni-button",{staticClass:"tn-button--clear-style",attrs:{"open-type":"share"}},[n("v-uni-view",{staticClass:"tn-icon-share-circle tn-color-gray tn-text-xl"})],1)],1)],1)],1),n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-margin-top"},[n("v-uni-view",{staticClass:"justify-content-item tn-text-bold tn-color-gray"},[n("v-uni-text",{staticClass:"tn-text-sm"},[t._v("￥")]),n("v-uni-text",{staticStyle:{"font-size":"50rpx"}},[t._v(t._s(t.bydata.goodPrice))])],1),n("v-uni-view",{staticClass:"justify-content-item tn-color-gray tn-padding-top-xs"},[n("v-uni-view",{},[t._v("已售 "+t._s(t.bydata.goodSaleNums))])],1)],1)],1),n("div",{staticClass:"detial_box flex-center"},[n("div",{staticClass:"flag_detial "}),n("uni-text",{staticClass:"text_detial"},[n("span",[t._v("详情展示")])]),n("div",{staticClass:"flag_detial "})],1),n("v-uni-view",{staticClass:"content-backgroup"},t._l(t.detialImageList,(function(t,e){return n("v-uni-image",{key:e,staticClass:"backgroud-image",attrs:{src:t,mode:"widthFix"}})})),1),n("v-uni-view",{staticClass:"details-footerfixed tn-safe-area-inset-bottom tn-bg-white",style:{transform:"translateY("+t.topInfoTranslateY+"px)"},attrs:{id:"top-info"}},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center"},[n("v-uni-view",{staticClass:"tn-flex-2 justify-content-item tn-color-gray"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-center"},[n("v-uni-view",{staticClass:"tn-flex-1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"tn-icon-home-in",staticStyle:{"font-size":"42rpx"}}),n("v-uni-view",{staticClass:"tn-text-center tn-text-sm tn-padding-top-xs"},[t._v("首页")])],1),n("v-uni-view",{staticClass:"tn-flex-1 tn-padding-right-xl"},[n("v-uni-button",{staticClass:"tn-button--clear-style",staticStyle:{"border-radius":"0"},attrs:{"open-type":"contact"}},[n("v-uni-view",{staticClass:"tn-icon-service-simple",staticStyle:{"font-size":"42rpx"}}),n("v-uni-view",{staticClass:"tn-text-center tn-text-sm tn-padding-top-xs"},[t._v("客服")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"tn-flex-3 justify-content-item tn-padding-top-sm tn-padding-bottom-sm"},[n("tn-button",{attrs:{shape:"round",backgroundColor:"#4ecccb",padding:"38rpx 0",width:"90%",fontSize:30},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tn("../details/details?id="+t.bydata.id)}}},[n("v-uni-text",{staticClass:"tn-color-white",attrs:{"hover-class":"tn-hover","hover-stay-time":150}},[t._v("立即购买")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"tn-tabbar-height"})],1)},i=[]},"6f8c":function(t,e,n){"use strict";n.r(e);var a=n("50df"),r=n("c9f7");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("9638");var o=n("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"dda77e52",null,!1,a["a"],void 0);e["default"]=s.exports},"7ec2":function(t,e,n){n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var a=n("7037")["default"];function r(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=r=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},l=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",d=s.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(j){u=function(t,e,n){return t[e]=n}}function f(t,e,n,a){var r=e&&e.prototype instanceof v?e:v,i=Object.create(r.prototype),s=new L(a||[]);return o(i,"_invoke",{value:_(t,n,s)}),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=f;var p={};function v(){}function g(){}function m(){}var b={};u(b,l,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(E([])));x&&x!==n&&i.call(x,l)&&(b=x);var y=m.prototype=v.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){var n;o(this,"_invoke",{value:function(r,o){function s(){return new e((function(n,s){(function n(r,o,s,l){var c=h(t[r],t,o);if("throw"!==c.type){var d=c.arg,u=d.value;return u&&"object"==a(u)&&i.call(u,"__await")?e.resolve(u.__await).then((function(t){n("next",t,s,l)}),(function(t){n("throw",t,s,l)})):e.resolve(u).then((function(t){d.value=t,s(d)}),(function(t){return n("throw",t,s,l)}))}l(c.arg)})(r,o,n,s)}))}return n=n?n.then(s,s):s()}})}function _(t,e,n){var a="suspendedStart";return function(r,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw i;return O()}for(n.method=r,n.arg=i;;){var o=n.delegate;if(o){var s=S(o,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=h(t,e,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function S(t,e){var n=e.method,a=t.iterator[n];if(void 0===a)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var r=h(a,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function E(t){if(t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return g.prototype=m,o(y,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=u(m,d,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,d,"GeneratorFunction")),t.prototype=Object.create(y),t},e.awrap=function(t){return{__await:t}},k(C.prototype),u(C.prototype,c,(function(){return this})),e.AsyncIterator=C,e.async=function(t,n,a,r,i){void 0===i&&(i=Promise);var o=new C(f(t,n,a,r),i);return e.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(y),u(y,d,"Generator"),u(y,l,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var a in e)n.push(a);return n.reverse(),function t(){for(;n.length;){var a=n.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},e.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return o.type="throw",o.arg=t,e.next=n,a&&(e.method="next",e.arg=void 0),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a],o=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var s=i.call(r,"catchLoc"),l=i.call(r,"finallyLoc");if(s&&l){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&i.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var r=a.arg;T(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=r,t.exports.__esModule=!0,t.exports["default"]=t.exports},"81d54":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("c975"),n("fb6a"),n("baa5"),n("caad"),n("2532");var r=a(n("008f")),i={mixins:[r.default],name:"tn-button",behaviors:["wx://form-field-button"],props:{index:{type:[Number,String],default:0},shape:{type:String,default:"default"},shadow:{type:Boolean,default:!1},width:{type:String,default:"auto"},height:{type:String,default:""},size:{type:String,default:""},fontBold:{type:Boolean,default:!1},padding:{type:String,default:"0 30rpx"},margin:{type:String,default:""},plain:{type:Boolean,default:!1},border:{type:Boolean,default:!0},borderBold:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},blockRepeatClick:{type:Boolean,default:!1}},computed:{buttonClass:function(){var t="";switch(this.shape){case"icon":case"round":t+=" tn-round";break}if(this.shadow)if(""!==this.backgroundColorClass&&-1!=this.backgroundColorClass.indexOf("tn-bg")){var e=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-shadow-".concat(e)}else t+=" tn-shadow-blur";if(this.fontBold&&(t+=" tn-text-bold"),this.plain&&(t+=" tn-btn--plain",this.border&&(t+=" tn-border-solid",this.borderBold&&(t+=" tn-bold-border"),""!==this.backgroundColor&&this.backgroundColor.includes("tn-bg")))){var n=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-border-".concat(n)}return t},buttonStyle:function(){var t={};switch(this.size){case"sm":t.padding="0 20rpx",t.fontSize="22rpx",t.height=this.height||"48rpx";break;case"lg":t.padding="0 40rpx",t.fontSize="32rpx",t.height=this.height||"80rpx";break;default:t.padding="0 30rpx",t.fontSize="28rpx",t.height=this.height||"64rpx"}return this.padding&&(t.padding=this.padding),this.margin&&(t.margin=this.margin),this.fontSize&&(t.fontSize=this.fontSize+this.fontUnit),t.width="icon"===this.shape?t.height:this.width,t.padding="icon"===this.shape?"0":t.padding,this.fontColorStyle&&(t.color=this.fontColorStyle),this.backgroundColorClass||(this.plain?t.borderColor=this.backgroundColorStyle||"#080808":t.backgroundColor=this.backgroundColorStyle||"#FFFFFF"),this.shadow&&!this.backgroundColorClass&&(-1!=this.backgroundColorStyle.indexOf("#")?t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"#000000","10"):-1==this.backgroundColorStyle.indexOf("rgb")&&-1==this.backgroundColorStyle.indexOf("rgba")&&this.backgroundColorStyle||(t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"rgba(0, 0, 0, 0.1)"))),t}},data:function(){return{clickTime:0,clickIntervalTime:200}},methods:{handleClick:function(){var t=this;if(!this.disabled){if(this.blockRepeatClick){var e=(new Date).getTime();if(e-this.clickTime<=this.clickIntervalTime)return;this.clickTime=e,setTimeout((function(){t.clickTime=0}),this.clickIntervalTime)}this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}},handleGetUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("getuserinfo",n)},handleContact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("contact",n)},handleGetPhoneNumber:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("getphonenumber",n)},handleError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("error",n)}}};e.default=i},"84a1":function(t,e,n){"use strict";var a=n("205f"),r=n.n(a);r.a},"8c0d":function(t,e,n){var a=n("7ec2").default,r=n("c973").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})},updateCustomBarInfo:function(){var t=this;return r(a().mark((function e(){var n,r,i;return a().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,r=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$t.updateCustomBar();case 6:i=e.sent,n=i.customBarHeight,r=i.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$t.vuex("vuex_status_bar_height",r),t.$t.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},9638:function(t,e,n){"use strict";var a=n("edb2"),r=n.n(a);r.a},baa5:function(t,e,n){var a=n("23e7"),r=n("e58c");a({target:"Array",proto:!0,forced:r!==[].lastIndexOf},{lastIndexOf:r})},c973:function(t,e,n){function a(t,e,n,a,r,i,o){try{var s=t[i](o),l=s.value}catch(c){return void n(c)}s.done?e(l):Promise.resolve(l).then(a,r)}n("d3b7"),t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function s(t){a(o,r,i,s,l,"next",t)}function l(t){a(o,r,i,s,l,"throw",t)}s(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},c9f7:function(t,e,n){"use strict";n.r(e);var a=n("4c18"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},e021:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-btn[data-v-778c77a3]{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;line-height:1;text-align:center;text-decoration:none;overflow:visible;-webkit-transform:translate(%?0?%,%?0?%);transform:translate(%?0?%,%?0?%);border-radius:%?12?%;margin:0}.tn-btn--plain[data-v-778c77a3]{background-color:initial!important;background-image:none}.tn-btn--plain.tn-round[data-v-778c77a3]{border-radius:%?1000?%!important}',""]),t.exports=e},eb85:function(t,e,n){"use strict";n.r(e);var a=n("f7cb"),r=n("08d3");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("84a1");var o=n("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"778c77a3",null,!1,a["a"],void 0);e["default"]=s.exports},edb2:function(t,e,n){var a=n("12c3");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("54261e61",a,!0,{sourceMap:!1,shadowMode:!1})},f7cb:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-button",{staticClass:"tn-btn-class tn-btn",class:[t.buttonClass,t.backgroundColorClass,t.fontColorClass],style:[t.buttonStyle],attrs:{"hover-class":"tn-hover",loading:t.loading,disabled:t.disabled,"form-type":t.formType,"open-type":t.openType},on:{getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGetUserInfo.apply(void 0,arguments)},getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGetPhoneNumber.apply(void 0,arguments)},contact:function(e){arguments[0]=e=t.$handleEvent(e),t.handleContact.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.handleError.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},r=[]}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-help-help"],{"012c":function(t,e,n){"use strict";var r=n("b65f"),i=n.n(r);i.a},"1c14":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={tnNavBar:n("35d3").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-help tn-safe-area-inset-bottom"},[n("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[n("v-uni-text",{staticClass:"icon tn-icon-left-arrow"})],1)],1),n("v-uni-view",{staticClass:"tn-margin-bottom-xl tn-padding-bottom tn-color-white",style:{paddingTop:t.vuex_custom_bar_height+10+"px"}},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-padding tn-strip-bottom-min tn-margin-top-xs"},[n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-text-bold tn-text-xl"},[t._v("常见问题")])],1)],1),t._l(t.helpList,(function(e,r){return n("v-uni-view",{key:r,staticClass:"tn-flex tn-flex-row-between tn-strip-bottom-min tn-padding tn-margin-top-xs",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tn("/minePages/default")}}},[n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-text-df"},[t._v(t._s(e.title))])],1),n("v-uni-view",{staticClass:"justify-content-item tn-text-lg tn-color-gray"},[n("v-uni-view",{staticClass:"tn-icon-right"})],1)],1)})),n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-padding tn-strip-bottom-min tn-margin-top-xl"},[n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-text-bold tn-text-xl"},[t._v("登录问题")])],1)],1),t._l(t.helpList,(function(e,r){return n("v-uni-view",{key:r,staticClass:"tn-flex tn-flex-row-between tn-strip-bottom-min tn-padding tn-margin-top-xs",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tn("/minePages/default")}}},[n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-text-df"},[t._v(t._s(e.title))])],1),n("v-uni-view",{staticClass:"justify-content-item tn-text-lg tn-color-gray"},[n("v-uni-view",{staticClass:"tn-icon-right"})],1)],1)})),n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-padding tn-strip-bottom-min tn-margin-top-xl"},[n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-text-bold tn-text-lg"},[t._v("其他问题")])],1)],1),t._l(t.helpList,(function(e,r){return n("v-uni-view",{key:r,staticClass:"tn-flex tn-flex-row-between tn-strip-bottom-min tn-padding tn-margin-top-xs",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tn("/minePages/default")}}},[n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-text-df"},[t._v(t._s(e.title))])],1),n("v-uni-view",{staticClass:"justify-content-item tn-text-lg tn-color-gray"},[n("v-uni-view",{staticClass:"tn-icon-right"})],1)],1)}))],2)],1)},o=[]},"7ec2":function(t,e,n){n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var r=n("7037")["default"];function i(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=i=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(B){f=function(t,e,n){return t[e]=n}}function v(t,e,n,r){var i=e&&e.prototype instanceof p?e:p,o=Object.create(i.prototype),s=new O(r||[]);return a(o,"_invoke",{value:C(t,n,s)}),o}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(B){return{type:"throw",arg:B}}}e.wrap=v;var h={};function p(){}function g(){}function m(){}var y={};f(y,c,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(P([])));b&&b!==n&&o.call(b,c)&&(y=b);var w=m.prototype=p.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){var n;a(this,"_invoke",{value:function(i,a){function s(){return new e((function(n,s){(function n(i,a,s,c){var u=d(t[i],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==r(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)})(i,a,n,s)}))}return n=n?n.then(s,s):s()}})}function C(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return T()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=k(a,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=d(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function k(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var i=d(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:T}}function T(){return{value:void 0,done:!0}}return g.prototype=m,a(w,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:g,configurable:!0}),g.displayName=f(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},_(L.prototype),f(L.prototype,u,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new L(v(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(w),f(w,l,"Generator"),f(w,c,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}t.exports=i,t.exports.__esModule=!0,t.exports["default"]=t.exports},"8c0d":function(t,e,n){var r=n("7ec2").default,i=n("c973").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})},updateCustomBarInfo:function(){var t=this;return i(r().mark((function e(){var n,i,o;return r().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,i=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$t.updateCustomBar();case 6:o=e.sent,n=o.customBarHeight,i=o.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$t.vuex("vuex_status_bar_height",i),t.$t.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},9524:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 胶囊*/.tn-custom-nav-bar__back[data-v-20bce60a]{width:60%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-20bce60a]{display:block;flex:1;margin:auto;text-align:center}\n/* 间隔线 start*/.tn-strip-bottom-min[data-v-20bce60a]{width:100%;border-bottom:%?1?% solid rgba(248,249,251,.03137254901960784)}.tn-strip-top[data-v-20bce60a]{width:100%;border-top:%?20?% solid rgba(248,249,251,.03137254901960784)}\n/* 间隔线 end*/',""]),t.exports=e},a479:function(t,e,n){"use strict";n.r(e);var r=n("b03b"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},b03b:function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("8c0d")),o={name:"TemplateHelp",mixins:[i.default],data:function(){return{helpList:[{title:"修改了密码还可以登录",name:""},{title:"找回密码无法收到验证码",name:""},{title:"账号无法退出切换账号",name:""},{title:"无法授权微信登录",name:""},{title:"我的账号登录上别人的账号了",name:""},{title:"手机登录无法收到验证码",name:""}]}},methods:{tn:function(t){uni.navigateTo({url:t})}}};e.default=o},b65f:function(t,e,n){var r=n("9524");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("e4706c62",r,!0,{sourceMap:!1,shadowMode:!1})},c973:function(t,e,n){function r(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}n("d3b7"),t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function s(t){r(a,i,o,s,c,"next",t)}function c(t){r(a,i,o,s,c,"throw",t)}s(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},fa39:function(t,e,n){"use strict";n.r(e);var r=n("1c14"),i=n("a479");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("012c");var a=n("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"20bce60a",null,!1,r["a"],void 0);e["default"]=s.exports}}]);
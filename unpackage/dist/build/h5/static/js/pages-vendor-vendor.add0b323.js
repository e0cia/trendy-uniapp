(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-vendor-vendor"],{"015a":function(t,e,n){"use strict";n.r(e);var a=n("245f"),o=n("f615");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("1f05");var r=n("f0c5"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"05190b64",null,!1,a["a"],void 0);e["default"]=c.exports},"1f05":function(t,e,n){"use strict";var a=n("edb8"),o=n.n(a);o.a},"245f":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={tnNavBar:n("64aa").default,tnEmpty:n("2dbd").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tn-safe-area-inset-bottom"},[n("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[n("v-uni-text",{staticClass:"icon tn-icon-left"})],1),n("v-uni-text",[t._v("卡商列表")])],1),n("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[t.vendor.length>0?n("v-uni-view",{staticClass:"vendor-content"},t._l(t.vendor,(function(e,a){return n("v-uni-view",{staticClass:"vendor-content-item"},[n("v-uni-view",{staticClass:"item-top"},[n("v-uni-view",[t._v("名称："+t._s(e.showName))])],1),n("v-uni-view",{staticClass:"item-bottom"},[n("v-uni-view",{staticClass:"text"},[t._v("联系方式")]),n("v-uni-view",{staticClass:"cwx"},[n("v-uni-image",{staticStyle:{"background-image":"url(../static/image/contanct/wx.png)","background-size":"100% 100%"}}),n("v-uni-text",{staticClass:"cwx-text"},[t._v(t._s(e.showWx))]),n("v-uni-image",{staticStyle:{width:"14px",height:"14px","background-image":"url(../static/image/contanct/copy.png)","background-size":"100% 100%"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.copyContant(e.showWx)}}})],1),n("v-uni-view",{staticClass:"cqq"},[n("v-uni-image",{staticStyle:{"background-image":"url(../static/image/contanct/qq.png)","background-size":"100% 100%"}}),n("v-uni-text",{staticClass:"cqq-text"},[t._v(t._s(e.showQq))]),n("v-uni-image",{staticStyle:{width:"14px",height:"14px","background-image":"url(../static/image/contanct/copy.png)","background-size":"100% 100%"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.copyContant(e.showQq)}}})],1)],1)],1)})),1):n("v-uni-view",{staticClass:"vendor-content"},[n("tn-empty",{attrs:{mode:"data"}})],1)],1)],1)},i=[]},b4bf:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("4fdf")),i={mixins:[o.default],name:"vendor",data:function(){return{vendor:[]}},mounted:function(){this.getVendor()},methods:{getVendor:function(){var t=this;this.$http.postRequest("/kakabl/vendor/getCardVendorList",{}).then((function(e){200===e.code?t.vendor=e.data:t.$t.message.toast(e.msg)}))},copyContant:function(t){uni.setClipboardData({data:t,success:function(){this.$t.message.toast("复制成功")}})}}};e.default=i},edb8:function(t,e,n){var a=n("f382");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("68070ca7",a,!0,{sourceMap:!1,shadowMode:!1})},f382:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */\r\n/* 胶囊*/.tn-custom-nav-bar__back[data-v-05190b64]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-05190b64]{display:block;flex:1;margin:auto;text-align:center}body[data-v-05190b64], uni-page-body[data-v-05190b64]{background:#f9f9f9!important;font-weight:200px}body.?%PAGE?%[data-v-05190b64]{background:#f9f9f9!important}.vendor-content[data-v-05190b64]{padding:3.4375rem .9375rem .9375rem}.vendor-content .vendor-content-item[data-v-05190b64]{background-color:#fff;width:100%;border-radius:.40625rem;padding:.9375rem .78125rem;box-sizing:border-box;margin-bottom:.9375rem}.vendor-content .vendor-content-item .item-top[data-v-05190b64]{display:flex;justify-content:space-between;align-items:center;font-size:.875rem;font-weight:400;color:#323232;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.vendor-content .vendor-content-item .item-bottom[data-v-05190b64]{display:flex;justify-content:space-between;align-items:center;font-size:.875rem;font-weight:400;color:#999;margin-top:.78125rem}.vendor-content .vendor-content-item .item-bottom .cwx[data-v-05190b64]{flex:1;display:flex;justify-content:center;align-items:center;margin-left:.625rem;background:#f7f7f7;border:.03125rem solid #999;padding:.0625rem 0}.vendor-content .vendor-content-item .item-bottom .cwx uni-image[data-v-05190b64]{width:18px;height:18px}.vendor-content .vendor-content-item .item-bottom .cwx .cwx-text[data-v-05190b64]{width:4rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.vendor-content .vendor-content-item .item-bottom .cqq[data-v-05190b64]{flex:1;display:flex;justify-content:center;align-items:center;margin-left:.625rem;background:#f7f7f7;border:.03125rem solid #999;padding:.0625rem 0}.vendor-content .vendor-content-item .item-bottom .cqq uni-image[data-v-05190b64]{width:18px;height:18px}.vendor-content .vendor-content-item .item-bottom .cqq .cqq-text[data-v-05190b64]{width:4rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},f615:function(t,e,n){"use strict";n.r(e);var a=n("b4bf"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a}}]);
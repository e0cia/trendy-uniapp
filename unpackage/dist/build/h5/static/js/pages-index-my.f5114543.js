(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-my"],{"2acf":function(t,a,e){var n=e("c681");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("f509a826",n,!0,{sourceMap:!1,shadowMode:!1})},"2ce2":function(t,a,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("d18d")),o={components:{WxUserInfoModal:i.default},name:"pagesD",data:function(){return{showAuthorizationModal:!1,nickname:"",id:"",member:"",logo:"",userInfo:{extendUserInfo:{name:""}}}},onShow:function(){this.getuserInfo()},methods:{copyContant:function(t){uni.setClipboardData({data:t,success:function(){this.$t.message.toast("复制成功")}})},getuserInfo:function(){var t=this;this.$http.postRequest("/kakabl/extenduser/center/userInfo",{}).then((function(a){200===a.code?(uni.setStorageSync("userInfo",a.data),t.userInfo=a.data):t.$t.message.toast(a.msg)}))},tn:function(t){uni.navigateTo({url:t})},navTuniaoUI:function(){uni.navigateToMiniProgram({appId:"wxf88c4571170ccf54"})},navAddress:function(){uni.chooseAddress({})},short:function(){wx.vibrateShort()},callPhoneNumber:function(){uni.makePhoneCall({phoneNumber:"13476865273"})},copyUid:function(){wx.vibrateShort(),uni.setClipboardData({data:"10262008"})},copySource:function(){wx.vibrateShort(),uni.setClipboardData({data:"https://ext.dcloud.net.cn/publisher?id=356088"})},openAuthorizationModal:function(){this.showAuthorizationModal=!0},noflished:function(){1===this.userInfo.extendUserInfo.isCardVendor?this.tn("/pages/cardvendor/giveuser"):this.$t.message.toast("请联系客服加入战神计划")},updatedUserInfoEvent:function(t){console.log("获取到的用户信息",t)},lougout:function(){var t=this;this.$t.message.loading("正在退出"),this.$http.postRequest("/logout",{}).then((function(a){200===a.code?(uni.removeStorageSync("Authorization"),uni.removeStorageSync("userInfo"),t.$t.message.closeLoading(),uni.switchTab({url:"/pages/index/index"})):t.$t.message.toast(a.msg)}))}}};a.default=o},"48b6":function(t,a,e){"use strict";e.r(a);var n=e("ac1b"),i=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"84e8":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"tn-list-cell-class tn-list-cell",class:[t.backgroundColorClass,t.fontColorClass,t.cellClass],style:[t.cellStyle],attrs:{"hover-class":t.hover?"tn-hover":"","hover-stay-time":150},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},i=[]},"8bcc":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var n={tnListCell:e("e592").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"pagesD tn-safe-area-inset-bottom"},[e("v-uni-view",{staticClass:"tn-margin-left tn-margin-right",style:{paddingTop:t.vuex_custom_bar_height+5+"px"}},[e("v-uni-view",[e("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center tn-margin-bottom"},[e("v-uni-view",{staticClass:"justify-content-item"},[e("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-left"},[e("v-uni-view",{staticClass:"logo-pic tn-shadow"},[e("v-uni-view",{staticClass:"logo-image"},[e("v-uni-view",{staticClass:"tn-shadow-blur",staticStyle:{width:"110rpx",height:"110rpx","background-size":"cover",overflow:"hidden"},style:"background-image:url("+t.userInfo.avatar+");"})],1)],1),e("v-uni-view",{staticClass:"tn-padding-right"},[e("v-uni-view",{staticClass:"tn-padding-right tn-padding-left-sm"},[e("v-uni-text",{staticClass:"tn-color-white tn-text-xl tn-text-bold"},[t._v(t._s(t.userInfo.extendUserInfo.name))])],1),e("v-uni-view",{staticClass:"tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis"},[e("v-uni-text",{staticClass:"tn-color-gray",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.copyContant(t.userInfo.userId)}}},[t._v("ID: "+t._s(t.userInfo.userId))]),e("v-uni-text",{staticClass:"tn-color-gray--disabled tn-padding-left-xs tn-text-sm tn-icon-copy"})],1),e("v-uni-view",{staticClass:"tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis"},[e("v-uni-text",{staticClass:"tn-color-gray"},[t._v("邀请码: "+t._s(t.userInfo.extendUserInfo.inviteCode))]),e("v-uni-text",{staticClass:"tn-color-gray--disabled tn-padding-left-xs tn-text-sm tn-icon-copy",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.copyContant(t.userInfo.extendUserInfo.inviteCode)}}})],1)],1)],1)],1),e("v-uni-view",{staticClass:"justify-content-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tn("../set/set")}}},[e("v-uni-view",{staticClass:"tn-icon-install tn-color-gray",staticStyle:{"font-size":"50rpx",opacity:"0.5"}})],1)],1)],1),e("v-uni-view",{staticClass:"tn-margin-top-xl tn-padding-top-lg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tn("/pages/seabead/seabead")}}},[e("v-uni-view",{staticClass:"button-number tn-flex  tn-flex-col-center tn-shadow-blur"},[e("v-uni-image",{staticStyle:{width:"50px",height:"50px","margin-left":"20px"},attrs:{src:"/static/image/userCenter/haizhu.png"}}),e("v-uni-view",{staticClass:"tn-margin-left"},[e("v-uni-text",{staticClass:"tn-text-bold tn-text-xl",staticStyle:{color:"#F1C68E"}},[t._v("海珠")])],1),e("v-uni-view",{staticClass:"tn-margin-right tn-margin-left"},[e("v-uni-text",{staticClass:"tn-text-bold tn-text-xl",staticStyle:{padding:"10rpx 0",color:"#F1C68E","font-size":"20px"}},[t._v(t._s(t.userInfo.extendUserInfo.remainingBalance))])],1),e("v-uni-view",{staticClass:"tnwave waveAnimation"},[e("v-uni-view",{staticClass:"waveWrapperInner bgTop"},[e("v-uni-view",{staticClass:"wave waveTop",staticStyle:{"background-image":"url('https://resource.tuniaokj.com/images/wave/wave-2.png')"}})],1),e("v-uni-view",{staticClass:"waveWrapperInner bgMiddle"},[e("v-uni-view",{staticClass:"wave waveMiddle",staticStyle:{"background-image":"url('https://resource.tuniaokj.com/images/wave/wave-2.png')"}})],1),e("v-uni-view",{staticClass:"waveWrapperInner bgBottom"},[e("v-uni-view",{staticClass:"wave waveBottom",staticStyle:{"background-image":"url('https://resource.tuniaokj.com/images/wave/wave-1.png')"}})],1)],1)],1)],1),e("v-uni-view",{staticClass:"tn-flex tn-flex-wrap",staticStyle:{"margin-top":"10px"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tn("/pages/share/share")}}},[e("v-uni-view",{staticStyle:{width:"100%"}},[e("v-uni-view",{staticClass:"image-haibao tn-shadow-blur",staticStyle:{background:"url(https://kakabl.oss-cn-beijing.aliyuncs.com/kk/intivite.png) no-repeat center / contain",width:"100%",height:"100%"}},[e("v-uni-view",{staticClass:"image-position"})],1)],1)],1),e("v-uni-view",{staticClass:"box-shadow tn-margin-top-lg tn-padding-bottom-sm"},[e("v-uni-view",{staticClass:"tn-flex tn-flex-row-center tn-radius "},[e("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs tn-radius",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tn("../order/order")}}},[e("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[e("v-uni-view",{staticClass:"icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center"},[e("v-uni-view",{staticClass:"tn-icon-order-fill  kk-my-order-icon"})],1),e("v-uni-view",{staticClass:"tn-text-center"},[e("v-uni-text",{staticClass:"tn-text-ellipsis  kk-my-order-text"},[t._v("待付款")])],1)],1)],1),e("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs tn-radius",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tn("../pay/pay")}}},[e("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[e("v-uni-view",{staticClass:"icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center"},[e("v-uni-view",{staticClass:"tn-icon-server-fill  kk-my-order-icon"})],1),e("v-uni-view",{staticClass:"tn-text-center"},[e("v-uni-text",{staticClass:"tn-text-ellipsis  kk-my-order-text"},[t._v("待发货")])],1)],1)],1),e("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs tn-radius",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tn("")}}},[e("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[e("v-uni-view",{staticClass:"icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center"},[e("v-uni-view",{staticClass:"tn-icon-cube  kk-my-order-icon"})],1),e("v-uni-view",{staticClass:"tn-text-center"},[e("v-uni-text",{staticClass:"tn-text-ellipsis  kk-my-order-text"},[t._v("待收货")])],1)],1)],1),e("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs tn-radius"},[e("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[e("v-uni-view",{staticClass:"icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center"},[e("v-uni-view",{staticClass:"tn-icon-location-fill  kk-my-order-icon"})],1),e("v-uni-view",{staticClass:"tn-text-center"},[e("v-uni-text",{staticClass:"tn-text-ellipsis  kk-my-order-text"},[t._v("已完成")])],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"box-shadow tn-margin-top-lg tn-padding-bottom-sm"},[e("v-uni-view",{staticClass:"tn-margin-top-sm tn-padding-left-lg intive-team tn-text-bold tn-text-lg tn-color-white"},[t._v("我的服务")]),e("v-uni-view",{staticClass:" tn-margin-top-sm tn-flex tn-flex-wrap tn-flex-col-center tn-flex-row-between tn-margin-left tn-margin-right"},[e("v-uni-view",{staticClass:"intive-item-content tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between kk-my-cen-bg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tn("/pages/team/team")}}},[e("v-uni-view",{staticClass:" tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-left"},[e("v-uni-view",{staticClass:"intive-item-left-content"},[e("v-uni-view",{staticClass:" tn-text-xxl"},[t._v("我的团队")]),e("v-uni-view",{staticClass:"intive-item-bottom-text tn-padding-top-xs kk-my-cen-desc"},[t._v("MY TEAM")])],1)],1),e("v-uni-view",{staticClass:"intive-item-content-right"},[e("v-uni-view",{staticClass:"tn-icon-team-fill"})],1)],1),e("v-uni-view",{staticClass:"intive-item-content tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between kk-my-cen-bg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tn("/pages/share/share")}}},[e("v-uni-view",{staticClass:" tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-left"},[e("v-uni-view",{staticClass:"intive-item-left-content"},[e("v-uni-view",{staticClass:" tn-text-xxl"},[t._v("我的邀请")]),e("v-uni-view",{staticClass:"intive-item-bottom-text tn-padding-top-xs kk-my-cen-desc"},[t._v("INTIVE FRIENDS")])],1)],1),e("v-uni-view",{staticClass:"intive-item-content-right"},[e("v-uni-view",{staticClass:"intive-item-content-right--icon"},[e("v-uni-view",{staticClass:"tn-icon-vip-fill"})],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"box-shadow tn-margin-top tn-margin-bottom-lg tn-padding-top-sm tn-padding-bottom-sm"},[e("tn-list-cell",{attrs:{hover:!0,unlined:!0,radius:!0,fontSize:30,backgroundColor:"#FFFFFF00"}},[e("v-uni-button",{staticClass:"tn-flex tn-flex-col-center tn-button--clear-style",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tn("/pages/realName/realName")}}},[e("v-uni-view",{staticClass:"icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-white"},[e("v-uni-view",{staticClass:"tn-icon-safe"})],1),e("v-uni-view",{staticClass:"tn-flex tn-flex-row-between",staticStyle:{width:"100%"}},[e("v-uni-view",{staticClass:"tn-margin-left-sm tn-color-white"},[t._v("实名认证")]),e("v-uni-view",{staticClass:"tn-color-gray--dark tn-icon-right"})],1)],1)],1),e("tn-list-cell",{attrs:{hover:!0,unlined:!0,radius:!0,fontSize:30,backgroundColor:"#FFFFFF00"}},[e("v-uni-button",{staticClass:"tn-flex tn-flex-col-center tn-button--clear-style",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tn("/pages/address/address")}}},[e("v-uni-view",{staticClass:"icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-white"},[e("v-uni-view",{staticClass:"tn-icon-empty-address"})],1),e("v-uni-view",{staticClass:"tn-flex tn-flex-row-between",staticStyle:{width:"100%"}},[e("v-uni-view",{staticClass:"tn-margin-left-sm tn-color-white"},[t._v("地址管理")]),e("v-uni-view",{staticClass:"tn-color-gray--dark tn-icon-right"})],1)],1)],1),e("tn-list-cell",{attrs:{hover:!0,unlined:!0,radius:!0,fontSize:30,backgroundColor:"#FFFFFF00"}},[e("v-uni-button",{staticClass:"tn-flex tn-flex-col-center tn-button--clear-style",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.noflished()}}},[e("v-uni-view",{staticClass:"icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-white"},[e("v-uni-view",{staticClass:"tn-icon-align-right"})],1),e("v-uni-view",{staticClass:"tn-flex tn-flex-row-between",staticStyle:{width:"100%"}},[e("v-uni-view",{staticClass:"tn-margin-left-sm tn-color-white"},[t._v("战神计划")]),e("v-uni-view",{staticClass:"tn-color-gray--dark tn-icon-right"})],1)],1)],1),1===t.userInfo.extendUserInfo.isCardVendor?e("tn-list-cell",{attrs:{hover:!0,unlined:!0,radius:!0,fontSize:30,backgroundColor:"#FFFFFF00"}},[e("v-uni-button",{staticClass:"tn-flex tn-flex-col-center tn-button--clear-style",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tn("/pages/set/set_store")}}},[e("v-uni-view",{staticClass:"icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-white"},[e("v-uni-view",{staticClass:"tn-icon-install"})],1),e("v-uni-view",{staticClass:"tn-flex tn-flex-row-between",staticStyle:{width:"100%"}},[e("v-uni-view",{staticClass:"tn-margin-left-sm tn-color-white"},[t._v("小店信息")]),e("v-uni-view",{staticClass:"tn-color-gray--dark tn-icon-right"})],1)],1)],1):t._e(),e("tn-list-cell",{attrs:{hover:!0,unlined:!0,radius:!0,fontSize:30,backgroundColor:"#FFFFFF00"}},[e("v-uni-button",{staticClass:"tn-flex tn-flex-col-center tn-button--clear-style",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tn("/pages/aboutus/aboutus")}}},[e("v-uni-view",{staticClass:"icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-white"},[e("v-uni-view",{staticClass:"tn-icon-tip"})],1),e("v-uni-view",{staticClass:"tn-flex tn-flex-row-between",staticStyle:{width:"100%"}},[e("v-uni-view",{staticClass:"tn-margin-left-sm tn-color-white"},[t._v("关于我们")]),e("v-uni-view",{staticClass:"tn-color-gray--dark tn-icon-right"})],1)],1)],1),e("tn-list-cell",{attrs:{hover:!0,unlined:!0,radius:!0,fontSize:30,backgroundColor:"#FFFFFF00"}},[e("v-uni-button",{staticClass:"tn-flex tn-flex-col-center tn-button--clear-style",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.lougout()}}},[e("v-uni-view",{staticClass:"icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-white"},[e("v-uni-view",{staticClass:"tn-icon-logout"})],1),e("v-uni-view",{staticClass:"tn-flex tn-flex-row-between",staticStyle:{width:"100%"}},[e("v-uni-view",{staticClass:"tn-margin-left-sm tn-color-white"},[t._v("安全退出")]),e("v-uni-view",{staticClass:"tn-color-gray--dark tn-icon-right"})],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"tn-text-center tn-margin-top-xl tn-padding-bottom-xl"},[e("v-uni-view",{staticStyle:{opacity:"0.5"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navTuniaoUI.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"tn-color-blue--dark tn-padding-xs"},[t._v("卡卡部落")]),e("v-uni-text",{staticClass:"tn-color-gray"},[t._v("提供技术支持")])],1)],1),e("wx-user-info-modal",{on:{updated:function(a){arguments[0]=a=t.$handleEvent(a),t.updatedUserInfoEvent.apply(void 0,arguments)}},model:{value:t.showAuthorizationModal,callback:function(a){t.showAuthorizationModal=a},expression:"showAuthorizationModal"}}),e("v-uni-view",{staticClass:"tn-tabbar-height"})],1)},o=[]},"937a":function(t,a,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("a9e3");var i=n(e("c08d")),o={mixins:[i.default],name:"tn-list-cell",props:{index:{type:[Number,String],default:"0"},padding:{type:String,default:""},arrow:{type:Boolean,default:!1},arrowRight:{type:Boolean,default:!0},hover:{type:Boolean,default:!1},unlined:{type:Boolean,default:!1},lineLeft:{type:Boolean,default:!0},lineRight:{type:Boolean,default:!0},radius:{type:Boolean,default:!1}},computed:{cellClass:function(){var t="";return this.arrow&&(t+=" tn-list-cell--arrow",this.arrowRight||(t+=" tn-list-cell--arrow--none-right")),this.unlined?t+=" tn-list-cell--unlined":(this.lineLeft&&(t+=" tn-list-cell--line-left"),this.lineRight&&(t+=" tn-list-cell--line-right")),this.radius&&(t+=" tn-list-cell--radius"),t},cellStyle:function(){var t={};return this.backgroundColorStyle&&(t.backgroundColor=this.backgroundColorStyle),this.fontColorStyle&&(t.color=this.fontColorStyle),this.fontSize&&(t.fontSize=this.fontSize+this.fontUnit),this.padding&&(t.padding=this.padding),t}},data:function(){return{}},methods:{handleClick:function(){this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}}};a.default=o},"99ff":function(t,a,e){"use strict";var n=e("e761"),i=e.n(n);i.a},a2ef:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-list-cell[data-v-52ee05d6]{position:relative;width:100%;box-sizing:border-box;background-color:#fff;color:#080808;font-size:%?28?%;padding:%?26?% %?30?%}.tn-list-cell--radius[data-v-52ee05d6]{border-radius:%?12?%;overflow:hidden}.tn-list-cell--arrow[data-v-52ee05d6]::before{content:" ";position:absolute;top:50%;right:%?30?%;width:%?20?%;height:%?20?%;margin-top:%?-12?%;border-width:%?4?% %?4?% 0 0;border-color:#e6e6e6;border-style:solid;-webkit-transform:matrix(.5,.5,-.5,.5,0,0);transform:matrix(.5,.5,-.5,.5,0,0)}.tn-list-cell--arrow--none-right[data-v-52ee05d6]::before{right:0!important}.tn-list-cell[data-v-52ee05d6]::after{content:" ";position:absolute;bottom:0;right:0;left:0;pointer-events:none;border-bottom:1px solid rgba(0,0,0,.1);-webkit-transform:scaleY(.5) translateZ(0);transform:scaleY(.5) translateZ(0);-webkit-transform-origin:0 100%;transform-origin:0 100%}.tn-list-cell--line-left[data-v-52ee05d6]::after{left:%?30?%!important}.tn-list-cell--line-right[data-v-52ee05d6]::after{right:%?30?%!important}.tn-list-cell--unlined[data-v-52ee05d6]::after{border-bottom:0!important}',""]),t.exports=a},abbf:function(t,a,e){"use strict";e.r(a);var n=e("8bcc"),i=e("ad78");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("99ff");var s=e("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"4dfa3e5c",null,!1,n["a"],void 0);a["default"]=r.exports},ac1b:function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={options:{virtualHost:!0},props:{value:{type:Boolean,default:!1}},data:function(){return{openModal:!1,userInfo:{avatar:"",nickname:""}}},watch:{value:{handler:function(t){this.openModal=t},immediate:!0}},methods:{chooseAvatarEvent:function(t){this.userInfo.avatar=t.detail.avatarUrl},submitUserInfo:function(){if(!this.userInfo.avatar||!this.userInfo.nickname)return uni.showToast({icon:"none",title:"请选择头像和输入用户信息"});this.$emit("updated",this.userInfo)},closeModal:function(){this.$emit("input",!1)}}};a.default=n},ad78:function(t,a,e){"use strict";e.r(a);var n=e("2ce2"),i=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},adf9:function(t,a,e){var n=e("a2ef");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("2cc6d169",n,!0,{sourceMap:!1,shadowMode:!1})},c08d:function(t,a,e){e("a9e3"),t.exports={data:function(){},props:{backgroundColor:{type:String,default:""},fontColor:{type:String,default:""},fontSize:{type:Number,default:0},fontUnit:{type:String,default:"rpx"}},computed:{backgroundColorStyle:function(){return this.$t.color.getBackgroundColorStyle(this.backgroundColor)},backgroundColorClass:function(){return this.$t.color.getBackgroundColorInternalClass(this.backgroundColor)},fontColorStyle:function(){return this.$t.color.getFontColorStyle(this.fontColor)},fontColorClass:function(){return this.$t.color.getFontColorInternalClass(this.fontColor)},fontSizeStyle:function(){return this.$t.string.getLengthUnitValue(this.fontSize,this.fontUnit)}},methods:{}}},c237:function(t,a,e){"use strict";var n=e("2acf"),i=e.n(n);i.a},c681:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */@font-face{font-family:tuniaoFont; /* Project id 3784643 */src:url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAN8AAsAAAAAB4gAAAMvAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDBgqCQIIdATYCJAMMCwgABCAFhH8HPRuYBiMRpmvPIfurAzsYPj7DCVbrRAmElfXCs4V6xacO8aHO69VXu54tTy8h0hcJ7ufgieY+3+xscrn9B8wKQQFBywplLZCw9SwcOyZ5pKsoAQAbcICJTr7AjPPqr06NRkeIAemFpXv8cje1+/LkuLvD789WJZUANjOe9F76qptDOSMUui/Ua0WQKpZGXaqf5hHZdAD6x8tRJtRKtQd7j5UKkk6lWywYkGADCZBnGLugJd6CAI4GOjH956Ep4k7imdNkYTGFAkm2nJyPrBNwA7YhWwgQ/K4bLXITD8wl8xxuBN+XwyYJwOAp5jFjOwNbPNwd3l3WiyFAv3sCBLjcAB6gQM3GjLLSbJpDo1ANiqsiFiX7WAQzqTcMA06j/pb/eAbEx8yMAaAChg3sDjs6COwub8IAoAD4PEZkA7iAZClPKdicmJLc2OiZcQC3cV613sc3Ab9W7YItQtio9YgdKGjgr+ANlbg5gPvXFacv8IyvKTH4pcjV7VIcfnuIAUd3VCbxcCIKj++rvr/hpx/iwxd4/5mxDXeILbBp2+ByMIlGMuQEU3gjiVaMcXk8Dn2gWo5wuRwuIldLRqRwWogvmCRXE9/kSvrVQP4iFDVWRSbRakMk/AtcBYVpO6rpah1V9J/m/Wt+q8WfsOV+S5KFTGD5dwW9KFstZUs5smuYK3V495zwUG+r/Izf0PWtbWj/HUQsAL9u+cGK8NCiAgRnaRJ49fqljrxWc4PaKs4pQwBlMLUeAzgcEGLakvg5nCZ3zgTBkZzAEEUuFEeJyMrq4BGhGT6OPjiqGd4eIZkLKGKjgTKuAAgpPIAhjmdQUngnsrJdeKTxBz4pkgjHjJQeFqFMXv8PQqg0QP+F2cbAdoHqFmaM52jYlcbNoeTq4CtPkjzHAE1Zl0QvFEjGmp9fY6vKwBI9kOvIuQhJ4kJWy0k1dVXFVXcpbfTmIIRKA/RfmG0M7G1T3cKM8VwMXGlEnR1KY0uU+CTJnM1ODk1ZdxJdSOjYdGOp+TW2k6szsNg8qIvIuQipetFCVstpQCB1lcXHXUl5ZOpfdBvgMI9QMaJi8TZdzLS36K8/ueDZOWMAAA==") format("woff2"),url(//at.alicdn.com/t/c/font_3784643_5jru9pe5fad.woff?t=1669045092678) format("woff"),url(//at.alicdn.com/t/c/font_3784643_5jru9pe5fad.ttf?t=1669045092678) format("truetype")}[class*="tn-icon-"][data-v-327aab3f]{font-family:tuniaoFont!important;font-style:normal;-webkit-font-smoothing:antialiased;text-align:center;text-decoration:none}.tn-icon-close[data-v-327aab3f]:before{content:"\\e74d"}.tn-icon-camera-fill[data-v-327aab3f]:before{content:"\\e75d"}.wx-authorization-modal[data-v-327aab3f]{position:fixed;left:0;top:0;width:100vw;height:100vh;z-index:99998}.wx-authorization-modal uni-view[data-v-327aab3f]{box-sizing:border-box}.wx-authorization-modal .image[data-v-327aab3f]{width:100%;height:100%;border-radius:inherit}.wx-authorization-modal .wam[data-v-327aab3f]{\r\n  /* mask */\r\n  /* close-btn */\r\n  /* wrapper */\r\n  /* title */\r\n  /* sub-title */\r\n  /* 头像选择 */\r\n  /* 昵称 */\r\n  /* 保存按钮 */}.wx-authorization-modal .wam__mask[data-v-327aab3f]{position:absolute;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);opacity:0;-webkit-animation:showMask-data-v-327aab3f .25s ease .1s forwards;animation:showMask-data-v-327aab3f .25s ease .1s forwards}.wx-authorization-modal .wam__close-btn[data-v-327aab3f]{position:absolute;top:%?30?%;right:%?30?%;z-index:99999}.wx-authorization-modal .wam__wrapper[data-v-327aab3f]{position:absolute;left:0;bottom:0;width:100%;background-color:#fff;border-radius:%?20?% %?20?% %?0?% %?0?%;padding:%?40?%;padding-top:%?60?%;padding-bottom:%?40?%;padding-bottom:calc(constant(safe-area-inset-bottom) + %?40?%);padding-bottom:calc(env(safe-area-inset-bottom) + %?40?%);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-animation:showWrapper-data-v-327aab3f .25s ease .1s forwards;animation:showWrapper-data-v-327aab3f .25s ease .1s forwards;z-index:99999}.wx-authorization-modal .wam__title[data-v-327aab3f]{font-size:%?34?%}.wx-authorization-modal .wam__sub-title[data-v-327aab3f]{font-size:%?26?%;color:#aaa;margin-top:%?16?%;padding-bottom:%?30?%}.wx-authorization-modal .wam__avatar[data-v-327aab3f]{width:100%;margin-top:%?30?%;display:flex;align-items:center;justify-content:center}.wx-authorization-modal .wam__avatar .button-shadow[data-v-327aab3f]{border:%?8?% solid hsla(0,0%,100%,.05);box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.15);border-radius:50%}.wx-authorization-modal .wam__avatar .button[data-v-327aab3f]{position:relative;width:%?160?%;height:%?160?%;border-radius:50%;overflow:visible;background-image:repeating-linear-gradient(45deg,#e4e9ec,#f8f7f8);color:#fff;background-color:initial;padding:0;margin:0;font-size:inherit;line-height:inherit;border:none}.wx-authorization-modal .wam__avatar .button[data-v-327aab3f]::after{border:none}.wx-authorization-modal .wam__avatar .avatar__empty[data-v-327aab3f], .wx-authorization-modal .wam__avatar .avatar__image[data-v-327aab3f]{width:100%;height:100%;border-radius:inherit}.wx-authorization-modal .wam__avatar .avatar--icon[data-v-327aab3f]{position:absolute;right:%?-10?%;bottom:%?-6?%;width:%?60?%;height:%?60?%;background-color:#1d2541;color:#fff;border-radius:50%;border:%?6?% solid #fff;line-height:1;font-size:%?36?%;display:flex;align-items:center;justify-content:center}.wx-authorization-modal .wam__nickname[data-v-327aab3f]{margin-top:%?40?%}.wx-authorization-modal .wam__nickname .nickname__data[data-v-327aab3f]{margin-top:%?16?%;width:100%;padding:%?26?% %?20?%;border-radius:%?10?%;background-color:#f8f7f8}.wx-authorization-modal .wam__nickname .nickname__data .input[data-v-327aab3f]{color:#080808}.wx-authorization-modal .wam__submit-btn[data-v-327aab3f]{width:100%;background-color:#05c160;color:#fff;margin-top:%?60?%;margin-bottom:10vh;border-radius:%?10?%;padding:%?25?%;font-size:%?32?%;display:flex;align-items:center;justify-content:center}.wx-authorization-modal .wam__submit-btn.disabled[data-v-327aab3f]{background-color:#e6e6e6}.tn-btn-hover-class[data-v-327aab3f]{box-shadow:inset %?10?% %?2?% %?40?% %?0?% rgba(0,0,0,.05)}@-webkit-keyframes showMask-data-v-327aab3f{0%{opacity:0}100%{opacity:1}}@keyframes showMask-data-v-327aab3f{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes showWrapper-data-v-327aab3f{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes showWrapper-data-v-327aab3f{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}',""]),t.exports=a},c9d4:function(t,a,e){"use strict";e.r(a);var n=e("937a"),i=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},d18d:function(t,a,e){"use strict";e.r(a);var n=e("d25f"),i=e("48b6");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("c237");var s=e("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"327aab3f",null,!1,n["a"],void 0);a["default"]=r.exports},d25f:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.openModal?e("v-uni-view",{staticClass:"wx-authorization-modal"},[e("v-uni-view",{staticClass:"wam__mask",on:{touchmove:function(a){a.preventDefault(),arguments[0]=a=t.$handleEvent(a)},click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.closeModal.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"wam__wrapper"},[e("v-uni-view",{staticClass:"wam__close-btn",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.closeModal.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"tn-icon-close"})],1),e("v-uni-view",{staticClass:"wam__title"},[t._v("获取您的昵称、头像")]),e("v-uni-view",{staticClass:"wam__sub-title"},[t._v("获取用户头像、昵称，主要用于向用户提供具有辨识度的用户中心界面")]),e("v-uni-view",{staticClass:"wam__avatar"},[e("v-uni-view",{staticClass:"button-shadow"},[e("v-uni-button",{staticClass:"button",attrs:{"open-type":"chooseAvatar"},on:{chooseavatar:function(a){arguments[0]=a=t.$handleEvent(a),t.chooseAvatarEvent.apply(void 0,arguments)}}},[t.userInfo.avatar?e("v-uni-view",{staticClass:"avatar__image"},[e("v-uni-image",{staticClass:"image",attrs:{src:t.userInfo.avatar,mode:"aspectFill"}})],1):e("v-uni-view",{staticClass:"avatar__empty"},[e("v-uni-image",{staticClass:"image",attrs:{src:"https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668928062708-assets/web-upload/764843cf-055a-4cb6-b5d3-dca528b33fd4.jpeg",mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"avatar--icon"},[e("v-uni-view",{staticClass:"tn-icon-camera-fill"})],1)],1)],1)],1),e("v-uni-view",{staticClass:"wam__nickname"},[e("v-uni-view",{staticClass:"nickname__data"},[e("v-uni-input",{staticClass:"input",attrs:{type:"nickname",placeholder:"请输入昵称","placeholder-style":"color: #AAAAAA;"},model:{value:t.userInfo.nickname,callback:function(a){t.$set(t.userInfo,"nickname",a)},expression:"userInfo.nickname"}})],1)],1),e("v-uni-view",{staticClass:"wam__submit-btn",class:[{disabled:!t.userInfo.avatar||!t.userInfo.nickname}],attrs:{"hover-class":"tn-btn-hover-class","hover-stay-time":150},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.submitUserInfo.apply(void 0,arguments)}}},[t._v("保 存")])],1)],1):t._e()},i=[]},e592:function(t,a,e){"use strict";e.r(a);var n=e("84e8"),i=e("c9d4");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("ea9a");var s=e("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"52ee05d6",null,!1,n["a"],void 0);a["default"]=r.exports},e761:function(t,a,e){var n=e("ec70");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("0cbca20b",n,!0,{sourceMap:!1,shadowMode:!1})},ea9a:function(t,a,e){"use strict";var n=e("adf9"),i=e.n(n);i.a},ec70:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.pagesD[data-v-4dfa3e5c]{max-height:100vh}\r\n/* 底部安全边距 start*/.tn-tabbar-height[data-v-4dfa3e5c]{min-height:%?60?%;height:calc(%?80?% + env(safe-area-inset-bottom) / 2);height:calc(%?80?% + constant(safe-area-inset-bottom))}\r\n/* 自定义导航栏内容 start */.custom-nav[data-v-4dfa3e5c]{height:100%}.custom-nav__back[data-v-4dfa3e5c]{margin:auto %?5?%;font-size:%?40?%;margin-right:%?10?%;flex-basis:5%;width:%?100?%;position:absolute}\r\n/* 自定义导航栏内容 end */\r\n/* 用户头像 start */.logo-image[data-v-4dfa3e5c]{width:%?110?%;height:%?110?%;position:relative;overflow:hidden;border-radius:50%}.logo-pic[data-v-4dfa3e5c]{background-size:cover;background-repeat:no-repeat;background-position:top;border:%?8?% solid hsla(0,0%,100%,.05);box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.15);border-radius:50%;overflow:hidden}\r\n/* 页面阴影 start*/.box-shadow[data-v-4dfa3e5c]{border-radius:%?15?%;border:%?1?% solid #494b51;background-color:hsla(0,0%,100%,.08)}\r\n/* 页面阴影 end*/\r\n/* 图标容器12 start */.icon12__item[data-v-4dfa3e5c]{width:30%;background-color:#fff;border-radius:%?10?%;padding:%?30?%;margin:%?20?% %?10?%;-webkit-transform:scale(1);transform:scale(1);transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear;-webkit-transform-origin:center center;transform-origin:center center}.icon12__item--icon[data-v-4dfa3e5c]{width:%?100?%;height:%?100?%;font-size:%?50?%;border-radius:%?20?%;margin-bottom:%?38?%;position:relative;z-index:1}.icon12__item--icon[data-v-4dfa3e5c]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%}\r\n/* 图标容器1 start */.icon1__item[data-v-4dfa3e5c]{background-color:#fff;border-radius:%?10?%;padding:%?30?%;margin:%?20?% %?10?%;-webkit-transform:scale(1);transform:scale(1);transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear;-webkit-transform-origin:center center;transform-origin:center center}.icon1__item--icon[data-v-4dfa3e5c]{width:%?40?%;height:%?40?%;font-size:%?40?%;border-radius:50%;position:relative;z-index:1}.icon1__item--icon[data-v-4dfa3e5c]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%}\r\n/* 图标容器1 end */\r\n/* 背景波浪高度 */.button-number[data-v-4dfa3e5c]{width:100%;height:%?150?%;border-radius:%?15?%;position:relative;z-index:1;border:%?1?% solid #494b51;background:linear-gradient(-120deg,rgba(62,68,90,.10196078431372549),rgba(49,55,74,.10196078431372549),rgba(43,48,66,.10196078431372549),rgba(38,43,60,.10196078431372549))}\r\n/* 动态背景波浪*/@-webkit-keyframes move_wave-data-v-4dfa3e5c{0%{-webkit-transform:translateX(0) translateZ(0) scaleY(1);transform:translateX(0) translateZ(0) scaleY(1)}50%{-webkit-transform:translateX(-25%) translateZ(0) scaleY(1);transform:translateX(-25%) translateZ(0) scaleY(1)}100%{-webkit-transform:translateX(-50%) translateZ(0) scaleY(1);transform:translateX(-50%) translateZ(0) scaleY(1)}}@keyframes move_wave-data-v-4dfa3e5c{0%{-webkit-transform:translateX(0) translateZ(0) scaleY(1);transform:translateX(0) translateZ(0) scaleY(1)}50%{-webkit-transform:translateX(-25%) translateZ(0) scaleY(1);transform:translateX(-25%) translateZ(0) scaleY(1)}100%{-webkit-transform:translateX(-50%) translateZ(0) scaleY(1);transform:translateX(-50%) translateZ(0) scaleY(1)}}.tnwave[data-v-4dfa3e5c]{overflow:hidden;position:absolute;left:0;right:0;bottom:0;top:0;margin:auto;z-index:-1;border-radius:%?15?%}.waveWrapperInner[data-v-4dfa3e5c]{position:absolute;width:100%;overflow:hidden;height:100%}.wave[data-v-4dfa3e5c]{position:absolute;left:0;width:200%;height:100%;background-repeat:repeat-x;background-position:0 bottom;-webkit-transform-origin:center bottom;transform-origin:center bottom}.bgTop[data-v-4dfa3e5c]{opacity:.1}.waveTop[data-v-4dfa3e5c]{background-size:50% 45px}.waveAnimation .waveTop[data-v-4dfa3e5c]{-webkit-animation:move_wave-data-v-4dfa3e5c 4s linear infinite;animation:move_wave-data-v-4dfa3e5c 4s linear infinite}.bgMiddle[data-v-4dfa3e5c]{opacity:.2}.waveMiddle[data-v-4dfa3e5c]{background-size:50% 40px}.waveAnimation .waveMiddle[data-v-4dfa3e5c]{-webkit-animation:move_wave-data-v-4dfa3e5c 3.5s linear infinite;animation:move_wave-data-v-4dfa3e5c 3.5s linear infinite}.bgBottom[data-v-4dfa3e5c]{opacity:.3}.waveBottom[data-v-4dfa3e5c]{background-size:50% 35px}.waveAnimation .waveBottom[data-v-4dfa3e5c]{-webkit-animation:move_wave-data-v-4dfa3e5c 2s linear infinite;animation:move_wave-data-v-4dfa3e5c 2s linear infinite}.image-haibao[data-v-4dfa3e5c]{background-size:cover;background-repeat:no-repeat;background-position:top;border-radius:8px}.image-position[data-v-4dfa3e5c]{padding:42px 0;font-size:16px;font-weight:300;position:relative}.intive-item-content-right--icon[data-v-4dfa3e5c]{position:absolute;right:18px;top:34px;font-size:50px;width:37px;height:37px;line-height:20px;color:#7444f8}.intive-item-content[data-v-4dfa3e5c]{width:48%;margin:5px 0;padding:13px 10px;border-radius:5px;position:relative;z-index:1}.intive-item-left-content[data-v-4dfa3e5c]{font-size:10px}.intive-item-bottom-text[data-v-4dfa3e5c]{margin-top:1px;font-weight:700}.intive-item-content[data-v-4dfa3e5c]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://resource.tuniaokj.com/images/cool_bg_image/3.png)}.kk-my-cen-desc[data-v-4dfa3e5c]{color:hsla(0,0%,100%,.9)}.kk-my-cen-bg[data-v-4dfa3e5c]{background:linear-gradient(90deg,#f9c7d2,#9e99eb);color:#7444f8}.kk-my-order-icon[data-v-4dfa3e5c]{font-size:40px;color:#c3aff9}.kk-my-order-text[data-v-4dfa3e5c]{color:hsla(0,0%,100%,.9)}.icon12__item--icon[data-v-4dfa3e5c]{margin-bottom:5px!important}',""]),t.exports=a}}]);
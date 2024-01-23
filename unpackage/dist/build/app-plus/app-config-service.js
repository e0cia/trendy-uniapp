
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/index/sea","pages/index/tribe","pages/index/my","pages/product/product","pages/details/details","pages/box/box","pages/order/order","pages/set/set","pages/series/series","pages/address/address","pages/edit/edit","pages/member/member","pages/delivery/delivery","pages/help/help","pages/login/login","pages/forget/forget","pages/share/share","pages/pay/pay","pages/product/productList","pages/realName/realName","pages/seabead/seabead","pages/team/team","pages/cardvendor/cardvendor","pages/cardvendor/giveuser","pages/policy/privacyPolicy","pages/policy/userAgreement","pages/aboutus/aboutus","pages/rankingList/rankingList"],"window":{"navigationStyle":"custom","navigationBarTextStyle":"white","navigationBarTitleText":"卡卡部落","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"borderStyle":"white","backgroundColor":"#20202d","color":"#ffffff","selectedColor":"#8470c6","list":[{"text":"商店","pagePath":"pages/index/index","iconPath":"static/image/tabbar/mall.png","selectedIconPath":"static/image/tabbar/mall_select.png"},{"text":"海底","pagePath":"pages/index/sea","iconPath":"static/image/tabbar/sea.png","selectedIconPath":"static/image/tabbar/sea_select.png"},{"text":"部落","pagePath":"pages/index/tribe","iconPath":"static/image/tabbar/bl.png","selectedIconPath":"static/image/tabbar/bl_select.png"},{"text":"我的","pagePath":"pages/index/my","iconPath":"static/image/tabbar/my.png","selectedIconPath":"static/image/tabbar/my_select.png"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"卡卡部落","compilerVersion":"3.98","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"卡卡部落","enablePullDownRefresh":true}},{"path":"/pages/index/sea","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"海底世界"}},{"path":"/pages/index/tribe","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"部落世界"}},{"path":"/pages/index/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/product/product","meta":{},"window":{"navigationBarTitleText":"产品详情"}},{"path":"/pages/details/details","meta":{},"window":{"navigationBarTitleText":"支付页面"}},{"path":"/pages/box/box","meta":{},"window":{"navigationBarTitleText":"模型效果"}},{"path":"/pages/order/order","meta":{},"window":{"navigationBarTitleText":"发货订单"}},{"path":"/pages/set/set","meta":{},"window":{"navigationBarTitleText":"个人信息"}},{"path":"/pages/series/series","meta":{},"window":{"navigationBarTitleText":"手办系列"}},{"path":"/pages/address/address","meta":{},"window":{"navigationBarTitleText":"收货地址"}},{"path":"/pages/edit/edit","meta":{},"window":{"navigationBarTitleText":"新增地址"}},{"path":"/pages/member/member","meta":{},"window":{"navigationBarTitleText":"会员权益"}},{"path":"/pages/delivery/delivery","meta":{},"window":{"navigationBarTitleText":"快递物流"}},{"path":"/pages/help/help","meta":{},"window":{"navigationBarTitleText":"常见问题"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"注册登录"}},{"path":"/pages/forget/forget","meta":{},"window":{"navigationBarTitleText":"忘记密码"}},{"path":"/pages/share/share","meta":{},"window":{"navigationBarTitleText":"邀请好友"}},{"path":"/pages/pay/pay","meta":{},"window":{"navigationBarTitleText":"我的U币"}},{"path":"/pages/product/productList","meta":{},"window":{"navigationBarTitleText":"卡卡精选"}},{"path":"/pages/realName/realName","meta":{},"window":{"navigationBarTitleText":"实名认证"}},{"path":"/pages/seabead/seabead","meta":{},"window":{"navigationBarTitleText":"我的海珠"}},{"path":"/pages/team/team","meta":{},"window":{"navigationBarTitleText":"我的团队"}},{"path":"/pages/cardvendor/cardvendor","meta":{},"window":{"navigationBarTitleText":"战神计划"}},{"path":"/pages/cardvendor/giveuser","meta":{},"window":{"navigationBarTitleText":"战神计划"}},{"path":"/pages/policy/privacyPolicy","meta":{},"window":{"navigationBarTitleText":"隐私协议"}},{"path":"/pages/policy/userAgreement","meta":{},"window":{"navigationBarTitleText":"用户协议"}},{"path":"/pages/aboutus/aboutus","meta":{},"window":{"navigationBarTitleText":"关于我们"}},{"path":"/pages/rankingList/rankingList","meta":{},"window":{"navigationBarTitleText":"邀请排名"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
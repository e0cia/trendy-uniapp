# lgen-intercept

> 基于 uni-app API拦截器 <a href="https://uniapp.dcloud.io/api/interceptor.html" target="_blank">addInterceptor</a> 实现的兼容全端的全局登录拦截，使用简单。

* 跳转到登录页面时会携带目标页面的地址和参数，登录后可直接跳转到目标页面。
* 安卓APP、微信小程序、H5亲测有效，其他平台自行测试。

**注意**：（uni.addInterceptor官方提示）拦截uni.switchTab本身没有问题。但是在微信小程序端点击tabbar的底层逻辑并不是触发uni.switchTab。所以误认为拦截无效，此类场景的解决方案是在tabbar页面的页面生命周期onShow中处理。

### 使用介绍

1. 使用 HBuilderx 导入插件，在 App.vue 中引入，在 onLaunch 应用生命周期中调用

```
import lgen_intercept from '@/uni_modules/lgen-intercept/js_sdk/lgen-intercept.js'

export default {
	onLaunch: function(e) {
		lgen_intercept(e)
	}
}
```

2. 在项目根目录下创建 lgen-config.js 配置文件，写入以下配置，下列对象的键值根据自己实际情况设置

```
export default {
	// 黑白名单只能二选一，可配置页面路径 或 正则表达式规则
	
	// 白名单，不需要登录的页面路径
	/* whiteList:[
		'/pages/tabPage/index',
		'/pages/login/login',
		{'pattern':RegExp(/register/)}
	], */
	
	// 黑名单，需要登录的页面路径
	blackList:[
		'/pages/tabPage/center',
		{'pattern':RegExp(/detail/)}
	],
	
	// setStorageSync 设置本地存储的用户登录标识
	uInfo:'uInfo',
	
	// 登录页面地址，用于未登录时跳转
	loginPath:'/pages/login/login',
	
	// 点击跳转到需要登录的页面时，未登录状态下是否跳转到登录页面，true | false
	toLogin:true
}
```

3. 在登录页面（如：login.vue）点击登录成功后根据条件跳转到目标页面

```
export default {
	data(){
		return{
			nextPath:'' //登录成功跳转地址
		}
	},
	onLoad(option) {
		if(option.path){
			this.nextPath=decodeURIComponent(option.path);
		}
	},
	methods:{
		// 登录后跳转到目标页面
		submitBack(){
			// uInfo 与 lgen-config.js 配置文件中 uInfo 的值一致，自行设置
			uni.setStorageSync('uInfo','aa');
			
			if(!this.nextPath){
				// 自定义目标地址为空时跳转
				uni.switchTab({
					url:'/pages/tabPage/index'
				})
			}else if(this.nextPath.includes('tabPage')){
				// tabPage 是 tab 页面所在文件夹，根据实际情况设置
				uni.switchTab({
					url:this.nextPath
				})
			}else{
				uni.redirectTo({
					url:this.nextPath
				})
			}
		}
	}
}
```
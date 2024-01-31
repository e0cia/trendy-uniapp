<script>
	import Vue from 'vue'
	import store from './store/index.js'
	import updateCustomBarInfo from './tuniao-ui/libs/function/updateCustomBarInfo.js'
	import lgen_intercept from './uni_modules/lgen-intercept/js_sdk/lgen-intercept.js'
	export default {
	onLaunch: function(e) {
      lgen_intercept(e)
			// 获取设备的状态栏信息和自定义顶栏信息
			updateCustomBarInfo().then((res) => {
				store.commit('$tStore', {
					name: 'vuex_status_bar_height',
					value: res.statusBarHeight
				})
				store.commit('$tStore', {
					name: 'vuex_custom_bar_height',
					value: res.customBarHeight
				})
			})

            /*#ifdef H5*/
			// 引入图形验证js
			var script = document.createElement('script');
			script.src = "https://turing.captcha.qcloud.com/TCaptcha.js";
			document.head.appendChild(script);			
            /*#endif*/

    },
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import './tuniao-ui/index.scss';
	@import './tuniao-ui/iconfont.css';

	/* 图鸟东东温馨提醒：在这里设置全局背景颜色吖*/
	page {
		background-color: #16171D;
	}
	
	uni-swiper.card-swiper .uni-swiper-wrapper{
		overflow:  unset !important;
	}
</style>

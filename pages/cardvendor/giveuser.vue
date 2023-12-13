<template>
	<view class="template-help tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
			</view>
			<span class="tn-text-xl" style="color: #FFFFFF">战神计划</span>
		</tn-nav-bar>

		<view class="tn-margin" :style="{paddingTop: vuex_custom_bar_height + 20+'px'}">
			<view class="button-vip tn-flex tn-flex-row-between tn-flex-col-center tn-shadow-blur"
				style="background: linear-gradient(-120deg, #3E445A, #31374A, #2B3042, #262B3C);">

				<view class="button-number tn-flex  tn-flex-col-center tn-shadow-blur" style="color: #F1C68E;">
					<image style="width: 50px;height: 50px;margin-left: 20px"
						:src="'/static/image/userCenter/haizhu.png'"></image>
					<view class="tn-text-bold tn-text-xl">我的卡配额：</view>

					<view style="font-size: 28px" class="tn-text-bold tn-margin-lg">{{
              userInfo.extendUserInfo.canUserCardNumber
            }}
					</view>
				</view>


			</view>
		</view>
		<view class="tn-margin tn-padding-top-xl">
			<view class="tn-bg-gray--light tn-flex" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
				<text class="tn-flex tn-text-xl tn-padding-right-xs tn-icon-my-circle"></text>
				<input placeholder="请输入赠送用户ID" type="number" min="0" max="100000" v-model="userId" @input="click"></input>
			</view>
		</view>


		<view class="tn-margin kk-d-style tn-padding-top-xl">
			<h2 class="title">
				注意
			</h2>
			<p class="text1">1.请确认接收人ID输入正确，操作无法撤销</p>
			<p class="text1">2.本次赠送未设定任何形式的对价</p>
			<p class="text1">3.赠送出去的珍珠所有权将会由接受人自动继承</p>
		</view>
    <view style="text-align: center">
      <tn-button @click="openModel" backgroundColor="#4865ba" padding="40rpx 0" width="60%" :fontSize="28"
                 fontColor="#FFFFFF" shape="round">确认数额</tn-button>
    </view>
		<view style="text-align: center;margin-top: 20px">
			<tn-button @click="tn('/pages/seabead/seabead')" backgroundColor="rgba(255,255,255,0)" padding="40rpx 0" width="60%" :fontSize="28"
				fontColor="#FFFFFF" shape="round">转赠记录</tn-button>
		</view>
		<!-- 悬浮按钮-->
		<view class="tn-flex tn-footerfixed">
			<view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center">
				<tn-button @click="tn('./cardvendor')" backgroundColor="#4865ba" padding="40rpx 0"
					width="60%" shadow fontBold>
					<!-- <text class="tn-icon-light tn-padding-right-xs tn-color-black"></text> -->
					<text class="tn-color-white">转赠名额</text>
					<!-- <text class="tn-icon-camera tn-padding-left-xs tn-color-black"></text> -->
				</tn-button>
			</view>
		</view>


		<tn-modal :zIndex="100" v-model="showModeal" :custom="true" :showCloseBtn="true">
			<view class="custom-modal-content">
				<view class="">
					<view class="tn-text-lg tn-text-bold tn-text-center tn-padding">支付密码</view>
					<view class="tn-bg-gray--light"
						style="border-radius: 10rpx;padding: 20rpx 30rpx;margin: 50rpx 20rpx 60rpx 20rpx;">
						<input  type="number" placeholder="请输入支付密码" v-model="payPassword" placeholder-style="color:#AAAAAA"
							maxlength="20"></input>
					</view>
				</view>
				<view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center">
					<tn-button backgroundColor="#000000" padding="40rpx 0" width="100%" @click="zhuanzeng()">
						<text class="tn-color-white">确 定</text>
					</tn-button>
				</view>
			</view>
		</tn-modal>

	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import * as util from './../../util/util'

	export default {
		name: 'TemplateHelp',
		mixins: [template_page_mixin],
		data() {
			return {
				pay: "",
				userInfo: {},
				trandeNumber: null, //捐赠数量
				payPassword: '', //支付密码
				showModeal: false,
				userId: ''
			}
		},
		onLoad() {
			//初始化是否实名
			this.userInfo = uni.getStorageSync("userInfo")
		},
		methods: {
			getuserInfo() {
				this.$http.postRequest('/kakabl/extenduser/center/userInfo', {})
					.then(res => {
						if (res.code === 200) {
							uni.setStorageSync("userInfo", res.data)
							this.userInfo = res.data
						} else {
							this.$t.message.toast(res.msg)
						}
					})
			},
			openModel() {
				if (util.isBlank(this.userId)) {
					this.$t.message.toast('用户ID不可以为空')
					return
				}
				this.showModeal = true
			},
			zhuanzeng() {
				let param = {
					userId: this.userId,
					payPassword: this.payPassword
				}

				if (util.isBlank(this.payPassword)) {
					this.$t.message.toast('支付密码不可以为空')
					return
				}
				this.$t.message.loading('支付密码不可以为空')
				this.$http.postRequest('/kakabl/inventory/giveCard', param)
					.then(res => {
						this.$t.message.closeLoading()
						if (res.code === 200) {
							this.getuserInfo()
							this.showModeal = false
							this.$t.message.toast("赠送成功")
							setTimeout(() => {
								uni.navigateBack({
									delta: 1, //返回层数，2则上上页
								})
							}, 1000)

						} else {
							this.$t.message.toast(res.msg)
						}
					})
				if (this.pay > 0) {

				} else {
					uni.showToast({
						title: '请输入正确数量',
						icon: 'none',
						duration: 2000
					});
				}
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			click(e) {
				const v = e.detail.value
				this.pay = '1'

				const zero = /^(0{2,})|[^0-9]/g
				let final = 0
				if (!v) {
					final = 0
				} else {
					final = v.toString().replace(zero, (v) => {
						return ""
					})

					if (final.split('')[0] * 1 === 0) {
						final = final.slice(1) - 0 || 0
					}
				}
				this.$nextTick(() => {
					this.pay = final.toString() || '0'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	/* 胶囊*/
	.tn-custom-nav-bar__back {
		width: 60%;
		height: 100%;
		position: relative;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		box-sizing: border-box;
		background-color: rgba(0, 0, 0, 0.15);
		border-radius: 1000rpx;
		border: 1rpx solid rgba(255, 255, 255, 0.5);
		color: #FFFFFF;
		font-size: 18px;

		.icon {
			display: block;
			flex: 1;
			margin: auto;
			text-align: center;
		}

	}

	// 银行卡
	.button-vip {
		width: 100%;
		border-radius: 15rpx;
		position: relative;
		z-index: 1;

		&::after {
			content: " ";
			position: absolute;
			z-index: -1;
			width: 100%;
			height: 100%;
			left: 0;
			bottom: 0;
			border-radius: inherit;
			opacity: 1;
			transform: scale(1, 1);
			background-size: 100% 100%;
			background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg.png);
		}
	}


	/* 间隔线 start*/
	.tn-strip-bottom-min {
		width: 100%;
		border-bottom: 1rpx solid #F8F9FB;
	}

	.tn-strip-bottom {
		width: 100%;
		border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
	}

	/* 间隔线 end*/
	/* 底部悬浮按钮 start*/
	.tn-tabbar-height {
		min-height: 100rpx;
		height: calc(120rpx + env(safe-area-inset-bottom) / 2);
	}

	.tn-footerfixed {
		position: fixed;
		width: 100%;
		bottom: calc(30rpx + env(safe-area-inset-bottom));
		z-index: 1024;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);

	}

	/* 底部悬浮按钮 end*/

	/* 页面 start*/
	.integral-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 阴影 start*/
	.tn-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	.integral-wrap {
		position: relative;
		z-index: 1;
	}

	/* 页面 end*/

	/* 翘边阴影*/
	.shadow-warp {
		position: relative;
		box-shadow: 0 10rpx 10rpx rgba(0, 0, 0, 0.01);
	}

	.shadow-warp:before,
	.shadow-warp:after {
		position: absolute;
		content: "";
		bottom: 30rpx;
		left: 20rpx;
		width: 50%;
		box-shadow: 0 30rpx 20rpx rgba(0, 0, 0, 0.2);
		transform: rotate(-3deg);
		z-index: -1;
	}

	.shadow-warp:after {
		right: 20rpx;
		left: auto;
		transform: rotate(3deg);
	}

	.kk-d-style {
		color: #FFFFFF;

		.text1 {
			color: rgba(255, 255, 255, .8);
			margin-top: 8px;
		}
	}
</style>
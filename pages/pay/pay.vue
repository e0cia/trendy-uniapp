<template>
	<view class="template-help tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left-arrow'></text>
			</view>
		</tn-nav-bar>

		<view class="tn-margin-bottom-xl tn-padding-bottom tn-color-white"
			:style="{paddingTop: vuex_custom_bar_height + 10 + 'px'}">
			<view class="tn-padding-top-xl">
				<view class="tn-flex adver-wrap ">
					<view class="tn-text-center tn-flex-1">
						<view class="tn-text-xxl tn-text-bold">{{userInfo.pay}}</view>
						<view class="tn-text-lg  tn-padding-left-xs" style="">我的海珠</view>
					</view>
					<view class="tn-text-center tn-flex-1">
						<view class="tn-text-xxl tn-text-bold">{{userInfo.integral}}</view>
						<view class="tn-text-lg tn-padding-left-xs" style="">我的积分</view>
					</view>
					<view class="tn-text-center tn-flex-1">
						<view class="tn-text-xxl tn-text-bold">{{userInfo.member==1?"至尊":"普通"}}</view>
						<view class="tn-text-lg tn-padding-left-xs" style="">会员等级</view>
					</view>
				</view>

			</view>
		</view>
		<view class="tn-margin">
			<view class="button-vip tn-flex tn-flex-row-between tn-flex-col-center tn-shadow-blur"
				style="background: linear-gradient(-120deg, #3E445A, #31374A, #2B3042, #262B3C);">

				<view class="tn-margin-left">
					<view class='title' style="color: #F1C68E;">
						<text class="tn-text-bold tn-text-xl">潮玩银行</text>
						<!-- <text class="tn-icon-vip-text tn-text-center" style="position: absolute;margin: -22rpx 0 0 0;font-size: 92rpx;"></text> -->
					</view>
					<view class='tn-color-white tn-padding-top-sm ' v-if="userInfo.id>0">5873 **** **** 230{{userInfo.id}}</view>
				</view>


			</view>
		</view>
		<view class="tn-margin tn-padding-top-xl">
			<view class="tn-bg-gray--light tn-flex" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
				<text class="tn-flex tn-text-xl tn-padding-right-xs tn-icon-alien"> </text>
				<input placeholder="请输入充值U币;1U=1元" type="number" v-model="pay" @input="click"></input>
			</view>
		</view>


		<!-- 悬浮按钮-->
		<view class="tn-flex tn-footerfixed">
			<view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center">
				<tn-button backgroundColor="#4865ba" padding="40rpx 0" width="60%" shadow fontBold @click="chong">
					<!-- <text class="tn-icon-light tn-padding-right-xs tn-color-black"></text> -->
					<text class="tn-color-white">确认充值</text>
					<!-- <text class="tn-icon-camera tn-padding-left-xs tn-color-black"></text> -->
				</tn-button>
			</view>
		</view>

	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	export default {
		name: 'TemplateHelp',
		mixins: [template_page_mixin],
		data() {
			return {
				pay: "",
				userInfo: {}
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
			chong(){
				let than=this;
				if(this.pay>0){
					this.$http.postRequest('Pay/getSign', {qian:this.pay})
						.then(res => {
							uni.requestPayment({
								timeStamp: res.data.timeStamp,
								nonceStr: res.data.nonceStr,
								package: res.data.package,
								signType: res.data.signType,
								paySign: res.data.paySign,
								success: function(itme) {
								  console.log('支付成功',itme)
								  than.tn();
								},
								fail: function(err) {
								  console.log('支付失败',err)
								}
							})
						})
				}else{
					uni.showToast({
						title: '请输入充值金额',
						icon:'none',
						duration: 2000 
					});
				}
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: '/pages/index/index',
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
		height: 150rpx;
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
		top: 20rpx;
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
</style>
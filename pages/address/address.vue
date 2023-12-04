<template>
	<view class="template-address">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>


		<view class="" :style="{paddingTop: vuex_custom_bar_height + 20 + 'px'}">
			<view v-for="(itme,index) in list" :key="index"
				class="box-shadow tn-flex tn-flex-row-between tn-flex-col-center tn-strip-bottom-min tn-padding tn-margin">
				<view class="justify-content-item tn-padding-right" @click="huancun(itme)">
					<view class="tn-text-bold tn-text-lg tn-color-white">
						<text class="">{{itme.name}}</text>
						<text class="tn-padding-left-sm">{{itme.phone}}</text>
					</view>
					<view class="tn-color-gray tn-padding-top-xs">
						{{itme.province}}{{itme.city}}{{itme.area}}{{itme.address}}
					</view>
				</view>
				<view class="justify-content-item tn-text-xl tn-color-gray" @click="tn('../edit/edit?id='+itme.id)">
					<view class="tn-icon-edit-write"></view>
				</view>
				<view class="justify-content-item tn-text-xl tn-color-gray" @click="del(itme.id)">
					<view class="tn-icon-delete-fill"></view>
				</view>
			</view>
			<!-- 悬浮按钮-->
			<view class="tn-flex tn-footerfixed">
				<view class="tn-flex-1 justify-content-item tn-margin-left tn-margin-right tn-text-center">
					<tn-button backgroundColor="#FFFFFF " padding="40rpx 0" width="100%" :fontSize="28"
						fontColor="#000000" shape="round" @click="tn('../edit/edit')">
						<text class="">新增地址</text>
					</tn-button>
				</view>
			</view>


		</view>
	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	export default {
		name: 'TemplateAddress',
		mixins: [template_page_mixin],
		data() {
			return {
				list: [],
				lx:0
			}
		},
		onLoad(e) {
			if(e.lx){
				this.lx=e.lx
			}
			
		},
		onShow() {
			this.getlist()
		},
		methods: {
			getlist() {
				this.$http.postRequest('Address/List', {})
					.then(res => {
						this.list = res.data
						// console.log(res)
					})
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			del(id) {
				let than=this;
				uni.showModal({
					title: '删除提示',
					content: '是否删除此地址信息？',
					success: function(res) {
						if (res.confirm) {
							console.log('确认')
							than.$http.postRequest('Address/del', {id:id})
								.then(res => {
									than.getlist()
								})
						} else if (res.cancel) {
							console.log('取消');
						}
					}
				});
			},
			huancun(itme){
				// console.log(this.lx)
				if(this.lx==1){
					uni.setStorageSync("address", itme)
					uni.navigateBack({
						delta:1,//返回层数，2则上上页
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* 胶囊*/
	.tn-custom-nav-bar__back {
		width: 100%;
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

		&:before {
			content: " ";
			width: 1rpx;
			height: 110%;
			position: absolute;
			top: 22.5%;
			left: 0;
			right: 0;
			margin: auto;
			transform: scale(0.5);
			transform-origin: 0 0;
			pointer-events: none;
			box-sizing: border-box;
			opacity: 0.7;
			background-color: #FFFFFF;
		}
	}

	/* 页面阴影 start*/
	.box-shadow {
		border-radius: 15rpx;
		border: 1rpx solid #494B51;
		background-color: rgba(255, 255, 255, 0.08);
		// box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 底部悬浮按钮 start*/
	.tn-tabbar-height {
		min-height: 160rpx;
		height: calc(180rpx + env(safe-area-inset-bottom) / 2);
		height: calc(180rpx + constant(safe-area-inset-bottom));
	}

	.tn-footerfixed {
		position: fixed;
		width: 100%;
		bottom: calc(80rpx + env(safe-area-inset-bottom));
		z-index: 1024;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);

	}

	/* 底部悬浮按钮 end*/
</style>

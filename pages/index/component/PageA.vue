<template>
	<view class="pagesA tn-safe-area-inset-bottom">

		<!-- 顶部自定义导航 -->
		<tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="#FFFFFF00">
			<view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
				<view class="custom-nav__logo"  >
					<!-- <view class="tn-icon-menu-grille tn-color-white"></view> -->
					<text class="tn-color-white tn-text-bold" style="font-size: 60rpx;">TN</text>
				</view>
				<view class="tn-margin-top-sm">
					<text class="tn-color-white tn-margin-left">Digital Art</text>
				</view>
			</view>
		</tn-nav-bar>

		<view class="tn-margin-bottom-xl" :style="{paddingTop: vuex_custom_bar_height + 20 + 'px'}">

			<swiper class="card-swiper" :circular="true" :autoplay="true" duration="500" interval="12000"
				previous-margin="80rpx" next-margin="80rpx" @change="cardSwiper">
				<swiper-item v-for="(item,index) in list.carousel" :key="index" :class="cardCur==index?'cur':''"
					@click="tn('../product/product?id='+item.goodsid)">
					<view class="swiper-item image-banner">
						<image :src="item.coverimage" mode="aspectFill"  ></image>
					</view>

					<view class="swiper-item-text">
						<view class="tn-padding-sm">
							<view class="tn-text-lg tn-color-white tn-padding-top-xs">{{item.name}}</view>
							<view class="tn-text-sm tn-text-bold tn-color-white tn-padding-top-sm"
								style="opacity: 0.5;">开启全新的探索之旅
							</view>
						</view>

					</view>

				</swiper-item>
			</swiper>
			<view class="indication">
				<block v-for="(item,index) in swiperList" :key="index">
					<view class="spot" :class="cardCur==index?'active':''"></view>
				</block>
			</view>


			<!-- 顶部自定义导航 -->
			<view class="" style="width: 100vw;">
				<tn-sticky :offsetTop="0" :customNavHeight="vuex_custom_bar_height">
					<view class="tn-flex tn-flex-col-between tn-flex-col-center tn-padding-top tn-padding-bottom"
						style="background-color: #FFFFFF00;">
						<view class="justify-content-item" style="width: 87vw;overflow: hidden;">
							<tn-tabs :list="scrollList" :current="current" :isScroll="true" activeColor="#FFF"
								inactiveColor="#FFFFFF80" :bold="true" :fontSize="32" :badgeOffset="[20, 50]"
								@change="tabChange" backgroundColor="#FFFFFF00" :height="70"></tn-tabs>
						</view>
						<!-- <view class="justify-content-item" style="width: 13vw;overflow: hidden;">
							<picker @change="bindPickerChange" :value="index" :range="array">
								<view class="tn-color-white tn-round"
									style="font-size: 45rpx;margin-top: -5rpx;margin-left: 15rpx;">
									<text class="tn-icon-sequence-vertical tn-padding-xs"></text>
								</view>
							</picker>
						</view> -->


					</view>
				</tn-sticky>
			</view>


			<view class="" v-if="current==0">

				<!-- 数字模型 start-->
				<view class="tn-flex tn-flex-wrap">
					<block v-for="(item, index) in list.selected" :key="index">
						<view class="" style="width: 100%;" @click="tn('../product/product?id='+item.goodsid)">

							<view class="product-content">
								<view class="image-pic"
									:style="'background-image:url(' + item.coverimage + ');background-size: cover;background-position: center;'">
									<view class="image-product">
										<view class="tn-text-df"
											style="width: 100%;height: 160rpx;background: linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0));position: absolute;bottom: 0;border-radius: 0 0 12rpx 12rpx;">
											<view
												class="tn-padding-top-xl tn-padding-left tn-padding-right tn-color-white clamp-text-1"
												style="font-size: 30rpx;">{{ item.name }}</view>
											<view
												class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-left tn-padding-right tn-padding-top-xs">
												<view
													class="justify-content-item tn-flex tn-flex-col-center tn-color-white"
													style="margin-left: -6rpx;">
													<text class="tn-text-lg tn-icon-alien"><!-- ￥ --></text>
													<text class="tn-padding-right-sm tn-text-lg">{{ item.pay }}</text>
													<text class="tn-text-sm"> {{item.sales}} 人购买</text>
												</view>
												<view class="justify-content-item tn-flex tn-flex-col-center">
													<!-- <text class="tn-color-white tn-text-sm"> 12 人购买</text> -->
													<tn-button size="sm" shape="icon" backgroundColor="#000000"
														fontColor="tn-color-white" padding="10rpx 0 0 0" shadow>
														<text class="tn-icon-buy tn-text-lg"></text>
													</tn-button>
												</view>
											</view>
										</view>
									</view>
								</view>
							</view>

						</view>
					</block>
				</view>
				<!-- 数字模型 end-->

			</view>

			<view class="" v-if="current==1">

				<!-- 数字模型 start-->
				<view class="tn-flex tn-flex-wrap">
					<block v-for="(item, index) in list.hotsales" :key="index">
						<view class="" style="width: 100%;" @click="tn('../product/product?id='+item.goodsid)">
				
							<view class="product-content">
								<view class="image-pic"
									:style="'background-image:url(' + item.coverimage + ');background-size: cover;background-position: center;'">
									<view class="image-product">
										<view class="tn-text-df"
											style="width: 100%;height: 160rpx;background: linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0));position: absolute;bottom: 0;border-radius: 0 0 12rpx 12rpx;">
											<view
												class="tn-padding-top-xl tn-padding-left tn-padding-right tn-color-white clamp-text-1"
												style="font-size: 30rpx;">{{ item.name }}</view>
											<view
												class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-left tn-padding-right tn-padding-top-xs">
												<view
													class="justify-content-item tn-flex tn-flex-col-center tn-color-white"
													style="margin-left: -6rpx;">
													<text class="tn-text-lg tn-icon-alien"><!-- ￥ --></text>
													<text class="tn-padding-right-sm tn-text-lg">{{ item.pay }}</text>
													<text class="tn-text-sm"> {{item.sales}} 人购买</text>
												</view>
												<view class="justify-content-item tn-flex tn-flex-col-center">
													<!-- <text class="tn-color-white tn-text-sm"> 12 人购买</text> -->
													<tn-button size="sm" shape="icon" backgroundColor="#000000"
														fontColor="tn-color-white" padding="10rpx 0 0 0" shadow>
														<text class="tn-icon-buy tn-text-lg"></text>
													</tn-button>
												</view>
											</view>
										</view>
									</view>
								</view>
							</view>
				
						</view>
					</block>
				</view>
				<!-- 数字模型 end-->

			</view>


			<view class="" v-if="current==2">

				<!-- 数字模型 start-->
				<view class="tn-flex tn-flex-wrap">
					<block v-for="(item, index) in list.newproduct" :key="index">
						<view class="" style="width: 100%;" @click="tn('../product/product?id='+item.goodsid)">
				
							<view class="product-content">
								<view class="image-pic"
									:style="'background-image:url(' + item.coverimage + ');background-size: cover;background-position: center;'">
									<view class="image-product">
										<view class="tn-text-df"
											style="width: 100%;height: 160rpx;background: linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0));position: absolute;bottom: 0;border-radius: 0 0 12rpx 12rpx;">
											<view
												class="tn-padding-top-xl tn-padding-left tn-padding-right tn-color-white clamp-text-1"
												style="font-size: 30rpx;">{{ item.name }}</view>
											<view
												class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-left tn-padding-right tn-padding-top-xs">
												<view
													class="justify-content-item tn-flex tn-flex-col-center tn-color-white"
													style="margin-left: -6rpx;">
													<text class="tn-text-lg tn-icon-alien"><!-- ￥ --></text>
													<text class="tn-padding-right-sm tn-text-lg">{{ item.pay }}</text>
													<text class="tn-text-sm"> {{item.sales}} 人购买</text>
												</view>
												<view class="justify-content-item tn-flex tn-flex-col-center">
													<!-- <text class="tn-color-white tn-text-sm"> 12 人购买</text> -->
													<tn-button size="sm" shape="icon" backgroundColor="#000000"
														fontColor="tn-color-white" padding="10rpx 0 0 0" shadow>
														<text class="tn-icon-buy tn-text-lg"></text>
													</tn-button>
												</view>
											</view>
										</view>
									</view>
								</view>
							</view>
				
						</view>
					</block>
				</view>
				<!-- 数字模型 end-->

			</view>

		</view>

		<view class='tn-tabbar-height'></view>
		<view class="bg-tabbar-shadow"></view>
	</view>
</template>

<script>
	export default {
		name: 'PageA',
		data() {
			return {
				cardCur: 0,
				list:{},
				swiperList: [],
				current: 0,
				scrollList: [{
						name: '精选'
					},
					{
						name: '热销'
					},
					{
						name: '新品'
					}
				],
				// 筛选
				index: 1,
				
				content: [],
			}
		},
		mounted() {
			this.gethomelist();
		},
		methods: {
			gethomelist(){
				this.$http.postRequest('Release/homeGoods', { })
					.then(res => {
						console.log(res)
						this.list=res.data
					})
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// tab选项卡切换
			tabChange(index) {
				this.current = index
			},
			// 筛选
			bindPickerChange: function(e) {
				this.index = e.detail.value
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
		}
	}
</script>


<style lang="scss" scoped>
	.pagesA {
		max-height: 100vh;
	}

	/* 底部安全边距 start*/
	.tn-tabbar-height {
		min-height: 60rpx;
		height: calc(80rpx + env(safe-area-inset-bottom) / 2);
		height: calc(80rpx + constant(safe-area-inset-bottom));
	}

	/* 底部tabbar假阴影 start*/
	.bg-tabbar-shadow {
		// background-image: repeating-linear-gradient(to top, rgba(0,0,0,0.1) 10rpx, rgba(255,255,255,0) , rgba(255,255,255,0));
		box-shadow: 0rpx 0rpx 220rpx 0rpx rgba(0, 0, 0, 0.55);
		position: fixed;
		bottom: -100rpx;
		height: 100rpx;
		width: 100vw;
		z-index: 1;
	}

	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;

		&__logo {
			margin: auto 5rpx;
			font-size: 50rpx;
			margin-right: 10rpx;
			margin-left: 30rpx;
			flex-basis: 5%;
		}
	}

	/* 自定义导航栏内容 end */


	/* 轮播图片入口 start*/
	.card-swiper {
		height: 60vh !important;
	}

	.card-swiper swiper-item {
		width: 590rpx !important;
		// left: 60rpx;
		box-sizing: border-box;
		padding: 0rpx 0rpx 90rpx 0rpx;
		overflow: initial;
	}

	.card-swiper swiper-item .swiper-item {
		width: 100%;
		display: block;
		height: 100%;
		border-radius: 20rpx;
		transform: scale(0.87);
		transition: all 0.2s ease-in 0s;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item {
		transform: none;
		transition: all 0.2s ease-in 0s;
	}

	.card-swiper swiper-item .swiper-item-text {
		background-color: rgba(0, 0, 0, 0.55);
		position: absolute;
		bottom: 0;
		width: 100%;
		display: block;
		height: 140rpx;
		border-radius: 20rpx;
		transform: translate(0rpx, -120rpx) scale(0.8, 0.8);
		transition: all 0.6s ease 0s;
		overflow: hidden;
		opacity: 0;
	}

	.card-swiper swiper-item.cur .swiper-item-text {
		width: 100%;
		transform: translate(0rpx, -100rpx) scale(0.92, 0.92);
		transition: all 0.6s ease 0s;
		opacity: 1;
	}

	.image-banner {
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0rpx 30rpx 60rpx 0rpx rgba(116, 10, 250, 0.08);
	}

	.image-banner image {
		width: 100%;
		height: 100%;
	}

	/* 轮播指示点 start*/
	.indication {
		z-index: 99;
		width: 100%;
		height: 36rpx;
		position: absolute;
		display: flex;
		margin-top: -50rpx;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.spot {
		background-color: #FFFFFF40;
		opacity: 0.4;
		width: 10rpx;
		height: 10rpx;
		border-radius: 20rpx;
		margin: 0 8rpx !important;
		position: relative;
	}

	.spot.active {
		opacity: 1;
		width: 60rpx;
		background-color: #FFFFFF40;
	}

	/* 数字模型 start*/
	.product-content {
		// box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
		border-radius: 15rpx;
		background-color: rgba(255, 255, 255, 0.08);
		border: 1rpx solid #494B51;
		margin: 15rpx 30rpx;
	}

	.image-product {
		height: 360rpx;
		font-size: 16rpx;
		font-weight: 300;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 15rpx;
	}

	/* 数字模型 end*/
</style>
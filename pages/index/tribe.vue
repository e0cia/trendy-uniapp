<template>
	<view class="pagesC tn-safe-area-inset-bottom">

		<!-- 顶部自定义导航 -->
		<tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="#16171D00">
			<view class="" style="width: 70vw;overflow: hidden;margin-top: 6rpx;">
				<tn-tabs :list="scrollList" :current="current" @change="tabChange" activeColor="#FFF"
					inactiveColor="#FFFFFF80" :bold="true" :fontSize="36"></tn-tabs>
			</view>
		</tn-nav-bar>

		<view class="tn-margin-bottom-xl" :style="{paddingTop: vuex_custom_bar_height + 20 + 'px'}">

			<view class="" v-if="content.length>0">

				<!-- 数字模型 start-->
				<view class="tn-flex tn-flex-wrap" style="margin: 0 15rpx;">
					<block v-for="(item, index) in content" :key="index">
						<view class="" style="width: 50%;" @click="tn('../product/product?id='+item.id)">
							<view class="product-content">
								<view class="image-pic" :style="'background-image:url(' + item.coverimage + ')'">
									<view class="image-product">
									</view>
								</view>

								<view
									class="tn-text-justify tn-padding-top-sm tn-padding-left-sm tn-padding-right-sm tn-padding-top">
									<text class="tn-color-white">{{ item.name }}</text>
								</view>

								<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-sm">
									<view class="justify-content-item tn-flex tn-flex-col-center tn-color-gray"
										style="margin-left: -6rpx;">
										<text class="tn-text-lg tn-icon-alien"><!-- ￥ --></text>
										<text class="tn-padding-right-sm tn-text-lg">{{ item.pay }}</text>
										<!-- <text class="tn-color-gray tn-text-sm"> 66 人购买</text> -->
									</view>
									<view class="justify-content-item tn-flex tn-flex-col-center">
										<text class="tn-color-gray tn-text-sm"> {{ item.sales }} 人购买</text>
									</view>
								</view>
							</view>
						</view>
					</block>
				</view>
				<!-- 数字模型 end-->

			</view>

			<view class="" v-if="content.length==0">
				<view class="" style="padding: 15vh 20rpx;opacity: 0.6;">
					<view class="tn-text-center" style="font-size: 260rpx;padding-top: 30rpx;">
						<text class="tn-icon-commissary tn-color-gray--light"></text>
					</view>
					<view class="tn-color-gray--disabled tn-text-center tn-text-lg">暂无商品信息~~~</view>
				</view>
			</view>

			

		</view>

		<view class='tn-tabbar-height'></view>
		<view class="bg-tabbar-shadow"></view>
	</view>
</template>

<script>
	export default {
		name: 'PageC',
		data() {
			return {
				page:1,
				current: 0,
				scrollList: [{
						id:0,
						name: '全部'
					}
				],
				content: [],
			}
		},
		mounted() {
			this.getlmlist();
			this.getgoodslist();
		},
		methods: {
			getlmlist() {
				let than=this;
				this.$http.postRequest('Release/LmList', {})
					.then(res => {
						let arr=res.data;
						arr.forEach(function (item, index, array) {
							than.scrollList.push({
								id:item.id,
								name:item.title,
							})
						})
					})
			},
			// tab选项卡切换
			tabChange(index) {
				this.current = index;
				this.content=[];
				this.page=1;
				this.getgoodslist();
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			getgoodslist() {
				let than=this;
				let categoryid=this.scrollList[this.current].id
				this.$http.postRequest('Release/GoodsList', {page:this.page,categoryid:categoryid})
					.then(res => {
						if(res.data.length>0){
							than.page=than.page+1;
							let arr=res.data;
							// console.log(arr)
							arr.forEach(function (item, index, array) {
								than.content.push({
									id:item.id,
									name:item.name,
									coverimage:item.coverimage,
									pay:item.pay,
									sales:item.sales
								})
							})
						}
						
					})
			},
		}
	}
</script>


<style lang="scss" scoped>
	.pagesC {
		max-height: 100vh;
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

	/* 底部安全边距 start*/
	.tn-tabbar-height {
		min-height: 60rpx;
		height: calc(80rpx + env(safe-area-inset-bottom) / 2);
		height: calc(80rpx + constant(safe-area-inset-bottom));
	}


	/* 数字模型 start*/
	.product-content {
		// box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
		border-radius: 15rpx;
		background-color: rgba(255, 255, 255, 0.08);
		border: 1rpx solid #494B51;
		margin: 15rpx;
	}

	.image-product {
		height: 327rpx;
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
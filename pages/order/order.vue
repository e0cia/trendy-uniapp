<template>
	<view class="template-order tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed customBack :bottomShadow="false" backgroundColor="#16171D">
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left-arrow'></text>
			</view>
			<view class="tn-flex tn-flex-col-center tn-flex-row-center">
				<text class="tn-text-xl tn-color-white">发货订单</text>
			</view>
		</tn-nav-bar>



		<view class="top-fixed" :style="{paddingTop: vuex_custom_bar_height + 10 +'px'}">
			<tn-tabs :list="fixedList" :current="current" :isScroll="true" inactiveColor="#FFFFFF80"
				activeColor="#FFFFFF" bold="true" backgroundColor="#16171D" :fontSize="32" :badgeOffset="[20, 50]"
				@change="tabChange"></tn-tabs>
		</view>


		<view class="" v-if="content.length>0" :style="{paddingTop: vuex_custom_bar_height + 60 +'px'}">
			<view v-for="(item,index) in content" :key="index" class="order__item" @click="tn('')">
				<view class="order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between">
					<view class="order__item__head__title">
						<text class="">订单编号：{{item.id}}</text>
						<!-- <text class="tn-icon-copy tn-text-sm tn-padding-left-sm" style="opacity: 0.5;"></text> -->
					</view>
				</view>

				<view
					class="order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between">
					<view class="tn-flex tn-flex-nowrap tn-flex-direction-row tn-flex-col-center tn-flex-row-left">
						<view class="order__item__content__image">
							<image :src="item.goodImageUrl" mode="aspectFill"></image>
						</view>
						<view class="order__item__content__title">
							{{item.goodName}}
						</view>
					</view>
					<view
						class="order__item__content__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
						<view class="order__item__content__info__price">
							￥
							<text class="order__item__content__info__price__value--integer">{{item.orderPrice}}</text>
						</view>

					</view>
				</view>

				<view
					class="order__item__operation tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between">
					<view class="order__item__operaation__left tn-text-sm" style="opacity: 0.5;">
						<text class="tn-icon-time tn-padding-right-xs"></text>
						<text class="">{{item.createTime}}</text>
					</view>
					<view
						class="order__item__operation__right tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-right">
						<view class="order__item__operation__right__button">
							<tn-button backgroundColor="#FFFFFF" padding="10rpx 18rpx" height="auto" width="100%"
								:fontSize="22" :plain="true" fontColor="#FFFFFF" shape="round">
								{{item.orderStatus==1?"待发货":item.orderStatus==2?"已发货":item.orderStatus==3?"已送达":"已签收"}}
							</tn-button>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="" v-if="content.length==0">
			<view class="" style="padding: 15vh 20rpx;opacity: 0.6;">
				<view class="tn-text-center" style="font-size: 260rpx;padding-top: 30rpx;">
					<text class="tn-icon-order tn-color-gray--light"></text>
				</view>
				<view class="tn-color-gray--disabled tn-text-center tn-text-lg">暂无订单信息~~~</view>
			</view>
		</view>
		<view class='tn-tabbar-height'></view>
	</view>

</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  import TnTabs from "../../tuniao-ui/components/tn-tabs/tn-tabs.vue";
	export default {
		name: 'TemplateOrder',
    components: {TnTabs},
		mixins: [template_page_mixin],
		data() {
			return {

				current: 0,
				fixedList: [{
						name: '全部'
					},
					{
						name: '待发货'
					},
					{
						name: '已发货'
					},
					{
						name: '已收货'
					},
					{
						name: '已签收'
					},
				],

				cardCur: 0,
				content: [],
				page: 1,
			}
		},
		onShow() {
			this.getlist()
		},
		methods: {
			// tab选项卡切换
			tabChange(index) {
				this.current = index;
				this.content = [];
				this.page = 1;
				this.getlist();
        console.log(this.current)
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			getlist() {
        console.log("1111111")
				let than = this;
				this.$http.getRequest('/kakabl/orders/list?pageNum=1&pageSize=10', {})
					.then(res => {
						if (res.rows.length > 0) {
							than.page = than.page + 1;
							let arr = res.rows;
							// console.log(arr)
							arr.forEach(function(item, index, array) {
								than.content.push(item)
							})
						}
           console.log(than.content);
					})
			},
			
		},
		// 滚动到底部
		onReachBottom(e) {
			this.getlist()
		 
		}
	}
</script>

<style lang="scss" scoped>
	.template-order {}

	/* 底部安全边距 start*/
	.tn-tabbar-height {
		min-height: 40rpx;
		height: calc(60rpx + env(safe-area-inset-bottom) / 2);
		height: calc(60rpx + constant(safe-area-inset-bottom));
	}

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
		border-radius: 100rpx;
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

	.top-fixed {
		position: fixed;
		top: 0;
		width: 100%;
		transition: all 0.25s ease-out;
		z-index: 100;
	}


	.order {
		&--wrap {
			position: fixed;
			left: 0;
			right: 0;
			width: 100%;
			background-color: inherit;
		}

		/* 导航栏 start */
		&__tabs {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			background-color: inherit;
		}

		/* 导航栏 end */

		/* 订单内容 start */
		&__item {
			color: #FFFFFF;
			margin: 30rpx;
			padding: 36rpx 26rpx;
			border-radius: 15rpx;
			border: 1rpx solid #494B51;
			background-color: rgba(255, 255, 255, 0.08);
			border-radius: 15rpx;
			// box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);

			&:first-child {
				margin-top: 40rpx;
			}

			&:last-child {
				margin-bottom: 0;
			}

			/* 头部 start */
			&__head {

				&__title {
					font-weight: bold;
					line-height: normal;

					&--right-icon {
						font-size: 24rpx;
						margin-left: 8rpx;
					}
				}

				&__status {
					font-size: 22rpx;
					color: #AAAAAA;
				}
			}

			/* 头部 end */

			/* 内容 start */
			&__content {

				margin-top: 20rpx;

				&__image {
					margin-right: 20rpx;

					image {
						width: 140rpx;
						height: 140rpx;
						border-radius: 10rpx;
					}
				}

				&__title {
					padding-right: 40rpx;
					display: -webkit-box;
					overflow: hidden;
					white-space: normal !important;
					text-overflow: ellipsis;
					word-wrap: break-word;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}

				&__info {

					&__price {
						&--unit {
							font-size: 20rpx;
						}

						&__value--integer,
						&__value--decimal {
							font-weight: bold;
						}

						&__value--decimal {
							font-size: 20rpx;
						}
					}

					&__count {
						color: #AAAAAA;
						font-size: 24rpx;
					}
				}
			}

			/* 内容 end */

			/* 操作按钮 start */
			&__operation {
				margin-top: 20rpx;

				&__right {
					&__button {
						margin-left: 10rpx;
					}
				}
			}

			/* 操作按钮 end */
		}

		/* 订单内容 end */
	}
</style>
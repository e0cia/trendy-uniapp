<template>
	<view class="pages-games tn-safe-area-inset-bottom">
		 <view class="space">
		<view class="pages-games-title">
			【海底探险】倒计时
		</view>
		<view class="pages-games-time">
			即将开启
		</view>
		<view class="pages-games-tic">
			通往·海底世界
		</view>
		<view class="game-npc">
			航海任务是非常艰巨的过程<br >
			在浩瀚海洋中寻找新世界 
			</view>
	<view class="pages-games-box">
		<view @click="noFunction" class="item-list">
			<image class="image" src="@/static/image/box/box1.png" ></image>
		</view>
		<view  @click="noFunction" class="item-list">
			<image class="image" src="@/static/image/box/box2.png"  ></image>
		</view>
		<view  @click="noFunction" class="item-list">
			<image class="image" src="@/static/image/box/box3.png" ></image>
		</view>
		<view  @click="tn('/pages/save/save')" class="item-list">
			<image class="image" src="@/static/image/box/box4.png" ></image>
		</view>
		<view  @click="noFunction" class="item-list">
			<image class="image" src="@/static/image/box/box5.png"  ></image>
		</view>
		<view  @click="noFunction" class="item-list">
			<image class="image" src="@/static/image/box/box6.png" ></image>
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
			imageurl:require('@/static/image/box/box-image.jpg')
			}
		},
		mounted() {
		},
		methods: {
			noFunction(){
				 this.$t.message.toast('敬请期待')
			},
			// 跳转
			tn(e) {
			  uni.navigateTo({
				url: e,
			  });
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.pages-games{
		background: url(@/static/image/box/box-image.jpg) center center / 100% 100% no-repeat;
		// height: 53.65625rem;
		
		
		
		color: #FFF;
		.space{
			.pages-games-title{
				font-size: 1.4375rem;
				font-family: BDZongYi-A001;
				font-weight: 400;
				color: #d1fdfd;
				text-align: center;
				padding-top: 4.6875rem;
			}
			.pages-games-time{
				    text-align: center;
				    margin-top: 0.9375rem;
				    font-family: Microsoft JhengHei;
				    font-weight: 400;
				    color: #d1fdfd;
				    font-size: 2.03125rem;
				    text-shadow: 0px 6px 18px rgba(0,20,60,.96);
			}
			.pages-games-tic{
				font-size: .9375rem;
    text-align: center;
    font-family: PingFang SC;
    font-weight: 600;
    color: #d1fdfd;
    margin-top: 0.9375rem;
			}
			.game-npc{
				 width: 12.84375rem;
				    height: 5.90625rem;
				    background: url(@/static/image/box/box-npc.png) no-repeat center center;
				    background-size: 100% 100%;
				    // margin-top: 7.96875rem;
					margin-top: 3.96875rem;
				    font-size: .6875rem;
				    font-family: PingFang SC;
				    font-weight: 700;
				    color: #d1fdfd;
				    display: flex;
				    justify-content: center;
				    align-items: center
			}
			.pages-games-box{
				display: flex;
				    flex-wrap: wrap;
				    justify-content: space-between;
				    padding: 0.9375rem;
				    margin-top: 0;
				    box-sizing: border-box;
					.item-list{
						position: relative;
						width: 10.4375rem;
						    height: 5.78125rem;
						    margin-bottom: 0.6875rem;
						    background-size: contain;
							uni-image{
								    width: 100%;
								    height: 100%;
							}
					}
			}
		}
	}
	
	/* 底部安全边距 start*/
	.tn-tabbar-height {
	  min-height: 60rpx;
	  height: calc(80rpx + env(safe-area-inset-bottom) / 2);
	  height: calc(80rpx + constant(safe-area-inset-bottom));
	}
	
	body,page{
	  width:100%
	}
</style>
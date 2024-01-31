<template>
  <view class="pagesA tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="#FFFFFF00">
      <view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
        <view class="custom-nav__logo">
          <!-- <view class="tn-icon-menu-grille tn-color-white"></view> -->
          <text class="tn-color-white tn-text-bold" style="font-size: 60rpx;">KK</text>
        </view>
        <view class="tn-margin-top-sm">
          <text class="tn-color-white tn-margin-left">TRIBE</text>
        </view>
      </view>
    </tn-nav-bar>

    <view class="tn-margin-bottom-xl">


      <view class="top-backgroup">
        <view class="top-backgroup-up">
          <img width="100%" src="https://kakabl-1.oss-cn-beijing.aliyuncs.com/image/index/index-bg.png" draggable="false">
		</view>
        <view class="kk-bg-button tn-flex tn-flex-wrap tn-padding-xs">
<!--          <image class="image-button"-->
<!--                 src="https://kakabuluo.oss-cn-beijing.aliyuncs.com/play-rule.png"-->
<!--          ></image>-->

          <view  style="width: 100%;"  @click="tn('/pages/guide/guide')" class="tn-flex tn-flex-wrap tn-padding-xs">
            <view class="kk-bg-button-rule" style="width: 100%;">
				<image src="https://kakabl-1.oss-cn-beijing.aliyuncs.com/image/index/player.png"></image>
             
            </view>
          </view>
        </view>
      </view>

      <view class="menu">
        <view @click="tnSwitch('/pages/index/sea')" class="menu_left">
        </view>
        <view class="menu_center">
        </view>
        <view class="menu_right">
          <image  @click="tn('../product/productList')" 
                 :src="'https://kakabl-1.oss-cn-beijing.aliyuncs.com/image/index/right_home_top.png'"></image>
          <image @click="tn('../product/productList')"
                 :src="'https://kakabl-1.oss-cn-beijing.aliyuncs.com/image/index/right_home_bottom.png'"></image>
        </view>
      </view>
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

          </view>
        </tn-sticky>
      </view>


      <view class="" v-if="current==0">

        <!-- 数字模型 start-->
        <view class="tn-flex tn-flex-wrap">
          <block v-for="(item, index) in list" :key="index">
            <view class="" style="width: 100%;" @click="tn('../product/product?id='+item.id)">

              <view class="product-content">
                <view class="image-pic"
                      :style="'background-image:url(' + item.goodImageJson.split(',')[0] + ');background-size: cover;background-position: center;'">
                  <view class="image-product">
                    <view class="tn-text-df"
                          style="width: 100%;height: 160rpx;background: linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0));position: absolute;bottom: 0;border-radius: 0 0 12rpx 12rpx;">
                      <view
                          class="tn-padding-top-xl tn-padding-left tn-padding-right tn-color-white clamp-text-1"
                          style="font-size: 30rpx;">{{ item.goodName }}
                      </view>
                      <view
                          class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-left tn-padding-right tn-padding-top-xs">
                        <view
                            class="justify-content-item tn-flex tn-flex-col-center tn-color-white"
                            style="margin-left: -6rpx;">
                          <text class="tn-text-lg tn-icon-money"><!-- ￥ --></text>
                          <text class="tn-padding-right-sm tn-text-lg">{{ item.goodPrice }}</text>
                          <!--                          <text class="tn-text-sm"> {{ item.sales }} 人购买</text>-->
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
	<!-- #ifdef APP-PLUS -->
    <wrap-version-update  id="508886484004933"  	@check="habdleCheck"></wrap-version-update>
	<!-- #endif -->
	
  </view>
</template>

<script>
export default {
  name: 'PageA',
  data() {
    return {
      cardCur: 0,
      list: {},
      swiperList: [],
      current: 0,
      scrollList: [{
        name: '卡卡精选'
      },
        // {
        //   name: '热销'
        // },
        // {
        //   name: '新品'
        // }
      ],
      // 筛选
      index: 1,

      content: [],
    }
  },
  mounted() {
    this.gethomelist();
  },
  // 下拉刷新
  onPullDownRefresh() {
    this.gethomelist(1);
  },
  methods: {
	  habdleCheck(e){
		  if(e.needUpdate && e.isForceUpdate){
				 uni.hideTabBar();
		  }
	  },
    gethomelist(e) {
      this.$http.getRequest('/open/goods/list?pageNum=1&pageSize=10', {})
          .then(res => {
            if (e === 1) {
              console.log(res.rows)
              uni.stopPullDownRefresh();//停止刷新
            }
            this.list = res.rows
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
    bindPickerChange: function (e) {
      this.index = e.detail.value
    },
    // 跳转
    tn(e) {
      uni.navigateTo({
        url: e,
      });
    },
	tnSwitch(e) {
	  uni.switchTab({
	    url: e,
	  });
	},
    stopTouchMove() {
      return false;
    }
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

.kk-bg-top {

}

/* 轮播图片入口 start*/
.card-swiper {
  height: 60vh !important;
  transform: scale(0.5)
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
  //overflow: hidden;
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
  padding: 10px;
  background: rgba(146, 113, 247, 0.5);
  border-radius: 20px;
}

.image-banner image {
  width: 100%;
  height: 100%;
  border: 12px solid #9271f7;
  border-radius: 20px;
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
.menu {
  display: flex;
  padding: 0 10px;
  color: #FFFFFF;
  margin-top: 20px;
}

.menu_left {
  flex: 1;
  height: 212px;
  background: url(https://kakabl-1.oss-cn-beijing.aliyuncs.com/image/index/left_home.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
}

.menu .menu_left uni-image {
  width: 84px;
  height: 62px;
  position: absolute;
  bottom: 0;
  animation: monkeyMove-data-v-dce08d06 2.5s linear infinite;
}

.menu .menu_center {
  width: 12px;
}

.menu .menu_right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #030732;
}

.menu .menu_right uni-image {
  width: 100%;
  height: 106px;
  display: inline-block;
  overflow: hidden;
  position: relative;
  padding: 8px;
}

.kk_home_swiper {
  width: 100%;
  position: relative;
}



.kaka_buy_button {
  width: 100%;
  height: 83px;
  border-radius: 15px;
  background: #323943;
  box-shadow: 0 6px 0 0 #4b4956 inset;
  display: flex;
  align-items: center;
  justify-content: center;
}

.kaka_buy_button .buluo_button {
  width: 353px;
  height: 54px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #030104;
  font-family: Alimama ShuHeiTi;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  background: linear-gradient(90deg, #e7d9bc, #d9bd8e);
  box-shadow: inset 0px -3px 0px 0px #b29572;
}

.top-backgroup{
  position: relative;
}
.kk-bg-button{
  // position: absolute;
  width: 100%;
  // top: 210px;
}

.image-haibao {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
  border-radius: 8px 8px 0 0;
}

.image-position {
  min-height: 74px;
  font-size: 16px;
  font-weight: 300;
  border-radius: 10px;
  border: 2px solid #f989f8;
}
.kk-bg-button-rule uni-image{
	height: 80px;
	width: 100%;
	min-height: 74px;
	font-size: 16px;
	font-weight: 300;
	border-radius: 10px;
	// border: 2px solid #f989f8;
}
</style>



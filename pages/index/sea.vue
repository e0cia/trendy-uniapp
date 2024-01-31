<template>
  <view class="pagesB tn-safe-area-inset-bottom">


    <view style="z-index: 100" :style="{paddingTop: vuex_custom_bar_height + 5 + 'px'}"
          class="top-sea tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between">
      <view   @click="tn('/pages/seabead/seabead')"  class="top-sea-item">
        <view class="item-text  tn-text-xxl">我的海珠</view>
        <view class="item-value">
          {{ userInfo.extendUserInfo.remainingBalance ? userInfo.extendUserInfo.remainingBalance : 0.00 }}
        </view>
      </view>
      <view  @click="tn('/pages/seabead/seabead')"  class="top-sea-item">
        <view class="item-text  tn-text-xxl">每日获得</view>
        <view class="item-value">{{ cardInfo.yesterdayIncome ? cardInfo.yesterdayIncome : 0.00 }}</view>
      </view>
      <view  @click="tn('/pages/seabead/seabead')"  class="top-sea-item">
        <view class="item-text  tn-text-xxl">累计获得</view>
        <view class="item-value">{{ cardInfo.allIncome ? cardInfo.allIncome : 0.00 }}</view>
      </view>
    </view>
    <swiper class="card-swiper" :current="cardCur" :circular="false" :autoplay="false" duration="500"
            interval="18000" @change="cardSwiper" :style="{paddingTop: vuex_custom_bar_height - 50  + 'px'}"
            :touchable="false">
      <swiper-item catchtouchmove="catchTouchMove" v-for="(item,index) in swiperList" :key="index"
                   :class="cardCur==index?'cur':''">
        <view class="swiper-item image-banner" @click="isOpenDetial">
          <view class="box">
            <view class="cube">
              <view class="front"
                    style="background-image: linear-gradient(45deg, #f43f3b, #ec008c);opacity: 0.2;">
              </view>
              <view class="back"
                    style="background-image: linear-gradient(45deg, #ff7612, #ff571c);opacity: 0.2;">
              </view>
              <view class="left"
                    style="background-image: linear-gradient(45deg, #7FD02B, #9ddb47);opacity: 0.2;">
              </view>
              <view class="right"
                    style="background-image: linear-gradient(45deg, #9000ff, #5e00ff);opacity: 0.2;">
              </view>
              <view class="top"
                    style="background-image: linear-gradient(45deg, #6F68DF, #ec008c);opacity: 0.2;"></view>
              <view class="bottom"
                    style="background-image: linear-gradient(45deg, #0070FF, #19CF8A);opacity: 0.2;">
              </view>

              <view class="in-front"
                    :style="'background-image:url('+item.list[0].coverimage+');width: 200rpx;height: 200rpx;background-size: cover;overflow: hidden;'">
              </view>
              <view class="in-back"
                    :style="'background-image:url('+item.list[1].coverimage+');width: 200rpx;height: 200rpx;background-size: cover;overflow: hidden;'">
              </view>
              <view class="in-left"
                    :style="'background-image:url('+item.list[2].coverimage+');width: 200rpx;height: 200rpx;background-size: cover;overflow: hidden;'">
              </view>
              <view class="in-right"
                    :style="'background-image:url('+item.list[3].coverimage+');width: 200rpx;height: 200rpx;background-size: cover;overflow: hidden;'">
              </view>
              <view class="in-top"
                    :style="'background-image:url('+item.list[4].coverimage+');width: 200rpx;height: 200rpx;background-size: cover;overflow: hidden;'">
              </view>
              <view class="in-bottom"
                    :style="'background-image:url('+item.list[2].coverimage+');width: 200rpx;height: 200rpx;background-size: cover;overflow: hidden;'">
              </view>
            </view>
          </view>
        </view>
      </swiper-item>
    </swiper>

    <!-- 右边悬浮按钮   -->
    <view   class="float-right round position-bottom">
      <view  class="fix-right-item"  @click="tn('../rankingList/rankingList')">
        <image class="image" :src="'https://kakabl-1.oss-cn-beijing.aliyuncs.com/image/tribte/order.png'"></image>
      </view>
      <view class="fix-right-item"  @click="tn('/pages/guide/guide')">
        <image class="image" :src="'https://kakabl-1.oss-cn-beijing.aliyuncs.com/image/tribte/book.png'"></image>
      </view>
      <view class="fix-right-item"  @click="haizhuGet()">
        <image class="image" :src="'https://kakabl-1.oss-cn-beijing.aliyuncs.com/image/tribte/bak.png'"></image>
      </view>
    </view>


    <!-- 悬浮按钮2-->
    <view v-if="cardInfo.id===0" class="tn-flex tn-footerfixed"  @click="tn('../vendor/vendor')">
      <view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center">
        <tn-button shape="round" backgroundColor="#FFFFFF10" padding="40rpx 0" width="50%">
          <text class="tn-color-white">您暂无此卡(点击获取)</text>
        </tn-button>
      </view>
    </view>

    <view v-else-if="!cardInfo.blindBoxType || cardInfo.blindBoxType===0" class="tn-flex tn-footerfixed"
          @click="openModal1">
      <view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center">
        <tn-button shape="round" backgroundColor="#FFFFFF10" padding="40rpx 0" width="50%">
          <text class="tn-color-white">开启稀有卡</text>
        </tn-button>
      </view>
    </view>

    <view v-else class="tn-flex tn-footerfixed" @click="haizhuGet()">
      <view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center">
        <tn-button shape="round" backgroundColor="#FFFFFF10" padding="40rpx 0" width="50%">
          <text class="tn-color-white">上阵稀有卡，捞取海珠</text>
        </tn-button>
      </view>
    </view>

    <view class="tn-tabbar-height"></view>
    <view class="bg-tabbar-shadow"></view>

  </view>
</template>

<script>
import * as util from './../../util/util'
export default {
  name: 'PagesB',
  data() {
    return {
      show1: false,
      cardCur: 0,
      swiperList: [
        {
          title: 'ceshi',
          list: [
            {
              coverimage: util.blidBoxType(1).image
            },
            {
              coverimage: util.blidBoxType(2).image
            },
            {
              coverimage: util.blidBoxType(3).image
            },
            {
              coverimage: util.blidBoxType(4).image
            },
            {
              coverimage: util.blidBoxType(5).image
            },
            {
              coverimage: util.blidBoxType(6).image
            }
          ]
        },

      ],
      cardInfo: {
        id: 0,
        yesterdayIncome: 0.00,
        allIncome: 0.00,
        blindBoxType: 0
      },
      userInfo: {
        extendUserInfo: {
          remainingBalance: 0.00
        }
      }
    }
  },
  mounted() {
    this.userInfo = uni.getStorageSync("userInfo");
  },
  onShow(){
    this.getCurrntCardInfo();
  },
  methods: {
	  tnSwitch(e) {
	    uni.switchTab({
	      url: e,
	    });
	  },
    getCurrntCardInfo() {
      this.$http.postRequest('/kakabl/inventory/getCardInfo', {})
          .then(res => {
            if (res.code === 200) {
              this.cardInfo = res.data;
            } else {
              this.$t.message.toast(res.msg)
            }
          })
    },
    catchTouchMove() {
      return false;
    },
    // cardSwiper
    cardSwiper(e) {
      this.cardCur = e.detail.current
    },
    // swiper点击事件
    handleSwiperClick(index) {
      this.cardCur = index
    },
    // 跳转
    tn(e) {
      uni.navigateTo({
        url: e,
      });
    },
    noCard() {
      this.$t.message.toast("您暂无此卡,请先获取")
    },
    haizhuGet(){
      this.$t.message.toast("最新玩法,敬请期待")
    },
    // 弹出模态框
    showModal1(event) {
      this.openModal1()
    },
    // 打开模态框
    openModal1() {
       this.tn('../box/box');
    },
    isOpenDetial() {
      //盲盒不可以为 0 如果为0则未开启
      if (this.cardInfo.blindBoxType!==0 && this.cardInfo.blindBoxType!==null && this.cardInfo.id!==0){
        this.tn('../series/series?id='+this.cardInfo.id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pagesB {
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

/* 立方体1 */
@keyframes rotate {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }

  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

.box {
  margin: 0 275rpx 0 275rpx;
  perspective: 130px;
}

.cube {
  width: 100px;
  height: 100px;
  position: relative;
  transform: rotateX(-41deg) rotateY(-63deg);
  transform-style: preserve-3d;
  animation: rotate 20s infinite linear;
}

.cube > view {
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 200px;
  font-size: 40px;
  font-weight: bold;
  color: #FFFFFF;
  background: #16171D33;
  border: 1px solid #FFFFFF;
  border-radius: 30rpx;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 5s ease-in;
}

.front {
  transform: translateZ(100px) scale(0.5);
}

.back {

  transform: translateZ(-100px) rotateY(-180deg) scale(0.5);
}

.left {
  transform: translateX(-100px) rotateY(-90deg) scale(0.5);
}

.right {
  transform: translateX(100px) rotateY(90deg) scale(0.5);
}

.top {
  transform: translateY(-100px) rotateX(90deg) scale(0.5);
}

.bottom {
  transform: translateY(100px) rotateX(-90deg) scale(0.5);
}


.in-front {
  transform: translateZ(65px);
}

.in-back {
  transform: translateZ(-65px) rotateY(180deg);
}

.in-left {
  transform: translateX(65px) rotateY(90deg);
}

.in-right {
  transform: translateX(-65px) rotateY(-90deg);
}

.in-top {
  transform: translateY(65px) rotateX(90deg);
}

.in-bottom {
  transform: translateY(-65px) rotateX(-90deg);
}

/* 视觉差轮播*/
.card-swiper {
  height: 80vh !important;
}

.card-swiper swiper-item {
  width: 750rpx !important;
  left: 0rpx;
  box-sizing: border-box;
  overflow: initial;
}

.card-swiper swiper-item .swiper-item {
  margin-top: 20vh;
  width: 750rpx;
  height: 750rpx;
  border-radius: 0rpx;
  transform: translate(0rpx, 0rpx) scale(0.8);
  transition: all 0.2s ease-in 0s;
  will-change: transform;
  overflow: hidden;
  opacity: 1;
}

.card-swiper swiper-item.cur .swiper-item {
  transform: translate(0rpx, 0rpx) scale(1, 1);
  transition: all 0.2s ease-in 0s;
  will-change: transform;
  opacity: 1;
}

.card-swiper swiper-item .swiper-item-text {
  margin-top: -6vh;
  width: 100%;
  // height: 100%;
  display: block;
  border-radius: 10rpx;
  transform: scale(0.7, 0.7);
  transition: all 0.4s ease 0s;
  will-change: transform;
  overflow: hidden;
  opacity: 0;
}

.card-swiper swiper-item.cur .swiper-item-text {
  margin-top: -6vh;
  transform: scale(1);
  transition: all 0.4s ease 0s;
  will-change: transform;
  opacity: 1;
}

.image-banner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-banner image {
  width: 400rpx;
  height: 400rpx;
}

/* 轮播指示点 start*/
.indication {
  z-index: 9999;
  width: 100%;
  height: 36rpx;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.indication-bg {
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: -68vh;;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 270rpx
}

.spot {
  opacity: 1;
  width: 100rpx;
  height: 80rpx;
  border-radius: 20rpx;
  margin: 20rpx 15rpx !important;
  left: 0rpx;
  right: 0;
  top: -63vh;
  position: relative;
}

.spot.active .icon-text {
  transform: scale(1.8);
  margin-bottom: 18rpx;
  opacity: 1;
}

/* 底部悬浮按钮*/
.tn-footerfixed {
  position: fixed;
  width: 100%;
  bottom: 15vh;
  z-index: 9999;
  box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);
}

.float-right {
  position: fixed;
  bottom: 20vh;
  right: 10px;
  z-index: 1030;
  text-align: center;
  padding-bottom: env(safe-area-inset-bottom);
  transition: .3s;
}

.fix-right-item {
  margin-bottom: 20px;
  padding: 5px;
}

.fix-right-item .image {
  width: 40px;
  height: 40px;
}

.top-sea {
  padding: 0 20px;
  position: fixed;
  width: 100%;
}

.top-sea-item {
  color: #ffffff;
  background-color: #2b2240;
  border-radius: 5px;
  padding: 5px 20px;
  position: relative;
  z-index: 1;

  .item-text {
    font-size: 12px;
    font-weight: 900;
    color: rgba(255, 255, 255, .6);
  }

  .item-value {
    font-size: 12px;
    font-weight: 700;
    color: rgba(255, 255, 255, .8);
  }
}
</style>
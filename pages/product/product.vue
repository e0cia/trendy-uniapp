<template>
  <view class="template-product tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
        <text class='icon tn-icon-left-arrow'></text>
      </view>
      <!-- <view class="tn-flex tn-flex-col-center tn-flex-row-center">
        <text class="tn-text-xl tn-color-black">产品详情</text>
      </view> -->
    </tn-nav-bar>

    <swiper class="card-swiper" :circular="true" :autoplay="true" duration="500" interval="58000"
            @change="cardSwiper">
      <!--			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">-->
      <swiper-item class="cur">
        <view class="swiper-item image-banner">
          <image :src="mainImage" mode="aspectFill"></image>
        </view>

        <!--				<view class="swiper-item2 image-banner">-->
        <!--					<image class="png-sussuspension2" :src="item" mode="heightFix" >-->
        <!--					</image>-->
        <!--				</view>-->
        <!--				<view class="swiper-item3 image-banner">-->
        <!--					<image class="png-sussuspension3" src="https://shopimges.oss-cn-hangzhou.aliyuncs.com/xcx/banner-png1.png" mode="heightFix"  >-->
        <!--					</image>-->
        <!--				</view>-->

      </swiper-item>
    </swiper>
    <view class="indication">
      <block v-for="(item,index) in swiperList" :key="index">
        <view class="spot" :class="cardCur==index?'active':''"></view>
      </block>
    </view>

    <view class="tn-margin">
      <view class="tn-flex tn-flex-row-between">
        <view class="justify-content-item tn-text-bold tn-margin-top-xs tn-text-xl ">
          {{ bydata.goodName }}
        </view>
        <view class="justify-content-item tn-margin-top-sm">
          <view class="tn-flex tn-flex-row-center tn-flex-col-center" @click="tn('')">
            <button class="tn-button--clear-style" open-type="share">
              <view class="tn-icon-share-circle tn-color-gray tn-text-xl"></view>
            </button>
          </view>
        </view>
      </view>
      <view class="tn-flex tn-flex-row-between tn-margin-top">
        <view class="justify-content-item tn-text-bold tn-color-gray">
          <text class="tn-text-sm"> ￥</text>
          <text class="" style="font-size: 50rpx;">{{ bydata.goodPrice }}</text>
          <!-- <text class="tn-text-sm tn-icon-alien">￥</text> -->
        </view>
        <view class="justify-content-item tn-color-gray tn-padding-top-xs">
          <view class="">已售 {{ bydata.goodSaleNums }}</view>
        </view>
      </view>
    </view>

    <div class="detial_box flex-center">
      <div  class="flag_detial "></div>
      <uni-text  class="text_detial"><span>详情展示</span></uni-text>
      <div  class="flag_detial "></div>
    </div>


    <view class="content-backgroup">
      <image

          v-for="(item,index) in detialImageList" :key="index"
          :src='item'
          mode='widthFix' class='backgroud-image'></image>
      <!--      <rich-text nodes="asdasdsadsad" class="texttitle"></rich-text>-->
    </view>


    <view id="top-info" class="details-footerfixed tn-safe-area-inset-bottom tn-bg-white"
          :style="{transform: `translateY(${topInfoTranslateY}px)`}">
      <view class="tn-flex tn-flex-row-between tn-flex-col-center">
        <view class="tn-flex-2 justify-content-item tn-color-gray">
          <view class="tn-flex tn-flex-row-center">
            <view class="tn-flex-1" @click="goBack">
              <view class="tn-icon-home-in" style="font-size: 42rpx;"></view>
              <view class="tn-text-center tn-text-sm tn-padding-top-xs">首页</view>
            </view>
            <view class="tn-flex-1 tn-padding-right-xl">
              <button class="tn-button--clear-style" open-type="contact" style="border-radius: 0;">
                <view class="tn-icon-service-simple" style="font-size: 42rpx;"></view>
                <view class="tn-text-center tn-text-sm tn-padding-top-xs">客服</view>
              </button>
            </view>
          </view>
        </view>
        <view class="tn-flex-3 justify-content-item tn-padding-top-sm tn-padding-bottom-sm">
          <tn-button shape="round" backgroundColor="#4ecccb" padding="38rpx 0" width="90%" :fontSize="30"
                     @click="tn('../details/details?id='+bydata.id)">
            <text class="tn-color-white" hover-class="tn-hover" :hover-stay-time="150">
              海珠兑换
            </text>
          </tn-button>
        </view>
      </view>
    </view>


    <view class='tn-tabbar-height'></view>

  </view>
</template>

<script>
import template_page_mixin from '@/libs/mixin/template_page_mixin.js'

export default {
  name: 'TemplateProduct',
  mixins: [template_page_mixin],
  data() {
    return {
      topInfo: {
        height: 0,
      },
      topInfoTranslateY: 0,
      prevScrollTop: 0,

      cardCur: 0,
      swiperList: [],
      mainImage: '',
      bydata: {},
      detialImageList:[]
    }
  },
  onReady() {
    this.getTopInfoRect()
  },
  onPageScroll(e) {
    this.handlePageScroll(e.scrollTop)
  },
  onLoad(e) {
    this.getdata(e.id);
  },
  methods: {
    // cardSwiper
    cardSwiper(e) {
      this.cardCur = e.detail.current
    },
    // 跳转
    tn(e) {
      uni.navigateTo({
        url: e,
      });
    },

    // 获取顶部销售信息容器相关信息
    getTopInfoRect() {
      this._tGetRect('#top-info').then((res) => {
        if (!res) {
          setTimeout(() => {
            this.getTopInfoRect()
          }, 50)
          return
        }
        this.topInfo.height = res.height
      })
    },
    // 处理页面滚动事件
    handlePageScroll(scrollTop) {
      // console.log(scrollTop);
      if (this.prevScrollTop > scrollTop) {

        // 内容下滑，即手指从下往上滚
        this.topInfoTranslateY = 0
      } else {
        // 内容上滑，即手指从上往下滚
        if (scrollTop > this.topInfo.height) {
          this.topInfoTranslateY = this.topInfo.height
        }

      }

      this.prevScrollTop = scrollTop
    },
    getdata(id) {
      this.$http.getRequest('/open/goods/' + id, {})
          .then(res => {
            console.log(res)
            this.swiperList = res.data.goodImageJson.split(",");
            this.detialImageList =  res.data.goodDesc.split(",");
            this.mainImage =  res.data.goodImageJson.split(",")[1];
            this.bydata = res.data
          })
    },
    formatRichText(html) {
      if (!html) return
      //控制小程序中图片大小
      let newContent = html.replace(/<img[^>]*>/gi, function (match, capture) {
        match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
        match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
        match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
        return match;
      });
      newContent = newContent.replace(/style="[^"]+"/gi, function (match, capture) {
        match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi,
            'max-width:100%;');
        return match;
      });
      newContent = newContent.replace(/<br[^>]*\/>/gi, '');
      newContent = newContent.replace(/\<img/gi,
          '<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"');
      return newContent;
    },
  }
}
</script>

<style lang="scss" scoped>
.template-product {
}

/* 底部安全边距 start*/
.tn-tabbar-height {
  min-height: 120rpx;
  height: calc(140rpx + env(safe-area-inset-bottom) / 2);
  height: calc(140rpx + constant(safe-area-inset-bottom));
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

/* 轮播视觉差 start */
.card-swiper {
  height: 750rpx !important;
}

.card-swiper swiper-item {
  width: 750rpx !important;
  left: 0rpx;
  box-sizing: border-box;
  // padding: 0rpx 30rpx 90rpx 30rpx;
  overflow: initial;
}

.card-swiper swiper-item .swiper-item {
  width: 100%;
  display: block;
  height: 100%;
  transform: scale(1);
  transition: all 0.2s ease-in 0s;
  will-change: transform;
  overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item {
  transform: none;
  transition: all 0.2s ease-in 0s;
  will-change: transform;
}

.card-swiper swiper-item .swiper-item2 {
  margin-top: -980rpx;
  width: 900rpx;
  display: block;
  height: 1190rpx;
  border-radius: 0rpx;
  transform: translate(-65rpx, 20rpx) scale(0.3, 0.3);
  transition: all 0.6s ease 0s;
  will-change: transform;
  overflow: hidden;
  // border: 3rpx solid red;
}

.card-swiper swiper-item.cur .swiper-item2 {
  margin-top: -980rpx;
  transform: translate(-65rpx, 0rpx) scale(0.5, 0.5);
  transition: all 0.6s ease 0s;
  will-change: transform;
}

.card-swiper swiper-item .swiper-item3 {
  margin-top: -1050rpx;
  width: 900rpx;
  display: block;
  height: 900rpx;
  border-radius: 0rpx;
  transform: translate(-60rpx, 20rpx) scale(0.5, 0.5);
  transition: all 0.6s ease 0s;
  will-change: transform;
  overflow: hidden;
  // border: 3rpx solid blue;
}

.card-swiper swiper-item.cur .swiper-item3 {
  margin-top: -1050rpx;
  transform: translate(-60rpx, 0rpx) scale(0.6, 0.6);
  transition: all 0.6s ease 0s;
  will-change: transform;
}

.card-swiper swiper-item .swiper-item-text {
  margin-top: -520rpx;
  width: 100%;
  display: block;
  height: 50%;
  border-radius: 10rpx;
  transform: translate(100rpx, -60rpx) scale(0.9, 0.9);
  transition: all 0.6s ease 0s;
  will-change: transform;
  overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item-text {
  margin-top: -580rpx;
  width: 100%;
  transform: translate(0rpx, 60rpx) scale(0.9, 0.9);
  transition: all 0.6s ease 0s;
  will-change: transform;
}

.image-banner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-banner image {
  width: 100%;
  height: 100%;
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

.spot {
  background-color: #FFFFFF;
  opacity: 0.6;
  width: 10rpx;
  height: 10rpx;
  border-radius: 20rpx;
  top: -60rpx;
  margin: 0 8rpx !important;
  position: relative;
}

.spot.active {
  opacity: 1;
  width: 30rpx;
  background-color: #FFFFFF;
}

/* 悬浮 */
.png-sussuspension2 {
  animation: suspension2 3s ease-in-out infinite;
}

@keyframes suspension2 {

  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(-0.2rem, 1.4rem);
  }
}

/* 悬浮 */
.png-sussuspension3 {
  animation: suspension3 4s ease-in-out infinite;
}

@keyframes suspension3 {

  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0.4rem, 1rem);
  }
}

.text-sussuspension4 {
  animation: suspension4 4s ease-in-out infinite;
}

@keyframes suspension4 {

  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0rem, 1rem);
  }
}

/* 间隔线 start*/
.tn-strip-bottom-min {
  width: 100%;
  border-bottom: 1rpx solid #F8F9FB;
}

/* 间隔线 start*/
.tn-strip-bottom {
  width: 100%;
  border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
}

/* 间隔线 end*/

/* 底部*/
.details-footerfixed {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
  bottom: 0;
  width: 100%;
  transition: all 0.25s ease-out;
  will-change: transform;
  z-index: 100;
}


/* 内容图 start */
.content-backgroup {
  z-index: -1;

  .backgroud-image {
    width: 100%;
  }
}

/* 内容图 end */

.detial_box{
  height: 44px;
}
.flex-center{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  align-items: center;
}
.detial_box .text_detial{
  font-size: 14px;
  font-family: PingFang SC-Regular,PingFang SC;
  font-weight: 700;
  color: #312b2b;
  line-height: 28px;
  margin: 0px 15px;
}

.detial_box .flag_detial{
  width: 6px;
  height: 6px;
  background: #892eaa;
  transform: rotate(45deg);
}
//uni-page-body {
//  background-color: #fff;
//}
.template-product,.page{
  background: #FFFFFF!important;
}
</style>
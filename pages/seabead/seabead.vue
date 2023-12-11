<template>
  <view class="seabead">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
        <text class='icon tn-icon-left'></text>
      </view>
      <span class="tn-text-xl" style="color: #FFFFFF">我的海珠</span>
    </tn-nav-bar>


    <view class="bead-top">
      <view style="width: 100%" :style="{paddingTop: vuex_custom_bar_height + 20+'px'}">
        <!--      第一行-->
        <view class="bead-title tn-flex tn-flex-col-center">
          <image
              style="width: 50px;height: 50px;"
              :src="'/static/image/userCenter/haizhu.png'"
          ></image>
          <view class="tn-margin-left">
            <text style="color: #F1C68E;" class="tn-text-bold tn-text-xl">我的海珠</text>
          </view>
        </view>
        <!--  第二行    -->
        <view class="bead-detial tn-flex tn-flex-col-center  tn-flex-row-between" style="margin-top: 20px;width: 100%">
          <view class="tn-margin-left">
            <text style="color: #FFFFFF;font-size: 30px" class="tn-text-bold ">0</text>
          </view>

          <view style="margin-right: 20px" class="tn-margin-left">
            <tn-button backgroundColor="#31cfe0" fontColor="tn-color-white" size="sm">海珠转增</tn-button>
          </view>
        </view>

      </view>
    </view>

    <view class="bead-content">
      <view class="bead-three">
        <!-- 顶部标签 -->
        <tn-tabs-swiper ref="tabs" :list="list" :current="tabsIndex" :isScroll="false"
                        @change="tabsChange"></tn-tabs-swiper>
        <!-- 标签内容 -->
        <swiper class="swiper__box" :current="swiperIndex" @transition="swiperTransition"
                @animationfinish="swiperAnimationFinish">
          <swiper-item class="swiper__item">

            <scroll-view class="scroll-view" scroll-y @scrolltolower="scrollToLower">
              <view class="all" style="height:calc(100vh - 330px) ">

                <view class="item">
                  <view class="zz-left">
                    <view class="name">来自A的转增</view>
                    <view class="desc">2022-12-23 19:00:00</view>
                  </view>
                  <view class="zz-right">
                    <view style="font-size: 20px;color: #008000;margin-right: 5px">+20.88</view>
                    <image
                        style="width: 16px;height: 16px;"
                        :src="'/static/image/userCenter/haizhu.png'"
                    ></image>
                  </view>
                </view>

              </view>
            </scroll-view>

          </swiper-item>


          <swiper-item class="swiper__item">
            <view class="kk-empty">
              <tn-empty mode="data"></tn-empty>
            </view>

          </swiper-item>

          <swiper-item class="swiper__item">
            <view class="kk-empty">
              <tn-empty mode="data"></tn-empty>
            </view>
          </swiper-item>
        </swiper>
      </view>


    </view>
  </view>
</template>
<script>
import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
import TnEmpty from "../../tuniao-ui/components/tn-empty/tn-empty.vue";

export default {
  name: 'seabead',
  components: {TnEmpty},
  mixins: [template_page_mixin],
  data() {
    return {
      list: [{
        name: '全部'
      }, {
        name: '收入'
      }, {
        name: '支付'
      }],
      tabsIndex: 0,
      swiperIndex: 0
    }
  },
  methods: {
    // 标签栏值发生改变
    tabsChange(index) {
      this.swiperIndex = index
    },
    // swiper-item位置发生改变
    swiperTransition(event) {
      this.$refs.tabs.setDx(event.detail.dx)
    },
    // swiper动画结束
    swiperAnimationFinish(event) {
      const current = event.detail.current
      this.$refs.tabs.setFinishCurrent(current)
      this.swiperIndex = current
      this.tabsIndex = current
      console.log(this.tabsIndex)
    },
    scrollToLower() {
      console.log("到底了")
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
}

.seabead .bead-top {
  color: #FFFFFF;
  width: 100%;
  height: 240px;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 16px;
  background: url(/static/image/productList/sea-bg.jpg) no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
}

.seabead .bead-content {
  padding: 20px;

  .bead-three {
    background: #FFFFFF;
    border-radius: 13px;
    height: 100%;

    display: flex;
    flex-direction: column;
    height: calc(100vh - 280px);
    width: 100%;

  }

  .swiper {
    &__box {
      flex: 1;
    }

    &__item {
      height: 100%;
    }
  }

  .swiper__item {
    .item {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-direction: row;
      align-content: center;
      align-items: center;
      padding: 16px;
      background-color: #fff;
      border-radius: 6px;

      .zz-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .name {
          font-size: 16px;
          font-family: PingFang SC-Semibold, PingFang SC;
          font-weight: 600;
          color: #222;
          margin-bottom: 4px;
          line-height: 18px;
          width: 100px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .desc {
          font-size: 12px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #999;
        }
      }

      .zz-right {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: row;
      }
    }
  }
}

.kk-empty {
    margin-top: 100px;
}
</style>
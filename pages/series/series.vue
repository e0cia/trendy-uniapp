<template>
  <view class="template-series">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
            @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>


    <view class="tn-margin-sm" :style="{paddingTop: vuex_custom_bar_height + 20 + 'px'}">

      <!-- 比例图文 start-->
      <view class="tn-flex tn-flex-wrap tn-padding-bottom">
        <block v-for="(item, index) in content" :key="index">
          <view class="" style="width: 50%;">
            <view class="box-shadow image-content__wrap"> <!-- :class="[getRandomCoolBg(index)]" -->
              <view class="image-picbook" :style="'background-image:url(' + blindBoxInfo.image + ')'">
                <view class="image-book">
                </view>
              </view>
              <view class="image-content__label tn-text-justify tn-padding-sm">
                <view class="image-content__label__desc">
                  <view class="image-content__label__desc__text">
                    {{ blindBoxInfo.name }}
                  </view>
                </view>
              </view>

              <view class="image-content__label__item tn-text-bold">
                <text class="image-content__label__item--prefix tnloukong tn-icon-trophy"> {{ (100 / 6).toFixed(2) }}%
                </text>
              </view>


            </view>
          </view>
        </block>
      </view>
      <!-- 比例图文 end-->

    </view>

    <view class='tn-tabbar-height'></view>

  </view>
</template>

<script>
import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
import * as util from './../../util/util'

export default {
  name: 'TemplateSeries',
  mixins: [template_page_mixin],
  data() {
    return {
      content: [],
      blindBoxInfo: {}
    }
  },
  onLoad(e) {
    this.goolist()

  },
  methods: {
    goolist() {
      this.$http.postRequest('/kakabl/inventory/getCardInfo', {})
          .then(res => {
            if (res.code === 200) {
              this.content.push(res.data)
              this.blindBoxInfo = util.blidBoxType(res.data.blindBoxType);
              console.log(this.blindBoxInfo)
            } else {
              this.$t.message.toast(res.msg)
            }
          })
    },
    // 跳转
    tn(e) {
      uni.navigateTo({
        url: e,
      });
    },

    getRandomCoolBg() {
      return this.$t.color.getRandomCoolBgClass()
    },

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

/* 底部安全边距 start*/
.tn-tabbar-height {
  min-height: 120rpx;
  height: calc(140rpx + env(safe-area-inset-bottom) / 2);
  height: calc(140rpx + constant(safe-area-inset-bottom));
}

/* 页面阴影 start*/
.box-shadow {
  border-radius: 15rpx;
  border: 1rpx solid #494B51;
  background-color: rgba(255, 255, 255, 0.08);
  // box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
}

/* 图文内容 start*/
.image-content {
  &__wrap {
    box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.12);
    margin: 15rpx;
    padding: 20rpx;
  }

  &__info {
    &__btn {
      margin-right: -12rpx;
      opacity: 0.5;
    }
  }

  &__label {
    &__item {
      line-height: 45rpx;

      &--prefix {
        position: absolute;
        color: #ff9479;
        padding-right: 10rpx;
        margin: -330rpx 0 0 0;
      }
    }

    &__desc {
      width: 220rpx;
      height: 60rpx;
      overflow: hidden;
      line-height: 55rpx;
      background-color: rgba(255, 255, 255, 0.9);
      color: #000000;
      padding: 15rpx;
      position: absolute;
      margin: -60rpx 0 0 55rpx;
      transform: rotate(-5deg);

      &__text {
        margin: -10rpx 0 0 0;
        transform: rotate(5deg);
        text-align: center;
      }
    }

  }

}

.image-book {
  padding: 145rpx 0rpx;
  font-size: 16rpx;
  font-weight: 300;
  position: relative;
}

.image-picbook {
  background-size: cover;
  background-repeat: no-repeat;
  // background-attachment:fixed;
  background-position: top;
  border-radius: 0;
  // clip-path: polygon(160rpx 0, 100% 0, 100% 100%, 0 100%, 0 60rpx,145rpx 50rpx);
  // clip-path: polygon(100% 100%,100% 0%,46% 0%,29% 50%,45% 45%,30% 100%,0% 100%,0% 0%,63% 0%,51% 31%,68% 25%,30% 100%);
  clip-path: polygon(18% 0%, 51% 8%, 0% 41%, 100% 0%, 100% 100%, 0% 100%);
}

/* 内容 end*/
</style>

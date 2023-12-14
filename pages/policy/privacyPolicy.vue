

<template>
  <view  class="policy  tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar class='back-go' :isBack="true" fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
        <text class='icon tn-icon-left-arrow'></text>
      </view>
      <view class="tn-flex tn-flex-col-center tn-flex-row-center">
        <text class="tn-text-xl tn-color-white">我的海珠</text>
      </view>
    </tn-nav-bar>
    <!-- 其他页面内容 -->
    <web-view :src="url"></web-view>
    <!-- 其他页面内容 -->

  </view>
</template>

<script>
import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
export default {
  mixins: [template_page_mixin],
  data() {
    return {
      url: 'https://www.yuque.com/yuanxun-api/ae2vbh/privacypolicy'
    };
  }
};
</script>
<style lang="scss" scoped>

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
</style>
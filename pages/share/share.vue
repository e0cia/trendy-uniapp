<template>
  <view class="share">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
            @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    <view >
      <poster @success="posterSuccess"
              :imgSrc="'https://bpic.51yuansu.com/pic3/cover/04/09/63/632a5f6c79f34_800.jpg?x-oss-process=image/sharpen,100'"
              :QrSrc="'https://bpic.51yuansu.com/pic2/cover/00/27/19/57fc383074f64_610.jpg?x-oss-process=image/sharpen,100'"
              :Title="'卡卡部落'" :PriceTxt="'卡卡部落'"  :ViewDetails="'激活码:336655'" :LineType="true"></poster>
    </view>

  <view style="margin-top: 10px;text-align: center">
    长安图片保存分享
  </view>
  </view>
</template>
<script>
import poster from '@/components/poster.vue'
import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
export default {
  mixins: [template_page_mixin],
  components: {
    poster
  },
  methods: {
    posterSuccess(e) {
      console.log(e)
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
.share{
  height: 100vh;
  background: #FFFFFF;
}
</style>

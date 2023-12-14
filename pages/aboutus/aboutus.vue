<template>
  <view class="policy  tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar class='back-go' :isBack="true" fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
        <text class='icon tn-icon-left-arrow'></text>
      </view>
      <view class="tn-flex tn-flex-col-center tn-flex-row-center">
        <text class="tn-text-xl tn-color-white">关于我的</text>
      </view>
    </tn-nav-bar>
    <view :style="{paddingTop: vuex_custom_bar_height + 20 + 'px'}">
      <view class="top-image">
          <view>
            <image style="width: 80px;height: 80px;"
                   :src="'/static/image/userCenter/haizhu.png'"></image>
          </view>
          <view>
            卡卡部落<text class="top-image-version">（V1.1.0）</text>
          </view>
      </view>
      <!-- 下面的导航栏 -->
      <view class="list-content tn-margin-top-xl tn-padding-top-sm tn-padding-bottom-sm">
        <view @click="tn('/pages/policy/userAgreement')">
          <view style="font-size: 10px;" class="tn-border-solid-bottom  tn-form-item tn-list-cell-class tn-list-cell  tn-list-cell--unlined tn-list-cell--radius">
            <view class="tn-flex tn-flex-col-center">
              <view class="tn-margin-left-sm tn-flex-1 tn-text-xl">用户协议</view>
              <view class="tn-margin-left-sm  tn-text-xl tn-icon-right right-icon"></view>
            </view>
          </view>
        </view>

        <view  @click="tn('/pages/policy/privacyPolicy')" class="tn-margin-top-lg">
          <view style="font-size: 10px;" class="tn-border-solid-bottom  tn-form-item tn-list-cell-class tn-list-cell  tn-list-cell--unlined tn-list-cell--radius">
            <view class="tn-flex tn-flex-col-center">
              <view class="tn-margin-left-sm tn-flex-1 tn-text-xl">隐私政策</view>
              <view class="tn-margin-left-sm  tn-text-xl tn-icon-right right-icon"></view>
            </view>
          </view>
        </view>

        <view class="tn-margin-top-lg">
          <view style="font-size: 10px;" class="tn-border-solid-bottom  tn-form-item tn-list-cell-class tn-list-cell  tn-list-cell--unlined tn-list-cell--radius">
            <view class="tn-flex tn-flex-col-center">
              <view class="tn-margin-left-sm tn-flex-1 tn-text-xl">检测更新</view>
              <view class="tn-margin-left-sm  tn-text-sm right-icon">当前最新版本</view>
            </view>
          </view>
        </view>

      </view>


    </view>

    <view class="bottom-content">
      <view class="tn-flex tn-flex-col-center cen">
        <view class="tn-margin-left-sm tn-flex-1 tn-text-sm">广西瀚乾信息科技有限公司</view>
        <view class="tn-margin-left-sm  tn-text-sm ">版权所有</view>
      </view>
    </view>

  </view>

</template>

<script>
import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
import TnListView from "../../tuniao-ui/components/tn-list-view/tn-list-view.vue";

export default {
  components: {TnListView},
  mixins: [template_page_mixin],
  data() {
    return {};
  },
  methods: {
    tn(e) {
      uni.navigateTo({
        url: e,
      });
    }
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


.top-image {
  text-align: center;
  margin-top: 30px;
  color: #FFFFFF;
  .top-image-version{
    margin-left: 10px;
  }
}
.list-content {
  margin-top: 100px;
  color: rgba(255,255,255,.9);
  padding: 0 15px;
}
.tn-border-solid-bottom{
  border: 0px;
  border-bottom-width: 1px!important;
  border-style: solid;
  border-color: rgba(255,255,255,.2);
  .right-icon{
    color: rgba(255,255,255,.6);
  }
}
.tn-form-item{
  display: flex;
  flex-direction: column;
  padding: 6px 0;
  font-size: 9px;
  box-sizing: border-box;
  line-height: 24px;
}
.bottom-content{
  width: 100%;
  margin: 0 auto;
  position: fixed;
  bottom: 20px;
  color: rgba(255,255,255,.7);
  .cen{
    width: 60%;
    margin: auto;
  }
}
</style>
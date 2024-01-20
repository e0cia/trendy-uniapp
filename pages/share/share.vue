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
    <view  :style="{paddingTop: vuex_custom_bar_height  + 'px'}" class="share-content">
<!--      备用https://api.nbhao.org/v1/qrcode/make?text=https://h5.xunfan.art/%23/pages/login/login&el=H&fc=steelblue&bc=white&s=500-->
      <poster @success="posterSuccess"
                :imgSrc="'https://kakabl.oss-cn-beijing.aliyuncs.com/kk/poster.png'"
              :QrSrc="'https://api.qrserver.com/v1/create-qr-code/?size=391x391&data=https://h5.xunfan.art/%23/pages/login/login?inviteCode='+userInfo.inviteCode"
              :Title="'卡卡部落'" :PriceTxt="'卡卡部落'"  :ViewDetails="'激活码:'+userInfo.inviteCode" :LineType="true"></poster>
    </view>

  <view style="margin-top: 10px;text-align: center">
    长安图片保存分享
  </view>
  </view>
</template>
<script>
import poster from '@/components/poster.vue'
import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
import sharebg from '@/static/image/share/share-bg.jpg';
import qrcode from 'uniapp-qrcode'
export default {
  mixins: [template_page_mixin],
  components: {
    poster
  },
  methods: {
    posterSuccess(e) {
    },
  },
  data() {
    return {
      sharebg:sharebg,
      userInfo:{}
    }
  },
  mounted() {
    //获取用户信息
    this.userInfo = uni.getStorageSync("userInfo").extendUserInfo;
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
  background: #f6f6f6;
}
.share-content{
  padding: 12px 18px;
}
</style>

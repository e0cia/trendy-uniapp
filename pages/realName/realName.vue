<template>
  <view class="real-name">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back' @click="goBack" >
        <text class='icon tn-icon-left'></text>
      </view>
      实名认证
    </tn-nav-bar>
    <view class="kk-real-name" :style="{paddingTop: vuex_custom_bar_height + 20+'px'}">
      <view>
        <h2 class="title">
          身份证信息
        </h2>
        <p class="text1">1.完成实名认证，保障您的资金安全</p>
        <p class="text1">2.一个身份信息只能认证一个账号</p>
        <p class="text1">3.提现只能到账实名认证身份下的支付宝</p>
      </view>
      <view class="input-area">
      </view>
      <view class="input-area">
        姓名
        <tn-input :disabled="isReal" placeholder="请输入您的真实姓名" v-model="realName"/>
      </view>
      <view class="input-area">
        身份证
        <tn-input :disabled="isReal"  placeholder="请输入您的身份证号" v-model="idCard"/>
      </view>
      <view v-if="!isReal" @click="realNameFun()">
        <view class="kaka-custom-style ">
          <span class="kaka-custom-text">实名认证</span>
        </view>
      </view>
      <view>
        <view  v-if="isReal"  class="kaka-custom-style " style="background: gray">
          <span class="kaka-custom-text">已认证</span>
        </view>
      </view>
    </view>

  </view>

</template>
<script>
import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
import * as util from './../../util/util'

export default {
  name: 'realName',
  mixins: [template_page_mixin],
  data() {
    return {
      realName: '',
      idCard: '',
      isReal:false,
      userInfo:{}
    }
  },
  mounted() {
    //初始化是否实名
    this.userInfo = uni.getStorageSync("userInfo")
    //是否实名
    if (this.userInfo.extendUserInfo.isRealnameAuthenticated===1){

      this.isReal = true
      this.realName = this.userInfo.extendUserInfo.fullName;
      this.idCard = this.userInfo.extendUserInfo.idCardNumber;
    }
  },
  methods: {
    getuserInfo() {
      this.$http.postRequest('/kakabl/extenduser/center/userInfo', {})
          .then(res => {
            if (res.code === 200) {
              uni.setStorageSync("userInfo", res.data)
              this.userInfo = res.data
              this.realName = res.data.extendUserInfo.fullName;
              this.idCard = res.data.extendUserInfo.idCardNumber;
            } else {
              this.$t.message.toast(res.msg)
            }
          })
    },
    // 跳转
    tn(e) {
      uni.navigateTo({
        url: e,
      })
    },
    realNameFun(){
      if (util.isBlank(this.realName)){
        this.$t.message.toast('姓名不可为空')
        return
      }
      if (!util.isRealName(this.realName)){
        this.$t.message.toast('姓名不正确')
        return
      }
      if (util.isBlank(this.idCard)){
        this.$t.message.toast('身份证号不可为空')
        return
      }
      if (!util.isIdCard(this.idCard)){
        this.$t.message.toast('身份证号不正确')
        return
      }
      let param = {
        fullName:this.realName,
        idCardNumber:this.idCard
      }
      this.$t.message.loading('实名认证中')
      this.$http.postRequest('/kakabl/extenduser/userIdcardAudit', param)
          .then(res => {
            if (res.code === 200) {
              //更新完毕
              this.isReal = true
              this.getuserInfo()
              this.$t.message.closeLoading()
              this.$t.message.toast(res.msg)
            } else {
              this.$t.message.toast(res.msg)
            }
          })
    }
  }
}


</script>
<style lang="scss" scoped>
.kk-real-name {
  color: #FFFFFF;
}

/* 胶囊*/
.tn-custom-nav-bar__back {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 1000rpx;
  border: 1rpx solid rgba(0, 0, 0, .1);
  color: #000000;
  font-size: 18px;

  .icon {
    display: block;
    flex: 1;
    margin: auto;
    text-align: center;
  }
}

.real-name {
  height: 100vh;
  background: #FFFFFF !important;

  .kk-real-name {
    color: #020202;
    padding: 0px 20px;


    .text1 {
      color: #a3a3a3;
      margin-top: 8px;
    }
    .input-area{
        margin-top: 20px;
    }
  }
}

.kaka-custom-style {
  margin-top: 20px;
  color: white;
  border-width: 0px;
  background-image: linear-gradient(90deg, #61309d, #f6b0e3);
  height: 56px;
  border-radius: 4px;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
}

.kaka-custom-text {
  font-size: 18px;
  font-weight: 700;
}

</style>

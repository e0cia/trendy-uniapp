<template>
  <view class="template-login">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
            @click="goToHome()">
        <text class='icon tn-icon-left'></text>
      </view>
    </tn-nav-bar>

    <view class="login">

      <view class="login__wrapper" :style="{paddingTop: vuex_custom_bar_height  + 'px'}">
        <view class="tn-margin-left tn-margin-right tn-text-bold tn-color-white" style="font-size: 45rpx;">
          你好!
        </view>
        <view class="tn-margin tn-color-gray--dark tn-text-lg" style="font-weight: 700;font-size: 45rpx;">
          欢迎登录卡卡部落
        </view>

        <!-- 输入框内容-->
        <view class="login__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
          <!-- 账号密码登录 -->
          <block v-if="currentModeIndex === 0">
            <view
                class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-phone"></view>
              </view>
              <view class="login__info__item__input__content">
                <input v-model="form.userName" maxlength="20" placeholder-class="input-placeholder"
                       placeholder="请输入手机/账号"/>
              </view>
            </view>

            <view
                class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-lock"></view>
              </view>
              <view class="login__info__item__input__content">
                <input v-model="form.passWord" maxlength="20" placeholder-class="input-placeholder"
                       placeholder="请输入密码"/>
              </view>
            </view>
          </block>


          <!-- 验证码登录 -->
          <block v-if="currentModeIndex === 2">
            <view
                class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-phone"></view>
              </view>
              <view class="login__info__item__input__content">
                <input v-model="form.userName" maxlength="20" placeholder-class="input-placeholder"
                       placeholder="请输入手机/账号"/>
              </view>
            </view>

            <view
                class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-safe"></view>
              </view>
              <view class="login__info__item__input__content login__info__item__input__content--verify-code">
                <input v-model="form.smsCode" placeholder-class="input-placeholder" placeholder="请输入验证码"/>
              </view>
              <view class="login__info__item__input__right-verify-code" @tap.stop="captionGetCode">
                <tn-button backgroundColor="#FFFFFF" fontColor="#000000" size="sm" padding="5rpx 10rpx" width="100%"
                           shape="round">{{ tips }}
                </tn-button>
              </view>
            </view>
          </block>


          <!-- 注册 -->
          <block v-if="currentModeIndex === 1">
            <view
                class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-phone"></view>
              </view>
              <view class="login__info__item__input__content">
                <input v-model="form.userName" maxlength="20" placeholder-class="input-placeholder"
                       placeholder="请输入手机/账号"/>
              </view>
            </view>

            <view
                class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-safe"></view>
              </view>
              <view class="login__info__item__input__content login__info__item__input__content--verify-code">
                <input v-model="form.smsCode" placeholder-class="input-placeholder" placeholder="请输入验证码"/>
              </view>
              <view class="login__info__item__input__right-verify-code" @tap.stop="captionGetCode">
                <tn-button backgroundColor="#FFFFFF" fontColor="#000000" size="sm" padding="5rpx 10rpx" width="100%"
                           shape="round">{{ tips }}
                </tn-button>
              </view>
            </view>

            <view
                class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-lock"></view>
              </view>
              <view class="login__info__item__input__content">
                <input v-model="form.passWord" :password="!showPassword" placeholder-class="input-placeholder"
                       placeholder="请输入登录密码"/>
              </view>
              <view class="login__info__item__input__right-icon" @click="showPassword = !showPassword">
                <view :class="[showPassword ? 'tn-icon-eye' : 'tn-icon-eye-hide']"></view>
              </view>
            </view>
            <view
                class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-lock"></view>
              </view>
              <view class="login__info__item__input__content">
                <input v-model="form.rePassWord" :password="!showPassword" placeholder-class="input-placeholder"
                       placeholder="请确认登录密码"/>
              </view>
              <view class="login__info__item__input__right-icon" @click="showPassword = !showPassword">
                <view :class="[showPassword ? 'tn-icon-eye' : 'tn-icon-eye-hide']"></view>
              </view>
            </view>
            <view
                class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-lock"></view>
              </view>
              <view class="login__info__item__input__content">
                <input type="number" v-model="form.payPassword" :password="!showPassword"
                       placeholder-class="input-placeholder"
                       placeholder="请输入支付密码"/>
              </view>
              <view class="login__info__item__input__right-icon" @click="showPassword = !showPassword">
                <view :class="[showPassword ? 'tn-icon-eye' : 'tn-icon-eye-hide']"></view>
              </view>
            </view>
            <view
                class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-password"></view>
              </view>
              <view class="login__info__item__input__content">
                <input v-model="form.inviteCode" placeholder-class="input-placeholder"
                       placeholder="请输入邀请码"/>
              </view>
            </view>
          </block>


          <view v-if="currentModeIndex === 0 || currentModeIndex === 2" style="width: 100%"
                :class="[{'login__info__item__tips': currentModeIndex === 1}]">
            <view class="tn-flex tn-flex-row-between tn-padding-xl">
              <view v-if="currentModeIndex === 2" class="tn-padding-right" style="color: #FFFFFF80;"
                    @tap.stop="modeSwitch(0)">密码登录
              </view>
              <view v-if="currentModeIndex === 0" class="tn-padding-right" style="color: #FFFFFF80;"
                    @tap.stop="modeSwitch(2)">验证码登录
              </view>
              <view class="tn-padding-left" style="color: #FFFFFF80;" @click="tn('/pages/forget/forget')">忘记密码？
              </view>
            </view>
          </view>


          <view @click="login()" style="width: 100%" v-if="currentModeIndex === 0 || currentModeIndex === 2">
            <view class="kaka-custom-style ">
              <span class="kaka-custom-text">登录</span>
            </view>
          </view>
          <uni-view v-if="currentModeIndex === 1" class="tn-flex tn-flex-row-between tn-padding-xl"></uni-view>
          <view @click="smsCodeRegister()" style="width: 100%" v-if="currentModeIndex === 1">
            <view class="kaka-custom-style ">
              <span class="kaka-custom-text">注册</span>
            </view>
          </view>

          <view v-if="currentModeIndex === 0|| currentModeIndex === 2" class="kk-lr-top">
            <text @tap.stop="modeSwitch(1)" class="text">
              还没有账号,去注册
            </text>
          </view>


          <view v-if="currentModeIndex === 1" :class="[{'login__info__item__tips': currentModeIndex === 0}]">
            <view class="tn-flex tn-flex-row-between ">
              <view style="color: #FFFFFF80; margin-top: 10px" @tap.stop="modeSwitch(0)">已有账号？前往登录</view>
            </view>
          </view>

        </view>
        <view class="kk-register-xieyi">
          <view class="agreen">
            <view @click="isSure()" class="flex-center radio-box">
              <view v-if="!isSureFlag" class="false"></view>
              <image v-else class="sure" :src="'https://kakabl-1.oss-cn-beijing.aliyuncs.com/image/login/i11.png'"></image>
            </view>
            <view class="desc">
              <text class="text1">我已阅读并同意</text>
              <text @click="tn('/pages/policy/userAgreement')" style="color: #0670ec" class="text1">用户协议</text>
              <text class="text1">和</text>
              <text @click="tn('/pages/policy/privacyPolicy')" style="color: #0670ec" class="text1">隐私协议</text>
            </view>
          </view>
        </view>


      </view>
    </view>

    <!-- 验证码倒计时 -->
    <tn-verification-code
        ref="code"
        uniqueKey="login-demo-4"
        :seconds="120"
        @change="codeChange">
    </tn-verification-code>
	 <!-- #ifdef APP-PLUS -->
	<web-view v-if="isShowWebView" src="/hybrid/html/caption.html"  @message="getCode" ></web-view>
   <!-- #endif -->
  </view>
</template>

<script>
import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
import * as util from './../../util/util'

export default {
  name: 'login-demo-4',
  mixins: [template_page_mixin],
  data() {
    return {
		isShowWebView:false,
      // 当前选中的模式 （0、账号密码登录 1、注册 2、登录）
      currentModeIndex: 0,
      // 模式选中滑块
      modeSliderStyle: {
        left: 0
      },
      // 是否显示密码
      showPassword: false,
      // 倒计时提示文字
      tips: '获取验证码',
      //邀请码
      form: {
        inviteCode: '',//邀请码
        jsCode: '',//发送验证码时候验证的
        userName: '',//用户名
        smsCode: '',//验证码
        passWord: '',//密码
        rePassWord: '',//确认密码
        payPassword: '',//支付密码
        rePayPassWord: "",//确认支付密码
		randstr:"",
		ticket:""
      },
      isSureFlag: false,
    }
  },
  watch: {
    currentModeIndex(value) {
      const sliderWidth = uni.upx2px(476 / 2)
      this.modeSliderStyle.left = `${sliderWidth * value}px`
    }
  },
  onLoad (e) {
    if (e.inviteCode) {
      this.form.inviteCode = e.inviteCode
	  this.currentModeIndex =1
    }
  },
  methods: {
    // 跳转
    tn(e) {
      uni.navigateTo({
        url: e,
      });
    },
    // 切换模式
    modeSwitch(index) {
      this.currentModeIndex = index
      this.showPassword = false
    },
	captionGetCode(){
		if (!this.$refs.code.canGetCode) {
			   this.$t.message.toast(this.$refs.code.secNum + '秒后再重试')
			   return;
		}
		// 当前选中的模式 （ 1、注册 2、登录）
		if (util.isBlank(this.form.userName)) {
		  this.$t.message.toast('手机号不可为空');
		  return;
		}
		if (!util.isPhoneNumber(this.form.userName)) {
		  this.$t.message.toast('请输入正确的手机号');
		  return;
		}
		/*#ifdef APP-PLUS*/
		this.isShowWebView = true
		  /*#endif*/
		/*#ifdef H5*/
		var captcha = new TencentCaptcha('190940249', this.getCode, {})
		// 调用方法，显示验证码
		captcha.show()
		/*#endif*/

	},
    // 获取验证码
    getCode(resv) {
		let res = resv;
		 /*#ifdef APP-PLUS*/
		 res = resv.detail.data[0].res;
		this.isShowWebView = false
		  /*#endif*/
		
		
	  if (res.ret !== 0) {
		 this.$t.message.toast('验证失败');
		  return;
	  }
	    this.form.randstr = res.randstr
	    this.form.ticket = res.ticket
      // 当前选中的模式 （ 1、注册 2、登录）
      if (util.isBlank(this.form.userName)) {
        this.$t.message.toast('手机号不可为空');
        return;
      }
      if (!util.isPhoneNumber(this.form.userName)) {
        this.$t.message.toast('请输入正确的手机号');
        return;
      }
      let param = {
        userName: this.form.userName,
      randstr:res.randstr,
      ticket:res.ticket
      }
      //2、登录
      if (this.currentModeIndex === 2 && this.$refs.code.canGetCode) {
        this.$t.message.loading('正在获取验证码')
        this.$http.postRequest('/open/api/login/sendCmsCode', param)
            .then(res => {
              this.$t.message.closeLoading()
              if (res.code === 200) {
                this.$t.message.toast(res.msg)
                // 通知组件开始计时
                this.$refs.code.start()
              } else {
                this.$t.message.toast(res.msg)
                return;
              }
            })
      } else if (this.currentModeIndex === 1 && this.$refs.code.canGetCode) {
        this.$t.message.loading('正在获取验证码')
        //1、注册
        this.$http.postRequest('/open/api/register/sendCmsCode', param)
            .then(res => {
              this.$t.message.closeLoading()
              if (res.code === 200) {
                this.$t.message.toast(res.msg)
                // 通知组件开始计时
                this.$refs.code.start()
              } else {
                this.$t.message.toast(res.msg)
                return;
              }
            })
      }
      if (!this.$refs.code.canGetCode) {
        this.$t.message.toast(this.$refs.code.secNum + '秒后再重试')
      }

    },
    // 获取验证码倒计时被修改
    codeChange(event) {
      this.tips = event
    },
    isSure() {
      this.isSureFlag = !this.isSureFlag;
    },

    //登录
    login() {
      //是否同意隐私
      if (!this.isSureFlag) {
        this.$t.message.toast('请先阅读并同意《用户协议》与《隐私条款》')
        return;
      }
      //账号密码登录
      if (this.currentModeIndex === 0) {
        this.passwordLogin()
      } else if (this.currentModeIndex === 2) {
        //2、验证码登录
        this.smsCodeLogin()
      }
    },
    //账号密码登录
    passwordLogin() {
      if (util.isBlank(this.form.userName)) {
        this.$t.message.toast('账号不可为空')
        return
      }
      if (util.isBlank(this.form.passWord)) {
        this.$t.message.toast('密码不可为空')
        return;
      }
      let param = {"username": this.form.userName, "password": this.form.passWord}
      this.$t.message.loading('正在登录')
      this.$http.postRequest('/login', param)
          .then(res => {
            if (res.code === 200) {
              this.$t.message.closeLoading()
              uni.setStorageSync("Authorization", res.data.token)
              uni.setStorageSync("userInfo", res.data.userInfo)
              uni.reLaunch({
                url: '../index/index',
              });
            } else {
              this.$t.message.toast(res.msg)
            }
          })
    },
    //账号密码登录
    smsCodeLogin() {
      if (util.isBlank(this.form.userName)) {
        this.$t.message.toast('手机号不可为空')
        return
      }
      if (util.isBlank(this.form.smsCode)) {
        this.$t.message.toast('验证码不可为空')
        return;
      }
      if (!util.isPhoneNumber(this.form.userName)) {
        this.$t.message.toast('请输入正确手机号')
        return;
      }
      if (!util.isSmsCode(this.form.smsCode)) {
        this.$t.message.toast('请输入6为验证码')
        return;
      }
      let param = {"userName": this.form.userName, "smsCode": this.form.smsCode}
      this.$t.message.loading('正在登录')
      this.$http.postRequest('/open/api/login/checkCode', param)
          .then(res => {
            console.log(res);
            if (res.code === 200) {
              this.$t.message.closeLoading()
              uni.setStorageSync("Authorization", res.data.token)
              uni.setStorageSync("userInfo", res.data.userInfo)
              uni.reLaunch({
                url: '../index/index',
              });
            } else {
              this.$t.message.toast(res.msg)
            }
          })
    },
    //验证码注册
    smsCodeRegister() {
      //是否同意隐私
      if (!this.isSureFlag) {
        this.$t.message.toast('请先阅读并同意《用户协议》与《隐私条款》')
        return;
      }
      if (util.isBlank(this.form.userName)) {
        this.$t.message.toast('手机号不可为空')
        return
      }
      if (util.isBlank(this.form.smsCode)) {
        this.$t.message.toast('验证码不可为空')
        return;
      }
      if (util.isBlank(this.form.passWord)) {
        this.$t.message.toast('密码不可为空')
        return;
      }
      if (util.isBlank(this.form.rePassWord)) {
        this.$t.message.toast('确认密码不可为空')
        return;
      }
      if (util.isBlank(this.form.payPassword)) {
        this.$t.message.toast('支付密码不可为空')
        return;
      }
      if (util.isBlank(this.form.inviteCode)) {
        this.$t.message.toast('邀请码不可为空')
        return;
      }

      if (!util.isPhoneNumber(this.form.userName)) {
        this.$t.message.toast('请输入正确手机号')
        return;
      }
      if (!util.isSmsCode(this.form.smsCode)) {
        this.$t.message.toast('请输入6为验证码')
        return;
      }
      if (!util.isPassword(this.form.passWord)) {
        this.$t.message.toast('密码需长度大于6，且由数字和英文字符')
        return;
      }
      if (this.form.passWord !== this.form.rePassWord) {
        this.$t.message.toast('两次密码不相同')
        return;
      }
      if (!util.isPayWord(this.form.payPassword)) {
        this.$t.message.toast('请输入6为支付密码')
        return;
      }

      let param = {
        "userName": this.form.userName,
        "smsCode": this.form.smsCode,
        "passWord": this.form.passWord,
        "rePassWord": this.form.rePassWord,
        "payPassword": this.form.payPassword,
        "inviteCode": this.form.inviteCode
      }
      this.$t.message.loading('正在登录')
      this.$http.postRequest('/open/api/register/checkCode', param)
          .then(res => {
            if (res.code === 200) {
              this.$t.message.closeLoading()
              uni.setStorageSync("Authorization", res.data.token)
              uni.setStorageSync("userInfo", res.data.userInfo)
              uni.reLaunch({
                url: '../index/index',
              });
            } else {
              this.$t.message.toast(res.msg)
            }
          })
    },
    goToHome() {
      uni.reLaunch({
        url: '/pages/index/index',
      });
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


.login {
  height: 100%;
  position: relative;
  z-index: 1;

  /* 背景图片 start */
  &__bg {
    z-index: -1;
    position: fixed;

    &--top {
      top: 0;
      left: 0;
      right: 0;
      width: 100%;

      .bg {
        width: 750rpx;
        will-change: transform;
      }
    }

    &--bottom {
      bottom: -10rpx;
      left: 0;
      right: 0;
      width: 100%;
      // height: 144px;
      margin-bottom: env(safe-area-inset-bottom);

      image {
        width: 750rpx;
        will-change: transform;
      }
    }
  }

  /* 背景图片 end */

  /* 内容 start */
  &__wrapper {
    margin-top: 300rpx;
    width: 100%;
  }

  /* 切换 start */
  &__mode {
    position: relative;
    margin: 0 auto;
    width: 476rpx;
    height: 77rpx;
    margin-top: 100rpx;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0rpx 10rpx 50rpx 0rpx rgba(0, 3, 72, 0.1);
    border-radius: 39rpx;

    &__item {
      height: 77rpx;
      width: 100%;
      line-height: 77rpx;
      text-align: center;
      font-size: 31rpx;
      color: #080808;
      letter-spacing: 1em;
      text-indent: 1em;
      z-index: 2;
      transition: all 0.4s;

      &--active {
        font-weight: bold;
        color: #FFFFFF;
      }
    }

    &__slider {
      position: absolute;
      height: inherit;
      width: calc(476rpx / 2);
      border-radius: inherit;
      box-shadow: 0rpx 18rpx 72rpx 18rpx rgba(0, 195, 255, 0.1);
      z-index: 1;
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }

  /* 切换 end */

  /* 登录注册信息 start */
  &__info {
    margin: 40rpx 30rpx 10rpx 30rpx;
    padding-bottom: 0;
    border-radius: 20rpx;

    &__item {

      &__input {
        margin-top: 59rpx;
        width: 100%;
        height: 77rpx;
        border: 1rpx solid #E6E6E6;
        border-radius: 39rpx;

        &__left-icon {
          width: 10%;
          font-size: 44rpx;
          margin-left: 20rpx;
          color: #838383;
        }

        &__content {
          color: #FFFFFF;
          width: 80%;
          padding-left: 10rpx;

          &--verify-code {
            width: 56%;
          }

          input {
            font-size: 24rpx;
            // letter-spacing: 0.1em;
          }
        }

        &__right-icon {
          width: 10%;
          font-size: 44rpx;
          margin-right: 20rpx;
          color: #838383;
        }

        &__right-verify-code {
          width: 34%;
          margin-right: 20rpx;
        }
      }

      &__tips {
        margin: 30rpx 0;
        color: #AAAAAA;
      }
    }
  }

  /* 登录注册信息 end */

  /* 登录方式切换 start */
  &__way {
    margin: 0 auto;
    margin-top: 110rpx;

    &__item {
      &--icon {
        width: 85rpx;
        height: 85rpx;
        font-size: 80rpx;
        // border-radius: 100rpx;
        margin-bottom: 18rpx;
        position: relative;
        z-index: 1;

        //&::after {
        //  content: " ";
        //  position: absolute;
        //  z-index: -1;
        //  width: 100%;
        //  height: 100%;
        //  left: 0;
        //  bottom: 0;
        //  border-radius: inherit;
        //  opacity: 1;
        //  transform: scale(1, 1);
        //  background-size: 100% 100%;
        //  background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg5.png);
        //}
      }
    }
  }

  /* 登录方式切换 end */
  /* 内容 end */

}

/* 底部悬浮按钮 start*/
.tn-tabbar-height {
  min-height: 160rpx;
  height: calc(180rpx + env(safe-area-inset-bottom) / 2);
  height: calc(180rpx + constant(safe-area-inset-bottom));
}

.tn-footerfixed {
  position: fixed;
  width: 100%;
  bottom: calc(80rpx + env(safe-area-inset-bottom));
  z-index: 1024;
  box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);

}

/* 底部悬浮按钮 end*/

/deep/ .input-placeholder {
  font-size: 24rpx;
  color: #838383;
}

.login__info__item__input {
  border-radius: 10px
}

.login__wrapper {
  position: absolute;
  top: 80px;
  width: 100%;
  margin-top: unset;
}


.kaka-custom-style {
  color: white;
  border-width: 0px;
  background-image: linear-gradient(90deg, #61309d, #f6b0e3);
  height: 56px;
  border-radius: 4px;
  box-shadow: 0px 2px 0px 0px #61309d;
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

.kk-lr-top {
  padding-top: 22px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  align-items: center;
}

.kk-lr-top .text {
  font-size: 14px;
  color: #999;
  font-family: PingFang SC-Medium, PingFang SC;
}

.tn-padding-xl {
  padding: 20px 26px 30px 26px;
}

.login__info__item__input__right-verify-code uni-button {
  background: unset !important;
  color: #0670ec !important;
}

.template-login {
  height: 100vh;
  position: relative;
  background-size: 100%;
  background: url(https://kakabl-1.oss-cn-beijing.aliyuncs.com/image/login/login_bg.png) no-repeat;
}

.kk-register-xieyi {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  align-items: center;
}

.kk-register-xieyi .agreen {
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  display: flex;
}

.flex-center {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  align-items: center;
}

.agreen .radio-box {
  margin-top: 2px;
  margin-right: 10px;
  border-radius: 100%;

  .false {
    width: 14px;
    height: 14px;
    opacity: 1;
    border: 1px solid #999;
    box-sizing: border-box;
    border-radius: 100%;
    margin-right: 2px;
  }

  .sure {
    width: 14px;
    height: 14px;
    margin-right: 2px;
    border-radius: 100%;
    display: inline-block;
    overflow: hidden;
    position: relative;
  }
}

.kk-register-xieyi .agreen .desc {
  white-space: pre;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  align-items: center;

  .text1 {
    text-align: justify;
    font-size: 12px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #999;
  }
}

</style>

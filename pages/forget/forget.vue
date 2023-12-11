<template>
  <view class="template-forget">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="tn('/pages/login/login')">
        <text class='icon tn-icon-left'></text>
      </view>
    </tn-nav-bar>

    <view class="login">

      <view class="login__wrapper">
        <view  >
          <view class="tn-margin-left tn-margin-right tn-text-bold tn-color-white" style="font-size: 40rpx;">
            重置密码
          </view>
          <view class="tn-margin tn-color-gray--dark tn-text-lg">
            请输入账号以及验证码
          </view>
        </view>
        <!-- 输入框内容-->
        <view class="login__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
          <!-- 设置新密码 -->
          <!-- 验证 -->
          <block >
            <view class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-email"></view>
              </view>
              <view class="login__info__item__input__content">
                <input v-model="form.userName" maxlength="20" placeholder-class="input-placeholder" placeholder="请输入手机/账号" />
              </view>
            </view>

            <view class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-safe"></view>
              </view>
              <view class="login__info__item__input__content login__info__item__input__content--verify-code">
                <input  v-model="form.smsCode"  placeholder-class="input-placeholder" placeholder="请输入验证码" />
              </view>
              <view class="login__info__item__input__right-verify-code" @tap.stop="getCode">
                <tn-button backgroundColor="#FFFFFF" fontColor="#000000" size="sm" padding="5rpx 10rpx" width="100%" shape="round">{{ tips }}</tn-button>
              </view>
            </view>

            <view class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-lock"></view>
              </view>
              <view class="login__info__item__input__content">
                <input  v-model="form.passWord"  :password="!showPassword" placeholder-class="input-placeholder" placeholder="请输入登录密码" />
              </view>
              <view class="login__info__item__input__right-icon" @click="showPassword = !showPassword">
                <view :class="[showPassword ? 'tn-icon-eye' : 'tn-icon-eye-hide']"></view>
              </view>
            </view>

            <view class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-lock"></view>
              </view>
              <view class="login__info__item__input__content">
                <input  v-model="form.rePassWord"  :password="!showPassword" placeholder-class="input-placeholder" placeholder="请输入登录密码" />
              </view>
              <view class="login__info__item__input__right-icon" @click="showPassword = !showPassword">
                <view :class="[showPassword ? 'tn-icon-eye' : 'tn-icon-eye-hide']"></view>
              </view>
            </view>
          </block>
          <uni-view class="tn-flex tn-flex-row-between tn-padding-xl"></uni-view>

          <view @click="backPassword()" style="width: 100%" >
            <view class="kaka-custom-style">
              <span class="kaka-custom-text">找回密码</span>
            </view>
          </view>
          <view >
            <view class="tn-flex tn-flex-row-between tn-padding-xl">
              <view class="" style="color: #FFFFFF80;"  @click="tn('/pages/login/login')">已有账号？前往登录</view>
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
  </view>
</template>

<script>
import * as util from './../../util/util'
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'login-demo-4',
    mixins: [template_page_mixin],
    data() {
      return {
        // 当前选中的模式
        currentModeIndex: 1,
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
          inviteCode: '',//验证码
          jsCode: '',//发送验证码时候验证的
          userName: '',//用户名
          smsCode: '',//验证码
          passWord: '',//密码
          rePassWord: '',//确认密码
          payPassword: '',//支付密码
          rePayPassWord: ""//确认支付密码
        }
      }
    },
    watch: {
      currentModeIndex(value) {
        const sliderWidth = uni.upx2px(476 / 2)
        this.modeSliderStyle.left = `${sliderWidth * value}px`
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
      // 获取验证码
      getCode() {
        if (util.isBlank(this.form.userName)) {
          this.$t.message.toast('手机号不可为空');
          return;
        }
        if (!util.isPhoneNumber(this.form.userName)) {
          this.$t.message.toast('请输入正确的手机号');
          return;
        }
        let param = {
          userName: this.form.userName
        }

        if (this.$refs.code.canGetCode) {
          this.$t.message.loading('正在获取验证码')
          this.$http.postRequest('/open/api/backpass/sendCmsCode', param)
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
        } else {
          this.$t.message.toast(this.$refs.code.secNum + '秒后再重试')
        }

      },
      backPassword(){
        if (util.isBlank(this.form.userName)) {
          this.$t.message.toast('手机号不可为空')
          return
        }
        if (!util.isPhoneNumber(this.form.userName)) {
          this.$t.message.toast('请输入正确手机号')
          return;
        }
        if (util.isBlank(this.form.smsCode)) {
          this.$t.message.toast('验证码不可为空')
          return;
        }
        if (!util.isSmsCode(this.form.smsCode)) {
          this.$t.message.toast('请输入6为验证码')
          return;
        }
        if (util.isBlank(this.form.passWord)) {
          this.$t.message.toast('密码不可为空')
          return;
        }
        if (!util.isPassword(this.form.passWord)) {
          this.$t.message.toast('密码需长度大于6，且由数字和英文字符')
          return;
        }
        if (util.isBlank(this.form.rePassWord)) {
          this.$t.message.toast('确认密码不可为空')
          return;
        }
        if (this.form.passWord !== this.form.rePassWord) {
          this.$t.message.toast('两次密码不相同')
          return;
        }

        let param = {
          "userName": this.form.userName,
          "smsCode": this.form.smsCode,
          "passWord": this.form.passWord,
          "rePassWord": this.form.rePassWord,
        }
        this.$t.message.loading('正在找回')
        this.$http.postRequest('/open/api/backpass/checkCode', param)
            .then(res => {
              if (res.code === 200) {
                this.$t.message.closeLoading()
                this.$t.message.toast(res.msg)
                setTimeout(() => {
                  this.tn('/pages/login/login');
                }, 1000)
              } else {
                this.$t.message.toast(res.msg)
              }
            })
      },
      // 获取验证码倒计时被修改
      codeChange(event) {
        this.tips = event
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

  /* 悬浮 */
  /* .login-sussuspension{
    animation: suspension 3s ease-in-out infinite;
  }

  @keyframes suspension {
    0%, 100% {
      transform: translate(0 , 0);
    }
    50% {
      transform: translate(0rem , 1rem);
    }
  } */

  .login {
    position: relative;
    height: 100%;
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
      background-color: rgba(255,255,255,0.6);
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
      margin: 80rpx 30rpx 10rpx 30rpx;
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

          // &::after {
          //   content: " ";
          //   position: absolute;
          //   z-index: -1;
          //   width: 100%;
          //   height: 100%;
          //   left: 0;
          //   bottom: 0;
          //   border-radius: inherit;
          //   opacity: 1;
          //   transform: scale(1, 1);
          //   background-size: 100% 100%;
          //   background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg5.png);
          // }
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

  /deep/.input-placeholder {
    font-size: 24rpx;
    color: #838383;
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
  .login__info__item__input__right-verify-code uni-button {
    background: unset !important;
    color: #0670ec !important;
  }
  .template-forget{
    height: 100vh;
    position: relative;
    background-size: 100%;
    background: url(https://demoh5.sxqichuangkeji.com/static/login_bg.png) no-repeat;
  }
  .login__wrapper {
    position: absolute;
    top: 156px;
    width: 100%;
    margin-top: unset;
  }

</style>

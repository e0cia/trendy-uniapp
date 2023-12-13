<template>
  <view class="pagesD tn-safe-area-inset-bottom">
    <view class="tn-margin-left tn-margin-right" :style="{paddingTop: vuex_custom_bar_height + 5 + 'px'}">
      <view>
        <!-- 图标logo/头像 -->
        <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-bottom">
          <view class="justify-content-item">
            <view class="tn-flex tn-flex-col-center tn-flex-row-left">
              <view class="logo-pic tn-shadow">
                <view class="logo-image">
                  <view class="tn-shadow-blur"
                        :style="'background-image:url('+userInfo.avatar+');'"
                        style="width: 110rpx;height: 110rpx;background-size: cover;overflow: hidden;">
                  </view>
                </view>
              </view>
              <view class="tn-padding-right">
                <view class="tn-padding-right tn-padding-left-sm">
                  <text class="tn-color-white tn-text-xl tn-text-bold">{{ userInfo.extendUserInfo.name }}</text>
                </view>
                <view class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">
                  <text class="tn-color-gray">ID: {{ userInfo.userId }}</text>

                  <text class="tn-color-gray--disabled tn-padding-left-xs tn-text-sm tn-icon-copy"></text>
                </view>
                <view class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">
                  <text class="tn-color-gray">邀请码: {{ userInfo.extendUserInfo.inviteCode }}</text>
                  <text class="tn-color-gray--disabled tn-padding-left-xs tn-text-sm tn-icon-copy"></text>
                </view>

              </view>

            </view>
          </view>
          <view class="justify-content-item" @click="tn('../set/set')">
            <view class="tn-icon-install tn-color-gray" style="font-size: 50rpx;opacity: 0.5;">
            </view>
          </view>
        </view>

      </view>


      <view @click="tn('/pages/seabead/seabead')" class="tn-margin-top-xl tn-padding-top-lg">
        <view class="button-number tn-flex  tn-flex-col-center tn-shadow-blur">

          <image
              style="width: 50px;height: 50px;margin-left: 20px"
              :src="'/static/image/userCenter/haizhu.png'"
          ></image>

          <view class="tn-margin-left">
            <text style="color: #F1C68E;" class="tn-text-bold tn-text-xl">海珠</text>
          </view>

          <view class="tn-margin-right tn-margin-left">
            <text class="tn-text-bold tn-text-xl" style="padding: 10rpx 0;color: #F1C68E;font-size: 20px">
              {{ userInfo.extendUserInfo.remainingBalance }}
            </text>
          </view>

          <view class="tnwave waveAnimation">
            <view class="waveWrapperInner bgTop">
              <view class="wave waveTop"
                    style="background-image: url('https://resource.tuniaokj.com/images/wave/wave-2.png')">
              </view>
            </view>
            <view class="waveWrapperInner bgMiddle">
              <view class="wave waveMiddle"
                    style="background-image: url('https://resource.tuniaokj.com/images/wave/wave-2.png')">
              </view>
            </view>
            <view class="waveWrapperInner bgBottom">
              <view class="wave waveBottom"
                    style="background-image: url('https://resource.tuniaokj.com/images/wave/wave-1.png')">
              </view>
            </view>
          </view>

        </view>
      </view>


      <view class="tn-flex tn-flex-wrap tn-padding-xs">
        <view style="width: 100%;">
          <view class="image-haibao tn-shadow-blur"
                style="background-image: url(https://resource.tuniaokj.com/images/capsule-banner/banner-tnui.png);">
            <view class="image-position"></view>
          </view>
        </view>
      </view>


      <!-- 方式12 start-->
      <view class="box-shadow tn-margin-top-lg tn-padding-bottom-sm">

        <view class="tn-flex tn-flex-row-center tn-radius tn-padding-top">
          <view class="tn-padding-sm tn-margin-xs tn-radius" @click="tn('../order/order')">
            <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
              <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
              >
                <view class="tn-icon-order-fill  kk-my-order-icon"></view>
              </view>
              <view class="tn-text-center">
                <text class="tn-text-ellipsis  kk-my-order-text">待付款</text>
              </view>
            </view>
          </view>
          <view class="tn-padding-sm tn-margin-xs tn-radius" @click="tn('../pay/pay')">
            <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
              <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
              >
                <view class="tn-icon-server-fill  kk-my-order-icon"></view>
              </view>
              <view class="tn-text-center">
                <text class="tn-text-ellipsis  kk-my-order-text">待发货</text>
              </view>
            </view>
          </view>
          <view class="tn-padding-sm tn-margin-xs tn-radius" @click="tn('')">
            <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
              <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
              >
                <view class="tn-icon-cube  kk-my-order-icon"></view>
              </view>
              <view class="tn-text-center">
                <text class="tn-text-ellipsis  kk-my-order-text">待收货</text>
              </view>
            </view>
          </view>
          <view class="tn-padding-sm tn-margin-xs tn-radius">
            <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
              <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
              >
                <view class="tn-icon-location-fill  kk-my-order-icon"></view>
              </view>
              <view class="tn-text-center">
                <text class="tn-text-ellipsis  kk-my-order-text">已完成</text>
              </view>
            </view>
          </view>


        </view>
      </view>


      <view class="box-shadow tn-margin-top-lg tn-padding-bottom-sm">

        <view class="tn-margin-top-sm tn-padding-left-lg intive-team tn-text-bold tn-text-lg tn-color-white">我的服务
        </view>
        <view
            class=" tn-margin-top-sm tn-flex tn-flex-wrap tn-flex-col-center tn-flex-row-between tn-margin-left tn-margin-right">
          <view @click="tn('/pages/team/team')"
                class="intive-item-content tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between kk-my-cen-bg">
            <view class=" tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-left">
              <view class="intive-item-left-content">
                <view class=" tn-text-xxl">我的团队</view>
                <view class="intive-item-bottom-text tn-padding-top-xs kk-my-cen-desc">MY TEAM
                </view>
              </view>
            </view>
            <view class="intive-item-content-right">
              <view class="tn-icon-team-fill"></view>
            </view>
          </view>
          <view @click="tn('/pages/share/share')"
                class="intive-item-content tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between kk-my-cen-bg">
            <view class=" tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-left">
              <view class="intive-item-left-content">
                <view class=" tn-text-xxl">我的邀请</view>
                <view class="intive-item-bottom-text tn-padding-top-xs kk-my-cen-desc">INTIVE FRIENDS
                </view>
              </view>
            </view>
            <view class="intive-item-content-right">
              <view class="intive-item-content-right--icon">
                <view class="tn-icon-vip-fill"></view>
              </view>
            </view>
          </view>
        </view>
      </view>


      <view class="box-shadow tn-margin-top tn-margin-bottom-lg tn-padding-top-sm tn-padding-bottom-sm">

        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"
                      backgroundColor="#FFFFFF00">
          <button @click="tn('/pages/share/share')" class="tn-flex tn-flex-col-center tn-button--clear-style">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-white">
              <view class="tn-icon-empty-address"></view>
            </view>
            <view class="tn-flex tn-flex-row-between" style="width: 100%;">
              <view class="tn-margin-left-sm tn-color-white">邀请</view>
              <view class="tn-color-gray--dark tn-icon-right"></view>
            </view>
          </button>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"
                      backgroundColor="#FFFFFF00">
          <button @click="tn('/pages/realName/realName')" class="tn-flex tn-flex-col-center tn-button--clear-style">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-white">
              <view class="tn-icon-safe"></view>
            </view>
            <view class="tn-flex tn-flex-row-between" style="width: 100%;">
              <view class="tn-margin-left-sm tn-color-white">实名认证</view>
              <view class="tn-color-gray--dark tn-icon-right"></view>
            </view>
          </button>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"
                      backgroundColor="#FFFFFF00">
          <button @click="tn('/pages/address/address')" class="tn-flex tn-flex-col-center tn-button--clear-style">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-white">
              <view class="tn-icon-empty-address"></view>
            </view>
            <view class="tn-flex tn-flex-row-between" style="width: 100%;">
              <view class="tn-margin-left-sm tn-color-white">地址管理</view>
              <view class="tn-color-gray--dark tn-icon-right"></view>
            </view>
          </button>
        </tn-list-cell>

        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"
                      backgroundColor="#FFFFFF00">
          <button @click="noflished()" class="tn-flex tn-flex-col-center tn-button--clear-style">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-white">
              <view class="tn-icon-align-right"></view>
            </view>
            <view class="tn-flex tn-flex-row-between" style="width: 100%;">
              <view class="tn-margin-left-sm tn-color-white">战神计划</view>
              <view class="tn-color-gray--dark tn-icon-right"></view>
            </view>
          </button>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"
                      backgroundColor="#FFFFFF00">
          <button @click="tn('/pages/set/set')" class="tn-flex tn-flex-col-center tn-button--clear-style">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-white">
              <view class="tn-icon-install"></view>
            </view>
            <view class="tn-flex tn-flex-row-between" style="width: 100%;">
              <view class="tn-margin-left-sm tn-color-white">设置</view>
              <view class="tn-color-gray--dark tn-icon-right"></view>
            </view>
          </button>
        </tn-list-cell>

        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30" backgroundColor="#FFFFFF00">
          <button class="tn-flex tn-flex-col-center tn-button--clear-style">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-white">
              <view class="tn-icon-tip"></view>
            </view>
            <view class="tn-flex tn-flex-row-between" style="width: 100%;">
              <view class="tn-margin-left-sm tn-color-white">关于我们</view>
              <view class="tn-color-gray--dark tn-icon-right"></view>
            </view>
          </button>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"
                      backgroundColor="#FFFFFF00">
          <button @click="lougout()" class="tn-flex tn-flex-col-center tn-button--clear-style">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-white">
              <view class="tn-icon-logout"></view>
            </view>
            <view class="tn-flex tn-flex-row-between" style="width: 100%;">
              <view class="tn-margin-left-sm tn-color-white">安全退出</view>
              <view class="tn-color-gray--dark tn-icon-right"></view>
            </view>
          </button>
        </tn-list-cell>

      </view>

    </view>

    <view class="tn-text-center tn-margin-top-xl tn-padding-bottom-xl">
      <view @click="navTuniaoUI" style="opacity: 0.5;">
        <text class="tn-color-blue--dark tn-padding-xs">卡卡部落</text>
        <text class="tn-color-gray">提供技术支持</text>
      </view>
    </view>
    <wx-user-info-modal v-model="showAuthorizationModal" @updated="updatedUserInfoEvent"></wx-user-info-modal>

    <view class='tn-tabbar-height'></view>
    <!--    <view class="bg-tabbar-shadow"></view>-->
  </view>
</template>

<script>
import WxUserInfoModal
  from '@/uni_modules/tuniaoui-wx-user-info/components/tuniaoui-wx-user-info/tuniaoui-wx-user-info.vue'


export default {
  components: {
    WxUserInfoModal
  },
  name: 'pagesD',
  data() {
    return {
      showAuthorizationModal: false,
      nickname: '',
      id: '',
      member: '',
      logo: '',
      userInfo: {
        extendUserInfo: {
          name: ''
        }
      }
    }
  },
  // mounted() {
  //   this.getuserInfo();
  // },
  onShow() {
    this.getuserInfo()
  },
  methods: {
    getuserInfo() {
      this.$http.postRequest('/kakabl/extenduser/center/userInfo', {})
          .then(res => {
            if (res.code === 200) {
              uni.setStorageSync("userInfo", res.data)
              this.userInfo = res.data
            } else {
              this.$t.message.toast(res.msg)
            }
          })
    },
    tn(e) {
      uni.navigateTo({
        url: e,
      });
    },

    // 跳转到图鸟UI
    navTuniaoUI() {
      uni.navigateToMiniProgram({
        appId: 'wxf88c4571170ccf54'
      })
    },

    // 收货地址
    navAddress() {
      uni.chooseAddress({})
    },

    // 单纯短震动
    short() {
      wx.vibrateShort();
    },

    //拨打固定电话
    callPhoneNumber() {
      uni.makePhoneCall({
        phoneNumber: "13476865273",
      });
    },
    // 复制id
    copyUid() {
      wx.vibrateShort();
      uni.setClipboardData({
        data: "10262008",
      })
    },
    // 复制开源地址
    copySource() {
      wx.vibrateShort();
      uni.setClipboardData({
        data: "https://ext.dcloud.net.cn/publisher?id=356088",
      })
    },

    // 打开获取用户信息弹框
    openAuthorizationModal() {
      this.showAuthorizationModal = true
    },
    noflished() {
      if (this.userInfo.extendUserInfo.isCardVendor === 1) {
        this.tn('/pages/cardvendor/giveuser')
      } else {
        this.$t.message.toast('请联系客服加入战神计划')
      }
    },
    // 获取到的用户信息
    updatedUserInfoEvent(info) {
      console.log('获取到的用户信息', info)
    },
    //退出登录
    lougout() {
      this.$t.message.loading('正在退出')
      this.$http.postRequest('/logout', {})
          .then(res => {
            if (res.code === 200) {
              uni.removeStorageSync('Authorization')
              uni.removeStorageSync('userInfo')
              this.$t.message.closeLoading()
              // this.tn('../index/index?index=0')
              uni.switchTab({
                url: '/pages/index/index'
              })
            } else {
              this.$t.message.toast(res.msg)
            }

          })
    }
  }
}
</script>

<style lang="scss" scoped>
.pagesD {
  max-height: 100vh;
}

//
///* 底部tabbar假阴影 start*/
//.bg-tabbar-shadow {
//  // background-image: repeating-linear-gradient(to top, rgba(0,0,0,0.1) 10rpx, rgba(255,255,255,0) , rgba(255,255,255,0));
//  box-shadow: 0rpx 0rpx 220rpx 0rpx rgba(0, 0, 0, 0.55);
//  position: fixed;
//  bottom: -100rpx;
//  height: 100rpx;
//  width: 100vw;
//  z-index: 1;
//}

/* 底部安全边距 start*/
.tn-tabbar-height {
  min-height: 60rpx;
  height: calc(80rpx + env(safe-area-inset-bottom) / 2);
  height: calc(80rpx + constant(safe-area-inset-bottom));
}


/* 自定义导航栏内容 start */
.custom-nav {
  height: 100%;

  &__back {
    margin: auto 5rpx;
    font-size: 40rpx;
    margin-right: 10rpx;
    flex-basis: 5%;
    width: 100rpx;
    position: absolute;
  }
}

/* 自定义导航栏内容 end */

/* 用户头像 start */
.logo-image {
  width: 110rpx;
  height: 110rpx;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.logo-pic {
  background-size: cover;
  background-repeat: no-repeat;
  // background-attachment:fixed;
  background-position: top;
  border: 8rpx solid rgba(255, 255, 255, 0.05);
  box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  overflow: hidden;
  // background-color: #FFFFFF;
}

/* 页面阴影 start*/
.box-shadow {
  border-radius: 15rpx;
  border: 1rpx solid #494B51;
  background-color: rgba(255, 255, 255, 0.08);
  // box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
}

/* 页面阴影 end*/

/* 图标容器12 start */
.icon12 {
  &__item {
    width: 30%;
    background-color: #FFFFFF;
    border-radius: 10rpx;
    padding: 30rpx;
    margin: 20rpx 10rpx;
    transform: scale(1);
    transition: transform 0.3s linear;
    transform-origin: center center;

    &--icon {
      width: 100rpx;
      height: 100rpx;
      font-size: 50rpx;
      border-radius: 20rpx;
      margin-bottom: 38rpx;
      position: relative;
      z-index: 1;

      &::after {
        content: " ";
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
        border-radius: inherit;
        opacity: 1;
        transform: scale(1, 1);
        background-size: 100% 100%;

      }
    }
  }
}

/* 图标容器1 start */
.icon1 {
  &__item {
    // width: 30%;
    background-color: #FFFFFF;
    border-radius: 10rpx;
    padding: 30rpx;
    margin: 20rpx 10rpx;
    transform: scale(1);
    transition: transform 0.3s linear;
    transform-origin: center center;

    &--icon {
      width: 40rpx;
      height: 40rpx;
      font-size: 40rpx;
      border-radius: 50%;
      position: relative;
      z-index: 1;

      &::after {
        content: " ";
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
        border-radius: inherit;
        opacity: 1;
        transform: scale(1, 1);
        background-size: 100% 100%;
        // background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg.png);
      }
    }
  }
}

/* 图标容器1 end */


/* 背景波浪高度 */
.button-number {
  width: 100%;
  height: 150rpx;
  border-radius: 15rpx;
  position: relative;
  z-index: 1;
  border: 1rpx solid #494B51;
  background: linear-gradient(-120deg, #3E445A1A, #31374A1A, #2B30421A, #262B3C1A);
}

/* 动态背景波浪*/
@keyframes move_wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1)
  }

  50% {
    transform: translateX(-25%) translateZ(0) scaleY(1)
  }

  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1)
  }
}

.tnwave {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  z-index: -1;
  border-radius: 15rpx;
}

.waveWrapperInner {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100%;
}

.wave {
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
}

.bgTop {
  opacity: 0.1;
}

.waveTop {
  background-size: 50% 45px;
}

.waveAnimation .waveTop {
  animation: move_wave 4s linear infinite;
}

.bgMiddle {
  opacity: 0.2;
}

.waveMiddle {
  background-size: 50% 40px;
}

.waveAnimation .waveMiddle {
  animation: move_wave 3.5s linear infinite;
}

.bgBottom {
  opacity: 0.3;
}

.waveBottom {
  background-size: 50% 35px;
}

.waveAnimation .waveBottom {
  animation: move_wave 2s linear infinite;
}

.image-haibao {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  border-radius: 8px 8px 0 0;
}

.image-position {
  padding: 54px 0px;
  font-size: 16px;
  font-weight: 300;
  position: relative;
}


.intive-item-content-right--icon {
  position: absolute;
  right: 18px;
  top: 34px;
  font-size: 50px;
  width: 37px;
  height: 37px;
  line-height: 20px;
  color: #7444f8;
}

.intive-item-content {
  width: 48%;
  margin: 5px 0px;
  padding: 13px 10px;
  border-radius: 5px;
  position: relative;
  z-index: 1;
}

.intive-item-left-content {
  font-size: 10px;
}

.intive-item-bottom-text {
  margin-top: 1px;
  font-weight: 700;
}

.intive-item-content::after {
  content: " ";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  border-radius: inherit;
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
  background-size: 100% 100%;
  background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/3.png);
}

.kk-my-cen-desc {
  color: rgba(255, 255, 255, 0.9)
}

.kk-my-cen-bg {
  background: linear-gradient(to right, #f9c7d2, #9e99eb);
  color: #7444f8;
}


.kk-my-order-icon {
  font-size: 40px;
  color: #c3aff9
}

.kk-my-order-text {
  color: rgba(255, 255, 255, 0.9)
}

.icon12__item--icon {
  margin-bottom: 5px !important;
}
</style>
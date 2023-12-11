<template>
  <view class="tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>

    <view class="tn-margin-top" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <view class="tn-flex tn-flex-row-between tn-strip-bottom-min tn-padding">
        <view class="justify-content-item">
          <view class="tn-text-bold tn-text-lg tn-color-white">
            用户头像
          </view>
          <view class="tn-color-gray tn-padding-top-xs">
            穷在闹市无人问,富在深山有远亲
          </view>
        </view>
        <view class="justify-content-item tn-text-lg tn-color-gray">
          <view class="logo-pic tn-shadow">

            <view class="logo-image">
              <!--							<tn-image-upload :customBtn="true" :action="action" :header="header"  @on-success="success">-->
              <!--								<view slot="addBtn" class="tn-image-upload__custom-btn" hover-class="tn-hover-class"-->
              <!--									hover-stay-time="150">-->
              <!--									<view class="tn-shadow-blur"-->
              <!--										:style="'background-image:url('+userInfo.avatar+')'"   style="width: 80rpx;height: 80rpx;background-size: cover;">-->
              <!--									</view>-->
              <!--								</view>-->
              <!--							</tn-image-upload>-->
              <view class="tn-shadow-blur"
                    :style="'background-image:url('+userInfo.avatar+')'"
                    style="width: 80rpx;height: 80rpx;background-size: cover;">
              </view>
            </view>

          </view>
        </view>
      </view>
      <view class="tn-flex tn-flex-row-between tn-strip-bottom-min tn-padding" @click="showModal3">
        <view class="justify-content-item">
          <view class="tn-text-bold tn-text-lg tn-color-white">
            姓名
          </view>
          <view class="tn-color-gray tn-padding-top-xs">
            {{ userInfo.extendUserInfo.name == undefined ? "未填写" : userInfo.extendUserInfo.name }}
          </view>
        </view>
        <view class="justify-content-item tn-text-lg tn-color-gray">
          <view class="tn-icon-right tn-padding-top"></view>
        </view>
      </view>

      <view class="tn-flex tn-flex-row-between tn-strip-bottom-min tn-padding">
        <view class="justify-content-item">
          <view class="tn-text-bold tn-text-lg tn-color-white">
            账号
          </view>
          <view class="tn-color-gray tn-padding-top-xs">
            {{ userInfo.userName == undefined ? "未填写" : userInfo.userName }}
          </view>
        </view>
      </view>
      <tn-modal v-model="show3" :custom="true" :showCloseBtn="true">
        <view class="custom-modal-content">
          <view class="">
            <view class="tn-text-lg tn-text-bold tn-text-center tn-padding">请输入昵称</view>
            <view class="tn-bg-gray--light"
                  style="border-radius: 10rpx;padding: 20rpx 30rpx;margin: 50rpx 20rpx 60rpx 20rpx;">
              <input placeholder="请填写昵称"  v-model="userInfo.extendUserInfo.name"
                     placeholder-style="color:#AAAAAA"
                     maxlength="20"></input>
            </view>
          </view>
          <view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center">
            <tn-button backgroundColor="#000000" padding="40rpx 0" width="100%" @click="baocun()">
              <text class="tn-color-white">保 存</text>
            </tn-button>
          </view>
        </view>
      </tn-modal>

      <!-- 悬浮按钮-->
      <view class="tn-flex tn-footerfixed">
        <view class="tn-flex-1 justify-content-item tn-margin-right tn-margin-left-xs tn-text-center">
          <tn-button backgroundColor="#FFFFFF " padding="40rpx 0" width="60%" :fontSize="28"
                     fontColor="#000000" shape="round" @click="update()">
            <text class="tn-padding-left-sm">保存信息</text>
            <!-- <text class="tn-icon-logout tn-padding-left-xs"></text> -->
          </tn-button>
        </view>
      </view>

    </view>


  </view>
</template>

<script>
import template_page_mixin from '@/libs/mixin/template_page_mixin.js'

export default {
  name: 'TemplateSet',
  mixins: [template_page_mixin],
  data() {
    return {
      showAuthorizationModal: false,
      show1: false,
      show2: false,
      show3: false,
      index: 0,
      index1: 1,
      action: "",
      header: {
        "Authorization": uni.getStorageSync('Authorization')
      },
      name: "",
      userInfo: {
        extendUserInfo:{
          name:''
        }
      },
    }
  },
  mounted() {
    //初始化用户信息
    this.userInfo = uni.getStorageSync("userInfo")
  },
  computed: {},
  onLoad() {
    this.action = this.$http.commoneUrl + 'file/imges'
    // console.log(this.$http.commoneUrl)
  },
  methods: {
    getuserInfo() {
      this.$http.postRequest('/kakabl/extenduser/center/userInfo', {})
          .then(res => {
            if (res.code === 200) {
              uni.setStorageSync("userInfo", res.data)
              this.userInfo = res.data
              // this.userInfo = res.data
              // this.realName = res.data.extendUserInfo.fullName;
              // this.idCard = res.data.extendUserInfo.idCardNumber;
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

    // 弹出模态框
    showModal1(event) {
      this.openModal1()
    },
    // 打开模态框
    openModal1() {
      this.show1 = true
    },

    // 弹出模态框
    showModal2(event) {
      this.openModal2()
    },
    // 打开模态框
    openModal2() {
      this.show2 = true
    },

    // 弹出模态框
    showModal3(event) {
      this.openModal3()
    },
    // 打开模态框
    openModal3() {
      this.show3 = true
    },

    baocun() {
      this.show3 = false
    },
    update() {
      let that =this
      console.log(this.userInfo)
      let param = {
        nickName: this.userInfo.extendUserInfo.name
      }
      this.$http.postRequest('/kakabl/extenduser/center/updateUserInfo', param)
          .then(res => {
            if (res.code===200){
              that.getuserInfo()
              uni.showToast({
                title: '保存成功',
                icon: 'none',
                duration: 2000,
                mask:true
              });
              setTimeout(() => {
                uni.navigateBack({
                  delta: 1,//返回层数，2则上上页
                })
              }, 10)
            }else {
              this.$t.message.toast(res.msg)
            }

          })
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

/* 授权 */
.login-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 授权按钮 */
.submit-btn {
  width: 100%;
  background-color: #05C160;
  color: #FFFFFF;
  margin-top: 60rpx;
  border-radius: 10rpx;
  padding: 25rpx;
  font-size: 32rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30rpx;
}

/* 间隔线 start*/
.tn-strip-bottom-min {
  width: 100%;
  border-bottom: 1rpx solid #F8F9FB08;
}

.tn-strip-bottom {
  width: 100%;
  border-bottom: 20rpx solid #F8F9FB08;
}

/* 间隔线 end*/


/* 用户头像 start */
.logo-image {
  width: 80rpx;
  height: 80rpx;
  position: relative;
}

.logo-pic {
  background-size: cover;
  background-repeat: no-repeat;
  // background-attachment:fixed;
  background-position: top;
  border: 2rpx solid rgba(255, 255, 255, 0.05);
  box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  overflow: hidden;
  // background-color: #FFFFFF;
}


/* 底部悬浮按钮 start*/
.tn-tabbar-height {
  min-height: 100rpx;
  height: calc(120rpx + env(safe-area-inset-bottom) / 2);
}

.tn-footerfixed {
  position: fixed;
  width: 100%;
  bottom: calc(80rpx + env(safe-area-inset-bottom));
  z-index: 1024;
  box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);

}

/* 底部悬浮按钮 end*/
</style>

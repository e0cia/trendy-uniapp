<template>
  <view class="save-content">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed customBack :bottomShadow="false" backgroundColor="#16171D">
      <view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
        <text class='icon tn-icon-left-arrow'></text>
      </view>
      <view class="tn-flex tn-flex-col-center tn-flex-row-center">
        <text class="tn-text-xl tn-color-white"></text>
      </view>
    </tn-nav-bar>
    <view :style="{marginTop: vuex_custom_bar_height  +'px'}" class="top-bg0image"></view>
    <view>
      <view class="save-title">
        海底寻宝
      </view>


      <view v-for="(item,index) in adventureList" class="save-item">
        <view class="save-item-single">
          <view class="save-item-single-left">
            <view class="save-item-single-left-top">{{ item.itemName }}</view>
            <view class="save-item-single-left-center">{{ item.cycleNum }}天收益最大为</view>
            <view class="save-item-single-left-bottom">
              <image src="https://kakabuluo.oss-cn-beijing.aliyuncs.com/photo/p1.png"></image>
              {{ item.cycleNum * item.rate }}
            </view>
          </view>
          <view class="save-item-single-right">
            <view class="save-item-single-right-top">消耗</view>
            <view class="save-item-single-right-center">
              <image src="https://kakabuluo.oss-cn-beijing.aliyuncs.com/photo/p1.png"></image>
              {{ item.needBead }}
            </view>

            <view class="save-item-single-right-bottom" @click="goSea(item)">
              <text v-if="adventureJionList[item.id]===0">扬帆起航</text>
              <text v-else>继续远航（{{ adventureJionList[item.id] }}/5）</text>
            </view>
            <!-- <view class="save-item-single-right-bottom">扬帆起航</view> -->
          </view>
        </view>
      </view>


    </view>

    <tn-popup v-model="showBugModeal" mode="bottom" :borderRadius="40">
      <view class="pop-box-save">
        <view class="pop-title">
          出海远航
        </view>
        <view class="pop-need">
          <view class="pop-need1">需要消耗海珠</view>
          <view class="pop-need2">
            <image src="https://kakabuluo.oss-cn-beijing.aliyuncs.com/photo/p1.png"></image>
            {{ currentJionItem.needBead }}
          </view>
        </view>

        <view class="pop-blance">
          <view class="pop-blance-1">
            我的可用海珠：
            <text>{{ userInfo.extendUserInfo.remainingBalance?userInfo.extendUserInfo.remainingBalance:'0.00'}}</text>
          </view>
        </view>
        <view class="pop-button" @click="openInpuPayPassWord"> 确认开启</view>
      </view>
    </tn-popup>


    <tn-modal :zIndex="20076" v-model="showPayModeal" :custom="true" :showCloseBtn="true">
      <view class="custom-modal-content">
        <view class="">
          <view class="tn-text-lg tn-text-bold tn-text-center tn-padding">支付密码</view>
          <view class="tn-bg-gray--light"
                style="border-radius: 10rpx;padding: 20rpx 30rpx;margin: 50rpx 20rpx 60rpx 20rpx;">
            <input type="number" placeholder="请输入支付密码" v-model="payPassword"
                   placeholder-style="color:#AAAAAA"
                   maxlength="20"></input>
          </view>
        </view>
        <view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center">
          <tn-button backgroundColor="#000000" padding="40rpx 0" width="100%" @click="xiadan()">
            <text class="tn-color-white">确 定</text>
          </tn-button>
        </view>
      </view>
    </tn-modal>
  </view>
</template>

<script>
import template_page_mixin from '@/libs/mixin/template_page_mixin.js'

export default {
  mixins: [template_page_mixin],
  data() {
    return {
      showBugModeal: false,
      showPayModeal: false,
      payPassword: '',
      adventureList: [],
      adventureJionList: [],
      currentJionItem:{},
      userInfo:{}
    }

  },
  mounted() {
    this.getAdventureList();
    this.getAdventureJsoinList();
    this.userInfo = uni.getStorageSync('userInfo');
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
    openInpuPayPassWord() {
      this.showPayModeal = true
    },
    xiadan() {
      uni.showLoading({
        title: '扬帆中...',
        mask: true
      })
      if (!this.payPassword){
        this.$t.message.toast('支付密码不可为空')
        uni.hideLoading()
        return;
      }
      console.log(this.currentJionItem)
      let param ={
        payPassWord:this.payPassword,
        outSeaId:this.currentJionItem.id
      }
      this.$http.postRequest('/kakabl/joinAdventure/joinAdvan', param)
          .then(res => {
            uni.hideLoading()
            this.getuserInfo()
            if (res.code === 200) {
              this.showBugModeal= false;
              this.showPayModeal=false;
              this.$t.message.toast("出海成功");
              this.payPassword='';
              this.getuserInfo()
            } else {
              this.$t.message.toast(res.msg)
            }
          })

    },
    getAdventureList() {
      this.$http.postRequest('/kakabl/adventure/getAdventureList', {})
          .then(res => {
            if (res.code === 200) {
              this.adventureList = res.data;
            } else {
              this.$t.message.toast(res.msg)
            }
          })
    },
    getAdventureJsoinList() {
      this.$http.postRequest('/kakabl/joinAdventure/getAdventureJsoinList', {})
          .then(res => {

            console.log(res)
            if (res.code === 200) {
              this.adventureJionList = res.data;
            } else {
              this.$t.message.toast(res.msg)
            }
          })
    },
    goSea(item) {
      this.currentJionItem = item;
      this.showBugModeal = true

    }
  }
}
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

.save-content {
  color: #FFF;
  height: 100%;
  padding: 0.3125rem 0.625rem;
  box-sizing: border-box;
}

.save-title {
  text-align: center;
  font-size: 1.9375rem;
  font-weight: 700;
  margin: 0.9375rem 0.3125rem;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.save-content .top-bar {
  display: flex;
  align-items: center;
  padding: 0.625rem 0.3125rem;

  .item {
    flex: 1;
    height: 1.65625rem;
    border-radius: 0px 0.40625rem 0.40625rem 0px;
    display: flex;
    align-items: flex-end;
    margin-right: 0.9375rem;
    line-height: 1.65625rem;
    text-indent: 0.9375rem;
    font-size: .9375rem;
    font-weight: 500;

    uni-image {
      width: 34px;
      height: 34px;
    }
  }

}

.save-content .save-item {
  padding-bottom: 1.5625rem;

  .save-item-single {
    width: 100%;
    height: 7.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.625rem;
    background-color: #fff;
    padding: 0.625rem 0.9375rem;
    border-radius: 0.40625rem;
    background: url(@/static/image/adven/ad_bg.png) no-repeat 0 0;
    background-size: 100% 100%;
    box-sizing: border-box;

    .save-item-single-left {
      width: 13.4375rem;
      height: 6.25rem;
      padding: 0.625rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .save-item-single-left-top {
        font-size: .9375rem;
        font-weight: 700;
        color: #fff;
      }

      .save-item-single-left-center {
        font-size: .75rem;
        font-weight: 400;
        margin-top: 0.9375rem;
        color: #fff;
      }

      .save-item-single-left-bottom {
        font-size: .8125rem;
        font-weight: 500;
        color: #fff;
        display: flex;
        align-items: center;
        box-sizing: border-box;

        uni-image {
          width: 0.9375rem;
          height: 0.9375rem;
          margin-right: 0.625rem;
        }
      }
    }

    .save-item-single-right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      font-size: .75rem;
      height: 6.25rem;
      font-weight: 400;
      color: #323232;
      margin-left: 0.625rem;
      padding: 0.625rem;
      box-sizing: border-box;

      .save-item-single-right-top {
        font-size: .85rem;
        font-weight: 900;
      }

      .save-item-single-right-center {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        text-align: center;
        font-size: .9375rem;
        font-weight: 900;
        color: #323232;

        uni-image {
          width: 0.9375rem;
          height: 0.9375rem;
          margin-right: 0.625rem;
        }
      }

      .save-item-single-right-bottom {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .7125rem;
        font-weight: 500;
        color: #fff;
        width: 6.25rem;
        height: 1.875rem;
        background: #000000;
        border-radius: 0.25rem;
        opacity: 1;
      }

    }
  }
}

.pop-box-save {
  background-color: #fff;
  padding-bottom: 1.5625rem;
  border-radius: 0.78125rem 0.78125rem 0 0;

  .pop-title {
    font-size: 1.15625rem;
    font-family: PingFang SC;
    font-weight: 700;
    color: #323232;
    padding: 0.9375rem;
    box-sizing: border-box;
  }

  .pop-need {
    padding: 0 0.9375rem;
    box-sizing: border-box;
    height: 3.34375rem;
    margin: 2.5rem 0.9375rem 0;
    background: #FFFFFF;
    border: 1px solid #999999;
    border-radius: 0.40625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .pop-need1 {
      font-size: .875rem;
      font-weight: 700;
      color: #323232;
    }

    .pop-need2 {
      font-size: .9375rem;
      font-weight: 500;
      color: #323232;
      display: flex;
      align-items: center;

      uni-image {
        width: 0.9375rem;
        height: 0.9375rem;
        margin-right: 0.46875rem;
      }
    }
  }

  .pop-blance {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5625rem 0.9375rem;
    box-sizing: border-box;

    .pop-blance-1 {
      font-size: .8125rem;
      font-weight: 400;
      color: #323232;

      uni-text {
        font-weight: 700;
      }
    }
  }

  .pop-button {
    height: 2.8125rem;
    background: #000000;
    border-radius: 0.28125rem;
    margin: 0 0.9375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
  }
}

.top-bg0image {
  background: url(@/static/image/adven/tanxian-group.png) center center / 18.5312rem no-repeat;
  min-height: 180px;
}

.custom-modal-content {
  color: #000000;
}
uni-toast {
  z-index: 20077!important;
}
</style>
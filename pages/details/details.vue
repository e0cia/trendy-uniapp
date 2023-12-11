<template>
  <view class="template-order tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed customBack :bottomShadow="false" backgroundColor="#16171D">
      <view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
        <text class='icon tn-icon-left-arrow'></text>
      </view>
      <view class="tn-flex tn-flex-col-center tn-flex-row-center">
        <text class="tn-text-xl tn-color-white">在线支付</text>
      </view>
    </tn-nav-bar>

    <view class="" :style="{paddingTop: vuex_custom_bar_height  +'px'}">
      <view class="order__item">
        <view class="order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between">
          <view class="order__item__head__title">
            <text class="">商品信息</text>
            <!-- <text class="tn-icon-copy tn-text-sm tn-padding-left-sm" style="opacity: 0.5;"></text> -->
          </view>
        </view>

        <view
            class="order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between">
          <view class="tn-flex tn-flex-nowrap tn-flex-direction-row tn-flex-col-center tn-flex-row-left">
            <view class="order__item__content__image">
              <image :src="mainImage" mode="aspectFill"></image>
            </view>

            <view class="order__item__content__title">
              {{ bydata.goodName }}
            </view>
          </view>
          <view
              class="order__item__content__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
            <view class="order__item__content__info__price">
              <text class="order__item__content__info__price--unit tn-icon-alien"><!-- ￥ --></text>
              <text class="order__item__content__info__price__value--integer">{{ bydata.goodPrice }}</text>
              <!-- <text class="order__item__content__info__price__value--decimal">.00</text> -->
            </view>

          </view>
        </view>

      </view>

      <view>
        <view class="order__item">
          <view class="order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between">
            <view class="order__item__head__title">
              <text class="">收货地址信息</text>
              <!-- <text class="tn-icon-copy tn-text-sm tn-padding-left-sm" style="opacity: 0.5;"></text> -->
            </view>
          </view>
          <view
              class="box-shadow tn-flex tn-flex-row-between tn-flex-col-center tn-strip-bottom-min  tn-margin">
            <view class="justify-content-item tn-padding-right">
              <view class="tn-text-bold tn-text-lg tn-color-white">
                <text class="">{{ address != "" ? address.contactName : "未选择地址" }}</text>
                <text class="tn-padding-left-sm">{{ address != "" ? address.contactPhone : "" }}</text>
              </view>
              <view class="tn-color-gray tn-padding-top-xs" v-if="address!=''">
                {{address.contactProvince}}{{address.contactCity}}{{address.contactArea}}{{address.contactAreaDetial}}
              </view>
            </view>
            <view class="justify-content-item tn-text-xl tn-color-gray" @click="tn('../address/address?lx=1')">
              <view class="tn-icon-right"></view>
            </view>
          </view>

        </view>
      </view>
      <view class="tn-flex tn-footerfixed">
        <view class="tn-flex-1 justify-content-item tn-margin-left tn-margin-right tn-text-center">
          <tn-button backgroundColor="#FFFFFF " padding="40rpx 0" width="100%" :fontSize="28"
                     fontColor="#000000" shape="round" @click="zhifu()">
            <text class="">立即付款</text>
          </tn-button>
        </view>
      </view>
    </view>

    <view class='tn-tabbar-height'></view>

  </view>
</template>

<script>
import template_page_mixin from '@/libs/mixin/template_page_mixin.js'

export default {
  name: 'TemplateOrder',
  mixins: [template_page_mixin],
  data() {
    return {
      address: {},
      bydata: {},
      mainImage: ''
    }
  },
  onLoad(e) {
    this.getdata(e.id);
  },
  onShow() {
    this.address = uni.getStorageSync('address');
  },
  methods: {
    getdata(id) {
      this.$http.getRequest('/open/goods/' + id, {})
          .then(res => {
            if (res.code === 200) {
              this.bydata = res.data
              this.mainImage = res.data.goodImageJson.split(",")[1];
            } else {
              this.$t.message.toast(res.msg)
            }
          })

    },
    // tab选项卡切换
    tabChange(index) {
      this.current = index
    },
    // 跳转
    tn(e) {
      uni.navigateTo({
        url: e,
      });
    },

    // cardSwiper
    cardSwiper(e) {
      this.cardCur = e.detail.current
    },
    zhifu() {
      let data = {
        goods_id: this.bydata.id,
        title: this.bydata.name,
        coverimage: this.bydata.coverimage,
        pay: this.bydata.pay,
        name: this.address.name,
        phone: this.address.phone,
        province: this.address.province,
        city: this.address.city,
        area: this.address.area,
        address: this.address.address
      }
      // console.log(data)
      this.$http.postRequest('GoodsOrder/PlaceOrder', data)
          .then(res => {
            // this.bydata=res.data
            // console.log(res)
            if (res.code == 200) {
              uni.showToast({
                title: "下单成功",
                icon: 'none',
                duration: 2000
              });
              this.tn('../order/order')
            } else {
              uni.showToast({
                title: res.msg,
                icon: 'none',
                duration: 2000
              });
            }
          })
    }
  }
}
</script>

<style lang="scss" scoped>
.template-order {
}

/* 底部安全边距 start*/
.tn-tabbar-height {
  min-height: 40rpx;
  height: calc(60rpx + env(safe-area-inset-bottom) / 2);
  height: calc(60rpx + constant(safe-area-inset-bottom));
}

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

.top-fixed {
  position: fixed;
  top: 0;
  width: 100%;
  transition: all 0.25s ease-out;
  z-index: 100;
}


.order {
  &--wrap {
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    background-color: inherit;
  }

  /* 导航栏 start */
  &__tabs {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: inherit;
  }

  /* 导航栏 end */

  /* 订单内容 start */
  &__item {
    color: #FFFFFF;
    margin: 30rpx;
    padding: 36rpx 26rpx;
    border-radius: 15rpx;
    border: 1rpx solid #494B51;
    background-color: rgba(255, 255, 255, 0.08);
    border-radius: 15rpx;
    // box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);

    &:first-child {
      margin-top: 40rpx;
    }

    &:last-child {
      margin-bottom: 0;
    }

    /* 头部 start */
    &__head {

      &__title {
        font-weight: bold;
        line-height: normal;

        &--right-icon {
          font-size: 24rpx;
          margin-left: 8rpx;
        }
      }

      &__status {
        font-size: 22rpx;
        color: #AAAAAA;
      }
    }

    /* 头部 end */

    /* 内容 start */
    &__content {

      margin-top: 20rpx;

      &__image {
        margin-right: 20rpx;

        image {
          width: 140rpx;
          height: 140rpx;
          border-radius: 10rpx;
        }
      }

      &__title {
        padding-right: 40rpx;
        display: -webkit-box;
        overflow: hidden;
        white-space: normal !important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      &__info {

        &__price {
          &--unit {
            font-size: 20rpx;
          }

          &__value--integer,
          &__value--decimal {
            font-weight: bold;
          }

          &__value--decimal {
            font-size: 20rpx;
          }
        }

        &__count {
          color: #AAAAAA;
          font-size: 24rpx;
        }
      }
    }

    /* 内容 end */

    /* 操作按钮 start */
    &__operation {
      margin-top: 20rpx;

      &__right {
        &__button {
          margin-left: 10rpx;
        }
      }
    }

    /* 操作按钮 end */
  }

  /* 订单内容 end */
}

.tn-footerfixed {
  position: fixed;
  width: 100%;
  bottom: calc(80rpx + env(safe-area-inset-bottom));
  z-index: 1024;
  box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);

}

</style>
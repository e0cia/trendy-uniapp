<template>
  <view class="pagesC tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <view class="kk-jx-top">
      <tn-nav-bar   :isBack="true" fixed alpha customBack>
        <view slot="back" class='tn-custom-nav-bar__back'  @click="goBack">
          <text class='icon tn-icon-left-arrow'></text>
        </view>
      </tn-nav-bar>
      <view :style="{paddingTop: vuex_custom_bar_height  + 'px'}" class="top-title">
        <span class="text-left">卡卡精选</span>
        <span class="text-right">全新正品 质量保证 急速发货</span>

        <view  class="desc">
          <span class="desc-text">KK TRIBE</span>
          <span class="desc-text-split">||</span>
          <span class="desc-text">潮玩链游</span>
        </view>
      </view>

    </view>


    <view class="tn-margin-bottom-xl"  style="margin-top: 12px">
      <view class="" v-if="content.length>0">
        <!-- 数字模型 start-->
        <view class="tn-flex tn-flex-wrap" style="margin: 0 15rpx;">
          <block v-for="(item, index) in content" :key="index">
            <view class="" style="width: 50%;" @click="tn('../product/product?id='+item.id)">
              <view class="product-content">
                <view class="image-pic" :style="'background-image:url(' + item.coverimage + ')'">
                  <view class="image-product">
                  </view>
                </view>

                <view
                    class="tn-text-justify tn-padding-top-sm tn-padding-left-sm tn-padding-right-sm tn-padding-top">
                  <text class="tn-color-white">{{ item.name }}</text>
                </view>

                <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-sm">
                  <view class="justify-content-item tn-flex tn-flex-col-center tn-color-gray"
                        style="margin-left: -6rpx;">
                    <text class="tn-text-lg tn-icon-alien"><!-- ￥ --></text>
                    <text class="tn-padding-right-sm tn-text-lg">{{ item.pay }}</text>
                    <!-- <text class="tn-color-gray tn-text-sm"> 66 人购买</text> -->
                  </view>
                  <view class="justify-content-item tn-flex tn-flex-col-center">
                    <text class="tn-color-gray tn-text-sm"> {{ item.sales }} 人购买</text>
                  </view>
                </view>
              </view>
            </view>
          </block>
        </view>
        <!-- 数字模型 end-->

      </view>

      <view class="" v-if="content.length==0">
        <view class="" style="padding: 15vh 20rpx;opacity: 0.6;">
          <view class="tn-text-center" style="font-size: 260rpx;padding-top: 30rpx;">
            <text class="tn-icon-commissary tn-color-gray--light"></text>
          </view>
          <view class="tn-color-gray--disabled tn-text-center tn-text-lg">暂无商品信息~~~</view>
        </view>
      </view>


    </view>

    <view class='tn-tabbar-height'></view>
    <view class="bg-tabbar-shadow"></view>
  </view>
</template>

<script>
import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
export default {
  name: 'PageC',
  mixins: [template_page_mixin],
  data() {
    return {
      page: 1,
      current: 0,
      scrollList: [{
        id: 0,
        name: '全部'
      }
      ],
      content: [],
    }
  },
  mounted() {
    this.getgoodslist();
  },
  methods: {
    // tab选项卡切换
    tabChange(index) {
      this.current = index;
      this.content = [];
      this.page = 1;
      this.getgoodslist();
    },
    // 跳转
    tn(e) {
      uni.navigateTo({
        url: e,
      });
    },
    getgoodslist() {
      let than = this;
      this.$http.getRequest('/open/goods/list?pageNum=' + than.page + '&pageSize=10', {})
          .then(res => {
            if (res.rows.length > 0) {
              than.page = than.page + 1;
              let arr = res.rows;
              console.log(res.rows[0])
              arr.forEach(function (item, index, array) {
                than.content.push({
                  id: item.id,
                  name: item.goodName,
                  coverimage: item.goodImageJson.split(",")[1],
                  pay: item.goodPrice,
                  sales: item.goodSaleNums
                })
              })
            }

          })
    },
  }
}
</script>


<style lang="scss" scoped>
.pagesC {
  max-height: 100vh;
}

/* 底部tabbar假阴影 start*/
.bg-tabbar-shadow {
  // background-image: repeating-linear-gradient(to top, rgba(0,0,0,0.1) 10rpx, rgba(255,255,255,0) , rgba(255,255,255,0));
  box-shadow: 0rpx 0rpx 220rpx 0rpx rgba(0, 0, 0, 0.55);
  position: fixed;
  bottom: -100rpx;
  height: 100rpx;
  width: 100vw;
  z-index: 1;
}

/* 底部安全边距 start*/
.tn-tabbar-height {
  min-height: 60rpx;
  height: calc(80rpx + env(safe-area-inset-bottom) / 2);
  height: calc(80rpx + constant(safe-area-inset-bottom));
}


/* 数字模型 start*/
.product-content {
  // box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
  border-radius: 15rpx;
  background-color: rgba(255, 255, 255, 0.08);
  border: 1rpx solid #494B51;
  margin: 15rpx;
}

.image-product {
  height: 327rpx;
  font-size: 16rpx;
  font-weight: 300;
  position: relative;
}

.image-pic {
  background-size: cover;
  background-repeat: no-repeat;
  // background-attachment:fixed;
  background-position: top;
  border-radius: 15rpx;
}

/* 数字模型 end*/


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

.kk-jx-top {
  width: 100%;
  height: 160px;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 16px;
  background: url(/static/image/productList/sea-bg.jpg) no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;

  .top-title {
    color: #FFFFFF;
    .text-left {
      font-weight: 500;
      font-size: 25px;
    }
    .text-right{
      margin-left: 5px;
      font-size: 12rpx;
    }
    .desc {
      .desc-text{
        font-weight: 200;
        margin-top: 10px;
        font-size: 20rpx;
      }
      .desc-text-split{
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }

}

</style>
<template>
  <view class="tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
        <text class='icon tn-icon-left'></text>
      </view>
      <text>卡商列表</text>
    </tn-nav-bar>

    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <view v-if="vendor.length>0" class="vendor-content">
		
        <view   v-for="(item,index) in vendor"  class="vendor-content-item">
          <view class="item-top">
            <view>名称：{{item.showName}}</view>
          </view>
          <view class="item-bottom">
            <view class="text">
              联系方式
            </view>
            <view class="cwx">
              <image
                  style="background-image: url(../static/image/contanct/wx.png); background-size: 100% 100%;"></image>
              <text class="cwx-text">{{item.showWx}}</text>
              <image
			  @click="copyContant(item.showWx)"
                  style="width:14px;height: 14px;background-image: url(../static/image/contanct/copy.png); background-size: 100% 100%;"></image>
            </view>
            <view class="cqq">
              <image
                  style="background-image: url(../static/image/contanct/qq.png); background-size: 100% 100%;"></image>
              <text class="cqq-text">{{item.showQq}}</text>
              <image
			    @click="copyContant(item.showQq)"
                  style="width:14px;height: 14px;background-image: url(../static/image/contanct/copy.png); background-size: 100% 100%;"></image>
            </view>
          </view>
        </view>

      </view>
	  
	  
	  <view v-else class="vendor-content">
	    
	    <tn-empty mode="data"></tn-empty>
	  </view>
	  
    </view>


  </view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
export default {
	mixins: [template_page_mixin],
  name: 'vendor',
  data() {
    return {
      vendor:[]
    }
  },
  mounted() {
    this.getVendor();
  },
  methods: {
    getVendor(){
      this.$http.postRequest('/kakabl/vendor/getCardVendorList', {})
          .then(res => {
            if (res.code === 200) {
              this.vendor = res.data;
            } else {
              this.$t.message.toast(res.msg)
            }
          })
    },
	copyContant(e){
		uni.setClipboardData({
		  data: e,
		  success: function() {
		    this.$t.message.toast('复制成功');
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
}

body, page {
  background: #f9f9f9 !important;
  font-weight: 200px;
}

.vendor-content {
  padding: 3.4375rem 0.9375rem 0.9375rem;

  .vendor-content-item {
    background-color: #fff;
    width: 100%;
    border-radius: 0.40625rem;
    padding: 0.9375rem 0.78125rem;
    box-sizing: border-box;
    margin-bottom: 0.9375rem;

    .item-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: .875rem;
      font-weight: 400;
      color: #323232;


      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .item-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: .875rem;
      font-weight: 400;
      color: #999;
      margin-top: 0.78125rem;

      .cwx {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 0.625rem;
        background: #F7F7F7;
        border: 0.03125rem solid #999999;
        padding: 0.0625rem 0;

        uni-image {
          width: 18px;
          height: 18px;
        }

        .cwx-text {
          width: 4rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      .cqq {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 0.625rem;
        background: #F7F7F7;
        border: 0.03125rem solid #999999;
        padding: 0.0625rem 0;

        uni-image {
          width: 18px;
          height: 18px;
        }

        .cqq-text {
          width: 4rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

      }
    }
  }
}
</style>
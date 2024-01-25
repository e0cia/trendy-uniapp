<template>
  <view class="template-edit">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed customBack :bottomShadow="false" backgroundColor="#16171D">
      <view slot="back" class='tn-custom-nav-bar__back'
            @click="goBack">
        <text class='icon tn-icon-left-arrow'></text>
      </view>
    </tn-nav-bar>


    <view class="tn-color-white" :style="{paddingTop: vuex_custom_bar_height + 20 + 'px'}">
      <view class="tn-flex tn-flex-row-between tn-strip-bottom-min tn-padding">
        <view class="justify-content-item">
          <view class="tn-text-bold tn-text-lg">
            联系人
            <text class="tn-color-orange tn-padding-left-xs">*</text>
          </view>
          <view class="tn-color-gray tn-padding-top-xs ">
            <input placeholder="请输入联系人" name="input" v-model="from.contactName" placeholder-style="color:#AAAAAA"
                   value=""></input>
          </view>
        </view>
        <view class="justify-content-item tn-text-xl tn-color-gray">
          <view class="tn-icon-my tn-padding-top"></view>
        </view>
      </view>

      <view class="tn-flex tn-flex-row-between tn-strip-bottom-min tn-padding">
        <view class="justify-content-item">
          <view class="tn-text-bold tn-text-lg">
            手机号码
            <text class="tn-color-orange tn-padding-left-xs">*</text>
          </view>
          <view class="tn-color-gray tn-padding-top-xs">
            <input placeholder="请输入手机号码" name="input" v-model="from.contactPhone"
                   placeholder-style="color:#AAAAAA" value=""></input>
          </view>
        </view>
        <view class="justify-content-item tn-text-xl tn-color-gray">
          <view class="tn-icon-phone tn-padding-top"></view>
        </view>
      </view>

      <view class="">
        <tn-picker mode="region" v-model="show" :areaCode='["44", "4401", "440106"]'
                   @confirm="confirmPicker"></tn-picker>
      </view>

      <view class="tn-flex tn-flex-row-between tn-strip-bottom-min tn-padding" @tap="showPicker">
        <view class="justify-content-item">
          <view class="tn-text-bold tn-text-lg">
            地区信息
            <text class="tn-color-orange tn-padding-left-xs">*</text>
          </view>
          <view class="tn-color-gray tn-padding-top-xs">
            {{ result }}
          </view>
        </view>
        <view class="justify-content-item tn-text-lg tn-color-gray">
          <view class="tn-icon-right tn-padding-top"></view>
        </view>
      </view>

      <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding">
        <view class="tn-flex justify-content-item">
          <view class="tn-text-bold tn-text-lg">
            详细地址
            <text class="tn-color-orange tn-padding-left-xs">*</text>
          </view>
        </view>
      </view>

      <view class="box-shadow tn-padding" style="border-radius: 10rpx;margin: 0rpx 30rpx 30rpx 30rpx;">
        <textarea maxlength="500" v-model="from.contactAreaDetial" placeholder="请填写详细地址信息"
                  placeholder-style="color:#AAAAAA" style="height: 160rpx;width: 100%;"></textarea>
      </view>

      <!-- 悬浮按钮-->
      <view v-if="this.from.id!==0" class="tn-flex tn-footerfixed">
        <view class="tn-flex-1 justify-content-item tn-margin-right tn-margin-left-xs tn-text-center">
          <tn-button backgroundColor="#FFFFFF " padding="40rpx 0" width="60%" :fontSize="28" fontColor="#000000"
                     shape="round" @click="editAddr">
            <text class="">保 存</text>
          </tn-button>
        </view>
      </view>


      <view v-if="this.from.id===0"   class="tn-flex tn-footerfixed">
        <view class="tn-flex-1 justify-content-item tn-margin-right tn-margin-left-xs tn-text-center">
          <tn-button backgroundColor="#FFFFFF " padding="40rpx 0" width="60%" :fontSize="28" fontColor="#000000"
                     shape="round" @click="addAddr">
            <text class="">增 加</text>
          </tn-button>
        </view>
      </view>

    </view>
  </view>
</template>

<script>
import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
import * as util from './../../util/util'
export default {
  name: 'TemplateEdit',
  mixins: [template_page_mixin],
  data() {
    return {
      show: false,
      index: 99,
      index1: 99,
      result: '请选择收货地区',
      areaCode: [],
      from: {
        id: 0,
        contactName: "",
        contactPhone: "",
        contactProvince: "",
        contactCity: "",
        contactArea: "",
        contactAreaDetial: ""
      }
    }
  },
  onLoad(e) {
    if (e.id) {
      this.from.id = e.id
      // console.log(111,e)
      this.getadds(e.id)
    }

  },
  methods: {
    // 跳转
    tn(e) {
      uni.navigateTo({
        url: e,
      });
    },

    bindPickerChange: function (e) {
      this.index = e.detail.value
    },
    bindDateChange: function (e) {
      this.index1 = e.detail.value
    },

    // 打开Picker
    openPicker() {
      this.show = true
    },
    // 弹出Picker
    showPicker(event) {
      this.openPicker()
    },
    // 切换默认地区
    defaultRegionChange(event) {
      if (event.index === 0) {
        this.defaultRegion = ['广东省', '广州市', '天河区']
        this.areaCode = []
      } else if (event.index === 1) {
        this.defaultRegion = []
        this.areaCode = ['44', '4401', '440111']
      }
      this.openPicker()
    },
    // 切换点击遮罩关闭
    maskCloseableChange(event) {
      this.maskCloseable = event.index === 0 ? true : false
      this.openPicker()
    },

    // 点击确认按钮
    confirmPicker(event) {

      this.result = `${event.province.label}-${event.city.label}-${event.area.label}`
      this.from.contactProvince = event.province.label;
      this.from.contactCity = event.city.label;
      this.from.contactArea = event.area.label;
    },
    getadds(id) {
      this.$http.postRequest('/kakabl/address/query', {id: id})
          .then(res => {
            console.log(res.data[0])
            this.from = res.data[0]
          })
    },
    editAddr() {
		this.$t.message.loading('正在更新信息')
	   if (util.isBlank(this.from.contactName)){
	     this.$t.message.toast('姓名不可为空')
	     return
	   }
	   if (util.isBlank(this.from.contactPhone)){
	     this.$t.message.toast('联系方式不可为空')
	     return
	   }
	   if (util.isBlank(this.from.contactProvince)){
	     this.$t.message.toast('省份不可为空')
	     return
	   }
	   if (util.isBlank(this.from.contactCity)){
	     this.$t.message.toast('城市不可为空')
	     return
	   }
	   if (util.isBlank(this.from.contactArea)){
	     this.$t.message.toast('地区不可为空')
	     return
	   }
	   if (util.isBlank(this.from.contactAreaDetial)){
	     this.$t.message.toast('详细地址不可为空')
	     return
	   }
	   
      this.$http.postRequest('/kakabl/address/edit', this.from)
          .then(res => {
			 this.$t.message.closeLoading()
			   if (res.code===200){
				   uni.showToast({
				     title: '保存成功',
				     icon: 'none',
				     duration: 2000
				   });
			   }
          })
    },
    addAddr(){
		this.$t.message.loading('正在更新信息')
		if (util.isBlank(this.from.contactName)){
		  this.$t.message.toast('姓名不可为空')
		  return
		}
		if (util.isBlank(this.from.contactPhone)){
		  this.$t.message.toast('联系方式不可为空')
		  return
		}
		if (util.isBlank(this.from.contactProvince)){
		  this.$t.message.toast('省份不可为空')
		  return
		}
		if (util.isBlank(this.from.contactCity)){
		  this.$t.message.toast('城市不可为空')
		  return
		}
		if (util.isBlank(this.from.contactArea)){
		  this.$t.message.toast('地区不可为空')
		  return
		}
		if (util.isBlank(this.from.contactAreaDetial)){
		  this.$t.message.toast('详细地址不可为空')
		  return
		}
		
      this.$http.postRequest('/kakabl/address/add', this.from)
          .then(res => {
			this.$t.message.closeLoading()
            if (res.code===200){
              uni.showToast({
                title: '增加成功',
                icon: 'none',
                duration: 2000,
                mask:true
              });
              // setTimeout(() => {
              //   uni.navigateBack({
              //     delta: 1,//返回层数，2则上上页
              //   })
              // }, 1000)

            }

          })
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

/* 页面阴影 start*/
.box-shadow {
  border-radius: 15rpx;
  border: 1rpx solid #494B51;
  background-color: rgba(255, 255, 255, 0.08);
  // box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
}

/* 间隔线 start*/
.tn-strip-bottom-min {
  width: 100%;
  border-bottom: 1rpx solid #F8F9FB08;
}

.tn-strip-top {
  width: 100%;
  border-top: 20rpx solid #F8F9FB08;
}

/* 间隔线 end*/

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
</style>

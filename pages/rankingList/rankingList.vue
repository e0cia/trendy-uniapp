<!-- 薪资排行 -->
<template>
  <view>

    <!-- 顶部自定义导航 -->
    <tn-nav-bar class='back-go' :isBack="true" fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
        <text class='icon tn-icon-left-arrow'></text>
      </view>
      <view class="tn-flex tn-flex-col-center tn-flex-row-center">
        <text class="tn-text-xl tn-color-white">排行榜</text>
      </view>
    </tn-nav-bar>


    <view class="contaier" style="background-color: #FFFFFF;">
      <view class="top_bg">
        <view class="one_box">
          <!-- 第二名 -->
          <view   v-if="inviteList.length>1 "  class="top3">
            <view class="num_two">
              <image class="huangguan2" src="@/static/image/rank/two.png"></image>
              <image class="top3_head" :src="this.inviteList[1].userPhoto"></image>
              <!-- <view class="top_name">{{twoName}}</view> -->
              <view class="top_name">{{ this.inviteList[1].name }}</view>
              <view class="top_sy">{{ this.inviteList[1].userId }}<span>(有效:{{this.inviteList[1].intiveNumber}})</span></view>
            </view>
          </view>

          <!-- 第一名 -->
          <view  v-if="inviteList.length>0 "  class="top3">
            <view class="num_one">
              <image class="huangguan1" src="@/static/image/rank/one.png"></image>
              <image class="top3_head" :src="this.inviteList[0].userPhoto"></image>
              <!-- <view class="top_name" style="font-size: 30rpx;">{{oneName}}</view> -->
              <view class="top_name text-bold" style="font-size: 30rpx;">{{ this.inviteList[0].name }}</view>
              <view class="top_sy">{{ this.inviteList[0].userId }}<span>(有效:{{this.inviteList[0].intiveNumber}})</span></view>
            </view>
          </view>

          <!-- 第三名 -->
          <view   v-if="inviteList.length>2"   class="top3">
            <view class="num_three">
              <image class="huangguan2" src="@/static/image/rank/three.png"></image>
              <image class="top3_head" :src="this.inviteList[2].userPhoto"></image>
              <view class="top_name">{{ this.inviteList[2].name }}</view>
              <view class="top_sy">{{ this.inviteList[2].userId }}<span>(有效:{{this.inviteList[2].intiveNumber}})</span></view>
            </view>
          </view>
        </view>


        <view class="number_sy_box">
          <view class="number_sy_box_title">
            <text>大数据·统计</text>
            <text style="position: absolute; right: 20rpx;z-index: 9999; font-size: 24rpx;color: #c3c3c3;">
              截止（本周）：{{nowTime}}
            </text>
          </view>
          <view class="number_sy_main">
            <view style="width: 50%; text-align: center; border-right: 1px solid #eee;">
              <view class="number_num1">{{ allNumber }}个</view>
              <view class="danwei">本周共计</view>
            </view>
            <image mode="widthFix" class="xiaoding_bg" src="@/static/image/rank/Intersect.png"></image>
          </view>
        </view>
      </view>

      <view class="rankList_box">
        <view class="rankItem" v-for="(item,index) in inviteList" :key="index" v-if="index>=3">
          <view class="rankIndex">
            <text>{{ index +1 }}</text>
          </view>
          <view class="HeardBox">
            <image class="rankHeard" :src="item.userPhoto"></image>
          </view>

          <view class="NameBox">
            <!-- <view class="userName">{{item.name}}</view> -->
            <view class="userName text-bold">{{item.name}}</view>
            <view class="userPost text-gray">(id:{{item.userId}})</view>
            <view class="color_ccc">邀请人数 ： <text class="text-blue">{{item.intiveNumber}}</text>人/次</view>
          </view>
          <view class="download_box">
            <image mode="widthFix" src="@/static/image/rank/success.png"></image>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
export default {
  mixins: [template_page_mixin],
  data() {
    return {
      weekType:1,
      inviteList:[],
      inviteListOne:{},
      inviteListTwo:{},
      inviteListThree:{},
      nowTime: '',
      allNumber:0
    }
  },
  mounted() {
    this.getTime();
    this.queryInviteByDate();
  },
  methods: {
    // 跳转
    tn(e) {
      uni.navigateTo({
        url: e,
      });
    },
    getTime: function() {
      var date = new Date(),
          year = date.getFullYear(),
          month = date.getMonth() + 1,
          day = date.getDate(),
          hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
          minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
          second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      month >= 1 && month <= 9 ? (month = "0" + month) : "";
      day >= 0 && day <= 9 ? (day = "0" + day) : "";
      var timer = year + '-' + month + '-' + day + ' ' + hour + ':00';
      this.nowTime = timer
      console.log(this.nowTime);
    },
    queryInviteByDate() {
      this.$http.getRequest('/kakabl/Invite/query/week/list', {weekType:this.weekType})
          .then(res => {
            if (res.code === 200) {
              this.inviteList = res.data;
              this.allNumber = res.allNums;
            } else {
              this.$t.message.toast(res.msg)
            }
          })
    },


  },
  filters: {

  }
}
</script>

<style lang="scss">


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

.top_bg {
  width: 750rpx;
  height: 650rpx;
  background: url(http://cdn.zhoukaiwen.com/rank_bg.png) no-repeat;
  background-size: 750rpx;
  position: relative;
}

.one_box {
  width: 750rpx;
  height: 260rpx;
  position: absolute;
  left: 0;
  bottom: 110rpx;
  display: flex;
  justify-content: space-around;
}

.one_box .top3 {
  width: 210rpx;
  height: 280rpx;
}

.top_name {
  width: 100%;
  height: 55rpx;
  line-height: 60rpx;
  color: #f2f2f2;
  font-size: 26rpx;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.top_sy {
  width: 100%;
  height: 40rpx;
  line-height: 40rpx;
  font-size: 24rpx;
  color: rgba(255, 255, 255, .7);
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.top_sy span {
  font-size: 20rpx !important;
}

.num_one {
  position: relative;
}

.huangguan1 {
  width: 60px;
  height: 60px;
  position: absolute;
  right: -10rpx;
  top: -18*2rpx;
}

.num_one .top3_head {
  width: 150rpx;
  height: 150rpx;
  border-radius: 100%;
  margin: 15rpx 0 0 30rpx;
  border: 4rpx solid #ffdd3c;
}

.num_two {
  position: relative;
}

.huangguan2 {
  width: 100rpx;
  height: 100rpx;
  position: absolute;
  right: 15rpx;
}

.num_two .top3_head {
  width: 120rpx;
  height: 120rpx;
  border-radius: 100%;
  margin: 45rpx 0 0 45rpx;
  border: 4rpx solid #bcdcdf;
}

.num_three {
  position: relative;
}

.huangguan2 {
  width: 100rpx;
  height: 100rpx;
  position: absolute;
  right: 15rpx;
}

.num_three .top3_head {
  width: 120rpx;
  height: 120rpx;
  border-radius: 100%;
  margin: 45rpx 0 0 45rpx;
  border: 4rpx solid #e29d85;
}

// 第二块
.number_sy_box {
  width: 700rpx;
  height: 210rpx;
  background-color: #FFFFFF;
  position: absolute;
  left: 25rpx;
  border-radius: 20rpx;
  bottom: -115rpx;
  z-index: 999;
  padding: 22rpx;
  box-shadow: 3px 3px 15px 3px rgba(0, 0, 0, 0.1)
}

.number_sy_box_title {
  color: #888888;
  // font-weight: 500;
  font-size: 28rpx;
  display: flex;
  z-index: 9999;
  justify-content: space-between;
}

.number_sy_main {
  width: 100%;
  height: 124rpx;
  padding-top: 20rpx;
  line-height: 52rpx;
  // background: red;
  display: flex;
  justify-content: space-around;
  position: relative;
}

.xiaoding_bg {
  position: absolute;
  right: -22rpx;
  bottom: -30rpx;
  width: 180rpx;
}

.number_num1 {
  font-size: 40rpx;
  font-weight: 500;
  color: #2fc04f;
}

.number_num2 {
  font-size: 40rpx;
  font-weight: 500;
  color: #4bac7f;
}

.danwei {
  height: 60rpx;
  line-height: 60rpx;
  font-size: 26rpx;
  color: #c9c9c9;
}

// 列表
.rankList_box {
  width: 750rpx;
  min-height: 200rpx;
  margin-top: 130rpx;
}

.rankItem:last-child {
  border: none;
}

.rankItem {
  width: 700rpx;
  height: 140rpx;
  margin: 0px auto;
  border-bottom: 1px solid #e9e9e9;
}

.rankIndex {
  width: 60rpx;
  height: 140rpx;
  line-height: 140rpx;
  text-align: center;
  color: #CCCCCC;
  font-size: 40rpx;
  float: left;
}

.HeardBox {
  width: 100rpx;
  height: 100rpx;
  margin: 20rpx;
  border-radius: 100%;
  overflow: hidden;
  float: left;
  margin-right: 25rpx;
  margin-left: 10rpx !important;
}

.HeardBox image {
  width: 100%;
  height: 100%;
}

.NameBox {
  width: 400rpx;
  height: 140rpx;
  float: left;
  padding-top: 10rpx;
  box-sizing: border-box;
}

.NameBox view {
  height: 50rpx;
  line-height: 70rpx;
}

.userName {
  min-width: 90rpx;
  font-size: 30rpx;
  float: left;
  margin-right: 20rpx;
}

.download_box {
  width: 80rpx;
  height: 140rpx;
  // background-color: red;
  float: right;

}

.download_box image {
  width: 45rpx;
  margin: 50rpx auto;
  display: block;
}
.pages-rankingList-rankingList{
  background-color: #ffffff!important;
}
</style>

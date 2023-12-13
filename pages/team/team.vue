<template>
  <view class="kk-team tn-safe-area-inset-bottom">
    <view class="kk-team-content">
      <view class="kk-team-top">
        <!-- 顶部自定义导航 -->
        <tn-nav-bar fixed alpha customBack>
          <view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
            <text class='icon tn-icon-left-arrow'></text>
          </view>
          <view class="tn-flex tn-flex-col-center tn-flex-row-center">
            <text class="tn-text-xl tn-color-white">我的团队</text>
          </view>
        </tn-nav-bar>

        <view class="kk-team-card" :style="{paddingTop: vuex_custom_bar_height +30 + 'px'}">
          <div Style="display: flex">
            <text class="left-text">团队共计（人）：
              <text class="left-text-number">{{ teamData.directRecommendation + teamData.indirectRecommendation }}
              </text>
            </text>
          </div>

          <view class="intive-item-content-right">
            <view class="tn-icon-team-fill"></view>
          </view>

          <view class="is-active tn-color-white"
                :class="isActiveFlag===1?'kk-color-team-isactive':'kk-color-team-unisactive'">
            {{ isActiveFlag === 1 ? '已激活' : '未激活' }}
          </view>
        </view>

      </view>
      <view class="kk-team-center">
        <view class="kk-team-center-item" style="background: #947bfd">
          <view class="tn-shadow-warp button-number">
            <view class="tn-flex" style="width: 100%">

              <view class="tn-flex-1 tn-padding-sm tn-margin-xs">
                <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
                  <view class="tn-text-xxl tn-color-white">{{ teamData.directRecommendation }}</view>
                  <view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center tn-text-xs rs">直接人数(人)
                  </view>

                </view>
              </view>
              <view class="tn-flex-1 tn-padding-sm tn-margin-xs">
                <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
                  <view class="tn-text-xxl tn-color-white">{{ teamData.indirectRecommendation }}</view>
                  <view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center tn-text-xs rs">推荐人数(人)
                  </view>

                </view>
              </view>
              <view class="tn-flex-1 tn-padding-sm tn-margin-xs">
                <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
                  <view class="tn-text-xxl tn-color-white">{{ teamData.newArrivals }}</view>
                  <view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center tn-text-xs rs">今日新增(人)
                  </view>

                </view>
              </view>
            </view>

            <div class="fgx"></div>
            <view class="tn-flex" style="width: 100%">

              <view class="tn-flex-5 tn-padding-sm tn-margin-xs">
                <view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center tn-text-xs rs">小区有效粉丝
                  <text class="tn-color-white tn-margin-left-xs tn-text-md">{{
                      teamData.validDirectRecommendation
                    }}
                  </text>
                </view>
              </view>
              <view class="tn-flex-1 tn-padding-sm tn-margin-xs">
                <view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center tn-text-xs rs">|
                </view>
              </view>
              <view class="tn-flex-5 tn-padding-sm tn-margin-xs">
                <view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center tn-text-xs rs">团队有效粉丝
                  <text class="tn-color-white tn-margin-left-xs tn-text-md">
                    {{ teamData.validDirectRecommendation + teamData.validiIndirectRecommendation }}
                  </text>
                </view>
              </view>
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
      </view>


      <tn-tabs :list="fixedList" :current="tabsIndex" :isScroll="false"
               activeColor="#000000" :bold="true" :fontSize="32" :badgeOffset="[20, 50]"
               @change="tabChange"></tn-tabs>
      <view class="bead-content">
        <view class="bead-three">
          <!-- 标签内容 -->
          <view class="swiper__box" :current="swiperIndex">
            <view v-if="tabsIndex===0" class="swiper__item">
              <scroll-view class="scroll-view" scroll-y @scrolltolower="scrollToLower">
                <view  style="height:calc(100vh - 400px) ">
                  <view class="intive-detial"     v-for="(item, index) in dataDirectList" :key="index" >
                    <!--头部-->
                    <view
                        class="intive-detial-name tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between">
                      <view class="name-text">{{ item.inviteNicknameBy }}</view>
                      <view class="name-circle" :style="item.inviteNative===1?'background: green':'background: red'"></view>
                    </view>
                    <!--内容模块-->
                    <view class=" tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between">
                      <!--  内容-->
                      <view
                          class="intive-detial-content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-center">
                        <view class="intive-detial-content-image">
                          <image class="image-sty" :src="'/static/image/userCenter/haizhu.png'"
                          ></image>
                        </view>
                        <view class="intive-detial-content-title">
                          <view>ID：{{ item.inviteUserIdBy }}</view>
                          <view>手机号: {{ item.invitePhoneBy }}</view>
                        </view>
                      </view>

                      <view>
                        <view class="info-flag">{{ item.inviteNative===1?'已激活':'未激活' }}</view>
                      </view>
                    </view>
                    <!--底部-->
                    <view
                        class="intive-detial-bottom tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between">
                      <view class="intive-detial-data">
                        <text class="tn-color-gray--disabled">
                          {{ item.createTime }}
                        </text>
                      </view>
                    </view>
                  </view>
                  <tn-load-more :status="isLoadding?'loading':'nomore'" :loadingIcon="isLoadding"></tn-load-more>
                </view>
              </scroll-view>
            </view>

            <view v-else class="swiper__box" style="width: 100%;text-align: center;margin-top: 100px">暂不展示此内容</view>
          </view>
        </view>
      </view>
    </view>


  </view>
</template>
<script>
import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
import TnTabs from "../../tuniao-ui/components/tn-tabs/tn-tabs.vue";

export default {
  name: 'TopTitle',
  components: {TnTabs},
  mixins: [template_page_mixin],
  data() {
    return {
      fixedList: [{
        name: '直接人数'
      }, {
        name: '推广人数'
      }],
      tabsIndex: 0,
      swiperIndex: 0,
      teamData: {
        "newArrivals": 0,
        "indirectRecommendationList": [],
        "directRecommendation": 0,
        "indirectRecommendation": 0,
        "directRecommendationList": [],
        "validDirectRecommendation": 0,
        "validiIndirectRecommendation": 0,
        "isActivated": 0
      },
      dataDirectList: [

      ],
      pageNum: 1,
      pageSize: 10,
      isRefresh: true,
      isLoadding: false,
      isActiveFlag: 2//用户信息
    }
  },
  mounted() {
    //获取用户信息
    this.isActiveFlag = uni.getStorageSync("userInfo").extendUserInfo.isAvtive;
    //获取统计记录
    this.getteamData()
    //直接推的
    this.getdataDirectList()
  },
  methods: {
    tabChange(e) {
      //如果改变的不等于当前的才改变
      if (this.tabsIndex !== e) {
        this.switchClear(e)
        this.getdataDirectList()
      }
      this.tabsIndex = e
    },
    switchClear() {
      this.dataDirectList = []
      this.pageNum = 1
      this.isRefresh = true
    },
    getteamData() {
      this.$http.getRequest('/userCenter/team', {})
          .then(res => {
            if (res.code === 200) {
              this.teamData = res.data
              console.log(res.code)
            } else {
              this.$t.message.toast(res.msg)
            }
          })
    },
    //定义一个获取数据的方法
    getdataDirectList() {
      let that = this;
      let param = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
      this.isLoadding = true;
      this.$http.getRequest('/kakabl/Invite/query/list', param)
          .then(res => {
            if (res.code === 200) {
              that.isLoadding = false
              //如果结果大于0
              if (res.rows.length > 0) {
                //pageSize的值加大一个
                that.pageNum = that.pageNum + 1;
                that.dataDirectList = [...that.dataDirectList, ...res.rows]
              }
              console.log(that.dataDirectList)
              if (res.total <= that.dataDirectList.length) {
                this.isRefresh = false;
              }
            } else {
              that.$t.message.toast(res.msg)
            }
          })
    },
    scrollToLower() {
      if (this.isRefresh) {
        this.getdataDirectList();
      }
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


.kk-team, page {
  background: #f6f6f6 !important;
}

.kk-team-top {
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  padding: 16px;
  background: linear-gradient(to right, #bfacfe, #fce3ff);
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
}


.kk-color-team-isactive {
  background: linear-gradient(135deg, rgb(246, 194, 126) 10%, rgb(229, 134, 10) 100%);;
}

.kk-color-team-unisactive {
  background: gray;
}

.kk-team-card {
  width: 100%;
  position: relative;

  .left-text {
    font-weight: 600;

    .left-text-number {
      font-weight: 700;
      font-size: 24px;
    }
  }

  /*激活悬浮模块*/
  .is-active {
    padding: 5px 15px 5px 15px;
    position: absolute;
    right: -16px;
    border-radius: 50px 0 0 50px;
    left: auto;


  }

  .intive-item-content-right {
    position: absolute;
    right: 100px;
    top: 125px;
    font-size: 150px;
    width: 37px;
    height: 37px;
    line-height: 20px;
    color: #7444f8;
    opacity: 0.1;
  }
}

.kk-team-center {
  padding: 10px;

}

.kk-team-center-item {
  border-radius: 45rpx;
}


/* 背景波浪高度 */
.button-number {
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;
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

.kk-team-center-item .rs {
  color: rgb(255, 255, 255) !important;
}

.kk-team-center-item .fgx {
  margin: auto;
  width: 90%;
  height: 1px;
  background: rgba(255, 255, 255, .5);
}

.intive-detial {
  background: #FFFFFF;
  margin: 6px;
  padding: 12px 9px;
  border-radius: 6px;

  .intive-detial-name {
    .name-text {
      font-weight: 700;
      line-height: normal;
    }

    .name-circle {
      height: 9px;
      width: 9px;
      border-radius: 100%;
    }
  }

  .intive-detial-content {
    margin-top: 6px;

    .intive-detial-content-image {
      margin-right: 6px;

      .image-sty {
        width: 48px;
        height: 48px;
        border-radius: 3px;
      }
    }

    .intive-detial-content-title {
      padding-right: 13px;
      display: -webkit-box;
      overflow: hidden;
      white-space: normal !important;
      text-overflow: ellipsis;
      word-wrap: break-word;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      color: rgba(0, 0, 0, 0.4);
    }

    .intive-detial-content-info {
      .info-flag {

      }
    }

  }

  .intive-detial-bottom {
    margin-top: 10px;
  }
}
</style>a
<template>
  <view class="index">
    <view class="tn-page"></view>
    <tn-tabbar  v-model="currentIndex" :list="tabbarList" bgColor="#20202d" @change="changeTab"></tn-tabbar>

  </view>
</template>

<script>
export default {
  props: {
    tarbarIndex: {
      type: Number,
      required: true
    }
  },
  mounted() {
    this.currentIndex = this.tarbarIndex
  console.log("当前的currentIndex:::"+this.currentIndex);
  },
  data() {
    return {
      // 底部tabbar菜单数据
      tabbarList: [{
        title: '元素',
        activeIcon: 'shop-fill',
        inactiveIcon: 'shop'
      },
        {
          title: '海底',
          activeIcon: 'discover-fill',
          inactiveIcon: 'discover'
        },
        {
          title: '部落',
          activeIcon: 'reload-planet-fill',
          inactiveIcon: 'reload-planet'
        },
        {
          title: '我的',
          activeIcon: 'my-fill',
          inactiveIcon: 'my'
        }
      ],
      // tabbar当前被选中的序号
      currentIndex: 0
    }
  },
  methods: {
    changeTab(e){
      console.log("切换到:"+e)
      if (this.currentIndex ===e){
        return
      }
      this.currentIndex = e
      if (e===0){
        uni.switchTab({
          url:'/pages/index/index'
        })
      }else if (e===1){
        uni.navigateTo({
          url:'/pages/index/sea'
        })
      }else if (e===2){
        uni.navigateTo({
          url:'/pages/index/tribe'
        })
      }else if (e===3){
        uni.navigateTo({
          url:'/pages/index/my'
        })
      }
    }
  }
}
</script>
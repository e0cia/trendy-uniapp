<template>  
    <view v-if="platform != 'ios'">  
        <view class="left-side" @touchstart.stop="handleStart" @touchend.stop="handleEnd" v-if="leftDrag"></view>  
        <view class="right-side" @touchstart.stop="handleStart" @touchend.stop="handleEnd" v-if="rightDrag"></view>  
    </view>  
</template>  
<script>  
export default {  
    props: {  
        leftDrag: {  
            type: Boolean,  
            default: true  
        },  
        rightDrag: {  
            type: Boolean,  
            default: true  
        }  
    },  
    data() {  
        return {  
            startPosX: 0,  
            direction: 'left',  
            platform: uni.getSystemInfoSync().platform.toLowerCase(),  
            windowWidth: uni.getSystemInfoSync().windowWidth  
        };  
    },  
    methods: {  
        handleStart(e) {  
            if (!e.touches) {  
                return;  
            }  
            this.startPosX = e.touches[0].clientX;  
            this.direction = this.startPosX > this.windowWidth / 2 ? 'right' : 'left';  
        },  
        handleEnd(e) {  
            if (!e.changedTouches || !e.changedTouches[0]) {  
                return;  
            }  
            let pages = getCurrentPages(),  
                page = pages[pages.length - 1];  
            if (!page) {  
                return;  
            }  
            let x = e.changedTouches[0].clientX;  
            const offset = x - this.startPosX;  
            const canDrag = (this.direction == 'left' && offset >= 50) || (this.direction == 'right' && offset <= -50);  
            if (canDrag) {  
                this.startPosX = 0;  
                uni.navigateBack();  
            }  
        }  
    }  
};  
</script>  

<style lang="scss">  
@mixin pos {  
    position: fixed;  
    top: 0;  
    bottom: 0;  
    width: 40rpx;  
    opacity: 0.01;  
    background-color: $uni-bg-color;  
}  
.left-side {  
    @include pos;  
    left: 0;  
}  
.right-side {  
    @include pos;  
    right: 0;  
}  
</style>
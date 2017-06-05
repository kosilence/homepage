<template>
    <div id="gyBanner" class="gy-banner" :class="{ 'animation--padding' : bannerAnimation }" :style="{ height: winHeight }">
        <div class="gy-banner__body" :class="{ 'gy-banner__body--width' : imgScale == 'width' }">
            <div class="gy-banner__text">
                <h1 class="gy-banner__title">This is a title.</h1>
                <p class="gy-banner__content">dfsfsfsfsfsfsfsdfsfsdf</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'gy-banner',
    data() {
        return {
            winHeight: window.innerHeight + 'px',
            imgScale: (window.innerWidth - 20) / (window.innerHeight - 20) >= 1.78 ? 'width' : 'height',
            bannerAnimation: false,
        };
    },
    created() {
    },
    mounted() {
        var that = this;
        setTimeout(function() {
            that.bannerAnimation = true;
        }, 500);
    }
};
</script>

<style lang="scss" scoped>
.gy-banner {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    transition: all 2s ease-out;
    background-color: #fff;
    &__body {
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        background: url("http://ww1.sinaimg.cn/large/9eb6a82aly1fg056qul7hj21hc0u0dqe.jpg") no-repeat;
        background-position: top center;
        background-size: auto 100%;
        box-shadow: 5px 5px 20px #000;
        &--width {
            background-size: 100% auto;
        }
    }
    &__text {
        width: 100%;
        height: auto;
        position: relative;
        top: -120px;
    }
    &__title {
        font-size: 42px;
        font-weight: bold;
        margin-bottom: 40px;
    }
    &__content {
        font-size: 30px;
    }
    &.animation--padding {
        padding: 20px;
    }
}
</style>

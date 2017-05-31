<template>
    <div id="gyBanner" class="gy-banner" :style="{ height: winH }" :class="{ 'animation--padding' : bannerAnimation }">
        <div class="banner__body" :class="{ 'banner__body--width' : imgScale == 'width' }">
            <div class="banner__text">
                <h1 class="banner__title">This is a title.</h1>
                <p class="banner__content">dfsfsfsfsfsfsfsdfsfsdf</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'gy-banner',
    data() {
        return {
            winH: window.innerHeight + 'px',
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
        }, 1000);
    }
};
</script>

<style lang="scss">
.gy-banner {
    width: 100%;
    box-sizing: border-box;
    transition: all 2s ease-out;
    background-color: #fff;
    .banner {
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
    }
    &.animation--padding {
        padding: 20px;
    }
}
</style>

<template>
    <div id="gyBanner" class="gy-banner" :class="{ 'animation--padding' : bannerAnimation }" :style="{ height: winHeight }">
        <div class="gy-banner__body">
            <div class="gy-banner__text">
                <h1 class="gy-banner__title">I'm kosilence.</h1>
                <p class="gy-banner__content">The lonely journey called life.</p>
                <a class="gy-banner__btn" @click="scrollToAlbum">Continue</a>
            </div>
        </div>
    </div>
</template>

<script>
import gyScrollJS from '../js/gy-scroll.js';

export default {
    name: 'gy-banner',
    data() {
        return {
            winHeight: window.innerHeight + 'px',
            bannerAnimation: false,
        };
    },
    methods: {
        scrollToAlbum: function() {
            gyScrollJS.scrollToPos(window.innerHeight);
        }
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
    box-sizing: border-box;
    transition: padding .7s ease-out;
    background-color: #fff;
    &__body {
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        background: url("http://ww1.sinaimg.cn/large/9eb6a82aly1fg056qul7hj21hc0u0dqe.jpg") no-repeat;
        background-position: top center;
        background-size: cover;
        box-shadow: 5px 5px 20px #000;
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
        margin-bottom: 20px;
    }
    &__content {
        font-size: 30px;
        margin-bottom: 30px;
    }
    &__btn {
        width: 150px;
        height: 40px;
        display: block;
        margin: 0 auto;
        border: 1px solid #222;
        line-height: 40px;
        font-size: 16px;
        border-radius: 5px;
        background: none;
        color: #222;
        cursor: pointer;
        transition: all .5s;
        &:hover {
            text-decoration: none;
            background-color: rgba(82, 83, 84, 0.2);
        }
    }
    &.animation--padding {
        padding: 20px;
    }
}
</style>

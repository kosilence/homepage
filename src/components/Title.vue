<template>
    <div id="gyTitle" class="gy-title">
        <div class="gy-title__line gy-title__line--top" :class="{ 'animation--top': lineAnimation }"></div>
        <h3 class="gy-title__sub"></h3>
        <h2 class="gy-title__main">Album Ddfsdfsdfs</h2>
        <div class="gy-title__line gy-title__line--bottom" :class="{ 'animation--bottom': lineAnimation }"></div>
    </div>
</template>

<script>
export default {
    name: 'gy-title',
    props: ['scrollPos'],
    data() {
        return {
            lineAnimation: false,
        };
    },
    created() {
        window.addEventListener('scroll', this.titleLineAnim);
    },
    methods: {
        titleLineAnim() {
            if(this.lineAnimation) {
                return;
            }
            if(window.scrollY >= this.scrollPos) {
                this.lineAnimation = true;
            }else {
                return;
            }
        }
    },
    destroyed () {
        window.removeEventListener('scroll', this.titleLineAnim);
    }
};
</script>

<style lang="scss">
.gy-title {
    width: 100%;
    margin: 80px 0 50px;
    text-align: center;
    position: relative;
    font-size: 22px;
    &__line {
        width: 44px;
        height: 1px;
        background-color: #000;
        position: absolute;
        opacity: 0;
        transform: rotate(-45deg);
    }
    &__line--top {
        top: 3px;
        left: 50%;
        margin-left: 15px;
    }
    &__line--bottom {
        bottom: 3px;
        right: 50%;
        margin-right: 15px;
    }
    &__main {
        width: 100%;
        height: 80px;
        line-height: 80px;
        font-weight: bold;
    }
    .animation--top {
        animation: topTitleAnim 2s;
        opacity: 1;
    }
    .animation--bottom {
        animation: bottomTitleAnim 2s;
        opacity: 1;
    }
}

@keyframes topTitleAnim
{
    0% {
        top: -15px;
        margin-left: 30px;
        transform: rotate(0deg) scaleX(1);
        opacity: 0;
    }
    60% {
        top: -15px;
        margin-left: 30px;
        opacity: 1;
        transform: rotate(-1485deg) scaleX(1);
    }
    90% {
        top: -40px;
        margin-left: 55px;
        opacity: 1;
        transform: rotate(-1485deg) scaleX(1.5);
    }
    100% {
        top: 3px;
        margin-left: 15px;
        opacity: 1;
        transform: rotate(-1485deg) scaleX(1);
    }
}
@keyframes bottomTitleAnim
{
    0% {
        bottom: -15px;
        margin-right: 30px;
        transform: rotate(0deg) scaleX(1);
        opacity: 0;
    }
    60% {
        bottom: -15px;
        margin-right: 30px;
        opacity: 1;
        transform: rotate(-1485deg) scaleX(1);
    }
    90% {
        bottom: -40px;
        margin-right: 55px;
        opacity: 1;
        transform: rotate(-1485deg) scaleX(1.5);
    }
    100% {
        bottom: 3px;
        margin-right: 15px;
        opacity: 1;
        transform: rotate(-1485deg) scaleX(1);
    }
}
</style>























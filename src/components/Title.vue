<template>
    <div id="gyTitle" class="gy-title">
        <div class="gy-title__line gy-title__line--top" :class="{ 'animation--top': lineAnimation }"></div>
        <div class="gy-title__line gy-title__line--bottom" :class="{ 'animation--bottom': lineAnimation }"></div>
        <h2 class="gy-title__main" @click="openLinkPage">{{ firstWord }}<span class="gy-title__desc">{{ otherWords }}</span></h2>
    </div>
</template>

<script>
export default {
    name: 'gy-title',
    props: ['title', 'link'],
    data() {
        return {
            scrollPos: 0,
            lineAnimation: false,
            firstWord: '',
            otherWords: ''
        };
    },
    created() {
        this.firstWord = this.title.slice(0, 1);
        this.otherWords = this.title.slice(1);
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
        },
        openLinkPage: function() {
            let pageLink = this.link;
            window.open(pageLink);
        }
    },
    mounted() {
        this.scrollPos = this.$el.offsetTop + 210 - window.innerHeight;
        window.addEventListener('scroll', this.titleLineAnim);
    },
    destroyed () {
        window.removeEventListener('scroll', this.titleLineAnim);
    }
};
</script>

<style lang="scss" scoped>
.gy-title {
    width: 100%;
    padding: 65px 0 65px;
    text-align: center;
    position: relative;
    font-size: 22px;
    &__line {
        width: 40px;
        height: 1px;
        background-color: #000;
        position: absolute;
        opacity: 0;
        transform: rotate(-45deg);
    }
    &__line--top {
        top: 70px;
        left: 50%;
        margin-left: 15px;
    }
    &__line--bottom {
        bottom: 70px;
        right: 50%;
        margin-right: 15px;
    }
    &__main {
        width: 200px;
        height: 80px;
        margin: 0 auto;
        line-height: 80px;
        font-size: 30px;
        font-weight: bold;
        position: relative;
        cursor: pointer;
        transition: all .3s;
        &:hover {
            transform: scale(1.2, 1.2);
        }
    }
    &__desc {
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        position: absolute;
        top: 50%;
        margin-top: -6px;
        margin-left: 2px;
    }
    .animation--top {
        animation: topTitleAnim 1.5s;
        opacity: 1;
    }
    .animation--bottom {
        animation: bottomTitleAnim 1.5s;
        opacity: 1;
    }
}

@keyframes topTitleAnim
{
    0% {
        top: 50px;
        margin-left: 35px;
        transform: rotate(0deg) scaleX(1);
        opacity: 0;
    }
    60% {
        top: 50px;
        margin-left: 35px;
        opacity: 1;
        transform: rotate(675deg) scaleX(1);
    }
    90% {
        top: 30px;
        margin-left: 55px;
        opacity: 1;
        transform: rotate(675deg) scaleX(1.5);
    }
    100% {
        top: 70px;
        margin-left: 15px;
        opacity: 1;
        transform: rotate(675deg) scaleX(1);
    }
}
@keyframes bottomTitleAnim
{
    0% {
        bottom: 50px;
        margin-right: 35px;
        transform: rotate(0deg) scaleX(1);
        opacity: 0;
    }
    60% {
        bottom: 50px;
        margin-right: 35px;
        opacity: 1;
        transform: rotate(675deg) scaleX(1);
    }
    90% {
        bottom: 30px;
        margin-right: 55px;
        opacity: 1;
        transform: rotate(675deg) scaleX(1.5);
    }
    100% {
        bottom: 70px;
        margin-right: 15px;
        opacity: 1;
        transform: rotate(675deg) scaleX(1);
    }
}
</style>























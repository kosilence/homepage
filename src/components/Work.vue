<template>
    <div class="gy-work" @click="gotoWorkPage()">
        <div class="gy-work__contanier">
            <div class="gy-work__outer" :class="'gy-work--' + workIndex">
                <p class="gy-work__time">{{ work.time }}</p>
                <h3 class="gy-work__title">{{ work.title }}</h3>
                <p class="gy-work__desc">{{ work.desc }}</p>
            </div>
            <div class="gy-work__inner">
                <p class="gy-work__time">{{ work.time }}</p>
                <h3 class="gy-work__title">{{ work.title }}</h3>
                <p class="gy-work__desc">{{ work.desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'gy-work',
    props: ['work', 'workIndex'],
    created() {
    },
    data() {
        return {
            showInnerBlock: false
        }
    },
    methods: {
        gotoWorkPage: function() {
            var that = this;
            window.open(that.work.url);
        }
    }
};
</script>

<style lang="scss" scoped>
$workcolor : #222;
.gy-work {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #fff;
    cursor: pointer;
    perspective: 1000;
    &--0 {
        background-color: lighten($workcolor, 0);
    }
    &--1 {
        background-color: lighten($workcolor, 35%);
    }
    &--2 {
        background-color: lighten($workcolor, 30%);
    }
    &--3 {
        background-color: lighten($workcolor, 25%);
    }
    &--4 {
        background-color: lighten($workcolor, 20%);
    }
    &--5 {
        background-color: lighten($workcolor, 15%);
    }
    &:hover {
        .gy-work__contanier {
            transform: rotateY(180deg);
        }
    }
    &__contanier {
        width: 100%;
        height: 100%;
        display: block;
        box-sizing: border-box;
        position: relative;
        text-align: left;
        font-weight: bold;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        transform-origin: center center;
        transition: transform .8s;
    }
    &__outer {
        width: 100%;
        height: 100%;
        color: #eee;
        padding: 30px 20px;
        position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 0;
        z-index: 9;
        backface-visibility: hidden;
    }
    &__inner {
        width: 100%;
        height: 100%;
        color: #222;
        padding: 30px 20px;
        position: absolute;
        box-sizing: border-box;
        background-color: #eee;
        top: 0;
        left: 0;
        z-index: 5;
        transform: rotateY(180deg);
        transform-origin: center center;
        backface-visibility: hidden;
    }
    &__time {
        width: 100%;
        font-size: 14px;
        margin-bottom: 20px;
    }
    &__title {
        width: 100%;
        font-size: 20px;
        margin-bottom: 30px;
    }
    &__desc {
        font-size: 14px;
        line-height: 22px;
    }
}
</style>























<template>
    <div id="gyNav" class="gy-nav">
        <div class="gy-nav__logo">Cosin.tk</div>
        <ul class="gy-nav__pages">
            <li><a class="page__link page__link--white" href="#" @click="backToBanner">Home</a></li>
            <li><a class="page__link page__link--white" href="#">Album</a></li>
            <li><a class="page__link page__link--white" href="#">Blog</a></li>
            <li><a class="page__link page__link--white" href="#">Museum</a></li>
        </ul>
    </div>
</template>

<script>
import Bus from '../js/bus.js';

export default {
    name: 'gy-nav',
    methods: {
        backToBanner: function() {
            Bus.$emit('backToBanner');
        }
    }
};
</script>

<style lang="scss">
.gy-nav {
    width: 100%;
    box-sizing: border-box;
    background: none;
    position: fixed;
    top: 20px;
    height: 60px;
    line-height: 60px;
    padding: 0 60px;
    z-index: 99;
    &__logo {
        float: left;
    }
    &__pages {
        float: right;
        li {
            display: inline-block;
            margin-left: 30px;
        }
        .page__link {
            transition: color .3s;
            &--white {
                color: #bbb;
                &:hover {
                    color: #333;
                }
            }
            &--black {
                color: #333;
                &:hover {
                    color: #bbb;
                }
            }
        }
    }
}
</style>


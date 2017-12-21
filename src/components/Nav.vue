<template>
    <div id="gyNav" class="gy-nav" :style="{ display: display, opacity : opacity }">
        <div class="gy-nav__logo">Cosin.tk</div>
        <ul class="gy-nav__pages">
            <li><a class="page__link" href="/">Home</a></li>
            <li><a class="page__link" href="#">Album</a></li>
            <li><a class="page__link" target="_blank" href="http://blog.cosin.tk">Blog</a></li>
            <li><a class="page__link" href="#">Museum</a></li>
        </ul>
    </div>
</template>

<script>
import gyScrollJS from '../js/gy-scroll.js';

export default {
    name: 'gy-nav',
    data() {
        return {
            display: 'none',
            opacity: 0
        };
    },
    methods: {
        setNavOpacity: function() {
            if(window.scrollY > window.innerHeight) {
                this.display = 'block';
                this.opacity = 1;
                return;
            }
            const navHeight = 55;
            if(window.scrollY > (window.innerHeight - navHeight)) {
                this.display = 'block';
                if(window.scrollY < window.innerHeight) {
                    let opacityNum = 1 - (window.innerHeight - window.scrollY) / navHeight;
                    this.opacity = opacityNum.toFixed(2);
                }
            }else {
                this.display = 'none';
                this.opacity = 0;
            }
        }
    },
    mounted() {
        let that = this;
        window.onscroll = that.setNavOpacity;
    }
};
</script>

<style lang="scss">
.gy-nav {
    width: 100%;
    box-sizing: border-box;
    background-color: rgba(230, 230, 230, .9);
    position: fixed;
    top: 0;
    height: 55px;
    line-height: 55px;
    padding: 0 60px;
    z-index: 99;
    &__logo {
        float: left;
        font-weight: bold;
    }
    &__pages {
        float: right;
        li {
            display: inline-block;
            margin-left: 30px;
        }
        .page__link {
            transition: all .3s;
            color: #22313f;
            &:hover {
                color: #000000;
            }
        }
    }
}
</style>


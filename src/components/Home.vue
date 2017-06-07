<template>
    <div id="gyHome" class="gy-home" :style="[ pageScroll ? { top: winHeight } : { top: '0' }]">
        <gy-banner id="pageBanner" v-on:scrollToPage="scrollToPage"></gy-banner>
        <gy-album id="pageAlbum"></gy-album>
        <gy-blog id="pageBlog"></gy-blog>
        <gy-museum id="pageMuseum"></gy-museum>
    </div>
</template>

<script>
import Bus from '../js/bus.js';

import gyBanner from './Banner';
import gyAlbum from './Album';
import gyBlog from './Blog';
import gyMuseum from './Museum';

import gyScrollJS from '../js/gy-scroll.js';

export default {
    name: 'home',
    components: {
        gyBanner,
        gyAlbum,
        gyBlog,
        gyMuseum,
    },
    data() {
        return {
            winHeight: (-1 * window.innerHeight) + 'px',
            pageScroll: false
        };
    },
    methods: {
        scrollToPage: function() {
            gyScrollJS.enableScroll();
            this.pageScroll = true;
            window.scroll(0, 3);
        },
        scrollToTop: function() {
            this.pageScroll = false;
            gyScrollJS.disableScroll();
        }
    },
    mounted() {
        var that = this;
        gyScrollJS.disableScroll();

        // 事件总线监听 Nav 传递的点击事件
        Bus.$on('backToBanner', function() {
            that.scrollToTop();
        });
    },
    destroyed() {
        gyScrollJS.enableScroll();
    }
};
</script>

<style lang="scss" scoped>
.gy-home {
    width: 100%;
    position: absolute;
    transition: top 1s;
}
</style>
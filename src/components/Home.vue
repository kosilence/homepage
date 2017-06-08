<template>
    <div id="gyHome" class="gy-home">
        <gy-banner id="pageBanner"></gy-banner>
        <gy-album id="pageAlbum"></gy-album>
        <gy-blog id="pageBlog"></gy-blog>
        <gy-museum id="pageMuseum"></gy-museum>
    </div>
</template>

<script>
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
        };
    }
};
</script>

<style lang="scss" scoped>
.gy-home {
    width: 100%;
}
</style>
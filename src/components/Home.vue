<template>
    <div class="home">
        <gy-banner></gy-banner>
        <gy-album></gy-album>
        <gy-blog></gy-blog>
    </div>
</template>

<script>
import gyBanner from './Banner';
import gyAlbum from './Album';
import gyBlog from './Blog';

export default {
    name: 'home',
    components: {
        gyBanner,
        gyAlbum,
        gyBlog,
    }
};
</script>

<style scoped>

</style>

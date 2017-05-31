<template>
    <div class="home">
        <gy-banner></gy-banner>
        <gy-album></gy-album>
    </div>
</template>

<script>
import gyBanner from './Banner';
import gyAlbum from './Album';

export default {
    name: 'home',
    components: {
        gyBanner,
        gyAlbum,
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
        };
    },
};
</script>

<style scoped>

</style>

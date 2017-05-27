<template>
    <div class="home">
        <gy-banner></gy-banner>
    </div>
</template>
<script>
import gyBanner from './Banner';

export default {
    name: 'home',
    components: {
        gyBanner,
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
        };
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

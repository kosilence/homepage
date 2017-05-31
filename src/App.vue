<template>
    <div id="app" class="app">
        <gy-nav></gy-nav>
        <router-view></router-view>
    </div>
</template>

<script>
import gyNav from './components/Nav';


export default {
    name: 'app',
    components: {
        gyNav,
    },
};
</script>

<style lang="scss">
@import url('./scss/init.scss');

body {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    min-width: 1200px;
}
.app {
    width: 100%;
    position: relative;
    text-align: center;
    color: #2c3e50;
}
</style>

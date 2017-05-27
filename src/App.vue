<template>
    <div id="app" class="app">
        <gy-nav></gy-nav>
        <img src="./assets/logo.png">
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
}
.app {
    width: 100%;
    height: 2000px;
    position: relative;
    text-align: center;
    color: #2c3e50;
}
</style>

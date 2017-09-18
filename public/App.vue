<template>
    <div id="app" class="gy-app">
        <gy-nav></gy-nav>
        <router-view></router-view>
        <gy-footer></gy-footer>
    </div>
</template>

<script>
import gyNav from './components/Nav';
import gyFooter from './components/Footer';

export default {
    name: 'app',
    components: {
        gyNav,
        gyFooter,
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
.gy-app {
    width: 100%;
    position: relative;
    text-align: center;
    color: #2c3e50;
}
</style>

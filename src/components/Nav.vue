<template>
    <div id="gyNav" class="gy-nav">
        <div class="nav__logo">Cosin.tk</div>
        <ul class="nav__pages">
            <li><a href="">Home</a></li>
            <li><a href="">Album</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Museum</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'gy-nav',
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
    .nav {
        &__logo {
            float: left;
            cursor: pointer;
        }
        &__pages {
            float: right;
            li {
                display: inline-block;
                margin-left: 30px;
            }
            a:hover {
                color: #eee;
            }
        }
    }
}
</style>


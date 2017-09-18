<template>
    <div id="gyFooter" class="gy-footer">
        <p class="gy-footer__body">&copy; Copyright 2017 @<a href="https://github.com/kosilence" target="_blank">GaoYi</a>&nbsp; No Rights Reserved</p>
    </div>
</template>

<script>
export default {
    name: 'gy-footer',
    data() {
        return {
        };
    },
};
</script>

<style lang="scss" scoped>
.gy-footer {
    width: 100%;
    height: 50px;
    background-color: #111;
    text-align: center;
    box-sizing: border-box;
    &__body {
        line-height: 50px;
        color: #eee;
        font-size: 12px;
        a {
            color: #eee;
            font-size: 12px;
        }
    }
}
</style>

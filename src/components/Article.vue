<template>
    <div class="gy-article" :class="{ 'gy-article--first': articleIndex === 0 }">
        <a :href="article.url" target="_blank" class="gy-article__contanier">
            <p class="gy-article__time">{{ article.time }}</p>
            <h3 class="gy-article__title">{{ article.title }}</h3>
            <p class="gy-article__desc">{{ article.desc }}</p>
        </a>
    </div>
</template>

<script>
export default {
    name: 'gy-article',
    props: ['article', 'articleIndex'],
    created() {
    },
    methods: {
        getArticles: function() {

        }
    }
};
</script>

<style lang="scss" scoped>
.gy-article {
    width: 80%;
    height: 120px;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    background-color: #22313f;
    overflow: hidden;
    border-bottom: 1px solid #22313f;
    &__contanier {
        display: block;
        width: 100%;
        height: 120px;
        background-color: #f5f5f5;
        position: absolute;
        top: 0;
        left: 0;
        transition: all .3s;
        text-decoration: none;
        color: #22313f;
        &:hover {
            left: 10px;
            padding-left: 10px;
            color: #22313f;
        }
    }
    &--first {
        border-top: 1px solid #22313f;
    }
    &__time {
        width: 100px;
        height: 26px;
        font-size: 14px;
        line-height: 26px;
        text-align: center;
        color: #f5f5f5;
        background-color: #22313f;
        font-weight: bold;
    }
    &__title {
        width: 100%;
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 20px;
        position: relative;
        top: -5px;
    }
    &__desc {
        width: 80%;
        margin: 0 auto;
        max-height: 45px;
        overflow: hidden;
        font-size: 14px;
        line-height: 18px;
        text-overflow: ellipsis;
        white-space:nowrap;
    }
}
</style>























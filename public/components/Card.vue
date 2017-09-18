<template>
    <div class="gy-card">
        <div class="gy-card__image">
            <img :src="card.url" :alt="card.name">
        </div>
        <div class="gy-card__name">{{ card.name }}</div>
    </div>
</template>

<script>
export default {
    name: 'gy-card',
    props: ['card']
};
</script>

<style lang="scss" scoped>
.gy-card {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 15px;
    cursor: pointer;
    transition: all .5s;
    &:hover {
        box-shadow: 0 5px 20px #bbb;
    }
    &__image {
        width: 100%;
        height: 230px;
        overflow: hidden;
        img {
            width: auto;
            height: 100%;
        }
    }
    &__name {
        width: 100%;
        text-align: center;
        font-size: 17px;
        line-height: 70px;
    }
}
</style>























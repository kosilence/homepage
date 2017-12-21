<template>
    <div class="gy-card">
        <div class="gy-card__image">
            <img :src="card.url" :alt="card.name" :class="{ 'portrait': imagePortrait }" v-on:load="setImagePortrait">
        </div>
        <div class="gy-card__name">{{ card.name }}</div>
    </div>
</template>

<script>
export default {
    name: 'gy-card',
    props: ['card'],
    data() {
        return {
            imagePortrait: false
        }
    },
    methods: {
        setImagePortrait: function(event) {
            let imageScale = event.target.width / event.target.height;
            if(imageScale < 1) {
                this.imagePortrait = true;
            }
        }
    }
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
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: auto;
            height: 100%;
            &.portrait {
                width: 100%;
                height: auto;
            }
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























<template>
    <div id="gyAlbum" class="gy-album" :style="{ minHeight: winHeight }">
        <gy-title :scrollPos="scrollPos" :mainTitle="mainTitle"></gy-title>
        <ul id="albumCards" class="gy-album__cards">
            <li v-for="card in cards" class="gy-album__card">
                <gy-card :card="card"></gy-card>
            </li>
        </ul>
    </div>
</template>

<script>
import gyTitle from './Title';
import gyCard from './Card';
import ScrollReveal from 'ScrollReveal';

export default {
    name: 'gy-album',
    components: {
        gyTitle,
        gyCard,
    },
    created() {
    },
    data() {
        return {
            winHeight: window.innerHeight + 'px',
            // Album title 在页面中距离顶部的位置
            scrollPos: 210,
            mainTitle: 'Album',
            scrollReveal: ScrollReveal(),
            cards: [
                {
                    name: 'Ace',
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    name: 'Ace',
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    name: 'Ace',
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    name: 'Ace',
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    name: 'Ace',
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    name: 'Ace',
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    name: 'Ace',
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    name: 'More...',
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                }
            ],
        };
    },
    methods: {
        setAlbumScrollReveal: function() {
            this.scrollReveal.reveal('.gy-album__card', { duration: 2000 }, 50);
        }
    },
    mounted() {
        this.setAlbumScrollReveal();
    }
};
</script>

<style lang="scss" scoped>
.gy-album {
    width: 100%;
    box-sizing: border-box;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 30px 30px;
    text-align: center;
    &__cards {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
    }
    &__card {
        max-width: 320px;
        width: 22%;
        height: 320px;
        margin: 10px 0 30px;
        cursor: pointer;
    }
}
</style>























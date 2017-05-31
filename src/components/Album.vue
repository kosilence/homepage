<template>
    <div id="gyAlbum" class="gy-album">
        <gy-title :scrollPos="scrollPos"></gy-title>
        <ul id="albumCards" class="album__cards" :style="{ minHeight: cardsHeight }">
            <li v-for="photo in photosList" :style="{ width: cardWidth, height: cardHeight }">
                <template>
                    <Card :style="{ height: '100%' }">
                        <div class="card__image">
                            <img :src="photo.url" :alt="photo.name">
                        </div>
                        <h3 class="card__name" :style="{ lineHeight: cardLineHeight }">{{ photo.name }}</h3>
                    </Card>
                </template>
            </li>
        </ul>
    </div>
</template>

<script>
import gyTitle from './Title';

export default {
    name: 'gy-album',
    components: {
        gyTitle,
    },
    data() {
        return {
            cardsHeight: (window.innerHeight - 210) + 'px',
            cardWidth: (window.innerWidth / 4 - 60) + 'px',
            cardHeight: (window.innerWidth / 4 - 30) + 'px',
            cardLineHeight: 0,
            // Album title 在页面中距离顶部的位置
            scrollPos: 210,
            photosList: [
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
    created() {
    },
    methods: {
        setAlbumSize: function() {
            var albumCardsWidth = document.getElementById('albumCards').clientWidth;
            this.cardWidth = (albumCardsWidth / 4 - 30) + 'px';
            this.cardHeight = (albumCardsWidth / 4) + 'px';
            this.cardLineHeight = (albumCardsWidth / 4 - 250) > 100 ? '100px' : (albumCardsWidth / 4 - 250) + 'px';
        }
    },
    mounted() {
        this.setAlbumSize();
    }
};
</script>

<style lang="scss">
.gy-album {
    width: 100%;
    box-sizing: border-box;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 30px;
    text-align: center;
    .album__cards {
        width: 100%;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        align-items: center;
        -webkit-align-items: center;
        align-content: center;
        li {
            max-width: 320px;
            max-height: 350px;
            margin: 10px 0 30px;
            cursor: pointer;
        }
    }
    .card {
        &__image {
            width: 100%;
            height: 230px;
            margin: 0 auto;
            overflow: hidden;
            img {
                width: auto;
                height: 100%;
            }
        }
        &__name {
            width: 80%;
            margin: 0 auto;
            text-align: center;
            font-size: 17px;
        }
    }
}
</style>























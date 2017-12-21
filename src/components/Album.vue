<template>
    <div id="gyAlbum" class="gy-album">
        <gy-title :title="title" :link="link"></gy-title>
        <ul id="albumCards" class="gy-album__cards">
            <li v-for="(card, cardIndex) in cards" :key="'card-' + cardIndex" class="gy-album__card">
                <gy-card :card="card"></gy-card>
            </li>
        </ul>
    </div>
</template>

<script>
import gyTitle from './Title';
import gyCard from './Card';
import ScrollReveal from 'scrollreveal';

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
            title: 'Album',
            link: '',
            scrollReveal: ScrollReveal(),
            cards: [
                {
                    name: 'Temple of Marquis',
                    url: 'http://ww2.sinaimg.cn/mw1024/9eb6a82agw1ezkgsckmkuj20zk0qogwd.jpg',
                },
                {
                    name: 'The North Taiping Bridge',
                    url: 'http://ww1.sinaimg.cn/mw690/9eb6a82aly1fgiva75c2nj22io1w0u0z.jpg',
                },
                {
                    name: 'Hover My Love',
                    url: 'http://ww1.sinaimg.cn/mw690/9eb6a82aly1fgiva2eg4aj20u00m9k1t.jpg',
                },
                {
                    name: 'Gulangyu Islet',
                    url: 'http://ww2.sinaimg.cn/mw1024/9eb6a82agw1etxk0y6uyij20m80er0xe.jpg',
                },
                {
                    name: 'Crescent Spring',
                    url: 'http://ww4.sinaimg.cn/mw1024/9eb6a82ajw1ewkyfpm1bzj20tt0kcgnd.jpg',
                },
                {
                    name: 'Qingyuan',
                    url: 'http://ww2.sinaimg.cn/mw1024/9eb6a82agw1exxdvnikvnj21kw16on5r.jpg',
                },
                {
                    name: 'Yuanwanglou',
                    url: 'http://ww1.sinaimg.cn/mw690/9eb6a82aly1fgiva27vc7j22io1w0b29.jpg',
                },
                {
                    name: 'Quadcopter',
                    url: 'http://ww1.sinaimg.cn/mw690/9eb6a82aly1fgiva3rbldj20m80go499.jpg',
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
    padding: 0 30px 60px;
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























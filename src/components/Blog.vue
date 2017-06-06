<template>
    <div id="gyBlog" class="gy-blog" :style="{ minHeight: wrapperHeight }">
        <gy-title :mainTitle="mainTitle"></gy-title>
        <div class="gy-blog__articles">
            <div class="gy-blog__article" v-for="(article, articleIndex) in articles">
                <gy-article :article="article" :articleIndex="articleIndex"></gy-article>
            </div>
        </div>
    </div>
</template>

<script>
import gyTitle from './Title';
import gyArticle from './Article';
import ScrollReveal from 'ScrollReveal';

export default {
    name: 'gy-blog',
    components: {
        gyTitle,
        gyArticle,
    },
    data() {
        return {
            wrapperHeight: window.innerHeight + 'px',
            mainTitle: 'Bdddd',
            scrollReveal: ScrollReveal(),
            articles: [
                {
                    time: '09/02/2016',
                    title: 'Deedesee',
                    desc: 'dfsdfsdfsfsfsdfsdfdsfsdfsdfsfsdfsfdsfs',
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    time: '09/02/2016',
                    title: 'Deedesee',
                    desc: 'dfsdfsdfsfsfsdfsdfdsfsdfsdfsfsdfsfdsfs',
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    time: '09/02/2016',
                    title: 'Deedesee',
                    desc: 'dfsdfsdfsfsfsdfsdfdsfsdfsdfsfsdfsfdsfs',
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    time: '09/02/2016',
                    title: 'Deedesee',
                    desc: 'dfsdfsdfsfsfsdfsdfdsfsdfsdfsfsdfsfdsfs',
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    time: '09/02/2016',
                    title: 'Deedesee',
                    desc: 'dfsdfsdfsfsfsdfsdfdsfsdfsdfsfsdfsfdsfsdfsdfsdfsfsfsdfsdfdsfsdfsdfsfsdfsfdsfsdfsdfsdfsfsfsdfsdfdsfsdfsdfsfsdfsfdsfsdfsdfsdfsfsfsdfsdfdsfsdfsdfsfsdfsfdsfsdfsdfsdfsfsfsdfsdfdsfsdfsdfsfsdfsfdsfsdfsdfsdfsfsfsdfsdfdsfsdfsdfsfsdfsfdsfsdfsdfsdfsfsfsdfsdfdsfsdfsdfsfsdfsfdsfs',
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    time: '更多内容',
                    title: 'More...',
                    desc: 'DDDDDDDDDD',
                    url: 'http://blog.cosin.tk/',
                }
            ],
        };
    },
    created() {
    },
    methods: {
        setBlogScrollReveal: function() {
            this.scrollReveal.reveal('.gy-blog__article', { duration: 2000 }, 50);
        }
    },
    mounted() {
        this.setBlogScrollReveal();
    }
};
</script>

<style lang="scss" scoped>
.gy-blog {
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
    text-align: center;
    background-color: #f5f5f5;
    box-sizing: border-box;
    &__articles {

    }
    &__article {
        width: 100%;
    }
}
</style>























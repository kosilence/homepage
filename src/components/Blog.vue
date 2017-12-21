<template>
    <div id="gyBlog" class="gy-blog">
        <gy-title :title="title" :link="link"></gy-title>
        <ul class="gy-blog__articles">
            <li class="gy-blog__article" v-for="(article, articleIndex) in articles" :key="'article-' + articleIndex">
                <gy-article :article="article" :articleIndex="articleIndex"></gy-article>
            </li>
        </ul>
    </div>
</template>

<script>
import gyTitle from './Title';
import gyArticle from './Article';
import ScrollReveal from 'scrollreveal';

export default {
    name: 'gy-blog',
    components: {
        gyTitle,
        gyArticle,
    },
    data() {
        return {
            wrapperHeight: window.innerHeight + 'px',
            title: 'Blog',
            link: 'https://blog.cosin.tk/',
            scrollReveal: ScrollReveal(),
            articles: [
                {
                    time: 'May 23, 2017',
                    title: '快速搭建一个可离线下载的私有云',
                    desc: '搭建这个云的主要目的是可以方便地离线下载到VPS上 | No 百度云 && No LowSpeed && No LookAfter | 然而低配版的VPS存储空间太有限了，20G总硬盘，去除系统空间和一些必要的软件，大概只余下8G左右了 | 资源文件只能随用随删了',
                    url: 'http://blog.cosin.tk/2017/05/23/%E5%BF%AB%E9%80%9F%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%8F%AF%E7%A6%BB%E7%BA%BF%E4%B8%8B%E8%BD%BD%E7%9A%84%E7%A7%81%E6%9C%89%E4%BA%91/',
                },
                {
                    time: 'May 19, 2017',
                    title: '理解 RESTful 风格',
                    desc: '前后端分离的大趋势下 | 设置符合 Restful 风格的 API 接口可以大大降低沟通成本 | 而且写出规范、漂亮、易于理解的 API 难道不是每个后端人士的追求吗？',
                    url: 'http://blog.cosin.tk/2017/05/19/%E7%90%86%E8%A7%A3RESTful%E9%A3%8E%E6%A0%BC/',
                },
                {
                    time: 'May 6, 2017',
                    title: '读书笔记：JavaScript 设计模式',
                    desc: '《Learning JavaScript Design Patterns》 | 设计模式是解决软件设计中常见问题的可复用方案。 | 探索任何编程语言时，设计模式都是一个令人兴奋和极具吸引力的话题',
                    url: 'http://blog.cosin.tk/2017/05/06/%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%EF%BC%9AJavaScript-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/',
                },
                {
                    time: 'Apr 28, 2017',
                    title: '你真的需要一个VPS',
                    desc: 'VPS：我要给你整个世界！ | 我：那你整吧。',
                    url: 'http://blog.cosin.tk/2017/04/28/%E4%BD%A0%E7%9C%9F%E7%9A%84%E9%9C%80%E8%A6%81%E4%B8%80%E4%B8%AAVPS/',
                },
                {
                    time: 'Feb 8, 2017',
                    title: 'Web自动化测试初接触',
                    desc: '测试方向有很多 | 对于web项目来说，接触较多的大概为以下几类： | 单元测试（unit testing）指的是以软件的单元（unit）为单位，对软件进行测试。单元可以是一个函数，也可以是一个模块或组件。 | e2e，是end to end的缩写。e2e测试的方式是模拟用户行为，控制浏览器执行一系列的页面操作，例如点击按钮、输入文字等等，最后判断结果是否符合预期。 | 性能测试一般包括连接速度测试、压力测试等。',
                    url: 'http://blog.cosin.tk/2017/02/08/Web%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%88%9D%E6%8E%A5%E8%A7%A6/',
                },
                {
                    time: 'Feb 7, 2017',
                    title: '平台分享按钮的实现方法记录',
                    desc: '各大社交平台的website分享功能总结 | Facebook Twitter Weibo',
                    url: 'http://blog.cosin.tk/2017/02/07/%E5%B9%B3%E5%8F%B0%E5%88%86%E4%BA%AB%E6%8C%89%E9%92%AE%E7%9A%84%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%B3%95%E8%AE%B0%E5%BD%95/',
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
    padding: 0 30px 60px;
    text-align: center;
    background-color: #f5f5f5;
    box-sizing: border-box;
    box-shadow: 0 -5px 20px #ddd;
    &__article {
        width: 100%;
    }
}
</style>























<template>
    <div id="gyMuseum" class="gy-museum" :style="{ minHeight: wrapperHeight }">
        <gy-title :mainTitle="mainTitle"></gy-title>
        <ul class="gy-museum__works" :style="{ height: workHeight }">
            <li class="gy-museum__work" v-for="(work, workIndex) in works" :style="{ width: workWidth }">
                <gy-work :work="work" :workIndex="workIndex"></gy-work>
            </li>
        </ul>
    </div>
</template>

<script>
import gyTitle from './Title';
import gyWork from './Work';
import ScrollReveal from 'ScrollReveal';

export default {
    name: 'gy-museum',
    components: {
        gyTitle,
        gyWork,
    },
    data() {
        return {
            wrapperHeight: window.innerHeight + 'px',
            workHeight: (window.innerHeight - 260) + 'px',
            mainTitle: 'M',
            scrollReveal: ScrollReveal(),
            workWidth: 0,
            works: [
                {
                    time: '09/02/2016',
                    title: 'Deedesee',
                    desc: '大法师打发士大夫撒发大水打飞机深度克隆福建省快递费吉林省会计的疯狂圣诞节疯狂圣诞节疯狂世界的法律京东方；看时间；地方',
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    time: '09/02/2016',
                    title: 'Deedesee',
                    desc: '大法师打发士大夫撒发大水打飞机深度克隆福建省快递费吉林省会计的疯狂圣诞节疯狂圣诞节疯狂世界的法律京东方；看时间；地方',
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    time: '09/02/2016',
                    title: 'Deedesee',
                    desc: '大法师打发士大夫撒发大水打飞机深度克隆福建省快递费吉林省会计的疯狂圣诞节疯狂圣诞节疯狂世界的法律京东方；看时间；地方',
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    time: '09/02/2016',
                    title: 'Deedesee',
                    desc: '大法师打发士大夫撒发大水打飞机深度克隆福建省快递费吉林省会计的疯狂圣诞节疯狂圣诞节疯狂世界的法律京东方；看时间；地方',
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    time: '09/02/2016',
                    title: 'Deedesee',
                    desc: '发的发是的是的发送到',
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
        this.workWidth = 100 / (this.works.length) + '%';
    },
    methods: {
        setBlogScrollReveal: function() {
            this.scrollReveal.reveal('.gy-museum__work', { duration: 2000 }, 50);
        }
    },
    mounted() {
        this.setBlogScrollReveal();
    }
};
</script>

<style lang="scss" scoped>
.gy-museum {
    width: 100%;
    margin: 0 auto;
    padding: 0;
    text-align: center;
    box-sizing: border-box;
    &__works {
        width: 100%;
        box-shadow: 0 -5px 20px #ddd;
    }
    &__work {
        display: inline-block;
        float: left;
        height: 100%;
        background-color: #333;
    }
}
</style>























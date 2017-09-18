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
import ScrollReveal from 'scrollreveal';

export default {
    name: 'gy-museum',
    components: {
        gyTitle,
        gyWork,
    },
    data() {
        return {
            wrapperHeight: (window.innerHeight - 50) + 'px',
            workHeight: (window.innerHeight - 260) + 'px',
            mainTitle: 'M',
            scrollReveal: ScrollReveal(),
            workWidth: 0,
            works: [
                {
                    time: '09/02/2016',
                    title: 'And the Winner Is',
                    desc: "And the winner is : la vie, and the winner is : l'amour. And the winner is : la vie, and the winner is : l'amour.  And the winner is : la vie, and the winner is : l'amour.  And the winner is : la vie, and the winner is : l'amour.  And the winner is : la vie, and the winner is : l'amour. ",
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    time: '09/02/2016',
                    title: 'And the Winner Is',
                    desc: "And the winner is : la vie, and the winner is : l'amour. And the winner is : la vie, and the winner is : l'amour.  And the winner is : la vie, and the winner is : l'amour.  And the winner is : la vie, and the winner is : l'amour.  And the winner is : la vie, and the winner is : l'amour. ",
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    time: '09/02/2016',
                    title: 'And the Winner Is',
                    desc: "And the winner is : la vie, and the winner is : l'amour. And the winner is : la vie, and the winner is : l'amour.  And the winner is : la vie, and the winner is : l'amour.  And the winner is : la vie, and the winner is : l'amour.  And the winner is : la vie, and the winner is : l'amour. ",
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    time: '09/02/2016',
                    title: 'And the Winner Is',
                    desc: "And the winner is : la vie, and the winner is : l'amour. And the winner is : la vie, and the winner is : l'amour.  And the winner is : la vie, and the winner is : l'amour.  And the winner is : la vie, and the winner is : l'amour.  And the winner is : la vie, and the winner is : l'amour. ",
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    time: '09/02/2016',
                    title: 'And the Winner Is',
                    desc: "And the winner is : la vie, and the winner is : l'amour. And the winner is : la vie, and the winner is : l'amour.  And the winner is : la vie, and the winner is : l'amour.  And the winner is : la vie, and the winner is : l'amour.  And the winner is : la vie, and the winner is : l'amour. ",
                    url: 'http://ww1.sinaimg.cn/large/9eb6a82aly1fg0vou96hnj21ao0t646i.jpg',
                },
                {
                    time: '更多内容',
                    title: 'More...',
                    desc: 'To my blog...',
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
    }
}
</style>























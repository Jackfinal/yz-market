<template>
    <div class="hot-goods js-waterfull-wrap" data-src="">
        <ul class="js-list js-lazy" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" data-src="">
            <li v-for="list in lists" :key="list.id">
                <div class="goods-item">
                    <a href="https://h5.youzan.com/v2/showcase/goods?alias=2fwig6rnqfq6m&amp;source=yzapp&amp;f_platform=yzapp">
                        <div class="thumb img-box">
                            <img class="fadeIn" :src="list.img">
                        </div>
                        <div class="detail">
                            <div class="title">i-mu/幻响醛击手除甲醛</div>
                            <div class="price">￥149.00</div>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
        <div class="loading-more"><span></span></div>
    </div>
</template>

<script>
    import { InfiniteScroll } from 'minu-ui';
    Vue.use(InfiniteScroll);
    export default {
        name: "waterfull",
        components:{
            InfiniteScroll
        },
        data(){
            return {
                loading: false,
            }
        },
        methods: {
            loadMore() {
                this.loading = true;
                setTimeout(() => {
                    let last = this.list[this.list.length - 1];
                    for (let i = 1; i <= 10; i++) {
                        this.list.push(last + i);
                    }
                    this.loading = false;
                }, 2500);
            }
        },
        created(){

        }
    }
</script>

<style scoped>

</style>
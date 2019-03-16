<template>
    <div class="hot-goods js-waterfull-wrap">
        <md-scroll-view ref="scrollView" :scrolling-x="false" @endReached="getLists" class="js-list js-lazy">
            <li v-for="list in lists" :key="list.id">
                <div class="goods-item">
                    <a href="https://h5.youzan.com/v2/showcase/goods?alias=2fwig6rnqfq6m&amp;source=yzapp&amp;f_platform=yzapp">
                        <div class="thumb img-box">
                            <img class="fadeIn" :src="list.img">
                        </div>
                        <div class="detail">
                            <div class="title">{{list.name}}</div>
                            <div class="price">￥{{list.price}}</div>
                        </div>
                    </a>
                </div>
            </li>
            <md-scroll-view-more slot="more" :is-finished="allLoaded"></md-scroll-view-more>
        </md-scroll-view>
    </div>
</template>

<script>
    import * as API from '../../../modules/js/api/config.js'

    export default {
        name: "waterfull",
        data(){
            return {
                pageNum: 1,
                pageSize: 6,
                lists: [],
                allLoaded: false,
            }
        },
        methods: {
            // 获取hotLIst
            getLists(){
                // 判断加载完毕,返回
                if(this.allLoaded) return
                API.GET(`/index/hotLists?pageNum=${this.pageNum}&pageSize=${this.pageSize}`).then(res => {
                    let curLists = res.lists
                    if(curLists.length < this.pageSize){
                        this.allLoaded = true
                        console.log('加载完成')
                    }
                    if(this.lists){
                        this.lists = this.lists.concat(curLists)
                    }else{
                        this.lists = curLists
                    }
                    this.$refs.scrollView.finishLoadMore()
                })
                this.pageNum += 1
            }
        },
        created(){
            this.getLists()
        }
    }
</script>

<style></style>
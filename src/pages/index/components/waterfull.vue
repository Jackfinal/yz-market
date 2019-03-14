<template>
    <div class="hot-goods js-waterfull-wrap" data-src="">
        <ul class="js-list js-lazy" v-infinite-scroll="getLists" :infinite-scroll-disabled="loading" :infinite-scroll-distance="10" data-src="">
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
        </ul>
        <div class="loading-more" v-show="loading"><span></span></div>
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
                loading: false,
                lists: [],
                allLoaded: false,
            }
        },
        methods: {
            // 获取hotLIst
            getLists(){
                // 判断加载完毕,返回
                if(this.allLoaded) return
                this.loading = true
                API.GET(`/index/hotLists?pageNum=${this.pageNum}&pageSize=${this.pageSize}`).then(res => {
                    let curLists = res.lists
                    if(curLists.length < this.pageSize){
                        this.allLoaded = true
                    }
                    if(this.lists){
                        this.lists = this.lists.concat(curLists)
                    }else{
                        this.lists = curLists
                    }
                })
                this.pageNum += 1
                this.loading = false
            }
        },
        created(){
            this.getLists()
        }
    }
</script>

<style scoped>
    .list-finished,
    .loading-more {
        width: 100%;
        padding: 20px 10px;
        vertical-align: middle;
        text-align: center;
        color: #999;
        font-size: 12px;
        line-height: 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box
    }

    .list-finished span,
    .loading-more span {
        display: inline-block;
        margin-top: 10px;
        width: 16px;
        height: 16px;
        background: url("/v2/image/loader.gif") no-repeat center center;
        background-size: 16px 16px
    }

    @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
    only screen and (min--moz-device-pixel-ratio: 1.5),
    only screen and (min-device-pixel-ratio: 1.5) {
        .list-finished span,
        .loading-more span {
            background-image: url("/v2/image/loader@2x.gif")
        }
    }
</style>
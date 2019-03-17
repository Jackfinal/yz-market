<template>
    <div id="app">
        <div class="container with-top-search" style="min-height: 667px;" @touchmove="move">
            <div class="custom-search js-search-bar">
                <form>
                    <input type="search" class="custom-search-input" autocomplete="off" name="keyword" value="水果" placeholder="搜索更赞的商品" style="padding-left: 66px;">
                    <span class="icon-custom-search"></span>
                </form>
                <button class="custom-search-type-selection-btn custom-search-type-selection-btn-focus">商品</button>
                <span class="cancel">取消</span>
                <div class="search-type-dropdown-menu" style="display: none;">
                <span class="search-type-dropdown-menu-indicator"><i></i></span>
                    <div class="drop-menu-content">
                        <div class="search-type-goods">
                            <i class="icon-goods"></i>
                            <span>商品</span>
                        </div>
                        <div class="search-type-dropdown-menu-divider"></div>
                        <div class="search-type-shop">
                            <i class="icon-shop"></i>
                            <span>店铺</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-content" style="display: none;"></div>
            <div class="content">
                <div class="search-wrap js-waterfull-wrap">
                    <ul class="js-list">
                        <li class="goods-item" v-for="list in searchList">
                            <a :href="'goods.html?id='+ list.id ">
                                <div class="thumb">
                                    <img :src="list.img">
                                    <i class="sell-out" v-if="list.isOut"></i>
                                </div>
                                <div class="detail">
                                    <div class="title">{{list.name}}</div>
                                    <div class="meta relative">
                                        <span class="price">￥{{list.price | currency}}</span>
                                        <span class="ship pull-right">包邮</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div class="list-finished">已经没有更多了</div>
                </div>
            </div>
            <div class="go-to-top" v-show="show" @click="toTop" style="display: block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"></div>
        </div>
    </div>
</template>

<script>
    import mixin from '../../modules/js/mixin.js'
    import * as API from '../../modules/js/api/config.js'
    import qs from 'qs'
    //解构,通过qs获取
    let {keyword, id} = qs.parse(location.search.substr(1))

    export default {
        name: "search",
        created() {
            this.getsearchList()
        },
        data(){
            return{
                searchList: null,
                show: false,
                pageNum: null,
                pageSize: null
            }
        },
        methods: {
            getsearchList() {
                API.GET(`/search/list?id=${id}&keyword=${keyword}&pageNum=&pageSize=`).then(res => {
                    this.searchList = res.lists
                    console.log(res.lists)
                })
            },
            move() {
                let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
                this.show = scrollTop > 100;
            },
            toTop() {
                let timer = null
                cancelAnimationFrame(timer);
                timer = requestAnimationFrame(function fn(){
                    const oTop = document.body.scrollTop || document.documentElement.scrollTop;
                    if(oTop > 0){
                        scrollTo(0,oTop-50);
                        timer = requestAnimationFrame(fn);
                    }else{
                        cancelAnimationFrame(timer);
                    }
                });
            }
        },
        mixins: [mixin]
    }
</script>

<style scoped>

</style>
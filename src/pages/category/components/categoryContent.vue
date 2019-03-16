<template>
    <div class="class-category">
        <div class="class-category">
            <div id="scroll-main-wrap" class="main-content">
                <!-- 综合排行  -->
                <div id="scroll-main-content" class="js-main-content inner-content" style="height: 943px; transform: translate3d(0px, 0px, 0px); " v-if="topIndex===0&&rankData">
                    <div class="hot-wrap">
                        <div class="hot-goods">
                            <div class="hot-title">
                                <p class="pull-left">热销商品榜</p>
                                <a href="https://maijia.youzan.com/mars/rank/hotgoods" class="pull-right icon-right">更多</a>
                            </div>
                            <ul>
                                <li class="goods-item" v-for="(list,index) in rankData.hotGoods">
                                    <a :href="'goods.html?id='+list.id">
                                        <div class="thumb badge center-img">
                                            <img :src="list.img">
                                            <span class="num">{{index+1}}</span>
                                        </div>
                                        <div class="detail">
                                            <div class="title">{{list.name}}</div>
                                            <div class="price">￥{{list.price | currency}}</div>
                                            <div class="recommend">
                                                <span>推荐值:</span>
                                                <span>{{list.recommend}}</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="hot-shops" style="position: relative;">
                            <div class="hot-title">
                                <p class="pull-left">TOP店铺榜</p>
                                <a href="https://maijia.youzan.com/mars/rank/hotshops" class="pull-right icon-right">更多</a>
                            </div>
                            <ul>
                                <li class="shop-item" v-for="(list,index) in rankData.hotShops">
                                    <div class="shop-title">
                                        <span class="badge">{{index+1}}</span>
                                        <a :href="list.clickUrl">{{list.name}}</a>
                                        <span class="follows"> / 关注度: {{list.follows}}</span>
                                    </div>
                                    <ul class="shop-images">
                                        <li v-for="img in list.imgs">
                                            <a :href="list.clickUrl"><img :src="img"></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="hot-keywords">
                            <div class="hot-title">
                                <p class="pull-left">热搜词排行</p>
                            </div>
                            <ul class="keywords-list">
                                <li v-for="item in rankData.hotKeywords"><a href="javascript:;" class="js-hot-keyword">{{item}}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 其他一级分类  -->
                <div id="scroll-main-content" class="js-main-content inner-content" style="height: 534px; transform: translate3d(0px, 0px, 0px); " v-if="topIndex>0&&subData">
                    <h3 class="category-title">热门品牌 </h3>
                    <ul class="category-content">
                        <li class="category-item js-category-item" :data-item-id="list.id" :data-item-name="list.name"
                            v-for="list in subData.brandList"
                            @click="toSearch(list)"
                        >
                            <img :src="list.img" :alt="list.name" class="category-img">
                            <span class="category-item-name">{{list.name}}</span>
                        </li>
                    </ul>
                    <h3 class="category-title"> 热门分类  </h3>
                    <ul class="category-content">
                        <li class="category-item js-category-item" :data-item-id="list.id" :data-item-name="list.name"
                            v-for="list in subData.categoryList"
                            @click="toSearch(list)"
                        >
                            <img :src="list.img" :alt="list.name" class="category-img">
                            <span class="category-item-name">{{list.name}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mixin from '../../../modules/js/mixin.js'

    export default {
        name: "content",
        created() {
        },
        computed:{
            rankData(){ return this.$store.state.rankData },
            topIndex(){ return this.$store.state.topIndex },
            subData(){ return this.$store.state.subData },
        },
        methods: {
            toSearch(list){
                    location.href = `search.html?keyword=${list.name}&id=${list.id}`
            }
        },
        mixins: [mixin]
    }
</script>

<style>
</style>
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide swp-page" v-for="list in bannerLists">
                <a class="js-no-follow" :href="list.clickUrl">
                    <img class="goods-main-photo fadeIn" :src="list.img">
                </a>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
    </div>
</template>

<script>
    import '../../../modules/css/goods_custom.css'
    import * as API from '../../../modules/js/api/config.js'
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css';

    export default {
        name: "swiper",
        data() {
            return {
                bannerLists: null,
            }
        },
        methods:{
          getBanner(){
              API.GET('/index/banner').then((res) => {
                  this.bannerLists = res.lists
              })
          }
        },
        created(){
            this.getBanner()
        },
        mounted() {
            new Swiper('.swiper-container', {
                autoplay: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination'
                },
            })
        }
    }
</script>

<style scoped>
    .swiper-slide img{
        height:100%;
        width:100%;
    }
</style>
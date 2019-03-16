<template>
    <div>
        <md-swiper ref="swiper" :is-prevent="false" :useNative-driver="false">
            <md-swiper-item class="swiper-slide swp-page" v-for="list in bannerLists">
                <a class="js-no-follow" :href="list.clickUrl">
                    <img class="goods-main-photo fadeIn" :src="list.img">
                </a>
            </md-swiper-item>
        </md-swiper>
    </div>
</template>

<script>
    import '../../../modules/css/goods_custom.css'
    import * as API from '../../../modules/js/api/config.js'

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
        }
    }
</script>

<style scoped>
    .custom-image-swiper .swiper-slide a img{
        max-width: 100vh !important;
        height: auto;
    }
    .custom-image-swiper .swp-page img{
        width:auto;
    }
</style>
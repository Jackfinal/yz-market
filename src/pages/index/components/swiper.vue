<template>
    <div class="js-image-swiper custom-image-swiper  custom-image-swiper-single" data-images="1">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swp-page">
                    <a class="js-no-follow" href="https://h5.koudaitong.com/v2/index/rukou">
                        <img class="goods-main-photo fadeIn" src="https://img.yzcdn.cn/upload_files/2016/07/29/Fl3T06Mu7TpIhR4L1s2tzm8cZrgt.jpg">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import  '../../../modules/css/goods_custom.css'
    import * as API from '../../../modules/js/api/config.js'

    export default {
        name: "swiper",
        data(){
            return {

            }
        },
        mounted(){
            API.GET('/index/banner').then((res)=>{
                console.log('banner',res)
            })
        }
    }
</script>

<style scoped>

</style>
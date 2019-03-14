<template>
    <div id="app">
        <div id="nav">
            <div class="container with-bottom-nav" style="min-height: 667px;">
                <div class="content">
                    <!--轮播图-->
                    <div class="js-image-swiper custom-image-swiper  custom-image-swiper-single" data-images="1">
                        <Swiper/>
                    </div>
                    <!--推荐列表-->
                    <Recommended/>
                    <!--瀑布流-->
                    <Waterfull/>
                    <!--指南-->
                    <div class="js-show-find category-guid" style="display: none;"></div>
                </div>
            </div>
            <!--底部导航-->
            <BottomNav/>
        </div>
    </div>
</template>
<script>
  import Swiper from './components/swiper'
  import Recommended from './components/recommended'
  import Waterfull from './components/waterfull'
  import BottomNav from './components/bottomNav'
    export default {
        name: 'app',
        components: {
            Swiper,Recommended,Waterfull,BottomNav
        },
        data() {
            return {};
        },
    }
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

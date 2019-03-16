<template>
    <div id="app">
        <div id="nav">
            <div class="container with-bottom-nav" style="min-height: 667px;">
                <div class="content">
                    <!--轮播图-->
                    <Swiper/>
                    <!--优店推荐-->
                    <Recommended/>
                    <!--瀑布流_最热商品推荐-->
                    <div class="section-content daily">
                        <ul>
                        </ul>
                    </div>
                    <div class="line-block line-block-gray">
                        <div class="lineblock-title">
                            <span class="lineblock-font">最热商品推荐</span>
                        </div>
                    </div>
                    <Waterfull/>
                    <!--指南-->
                    <div class="js-show-find category-guid" style="display: none;"></div>
                </div>
            </div>
            <!--底部导航-->
            <Foot/>
        </div>
    </div>
</template>
<script>
  import Swiper from './components/swiper'
  import Recommended from './components/recommended'
  import Waterfull from './components/waterfull'
  import Foot from '../../components/footer'
    export default {
        name: 'app',
        components: {
            Swiper,Recommended,Waterfull,Foot
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
</style>

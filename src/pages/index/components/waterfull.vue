<template>
    <div class="hot-goods js-waterfull-wrap" data-src="">
        <ul class="js-list js-lazy" data-src="">
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
    export default {
        name: "waterfull"
    }
</script>

<style scoped>

</style>
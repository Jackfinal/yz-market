<template>
    <div class="custom-search js-search-bar">
        <form>
            <input type="search" class="custom-search-input" autocomplete="off" name="keyword" value="" placeholder="搜索更赞的商品">
            <span class="icon-custom-search"></span>
        </form>
        <button class="custom-search-type-selection-btn">商品</button>
        <span class="cancel">取消</span>
        <div class="search-type-dropdown-menu" style="display: none;">
        <span class="search-type-dropdown-menu-indicator">
            <i></i>
        </span>
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
</template>

<script>
    export default {
        name: "search-bar"
    }
</script>

<style scoped>

</style>
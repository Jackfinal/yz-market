<template>
    <div>
        <div class="section-title">优店推荐</div>
        <div class="section-content shops">
            <div class="shop-wrap">
                <div class="shop-item">
                    <a href="https://h5.koudaitong.com/v2/showcase/feature?alias=zjtozpgn">
                        <img class="fadeIn" src="https://img.yzcdn.cn/upload_files/2016/09/23/FgQUVNXnvpFKFl1DIN2LXhPA1cxy.png?imageView2/2/w/300/h/0/q/75/format/png">
                    </a>
                </div>
                <div class="shop-item">
                    <a href="https://h5.koudaitong.com/v2/feature/1e22e3vtu">
                        <img class="fadeIn" src="https://img.yzcdn.cn/upload_files/2016/08/03/FqNGnCQS1eq9nIhRg48E_UfFf9K2.png?imageView2/2/w/300/h/0/q/75/format/png">
                    </a>
                </div>
                <div class="shop-item">
                    <a href="https://h5.koudaitong.com/v2/feature/8oups7zk">
                        <img class="fadeIn" src="https://img.yzcdn.cn/upload_files/2016/08/05/Fv5hhMZrtPZQWE7fape0ddEYtSuy.png?imageView2/2/w/300/h/0/q/75/format/png">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as API from '../../../modules/js/api/config.js'

    export default {
        name: "recommended",
        data(){
            return {
                pageSize: undefined,
                pageNumber: undefined,
            }
        },
        mounted(){
            API.GET(`/index/hotLists/pageNum=${this.pageNumber}&pageSize=${this.pageSize}`).then((res)=>{
                //console.log('recommended',res)
            })
        }
    }
</script>

<style scoped>

</style>
 <template>
    <div id="app">
        <div class="container " style="min-height: 581px;">
            <div class="content">
                <!--用户头像+昵称-->
                <div class="user-infos">
                    <div class="pull-left avatar">
                        <div class="img" style="background-image: url(https://img.yzcdn.cn/upload_files/no_pic.png?imageView2/2/w/280/h/280/q/75/format/webp);"></div>
                    </div>
                    <div class="pull-left desc">
                        <p>Orainsink</p>
                    </div>
                </div>
                <div class="order-related">
                    <ul class="uc-order list-horizon clearfix js-order-overview">
                        <li v-for="item in ucorder">
                            <a class="link clearfix relative" :class="'link-'+item.data" :data-for="item.data" :href="item.href" target="_blank">
                                <p class="title-info c-black font-size-12">{{item.message}}</p>
                            </a>
                        </li>
                    </ul>
                    <div class="block block-list list-vertical">
                        <a class="block-item link clearfix ico-order" :class="item.icon" :href="item.href" target="_blank" v-for="item in blockItem1">
                            <p class="title-info c-black font-size-14">{{item.message}}</p>
                        </a>
                    </div>
                    <div class="block block-list list-vertical">
                        <a class="block-item link clearfix js-login" :class="item.icon" :href="item.href" target="_blank" v-for="item in blockItem2">
                            <p class="title-info c-black font-size-14">{{item.message}}</p>
                        </a>
                    </div>
                    <div class="block block-list list-vertical">
                        <a class="block-item link clearfix" :class="item.icon" :href="item.href" target="_blank" v-for="item in blockItem3">
                            <p class="title-info c-black font-size-14">{{item.message}}</p>
                        </a>
                    </div>
                    <div class="block block-list list-vertical">
                        <router-link class="block-item link clearfix ico-setting js-login" to="/address" target="_self">
                            <p class="title-info c-black font-size-14">收货地址管理</p>
                        </router-link>
                        <a class="block-item link clearfix ico-help" href="javascript:;" target="_blank">
                            <p class="title-info c-black font-size-14">联系有赞客服</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mixin from '../../modules/js/mixin.js'
    import * as API from '../../modules/js/api/config.js'
    import qs from 'qs'
    //通过qs将url转化为对象,再解构赋值
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
                pageSize: null,
                blockItem1: [
                    {icon:'ico-order',message:'全部订单',href:'javascript:;'},
                ],
                blockItem2: [
                    {icon:'ico-favior',message:'收藏的商品',href:'javascript:;'},
                    {icon:'ico-shop',message:'收藏的店铺',href:'javascript:;'},
                    {icon:'ico-bought',message:'我买过的',href:'javascript:;'},
                    {icon:'ico-history',message:'我的浏览记录',href:'javascript:;'},
                ],
                blockItem3: [
                    {icon:'ico-card',message:'我的会员卡',href:'javascript:;'},
                    {icon:'ico-coupon',message:'我的优惠券',href:'javascript:;'},
                    {icon:'ico-luckymoney',message:'我的红包',href:'javascript:;'},
                    {icon:'ico-backs',message:'我的返现',href:'javascript:;'},
                ],
                ucorder:[
                    {data:'topay',href:'javascript:;',message:'代付款'},
                    {data:'totuan',href:'javascript:;',message:'代接单'},
                    {data:'tosend',href:'javascript:;',message:'代发货'},
                    {data:'send',href:'javascript:;',message:'代收货'},
                    {data:'rights',href:'javascript:;',message:'退款/维权'}
                ],
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
    @import './style/user_base.css';
    @import './style/user.css';
</style>
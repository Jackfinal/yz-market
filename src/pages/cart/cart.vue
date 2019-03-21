<template>
  <div id="app">
    <div class="container " style="min-height: 581px;" v-cloak>
      <div class="content clearfix js-page-content">
        <div id="cart-container">
          <div>
            <div class="js-shop-list shop-list">
              <div class="block block-order block-cart" v-for="(shop,shopIndex) in lists">
                <div class="header">
                  <div class="select-group js-select-group" @click="selectShop(shop)">
                    <span class="check" v-show="!editingShop" :class="{checked:shop.checked}"></span>
                    <span class="check" v-show="editingShop" :class="{checked:shop.removeChecked}"></span>
                  </div>
                  <a class="shop-title"><i class="custom-store-img">店铺：</i>{{shop.shopTitle}}</a>
                  <a  data-type="cart" class="j-edit-list pull-right c-blue font-size-12 edit-list"
                      @click="edit(shop,shopIndex)"
                  >
                    {{shop.editingMsg}}
                  </a>
                </div>
                <div>
                  <ul class="js-list block block-list block-list-cart border-0">
                    <li class="block-item block-item-cart"
                        :ref="'goods-'+shopIndex+'-'+goodIndex"
                        :class="{editing:shop.editing}"
                        v-for="(good,goodIndex) in shop.goodsList"
                        :key="good.id"
                        @touchstart="start($event,good)"
                        @touchend="end($event,shopIndex,good,goodIndex)"
                    >
                      <div>
                        <div class="check-container" @click="selectGood(shop,good)">
                          <span class="check" v-show="!editingShop" :class="{checked:good.checked}"></span>
                          <span class="check" v-show="editingShop" :class="{checked:good.removeChecked}"></span>
                        </div>
                        <div class="name-card clearfix">
                          <a  class="thumb js-goods-link"><img :data-src="good.image" class="js-lazy" :src="good.image">
                            <!---->
                          </a>
                          <div class="detail">
                            <a  class="js-goods-link">
                              <h3 class="title js-ellipsis"><i>{{good.title}}</i></h3>
                            </a>
                            <p class="sku ellipsis">
                              {{good.sku}}
                            </p>
                            <!-- 显示状态 -->
                            <div class="num" v-show="!shop.editing">
                              ×<span class="num-txt">{{good.number}}</span>
                              <!---->
                            </div>
                            <!-- 编辑状态 -->
                            <div class="num" v-show="shop.editing">
                              <!---->
                              <div class="quantity">
                                <button type="button" class="minus " :class="{disabled:good.number==1}"></button>
                                <input type="text" pattern="[0-9]*" class="txt" v-model="good.number">
                                <button type="button" class="plus "></button>
                                <div class="response-area response-area-minus" @click="reduce(good)"></div>
                                <div class="response-area response-area-plus" @click="add(good)"></div>
                              </div>
                            </div>
                            <div class="price c-orange">
                              ¥<span>{{good.price | currency }} </span></div>
                          </div>
                          <div class="error-box"></div>
                        </div>
                        <div class="delete-btn" @click="remove(shop,shopIndex,good,goodIndex)"><span>删除</span></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <div class="js-invalid-goods shop-list">
              <p class="block invalid-list-title">
                以下商品无法一起购买
              </p>
              <div class="block block-list-cart block-order border-top-0">
                <ul class="block border-0 invalid-list js-invalid-list">
                  <li class="block-item block-item-cart error">
                    <div index="0">
                      <div class="check-container hide"><span class="check"></span></div>
                      <div class="name-card clearfix">
                        <a href="javascript:;" class="thumb js-goods-link"><img data-src="https://img.yzcdn.cn/upload_files/2017/06/29/FstNOp77JZHQjZIDFd5LlZYE3j_j.jpg!200x200.jpg" class="js-lazy" src="https://img.yzcdn.cn/upload_files/2017/06/29/FstNOp77JZHQjZIDFd5LlZYE3j_j.jpg?imageView2/2/w/200/h/200/q/75/format/webp">
                          <!---->
                        </a>
                        <div class="detail">
                          <a href="javascript:;" class="js-goods-link">
                            <h3 class="title js-ellipsis"><i>国际安徒生奖大奖书系（文学作品系列第二辑 共8册） 国际安徒生奖获奖书系 是经过IBBY各国分会和丛书主编、著名儿童文学理论家方卫平教授层层筛选产生的经典佳作</i></h3>
                          </a>
                          <p class="sku ellipsis">
                            下周二发货
                          </p>
                          <div class="num">
                            ×<span class="num-txt">1</span>
                            <!---->
                          </div>
                          <!---->
                        </div>
                        <div class="error-box">商品已售罄</div>
                      </div>
                      <div class="delete-btn"><span>删除</span></div>
                    </div>
                  </li>
                </ul>
                <div class="center clear-block">
                  <button class="btn clear-btn js-clear">清空失效商品</button>
                </div>
              </div>
            </div>
            <div style="padding:0;" class="js-bottom-opts bottom-fix">
              <div class="go-shop-tip js-go-shop-tip c-orange font-size-12">
                你需要分开结算每个店铺的商品哦~
              </div>
              <div class="bottom-cart clear-fix">
                <div class="select-all" @click="selectAll">
                  <span class="check" v-show="!editingShop" :class="{checked:allSelected}"></span>
                  <span class="check" v-show="editingShop" :class="{checked:allRemoveSelected}"></span>
                  全选
                </div>
                <!-- 显示状态 -->
                <div class="total-price" v-show="!editingShop">
                  合计：¥<span class="js-total-price" style="color: rgb(255, 102, 0);">{{total}}</span>
                  <p class="c-gray-dark">不含运费</p>
                </div>
                <button href="javascript:;" :disabled="!selectLists.length" class="js-go-pay btn btn-orange-dark font-size-14" v-show="!editingShop">
                  结算 (3)
                </button>
                <!-- 编辑状态 -->
                <button href="javascript:;"  class="j-delete-goods btn font-size-14 btn-red"
                        :disabled="!removeLists.length"
                        v-show="editingShop"
                        @click="removeList"
                >
                  删除
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="0SuefKPV4p" v-show="removePopup" style="height: 100%; position: fixed; top: 0px; left: 0px; right: 0px; background-color: rgba(0, 0, 0, 0.7); z-index: 1000;  opacity: 1;"></div>
      <div id="d2tfiX27YS" v-show="removePopup" class="popout-confirm popout-box" style="overflow: hidden; position: absolute; z-index: 1000; top: 50%; left: 50%; transform: translate3d(-50%, -50%, 0px); visibility: visible; border-radius: 4px; background: white; width: 270px; padding: 15px; opacity: 1;">
        <div class="confirm-content font-size-14" style="line-height: 20px; padding: 5px 5px 10px;">
          {{removeMsg}}
        </div>
        <hr style="margin: 9px -15px 10px;">
        <div class="btn-2-1" style="width: 47.5%;">
          <p class="js-cancel center font-size-16" style="padding-top: 5px;" @click="removePopup=false">取消</p>
        </div>
        <div class="btn-2-1" style="width: 47.5%;">
          <p class="js-ok center c-green font-size-16" style="padding-top: 5px;" @click="removeConfirm">确定</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import * as API from '../../modules/js/api/config.js'
    import mixin from '../../modules/js/mixin.js'


    export default {
      data(){
          return{
              lists: null,
              total: 0,
              editingShop: null,
              editingShopIndex: -1,
              removePopup: false,
              removeData: null,
              removeMsg: ''
          }
      },
      computed: {
          allSelected: {
              get() {
                  if(this.lists&&this.lists.length){
                      return this.lists.every(shop => {
                          return shop.checked
                      })
                  }
                  return false
              },
              set(newVal) {
                  this.lists.forEach(shop => {
                      shop.checked = newVal
                      shop.goodsList.forEach(good => {
                          good.checked = newVal
                      })
                  })
              }
          },
          allRemoveSelected: {
              get() {
                  if(this.editingShop) {
                      return this.editingShop.removeChecked
                  }
                  return false
              },
              set(newVal) {
                  if(this.editingShop) {
                      this.editingShop.removeChecked = newVal
                      this.editingShop.goodsList.forEach(good => {
                          good.removeChecked = newVal
                      })
                  }
              }
          },
          selectLists() {
              if(this.lists&&this.lists.length){
                  let arr = []
                  let total = 0
                  this.lists.forEach(shop => {
                      shop.goodsList.forEach(good => {
                          if(good.checked) {
                              arr.push(good)
                              total += good.price * good.number
                          }
                      })
                  })
                  this.total = total
                  return arr
              }
              return []
          },
          removeLists() {
              if(this.editingShop) {
                  let arr = []
                  this.editingShop.goodsList.forEach(good => {
                      if(good.removeChecked) {
                          arr.push(good)
                      }
                  })
                  return arr
              }
              return []
          }
      },
      created() {
          this.getList()
      },
      methods: {
          getList() {
              API.GET('/cart/list').then(res => {
                  let lists = res.cartList
                  lists.forEach(shop => {
                      shop.checked = true
                      shop.removeChecked = false
                      shop.editing = false
                      shop.editingMsg = '编辑'
                      shop.goodsList.forEach(good => {
                          good.checked = true
                          good.removeChecked = false
                      })
                  })
                  this.lists = lists
              })
          },
          selectGood(shop,good) {
              let attr = this.editingShop ? 'removeChecked' : 'checked'
              good[attr] = !good[attr]
              shop[attr] = shop.goodsList.every(good => {
                  return good[attr]
              })
          },
          selectShop(shop) {
              let attr = this.editingShop ? 'removeChecked' : 'checked'
              shop[attr] = !shop[attr]
              shop.goodsList.forEach(good => {
                  good[attr] = shop[attr]
              })
          },
          selectAll() {
              let attr = this.editingShop ? 'allRemoveSelected' : 'allSelected'
              this[attr] = !this[attr]
          },
          edit(shop,shopIndex) {
              shop.editing = !shop.editing
              shop.editingMsg = shop.editing ? '完成' : '编辑'
              this.lists.forEach((item,i) => {
                  if(shopIndex !== i) {
                      item.editing = false
                      item.editingMsg = shop.editing ? '' : '编辑'
                  }
              })
              this.editingShop = shop.editing ? shop : null
              this.editingShopIndex = shop.editing ? shopIndex : -1
          },
          reduce(good) {
              if(good.number===1) return
               API.POST(`/cart/reduce`, {
                 id: good.id,
                 number: 1
               }).then(res => {
                 good.number --
               })
          },
          add(good) {
              API.POST(`/cart/add`, {
                id: good.id,
                number: 1
              }).then(res => {
                good.number++
              })
          },
          remove(shop,shopIndex,good,goodIndex) {
              this.removePopup = true
              this.removeData = {shop,shopIndex,good,goodIndex}
              this.removeMsg = '确定要删除该商品吗？'
          },
          removeList() {
              this.removePopup = true
              this.removeMsg = `确定将所选 ${this.removeLists.length} 个商品删除？`
          },
          removeConfirm() {
              if(this.removeMsg === '确定要删除该商品吗？'){
                  let {shop,shopIndex,good,goodIndex} = this.removeData
                  fetch(url.cartRemove,{
                      id: good.id
                  }).then(res => {
                      shop.goodsList.splice(goodIndex, 1)
                      if(!shop.goodsList.length) {
                          this.lists.splice(shopIndex, 1)
                          this.removeShop()
                      }
                      this.removePopup  = false
                  })
              }else {
                  let ids = []
                  this.removeLists.forEach(good => {
                      ids.push(good.id)
                  })
                  API.POST('/cart/remove', {
                      ids
                  }).then(res => {
                      let arr = []
                      this.editingShop.goodsList.forEach(good => {
                          let index = this.removeLists.findIndex(item => {
                              return item.id == good.id
                          })
                          if(index === -1) {
                              arr.push(good)
                          }
                      })
                      if(arr.length) {
                          this.editingShop.goodsList = arr
                      } else {
                          this.lists.splice(this.editingShopIndex, 1)
                          this.removeShop()
                      }
                      this.removePopup  = false
                  })
              }
          },
          removeShop() {
              this.editingShop = null
              this.editingShopIndex = -1
              this.lists.forEach(shop => {
                  shop.editing = false
                  shop.editingMsg = '编辑'
              })
          },
          start(e,good) {
              good.startX = e.changedTouches[0].clientX
          },
          end(e,shopIndex,good,goodIndex) {
              console.log(e.target)
              let endX = e.changedTouches[0].clientX
              let left = '0'
              if(good.startX - endX > 100) {
                  left = '-60px'
              }
              if(endX - good.startX > 100) {
                  left = '0px'
              }
              /*Volecity(this.$refs[`goods-${shopIndex}-${goodIndex}`], {
                  left
              })*/
          }
      },
      mixins: [mixin]
  }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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

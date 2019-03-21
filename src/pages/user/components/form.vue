<template>
    <div class="container " style="min-height: 597px;">
        <div class="section section-first">
            <div class="block form js-form">
                <input class="js-id" name="id" type="hidden" value="69150287">
                <div class="block-item" style="border-top:0;">
                    <label>收货人</label>
                    <input type="text" placeholder="请输入姓名" name="user_name" v-model="name" maxlength="20">
                </div>
                <div class="block-item">
                    <label>联系电话</label>
                    <input type="tel" placeholder="联系电话" name="tel" v-model="tel" maxlength="11">
                </div>
                <div class="block-item">
                    <label>选择地区</label>
                    <div class="select-group">
                        <select class="js-province-selector" v-model="provinceValue">
                            <option :value="-1">选择省份</option>
                            <option :value="p.value" v-for="p in addressData.list" :key="p.value">{{p.label}}</option>
                        </select>
                        <select class="js-city-selector" v-model="cityValue">
                            <option :value="-1">选择城市</option>
                            <option :value="c.value" v-for="c in cityList" :key="c.value">{{c.label}}</option>
                        </select>
                        <select class="js-county-selector" name="area_code" v-model="districtValue">
                            <option :value="-1">选择地区</option>
                            <option :value="d.value" v-for="d in districtList" :key="d.value">{{d.label}}</option>
                        </select>
                    </div>
                </div>
                <div class="block-item">
                    <label>详细地址</label>
                    <input type="text" placeholder="街道门牌信息" name="address_detail" v-model="address" maxlength="100">
                </div>
            </div>
        </div>
        <div class="block section js-save block-control-btn" @click="add">
            <div class="block-item c-blue center">保存</div>
        </div>
        <div class="block section js-delete block-control-btn" v-show="type=='edit'" @click="remove">
            <div class="block-item c-red center">删除</div>
        </div>
        <div class="block stick-bottom-row center js-save-default"
             v-show="type=='edit'" @click="setDefault">
            <button class="btn btn-standard js-save-default-btn">设为默认收货地址</button>
        </div>
    </div>
</template>
<script>
    import Address from 'js/addressService.js'
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
                name: '',
                tel: '',
                provinceValue: -1,
                cityValue: -1,
                districtValue: -1,
                address: '',
                id: '',
                isDefault: false,
                type: this.$route.query.type,
                addressData: require('js/address.json'),
                cityList: null,
                districtList: null,
                instance: this.$route.query.instance,
                isInitVal: false
                // instance: JSON.parse(sessionStorage.getItem('instance'))
            }
        },
        // computed: {
        //   lists() {
        //     return this.$store.state.lists
        //   }
        // },
        // computed: mapState['lists'],
        computed: {
            ...mapState({
                lists: state => state.lists
            })
        },
        created() {
            if (this.type === 'edit') {
                let ad = this.instance
                this.provinceValue = parseInt(ad.provinceValue)
                this.isInitVal = true
                this.name = ad.name
                this.tel = ad.tel
                this.address = ad.address
                this.id = ad.id
                this.isDefault = ad.isDefault
            }
        },
        methods: {
            add() {
                // 需要做非空和合法性校验
                let { name, tel, provinceValue, cityValue, districtValue, address} = this
                let data = { name, tel, provinceValue, cityValue, districtValue, address}
                if (this.type === 'edit') {
                    data.id = this.id
                    data.isDefault = this.isDefault
                    this.$store.dispatch('updateAction', data)
                } else {
                    this.$store.dispatch('addAction', data)
                }
            },
            remove() {
                if (window.confirm("确认删除?")) {
                    this.$store.dispatch('removeAction', this.id)
                }
            },
            setDefault() {
                Address.setDefault(this.id).then(res => {
                    this.$store.dispatch('setDefaultAction', this.id)
                })
            }
        },
        watch: {
            lists: {
                handler() {
                    this.$router.go(-1)
                },
                deep: true
            },
            provinceValue(val) {
                if (val === -1) return
                let index = this.addressData.list.findIndex(item => {
                    return item.value === val
                })
                this.cityList = this.addressData.list[index].children
                this.cityValue = -1
                this.districtValue = -1
                if (this.type === 'edit' && this.isInitVal) {
                    this.cityValue = parseInt(this.instance.cityValue)
                }
            },
            cityValue(val) {
                if (val === -1) return
                let index = this.cityList.findIndex(item => {
                    return item.value === val
                })
                this.districtList = this.cityList[index].children
                this.districtValue = -1
                if (this.type === 'edit' && this.isInitVal) {
                    this.districtValue = parseInt(this.instance.districtValue)
                    this.isInitVal = false
                }
            }
        }
    }
</script>
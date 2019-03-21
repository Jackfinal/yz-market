import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as API from '../../modules/js/api/config.js'

// 创建Store实例
export default new  Vuex.Store({
    state: {
        lists: null
    },
    mutations: {
        init(state, lists) {
            state.lists = lists
        },
        add(state, instance) {
            state.lists.push(instance)
        },
        remove(state, id) {
            let lists = state.lists
            let index = lists.findIndex(item => {
                return item.id == id
            })
            lists.splice(index, 1)
        },
        update(state, instance) {
            let lists = JSON.parse(JSON.stringify(state.lists))
            let index = lists.findIndex(item => {
                return item.id == instance.id
            })
            lists[index] = instance
            state.lists = lists
        },
        setDefault(state, id) {
            let lists = state.lists
            lists.forEach(item => {
                item.isDefault = item.id == id ? true:false
            })
        }
    },
    actions: {
        getLists({commit}) {
            API.GET('/address/list').then(res => {
                commit('init', res.lists)
            })
        },
        addAction({commit}, instance) {
            API.POST('/address/add',instance).then(res => {
                commit('add', res.data)
            })
        },
        removeAction({commit}, id) {
            API.POST('address/remove',id).then(res => {
                commit('remove', id)
            })
        },
        updateAction({commit}, instance) {
            API.POST('/address/update',instance).then(res => {
                let data = res.data
                data.id = instance.id
                data.isDefault = instance.isDefault
                commit('update', data)
            })
        },
        setDefaultAction({commit}, id) {
            API.POST('/address/setDefault',id).then(res => {
                commit('setDefault', id)
            })
        }
    }
})

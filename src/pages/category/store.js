import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      topLists: null,
      topIndex: 0,
      subData: null,
      rankData: null
  },
  mutations: {
      SET_RANK: (state,payload) => {
          state.rankData = payload
          console.log(payload)
      },
      SET_TOPLIST: (state,payload) => {
          state.topLists = payload
      },
      SET_SUBDATA: (state,payload) => {
          state.subData = payload
      },
      SET_TOPINDEX: (state,payload) => {
          state.topIndex = payload
      }
  },
  actions: {

  }
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path:'/',
      component: require('../components/member.vue')
  },{
      path:'/address',
      component: require('../components/address.vue')
  },{
      path:'/form',
      component: require('../components/form.vue')
  }]
})

import Vue from 'vue'
import App from './cart.vue'
import router from './router'
import store from './store'

import './style/cart_base.css'
import './style/cart_trade.css'
import './style/cart.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

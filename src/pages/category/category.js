import Vue from 'vue'
import App from './category.vue'
import router from './router'
import store from './store'
import '../../modules/css/common.css'
import './category.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

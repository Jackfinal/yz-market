import Vue from "vue";
import App from "./index.vue";
import router from "./router";
import store from "./store";
import '../../modules/css/common.css';
import './index.css';
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'

Vue.use(mandMobile)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

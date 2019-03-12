import Vue from "vue";
import App from "./index.vue";
import '../../modules/css/common.css';
import './index.css';
import router from "./router";
import store from "./store";
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

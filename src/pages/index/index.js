import Vue from "vue";
import '@/modules/common.css';
import './index.css';
import App from "./index.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

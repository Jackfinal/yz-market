import Vue from "vue";
import App from "./index.vue";
import router from "./router";
import store from "./store";
import '../../modules/css/common.css';
import './index.css';
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui';
Vue.use(Mint);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

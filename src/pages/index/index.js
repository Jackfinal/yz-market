import Vue from "vue";
import App from "./index.vue";
import router from "./router";
import store from "./store";

import axios from 'axios';
axios.post("",{
  pageNum:1,
    pageSize:6
}).then((res)=>{
  console.log(res)
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

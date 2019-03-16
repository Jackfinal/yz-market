import Vue from "vue";
import App from "./search.vue";
import router from "./router";
import store from "./store";
import '../../modules/css/common.css';
import './search.css';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

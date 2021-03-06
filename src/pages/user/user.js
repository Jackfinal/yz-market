import Vue from "vue";
import App from "./user.vue";
import router from "./router";
import store from "./store";
import '../../modules/css/common.css';
import './style/user.css';
import './style/user_base.css';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

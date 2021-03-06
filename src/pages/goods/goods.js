import Vue from "vue";
import App from "./goods.vue";
import router from "./router";
import store from "./store";
import './style/goods_common.css'
import './style/goods_custom.css'
import './style/goods.css'
import './style/goods_theme.css'
import './style/goods_mars.css'
import './style/goods_sku.css'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'

Vue.use(mandMobile)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

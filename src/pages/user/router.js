import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router(
    {
        base: process.env.BASE_URL,
        routes: [
            {
                path: '/',
                component: () => import('./user.vue')
            },
            {
                path: '/address',
                component: () => import('./components/address.vue'),
                children: [{
                    path: '',
                    component: () => import('./components/all.vue')
                }, {
                    path: 'all',
                    component: () => import('./components/all.vue')
                }, {
                    path: 'form',
                    component: () => import('./components/form.vue')
                }]
            }]
    })



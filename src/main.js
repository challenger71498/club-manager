import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false;

Vue.use(VueRouter);

import Introduce from "./components/Introduce.vue";

const routes = [
    { path: '/introduce', component: Introduce },
];

const router = new VueRouter( {
    mode: 'history',
    routes,
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
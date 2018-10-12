import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.prototype.$EventBus = new Vue();

import $member from './store/member';
Vue.prototype.$member = $member;

import router from './router/index';

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
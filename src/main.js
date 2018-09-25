import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue)

import WelcomePage from "./components/WelcomePage/Main.vue"
import MainPage from './components/MainPage/Main.vue'
import BoardPage from './components/Posts/Board.vue'

const routes = [
    { path: '/', component: MainPage },
    { path: '/intro', component: WelcomePage },
    { path: '/posts', component: BoardPage },
];

const router = new VueRouter( {
    mode: 'history',
    routes,
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
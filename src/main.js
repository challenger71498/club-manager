import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue)

Vue.prototype.$EventBus = new Vue();

import WelcomePage from "./components/WelcomePage/Intro.vue"
import MainPage from './components/MainPage/Main.vue'
import Login from './components/LoginPage/Login.vue'
import SignUp from './components/LoginPage/SignUp.vue'

import BoardLayout from './components/Board/Layout.vue';
import BoardList from './components/Board/List.vue'
import BoardDocument from './components/Board/Document.vue'
import WriteDocument from './components/Board/DocumentWrite.vue'

const routes = [
    { path: '/', component: MainPage },
    { path: '/intro', component: WelcomePage },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
    { path: '/write', component: WriteDocument },
    {
        path: '/board/:board_idx(\\d+)',
        component: BoardLayout,
        children: [
            {
                path: '',
                name: 'BoardList',
                component: BoardList
            },
            {
                path: 'read/:document_idx(\\d+)',
                name: 'BoardDocument',
                component: BoardDocument
            },
        ]
    }
];

const router = new VueRouter( {
    mode: 'history',
    routes,
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
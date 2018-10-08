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

import WelcomePage from "./components/WelcomePage/Main.vue"
import MainPage from './components/MainPage/Main.vue'
// import Board from './components/Posts/Board.vue'

import BoardLayout from './components/Board/Layout.vue';
import BoardList from './components/Board/List.vue'
import BoardDocument from './components/Board/Document.vue'

const routes = [
    { path: '/', component: MainPage },
    { path: '/intro', component: WelcomePage },
    // { path: '/posts', component: Board },

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
            }
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
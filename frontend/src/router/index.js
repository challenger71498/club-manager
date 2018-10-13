import VueRouter from 'vue-router';

import WelcomePage from '@components/WelcomePage/Intro.vue';
import MainPage from '@components/MainPage/Main.vue';
import Login from '@components/LoginPage/Login.vue';
import SignUp from '@components/LoginPage/SignUp.vue'

import NoticeRoute from './notice';
import BoardRoute from './board';

const routes = [
    {
        path: '/',
        name: 'Main',
        component: MainPage,
    },
    {
        path: '/intro',
        name: 'Intro',
        component: WelcomePage,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
    },
    NoticeRoute,
    BoardRoute,
];

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash };
        }
        else if (savedPosition) {
            return savedPosition;
        }
        else {
            return { x: 0, y: 0 };
        }
    },
});

export default router;
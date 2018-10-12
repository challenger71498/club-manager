import VueRouter from 'vue-router';

import WelcomePage from '@components/WelcomePage/Intro.vue';
import MainPage from '@components/MainPage/Main.vue';
import Login from '@components/LoginPage/Login.vue';
import SignUp from '@components/LoginPage/SignUp.vue'

import BoardLayout from '@components/Board/Layout.vue';
import BoardList from '@components/Board/List.vue';
import BoardDocument from '@components/Board/Document.vue';
import WriteDocument from '@components/Board/DocumentWrite.vue';

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
            {
                path: 'write',
                name: 'BoardWrite',
                component: WriteDocument,
            }
        ]
    }
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
    }
});

export default router;
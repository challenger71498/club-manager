<template>
    <div id="app">
        <Menu id="menu" :menu="menu"></Menu>
        <div class="view">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Menu from './components/Menu'

    export default {
        name: 'app',
        components: {
            Menu,
        },
        data () {
            return {
                menu: [
                    { text: 'INTRODUCE', to: '/introduce' },
                    { text: 'ACTIVITIES', link: 'http://www.naver.com/', type: 'link' },
                    { text: 'SOCIAL IMPACTS', to: '/' },
                    { text: 'PARTNERS', to: '/' },
                    { text: 'JOIN US', to: '/' }
                ]
            };
        }
    }
</script>

<style>
    body {
        margin: 0;
    }

    #app {
    }

    #menu {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
    }

    .view {
        padding-top: 100px;
    }

    .clearfix::after {
        content: '';
        display: block;
        clear: both;
    }
</style>
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
        components: { Menu },
        data () {
            return {
                menu: [
                    { text: 'INTRODUCE', link: '#introduce' },
                    { text: 'ACTIVITIES', link: '#activities' },
                    { text: 'SOCIAL IMPACTS', link: '#social_impacts' },
                    { text: 'PARTNERS', link: '#partners' },
                    { text: 'JOIN US', link: '#join_us' }
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
        z-index: 100;
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
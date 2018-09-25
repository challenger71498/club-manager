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
                    { text: '소개', child: [ { text: "활동", link: "/intro/#activities"}, { text: "연혁", link: "/intro/#history"}, { text: "파트너쉽", link: "/intro/#partners"},] },
                    { text: '활동', link: '/activities' },
                    { text: '게시판', child: [ { text: "공지", link: ""}, { text: "자유게시판", link: ""}, { text: "건의게시판", link: ""},] },
                    { text: '스터디', child: [ { text: "해킹 스터디", link: ""}, { text: "게임 스터디", link: ""}, { text: "웹 스터디", link: ""}, { text: "하드웨어 스터디", link: ""},] },
                    { text: '소모임', child: [ { text: "리그오브레전드", link: ""}, { text: "히오스", link: ""}, { text: "하스스톤", link: ""}, { text: "메이플스토리", link: ""},] },
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
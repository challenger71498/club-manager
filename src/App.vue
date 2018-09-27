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
                    {
                        text: '소개',
                        child: [
                            { text: "활동", to: "/intro/#activities" },
                            { text: "연혁", to: "/intro/#history" },
                            { text: "파트너쉽", to: "/intro/#partners" },
                        ]
                    },
                    {
                        text: '활동',
                        to: '/activities'
                    },
                    {
                        text: '게시판',
                        child: [
                            { text: "공지", to: "" },
                            { text: "자유게시판", to: "" },
                            { text: "건의게시판", to: ""},
                        ]
                    },
                    {
                        text: '스터디',
                        child: [
                            { text: "해킹 스터디", to: "" },
                            { text: "게임 스터디", to: "" },
                            { text: "웹 스터디", to: "" },
                            { text: "하드웨어 스터디", to: "" },
                        ]
                    },
                    {
                        text: '소모임',
                        child: [
                            { text: "리그오브레전드", to: "" },
                            { text: "히오스", to: "" },
                            { text: "하스스톤", to: "" },
                            { text: "메이플스토리", to: "" },
                        ]
                    },
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
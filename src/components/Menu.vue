<template>
    <div class="menu" v-on:mouseover="active=true" v-on:mouseleave="active=false">
        <div class="menu_wrap">
            <h1 class="clubLogo"><img src="../assets/logo.png" alt="CLUBLOGO"></h1>
            <!--<ul class="list clearfix">
                <li v-for="item in menu">
                    <a v-if="item.link" :href="item.link">{{ item.text }}</a>
                    <router-link v-else :to="item.to">{{ item.text }}</router-link>
                </li>
            </ul>-->
            <div class="buttons">
                <ul class="list mainlist" v-for="list in menu">
                    <ul class="list" v-if="list.child">
                        <li class="category">{{list.text}}</li>
                        <li class="children" v-for="child in list.child" v-show="active">{{child.text}}</li>
                    </ul>
                    <li v-else class="category">{{list.text}}</li>
                </ul>
            </div>

            <button class="login" v-if="isLogined">Log out</button>
            <button class="login" v-else>Log in</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            menu: {
                type: Array,
                default: () => []
            },
        },
        data() {
            return {
                active: false,
                isLogined: false,
            }
        }
    }
</script>

<style scoped>
    .menu {
        width: 100%;
        height: 100px;
        background-color: #fff;
        border-bottom: 1px solid gray;
        z-index: 100;
    }
    .menu_wrap {
        padding: 0 60px;
    }
    .clubLogo {
        position: relative;
        padding: 30px 0 0 0;
        margin: 0;
        float: left;
    }
    .clubLogo>img {
        vertical-align: top;
    }
    @media all and (min-width: 1200px) {
        .menu:hover{
            height: 250px;
        }
        .list {
            list-style: none;
            padding: 0;
            width: 180px;
            float: left;
            text-align: center;
        }
        .mainlist {
            position: relative;
            top: 38px;
        }
        .children {
            position: relative;
            top: 25px;
            margin: 10px 0;
        }
        .buttons {
            position: absolute;
            left: calc(50% - 450px);
        }
    }
    @media all and (max-width: 1199px) {
        .buttons {
            display: none;
        }
        .menu_wrap {
            padding: 0 30px;
        }
    }
    .login {
        position: relative;
        float: right;
        border: none;
        background: transparent;
        top: 35px;
    }
</style>
<template>
    <div class="menu" v-on:mouseover="active=true" v-on:mouseleave="active=false">
        <div class="menu_wrap">
            <router-link to="/">
                <h1 class="clubLogo">
                    <img src="../assets/logo.png" alt="CLUBLOGO">
                </h1>
            </router-link>
            <div class="lists">
                <ul class="list" v-for="list in menu">
                    <ul v-if="list.child">
                        <li class="parents">
                            <router-link :to="list.to" v-if="list.to">{{ list.text }}</router-link>
                            <a :href="list.link" v-else>{{ list.text }}</a>
                        </li>
                        <li class="children" v-for="child in list.child" v-show="active">
                            <router-link :to="child.to" v-if="child.to">{{ child.text }}</router-link>
                            <a :href="child.link" v-else>{{ child.text }}</a>
                        </li>
                    </ul>
                    <li v-else class="parents">
                        <router-link :to="list.to" v-if="list.to">{{ list.text }}</router-link>
                        <a :href="list.link" v-else>{{ list.text }}</a>
                    </li>
                </ul>
            </div>
            <!--
            <button class="login" v-if="isLogined">Log out</button>
            <button class="login" v-else>Log in</button>
            -->
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
    .menu:hover{
        height: 250px;
    }
    .menu_wrap {
        height: 100%;
        width: 1200px;
        margin: 0 auto;
    }
    .clubLogo {
        height: 100%;
        padding: 0;
        margin: 0 0 0 30px;
        float: left;
    }
    .clubLogo>img {
        margin-top: 30px;
        transition: transform 0.6s;
    }
    .clubLogo img:hover {
        transform: scale(1.1);
    }
    .lists {
        width: 750px;
        height: 100%;
        margin: 0 auto;
    }
    ul {
        list-style: none;
        padding: 0;
        width: 150px;
        float: left;
        text-align: center;
    }
    .list {
        position: relative;
        top: 38px;
    }
    .children {
        position: relative;
        top: 25px;
        margin: 10px 0;
    }

    /*
    .login {
        position: relative;
        float: right;
        border: none;
        background: transparent;
        top: 35px;
    }
    */
</style>
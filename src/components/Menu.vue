<template>
    <div class="menu">
        <div class="menu_wrap clearfix">
            <h1 class="clubLogo"><img src="../assets/logo.png" alt="CLUBLOGO"></h1>
            <ul class="list clearfix">
                <li v-for="item in info">
                    <a v-if="item.link" :href="item.link">{{ item.text }}</a>
                    <router-link v-else :to="item.to">{{ item.text }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            info: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>
    .menu {
        height: 100px;
        background-color: #000;
    }
    .menu_wrap {
        padding: 0 30px;
    }
    .clubLogo {
        padding: 30px 0 0 0;
        margin: 0;
        float: left;
    }
    .list {
        list-style: none;
        margin: 0;
        padding: 42px 0 0 0;
        float: right;
    }
    .list > li {
        float : left;
        font-size: 16px;
    }
    .list a {
        color: #fff;
        text-decoration: none;
        padding: 0 10px;
    }
</style>
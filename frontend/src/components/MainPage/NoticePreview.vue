<template>
    <div class="wrap">
        <h1>Notice</h1>
        <div class="lists">
            <div class="list" v-for="content in contents">
                <router-link :to="content.to"><div class="notice-title">{{content.title}}</div></router-link>
                <div class="notice-date">{{date(content.register_date)}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            contents: Array
        },
        methods: {
            date(register_date) {
                return register_date.slice(0, 10);
            }
        }
    }
</script>

<style scoped>
    .wrap {
        position: relative;
        width: 980px;
        height: 250px;
        background-color: #e8e8e8;
        border: 1px solid lightgray;
    }
    h1 {
        position: relative;
        height: 80%;
        font: 20px lighter;
        margin: 30px;
        padding-right: 30px;
        color: darkgray;
        border-right: solid 1px lightgray;
        float: left;
    }
    .lists {
        position: relative;
        width: 780px;
        height: 200px;
        float: left;
        margin: 25px 0;
    }
    .list {
        width: 100%;
        height: 40px;
    }
    .notice-title {
        position: relative;
        float: left;
        line-height: 40px;
        font-size: 15px;
    }
    .notice-date {
        position: relative;
        float: right;
        line-height: 40px;
        font-size: 15px;
    }
</style>
<template>
    <div class="userinfo">
        <div class="wrap">
            <img class="picture" :src="profile" :alt="name">
            <div class="contents">
                <p class="user-name">{{ name }}</p>
                <p class="user-level">{{ level }}</p>
            </div>
            <div class="buttons">
                <button type="button">계정설정</button>
                <button type="button" @click="logout">로그아웃</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserInfo',
        props: {
            name : String,
            level : Number,
            profile : String,
        },
        methods: {
            logout() {
                this.$emit('logout');
            },
        },
    }
</script>

<style scoped>
    .userinfo {
        width: 200px;
        height: 250px;
        border: 1px solid lightgray;
        background-color: #e8e8e8;
    }
    .wrap>.picture {
        width: 80px;
        height: 80px;
        display: block;
        margin: 30px 60px 30px 60px;
    }
    p {
        display: block;
        margin: 0;
        text-align: center;
    }
    .user-name {
    }
    .user-level {
        color: gray;
    }
    .buttons {
        position: relative;
        width: 180px;
        height: 50px;
        margin: 10px;
    }
    .buttons>button {
        width: 80px;
        height: 30px;
        background-color: lightgray;
        border: 1px solid gray;
        margin: 5px;
        font-size: small;
    }
</style>
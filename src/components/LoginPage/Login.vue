<template>
    <div class="Login__Wrapper">
        <h1>Login</h1>
        <form class="wrap" v-on:submit.prevent="login">
            <div class="input">
                <input type="text" v-model="id" placeholder="ID">
                <input type="password" v-model="password" placeholder="Password">
            </div>
            <div class="buttons">
                <button type="submit" class="login">로그인</button>
            </div>
            <div class="others">
                <router-link to="signup"><button class="other">회원가입</button></router-link>
                <router-link to="find_id"><button class="other">아이디 찾기</button></router-link>
                <router-link to="find_password"><button class="other">비밀번호 찾기</button></router-link>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        // 24~32번째 줄은 무슨 용도?
        props: {
            user : {
                userName : String,
                studentGrade : Number,
                userMajor : String,
                userLevel : String,
                picture : String
            }
        },

        methods: {
            login () {
                alert(`ID: ${this.id}\nPW: ${this.password}`);
            }
        },

        data () {
            return {
                id: '',
                password: '',
            };
        }
    }
</script>

<style scoped>
    .Login__Wrapper {
        width: 500px;
        height: 500px;
        margin: 20px auto;
        border-radius: 8px;
        border: 1px solid black;
    }
    .Login__Wrapper input {
        width: 100%;
        height: 60px;
        border-radius: 4px;
        border: 1px solid #bbb;
        padding: 5px 5px 5px 15px;
        margin: 0 0 20px 0;
    }
    .Login__Wrapper .input{
        width: 80%;
        margin: 50px auto 0 auto;
    }
    .Login__Wrapper .buttons{
        width: 80%;
        margin: 20px auto;
    }
    .Login__Wrapper h1{
        margin: 50px;
        text-align: center;
    }
    .login {
        width: 100%;
        height: 60px;
        display: block;
        padding: 10px 0;
        box-sizing: border-box;
        border: 3px solid #e8e8e8;
        background: #059162;
        color: #fff;
        font-size: 13px;
    }
    .others {
        width: 300px;
        margin: 0 auto;
    }
    .other {
        width: 100px;
        background-color: transparent;
        color: #525252;
        font-size: 13px;
        border: none;
    }
</style>
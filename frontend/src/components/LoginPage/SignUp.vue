<template>
    <div class="Login__Wrapper">
        <h1>Sign in</h1>
        <form class="wrap" v-on:submit.prevent="join">
            <div class="input">
                <input type="text" v-model="id" placeholder="ID">
                <input type="password" v-model="password" placeholder="Password">
                <input type="text" v-model="name" placeholder="Name">
                <input type="text" v-model="student_number" placeholder="Student Number">
            </div>
            <div class="buttons">
                <button type="submit" class="join">회원 가입</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        methods: {
            join () {
                // alert(`ID: ${this.id}\nPW: ${this.password}\nNAME: ${this.name}\nsNum: ${this.student_number}`);
                this.$http.post('/api/members', {
                    id: this.id,
                    password: this.password,
                    name: this.name,
                    student_number: this.student_number
                }).then(() => {
                    this.$router.push({ name: "Main" });
                }).catch(err =>{
                    if (!err.response.data || !err.response.data.message)
                    {
                        alert('알 수 없는 오류가 발생하였습니다.');
                        return;
                    }
                    alert(err.response.data.message);
                });
            }
        },

        data () {
            return {
                id: '',
                password: '',
                name: '',
                student_number: '',
            }
        }
    }
</script>

<style scoped>
    .Login__Wrapper {
        width: 500px;
        height: 600px;
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
        margin: 20px auto 0 auto;
    }
    .Login__Wrapper .buttons{
        width: 80%;
        margin: 20px auto;
    }
    .Login__Wrapper h1{
        margin: 50px;
        text-align: center;
    }
    .join {
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
</style>
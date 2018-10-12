<template>
    <div class="userinfo">
        <form class="wrap" v-on:submit.prevent="login">
            <div class="input">
                <input type="text" v-model="id" placeholder="ID">
                <input type="password" v-model="password" placeholder="Password">
            </div>
            <div class="buttons">
                <button type="submit" class="big" @click="login">로그인</button>
                <router-link to="signup"><button class="big">회원가입</button></router-link>
                <router-link to="find_id"><button class="small">아이디 찾기</button></router-link>
                <router-link to="find_password"><button class="small">비밀번호 찾기</button></router-link>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        methods: {
            login () {
                this.$http.post('/api/members/token', {
                    id: this.id,
                    password: this.password
                }).then(response => {
                    localStorage.token = response.data.token;
                    this.$router.push({ name: 'Main' });
                }).catch(err => {
                    if (!err.response.data || !err.response.data.message) {
                        alert('알 수 없는 오류가 발생했습니다.');
                        return;
                    }

                    alert(err.response.data.message);
                });
                // alert(`ID: ${this.id}\nPW: ${this.password}`);
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
    .userinfo {
        width: 200px;
        height: 250px;
        box-sizing: border-box;
        padding: 30px 10px;
        border: 1px solid lightgray;
        background-color: #e8e8e8;
    }

    input {
        width: 100%;
        border-radius: 4px;
        border: 1px solid #bbb;
        padding: 5px;
        box-sizing: border-box;
        margin: 0 0 6px 0;
    }

    button {
        display: block;
        padding: 10px 0;
        box-sizing: border-box;
        border: 3px solid #e8e8e8;
    }
    .big {
        background: #059162;
        color: #fff;
        font-size: 13px;
        width: 100%;
    }
    .small {
        font-size: 11px;
        background: transparent;
        float: left;
    }
</style>
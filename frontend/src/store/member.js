import Vue from 'vue';

const TOKEN_HEADER = 'X-Token';
const TOKEN_NAME = 'member.token';

export default new Vue({
    watch: {
        token (token) {
            if (token === null) {
                localStorage.removeItem(TOKEN_NAME);
                delete this.$http.defaults.headers.common[TOKEN_HEADER];
                this.isGuest = true;
                return;
            }

            localStorage.setItem(TOKEN_NAME, token);
            this.$http.defaults.headers.common[TOKEN_HEADER] = token;

            this.$http.get('/api/members/token').then(response => {
                this.idx = response.data.idx;
                this.id = response.data.id;
                this.name = response.data.name;
                this.level = response.data.level;
                this.student_number = response.data.student_number;
                this.login_date = response.data.login_date;
                this.register_date = response.data.register_date;

                this.isGuest = false;
            }).catch(err => {
                console.error('Error on token update:', err);
                this.token = null;
            });
        }
    },

    methods: {
        async login(id, password) {
            let response = await this.$http.post('/api/members/token', { id, password });
            this.token = response.data.token;
        },

        logout() {
            this.token = null;
        },
    },

    computed: {
        isAdmin () {
            return !this.isGuest && this.level === 0;
        },
    },

    data: {
        isGuest: true,
        idx: 0,
        id: null,
        name: null,
        level: null,
        token: null,
        student_number: null,
        login_date: null,
        register_date: null,
        profile : require('@assets/if_profle_1055000.png'),
    },

    created () {
        if (localStorage.getItem(TOKEN_NAME)) {
            this.token = localStorage.getItem(TOKEN_NAME);
        }
    }
});
<template>
    <div class="BoardList__Wrapper">
        <ListView :items="documents"></ListView>

        <!-- { board_idx: 0 } 은 공지용으로 사용할 계획 -->
        <router-link :to="{ name:'BoardWrite', params: { board_idx: this.board_idx } }">
            <button class="button">글쓰기</button>
        </router-link>
    </div>
</template>

<script>
    import ListView from './ListView';

    export default {
        name: "BoardList",
        components: { ListView },
        computed: {
            board_idx () {
                return parseInt(this.$route.params.board_idx);
            },

            documents () {
                return this.items.map(item => {
                    return {
                        ...item,
                        to: {
                            name: 'BoardDocument',
                            params: {
                                board_idx: this.board_idx,
                                document_idx: item.idx
                            }
                        }
                    }
                });
            }
        },
        created () {
            if (this.board_idx === 0) {
                this.$http.get("/api/notices").then(response => {
                    this.items = response.data.items;
                });
            }
            else {
                this.$http.get("/api/boards").then(response => {
                    this.items = response.data.items;
                });
            }
        },
        data () {
            return {
                items: []
            }
        }
    }
</script>

<style scoped>
    .BoardList__Wrapper {
        width: 1200px;
        background-color: #ffffff;
        margin: 20px auto;
    }
    .button {
         background: #059162;
         color: #fff;
         font-size: 13px;
         margin-top: 10px;
         width: 70px;
         height: 35px;
     }
</style>
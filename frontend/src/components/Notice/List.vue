<template>
    <div class="BoardList__Wrapper">
        <ListView :items="documents"></ListView>

        <router-link v-if="$member.isAdmin" :to="{ name:'NoticeWrite' }">
            <button class="button">글쓰기</button>
        </router-link>
    </div>
</template>

<script>
    import ListView from '../Board/ListView';

    export default {
        name: 'NoticeList',
        components: { ListView },
        computed: {
            documents () {
                return this.items.map(item => {
                    return {
                        ...item,
                        to: {
                            name: 'NoticeDocument',
                            params: {
                                document_idx: item.idx
                            }
                        }
                    };
                });
            }
        },

        data () {
            return {
                items: []
            };
        },

        mounted () {
            this.$http.get('/api/notices').then(response => {
                this.items = response.data.items;
            });
        },
    };
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
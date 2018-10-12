<template>
    <div class="BoardList__Wrapper">
        <ListView :items="documents"></ListView>

        <!-- { board_idx: 0 } 은 공지용으로 사용할 계획 -->
        <router-link :to="{ name:'BoardWrite', params: { board_idx: 0 } }">
            <button class="button">글쓰기</button>
        </router-link>
    </div>
</template>

<script>
    import ListView from './ListView';

    export default {
        name: "BoardList",
        components: { ListView },
        data () {
            function dummy(idx) {
                return {
                    title: `제목${idx}`,
                    register_date: new Date().toISOString().substr(0, 10),
                    content: '글내용',
                    image: 'https://dummyimage.com/300x300/000/fff',
                    writer_name: '작성자',
                    writer: idx,
                    view_count: 5,


                    total_comment: 5,
                    idx: 1234,
                    to: {
                        name: 'BoardDocument',
                        params: {
                            board_idx: 1,
                            document_idx: idx,
                        },
                    }
                };
            }

            let documents = new Array(10).fill(0).map((v, i) => dummy(i));

            return {
                documents
            };
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
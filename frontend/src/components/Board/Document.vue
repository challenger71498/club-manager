<template>
    <section class="BoardDocument__Wrapper">
        <header>
            <h3 class="title">{{ title }}</h3>
            <div class="information">
                <ul>
                    <li>
                        <em>작성자</em>: {{ writer_name }}
                    </li>
                    <li>
                        <em>작성일</em>: {{ register_date }}
                    </li>
                    <li>
                        <em>조회수</em>: {{ view_count }}
                    </li>
                </ul>
            </div>
        </header>
        <article>
            <div>
                <img :src=image :alt=alt>
            </div>
            {{ content }}
            <router-link :to="{ name:'BoardWrite', params: { board_idx: 0 } }">
                <button class="button">글 수정</button>
            </router-link>
        </article>
        <div class="comments">
            <h4>댓글 ({{total_comment}})</h4>
            <CommentList :comments="comments"></CommentList>
        </div>
    </section>
</template>

<script>
    import CommentList from './CommentList.vue';

    export default {
        name: 'BoardDocument',
        components: { CommentList },
        computed: {
            boardIdx () {
                return parseInt(this.$route.params.board_idx);
            },
            documentIdx () {
                return parseInt(this.$route.params.document_idx);
            }
        },

        data() {
            function dummy(idx) {
                return {
                    userName: `유저${idx}`,
                    content: "댓글내용",
                    profile_image: require("../../assets/if_profle_1055000.png"),
                    date: "2018.09.27",
                    likeUp: Math.round(Math.random() * 10),
                    likeDown: Math.round(Math.random() * 10),
                };
            }

            return {
                title: `제목 1`,
                register_date: new Date().toISOString().substr(0, 10),
                content: '글내용',
                image: 'https://dummyimage.com/300x300/000/fff',
                alt: "사진이다",
                writer_name: '작성자',
                writer: 1,
                view_count: 5,
                total_comment: 5,
                fresh: false,
                comments:  new Array(10).fill(0).map((v, i) => dummy(i))
            };
        },

        created () {
        }
    };
</script>

<style scoped>
    header {
        border-top: 3px solid #444;
        border-bottom: 1px solid #ddd;
    }

    .BoardDocument__Wrapper header .title {
        font-size: 16px;
        padding: 0 10px;
        line-height: 40px;
        border-bottom: 1px solid #ddd;
        background: #f0f0f0;
        margin: 0;
    }

    .BoardDocument__Wrapper header ul {
        list-style: none;
        margin: 0;
        padding: 0 10px;
        line-height: 40px;
        height: 40px;
        font-size: 13px;
    }

    .BoardDocument__Wrapper header li {
        float: left;
        margin-right: 20px;
    }

    .BoardDocument__Wrapper header ul::after {
        display: block;
        content: '';
        clear: both;
    }

    .BoardDocument__Wrapper header em {
        font-style: normal;
    }

    .BoardDocument__Wrapper article {
        padding: 10px;
        margin-bottom: 50px;
    }
    .button {
        background: #059162;
        color: #fff;
        font-size: 13px;
        margin-top: 10px;
        width: 60px;
        height: 25px;
        float: right;
    }
    .BoardDocument__Wrapper .comments h4 {
        border: solid #ddd;
        border-width: 1px 0;
        background: #f0f0f0;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        font-size: 16px;
        font-weight: bold;
    }
</style>
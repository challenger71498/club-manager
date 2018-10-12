<template>
    <section class="BoardDocument__Wrapper">
        <header>
            <h3 class="title">{{ document.title }}</h3>
            <div class="information">
                <ul>
                    <li>
                        <em>작성자</em>: {{ document.writer_name }}
                    </li>
                    <li>
                        <em>작성일</em>: {{ this.date }}
                    </li>
                    <li>
                        <em>조회수</em>: {{ document.view_count }}
                    </li>
                </ul>
            </div>
        </header>
        <article>
            <!--<div>
                <img :src=image :alt=alt>
            </div>-->
            {{ document.content }}
            <router-link :to="{ name:'BoardWrite', params: { board_idx: 0 } }">
                <button class="button">글 수정</button>
            </router-link>
        </article>
        <div class="comments" v-if="!is_notice">
            <h4>댓글 ({{this.total_comment}})</h4>
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
            },
            date() {
                return this.document.register_date.slice(0, 10);
            },
            total_comment() {
                return this.comments.length;
            },
            is_notice() {
                if(this.boardIdx === 0) return true;
                else return false;
            }
        },
        data() {
            return {
                document: {
                    title: '',
                    writer_name: '',
                    register_date: '',
                    view_count: 0,
                    content: ''
                },
                comments: [],
            }
        },
        created () {
            this.$http.get("/api/notices/"+this.documentIdx).then(response => {
                this.document.title = response.data.title;
                this.document.writer_name = response.data.writer_name;
                this.document.register_date = response.data.register_date;
                this.document.view_count = response.data.view_count;
                this.document.content = response.data.content;
            });
            if(!this.is_notice) {
                this.$http.get("/api/boards/" + this.boardIdx + "/documents/" + this.documentIdx +"/comments")
                    .then(response => { this.comments = response.data; console.log(this.comments) });
            }
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
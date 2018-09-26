<template>
    <div class="wrap">
        <div class="comment">
            <h4 class="user-name">{{comment.userName}}</h4>
            <p class="content">{{comment.content}}</p>
            <p class="date">{{comment.date}}</p>
            <button class="report button">신고</button>
            <div class="estimate">
                <button class="like up button"><img src="../../../assets/like.png"/> {{comment.likeUp}}</button>
                <button class="like down button"><img src="../../../assets/dislike.png"/> {{comment.likeDown}}</button>
            </div>
            <button class="reply button" v-on:click="show_reply = !show_reply">답글 {{comment.replies.length}}</button>
        </div>
        <div v-if="show_reply">
            <reply v-for="reply in comment.replies" :reply="reply"></reply>
        </div>
    </div>

</template>

<script>
    import reply from './reply.vue'
    export default {
        name: "comment",
        components: {
            reply
        },
        props: {
            comment: {
                userName: String,
                content: String,
                date: String,
                replies: Array,
                likeUp: Number,
                likeDown: Number
            }
        },
        data() {
            return {
                show_reply: false
            }
        }
    }
</script>

<style scoped>
    .wrap {
        width: 1000px;
        margin: 0 auto 10px auto;
        border-bottom: 1px solid gray;
    }
    .comment {
    }
    .user-name {
        font-size: 16px;
        font-weight: bold;
    }
    .content {
        font-size: 16px;
        margin: 5px 0;
    }
    .date {
        width: auto;
        padding: 0 30px 0 0;
        margin: 0;
        font-size: 15px;
        color: dimgray;
        float: left;
    }
    .button {
        background: transparent;
        border: none;
        margin: 0;
        padding: 0;
        display: block;
    }
    .report {
        float: left;
        margin: 0 20px 0 0;
    }
    .like {
        margin: 0 20px 0 0;
    }
    .up {
        float: left;
    }
    .reply {
        padding: 10px 0;
    }
</style>
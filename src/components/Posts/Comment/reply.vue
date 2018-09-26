<template>
    <div class="reply">
        <div class="indent"></div>
        <div class="comment">
            <h4 class="user-name">{{reply.userName}}</h4>
            <p class="content">{{reply.content}}</p>
            <p class="date">{{reply.date}}</p>
            <button class="report button">신고</button>
            <div class="estimate">
                <button class="like up button"><img src="../../../assets/like.png"/> {{reply.likeUp}}</button>
                <button class="like down button"><img src="../../../assets/dislike.png"/> {{reply.likeDown}}</button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "reply",
        props: {
            reply: {
                userName: String,
                content: String,
                date: String,
                likeUp: Number,
                likeDown: Number
            }
        }
    }
</script>

<style scoped>
    .reply {
        width: 1000px;
        padding: 10px auto 0 auto;
        background-color: #fafafa;
    }
    .indent {
        position: relative;
        width: 15px;
        height: 15px;
        top: 20px;
        left: 20px;
        border-bottom: 1px solid lightgrey;
        border-left: 1px solid lightgray;
    }
    .comment {
        margin: 0 0 0 50px;
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
</style>
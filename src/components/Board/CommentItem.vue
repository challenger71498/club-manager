<template>
    <div class="CommentItem__Wrapper">
        <div class="profile_image">
            <img :src="profile_image" :alt="userName" />
        </div>
        <p class="content">{{ content }}</p>
        <div class="information">
            <div class="user-name">{{ userName }}</div>
            <div class="date">{{ date }}</div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "CommentItem",
        props: {
            userName: String,
            content: String,
            date: String,
            profile_image : String,
        },

        data() {
            return {
                show_reply: false
            };
        }
    }
</script>

<style scoped>
    .CommentItem__Wrapper {
        border-bottom: 1px solid #ddd;
        padding: 15px 10px 45px 100px;
        min-height: 100px;
        box-sizing: border-box;
        position: relative;
    }

    .CommentItem__Wrapper .profile_image {
        position: absolute;
        left: 10px;
        top: 10px;
        width: 80px;
        height: 80px;
        box-sizing: border-box;
        padding: 4px;
        border: 1px solid #ddd;
    }
    .CommentItem__Wrapper .profile_image img {
        width: 70px;
        height: 70px;
    }

    .CommentItem__Wrapper .content {
        margin: 0;
    }

    .CommentItem__Wrapper .information {
        position: absolute;
        bottom: 15px;
        height: 20px;
        left: 100px;
        right: 10px;
        font-size: 12px;
        color: #888;
        line-height: 20px;
        box-sizing: border-box;
    }

    .CommentItem__Wrapper .information .user-name {
        float: left;
    }

    .CommentItem__Wrapper .information .date {
        float: right;
    }

    .CommentItem__Wrapper .information::after {
        display: block;
        content: '';
        clear: both;
    }

    /*.wrap {*/
        /*margin: 0 auto 10px auto;*/
        /*border-bottom: 1px solid gray;*/
    /*}*/
    /*.comment {*/
    /*}*/
    /*.user-name {*/
        /*font-size: 16px;*/
        /*font-weight: bold;*/
    /*}*/
    /*.content {*/
        /*font-size: 16px;*/
        /*margin: 5px 0;*/
    /*}*/
    /*.date {*/
        /*width: auto;*/
        /*margin: 0 30px 0 0;*/
        /*padding: 0;*/
        /*font-size: 15px;*/
        /*color: dimgray;*/
        /*float: left;*/
    /*}*/
    /*.button {*/
        /*background: transparent;*/
        /*border: none;*/
        /*margin: 0;*/
        /*padding: 0;*/
        /*display: block;*/
    /*}*/
    /*.report {*/
        /*float: left;*/
        /*margin: 0 20px 0 0;*/
    /*}*/
    /*.like {*/
        /*margin: 0 20px 0 0;*/
    /*}*/
    /*.up {*/
        /*float: left;*/
    /*}*/
    /*.reply {*/
        /*padding: 10px 0;*/
    /*}*/
</style>
<template>
    <div class="wrap">
        <h1 class="category">{{category}}</h1>
        <div class="article" v-for="post in posts">
            <div>
                <div>
                    <h4 class="title">{{post.title}}<b-badge class="badge" v-if="post.fresh">new</b-badge></h4>
                    <p class="content">{{post.content.text}}</p>
                </div>
                <img class="image" v-if="post.content.image" :src="post.content.image">
            </div>
            <ul class="attributes">
                <li class="attribute date">{{post.date}}</li>
                <li class="attribute writer">{{post.writer}}</li>
                <li class="attribute view_count"><img class="icon" src="../../../assets/like-icon.png">{{post.like_count}}</li>
                <li class="attribute total_comment"><img class="icon" src="../../../assets/comment-icon.png">{{post.total_comment}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import bBadge from 'bootstrap-vue/es/components/badge/badge';
    export default {
        name: "post-list",
        components: {
            bBadge
        },
        props: {
            category: String,
            posts: {
                type: Array
                //[{title, date, content, writer, view_count, total_comment}]
            }
        }
    }
</script>

<style scoped>
    .wrap {
        width: 1000px;
        margin: 0 auto 150px auto;
    }
    .article {
        position: relative;
        top: 70px;
        padding: 25px 0;
        border-bottom: 1px solid gray;
    }
    .badge {
        margin: 0 10px;
    }
    .icon {
        margin: 0 5px;
    }
    .image {
        position: absolute;
        width: 100px;
        height: 100px;
        right: 0;
        bottom: 31px;
    }
    .category {
        position: relative;
        top: 50px;
    }
    .title {
        margin: 0;
    }
    .content {
        margin: 0;
        padding: 15px 0;
    }
    .attributes {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .attribute {
        float: left;
        padding: 0 20px 0 0;
    }
    .attributes::after {
        clear: both;
        display: block;
        content: '';
    }
</style>
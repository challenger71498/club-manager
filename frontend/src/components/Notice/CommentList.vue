<template>
    <div class="CommentItem__Wrapper">
        <CommentItem v-for="comment in comments" v-bind="comment" class="comment-item"></CommentItem>
    </div>
</template>

<script>
    import CommentItem from './CommentItem.vue'
    export default {
        name: "CommentList",
        components: { CommentItem },
        props: {
            comments: {
                type: Array
            }
        }
    }
</script>

<style scoped>
    .CommentItem__Wrapper .comment-item:nth-child(even) {
        background: #f7f7f7;
    }
</style>
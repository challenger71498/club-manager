<template>
    <div>
        <Comment v-for="comment in comments" :comment="comment"></Comment>
    </div>
</template>

<script>
    import Comment from './Comment/Comment.vue'
    export default {
        name: "comments",
        components: {
            Comment,
        },
        props: {
            comments: {
                type: Array
            }
        }
    }
</script>

<style scoped>

</style>
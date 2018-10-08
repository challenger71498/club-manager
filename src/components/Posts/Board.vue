<template>
    <div>
        <category :category="category" ></category>
        <PostList :posts="posts"></PostList>
    </div>
</template>

<script>
    import Category from '../Board/Category.vue'
    import PostList from '../Board/List.vue'
    // import Comments from '../Board/CommentList.vue'
    export default {
        name: "post-page",
        components: {
            PostList,
            // Comments,
            Category
        },
        data() {
            return {
                category: "공지",
            }
        }
    }
</script>

<style scoped>

</style>
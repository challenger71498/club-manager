<template>
    <div>
        <category :category="category" ></category>
        <PostList :posts="posts"></PostList>
    </div>
</template>

<script>
    import Category from '../Board/Category.vue'
    import PostList from '../Board/List.vue'
    export default {
        name: "post-page",
        components: {
            PostList,
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
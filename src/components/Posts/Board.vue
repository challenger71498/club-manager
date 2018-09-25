<template>
    <PostList :category="category" :posts="posts"></PostList>
</template>

<script>
    import PostList from './PostList.vue'
    export default {
        name: "post-page",
        components: {
            PostList,
        },
        data() {
            return {
                category: "공지",
                posts: [
                    {title: "제목1", date:"2018.09.25", content:{text:"글내용", image:"https://dummyimage.com/300x300/000/fff"}, writer:"작성자", like_count:5, total_comment:17, fresh: false },
                    {title: "제목2", date:"2018.09.26", content:{text:"글내용", image:require("../../assets/item.jpg")}, writer:"작성자", like_count:6, total_comment:18, fresh: true },
                    {title: "제목1", date:"2018.09.25", content:{text:"글내용", image:""}, writer:"작성자", like_count:5, total_comment:17, fresh: false },
                    {title: "제목2", date:"2018.09.26", content:{text:"글내용", image:""}, writer:"작성자", like_count:6, total_comment:18, fresh: true },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
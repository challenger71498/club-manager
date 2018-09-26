<template>
    <div>
        <PostList :category="category" :posts="posts"></PostList>
        <!--<Comments :comments="test"></Comments>-->
    </div>
</template>

<script>
    import PostList from './Board/PostList.vue'
    import Comments from './Comments.vue'
    export default {
        name: "post-page",
        components: {
            PostList,
            Comments
        },
        data() {
            return {
                category: "공지",
                posts: [
                    {title: "제목1", date:"2018.09.25", content:{text:"글내용", image:"https://dummyimage.com/300x300/000/fff"}, writer:"작성자", like_count:5, total_comment:17, fresh: false },
                    {title: "제목2", date:"2018.09.26", content:{text:"글내용", image:require("../../assets/item.jpg")}, writer:"작성자", like_count:6, total_comment:18, fresh: true },
                    {title: "제목1", date:"2018.09.25", content:{text:"글내용", image:""}, writer:"작성자", like_count:5, total_comment:17, fresh: false },
                    {title: "제목2", date:"2018.09.26", content:{text:"글내용", image:""}, writer:"작성자", like_count:6, total_comment:18, fresh: true },
                ],
                test: [
                    {
                        userName: "유저1", content: "댓글내용", date: "2018.09.27", likeUp: 2, likeDown: 5, replies: [
                            { userName: "유저2", content: "답글내용1", date: "2018.09.26", likeUp: 6, likeDown: 2},
                            { userName: "유저2", content: "답글내용1", date: "2018.09.26", likeUp: 6, likeDown: 2}
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
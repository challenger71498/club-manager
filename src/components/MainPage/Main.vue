<template>
    <div class="wrap">
        <Carousel class="carousel"></Carousel>
        <div class="contents">
            <UserInfo v-if="isLogged" class="user" :user="user"></UserInfo>
            <Login v-else class="user"></Login>
            <NoticePreview class="notice-preview" :contents="noticePreview"></NoticePreview>
            <PhotoPreview></PhotoPreview>
        </div>
    </div>
</template>

<script>
    import Menu from '../Menu.vue'
    import Carousel from '../BootStrap/Carousel.vue'
    import UserInfo from './UserInfo.vue'
    import NoticePreview from './NoticePreview.vue'
    import Login from './Login.vue'
    import PhotoPreview from './PhotoPreview.vue'
    export default {
        components : {
            Menu,
            Carousel,
            UserInfo,
            NoticePreview,
            Login,
            PhotoPreview,
        },
        data() {
            return {
                isLogged : false,
                menu : [
                    { text: 'ABOUT US', link: '/' },
                    { text: '게시판', link: '/' },
                    { text: '모임', link: '/' },
                ],
                user : {
                    userName : "김시진",
                    userLevel : "준회원",
                    picture : require("../../assets/if_profle_1055000.png"),
                },
                noticePreview : [
                    {title: "2018 인하대학교 창업 경진대회 개최 및 참가자 모집", date: "2018-10-01"},
                    {title: "게임제작 소모임 IGDC에서 신입회원을 모집합니다.", date: "2018-10-01"},
                    {title: "컴퓨터 연구동아리 IGRUS에서 신입회원을 모집합니다!", date: "2018-10-01"},
                    {title: "공지4", date: "2018-10-01"},
                    {title: "공지5", date: "2018-10-01"},
                ]
            }
        }
    }
</script>

<style scoped>
    .wrap {
        position: relative;
    }
    .contents {
        width: 1220px;
        margin: 10px auto;
    }
    .contents > * {
        float: left;
        margin: 10px;
    }
    .user {
    }
    .notice-preview {
    }
</style>
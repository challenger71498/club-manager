<template>
    <div class="wrap">
        <Carousel class="carousel"></Carousel>
        <div class="contents">
            <UserInfo class="user" :user="user"></UserInfo>
            <Notice_preview class="notice-preview" :contents="noticePreview"></Notice_preview>
        </div>
        <!--<Summary :small="summary"></Summary>-->
    </div>
</template>

<script>
    import Menu from '../Menu.vue'
    import Carousel from '../BootStrap/Carousel.vue'
    import UserInfo from './User-info.vue'
    import Notice_preview from './Notice_preview.vue'
    export default {
        components : {
            Menu,
            Carousel,
            UserInfo,
            Notice_preview,
        },
        data() {
            return {
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
        width: 1200px;
        margin: 20px auto;
    }
    .user {
        float: left;
    }
    .notice-preview {
        margin-left: 20px;
        float: left;
    }
</style>
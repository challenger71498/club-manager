<template>
    <div class="wrap">
        <Carousel class="carousel"></Carousel>
        <div class="contents">
            <UserInfo v-if="isLogged" class="user" :user="user" @logout="onLogout"></UserInfo>
            <Login v-else class="user" @login="onLogin"></Login>
            <NoticePreview class="notice-preview" :contents="noticePreview"></NoticePreview>
            <PhotoPreview :photos="PhotoPreviewData"></PhotoPreview>
            <DocumentPreview :list="DocumentPreviewData"></DocumentPreview>
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
    import DocumentPreview from './DocumentPreview.vue'
    export default {
        components : {
            Menu,
            Carousel,
            UserInfo,
            NoticePreview,
            Login,
            PhotoPreview,
            DocumentPreview,
        },
        methods: {
            onLogin(member) {
                this.isLogged = true;
                this.user.userName = member.name;
                this.user.userLevel = member.level;
            },

            onLogout() {
                this.isLogged = false;
            }
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
                    userName : '',
                    userLevel : '',
                    picture : require("../../assets/if_profle_1055000.png"),
                },
                noticePreview : [
                    {title: "2018 인하대학교 창업 경진대회 개최 및 참가자 모집", date: "2018-10-01"},
                    {title: "게임제작 소모임 IGDC에서 신입회원을 모집합니다.", date: "2018-10-01"},
                    {title: "컴퓨터 연구동아리 IGRUS에서 신입회원을 모집합니다!", date: "2018-10-01"},
                    {title: "공지4", date: "2018-10-01"},
                    {title: "공지5", date: "2018-10-01"},
                ],
                PhotoPreviewData : [
                    "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&h=3500",
                    "https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&h=350,",
                    "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&h=350",
                    "https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&h=350",
                    "https://images.pexels.com/photos/825262/pexels-photo-825262.jpeg?auto=compress&cs=tinysrgb&h=350",
                    "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&h=350"
                ],
                DocumentPreviewData : [
                    {
                        to: {
                            name: 'BoardDocument',
                            params: {
                                board_idx: 1,
                                document_idx: 1,
                            },
                        },
                        idx: 1234,
                        title: "글 제목",
                        register_date: new Date().toISOString().substr(0, 10),
                        writer_name: '작성자',
                        view_count: 5
                    },
                    {
                        to: {
                            name: 'BoardDocument',
                            params: {
                                board_idx: 1,
                                document_idx: 1,
                            },
                        },
                        idx: 1234,
                        title: "글 제목",
                        register_date: new Date().toISOString().substr(0, 10),
                        writer_name: '작성자',
                        view_count: 5
                    },
                    {
                        to: {
                            name: 'BoardDocument',
                            params: {
                                board_idx: 1,
                                document_idx: 1,
                            },
                        },
                        idx: 1234,
                        title: "글 제목",
                        register_date: new Date().toISOString().substr(0, 10),
                        writer_name: '작성자',
                        view_count: 5
                    },
                    {
                        to: {
                            name: 'BoardDocument',
                            params: {
                                board_idx: 1,
                                document_idx: 1,
                            },
                        },
                        idx: 1234,
                        title: "글 제목",
                        register_date: new Date().toISOString().substr(0, 10),
                        writer_name: '작성자',
                        view_count: 5
                    },
                    {
                        to: {
                            name: 'BoardDocument',
                            params: {
                                board_idx: 1,
                                document_idx: 1,
                            },
                        },
                        idx: 1234,
                        title: "글 제목",
                        register_date: new Date().toISOString().substr(0, 10),
                        writer_name: '작성자',
                        view_count: 5
                    },
                    {
                        to: {
                            name: 'BoardDocument',
                            params: {
                                board_idx: 1,
                                document_idx: 1,
                            },
                        },
                        idx: 1234,
                        title: "글 제목",
                        register_date: new Date().toISOString().substr(0, 10),
                        writer_name: '작성자',
                        view_count: 5
                    },

                    {
                        to: {
                            name: 'BoardDocument',
                            params: {
                                board_idx: 1,
                                document_idx: 1,
                            },
                        },
                        idx: 1234,
                        title: "글 제목",
                        register_date: new Date().toISOString().substr(0, 10),
                        writer_name: '작성자',
                        view_count: 5
                    },
                ]
            }
        },
        mounted () {
            this.isLogged = Boolean(localStorage.token);

            this.$http.get('/api/members/token').then(response => {
                this.user.userName = response.data.name;
                this.user.level = response.data.level;
            });
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
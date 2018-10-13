<template>
    <div class="wrap">
        <Carousel class="carousel"></Carousel>
        <div class="contents">
            <Login v-if="$member.isGuest" class="user" @login="onLogin"></Login>
            <UserInfo v-else class="user" v-bind="$member.$data" @logout="onLogout"></UserInfo>
            <NoticePreview class="notice-preview" :contents="noticePreview"></NoticePreview>
            <PhotoPreview :photos="photos"></PhotoPreview>
            <DocumentPreview :list="documents"></DocumentPreview>
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
            onLogin(id, password) {
                this.$member.login(id, password).catch(this.$util.handleError);
            },

            onLogout() {
                this.$member.logout();
            }
        },
        created() {
            this.$http.get("/api/notices").then(response => {
                this.noticeItems = response.data.items.slice(0, 5);
            }).catch(err => {
                if (!err.response.data || !err.response.data.message) {
                    alert('알 수 없는 오류가 발생했습니다.');
                    return;
                }

                alert(err.response.data.message);
            });
            this.$http.get("/api/documents/recent?count=7").then(response => {
                this.documents = response.data.items;
                console.log(this.documents)
            }).catch(err => {
                if (!err.response.data || !err.response.data.message) {
                    alert('알 수 없는 오류가 발생했습니다.');
                    return;
                }

                alert(err.response.data.message);
            });
        },
        computed: {
            noticePreview() {
                return this.noticeItems.map(item => {
                    return {
                        ...item,
                        to: {
                            name: 'BoardDocument',
                            params: {
                                board_idx: 0,
                                document_idx: item.idx
                            }
                        }
                    }
                });
            }
        },
        data() {
            return {
                menu : [
                    { text: 'ABOUT US', link: '/' },
                    { text: '게시판', link: '/' },
                    { text: '모임', link: '/' },
                ],
                noticeItems : [],
                photos : [
                    "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&h=3500",
                    "https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&h=350,",
                    "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&h=350",
                    "https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&h=350",
                    "https://images.pexels.com/photos/825262/pexels-photo-825262.jpeg?auto=compress&cs=tinysrgb&h=350",
                    "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&h=350"
                ],
                documents : []
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
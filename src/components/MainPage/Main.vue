<template>
    <div class="wrap">
        <Carousel class="carousel"></Carousel>
        <Summary :small="summary"></Summary>
    </div>
</template>

<script>
    import Menu from '../Menu.vue'
    import Carousel from '../BootStrap/Carousel.vue'
    import Summary from './Summarys.vue'
    export default {
        components : {
            Menu,
            Carousel,
            Summary,
        },
        data() {
            return {
                menu : [
                    { text: 'ABOUT US', link: '/' },
                    { text: '게시판', link: '/' },
                    { text: '모임', link: '/' },
                ],
                summary : [
                    { category:"공지", title:"제목1", summary:"내용내용내용1" },
                    { category:"소개", title:"제목2", summary:"내용내용내용2" },
                    { category:"EVENT", title:"제목3", summary:"내용내용내용3" },
                ]
            }
        }
    }
</script>

<style scoped>
    .wrap {
        position: relative;
    }
    .carousel {
    }
</style>
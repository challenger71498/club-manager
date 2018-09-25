<template>
    <div class="content_wrap">
        <img class="content_image" :src="image">
        <div class="content_text">{{text}}</div>
    </div>
</template>

<script>
    export default {
        name: "contents",
        props: {
            image: String,
            text: String,
        },
    }
</script>

<style scoped>
    .content_wrap {
        position: relative;
        width: 100%;
        height: 700px;
        margin: 80px 0;
    }
    .content_image {
        height: 700px;
        float: left;
    }
    .content_text {
        color: black;
    }
</style>
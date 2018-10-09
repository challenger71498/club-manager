<template>
    <div class="PhotoPreview__Wrapper">
        <div class="title">Photo</div>
        <Item v-for="photo in photos" :url=photo></Item>
    </div>
</template>

<script>
    import Item from './PhotoPreview_Item.vue'
    export default {
        components: {
            Item
        },
        props: {
            photos: Array
        },
    }
</script>

<style scoped>
    .PhotoPreview__Wrapper {
        width: 590px;
        height: 350px;
        background-color: #e8e8e8;
        border: 1px solid lightgray;
        padding: 24px;
    }
    .PhotoPreview__Wrapper .title {
        height: 50px;
        font: 20px lighter;
        color: darkgray;
        padding: 0 10px 10px 10px;
    }
</style>
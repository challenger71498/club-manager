<template>
    <div class="PhotoPreview__Wrapper">
        <div class="title">Recent Photo</div>
        <Item v-for="n in 6" :url=url></Item>
    </div>
</template>

<script>
    import Item from './PhotoPreview_Item.vue'
    export default {
        components: {
            Item
        },
        data() {
            return {
                url: 'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&h=350'
            }
        }
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
        padding: 10px;
    }
</style>
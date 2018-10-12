<template>
    <div class="cell">
        <img :src=url :alt=alt>
    </div>
</template>

<script>
    export default {
        name: "photo-preview_-item",
        props: {
            url: String,
            alt: String,
        }
    }
</script>

<style scoped>
    .cell {
        width: 180px;
        height: 125px;
        padding: 10px;
        float: left;
        border: 1px solid #e2d8de;
    }
    .cell img {
        width: 100%;
        height: 100%;
    }
</style>
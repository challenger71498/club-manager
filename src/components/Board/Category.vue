<template>
    <div class="wrap">
        <div class="banner">
            {{category}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Category",
        props: {
            category: String,
        }
    }
</script>

<style scoped>
    .banner {
        width: 100%;
        height: 100px;
        background-color: black;
        color: white;
        font-size: 24px;
    }
</style>
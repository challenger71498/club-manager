<template>
    <div class="DocumentPreview__Wrapper">
        <div class="title">NewsFeed</div>
        <DocumentPreviewList :items="list"></DocumentPreviewList>
    </div>
</template>

<script>
    import DocumentPreviewList from './DocumentPreview_Items.vue'
    export default {
        name: "document-preview",
        components: { DocumentPreviewList },
        props: {
            list : Array
        }
    }
</script>

<style scoped>
    .DocumentPreview__Wrapper {
        width: 590px;
        height: 350px;
        padding: 24px;
        background-color: #e8e8e8;
        border: 1px solid lightgray;
    }
    .DocumentPreview__Wrapper .title {
        height: 50px;
        font: 20px lighter;
        color: darkgray;
        padding: 0 10px 10px 10px;
    }
</style>
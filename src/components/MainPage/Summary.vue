<template>
    <div class="wrap">
        <div class="contents">
            <h5 class="category">{{contents.category}}</h5>
            <h2 class="title">{{contents.title}}</h2>
            <p class="summary">{{contents.summary}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "summary-small",
        props: {
            contents : {
                category: String,
                title: String,
                summary: String
            }
        }
    }
</script>

<style scoped>
    .wrap {
        width: 33.33%;
        height: 200px;
        /*border: 1px solid gray;*/
    }
    .contents {
        position: relative;
        left: 20px;
        top: 20px
    }
    .category {
        padding: 10px 0;
    }
    .title {
        font-weight: bold;
    }
    .summary {
    }
</style>
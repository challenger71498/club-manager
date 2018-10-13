<template>
    <div class="NoticeLayout__Wrapper">
        <Category :category="name"></Category>
        <div class="view">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Category from '@components/Board/Category.vue'
    export default {
        name: 'NoticeLayout',
        components: {
            Category,
        },
    };
</script>

<style scoped>
    .view {
        width: 1200px;
        margin: 20px auto;
        padding: 0;
    }
</style>

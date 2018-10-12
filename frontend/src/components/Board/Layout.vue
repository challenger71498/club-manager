<template>
    <div class="BoardLayout__Wrapper">
        <Category :category="name"></Category>
        <div class="view">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Category from './Category.vue'
    export default {
        name: 'BoardLayout',
        methods: {
        },
        components: {
            Category
        },
        data () {
            let idx = parseInt(this.$route.params.board_idx);

            return {
                name: `게시판 ${idx}`
            };
        }
    };
</script>

<style scoped>
    .view {
        width: 1200px;
        margin: 20px auto;
        padding: 0;
    }
</style>

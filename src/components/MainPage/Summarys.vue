<template>
    <div class="wrap">
        <div class="wrap_small clearfix">
            <Summary class="summary" v-for="item in small" :contents="item"></Summary>
        </div>
    </div>
</template>

<script>
    import Summary from './Summary.vue'
    export default {
        components: {
            Summary,
        },
        props: {
            small: {
                type: Array,
                default: () => []
            },
            large: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>
    .wrap {

    }
    .summary {
        float: left;
    }
</style>
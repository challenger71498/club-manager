<template>
    <section class="hash-page">
        <slot></slot>
    </section>
</template>

<script>
    export default {
        watch: {
            $route () {
                console.log(this.$route);
            }
        },
        data () {
            return {};
        }
    };
</script>

<style scoped>
    .hash-page {

    }
</style>

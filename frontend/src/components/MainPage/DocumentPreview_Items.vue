<template>
    <table class="ListView__Wrapper">
        <tbody>
            <ListItem class="document" v-for="item in items" v-bind="item"></ListItem>
        </tbody>
    </table>
</template>

<script>
    import ListItem from './DocumentPreview_Item';

    export default {
        name: 'ListView',
        components: { ListItem },
        props: {
            items: Array
        }
    };
</script>

<style scoped>
    .ListView__Wrapper {
        width: 100%;
    }
</style>

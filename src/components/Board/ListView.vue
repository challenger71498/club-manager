<template>
    <div class="ListView__Wrapper">
        <ListItem class="document" v-for="item in items" v-bind="item"></ListItem>
    </div>
</template>

<script>
    import ListItem from './LIstItem';

    export default {
        name: 'ListView',
        components: { ListItem },
        props: {
            items: Array
        }
    };
</script>

<style scoped>

</style>

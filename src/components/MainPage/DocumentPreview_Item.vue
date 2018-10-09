<template>
    <tr class="ListItem__Wrapper">
        <td class="idx">{{ idx }}</td>
        <td class="title">
            <router-link :to="to">{{ title }}</router-link>
        </td>
        <td class="writer_name">{{ writer_name }}</td>
        <td class="date">{{ register_date }}</td>
        <td class="view_count">{{ view_count }}</td>
    </tr>
</template>

<script>
    export default {
        name: "document-preview_-item",
        props: {
            to: [Object, String],
            idx: Number,
            title: String,
            register_date: String,
            writer_name: String,
            view_count: Number,
        }
    }
</script>

<style scoped>
    .ListItem__Wrapper {
        display: table-row;
        border: solid #e4e4e4;
        border-width: 1px 0;
    }
    .ListItem__Wrapper td {
        padding: 10px 20px;
        margin: 0;
        display: table-cell;
        text-align: left;
        width: 1%;
        white-space: nowrap;
        font-size: 13px;
    }
    .ListItem__Wrapper .title {
        width: auto;
        white-space: normal;
    }
</style>
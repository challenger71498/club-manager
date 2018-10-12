<template>
    <tr class="ListItem__Wrapper">
        <td class="idx">{{idx}}</td>
        <td class="title">
            <router-link :to="to">{{ title }}</router-link>
        </td>
        <td class="date">{{ date }}</td>
        <td class="writer">{{ writer_name }}</td>
        <td class="view_count"><img class="icon" src="../../assets/view-icon.png">{{ view_count }}</td>
        <td class="total_comment"><img class="icon" src="../../assets/comment-icon.png">{{ total_comment }}</td>
    </tr>
</template>

<script>
    export default {
        name: 'ListItem',
        props: {
            to: [Object, String],
            title: String,
            idx: Number,
            register_date: String,
            writer: Number,
            writer_name: String,
            view_count: Number,
            total_comment: Number
        },
        computed: {
            date () {
                return this.register_date.substr(0, 10);
            }
        }
    };
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
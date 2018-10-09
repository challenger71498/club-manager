<template>
    <table class="ListView__Wrapper">
        <thead>
            <tr class="table_row">
                <th class="tight">번호</th>
                <th class="title">제목</th>
                <th class="tight">작성일</th>
                <th class="tight">작성자</th>
                <th class="tight">조회수</th>
                <th class="tight">댓글수</th>
            </tr>
        </thead>
        <tbody>
            <ListItem class="document" v-for="item in items" v-bind="item"></ListItem>
        </tbody>
    </table>
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
    .ListView__Wrapper {
        width: 100%;
    }
    .ListView__Wrapper th {
        padding: 10px;
        text-align: left;
        font-size: 13px;
        text-align: center;
    }
    .ListView__Wrapper .tight {
        width: 1%;
        white-space: nowrap;
    }
    .ListView__Wrapper .table_row {
        background-color: #e8e8e8;
    }
</style>

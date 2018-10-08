<template>
    <router-link class="ListItem__Wrapper" :to="to">
        <div>
            <div>
                <h4 class="title">{{ title }}<b-badge class="badge" v-if="fresh">new</b-badge></h4>
                <p class="content">{{ content }}</p>
            </div>
            <!--<img class="image" v-if="post.content.image" :src="post.content.image">-->
        </div>

        <ul class="attributes">
            <li class="attribute date">{{ register_date }}</li>
            <li class="attribute writer">{{ writer_name }}</li>
            <li class="attribute view_count"><img class="icon" src="../../assets/view-icon.png">{{ view_count }}</li>
            <li class="attribute total_comment"><img class="icon" src="../../assets/comment-icon.png">{{ total_comment }}</li>
        </ul>
    </router-link>
</template>

<script>
    import bBadge from 'bootstrap-vue/es/components/badge/badge';
    export default {
        name: 'ListItem',
        components: {
            bBadge
        },
        props: {
            to: [Object, String],
            title: String,
            content: String,
            fresh: Boolean,
            register_date: String,
            writer: Number,
            writer_name: String,
            view_count: Number,
            total_comment: Number
        }
    };
</script>

<style scoped>
    .ListItem__Wrapper {
        display: b;
    }
</style>
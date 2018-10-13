import Layout from '@components/Board/Layout.vue';
import List from '@components/Board/List.vue';
import Document from '@components/Board/Document.vue';
import Write from '@components/Board/DocumentWrite.vue';

export default {
    path: '/board/:board_idx(\\d+)',
    component: Layout,
    children: [
        {
            path: '',
            name: 'BoardList',
            component: List,
        },
        {
            path: 'read/:document_idx(\\d+)',
            name: 'BoardDocument',
            component: Document,
        },
        {
            path: 'write',
            name: 'BoardWrite',
            component: Write,
        },
    ],
};
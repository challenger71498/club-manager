import Layout from '@components/Notice/Layout.vue';
import List from '@components/Notice/List.vue';
import Document from '@components/Notice/Document.vue';
import Write from '@components/Notice/DocumentWrite.vue';

export default {
    path: '/notice',
    component: Layout,
    children: [
        {
            path: '',
            name: 'NoticeList',
            component: List,
        },
        {
            path: 'read/:document_idx(\\d+)',
            name: 'NoticeDocument',
            component: Document,
        },
        {
            path: 'write',
            name: 'NoticeWrite',
            component: Write,
        },
    ],
};
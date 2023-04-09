import { createRouter, createWebHistory } from "vue-router";
// Components
import DockBottom from '@/components/music/DockBottom.vue';
// Views
import HomeView from '@/views/music/Home.vue';

const routes = [
    // Root
    {
        path: '/music/',
        name: 'root',
        redirect: {name:'home'}
    },
    // Home
    {
        path: '/music/home/',
        name: 'home',
        components: {
            default: HomeView,
            dockBottom: DockBottom,
        },
        props: {}
    },
    // Trends
    {
        path: '/music/home/trends/',
        name: 'trends',
        components: {},
        props: {}
    },
    // Tops
    {
        path: '/music/home/tops/',
        name: 'tops',
        components: {},
        props: {}
    },
    // Suggests
    {
        path: '/music/home/suggests/',
        name: 'suggests',
        components: {},
        props: {}
    },
    // PlayLists
    {
        path: '/music/playlists/',
        name: 'playlists',
        components: {},
        props: {}
    },
    // Search and Discover
    {
        path: '/music/search/',
        name: 'search',
        components: {},
        props: {}
    },
    // Settings
    {},
    // Wrong URL
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    strict: true
})

export default router
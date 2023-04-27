import { createRouter, createWebHistory } from 'vue-router'

// Components
import DockRight from '@/components/music/docks/DockRight.vue';
import DockBottom from '@/components/music/docks/DockBottom.vue';
import TopIntro from '@/components/music/TopIntro.vue';
import Footer from '@/components/music/Footer.vue';
import TrendsBox from '@/components/music/boxes/TrendsBox.vue';
import LatestsBox from '@/components/music/boxes/LatestsBox.vue';
import SuggestsBox from '@/components/music/boxes/SuggestsBox.vue';
// Views
import HomeView from '@/views/music/Home.vue';
import PlayListsView from '@/views/music/PlayLists.vue';
import SearchView from '@/views/music/Search.vue';
import TrendsView from '@/views/music/Trends.vue';
import LatestsView from '@/views/music/Latests.vue';
import SuggestsView from '@/views/music/Suggests.vue';
import SettingsView from '@/views/music/Settings.vue';

const routes = [
    // Main Root
    {
        path: '/',
        redirect: {name:'home'},
        name: 'root'
    },
    // Main About Us
    {
        path: '/about/',
        name: 'about'
    },
    // Main Contact Us
    {
        path: '/contact/',
        name: 'contact'
    },
    // Main Partnership
    {
        path: '/partnership/',
        name: 'partnership'
    },
    // Music Root
    {
        path: '/music/',
        redirect: {name:'home'},
        name: 'musicRoot',
    },
    // Music Home
    {
        path: '/music/home/',
        name: 'home',
        components: {
            default: HomeView,
            dockRight: DockRight,
            dockBottom: DockBottom,
            topIntro: TopIntro,
            trendsBox: TrendsBox,
            latestsBox: LatestsBox,
            suggestsBox: SuggestsBox,
            footer: Footer
        },
        props: {
            dockRight: {optState: 'home'}
        },
    },
    // Music PlayLists
    {
        path: '/music/playlists/',
        name: 'playLists',
        components: {
            default: PlayListsView,
            dockRight: DockRight,
            dockBottom: DockBottom,
            topIntro: TopIntro,
            footer: Footer
        },
        props: {
            dockRight: {optState: 'playlists'}
        },
    },
    // Music Search and Discover
    {
        path: '/music/search/',
        name: 'search',
        components: {
            default: SearchView,
            dockRight: DockRight,
            dockBottom: DockBottom,
            topIntro: TopIntro,
            footer: Footer
        },
        props: {
            dockRight: {optState: 'search'}
        },
    },
    // Music Trends
    {
        path: '/music/home/trends/',
        name: 'trends',
        components: {
            default: TrendsView,
            dockRight: DockRight,
            dockBottom: DockBottom,
            topIntro: TopIntro,
            footer: Footer
        },
        props: {
            dockRight: {optState: 'home'}
        },
    },
    // Music Tops
    {
        path : '/music/home/latests/',
        name : 'latests',
        components: {
            default: LatestsView,
            dockRight: DockRight,
            dockBottom: DockBottom,
            topIntro: TopIntro,
            footer: Footer
        },
        props: {
            dockRight: {optState: 'home'}
        },
    },
    // Music Suggests
    {
        path: '/music/home/suggests/',
        name : 'suggests',
        components: {
            default: SuggestsView,
            dockRight: DockRight,
            dockBottom: DockBottom,
            topIntro: TopIntro,
            footer: Footer
        },
        props: {
            dockRight: {optState: 'home'}
        },
    },
    // Music Settings
    {
        path: '/music/home/settings/',
        name: 'settings',
        components : {
            default: SettingsView,
            dockRight: DockRight,
            dockBottom: DockBottom,
            topIntro: TopIntro,
            footer: Footer
        },
        props: {
            dockRight: {optState: 'home'}
        },
    },
    // Account Root
    {
        path: '/account/',
        name: 'accountRoot',
        redirect: {name:'accountPanel'}
    },
    // Account Panel
    {
        path: '/account/panel/',
        name: 'accountPanel',
    },
    // Account Login
    {
        path: '/account/login/',
        name: 'accountLogin',
    },
    // Account Signup
    {
        path: '/account/signup/',
        name: 'accountSignup',
    }
]

const router = createRouter({
    history: createWebHistory(),
    sensitive: true,
    routes
})

export default router
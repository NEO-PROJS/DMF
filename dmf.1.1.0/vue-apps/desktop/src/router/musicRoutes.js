import DockRight from '@/components/music/docks/DockRight.vue';
import DockBottom from '@/components/music/docks/DockBottom.vue';
import TopIntro from '@/components/music/TopIntro.vue';
import Footer from '@/components/music/Footer.vue';
import TrendsBox from '@/components/music/boxes/TrendsBox.vue';
import LatestsBox from '@/components/music/boxes/LatestsBox.vue';
import SuggestsBox from '@/components/music/boxes/SuggestsBox.vue';
// Views
import HomeView from '@/views/music/Home.vue';

const mr = [
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
]

export default mr
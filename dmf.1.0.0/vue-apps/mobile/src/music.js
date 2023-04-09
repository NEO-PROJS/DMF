import { createApp } from 'vue';

import MusicAppVue from '@/apps/MusicApp.vue';
import router from '@/router/musicR.js';

const musicApp = createApp(MusicAppVue);

musicApp
    .use(router)
    .mount('#music-app');
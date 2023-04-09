import { createApp } from 'vue';
import MainApp from '@/apps/Main.vue';
import router from '@/router/mainR.js';

const mainApp = createApp(MainApp);

mainApp
    .use(router)
    .mount('#main-app');
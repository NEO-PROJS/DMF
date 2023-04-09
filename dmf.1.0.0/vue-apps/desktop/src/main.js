import { createApp } from 'vue'
import MainAppVue from '@/apps/MainApp.vue'
import router from  '@/router/mainR'

const mainApp = createApp(MainAppVue)

mainApp
    .use(router)
    .mount('#main-app')
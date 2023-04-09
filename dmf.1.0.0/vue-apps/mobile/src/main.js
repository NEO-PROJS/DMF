import { createApp } from 'vue'
import MainAppVue from '@/apps/MainApp.vue'

const mainApp = createApp(MainAppVue)

mainApp.mount('#main-app')
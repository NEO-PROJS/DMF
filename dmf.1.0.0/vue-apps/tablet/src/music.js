import { createApp } from 'vue'
import MusicAppVue from '@/apps/MusicApp.vue'

const musicApp = createApp(MusicAppVue)

musicApp.mount('#music-app')
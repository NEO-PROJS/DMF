import { createApp } from 'vue'
import AccountAppVue from '@/apps/AccountApp.vue'

const accountApp = createApp(AccountAppVue)

accountApp.mount('#account-app')
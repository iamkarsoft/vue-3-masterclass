import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router.js'
import AppDate from '@/components/AppDate.vue'

const app = createApp(App)
app.use(router)
app.component('AppDate', AppDate)
app.mount('#app')

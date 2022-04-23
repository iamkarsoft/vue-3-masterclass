import PageHome from '@/components/PageHome.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    components: PageHome
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

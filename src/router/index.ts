import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import ScannerPage from '../views/ScannerPage.vue'
import Chip8Emu from '../views/Chip8.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/scanner',
    name: 'Scanner',
    component: ScannerPage
  },
  {
    path: '/chip8',
    name: 'Chip8Emu',
    component: Chip8Emu
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

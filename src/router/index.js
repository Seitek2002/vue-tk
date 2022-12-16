import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main' },
    component: HomeView
  },
  {
    path: '/news',
    name: 'news',
    meta: { layout: 'main' },
    component: () => import('../views/News.vue')
  },
  {
    path: '/actions',
    name: 'actions',
    meta: { layout: 'main' },
    component: () => import('../views/Actions.vue')
  },
  {
    path: '/info',
    name: 'info',
    meta: { layout: 'main' },
    component: () => import('../views/Info.vue')
  },
  {
    path: '/infodetails',
    name: 'infodetails',
    meta: { layout: 'main' },
    component: () => import('../views/InfoDetails.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

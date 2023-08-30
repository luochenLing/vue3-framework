import {createWebHistory,createRouter} from 'vue-router'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/home', component: () => import('~/views/home/index.vue') },
  { path: '/login', component: () => import('~/views/login/index.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router

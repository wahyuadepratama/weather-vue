import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '../views/LayoutView.vue'
import ProductDisplay from '../components/ProductDisplay.vue'
import SocksView from '../views/SocksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayoutView,
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../views/DashboardView.vue')
        },
        {
          path: 'category',
          name: 'category',
          component: () => import('../views/CategoryView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
      ]
    },
    {
      path: '/pdisplay',
      name: 'pdisplay',
      component: ProductDisplay
    },
    {
      path: '/socks',
      name: 'socks',
      component: SocksView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
  ]
})

export default router

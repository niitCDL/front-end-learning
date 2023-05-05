import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import LayoutView from '../views/LayoutView.vue'
import ItTechnologyView from '../views/ItTechnologyView.vue'
import DownLoadView from '../views/DownLoadView.vue'
import BookVipView from '../views/BookVipView.vue'
import TestView from '../views/TestView.vue'
import TestView2 from '../views/TestView2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/reg',
      name: 'reg',
      component: RegisterView
    },
    {
      path: '/',
      name: 'layout',
      component: LayoutView,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/vip',
          name: 'vip',
          component: BookVipView,
        },
        {
          path: '/download',
          name: 'download',
          component: DownLoadView,
        },
        {
          path: '/it',
          name: 'it',
          component: ItTechnologyView,
          redirect: '/test',
          children: [
            {
              path: '/test',
              name: 'test',
              component: TestView,
            },
            {
              path: '/test2',
              name: 'test2',
              component: TestView2,
            },
          ]
        },
      ]
    }
  ]
})

export default router

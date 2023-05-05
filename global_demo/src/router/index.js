import { createRouter, createWebHistory } from 'vue-router'
import ReactiveView from '../views/ReactiveView.vue'
import TestUseView from '../views/TestUseView.vue'
import HomeWorkView from '../views/HomeWorkView.vue'
import UseView from '../views/UseView.vue'
import MyToDocsView from '../views/MyToDocsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/reactive',
      name: 'reactive',
      component: ReactiveView
    },
    {
      path: '/homework',
      name: 'homework',
      component: HomeWorkView
    },
    {
      path: '/test',
      name: 'test',
      component: TestUseView
    },
    {
      path: '/docs',
      name: 'docs',
      component: MyToDocsView
    },
    {
      path: '/use',
      name: 'use',
      component: UseView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

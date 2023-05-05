import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MyView from '../views/MyView.vue'
import ItemDetailsView from '../views/ItemDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MyView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: MyView
    },
    {
      path: '/items/:id',
      name: 'item-details',
      props:true,
      component:ItemDetailsView
    }
  ]
})

export default router

import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

import Index from '@/pages/index.vue'
import About from '@/pages/about.vue'
import NotFound from '@/pages/404.vue'
import Login from '@/pages/Login.vue'
import Admin from '@/layouts/admin.vue'
import List from '@/pages/goods/list.vue'
import Banner from '@/pages/goods/banner.vue'
import { reactive } from "vue"

//静态路由 所有人共享
const routes = reactive([
    {
        path: '/',
        name: 'admin',
        component: Admin,
        children: []
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/login',
        name: "login",
        component: Login,
        meta: {
            title: '登录页'
        }
    }
])

//动态路由
const asyncRoutes = [
    {
        path: '/',
        name: '/',
        component: Index,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/goods/list',
        name: "goods/list",
        component: List,
        meta: {
            title: '商品管理'
        }
    },
    {
        path: '/goodsideshow',
        name: "goodsideshow",
        component: Banner,
        meta: {
            title: '商品轮播图管理'
        }
    }
]

export const router = createRouter({
    routes,
    history: createWebHistory(),
})

//动态添加路由的方法
export function addRoutes(menus) {
    //是否有新的路由
    let hasNewRoutes = false;
    const findAndRoutesByMenus = (arr) => {
        console.log('arr')
        console.log(arr);
        arr.forEach(e => {
            const item = asyncRoutes.find(obj => obj.path == e.frontpath)
            if (item && !router.hasRoute(item.path)) {
                router.addRoute('admin', item);
                hasNewRoutes = true;
            }
            if (e.child && e.child.length > 0) {
                findAndRoutesByMenus(e.child);
            }
        });
    }
    findAndRoutesByMenus(menus);
    return hasNewRoutes;
}

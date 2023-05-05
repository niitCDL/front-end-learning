import { router,addRoutes } from '@/router'

import { getToken } from '@/composables/auth'

import { toast, showFullLoading, hideFullLoading } from './composables/util'

import { useAdminStore } from '@/store'


// 全局路由全局守卫
router.beforeEach((to, from, next) => {
    const store = useAdminStore();
    const { getInfo } = store
    //显示loading
    showFullLoading();

    const token = getToken();

    //当没有token的时候却登录的不是登录界面
    if (!token && to.path != '/login') {
        toast('请先登录', 'error');
        return next({ path: '/login' })
    }
    //当有token的时候却访问的是登录界面
    if (token && to.path == '/login') {
        toast('请勿重复登录', 'error');
        return next({ path: from.path ? from.path : '/' })
    }
    // 如果用户登录了，则获取用户信息并存储在 pinia 中
    let hasNewRoutes = false
    if (token) {
        getInfo().then((res) => {
            hasNewRoutes = addRoutes(res.data.menus)
        })
    }

    //动态拼接界面title
    let title = '极客空间 - ' + (to.meta.title ? to.meta.title : '');
    document.title = title;
    next();
})

//全局后置守卫
router.afterEach((to, from) => {
    hideFullLoading();
})
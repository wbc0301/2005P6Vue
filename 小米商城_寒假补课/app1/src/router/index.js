import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'//重定向
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/all',
        name: 'all',
        component: () => import('../views/all.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/about.vue')
    },
    {
        path: '/collect',
        name: 'collect',
        meta: {
            needLogin: true, //必须登录
        },
        component: () => import('../views/collect.vue')
    },
    {
        path: '/order',
        name: 'order',
        meta: {
            needLogin: true, //必须登录
        },
        component: () => import('../views/order.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        meta: {
            needLogin: true, //必须登录
        },
        component: () => import('../views/cart.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
// 1: 看用户去的路由是不是需要登录的路由
// 2：如果需要登录  就要看用户是否已经登录

import $store from '../store'

router.beforeEach((to, from , next) => {
    if(to.meta.needLogin) {// 去需要登录的路由
        if($store.state.user.userName) { // 已登录
            next();
        }else{ // 未登录
            $store.commit('changeShowLogin', true)
            router.push('/home')// 重定向到首页
        }
    }else {// 去不需要登录的路由
        next();
    }
})

export default router

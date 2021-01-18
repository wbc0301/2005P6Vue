import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue' // 没有使用懒加载的方式引入组件 所有路由的组件都会打包到app.js这个文件中
// import list from '../views/list.vue'
// import detail from '../views/detail.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/list',
        name: 'list',
        // component: list,
        // 魔法字符串
        component: () => import(/* webpackChunkName: "list" */ '../views/list.vue') // 路由懒加载 为了提升首页加载速度
    },
    {
        path: '/detail',
        name: 'detail',
        // component: detail,
        component: () => import(/* webpackChunkName: "detail" */ '../views/detail.vue') // 路由懒加载
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

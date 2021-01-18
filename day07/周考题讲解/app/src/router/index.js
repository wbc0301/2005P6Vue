import Vue from 'vue'
import VueRouter from 'vue-router' // 引入vue-router包

import home from  '@/views/home' // 引入组件
import list from  '@/views/list'
import detail from  '@/views/detail'

Vue.use(VueRouter) // use 后 我们就可以在项目中使用路由

const routes = [ // 路由跳转的一个一个的规则  一个对象就是一个规则\
    {
        path: '/home',
        component: home,
        name: 'home',
    },
    {
        path: '/list',
        component: list,
        name: 'list',
    },
    {
        path: '/detail',
        component: detail,
        name: 'detail',
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

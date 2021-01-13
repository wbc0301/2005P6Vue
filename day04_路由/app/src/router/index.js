import Vue from 'vue'
import VueRouter from 'vue-router' // 引入vue-router包

import Home from '../views/Home.vue' // 引入要展示的组件
import About from '../views/About.vue'
import detail from '../views/detail.vue'

Vue.use(VueRouter) // use 后 我们就可以在项目中使用路由

const routes = [ // 路由跳转的一个一个的规则  一个对象就是一个规则
    {
        path: '/',  // url
        name: 'Home', // 当前路由规则的名字 可以没有
        component: Home  // 当前路由要展示的组件
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/detail',
        name: 'detail',
        component: detail
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

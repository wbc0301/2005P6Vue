import Vue from 'vue'
import VueRouter from 'vue-router' // 引入vue-router包

import one from '@/views/one';
import two from '@/views/two';
import three from '@/views/three';
import four from '@/views/four';

Vue.use(VueRouter) // use 后 我们就可以在项目中使用路由

const routes = [ // 路由跳转的一个一个的规则  一个对象就是一个规则\
    {
        path: '/',
        redirect: '/one' // 重定向到 /one
    },
    {
        path: '/one',
        name: 'one',
        component: one,
    },
    {
        path: '/two',
        name: 'two',
        component: two,
    },
    {
        path: '/three',
        name: 'three',
        component: three,
    },
    {
        path: '/four',
        name: 'four',
        component: four,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

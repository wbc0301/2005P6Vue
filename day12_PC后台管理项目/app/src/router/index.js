import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/student',
        name: 'student',
        component: () => import('../views/student/index.vue')
    },
    {
        path: '/teacher',
        name: 'teacher',
        component: () => import('../views/teacher/index.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

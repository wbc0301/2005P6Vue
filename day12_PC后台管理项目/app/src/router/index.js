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
        redirect: '/student/student1',
        
        // 如果一个路由有子路由，他的组件中就必须有一个 <router-view />
        component: () => import('../views/student/index.vue'),
        children: [ // 子路由
            {
                path: 'student1', // 不能带/      如果要带/ 就要写完整路径： /student/student1
                name: 'student1',
                component: () => import('../views/student/student1.vue')
            },
            {
                path: 'student2', // 不能带/      如果要带/ 就要写完整路径： /student/student2
                name: 'student2',
                component: () => import('../views/student/student2.vue')
            },
            {
                path: 'student3', // 不能带/      如果要带/ 就要写完整路径： /student/student3
                name: 'student3',
                component: () => import('../views/student/student3.vue')
            },
        ]
    },
    {
        path: '/teacher',
        name: 'teacher',
        redirect: '/teacher/teacher1',

        // 如果一个路由有子路由，他的组件中就必须有一个 <router-view />
        component: () => import('../views/teacher/index.vue'),
        children: [ // 子路由
            {
                path: 'teacher1', // 不能带/      如果要带/ 就要写完整路径： /teacher/teacher1
                name: 'teacher1',
                component: () => import('../views/teacher/teacher1.vue')
            },
            {
                path: 'teacher2', // 不能带/      如果要带/ 就要写完整路径： /teacher/teacher2
                name: 'teacher2',
                component: () => import('../views/teacher/teacher2.vue')
            },
            {
                path: 'teacher3', // 不能带/      如果要带/ 就要写完整路径： /teacher/teacher3
                name: 'teacher3',
                component: () => import('../views/teacher/teacher3.vue')
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

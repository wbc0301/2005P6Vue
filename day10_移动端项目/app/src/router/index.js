import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home' // 重定向到首页
    },
    {
        path: '/home',
        name: 'home',
        component: home,
        meta: {
            showNav: true // 展示下边的导航条
        }
    },
    {
        path: '/rec',
        name: 'rec',
        component: () => import('../views/rec.vue'),
        meta: {
            showNav: true // 展示下边的导航条
        }
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/cart.vue'),
        meta: { // 元信息  做一个标记
            mastLogin: true,
            showNav: false // 不展示下边的导航条
        }
    },
    {
        path: '/my',
        name: 'my',
        component: () => import('../views/my.vue'),
        meta: { // 元信息
            mastLogin: true,
            showNav: true // 展示下边的导航条
        }
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('../views/detail.vue'),
        meta: { // 元信息
            mastLogin: true,
            showNav: false
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue'),
        meta: {
            showNav: false
        }
    },
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


// this.$store  
import $store from '../store/index.js'

// 在每次路由切换之前 router.beforeEach里边的回调函数就会被调用。

// 1: 判断用户去的页面是不是必须登录
// 2: 如果必须登录的话  再看他是不是真的登录了
router.beforeEach((to, from, next) => {
    if(to.meta.mastLogin) { // 去的页面必须登录
        if($store.state.username) { // 已经登录了
            next() // 放行，让本地路由跳转继续
        }else { // 没有登录
            // next('/login') // 重定向到登录页
            router.push('/login') // 重定向到登录页
            // this.$router.push('/login)
        }
    } else { // 去的页面不用登录
        next() // 放行，让本地路由跳转继续
    }
})

export default router

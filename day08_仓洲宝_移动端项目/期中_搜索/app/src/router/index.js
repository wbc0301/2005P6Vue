import Vue from 'vue'
import VueRouter from 'vue-router'
import search from '../views/search.vue'
import result from '../views/result.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/result',
    name: 'result',
    component: result
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

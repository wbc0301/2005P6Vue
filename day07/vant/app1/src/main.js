import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/reset.css' // 不需要 from  也不需要声明一个变量了   css不需要from

import axios from 'axios'
Vue.prototype.$axios = axios

// 引入vant所有组件 全局引入
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/reset.css' // 不需要 from  也不需要声明一个变量了   css不需要from

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

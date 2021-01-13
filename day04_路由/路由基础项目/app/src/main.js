import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/reset.css' // 不需要 from  也不需要声明一个变量了   css不需要from

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

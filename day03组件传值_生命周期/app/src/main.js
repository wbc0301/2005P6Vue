import Vue from 'vue'
// import App from './App.vue'
// import App from './生命周期.vue'
import App from './tab_动态组件_keep-alive.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

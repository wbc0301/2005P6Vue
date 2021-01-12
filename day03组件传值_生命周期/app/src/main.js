import Vue from 'vue'
// import App from './App.vue'
import App from './生命周期.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vant from 'vant'
Vue.use(vant)
import 'vant/lib/index.css'

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


// 全局引入所有vant的组件
import vant from 'vant';
Vue.use(vant);
import 'vant/lib/index.css'

// 把axios挂载到this
import axios from 'axios';
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

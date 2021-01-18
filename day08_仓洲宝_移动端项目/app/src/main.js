import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 全局引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// import { ImagePreview } from 'vant';
// Vue.prototype.ImagePreview = ImagePreview;

// 全局引入axios
import axios from 'axios';
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

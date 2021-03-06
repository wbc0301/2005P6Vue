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

// 引入图片懒加载的指令
import { Lazyload } from 'vant';
Vue.use(Lazyload);
// 注册时可以配置额外的选项
// Vue.use(Lazyload, {
//   lazyComponent: true,
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

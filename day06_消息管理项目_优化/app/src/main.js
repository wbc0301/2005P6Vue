import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/reset.css' // 不需要 from  也不需要声明一个变量了   css不需要from


// 引入elementui组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios';
Vue.prototype.$axios = axios; // 在vue原型对象上边添加axios  这样所有组件的this就可以直接访问到这个变量了，

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



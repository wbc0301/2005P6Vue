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


// 排序
// var arr = [{price: 1},{price: 3},{price: 2},{price: 9},{price: 6},]
// // sort 会改变原数组
//  arr.sort((a, b) => { // return 的值如果是大于0, a 和 b 就会交换位置
//     return a.price - b.price // 升序
//     // return b.price - a.price // 降序
// })
// console.log(arr)

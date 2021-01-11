 // es6引入模块 import  from '模块的路径'
 // es6导出模块 export default

import Vue from 'vue'
// import App from './App.vue'
// import App from './计算属性.vue'
import App from './图书管理.vue'

Vue.config.productionTip = false

new Vue({
    // el: '#app',
    render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


// 全局引入elementUI所有组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

var bbb = 'fn'

// 定义对象的属性可以通过表达式的形式  []
var obj = {
    name: 'zs',
    ['age']: 18, // 属性名表达式
    ['age' + 2]: 20, // 属性名表达式
    [bbb]: ()=> {}, // 属性名表达式
    fn2:() => {}
}

console.log(obj)
var aaaaa = 'name'

// 取对象身上的属性也可以通过表达式的形式  []
console.log(obj.name)
console.log(obj['name'])  //
console.log(obj.aaaaa)
console.log(obj[aaaaa])

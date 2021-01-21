import Vue from 'vue'
import Vuex from 'vuex'
import persist from 'vuex-persistedstate' // vuex中的数据做固化

Vue.use(persist)
Vue.use(Vuex)


// vuex中的数据刷新的时候会重新初始化
export default new Vuex.Store({
    state: { // 放数据的地方
        username: '', // 用户名
        currentData: {}, // 详情页展示的商品数据
        cartList: [] // 购物车的数据
    },
    mutations: {  // 里边的函数是用来 修改state里边的数据的
        changeName(state, val) {
            state.username = val;
        },
        changeCurrentData(state, obj) { // 改变详情页展示的商品数据
            state.currentData = obj
        },
        changeCartList(state, obj) { // 把数据加入到购物车
            state.cartList.push(obj)
        }
    },
    plugins: [persist()] // vuex的插件
})

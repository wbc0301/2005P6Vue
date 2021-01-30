import Vue from 'vue'
import Vuex from 'vuex'

// vuex 持久化
import pre from 'vuex-persistedstate'

Vue.use(Vuex)
Vue.use(pre)

export default new Vuex.Store({
    state: {
        user: {}, // 用户信息
        showLogin: false, // 控制登录弹窗显示
        detailData: {}, // 详情页的数据
        cartList: [], // 购物车的数据
    },
    mutations: {
        changeUser(state, obj) { // 修改用户
            state.user = obj;
        },
        changeShowLogin(state, val) {
            state.showLogin = val;
        },
        changeDetailData(state, obj) {
            state.detailData = obj;
        },
        changeCartList(state, arr) {
            state.cartList = arr;
        },
    },
    getters: { // 可以理解成组件中的计算属性
        allNum(state) {
            let num = 0;
            state.cartList.forEach(item => {
                num += item.num
            })
            return num;
        },
        
    },
    plugins: [pre()]
})

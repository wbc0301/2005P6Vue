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
    },

    mutations: {
        // 1: 声明mutation函数
        changeUser(state, obj) { // 修改用户
            state.user = obj;
        },
        changeShowLogin(state, val) {
            state.showLogin = val;
        },
    },

    plugins: [pre()]
})

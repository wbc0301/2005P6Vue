import Vue from 'vue'
import Vuex from 'vuex'

// vuex 持久化
import pre from 'vuex-persistedstate'

Vue.use(Vuex)
Vue.use(pre)

export default new Vuex.Store({
    state: {
        user: {} // 用户信息
    },
    mutations: {
        changeUser(state, obj) { // 修改用户
            state.user = obj;
        }
    },
    plugins: [pre()]
})

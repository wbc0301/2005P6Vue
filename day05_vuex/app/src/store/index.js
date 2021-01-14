import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { // 仓库  放vuex数据的地方
        name: '',
        age: 12,
        obj: {
            str: 'aaa'
        }
    },
    // vuex不允许我们直接改state里边的数据，如果要改数据， 
    // 要写一个mutation函数，函数里边写修改数据的逻辑， 再调用这个函数，让逻辑执行，然数据就改了
    mutations: {
        changeName(state, val) {
            state.name = val
        },
        changeObj(state) {
            state.obj.str = 'bbb'
        },
        changeAge(state) {
            state.age = 13
        },
    },
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { // 仓库  放vuex数据的地方
        oneList:[],
        twoList:[],
        threeList:[],
    },
    // vuex不允许我们直接改state里边的数据，如果要改数据， 
    // 要写一个mutation函数，函数里边写修改数据的逻辑， 再调用这个函数，让逻辑执行，然数据就改了
    mutations: {
        // 改变oneList
        changeList(state, obj) {
            if(obj.type === 'init') { // 页面刷新时初始化
                state[obj.listName + 'List'] = obj.data;
            }else if(obj.type === 'del') { // 删除一个元素
                // 删除元素时，obj.data是要删除的元素的索引
                state[obj.listName + 'List'].splice(obj.data, 1);
            }else if(obj.type === 'add') { // 添加一个元素
                state[obj.listName + 'List'].push(obj.data)
            }else if(obj.type === 'empty') { // 清空数组
                state[obj.listName + 'List'] = [];
            }else if(obj.type === 'addAll') { // 添加多个元素
                state[obj.listName + 'List'] = state[obj.listName + 'List'].concat(obj.data)  // concat方法连接两个数组返回一个新数组
            }
        },
        
        // 改变twoList
        // changeTwo(state, obj) {
        //     if(obj.type === 'init') {
        //         state.twoList = obj.data;
        //     }else if(obj.type === 'del') {
        //         state.twoList.splice(obj.data, 1);
        //     }else if(obj.type === 'add') {
        //         state.twoList.push(obj.data)
        //     }else if(obj.type === 'empty') {
        //         state.twoList = [];
        //     }else if(obj.type === 'addAll') {
        //         state.twoList = state.twoList.concat(obj.data)
        //     }
        // },
        
        // 改变threeList
        // changeThree(state, obj) {
        //     if(obj.type === 'init') {
        //         state.threeList = obj.data;
        //     }else if(obj.type === 'del') {
        //         state.threeList.splice(obj.data, 1);
        //     }else if(obj.type === 'add') {
        //         state.threeList.push(obj.data)
        //     }else if(obj.type === 'empty') {
        //         state.threeList = [];
        //     }else if(obj.type === 'addAll') {
        //         state.threeList = state.threeList.concat(obj.data)
        //     }
        // },
    },
})

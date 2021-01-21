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

        /* [
            {
                "_id":"59f087ef11945e2760c852dd",
                "title":"笔记本电脑",
                "cid":"59f1e1ada1da8b15d42234e9",
                "num":1,"price":2346,"old_price":"4000",
                "pic":"http://jd.itying.com/upload/Hfe1i8QDOkfVt-PuGcxCA0fs.jpg",
                "s_pic":["http://jd.itying.com/upload/Hfe1i8QDOkfVt-PuGcxCA0fs.jpg_200x200.jpg","http://jd.itying.com/upload/Hfe1i8QDOkfVt-PuGcxCA0fs.jpg_200x200.jpg","http://jd.itying.com/upload/Hfe1i8QDOkfVt-PuGcxCA0fs.jpg_200x200.jpg","http://jd.itying.com/upload/Hfe1i8QDOkfVt-PuGcxCA0fs.jpg_200x200.jpg"]
            },
            {
                "_id":"59f6a2d27ac40b223cfdcf81",
                "title":"乐扣乐扣(lock&lock)菲特旋转盖轻量杯",
                "cid":"59f1e1ada1da8b15d42234e9",
                "num":2,"price":"2001",
                "old_price":"2001",
                "pic":"http://jd.itying.com/upload/iPrQ_-r43nGjFyxYXiMZWTM6.jpg",
                "s_pic":["http://jd.itying.com/upload/iPrQ_-r43nGjFyxYXiMZWTM6.jpg_200x200.jpg","http://jd.itying.com/upload/iPrQ_-r43nGjFyxYXiMZWTM6.jpg_200x200.jpg","http://jd.itying.com/upload/iPrQ_-r43nGjFyxYXiMZWTM6.jpg_200x200.jpg","http://jd.itying.com/upload/iPrQ_-r43nGjFyxYXiMZWTM6.jpg_200x200.jpg"]
            }
            ]
            
         */
        changeCartList(state, obj) { // 把数据加入到购物车
            let flag = 1;
            state.cartList.forEach(item => {

                if(item._id === obj._id) { 
                    item.num ++ // 这个商品被添加过了
                    flag = 2;
                }

            })
            if(flag === 1) { // flag没改变  说明：该商品没有被添加过
                state.cartList.push(obj)
            }
        },
        del(state, index) { // 删除购物车数据
            state.cartList.splice(index, 1)
        }
    },
    plugins: [persist()] // vuex的插件
})

<template>
	<div id="app">
        <h1>我是父组件</h1>
        <div class="abc" aa="123">{{str}}{{present}}</div>
        <div>儿子要送给我一个礼物：{{pre}}</div>
		<!-- <p>
            <a href="http://www.baidu.com">百度</a>
		</p>-->

        <!-- 3: 使用组件 -->
        <!-- 通过自定属性的形式往子组件传递数据 -->
        <!-- <one a="1" b="2" c="3" ></one> -->

        <!-- 通过注册自定义事件绑定父组件的一个函数，在子组件触发这个自定义事件时，调用这个函数 -->
        <!-- 函数是父组件的，也就是说，改变数据的逻辑是在父组件中处理的 -->
        <!-- <one :present="present" @aa="handler"></one> -->
        <two :a="present" b="2" @aaa="handler"></two>
	</div>
</template>

<script>

// 1: 引入组件
import one from './components/one'
import two from './components/two'
import Two from './components/two.vue'

// 3: 使用组件

export default {
    name: 'App',// 组件的名字
	data() {
		return {
            str: '我是父组件的数据',
            present: '玩具车',
            pre: '',
		}
	},
	components: { // 这里是注册子组件的地方
        // 2：注册组件
        // one: one  
        one, // es6对象的简写写法
        two,
    },
    methods: {
        handler(val) {
            this.pre = val;
        }
    }

}
</script>

<style lang="scss">
#app {
    height: 500px;
    background-color: pink;
    padding: 20px;
}
</style>

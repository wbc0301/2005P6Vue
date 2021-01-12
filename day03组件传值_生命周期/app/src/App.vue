<template>
	<div id="app">
        <h1>我是父组件</h1>
		<!-- <p>
            <a href="http://www.baidu.com">百度</a>
		</p>-->

        <!-- 3: 使用组件 -->
        <one></one>
        
	</div>
</template>

<script>

// 1: 引入组件
import one from './components/one'

// 3: 使用组件

export default {
    name: 'App',
	data() {
		return {

		}
	},
	components: { // 这里是注册子组件的地方
        // 2：注册组件
        // one: one  
        one // es6对象的简写写法
	}

}
</script>

<style lang="scss">
#app {
    height: 500px;
    background-color: pink;
}
</style>

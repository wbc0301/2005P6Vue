<template>
	<div id="app">
        <!-- 3：使用子组件 -->
		<topNav></topNav>
        
		<login></login>

        <!-- 展示URL匹配到的路由的组件 相当于一个站位 -->
		<router-view />
	</div>
</template>

<script>
// 1： 引入
import topNav from './components/topNav'
import login from './components/login'

export default {
    // 2：注册
    components: {topNav, login}
}
</script>

<style lang="scss">
</style>

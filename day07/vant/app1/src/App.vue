<template>
	<div id="app">
		<!-- 导航栏 -->
		<van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" />

		<!-- 路由组件要展示到这里 -->
		<router-view></router-view>

		<!-- tabbar 标签栏 -->
		<van-tabbar v-model="active" route>
			<van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
			<van-tabbar-item icon="search" to="/list">列表</van-tabbar-item>
			<van-tabbar-item icon="friends-o" to="/detail">详情</van-tabbar-item>
			<van-tabbar-item icon="setting-o">什么都不是</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>

// Toast不是一个组件 是一个函数，使用前要引入
import { Toast } from 'vant';

export default {
	props: [],
	data() {
		return {
			active: 3,
		}
	},
	methods: {
		onClickLeft() {
            // this.$router.push('')
            // this.$router.push({})

            // 返回上一个路由
            // this.$router.go(-1) // go也可以接收一个整数
            this.$router.back()

			// Toast('返回');
		},
	},
}
</script>

<style lang="scss">
#app {
}
</style>

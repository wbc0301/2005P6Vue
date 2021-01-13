<template>
	<div id="app">
		<div id="nav" v-if="!isLogin">
			<!-- 实现路由跳转  tag的值就是要渲染成的标签-->
			<router-link tag="span" to="/home">首页</router-link>
			<router-link tag="span" :to="{path: '/list', query: { aa: 123}}">商品列表</router-link>
			<router-link tag="span" :to="{name: 'detail', query: { id: '333'}}">详情页</router-link>
		</div>

		<!-- 路由匹配到的组件要展示的地方 -->
		<router-view />
	</div>
</template>
<script>
export default {
	data() {
		return {
			isLogin: false
		}
	},
	watch: { // 监听this上边的数据的变化

		// 第一种写法： 值是一个函数
		// $route: function (newvalue, oldvalue) { // 参数1：变化后的值，参数2：变化前的值
		// 	console.log(newvalue, oldvalue)
		// }

		// 第二中写法  值是一个对象
		$route: {
			handler: function (newvalue, oldvalue) { // 数据变化时要执行的函数
				console.log(111111)
				if (newvalue.path === '/login') { // 是登录页
					this.isLogin = true;
				} else { // 不是登录页
					this.isLogin = false;
				}
			},
			immediate: true, // 立即监听，页面初始化的时候就先执行一次 是否在页面初始化的时候先调用一下监听函数
		}
	}
}
</script>

<style lang="scss">
#app {
	#nav {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-around;
		height: 60px;
		line-height: 60px;
		span {
			flex: 1;
			text-align: center;
		}
		.router-link-active {
			color: red;
			background-color: skyblue;
			font-weight: bold;
		}
	}
}
</style>

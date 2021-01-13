<template>
	<div class="login">
		<h3>登录</h3>
		<div class="main">
			用户名：
			<input type="text" v-model="name" />
			<br />密码：
			<input type="password" v-model="password" />
			<br />

			<button @click="login">登录</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: '',
			password: '',
		};
	},
	mounted() { },
	methods: {
		login() {
			if (!this.name || !this.password) { // 提示 输入
				alert('请输入完整的信息')
			} else {
				// 假设登录成功

				this.$router.push('/home')
			}
		}
	},
	watch: { // 监听this上边的数据的变化

		// 第一种写法： 值是一个函数
		// name: function(newvalue, oldvalue) { // 参数1：变化后的值，参数2：变化前的值
		//     console.log(newvalue, oldvalue)
		// }

		// 第二中写法  值是一个对象
		name: {
			handler: function (newvalue, oldvalue) { // 数据变化时要执行的函数
				console.log(newvalue, oldvalue)
            },
            immediate: true // 是否在页面初始化的时候先调用一下监听函数
		}
	}
};
</script>

<style lang='scss' scoped>
</style>

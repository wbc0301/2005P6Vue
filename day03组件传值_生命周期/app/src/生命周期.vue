<template>
	<div id="box">
		<h1>生命周期</h1>
		<ul>
			<li v-for="item in list" :key="item.id">
				<img :src="item.images[0]" alt />
				<span>{{item.name}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios' // 引入axios

// 本质上生命周期就是：回调函数  钩子  钩子函数
export default {
	data() {
		return {
			msg: 'ok',
			list: [],
		};
	},

	beforeCreate() { // 这里获取不到this上边的任何数据 用的不多
		console.log(this.msg) // undefined
		console.log('beforeCreate')
	},
	created() { // this创建完成后调用 生命周期函数中的一个  最常用的一个  获取不到dom  可以获取到this上边的任何数据
		console.log(this.msg) //'ok'
		console.log('created')
		console.log(document.getElementById('box')) // null

		axios({
			url: 'https://locally.uieee.com/categories/1/shops',
			// method: 'get' // get可以省略
		}).then(res => {
			this.list = res.data
		})
	},

	beforeMount() { // dom挂载前调用  用的不多
		console.log('beforeMount')
		console.log(this.msg) //'ok'
		console.log(document.getElementById('box')) // null
	},
	// mounted: function () {},
	mounted() { // dom挂载后调用 生命周期函数中的一个  最最常用的一个 可以获取到dom  可以获取到this上边的任何数据
		console.log('mounted')
		console.log(document.getElementById('box'))

		// 使用axios发送ajax请求
		// 会返回一个promise实例，promise实例上有一个then方法 then方法的参数是一个回调函数，回调函数的参数就是返回的数据
		// axios({
		//     url: 'https://locally.uieee.com/categories/1/shops',
		//     // method: 'get' // get可以省略
		// }).then(res => {
		//     this.list = res.data
		// })
	},

	methods: {
		aa() {
			this.msg
		}
	},
};
</script>

<style lang='scss' scoped>
#box {
	li {
		display: flex;
		padding: 20px 10px;
		border-bottom: 1px solid #ccc;
	}
	img {
		width: 80px;
		height: 80px;
	}
}
</style>

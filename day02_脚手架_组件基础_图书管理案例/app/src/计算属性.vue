<template>
	<div class>
		我的名字是：{{firstName + lastName}}
		<hr />
		<div>我的名字是：{{fullName}}</div>
		<div>我的名字是：{{fullName}}</div>
		<div>我的名字是：{{fullName}}</div>
		<div>我的名字是：{{fullName}}</div>
		<hr />
		<button @click="change1">改姓</button>
		<button @click="change2">改名</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			firstName: '姚',
			lastName: '明',
		};
	},
	// 计算属性 是一个函数 函数的名字可以直接使用
	computed: {
		fullName() { // 计算属性里边的this也可以读取到data里边的数据
			// 会根据依赖项的值进行计算 当任何一个依赖项的值发生变化时，会重新计算
			console.log(11)
			return this.firstName + this.lastName;
		}
	},
	methods: {
		change1() {
			this.firstName = '潘'
		},
		change2() {
			this.lastName = '长江'
		},
	},
};
</script>

<style lang='scss' scoped>
</style>

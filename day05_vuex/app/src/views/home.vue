<template>
	<div class="home">
		{{msg}}
		<div>我的名字是：{{$store.state.name}}</div>
		<div>我的年龄是：{{$store.state.age}}</div>
		<button @click="aaa">改vuex中的name</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: 'aaaaaaaaaa'
		}
	},
	mounted() {
		// 读取vuex里边的数据
		console.log(this.$store.state.obj);
		console.log(this.$store.state.name);
		console.log(this.$store.state.age);
		// this.$store.state.name = 'def' // 不能这样直接修改vue里边的数据
	},
	methods: {
		aaa() {
			// 调用mutation函数，修改vuex里边的数据
			this.$store.commit('changeName')
			this.$store.commit('changeObj')
			this.$store.commit('changeAge')
			console.log(this.$store.state.obj);
		}
	},
}
</script>

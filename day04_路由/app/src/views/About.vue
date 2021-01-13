<template>
	<div class="about">
		<h1>This is an about page</h1>
		<button @click="toDetail">去详情页</button>
	</div>
</template>

<script>
export default {
	methods: {
		toDetail() {
			// 通过编程式导航的方式实现路由跳转
			this.$router.push('/detail')
		}
	}
}
</script>

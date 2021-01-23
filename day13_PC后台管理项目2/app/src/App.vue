<template>
	<div id="app">
		<el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<el-menu-item index="/teacher">老师管理</el-menu-item>
			<el-menu-item index="/student">学生管理</el-menu-item>
		</el-menu>

		<router-view />
	</div>
</template>
<script>
export default {
	data() {
		return {
			activeIndex: '/teacher',
		}
	},
	watch: {
		$route: {
			handler: function (newValue) {
                console.log(newValue)
				this.activeIndex = '/' + newValue.path.split('/')[1]
			},
			immediate: true,
		}
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	}
}
</script>

<style lang="scss">
</style>

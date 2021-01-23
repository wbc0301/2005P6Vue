<template>
	<div class="student">
		<el-menu router :default-active="activeIndex" class="el-menu-demo" mode="vertical" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<el-menu-item index="/student/student1">三好学生</el-menu-item>
			<el-menu-item index="/student/student2">优秀学生</el-menu-item>
			<el-menu-item index="/student/student3">全能学生</el-menu-item>
		</el-menu>
		<router-view />
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeIndex: '/student/student1'
		};
	},
	watch: {
		$route: {
			handler: function (newValue) {
				this.activeIndex = newValue.path
			},
			immediate: true,
		}
	},
	mounted() { },
	methods: {},
};
</script>

<style lang='scss' scoped>
.student {
	display: flex;
	.el-menu {
		width: 200px;
	}
}
</style>

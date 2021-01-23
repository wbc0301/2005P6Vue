<template>
	<div class="teacher">
		<el-menu router :default-active="activeIndex" class="el-menu-demo" mode="vertical" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<el-menu-item index="/teacher/teacher1">三好老师</el-menu-item>
			<el-menu-item index="/teacher/teacher2">优秀老师</el-menu-item>
			<el-menu-item index="/teacher/teacher3">全能老师</el-menu-item>
		</el-menu>

		<router-view />
	</div>
</template>

<script>
export default {
	data() {
		return {
            activeIndex: '/teacher/teacher1'
        };
    },
    watch:{
        $route: {
            handler: function(newValue){
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
.teacher {
    display: flex;
    .el-menu {
        width: 200px;
    }
}
</style>

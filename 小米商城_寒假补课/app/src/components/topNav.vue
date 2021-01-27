<template>
	<div class="topNav">
		<el-menu class="top" router mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<el-menu-item index="/cart">购物车</el-menu-item>
			<el-menu-item index="/collect">我的收藏</el-menu-item>
			<el-menu-item index="/order">我的订单</el-menu-item>
		</el-menu>

		<el-menu router :default-active="activeIndex" mode="horizontal">
			<el-menu-item index="/home">首页</el-menu-item>
			<el-menu-item index="/all">全部商品</el-menu-item>
			<el-menu-item index="/about">关于我们</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeIndex: '/home'
		};
	},
	mounted() { },
	methods: {},
};
</script>

<style lang='scss' scoped>
.topNav {
	.el-menu.top {
		li {
			float: right;
		}
	}
}
</style>

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
			<!-- <el-menu-item index="/about2">关于我们2</el-menu-item> -->
		</el-menu>
	</div>
</template>

<script>
export default {
	props: [], // 接收数据
	data() {
		return {
			activeIndex: '',
			msg: '1'
		};
	},
	computed: {}, // 计算属性
	mounted() { },
	methods: {},
	watch: { // 监听this上的数据的变化

		// 1：值是函数
		// msg: function(newval, oldval) {
		//     console.log(newval, oldval)
		// },

		// 2：值是对象
		// msg: {
		// 	handler: function (newval, oldval) {
		// 		console.log(newval, oldval)
		// 	},
		//     immediate: true // 立即执行
		// }


		// $route: function(newval, oldval) {
		//     console.log(newval, oldval)
		// }
		$route: {
			handler: function (newval, oldval) {
				// console.log(newval, oldval)
                this.activeIndex = newval.path;
			},
			immediate: true // 立即执行
		}
	}
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

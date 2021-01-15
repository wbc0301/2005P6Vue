<template>
	<div id="app">

        <!-- 面包屑 -->
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/one' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>
				<a href="/two">活动管理</a>
			</el-breadcrumb-item>
			<el-breadcrumb-item>活动列表</el-breadcrumb-item>
			<el-breadcrumb-item>活动详情</el-breadcrumb-item>
		</el-breadcrumb>

		<!-- <el-button>默认按钮</el-button>
        <el-button type="success" :circle="true">钮</el-button>
		<el-button type="danger" size="mini" round>默认按钮</el-button>-->
		<el-menu :default-active="activeIndex" mode="horizontal" router>
			<el-menu-item index="/one">
				<i class="el-icon-s-comment a"></i>
				未读消息({{$store.state.oneList.length}})
			</el-menu-item>
			<el-menu-item index="/two">
				<i class="el-icon-s-claim a"></i>
				已读消息({{$store.state.twoList.length}})
			</el-menu-item>
			<el-menu-item index="/three">
				<i class="el-icon-delete a"></i>
				回收站({{$store.state.threeList.length}})
			</el-menu-item>
			<el-menu-item index="/four">
				<i class="el-icon-delete a"></i>
				录播图展示
			</el-menu-item>
		</el-menu>
		<router-view />

		<!-- <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading">指令方式</el-button> -->
	</div>
</template>
<script>
// import axios from 'axios';
export default {
	props: [],
	data() {
		return {
			activeIndex: '',
			// fullscreenLoading: true,
		}
	},
	computed: {},

	// 如果函数前边添加了 async 那么这个函数里边就可以使用 await ,await的作用就是让程序暂停。
	async mounted() {
		const loading = this.$loading({ // 展示loading
			lock: true,
			text: '请不要着急', // loading 文字
			spinner: 'el-icon-loading',
			background: 'rgba(0, 0, 0, 0.7)'
		});

		// 1：promise 是通过回调函数的参数来接收响应数据的，
		// this.$axios({ url: '/list1.json' }).then(res => {
		// 	this.$store.commit('changeList', { type: 'init', listName: 'one', data: res.data.one })
		// 	this.$store.commit('changeList', { type: 'init', listName: 'two', data: res.data.two })
		// 	this.$store.commit('changeList', { type: 'init', listName: 'three', data: res.data.three })
		// 	// this.fullscreenLoading = false;
		// 	loading.close(); // 关闭loading
		// 	this.$message({ message: '数据请求成功', type: 'success' }) // 成功提示
		// }).catch(err => {
		//     console.log(err)
		// 	loading.close(); // 关闭loading
		// 	this.$message({ message: '数据请求失败', type: 'error', duration: 1000 }) // 错误提示
		// })

		// 2：async await es6
		// await 会直接返回响应数据  await的作用就是让程序暂停。 await只能在 async 函数里使用
		// 作用就是让我们用同步方式写异步的逻辑

		try { // 正常的逻辑 当有错误的时候 就会走到 catch 里边
			var res = await this.$axios({ url: '/list.json' })
			this.$store.commit('changeList', { type: 'init', listName: 'one', data: res.data.one })
			this.$store.commit('changeList', { type: 'init', listName: 'two', data: res.data.two })
			this.$store.commit('changeList', { type: 'init', listName: 'three', data: res.data.three })
			// this.fullscreenLoading = false;
			loading.close(); // 关闭loading
			this.$message({ message: '数据请求成功', type: 'success' }) // 成功提示
			// this.$notify({ // 在右页面侧弹出提示框
			// 	title: '提示1',
			// 	message: '这是一条不会自动关闭的消息2',
			// 	duration: 3000
			// });
		} catch {
			loading.close(); // 关闭loading
			this.$message({ message: '数据请求失败', type: 'error', duration: 1000 }) // 错误提示
		}



	},
	methods: {

	},
	watch: {
		// 可以监听 this 上边的数据
		// 1：data
		// 2: props
		// 3: computed
		// 4: $route
		// 5: $store

		$route: { // 监听 this上边的 $route 的变化
			handler: function (newValue) {
				// console.log(newValue)
				this.activeIndex = newValue.path;
			},
			immediate: true, // 立即监听，页面初始化的时候就先执行一次 是否在页面初始化的时候先调用一下监听函数
		}
	}

}
</script>

<style lang="scss">
#app {
	.a {
		// color: red;
	}
}
</style>

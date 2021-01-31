<template>
	<div class="topNav">
		<el-menu class="top" router mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<el-menu-item index="/cart">购物车({{$store.getters.allNum}})</el-menu-item>
			<el-menu-item index="/collect">我的收藏</el-menu-item>
			<el-menu-item index="/order">我的订单</el-menu-item>
			<el-menu-item>
				<el-popconfirm v-if="user.userName" title="您确定退出吗？" @confirm="logout">
					<div slot="reference">您好：{{user.userName}}</div>
				</el-popconfirm>

				<div v-else>
					<span @click="login">登录</span>
					|
					<span @click="register">注册</span>
				</div>
			</el-menu-item>
		</el-menu>

		<el-menu router :default-active="activeIndex" mode="horizontal">
			<el-menu-item index="/home">首页</el-menu-item>
			<el-menu-item index="/all">全部商品</el-menu-item>
			<el-menu-item index="/about">关于我们</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
	data() {
		return {
			activeIndex: '/home'
		};
	},
	computed: {
		...mapState(['user']), // 映射state

	},
	mounted() { },
	methods: {

        ...mapMutations(['changeUser', 'changeShowRegister']), // 映射mutation
        
		// changeUser(state, obj) { // 修改用户
		// 	state.user = obj;
        // },
        
		login() { // 登录
			this.$store.commit('changeShowLogin', true)
		},
		logout() { // 退出
            // this.$store.commit('changeUser', {});
            this.changeUser({});
            this.$router.push('/home')
		},
        register() { // 注册
            this.changeShowRegister(true) // 打开注册弹窗
		},
	},
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

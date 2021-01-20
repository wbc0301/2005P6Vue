<template>
	<div id="app">

		<van-nav-bar v-if="title" :title="title" left-text="返回" left-arrow @click-left="$router.back()" />
	
		<router-view />

		<van-tabbar v-model="active" route v-if="showNav">
			<van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
			<van-tabbar-item to="/rec" icon="hot-o">热门推荐</van-tabbar-item>
			<van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
			<van-tabbar-item to="/my" icon="friends-o">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: 0,
			showNav: false, // 展示底部导航
            // showTop: false, // 展示顶部导航
            title: '' // 顶部导航的标题
		}
	},
	watch: {
		$route: {
			handler: function (newValue) {
                console.log(newValue)
                this.title = newValue.meta.title;
				// 通过showNav判断要不要展示底部导航条
				if (newValue.meta.showNav) { //  要展示底部导航条
					this.showNav = true
				} else { // 不要展示底部导航条
					this.showNav = false
                }
                
                //判断顶部导航要不要展示
                // if(newValue.path === '/login') { // 是登录页
                //     this.showTop = false;
                // }else { // 不是登录页
                //     this.showTop = true;
                // }
			},
			immediate: true // 立即监听
		}
	}
}
</script>


<style lang="scss">
</style>

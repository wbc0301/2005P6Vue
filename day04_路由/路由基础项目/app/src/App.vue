<template>
	<div id="app">

		<div id="nav">
            <!-- 实现路由跳转  tag的值就是要渲染成的标签-->
			<router-link tag="span" to="/home">首页</router-link>
			<router-link tag="span" :to="{path: '/list', query: { aa: 123}}">商品列表</router-link>
			<router-link tag="span" :to="{name: 'detail', query: { id: '333'}}">详情页</router-link>
		</div>

        <!-- 路由匹配到的组件要展示的地方 -->
		<router-view />

	</div>
</template>

<style lang="scss">
#app {
    #nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-around;
        height: 60px;
        line-height: 60px;
        span {
           flex: 1; 
           text-align: center;
        }
        .router-link-active {
            color: red;
            background-color: skyblue;
            font-weight: bold;
        }
        
    }
}
</style>

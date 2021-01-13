<template>
	<div class="about">
		<h1>This is an about page</h1>
		<button @click="toDetail">去详情页</button>
		<button @click="toDetail2">去详情页</button>

        <div>我接收到的数据是：{{$route.query.aa}}</div>

	</div>
</template>

<script>
export default {
    mounted () {
        console.log(this.$route.query.aa);
    },
	methods: {
		toDetail() {
			// 通过编程式导航的方式实现路由跳转
            // this.$router.push('/detail')
            // this.$router.push({path: '/detail', query: {id: '123abc'}})
            this.$router.push({name: 'detail', query: {id: '444'}}) // 参数会在URL上边展示时出来  用户刷新数据不会丢失
            
		},
		toDetail2() {
			// 通过编程式导航的方式实现路由跳转
            // this.$router.push('/detail')
            // this.$router.push({path: '/detail', query: {id: '123abc'}})
            // this.$router.push({name: 'detail', query: {id: '444'}})
            this.$router.push({name: 'detail', params: {id: '444'}})  // 参数不会在URL上边展示时出来  用户刷新数据会丢失
            
		}
	}
}
</script>

<template>
	<div class="list">
		<h1>这里是商品列表</h1>
		<ul>
			<li class="item" v-for="item in list" :key="item.id" @click="toDetail(item.id)">
				<h3>{{item.name}}</h3>
				<div>价格：{{item.price}}</div>
				<div>商品描述：{{item.desc}}</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	methods: {
		toDetail(id) {
			// this.$router.push('/detail')
			this.$router.push({ path: '/detail', query: { id } }) // path 就只能和query结合使用 不能使用params传参
		}
	},
	data() {
		return {
			list: [
				{ id: 1, name: '手机', price: '1000', desc: '始骄傲的发生地方' },
				{ id: 2, name: '电脑', price: '5000', desc: '圣诞节啦分离式的' },
				{ id: 3, name: '空调', price: '2300', desc: '打扫房间拉水电费' },
				{ id: 4, name: '耳机', price: '1200', desc: '杜绝浪费上的浪费' },
			]
		}
	},
}
</script>

<style lang="scss">
.item {
	padding: 10px 10px;
	border-bottom: 1px solid #ccc;
}
</style>

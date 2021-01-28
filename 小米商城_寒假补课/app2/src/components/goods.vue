<template>
	<ul class="list">
		<li v-for="item in list" :key="item.product_id">
			<img :src="item.product_picture" alt />
			<p>{{item.product_name}}</p>
			<p>价格：{{item.product_selling_price}}</p>
		</li>
	</ul>
</template>

<script>
export default {
    props: ['list'],
	data() {
		return {};
	},
	mounted() { },
	methods: {},
};
</script>

<style lang='scss' scoped>
.list {
	display: flex;
	flex-wrap: wrap;
	li {
		padding: 0 0 24px 0;
		background-color: #fff;
		margin: 12px;
		text-align: center;
		transition: 0.5s;
		cursor: pointer;
		width: 216px;
		img {
			width: 200px;
			// height: 200px;
		}
		&:hover {
			z-index: 2;
			box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
			transform: translate3d(0, -2px, 0);
		}
	}
}
</style>

<template>
	<div class="detail">
		<div class="top">
			<h3>{{$store.state.detailData.product_name}}</h3>
		</div>
		<div class="main">
			<div class="left">
				<img :src="$store.state.detailData.product_picture" alt />
			</div>
			<div class="right">
				<h1>{{$store.state.detailData.product_name}}</h1>
				<div>商品描述：{{$store.state.detailData.product_intro}}</div>
				<div>价格：{{$store.state.detailData.product_selling_price}}</div>
				<div class="btn">
					<el-button type="warning" size="medium" @click="add">加入购物车</el-button>
					<el-button type="danger" size="medium" @click="coll">收藏</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() { },
	methods: {
		add() {// 添加购物车

		},
		coll() { // 收藏
			this.$axios({
				url: '/user/collect/addCollect',
				method: 'post',
				data: { "user_id": this.$store.state.user.user_id, "product_id": this.$store.state.detailData.product_id }
			}).then(res => {
				if (res.data.code == '001' || res.data.code == '003') {
					this.$message({ message: res.data.msg, type: 'success' });
				} else {
					this.$message({ message: res.data.msg, type: 'error' });
				}
			})
		},
	},
};
</script>

<style lang='scss' scoped>
.detail {
	.top {
		h3 {
			border-bottom: 3px solid orange;
			margin: 20px 0;
			padding: 20px 0;
		}
	}
	.main {
		display: flex;
		.left {
			flex: 1;
			img {
				width: 100%;
			}
		}
		.right {
			padding: 0 0 0 40px;
			flex: 3;
			line-height: 40px;
		}
	}
}
</style>

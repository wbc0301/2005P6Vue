<template>
	<div class="detail">
		<div class="top">
			<h3>{{detailData.product_name}}</h3>
		</div>
		<div class="main">
			<div class="left">
				<img :src="detailData.product_picture" alt />
			</div>
			<div class="right">
				<h1>{{detailData.product_name}}</h1>
				<div>商品描述：{{detailData.product_intro}}</div>
				<div>价格：{{detailData.product_selling_price}}</div>
				<div class="btn">
					<el-button type="warning" size="medium" @click="add">加入购物车</el-button>
					<el-button type="danger" size="medium" @click="coll">收藏</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// 使用映射函数 把vuex中的数据映射到当前组件的this上边 就是一种简单的写法
import { mapState } from 'vuex'
export default {
	data() {
		return {};
	},
	mounted() { },
	computed: {
		// ... 展开运算符
		...mapState(['user', 'detailData']),

	},
	methods: {
		add() {// 添加购物车
			this.$axios({
				url: '/user/shoppingCart/addShoppingCart',
				method: 'post',
				data: { "user_id": this.user.user_id, "product_id": this.detailData.product_id }
			}).then(res => {
				if (res.data.code == '001' || res.data.code == '002') {
					this.$message({ message: res.data.msg, type: 'success' });

					// 添加购物车成功后   还要请求购物车的数据
                    this.getCartList();
				} else {
					this.$message({ message: res.data.msg, type: 'error' });
				}
			})
		},
		coll() { // 收藏
			this.$axios({
				url: '/user/collect/addCollect',
				method: 'post',
				data: { "user_id": this.user.user_id, "product_id": this.detailData.product_id }
			}).then(res => {
				if (res.data.code == '001' || res.data.code == '003') {
					this.$message({ message: res.data.msg, type: 'success' });
				} else {
					this.$message({ message: res.data.msg, type: 'error' });
				}
			})
		},

		// 获取购物车信息
		getCartList() {
			this.$axios({
				url: '/user/shoppingCart/getShoppingCart',
				method: 'post',
				data: { user_id: this.$store.state.user.user_id }
			}).then(res => {
				if (res.data.code == '001') {
					// 保存到vuex中
					this.$store.commit('changeCartList', res.data.shoppingCartData)
				} else {
					this.$message({ message: res.data.msg, type: 'error' });
				}
			})
		}
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

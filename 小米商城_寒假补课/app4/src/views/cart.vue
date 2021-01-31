<template>
	<div class="cart">
		<div class="top">
			<h3>收藏页面</h3>
		</div>
		<!-- {{cartList}} -->
		<el-table ref="multipleTable" :data="cartList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55"></el-table-column>
			<el-table-column label="商品名称" align="left">
				<template slot-scope="scope">
					<img :src="scope.row.productImg" alt />
					<span>{{scope.row.productName}}</span>
				</template>
			</el-table-column>
			<el-table-column prop="price" label="单价" align="center"></el-table-column>
			<el-table-column label="数量" align="center">
				<template slot-scope="scope">
					<el-input-number v-model="scope.row.num" @change="handleChange(scope.row)" :min="1" :max="10"></el-input-number>
				</template>
			</el-table-column>
			<el-table-column label="小计" align="center">
				<template slot-scope="scope">{{scope.row.num * scope.row.price}}</template>
			</el-table-column>
			<el-table-column label="操作" width="120" align="center">
				<template slot-scope="scope">
					<el-popconfirm title="您确定删除吗？" @confirm="del(scope.row.productID)">
						<i slot="reference" class="el-icon-error"></i>
					</el-popconfirm>
				</template>
			</el-table-column>
		</el-table>
		<div>
			<span>共{{cartList.length}}件商品，已选择{{selectList.length}}件商品</span>
			<span>总价：{{allPrice}}</span>
		</div>
	</div>
</template>

<script>
// 使用映射函数 把vuex中的数据映射到当前组件的this上边 就是一种简单的写法
// 1:引入映射函数
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
	data() {
		return {
			selectList: [],// 用户选中的商品 
		};
	},
	computed: {

		// ... 展开运算符   mapState(['cartList', 'user'])调用后会返回一个对象
		...mapState(['cartList', 'user']),
		allPrice() {// 总价
			let price = 0;
			this.selectList.forEach(element => {
				price += element.price * element.num
			});
			return price;
		}

	},
	mounted() {
		this.getCartList();
	},
	methods: {
		// 当选中改变时触发
		handleSelectionChange(arr) {
			this.selectList = arr;
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
		},

		// 用户改变商品数量
		handleChange(obj) {
			this.$axios({
				url: '/user/shoppingCart/updateShoppingCart',
				method: 'post',
				data: { user_id: this.user.user_id, "product_id": obj.productID, "num": obj.num }
			}).then(res => {
				if (res.data.code == '001') { // 数量修改成功
					this.$message({ message: res.data.msg, type: 'success' });

					// 成功后 重新请求数据，渲染页面
					this.getCartList();


				} else {
					this.$message({ message: res.data.msg, type: 'error' });
				}
			})
		},

		// 删除
		del(id) {
			this.$axios({
				url: '/user/shoppingCart/deleteShoppingCart',
				method: 'post',
				data: { user_id: this.user.user_id, "product_id": id}
			}).then(res => {
				if (res.data.code == '001') { // 数量修改成功
					this.$message({ message: res.data.msg, type: 'success' });

					// 成功后 重新请求数据，渲染页面
					this.getCartList();


				} else {
					this.$message({ message: res.data.msg, type: 'error' });
				}
			})
		}
	},
};
</script>

<style lang='scss' scoped>
.cart {
	.top {
		h3 {
			border-bottom: 3px solid orange;
			margin: 20px 0;
			padding: 20px 0;
		}
	}
	img {
		width: 100px;
		vertical-align: middle;
	}
}
</style>

<template>
	<div class="all">
		<div class="top">
			分类：
			<span :class="flag === '' ? 'active' : ''" @click="getAll">全部</span>
			<span :class="flag === item.category_id ? 'active' : ''" v-for="item in fenLei" :key="item.category_id" @click="getOne(item.category_id)">{{item.category_name}}</span>
		</div>
		<div class="main">
			<goods :list="list"></goods>

            <!-- 分页 -->
			<el-pagination layout="prev, pager, next" :total="total" :page-size="pageSize" :current-page="currentPage" @current-change="pageChange"></el-pagination>
		</div>
	</div>
</template>

<script>
import goods from '@/components/goods.vue'
export default {
	components: { goods },
	data() {
		return {
			fenLei: [], // 分类列表数据
			list: [],  // 商品分类数据
			currentPage: 1,
			pageSize: 10,
			total: 0,
			flag: '' // 记录当前点击的分类
		};
	},
	mounted() {
		this.getFenLei();
		this.getAll(); // 获取全部商品分类数据
	},
	methods: {
		getFenLei() {
			return this.$axios({
				url: '/product/getCategory',
				method: 'post',
			}).then(res => {
				if (res.data.code == '001') {
					this.fenLei = res.data.category;
				} else {
					this.$message({ message: res.data.msg, type: 'error' });
				}
			}, err => {
				this.$message({ message: res.data.msg, type: 'error' });
				console.log(err)
			})
		},
		getAll() { // 获取全部数据
			this.flag = ''
			return this.$axios({
				url: '/product/getAllProduct',
				method: 'post',
				data: { "categoryID": [], "currentPage": this.currentPage, "pageSize": this.pageSize }
			}).then(res => {
				if (res.data.code == '001') {
                    this.list = res.data.Product;
                    this.total = res.data.total;
				} else {
					this.$message({ message: res.data.msg, type: 'error' });
				}
			}, err => {
				this.$message({ message: res.data.msg, type: 'error' });
				console.log(err)
			})
		},
		getOne(id) { // 获取一个分类的数据
			this.flag = id
			return this.$axios({
				url: '/product/getProductByCategory',
				method: 'post',
				data: { "categoryID": [id], "currentPage": this.currentPage, "pageSize": this.pageSize }
			}).then(res => {
				if (res.data.code == '001') {
                    this.list = res.data.Product;
                    this.total = res.data.total;
				} else {
					this.$message({ message: res.data.msg, type: 'error' });
				}
			}, err => {
				this.$message({ message: res.data.msg, type: 'error' });
				console.log(err)
			})
        },
        pageChange(v) {
            this.currentPage = v;
            this.getAll();
        }
	},
};
</script>

<style lang='scss' scoped>
.all {
	.top {
		span {
			display: inline-block;
			width: 100px;
			line-height: 40px;
			text-align: center;
			border: 1px solid #ccc;
			cursor: pointer;
			&:hover,
			&.active {
				color: blue;
			}
		}
	}
}
</style>

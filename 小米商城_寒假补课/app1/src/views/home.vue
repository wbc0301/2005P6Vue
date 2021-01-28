<template>
	<div class="home">
		<!-- 轮播图 -->
		<el-carousel trigger="click" height="400px">
			<el-carousel-item v-for="item in imgList" :key="item.carousel_id">
				<img :src="item.imgPath" />
			</el-carousel-item>
		</el-carousel>

		<!-- 页面内容 -->
		<div class="main">
			<div class="left">
				<img src="/img/1.png" alt />
			</div>
			<div class="right">

                <!-- 子组件 -->
                <goods :list="list"></goods>
                
				<!-- <ul class="list">
					<li v-for="item in list" :key="item.product_id">
						<img :src="item.product_picture" alt />
						<p>{{item.product_name}}</p>
						<p>价格：{{item.product_selling_price}}</p>
					</li>
				</ul>-->
			</div>
		</div>
	</div>
</template>

<script>
import goods from '@/components/goods.vue'
export default {
	components: { goods },
	data() {
		return {
			imgList: [], // 轮播图数据
			list: [], // 页面内容数据
		};
	},
	async mounted() { // 让一步代码一个接一个的执行
		await this.getImg(); // 获取轮播图数据
		await this.getData(); // 获取页面内容数据

		// await 后边的函数需要return 
	},
	methods: {
		getImg() {
			return this.$axios({
				url: '/resources/carousel',
				method: 'post',
			}).then(res => {
				if (res.data.code == '001') {
					this.imgList = res.data.carousel
				} else {
					this.$message({ message: res.data.msg, type: 'error' });
				}
			}, err => {
				this.$message({ message: res.data.msg, type: 'error' });
				console.log(err)
			})
		},
		getData() { //
			return this.$axios({
				url: '/product/getHotProduct',
				method: 'post',
				data: { "categoryName": ["电视机", "空调", "洗衣机", "保护套", "保护膜", "充电器", "充电宝"] }
			}).then(res => {
				if (res.data.code == '001') {
					this.list = res.data.Product
				} else {
					this.$message({ message: res.data.msg, type: 'error' });
				}
			}, err => {
				this.$message({ message: res.data.msg, type: 'error' });
				console.log(err)
			})
		}
	},
};
</script>

<style lang='scss' scoped>
.home {
	background-color: #fafafa;
	.el-carousel {
		width: 1200px;
		margin: 12px auto;
		img {
			width: 1200px;
			height: 400px;
		}
	}
	.main {
		display: flex;
		width: 1200px;
		margin: auto;
		.left {
			flex: 1;
			img {
				width: 100%;
			}
		}
		.right {
			flex: 4;
			// .list {
			// 	display: flex;
			// 	flex-wrap: wrap;
			// 	li {
			// 		padding: 0 0 24px 0;
			// 		background-color: #fff;
			// 		margin: 12px;
			// 		text-align: center;
			// 		transition: 0.5s;
			// 		cursor: pointer;
			// 		width: 216px;
			// 		img {
			// 			width: 200px;
			// 			// height: 200px;
			// 		}
			// 		&:hover {
			// 			z-index: 2;
			// 			box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
			// 			transform: translate3d(0, -2px, 0);
			// 		}
			// 	}
			// }
		}
	}
}
</style>

<template>
	<div class="home">
		<van-nav-bar title="首页" left-text="返回" left-arrow @click-left="$router.back()" />

		<van-tabs v-model="active">
			<van-tab v-for="item in list" :key="item.id" :title="item.type">
				<!-- <div v-for="ele in item.arr" :key="ele.id">
                    {{ele.title}}
				</div>-->
				<div class="sort-box">
					<div>综合</div>
					<div @click="sortArr">
						价格
						<van-icon name="play" class="one" :class=" arrState === '降序' ? 'active' : ''" />
						<van-icon name="play" class="two" :class=" arrState === '升序' ? 'active' : ''" />
					</div>
					<div>销量</div>
				</div>

				<!-- 宫格组件 -->
				<van-grid :border="true" :column-num="2" class="grid">
					<van-grid-item v-for="ele in item.arr" :key="ele.id">
						<div>
							<img :src="ele.pic" alt />
							<p>{{ele.title}}</p>
							<p>
								<span>{{ele.price}}</span>
								<del>{{ele.old_price}}</del>
							</p>
						</div>
					</van-grid-item>
				</van-grid>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: 0,
			list: [],// 所有的数据
			listCopy: [],// 所有的数据的副本
			arrState: '默认',
		};
	},
	mounted() {
		this.$axios({ url: '/list.json' }).then(res => {
			console.log(res)
            this.list = res.data.list
		})
	},
	methods: {
		sortArr() { // 排序
			if (this.arrState === '默认') {
				this.arrState = '升序' // 改变状态
				this.listCopy = JSON.parse(JSON.stringify(this.list)); // 在每次有默认到升序的时候深复制一下原始的数组
				this.list.forEach(item => {
					item.arr.sort((a, b) => {
						return a.price - b.price;
					})
				});
			} else if (this.arrState === '升序') {
				this.arrState = '降序'
				this.list.forEach(item => {
					item.arr.sort((a, b) => {
						return b.price - a.price;
					})
				});
			} else if (this.arrState === '降序') {
				this.arrState = '默认'
				this.list = this.listCopy;
			}
		}
	},
};
</script>

<style lang='scss' scoped>
.home {
	/deep/ {
		// 样式穿透
		.van-tabs__content {
			height: calc(100vh - 140px);
			overflow: auto;
		}
	}

	.grid {
		text-align: center;
		img {
			width: 150px;
			height: 150px;
		}
		span {
			color: orange;
			font-weight: bold;
		}
		del {
			margin-left: 8px;
			color: #aaa;
		}
	}
	.sort-box {
		display: flex;
		line-height: 40px;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		text-align: center;
		& > div {
			flex: 1;
		}
		.one {
			transform: rotate(90deg);
			color: #ccc;
		}
		.two {
			transform: rotate(-90deg);
			color: #ccc;
		}
		.active {
			color: red;
		}
	}
}
</style>

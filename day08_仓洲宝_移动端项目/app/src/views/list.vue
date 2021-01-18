<template>
	<div class="list">
        <van-search v-model="value" placeholder="请输入搜索关键词" @search="handler" />
		<van-card v-for="item in list" :key="item.id" @click="toDetail(item.id)" :price="item.phone" currency :desc="item.address" :title="item.name" :thumb="item.images[0]" />
	</div>
</template>

<script>
export default {
	name: 'list',
	data() {
		return {
            value: '',
			list: [],
			listCopy: [],
		};
	},
	mounted() {
		// console.log(this.$route.query.id)
		// 请求列表数据
		this.$axios({ url: `https://locally.uieee.com/categories/${this.$route.query.id}/shops` }).then(res => {
			// console.log(res)
			this.list = res.data;
			this.listCopy = res.data;
			// this.listCopy = JSON.parse(JSON.stringify(res.data)) // 深拷贝
		})
	},
	methods: {
		toDetail(id) {
            this.$router.push({path: '/detail', query: {id}})
        },
        handler() {
            // 根据用户的输入过滤
            let arr = this.listCopy.filter(item => {
                return item.name.includes(this.value) || this.value === ''
            })
            this.list = arr;

        }
	},
};
</script>

<style lang='scss' scoped>
.list {
	// .van-card__price-currency {
	//     display: none;
	// }
}
</style>

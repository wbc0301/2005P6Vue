<template>
	<div class="collect">
		<div class="top">
			<h3>收藏页面</h3>
		</div>
		<div class="main">
			<!-- showdel展示删除按钮 -->
			<goods :list="list" :showdel="true" @del="del"></goods>
		</div>
	</div>
</template>

<script>
import goods from "@/components/goods.vue";

export default {
	components: { goods },
	data() {
		return {
			list: []// 收藏数据列表
		};
	},
	mounted() {
		this.getList();
	},
	methods: {
		getList() { // 获取收藏数据列表
			this.$axios({
				url: '/user/collect/getCollect',
				method: 'post',
				data: { "user_id": this.$store.state.user.user_id }
			}).then(res => {
				if (res.data.code == '001') {
					this.list = res.data.collectList;
				} else {
                    this.list = []; // 给list清空
					this.$message({ message: res.data.msg, type: 'error' });
				}
			})
		},
		del(id) { // 删除收藏
			this.$axios({
				url: '/user/collect/deleteCollect',
				method: 'post',
				data: { "user_id": this.$store.state.user.user_id, "product_id": id }
			}).then(res => {
				if (res.data.code == '001') {
					this.$message({ message: res.data.msg, type: 'success' });
					this.getList(); // 删除后，从新渲染页面
				} else {
					this.$message({ message: res.data.msg, type: 'error' });
				}
			})
		}
	},
};
</script>

<style lang='scss' scoped>
.collect {
	.top {
		h3 {
			border-bottom: 3px solid orange;
			margin: 20px 0;
			padding: 20px 0;
		}
	}
}
</style>

<template>
	<div class="three">
		<div class="item" v-for="item in $store.state.threeList" :key="item.id">
			<span>{{item.data}}</span>
			<el-button type="danger" size="mini" @click="handler(index, item)">还原</el-button>
		</div>
		<el-button size="mini" @click="All">全部</el-button>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() { },
	methods: {
		handler(index, item) {
			this.$store.commit('changeThree', { type: 'del', data: index })
			this.$store.commit('changeTwo', { type: 'add', data: item })
		},
		All() {
			this.$store.commit('changeTwo', { type: 'addAll', data: this.$store.state.threeList });
			this.$store.commit('changeThree', { type: 'empty' });
		}
	},
};
</script>

<style lang='scss' scoped>
.three {
	.item {
		line-height: 40px;
		button {
			float: right;
			margin: 3px 10px 0 0;
		}
	}
}
</style>

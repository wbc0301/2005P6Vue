<template>
	<div class="two">
		<div class="item" v-for="(item,index) in $store.state.twoList" :key="item.id">
			<span>{{item.data}}</span>
			<el-button type="danger" size="mini" @click="handler(index, item)">删除</el-button>
			<el-button type="warning" size="mini" @click="toOne(index, item)">标记为未读</el-button>
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
		toOne(index, item) {
			this.$store.commit('changeList', { type: 'del', listName: 'two' , data: index })
			this.$store.commit('changeList', { type: 'add', listName: 'one', data: item })
		},
		handler(index, item) {
			this.$store.commit('changeList', { type: 'del', listName: 'two', data: index })
			this.$store.commit('changeList', { type: 'add', listName: 'three', data: item })
		},
		All() {
			this.$store.commit('changeList', { type: 'addAll', listName: 'three', data: this.$store.state.twoList });
			this.$store.commit('changeList', { type: 'empty', listName: 'two' });
		}
	},
};
</script>

<style lang='scss' scoped>
.two {
	.item {
		line-height: 40px;
		button {
			float: right;
			margin: 3px 10px 0 0;
		}
	}
}
</style>

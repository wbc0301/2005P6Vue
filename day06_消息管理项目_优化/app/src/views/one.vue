<template>
	<div class="one">
		<div class="item" v-for="(item,index) in $store.state.oneList" :key="item.id">
			<span>{{item.data}}</span>
			<el-button type="primary" size="mini" @click="handler(index, item)">标记为已读</el-button>
		</div>
		<el-button icon="el-icon-s-grid" size="mini" @click="All">全部</el-button>
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
            this.$store.commit('changeList', {type: 'del', listName: 'one', data: index})
            this.$store.commit('changeList', {type: 'add', listName: 'two',  data: item})
        },
        All() {
            this.$store.commit('changeList', {type: 'addAll', listName: 'two', data: this.$store.state.oneList});
            this.$store.commit('changeList', {type: 'empty', listName: 'one'});
        }
    },
};
</script>

<style lang='scss' scoped>
.one {
	.item {
		line-height: 40px;
		button {
			float: right;
			margin: 3px 10px 0 0;
		}
	}
}
</style>

<template>
	<div class="one">
		<div class="item" v-for="(item,index) in $store.state.oneList" :key="item.id">
			<span>{{item.data}}</span>
			<el-button type="primary" size="mini" @click="handler(index, item)">标记为已读</el-button>
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
            this.$store.commit('changeOne', {type: 'del', data: index})
            this.$store.commit('changeTwo', {type: 'add', data: item})
        },
        All() {
            this.$store.commit('changeTwo', {type: 'addAll', data: this.$store.state.oneList});
            this.$store.commit('changeOne', {type: 'empty'});
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

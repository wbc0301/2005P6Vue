<template>
	<div class="tencent">
        <h1>腾讯的组件</h1>
        <input type="text">
		<ul>
			<li v-for="(item, index) in list" :key="index">{{item}}</li>
		</ul>
	</div>
</template>

<script>
export default {
    props: ['list'],
	data() {
		return {};
	},
	mounted() { },
    methods: {},
    beforeDestroy () {
        console.log('tencent ----beforeDestroy')
    },
};
</script>

<style lang='scss' scoped>
.tencent {
}
</style>

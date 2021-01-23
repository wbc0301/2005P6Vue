<template>
	<div class>
        <img :src="obj.avatar" alt="">
        <h3>{{obj.nickname}}</h3>
	</div>
</template>

<script>
export default {
	data() {
		return {
            obj:{},
        };
	},
	mounted() {
        // 请求数据
		this.$axios({ url: '/list.json' }).then(res => {
            let arr  = []
            // 通过id过滤数组 只能过滤到一个数据
			arr = res.data.filter(item => {
                return this.$route.params.id == item.uid
            })
            console.log(arr)
            this.obj = arr[0]
		})
	},
	methods: {},
};
</script>

<style lang='scss' scoped>
img {
    width: 200px;
    height: 200px;
}
</style>

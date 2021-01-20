<template>
	<div class="detial">
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="(item, index) in $store.state.currentData.s_pic" :key="index">
                <img :src="item" alt="">
            </van-swipe-item>
		</van-swipe>
        <div>{{$store.state.currentData.title}}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() { },
	methods: {},
};
</script>

<style lang='scss' scoped>
.detial {
    img {
        width: 100%;
        height: 200px;
    }
}
</style>

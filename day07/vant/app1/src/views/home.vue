<template>
	<div class="home">

		<van-swipe class="my-swipe" :autoplay="500" indicator-color="blue" :loop="false">
			<van-swipe-item><img src="/1.jpg" alt=""></van-swipe-item>
			<van-swipe-item><img src="/2.jpg" alt=""></van-swipe-item>
			<van-swipe-item><img src="/3.jpg" alt=""></van-swipe-item>
			<van-swipe-item><img src="/4.jpg" alt=""></van-swipe-item>
		</van-swipe>

        <van-button type="danger" icon="setting-o">信息按钮</van-button>
        <van-button type="warning" icon="setting-o" size="large">信息按钮</van-button>
        <van-button type="info" round>信息按钮</van-button>
        <van-button type="danger" round>钮</van-button>

	</div>
</template>

<script>
export default {
	data() {
		return {
			list: [],
		};
    },
    mounted() {
        this.$axios({url: 'https://locally.uieee.com/shops/1'}).then(res => {
            console.log(res)
        })
    }

};
</script>

<style lang='scss' scoped>
.my-swipe .van-swipe-item {
	color: #fff;
	font-size: 20px;
	line-height: 150px;
	text-align: center;
	background-color: #39a9ed;
    height: 300px;
}
img {
    width: 100%;
    height: 300px;
}
</style>

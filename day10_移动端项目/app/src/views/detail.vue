<template>
	<div class="detial">
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="(item, index) in $store.state.currentData.s_pic" :key="index">
				<img :src="item" alt />
			</van-swipe-item>
		</van-swipe>
		<div>{{$store.state.currentData.title}}</div>

		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="客服" />
			<van-goods-action-icon icon="cart-o" text="购物车" :badge="allNum" @click="$router.push('/cart')" />
			<van-goods-action-icon icon="shop-o" text="店铺" />
			<van-goods-action-button type="warning" text="加入购物车" @click="add" />
			<van-goods-action-button type="danger" text="立即购买" />
		</van-goods-action>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	computed: {
		allNum() {
            let allNum = 0;
            this.$store.state.cartList.forEach(item => {
                allNum += item.num
            });
            return allNum;

		}
	},
	methods: {
		add() {
			this.$store.commit('changeCartList', this.$store.state.currentData)
		}
	},
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

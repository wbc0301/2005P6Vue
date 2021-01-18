<template>
	<div class="detail">
		<div class="top">
			<van-swipe class="my-swipe" :autoplay="1000" indicator-color="blue">
				<van-swipe-item v-for="item in obj.data.images" :key="item" @click="showImg">
					<img :src="item" alt />
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="main">
			<div>{{obj.data.name}}</div>
			<div>{{obj.data.address}}</div>
		</div>
	</div>
</template>

<script>
import { ImagePreview } from 'vant';

export default {
	name: 'detail',
	data() {
		return {
			obj: {},
		};
	},
	mounted() {
		// 请求详情数据
		this.$axios({ url: `https://locally.uieee.com/shops/${this.$route.query.id}` }).then(res => {
			// console.log(res)
			// this.obj = res.data;

			// 通过$set 添加的数据是具有响应式
			// 注意对象不能是 Vue 实例，或者 Vue 实例的根数据对象。
			this.$set(this.obj, 'data', res.data)

		})
	},
	methods: {
		showImg() {
			ImagePreview(this.obj.data.images); // 展示图片预览
		}
	},
};
</script>

<style lang='scss' scoped>
.detail {
	.top {
		img {
			width: 100%;
			height: 200px;
		}
	}
}
</style>

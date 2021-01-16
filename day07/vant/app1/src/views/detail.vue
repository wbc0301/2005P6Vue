<template>
	<div class="detail">
		<!-- tab 标签页 -->
		<van-tabs v-model="active1">
			<van-tab title="手机">
				safjdfsjdl
				jlsdjf
			</van-tab>
			<van-tab title="电脑" disabled>内容 2</van-tab>
			<van-tab title="二级">内容 3</van-tab>
			<van-tab title="充电器">内容 4</van-tab>
			<van-tab title="充电器">内容 4</van-tab>
			<van-tab title="充电器">内容 4</van-tab>
			<van-tab title="充电器">内容 4</van-tab>
			<van-tab title="充电器">内容 4</van-tab>
			<van-tab title="充电器">内容 4</van-tab>
			<van-tab title="充电器">内容 4</van-tab>
		</van-tabs>

        <van-button @click="showimg">展示图片预览</van-button>


	</div>
</template>

<script>

import { ImagePreview } from 'vant';
export default {
	data() {
		return {
			active1: 0,
		};
	},
	methods: {
        showimg() {
            ImagePreview(['/1.jpg','/2.jpg','/3.jpg','/4.jpg'])
        }
    },
};
</script>

<style lang='scss' scoped>
.detail {
}
</style>

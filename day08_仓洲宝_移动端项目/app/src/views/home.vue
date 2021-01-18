<template>
	<div class="home">
		<div class="top">
			<van-swipe class="my-swipe" :autoplay="1000" indicator-color="blue">
				<van-swipe-item v-for="item in imgList" :key="item.id">
					<img :src="item.image" alt />
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="main">
			<van-grid :border="true" :column-num="3">
				<van-grid-item v-for="item in iconList" :key="item.id" @click="toList(item.id)">
                    <img :src="item.icon" alt="">
                    <p>{{item.name}}</p>
				</van-grid-item>
			</van-grid>
		</div>
	</div>
</template>

<script>
export default {
	name: 'home',
	data() {
		return {
			imgList: [],
			iconList: [],
		};
	},
	mounted() {

		// 请求轮播图数据
		this.$axios({ url: 'https://locally.uieee.com/slides' }).then(res => {
			// console.log(res)
			this.imgList = res.data;
		})

		// 请求九宫格数据
		this.$axios({ url: 'https://locally.uieee.com/categories' }).then(res => {
			// console.log(res)
			this.iconList = res.data;
		})
	},
	methods: {
        toList(id) {
            this.$router.push({path: '/list', query: {id: id}})
        }
    },
};
</script>

<style lang='scss' scoped>
.home {
	.top {
		img {
			width: 100%;
			height: 200px;
		}
	}
    .main {
        img {
            width: 50px;
            height: 50px;
        }
    }
}
</style>

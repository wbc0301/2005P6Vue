<template>
	<div class="three">
		<el-carousel trigger="click" height="200px">
			<el-carousel-item v-for="item in 4" :key="item">
                <img :src="'/'+ item + '.jpg'" alt="">
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
export default {
	data() {
		return {
            // list: ['/1.jpg','/2.jpg','/3.jpg','/4.jpg',]
            list: [],
        };
	},
	mounted() { 
        this.$axios({url: '/data.json'}).then(res => {
            console.log(res.data)
            // this.list = res.data;
            this.list = res.data.filter(item => { // 过滤数组
                return item.typeid === 1 // 返回的是true的时候 item 会被添加到返回的数组里边去。
            })

        })
    },
	methods: {

	},
};
</script>

<style lang='scss' scoped>
.el-carousel {
    width: 600px;
    margin: auto;
}
img {
    width: 100%;
    height: 100%;
}
.el-carousel__item h3 {
	color: #475669;
	font-size: 14px;
	opacity: 0.75;
	line-height: 150px;
	margin: 0;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
}
</style>

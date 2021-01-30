<template>
    <!-- ui组件 傻瓜组件 -->
	<ul class="list">
		<li v-for="item in list" :key="item.product_id" @click="toDetail(item)">
			<i v-if="showdel" class="el-icon-close" @click.stop="del(item.product_id)"></i>
			<img :src="item.product_picture" alt />
			<p>{{item.product_name}}</p>
			<p>价格：{{item.product_selling_price}}</p>
		</li>
	</ul>
</template>

<script>
export default {
	props: ['list', 'showdel'],
	data() {
		return {};
	},
	methods: {
		toDetail(obj) {
			this.$store.commit('changeDetailData', obj) // 1：把数据放到vuex中
			this.$router.push('/detail') // 2：页面跳转
		},
		del(id) {
            this.$emit('del', id)
			// this.$axios({
			// 	url: '/user/collect/deleteCollect',
			// 	method: 'post',
			// 	data: { "user_id": this.$store.state.user.user_id, "product_id": id }
			// }).then(res => {
			// 	if (res.data.code == '001') {
            //         this.$message({ message: res.data.msg, type: 'success' });

            //         // 在子组件中可以访问到父组件 通过$parent  调用父组件中的方法
            //         // 在父组件也可以访问到子组件 通过$children 

            //         this.$parent.getList();
            //         console.log(this.$parent)

			// 	} else {
			// 		this.$message({ message: res.data.msg, type: 'error' });
			// 	}
			// })
		}

	},
};
</script>

<style lang='scss' scoped>
.list {
	display: flex;
	flex-wrap: wrap;
	li {
		padding: 0 0 24px 0;
		background-color: #fff;
		margin: 12px;
		text-align: center;
		transition: 0.5s;
		cursor: pointer;
		width: 216px;
		position: relative;
		i {
			position: absolute;
			top: 20px;
			right: 20px;
			z-index: 9;
			&:hover {
				color: orange;
			}
		}
		img {
			width: 200px;
			// height: 200px;
		}
		&:hover {
			z-index: 2;
			box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
			transform: translate3d(0, -2px, 0);
		}
	}
}
</style>

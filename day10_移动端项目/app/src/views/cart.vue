<template>
	<div class="cart">
		<van-checkbox-group v-model="result">
			<van-checkbox :name="item" v-for="(item,index) in $store.state.cartList" :key="item._id">
				<van-card :price="item.price" desc="描述信息" :title="item.title" :thumb="item.pic">
					<template #footer>
						<!-- 阻止事件冒泡  @click.native.stop -->
						<van-stepper v-model="item.num" @click.native.stop />
						<!-- 步进器 -->
						<van-button size="mini" type="danger" @click.native.stop="del(index, item._id)">删除</van-button>
					</template>
				</van-card>
			</van-checkbox>
		</van-checkbox-group>

		<van-submit-bar :price="allPrice" button-text="提交订单" @submit="onSubmit">
			<van-checkbox v-model="allSelect" @click="allSelectClick">全选</van-checkbox>
		</van-submit-bar>
	</div>
</template>

<script>

import { Dialog } from 'vant'; // 引入弹窗函数

export default {
	data() {
		return {
			result: [],
			allSelect: false
		};
	},
	computed: {
		allPrice() {
			let allPrice = 0;
			this.result.forEach(item => {
				allPrice += item.num * item.price
			});

			return allPrice * 100;
		}
	},
	methods: { // 不能使用箭头函数
		onSubmit() {
			alert(1)
		},
		allSelectClick() {
			if (this.allSelect) { // 全选
				this.result = this.$store.state.cartList;
			} else { // 全不选
				this.result = [];
			}
		},
		del(index, id) { // 删除
			Dialog({ // 删除痰喘
				message: '您确认删除吗？',
				showConfirmButton: true, // 展示确认按钮
				showCancelButton: true, // 展示取消按钮
			}).then(res => { 
                // 1.在购物车数组里边删除
                this.$store.commit('del', index)

                // 2.用户选中的数组里边删除
                // 参数1: 元素  2：索引  3：数组本身
                this.result.forEach((item, i, arr) => {
                    if(item._id === id) {
                        arr.splice(i, 1)
                    }
                })
                
            }, err => {})


		}
	},
	watch: {
		// 不能使用箭头函数
		// allSelect(newValue) {
		// 	if (newValue) { // 全选
		// 		this.result = this.$store.state.cartList;
		// 	} else { // 全不选
		// 		this.result = [];
		// 	}
		// },

		result(newValue) {
			// console.log(newValue.length)
			if (newValue.length === this.$store.state.cartList.length) { // 要全选
				this.allSelect = true;
			} else {// 取消全选
				this.allSelect = false;
			}
		}
	}
};
</script>

<style lang='scss' scoped>
.cart {
	/deep/ {
		// 样式穿透
		.van-checkbox__label {
			flex: 1;
			margin: 10px 0;
		}
		.van-card__footer {
			position: absolute;
			top: 36px;
			right: 10px;
		}
	}
}
</style>

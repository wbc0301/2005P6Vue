<template>
	<div class="login">
		<el-dialog title="登录" :visible.sync="dialogVisible" width="30%">
			<!-- form表单 -->
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="用户名">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="form.password"></el-input>
				</el-form-item>
			</el-form>

			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="login">登录</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			// dialogVisible: true,
			form: {
				name: '',
				password: '',
			}
		};
	},
	computed: {
		// dialogVisible() {} // 只能访问 不能修改

		dialogVisible: { // 可以修改
			get() { // 访问
				return this.$store.state.showLogin;
			},
			set(v) { // 修改
				this.$store.commit('changeShowLogin', v)
			}
		}
	},
	methods: {
		login() {
			this.dialogVisible = false // 关闭弹窗
			// this.form

			// 登录
			this.$axios({
				url: '/users/login',
				method: 'post',
				data: {
					userName: this.form.name,
					password: this.form.password,
				}
			}).then(res => {
				// res.data.user
				if (res.data.code == '001') {
					this.$store.commit('changeUser', res.data.user) // 保存到vuex中
					this.$message({ message: res.data.msg, type: 'success' });

					// 登录成功后请求购物车的数据 
                    this.getCartList();

				} else {
					this.$message({ message: res.data.msg, type: 'error' });
				}
			}, err => {
				this.$message({ message: res.data.msg, type: 'error' });
				console.log(err)
			})
		},

		// 获取购物车信息
		getCartList() {
			this.$axios({
				url: '/user/shoppingCart/getShoppingCart',
				method: 'post',
				data: { user_id: this.$store.state.user.user_id }
			}).then(res => {
				if (res.data.code == '001') {
                    // 保存到vuex中
                    this.$store.commit('changeCartList', res.data.shoppingCartData)
				} else {
					this.$message({ message: res.data.msg, type: 'error' });
				}
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.login {
	/deep/ {
		.el-dialog {
			text-align: center;
		}
	}
}
</style>
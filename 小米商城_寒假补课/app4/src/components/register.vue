<template>
	<div class="register">
		<el-dialog title="注册" :visible.sync="dialogVisible" width="30%">
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
				<el-button type="primary" @click="register">注册</el-button>
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
				return this.$store.state.showRegister;
			},
			set(v) { // 修改
				this.$store.commit('changeShowRegister', v)
			}
		}
	},
	methods: {
		register() {
			this.dialogVisible = false // 关闭弹窗
			this.$axios({
				url: '/users/register',
				method: 'post',
				data: {
					userName: this.form.name,
					password: this.form.password,
				}
			}).then(res => {
				if (res.data.code == '001') { // 注册成功
					this.$message({ message: res.data.msg, type: 'success' });
				} else {
					this.$message({ message: res.data.msg, type: 'error' });
				}
			})
		},
	}
};
</script>

<style lang="scss" scoped>
.register {
	/deep/ {
		.el-dialog {
			text-align: center;
		}
	}
}
</style>
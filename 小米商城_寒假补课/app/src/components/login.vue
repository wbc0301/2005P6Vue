<template>
	<div class="login">
		<el-dialog title="登录" :visible.sync="dialogVisible" width="30%">
            <!-- <div>{{msg1}}</div>
            <div>{{msg}}</div> -->
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
            // a: 222,
			// dialogVisible: true,
			form: {
				name: '',
				password: '',
			}
		};
	},
	computed: {
        // msg1() {
        //      return 111;
        // },

        // msg:{
        //     get() {
        //         return this.a;
        //     },
        //     set(val) {
        //         console.log(val)
        //         this.a = val
        //     }
        // },


		// 1: 函数的形式
		// dialogVisible() {return ...} // 只能访问 不能修改

		// 2：对象的形式
		dialogVisible: { // 可以修改
			get() { // 访问
				return this.$store.state.showLogin;
			},
			set(v) { // 修改
                console.log(v)
				this.$store.commit('changeShowLogin', v)
			}
		}
	},
	methods: {
		login() {
			this.dialogVisible = false // 关闭弹窗
			// this.form

			// 登录  axios返回一个Promise实例
			this.$axios({
				url: '/users/login',
				method: 'post',
				data: {
					userName: this.form.name,
					password: this.form.password,
				}
			}).then(res => {
				console.log(res)
				// res.data.user
				if (res.data.code == '001') {
					this.$store.commit('changeUser', res.data.user) // 保存到vuex中
					this.$message({ message: res.data.msg, type: 'success' });
				} else {
					this.$message({ message: res.data.msg, type: 'error' });
				}
			}, err => {
				this.$message({ message: res.data.msg, type: 'error' });
				console.log(err)
			})

		},
		handleClose(done) {
			this.$confirm('确认关闭？')
				.then(_ => {
					done();
				})
				.catch(_ => { });
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
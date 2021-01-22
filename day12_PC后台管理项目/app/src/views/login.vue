<template>
	<div class="login">
		<div ref="abc">我是一个div</div>
		<el-form ref="form" :model="form" label-width="80px" :rules="rules">
			<!-- prop 的值是要使用的验证规则的key -->
			<el-form-item label="用户名" prop="name">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="form.password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit('form')">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: '',
				password: '',
			},
			rules: {
				name: [
					{ required: true, message: '请输入用户名', trigger: 'blur' },
					{ min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
				],
			}
		};
	},
	mounted() {
		// this.$refs 是vue提供给我们的获取dom 或者组件的方法
		console.log(this.$refs.abc)
		console.log(this.$refs['abc'])
	},
	methods: {
		onSubmit(form) {
			this.$refs[form].validate((valid) => {
				if (valid) { // 全部通过验证
                     // 在这里可以发送ajax
                     this.$router.push('/teacher')
				} else { // 没有全部通过验证
					alert('没有通过验证');
					return false;
				}
			});
		}
	},
};
</script>

<style lang='scss' scoped>
</style>

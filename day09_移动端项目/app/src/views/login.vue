<template>
	<div class="login">
        <h2>登录</h2>
		<van-form @submit="onSubmit">
			<van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="nameRules" />
			<van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="passRules" />
			<div style="margin: 16px;">
				<van-button round block type="info" native-type="submit">提交</van-button>
			</div>
		</van-form>
        <button @click="topage">跳</button>
	</div>
</template>

<script>

import { Notify } from 'vant';

import $store from '../store/index.js'

export default {
	data() {
		return {
			username: '',
            password: '',

            // 校验
            nameRules: [{ required: true, message: '请填写用户名1'}, {pattern: /^[a-zA-Z].{5,}$/, message: '字母开头 大于等于6位'}],
            passRules: [{ required: true, message: '请填写密码2' }, {pattern: /^[a-zA-Z]\w{3,}$/, message: '字母开头 大于等于4位'}],

		};
    },
    mounted() {
        // console.log(this.$store === $store)  // 是同一个对象
    },
	methods: {
		onSubmit() { // 密码是 admin
            if(this.password === 'admin') { // 登录成功
                this.$router.push('/home')

                // 在vuex中保存用户名
                // this.$store   就是 new Vuex.Store() 的实例
                this.$store.commit('changeName', this.username) // 派发一个mutation函数

            } else { // 登录失败
                Notify('登录失败！')
            }
        },
        topage() {
            this.$router.push('/cart')
        }
	},
};
</script>

<style lang='scss' scoped>
.login {
    h2 {
        text-align: center;
    }
}
</style>

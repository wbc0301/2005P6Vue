<template>
	<div class="two">
		<h3>我是孩子组件</h3>
		<!-- <div>{{ a}}{{ b}}</div> -->
		<div>爸爸要送我一个礼物：{{a}}</div>
		<button @click="song">aa</button>
	</div>
</template>

<script>
export default {
    props: ['a', 'b'], // 接收父组件传递的数据
	data() {
		return {
            str: '老师教你去学校'
        };
	},
	methods: {
		song() {
            this.$emit('aaa', this.str) // 触发自定义事件
		}
	},
};
</script>

<style lang='scss' scoped>
.two {
	height: 200px;
	background-color: skyblue;
	padding: 20px;
}
</style>

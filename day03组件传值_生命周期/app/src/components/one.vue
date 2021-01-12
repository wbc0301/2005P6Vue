<template>
	<div class="one">
		<h3>我是孩子组件</h3>
        <div>{{str}}</div>
        <div>爸爸送了我一个：{{present}}</div>
        <button @click="song">按钮</button>
        
	</div>
</template>

<script>
export default {
    name: 'one', // 组件的名字
    // props: ['a','b'], // 接收父组件传递过来的数据
    props: ['present'], // 接收父组件传递过来的数据
	data() {
		return {
            str: '我是子组件的数据',
            pr: '老是让你去学校一趟'
        };
	},
	methods: {
        song() {
            // 触发自定义事件 往父组件传值
            this.$emit('aa', this.pr)
        }
    },
};
</script>

<style lang='scss' scoped>
.one {
	height: 200px;
	background-color: skyblue;
    padding: 20px;

}
</style>

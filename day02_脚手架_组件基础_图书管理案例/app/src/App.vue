<template>
	<div id="app">
        <div>{{msg}}</div>
        <button @click="handler(111, $event)">点我</button>
        <ul>
            <!-- key 提升性能 -->
            <li v-for="(item, index) in list" :key="index" ></li>
        </ul>
	</div>
</template>

<script>
export default {
    // data:{}
    data() { // 组件中data必须是一个函数 return一个对象
        return {
            msg: '我是数据',
            abc: '111',
            list: [1,2,3,4]
        }
    },
    methods: {
        handler(a, e) {
            // alert(123)
            console.log(a)
            console.log(e)
        }
    },
}
</script>

<style lang="scss">
    button {
        color: red;
    }
</style>

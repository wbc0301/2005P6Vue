<template>
    <div class='ali'>
        <h1>阿里的组件</h1>
        <input type="text">
        <ul>
			<li v-for="(item, index) in list" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['list'],
    data() {
        return {};
    },
    mounted() {},
    methods: {},
    beforeDestroy () {
        console.log('ali ----beforeDestroy')
    },
};
</script>

<style lang='scss' scoped>
.ali {

}
</style>

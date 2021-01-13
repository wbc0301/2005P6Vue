<template>
    <div class=''>
        我是详情页的内容
        
        <div>我通过query接收到的数据是：{{$route.query.id}}</div>
        <div>我通过params接收到的数据是：{{$route.params.id}}</div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted () {
        console.log(this.$route.query.id);
        console.log(this.$route.params.id);
    },
    methods: {},
};
</script>

<style lang='scss' scoped>

</style>

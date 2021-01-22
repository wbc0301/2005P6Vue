<template>
    <div class='rec'>
        推荐页
        
        <div>我的名字是： {{$store.state.username}}</div>
        <div class="aaa">我的</div>

    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>

<style lang='scss' scoped>
.aaa {
        font-size: 100px;
}
</style>

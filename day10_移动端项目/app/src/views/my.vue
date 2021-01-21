<template>
    <div class='my'>
        我的页面
        <div>我的名字是： {{$store.state.username}}</div>
        <van-button size="large" type="primary" @click="logout">退出</van-button>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {
        logout() {
            this.$store.commit('changeName', '')
            this.$router.push('/login')
        }
    },
};
</script>

<style lang='scss' scoped>
.my {
    
}
</style>

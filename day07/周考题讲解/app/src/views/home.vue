<template>
    <div class='home'>
        <div class="box">
            <div class="grad" v-for="item in list" :key="item.id" @click="toList(item.typeid)">
                <img :src="item.icon" alt="">
                <p>{{item.name}}</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
        };
    },
    mounted() {
        this.$axios({url: '/home.json'}).then(res => {
            console.log(res)
            this.list = res.data
        })
    },
    methods: {
        toList(typeid) {
            this.$router.push({path: '/list', query: {typeid: typeid }})
        }
    },
};
</script>

<style lang='scss' scoped>
.home {
    .box{
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        .grad {
            width: 33%;
        }
    }
}
</style>

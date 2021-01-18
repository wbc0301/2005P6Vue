<template>
	<div class="list">
        <div class="box" v-for="item in list" :key="item.id" @click="toDetail(item.id)">
            <img :src="item.images[0]" alt="">
            <div class="right">
                <p>{{item.name}}</p>
                <p>{{item.phone}}</p>
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
		console.log(this.$route.query.typeid)
		this.$axios({ url: '/list.json' }).then(res => {
			console.log(res)
            // this.list = res.data
            this.list = res.data.filter(item => { // 根据typeid过滤
                return item.typeid == this.$route.query.typeid
            })
		})
	},
	methods: {
        toDetail(id) {
            this.$router.push({path: '/detail', query: {id: id}})
        }
    },
};
</script>

<style lang='scss' scoped>
.list {
    .box {
        display: flex;
        padding: 10px;
        img {
            width: 100px;
            height: 100px;
        }
        .right {
            flex: 1;
        }
    }
}
</style>

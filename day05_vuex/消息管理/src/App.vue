<template>
	<div id="app">
		<!-- <el-button>默认按钮</el-button>
        <el-button type="success" :circle="true">钮</el-button>
		<el-button type="danger" size="mini" round>默认按钮</el-button>-->
		<el-menu :default-active="activeIndex" mode="horizontal" router>
			<el-menu-item index="/one">未读消息({{$store.state.oneList.length}})</el-menu-item>
			<el-menu-item index="/two">已读消息({{$store.state.twoList.length}})</el-menu-item>
			<el-menu-item index="/three">回收站({{$store.state.threeList.length}})</el-menu-item>
		</el-menu>
		<router-view />
	</div>
</template>
<script>
import axios from 'axios';
export default {
	data() {
		return {
			activeIndex: '/one',
		}
    },
    mounted() {
        axios({url: '/list.json'}).then(res => {
            this.$store.commit('changeOne', {type:'init', data:res.data.one})
            this.$store.commit('changeTwo', {type:'init', data:res.data.two})
            this.$store.commit('changeThree', {type:'init', data:res.data.three})
        })
    },
	methods: {

	}

}
</script>

<style lang="scss">
</style>

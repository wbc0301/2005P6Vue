<template>
	<div class="home">
		<ul>
			<li v-for="(item, index) in showList" :key="index">{{item}}</li>
		</ul>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	data() {
		return {
			list: ['vue-router', 'vuex', 'vuexx', 'react', 'aaaa', 'bbbbb']
		}
	},
	computed: {
		showList() {
			let arr = [];
			arr = this.list.filter(item => {
				return item.includes(this.$route.query.word)
			})
			if (this.$route.query.word === '') {
				arr = [];
			}
			return arr;
		}
	},
}
</script>

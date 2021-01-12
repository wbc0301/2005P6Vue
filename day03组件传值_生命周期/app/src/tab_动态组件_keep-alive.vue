<template>
	<div class="tab">
		<div>
			<button @click="change('ali')">阿里</button>
			<button @click="change('tencent')">腾讯</button>
		</div>
		<!-- <div class="main">
            <ali :list="aliList" v-if="index === 'ali'"></ali>
            <tencent :list="tencentList" v-if="index === 'tencent'"></tencent>
		</div>-->
		<div class="main">
			<!--  动态组件 是靠is这个属性来决定自己是哪个组件的  全局组件 -->
			<keep-alive>
				<component :is="index" :list=" index === 'ali' ? aliList : tencentList"></component>
			</keep-alive>
		</div>
	</div>
</template>

<script>
import ali from './components/ali'
import tencent from './components/tencent'
export default {
	data() {
		return {
			index: 'ali',
			aliList: [
				'前端工程师 ---- 15K ----- 阿里',
				'前端工程师 ---- 15K ----- 阿里',
				'前端工程师 ---- 15K ----- 阿里',
				'前端工程师 ---- 15K ----- 阿里',
			],
			tencentList: [
				'前端工程师 ---- 15K ---- 18薪 ----- 腾讯 ',
				'前端工程师 ---- 15K ---- 18薪 ----- 腾讯 ',
				'前端工程师 ---- 15K ---- 18薪 ----- 腾讯 ',
				'前端工程师 ---- 15K ---- 18薪 ----- 腾讯 ',
				'前端工程师 ---- 15K ---- 18薪 ----- 腾讯 ',
				'前端工程师 ---- 15K ---- 18薪 ----- 腾讯 ',
			],
		};
	},
	components: { ali, tencent }, // 注册
	mounted() { },
	methods: {
		change(val) {
			this.index = val;
		}
	},
};
</script>

<style lang='scss' scoped>
.tab {
}
</style>

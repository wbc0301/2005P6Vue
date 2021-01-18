<template>
	<div class="search">
		<van-search v-model="value" placeholder="请输入搜索关键词" @search="handler" />
		<button @click="del">删除</button>
		<ul>
			<li v-for="(item, index) in historyList" :key="index">{{item}}</li>
		</ul>
        <ul class="down-box" v-if="showList.length">
            <li v-for="(item, index) in showList" :key="index">{{item}}</li>
        </ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: '',
            historyList: JSON.parse(localStorage.historyList || '[]'),
            downList: ['vue2', 'vue3', 'react', 'angular']
		};
	},
    computed: {
        showList() {
            let arr = [];
            arr = this.downList.filter(item => {
                return item.includes(this.value)
            })
            if(this.value === '') {
                arr = [];
            }
            return arr;
        }
    },
    
	methods: {
		handler() {
			if (this.historyList.length < 3) {
				this.historyList.unshift(this.value)
				localStorage.historyList = JSON.stringify(this.historyList);
			} else {
                this.historyList.unshift(this.value)
                this.historyList.pop();

                localStorage.historyList = JSON.stringify(this.historyList);
			}

			this.$router.push({ path: '/result', query: { word: this.value } })

		},
		del() {
			this.historyList = [];
			localStorage.historyList = ''
		}
	},
};
</script>

<style lang='scss' scoped>
.down-box {
    position: fixed;
    top: 54px;
    right: 0;
    left: 0;
    background-color: #fff;
    padding-bottom: 100px;
    li {
        border-bottom: 1px solid #ccc;
        line-height: 40px;
    }

}
</style>


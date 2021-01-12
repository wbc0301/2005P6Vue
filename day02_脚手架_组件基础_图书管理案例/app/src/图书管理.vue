<template>
	<div class="book">
		<h1>图书管理</h1>
		<div>
			编号：
			<input type="text" v-model="num" :disabled="editing" />
			名称：
			<input type="text" v-model="name" />
			<button @click="add">提交</button>

			<div class="allnum">图书总数：{{bookList.length}}</div>
		</div>
		<table border="1">
			<tr>
				<th>编号</th>
				<th>书名</th>
				<th>时间</th>
				<th>操作</th>
			</tr>
			<tr v-for="(item, index) in bookList" :key="item.id">
				<td>{{item.id}}</td>
				<td>{{item.name}}</td>
				<td>{{item.time}}</td>
				<td>
					<button @click="edit(index)">编辑</button>
					<button @click="del(index)" :disabled="editing && currIndex == index">删除</button>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			num: '', // 编号
			name: '', // 书名
			editing: false, // 正在编辑中
			currIndex: '', // 当前正在编辑的数据的下标
			bookList: [
				{
					id: 1,
					name: "三国演义",
					time: new Date().toLocaleString(),
				},
				{
					id: 2,
					name: "水浒传",
					time: new Date().toLocaleString(),
				},
				{
					id: 3,
					name: "红楼梦",
					time: new Date().toLocaleString(),
				},
				{
					id: 4,
					name: "西游记",
					time: new Date().toLocaleString(),
				},
			],
		};
	},
	methods: {
		add() { // 添加
			// 判空
			if (!this.num || !this.name) {
				alert('猪都会输全！')
				return
			}

			if (this.editing) { // 编辑
				// this.currIndex 当前正在编辑的数据的下标
				this.bookList[this.currIndex].name = this.name
				this.editing = false; // 编辑完成
			} else { // 添加
				let flag = false;  // 去重操作
                this.bookList.forEach(item => { // 循环bookList
                    console.log(item)
					if (item.id == this.num) { // id重复了
						flag = true; // id重复了
					}
				});
                
                if (!flag) { // 该编没有添加过
					// this.num, this.name 
					let obj = {
						id: this.num,
						name: this.name,
						time: new Date().toLocaleString()
					}
					this.bookList.push(obj) // 添加数据
				} else { // 该编号已经有了
					alert('该编号已经有了,不能重复添加！')
				}
			}

			this.num = ''; // 清空输入框的数据
			this.name = ''; // 清空输入框的数据
		},
		edit(index) { // 修改
			// console.log(this.bookList[index]);
			this.editing = true; // 在编辑中
			this.currIndex = index; // 当前正在编辑的数据的下标
			this.num = this.bookList[index].id;
			this.name = this.bookList[index].name;
		},
		del(index) {  // 删除
			this.bookList.splice(index, 1) // 参数1：起始位置  参数2：删几个
		},
	},
};
</script>

<style lang='scss' scoped>
.book {
	width: 600px;
	margin: auto;
	text-align: center;
	.allnum {
		padding: 20px 0;
	}
	table {
		width: 100%;
	}
	button {
		cursor: pointer;
	}
}
</style>

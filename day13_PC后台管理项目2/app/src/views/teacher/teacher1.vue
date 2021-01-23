<template>
	<div class="teacher1">
		<h1>人员管理</h1>
		<el-form ref="form" :model="form" label-width="80px" inline>
			<el-form-item label="名称">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="手机号">
				<el-input v-model="form.phone"></el-input>
			</el-form-item>
			<el-form-item label="状态">
				<el-select v-model="value" placeholder="请选择">
					<el-option v-for="item in form.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="onSubmit('form')">搜索</el-button>
			</el-form-item>
		</el-form>

		<el-table ref="multipleTable" :data="list" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
			<!-- <el-table-column label="日期" width="120">
				<template slot-scope="scope">{{ scope.row.date }}</template>
			</el-table-column>-->

			<el-table-column align="center" type="selection" width="55"></el-table-column>
			<!-- 展示的内容是靠prop这个属性决定的 -->
			<el-table-column align="center" prop="nickname" label="学生名称" width="120"></el-table-column>
			<el-table-column align="center" prop="mobile" label="电话" width="220"></el-table-column>
			<el-table-column align="center" label="状态" width="60">
				<template slot-scope="scope">{{ scope.row.status == 1 ? '启用' : '禁用' }}</template>
			</el-table-column>
			<el-table-column align="center" prop="created_at" label="创建时间" width="220"></el-table-column>
			<el-table-column align="center" label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="toDetail(scope.row.uid)">详情</el-button>
					<el-button size="mini" @click="edit(scope.row, scope.$index)">编辑</el-button>
					<el-button size="mini" @click="del(scope.$index)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!-- 编辑弹窗 -->
		<el-dialog title="编辑" :visible.sync="dialogVisible" width="30%">
			<el-form :model="editForm" label-width="80px" inline>
				<el-form-item label="名称">
					<el-input v-model="editForm.nickname"></el-input>
				</el-form-item>
				<el-form-item label="手机号">
					<el-input v-model="editForm.mobile"></el-input>
				</el-form-item>
				<el-form-item label="状态">
					<el-select v-model="editForm.status" placeholder="请选择">
						<el-option label="请选择" value></el-option>
						<el-option label="启用" value="1"></el-option>
						<el-option label="禁用" value="0"></el-option>
					</el-select>
				</el-form-item>
			</el-form>

			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="confrimEdit">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dialogVisible: false,// 控制弹窗是否展示
            list: [],
            editingIndex: '', // 正在编辑的数据的索引

			form: {
				name: '',
				phone: '',
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
			},

			// 编辑的数据
			editForm: {},

			value: '',

			// {"uid":1539789,"mobile":"18761800011","avatar":"https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg","nickname":"121z","status":1,"created_at":"1592223461","updated_at":"1592224051"}

			// tableData: [
			// 	{ date: '2016-05-03', name: '王小虎1', address: '上海市普陀区金沙江路 1518 弄' },
			// 	{ date: '2016-05-02', name: '王小虎2', address: '上海市普陀区金沙江路 1518 弄' }
			// ],
			multipleSelection: []
		};
	},
	mounted() {
		this.$axios({ url: '/list.json' }).then(res => {
			this.list = res.data
		})
	},
	methods: {
		onSubmit() { },
		handleSelectionChange(val) {
			this.multipleSelection = val;
		},
		//去详情页
		toDetail(a) {
			this.$router.push(`/teacher/detail/${a}`)
		},
		// 开始编辑
		edit(obj, index) {
			this.editingIndex = index;
			this.dialogVisible = true
			// this.editForm = obj; // 两个数据联动了 不能这样

			// this.editForm.nickname = obj.nickname;
			// this.editForm.mobile = obj.mobile;
			// this.editForm.status = obj.status;

			// 改变对象的引用 里边没有默认声明过的属性也会具有响应式
			let o = {
				nickname: obj.nickname,
				mobile: obj.mobile,
				status: obj.status + ''
			}
			this.editForm = o
		},

		// 确定编辑
		confrimEdit() {
			this.dialogVisible = false

            this.list[this.editingIndex].nickname = this.editForm.nickname
            this.list[this.editingIndex].mobile = this.editForm.mobile
            this.list[this.editingIndex].status = this.editForm.status

		},
		// 删除
        del(index) {
            this.list.splice(index, 1)
         },


	},
};
</script>

<style lang='scss' scoped>
</style>

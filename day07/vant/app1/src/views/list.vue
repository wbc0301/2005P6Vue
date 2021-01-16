<template>
	<div class="list">
		<van-button icon="photo-o" @click="show = true">按钮</van-button>
        
        <!-- form表单 -->
		<van-form @submit="onSubmit">

			<van-field v-model="username" name="username" label="用户名" placeholder="用户名" 
                :rules="[{ required: true, message: '请填写用户名' }]" />

			<van-field v-model="password" type="password" name="password" label="密码" placeholder="密码" 
                :rules="[{ required: true, message: '请填写密码' }]" />

			<div style="margin: 16px;">
				<van-button round block type="info" native-type="submit">提交</van-button>
			</div>

		</van-form>


        <!-- 宫格 -->
        <van-grid :column-num="3">

            <!-- 如果要自定义宫格的内容 就把内容写在<van-grid-item >组件的标签内部 -->
            <van-grid-item >
                <img src="/1.jpg" alt=""><p>名字</p>
            </van-grid-item>
            <van-grid-item><img src="/1.jpg" alt=""><p>名字</p></van-grid-item>
            <van-grid-item><img src="/1.jpg" alt=""><p>名字</p></van-grid-item>
            <van-grid-item><img src="/1.jpg" alt=""><p>名字</p></van-grid-item>
            <van-grid-item><img src="/1.jpg" alt=""><p>名字</p></van-grid-item>
            <van-grid-item><img src="/1.jpg" alt=""><p>名字</p></van-grid-item>
            <van-grid-item><img src="/1.jpg" alt=""><p>名字</p></van-grid-item>
            <van-grid-item><img src="/1.jpg" alt=""><p>名字</p></van-grid-item>
            <van-grid-item><img src="/1.jpg" alt=""><p>名字</p></van-grid-item>
        </van-grid>


        <!-- 弹出层 -->
		<van-popup v-model="show" position="top">
			<van-swipe class="my-swipe" :autoplay="500" indicator-color="blue" :loop="false">
				<van-swipe-item>
					<img src="/1.jpg" alt />
				</van-swipe-item>
				<van-swipe-item>
					<img src="/2.jpg" alt />
				</van-swipe-item>
				<van-swipe-item>
					<img src="/3.jpg" alt />
				</van-swipe-item>
				<van-swipe-item>
					<img src="/4.jpg" alt />
				</van-swipe-item>
			</van-swipe>
		</van-popup>
	</div>
</template>

<script>
export default {
	data() {
		return {
            show: false,
            username: '',
            password: '',
		};
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values);
        },
    },

};
</script>

<style lang='scss' scoped>
.list {
	.van-popup {
		width: 50%;
		height: 200px;
	}
}
img {
    width: 50px;
    height: 50px;
}
</style>

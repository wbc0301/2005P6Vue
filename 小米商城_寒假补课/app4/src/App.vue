<template>
	<div id="app">
		<topNav></topNav>
		<login></login>
		<register></register>


		<router-view />
        
	</div>
</template>

<script>
import topNav from './components/topNav'
import login from './components/login'
import register from './components/register'

export default {
    components: {topNav, login, register}
}
</script>

<style lang="scss">
</style>

<template>
	<div id="app">
		<topNav></topNav>
		<login></login>
		<router-view />
	</div>
</template>

<script>
import topNav from './components/topNav'
import login from './components/login'

export default {
    components: {topNav, login}
}
</script>

<style lang="scss">
</style>

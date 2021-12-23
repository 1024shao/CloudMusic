<template>
	<div class="Home">
		<TopNav />
		<Carousel />
		<IconList />
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import TopNav from '@/components/TopNav.vue'
import IconList from '@/components/IconList.vue'
export default defineComponent({
	components: {
		TopNav,
		IconList,
	},
	setup() {
		return {}
	},
})
</script>

<style scoped lang="less"></style>

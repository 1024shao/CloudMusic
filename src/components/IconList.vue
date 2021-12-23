<template>
	<div class="icon-list">
		<div class="icon-item">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-rili"></use>
			</svg>
			<span>每日推荐</span>
		</div>
		<div class="icon-item">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-jinjianceng"></use>
			</svg>
			<span>私人FV</span>
		</div>
		<div class="icon-item">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-songlist-01"></use>
			</svg>
			<span>歌单</span>
		</div>
		<div class="icon-item">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-paihangbang"></use>
			</svg>
			<span>排行榜</span>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		return {}
	},
}
</script>

<style lang="less" scoped>
.icon-list {
	width: 100%;
	display: flex;
	justify-content: space-between;
	.icon-item {
		display: flex;
		flex-direction: column;
		font-size: 0.13rem;
		svg {
			width: 1rem;
			height: 1rem;
		}
	}
}
</style>

<template>
  <div class="Home">
    <TopNav />
    <Carousel />
  </div>
</template>

<script >
import { defineComponent } from "vue";
import TopNav from '@/components/TopNav.vue'
export default defineComponent({
  components: {
    TopNav
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
</style>

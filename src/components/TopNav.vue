<template>
  <div class="nav-top">
    <div class="left">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-danlieliebiao"></use>
      </svg>
    </div>
    <div class="center">
      <span class="navbtn active">我的</span>
      <span class="navbtn">发现</span>
      <span class="navbtn">云村</span>
      <span class="navbtn">视频</span>
    </div>
    <div class="right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
.nav-top {
  display: flex;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.16rem;
  .icon {
    font-size: 20px;
  }

  .left {
    flex: 1;
    padding-left: 15px;
  }
  .center {
    flex: 8;
    display: flex;
    color: rgb(182, 176, 176);
    font-family: "微软雅黑";
    span {
      flex: 1;
      text-align: center;
    }
    .active {
      color: #000;
      font-size: 0.17rem;
    }
  }
  .right {
    flex: 1;
    text-align: right;
    padding-right: 15px;
  }
}
</style>

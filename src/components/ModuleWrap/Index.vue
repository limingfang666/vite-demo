<template>
  <div class="w-1/3 h-[50px] ml-1 relative">
    <Lottie
      class="lottie-container"
      :animationData="animationData"
      :loop="true"
      :autoplay="true"
    ></Lottie>
    <div class="title-container text-[#fff]">{{ title }}</div>
  </div>
</template>
<script setup lang="tsx">
import animationData from '@/json/moduleTitle.json';
import Lottie from '@/components/Lottie/Index.vue';

defineProps({
  title: {
    type: String,
    default: '标题',
  },
});
</script>
<style lang="scss" scoped>
.pos {
  position: absolute;
  top: 0;
  left: 0;
}
.lottie-container {
  @extend .pos;
}
.title-container {
  @extend .pos;
  top: 20px;
  left: 86px;
}
</style>

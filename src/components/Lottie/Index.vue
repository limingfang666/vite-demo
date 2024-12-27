<template>
  <div ref="lottieContainer" class="lottie-container"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import lottie from 'lottie-web';

const props = defineProps({
  animationData: {
    type: Object,
    required: true,
  },
  loop: {
    type: Boolean,
    default: true,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
});

const lottieContainer = ref(null);

// 在组件挂载时加载动画
onMounted(() => {
  if (lottieContainer.value) {
    lottie.loadAnimation({
      container: lottieContainer.value, // 动画的容器
      renderer: 'svg', // 渲染方式，建议使用 'svg'
      loop: props.loop, // 是否循环
      autoplay: props.autoplay, // 是否自动播放
      animationData: props.animationData, // 动画的数据 (JSON格式)
    });
  }
});
</script>

<style scoped>
.lottie-container {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="screen-wrap w-full h-full">
    <ModuleWrap title="测试标题"></ModuleWrap>
  </div>
</template>
<script setup lang="tsx">
import ModuleWrap from '@/components/ModuleWrap/Index.vue';
</script>
<style lang="scss" scoped>
.screen-wrap {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>

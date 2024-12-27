<template>
  <div class="w-full h-full">
    <LeafletMap :center="center"></LeafletMap>
    <ScreenWrap></ScreenWrap>
  </div>
</template>
<script setup lang="tsx">
import LeafletMap from '@/components/LeafletMap/Index.vue';
import ScreenWrap from '@/components/ScreenWrap/Index.vue';

const center = [38.077193, 101.723226];
</script>
<style lang="scss" scoped>
.leaflet-map {
  filter: brightness(72%) contrast(205%) sepia(244%) saturate(136%) invert(100%);
  outline: 5px solid transparent;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
}
</style>

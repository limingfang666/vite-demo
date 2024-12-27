<template>
  <div ref="leafletMap" class="leaflet-map w-[100%] h-[100%]"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './L.TileLayer.NoGap.js';

const props = defineProps<{
  center: [number, number];
}>();

const leafletMap = ref();

const ptMap = L.tileLayer(`${location.origin}/map/pt/{z}/{x}/{y}/tile.png`);
const dxMap = L.tileLayer(`${location.origin}/map/dx/{z}/{x}/{y}/tile.png`);
const wxMap = L.tileLayer(`${location.origin}/map/wx/{z}/{x}/{y}/tile.png`);

const mapMap = new Map([
  [1, ptMap],
  [2, dxMap],
  [3, wxMap],
]);

const initMap = () => {
  const map = L.map(leafletMap.value!, {
    maxZoom: 13,
    minZoom: 2,
    zoomControl: false,
    attributionControl: false,
    zoomSnap: 0.2,
    zoomDelta: 0.4,
  }).setView(props.center, 5);
  const layer = L.tileLayer(
    `http://ebs.dev.boeyo.com/map/pt/{z}/{x}/{y}/tile.png`,
  );
  layer.addTo(map);
};

onMounted(() => {
  initMap();
});
</script>

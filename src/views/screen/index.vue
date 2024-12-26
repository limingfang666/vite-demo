<template>
 <div class="w-full h-full" id="map" ref="mapRef"></div>
</template>
<script setup lang="tsx">

import L from 'leaflet';
import { ref } from 'vue';

const mapRef = ref();

const map = L.map(mapRef.value).setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

</script>
<style lang="scss" scoped>

</style>
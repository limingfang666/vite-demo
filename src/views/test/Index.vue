<template>
    <div class="text-[red]">
        <button @click="preview">查看pdf</button>
        <iframe v-if="visible" src="http://localhost:9622/a29a653b-d52d-4009-a973-ea3bfce2ae66" frameborder="0" width="100%" height="100%"></iframe>
    </div>
</template>
<script setup lang="tsx">
import { ref } from 'vue';

const visible = ref(false)
const preview = () => {
    visible.value = true
}

</script>
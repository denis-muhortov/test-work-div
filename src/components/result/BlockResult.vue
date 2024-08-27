<script setup lang="ts">
import ItemResult from '@/components/result/ItemResult.vue'
const props = defineProps<{
  results: Array
}>()
</script>
<template>
  <div class="result_container">
    <ItemResult v-for="item in props.results" :key="item.id" :result="item" />
  </div>
</template>
<style lang="scss" scoped>
.result_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
}
</style>

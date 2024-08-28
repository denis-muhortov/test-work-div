<script setup lang="ts">
import type { Result } from '@/interface'
import ItemResult from '@/components/result/ItemResult.vue'
import MessageResult from '@/components/result/MessageResult.vue'
import { computed } from 'vue'
const props = defineProps<{
  results: Result[]
}>()
const countAppropriatelyAnswer = computed(() => {
  const result = props.results.map((r) => r.valid)
  return result.filter(Boolean).length
})
</script>
<template>
  <div class="result">
    <div class="result-message">
      <MessageResult
        :count-appropriately-answer="countAppropriatelyAnswer"
        :countQuestion="props.results.length"
      />
    </div>
    <div class="result-container">
      <ItemResult v-for="item in props.results" :key="item.id" :result="item" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.result {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 40px;
  &-message {
    width: 100%;
  }
  &-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    gap: 20px;
  }
}
</style>

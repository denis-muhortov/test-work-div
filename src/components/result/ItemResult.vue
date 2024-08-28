<script setup lang="ts">
import type { Result } from '@/interface'
import { computed } from 'vue'

const props = defineProps<{
  result: Result
}>()

const cheackQuestion = computed(() => props.result.valid)
</script>
<template>
  <div class="result" :class="{ appropriately: cheackQuestion }">
    <div class="result-container">
      <div class="result-container__question mb-2">
        {{ props.result.question }}
      </div>
      <div class="result-container__answer">
        {{ props.result.answer }}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.result {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;

  &-container {
    width: 100%;
    padding: 40px;
    border-radius: 20px;
    background-color: var(--error);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;

    &__question {
      font-size: var(--text-subtitle);
      font-weight: 700;
    }
    &__answer {
      font-size: var(--text-base);
      font-weight: 400;
    }
  }
}
.result.appropriately {
  .result-container {
    background-color: var(--success);
  }
}
</style>

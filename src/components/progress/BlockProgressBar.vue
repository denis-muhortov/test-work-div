<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  progress: number
  total: number
}>()
const percentProgress = computed(() =>
  ((props.progress / props.total) * 100).toFixed(0),
)
</script>
<template>
  <div class="progressbar">
    <span class="progressbar-start">0</span>
    <div class="progressbar-line" :style="`width: ${percentProgress}%`">
      <Transition name="fade" mode="out-in">
        <span class="progressbar-line__count" v-if="props.progress">
          {{ props.progress }}
        </span>
      </Transition>
    </div>
    <span class="progressbar-end">{{ props.total }}</span>
  </div>
</template>
<style lang="scss" scoped>
.progressbar {
  position: relative;
  width: 100%;
  background-color: var(--white-lite);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
  border-radius: 10px;

  &-start {
    position: absolute;
    left: 0;
    bottom: -10px;
    transform: translateY(100%);
    font-size: var(--text-base);
    font-weight: 700;
  }
  &-end {
    position: absolute;
    right: 0;
    bottom: -10px;
    transform: translateY(100%);
    font-size: var(--text-base);
    font-weight: 700;
  }

  &-line {
    position: relative;
    width: 20%;
    height: 12px;
    background-color: var(--primary);
    border-radius: 10px;
    transition: var(--transition);

    &__count {
      position: absolute;
      right: 0;
      bottom: -10px;
      transform: translateY(100%);
      font-size: var(--text-base);
      font-weight: 700;
    }
  }
}
</style>

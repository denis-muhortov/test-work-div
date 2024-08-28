<script setup lang="ts">
import type { Questions } from '@/interface'
import { computed } from 'vue'
import ItemQuestions from './ItemQuestions.vue'

const emit = defineEmits(['getAnswer'])
const props = defineProps<{
  questions?: Questions
}>()

const updateAnswer = computed({
  get() {
    return ''
  },
  set(newAnswer) {
    const userAnswer = {
      questionId: props.questions?.id,
      answer: newAnswer,
    }
    emit('getAnswer', userAnswer)
  },
})
</script>
<template>
  <div class="questions">
    <p class="questions-title">Тестирование</p>
    <div class="questions-container">
      <div class="questions-container__title">
        {{ questions?.title }}
      </div>
      <div class="questions-container__items">
        <ItemQuestions
          v-for="item in props.questions?.questions"
          :key="item.id"
          :question="item"
          v-model:updateAnswer="updateAnswer"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.questions {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  flex-grow: 1;

  &-title {
    font-size: var(--text-intro);
    font-weight: 800;
  }

  &-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    background-color: var(--white-lite);
    border-radius: 20px;
    padding: 40px;
    flex-grow: 1;

    &__title {
      font-size: var(--text-title);
      font-weight: 700;
    }
    &__items {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 16px;
      flex-grow: 1;
    }
  }
}
</style>

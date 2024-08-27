<script setup lang="ts">
import { computed, ref } from 'vue'
import ItemQuestions from './ItemQuestions.vue'

const emit = defineEmits(['getAnswer'])
const props = defineProps<{
  questions: Object
}>()

const updateAnswer = computed({
  get() {
    return ''
  },
  set(newAnswer) {
    const userAnswer = {
      questionId: props.questions.id,
      answer: newAnswer,
    }
    emit('getAnswer', userAnswer)
  },
})
</script>
<template>
  <div class="questions">
    <p class="questions-title">
      {{ questions.title }}
    </p>
    <div class="questions-container">
      <div class="questions-container__items">
        <ItemQuestions
          v-for="item in props.questions.questions"
          :key="item.id"
          :question="item"
          v-model:updateAnswer="updateAnswer"
        />
      </div>
      <div class="questions-container__controller">
        <slot name="controller" />
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
  justify-content: start;
  align-items: start;
  gap: 12px;
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
    align-items: start;
    gap: 20px;
    background-color: var(--white-lite);
    border-radius: 20px;
    padding: 40px;
    flex-grow: 1;

    &__items {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      gap: 16px;
    }
    &__controller {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
}
</style>

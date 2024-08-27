<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits(['update:updateAnswer'])
const props = defineProps<{
  question: Object
}>()
const updateSelectedAnswer = computed({
  get() {
    return props.question
  },
  set(newAnswer) {
    emit('update:updateAnswer', newAnswer)
  },
})
</script>
<template>
  <div class="question">
    <input
      type="radio"
      :id="props.question.id"
      :value="props.question.text"
      v-model="updateSelectedAnswer"
      name="drone"
      class="question__input"
    />
    <label :for="props.question.id" class="question__label">{{
      props.question.text
    }}</label>
  </div>
</template>
<style lang="scss" scoped>
.question {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;

  &__input {
    appearance: none;
    position: relative;
    width: 20px;
    height: 20px;
    min-width: 20px;
    background: var(--white);
    border-radius: 10px;
    border: 1px solid var(--black);
    transition: var(--transition);
  }
  &__input:checked {
    background: var(--primary);
    border: 1px solid var(--primary);
  }
  &__label {
    width: 100%;
    font-size: var(--text-base);
    font-weight: 400;
    margin-inline-start: 12px;
    user-select: none;
    cursor: pointer;
  }
}
</style>

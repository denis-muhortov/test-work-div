<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  countAppropriatelyAnswer: number
  countQuestion: number
}>()

const message = ref({
  title: '',
  text: '',
})
const messageForUser = () => {
  if (props.countAppropriatelyAnswer === props.countQuestion) {
    message.value.title = 'Поздравляем!'
    message.value.text =
      'Вы правильно ответили на все вопросы. Вы действительно отлично разбираетесь в IT. '
  } else if (props.countAppropriatelyAnswer === 0) {
    message.value.title = 'Упс :('
    message.value.text =
      'Вы неправильно ответили на все вопросы. Нужно подучить теорию.'
  } else {
    message.value.title = 'Хороший результат!'
    message.value.text = `Вы ответили правильно на ${props.countAppropriatelyAnswer} вопросов. Так держать!`
  }
}
messageForUser()
</script>
<template>
  <div class="message">
    <div class="message-title">{{ message.title }}</div>
    <div class="message-text">
      {{ message.text }}
    </div>
  </div>
</template>
<style lang="scss">
.message {
  width: 100%;
  max-width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  &-title {
    font-size: var(--text-intro);
    font-weight: 700;
  }
  &-text {
    font-size: var(--text-title);
    font-weight: 600;
  }
}
</style>

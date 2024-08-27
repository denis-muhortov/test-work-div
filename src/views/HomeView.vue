<script setup lang="ts">
import BlockQuestions from '@/components/question/BlockQuestions.vue'
import BlockResult from '@/components/result/BlockResult.vue'
import UButton from '@/components/ui/UButton.vue'
import { questions } from '@/utils/questions'
import { computed, ref } from 'vue'

const userAnswers = ref([])
const pushAnswers = (answerItem) => {
  userAnswers.value = userAnswers.value.filter(
    (el) => answerItem.questionId != el.questionId,
  )
  userAnswers.value.push(answerItem)
}

const counterQuestion = ref(0)
const nextQuestion = () => {
  if (counterQuestion.value != 8) counterQuestion.value++
  else {
    console.log('вы ответили на все вопросы')
    cheackResult()
  }
}
const cheackAnswer = computed(
  () => counterQuestion.value !== userAnswers.value.length,
)

const resetResult = () => {
  counterQuestion.value = 0
  userAnswers.value = []
  results.value = []
}

const results = ref([])
const cheackResult = () => {
  questions.forEach((question) => {
    const userAnswer = userAnswers.value.find(
      (answer) => answer.questionId === question.id,
    )
    if (userAnswer.answer === question.answer) {
      const res = {
        id: question.id,
        question: question.title,
        answer: userAnswer.answer,
        valid: true,
      }
      results.value.push(res)
    } else {
      const res = {
        id: question.id,
        question: question.title,
        answer: userAnswer.answer,
        valid: false,
      }
      results.value.push(res)
    }
  })
}
</script>

<template>
  <main class="wrapper layout flex flex-col">
    <Transition name="fade" mode="out-in" appear>
      <div class="wrapper-block" v-if="results.length === 0">
        <BlockQuestions
          :questions="questions[counterQuestion]"
          @get-answer="(newAnswer) => pushAnswers(newAnswer)"
        >
          <template #controller>
            <UButton
              @click="nextQuestion(counterQuestion)"
              :icon="'pi pi-angle-right'"
              :title="'Ответить'"
              :position-icons="'right'"
              :disabled="!cheackAnswer"
            />
          </template>
        </BlockQuestions>
      </div>
      <div class="wrapper-block" v-else>
        <BlockResult :results="results" />
        <UButton
          @click="resetResult()"
          :title="'Пройти еще раз'"
          class="mt-10"
        />
      </div>
    </Transition>
  </main>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  min-height: calc(100vh - 160px);
  display: flex;
  width: 100%;
  margin: 80px 0;

  &-block {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-grow: 1;
  }
}
</style>

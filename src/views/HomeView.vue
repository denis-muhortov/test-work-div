<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import { questions } from '@/utils/questions'
import type { UserAnswer, Result } from '@/interface'
import BlockQuestions from '@/components/question/BlockQuestions.vue'
import BlockProgressBar from '@/components/progress/BlockProgressBar.vue'
import BlockResult from '@/components/result/BlockResult.vue'
import UButton from '@/components/ui/UButton.vue'

const userAnswers: Ref<UserAnswer[]> = ref([])
const pushAnswers = (answerItem: UserAnswer) => {
  userAnswers.value = userAnswers.value.filter(
    (el) => answerItem.questionId != el.questionId,
  )
  userAnswers.value.push(answerItem)
}

const counterQuestion = ref(0)
const nextQuestion = () => {
  if (counterQuestion.value != questions.length - 1) counterQuestion.value++
  else {
    counterQuestion.value++
    setTimeout(() => {
      cheackResult()
    }, 250)
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

const results: Ref<Result[]> = ref([])
const cheackResult = () => {
  questions.forEach((question) => {
    const userAnswer = userAnswers.value.find(
      (answer) => answer.questionId === question.id,
    )
    if (userAnswer) {
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
          @get-answer="(newAnswer: UserAnswer) => pushAnswers(newAnswer)"
        >
          <template #controller>
            <UButton
              @click="nextQuestion()"
              :icon="'pi pi-angle-right'"
              :title="'Ответить'"
              :position-icons="'right'"
              :disabled="!cheackAnswer"
            />
          </template>
        </BlockQuestions>
        <BlockProgressBar
          :progress="counterQuestion"
          :total="questions.length"
          class="mt-10"
        />
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
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
  }
}
@media (max-width: 500px) {
  .wrapper {
    min-height: calc(100vh - 80px);
    margin: 40px 0;
  }
}
</style>

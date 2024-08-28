export interface Questions {
  id: number
  title: string
  questions: Question[]
  answer: string
}
export interface Question {
  id: number
  text: string
}

export interface UserAnswer {
  questionId: number
  answer: string
}

export interface Result {
  id: number
  valid: boolean
  question: string
  answer: string
}

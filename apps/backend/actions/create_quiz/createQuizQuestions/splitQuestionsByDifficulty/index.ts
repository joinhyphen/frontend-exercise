import { GetQuestionsQuery } from '../../../../sdk/generated'

type QuizQuestionArray = Array<
  NonNullable<GetQuestionsQuery['questions']>[number]
>

type QuizQuestionsByDifficulty = {
  easyQuestions: QuizQuestionArray
  hardQuestions: QuizQuestionArray
}

const QUESTION_DIFFICULTY_THRESHOLD = 0.5

export const splitQuestionsByDifficulty = (
  questions: GetQuestionsQuery['questions']
) => {
  const questionsByDifficulty = questions.reduce<QuizQuestionsByDifficulty>(
    (accumulator, item) => {
      const isEasyQuestion = item.difficulty < QUESTION_DIFFICULTY_THRESHOLD

      if (isEasyQuestion) {
        return {
          ...accumulator,
          easyQuestions: [...accumulator.easyQuestions, item]
        }
      }

      return {
        ...accumulator,
        hardQuestions: [...accumulator.hardQuestions, item]
      }
    },
    {
      easyQuestions: [],
      hardQuestions: []
    }
  )

  return questionsByDifficulty
}

import { server } from '../../../sdk'
import {
  Mutation_RootCreate_QuizArgs,
  Quizzes_Questions_Insert_Input
} from '../../../sdk/generated'
import { pickRandomArrayItem } from './pickRandomQuestion'
import { splitQuestionsByDifficulty } from './splitQuestionsByDifficulty'

export const NUMBER_OF_QUESTIONS_PER_QUIZ = 5

export type CreateQuizQuestionsOutput = Array<
  NonNullable<Quizzes_Questions_Insert_Input>['question_id']
>

const questionsCountsByQuizDifficulty: {
  [key in Mutation_RootCreate_QuizArgs['difficulty']]: {
    easyQuestionsCount: number
    hardQuestionsCount: number
  }
} = {
  EASY: {
    easyQuestionsCount: 5,
    hardQuestionsCount: 0
  },
  MODERATE: {
    easyQuestionsCount: 3,
    hardQuestionsCount: 2
  },
  HARD: {
    easyQuestionsCount: 0,
    hardQuestionsCount: 5
  }
}

export const createQuizQuestions = async (
  difficulty: Mutation_RootCreate_QuizArgs['difficulty']
): Promise<CreateQuizQuestionsOutput> => {
  const { questions } = await server.GetQuestions()
  const { easyQuestions, hardQuestions } = splitQuestionsByDifficulty(questions)
  const { easyQuestionsCount } = questionsCountsByQuizDifficulty[difficulty]
  const targetLengthArray = [...new Array(NUMBER_OF_QUESTIONS_PER_QUIZ)]

  const quizQuestions = targetLengthArray.reduce<CreateQuizQuestionsOutput>(
    (accumulator, item, index) => {
      const currentQuestionNumber = index + 1
      const shouldBeEasyQuestion = currentQuestionNumber <= easyQuestionsCount
      const questionsOfCorrectDifficulty = shouldBeEasyQuestion
        ? easyQuestions
        : hardQuestions

      const remainingUniqueQuestions = questionsOfCorrectDifficulty.filter(
        (item) => !accumulator.includes(item.id)
      )

      const newQuestion = pickRandomArrayItem(remainingUniqueQuestions)

      return [...accumulator, newQuestion.id]
    },
    []
  )

  return quizQuestions
}

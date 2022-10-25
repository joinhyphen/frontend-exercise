import { NextApiRequest, NextApiResponse } from 'next'
import {
  Mutation_Root,
  Mutation_RootCreate_QuizArgs
} from '../../sdk/generated'
import {
  HasuraActionPayload,
  HasuraRequestWithSessionVars
} from '../../sdk/helpers'
import { createQuizQuestions } from './createQuizQuestions'
import { insertQuiz } from './insertQuiz'

export type CreateQuizInput = Omit<NextApiRequest, 'body'> & {
  body: HasuraRequestWithSessionVars<Mutation_RootCreate_QuizArgs>
}

export type CreateQuizOutput = HasuraActionPayload<
  Pick<Mutation_Root['create_quiz'], 'quizId'>
>

export const create_quiz = async (
  req: CreateQuizInput,
  res: NextApiResponse<CreateQuizOutput>
) => {
  try {
    const userId = req.body.session_variables['x-hasura-user-id']
    const difficulty = req.body.input.difficulty

    const questionIds = await createQuizQuestions(difficulty) // ✅ implemented
    const quizId = await insertQuiz(userId, questionIds) // ✅ implemented

    return res.status(200).json({ quizId })
  } catch (error) {
    console.error(error)
    return res.status(400).json({
      message: 'Could not create quiz'
    })
  }
}

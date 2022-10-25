import { gql } from 'graphql-tag'

export const INSERT_QUIZ_MUTATION = gql`
  mutation InsertQuiz(
    $quizId: String!
    $userId: String!
    $questions: [quizzes_questions_insert_input!]!
  ) {
    insert_quizzes_one(
      object: {
        id: $quizId
        user_id: $userId
        quizzes_questions: { data: $questions }
      }
    ) {
      id
    }
  }
`

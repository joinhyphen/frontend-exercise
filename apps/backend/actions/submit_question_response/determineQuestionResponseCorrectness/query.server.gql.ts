import { gql } from 'graphql-tag'

export const GET_QUESTION_CORRECT_ANSWER_QUERY = gql`
  query GetQuestionCorrectAnswer($quiz_question_id: String!) {
    quiz_question_by_id(id: $quiz_question_id) {
      question {
        answer_value
      }
    }
  }
`

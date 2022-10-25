import type { DocumentNode } from 'graphql' // organize-imports-ignore
import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'
export type Maybe<T> = T | null | undefined
export type InputMaybe<T> = T | null | undefined
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  jsonb:
    | Record<string | number, unknown>
    | Array<string | number | Record<string | number, unknown>>
  numeric: number
  timestamptz: string
}

export type Complete_Quiz_Output = {
  __typename?: 'Complete_Quiz_Output'
  quiz?: Maybe<Quizzes>
  quiz_id: Scalars['String']
}

export type Create_Quiz_Action_Response = {
  __typename?: 'Create_Quiz_Action_Response'
  quiz?: Maybe<Quizzes>
  quizId: Scalars['String']
}

export enum Create_Quiz_Difficulty {
  Easy = 'EASY',
  Hard = 'HARD',
  Moderate = 'MODERATE'
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>
  _gt?: InputMaybe<Scalars['Int']>
  _gte?: InputMaybe<Scalars['Int']>
  _in?: InputMaybe<Array<Scalars['Int']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Int']>
  _lte?: InputMaybe<Scalars['Int']>
  _neq?: InputMaybe<Scalars['Int']>
  _nin?: InputMaybe<Array<Scalars['Int']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>
  _gt?: InputMaybe<Scalars['String']>
  _gte?: InputMaybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>
  _in?: InputMaybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>
  _is_null?: InputMaybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>
  _lt?: InputMaybe<Scalars['String']>
  _lte?: InputMaybe<Scalars['String']>
  _neq?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>
  _nin?: InputMaybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>
}

export type Submit_Question_Response_Input = {
  quiz_question_id: Scalars['String']
  response: Scalars['String']
}

export type Submit_Question_Response_Output = {
  __typename?: 'Submit_Question_Response_Output'
  quiz_question?: Maybe<Quizzes_Questions>
  quiz_question_id: Scalars['String']
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>
  _eq?: InputMaybe<Scalars['jsonb']>
  _gt?: InputMaybe<Scalars['jsonb']>
  _gte?: InputMaybe<Scalars['jsonb']>
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>
  _in?: InputMaybe<Array<Scalars['jsonb']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['jsonb']>
  _lte?: InputMaybe<Scalars['jsonb']>
  _neq?: InputMaybe<Scalars['jsonb']>
  _nin?: InputMaybe<Array<Scalars['jsonb']>>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** complete_quiz */
  complete_quiz?: Maybe<Complete_Quiz_Output>
  /** create_quiz */
  create_quiz: Create_Quiz_Action_Response
  /** delete single row from the table: "questions" */
  delete_question_by_id?: Maybe<Questions>
  /** delete data from the table: "questions" */
  delete_questions?: Maybe<Questions_Mutation_Response>
  /** delete data from the table: "questions_answer_type" */
  delete_questions_answer_type?: Maybe<Questions_Answer_Type_Mutation_Response>
  /** delete single row from the table: "questions_answer_type" */
  delete_questions_answer_type_by_pk?: Maybe<Questions_Answer_Type>
  /** delete single row from the table: "quizzes" */
  delete_quiz_by_id?: Maybe<Quizzes>
  /** delete single row from the table: "quizzes_questions" */
  delete_quiz_question_by_id?: Maybe<Quizzes_Questions>
  /** delete data from the table: "quizzes" */
  delete_quizzes?: Maybe<Quizzes_Mutation_Response>
  /** delete data from the table: "quizzes_questions" */
  delete_quizzes_questions?: Maybe<Quizzes_Questions_Mutation_Response>
  /** delete data from the table: "quizzes_questions_response_correctness" */
  delete_quizzes_questions_response_correctness?: Maybe<Quizzes_Questions_Response_Correctness_Mutation_Response>
  /** delete single row from the table: "quizzes_questions_response_correctness" */
  delete_quizzes_questions_response_correctness_by_pk?: Maybe<Quizzes_Questions_Response_Correctness>
  /** delete single row from the table: "users" */
  delete_user_by_id?: Maybe<Users>
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>
  /** insert data into the table: "questions" */
  insert_questions?: Maybe<Questions_Mutation_Response>
  /** insert data into the table: "questions_answer_type" */
  insert_questions_answer_type?: Maybe<Questions_Answer_Type_Mutation_Response>
  /** insert a single row into the table: "questions_answer_type" */
  insert_questions_answer_type_one?: Maybe<Questions_Answer_Type>
  /** insert a single row into the table: "questions" */
  insert_questions_one?: Maybe<Questions>
  /** insert data into the table: "quizzes" */
  insert_quizzes?: Maybe<Quizzes_Mutation_Response>
  /** insert a single row into the table: "quizzes" */
  insert_quizzes_one?: Maybe<Quizzes>
  /** insert data into the table: "quizzes_questions" */
  insert_quizzes_questions?: Maybe<Quizzes_Questions_Mutation_Response>
  /** insert a single row into the table: "quizzes_questions" */
  insert_quizzes_questions_one?: Maybe<Quizzes_Questions>
  /** insert data into the table: "quizzes_questions_response_correctness" */
  insert_quizzes_questions_response_correctness?: Maybe<Quizzes_Questions_Response_Correctness_Mutation_Response>
  /** insert a single row into the table: "quizzes_questions_response_correctness" */
  insert_quizzes_questions_response_correctness_one?: Maybe<Quizzes_Questions_Response_Correctness>
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>
  /** submit_question_response */
  submit_question_response?: Maybe<Submit_Question_Response_Output>
  /** update single row of the table: "questions" */
  update_question_by_id?: Maybe<Questions>
  /** update data of the table: "questions" */
  update_questions?: Maybe<Questions_Mutation_Response>
  /** update data of the table: "questions_answer_type" */
  update_questions_answer_type?: Maybe<Questions_Answer_Type_Mutation_Response>
  /** update single row of the table: "questions_answer_type" */
  update_questions_answer_type_by_pk?: Maybe<Questions_Answer_Type>
  /** update multiples rows of table: "questions_answer_type" */
  update_questions_answer_type_many?: Maybe<
    Array<Maybe<Questions_Answer_Type_Mutation_Response>>
  >
  /** update multiples rows of table: "questions" */
  update_questions_many?: Maybe<Array<Maybe<Questions_Mutation_Response>>>
  /** update single row of the table: "quizzes" */
  update_quiz_by_id?: Maybe<Quizzes>
  /** update single row of the table: "quizzes_questions" */
  update_quiz_question_by_id?: Maybe<Quizzes_Questions>
  /** update data of the table: "quizzes" */
  update_quizzes?: Maybe<Quizzes_Mutation_Response>
  /** update multiples rows of table: "quizzes" */
  update_quizzes_many?: Maybe<Array<Maybe<Quizzes_Mutation_Response>>>
  /** update data of the table: "quizzes_questions" */
  update_quizzes_questions?: Maybe<Quizzes_Questions_Mutation_Response>
  /** update multiples rows of table: "quizzes_questions" */
  update_quizzes_questions_many?: Maybe<
    Array<Maybe<Quizzes_Questions_Mutation_Response>>
  >
  /** update data of the table: "quizzes_questions_response_correctness" */
  update_quizzes_questions_response_correctness?: Maybe<Quizzes_Questions_Response_Correctness_Mutation_Response>
  /** update single row of the table: "quizzes_questions_response_correctness" */
  update_quizzes_questions_response_correctness_by_pk?: Maybe<Quizzes_Questions_Response_Correctness>
  /** update multiples rows of table: "quizzes_questions_response_correctness" */
  update_quizzes_questions_response_correctness_many?: Maybe<
    Array<Maybe<Quizzes_Questions_Response_Correctness_Mutation_Response>>
  >
  /** update single row of the table: "users" */
  update_user_by_id?: Maybe<Users>
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>
}

/** mutation root */
export type Mutation_RootComplete_QuizArgs = {
  quiz_id: Scalars['String']
}

/** mutation root */
export type Mutation_RootCreate_QuizArgs = {
  difficulty: Create_Quiz_Difficulty
}

/** mutation root */
export type Mutation_RootDelete_Question_By_IdArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_QuestionsArgs = {
  where: Questions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Questions_Answer_TypeArgs = {
  where: Questions_Answer_Type_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Questions_Answer_Type_By_PkArgs = {
  value: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Quiz_By_IdArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Quiz_Question_By_IdArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_QuizzesArgs = {
  where: Quizzes_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Quizzes_QuestionsArgs = {
  where: Quizzes_Questions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Quizzes_Questions_Response_CorrectnessArgs = {
  where: Quizzes_Questions_Response_Correctness_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Quizzes_Questions_Response_Correctness_By_PkArgs =
  {
    value: Scalars['String']
  }

/** mutation root */
export type Mutation_RootDelete_User_By_IdArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootInsert_QuestionsArgs = {
  objects: Array<Questions_Insert_Input>
  on_conflict?: InputMaybe<Questions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Questions_Answer_TypeArgs = {
  objects: Array<Questions_Answer_Type_Insert_Input>
  on_conflict?: InputMaybe<Questions_Answer_Type_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Questions_Answer_Type_OneArgs = {
  object: Questions_Answer_Type_Insert_Input
  on_conflict?: InputMaybe<Questions_Answer_Type_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Questions_OneArgs = {
  object: Questions_Insert_Input
  on_conflict?: InputMaybe<Questions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_QuizzesArgs = {
  objects: Array<Quizzes_Insert_Input>
  on_conflict?: InputMaybe<Quizzes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Quizzes_OneArgs = {
  object: Quizzes_Insert_Input
  on_conflict?: InputMaybe<Quizzes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Quizzes_QuestionsArgs = {
  objects: Array<Quizzes_Questions_Insert_Input>
  on_conflict?: InputMaybe<Quizzes_Questions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Quizzes_Questions_OneArgs = {
  object: Quizzes_Questions_Insert_Input
  on_conflict?: InputMaybe<Quizzes_Questions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Quizzes_Questions_Response_CorrectnessArgs = {
  objects: Array<Quizzes_Questions_Response_Correctness_Insert_Input>
  on_conflict?: InputMaybe<Quizzes_Questions_Response_Correctness_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Quizzes_Questions_Response_Correctness_OneArgs =
  {
    object: Quizzes_Questions_Response_Correctness_Insert_Input
    on_conflict?: InputMaybe<Quizzes_Questions_Response_Correctness_On_Conflict>
  }

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootSubmit_Question_ResponseArgs = {
  question_response: Submit_Question_Response_Input
}

/** mutation root */
export type Mutation_RootUpdate_Question_By_IdArgs = {
  _append?: InputMaybe<Questions_Append_Input>
  _delete_at_path?: InputMaybe<Questions_Delete_At_Path_Input>
  _delete_elem?: InputMaybe<Questions_Delete_Elem_Input>
  _delete_key?: InputMaybe<Questions_Delete_Key_Input>
  _inc?: InputMaybe<Questions_Inc_Input>
  _prepend?: InputMaybe<Questions_Prepend_Input>
  _set?: InputMaybe<Questions_Set_Input>
  pk_columns: Questions_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_QuestionsArgs = {
  _append?: InputMaybe<Questions_Append_Input>
  _delete_at_path?: InputMaybe<Questions_Delete_At_Path_Input>
  _delete_elem?: InputMaybe<Questions_Delete_Elem_Input>
  _delete_key?: InputMaybe<Questions_Delete_Key_Input>
  _inc?: InputMaybe<Questions_Inc_Input>
  _prepend?: InputMaybe<Questions_Prepend_Input>
  _set?: InputMaybe<Questions_Set_Input>
  where: Questions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Questions_Answer_TypeArgs = {
  _set?: InputMaybe<Questions_Answer_Type_Set_Input>
  where: Questions_Answer_Type_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Questions_Answer_Type_By_PkArgs = {
  _set?: InputMaybe<Questions_Answer_Type_Set_Input>
  pk_columns: Questions_Answer_Type_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Questions_Answer_Type_ManyArgs = {
  updates: Array<Questions_Answer_Type_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Questions_ManyArgs = {
  updates: Array<Questions_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Quiz_By_IdArgs = {
  _set?: InputMaybe<Quizzes_Set_Input>
  pk_columns: Quizzes_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Quiz_Question_By_IdArgs = {
  _inc?: InputMaybe<Quizzes_Questions_Inc_Input>
  _set?: InputMaybe<Quizzes_Questions_Set_Input>
  pk_columns: Quizzes_Questions_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_QuizzesArgs = {
  _set?: InputMaybe<Quizzes_Set_Input>
  where: Quizzes_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Quizzes_ManyArgs = {
  updates: Array<Quizzes_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Quizzes_QuestionsArgs = {
  _inc?: InputMaybe<Quizzes_Questions_Inc_Input>
  _set?: InputMaybe<Quizzes_Questions_Set_Input>
  where: Quizzes_Questions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Quizzes_Questions_ManyArgs = {
  updates: Array<Quizzes_Questions_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Quizzes_Questions_Response_CorrectnessArgs = {
  _set?: InputMaybe<Quizzes_Questions_Response_Correctness_Set_Input>
  where: Quizzes_Questions_Response_Correctness_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Quizzes_Questions_Response_Correctness_By_PkArgs =
  {
    _set?: InputMaybe<Quizzes_Questions_Response_Correctness_Set_Input>
    pk_columns: Quizzes_Questions_Response_Correctness_Pk_Columns_Input
  }

/** mutation root */
export type Mutation_RootUpdate_Quizzes_Questions_Response_Correctness_ManyArgs =
  {
    updates: Array<Quizzes_Questions_Response_Correctness_Updates>
  }

/** mutation root */
export type Mutation_RootUpdate_User_By_IdArgs = {
  _set?: InputMaybe<Users_Set_Input>
  pk_columns: Users_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>
  _gt?: InputMaybe<Scalars['numeric']>
  _gte?: InputMaybe<Scalars['numeric']>
  _in?: InputMaybe<Array<Scalars['numeric']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['numeric']>
  _lte?: InputMaybe<Scalars['numeric']>
  _neq?: InputMaybe<Scalars['numeric']>
  _nin?: InputMaybe<Array<Scalars['numeric']>>
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "questions" using primary key columns */
  question_by_id?: Maybe<Questions>
  /** fetch data from the table: "questions" */
  questions: Array<Questions>
  /** fetch aggregated fields from the table: "questions" */
  questions_aggregate: Questions_Aggregate
  /** fetch data from the table: "questions_answer_type" */
  questions_answer_type: Array<Questions_Answer_Type>
  /** fetch aggregated fields from the table: "questions_answer_type" */
  questions_answer_type_aggregate: Questions_Answer_Type_Aggregate
  /** fetch data from the table: "questions_answer_type" using primary key columns */
  questions_answer_type_by_pk?: Maybe<Questions_Answer_Type>
  /** fetch data from the table: "quizzes" using primary key columns */
  quiz_by_id?: Maybe<Quizzes>
  /** fetch data from the table: "quizzes_questions" using primary key columns */
  quiz_question_by_id?: Maybe<Quizzes_Questions>
  /** An array relationship */
  quizzes: Array<Quizzes>
  /** An aggregate relationship */
  quizzes_aggregate: Quizzes_Aggregate
  /** An array relationship */
  quizzes_questions: Array<Quizzes_Questions>
  /** An aggregate relationship */
  quizzes_questions_aggregate: Quizzes_Questions_Aggregate
  /** fetch data from the table: "quizzes_questions_response_correctness" */
  quizzes_questions_response_correctness: Array<Quizzes_Questions_Response_Correctness>
  /** fetch aggregated fields from the table: "quizzes_questions_response_correctness" */
  quizzes_questions_response_correctness_aggregate: Quizzes_Questions_Response_Correctness_Aggregate
  /** fetch data from the table: "quizzes_questions_response_correctness" using primary key columns */
  quizzes_questions_response_correctness_by_pk?: Maybe<Quizzes_Questions_Response_Correctness>
  /** fetch data from the table: "users" using primary key columns */
  user_by_id?: Maybe<Users>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
}

export type Query_RootQuestion_By_IdArgs = {
  id: Scalars['String']
}

export type Query_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Questions_Order_By>>
  where?: InputMaybe<Questions_Bool_Exp>
}

export type Query_RootQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Questions_Order_By>>
  where?: InputMaybe<Questions_Bool_Exp>
}

export type Query_RootQuestions_Answer_TypeArgs = {
  distinct_on?: InputMaybe<Array<Questions_Answer_Type_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Questions_Answer_Type_Order_By>>
  where?: InputMaybe<Questions_Answer_Type_Bool_Exp>
}

export type Query_RootQuestions_Answer_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Answer_Type_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Questions_Answer_Type_Order_By>>
  where?: InputMaybe<Questions_Answer_Type_Bool_Exp>
}

export type Query_RootQuestions_Answer_Type_By_PkArgs = {
  value: Scalars['String']
}

export type Query_RootQuiz_By_IdArgs = {
  id: Scalars['String']
}

export type Query_RootQuiz_Question_By_IdArgs = {
  id: Scalars['String']
}

export type Query_RootQuizzesArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Quizzes_Order_By>>
  where?: InputMaybe<Quizzes_Bool_Exp>
}

export type Query_RootQuizzes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Quizzes_Order_By>>
  where?: InputMaybe<Quizzes_Bool_Exp>
}

export type Query_RootQuizzes_QuestionsArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Questions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Quizzes_Questions_Order_By>>
  where?: InputMaybe<Quizzes_Questions_Bool_Exp>
}

export type Query_RootQuizzes_Questions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Questions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Quizzes_Questions_Order_By>>
  where?: InputMaybe<Quizzes_Questions_Bool_Exp>
}

export type Query_RootQuizzes_Questions_Response_CorrectnessArgs = {
  distinct_on?: InputMaybe<
    Array<Quizzes_Questions_Response_Correctness_Select_Column>
  >
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Quizzes_Questions_Response_Correctness_Order_By>>
  where?: InputMaybe<Quizzes_Questions_Response_Correctness_Bool_Exp>
}

export type Query_RootQuizzes_Questions_Response_Correctness_AggregateArgs = {
  distinct_on?: InputMaybe<
    Array<Quizzes_Questions_Response_Correctness_Select_Column>
  >
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Quizzes_Questions_Response_Correctness_Order_By>>
  where?: InputMaybe<Quizzes_Questions_Response_Correctness_Bool_Exp>
}

export type Query_RootQuizzes_Questions_Response_Correctness_By_PkArgs = {
  value: Scalars['String']
}

export type Query_RootUser_By_IdArgs = {
  id: Scalars['String']
}

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

/** columns and relationships of "questions" */
export type Questions = {
  __typename?: 'questions'
  answer_type: Questions_Answer_Type_Enum
  answer_value: Scalars['String']
  difficulty: Scalars['numeric']
  id: Scalars['String']
  input_label: Scalars['String']
  input_options?: Maybe<Scalars['jsonb']>
  /** An array relationship */
  quizzes_questions: Array<Quizzes_Questions>
  /** An aggregate relationship */
  quizzes_questions_aggregate: Quizzes_Questions_Aggregate
}

/** columns and relationships of "questions" */
export type QuestionsInput_OptionsArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "questions" */
export type QuestionsQuizzes_QuestionsArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Questions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Quizzes_Questions_Order_By>>
  where?: InputMaybe<Quizzes_Questions_Bool_Exp>
}

/** columns and relationships of "questions" */
export type QuestionsQuizzes_Questions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Questions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Quizzes_Questions_Order_By>>
  where?: InputMaybe<Quizzes_Questions_Bool_Exp>
}

/** aggregated selection of "questions" */
export type Questions_Aggregate = {
  __typename?: 'questions_aggregate'
  aggregate?: Maybe<Questions_Aggregate_Fields>
  nodes: Array<Questions>
}

/** aggregate fields of "questions" */
export type Questions_Aggregate_Fields = {
  __typename?: 'questions_aggregate_fields'
  avg?: Maybe<Questions_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Questions_Max_Fields>
  min?: Maybe<Questions_Min_Fields>
  stddev?: Maybe<Questions_Stddev_Fields>
  stddev_pop?: Maybe<Questions_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Questions_Stddev_Samp_Fields>
  sum?: Maybe<Questions_Sum_Fields>
  var_pop?: Maybe<Questions_Var_Pop_Fields>
  var_samp?: Maybe<Questions_Var_Samp_Fields>
  variance?: Maybe<Questions_Variance_Fields>
}

/** aggregate fields of "questions" */
export type Questions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Questions_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** columns and relationships of "questions_answer_type" */
export type Questions_Answer_Type = {
  __typename?: 'questions_answer_type'
  description?: Maybe<Scalars['String']>
  value: Scalars['String']
}

/** aggregated selection of "questions_answer_type" */
export type Questions_Answer_Type_Aggregate = {
  __typename?: 'questions_answer_type_aggregate'
  aggregate?: Maybe<Questions_Answer_Type_Aggregate_Fields>
  nodes: Array<Questions_Answer_Type>
}

/** aggregate fields of "questions_answer_type" */
export type Questions_Answer_Type_Aggregate_Fields = {
  __typename?: 'questions_answer_type_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Questions_Answer_Type_Max_Fields>
  min?: Maybe<Questions_Answer_Type_Min_Fields>
}

/** aggregate fields of "questions_answer_type" */
export type Questions_Answer_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Questions_Answer_Type_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "questions_answer_type". All fields are combined with a logical 'AND'. */
export type Questions_Answer_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Questions_Answer_Type_Bool_Exp>>
  _not?: InputMaybe<Questions_Answer_Type_Bool_Exp>
  _or?: InputMaybe<Array<Questions_Answer_Type_Bool_Exp>>
  description?: InputMaybe<String_Comparison_Exp>
  value?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "questions_answer_type" */
export enum Questions_Answer_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  QuestionsAnswerTypePkey = 'questions_answer_type_pkey'
}

export enum Questions_Answer_Type_Enum {
  Number = 'number',
  Text = 'text'
}

/** Boolean expression to compare columns of type "questions_answer_type_enum". All fields are combined with logical 'AND'. */
export type Questions_Answer_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Questions_Answer_Type_Enum>
  _in?: InputMaybe<Array<Questions_Answer_Type_Enum>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _neq?: InputMaybe<Questions_Answer_Type_Enum>
  _nin?: InputMaybe<Array<Questions_Answer_Type_Enum>>
}

/** input type for inserting data into table "questions_answer_type" */
export type Questions_Answer_Type_Insert_Input = {
  description?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Questions_Answer_Type_Max_Fields = {
  __typename?: 'questions_answer_type_max_fields'
  description?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Questions_Answer_Type_Min_Fields = {
  __typename?: 'questions_answer_type_min_fields'
  description?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "questions_answer_type" */
export type Questions_Answer_Type_Mutation_Response = {
  __typename?: 'questions_answer_type_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Questions_Answer_Type>
}

/** on_conflict condition type for table "questions_answer_type" */
export type Questions_Answer_Type_On_Conflict = {
  constraint: Questions_Answer_Type_Constraint
  update_columns?: Array<Questions_Answer_Type_Update_Column>
  where?: InputMaybe<Questions_Answer_Type_Bool_Exp>
}

/** Ordering options when selecting data from "questions_answer_type". */
export type Questions_Answer_Type_Order_By = {
  description?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** primary key columns input for table: questions_answer_type */
export type Questions_Answer_Type_Pk_Columns_Input = {
  value: Scalars['String']
}

/** select columns of table "questions_answer_type" */
export enum Questions_Answer_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "questions_answer_type" */
export type Questions_Answer_Type_Set_Input = {
  description?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "questions_answer_type" */
export type Questions_Answer_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Questions_Answer_Type_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Questions_Answer_Type_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

/** update columns of table "questions_answer_type" */
export enum Questions_Answer_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type Questions_Answer_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Questions_Answer_Type_Set_Input>
  where: Questions_Answer_Type_Bool_Exp
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type Questions_Append_Input = {
  input_options?: InputMaybe<Scalars['jsonb']>
}

/** aggregate avg on columns */
export type Questions_Avg_Fields = {
  __typename?: 'questions_avg_fields'
  difficulty?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "questions". All fields are combined with a logical 'AND'. */
export type Questions_Bool_Exp = {
  _and?: InputMaybe<Array<Questions_Bool_Exp>>
  _not?: InputMaybe<Questions_Bool_Exp>
  _or?: InputMaybe<Array<Questions_Bool_Exp>>
  answer_type?: InputMaybe<Questions_Answer_Type_Enum_Comparison_Exp>
  answer_value?: InputMaybe<String_Comparison_Exp>
  difficulty?: InputMaybe<Numeric_Comparison_Exp>
  id?: InputMaybe<String_Comparison_Exp>
  input_label?: InputMaybe<String_Comparison_Exp>
  input_options?: InputMaybe<Jsonb_Comparison_Exp>
  quizzes_questions?: InputMaybe<Quizzes_Questions_Bool_Exp>
}

/** unique or primary key constraints on table "questions" */
export enum Questions_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuestionsPkey = 'questions_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Questions_Delete_At_Path_Input = {
  input_options?: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Questions_Delete_Elem_Input = {
  input_options?: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Questions_Delete_Key_Input = {
  input_options?: InputMaybe<Scalars['String']>
}

/** input type for incrementing numeric columns in table "questions" */
export type Questions_Inc_Input = {
  difficulty?: InputMaybe<Scalars['numeric']>
}

/** input type for inserting data into table "questions" */
export type Questions_Insert_Input = {
  answer_type?: InputMaybe<Questions_Answer_Type_Enum>
  answer_value?: InputMaybe<Scalars['String']>
  difficulty?: InputMaybe<Scalars['numeric']>
  id?: InputMaybe<Scalars['String']>
  input_label?: InputMaybe<Scalars['String']>
  input_options?: InputMaybe<Scalars['jsonb']>
  quizzes_questions?: InputMaybe<Quizzes_Questions_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Questions_Max_Fields = {
  __typename?: 'questions_max_fields'
  answer_value?: Maybe<Scalars['String']>
  difficulty?: Maybe<Scalars['numeric']>
  id?: Maybe<Scalars['String']>
  input_label?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Questions_Min_Fields = {
  __typename?: 'questions_min_fields'
  answer_value?: Maybe<Scalars['String']>
  difficulty?: Maybe<Scalars['numeric']>
  id?: Maybe<Scalars['String']>
  input_label?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "questions" */
export type Questions_Mutation_Response = {
  __typename?: 'questions_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Questions>
}

/** input type for inserting object relation for remote table "questions" */
export type Questions_Obj_Rel_Insert_Input = {
  data: Questions_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Questions_On_Conflict>
}

/** on_conflict condition type for table "questions" */
export type Questions_On_Conflict = {
  constraint: Questions_Constraint
  update_columns?: Array<Questions_Update_Column>
  where?: InputMaybe<Questions_Bool_Exp>
}

/** Ordering options when selecting data from "questions". */
export type Questions_Order_By = {
  answer_type?: InputMaybe<Order_By>
  answer_value?: InputMaybe<Order_By>
  difficulty?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  input_label?: InputMaybe<Order_By>
  input_options?: InputMaybe<Order_By>
  quizzes_questions_aggregate?: InputMaybe<Quizzes_Questions_Aggregate_Order_By>
}

/** primary key columns input for table: questions */
export type Questions_Pk_Columns_Input = {
  id: Scalars['String']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Questions_Prepend_Input = {
  input_options?: InputMaybe<Scalars['jsonb']>
}

/** select columns of table "questions" */
export enum Questions_Select_Column {
  /** column name */
  AnswerType = 'answer_type',
  /** column name */
  AnswerValue = 'answer_value',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  Id = 'id',
  /** column name */
  InputLabel = 'input_label',
  /** column name */
  InputOptions = 'input_options'
}

/** input type for updating data in table "questions" */
export type Questions_Set_Input = {
  answer_type?: InputMaybe<Questions_Answer_Type_Enum>
  answer_value?: InputMaybe<Scalars['String']>
  difficulty?: InputMaybe<Scalars['numeric']>
  id?: InputMaybe<Scalars['String']>
  input_label?: InputMaybe<Scalars['String']>
  input_options?: InputMaybe<Scalars['jsonb']>
}

/** aggregate stddev on columns */
export type Questions_Stddev_Fields = {
  __typename?: 'questions_stddev_fields'
  difficulty?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Questions_Stddev_Pop_Fields = {
  __typename?: 'questions_stddev_pop_fields'
  difficulty?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Questions_Stddev_Samp_Fields = {
  __typename?: 'questions_stddev_samp_fields'
  difficulty?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "questions" */
export type Questions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Questions_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Questions_Stream_Cursor_Value_Input = {
  answer_type?: InputMaybe<Questions_Answer_Type_Enum>
  answer_value?: InputMaybe<Scalars['String']>
  difficulty?: InputMaybe<Scalars['numeric']>
  id?: InputMaybe<Scalars['String']>
  input_label?: InputMaybe<Scalars['String']>
  input_options?: InputMaybe<Scalars['jsonb']>
}

/** aggregate sum on columns */
export type Questions_Sum_Fields = {
  __typename?: 'questions_sum_fields'
  difficulty?: Maybe<Scalars['numeric']>
}

/** update columns of table "questions" */
export enum Questions_Update_Column {
  /** column name */
  AnswerType = 'answer_type',
  /** column name */
  AnswerValue = 'answer_value',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  Id = 'id',
  /** column name */
  InputLabel = 'input_label',
  /** column name */
  InputOptions = 'input_options'
}

export type Questions_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Questions_Append_Input>
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Questions_Delete_At_Path_Input>
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Questions_Delete_Elem_Input>
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Questions_Delete_Key_Input>
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Questions_Inc_Input>
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Questions_Prepend_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Questions_Set_Input>
  where: Questions_Bool_Exp
}

/** aggregate var_pop on columns */
export type Questions_Var_Pop_Fields = {
  __typename?: 'questions_var_pop_fields'
  difficulty?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Questions_Var_Samp_Fields = {
  __typename?: 'questions_var_samp_fields'
  difficulty?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Questions_Variance_Fields = {
  __typename?: 'questions_variance_fields'
  difficulty?: Maybe<Scalars['Float']>
}

/** columns and relationships of "quizzes" */
export type Quizzes = {
  __typename?: 'quizzes'
  completed_at?: Maybe<Scalars['timestamptz']>
  id: Scalars['String']
  /** An array relationship */
  quizzes_questions: Array<Quizzes_Questions>
  /** An aggregate relationship */
  quizzes_questions_aggregate: Quizzes_Questions_Aggregate
  started_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  user: Users
  user_id: Scalars['String']
}

/** columns and relationships of "quizzes" */
export type QuizzesQuizzes_QuestionsArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Questions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Quizzes_Questions_Order_By>>
  where?: InputMaybe<Quizzes_Questions_Bool_Exp>
}

/** columns and relationships of "quizzes" */
export type QuizzesQuizzes_Questions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Questions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Quizzes_Questions_Order_By>>
  where?: InputMaybe<Quizzes_Questions_Bool_Exp>
}

/** aggregated selection of "quizzes" */
export type Quizzes_Aggregate = {
  __typename?: 'quizzes_aggregate'
  aggregate?: Maybe<Quizzes_Aggregate_Fields>
  nodes: Array<Quizzes>
}

/** aggregate fields of "quizzes" */
export type Quizzes_Aggregate_Fields = {
  __typename?: 'quizzes_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Quizzes_Max_Fields>
  min?: Maybe<Quizzes_Min_Fields>
}

/** aggregate fields of "quizzes" */
export type Quizzes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Quizzes_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "quizzes" */
export type Quizzes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Quizzes_Max_Order_By>
  min?: InputMaybe<Quizzes_Min_Order_By>
}

/** input type for inserting array relation for remote table "quizzes" */
export type Quizzes_Arr_Rel_Insert_Input = {
  data: Array<Quizzes_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Quizzes_On_Conflict>
}

/** Boolean expression to filter rows from the table "quizzes". All fields are combined with a logical 'AND'. */
export type Quizzes_Bool_Exp = {
  _and?: InputMaybe<Array<Quizzes_Bool_Exp>>
  _not?: InputMaybe<Quizzes_Bool_Exp>
  _or?: InputMaybe<Array<Quizzes_Bool_Exp>>
  completed_at?: InputMaybe<Timestamptz_Comparison_Exp>
  id?: InputMaybe<String_Comparison_Exp>
  quizzes_questions?: InputMaybe<Quizzes_Questions_Bool_Exp>
  started_at?: InputMaybe<Timestamptz_Comparison_Exp>
  user?: InputMaybe<Users_Bool_Exp>
  user_id?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "quizzes" */
export enum Quizzes_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuizzesPkey = 'quizzes_pkey'
}

/** input type for inserting data into table "quizzes" */
export type Quizzes_Insert_Input = {
  completed_at?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['String']>
  quizzes_questions?: InputMaybe<Quizzes_Questions_Arr_Rel_Insert_Input>
  started_at?: InputMaybe<Scalars['timestamptz']>
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>
  user_id?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Quizzes_Max_Fields = {
  __typename?: 'quizzes_max_fields'
  completed_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  started_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "quizzes" */
export type Quizzes_Max_Order_By = {
  completed_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  started_at?: InputMaybe<Order_By>
  user_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Quizzes_Min_Fields = {
  __typename?: 'quizzes_min_fields'
  completed_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  started_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "quizzes" */
export type Quizzes_Min_Order_By = {
  completed_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  started_at?: InputMaybe<Order_By>
  user_id?: InputMaybe<Order_By>
}

/** response of any mutation on the table "quizzes" */
export type Quizzes_Mutation_Response = {
  __typename?: 'quizzes_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Quizzes>
}

/** input type for inserting object relation for remote table "quizzes" */
export type Quizzes_Obj_Rel_Insert_Input = {
  data: Quizzes_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Quizzes_On_Conflict>
}

/** on_conflict condition type for table "quizzes" */
export type Quizzes_On_Conflict = {
  constraint: Quizzes_Constraint
  update_columns?: Array<Quizzes_Update_Column>
  where?: InputMaybe<Quizzes_Bool_Exp>
}

/** Ordering options when selecting data from "quizzes". */
export type Quizzes_Order_By = {
  completed_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  quizzes_questions_aggregate?: InputMaybe<Quizzes_Questions_Aggregate_Order_By>
  started_at?: InputMaybe<Order_By>
  user?: InputMaybe<Users_Order_By>
  user_id?: InputMaybe<Order_By>
}

/** primary key columns input for table: quizzes */
export type Quizzes_Pk_Columns_Input = {
  id: Scalars['String']
}

/** columns and relationships of "quizzes_questions" */
export type Quizzes_Questions = {
  __typename?: 'quizzes_questions'
  id: Scalars['String']
  order: Scalars['Int']
  /** An object relationship */
  question: Questions
  question_id: Scalars['String']
  /** An object relationship */
  quiz: Quizzes
  quiz_id: Scalars['String']
  response?: Maybe<Scalars['String']>
  response_correctness?: Maybe<Quizzes_Questions_Response_Correctness_Enum>
}

/** aggregated selection of "quizzes_questions" */
export type Quizzes_Questions_Aggregate = {
  __typename?: 'quizzes_questions_aggregate'
  aggregate?: Maybe<Quizzes_Questions_Aggregate_Fields>
  nodes: Array<Quizzes_Questions>
}

/** aggregate fields of "quizzes_questions" */
export type Quizzes_Questions_Aggregate_Fields = {
  __typename?: 'quizzes_questions_aggregate_fields'
  avg?: Maybe<Quizzes_Questions_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Quizzes_Questions_Max_Fields>
  min?: Maybe<Quizzes_Questions_Min_Fields>
  stddev?: Maybe<Quizzes_Questions_Stddev_Fields>
  stddev_pop?: Maybe<Quizzes_Questions_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Quizzes_Questions_Stddev_Samp_Fields>
  sum?: Maybe<Quizzes_Questions_Sum_Fields>
  var_pop?: Maybe<Quizzes_Questions_Var_Pop_Fields>
  var_samp?: Maybe<Quizzes_Questions_Var_Samp_Fields>
  variance?: Maybe<Quizzes_Questions_Variance_Fields>
}

/** aggregate fields of "quizzes_questions" */
export type Quizzes_Questions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Quizzes_Questions_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "quizzes_questions" */
export type Quizzes_Questions_Aggregate_Order_By = {
  avg?: InputMaybe<Quizzes_Questions_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Quizzes_Questions_Max_Order_By>
  min?: InputMaybe<Quizzes_Questions_Min_Order_By>
  stddev?: InputMaybe<Quizzes_Questions_Stddev_Order_By>
  stddev_pop?: InputMaybe<Quizzes_Questions_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Quizzes_Questions_Stddev_Samp_Order_By>
  sum?: InputMaybe<Quizzes_Questions_Sum_Order_By>
  var_pop?: InputMaybe<Quizzes_Questions_Var_Pop_Order_By>
  var_samp?: InputMaybe<Quizzes_Questions_Var_Samp_Order_By>
  variance?: InputMaybe<Quizzes_Questions_Variance_Order_By>
}

/** input type for inserting array relation for remote table "quizzes_questions" */
export type Quizzes_Questions_Arr_Rel_Insert_Input = {
  data: Array<Quizzes_Questions_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Quizzes_Questions_On_Conflict>
}

/** aggregate avg on columns */
export type Quizzes_Questions_Avg_Fields = {
  __typename?: 'quizzes_questions_avg_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "quizzes_questions" */
export type Quizzes_Questions_Avg_Order_By = {
  order?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "quizzes_questions". All fields are combined with a logical 'AND'. */
export type Quizzes_Questions_Bool_Exp = {
  _and?: InputMaybe<Array<Quizzes_Questions_Bool_Exp>>
  _not?: InputMaybe<Quizzes_Questions_Bool_Exp>
  _or?: InputMaybe<Array<Quizzes_Questions_Bool_Exp>>
  id?: InputMaybe<String_Comparison_Exp>
  order?: InputMaybe<Int_Comparison_Exp>
  question?: InputMaybe<Questions_Bool_Exp>
  question_id?: InputMaybe<String_Comparison_Exp>
  quiz?: InputMaybe<Quizzes_Bool_Exp>
  quiz_id?: InputMaybe<String_Comparison_Exp>
  response?: InputMaybe<String_Comparison_Exp>
  response_correctness?: InputMaybe<Quizzes_Questions_Response_Correctness_Enum_Comparison_Exp>
}

/** unique or primary key constraints on table "quizzes_questions" */
export enum Quizzes_Questions_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuizzesQuestionsPkey = 'quizzes_questions_pkey'
}

/** input type for incrementing numeric columns in table "quizzes_questions" */
export type Quizzes_Questions_Inc_Input = {
  order?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "quizzes_questions" */
export type Quizzes_Questions_Insert_Input = {
  id?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Scalars['Int']>
  question?: InputMaybe<Questions_Obj_Rel_Insert_Input>
  question_id?: InputMaybe<Scalars['String']>
  quiz?: InputMaybe<Quizzes_Obj_Rel_Insert_Input>
  quiz_id?: InputMaybe<Scalars['String']>
  response?: InputMaybe<Scalars['String']>
  response_correctness?: InputMaybe<Quizzes_Questions_Response_Correctness_Enum>
}

/** aggregate max on columns */
export type Quizzes_Questions_Max_Fields = {
  __typename?: 'quizzes_questions_max_fields'
  id?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
  question_id?: Maybe<Scalars['String']>
  quiz_id?: Maybe<Scalars['String']>
  response?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "quizzes_questions" */
export type Quizzes_Questions_Max_Order_By = {
  id?: InputMaybe<Order_By>
  order?: InputMaybe<Order_By>
  question_id?: InputMaybe<Order_By>
  quiz_id?: InputMaybe<Order_By>
  response?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Quizzes_Questions_Min_Fields = {
  __typename?: 'quizzes_questions_min_fields'
  id?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
  question_id?: Maybe<Scalars['String']>
  quiz_id?: Maybe<Scalars['String']>
  response?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "quizzes_questions" */
export type Quizzes_Questions_Min_Order_By = {
  id?: InputMaybe<Order_By>
  order?: InputMaybe<Order_By>
  question_id?: InputMaybe<Order_By>
  quiz_id?: InputMaybe<Order_By>
  response?: InputMaybe<Order_By>
}

/** response of any mutation on the table "quizzes_questions" */
export type Quizzes_Questions_Mutation_Response = {
  __typename?: 'quizzes_questions_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Quizzes_Questions>
}

/** on_conflict condition type for table "quizzes_questions" */
export type Quizzes_Questions_On_Conflict = {
  constraint: Quizzes_Questions_Constraint
  update_columns?: Array<Quizzes_Questions_Update_Column>
  where?: InputMaybe<Quizzes_Questions_Bool_Exp>
}

/** Ordering options when selecting data from "quizzes_questions". */
export type Quizzes_Questions_Order_By = {
  id?: InputMaybe<Order_By>
  order?: InputMaybe<Order_By>
  question?: InputMaybe<Questions_Order_By>
  question_id?: InputMaybe<Order_By>
  quiz?: InputMaybe<Quizzes_Order_By>
  quiz_id?: InputMaybe<Order_By>
  response?: InputMaybe<Order_By>
  response_correctness?: InputMaybe<Order_By>
}

/** primary key columns input for table: quizzes_questions */
export type Quizzes_Questions_Pk_Columns_Input = {
  id: Scalars['String']
}

/** columns and relationships of "quizzes_questions_response_correctness" */
export type Quizzes_Questions_Response_Correctness = {
  __typename?: 'quizzes_questions_response_correctness'
  description: Scalars['String']
  value: Scalars['String']
}

/** aggregated selection of "quizzes_questions_response_correctness" */
export type Quizzes_Questions_Response_Correctness_Aggregate = {
  __typename?: 'quizzes_questions_response_correctness_aggregate'
  aggregate?: Maybe<Quizzes_Questions_Response_Correctness_Aggregate_Fields>
  nodes: Array<Quizzes_Questions_Response_Correctness>
}

/** aggregate fields of "quizzes_questions_response_correctness" */
export type Quizzes_Questions_Response_Correctness_Aggregate_Fields = {
  __typename?: 'quizzes_questions_response_correctness_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Quizzes_Questions_Response_Correctness_Max_Fields>
  min?: Maybe<Quizzes_Questions_Response_Correctness_Min_Fields>
}

/** aggregate fields of "quizzes_questions_response_correctness" */
export type Quizzes_Questions_Response_Correctness_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<
    Array<Quizzes_Questions_Response_Correctness_Select_Column>
  >
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "quizzes_questions_response_correctness". All fields are combined with a logical 'AND'. */
export type Quizzes_Questions_Response_Correctness_Bool_Exp = {
  _and?: InputMaybe<Array<Quizzes_Questions_Response_Correctness_Bool_Exp>>
  _not?: InputMaybe<Quizzes_Questions_Response_Correctness_Bool_Exp>
  _or?: InputMaybe<Array<Quizzes_Questions_Response_Correctness_Bool_Exp>>
  description?: InputMaybe<String_Comparison_Exp>
  value?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "quizzes_questions_response_correctness" */
export enum Quizzes_Questions_Response_Correctness_Constraint {
  /** unique or primary key constraint on columns "value" */
  QuizzesQuestionsResponseCorrectnessPkey = 'quizzes_questions_response_correctness_pkey'
}

export enum Quizzes_Questions_Response_Correctness_Enum {
  Correct = 'CORRECT',
  Incorrect = 'INCORRECT'
}

/** Boolean expression to compare columns of type "quizzes_questions_response_correctness_enum". All fields are combined with logical 'AND'. */
export type Quizzes_Questions_Response_Correctness_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Quizzes_Questions_Response_Correctness_Enum>
  _in?: InputMaybe<Array<Quizzes_Questions_Response_Correctness_Enum>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _neq?: InputMaybe<Quizzes_Questions_Response_Correctness_Enum>
  _nin?: InputMaybe<Array<Quizzes_Questions_Response_Correctness_Enum>>
}

/** input type for inserting data into table "quizzes_questions_response_correctness" */
export type Quizzes_Questions_Response_Correctness_Insert_Input = {
  description?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Quizzes_Questions_Response_Correctness_Max_Fields = {
  __typename?: 'quizzes_questions_response_correctness_max_fields'
  description?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Quizzes_Questions_Response_Correctness_Min_Fields = {
  __typename?: 'quizzes_questions_response_correctness_min_fields'
  description?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "quizzes_questions_response_correctness" */
export type Quizzes_Questions_Response_Correctness_Mutation_Response = {
  __typename?: 'quizzes_questions_response_correctness_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Quizzes_Questions_Response_Correctness>
}

/** on_conflict condition type for table "quizzes_questions_response_correctness" */
export type Quizzes_Questions_Response_Correctness_On_Conflict = {
  constraint: Quizzes_Questions_Response_Correctness_Constraint
  update_columns?: Array<Quizzes_Questions_Response_Correctness_Update_Column>
  where?: InputMaybe<Quizzes_Questions_Response_Correctness_Bool_Exp>
}

/** Ordering options when selecting data from "quizzes_questions_response_correctness". */
export type Quizzes_Questions_Response_Correctness_Order_By = {
  description?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** primary key columns input for table: quizzes_questions_response_correctness */
export type Quizzes_Questions_Response_Correctness_Pk_Columns_Input = {
  value: Scalars['String']
}

/** select columns of table "quizzes_questions_response_correctness" */
export enum Quizzes_Questions_Response_Correctness_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "quizzes_questions_response_correctness" */
export type Quizzes_Questions_Response_Correctness_Set_Input = {
  description?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "quizzes_questions_response_correctness" */
export type Quizzes_Questions_Response_Correctness_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Quizzes_Questions_Response_Correctness_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Quizzes_Questions_Response_Correctness_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

/** update columns of table "quizzes_questions_response_correctness" */
export enum Quizzes_Questions_Response_Correctness_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type Quizzes_Questions_Response_Correctness_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Quizzes_Questions_Response_Correctness_Set_Input>
  where: Quizzes_Questions_Response_Correctness_Bool_Exp
}

/** select columns of table "quizzes_questions" */
export enum Quizzes_Questions_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  QuestionId = 'question_id',
  /** column name */
  QuizId = 'quiz_id',
  /** column name */
  Response = 'response',
  /** column name */
  ResponseCorrectness = 'response_correctness'
}

/** input type for updating data in table "quizzes_questions" */
export type Quizzes_Questions_Set_Input = {
  id?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Scalars['Int']>
  question_id?: InputMaybe<Scalars['String']>
  quiz_id?: InputMaybe<Scalars['String']>
  response?: InputMaybe<Scalars['String']>
  response_correctness?: InputMaybe<Quizzes_Questions_Response_Correctness_Enum>
}

/** aggregate stddev on columns */
export type Quizzes_Questions_Stddev_Fields = {
  __typename?: 'quizzes_questions_stddev_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "quizzes_questions" */
export type Quizzes_Questions_Stddev_Order_By = {
  order?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Quizzes_Questions_Stddev_Pop_Fields = {
  __typename?: 'quizzes_questions_stddev_pop_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "quizzes_questions" */
export type Quizzes_Questions_Stddev_Pop_Order_By = {
  order?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Quizzes_Questions_Stddev_Samp_Fields = {
  __typename?: 'quizzes_questions_stddev_samp_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "quizzes_questions" */
export type Quizzes_Questions_Stddev_Samp_Order_By = {
  order?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "quizzes_questions" */
export type Quizzes_Questions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Quizzes_Questions_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Quizzes_Questions_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Scalars['Int']>
  question_id?: InputMaybe<Scalars['String']>
  quiz_id?: InputMaybe<Scalars['String']>
  response?: InputMaybe<Scalars['String']>
  response_correctness?: InputMaybe<Quizzes_Questions_Response_Correctness_Enum>
}

/** aggregate sum on columns */
export type Quizzes_Questions_Sum_Fields = {
  __typename?: 'quizzes_questions_sum_fields'
  order?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "quizzes_questions" */
export type Quizzes_Questions_Sum_Order_By = {
  order?: InputMaybe<Order_By>
}

/** update columns of table "quizzes_questions" */
export enum Quizzes_Questions_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  QuestionId = 'question_id',
  /** column name */
  QuizId = 'quiz_id',
  /** column name */
  Response = 'response',
  /** column name */
  ResponseCorrectness = 'response_correctness'
}

export type Quizzes_Questions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Quizzes_Questions_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Quizzes_Questions_Set_Input>
  where: Quizzes_Questions_Bool_Exp
}

/** aggregate var_pop on columns */
export type Quizzes_Questions_Var_Pop_Fields = {
  __typename?: 'quizzes_questions_var_pop_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "quizzes_questions" */
export type Quizzes_Questions_Var_Pop_Order_By = {
  order?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Quizzes_Questions_Var_Samp_Fields = {
  __typename?: 'quizzes_questions_var_samp_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "quizzes_questions" */
export type Quizzes_Questions_Var_Samp_Order_By = {
  order?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Quizzes_Questions_Variance_Fields = {
  __typename?: 'quizzes_questions_variance_fields'
  order?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "quizzes_questions" */
export type Quizzes_Questions_Variance_Order_By = {
  order?: InputMaybe<Order_By>
}

/** select columns of table "quizzes" */
export enum Quizzes_Select_Column {
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  Id = 'id',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "quizzes" */
export type Quizzes_Set_Input = {
  completed_at?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['String']>
  started_at?: InputMaybe<Scalars['timestamptz']>
  user_id?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "quizzes" */
export type Quizzes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Quizzes_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Quizzes_Stream_Cursor_Value_Input = {
  completed_at?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['String']>
  started_at?: InputMaybe<Scalars['timestamptz']>
  user_id?: InputMaybe<Scalars['String']>
}

/** update columns of table "quizzes" */
export enum Quizzes_Update_Column {
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  Id = 'id',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  UserId = 'user_id'
}

export type Quizzes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Quizzes_Set_Input>
  where: Quizzes_Bool_Exp
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "questions" using primary key columns */
  question_by_id?: Maybe<Questions>
  /** fetch data from the table: "questions" */
  questions: Array<Questions>
  /** fetch aggregated fields from the table: "questions" */
  questions_aggregate: Questions_Aggregate
  /** fetch data from the table: "questions_answer_type" */
  questions_answer_type: Array<Questions_Answer_Type>
  /** fetch aggregated fields from the table: "questions_answer_type" */
  questions_answer_type_aggregate: Questions_Answer_Type_Aggregate
  /** fetch data from the table: "questions_answer_type" using primary key columns */
  questions_answer_type_by_pk?: Maybe<Questions_Answer_Type>
  /** fetch data from the table in a streaming manner : "questions_answer_type" */
  questions_answer_type_stream: Array<Questions_Answer_Type>
  /** fetch data from the table in a streaming manner : "questions" */
  questions_stream: Array<Questions>
  /** fetch data from the table: "quizzes" using primary key columns */
  quiz_by_id?: Maybe<Quizzes>
  /** fetch data from the table: "quizzes_questions" using primary key columns */
  quiz_question_by_id?: Maybe<Quizzes_Questions>
  /** An array relationship */
  quizzes: Array<Quizzes>
  /** An aggregate relationship */
  quizzes_aggregate: Quizzes_Aggregate
  /** An array relationship */
  quizzes_questions: Array<Quizzes_Questions>
  /** An aggregate relationship */
  quizzes_questions_aggregate: Quizzes_Questions_Aggregate
  /** fetch data from the table: "quizzes_questions_response_correctness" */
  quizzes_questions_response_correctness: Array<Quizzes_Questions_Response_Correctness>
  /** fetch aggregated fields from the table: "quizzes_questions_response_correctness" */
  quizzes_questions_response_correctness_aggregate: Quizzes_Questions_Response_Correctness_Aggregate
  /** fetch data from the table: "quizzes_questions_response_correctness" using primary key columns */
  quizzes_questions_response_correctness_by_pk?: Maybe<Quizzes_Questions_Response_Correctness>
  /** fetch data from the table in a streaming manner : "quizzes_questions_response_correctness" */
  quizzes_questions_response_correctness_stream: Array<Quizzes_Questions_Response_Correctness>
  /** fetch data from the table in a streaming manner : "quizzes_questions" */
  quizzes_questions_stream: Array<Quizzes_Questions>
  /** fetch data from the table in a streaming manner : "quizzes" */
  quizzes_stream: Array<Quizzes>
  /** fetch data from the table: "users" using primary key columns */
  user_by_id?: Maybe<Users>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table in a streaming manner : "users" */
  users_stream: Array<Users>
}

export type Subscription_RootQuestion_By_IdArgs = {
  id: Scalars['String']
}

export type Subscription_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Questions_Order_By>>
  where?: InputMaybe<Questions_Bool_Exp>
}

export type Subscription_RootQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Questions_Order_By>>
  where?: InputMaybe<Questions_Bool_Exp>
}

export type Subscription_RootQuestions_Answer_TypeArgs = {
  distinct_on?: InputMaybe<Array<Questions_Answer_Type_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Questions_Answer_Type_Order_By>>
  where?: InputMaybe<Questions_Answer_Type_Bool_Exp>
}

export type Subscription_RootQuestions_Answer_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Answer_Type_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Questions_Answer_Type_Order_By>>
  where?: InputMaybe<Questions_Answer_Type_Bool_Exp>
}

export type Subscription_RootQuestions_Answer_Type_By_PkArgs = {
  value: Scalars['String']
}

export type Subscription_RootQuestions_Answer_Type_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Questions_Answer_Type_Stream_Cursor_Input>>
  where?: InputMaybe<Questions_Answer_Type_Bool_Exp>
}

export type Subscription_RootQuestions_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Questions_Stream_Cursor_Input>>
  where?: InputMaybe<Questions_Bool_Exp>
}

export type Subscription_RootQuiz_By_IdArgs = {
  id: Scalars['String']
}

export type Subscription_RootQuiz_Question_By_IdArgs = {
  id: Scalars['String']
}

export type Subscription_RootQuizzesArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Quizzes_Order_By>>
  where?: InputMaybe<Quizzes_Bool_Exp>
}

export type Subscription_RootQuizzes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Quizzes_Order_By>>
  where?: InputMaybe<Quizzes_Bool_Exp>
}

export type Subscription_RootQuizzes_QuestionsArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Questions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Quizzes_Questions_Order_By>>
  where?: InputMaybe<Quizzes_Questions_Bool_Exp>
}

export type Subscription_RootQuizzes_Questions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Questions_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Quizzes_Questions_Order_By>>
  where?: InputMaybe<Quizzes_Questions_Bool_Exp>
}

export type Subscription_RootQuizzes_Questions_Response_CorrectnessArgs = {
  distinct_on?: InputMaybe<
    Array<Quizzes_Questions_Response_Correctness_Select_Column>
  >
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Quizzes_Questions_Response_Correctness_Order_By>>
  where?: InputMaybe<Quizzes_Questions_Response_Correctness_Bool_Exp>
}

export type Subscription_RootQuizzes_Questions_Response_Correctness_AggregateArgs =
  {
    distinct_on?: InputMaybe<
      Array<Quizzes_Questions_Response_Correctness_Select_Column>
    >
    limit?: InputMaybe<Scalars['Int']>
    offset?: InputMaybe<Scalars['Int']>
    order_by?: InputMaybe<
      Array<Quizzes_Questions_Response_Correctness_Order_By>
    >
    where?: InputMaybe<Quizzes_Questions_Response_Correctness_Bool_Exp>
  }

export type Subscription_RootQuizzes_Questions_Response_Correctness_By_PkArgs =
  {
    value: Scalars['String']
  }

export type Subscription_RootQuizzes_Questions_Response_Correctness_StreamArgs =
  {
    batch_size: Scalars['Int']
    cursor: Array<
      InputMaybe<Quizzes_Questions_Response_Correctness_Stream_Cursor_Input>
    >
    where?: InputMaybe<Quizzes_Questions_Response_Correctness_Bool_Exp>
  }

export type Subscription_RootQuizzes_Questions_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Quizzes_Questions_Stream_Cursor_Input>>
  where?: InputMaybe<Quizzes_Questions_Bool_Exp>
}

export type Subscription_RootQuizzes_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Quizzes_Stream_Cursor_Input>>
  where?: InputMaybe<Quizzes_Bool_Exp>
}

export type Subscription_RootUser_By_IdArgs = {
  id: Scalars['String']
}

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>
  where?: InputMaybe<Users_Bool_Exp>
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>
  _gt?: InputMaybe<Scalars['timestamptz']>
  _gte?: InputMaybe<Scalars['timestamptz']>
  _in?: InputMaybe<Array<Scalars['timestamptz']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['timestamptz']>
  _lte?: InputMaybe<Scalars['timestamptz']>
  _neq?: InputMaybe<Scalars['timestamptz']>
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users'
  first_name: Scalars['String']
  id: Scalars['String']
  last_name: Scalars['String']
  /** An array relationship */
  quizzes: Array<Quizzes>
  /** An aggregate relationship */
  quizzes_aggregate: Quizzes_Aggregate
}

/** columns and relationships of "users" */
export type UsersQuizzesArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Quizzes_Order_By>>
  where?: InputMaybe<Quizzes_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersQuizzes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Quizzes_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Quizzes_Order_By>>
  where?: InputMaybe<Quizzes_Bool_Exp>
}

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Users_Max_Fields>
  min?: Maybe<Users_Min_Fields>
}

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>
  _not?: InputMaybe<Users_Bool_Exp>
  _or?: InputMaybe<Array<Users_Bool_Exp>>
  first_name?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<String_Comparison_Exp>
  last_name?: InputMaybe<String_Comparison_Exp>
  quizzes?: InputMaybe<Quizzes_Bool_Exp>
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  first_name?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  last_name?: InputMaybe<Scalars['String']>
  quizzes?: InputMaybe<Quizzes_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields'
  first_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  last_name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields'
  first_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  last_name?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Users>
}

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint
  update_columns?: Array<Users_Update_Column>
  where?: InputMaybe<Users_Bool_Exp>
}

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  first_name?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  last_name?: InputMaybe<Order_By>
  quizzes_aggregate?: InputMaybe<Quizzes_Aggregate_Order_By>
}

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String']
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  first_name?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  last_name?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  first_name?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  last_name?: InputMaybe<Scalars['String']>
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>
  where: Users_Bool_Exp
}

export type CompleteQuizMutationVariables = Exact<{
  quizId: Scalars['String']
  userId: Scalars['String']
}>

export type CompleteQuizMutation = {
  __typename?: 'mutation_root'
  update_quizzes?:
    | {
        __typename?: 'quizzes_mutation_response'
        returning: Array<{
          __typename?: 'quizzes'
          id: string
          completed_at?: string | null | undefined
        }>
      }
    | null
    | undefined
}

export type GetQuestionsQueryVariables = Exact<{ [key: string]: never }>

export type GetQuestionsQuery = {
  __typename?: 'query_root'
  questions: Array<{ __typename?: 'questions'; id: string; difficulty: number }>
}

export type InsertQuizMutationVariables = Exact<{
  quizId: Scalars['String']
  userId: Scalars['String']
  questions:
    | Array<Quizzes_Questions_Insert_Input>
    | Quizzes_Questions_Insert_Input
}>

export type InsertQuizMutation = {
  __typename?: 'mutation_root'
  insert_quizzes_one?: { __typename?: 'quizzes'; id: string } | null | undefined
}

export type GetQuestionCorrectAnswerQueryVariables = Exact<{
  quiz_question_id: Scalars['String']
}>

export type GetQuestionCorrectAnswerQuery = {
  __typename?: 'query_root'
  quiz_question_by_id?:
    | {
        __typename?: 'quizzes_questions'
        question: { __typename?: 'questions'; answer_value: string }
      }
    | null
    | undefined
}

export type UpdateQuizQuestionResponseMutationVariables = Exact<{
  quizQuestionId: Scalars['String']
  userId: Scalars['String']
  input: Quizzes_Questions_Set_Input
}>

export type UpdateQuizQuestionResponseMutation = {
  __typename?: 'mutation_root'
  update_quizzes_questions?:
    | {
        __typename?: 'quizzes_questions_mutation_response'
        returning: Array<{ __typename?: 'quizzes_questions'; id: string }>
      }
    | null
    | undefined
}

export const CompleteQuizDocument = gql`
  mutation CompleteQuiz($quizId: String!, $userId: String!) {
    update_quizzes(
      where: {
        id: { _eq: $quizId }
        user_id: { _eq: $userId }
        completed_at: { _is_null: true }
      }
      _set: { completed_at: "now()" }
    ) {
      returning {
        id
        completed_at
      }
    }
  }
`
export const GetQuestionsDocument = gql`
  query GetQuestions {
    questions {
      id
      difficulty
    }
  }
`
export const InsertQuizDocument = gql`
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
export const GetQuestionCorrectAnswerDocument = gql`
  query GetQuestionCorrectAnswer($quiz_question_id: String!) {
    quiz_question_by_id(id: $quiz_question_id) {
      question {
        answer_value
      }
    }
  }
`
export const UpdateQuizQuestionResponseDocument = gql`
  mutation UpdateQuizQuestionResponse(
    $quizQuestionId: String!
    $userId: String!
    $input: quizzes_questions_set_input!
  ) {
    update_quizzes_questions(
      where: {
        id: { _eq: $quizQuestionId }
        quiz: { user_id: { _eq: $userId } }
        response: { _is_null: true }
      }
      _set: $input
    ) {
      returning {
        id
      }
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    CompleteQuiz(
      variables: CompleteQuizMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CompleteQuizMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CompleteQuizMutation>(
            CompleteQuizDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CompleteQuiz',
        'mutation'
      )
    },
    GetQuestions(
      variables?: GetQuestionsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetQuestionsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetQuestionsQuery>(GetQuestionsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'GetQuestions',
        'query'
      )
    },
    InsertQuiz(
      variables: InsertQuizMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<InsertQuizMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<InsertQuizMutation>(InsertQuizDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'InsertQuiz',
        'mutation'
      )
    },
    GetQuestionCorrectAnswer(
      variables: GetQuestionCorrectAnswerQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetQuestionCorrectAnswerQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetQuestionCorrectAnswerQuery>(
            GetQuestionCorrectAnswerDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'GetQuestionCorrectAnswer',
        'query'
      )
    },
    UpdateQuizQuestionResponse(
      variables: UpdateQuizQuestionResponseMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<UpdateQuizQuestionResponseMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateQuizQuestionResponseMutation>(
            UpdateQuizQuestionResponseDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'UpdateQuizQuestionResponse',
        'mutation'
      )
    }
  }
}
export type Sdk = ReturnType<typeof getSdk>

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCompleteQuizMutation((req, res, ctx) => {
 *   const { quizId, userId } = req.variables;
 *   return res(
 *     ctx.data({ update_quizzes })
 *   )
 * })
 */
export const mockCompleteQuizMutation = (
  resolver: ResponseResolver<
    GraphQLRequest<CompleteQuizMutationVariables>,
    GraphQLContext<CompleteQuizMutation>,
    any
  >
) =>
  graphql.mutation<CompleteQuizMutation, CompleteQuizMutationVariables>(
    'CompleteQuiz',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetQuestionsQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ questions })
 *   )
 * })
 */
export const mockGetQuestionsQuery = (
  resolver: ResponseResolver<
    GraphQLRequest<GetQuestionsQueryVariables>,
    GraphQLContext<GetQuestionsQuery>,
    any
  >
) =>
  graphql.query<GetQuestionsQuery, GetQuestionsQueryVariables>(
    'GetQuestions',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockInsertQuizMutation((req, res, ctx) => {
 *   const { quizId, userId, questions } = req.variables;
 *   return res(
 *     ctx.data({ insert_quizzes_one })
 *   )
 * })
 */
export const mockInsertQuizMutation = (
  resolver: ResponseResolver<
    GraphQLRequest<InsertQuizMutationVariables>,
    GraphQLContext<InsertQuizMutation>,
    any
  >
) =>
  graphql.mutation<InsertQuizMutation, InsertQuizMutationVariables>(
    'InsertQuiz',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetQuestionCorrectAnswerQuery((req, res, ctx) => {
 *   const { quiz_question_id } = req.variables;
 *   return res(
 *     ctx.data({ quiz_question_by_id })
 *   )
 * })
 */
export const mockGetQuestionCorrectAnswerQuery = (
  resolver: ResponseResolver<
    GraphQLRequest<GetQuestionCorrectAnswerQueryVariables>,
    GraphQLContext<GetQuestionCorrectAnswerQuery>,
    any
  >
) =>
  graphql.query<
    GetQuestionCorrectAnswerQuery,
    GetQuestionCorrectAnswerQueryVariables
  >('GetQuestionCorrectAnswer', resolver)

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateQuizQuestionResponseMutation((req, res, ctx) => {
 *   const { quizQuestionId, userId, input } = req.variables;
 *   return res(
 *     ctx.data({ update_quizzes_questions })
 *   )
 * })
 */
export const mockUpdateQuizQuestionResponseMutation = (
  resolver: ResponseResolver<
    GraphQLRequest<UpdateQuizQuestionResponseMutationVariables>,
    GraphQLContext<UpdateQuizQuestionResponseMutation>,
    any
  >
) =>
  graphql.mutation<
    UpdateQuizQuestionResponseMutation,
    UpdateQuizQuestionResponseMutationVariables
  >('UpdateQuizQuestionResponse', resolver)

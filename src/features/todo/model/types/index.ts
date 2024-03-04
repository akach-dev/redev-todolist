export type TaskResponse = {
  id: number
  isCompleted: boolean
  title: string
  user_id: number
}

export type TaskEntity = Omit<TaskResponse, 'user_id'>
export type ErrorResponse = {
  errors: RootObjectErrors[]
  success: boolean
}
export type RootObjectErrors = {
  location: string
  msg: string
  param: string
}

export type BaseResponseType<T> = {
  response: {
    data: T
  }
}

export type RegisterArgs = {
  age: number
  email: string
  gender: 'female' | 'male'
  password: string
  username: string
}
export type User = {
  age: number
  email: string
  gender: string
  id: number
  username: string
}
export type BaseResponse = {
  status: number
  token: string
}

import { instance } from '@/common'
import { BaseResponse, RegisterArgs, SignInFormValues, User } from '@/features'
import { AxiosResponse } from 'axios'

export class AuthService {
  static login(data: SignInFormValues) {
    return instance.post<null, AxiosResponse<BaseResponse>, SignInFormValues>(
      'api/auth/login',
      data
    )
  }

  static register(data: RegisterArgs) {
    return instance.post<null, AxiosResponse<User>, RegisterArgs>('api/users/register', data)
  }
}

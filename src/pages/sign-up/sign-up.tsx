import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Page, handleServerError } from '@/common'
import { AuthService, SignUpForm } from '@/features'
import { SignUpFormValues } from '@/features/auth/model/hooks'

export const SignUp = () => {
  const navigate = useNavigate()

  const handleSubmit = async ({ age, email, gender, name, password }: SignUpFormValues) => {
    try {
      await AuthService.register({
        age: +age,
        email,
        gender,
        password,
        username: name,
      })
      toast.success('The account has been created. Try to log in!')
      navigate('/sign-in')
    } catch (e) {
      handleServerError(e)
    }
  }

  return (
    <Page>
      <SignUpForm onSubmit={handleSubmit} />
    </Page>
  )
}

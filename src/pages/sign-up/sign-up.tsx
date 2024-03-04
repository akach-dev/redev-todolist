import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Page } from '@/common'
import { AuthService, SignUpForm } from '@/features'
import { SignUpFormValues } from '@/features/auth/model/hooks'

export const SignUp = () => {
  const navigate = useNavigate()

  const handleSubmit = ({ age, email, gender, name, password }: SignUpFormValues) => {
    AuthService.register({
      age: +age,
      email,
      gender,
      password,
      username: name,
    })
      .then(() => {
        toast.success('The account has been created. Try to log in!')
        navigate('/sign-in')
      })
      .catch((error: any) => {
        toast.error(JSON.stringify(error))
      })
  }

  return (
    <Page>
      <SignUpForm onSubmit={handleSubmit} />
    </Page>
  )
}

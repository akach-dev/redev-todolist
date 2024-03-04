import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Page, saveState } from '@/common'
import { AuthService, SignInForm, SignInFormValues } from '@/features'

export const SignIn = () => {
  const navigate = useNavigate()

  const handleSubmit = (value: SignInFormValues) => {
    AuthService.login(value)
      .then(({ data }) => {
        toast.success('Authentication was successful!')
        saveState('token', data.token)
        navigate('/')
      })
      .catch(error => {
        toast.error(JSON.stringify(error))
      })
  }

  return (
    <Page>
      <SignInForm onSubmit={handleSubmit} />
    </Page>
  )
}

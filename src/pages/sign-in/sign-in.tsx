import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Page, handleServerError, saveState } from '@/common'
import { AuthService, SignInForm, SignInFormValues } from '@/features'

export const SignIn = () => {
  const navigate = useNavigate()

  const handleSubmit = async (value: SignInFormValues) => {
    try {
      const {
        data: { token },
      } = await AuthService.login(value)

      toast.success('Authentication was successful!')
      saveState('token', token)
      navigate('/')
    } catch (e) {
      handleServerError(e)
    }
  }

  return (
    <Page>
      <SignInForm onSubmit={handleSubmit} />
    </Page>
  )
}

import { toast } from 'react-toastify'

import { isAxiosError } from 'axios'

export const handleServerError = (e: unknown) => {
  let errorMessage: string

  if (isAxiosError<ServerError>(e)) {
    if (e.response && e.response.data.message) {
      errorMessage = e.response?.data?.message
    } else if (e.response) {
      errorMessage = e.response.data.errors[0].msg
    } else {
      errorMessage = e.message
    }
  } else {
    errorMessage = (e as Error).message
  }
  toast.error(errorMessage)
}

type ServerError = {
  errors: Array<{
    location: string
    msg: string
    param: string
  }>
  message: string
}

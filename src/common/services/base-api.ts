import { restoreState } from '@/common'
import axios from 'axios'

export const instance = axios.create({
  baseURL: import.meta.env.APP_API_URL,
  headers: {
    Authorization: `Bearer ${restoreState('token', '')}`,
  },
})

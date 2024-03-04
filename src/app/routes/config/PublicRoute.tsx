import { Navigate, Outlet } from 'react-router-dom'

import { restoreState } from '@/common'

export const PublicRoute = () => {
  const isAuth = !!restoreState('token', '')

  return isAuth ? <Navigate to={'/'} /> : <Outlet />
}

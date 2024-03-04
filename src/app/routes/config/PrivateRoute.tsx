import { Navigate, Outlet } from 'react-router-dom'

import { restoreState } from '@/common'

export const PrivateRoute = () => {
  const isAuth = !!restoreState('token', '')

  return isAuth ? <Outlet /> : <Navigate to={'/sign-in'} />
}

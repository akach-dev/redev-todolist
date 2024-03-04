import { RouteObject, createHashRouter } from 'react-router-dom'

import { PrivateRoute } from '@/app/routes/config/PrivateRoute'
import { PublicRoute } from '@/app/routes/config/PublicRoute'
import { Layout } from '@/layout'
import { NotFound, SignIn, SignUp, Todo } from '@/pages'

const publicRoutes: RouteObject[] = [
  { element: <SignIn />, path: '/sign-in' },
  { element: <SignUp />, path: '/sign-up' },
]

const privateRoutes: RouteObject[] = [{ element: <Todo />, path: '/' }]

const appRoutes: RouteObject[] = [
  { children: privateRoutes, element: <PrivateRoute /> },
  { children: publicRoutes, element: <PublicRoute /> },
]

export const router = createHashRouter([
  {
    children: appRoutes,
    element: <Layout />,
  },
  {
    element: <NotFound />,
    path: '*',
  },
])

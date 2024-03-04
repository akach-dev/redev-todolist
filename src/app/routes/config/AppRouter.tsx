import { RouterProvider } from 'react-router-dom'

import { router } from '@/app/routes/route'

export const AppRouter = () => {
  return <RouterProvider router={router} />
}

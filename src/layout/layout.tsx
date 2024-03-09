import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Outlet } from 'react-router-dom'

import { selectAppStatus } from '@/app/appSlice'
import { Loader, restoreState } from '@/common'
import { AppOutletContext } from '@/common/hooks'
import { useAppSelector } from '@/store'

export const Layout = forwardRef<
  ElementRef<'div'>,
  Omit<ComponentPropsWithoutRef<'div'>, 'children'>
>(({ ...rest }, ref) => {
  const isAuth = !!restoreState('token', '')

  const status = useAppSelector(selectAppStatus)

  return (
    <div ref={ref} {...rest}>
      {status === 'loading' && <Loader />}
      <header></header>
      <main>
        <Outlet context={{ isAuth } satisfies AppOutletContext} />
      </main>
      <footer></footer>
    </div>
  )
})

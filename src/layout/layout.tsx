import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Outlet } from 'react-router-dom'

import { restoreState } from '@/common'
import { AppOutletContext } from '@/common/hooks'

export const Layout = forwardRef<
  ElementRef<'div'>,
  Omit<ComponentPropsWithoutRef<'div'>, 'children'>
>(({ ...rest }, ref) => {
  const isAuth = !!restoreState('token', '')

  return (
    <div ref={ref} {...rest}>
      <header></header>
      <main>
        <Outlet context={{ isAuth } satisfies AppOutletContext} />
      </main>
      <footer></footer>
    </div>
  )
})

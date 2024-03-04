import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './page.module.scss'

export const Page = forwardRef<
  ElementRef<'section'>,
  {
    mt?: CSSProperties['marginTop']
  } & ComponentPropsWithoutRef<'section'>
>(({ className, mt = '2.25rem', style, ...rest }, ref) => {
  const styles: CSSProperties = { marginTop: mt, ...style }

  return <section className={clsx(s.page, className)} ref={ref} style={styles} {...rest} />
})

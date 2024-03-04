import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ReactNode,
  Ref,
  forwardRef,
} from 'react'

import { TypographyVariant } from '@/common'
import { clsx } from 'clsx'

import s from './typography.module.scss'

type Props<T extends ElementType = 'p'> = {
  as?: T
  className?: string
  variant?: TypographyVariant
} & ComponentPropsWithoutRef<T>

type TypographyComponent = <T extends ElementType = 'p'>(
  props: Props<T> & { ref?: Ref<ElementRef<T>> }
) => ReactNode

export const Typography: TypographyComponent = forwardRef(
  ({ as, children, className, variant = 'body1', ...rest }, ref) => {
    const classNames = clsx(s.typography, s[variant], className)
    const Component: ElementType = as ?? 'p'

    return (
      <Component className={classNames} ref={ref} {...rest}>
        {children}
      </Component>
    )
  }
)

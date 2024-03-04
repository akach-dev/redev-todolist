import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ReactNode,
  Ref,
  forwardRef,
} from 'react'

import { ButtonVariant } from '@/common'
import { clsx } from 'clsx'

import s from './button.module.scss'

type Props<T extends ElementType> = {
  as?: T
  className?: string
  fullWidth?: boolean
  icon?: ReactNode
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

type ButtonComponent = <T extends ElementType = 'button'>(
  props: Props<T> & { ref?: Ref<ElementRef<T>> }
) => ReactNode

export const Button: ButtonComponent = forwardRef(
  ({ as, children, className, fullWidth, icon, variant = 'primary', ...rest }, ref) => {
    const Component: ElementType = as ?? 'button'

    const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth, className)

    return (
      <Component className={classNames} ref={ref} {...rest}>
        {icon}
        {children}
      </Component>
    )
  }
)

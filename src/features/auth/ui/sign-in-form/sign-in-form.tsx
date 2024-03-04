import { Link } from 'react-router-dom'

import { Button, Card, Input, Typography } from '@/common'
import { SignInFormValues, useSignInForm } from '@/features'
import { clsx } from 'clsx'

import s from './sign-in-form.module.scss'

export const SignInForm = ({
  className,
  disabled,
  onSubmit,
}: {
  className?: string
  disabled?: boolean
  onSubmit: (data: SignInFormValues) => void
}) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useSignInForm()

  return (
    <div>
      <Card as={'form'} className={clsx(s.form, className)} onSubmit={handleSubmit(onSubmit)}>
        <Typography as={'h3'} className={s.title} variant={'large'}>
          Sign In
        </Typography>

        <Input
          {...register('email')}
          className={s.email}
          disabled={disabled}
          fullWidth
          helperText={errors.email?.message}
          label={'Email'}
          type={'email'}
        />
        <Input
          {...register('password')}
          className={s.password}
          disabled={disabled}
          fullWidth
          helperText={errors.password?.message}
          label={'Password'}
          type={'password'}
        />

        <Button>Sign In</Button>
      </Card>

      <div className={s.footer}>
        <Typography>Already have an account?</Typography>
        <Typography as={Link} className={s.link} to={'/sign-up'}>
          Sign Up
        </Typography>
      </div>
    </div>
  )
}

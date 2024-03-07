import { Link } from 'react-router-dom'

import { Button, Card, Input, Typography } from '@/common'
import { SignUpFormValues, useSignUpForm } from '@/features'
import { FormControlLabel, RadioGroup } from '@mui/material'
import Radio from '@mui/material/Radio'
import { clsx } from 'clsx'

import s from './sign-up-form.module.scss'

export const SignUpForm = ({
  className,
  disabled,
  onSubmit,
}: {
  className?: string
  disabled?: boolean
  onSubmit: (data: SignUpFormValues) => void
}) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useSignUpForm()

  return (
    <div>
      <Card as={'form'} className={clsx(s.form, className)} onSubmit={handleSubmit(onSubmit)}>
        <Typography as={'h3'} className={s.title} variant={'large'}>
          Sign Up
        </Typography>
        <Input
          {...register('name')}
          className={s.name}
          disabled={disabled}
          fullWidth
          helperText={errors.name?.message}
          label={'User Name'}
          type={'text'}
        />
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
        <RadioGroup
          aria-labelledby={'demo-radio-buttons-group-label'}
          defaultValue={'female'}
          name={'radio-buttons-group'}
          row
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          Gender
          <div>
            <FormControlLabel
              {...register('gender')}
              className={s.label}
              control={<Radio />}
              label={'Male'}
              value={'male'}
            />

            <FormControlLabel
              {...register('gender')}
              control={<Radio />}
              label={'Female'}
              value={'female'}
            />
          </div>
        </RadioGroup>
        <Input
          {...register('age')}
          className={s.age}
          disabled={disabled}
          fullWidth
          helperText={errors.age?.message}
          label={'Age'}
          type={'number'}
        />
        <Button>Sign up</Button>
      </Card>

      <div className={s.footer}>
        <Typography>Already have an account?</Typography>
        <Typography as={Link} to={'/sign-in'} variant={'link2'}>
          Log in
        </Typography>
      </div>
    </div>
  )
}

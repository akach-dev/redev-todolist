import { useForm } from 'react-hook-form'

import { emailRegex } from '@/features'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const signUpSchema = z.object({
  age: z.string(),
  email: z.string().refine(value => emailRegex.test(value), {
    message: 'Incorrect email address',
  }),
  gender: z.enum(['male', 'female']),
  name: z.string().min(3, 'User Name is required'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .refine(value => {
      const hasUppercase = /[A-Z]/.test(value)
      const hasLowercase = /[a-z]/.test(value)
      const hasNumber = /\d/.test(value)
      const hasSymbol = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-\\/]/.test(value)

      return hasUppercase && hasLowercase && hasNumber && hasSymbol
    }, 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol'),
})

export type SignUpFormValues = z.infer<typeof signUpSchema>

export const useSignUpForm = () =>
  useForm<SignUpFormValues>({
    defaultValues: {
      age: '18',
      email: '',
      gender: 'female',
      name: '',
      password: '',
    },
    resolver: zodResolver(signUpSchema),
  })

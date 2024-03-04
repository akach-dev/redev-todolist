// import { forwardRef } from 'react'
//
// import styled from '@emotion/styled'
// import TextField, { TextFieldProps } from '@mui/material/TextField'
//
// export const Input = forwardRef<HTMLInputElement, TextFieldProps>(({ ...rest }, ref) => {
//   const CssTextField = styled(TextField)({
//     '& .MuiInput-underline:after': {
//       borderBottomColor: '#B2BAC2',
//     },
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: '#bea6ff',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: '#8c61ff',
//       },
//       '&:hover fieldset': {
//         borderColor: '#B2BAC2',
//       },
//     },
//     '& label': {
//       color: '#A0AAB4',
//     },
//     '& label.Mui-focused': {
//       color: '#A0AAB4',
//     },
//   })
//
//   return (
//     <CssTextField
//       {...rest}
//       inputProps={{
//         sx: {
//           color: 'white',
//         },
//       }}
//       ref={ref}
//     />
//   )
// })

import { forwardRef } from 'react'

import styled from '@emotion/styled'
import TextField, { TextFieldProps } from '@mui/material/TextField'

export const Input = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ error, helperText, onBlur, onChange, value, ...rest }, ref) => {
    const CssTextField = styled(TextField)({
      '& .MuiFormHelperText-root': {
        color: '#cc1439', // Установка красного цвета текста ошибки
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#bea6ff',
        },
        '& input': {
          backgroundColor: 'transparent', // Установка прозрачного background-color для input
        },
        '&.Mui-focused fieldset': {
          borderColor: '#8c61ff',
        },
        '&:hover fieldset': {
          borderColor: '#B2BAC2',
        },
      },
      '& label': {
        color: '#A0AAB4',
      },
      '& label.Mui-focused': {
        color: '#A0AAB4',
      },
    })

    return (
      <CssTextField
        {...rest}
        error={error}
        helperText={helperText}
        inputProps={{
          sx: {
            color: 'white',
          },
        }}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
        value={value}
      />
    )
  }
)

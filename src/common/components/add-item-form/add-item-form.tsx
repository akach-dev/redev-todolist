import { ChangeEvent, KeyboardEvent, useState } from 'react'

import { Button, Typography } from '@/common'

import s from './add-item-form.module.scss'

export const AddItemForm = ({ addItem }: { addItem: (title: string) => void }) => {
  const [title, setTitle] = useState('')

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const addItemHandler = () => {
    if (title.trim()) {
      addItem(title)
      setTitle('')
    }
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      addItemHandler()
    }
  }

  return (
    <div className={s.group}>
      <input
        className={'input'}
        onChange={onChangeHandler}
        onKeyDown={onKeyPressHandler}
        value={title}
      />
      <Button className={s.button} onClick={addItemHandler}>
        <Typography variant={'h3'}>Add Task</Typography>
      </Button>
    </div>
  )
}

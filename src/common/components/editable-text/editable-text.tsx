import { ChangeEvent, useState } from 'react'

import { Button, Typography } from '@/common'
import Delete from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton'
import { clsx } from 'clsx'

import s from './editable-text.module.scss'

export const EditableText = ({
  changeTaskStatusHandler,
  isCompleted,
  onChange,
  removeTask,
  value,
}: {
  changeTaskStatusHandler: (isCompleted: boolean) => void
  isCompleted: boolean
  onChange: (value: string) => void
  removeTask: () => void
  value: string
}) => {
  const [isDone, setIsDone] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(value)

  const activateEditMode = () => {
    setEditMode(true)
    setTitle(value)
  }
  const activateViewMode = () => {
    setEditMode(false)
    onChange(title)
  }

  const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

  const toggleComplete = () => {
    setIsDone(prevState => !prevState)
    changeTaskStatusHandler(isDone)
  }

  return editMode ? (
    <div className={s.update}>
      <input
        autoFocus
        className={'input'}
        onBlur={activateViewMode}
        onChange={changeTitleHandler}
        value={title}
      />
      <Button onClick={activateViewMode}>
        <Typography variant={'h2'}>Update</Typography>
      </Button>
    </div>
  ) : (
    <li className={s.task}>
      <Typography
        as={'p'}
        className={clsx(s.title, isDone === !isCompleted && s.decor)}
        onClick={toggleComplete}
        variant={'h2'}
      >
        {value}
      </Typography>
      <div>
        <IconButton color={'inherit'} onClick={activateEditMode}>
          <EditIcon />
        </IconButton>
        <IconButton color={'inherit'} onClick={removeTask}>
          <Delete />
        </IconButton>
      </div>
    </li>
  )
}

import { Button, Typography, useEditableText } from '@/common'
import Delete from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton'
import { clsx } from 'clsx'

import s from './editable-text.module.scss'

export const EditableText = ({ taskID }: { taskID: number }) => {
  const {
    activateEditModeHandler,
    activateViewMode,
    changeTitleHandler,
    editMode,
    isDone,
    isLoading,
    removeTaskHandler,
    title,
    toggleCompleteHandler,
    value,
  } = useEditableText(taskID)

  return editMode ? (
    <div className={s.update}>
      <input
        autoFocus
        className={'input'}
        disabled={isLoading}
        onBlur={activateViewMode}
        onChange={changeTitleHandler}
        value={title}
      />
      <Button disabled={isLoading} onClick={activateViewMode}>
        <Typography variant={'h2'}>Update</Typography>
      </Button>
    </div>
  ) : (
    <li className={s.task}>
      <Typography
        as={'p'}
        className={clsx(s.title, isDone && s.decor)}
        onClick={toggleCompleteHandler}
        variant={'h2'}
      >
        {value}
      </Typography>
      <div>
        <IconButton color={'inherit'} disabled={isLoading} onClick={activateEditModeHandler}>
          <EditIcon />
        </IconButton>
        <IconButton color={'inherit'} disabled={isLoading} onClick={removeTaskHandler}>
          <Delete />
        </IconButton>
      </div>
    </li>
  )
}

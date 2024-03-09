import { ChangeEvent, useState } from 'react'

import { changeTaskStatus, changeTaskTitle, removeTask, selectTaskById } from '@/features'
import { useAppDispatch, useAppSelector } from '@/store'

export const useEditableText = (id: number) => {
  const dispatch = useAppDispatch()
  const task = useAppSelector(state => selectTaskById(state, id))

  const [isDone, setIsDone] = useState(!task?.isCompleted)
  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(task?.title ?? '')

  const activateEditModeHandler = () => {
    setEditMode(true)
    setTitle(task?.title ?? '')
  }

  const activateViewMode = () => {
    setEditMode(false)

    return dispatch(changeTaskTitle({ id, title }))
  }

  const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

  const toggleCompleteHandler = () => {
    setIsDone(!isDone)

    return dispatch(changeTaskStatus({ id, isCompleted: isDone }))
  }

  const removeTaskHandler = () => dispatch(removeTask(id))

  return {
    activateEditModeHandler,
    activateViewMode,
    changeTitleHandler,
    editMode,
    isDone: task?.isCompleted,
    removeTaskHandler,
    title,
    toggleCompleteHandler,
    value: task?.title,
  }
}

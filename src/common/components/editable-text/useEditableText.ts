import { ChangeEvent, useState } from 'react'

import { selectAppStatus } from '@/app'
import { changeTaskStatus, changeTaskTitle, removeTask, selectTaskById } from '@/features'
import { useAppDispatch, useAppSelector } from '@/store'

export const useEditableText = (id: number) => {
  const dispatch = useAppDispatch()
  const task = useAppSelector(selectTaskById(id))
  const status = useAppSelector(selectAppStatus)

  const [isDone, setIsDone] = useState(!task?.isCompleted)
  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(task?.title ?? '')

  const activateEditModeHandler = () => {
    setEditMode(true)
    setTitle(task?.title ?? '')
  }
  const activateViewMode = () => {
    setEditMode(false)

    return dispatch(changeTaskTitle(id, title))
  }

  const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

  const toggleCompleteHandler = () => {
    setIsDone(!isDone)

    return dispatch(changeTaskStatus(id, isDone))
  }

  const removeTaskHandler = () => dispatch(removeTask(id))

  return {
    activateEditModeHandler,
    activateViewMode,
    changeTitleHandler,
    editMode,
    isDone: task?.isCompleted,
    isLoading: status === 'loading',
    removeTaskHandler,
    title,
    toggleCompleteHandler,
    value: task?.title,
  }
}

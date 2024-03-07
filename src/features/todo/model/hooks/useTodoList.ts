import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/app'
import { restoreState } from '@/common'
import { createTask, fetchTasks, selectAllTasks } from '@/features'

export const useTodoList = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const tasks = useAppSelector(selectAllTasks)

  const token = restoreState('token', '')

  useEffect(() => {
    dispatch(fetchTasks(token))
  }, [token, dispatch])

  const addTask = (title: string) => dispatch(createTask(title))

  const logOutHandler = () => {
    localStorage.clear()
    navigate('/sign-in')
  }

  return {
    addTask,
    logOutHandler,
    tasks,
  }
}

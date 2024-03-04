import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { restoreState } from '@/common'
import { BaseResponseType, ErrorResponse, TaskEntity, TodosService } from '@/features'

export const useTodoList = () => {
  const [tasks, setTasks] = useState<TaskEntity[]>([])

  const navigate = useNavigate()

  const token = restoreState('token', '')

  useEffect(() => {
    TodosService.getTasks(token).then(({ data }) => {
      setTasks(data)
    })
  }, [token])

  const removeTask = (id: number) => {
    TodosService.removeTask(id).then(({ data }) => {
      setTasks(tasks.filter(task => task.id !== data.id))
      toast.success(`Task ${data.id}  has been successfully removed`)
    })
  }

  const addTask = (title: string) => {
    TodosService.addTask({ title })

      .then(({ data }) => {
        const newTask: TaskEntity = {
          id: data.id,
          isCompleted: data.isCompleted,
          title: data.title,
        }

        setTasks([...tasks, newTask])
        toast.success(`Task ${data.id}  has been successfully created`)
      })
      .catch((e: BaseResponseType<ErrorResponse>) => {
        toast.error(e.response.data.errors[0].msg)
      })
  }

  const changeTaskTitle = (id: number, title: string) => {
    TodosService.updateTask(id, { title })
      .then(() => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, title } : task)))
        toast.success(`Title task ${id} change successfully`)
      })
      .catch((e: BaseResponseType<ErrorResponse>) => {
        toast.error(e.response.data.errors[0].msg)
      })
  }

  const changeTaskStatus = (id: number) => {
    TodosService.changeTaskStatus(id)
      .then(() => {
        toast.success(`Status task ${id} change successfully`)
      })
      .catch((e: BaseResponseType<{ message: string }>) => {
        debugger
        toast.error(e.response.data.message)
      })
  }

  const logOutHandler = () => {
    localStorage.clear()
    navigate('/sign-in')
  }

  return {
    addTask,
    changeTaskStatus,
    changeTaskTitle,
    logOutHandler,
    removeTask,
    tasks,
  }
}

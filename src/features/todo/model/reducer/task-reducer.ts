import { toast } from 'react-toastify'

import { setAppStatus } from '@/app'
import { handleServerError } from '@/common'
import { TaskResponse, TodosService } from '@/features'
import { Dispatch } from 'redux'

const initialState: TaskResponse[] = []

export const tasksReducer = (
  state: TaskResponse[] = initialState,
  action: Actions
): TaskResponse[] => {
  switch (action.type) {
    case 'TASKS/SET-TASKS':
      return [...action.tasks]

    case 'TASKS/ADD-TASK':
      return [...state, action.task]

    case 'TASKS/REMOVE-TASK':
      return state.filter(task => task.id !== action.id)

    case 'TASKS/CHANGE-TASK-TITLE':
      return state.map(task => (task.id === action.id ? { ...task, title: action.title } : task))

    case 'TASKS/CHANGE-TASK-STATUS':
      return state.map(task => {
        return task.id === action.id ? { ...task, isCompleted: action.isCompleted } : task
      })

    default:
      return state
  }
}

type Actions =
  | ReturnType<typeof addTask>
  | ReturnType<typeof deleteTask>
  | ReturnType<typeof setTasks>
  | ReturnType<typeof updateTaskStatus>
  | ReturnType<typeof updateTaskTitle>

// actions
export const setTasks = (tasks: TaskResponse[]) => ({
  tasks,
  type: 'TASKS/SET-TASKS' as const,
})

export const addTask = (task: TaskResponse) => ({
  task,
  type: 'TASKS/ADD-TASK' as const,
})

export const deleteTask = (id: number) => ({
  id,
  type: 'TASKS/REMOVE-TASK' as const,
})

export const updateTaskTitle = (id: number, title: string) => ({
  id,
  title,
  type: 'TASKS/CHANGE-TASK-TITLE' as const,
})

export const updateTaskStatus = (id: number, isCompleted: boolean) => ({
  id,
  isCompleted,
  type: 'TASKS/CHANGE-TASK-STATUS' as const,
})

// thunks
export const fetchTasks = (token: string) => async (dispatch: Dispatch) => {
  dispatch(setAppStatus('loading'))
  try {
    const { data } = await TodosService.getTasks(token)

    dispatch(setTasks(data))
  } catch (e) {
    handleServerError(e)
  } finally {
    dispatch(setAppStatus('idle'))
  }
}

export const createTask = (title: string) => async (dispatch: Dispatch) => {
  dispatch(setAppStatus('loading'))
  try {
    const { data } = await TodosService.addTask({ title })

    dispatch(addTask(data))
    toast.success(`Task ${data.id}  has been successfully created`)
  } catch (e) {
    handleServerError(e)
  } finally {
    dispatch(setAppStatus('idle'))
  }
}

export const removeTask = (id: number) => async (dispatch: Dispatch) => {
  dispatch(setAppStatus('loading'))
  try {
    await TodosService.removeTask(id)
    dispatch(deleteTask(id))
    toast.success(`Task ${id}  has been successfully removed`)
  } catch (e) {
    handleServerError(e)
  } finally {
    dispatch(setAppStatus('idle'))
  }
}

export const changeTaskStatus =
  (id: number, isCompleted: boolean) => async (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'))
    try {
      await TodosService.changeTaskStatus(id)
      dispatch(updateTaskStatus(id, isCompleted))
      toast.success(`Status task ${id} change successfully`)
    } catch (e) {
      handleServerError(e)
    } finally {
      dispatch(setAppStatus('idle'))
    }
  }

export const changeTaskTitle = (id: number, title: string) => async (dispatch: Dispatch) => {
  dispatch(setAppStatus('loading'))
  try {
    await TodosService.updateTask(id, { title })
    dispatch(updateTaskTitle(id, title))
    toast.success(`Title task ${id} change successfully`)
  } catch (e) {
    handleServerError(e)
  } finally {
    dispatch(setAppStatus('idle'))
  }
}

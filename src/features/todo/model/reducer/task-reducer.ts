import { TaskEntity, TaskResponse } from '@/features'

const initialState: TaskEntity[] = []

export const tasksReducer = (state: TaskEntity[] = initialState, action: Actions) => {
  switch (action.type) {
    case 'SET-TASKS':
      return [...action.tasks]
    default:
      return state
  }
}

export const setTasks = (tasks: TaskResponse[]) => ({
  tasks,
  type: 'SET-TASKS' as const,
})

type Actions = ReturnType<typeof setTasks>

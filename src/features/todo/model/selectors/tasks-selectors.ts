import { AppRootStateType } from '@/store'
import { createSelector } from 'reselect'

export const selectAllTasks = (state: AppRootStateType) => state.tasks
export const selectTaskById = (taskId: number) =>
  createSelector(selectAllTasks, tasks => tasks.find(task => task.id === taskId))

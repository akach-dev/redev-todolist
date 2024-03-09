import { toast } from 'react-toastify'

import { createAppSlice, handleServerError } from '@/common'
import { TaskResponse, TodosService } from '@/features'

const slice = createAppSlice({
  initialState: {
    tasks: [] as TaskResponse[],
  },
  name: 'tasks',
  reducers: create => {
    const createAThunk = create.asyncThunk.withTypes<{
      rejectValue: null
    }>()

    return {
      changeTaskStatus: createAThunk(
        async ({ id, isCompleted }: { id: number; isCompleted: boolean }, { rejectWithValue }) => {
          try {
            await TodosService.changeTaskStatus(id)
            toast.success(`Status of task ${id} changed successfully`)

            return { id, isCompleted }
          } catch (e) {
            handleServerError(e)
            rejectWithValue(null)
          }
        },
        {
          fulfilled: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload?.id)

            if (action.payload && task) {
              task.isCompleted = action.payload.isCompleted
            }
          },
        }
      ),
      changeTaskTitle: createAThunk(
        async ({ id, title }: { id: number; title: string }, { rejectWithValue }) => {
          try {
            await TodosService.updateTask(id, { title })
            toast.success(`Title of task ${id} changed successfully`)

            return { id, title }
          } catch (e) {
            handleServerError(e)
            rejectWithValue(null)
          }
        },
        {
          fulfilled: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload?.id)

            if (action.payload && task) {
              task.title = action.payload.title
            }
          },
        }
      ),
      createTask: createAThunk(
        async (title: string, { rejectWithValue }) => {
          try {
            const { data: task } = await TodosService.addTask({ title })

            toast.success(`Task ${task.id}  has been successfully created`)

            return { task }
          } catch (e) {
            handleServerError(e)
            rejectWithValue(null)
          }
        },
        {
          fulfilled: (state, action) => {
            if (action.payload) {
              const { task } = action.payload

              state.tasks.push(task)
            }
          },
        }
      ),
      fetchTasks: createAThunk(
        async (token: string, { rejectWithValue }) => {
          try {
            const { data } = await TodosService.getTasks(token)

            return { data }
          } catch (e) {
            handleServerError(e)
            rejectWithValue(null)
          }
        },
        {
          fulfilled: (state, action) => {
            state.tasks = action.payload?.data ?? []
          },
        }
      ),
      removeTask: createAThunk(
        async (id: number, { rejectWithValue }) => {
          try {
            await TodosService.removeTask(id)
            toast.success(`Task ${id}  has been successfully removed`)

            return { id }
          } catch (e) {
            handleServerError(e)
            rejectWithValue(null)
          }
        },
        {
          fulfilled: (state, action) => {
            const task = state.tasks.findIndex(task => task.id === action.payload?.id)

            state.tasks.splice(task, 1)
          },
        }
      ),
    }
  },
  selectors: {
    selectAllTasks: sliceState => sliceState.tasks,
    selectTaskById: (sliceState, id: number) => sliceState.tasks.find(task => task.id === id),
  },
})

export const tasksReducer = slice.reducer
export const { selectAllTasks, selectTaskById } = slice.selectors
export const { changeTaskStatus, changeTaskTitle, createTask, fetchTasks, removeTask } =
  slice.actions

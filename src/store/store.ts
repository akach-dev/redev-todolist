import { appReducer } from '@/app/appSlice'
import { tasksReducer } from '@/features'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    app: appReducer,
    tasks: tasksReducer,
  },
})

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store

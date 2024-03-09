import { AppDispatch, AppRootStateType } from '@/store'
import { createAsyncThunk } from '@reduxjs/toolkit'

/**
 This function is intended to get rid of code duplication on type creation in thunk
 */

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  dispatch: AppDispatch
  rejectValue: null
  state: AppRootStateType
}>()

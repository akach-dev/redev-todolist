import { createAppSlice } from '@/common'
import { isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'

export type RequestStatus = 'failed' | 'idle' | 'loading' | 'succeeded'

const slice = createAppSlice({
  extraReducers: builder => {
    builder
      .addMatcher(isPending, state => {
        state.status = 'loading'
      })
      .addMatcher(isFulfilled, state => {
        state.status = 'idle'
      })
      .addMatcher(isRejected, state => {
        state.status = 'failed'
      })
  },
  initialState: {
    status: 'idle' as RequestStatus,
  },
  name: 'app',
  reducers: {},
  selectors: {
    selectAppStatus: sliceState => sliceState.status,
  },
})

export const { selectAppStatus } = slice.selectors
export const appReducer = slice.reducer

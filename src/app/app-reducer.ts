const initialState = {
  status: 'idle' as RequestStatus,
}

export const appReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return { ...state, status: action.status }

    default:
      return state
  }
}

export type RequestStatus = 'failed' | 'idle' | 'loading' | 'succeeded'

type Actions = ReturnType<typeof setAppStatus>

export const setAppStatus = (status: RequestStatus) => ({ status, type: 'APP/SET-STATUS' }) as const

const initialState: InitialState = {
  status: 'idle',
}

export const appReducer = (state: InitialState = initialState, action: Actions): InitialState => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return { ...state, status: action.status }
    default:
      return state
  }
}

export type RequestStatus = 'failed' | 'idle' | 'loading' | 'succeeded'
export type SetAppStatus = ReturnType<typeof setAppStatusAC>
type Actions = SetAppStatus

export type InitialState = {
  // происходит ли сейчас взаимодействие с сервером
  status: RequestStatus
}

export const setAppStatusAC = (status: RequestStatus) =>
  ({ status, type: 'APP/SET-STATUS' }) as const

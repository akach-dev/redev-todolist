import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { appReducer } from '@/app/reducer'
import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'

const rootReducer = combineReducers({
  app: appReducer,
  // tasks: tasksReducer,
})

export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store

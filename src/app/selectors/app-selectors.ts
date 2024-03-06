import { AppRootStateType } from '@/app'

export const selectAppStatus = (state: AppRootStateType) => state.app.status

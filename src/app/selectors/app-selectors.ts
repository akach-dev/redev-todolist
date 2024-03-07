import { AppRootStateType } from '@/store/store'

export const selectAppStatus = (state: AppRootStateType) => state.app.status

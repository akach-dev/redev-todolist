import { Provider } from 'react-redux'

import { AppRouter, store } from '@/app'
import { Toast } from '@/common'
import { createRoot } from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppRouter />
    <Toast />
  </Provider>
)

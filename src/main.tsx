import { AppRouter } from '@/app/routes/config'
import { Toast } from '@/common'
import { createRoot } from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

createRoot(document.getElementById('root')!).render(
  <>
    <AppRouter />
    <Toast />
  </>
)

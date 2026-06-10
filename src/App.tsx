import AppThemeProvider from './components/theme-provider'
import AppRoutes from './routes'
import { ToastContainer } from 'react-toastify'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  return (
    <>
      {import.meta.env.PROD && <Analytics />}

      <AppThemeProvider>
        <ToastContainer theme="colored" />
        <AppRoutes />
      </AppThemeProvider>
    </>
  )
}

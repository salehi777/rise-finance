import AppThemeProvider from './components/theme-provider'
import AppRoutes from './routes'
import { ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <AppThemeProvider>
      <ToastContainer theme="colored" />
      <AppRoutes />
    </AppThemeProvider>
  )
}

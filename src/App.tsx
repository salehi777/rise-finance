import AppThemeProvider from './components/theme-provider'
import AppRoutes from './routes'
import ToasterContainer from './components/toaster-container'
import { ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <AppThemeProvider>
      <ToasterContainer />
      <ToastContainer theme="colored" />
      <AppRoutes />
    </AppThemeProvider>
  )
}

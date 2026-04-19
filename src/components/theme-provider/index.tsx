import { CssBaseline, ThemeProvider } from '@mui/material'
import AppGlobalStyles from './global-styles'
import useAppTheme from './useAppTheme'

interface AppThemeProviderProps {
  children: React.ReactNode
}

export default function AppThemeProvider({ children }: AppThemeProviderProps) {
  const appTheme = useAppTheme()

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <AppGlobalStyles />
      {children}
    </ThemeProvider>
  )
}

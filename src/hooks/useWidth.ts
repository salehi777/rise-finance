import { useMediaQuery, useTheme, type Breakpoint } from '@mui/material'

export default function useWidth() {
  const theme = useTheme()

  const keys = [...theme.breakpoints.keys].reverse()

  return (
    keys.reduce((output: Breakpoint | null, key) => {
      const matches = useMediaQuery(theme.breakpoints.up(key))
      return !output && matches ? key : output
    }, null) || 'xs'
  )
}

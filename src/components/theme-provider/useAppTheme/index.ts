import { createTheme } from '@mui/material/styles'
import { useMemo } from 'react'
import mixins from './mixins'
import components from './components'
import palette from './palette'
import typography from './typography'

export default function useAppTheme() {
  const theme = useMemo(
    () =>
      createTheme({
        mixins,
        components,
        typography,
        palette,
      }),
    [],
  )

  return theme
}

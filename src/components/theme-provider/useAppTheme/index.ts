import { createTheme } from '@mui/material/styles'
import { useMemo } from 'react'
import useSystemMode from '../useSystemMode'
import mixins from './mixins'
import components from './components'
import palette from './palette'
import typography from './typography'
import useSettingsStore from '@/stores/useSettingsStore'

export default function useAppTheme() {
  const direction = useSettingsStore((s) => s.direction)
  const storeMode = useSettingsStore((s) => s.mode)
  const systemMode = useSystemMode()

  const mode = useMemo(
    () => (storeMode !== 'system' ? storeMode : systemMode),
    [storeMode, systemMode],
  )

  const theme = useMemo(
    () =>
      createTheme({
        direction,
        mixins,
        components,
        typography,
        palette: palette(mode),
      }),
    [direction, mode],
  )

  return theme
}

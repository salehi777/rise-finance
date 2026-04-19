import type { Components } from '@mui/material/styles'
import { gray } from './colors'

const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: { boxShadow: 'none !important', textTransform: 'unset' },
    },
  },
  MuiIconButton: { styleOverrides: { root: { color: 'inherit', padding: 4 } } },
  MuiTextField: {
    defaultProps: {
      fullWidth: true,
      autoComplete: 'off',
      slotProps: { inputLabel: { shrink: true } },
    },
  },
  MuiCheckbox: {
    styleOverrides: { root: { padding: 6, svg: { width: 20, height: 20 } } },
  },
  MuiFormControlLabel: { styleOverrides: { root: { marginLeft: -6 } } },
  MuiSkeleton: { defaultProps: { variant: 'rounded', animation: 'wave' } },
  MuiTypography: { defaultProps: { variantMapping: { h6: 'p' } } },
  MuiCard: { styleOverrides: { root: { padding: '18px 18px' } } },
  MuiTooltip: {
    styleOverrides: {
      popper: {
        '&[data-popper-placement="top"]': {
          '.MuiTooltip-tooltip': { marginBottom: '0px !important' },
        },
        '&[data-popper-placement="bottom"]': {
          '.MuiTooltip-tooltip': { marginTop: '0px !important' },
        },
      },
      tooltip: {
        background: gray[400],
        padding: '2px 6px',
        maxWidth: 80,
        textAlign: 'center',
      },
    },
  },
  MuiSlider: {
    styleOverrides: {
      valueLabel: {
        padding: '1px 5px',
        top: -2,
        '&::before': { content: 'unset' },
      },
    },
    defaultProps: { valueLabelDisplay: 'on' },
  },
}

export default components

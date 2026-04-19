import { FormControl } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  label: { transformOrigin: 'top left', userSelect: 'none' },

  '>div': { display: 'flex', alignItems: 'center', width: '100%' },

  input: {
    border: 0,
    padding: '11.5px 14px',
    outline: 'none',
    width: '100%',
    font: 'inherit',
    letterSpacing: 'inherit',
    boxSizing: 'content-box',
  },

  fieldset: {
    position: 'absolute',
    top: -5,
    bottom: 0,
    left: 0,
    right: 0,
    padding: '0 8px',
    margin: 0,
    border: '1px solid',
    borderColor: 'rgba(0, 0, 0, 0.23)',
    borderRadius: 4,
    pointerEvents: 'none',
    overflow: 'hidden',

    legend: {
      padding: 0,
      height: 10,
      opacity: 0,
      // maxWidth: 0.01, // uncomment for shrink=false
    },
  },

  '&:hover': { fieldset: { borderColor: '#111827' } },

  '&:focus-within': {
    label: {
      color: theme.palette.primary.main,
      pointerEvents: 'auto',
      transform: 'translate(14px, -9px) scale(0.75)',
    },
    fieldset: {
      borderWidth: 2,
      borderColor: theme.palette.primary.main,
      legend: { maxWidth: '100%' },
    },
  },

  'label.Mui-error': {
    color: theme.palette.error.main,
    '&+div': { fieldset: { borderColor: theme.palette.error.main } },
  },
}))

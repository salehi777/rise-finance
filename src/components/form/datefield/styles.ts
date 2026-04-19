import { styled } from '@mui/material/styles'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export const StyledDateField = styled(DatePicker)(({}) => ({
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',

  '.MuiInputBase-root': {
    cursor: 'inherit',
    paddingInlineEnd: 9,

    input: { userSelect: 'none', cursor: 'inherit' },
  },

  '&:has(>.Mui-disabled)': { pointerEvents: 'none' },

  '>.Mui-disabled': {
    pointerEvents: 'none',
    '>button': { color: 'rgba(0, 0, 0, 0.26)' },
  },
}))

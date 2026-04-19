import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledInput = styled(TextField)(({}) => ({
  '.MuiInputBase-root': {
    borderRadius: 8,
    '&.MuiInputBase-multiline, input.MuiInputBase-input': {
      height: 'unset',
      padding: '12px 14px',
    },
    '&.MuiInputBase-adornedEnd': { paddingInlineEnd: 9 },
  },
}))

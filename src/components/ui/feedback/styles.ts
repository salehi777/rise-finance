import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledFeedback = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 26,
  ...theme.typography.body2,
  fontWeight: 600,

  '&[data-error="true"]': { color: theme.palette.error.main },
}))

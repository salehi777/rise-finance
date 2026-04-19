import { styled } from '@mui/material/styles'

export const StyledLoading = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 6,

  '>span': {
    borderRadius: '100%',
    background: theme.palette.secondary.main,
    boxShadow: `0 0 16px ${theme.palette.secondary.main}66`,
    opacity: 0.7,
  },
}))

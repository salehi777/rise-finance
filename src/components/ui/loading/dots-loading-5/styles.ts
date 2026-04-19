import { styled } from '@mui/material/styles'

export const StyledLoading = styled('div')(({ theme }) => ({
  position: 'relative',

  '>span': {
    borderRadius: '100%',
    background: theme.palette.secondary.main,
    boxShadow: `0 0 16px ${theme.palette.secondary.main}66`,
    opacity: 0.7,
    position: 'absolute',
    left: '0%',
    top: '50%',
  },
}))

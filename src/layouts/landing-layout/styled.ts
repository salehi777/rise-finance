import { styled } from '@mui/material/styles'

export const StyledLayout = styled('div')(({ theme }) => ({
  main: {
    paddingTop: theme.mixins.landing.header.height,
    display: 'flex',
    flexDirection: 'column',
  },
}))

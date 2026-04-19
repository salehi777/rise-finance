import { styled } from '@mui/material/styles'

export const StyledContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  ...theme.mixins.dashboard.fullPage,

  h1: { fontSize: 130 },

  div: { fontSize: 22, marginTop: 24 },

  a: { display: 'block', marginTop: 48 },
}))

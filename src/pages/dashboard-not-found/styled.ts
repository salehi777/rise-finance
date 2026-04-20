import { styled } from '@mui/material/styles'

export const StyledContent = styled('div')(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  h1: { fontSize: 130 },

  div: { fontSize: 22, marginTop: 24 },

  a: { display: 'block', marginTop: 48 },
}))

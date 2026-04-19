import { styled } from '@mui/material/styles'

export const StyledForm = styled('form')(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: 8,
  padding: '40px 32px',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
}))

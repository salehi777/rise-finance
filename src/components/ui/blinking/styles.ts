import { styled, keyframes } from '@mui/material/styles'

export const StyledBlinking = styled('span')(({ theme }) => ({
  borderRadius: '100%',
  backgroundColor: theme.palette.error.main,
  animation: `${blink} 1s infinite linear alternate`,
  display: 'block',
}))

const blink = keyframes`from{opacity:0.2}to{opacity:1}`

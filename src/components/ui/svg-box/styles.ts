import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledSvgBox = styled(Box)(({}) => ({
  width: 20,
  height: 20,
  flexShrink: 0,
  display: 'inline-flex',
  backgroundColor: 'currentColor',
}))

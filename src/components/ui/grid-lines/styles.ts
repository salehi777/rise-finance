import { styled } from '@mui/material/styles'

export const StyledBox = styled('div')(({}) => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  left: 0,
  top: 0,

  span: {
    position: 'absolute',
    background: '#000',
    zIndex: 1,
  },
}))

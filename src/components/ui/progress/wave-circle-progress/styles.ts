import { styled } from '@mui/material/styles'

export const StyledBox = styled('div')(({}) => ({
  position: 'relative',

  '>div': {
    position: 'absolute',
  },
}))

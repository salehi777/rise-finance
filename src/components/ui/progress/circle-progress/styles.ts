import { styled } from '@mui/material/styles'

export const StyledBox = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    transform: 'rotate(-90deg)',
    stroke: theme.palette.primary.main,
  },

  '>p': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    span: { fontSize: 13 },
  },

  '>span': {
    position: 'absolute',
    top: 0,
    left: '50%',
    userSelect: 'none',
    fontSize: 13,
  },
}))

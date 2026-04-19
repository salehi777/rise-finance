import { styled } from '@mui/material/styles'

export const StyledBox = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  background: theme.palette.primary[200],
  borderRadius: '100%',

  '>div': {
    height: '150%',
    width: '100%',
    position: 'absolute',
    background: theme.palette.primary[400],

    svg: {
      width: '100%',
      height: 'auto',
      position: 'absolute',
      background: theme.palette.primary[200],
      fill: theme.palette.primary[400],
    },
  },

  '>p': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    color: theme.palette.gray[700],
    span: { fontSize: 13 },
  },
}))

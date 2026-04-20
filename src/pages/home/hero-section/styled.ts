import { styled } from '@mui/material/styles'

export const StyledWrapper = styled('div')(({ theme }) => ({
  backgroundColor: '#121139',
  position: 'relative',
  overflow: 'hidden',
  '&::before , &::after': {
    content: '""',
    position: 'absolute',
    borderRadius: 900,
    background:
      'linear-gradient(177deg, rgba(66, 62, 224, 0.40) -13.49%, rgba(129, 45, 226, 0.40) 109.75%)',
    filter: 'blur(150px)',
  },
  '&::before': { width: '50%', height: '80%', left: '-25%', bottom: '-40%' },
  '&::after': { width: '30%', height: '50%', right: '-15%', top: '-25%' },

  '>div': {
    display: 'flex',
    flexDirection: 'column',
    gap: 175,
    justifyContent: 'center',
    ...theme.mixins.landing.fullPage,
  },

  [theme.breakpoints.down('lg')]: {
    '>div': {
      gap: 110,
    },
  },
}))

export const StyledContent = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  gap: 40,

  '>div:first-of-type': {
    h5: { margin: '26px 0 38px' },
  },

  '>div:last-of-type': { position: 'relative' },

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',

    '>div:first-of-type': {
      textAlign: 'center',
      h5: { margin: '26px 0' },
    },
  },
}))

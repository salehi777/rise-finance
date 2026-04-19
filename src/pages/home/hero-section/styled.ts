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

  [theme.breakpoints.down('md')]: { paddingTop: 32 },

  '>div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    ...theme.mixins.landing.fullPage,
  },
}))

export const StyledHero = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  gap: 40,

  '>div:last-of-type': {
    position: 'relative',
  },

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',

    '>div:first-of-type': {
      textAlign: 'center',
    },
  },
}))

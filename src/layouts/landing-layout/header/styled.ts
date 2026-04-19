import { styled } from '@mui/material/styles'

export const StyledHeader = styled('header')(({ theme }) => ({
  position: 'fixed',
  left: 0,
  right: 0,
  height: theme.mixins.landing.header.height,
  zIndex: theme.zIndex.appBar,
  color: 'white',
  backgroundColor: '#121139',

  '>div': { height: '100%' },
}))

export const StyledContent = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  gap: 12,

  '>a': { display: 'flex', alignItems: 'center' },

  '>button': { '.svg-box': { width: 32, height: 32 } },

  '>div': { display: 'flex', gap: 8, button: { color: 'white' } },

  [theme.breakpoints.down('md')]: {
    '>a': { display: 'none' },
    '>div': { marginLeft: 'auto' },
  },
}))

export const StyledGithub = styled('a')(({ theme }) => ({
  position: 'fixed',
  top: 4,
  right: 4,
  zIndex: theme.zIndex.appBar,
  color: 'white',

  '.svg-box': { width: 32, height: 32 },

  [theme.breakpoints.down('lg')]: { display: 'none' },
}))

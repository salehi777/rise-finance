import { styled } from '@mui/material/styles'

export const StyledLayout = styled('div')(({ theme }) => ({
  display: 'flex',
  backgroundColor: '#dfdfe5',

  minHeight: '100vh',
  '@supports (height: 100dvh)': {
    minHeight: '100dvh',
  },

  '>div:last-of-type': {
    minWidth: 0,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',

    main: {
      padding: theme.mixins.dashboard.main.padding_desktop,
      flex: 1,

      [theme.breakpoints.down('md')]: {
        padding: theme.mixins.dashboard.main.padding_mobile,
      },
    },
  },
}))

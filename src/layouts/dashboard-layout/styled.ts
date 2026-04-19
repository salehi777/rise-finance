import { styled } from '@mui/material/styles'

export const StyledLayout = styled('div')(({ theme }) => ({
  display: 'flex',
  backgroundColor: '#dfdfe5',

  main: {
    padding: theme.mixins.dashboard.main.padding_desktop,
    minWidth: 0,
    flex: 1,

    [theme.breakpoints.down('md')]: {
      padding: theme.mixins.dashboard.main.padding_mobile,
    },
  },
}))

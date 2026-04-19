import { styled } from '@mui/material/styles'

export const StyledLayout = styled('div')(({ theme }) => ({
  display: 'flex',
  main: {
    padding: '36px 10px',
    paddingTop: (theme.mixins.header.height as number) + 36,
    minWidth: 0,
    flex: 1,
  },
}))

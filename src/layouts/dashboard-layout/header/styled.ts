import { styled } from '@mui/material/styles'

export const StyledHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '24px 32px',
  borderBottom: '1px solid #9695a9',
  position: 'fixed',
  transition: theme.transitions.create('left'),
  right: 0,
  zIndex: theme.zIndex.appBar,
  height: theme.mixins.dashboard.header.height,
  left: theme.mixins.dashboard.sidebar.width_close,
  backgroundColor: '#dfdfe5',

  '&[data-sidebar="true"]': { left: theme.mixins.dashboard.sidebar.width_open },

  '>h1': {
    marginRight: 'auto',
    fontSize: 32,
    [theme.breakpoints.down('sm')]: { display: 'none' },
  },

  '.MuiFormControl-root': {
    width: 330,
    '.MuiInputBase-root': {
      backgroundColor: 'white',
      height: 42,
      borderRadius: 30,
      input: { color: '#000', fontSize: 14 },
      fieldset: { border: 0 },
    },
    [theme.breakpoints.down('lg')]: { display: 'none' },
  },

  '>div:last-of-type': {
    backgroundColor: 'white',
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    padding: 6,
    marginLeft: 16,
    height: 42,
    cursor: 'pointer',

    '.MuiAvatar-root': { marginRight: 8, width: 32, height: 32 },

    '>div:last-of-type': {
      lineHeight: '18px',
      div: { fontSize: 14, fontWeight: 500 },
      span: {
        fontSize: 12,
        color: theme.palette.grey[500],
        textTransform: 'capitalize',
      },
    },

    '>span': { margin: '0 12px 0 20px', '.svg-box': { width: 16, height: 16 } },
  },

  [theme.breakpoints.down('md')]: {
    justifyContent: 'flex-end',
    padding: '24px 12px',

    '>div:last-of-type': { marginLeft: 0 },
  },
}))

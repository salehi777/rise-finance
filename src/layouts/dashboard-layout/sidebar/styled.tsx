import { styled } from '@mui/material/styles'

export const StyledBox = styled(({ sidebar, ...props }: any) => (
  <div {...props} />
))(({ theme, sidebar }) => ({
  minWidth: sidebar
    ? theme.mixins.dashboard.sidebar.width_open
    : theme.mixins.dashboard.sidebar.width_close,

  transition: theme.transitions.create('min-width'),
  [theme.breakpoints.down('md')]: {
    minWidth: theme.mixins.dashboard.sidebar.width_close,
  },
}))

export const StyledSidebar = styled(({ sidebar, ...props }: any) => (
  <nav {...props} />
))(({ theme, sidebar }) => ({
  width: sidebar
    ? theme.mixins.dashboard.sidebar.width_open
    : theme.mixins.dashboard.sidebar.width_close,
  transition: theme.transitions.create('width'),
  padding: sidebar ? '32px 28px' : '32px 18px',
  backgroundColor: '#121139',
  color: '#fff',
  position: 'fixed',
  zIndex: theme.zIndex.drawer,
  top: 0,
  bottom: 0,
  textWrap: 'nowrap',

  '>a:first-of-type': {
    display: 'flex',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 700,
    div: {
      marginRight: 8,
      position: 'relative',
      minWidth: sidebar ? 52 : 42,
      height: sidebar ? 52 : 42,
    },
    span: {
      display: sidebar ? 'block' : 'none',
    },
  },

  '>a:last-of-type': {
    marginTop: 70,
    display: 'flex',
    alignItems: 'center',
    color: '#171717',
    padding: '12px 6px',
    backgroundColor: 'white',
    borderRadius: 50,
    width: sidebar ? '' : 48,
    height: sidebar ? '' : 48,
    '>div': {
      display: 'inline-flex',
      marginRight: sidebar ? 4 : 0,
    },
    '>span:first-of-type': {
      display: sidebar ? 'block' : 'none',
    },
  },

  ul: {
    marginTop: 60,
    a: {
      padding: '13px 16px',
      borderRadius: 50,
      marginBottom: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: sidebar ? 'flex-start' : 'center',
      transition: theme.transitions.create('all'),
      color: 'inherit',
      width: sidebar ? 'unset' : 48,
      height: sidebar ? 'unset' : 48,
      '>span:first-of-type': {
        display: 'flex',
        marginRight: sidebar ? 16 : 0,
        '.svg-box': {
          width: 22,
          height: 22,
        },
      },
      '>span:last-of-type': {
        display: sidebar ? 'block' : 'none',
      },

      '&[data-active=true]': {
        color: '#121139',
        backgroundColor: '#fff',
      },
    },
  },
}))

export const StyledArrow = styled(({ sidebar, ...props }: any) => (
  <div {...props} />
))(({ theme, sidebar }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 30,
  height: 30,
  borderRadius: 30,
  backgroundColor: '#fff',
  position: 'absolute',
  right: -15,
  top: 60,
  zIndex: theme.zIndex.drawer,
  cursor: 'pointer',
  transform: `rotate(${sidebar ? 90 : -90}deg)`,
  transition: theme.transitions.create('all'),
  color: 'black',
  '.svg-box': {
    width: 16,
    height: 16,
  },
}))

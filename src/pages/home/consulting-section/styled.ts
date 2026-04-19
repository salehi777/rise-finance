import { styled } from '@mui/material/styles'

export const StyledHead = styled('div')(({ theme }) => ({
  marginTop: 80,
  textAlign: 'center',
  div: { maxWidth: 724 },
  h5: { maxWidth: 510, margin: '40px auto 0' },
  [theme.breakpoints.down('md')]: {
    marginTop: 50,
    h5: { margin: '30px auto 0' },
  },
}))

export const StyledBox = styled('div')(({ theme }) => ({
  color: 'white',
  padding: 24,
  position: 'relative',
  margin: '51px 0 144px',
  '&::before , &::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    borderRadius: 30,
  },
  '&::before': {
    background: 'linear-gradient(177deg, #423EE0 -13.49%, #812DE2 109.75%)',
    filter: 'blur(45px)',
  },
  '&::after': { backgroundColor: '#121139' },

  '>button': {
    position: 'absolute',
    top: 24,
    right: 24,
    zIndex: 2,
    borderRadius: 10,
    '.svg-box': { width: 32, height: 32 },
  },

  '>div:first-of-type': {
    position: 'relative',
    zIndex: 1,
    '>span:first-of-type': { fontSize: 14, fontWeight: 500, display: 'block' },
    '>span:last-of-type': {
      marginTop: 8,
      fontSize: 22,
      fontWeight: 700,
      display: 'block',
    },
    '>div:first-of-type': { marginTop: 8, fontSize: 26, fontWeight: 700 },
    '>p': { marginTop: 8, color: '#B8C0CC' },
    '>div:last-of-type': {
      fontSize: 12,
      marginTop: 32,
      display: 'flex',
      alignItems: 'center',
      svg: {
        marginRight: 8,
        width: 10,
        height: 10,
        '&:first-of-type': { fill: '#3A49F9' },
        '&:last-of-type': { fill: '#812DE2' },
      },
      span: { marginRight: 16 },
    },
  },

  [theme.breakpoints.down('md')]: {
    padding: 16,
    margin: '51px 0 100px',

    '>button': { top: 12, right: 12 },

    '>div:first-of-type': {
      '>span:first-of-type': { fontSize: 12 },
      '>span:last-of-type': { marginTop: 8, fontSize: 16 },
      '>div:first-of-type': { marginTop: 0, fontSize: 18 },
      '>p': { marginTop: 0, fontSize: 12 },
      '>div:last-of-type': { marginTop: 24 },
    },
  },
}))

export const StyledChart = styled('div')(({ theme }) => ({
  marginTop: 16,
  position: 'relative',
  zIndex: 1,
  '>span': { position: 'relative', width: 922, height: 258, display: 'block' },
  '>div': {
    position: 'absolute',
    right: 0,
    width: 868,
    height: 181,
    bottom: 46,
  },

  [theme.breakpoints.down('lg')]: {
    '>span': { width: 922 * 0.8, height: 258 * 0.8 },
    '>div': { width: 868 * 0.8, height: 181 * 0.8, bottom: 37 },
  },
  [theme.breakpoints.down('md')]: {
    '>span': { width: 922 * 0.55, height: 258 * 0.55 },
    '>div': { width: 868 * 0.55, height: 181 * 0.55, bottom: 26 },
  },
  [theme.breakpoints.down('sm')]: {
    '>span': { width: 922 * 0.3, height: 258 * 0.3 },
    '>div': { width: 868 * 0.3, height: 181 * 0.3, bottom: 14 },
  },
}))

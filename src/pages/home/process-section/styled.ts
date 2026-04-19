import { styled } from '@mui/material/styles'

export const StyledWrapper = styled('div')(({ theme }) => ({
  backgroundColor: '#121139',
  position: 'relative',
  overflow: 'hidden',
  color: 'white',
  '&::before': {
    content: '""',
    position: 'absolute',
    borderRadius: 1000,
    background: 'linear-gradient(177deg, #423EE0 -13.49%, #812DE2 109.75%)',
    filter: 'blur(400px)',
    width: '60%',
    height: '100%',
    right: '-36%',
    top: '-50%',
  },
}))

export const StyledHead = styled('div')(({ theme }) => ({
  textAlign: 'center',
  maxWidth: 663,
  margin: '125px auto 153px',

  [theme.breakpoints.down('md')]: { margin: '70px auto 75px' },
}))

export const StyledInfo = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: '24px 80px 24px 24px',
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
    '>span[data-meta]': {
      marginBottom: 8,
      fontSize: 14,
      fontWeight: 500,
      display: 'block',
    },
    '>div[data-bodytitle]': {
      marginBottom: 8,
      fontSize: 22,
      fontWeight: 700,
      display: 'block',
    },
    '>div[data-value]': { fontSize: 26, fontWeight: 700 },
    '>span[data-subtitle]': {
      marginTop: 8,
      color: '#B8C0CC',
      display: 'block',
    },
    '>div[data-info]': {
      display: 'flex',
      alignItems: 'center',
      margin: '32px 0',
      '>div': {
        marginLeft: 16,
        '>div': {
          fontSize: 12,
          display: 'flex',
          alignItems: 'center',
          margin: '8px 0',
          svg: { marginRight: 8, width: 10, height: 10, fill: '#3A49F9' },
        },
      },
    },
  },

  [theme.breakpoints.down('md')]: {
    padding: '24px 24px 24px 24px',
    '>div:first-of-type': {
      textAlign: 'center',
      '>div[data-info]': { justifyContent: 'center' },
    },
  },
}))

export const StyledProcess = styled('div')(({ theme }) => ({
  '>span': {
    fontSize: 30,
    fontWeight: 600,
    lineHeight: '100%',
    letterSpacing: '-4px',
  },
  '>h5': { marginTop: 22 },
  '>div': {
    marginTop: 90,
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
    '>div': {
      width: 202,
      borderRadius: 30,
      border: '2px solid #812DE2',
      background: '#1C1A50',
      padding: '16px 18px 30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      '>.svg-box': { width: 70, height: 70 },
      '>div:first-of-type': {
        fontSize: 22,
        fontWeight: 500,
        lineHeight: '130%',
        display: 'block',
        marginTop: 28,
      },
      '>div:last-of-type': {
        fontSize: 90,
        fontWeight: 500,
        lineHeight: '130%',
        position: 'absolute',
        bottom: 0,
        transform: 'translateY(75%)',
      },
    },
  },

  [theme.breakpoints.down('lg')]: {
    '>span': { fontSize: 28, lineHeight: '90%' },
    '>h5': { marginTop: 16 },
    '>div': {
      '>div': {
        width: '30%',
        padding: '12px 12px 22px',
        '>div:first-of-type': { fontSize: 18, marginTop: 12 },
        '>div:last-of-type': { fontSize: 60, lineHeight: '90%' },
      },
    },
  },

  [theme.breakpoints.down('md')]: {
    marginTop: 55,
    '>span': { fontSize: 24, lineHeight: '80%', letterSpacing: '0px' },
    '>div': {
      marginTop: 60,
      '>div': {
        '>.svg-box': { width: 40 },
        '>div:first-of-type': { fontSize: 16 },
      },
    },
  },
}))

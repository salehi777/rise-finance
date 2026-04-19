import AnimatedRect from '@/components/ui/animated-rect'
import { styled } from '@mui/material/styles'

export const StyledSmallCard = styled(AnimatedRect)(({ theme }) => ({
  position: 'absolute',
  bottom: '-30%',
  right: '5%',
  width: 214,
  height: 266,

  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    borderRadius: 30,
    background: 'linear-gradient(177deg, #423EE0 -13.49%, #812DE2 109.75%)',
    filter: 'blur(45px)',
  },

  '>span': { position: 'absolute' },

  '>div': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '28px 25px 36px',
    fontWeight: 500,
    '>span:first-of-type': {
      marginBottom: 'auto',
      position: 'relative',
      width: 66,
      height: 40,
    },
    '>span:last-of-type': { fontSize: 12, opacity: 0.5 },
    '>div:first-of-type': {
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      fontSize: 13,
      div: {
        marginRight: 12,
        span: {
          marginRight: 9,
          width: 6,
          height: 6,
          display: 'inline-block',
          backgroundColor: 'white',
          borderRadius: 6,
        },
      },
    },
    '>div:last-of-type': {
      marginTop: 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      div: { position: 'relative', width: 48, height: 32 },
      span: { fontSize: 11 },
    },
  },

  [theme.breakpoints.down('xl')]: { width: 214 * 0.8, height: 266 * 0.8 },

  [theme.breakpoints.down('lg')]: {
    width: 214 * 0.65,
    height: 266 * 0.65,
    '>div': {
      padding: '16px 16px',
      '>span:first-of-type': { width: 66 * 0.75, height: 40 * 0.75 },
      '>span:last-of-type': { fontSize: 11 },
      '>div:first-of-type': {
        fontSize: 11,
        'span:first-of-type': { svg: { marginRight: 4, width: 5, height: 5 } },
      },
      '>div:last-of-type': { div: { width: 48 * 0.75, height: 32 * 0.75 } },
    },
  },
}))

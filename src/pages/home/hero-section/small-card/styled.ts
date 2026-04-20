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
    '>span': {
      img: { width: 66, height: 40 },
    },
    '>div:first-of-type': {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '>span': { fontSize: 12, opacity: 0.5 },
      '>div': {
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        fontSize: 13,
        svg: { marginRight: 18 },
      },
    },
    '>div:last-of-type': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 11,
      img: { width: 48, height: 32 },
    },
  },

  [theme.breakpoints.down('xl')]: {
    width: 214 * 0.8,
    height: 266 * 0.8,
  },

  [theme.breakpoints.down('lg')]: {
    width: 214 * 0.65,
    height: 266 * 0.65,
    '>div': {
      padding: '16px 16px',
      '>span': {
        img: { width: 66 * 0.75, height: 40 * 0.75 },
      },
      '>div:first-of-type': {
        '>span': { fontSize: 11 },
        '>div': { marginTop: 4, fontSize: 11 },
      },
      '>div:last-of-type': {
        img: { width: 48 * 0.75, height: 32 * 0.75 },
      },
    },
  },

  [theme.breakpoints.down('sm')]: {
    width: 214 * 0.61,
    height: 266 * 0.61,
    bottom: '-35%',
    right: '4%',
  },
}))

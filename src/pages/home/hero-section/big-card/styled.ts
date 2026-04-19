import AnimatedRect from '@/components/ui/animated-rect'
import { styled } from '@mui/material/styles'

export const StyledBigCard = styled(AnimatedRect)(({ theme }) => ({
  position: 'relative',
  width: 609,
  height: 350,

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
    justifyContent: 'space-between',
    height: '100%',
    padding: '47px 58px',
    '>div': {
      display: 'flex',
      justifyContent: 'space-between',
      '>div:first-of-type': {
        'span:first-of-type': {
          fontSize: 14,
          fontWeight: 500,
          opacity: 0.54,
          display: 'block',
        },
        'span:last-of-type': {
          fontSize: 28,
          fontWeight: 500,
          display: 'block',
          marginTop: 17,
        },
      },
      '>div:last-of-type': { position: 'relative', width: 87, height: 68 },
    },
  },

  [theme.breakpoints.down('xl')]: { width: 609 * 0.8, height: 350 * 0.8 },

  [theme.breakpoints.down('lg')]: {
    width: 609 * 0.65,
    height: 350 * 0.65,
    '>div': {
      padding: '20px 20px',
      '>div': {
        '>div:first-of-type': {
          'span:first-of-type': { fontSize: 12 },
          'span:last-of-type': { fontSize: 24 },
        },
        '>div:last-of-type': { width: (50 * 87) / 68, height: 50 },
      },
    },
  },
}))

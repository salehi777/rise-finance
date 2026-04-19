import { styled } from '@mui/material/styles'

export const StyledWrapper = styled('div')(({}) => ({
  backgroundColor: '#121139',
  position: 'relative',
  overflow: 'hidden',
  color: 'white',
  '&::before , &::after': {
    content: '""',
    position: 'absolute',
    borderRadius: 900,
    background:
      'linear-gradient(177deg, rgba(66, 62, 224, 0.40) -13.49%, rgba(129, 45, 226, 0.40) 109.75%)',
    filter: 'blur(150px)',
  },
  '&::before': { width: '80%', height: '110%', left: '-30%', bottom: '-20%' },
  '&::after': { width: '50%', height: '100%', right: '-25%', top: '-50%' },
}))

export const StyledHead = styled('div')(({}) => ({
  margin: '80px 0',
  textAlign: 'center',
  h5: { margin: '40px auto 0', maxWidth: 911 },
}))

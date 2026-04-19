import { styled } from '@mui/material/styles'

export const StyledBox = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',

  '>div': {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
  },

  '&[data-determinate="true"]': {
    '>div': {
      right: 0,
      '--split': '0%',
      background: `linear-gradient(105deg,
        ${theme.palette.mode === 'light' ? theme.palette.primary[100] : theme.palette.primary[300]} 0%,
        ${theme.palette.mode === 'light' ? theme.palette.primary[100] : theme.palette.primary[300]} var(--split),
        transparent var(--split))`,

      '>span': {
        position: 'absolute',
        left: 'var(--split)',
        top: 0,
        fontSize: 24,
        lineHeight: 1,
        transform: 'translateX(calc(var(--split) * -1))',
        color:
          theme.palette.mode === 'light'
            ? theme.palette.primary[400]
            : theme.palette.primary[500],
      },
    },
  },

  '&[data-determinate="false"]': {
    '>div': {
      background:
        theme.palette.mode === 'light'
          ? theme.palette.primary[100]
          : theme.palette.primary[300],
      clipPath: 'polygon(30px 0%, 100% 0, calc(100% - 30px) 100%, 0% 100%)',
      left: '100%',
      right: '-90%',
    },
  },
}))

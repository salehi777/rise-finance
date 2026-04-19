import { dashBorder } from '@/lib/helpers'
import { alpha, styled } from '@mui/material/styles'
import WrapperLoading from '../../loading/wrapper-loading'

export const StyledBox = styled(WrapperLoading)(({ theme }) => ({
  marginTop: 12,
  minHeight: 120,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  cursor: 'pointer',
  color: theme.palette.text.secondary,
  backgroundImage: dashBorder({ stroke: theme.palette.text.secondary }),
  backgroundColor: alpha(theme.palette.text.secondary, 0.15),
  fontSize: 16,
  '.svg-box': { width: 48, height: 48 },
}))

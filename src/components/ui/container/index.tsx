import type { BoxProps } from '@mui/material'
import { StyledContainer } from './styled'

export default function Container(props: BoxProps) {
  return <StyledContainer {...props} />
}

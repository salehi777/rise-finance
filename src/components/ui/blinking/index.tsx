import { StyledBlinking } from './styles'

interface BlinkingProps extends React.ComponentProps<'div'> {
  size?: number
}

export default function Blinking({ size = 15, ...props }: BlinkingProps) {
  return (
    <StyledBlinking
      style={{ minWidth: size, maxWidth: size, height: size }}
      {...props}
    />
  )
}

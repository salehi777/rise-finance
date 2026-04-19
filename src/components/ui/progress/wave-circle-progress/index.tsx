import { StyledBox } from './styles'
import CircleProgress from '../circle-progress'
import WaveProgress from '../wave-progress'

interface WaveCircleProgressProps {
  determinate?: boolean
  value?: number
  size?: number
  valueText?: 'center' | 'none'
  text?: string
}

export default function WaveCircleProgress({
  size = 200,
  ...props
}: WaveCircleProgressProps) {
  return (
    <StyledBox style={{ width: size, height: size }}>
      <WaveProgress size={size} {...props} />
      <CircleProgress
        size={size}
        {...props}
        valueText="none"
        text={undefined}
      />
    </StyledBox>
  )
}

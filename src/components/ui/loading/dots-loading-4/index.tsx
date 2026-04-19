import { motion, type Easing } from 'motion/react'
import { StyledLoading } from './styles'
import { memo } from 'react'
import LoadingAria, { type LoadingAriaProps } from '../loading-aria'

interface DotsLoading4Props extends LoadingAriaProps {
  size?: number
  duration?: number
  count?: number
  ease?: Easing
}

function DotsLoading4Component({
  size = 18,
  duration = 4,
  count = 3,
  ease = 'linear',
  ...props
}: DotsLoading4Props) {
  const width = size * count + 10 * (count - 1)

  return (
    <LoadingAria {...props}>
      <StyledLoading style={{ width, height: width }}>
        {Array.from({ length: count }, (_, i) => (
          <motion.span
            key={i}
            style={{
              width: size,
              height: size,
              y: '-50%',
              transformOrigin: `${width / 2}px center`,
            }}
            animate={{
              rotate: [0, 180, 180, 180, 0, -180, -180, -180],
              left: [0, 0, '-50%', '-100%', 0, 0, '-50%', '-100%'],
              x: [0, 0, '50%', '100%', 0, 0, '50%', '100%'],
            }}
            transition={{
              times: [0, 0.17, 0.34, 0.5, 0.5, 0.67, 0.84, 1],
              duration,
              repeat: Infinity,
              delay: -i * (duration / count),
              ease,
            }}
          />
        ))}
      </StyledLoading>
    </LoadingAria>
  )
}

const DotsLoading4 = memo(DotsLoading4Component)
export default DotsLoading4

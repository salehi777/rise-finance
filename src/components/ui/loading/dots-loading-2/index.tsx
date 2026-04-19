import { motion, type Easing } from 'motion/react'
import { StyledLoading } from './styles'
import { memo } from 'react'
import LoadingAria, { type LoadingAriaProps } from '../loading-aria'

interface DotsLoading2Props extends LoadingAriaProps {
  size?: number
  duration?: number
  count?: number
  ease?: Easing
}

function DotsLoading2Component({
  size = 18,
  duration = 2,
  count = 3,
  ease,
  ...props
}: DotsLoading2Props) {
  const width = size * count + 10 * (count - 1)

  return (
    <LoadingAria {...props}>
      <StyledLoading style={{ width, height: (width + size) / 2 }}>
        {Array.from({ length: count }, (_, i) => (
          <motion.span
            key={i}
            style={{
              width: size,
              height: size,
              y: '-100%',
              transformOrigin: `${width / 2}px center`,
            }}
            animate={{
              rotate: [0, ...Array.from({ length: count }, () => 180)],
              left: [
                '0%',
                ...Array.from(
                  { length: count },
                  (_, i) => `${-i * (100 / (count - 1))}%`,
                ),
              ],
              x: [
                '0%',
                ...Array.from(
                  { length: count },
                  (_, i) => `${i * (100 / (count - 1))}%`,
                ),
              ],
            }}
            transition={{
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

const DotsLoading2 = memo(DotsLoading2Component)
export default DotsLoading2

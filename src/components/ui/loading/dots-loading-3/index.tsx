import { motion } from 'motion/react'
import { StyledLoading } from './styles'
import { memo } from 'react'
import LoadingAria, { type LoadingAriaProps } from '../loading-aria'

interface DotsLoading3Props extends LoadingAriaProps {
  size?: number
  duration?: number
  count?: number
}

function DotsLoading3Component({
  size = 18,
  duration = 0.5,
  count = 3,
  ...props
}: DotsLoading3Props) {
  return (
    <LoadingAria {...props}>
      <StyledLoading style={{ height: size * (1 + 0.66 * 2) }}>
        {Array.from({ length: count }, (_, i) => (
          <motion.span
            key={i}
            style={{ width: size, height: size }}
            animate={{
              y:
                i !== 2
                  ? [-size * 0.66, size * 0.66]
                  : [size * 0.66, -size * 0.66],
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: 'mirror',
              delay: (i % 2) * (duration / 2),
              ease: 'linear',
            }}
          />
        ))}

        <motion.div
          style={{ width: size, height: size, y: '-50%' }}
          animate={{ left: [0, '100%'], x: [0, '-100%'] }}
          transition={{
            ease: 'linear',
            duration,
            repeat: Infinity,
            repeatType: 'mirror',
            delay: -duration / 2,
          }}
        />
      </StyledLoading>
    </LoadingAria>
  )
}

const DotsLoading3 = memo(DotsLoading3Component)
export default DotsLoading3

import { motion } from 'motion/react'
import { StyledLoading } from './styles'
import { memo } from 'react'
import LoadingAria, { type LoadingAriaProps } from '../loading-aria'

interface DotsLoading1Props extends LoadingAriaProps {
  size?: number
  duration?: number
  count?: number
}

function DotsLoading1Component({
  size = 18,
  duration = 0.5,
  count = 3,
  ...props
}: DotsLoading1Props) {
  return (
    <LoadingAria {...props}>
      <StyledLoading style={{ height: size * (1 + 0.66 * 2) }}>
        {Array.from({ length: count }, (_, i) => (
          <motion.span
            key={i}
            style={{ width: size, height: size }}
            animate={{ y: [-size * 0.66, size * 0.66] }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: 'mirror',
              delay: (i - 3) * (duration / 4),
              ease: 'easeInOut',
            }}
          />
        ))}
      </StyledLoading>
    </LoadingAria>
  )
}

const DotsLoading1 = memo(DotsLoading1Component)
export default DotsLoading1

import { motion } from 'motion/react'
import { StyledLoading } from './styles'
import { memo } from 'react'
import LoadingAria, { type LoadingAriaProps } from '../loading-aria'

interface DotsLoading5Props extends LoadingAriaProps {
  size?: number
  duration?: number
}

function DotsLoading5Component({
  size = 18,
  duration = 1,
  ...props
}: DotsLoading5Props) {
  const width = size * 4

  return (
    <LoadingAria {...props}>
      <StyledLoading style={{ width, height: width }}>
        {Array.from({ length: 2 }, (_, i) => (
          <motion.span
            key={i}
            style={{
              width: size,
              height: size,
              y: '-50%',
              transformOrigin: `${width / 2}px center`,
            }}
            animate={{ rotate: [0, i === 0 ? 180 : -180] }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'linear',
            }}
          />
        ))}
        <motion.span
          style={{ width: size, height: size, y: '-50%' }}
          animate={{ left: ['100%', 0], x: ['-100%', 0] }}
          transition={{
            duration: duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'linear',
          }}
        />
      </StyledLoading>
    </LoadingAria>
  )
}

const DotsLoading5 = memo(DotsLoading5Component)
export default DotsLoading5

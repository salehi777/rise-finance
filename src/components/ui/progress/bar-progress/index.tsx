import { motion } from 'motion/react'
import { memo } from 'react'
import { StyledBox } from './styles'

interface BarProgressProps {
  determinate?: boolean
  value?: number
}

function BarProgressComponent({
  determinate = false,
  value,
}: BarProgressProps) {
  return (
    <StyledBox data-determinate={determinate}>
      {determinate ? (
        <motion.div key="0" animate={{ '--split': value + '%' }}>
          <span>{value}%</span>
        </motion.div>
      ) : (
        <motion.div
          key="1"
          animate={{
            left: ['-35%', '100%'],
            right: ['100%', '-90%'],
            // left: ['-200%', '107%'],
            // right: ['100%', '-8%'],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </StyledBox>
  )
}

const BarProgress = memo(BarProgressComponent)
export default BarProgress

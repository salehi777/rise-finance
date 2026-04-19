import { motion } from 'motion/react'
import { memo, useMemo } from 'react'
import { StyledBox } from './styles'
import { mapRange } from '@/lib/helpers'

interface WaveProgressProps {
  determinate?: boolean
  value?: number
  size?: number
  valueText?: 'center' | 'none'
  text?: string
}

function WaveProgressComponent({
  determinate = false,
  value,
  size = 200,
  valueText = 'center',
  text,
}: WaveProgressProps) {
  const bottom = useMemo(
    () =>
      determinate && (value || value === 0)
        ? mapRange(value, [0, 100], [-150, -7]) + '%'
        : '-75%',
    [determinate, value],
  )

  return (
    <StyledBox style={{ width: size, height: size }}>
      <motion.div initial={{ bottom: '-150%' }} animate={{ bottom }}>
        <svg
          viewBox="0 0 600 300"
          width="600"
          height="300"
          style={{ overflow: 'hidden' }}
        >
          <g transform="translate(0 0)">
            <path d="M0 129C150 -43,300 -43,300 129C300 300,450 300,600 129L600 300L0 300Z" />
            <path
              d="M0 129C150 -43,300 -43,300 129C300 300,450 300,600 129L600 300L0 300Z"
              transform="translate(-598 0)"
            />
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="2s"
              type="translate"
              from="0 0"
              to="600 0"
              repeatCount="indefinite"
            />
          </g>
        </svg>
      </motion.div>

      {valueText === 'none' ? (
        <p>{text}</p>
      ) : (
        <p>
          {text}
          {(value || value === 0) && <span>{value}%</span>}
        </p>
      )}
    </StyledBox>
  )
}

const WaveProgress = memo(WaveProgressComponent)
export default WaveProgress

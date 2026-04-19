import { motion } from 'motion/react'
import { memo, useMemo } from 'react'
import { StyledBox } from './styles'

interface CircleProgressProps {
  determinate?: boolean
  value?: number
  size?: number
  valueText?: 'center' | 'around' | 'none'
  text?: string
}

function CircleProgressComponent({
  determinate = false,
  value,
  size = 200,
  valueText = 'center',
  text,
}: CircleProgressProps) {
  const strokeDashoffset = useMemo(
    () =>
      determinate && (value || value === 0) ? ((100 - value) * 923) / 100 : 923,
    [determinate, value],
  )

  return (
    <StyledBox style={{ width: size, height: size }}>
      <svg viewBox="0 0 300 300">
        <motion.circle
          cx="150"
          cy="150"
          r="147"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="923"
          strokeDashoffset={923}
          animate={{ strokeDashoffset }}
          transition={{ ease: 'linear' }}
        >
          {!determinate && (
            <>
              <animate
                attributeName="stroke-dashoffset"
                dur="8s"
                repeatCount="indefinite"
                values="100;800;100"
                keyTimes="0;0.5;1"
              />
              <animateTransform
                attributeName="transform"
                begin="0s"
                dur="1s"
                type="rotate"
                from="0 150 150"
                to="359 150 150"
                repeatCount="indefinite"
              />
            </>
          )}
        </motion.circle>
      </svg>

      {valueText === 'none' ? (
        <p>{text}</p>
      ) : valueText === 'center' ? (
        <p>
          {text}
          {(value || value === 0) && <span>{value}%</span>}
        </p>
      ) : (
        <>
          <p>{text}</p>
          {(value || value === 0) && (
            <motion.span
              style={{ transformOrigin: `center calc(${size / 2}px + 100%)` }}
              transformTemplate={(_, generated) =>
                `translateX(-50%) translateY(-100%) ${generated}`
              }
              animate={{ rotate: (value * 360) / 100 }}
              transition={{ ease: 'linear' }}
            >
              {value}%
            </motion.span>
          )}
        </>
      )}
    </StyledBox>
  )
}

const CircleProgress = memo(CircleProgressComponent)
export default CircleProgress

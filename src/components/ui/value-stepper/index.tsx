import usePrevious from '@/hooks/usePrevious'
import { AnimatePresence, motion } from 'motion/react'
import { memo } from 'react'

interface ValueStepperProps {
  value: number
}

function ValueStepperComponent({ value }: ValueStepperProps) {
  const prevValue = usePrevious(value)

  const variants = {
    initial: { opacity: 0, y: value > prevValue ? -20 : 20 },
    animate: { opacity: 1, y: 0 },
    exit: (isAdded: boolean) => ({ opacity: 0, y: isAdded ? 20 : -20 }),
  }

  return (
    <AnimatePresence
      custom={value > prevValue}
      mode="popLayout"
      initial={false}
    >
      <motion.span
        key={value}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ display: 'inline-block' }}
      >
        {value}
      </motion.span>
    </AnimatePresence>
  )
}
const ValueStepper = memo(ValueStepperComponent)
export default ValueStepper

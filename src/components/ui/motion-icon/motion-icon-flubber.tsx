import { motion, animate, useMotionValue, useTransform } from 'motion/react'
import { interpolate } from 'flubber'
import { memo, useEffect, useRef } from 'react'

interface MotionIconFlubberProps extends React.SVGProps<SVGSVGElement> {
  count: number
  startValue?: number
  trigger: boolean | string | number
  pathsMatrix: string[][]
}
function MotionIconFlubberComponent({
  count,
  startValue = 0,
  trigger,
  pathsMatrix,
  ...props
}: MotionIconFlubberProps) {
  const value = useMotionValue(startValue)
  const wrapped = useTransform(value, (v) => {
    const nv = v % count
    return nv < 0 ? nv + count : nv
  })

  useEffect(() => {
    pathsMatrix.forEach((paths) => {
      if (paths.length !== count)
        throw new Error('Invalid Matrix or icons count')
    })
  }, [])

  const motionPaths = pathsMatrix.map((paths) =>
    useTransform(
      wrapped,
      [...new Array(count + 1).keys()],
      [...paths, paths[0]],
      { mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }) },
    ),
  )

  const isFirstRender = useRef(true)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    animate(value, Math.ceil(value.get() + 1), { duration: 0.3 })
  }, [trigger])

  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      {motionPaths.map((motionPath, i) => (
        <motion.path
          key={i}
          d={motionPath}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  )
}

const MotionIconFlubber = memo(MotionIconFlubberComponent)
export default MotionIconFlubber

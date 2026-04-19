import { useEffect } from 'react'
import useCallbackRef from './useCallbackRef'

export default function useInterval(callback: () => void, delay: number) {
  const callbackRef = useCallbackRef(callback)

  useEffect(() => {
    const tick = () => callbackRef()

    if (delay > 0) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

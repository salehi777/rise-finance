import { useCallback, useEffect, useState } from 'react'
import type { AxiosResponse } from 'axios'

interface useAxiosConfig {
  immediate?: boolean
  onSuccess: (res: AxiosResponse) => void
  onError: (error: any) => void
}

export default function useAxios(
  method: () => Promise<AxiosResponse>,
  { immediate = true, onError, onSuccess }: useAxiosConfig,
) {
  const [state, setState] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  })

  const send = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true }))

    try {
      const res = await method()
      setState({ loading: false, data: res.data, error: undefined })
      onSuccess?.(res)
      return res
    } catch (err) {
      const error = err as any
      setState({ loading: false, data: undefined, error })
      onError?.(error)
      throw error
    }
  }, [])

  useEffect(() => {
    if (immediate) handleImmediate()
  }, [])

  const handleImmediate = async () => {
    try {
      await send()
    } catch {}
  }

  return { ...state, send }
}

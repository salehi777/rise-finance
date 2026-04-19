import { useEffect, useMemo, useState } from 'react'
import RHFSelect, { type RHFSelectProps } from '@/components/form/rhf-select'
import { useRequest } from 'alova/client'
import type { Method } from 'alova'
import debounce from 'lodash.debounce'

interface RHFSelectAsyncProps extends Omit<RHFSelectProps, 'options'> {
  method: (data?: any) => Method | Method
  callOnMount?: boolean
  callOnFocus?: boolean
  callOnChange?: boolean
}

export default function RHFSelectAsync({
  method,
  callOnMount,
  callOnFocus,
  callOnChange,
  ...props
}: RHFSelectAsyncProps) {
  const [options, setOptions] = useState<any[]>([])

  const { loading, send } = useRequest(method, {
    immediate: !!callOnMount,
  }).onSuccess(({ data }) => setOptions(data))

  const fetchOptions = useMemo(() => debounce(send, 600), [])

  useEffect(() => () => fetchOptions.cancel(), [])

  const onFocus: RHFSelectProps['onFocus'] = () => {
    if (callOnFocus && !options?.length) send()
  }

  const onInputChange: RHFSelectProps['onInputChange'] = (_, value, reason) => {
    if (callOnChange && (reason === 'input' || reason === 'clear'))
      fetchOptions(value)
  }

  return (
    <RHFSelect
      options={options || []}
      enableSearch
      loading={loading}
      onFocus={onFocus}
      onInputChange={onInputChange}
      {...props}
    />
  )
}

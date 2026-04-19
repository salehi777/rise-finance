import { useCallback, useState } from 'react'
import ExtendButton from '../buttons/extend-button'
import { Checkbox } from '@mui/material'

interface useTableUtilsArgs<T> {
  data: T[]
  rowKey: string
}

export default function useTableUtils<T>({
  data,
  rowKey,
}: useTableUtilsArgs<T>) {
  const [extendedList, setExtendedList] = useState<any[]>([])
  const [selectedList, setSelectedList] = useState<any[]>([])

  const getIsExtended = useCallback(
    (item: any) => extendedList.includes(item[rowKey]),
    [extendedList.length],
  )

  const getIsSelected = useCallback(
    (item: any) => selectedList.includes(item[rowKey]),
    [selectedList.length],
  )

  const onToggleExtend = useCallback(
    (item: any) =>
      setExtendedList((prev) =>
        prev.includes(item[rowKey])
          ? prev.filter((i) => i !== item[rowKey])
          : [...prev, item[rowKey]],
      ),
    [],
  )

  const onToggleExtendAll = useCallback(
    () =>
      setExtendedList((prev) =>
        prev.length < data.length ? data.map((item: any) => item[rowKey]) : [],
      ),
    [data.length],
  )

  const onToggleSelect = useCallback(
    (item: any) =>
      setSelectedList((prev) =>
        prev.includes(item[rowKey])
          ? prev.filter((i) => i !== item[rowKey])
          : [...prev, item[rowKey]],
      ),
    [],
  )

  const onToggleSelectAll = useCallback(
    () =>
      setSelectedList((prev) =>
        prev.length < data.length ? data.map((item: any) => item[rowKey]) : [],
      ),
    [data.length],
  )

  const renderExtendAll = () => (
    <ExtendButton
      isExtended={data.length !== 0 && extendedList.length === data.length}
      onToggle={() => onToggleExtendAll()}
    />
  )

  const renderSelectAll = () => (
    <Checkbox
      checked={data.length !== 0 && selectedList.length === data.length}
      indeterminate={
        selectedList.length !== 0 && selectedList.length < data.length
      }
      onChange={() => onToggleSelectAll()}
    />
  )

  const renderExtendOne = (item: T) => (
    <ExtendButton
      isExtended={getIsExtended(item)}
      onToggle={() => onToggleExtend(item)}
    />
  )

  const renderSelectOne = (item: T) => (
    <Checkbox
      checked={getIsSelected(item)}
      onChange={() => onToggleSelect(item)}
    />
  )

  return {
    getIsExtended,
    renderExtendAll,
    renderSelectAll,
    renderExtendOne,
    renderSelectOne,
  }
}

import type { TableColumn, TableRowExtraContent } from '@/components/ui/table'
import { useMemo } from 'react'
import Table from '@/components/ui/table'

export default function TableSample() {
  let loading = true
  loading = false
  let data = [...new Array(5)].map((_, i) => ({
    id: i,
    data1: i + 10,
    data2: i + 100,
    data3: i + 1000,
  }))

  const columns = useMemo<TableColumn[]>(
    () => [
      { type: 'numero' },
      { type: 'extend' },
      { type: 'select' },
      { columnKey: 'c1', title: 'Column 1', render: (item) => item.data1 },
      { columnKey: 'c2', title: 'Column 2', render: (item) => item.data2 },
      { columnKey: 'c3', title: 'Column 3', render: (item) => item.data3 },
    ],
    [],
  )

  const rowExtraContent = useMemo<TableRowExtraContent>(
    () => (item: any) => <div>Extra info for row {item.id + 1}</div>,
    [],
  )

  return (
    <Table
      data={data}
      columns={columns}
      gridTemplateColumns="44px 44px 44px 1fr 1fr 1fr"
      rowExtraContent={rowExtraContent}
      loading={loading}
    />
  )
}

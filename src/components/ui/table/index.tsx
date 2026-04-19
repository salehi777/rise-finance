import Feedback from '../feedback'
import { StyledFullRow, StyledHead, StyledRow, StyledTable } from './styles'
import { Collapse, Skeleton, Stack } from '@mui/material'
import { Fragment } from 'react'
import SvgBox from '../svg-box'
import useTableUtils from './useTableUtils'

export default function Table<T>({
  data,
  columns,
  rowExtraContent,
  gridTemplateColumns,
  rowKey = 'id',
  loading = false,
}: TableProps<T>) {
  const {
    getIsExtended,
    renderExtendAll,
    renderSelectAll,
    renderExtendOne,
    renderSelectOne,
  } = useTableUtils<T>({ data, rowKey })

  return (
    <StyledTable style={{ gridTemplateColumns }}>
      <StyledHead>
        {columns.map(({ columnKey, type, title, render, ...props }) => (
          <div key={columnKey ?? type} {...props}>
            {type === 'numero'
              ? '#'
              : type === 'extend'
                ? renderExtendAll()
                : type === 'select'
                  ? renderSelectAll()
                  : title}
          </div>
        ))}
      </StyledHead>

      {loading ? (
        <Stack sx={{ gap: '8px', mt: '8px', gridColumn: 'span 100' }}>
          <Skeleton height="80px" />
          <Skeleton height="80px" />
        </Stack>
      ) : !data?.length ? (
        <Feedback empty style={{ gridColumn: 'span 100', height: '80px' }} />
      ) : (
        data.map((item: any, i) => (
          <Fragment key={item[rowKey]}>
            <StyledRow>
              {columns.map(({ columnKey, type, title, render, ...props }) => (
                <div key={columnKey ?? type} {...props}>
                  {type === 'numero'
                    ? i + 1
                    : type === 'extend'
                      ? renderExtendOne(item)
                      : type === 'select'
                        ? renderSelectOne(item)
                        : render?.(item)}
                </div>
              ))}
            </StyledRow>

            <StyledFullRow>
              <Collapse in={getIsExtended(item)}>
                <div>
                  <div>
                    <SvgBox src="/icons/corner-down-right.svg" />
                  </div>
                  {rowExtraContent?.(item)}
                </div>
              </Collapse>
            </StyledFullRow>
          </Fragment>
        ))
      )}
    </StyledTable>
  )
}

// types
export type TableColumn<T = any> = Omit<React.ComponentProps<'div'>, 'title'> &
  (
    | {
        type: 'numero' | 'extend' | 'select'
        columnKey?: never
        title?: never
        render?: never
      }
    | {
        type?: 'data'
        columnKey: string
        title: string
        render: (item: T) => React.ReactNode
      }
  )

export interface TableRowExtraContent<T = any> {
  (item: T): React.ReactNode
}

interface TableProps<T = any> {
  data: T[]
  columns: TableColumn<T>[]
  rowExtraContent?: TableRowExtraContent<T>
  gridTemplateColumns: string
  rowKey?: string
  loading?: boolean
}

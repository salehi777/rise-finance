import { Box, Grid, type GridProps } from '@mui/material'
import { StyledIndicator, StyledSkeleton, StyledTab } from './styles'
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router'
import SvgBox from '@/components/ui/svg-box'

interface TabGroupProps extends GridProps {
  tabValue: string
  setTabValue: (v: string) => void
  list: { label: React.ReactNode; value: string; icon?: string }[]
  loading?: boolean
  height?: string | number
  hasTabParam?: boolean
}

export default function TabGroup({
  tabValue,
  setTabValue,
  list,
  loading = false,
  height = '38px',
  hasTabParam = true,
  ...props
}: TabGroupProps) {
  const selectedRef = useRef<HTMLDivElement>(null)
  const [indicatorStyles, setIndicatorStyles] = useState({})

  useEffect(() => {
    if (selectedRef.current) {
      setIndicatorStyles({
        left: selectedRef.current.offsetLeft,
        top: selectedRef.current.offsetTop,
        width: selectedRef.current.offsetWidth,
      })
    }
  }, [tabValue])

  const [searchParams, setSearchParams] = useSearchParams()
  const setTabParam = (value: string) => {
    const next = new URLSearchParams(searchParams)
    next.set('tab', value)
    setSearchParams(next, { replace: true })
  }

  useEffect(() => {
    if (!hasTabParam) return
    const tab = searchParams.get('tab')
    if (tab && !loading) setTabValue(tab)
  }, [searchParams, loading])

  return (
    <Box
      sx={(theme) =>
        props.wrap === 'nowrap' ? { ...theme.mixins.scrollbar } : {}
      }
    >
      <Grid
        container
        spacing={1.5}
        height={props.wrap === 'nowrap' ? height : undefined}
        mb={props.wrap === 'nowrap' ? '6px' : undefined}
        position="relative"
        {...props}
      >
        {loading ? (
          [1, 2].map((i) => (
            <Grid key={i}>
              <StyledSkeleton style={{ height }} />
            </Grid>
          ))
        ) : (
          <>
            {list.map(({ label, value, icon }) => (
              <Grid key={value} sx={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
                <StyledTab
                  onClick={() => {
                    if (hasTabParam) setTabParam(value)
                    else setTabValue(value)
                  }}
                  data-tab-selected={tabValue === value}
                  ref={tabValue === value ? selectedRef : undefined}
                  style={{ height }}
                >
                  {icon && <SvgBox src={icon} />}
                  <span>{label}</span>
                </StyledTab>
              </Grid>
            ))}
            <StyledIndicator style={{ height, ...indicatorStyles }} />
          </>
        )}
      </Grid>
    </Box>
  )
}

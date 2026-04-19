import TabGroup from '@/components/ui/tab-group'
import { Card, Container, Stack } from '@mui/material'
import { useState } from 'react'
import GroupSample from './group-sample'
import FormSample from './form-sample'
import LoadingSample from './loading-sample'
import ProgressSample from './progress-sample'
import CarouselSample from './carousel-sample'
import StoreSample from './store-sample'
import TableSample from './table-sample'
import GridSample from './grid-sample'
import FetchSample from './fetch-sample'

export default function TestPage() {
  const [tabValue, setTabValue] = useState('Group')

  return (
    <Container maxWidth="xl">
      <Card>
        <Stack gap={6}>
          <TabGroup
            tabValue={tabValue}
            setTabValue={setTabValue}
            list={[
              { value: 'Group', label: 'Group' },
              { value: 'Form', label: 'Form' },
              { value: 'Loading', label: 'Loading' },
              { value: 'Progress', label: 'Progress' },
              { value: 'Carousel', label: 'Carousel' },
              { value: 'Store', label: 'Store' },
              { value: 'Table', label: 'Table' },
              { value: 'Fetch', label: 'Fetch' },
              { value: 'Grid', label: 'Grid' },
            ]}
          />

          {tabValue === 'Group' ? (
            <GroupSample />
          ) : tabValue === 'Form' ? (
            <FormSample />
          ) : tabValue === 'Loading' ? (
            <LoadingSample />
          ) : tabValue === 'Progress' ? (
            <ProgressSample />
          ) : tabValue === 'Carousel' ? (
            <CarouselSample />
          ) : tabValue === 'Store' ? (
            <StoreSample />
          ) : tabValue === 'Table' ? (
            <TableSample />
          ) : tabValue === 'Fetch' ? (
            <FetchSample />
          ) : tabValue === 'Grid' ? (
            <GridSample />
          ) : null}
        </Stack>
      </Card>
    </Container>
  )
}

import Switch from '@/components/form/switch'
import Image from '@/components/ui/image'
import DotsLoading1 from '@/components/ui/loading/dots-loading-1'
import DotsLoading2 from '@/components/ui/loading/dots-loading-2'
import DotsLoading3 from '@/components/ui/loading/dots-loading-3'
import DotsLoading4 from '@/components/ui/loading/dots-loading-4'
import DotsLoading5 from '@/components/ui/loading/dots-loading-5'
import WrapperLoading from '@/components/ui/loading/wrapper-loading'
import {
  CircularProgress,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material'
import { useState } from 'react'

const count = 8

export default function LoadingSample() {
  const [loading, setLoading] = useState(true)

  return (
    <Stack gap={2}>
      <Switch
        label="Loading"
        onChange={() => setLoading(!loading)}
        defaultChecked
      />

      <Grid container spacing={1}>
        {Array.from({ length: count }, (_, i) => (
          <Grid
            key={i}
            size={{ xs: 12, md: 6, lg: 4 }}
            sx={{
              minHeight: '180px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '>[role]': { background: '#e5e7eb' },
            }}
          >
            {i % count === 0 ? (
              loading ? (
                <Stack gap={2} p={1} width="100%">
                  <Stack direction="row" gap={4} alignItems="center">
                    <Skeleton style={{ flex: 1, height: 40 }} />
                    <Skeleton
                      variant="circular"
                      style={{ width: 70, height: 70 }}
                    />
                  </Stack>
                  <Skeleton style={{ height: 70 }} />
                </Stack>
              ) : (
                <Sample title="Skeleton" />
              )
            ) : i % count === 1 ? (
              <WrapperLoading
                loading={loading}
                style={{ borderRadius: 4 }}
                customLoading={<CircularProgress />}
              >
                <Sample title="WrapperLoading" />
              </WrapperLoading>
            ) : i % count === 2 ? (
              loading ? (
                <DotsLoading1 />
              ) : (
                <Sample title="DotsLoading 1" />
              )
            ) : i % count === 3 ? (
              loading ? (
                <DotsLoading2 ease="linear" />
              ) : (
                <Sample title="DotsLoading 2" />
              )
            ) : i % count === 4 ? (
              loading ? (
                <DotsLoading2 />
              ) : (
                <Sample title="DotsLoading 2" />
              )
            ) : i % count === 5 ? (
              loading ? (
                <DotsLoading3 />
              ) : (
                <Sample title="DotsLoading 3" />
              )
            ) : i % count === 6 ? (
              loading ? (
                <DotsLoading4 />
              ) : (
                <Sample title="DotsLoading 4" />
              )
            ) : i % count === 7 ? (
              loading ? (
                <DotsLoading5 />
              ) : (
                <Sample title="DotsLoading 5" />
              )
            ) : null}
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

function Sample({ title }: any) {
  return (
    <Stack gap={2} p={1}>
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h4">{title}</Typography>
        <Image
          src="/images/placeholder_user.png"
          style={{ width: 70, height: 70, borderRadius: 70 }}
        />
      </Stack>
      <Typography>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Typography>
    </Stack>
  )
}

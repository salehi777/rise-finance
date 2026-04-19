import Feedback from '@/components/ui/feedback'
import Image from '@/components/ui/image'
import DotsLoading1 from '@/components/ui/loading/dots-loading-1'
import alova from '@/lib/alova'
import { Grid, Stack, Typography } from '@mui/material'
import { useRequest } from 'alova/client'

export default function FetchSample() {
  const { loading, data, error } = useRequest<any, any>(() =>
    alova.Get('sample/fetch?delay=1000'),
  )

  return (
    <div>
      {loading ? (
        <DotsLoading1 />
      ) : error ? (
        <Feedback error />
      ) : !data?.length ? (
        <Feedback empty />
      ) : (
        <Grid container spacing={2}>
          {data.map((item: any) => (
            <Grid key={item.id} size={{ xs: 12, md: 6 }}>
              <Stack direction="row" alignItems="center" gap={1}>
                <Typography>{item.description}</Typography>
                <Image
                  src={`${import.meta.env.VITE_BACKEND_URL}/${item.avatar}?delay=200`}
                  style={{ minWidth: 100, height: 100 }}
                />
              </Stack>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  )
}

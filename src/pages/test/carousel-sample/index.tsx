import Carousel from '@/components/ui/carousel'
import Image from '@/components/ui/image'
import { Stack, Typography } from '@mui/material'

export default function CarouselSample() {
  return (
    <Stack gap={2}>
      <Carousel
        perViews={[
          { breakpoint: 'xs', perView: 1 },
          { breakpoint: 'sm', perView: 2 },
          { breakpoint: 'md', perView: 3 },
          { breakpoint: 'xl', perView: 4 },
        ]}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <Sample key={i} />
        ))}
      </Carousel>
    </Stack>
  )
}

function Sample() {
  return (
    <Stack gap={2} p={1}>
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h4">Coruma Finance</Typography>
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

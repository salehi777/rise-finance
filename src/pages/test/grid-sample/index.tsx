import Switch from '@/components/form/switch'
import GridLines from '@/components/ui/grid-lines'
import { Box, Slider, Stack } from '@mui/material'
import { useState } from 'react'

export default function GridSample() {
  const [around, setAround] = useState(true)
  const [width, setWidth] = useState(300)
  const [height, setHeight] = useState(300)
  const [bWidth, setBWidth] = useState(0)
  const [bHeight, setBHeight] = useState(0)

  return (
    <Stack gap={5}>
      <Stack gap={3} px={3}>
        <Switch
          label="Around"
          onChange={(_, v) => setAround(v)}
          defaultChecked
        />
        <Slider
          value={width}
          onChange={(_, v) => setWidth(v)}
          valueLabelFormat={(v) => `width:${v}`}
          max={500}
          step={10}
        />
        <Slider
          value={height}
          onChange={(_, v) => setHeight(v)}
          valueLabelFormat={(v) => `height:${v}`}
          max={500}
          step={10}
        />
        <Slider
          value={bWidth}
          onChange={(_, v) => setBWidth(v)}
          valueLabelFormat={(v) => `bWidth:${v}`}
          step={5}
        />
        <Slider
          value={bHeight}
          onChange={(_, v) => setBHeight(v)}
          valueLabelFormat={(v) => `bHeight:${v}`}
          step={5}
        />
      </Stack>

      <Stack alignItems="center">
        <Box sx={{ position: 'relative', width, height }}>
          <GridLines
            around={around}
            box={[width, height]}
            block={[bWidth, bHeight]}
          />
        </Box>
      </Stack>
    </Stack>
  )
}

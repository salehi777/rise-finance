import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import CircleProgress from '@/components/ui/progress/circle-progress'
import WaveProgress from '@/components/ui/progress/wave-progress'
import BarProgress from '@/components/ui/progress/bar-progress'
import WaveCircleProgress from '@/components/ui/progress/wave-circle-progress'
import Switch from '@/components/form/switch'
import Input from '@/components/form/input'

export default function ProgressSample() {
  const [determinate, setDeterminate] = useState(true)
  const [value, setValue] = useState(50)
  const [valueText, setValueText] = useState<any>('center')
  const [text, setText] = useState('')

  return (
    <Stack gap={5}>
      <Stack direction="row" justifyContent="space-around">
        <CircleProgress
          determinate={determinate}
          value={determinate ? value : undefined}
          valueText={valueText}
          text={text}
        />
        <WaveProgress
          determinate={determinate}
          value={determinate ? value : undefined}
          valueText={valueText}
          text={text}
        />
        <WaveCircleProgress
          determinate={determinate}
          value={determinate ? value : undefined}
          valueText={valueText}
          text={text}
        />
      </Stack>

      <Box sx={{ height: '100px', position: 'relative' }}>
        <BarProgress determinate={determinate} value={value} />
      </Box>

      <Stack gap={3}>
        <Switch
          label="determinate"
          checked={determinate}
          onChange={(_, v) => setDeterminate(v)}
        />
        {determinate && (
          <>
            <Slider
              value={value}
              onChange={(_, v) => setValue(v)}
              valueLabelFormat={(v) => `value:${v}`}
            />
            <Stack direction="row" gap={2} alignItems="center">
              <Typography>valueText:</Typography>
              <RadioGroup
                value={valueText}
                onChange={(_, v) => setValueText(v)}
                row
              >
                <FormControlLabel
                  label="Center"
                  value="center"
                  control={<Radio />}
                />
                <FormControlLabel
                  label="Around"
                  value="around"
                  control={<Radio />}
                />
                <FormControlLabel
                  label="None"
                  value="none"
                  control={<Radio />}
                />
              </RadioGroup>
            </Stack>
          </>
        )}
        <Input value={text} onChange={(e) => setText(e.target.value)} />
      </Stack>
    </Stack>
  )
}

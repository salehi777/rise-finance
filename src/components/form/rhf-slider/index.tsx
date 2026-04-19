import {
  useController,
  useFormContext,
  type RegisterOptions,
} from 'react-hook-form'
import { Slider, type SliderProps } from '@mui/material'

interface RHFSliderProps extends Omit<SliderProps, 'onChange'> {
  name: string
  rules?: RegisterOptions
  defaultValue?: number | number[]
  onChange?: (value: number | number[]) => void
}

export default function RHFSlider({
  name,
  rules,
  defaultValue = 0,
  onChange,
  ...props
}: RHFSliderProps) {
  const { control } = useFormContext()
  const {
    field: { ref, onChange: fieldOnChange, ...field },
  } = useController({ name, control, rules, defaultValue })

  return (
    <Slider
      slotProps={{ input: { ref } }}
      name={name}
      value={field.value as number | number[]}
      onChange={(_, value) => {
        fieldOnChange(value)
        onChange?.(value)
      }}
      {...props}
    />
  )
}

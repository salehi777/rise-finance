import {
  useController,
  useFormContext,
  type RegisterOptions,
} from 'react-hook-form'
import { PatternFormat, type PatternFormatProps } from 'react-number-format'
import Input, { type InputProps } from '../input'

type RHFPatternFormatProps = PatternFormatProps<InputProps> & {
  name: string
  rules?: RegisterOptions
}

export default function RHFPatternFormat({
  name,
  rules,
  defaultValue = '',
  onValueChange,
  ...props
}: RHFPatternFormatProps) {
  const { control } = useFormContext()
  const {
    field: { ref: fieldRef, onChange: fieldOnChange, ...field },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue })

  return (
    <PatternFormat
      inputRef={fieldRef}
      customInput={Input}
      onValueChange={(values, sourceInfo) => {
        fieldOnChange(values.value)
        onValueChange?.(values, sourceInfo)
      }}
      error={!!error}
      helperText={error ? error.message || 'This field is required' : undefined}
      {...field}
      {...props}
    />
  )
}

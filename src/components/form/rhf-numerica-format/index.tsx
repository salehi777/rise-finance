import {
  useController,
  useFormContext,
  type RegisterOptions,
} from 'react-hook-form'
import NumericaFormat, { type NumericaFormatProps } from '../numerica-format'

type RHFNumericaFormatProps = NumericaFormatProps & {
  name: string
  rules?: RegisterOptions
}

export default function RHFNumericaFormat({
  name,
  rules,
  defaultValue = '',
  onValueChange,
  ...props
}: RHFNumericaFormatProps) {
  const { control } = useFormContext()
  const {
    field: { ref: fieldRef, onChange: fieldOnChange, ...field },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue })

  return (
    <NumericaFormat
      inputRef={fieldRef}
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

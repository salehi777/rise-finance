import {
  useController,
  useFormContext,
  type RegisterOptions,
} from 'react-hook-form'
import NumericaPersianFormat, {
  type NumericaPersianFormatProps,
} from '../numerica-persian-format'

type RHFNumericaPersianFormatProps = NumericaPersianFormatProps & {
  name: string
  rules?: RegisterOptions
}

export default function RHFNumericaPersianFormat({
  name,
  rules,
  defaultValue = '',
  onValueChange,
  ...props
}: RHFNumericaPersianFormatProps) {
  const { control } = useFormContext()
  const {
    field: { ref: fieldRef, onChange: fieldOnChange, ...field },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue })

  return (
    <NumericaPersianFormat
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

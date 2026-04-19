import {
  useController,
  useFormContext,
  type RegisterOptions,
} from 'react-hook-form'
import DateField, { type DateFieldProps } from '../datefield'

interface RHFDateFieldProps extends DateFieldProps {
  name: string
  rules?: RegisterOptions
}

export default function RHFDateField({
  name,
  rules,
  defaultValue = null,
  onChange,
  textFieldProps,
  ...props
}: RHFDateFieldProps) {
  const { control } = useFormContext()
  const {
    field: { ref, onChange: fieldOnChange, ...field },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue })

  return (
    <DateField
      onChange={(newValue) => {
        fieldOnChange(newValue)
        onChange?.(newValue)
      }}
      {...field}
      textFieldProps={{
        inputRef: ref,
        error: !!error,
        helperText: error
          ? error.message || 'This field is required'
          : undefined,
        ...textFieldProps,
      }}
      {...props}
    />
  )
}

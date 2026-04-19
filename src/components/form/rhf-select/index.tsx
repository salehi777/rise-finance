import {
  useController,
  useFormContext,
  type RegisterOptions,
} from 'react-hook-form'
import Select, { type SelectProps } from '../select'

export interface RHFSelectProps extends SelectProps {
  name: string
  rules?: RegisterOptions
}

export default function RHFSelect({
  name,
  rules,
  defaultValue,
  onChange,
  textFieldProps,
  ...props
}: RHFSelectProps) {
  const { control } = useFormContext()
  const {
    field: { ref, onChange: fieldOnChange, ...field },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: defaultValue || (props.multiple ? [] : null),
  })

  return (
    <Select
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

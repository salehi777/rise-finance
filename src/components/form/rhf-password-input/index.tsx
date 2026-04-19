import {
  useController,
  useFormContext,
  type RegisterOptions,
} from 'react-hook-form'
import PasswordInput, { type PasswordInputProps } from '../password-input'

type RHFPasswordInputProps = PasswordInputProps & {
  name: string
  rules?: RegisterOptions
}

export default function RHFPasswordInput({
  name,
  rules,
  defaultValue = '',
  onChange,
  ...props
}: RHFPasswordInputProps) {
  const { control } = useFormContext()
  const {
    field: { ref: fieldRef, onChange: fieldOnChange, ...field },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue })

  return (
    <PasswordInput
      inputRef={fieldRef}
      onChange={(e) => {
        fieldOnChange(e)
        onChange?.(e)
      }}
      error={!!error}
      helperText={error ? error.message || 'This field is required' : undefined}
      {...field}
      {...props}
    />
  )
}

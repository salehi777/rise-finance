import {
  useController,
  useFormContext,
  type RegisterOptions,
} from 'react-hook-form'
import Checkbox, { type CheckboxProps } from '../checkbox'

interface RHFCheckboxProps extends Omit<
  CheckboxProps,
  'defaultValue' | 'onChange'
> {
  name: string
  rules?: RegisterOptions
  defaultValue?: boolean
  onChange?: (checked: boolean) => void
}

export default function RHFCheckbox({
  name,
  rules,
  defaultValue = false,
  onChange,
  ...props
}: RHFCheckboxProps) {
  const { control } = useFormContext()
  const {
    field: { ref, onChange: fieldOnChange, ...field },
  } = useController({ name, control, rules, defaultValue })

  return (
    <Checkbox
      inputRef={ref}
      name={name}
      checked={field.value}
      onChange={(_, checked) => {
        fieldOnChange(checked)
        onChange?.(checked)
      }}
      {...props}
    />
  )
}

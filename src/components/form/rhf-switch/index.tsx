import {
  useController,
  useFormContext,
  type RegisterOptions,
} from 'react-hook-form'
import Switch, { type SwitchProps } from '../switch'

interface RHFSwitchProps extends Omit<
  SwitchProps,
  'defaultValue' | 'onChange'
> {
  name: string
  rules?: RegisterOptions
  defaultValue?: boolean
  onChange?: (checked: boolean) => void
}

export default function RHFSwitch({
  name,
  rules,
  defaultValue = false,
  onChange,
  ...props
}: RHFSwitchProps) {
  const { control } = useFormContext()
  const {
    field: { ref, onChange: fieldOnChange, ...field },
  } = useController({ name, control, rules, defaultValue })

  return (
    <Switch
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

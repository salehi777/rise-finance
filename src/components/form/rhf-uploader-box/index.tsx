import {
  useController,
  useFormContext,
  type RegisterOptions,
} from 'react-hook-form'
import { FormHelperText } from '@mui/material'
import UploaderBox, {
  type UploaderBoxProps,
} from '@/components/ui/uploader/uploader-box'

type RHFUploaderBoxProps = Omit<
  UploaderBoxProps,
  'defaultValue' | 'onChange'
> & {
  name: string
  rules?: RegisterOptions
  defaultValue?: string | null
  onChange?: (data: any) => void
}

export default function RHFUploaderBox({
  name,
  rules,
  defaultValue = null,
  onChange,
  ...props
}: RHFUploaderBoxProps) {
  const { control } = useFormContext()
  const {
    field: { onChange: fieldOnChange },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue })

  return (
    <>
      <UploaderBox
        onChange={(data) => {
          fieldOnChange(data)
          onChange?.(data)
        }}
        {...props}
      />
      {error && (
        <FormHelperText error>
          {error.message || 'This field is required'}
        </FormHelperText>
      )}
    </>
  )
}

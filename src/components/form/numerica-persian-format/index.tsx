import {
  NumberFormatBase,
  useNumericFormat,
  type NumericFormatProps,
} from 'react-number-format'
import Input, { type InputProps } from '../input'
import { en2pr, pr2en } from '@/lib/helpers'
import { useCallback } from 'react'

export type NumericaPersianFormatProps = NumericFormatProps<InputProps> & {
  numericProps?: NumericFormatProps
}

export default function NumericaPersianFormat({
  numericProps,
  onValueChange,
  slotProps,
  ...props
}: NumericaPersianFormatProps) {
  const { format, removeFormatting } = useNumericFormat(numericProps ?? {})
  const _format = useCallback((v: string) => en2pr(format!(v)), [])
  const _removeFormatting = useCallback(
    (v: string) => removeFormatting!(pr2en(v)),
    [],
  )

  return (
    <NumberFormatBase
      format={_format}
      removeFormatting={_removeFormatting}
      customInput={Input}
      onValueChange={({ value, ...rest }, sourceInfo) => {
        onValueChange?.(
          { ...rest, value: value.replace(/^0+(?!$)/, '') },
          sourceInfo,
        )
      }}
      slotProps={{
        htmlInput: { inputMode: 'numeric', pattern: '[0-9]*' },
        input: {}, // keep
        ...slotProps,
      }}
      {...props}
    />
  )
}

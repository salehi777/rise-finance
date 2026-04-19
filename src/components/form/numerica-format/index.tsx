import { NumericFormat, type NumericFormatProps } from 'react-number-format'
import Input, { type InputProps } from '../input'

export type NumericaFormatProps = NumericFormatProps<InputProps> & {}

export default function NumericaFormat({
  onValueChange,
  slotProps,
  ...props
}: NumericaFormatProps) {
  return (
    <NumericFormat
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

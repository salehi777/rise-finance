import { useState } from 'react'
import { StyledDateField } from './styles'
import Input, { type InputProps } from '../input'
import { type DatePickerProps } from '@mui/x-date-pickers'
import { IconButton } from '@mui/material'
import SvgBox from '@/components/ui/svg-box'
import type { PickerValue } from '@mui/x-date-pickers/internals'

export interface DateFieldProps extends DatePickerProps {
  textFieldProps?: InputProps
  onChange?: (v: PickerValue) => void
}

export default function DateField({
  textFieldProps,
  ...props
}: DateFieldProps) {
  const [open, setOpen] = useState(false)

  return (
    <StyledDateField
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      format="yyyy-MM-dd"
      enableAccessibleFieldDOMStructure={false}
      slots={{ textField: Input }}
      slotProps={{
        textField: {
          readOnly: true,
          onClick: () => setOpen(!open),
          slotProps: {
            input: {
              endAdornment: (
                <>
                  {props.value && (
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation()
                        props?.onChange?.(null)
                      }}
                    >
                      <SvgBox src={`/icons/close.svg`} />
                    </IconButton>
                  )}
                  <IconButton>
                    <SvgBox src={`/icons/calendar.svg`} />
                  </IconButton>
                </>
              ),
            },
          },
          ...textFieldProps,
        },
      }}
      {...props}
    />
  )
}

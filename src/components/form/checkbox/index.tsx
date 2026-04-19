import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
  type CheckboxProps as MuiCheckboxProps,
} from '@mui/material'

export interface CheckboxProps extends MuiCheckboxProps {
  label?: React.ReactNode
}

export default function Checkbox({ label, ...props }: CheckboxProps) {
  return <FormControlLabel label={label} control={<MuiCheckbox {...props} />} />
}

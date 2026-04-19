import {
  FormControlLabel,
  Switch as MuiSwitch,
  type SwitchProps as MuiSwitchProps,
} from '@mui/material'

export interface SwitchProps extends MuiSwitchProps {
  label?: React.ReactNode
}

export default function Switch({ label, ...props }: SwitchProps) {
  return <FormControlLabel label={label} control={<MuiSwitch {...props} />} />
}

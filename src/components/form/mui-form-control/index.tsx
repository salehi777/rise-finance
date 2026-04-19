import { InputLabel, type FormControlProps } from '@mui/material'
import { StyledFormControl } from './styles'

interface MuiFormControlProps extends FormControlProps {
  label?: string
  name?: string
}

export default function MuiFormControl({
  label,
  name,
  ...props
}: MuiFormControlProps) {
  return (
    <StyledFormControl {...props}>
      <InputLabel shrink htmlFor={name}>
        {label}
      </InputLabel>
      <div>
        <input id={name} name={name} />
        <fieldset>
          <legend>{label}</legend>
        </fieldset>
      </div>
    </StyledFormControl>
  )
}

import {
  type AutocompleteProps,
  CircularProgress,
  InputAdornment,
} from '@mui/material'
import Input, { type InputProps } from '../input'
import { StyledAutocomplete, sxPaper } from './styles'
import SvgBox from '@/components/ui/svg-box'

export interface SelectProps extends Omit<
  AutocompleteProps<any, any, any, any, any>,
  'renderInput'
> {
  textFieldProps?: InputProps
  enableSearch?: boolean
  onChange?: (value: any) => void
}

export default function Select({
  loading,
  textFieldProps,
  enableSearch = false,
  onChange,
  ...props
}: SelectProps) {
  return (
    <StyledAutocomplete
      loading={props.freeSolo ? false : loading}
      popupIcon={<SvgBox src="/icons/arrow-down.svg" />}
      clearIcon={<SvgBox src="/icons/close.svg" />}
      onChange={(_, newValue) => onChange?.(newValue)}
      slotProps={{ paper: { sx: sxPaper } }}
      disableCloseOnSelect={!!props.multiple}
      isOptionEqualToValue={(option: any, value: any) =>
        option?.value === value?.value
      }
      renderInput={(params) => (
        <Input
          {...params}
          InputLabelProps={{ ...params.InputLabelProps, shrink: true }}
          inputProps={{
            ...params.inputProps,
            readOnly: !enableSearch,
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                {loading ? <CircularProgress size={20} /> : null}
                {(params.InputProps.endAdornment as any)?.props?.children}
              </InputAdornment>
            ),
          }}
          {...textFieldProps}
        />
      )}
      {...props}
    />
  )
}

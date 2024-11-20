import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import {
  useController,
  useFormContext,
  RegisterOptions,
} from "react-hook-form";

type TextFieldProps = MuiTextFieldProps & {
  name: string;
  rules?: RegisterOptions;
};

export default function TextField({ name, rules, ...props }: TextFieldProps) {
  const { control } = useFormContext();
  const {
    field: { ref, ...field },
    fieldState: { error },
  } = useController({ control, name, rules, defaultValue: "" });

  return (
    <MuiTextField
      {...field}
      inputRef={ref}
      error={!!error}
      helperText={error ? error.message || "This field is required" : null}
      {...props}
    />
  );
}

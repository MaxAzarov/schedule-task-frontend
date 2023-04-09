import { StandardTextFieldProps, TextField } from "@mui/material";
import get from "lodash.get";
import { FormikValues, useFormik, useFormikContext } from "formik";

interface FormikTextFieldProps<T extends FormikValues>
  extends StandardTextFieldProps {
  name: string;
  label: string;
  form:
    | ReturnType<typeof useFormik<T>>
    | ReturnType<typeof useFormikContext<T>>;
}

export default function FormikTextField<T extends FormikValues = FormikValues>({
  form,
  name,
  label,
  ...props
}: FormikTextFieldProps<T>) {
  const value = get(form.values, name);

  return (
    <TextField
      autoComplete="given-name"
      name={name}
      required
      fullWidth
      id={name}
      label={label}
      autoFocus
      onChange={form.handleChange}
      value={value}
      {...props}
    />
  );
}

import React from "react";
import TextField from "@mui/material/TextField";

const InputField = ({
  id,
  label,
  type,
  autoComplete,
  name,
  error,
  helperText,
  onChange,
  ...otherProps
}) => {
  return (
    <TextField
      required
      id={id}
      name={name} // This is the new section that will associate the input value with the state
      label={label}
      type={type}
      autoComplete={autoComplete}
      margin="normal"
      variant="outlined"
      error={error} // Displays style changes for validation errors
      helperText={helperText} // The authentication error message is displayed
      onChange={onChange} // Handle input changes
      fullWidth
      {...otherProps} 
    />
  );
};

export default InputField;

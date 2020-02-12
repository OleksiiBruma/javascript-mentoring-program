import React from "react";
import PropTypes from "prop-types"
import { TextField } from "@material-ui/core";

const CustomInput = ({
  inputData: { name, error, value, errorText, type, multiline, rows, variant },
  handleBlur,
  handleChange
}) => (
  <TextField
    key={name}
    error={error}
    label={name}
    name={name}
    type={type}
    fullWidth
    multiline={multiline}
    rows={rows}
    value={value}
    onChange={handleChange}
    onBlur={handleBlur}
    variant={variant}
    helperText={error && errorText}
    margin="normal"
  />
);

CustomInput.propTypes = {
  inputData: PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
      error: PropTypes.bool.isRequired,
      errorText: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Date)
      ])
    }
  ),
  handleChange : PropTypes.func.isRequired,
  handleBlur : PropTypes.func.isRequired,
}



export default CustomInput;

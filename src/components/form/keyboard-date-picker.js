import React from "react";
import { asField } from "informed";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { FormHelperText } from "@material-ui/core";

const CustomDateInput = asField(({ fieldState, fieldApi, ...props }) => {
  const {
    required,
    onChange,
    onBlur,
    containerClassName,
    onFocus,
    label,
    minDate,
    className,
    maxLength,
    format,
    hideLabel,
    ...rest
  } = props;

  const { error, value = null, touched } = fieldState;
  const { setValue } = fieldApi;

  return (
    <div className={containerClassName}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div>
          <KeyboardDatePicker
            className={`MuiFormControl-marginNormal ${className}`}
            id="date-picker-dialog"
            {...rest}
            format="DD/MM/YYYY"
            label={label}
            value={value}
            onChange={e => {
              if (onChange) {
                onChange(e && e.valueOf());
              }
              setValue(e && e.valueOf());
            }}
          />
          <FormHelperText>{error}</FormHelperText>
        </div>
      </MuiPickersUtilsProvider>
    </div>
  );
});

export default CustomDateInput;

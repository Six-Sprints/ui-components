import React from "react";
import { asField } from "informed";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { FormHelperText } from "@material-ui/core";

const CustomDatePicker = asField(({ fieldState, fieldApi, ...props }) => {
  const {
    required,
    onChange,
    onBlur,
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
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div>
        <DatePicker
          {...rest}
          format="DD/MM/YYYY"
          label={label}
          value={value}
          onChange={e => {
            setValue(e.valueOf());
          }}
        />
        {touched && error && <FormHelperText>{error}</FormHelperText>}
      </div>
    </MuiPickersUtilsProvider>
  );
});

export default CustomDatePicker;

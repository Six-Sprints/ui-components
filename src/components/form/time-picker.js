import React from "react";
import { asField } from "informed";
import { MuiPickersUtilsProvider, TimePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { FormHelperText } from "@material-ui/core";

const CustomTimePicker = asField(({ fieldState, fieldApi, ...props }) => {
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
      <>
        <TimePicker
          autoOk
          label={label}
          value={value}
          inputVariant="outlined"
          {...rest}
          onChange={e => {
            setValue(e.valueOf());
          }}
        />
        {touched && error && <FormHelperText>{error}</FormHelperText>}
      </>
    </MuiPickersUtilsProvider>
  );
});

export default CustomTimePicker;

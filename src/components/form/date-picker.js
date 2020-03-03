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
      <>
        <DatePicker
          {...rest}
          disableFuture
          inputVariant="outlined"
          openTo="year"
          format="DD/MM/YYYY"
          label={label}
          views={["year", "month", "date"]}
          value={value}
          onChange={e => {
            setValue(e.valueOf());
          }}
        />
        {touched && error && <FormHelperText>{error}</FormHelperText>}
      </>
    </MuiPickersUtilsProvider>
  );
});

export default CustomDatePicker;

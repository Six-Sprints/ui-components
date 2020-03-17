import React from "react";
import { asField } from "informed";
import { TextField } from "@material-ui/core";

const TextInput = asField(({ fieldState, fieldApi, ...props }) => {
  const {
    onChange,
    onBlur,
    onFocus,
    hideTick,
    type,
    initialValue,
    dontUpdate,
    className,
    containerClassName,
    forwardedRef,
    variant,
    format,
    label,
    ...rest
  } = props;
  const { error, value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  let ref = {};
  return (
    <div className={containerClassName}>
      <div style={{ position: "relative", width: "100%" }}>
        <TextField
          className={className}
          ref={refer => {
            ref = refer;
            if (forwardedRef) {
            }
          }}
          defaultValue={initialValue}
          variant={variant || "outlined"}
          label={label}
          helperText={error}
          value={value || ""}
          margin="normal"
          type={type}
          {...rest}
          onChange={e => {
            let val = e.target.value;
            if (format) {
              val = format(val);
            }
            if (onChange) {
              onChange(e, val);
            }
            if (!dontUpdate) {
              setValue(val);
            }
          }}
          onBlur={e => {
            setTouched();
            if (onBlur) {
              onBlur(e);
            }
          }}
          onFocus={e => {
            setTouched(false);
            if (onFocus) {
              onFocus(e);
            }
          }}
        />
      </div>
    </div>
  );
});

export default TextInput;

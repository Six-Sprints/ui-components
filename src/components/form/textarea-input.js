import React from "react";
import { asField } from "informed";
import { TextareaAutosize } from "@material-ui/core";

const TextAreaInput = asField(({ fieldState, fieldApi, ...props }) => {
  const {
    required,
    onChange,
    onBlur,
    onFocus,
    forwardedRef,
    initialValue,
    dontUpdate,
    styleClass,
    height,
    format,
    ...rest
  } = props;
  const { error, value, touched } = fieldState;
  const { setValue, setTouched } = fieldApi;
  let ref = {};

  return (
    <div style={{ width: "100%" }}>
      <TextareaAutosize
        rowsMax={4}
        ref={refer => {
          ref = refer;
          if (forwardedRef) {
          }
        }}
        defaultValue={initialValue}
        value={value || ""}
        margin="normal"
        type="text"
        style={{
          width: "100%",
          border: "none",
          overflow: "hidden",
          outline: "none"
        }}
        className={styleClass}
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
      {touched && error && (
        <span
          onClick={() => {
            ref.focus();
          }}
          className="no-fill-warning"
        >
          {error}
        </span>
      )}
    </div>
  );
});

export default TextAreaInput;

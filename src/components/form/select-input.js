import React from "react";
import { asField } from "informed";
import {
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  makeStyles,
  FormControl
} from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 205
  },
  selectEmpty: {
    marginTop: theme.spacing(1)
  }
}));

const SelectInput = asField(({ fieldState, fieldApi, ...props }) => {
  const {
    required,
    onChange,
    options,
    inlineImgStyle,
    inlineErrorStyle,
    initialValue,
    dontUpdate,
    className,
    label,
    placeholder,
    containerClassName,
    forwardedRef,
    labelKey,
    valueKey,
    ...rest
  } = props;
  const { error, value = "", touched } = fieldState;
  const { setValue } = fieldApi;
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  return (
    <div className={containerClassName}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel
          style={{ marginTop: "8%" }}
          ref={inputLabel}
          id="select-label"
        >
          {label}
        </InputLabel>
        <Select
          labelId="select-label"
          className={`MuiFormControl-marginNormal ${className}`}
          labelWidth={labelWidth}
          value={value}
          {...rest}
          onChange={e => {
            let val = e.target.value;
            setValue(val);
            if (onChange) {
              onChange(e, val);
            }
          }}
        >
          {(options || []).map((op, idx) => {
            return (
              <MenuItem key={idx} value={op[valueKey] || op}>
                {op[labelKey] || op}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText variant="standard">{error}</FormHelperText>
      </FormControl>
    </div>
  );
});

export default SelectInput;

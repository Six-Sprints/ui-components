import React from "react";
import { Form } from "informed";
import TextInput from "../../components/form/text-input";
import Button from "@material-ui/core/Button";
import {
  isPasswordAndRequired,
  passwordMatchValidation
} from "../../utils/validations";
import { Grid, Box } from "@material-ui/core";

const RegisterForm = ({
  handleSubmit,
  getFormApi,
  btnFullWidth,
  btnText,
  inputVariant,
  direction,
  inputClassName,
  className,
  initialValues,
  children,
  ...rest
}) => {
  return (
    <Form
      getApi={getFormApi}
      onSubmit={handleSubmit}
      initialValues={initialValues}
    >
      <Grid container direction={direction || "column"} {...rest}>
        <TextInput
          containerClassName={className}
          className={inputClassName}
          variant={inputVariant}
          required
          field="name"
          type="text"
          label="Name"
          validateOnBlur
          validateOnChange
        />
        <TextInput
          containerClassName={className}
          className={inputClassName}
          required
          variant={inputVariant}
          field="mobileNumber"
          type="tel"
          label="Mobile Number"
          validateOnBlur
          validateOnChange
        />

        <TextInput
          required
          containerClassName={className}
          className={inputClassName}
          variant={inputVariant}
          field="password"
          type="password"
          validate={isPasswordAndRequired}
          label="Password"
          validateOnBlur
          validateOnChange
        />
        <TextInput
          required
          containerClassName={className}
          className={inputClassName}
          variant={inputVariant}
          field="confirmPassword"
          type="password"
          validate={passwordMatchValidation}
          label="Confirm Password"
          validateOnBlur
          validateOnChange
        />
        {children}
      </Grid>
      <Box my={2}>
        <Button
          className={inputClassName}
          fullWidth={btnFullWidth}
          type="submit"
          color="primary"
          variant="contained"
        >
          {btnText || "Register"}
        </Button>
      </Box>
    </Form>
  );
};

export default RegisterForm;

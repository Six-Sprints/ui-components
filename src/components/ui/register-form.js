import React from "react";
import { Form } from "informed";
import TextInput from "../../components/form/text-input";
import Button from "@material-ui/core/Button";
import {
  isPasswordAndRequired,
  passwordMatchValidation
} from "../../utils/validations";
import { Grid } from "@material-ui/core";

const RegisterForm = ({
  handleSubmit,
  getFormApi,
  btnFullWidth,
  btnText,
  inputVariant,
  direction,
  children,
  ...rest
}) => {
  return (
    <Form getApi={getFormApi} onSubmit={handleSubmit}>
      <Grid container direction={direction || "column"} {...rest}>
        <TextInput
          variant={inputVariant}
          required
          field="name"
          type="text"
          label="Name"
          validateOnBlur
          validateOnChange
        />
        <TextInput
          required
          variant={inputVariant}
          field="mobileNumber"
          type="tel"
          label="Mobile Number"
          validateOnBlur
          validateOnChange
        />
        <TextInput
          variant={inputVariant}
          required
          field="email"
          type="email"
          label="Email"
          validateOnBlur
          validateOnChange
        />
        <TextInput
          required
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

      <Button
        fullWidth={btnFullWidth}
        type="submit"
        color="primary"
        variant="contained"
      >
        {btnText || "Register"}
      </Button>
    </Form>
  );
};

export default RegisterForm;

import React from "react";
import { Form } from "informed";
import TextInput from "../../components/form/text-input";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  isPasswordAndRequired,
  passwordMatchValidation
} from "../../utils/validations";
import { LinearProgress, Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  }
}));

const RegisterForm = ({
  handleSubmit,
  getFormApi,
  loading,
  bgImageClass,
  registerClass,
  btnFullWidth,
  heading,
  btnText,
  inputVariant,
  children
}) => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={8} className={bgImageClass} />
      <Grid item xs={12} sm={8} md={4} component={Paper}>
        {loading && <LinearProgress />}
        <div className={registerClass}>
          <Typography component="h1" variant="h5">
            {heading}
          </Typography>

          <Form getApi={getFormApi} onSubmit={handleSubmit}>
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

            <Button
              fullWidth={btnFullWidth}
              type="submit"
              variant="contained"
              color="primary"
            >
              {btnText || "Register"}
            </Button>
          </Form>
        </div>
      </Grid>
    </Grid>
  );
};

export default RegisterForm;

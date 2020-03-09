import React from "react";
import { Form } from "informed";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { isPasswordAndRequired } from "../../utils/validations";
import { LinearProgress } from "@material-ui/core";
import TextInput from "../form/text-input";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  input: {
    marginTop: "2rem"
  },
  link: {
    textDecoration: "none"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  }
}));

const LoginForm = ({
  handleSubmit,
  getFormApi,
  loading,
  bgImageClass,
  loginClass,
  registerPath,
  registerText,
  btnText,
  inputVariant,
  link,
  email
}) => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={8} className={bgImageClass} />
      <Grid item xs={12} sm={8} md={4} component={Paper}>
        {loading && <LinearProgress />}
        <div className={classes.paper || loginClass}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>

          <Form getApi={getFormApi} onSubmit={handleSubmit}>
            {email ? (
              <TextInput
                variant={inputVariant}
                containerClassName={classes.input}
                required
                field="email"
                type="email"
                label="Email"
                validateOnBlur
                validateOnChange
              />
            ) : (
              <TextInput
                variant={inputVariant}
                containerClassName={classes.input}
                required
                field="mobileNumber"
                type="tel"
                label="Mobile Number"
                validateOnBlur
                validateOnChange
              />
            )}

            <TextInput
              variant={inputVariant}
              containerClassName={classes.input}
              required
              field="password"
              type="password"
              validate={isPasswordAndRequired}
              label="Password"
              validateOnBlur
              validateOnChange
            />

            <Button
              className={classes.input}
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
            >
              {btnText || "Login"}
            </Button>

            {registerPath && (
              <Typography component={link} to={registerPath}>
                <p className={classes.link}>
                  {registerText || "New user ? Register Now."}
                </p>
              </Typography>
            )}
          </Form>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginForm;

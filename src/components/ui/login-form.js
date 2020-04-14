import React from "react";
import { Form } from "informed";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { isPasswordAndRequired } from "../../utils/validations";
import { LinearProgress, Box } from "@material-ui/core";
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
  logo,
  logoClass,
  loading,
  bgImageClass,
  loginClass,
  registerPath,
  resetPasswordPath,
  registerText,
  btnText,
  inputVariant,
  linkClass,
  link,
  email
}) => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={7} md={8}>
        <Box height={1} pt={10}>
          <div className={bgImageClass}></div>
        </Box>
      </Grid>
      <Grid item xs={12} sm={5} md={4} component={Paper}>
        {loading && <LinearProgress />}
        <div className={classes.paper || loginClass}>
          {logo && (
            <Box>
              <img className={logoClass} alt="logo-svg" src={logo} />
            </Box>
          )}
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
              label="Password"
              validateOnBlur
              validateOnChange
            />

            <Box my={2} display="flex" justifyContent="flex-end">
              {resetPasswordPath && (
                <Typography
                  variant="body2"
                  className={linkClass || classes.link}
                  component={link}
                  to={resetPasswordPath}
                >
                  Forgot Password ?
                </Typography>
              )}
            </Box>

            <Box my={2}>
              <Button
                className={classes.input}
                fullWidth
                disabled={loading}
                type="submit"
                variant="contained"
                color="primary"
              >
                {btnText || "Login"}
              </Button>
            </Box>

            <Box my={2}>
              {registerPath && (
                <div>
                  <Typography variant="body2" component="span">
                    Don't have an account ?
                  </Typography>
                  <Typography
                    className={linkClass || classes.link}
                    component={link}
                    to={registerPath}
                    variant="body2"
                    component="span"
                  >
                    {" "}
                    Register{" "}
                  </Typography>
                  <Typography variant="body2" component="span">
                    Now
                  </Typography>
                </div>
              )}
            </Box>
          </Form>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginForm;

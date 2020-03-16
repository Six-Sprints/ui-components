import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { LinearProgress, CssBaseline, Paper } from "@material-ui/core";
import RegisterForm from "./register-form";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  link: {
    textDecoration: "none"
  }
}));

const RegisterScreen = ({
  handleSubmit,
  getFormApi,
  loading,
  bgImageClass,
  registerClass,
  btnFullWidth,
  heading,
  btnText,
  inputVariant,
  link,
  linkClass,
  loginPath,
  loginNowText,
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

          <RegisterForm
            handleSubmit={handleSubmit}
            getFormApi={getFormApi}
            btnFullWidth={btnFullWidth}
            btnText={btnText}
            inputVariant={inputVariant}
            children={children}
          />
          <Typography component={link} to={loginPath || "/login"}>
            <span className={linkClass || classes.link}>
              {loginNowText || "Already have an account ? Login Now"}
            </span>
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default RegisterScreen;
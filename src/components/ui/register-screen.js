import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { LinearProgress, CssBaseline, Paper, Box } from "@material-ui/core";
import RegisterForm from "./register-form";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  link: {
    textDecoration: "none",
    fontSize: 14
  }
}));

const RegisterScreen = ({
  handleSubmit,
  getFormApi,
  loading,
  bgImageClass,
  registerClass,
  logo,
  logoClass,
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
      <Grid item xs={false} sm={7} md={8}>
        <Box height={1} pt={10}>
          <div className={bgImageClass}></div>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={4} component={Paper}>
        {loading && <LinearProgress />}
        <div className={registerClass}>
          {logo && (
            <Box>
              <img className={logoClass} alt="logo-svg" src={logo} />
            </Box>
          )}
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
          <Typography
            className={linkClass || classes.link}
            component={link}
            to={loginPath || "/login"}
          >
            {loginNowText || "Already have an account ? Login Now"}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default RegisterScreen;

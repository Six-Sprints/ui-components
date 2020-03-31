import React from "react";
import { RegisterScreen, SelectInput, CustomDatePicker } from "ui-components";
import { makeStyles, Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  logo: {
    width: 100,
    height: 100,
    margin: theme.spacing(2)
  },
  image: {
    backgroundImage: `url(https://storage.googleapis.com/eclinic_assets/tenants/jyoti/banner.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    height: "80%"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    backgroundColor: "#f5f5f5",
    padding: "34px 55px",
    borderRadius: "20px"
  },
  input: {
    marginTop: "2rem"
  },
  link: {
    textDecoration: "none",
    fontSize: 14
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  }
}));

const App = () => {
  const classes = useStyles();
  const handleSubmit = val => {
    console.log(val);
  };

  return (
    <RegisterScreen
      btnFullWidth
      registerClass={classes.paper}
      bgImageClass={classes.image}
      btnText="Register"
      heading="Register"
      linkClass={classes.link}
      link={Link}
      inputVariant="outlined"
      handleSubmit={handleSubmit}
    >
      <CustomDatePicker
        inputVariant="outlined"
        openTo="year"
        views={["year", "month", "date"]}
        required
        field="dob"
        label="DOB"
      />

      <SelectInput
        required
        variant="outlined"
        className={classes.selectInput}
        field="gender"
        label="Gender"
        options={["MALE", "FEMALE", "OTHERS"]}
      />
    </RegisterScreen>
  );
};

export default App;

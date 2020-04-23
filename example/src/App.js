import React from "react";
import { ChatBubble } from "ui-components";
import { makeStyles, Link, Paper, Box, Button } from "@material-ui/core";

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
    <div style={{ width: "500px" }}>
      <ChatBubble
        handleClick={e => {
          console.log(e);
        }}
        messageType={"AUTOMATED"}
        actions={[
          { name: "Accept", actionUrl: "/yes" },
          { name: "Ask more related questions", actionUrl: "/no" }
        ]}
        text="Has the question been answered by the doctor ?"
        time="10:00 am"
      />
    </div>
  );
};

export default App;

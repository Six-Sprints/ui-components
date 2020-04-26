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
        // img={"https://material-ui.com/static/images/grid-list/breakfast.jpg"}
        messageType={"USER_GENERATED"}
        // actions={[
        //   { name: "Accept", actionUrl: "/yes" },
        //   { name: "Ask more", actionUrl: "/no" },
        //   { name: "Ask more", actionUrl: "/no" },
        //   { name: "Ask more", actionUrl: "/no" }
        // ]}
        text="Has the question been answered by the doctor ?"
        time="4/24/20 11:32 AM"
      />
      <ChatBubble
        handleClick={e => {
          console.log(e);
        }}
        left
        // img={"https://material-ui.com/static/images/grid-list/breakfast.jpg"}
        messageType={"AUTOMATED"}
        actions={[
          { name: "Accept", actionUrl: "/yes" },
          { name: "Ask more", actionUrl: "/no" }
        ]}
        text="Has the question been answered by the doctor ?"
        time="4/24/20 11:32 AM"
      />
      <ChatBubble
        handleClick={e => {
          console.log(e);
        }}
        left
        img={"https://material-ui.com/static/images/grid-list/breakfast.jpg"}
        messageType={"USER_GENERATED"}
        // actions={[
        //   { name: "Accept", actionUrl: "/yes" },
        //   { name: "Ask more", actionUrl: "/no" },
        //   { name: "Ask more", actionUrl: "/no" },
        //   { name: "Ask more", actionUrl: "/no" }
        // ]}
        // text="Has "
        time="4/24/20 11:32 AM"
      />
    </div>
  );
};

export default App;

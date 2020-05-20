import React, { useState } from "react";
import {
  ListItem,
  ChatBubble,
  SelectInput,
  InputNumber,
  TextAreaInput,
  TextInput,
  CustomDatePicker,
  OtpInput
} from "ui-components";
import { makeStyles, Link, Paper, Box, Button, TextareaAutosize } from "@material-ui/core";
import { Form } from "informed";

export function isRequired(value) {
  return value === null ||
    value === undefined ||
    ("" + value).trim().length <= 0
    ? "This field is required"
    : undefined;
}

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
    <div style={{ width: "400px" }}>
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
        text="Click here http://jyoti.admin.ec.dev.sixsprintscloud.com/"
        time="4/24/20 11:32 AM"
      />
      {/* <ChatBubble
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
      /> */}
      <OtpInput
        numInputs={5}
        inputStyle={{
          width: "2.8rem",
          height: "2.8rem",
          borderRadius: "5px",
          border: "1px solid #6D6d6d",
          margin: "auto 10px",
          outline: "none",
          fontSize: "16px",
          alignItems: "center",
        }}
        field="otp"
        separator={
          <span style={{ fontSize: "16px", color: "#6D6d6d" }}>+</span>
        }
      />
      <TextAreaInput
        field="hopi"
        placeholder="Type here"
      /> />
      <TextInput
        fullWidth
        required
        field="mobileNumber"
        type="number"
        label="Mobile Number"
        InputProps={{ inputProps: { min: 0 } }}
        validateOnBlur
        validateOnChange
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

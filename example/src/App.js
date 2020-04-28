import React from "react";
import {
  ListItem,
  ChatBubble,
  SelectInput,
  TextInput,
  TextAreaInput,
  CustomDatePicker
} from "ui-components";
import { makeStyles, Link, Paper, Box, Button } from "@material-ui/core";
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
      <ListItem
        handleClick={() => {}}
        name={"Deepak Paul"}
        mobileNumber="+917005612488"
        text={"Some text"}
        time={"12:30"}
        nameVariant="subtitle1"
      />
      {/* <ChatBubble
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
      /> */}
      {/* <Form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column
          "
          justifyContent="space-around"
          m={2}
        >
          <Box mb="0.5rem">
            <TextInput
              required
              field="name"
              type="text"
              label="Patient Name"
              validateOnBlur
              validateOnChange
            />
          </Box>

          <Box mb="0.5rem">
            <TextInput
              required
              field="mobileNumber"
              type="text"
              label="Patient Number"
              validateOnBlur
              validateOnChange
            />
          </Box>

          <CustomDatePicker
            validate={isRequired}
            containerClassName={"mr"}
            openTo="year"
            inputVariant="outlined"
            field="dob"
            label=" DOB"
            validateOnBlur
            validateOnChange
          />

          <SelectInput
            containerClassName={"mr"}
            options={["MALE"]}
            field="gender"
            validate={isRequired}
            placeholder="Gender"
            label="Gender"
            validateOnBlur
            validateOnChange
          />
          <TextAreaInput
            style={{ width: "200px" }}
            label="Type here"
            field="message"
            validate={isRequired}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </Form> */}
    </div>
  );
};

export default App;

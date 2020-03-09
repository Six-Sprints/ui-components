import React, { Component } from "react";
import { ListItem, LoginForm } from "ui-components";

export default class App extends Component {
  render() {
    return (
      // <div style={{ width: "400px" }}>
      //   <ListItem name="Dr. Tanwar" text="MBBS AIIMS Delhi" time="10:45 AM" />
      // </div>
      <LoginForm inputVariant="standard" />
    );
  }
}

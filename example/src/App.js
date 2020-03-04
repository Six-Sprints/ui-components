import React, { Component } from "react";
import { RegisterForm } from "ui-components";

export default class App extends Component {
  render() {
    return (
      <div>
        <RegisterForm heading="Sign Up" btnText="Sign Up" />
      </div>
    );
  }
}

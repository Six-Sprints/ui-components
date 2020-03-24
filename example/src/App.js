import React, { Component } from "react";
import { LoginForm, RegisterScreen } from "ui-components";

export default class App extends Component {
  handleSubmit = val => {
    console.log(val);
  };
  render() {
    return (
      <div>
        <RegisterScreen btnFullWidth />
      </div>
    );
  }
}

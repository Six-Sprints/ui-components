import React, { Component } from "react";
import { LoginForm } from "ui-components";

export default class App extends Component {
  handleSubmit = val => {
    console.log(val);
  };
  render() {
    return (
      <div>
        <LoginForm
          resetPasswordPath="/reset"
          registerPath="/register"
          logoClass="logo"
          logo="https://storage.googleapis.com/eclinic_assets/tenants/jyoti/logo.png"
        />
      </div>
    );
  }
}

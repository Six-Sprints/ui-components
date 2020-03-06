import React, { Component } from "react";
import { TextInput, LoginForm, SearchInput } from "ui-components";

export default class App extends Component {
  render() {
    return <LoginForm email={true} />;
  }
}

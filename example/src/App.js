import React, { Component } from "react";

import { LoginForm } from "ui-components";

export default class App extends Component {
  render() {
    return (
      <div>
        <LoginForm path="/" />
      </div>
    );
  }
}

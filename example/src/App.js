import React, { Component } from "react";
import { SearchInput, ListItem, LoginForm } from "ui-components";

export default class App extends Component {
  render() {
    return (
      <div style={{ width: "400px" }}>
        <SearchInput />
      </div>
    );
  }
}

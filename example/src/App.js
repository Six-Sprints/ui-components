import React, { Component } from "react";
import { SearchInput, ListItem, LoginForm } from "ui-components";

export default class App extends Component {
  handleSubmit = val => {
    console.log(val);
  };
  render() {
    return (
      <div style={{ width: "400px" }}>
        <SearchInput button onSearchSubmit={this.handleSubmit} />
      </div>
    );
  }
}

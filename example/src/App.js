import React, { Component } from "react";
import { LoginForm } from "ui-components";
import { ChatBubble } from "ui-components";

export default class App extends Component {
  render() {
    return (
      <div style={{ margin: "0 10%" }}>
        <ChatBubble
          text="Lorem Ipsum some random chat text ..."
          time="12:20 AM"
        />
      </div>
    );
  }
}

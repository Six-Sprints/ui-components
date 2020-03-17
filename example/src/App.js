import React, { Component } from "react";
import { RegisterForm, CustomDatePicker, SelectInput } from "ui-components";

export default class App extends Component {
  handleSubmit = val => {
    console.log(val);
  };
  render() {
    return (
      // <div style={{ width: "400px" }}>
      //   <SearchInput button onSearchSubmit={this.handleSubmit} />
      // </div>
      <div style={{ backgroundColor: "#F6F7FC" }}>
        <RegisterForm
          inputClassName="white-bg"
          initialValues={{ name: "Paul" }}
          handleSubmit={this.handleSubmit}
        >
          <CustomDatePicker
            minDate={new Date()}
            required
            className="white-bg"
            inputVariant="outlined"
            field="date"
            label="Appointment Date"
            validateOnBlur
            validateOnChange
          />

          <SelectInput
            required
            className="white-bg"
            containerClassName="mt"
            options={[]}
            labelKey="name"
            field="doctor"
            placeholder="Select Doctor"
            label="Doctor"
            validateOnBlur
            validateOnChange
          />
        </RegisterForm>
      </div>
    );
  }
}

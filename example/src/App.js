import React, { Component } from "react";
import {
  RegisterForm,
  CustomDatePicker,
  SelectInput,
  SearchInput
} from "ui-components";

export default class App extends Component {
  handleSubmit = val => {
    console.log(val);
  };
  render() {
    return (
      <div style={{ backgroundColor: "#F6F7FC" }}>
        <SearchInput placeholder="Search by UHID or Mobile Number" button />
        <RegisterForm
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
            options={["Doctor"]}
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

import React, { Component } from "react";
import { RegisterForm, CustomDatePicker, SelectInput } from "ui-components";

export default class App extends Component {
  render() {
    return (
      <RegisterForm>
        <CustomDatePicker
          inputVariant="outlined"
          openTo="year"
          views={["year", "month", "date"]}
          required
          field="dob"
          label="DOB"
        />

        <SelectInput
          required
          field="gender"
          label="Gender"
          options={["MALE", "FEMALE", "OTHERS"]}
        />
      </RegisterForm>
    );
  }
}

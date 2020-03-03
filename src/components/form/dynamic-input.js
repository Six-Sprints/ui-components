import React from "react";
import { ArrayField, Text } from "informed";
import { isRequired } from "../../utils/validations";

const DynamicInput = (fieldName, required, labelName, validate) => {
  return (
    <ArrayField field={fieldName} validate={validate}>
      {({ add, fields }) => (
        <>
          <label>
            {labelName} {required && "*"}
          </label>

          {fields.map(({ field, key, remove }, i) => (
            <label className="w-100" key={key}>
              {i + 1}:
              {required ? (
                <Text
                  validate={isRequired}
                  className="form-control"
                  field={field}
                />
              ) : (
                <Text className="form-control" field={field} />
              )}
              {i > 0 && (
                <button className="btn w-10" type="button" onClick={remove}>
                  Remove
                </button>
              )}
            </label>
          ))}
          <button className="btn btn-primary" onClick={add} type="button">
            Add Field
          </button>
        </>
      )}
    </ArrayField>
  );
};

export default DynamicInput;

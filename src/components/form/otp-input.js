import React from "react";
import { asField } from "informed";
import OtpInputField from "react-otp-input";

const OtpInput = asField(({ fieldState, fieldApi, ...props }) => {
    const {
        numInputs,
        separator,
        containerStyle,
        inputStyle,
        focusStyle,
        isDisabled,
        disabledStyle,
        hasErrored,
        errorStyle,
        shouldAutoFocus,
        isInputNum
    } = props;
    const { error, value } = fieldState;
    const { setValue, setTouched } = fieldApi;
    let ref = {};
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <OtpInputField
                numInputs={numInputs}
                value={value}
                inputStyle={inputStyle}
                containerStyle={containerStyle}
                inputStyle={inputStyle}
                focusStyle={focusStyle}
                isDisabled={isDisabled}
                disabledStyle={disabledStyle}
                hasErrored={hasErrored}
                errorStyle={errorStyle}
                shouldAutoFocus={shouldAutoFocus}
                isInputNum={isInputNum}
                onChange={e => {
                    setValue(e)
                }}
                separator={separator}
            />
        </div>
    );
});

export default OtpInput;
